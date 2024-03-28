import{r as ne,d as v}from"./index-Bk5ipnyi.js";var ve={},ie={},W={};Object.defineProperty(W,"__esModule",{value:!0});const te=ne;function me(e,t,o){const r=o==="session"?sessionStorage:localStorage,[l,n]=(0,te.useState)(()=>{const c=r.getItem(e);try{return c?JSON.parse(c):t}catch{return console.warn(`Failed to parse stored value for '${e}'.
Continuing with default value.`),t}}),a=c=>{if(c===void 0){n(c),r.removeItem(e);return}try{const h=c instanceof Function?c(l):c;n(h),r.setItem(e,JSON.stringify(h))}catch{console.error(`Failed to store value '${c}' for key '${e}'`)}};return(0,te.useEffect)(()=>{const c=h=>{var g;if(h.storageArea===r&&h.key===e)if(h.newValue===null)n(void 0);else try{n(JSON.parse((g=h.newValue)!==null&&g!==void 0?g:""))}catch{console.warn(`Failed to handle storageEvent's newValue='${h.newValue}' for key '${e}'`)}};return window.addEventListener("storage",c,!1),()=>window.removeEventListener("storage",c,!1)}),[l,a]}W.default=me;var S={};Object.defineProperty(S,"__esModule",{value:!0});S.validateConfig=S.createInternalConfig=void 0;function C(e){return["",void 0,null].includes(e)}function we(e){const{autoLogin:t=!0,clearURL:o=!0,decodeToken:r=!0,scope:l=void 0,preLogin:n=()=>null,postLogin:a=()=>null,onRefreshTokenExpire:c=void 0,storage:h="local",storageKeyPrefix:g="ROCP_",refreshWithScope:f=!0}=e,u=Object.assign(Object.assign({},e),{autoLogin:t,clearURL:o,decodeToken:r,scope:l,preLogin:n,postLogin:a,onRefreshTokenExpire:c,storage:h,storageKeyPrefix:g,refreshWithScope:f});return ae(u),u}S.createInternalConfig=we;function ae(e){if(C(e==null?void 0:e.clientId))throw Error("'clientId' must be set in the 'AuthConfig' object passed to 'react-oauth2-code-pkce' AuthProvider");if(C(e==null?void 0:e.authorizationEndpoint))throw Error("'authorizationEndpoint' must be set in the 'AuthConfig' object passed to 'react-oauth2-code-pkce' AuthProvider");if(C(e==null?void 0:e.tokenEndpoint))throw Error("'tokenEndpoint' must be set in the 'AuthConfig' object passed to 'react-oauth2-code-pkce' AuthProvider");if(C(e==null?void 0:e.redirectUri))throw Error("'redirectUri' must be set in the 'AuthConfig' object passed to 'react-oauth2-code-pkce' AuthProvider");if(!["session","local"].includes(e.storage))throw Error("'storage' must be one of ('session', 'local')");e!=null&&e.extraAuthParams&&console.warn("The 'extraAuthParams' configuration parameter will be deprecated. You should use 'extraTokenParameters' instead."),e!=null&&e.extraAuthParams&&(e!=null&&e.extraTokenParameters)&&console.warn("Using both 'extraAuthParams' and 'extraTokenParameters' is not recommended. They do the same thing, and you should only use 'extraTokenParameters'")}S.validateConfig=ae;var w={},L={},A={};Object.defineProperty(A,"__esModule",{value:!0});A.FetchError=void 0;class Te extends Error{constructor(t,o,r){super(r),this.name="FetchError",this.status=t,this.statusText=o}}A.FetchError=Te;var oe=v&&v.__awaiter||function(e,t,o,r){function l(n){return n instanceof o?n:new o(function(a){a(n)})}return new(o||(o=Promise))(function(n,a){function c(f){try{g(r.next(f))}catch(u){a(u)}}function h(f){try{g(r.throw(f))}catch(u){a(u)}}function g(f){f.done?n(f.value):l(f.value).then(c,h)}g((r=r.apply(e,t||[])).next())})};Object.defineProperty(L,"__esModule",{value:!0});L.postWithXForm=void 0;const ke=A;function Ee(e){let t="";for(const[o,r]of Object.entries(e))t+=`${t?"&":""}${o}=${encodeURIComponent(r)}`;return t}function ye(e,t){return oe(this,void 0,void 0,function*(){return fetch(e,{method:"POST",body:Ee(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(o=>oe(this,void 0,void 0,function*(){if(!o.ok){const r=yield o.text();throw new ke.FetchError(o.status,o.statusText,r)}return o}))})}L.postWithXForm=ye;var E={},Pe=v&&v.__awaiter||function(e,t,o,r){function l(n){return n instanceof o?n:new o(function(a){a(n)})}return new(o||(o=Promise))(function(n,a){function c(f){try{g(r.next(f))}catch(u){a(u)}}function h(f){try{g(r.throw(f))}catch(u){a(u)}}function g(f){f.done?n(f.value):l(f.value).then(c,h)}g((r=r.apply(e,t||[])).next())})};Object.defineProperty(E,"__esModule",{value:!0});E.generateCodeChallenge=E.generateRandomString=E.getRandomInteger=void 0;function K(e){const o=new Uint8Array(1);return window.crypto.getRandomValues(o),o[0]>=Math.floor(256/e)*e?K(e):o[0]%e}E.getRandomInteger=K;function be(e){let t="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++)t+=o.charAt(K(o.length-1));return t}E.generateRandomString=be;function Ie(e){var t;return Pe(this,void 0,void 0,function*(){if(!(!((t=window.crypto.subtle)===null||t===void 0)&&t.digest))throw new Error("The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details");const r=new TextEncoder().encode(e),l=yield window.crypto.subtle.digest("SHA-256",r),n=String.fromCharCode(...new Uint8Array(l));return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")})}E.generateCodeChallenge=Ie;var Se=v&&v.__awaiter||function(e,t,o,r){function l(n){return n instanceof o?n:new o(function(a){a(n)})}return new(o||(o=Promise))(function(n,a){function c(f){try{g(r.next(f))}catch(u){a(u)}}function h(f){try{g(r.throw(f))}catch(u){a(u)}}function g(f){f.done?n(f.value):l(f.value).then(c,h)}g((r=r.apply(e,t||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});w.validateState=w.redirectToLogout=w.fetchWithRefreshToken=w.fetchTokens=w.redirectToLogin=void 0;const Ae=L,re=E,se="PKCE_code_verifier",$="ROCP_auth_state";function xe(e,t){return Se(this,void 0,void 0,function*(){const o=e.storage==="session"?sessionStorage:localStorage,r=(0,re.generateRandomString)(96);return o.setItem(se,r),(0,re.generateCodeChallenge)(r).then(l=>{const n=new URLSearchParams(Object.assign({response_type:"code",client_id:e.clientId,redirect_uri:e.redirectUri,code_challenge:l,code_challenge_method:"S256"},e.extraAuthParameters));e.scope!==void 0&&n.append("scope",e.scope),o.removeItem($);const a=t??e.state;a&&(o.setItem($,a),n.append("state",a)),e!=null&&e.preLogin&&e.preLogin(),window.location.assign(`${e.authorizationEndpoint}?${n.toString()}`)})})}w.redirectToLogin=xe;function Re(e){return e.access_token!==void 0}function ce(e,t){return(0,Ae.postWithXForm)(e,t).then(o=>o.json().then(r=>{if(Re(r))return r;throw Error(JSON.stringify(r))}))}const Ce=e=>{const t=e.storage==="session"?sessionStorage:localStorage,r=new URLSearchParams(window.location.search).get("code"),l=t.getItem(se);if(!r)throw Error(`Parameter 'code' not found in URL. 
Has authentication taken place?`);if(!l)throw Error(`Can't get tokens without the CodeVerifier. 
Has authentication taken place?`);const n=Object.assign(Object.assign({grant_type:"authorization_code",code:r,client_id:e.clientId,redirect_uri:e.redirectUri,code_verifier:l},e.extraTokenParameters),e.extraAuthParams);return ce(e.tokenEndpoint,n)};w.fetchTokens=Ce;const Le=e=>{const{config:t,refreshToken:o}=e,r=Object.assign({grant_type:"refresh_token",refresh_token:o,client_id:t.clientId,redirect_uri:t.redirectUri},t.extraTokenParameters);return t.refreshWithScope&&(r.scope=t.scope),ce(t.tokenEndpoint,r)};w.fetchWithRefreshToken=Le;function Oe(e,t,o,r,l,n){var a;const c=new URLSearchParams(Object.assign({token:o||t,token_type_hint:o?"refresh_token":"access_token",client_id:e.clientId,post_logout_redirect_uri:(a=e.logoutRedirect)!==null&&a!==void 0?a:e.redirectUri,ui_locales:window.navigator.languages.join(" ")},e.extraLogoutParameters));r&&c.append("id_token_hint",r),l&&c.append("state",l),n&&c.append("logout_hint",n),window.location.assign(`${e.logoutEndpoint}?${c.toString()}`)}w.redirectToLogout=Oe;function Fe(e,t){const o=t==="session"?sessionStorage:localStorage,r=e.get("state"),l=o.getItem($);if(r!==l)throw new Error('"state" value received from authentication server does no match client request. Possible cross-site request forgery')}w.validateState=Fe;var O={};Object.defineProperty(O,"__esModule",{value:!0});O.decodeJWT=void 0;const je=e=>{try{const o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(o).split("").map(l=>`%${`00${l.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));return JSON.parse(r)}catch(t){throw console.error(t),Error(`Failed to decode the access token.
	Is it a proper JSON Web Token?
	You can disable JWT decoding by setting the 'decodeToken' value to 'false' the configuration.`)}};O.decodeJWT=je;var de={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getRefreshExpiresIn=e.epochTimeIsPast=e.epochAtSecondsFromNow=e.FALLBACK_EXPIRE_TIME=void 0,e.FALLBACK_EXPIRE_TIME=600;const t=n=>Math.round(Date.now()/1e3+Number(n));e.epochAtSecondsFromNow=t;function o(n){return Math.round(Date.now())/1e3+30>=n}e.epochTimeIsPast=o;const r=["refresh_expires_in","refresh_token_expires_in"];function l(n,a){for(const c of r)if(c in a)return a[c];return a.refresh_token?n+e.FALLBACK_EXPIRE_TIME:n}e.getRefreshExpiresIn=l})(de);(function(e){var t=v&&v.__createBinding||(Object.create?function(p,_,i,m){m===void 0&&(m=i);var T=Object.getOwnPropertyDescriptor(_,i);(!T||("get"in T?!_.__esModule:T.writable||T.configurable))&&(T={enumerable:!0,get:function(){return _[i]}}),Object.defineProperty(p,m,T)}:function(p,_,i,m){m===void 0&&(m=i),p[m]=_[i]}),o=v&&v.__setModuleDefault||(Object.create?function(p,_){Object.defineProperty(p,"default",{enumerable:!0,value:_})}:function(p,_){p.default=_}),r=v&&v.__importStar||function(p){if(p&&p.__esModule)return p;var _={};if(p!=null)for(var i in p)i!=="default"&&Object.prototype.hasOwnProperty.call(p,i)&&t(_,p,i);return o(_,p),_},l=v&&v.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(e,"__esModule",{value:!0}),e.AuthProvider=e.AuthContext=void 0;const n=r(ne),a=l(W),c=S,h=w,g=O,f=A,u=de;e.AuthContext=(0,n.createContext)({token:"",login:()=>null,logOut:()=>null,error:null,loginInProgress:!1});const ue=({authConfig:p,children:_})=>{const i=(0,n.useMemo)(()=>(0,c.createInternalConfig)(p),[p]),[m,T]=(0,a.default)(`${i.storageKeyPrefix}refreshToken`,void 0,i.storage),[N,J]=(0,a.default)(`${i.storageKeyPrefix}refreshTokenExpire`,(0,u.epochAtSecondsFromNow)(2*u.FALLBACK_EXPIRE_TIME),i.storage),[k,B]=(0,a.default)(`${i.storageKeyPrefix}token`,"",i.storage),[D,X]=(0,a.default)(`${i.storageKeyPrefix}tokenExpire`,(0,u.epochAtSecondsFromNow)(u.FALLBACK_EXPIRE_TIME),i.storage),[x,V]=(0,a.default)(`${i.storageKeyPrefix}idToken`,void 0,i.storage),[q,R]=(0,a.default)(`${i.storageKeyPrefix}loginInProgress`,!1,i.storage),[le,z]=(0,a.default)(`${i.storageKeyPrefix}refreshInProgress`,!1,i.storage),[fe,F]=(0,n.useState)(),[he,j]=(0,n.useState)(),[pe,y]=(0,n.useState)(null);function U(){T(void 0),B(""),X((0,u.epochAtSecondsFromNow)(u.FALLBACK_EXPIRE_TIME)),J((0,u.epochAtSecondsFromNow)(u.FALLBACK_EXPIRE_TIME)),V(void 0),F(void 0),j(void 0),R(!1)}function ge(s,d){U(),y(null),i!=null&&i.logoutEndpoint&&k&&(0,h.redirectToLogout)(i,k,m,x,s,d)}function P(s){U(),R(!0);let d=s;s&&typeof s!="string"&&(console.warn(`Passed login state must be of type 'string'. Received '${s}'. Ignoring value...`),d=void 0),(0,h.redirectToLogin)(i,d).catch(b=>{console.error(b),y(b.message),R(!1)})}function H(s){var d,b,M;B(s.access_token);let Z=u.FALLBACK_EXPIRE_TIME;try{if(s.id_token){const I=(0,g.decodeJWT)(s.id_token);j(I),Z=Math.round(Number(I.exp)-Date.now()/1e3)}}catch(I){console.warn(`Failed to decode idToken: ${I.message}`)}const ee=(b=(d=i.tokenExpiresIn)!==null&&d!==void 0?d:s.expires_in)!==null&&b!==void 0?b:Z;X((0,u.epochAtSecondsFromNow)(ee));const _e=(M=i.refreshTokenExpiresIn)!==null&&M!==void 0?M:(0,u.getRefreshExpiresIn)(ee,s);s.refresh_token&&(T(s.refresh_token),J((0,u.epochAtSecondsFromNow)(_e))),V(s.id_token);try{i.decodeToken&&F((0,g.decodeJWT)(s.access_token))}catch(I){console.warn(`Failed to decode access token: ${I.message}`)}}function Y(s=!1){if(s){P();return}if(!i.onRefreshTokenExpire){P();return}i.onRefreshTokenExpire({login:P})}function G(s=!1){if(k&&(0,u.epochTimeIsPast)(D)&&!(le&&!s)){if((0,u.epochTimeIsPast)(N)){Y(s);return}if(m){z(!0),(0,h.fetchWithRefreshToken)({config:i,refreshToken:m}).then(d=>H(d)).catch(d=>{if(d instanceof f.FetchError){if(d.status===400){Y(s);return}console.error(d),y(d.message),s&&P()}else d instanceof Error&&(console.error(d),y(d.message),s&&P())}).finally(()=>{z(!1)});return}console.warn("Failed to refresh access_token. Most likely there is no refresh_token, or the authentication server did not reply with an explicit expire time, and the default expire times are longer than the actual tokens expire time")}}(0,n.useEffect)(()=>{const s=1e4*Math.random(),d=setInterval(()=>G(),5e3+s);return()=>clearInterval(d)},[k,m,N,D]);const Q=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(q){const s=new URLSearchParams(window.location.search);if(!s.get("code")){const d=s.get("error_description")||"Bad authorization state. Refreshing the page and log in again might solve the issue.";console.error(`${d}
Expected  to find a '?code=' parameter in the URL by now. Did the authentication get aborted or interrupted?`),y(d),U();return}if(!Q.current){Q.current=!0;try{(0,h.validateState)(s,i.storage)}catch(d){console.error(d),y(d.message)}(0,h.fetchTokens)(i).then(d=>{H(d),i!=null&&i.postLogin&&i.postLogin()}).catch(d=>{console.error(d),y(d.message)}).finally(()=>{i.clearURL&&window.history.replaceState(null,"",window.location.pathname),R(!1)})}return}if(!k&&i.autoLogin)return P();try{x&&j((0,g.decodeJWT)(x))}catch(s){console.warn(`Failed to decode idToken: ${s.message}`)}try{k&&i.decodeToken&&F((0,g.decodeJWT)(k))}catch(s){console.warn(`Failed to decode access token: ${s.message}`)}G(!0)},[]),n.default.createElement(e.AuthContext.Provider,{value:{token:k,tokenData:fe,idToken:x,idTokenData:he,login:P,logOut:ge,error:pe,loginInProgress:q}},_)};e.AuthProvider=ue})(ie);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.AuthContext=e.AuthProvider=void 0;var t=ie;Object.defineProperty(e,"AuthProvider",{enumerable:!0,get:function(){return t.AuthProvider}}),Object.defineProperty(e,"AuthContext",{enumerable:!0,get:function(){return t.AuthContext}})})(ve);export{ve as d};
//# sourceMappingURL=index-C5IxwAqk.js.map
