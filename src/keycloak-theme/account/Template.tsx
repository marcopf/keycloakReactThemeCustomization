// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/account/TemplateProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";
import pngUrl from './assets/maseLogo.png'
import sprites from './assets/sprites.svg'

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, active, classes, children } = props;

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
                            <svg className="icon" aria-hidden="true"><use href={sprites + "#it-expand"}></use></svg>
                          </a>
                        </nav>
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
                          <img className="icon" src={pngUrl} alt="" />
                          <div className="it-brand-text">
                            <div className="it-brand-title">{i18n.msg("enteDiAppartenenza")}</div>
                            <div className="it-brand-tagline d-none d-md-block">{i18n.msg("tagLineIstituzione")}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-header-navbar-wrapper primary-bg-a8">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button className="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav1">
            <svg className="icon bg-override"><use href={sprites + '#it-burger'}></use></svg>
          </button>
          <div className="navbar-collapsable" id="nav1" style={{display: 'none'}}>
            <div className="overlay" style={{display: 'none'}}></div>
            <div className="close-div">
              <button className="btn close-menu" type="button">
                <svg className="icon"><use href={sprites + '#it-close-big'}></use></svg>
              </button>
            </div>
            <div className="menu-wrapper">
              <ul className="navbar-nav">
                <li className={clsx(active === "account" && "active", "nav-item active")}>
                  <a className="nav-link" href={url.accountUrl}>{msg("account")}</a>
                </li>
                {features.passwordUpdateSupported && (
                  <li className={clsx(active === "password" && "active", "nav-item active")}>
                      <a className="nav-link" href={url.passwordUrl}>{msg("password")}</a>
                  </li>
                )}
                {features.identityFederation && (
                  <li className={clsx(active === "social" && "active", "nav-item active")}>
                      <a className="nav-link" href={url.socialUrl}>{msg("federatedIdentity")}</a>
                  </li>
                )}
                <li className={clsx(active === "sessions" && "active", "nav-item active")}>
                    <a className="nav-link" href={url.sessionsUrl}>{msg("sessions")}</a>
                </li>
                <li className={clsx(active === "applications" && "active", "nav-item active")}>
                    <a className="nav-link" href={url.applicationsUrl}>{msg("applications")}</a>
                </li>
                {features.log && (
                    <li className={clsx(active === "log" && "active", "nav-item active")}>
                        <a className="nav-link" href={url.logUrl}>{msg("log")}</a>
                    </li>
                )}
                {realm.userManagedAccessAllowed && features.authorization && (
                    <li className={clsx(active === "authorization" && "active", "nav-item active")}>
                        <a className="nav-link" href={url.resourceUrl}>{msg("myResources")}</a>
                    </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
            <div className="container-fluid m-0">
                <div className="row content-body">
                    <div className="col-sm-12 content-area">
                        {message !== undefined && (
                            <div className={clsx("alert", `alert-${message.type}`)}>
                                {message.type === "success" && <span className="pficon pficon-ok"></span>}
                                {message.type === "error" && <span className="pficon pficon-error-circle-o"></span>}
                                <span className="kc-feedback-text">{message.summary}</span>
                            </div>
                        )}
                        <div className="row justify-content-center">
                            <div className="col-6 rounded-3 m-5 p-4 shadow text-primary">
                              {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="it-footer">
  <div className="it-footer-main">
    <div className="container">
      <section>
        <div className="row clearfix">
          <div className="col-sm-12">
            <div className="it-brand-wrapper">
              <a href="#" data-focus-mouse="false">
                <svg className="icon"></svg>
                <div className="it-brand-text">
                  <h2>Lorem Ipsum</h2>
                  <h3 className="d-none d-md-block">Inserire qui la tag line</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-white border-top">
        <div className="row">
          <div className="col-lg-4 col-md-4 pb-2">
            <h4><a href="#" title="Vai alla pagina: Contatti">Contatti</a></h4>
            <p>
              Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
            </p>
            <div className="link-list-wrapper">
              <ul className="footer-list link-list clearfix">
                <li><a className="list-item" href="#" title="Vai alla pagina: Posta Elettronica Certificata">Posta Elettronica Certificata</a></li>
                <li>
                  <a className="list-item" href="#" title="Vai alla pagina: URP - Ufficio Relazioni con il Pubblico">URP - Ufficio Relazioni con il Pubblico</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 pb-2">
            <h4><a href="#" title="Vai alla pagina: Lorem Ipsum">Lorem Ipsum</a></h4>
          </div>
          <div className="col-lg-4 col-md-4 pb-2">
            <div className="pb-2">
              <h4><a href="#" title="Vai alla pagina: Seguici su">Seguici su</a></h4>
              <ul className="list-inline text-left social">
                <li className="list-inline-item">
                  <a className="p-2 text-white" href="#" target="_blank"><svg className="icon icon-sm icon-white align-top"></svg><span className="visually-hidden">Designers Italia</span></a>
                </li>
                <li className="list-inline-item">
                  <a className="p-2 text-white" href="#" target="_blank"><svg className="icon icon-sm icon-white align-top"></svg><span className="visually-hidden">Twitter</span></a>
                </li>
                <li className="list-inline-item">
                  <a className="p-2 text-white" href="#" target="_blank"><svg className="icon icon-sm icon-white align-top"></svg><span className="visually-hidden">Medium</span></a>
                </li>
                <li className="list-inline-item">
                  <a className="p-2 text-white" href="#" target="_blank"><svg className="icon icon-sm icon-white align-top"></svg><span className="visually-hidden">Behance</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div className="it-footer-small-prints clearfix">
    <div className="container">
      <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li className="list-inline-item"><a href="#" title="Note Legali">Media policy</a></li>
        <li className="list-inline-item"><a href="#" title="Note Legali">Note legali</a></li>
        <li className="list-inline-item"><a href="#" title="Privacy-Cookies">Privacy policy</a></li>
        <li className="list-inline-item"><a href="#" title="Mappa del sito">Mappa del sito</a></li>
      </ul>
    </div>
  </div>
</footer>
        </>
    );
}
