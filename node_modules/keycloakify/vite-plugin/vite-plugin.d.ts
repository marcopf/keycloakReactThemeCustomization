import type { BuildOptions } from "../bin/keycloakify/buildOptions";
import type { UserProvidedBuildOptions } from "../bin/keycloakify/buildOptions/UserProvidedBuildOptions";
export type Params = UserProvidedBuildOptions & {
    postBuild?: (buildOptions: Omit<BuildOptions, "bundler">) => Promise<void>;
};
export declare function keycloakify(params?: Params): any;
