import pngUrl from './assets/maseLogo.png'
import sprites from './assets/sprites.svg'

export default function Header(props: any){
    const {i18n} = props.props;

    const { msg } = i18n;
    const { referrer, url } = props.props.kcContext;
    return (<>
      <header className="it-header-wrapper">
        <div className="it-header-slim-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-header-slim-wrapper-content">
                  <a className="d-none d-lg-block navbar-brand" href="#">{i18n.msg("enteDiAppartenenza")}</a>
                  <div className="nav-mobile">
                    <nav aria-label="Navigazione secondaria">
                      <a className="it-opener d-lg-none" data-bs-toggle="collapse" href="#menuC1" role="button" aria-expanded="false" aria-controls="menuC1">
                        <span>{i18n.msg("enteDiAppartenenza")}</span>
                        <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
                      </a>
                      <div className="link-list-wrapper collapse" id="menuC1">
                        <ul className="link-list">
                          <li><a className="dropdown-item white-span list-item" href={referrer?.url} style={{color: "white"}}>{msg("backToApplication")}</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="it-header-slim-right-zone">
                    <div className="it-access-top-wrapper">
                      <a className="btn btn-primary btn-sm" href={url.getLogoutUrl()}>Logout</a>
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
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>);
}