import { AuthContext, AuthProvider, IAuthContext, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext, useEffect, useState } from 'react'

const authConfig: TAuthConfig = {
    clientId: 'account-console',
    authorizationEndpoint: 'http://localhost:8080/realms/master/protocol/openid-connect/auth',
    tokenEndpoint: 'http://localhost:8080/realms/master/protocol/openid-connect/token',
    redirectUri: "http://localhost:8080/realms/master/account/",
    scope: 'profile openid',
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
  }

async function getInfo(token: string) {
  const res = await fetch("	http://localhost:8080/realms/master/account/?userProfileMetadata=true", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })

  let resJson = {};
  try {
      resJson = await res.json();
  } catch (e) {
      console.log(e)
  }
  return resJson;
}


function UserInfo(): JSX.Element {
    const {token} = useContext<IAuthContext>(AuthContext);

    const [userData, setUserData] = useState<any[]>([]);
    const [userDataValues, setUserDataValue] = useState<any[]>([]);

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
        {userData.map((element: any, index: number) => {
            return element.name == 'username' || element.name == 'firstName' || element.name == 'lastName' || element.name == 'email'? <></> :
                <div key={index} className="form-group">
                    <label className="active control-label" htmlFor={element.name}>
                        {element.name}{element.required && <span className="required"> *</span>}
                    </label>
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

  export default function BuildForm(): JSX.Element{
    return <>
        <AuthProvider authConfig={authConfig}>
            <UserInfo ></UserInfo>
        </AuthProvider>
    </>
  }