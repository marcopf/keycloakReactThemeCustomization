// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/account/TemplateProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, classes, children } = props;

    const { getClassName } = useGetClassName({ doUseDefaultCss, classes });

    const { msg } = i18n;

    const { url, features, realm, message } = kcContext;

    const { isReady } = usePrepareTemplate({
        "doFetchDefaultThemeResources": doUseDefaultCss,
        "styles": [
            `${url.resourcesPath}/css/account.css`
        ],
        "htmlClassName": getClassName("kcHtmlClass"),
        "bodyClassName": clsx("admin-console", "user", getClassName("kcBodyClass"))
    });
    if (!isReady) {
        return null;
    }

    return (
      <>
        <Header props={props}></Header>
        <div className="bd-example-tabs container-fluid">
          <div className="row">
            <div className="col-4 col-md-3">
              <div className="nav nav-tabs nav-tabs-vertical nav-tabs-vertical-background" id="nav-vertical-tab-bg" role="tablist" aria-orientation="vertical">
                {
                  kcContext.pageId == "account.ftl" ? <a className="nav-link active" href={url.accountUrl}>{msg("account")}</a> : <a className="nav-link" href={url.accountUrl}>{msg("account")}</a>
                }
                {features.passwordUpdateSupported && (
                    kcContext.pageId == "password.ftl" ? <a className="nav-link active" href={url.passwordUrl}>{msg("password")}</a> : <a className="nav-link" href={url.passwordUrl}>{msg("password")}</a>
                )}
                {features.identityFederation && (
                      <a className="nav-link" href={url.socialUrl}>{msg("federatedIdentity")}</a>
                )}
                {
                  kcContext.pageId == "sessions.ftl" ? <a className="nav-link active" aria-selected="true" href={url.sessionsUrl}>{msg("sessions")}</a> : <a className="nav-link" aria-selected="false" href={url.sessionsUrl}>{msg("sessions")}</a>
                }
                {
                  kcContext.pageId == "applications.ftl" ? <a className="nav-link active" aria-selected="true" href={url.applicationsUrl}>{msg("applications")}</a> : <a className="nav-link" aria-selected="true" href={url.applicationsUrl}>{msg("applications")}</a>
                }
                {
                  kcContext.pageId == "totp.ftl" ? <a className="nav-link active" href={url.totpUrl}>Totp</a> : <a className="nav-link" href={url.totpUrl}>Totp</a>
                }
                {features.log && (
                  kcContext.pageId == "log.ftl" ? <a className="nav-link active" href={url.logUrl}>{msg("log")}</a> : <a className="nav-link" href={url.logUrl}>{msg("log")}</a>
                )}
                {realm.userManagedAccessAllowed && features.authorization && (
                  window.location.href == url.resourceUrl ? <a className="nav-link active" href={url.resourceUrl}>{msg("myResources")}</a> : <a className="nav-link" href={url.resourceUrl}>{msg("myResources")}</a>
                )}
              </div>
            </div>
            <div className="col-8 col-md-9">
              <div className="tab-content px-5 pb-5" id="nav-vertical-tab-bgContent">
                <div className="tab-pane p-3 fade show active" id="nav-vertical-tab-bg1" role="tabpanel" aria-labelledby="nav-vertical-tab-bg1-tab">
                  <div className="col-sm-12 content-area">
                      {message !== undefined && (
                          <div className={clsx("alert", `alert-${message.type}`, message.type == 'error' ? 'alert-danger' : '')}>
                              {message.type === "success" && <span className="pficon pficon-ok"></span>}
                              {message.type === "error" && <span className="pficon pficon-error-circle-o"></span>}
                              <span className="kc-feedback-text">{message.summary}</span>
                          </div>
                      )}
                      <div className="row justify-content-center">
                          <div className="col-12 rounded-3 p-5 shadow text-primary">
                            {children}
                          </div>
                      </div>
                  </div>
                </div>
                <div className="tab-pane p-3 fade" id="nav-vertical-tab-bg2" role="tabpanel" aria-labelledby="nav-vertical-tab-bg2-tab">Contenuto 2</div>
                <div className="tab-pane p-3 fade" id="nav-vertical-tab-bg3" role="tabpanel" aria-labelledby="nav-vertical-tab-bg3-tab">Contenuto 3</div>
              </div>
            </div>
          </div>
        </div>
        <Footer props={props}></Footer>
      </>
    );
}
