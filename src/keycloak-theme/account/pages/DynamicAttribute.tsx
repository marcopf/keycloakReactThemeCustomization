import { AuthContext, AuthProvider, IAuthContext, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext, useEffect, useState } from 'react'

function UserInfo(props: any): JSX.Element {
    
    //funzione asincrona che ottiene le informazioni relative agli attributi registrati, di default e custom
    //  token: rappresenta l'access_token che verra' poi utilizzato nell'authorization header della richiesta
    async function getInfo(token: string) {
    
        // effettuo la richesta tramite fetch prestando attenzione all'asincronicita'
        const res = await fetch(props.props.kcContext.properties.USER_ATTRIBUTE_ENDPOINT, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
            }
        })
     
        //parso la risposta come json
        let resJson = {};
        try {
            if (res.ok)
                resJson = await res.json();
        } catch (e) {
            console.log(e)
        }
    
        //altrimenti torno un'oggetto vuoto "{}"
        return resJson;
    }

    const {token} = useContext<IAuthContext>(AuthContext);
    const [userData, setUserData] = useState<any[]>([]);
    const [userDataValues, setUserDataValue] = useState<any[]>([]);

    //permette di gestire in modo asincrono la creazione del form dinamico che e' basato sulla variabile USERDATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await getInfo(token);
                const userProfileMetadata = response.userProfileMetadata;
                if (userProfileMetadata && userProfileMetadata.attributes) {
                    setUserData(userProfileMetadata.attributes);
                }
                if (response && response.attributes){
                    setUserDataValue(response.attributes)
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchData();
    }, [token]);

    return <>

        {/*
            ciclo l'array userData che contiene la lista di attributi da renderizzare
        */}
        {userData.map((element: any, index: number) => {

            // renderizzo solo gli attributi diversi da quelli di default
            return element.name == 'username' || element.name == 'firstName' || element.name == 'lastName' || element.name == 'email'? <></> :
                <div key={index} className="form-group">

                    {/*
                        creo il label dell'attributo partendo dalle informazioni ricavate dall'array iniziale
                    */}
                    <label className="active control-label" htmlFor={element.name}>
                        {element.name}{element.required && <span className="required"> *</span>}
                    </label>

                    {/*
                        definisco le proprieta' dell'input relativo all'attributo sempre partendo dall'array inizale
                        integrando anche userDataValues che contiente informazioni tipo valore iniziale e validators
                    */}
                    <input
                        type="text"
                        className="form-control"
                        id={element.name}
                        name={element.name}
                        required={element.required}
                        disabled={element.readOnly}
                        defaultValue={userDataValues[element.name] ?? ""}
                    />
                </div>
        })}
    </>
  }

  interface WellKnow {
    [key: string]: string
  }

  //definisco l'oggetto finale che si espandera' poi in una lista di attributi dinamici, dipendenti dalle informazioni ottenute dal server di autenticazione
  export default function BuildForm(props: any): JSX.Element{
    const [wellKnown, setWellKnown] = useState({} as WellKnow);
    const [contentLoaded, setContentLoaded] = useState(false);

    //ricava i dati dall'endpoint WELL KNOWN di keycloak
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(props.props.kcContext.properties.WELL_KNOWN_API);

            if (res.ok){
                let resJson = await res.json();
                setWellKnown(resJson as WellKnow);
                setContentLoaded(true);
            }
        }

        fetchData();
    }, []);

    //aspetta che gli endpoint siano stati ricavati, una volta ottenuti vie effetuata la chimata OAUTH2
    if (contentLoaded){
        
        const authConfig: TAuthConfig = {
            clientId: 'account-console',
            authorizationEndpoint: wellKnown.authorization_endpoint,
            tokenEndpoint: wellKnown.token_endpoint,
            redirectUri: wellKnown.issuer + '/account',
            scope: 'openid',
            onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
        }

        return <>
            <AuthProvider authConfig={authConfig}>
                <UserInfo props={props.props}></UserInfo>
            </AuthProvider>
        </>
    }

    //se i dati richiesti tramite fetch non sono ancora disponibili o sono presenti errori ritorno un'oggetto vuoto
    return (
        <></>
    )
  }