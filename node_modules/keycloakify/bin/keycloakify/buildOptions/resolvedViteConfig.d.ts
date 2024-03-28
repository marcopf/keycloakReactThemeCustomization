import { UserProvidedBuildOptions } from "./UserProvidedBuildOptions";
export type ResolvedViteConfig = {
    buildDir: string;
    publicDir: string;
    assetsDir: string;
    urlPathname: string | undefined;
    userProvidedBuildOptions: UserProvidedBuildOptions;
};
export declare function readResolvedViteConfig(params: {
    cacheDirPath: string;
}): {
    resolvedViteConfig: ResolvedViteConfig | undefined;
};
