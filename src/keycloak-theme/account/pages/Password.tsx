import type { PageProps } from "keycloakify/account/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function LogoutConfirm(props: PageProps<Extract<KcContext, { pageId: "password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;


    const { url, password, account, stateChecker } = kcContext;

    const { msg } = i18n;

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="password">
            <div className="row d-flex align-items-center">
                <div className="col-md-8">
                    <h2>{msg("changePasswordHtmlTitle")}</h2>
                </div>
                <div className="col-md-4 subtitle">
                    <span className="subtitle">{msg("allFieldsRequired")}</span>
                </div>
            </div>
            <form action={url.passwordUrl} className="form-horizontal mt-3" method="post">
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={account.username ?? ""}
                    autoComplete="username"
                    readOnly
                    style={{ "display": "none" }}
                />
                {password.passwordSet && (
                    <div className="form-group">
                        <label className="active control-label" htmlFor="password">{msg("password")}</label>
                        <input type="password" className="form-control" id="password" name="password" autoFocus autoComplete="current-password" />
                    </div>
                )}
                <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
                <div className="form-group">
                    <label className="active control-label" htmlFor="password-new">{msg("passwordNew")}</label>
                    <input type="password" className="form-control" id="password-new" name="password-new" autoComplete="new-password" aria-describedby="formGroupExampleInputWithHelpDescription"/>
                </div>
                <div className="form-group">
                    <label className="active control-label" htmlFor="password-confirm">{msg("passwordConfirm")}</label>
                    <input type="password" className="form-control" id="password-confirm" name="password-confirm" autoComplete="new-password" />
                </div>
                <div className="form-group">
                    <div id="kc-form-buttons" className="submit">
                        <div className="d-flex justify-content-end">
                            <button
                                type="submit"
                                className="btn btn-primary"
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
