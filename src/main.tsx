import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { kcContext as kcAccountThemeContext } from "./keycloak-theme/account/kcContext";

const KcAccountThemeApp = lazy(() => import("./keycloak-theme/account/KcApp"));

// Important note:
// In this starter example we show how you can have your react app and your Keycloak theme in the same repo.  
// Most Keycloakify user only want to great a Keycloak theme.  
// If this is your case run the few commands that will remover everything that is not strictly related to the 
//Keycloak theme:
// https://github.com/keycloakify/keycloakify-starter?tab=readme-ov-file#i-only-want-a-keycloak-theme
const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense>
            {(()=>{
                if( kcAccountThemeContext !== undefined ){
                    return <KcAccountThemeApp kcContext={kcAccountThemeContext} />;
                }

                return <App />;

            })()}
        </Suspense>
    </StrictMode>
);

