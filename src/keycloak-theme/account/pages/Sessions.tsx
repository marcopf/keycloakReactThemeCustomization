import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/account/pages/PageProps";
import { useGetClassName } from "keycloakify/account/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function Sessions(props: PageProps<Extract<KcContext, { pageId: "sessions.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    console.log({ kcContext });
    const { url, stateChecker, sessions } = kcContext;

    const { msg } = i18n;
    console.log({ sdf: kcContext.locale?.supported });
    console.log({ asdf: "asdf" });
    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="sessions">
            <div className="row">
                <div className={getClassName("kcContentWrapperClass")}>
                    <div className="title col-12 mb-3">
                        <h2>{msg("sessionsHtmlTitle")}</h2>
                    </div>
                </div>
                
                <div className="rounded-3 p-0 overflow-hidden">
                    <table className="table table-dark table-striped m-0">
                        <thead>
                            <tr>
                                <th scope="col">{msg("ip")}</th>
                                <th scope="col">{msg("started")}</th>
                                <th scope="col">{msg("lastAccess")}</th>
                                <th scope="col">{msg("expires")}</th>
                                <th scope="col">{msg("clients")}</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sessions.sessions.map((session) => (
                                <tr>
                                    <td>{session.ipAddress}</td>
                                    <td>{session?.started}</td>
                                    <td>{session?.lastAccess}</td>
                                    <td>{session?.expires}</td>
                                    <td>
                                        {session.clients.map((client: string, clientIndex: number) => (
                                            <div key={clientIndex}>
                                                {client}
                                                <br />
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <form action={url.sessionsUrl} className="p-0" method="post">
                    <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
                    <button id="logout-all-sessions" type="submit" className={clsx(getClassName("kcButtonDefaultClass"), getClassName("kcButtonClass"), "p-0")}>
                        {msg("doLogOutAllSessions")}
                    </button>
                </form>
            </div>
        </Template>
    );
}
