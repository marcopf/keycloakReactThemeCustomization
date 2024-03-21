export default function Footer(props: any){
    const {i18n} = props.props;

    return (<>
        <footer className="it-footer">
          <div className="it-footer-main">
            <div className="container">
              <section>
                <div className="row clearfix">
                  <div className="col-sm-12">
                    <div className="it-brand-wrapper">
                      <a href="#" data-focus-mouse="false">
                        <div className="it-brand-text">
                          <h2>{i18n.msg("enteDiAppartenenza")}</h2>
                          <h3 className="d-none d-md-block">{i18n.msg("enteDiAppartenenza")}</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </footer>
    </>)
}