"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloakify = void 0;
const path_1 = require("path");
const fs = __importStar(require("fs"));
const constants_1 = require("../bin/constants");
const getCacheDirPath_1 = require("../bin/keycloakify/buildOptions/getCacheDirPath");
const id_1 = require("tsafe/id");
const fs_rm_1 = require("../bin/tools/fs.rm");
const copy_keycloak_resources_to_public_1 = require("../bin/copy-keycloak-resources-to-public");
const assert_1 = require("tsafe/assert");
const magic_string_1 = __importDefault(require("magic-string"));
function keycloakify(params) {
    const { postBuild, ...userProvidedBuildOptions } = params !== null && params !== void 0 ? params : {};
    let reactAppRootDirPath = undefined;
    let urlPathname = undefined;
    let buildDirPath = undefined;
    let command = undefined;
    let shouldGenerateSourcemap = undefined;
    const plugin = {
        "name": "keycloakify",
        "configResolved": async (resolvedConfig) => {
            shouldGenerateSourcemap = resolvedConfig.build.sourcemap !== false;
            run_post_build_script: {
                const buildOptionJson = process.env[constants_1.keycloakifyBuildOptionsForPostPostBuildScriptEnvName];
                if (buildOptionJson === undefined) {
                    break run_post_build_script;
                }
                if (postBuild === undefined) {
                    process.exit(0);
                }
                const buildOptions = JSON.parse(buildOptionJson);
                await postBuild(buildOptions);
                process.exit(0);
            }
            command = resolvedConfig.command;
            reactAppRootDirPath = resolvedConfig.root;
            urlPathname = (() => {
                var _a;
                let out = resolvedConfig.env.BASE_URL;
                if (out.startsWith(".") && command === "build" && ((_a = resolvedConfig.envPrefix) === null || _a === void 0 ? void 0 : _a.includes("STORYBOOK_")) !== true) {
                    throw new Error([
                        `BASE_URL=${out} is not supported By Keycloakify. Use an absolute URL instead.`,
                        `If this is a problem, please open an issue at https://github.com/keycloakify/keycloakify/issues/new`
                    ].join("\n"));
                }
                if (out === undefined) {
                    return undefined;
                }
                if (!out.startsWith("/")) {
                    out = "/" + out;
                }
                if (!out.endsWith("/")) {
                    out += "/";
                }
                return out;
            })();
            buildDirPath = (0, path_1.join)(reactAppRootDirPath, resolvedConfig.build.outDir);
            const { cacheDirPath } = (0, getCacheDirPath_1.getCacheDirPath)({
                reactAppRootDirPath
            });
            if (!fs.existsSync(cacheDirPath)) {
                fs.mkdirSync(cacheDirPath, { "recursive": true });
            }
            fs.writeFileSync((0, path_1.join)(cacheDirPath, constants_1.resolvedViteConfigJsonBasename), Buffer.from(JSON.stringify((0, id_1.id)({
                "publicDir": (0, path_1.relative)(reactAppRootDirPath, resolvedConfig.publicDir),
                "assetsDir": resolvedConfig.build.assetsDir,
                "buildDir": resolvedConfig.build.outDir,
                urlPathname,
                userProvidedBuildOptions
            }), null, 2), "utf8"));
            await (0, copy_keycloak_resources_to_public_1.copyKeycloakResourcesToPublic)({
                "processArgv": ["--project", reactAppRootDirPath]
            });
        },
        "transform": (code, id) => {
            (0, assert_1.assert)(command !== undefined);
            (0, assert_1.assert)(shouldGenerateSourcemap !== undefined);
            if (command !== "build") {
                return;
            }
            (0, assert_1.assert)(reactAppRootDirPath !== undefined);
            {
                const isWithinSourceDirectory = id.startsWith((0, path_1.join)(reactAppRootDirPath, "src") + path_1.sep);
                if (!isWithinSourceDirectory) {
                    return;
                }
            }
            {
                const isJavascriptFile = id.endsWith(".js") || id.endsWith(".jsx");
                const isTypeScriptFile = id.endsWith(".ts") || id.endsWith(".tsx");
                if (!isTypeScriptFile && !isJavascriptFile) {
                    return;
                }
            }
            const transformedCode = new magic_string_1.default(code);
            transformedCode.replaceAll(/import\.meta\.env(?:(?:\.BASE_URL)|(?:\["BASE_URL"\]))/g, [
                `(`,
                `(window.${constants_1.nameOfTheGlobal} === undefined || import.meta.env.MODE === "development")?`,
                `"${urlPathname !== null && urlPathname !== void 0 ? urlPathname : "/"}":`,
                `(window.${constants_1.nameOfTheGlobal}.url.resourcesPath + "/${constants_1.basenameOfTheKeycloakifyResourcesDir}/")`,
                `)`
            ].join(""));
            if (!transformedCode.hasChanged()) {
                return;
            }
            if (!shouldGenerateSourcemap) {
                return transformedCode.toString();
            }
            const map = transformedCode.generateMap({
                "source": id,
                "includeContent": true,
                "hires": true
            });
            return {
                "code": transformedCode.toString(),
                "map": map.toString()
            };
        },
        "closeBundle": async () => {
            (0, assert_1.assert)(command !== undefined);
            if (command !== "build") {
                return;
            }
            (0, assert_1.assert)(buildDirPath !== undefined);
            await (0, fs_rm_1.rm)((0, path_1.join)(buildDirPath, constants_1.keycloak_resources), { "recursive": true, "force": true });
        }
    };
    return plugin;
}
exports.keycloakify = keycloakify;
//# sourceMappingURL=vite-plugin.js.map