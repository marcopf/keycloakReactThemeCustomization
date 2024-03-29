import type { PageProps } from "keycloakify/account/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import OtpSection from './OtpSection'
import sprites from './../assets/sprites.svg'

export default function LogoutConfirm(fprops: any) {
    let props = fprops as PageProps<Extract<KcContext, { pageId: "password.ftl" }>, I18n>
    console.log(fprops, props)
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
                    <span className="subtitle">*{msg("requiredFields")}</span>
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
                        <label htmlFor="password">{msg("password")}</label>
                        <input type="password" data-bs-input className="form-control input-password" id="password" name="password" aria-labelledby="infoPassword"/>
                        <span className="password-icon" aria-hidden="true">
                          <svg className="password-icon-visible icon icon-sm"><use href={sprites + '#it-password-visible'}></use></svg>
                          <svg className="password-icon-invisible icon icon-sm d-none"><use href={sprites + "#it-password-invisible"}></use></svg>
                        </span>
                    </div>
                )}
                <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />

                <div className="form-group">
                    <label htmlFor="password-new">{msg("passwordNew")}</label>
                    <input type="password" data-bs-input className="form-control input-password" id="password-new" name="password-new" aria-labelledby="infoPassword"/>
                    <span className="password-icon" aria-hidden="true">
                      <svg className="password-icon-visible icon icon-sm"><use href={sprites + '#it-password-visible'}></use></svg>
                      <svg className="password-icon-invisible icon icon-sm d-none"><use href={sprites + "#it-password-invisible"}></use></svg>
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm">{msg("passwordConfirm")}</label>
                    <input type="password" data-bs-input className="form-control input-password" id="password-confirm" name="password-confirm" aria-labelledby="infoPassword"/>
                    <span className="password-icon" aria-hidden="true">
                      <svg className="password-icon-visible icon icon-sm"><use href={sprites + '#it-password-visible'}></use></svg>
                      <svg className="password-icon-invisible icon icon-sm d-none"><use href={sprites + "#it-password-invisible"}></use></svg>
                    </span>
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
            <OtpSection message={msg}></OtpSection>
        </Template>
    );
}
