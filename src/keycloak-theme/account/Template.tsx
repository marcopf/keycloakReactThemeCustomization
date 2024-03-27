// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/account/TemplateProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";
import Header from "./Header";
import Footer from "./Footer";
import sprites from './assets/sprites.svg'


export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, classes, children } = props;

    const { getClassName } = useGetClassName({ doUseDefaultCss, classes });

    const { msg } = i18n;

    const { url, message } = kcContext;

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
        <div className="bd-example-tabs container-fluid" style={{minHeight: "90svh"}}>
          <div className="row">
            <div className="col-4 col-md-3">
              <div className="sidebar-wrapper">
                <h3>Account Console</h3>
                <div className="sidebar-linklist-wrapper">
                  <div className="link-list-wrapper">
                    <ul className="link-list">
                      <li>
                        { kcContext.pageId == "account.ftl" ? 
                          <a className="list-item large medium right-icon active" href={url.accountUrl}><span>{msg("account")}</span></a>
                        :
                          <a className="list-item large medium right-icon" href={url.accountUrl}><span>{msg("account")}</span></a>
                        }
                      </li>
                      <li>
                        <a className={"list-item large medium right-icon " + (kcContext.pageId == "sessions.ftl" || kcContext.pageId == "password.ftl" || kcContext.pageId == "totp.ftl" ? 'active' : '')} href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded={kcContext.pageId == "sessions.ftl" || kcContext.pageId == "password.ftl" ? 'true' : 'false'} aria-controls="collapseOne">
                        <span className="list-item-title-icon-wrapper">
                          <span>{msg("accountSecurity")}</span>
                          <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href={sprites + '#it-expand'}></use></svg>
                        </span>
                        </a>
                        <ul className={"link-sublist collapse " + (kcContext.pageId == "sessions.ftl" || kcContext.pageId == "password.ftl" || kcContext.pageId == "totp.ftl" ? 'show' : '')} id="collapseOne">
                          <li>
                            { kcContext.pageId == "password.ftl" ? 
                              <a className="list-item large medium right-icon active" href={url.passwordUrl}><span>{msg("password")}</span></a>
                            :
                              <a className="list-item large medium right-icon" href={url.passwordUrl}><span>{msg("password")}</span></a>
                            }
                          </li>
                          <li>
                            { kcContext.pageId == "totp.ftl" ? 
                              <a className="list-item large medium right-icon active" href={url.totpUrl}><span>Totp</span></a>
                            :
                              <a className="list-item large medium right-icon" href={url.totpUrl}><span>Totp</span></a>
                            }
                          </li>
                          <li>
                            { kcContext.pageId == "sessions.ftl" ? 
                              <a className="list-item large medium right-icon active" href={url.sessionsUrl}><span>{msg("sessions")}</span></a>
                            :
                              <a className="list-item large medium right-icon" href={url.sessionsUrl}><span>{msg("sessions")}</span></a>
                            }
                          </li>
                        </ul>
                      </li>
                      <li>
                        { kcContext.pageId == "applications.ftl" ? 
                          <a className="list-item large medium right-icon active" href={url.applicationsUrl}><span>{msg("applications")}</span></a>
                        :
                          <a className="list-item large medium right-icon" href={url.applicationsUrl}><span>{msg("applications")}</span></a>
                        }
                      </li>
                    </ul>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <Footer props={props}></Footer>
      </>
    );
}
