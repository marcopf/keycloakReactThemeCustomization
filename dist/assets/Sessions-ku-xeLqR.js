import{j as s}from"./index-Bo4BlCDj.js";import{c as b}from"./useGetClassName-lwRygOFT.js";import{u as g}from"./useGetClassName-4ShzDoSd.js";function O(n){var c;const{kcContext:l,i18n:i,doUseDefaultCss:a,Template:o,classes:r}=n,{getClassName:d}=g({doUseDefaultCss:a,classes:r});console.log({kcContext:l});const{url:h,stateChecker:j,sessions:x}=l,{msg:t}=i;return console.log({sdf:(c=l.locale)===null||c===void 0?void 0:c.supported}),console.log({asdf:"asdf"}),s.jsxs(o,Object.assign({},{kcContext:l,i18n:i,doUseDefaultCss:a,classes:r},{active:"sessions"},{children:[s.jsx("div",Object.assign({className:d("kcContentWrapperClass")},{children:s.jsx("div",Object.assign({className:"col-md-10"},{children:s.jsx("h2",{children:t("sessionsHtmlTitle")})}))})),s.jsxs("table",Object.assign({className:"table table-striped table-bordered"},{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:t("ip")}),s.jsx("th",{children:t("started")}),s.jsx("th",{children:t("lastAccess")}),s.jsx("th",{children:t("expires")}),s.jsx("th",{children:t("clients")})]})}),s.jsx("tbody",Object.assign({role:"rowgroup"},{children:x.sessions.map((e,m)=>s.jsxs("tr",{children:[s.jsx("td",{children:e.ipAddress}),s.jsx("td",{children:e==null?void 0:e.started}),s.jsx("td",{children:e==null?void 0:e.lastAccess}),s.jsx("td",{children:e==null?void 0:e.expires}),s.jsx("td",{children:e.clients.map((u,p)=>s.jsxs("div",{children:[u,s.jsx("br",{})]},p))})]},m))}))]})),s.jsxs("form",Object.assign({action:h.sessionsUrl,method:"post"},{children:[s.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:j}),s.jsx("button",Object.assign({id:"logout-all-sessions",type:"submit",className:b(d("kcButtonDefaultClass"),d("kcButtonClass"))},{children:t("doLogOutAllSessions")}))]}))]}))}export{O as default};
//# sourceMappingURL=Sessions-ku-xeLqR.js.map
