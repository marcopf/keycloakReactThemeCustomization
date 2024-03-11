// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/account/TemplateProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, active, classes, children } = props;

    const { getClassName } = useGetClassName({ doUseDefaultCss, classes });

    const { msg } = i18n;

    const { url, features, realm, message } = kcContext;

    const { isReady } = usePrepareTemplate({
        "doFetchDefaultThemeResources": doUseDefaultCss,
        "styles": [
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
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
        <div className="it-header-slim-wrapper">
            <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="it-header-slim-wrapper-content">
                      <a className="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
                      <div className="nav-mobile">
                        <nav aria-label="Navigazione accessoria">
                          <a className="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1a" role="button" aria-expanded="false" aria-controls="menu4">
                            <span>Ente appartenenza</span>
                            <svg className="icon" aria-hidden="true"><use href="/assets/sprites.svg#it-expand"></use></svg>
                          </a>
                          <div className="link-list-wrapper collapse" id="menu1a">
                            <ul className="link-list">
                              <li><a className="dropdown-item list-item" href="#">Link 1</a></li>
                              <li><a className="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                      <div className="it-header-slim-right-zone">
                        <div className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Selezione lingua: lingua selezionata</span>
                            <span>ITA</span>
                            <svg className="icon d-none d-lg-block"><use href="/assets/sprites.svg#it-expand"></use></svg>
                          </a>
                          <div className="dropdown-menu">
                            <div className="row">
                              <div className="col-12">
                                <div className="link-list-wrapper">
                                  <ul className="link-list">
                                    <li><a className="dropdown-item list-item" href="#"><span>ITA <span className="visually-hidden">selezionata</span></span></a></li>
                                    <li><a className="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="it-access-top-wrapper">
                          <a className="btn btn-primary btn-sm" href="#">Accedi</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-header-center-wrapper it-small-header">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="it-header-center-content-wrapper">
                      <div className="it-brand-wrapper">
                        <a href="#">
                          <svg className="icon" aria-hidden="true">
                            <use href="/assets/sprites.svg#it-pa"></use>
                          </svg>
                          <div className="it-brand-text">
                            <div className="it-brand-title">Nome dell'Istituzione</div>
                            <div className="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                          </div>
                        </a>
                      </div>
                      <div className="it-right-zone">
                        <div className="it-socials d-none d-md-flex">
                          <span>Seguici su</span>
                          <ul>
                            <li>
                              <a href="#" aria-label="Facebook" target="_blank">
                                <svg className="icon">
                                  <use href="/assets/sprites.svg#it-facebook"></use>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#" aria-label="Github" target="_blank">
                                <svg className="icon">
                                  <use href="/assets/sprites.svg#it-github"></use>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#" aria-label="Twitter" target="_blank">
                                <svg className="icon">
                                  <use href="/assets/sprites.svg#it-twitter"></use>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="it-search-wrapper">
                          <span className="d-none d-md-block">Cerca</span>
                          <a className="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                            <svg className="icon">
                              <use href="/assets/sprites.svg#it-search"></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid m-0">
                <div className="row">
                    <div className="sidebar-wrapper theme-dark col-3">
                        <h3>Header</h3>
                        <div className="sidebar-linklist-wrapper">
                            <div className="link-list-wrapper">
                                <ul className="link-list">
                                    <li className={clsx(active === "account" && "active")}>
                                        <a href={url.accountUrl}>{msg("account")}</a>
                                    </li>
                                    {features.passwordUpdateSupported && (
                                        <li className={clsx(active === "password" && "active")}>
                                            <a className="list-item medium" href={url.passwordUrl}>{msg("password")}</a>
                                        </li>
                                    )}
                                        {/* <li className={clsx(active === "totp" && "active")}>
                                            <a className="list-item medium" href={url.totpUrl}>{msg("authenticator")}</a>
                                        </li> */}
                                    {features.identityFederation && (
                                        <li className={clsx(active === "social" && "active")}>
                                            <a className="list-item medium" href={url.socialUrl}>{msg("federatedIdentity")}</a>
                                        </li>
                                    )}
                                        <li className={clsx(active === "sessions" && "active")}>
                                            <a className="list-item medium" href={url.sessionsUrl}>{msg("sessions")}</a>
                                        </li>
                                    <li className={clsx(active === "applications" && "active")}>
                                        <a className="list-item medium" href={url.applicationsUrl}>{msg("applications")}</a>
                                    </li>
                                    {features.log && (
                                        <li className={clsx(active === "log" && "active")}>
                                            <a className="list-item medium" href={url.logUrl}>{msg("log")}</a>
                                        </li>
                                    )}
                                    {realm.userManagedAccessAllowed && features.authorization && (
                                        <li className={clsx(active === "authorization" && "active")}>
                                            <a className="list-item medium" href={url.resourceUrl}>{msg("myResources")}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 content-area">
                        {message !== undefined && (
                            <div className={clsx("alert", `alert-${message.type}`)}>
                                {message.type === "success" && <span className="pficon pficon-ok"></span>}
                                {message.type === "error" && <span className="pficon pficon-error-circle-o"></span>}
                                <span className="kc-feedback-text">{message.summary}</span>
                            </div>
                        )}
                        <div className="row">
                            <div className="col-12">
                                <div className="card-wrapper p-5 shadow">
                                    <div className="card">
                                        <div className="card-body">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
