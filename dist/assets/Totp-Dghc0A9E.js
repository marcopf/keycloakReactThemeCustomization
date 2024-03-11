import{j as e}from"./index-Bo4BlCDj.js";import{c as n}from"./useGetClassName-lwRygOFT.js";import{u as k}from"./useGetClassName-4ShzDoSd.js";function f(j){const{kcContext:d,i18n:o,doUseDefaultCss:p,Template:C,classes:m}=j,{getClassName:l}=k({doUseDefaultCss:p,classes:m}),{totp:t,mode:r,url:h,messagesPerField:i,stateChecker:x}=d,{msg:s,msgStr:b}=o,c={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"};return e.jsx(C,{kcContext:d,i18n:o,doUseDefaultCss:p,classes:m,active:"totp",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-10",children:e.jsx("h2",{children:s("authenticatorTitle")})}),t.otpCredentials.length===0&&e.jsxs("div",{className:"subtitle col-md-2",children:[e.jsx("span",{className:"required",children:"*"}),s("requiredFields")]})]}),t.enabled&&e.jsxs("table",{className:"table table-bordered table-striped",children:[e.jsx("thead",{children:t.otpCredentials.length>1?e.jsx("tr",{children:e.jsx("th",{colSpan:4,children:s("configureAuthenticators")})}):e.jsx("tr",{children:e.jsx("th",{colSpan:3,children:s("configureAuthenticators")})})}),e.jsx("tbody",{children:t.otpCredentials.map((a,u)=>e.jsxs("tr",{children:[e.jsx("td",{className:"provider",children:s("mobile")}),t.otpCredentials.length>1&&e.jsx("td",{className:"provider",children:a.id}),e.jsx("td",{className:"provider",children:a.userLabel||""}),e.jsx("td",{className:"action",children:e.jsxs("form",{action:h.totpUrl,method:"post",className:"form-inline",children:[e.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:x}),e.jsx("input",{type:"hidden",id:"submitAction",name:"submitAction",value:"Delete"}),e.jsx("input",{type:"hidden",id:"credentialId",name:"credentialId",value:a.id}),e.jsx("button",{id:`remove-mobile-${u}`,className:"btn btn-default",children:e.jsx("i",{className:"pficon pficon-delete"})})]})})]},u))})]}),!t.enabled&&e.jsxs("div",{children:[e.jsx("hr",{}),e.jsxs("ol",{id:"kc-totp-settings",children:[e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep1")}),e.jsx("ul",{id:"kc-totp-supported-apps",children:t.supportedApplications.map(a=>e.jsx("li",{children:s(a)},a))})]}),r&&r=="manual"?e.jsxs(e.Fragment,{children:[e.jsxs("li",{children:[e.jsx("p",{children:s("totpManualStep2")}),e.jsx("p",{children:e.jsx("span",{id:"kc-totp-secret-key",children:t.totpSecretEncoded})}),e.jsx("p",{children:e.jsx("a",{href:t.qrUrl,id:"mode-barcode",children:s("totpScanBarcode")})})]}),e.jsxs("li",{children:[e.jsx("p",{children:s("totpManualStep3")}),e.jsx("p",{children:e.jsxs("ul",{children:[e.jsxs("li",{id:"kc-totp-type",children:[s("totpType"),": ",s(`totp.${t.policy.type}`)]}),e.jsxs("li",{id:"kc-totp-algorithm",children:[s("totpAlgorithm"),": ",(c==null?void 0:c[t.policy.algorithm])??t.policy.algorithm]}),e.jsxs("li",{id:"kc-totp-digits",children:[s("totpDigits"),": ",t.policy.digits]}),t.policy.type==="totp"?e.jsxs("li",{id:"kc-totp-period",children:[s("totpInterval"),": ",t.policy.period]}):e.jsxs("li",{id:"kc-totp-counter",children:[s("totpCounter"),": ",t.policy.initialCounter]})]})})]})]}):e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep2")}),e.jsx("p",{children:e.jsx("img",{id:"kc-totp-secret-qr-code",src:`data:image/png;base64, ${t.totpSecretQrCode}`,alt:"Figure: Barcode"})}),e.jsx("p",{children:e.jsx("a",{href:t.manualUrl,id:"mode-manual",children:s("totpUnableToScan")})})]}),e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep3")}),e.jsx("p",{children:s("totpStep3DeviceName")})]})]}),e.jsx("hr",{}),e.jsxs("form",{action:h.totpUrl,className:l("kcFormClass"),id:"kc-totp-settings-form",method:"post",children:[e.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:x}),e.jsxs("div",{className:l("kcFormGroupClass"),children:[e.jsxs("div",{className:"col-sm-2 col-md-2",children:[e.jsx("label",{htmlFor:"totp",className:"control-label",children:s("authenticatorCode")}),e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"col-sm-10 col-md-10",children:[e.jsx("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:l("kcInputClass"),"aria-invalid":i.existsError("totp")}),i.existsError("totp")&&e.jsx("span",{id:"input-error-otp-code",className:l("kcInputErrorMessageClass"),"aria-live":"polite",children:i.get("totp")})]}),e.jsx("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:t.totpSecret}),r&&e.jsx("input",{type:"hidden",id:"mode",value:r})]}),e.jsxs("div",{className:l("kcFormGroupClass"),children:[e.jsxs("div",{className:"col-sm-2 col-md-2",children:[e.jsx("label",{htmlFor:"userLabel",className:l("kcLabelClass"),children:s("totpDeviceName")}),t.otpCredentials.length>=1&&e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"col-sm-10 col-md-10",children:[e.jsx("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:l("kcInputClass"),"aria-invalid":i.existsError("userLabel")}),i.existsError("userLabel")&&e.jsx("span",{id:"input-error-otp-label",className:l("kcInputErrorMessageClass"),"aria-live":"polite",children:i.get("userLabel")})]})]}),e.jsx("div",{id:"kc-form-buttons",className:n(l("kcFormGroupClass"),"text-right"),children:e.jsxs("div",{className:l("kcInputWrapperClass"),children:[e.jsx("input",{type:"submit",className:n(l("kcButtonClass"),l("kcButtonPrimaryClass"),l("kcButtonLargeClass")),id:"saveTOTPBtn",value:b("doSave")}),e.jsx("button",{type:"submit",className:n(l("kcButtonClass"),l("kcButtonDefaultClass"),l("kcButtonLargeClass"),l("kcButtonLargeClass")),id:"cancelTOTPBtn",name:"submitAction",value:"Cancel",children:s("doCancel")})]})})]})]})]})})}export{f as default};
//# sourceMappingURL=Totp-Dghc0A9E.js.map
