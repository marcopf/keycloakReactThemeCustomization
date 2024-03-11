import "./KcApp.css";
import { lazy, Suspense } from "react";
import type { PageProps } from "keycloakify/account";
import type { KcContext } from "./kcContext";
import { useI18n } from "./i18n";
import Template from "./Template";

const Password = lazy(() => import("./pages/Password"));
const Account = lazy(() => import("./pages/Account"));
const Applications = lazy(() => import("./pages/Applications"));
const Sessions = lazy(() => import("./pages/Sessions"));
const Totp = lazy(() => import("./pages/Totp"));
const MyExtraPage1 = lazy(() => import("./pages/MyExtraPage1"));
const MyExtraPage2 = lazy(() => import("./pages/MyExtraPage2"));
const Fallback = lazy(()=> import("keycloakify/account"));

const classes = {
    "kcBodyClass": "my-root-account-class"
} satisfies PageProps["classes"];

export default function KcApp(props: { kcContext: KcContext; }) {

    const { kcContext } = props;

    const i18n = useI18n({ kcContext });

    if (i18n === null) {
        return null;
    }

    return (
        <Suspense>
            {(() => {
                console.log(kcContext.pageId)
                switch (kcContext.pageId) {
                    case "password.ftl": return <Password {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "account.ftl": return <Account {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "applications.ftl": return <Applications {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "sessions.ftl": return <Sessions {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "totp.ftl": return <Totp {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "my-extra-page-1.ftl": return <MyExtraPage1 {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    case "my-extra-page-2.ftl": return <MyExtraPage2 {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    default: return <Fallback {...{ kcContext, i18n, classes }} Template={Template} doUseDefaultCss={true} />;
                }
            })()}
        </Suspense>
    );

}
