import { AuthContext, AuthProvider, IAuthContext, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext, useEffect, useState } from 'react'

//----
//list of all string and endpoint needed to perform the pkce call and retrieve the attribute info
//----

const CLIENT_ID =               'account-console'
const AUTH_ENDPOINT =           'http://localhost:8080/realms/master/protocol/openid-connect/auth';
const TOKEN_ENDPOINT =          'http://localhost:8080/realms/master/protocol/openid-connect/token';
const REDIRECT_URI =            'http://localhost:8080/realms/master/account/';
const SCOPE =                   'openid'
const INFO_ENDPOINT =           'http://localhost:8080/realms/master/account/credentials/'
const NEW_OTP_CONFIGURATION =   'http://localhost:8080/realms/master/protocol/openid-connect/auth?client_id=account-console&redirect_uri=http://localhost:8080/realms/master/account&state=d7d1a0a3-fb42-4a4c-8d5d-9311c20a6388&response_mode=query&code_challenge=XSRahxpQ59S7SzBGlRXc41wXKTT2_e-EJ_GPcGMCi2E&http://localhost:8080/realms/master/protocol/openid-connect/auth?client_id=account-console&response_type=code&scope=openid&nonce=207f4110-eb53-431c-ad70-497f50800d2c&kc_action=CONFIGURE_TOTP&code_challenge_method=S256'

//----

const authConfig: TAuthConfig = {
    clientId: CLIENT_ID,
    authorizationEndpoint: AUTH_ENDPOINT,
    tokenEndpoint: TOKEN_ENDPOINT,
    redirectUri: REDIRECT_URI,
    scope: SCOPE,
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
  }

//funzione asincrona che ottiene le informazioni relative alle configurazioni otp attive
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

// Aggiunge lo zero iniziale se il numero e' minore di 10
function addZero(num: number) {
    return (num < 10 ? '0' : '') + num;
}

function getFormattedDate(milliseconds: number){
    // Crea una data a partire dai millisecondi dal 1970
    var date = new Date(milliseconds);

    // estraggo ogni valore dalla data appena creata
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // Formatto la data per una  migliore visualizzazione
    return (year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds));
}

function UserInfo(): JSX.Element {
    const {token} = useContext<IAuthContext>(AuthContext);
    const [totpList, setList] = useState<any[]>([]);

    async function deleteTotp(e: any){
        console.log(token)
        if (!confirm("vuoi eleminare?"))
            return;
        const res = await fetch(INFO_ENDPOINT + e.target.getAttribute('id'), {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })
        if (res.ok){
            window.location.reload();
        }
        else
            alert('Errore!');
    }
    
    //permette di gestire in modo asincrono la creazione del form dinamico che e' basato sulla variabile USERDATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await getInfo(token);
                const userCredentialMetadata = response[1].userCredentialMetadatas;
                if (userCredentialMetadata && response[1]) {
                    setList(userCredentialMetadata);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchData();
    }, [token]);

    return <>

        {/* Definisco l'header della sezione OTP */}
        <div className="row my-5">
            <div className="col-8">
                <h1>Otp Section</h1>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">

                {/* Preparo il link che portera' alla pagina di per aggiungere una nuova configurazione OTP */}
                <a href={NEW_OTP_CONFIGURATION}>Configure new Otp</a>
            </div>
        </div>

        {/* Controllo la lungezza dell'array contentente le informazioni relative
        alle configurazioni OTP se e' 0 mostro un messaggio di avviso */}
        {totpList.length == 0 ?
            <div className="row justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                    <span className="text-danger">No Configuration Found!</span>
                </div>
            </div> : <></>}

        {/* Ciclo l'array contentente tutte le configurazioni attive "totpList"
        per creare in maniera dinamica le righe che permettono la gestione della configurazione */}
        {totpList.map(el=>{
            return <>

                <div className="mt-4 p-3 row align-items-center">
                    <div className="col-4 d-flex flex-column"><strong className="me-3">Otp Label: </strong>{el.credential.userLabel}</div>
                    <div className="col-4 d-flex flex-column"><strong className="me-3">Creation Date: </strong>{getFormattedDate(el.credential.createdDate)}</div>

                    {/* Creo un pulsante atto alla rimozione della configurazione impostando l'id del bottonattributie uguale
                    all'id della configurazione, cosi che possa poi fare riferimento a quest'ultimo per poter poi eliminare la configurazione OTP */}
                    <div className="col-4 d-flex justify-content-end"><button id={el.credential.id} className="btn btn-danger" onClick={deleteTotp}>Remove</button></div>
                </div>
            </>
        })}

    </>
  }

  //definisco l'oggetto finale che si espandera' poi in una lista di configurazioni OTP dinamica, dipendenti dalle informazioni ottenute dal server di autenticazione
  export default function OtpSection(): JSX.Element{
    return <>
        <AuthProvider authConfig={authConfig}>
            <UserInfo ></UserInfo>
        </AuthProvider>
    </>
  }