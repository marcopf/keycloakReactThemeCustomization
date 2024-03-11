import { type UserProvidedBuildOptions } from "./UserProvidedBuildOptions";
export type ParsedPackageJson = {
    name: string;
    version?: string;
    homepage?: string;
    keycloakify?: UserProvidedBuildOptions;
};
export declare function readParsedPackageJson(params: {
    reactAppRootDirPath: string;
}): ParsedPackageJson;
