import { z } from "zod";
export type UserProvidedBuildOptions = {
    extraThemeProperties?: string[];
    artifactId?: string;
    groupId?: string;
    doCreateJar?: boolean;
    loginThemeResourcesFromKeycloakVersion?: string;
    reactAppBuildDirPath?: string;
    keycloakifyBuildDirPath?: string;
    themeName?: string | string[];
    doBuildRetrocompatAccountTheme?: boolean;
};
export declare const zUserProvidedBuildOptions: z.ZodObject<{
    extraThemeProperties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    artifactId: z.ZodOptional<z.ZodString>;
    groupId: z.ZodOptional<z.ZodString>;
    doCreateJar: z.ZodOptional<z.ZodBoolean>;
    loginThemeResourcesFromKeycloakVersion: z.ZodOptional<z.ZodString>;
    reactAppBuildDirPath: z.ZodOptional<z.ZodString>;
    keycloakifyBuildDirPath: z.ZodOptional<z.ZodString>;
    themeName: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    doBuildRetrocompatAccountTheme: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    extraThemeProperties?: string[] | undefined;
    artifactId?: string | undefined;
    groupId?: string | undefined;
    doCreateJar?: boolean | undefined;
    loginThemeResourcesFromKeycloakVersion?: string | undefined;
    reactAppBuildDirPath?: string | undefined;
    keycloakifyBuildDirPath?: string | undefined;
    themeName?: string | string[] | undefined;
    doBuildRetrocompatAccountTheme?: boolean | undefined;
}, {
    extraThemeProperties?: string[] | undefined;
    artifactId?: string | undefined;
    groupId?: string | undefined;
    doCreateJar?: boolean | undefined;
    loginThemeResourcesFromKeycloakVersion?: string | undefined;
    reactAppBuildDirPath?: string | undefined;
    keycloakifyBuildDirPath?: string | undefined;
    themeName?: string | string[] | undefined;
    doBuildRetrocompatAccountTheme?: boolean | undefined;
}>;
