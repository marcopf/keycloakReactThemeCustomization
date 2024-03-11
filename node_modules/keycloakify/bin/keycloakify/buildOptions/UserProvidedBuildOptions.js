"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zUserProvidedBuildOptions = void 0;
var zod_1 = require("zod");
exports.zUserProvidedBuildOptions = zod_1.z.object({
    "extraThemeProperties": zod_1.z.array(zod_1.z.string()).optional(),
    "artifactId": zod_1.z.string().optional(),
    "groupId": zod_1.z.string().optional(),
    "doCreateJar": zod_1.z.boolean().optional(),
    "loginThemeResourcesFromKeycloakVersion": zod_1.z.string().optional(),
    "reactAppBuildDirPath": zod_1.z.string().optional(),
    "keycloakifyBuildDirPath": zod_1.z.string().optional(),
    "themeName": zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    "doBuildRetrocompatAccountTheme": zod_1.z.boolean().optional()
});
//# sourceMappingURL=UserProvidedBuildOptions.js.map