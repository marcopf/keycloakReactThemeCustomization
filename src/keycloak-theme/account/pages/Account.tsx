import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/account/pages/PageProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import BuildForm from "./DynamicAttribute";

export default function Account(props: PageProps<Extract<KcContext, { pageId: "account.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        "classes": {
            ...classes,
            "kcBodyClass": clsx(classes?.kcBodyClass, "user")
        }
    });

    const { url, realm, messagesPerField, stateChecker, account, referrer } = kcContext;

    const { msg } = i18n;

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="account">
            <div className="row d-flex align-items-center">
                <div className="col-md-8">
                    <h2>{msg("editAccountHtmlTitle")}</h2>
                </div>
                <div className="col-md-4 subtitle">
                    <span className="subtitle">
                        <span className="required">*</span> {msg("requiredFields")}
                    </span>
                </div>
            </div>
            <form action={url.accountUrl} className="form-horizontal mt-3" method="post">
                <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-tab1-tab" data-bs-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">{msg("defaultAttributes")}</a>
                    <a className="nav-item nav-link" id="nav-tab2-tab" data-bs-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false">{msg("additionalAttributes")}</a>
                  </div>
                </nav>
                <div className="tab-content pt-5" id="nav-tabContent">
                  <div className="tab-pane p-0 fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">

                    <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />

                    {!realm.registrationEmailAsUsername && (
                        <div className={clsx("form-group", messagesPerField.printIfExists("username", "has-error"))}>
                            <div className="form-group">
                                <label className="active control-label" htmlFor="username">{msg("username")}</label>
                                {realm.editUsernameAllowed && <span className="required">*</span>}
                                <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        disabled={!realm.editUsernameAllowed}
                                        defaultValue={account.username ?? ""}
                                />
                            </div>
                        </div>
                    )}
                    <div className={clsx("form-group", messagesPerField.printIfExists("email", "has-error"))}>
                        <label className="active control-label" htmlFor="email">{msg("email")}</label>
                        <input type="text" className="form-control" id="email" name="email" defaultValue={account.email ?? ""} />
                    </div>
                    <div className={clsx("form-group", messagesPerField.printIfExists("lastName", "has-error"))}>
                        <label className="active control-label" htmlFor="firstName">{msg("firstName")}</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" defaultValue={account.firstName ?? ""} />
                    </div>
                    <div className={clsx("form-group", messagesPerField.printIfExists("lastName", "has-error"))}>
                        <label className="active control-label" htmlFor="lastName">{msg("lastName")}</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" defaultValue={account.lastName ?? ""} />
                    </div>

                  </div>
                  <div className="tab-pane p-0 fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">
                    <BuildForm></BuildForm>
                  </div>
                </div>

                <div className="form-group d-flex justify-content-end">
                    <div id="kc-form-buttons" className="col-md-offset-2 col-md-10 submit">
                        <div className="d-flex justify-content-end align-items-center">
                            {referrer !== undefined && <a className="m-3" href={referrer?.url}>{msg("backToApplication")}</a>}
                            <button
                                type="submit"
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonDefaultClass"),
                                    getClassName("kcButtonLargeClass"),
                                    "m-3"
                                )}
                                name="submitAction"
                                value="Cancel"
                            >
                                {msg("doCancel")}
                            </button>
                            <button
                                type="submit"
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonPrimaryClass"),
                                    getClassName("kcButtonLargeClass"),
                                    "m-3"
                                )}
                                name="submitAction"
                                value="Save"
                            >
                                {msg("doSave")}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Template>
    );
}
