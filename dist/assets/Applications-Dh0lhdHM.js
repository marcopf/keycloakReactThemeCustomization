import{j as s}from"./index-B8-9oSLq.js";import{u as v,c as g}from"./useGetClassName-Bjf0te0P.js";function c(d){return Array.isArray(d)&&d.length===1&&typeof d[0]=="object"&&Object.keys(d[0]).length===0}function y(d){const{kcContext:a,i18n:i,doUseDefaultCss:h,classes:j,Template:o}=d,{getClassName:m}=v({doUseDefaultCss:h,classes:j}),{url:b,applications:{applications:u},stateChecker:x}=a,{msg:t,advancedMsg:l}=i;return s.jsx(o,Object.assign({},{kcContext:a,i18n:i,doUseDefaultCss:h,classes:j},{active:"applications"},{children:s.jsxs("div",Object.assign({className:"row"},{children:[s.jsx("div",Object.assign({className:"col-md-10"},{children:s.jsx("h2",{children:t("applicationsHtmlTitle")})})),s.jsxs("form",Object.assign({action:b.applicationsUrl,method:"post"},{children:[s.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:x}),s.jsx("input",{type:"hidden",id:"referrer",name:"referrer",value:x}),s.jsxs("table",Object.assign({className:"table table-striped table-bordered"},{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("td",{children:t("application")}),s.jsx("td",{children:t("availableRoles")}),s.jsx("td",{children:t("grantedPermissions")}),s.jsx("td",{children:t("additionalGrants")}),s.jsx("td",{children:t("action")})]})}),s.jsx("tbody",{children:u.map(e=>s.jsxs("tr",{children:[s.jsxs("td",{children:[e.effectiveUrl&&s.jsx("a",Object.assign({href:e.effectiveUrl},{children:e.client.name&&l(e.client.name)||e.client.clientId})),!e.effectiveUrl&&(e.client.name&&l(e.client.name)||e.client.clientId)]}),s.jsxs("td",{children:[!c(e.realmRolesAvailable)&&e.realmRolesAvailable.map(r=>s.jsxs("span",{children:[r.description?l(r.description):l(r.name),r!==e.realmRolesAvailable[e.realmRolesAvailable.length-1]&&", "]},r.name)),!c(e.realmRolesAvailable)&&e.resourceRolesAvailable&&", ",e.resourceRolesAvailable&&Object.keys(e.resourceRolesAvailable).map(r=>s.jsxs("span",{children:[!c(e.realmRolesAvailable)&&", ",e.resourceRolesAvailable[r].map(n=>s.jsxs("span",{children:[n.roleDescription?l(n.roleDescription):l(n.roleName)," ",t("inResource")," ",s.jsx("strong",{children:n.clientName?l(n.clientName):n.clientId}),n!==e.resourceRolesAvailable[r][e.resourceRolesAvailable[r].length-1]&&", "]},n.roleName))]},r))]}),s.jsx("td",{children:e.client.consentRequired?e.clientScopesGranted.map(r=>s.jsxs("span",{children:[l(r),r!==e.clientScopesGranted[e.clientScopesGranted.length-1]&&", "]},r)):s.jsx("strong",{children:t("fullAccess")})}),s.jsx("td",{children:e.additionalGrants.map(r=>s.jsxs("span",{children:[l(r),r!==e.additionalGrants[e.additionalGrants.length-1]&&", "]},r))}),s.jsx("td",{children:e.client.consentRequired&&e.clientScopesGranted.length>0||e.additionalGrants.length>0?s.jsx("button",Object.assign({type:"submit",className:g(m("kcButtonPrimaryClass"),m("kcButtonClass")),id:`revoke-${e.client.clientId}`,name:"clientId",value:e.client.id},{children:t("revoke")})):null})]},e.client.clientId))})]}))]}))]}))}))}export{y as default};
//# sourceMappingURL=Applications-Dh0lhdHM.js.map
