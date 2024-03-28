import { AuthContext, AuthProvider, IAuthContext, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext, useEffect, useState } from 'react'

//----
//list of all string and endpoint needed to perform the pkce call and retrieve the attribute info
//----

const CLIENT_ID =       'account-console'
const AUTH_ENDPOINT =   'http://localhost:8080/realms/master/protocol/openid-connect/auth';
const TOKEN_ENDPOINT =  'http://localhost:8080/realms/master/protocol/openid-connect/token';
const REDIRECT_URI =    'http://localhost:8080/realms/master/account/';
const SCOPE =           'openid'
const INFO_ENDPOINT =   'http://localhost:8080/realms/master/account/?userProfileMetadata=true'

//----

const authConfig: TAuthConfig = {
    clientId: CLIENT_ID,
    authorizationEndpoint: AUTH_ENDPOINT,
    tokenEndpoint: TOKEN_ENDPOINT,
    redirectUri: REDIRECT_URI,
    scope: SCOPE,
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
  }

//funzione asincrona che ottiene le informazioni relative agli attributi registrati, di default e custom
//  token: rappresenta l'access_token che verra' poi utilizzato nell'authorization header della richiesta
async function getInfo(token: string) {

    // effettuo la richesta tramite fetch prestando attenzione all'asincronicita'
    const res = await fetch(INFO_ENDPOINT, {
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


function UserInfo(): JSX.Element {
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
        {/*ciclo l'array userData che contiene la lista di attributi da renderizzare */}
        {userData.map((element: any, index: number) => {

            // renderizzo solo gli attributi diversi da quelli di default
            return element.name == 'username' || element.name == 'firstName' || element.name == 'lastName' || element.name == 'email'? <></> :
                <div key={index} className="form-group">

                    {/* creo il label dell'attributo partendo dalle informazioni ricavate dall'array iniziale */}
                    <label className="active control-label" htmlFor={element.name}>
                        {element.name}{element.required && <span className="required"> *</span>}
                    </label>

                    {/* definisco le proprieta' dell'input relativo all'attributo sempre partendo dall'array inizale
                    integrando anche userDataValues che contiente informazioni tipo valore iniziale e validators */}
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

  //definisco l'oggetto finale che si espandera' poi in una lista di attributi dinamici, dipendenti dalle informazioni ottenute dal server di autenticazione
  export default function BuildForm(): JSX.Element{
    return <>
        <AuthProvider authConfig={authConfig}>
            <UserInfo ></UserInfo>
        </AuthProvider>
    </>
  }