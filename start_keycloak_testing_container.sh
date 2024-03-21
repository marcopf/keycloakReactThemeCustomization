#!/usr/bin/env bash

docker rm keycloak-testing-container || true

cd "/home/marco/Documenti/mase_folder/keycloakReactThemeCustomization/dist_keycloak"

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -v "$(pwd)/target/testing-keycloak-theme-6.1.3.jar":"/opt/keycloak/providers/testing-keycloak-theme-6.1.3.jar" \
   -v "$(pwd)/src/main/resources/theme/account-v1":"/opt/keycloak/themes/account-v1":rw \
   -v "$(pwd)/src/main/resources/theme/testing":"/opt/keycloak/themes/testing":rw \
   -v "$(pwd)/src/main/resources/theme/testing_retrocompat":"/opt/keycloak/themes/testing_retrocompat":rw \
   -it quay.io/keycloak/keycloak:24.0 \
   start-dev 
