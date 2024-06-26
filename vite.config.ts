import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// NOTE: This is just for the Keycloakify core contributors to be able to dynamically link
// to a local version of the keycloakify package. This is not needed for normal usage.
import commonjs from "vite-plugin-commonjs";
import { keycloakify } from "keycloakify/vite-plugin";

const PROTOCOL = 'http';
const IP = 'localhost'
const PORT = '8080'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    commonjs(), 
    keycloakify({
      // See: https://docs.keycloakify.dev/build-options#themename
      themeName: "testing",
      // See: https://docs.keycloakify.dev/environnement-variables
      extraThemeProperties: [
        "MY_ENV_VARIABLE=${env.MY_ENV_VARIABLE:}",
        
        `WELL_KNOWN_API=${PROTOCOL}://${IP}:${PORT}/realms/master/.well-known/openid-configuration`,
        `OTP_INFO_ENDPOINT=${PROTOCOL}://${IP}:${PORT}/realms/master/account/credentials/`,
        `USER_ATTRIBUTE_ENDPOINT=${PROTOCOL}://${IP}:${PORT}/realms/master/account/?userProfileMetadata=true`,
      ],
      // This is a hook that will be called after the build is done
      // but before the jar is created.  
      // You can use it to add/remove/edit your theme files.  
      postBuild: async keycloakifyBuildOptions => {

        const fs = await import("fs/promises");
        const path = await import("path");

        await fs.writeFile(
          path.join(keycloakifyBuildOptions.keycloakifyBuildDirPath, "foo.txt"),
          Buffer.from(
            [
            "This file was created by the postBuild hook of the keycloakify vite plugin", 
            "",
            "Resolved keycloakifyBuildOptions:",
            "",
            JSON.stringify(keycloakifyBuildOptions, null, 2),
            ""
            ].join("\n"),
            "utf8"
          )
        );

      }
    })
  ],
  /* 
   * Uncomment this if you want to use the default domain provided by GitHub Pages
   * replace "keycloakify-starter" with your repository name.  
   * This is only relevent if you are building an Wep App + A Keycloak theme.
   * If you are only building a Keycloak theme, you can ignore this.  
   */
  //base: "/keycloakify-starter/"
  build: {
    sourcemap: true
  }
})
