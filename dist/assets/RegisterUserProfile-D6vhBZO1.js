import{r as b,j as s}from"./index-BKbwm7rE.js";import{c as k}from"./useGetClassName-CIoHQgyp.js";import{U as h}from"./UserProfileFormFields-_1-m0U7N.js";import{u as C}from"./useGetClassName-9xaGGGxn.js";import"./useFormValidation-BViieUBW.js";function y(l){const{kcContext:a,i18n:t,doUseDefaultCss:r,Template:n,classes:i}=l,{getClassName:e}=C({doUseDefaultCss:r,classes:i}),{url:o,messagesPerField:m,recaptchaRequired:d,recaptchaSiteKey:g,realm:p}=a;p.registrationEmailAsUsername;const{msg:c,msgStr:u}=t,[j,x]=b.useState(!1);return s.jsx(n,Object.assign({},{kcContext:a,i18n:t,doUseDefaultCss:r,classes:i},{displayMessage:m.exists("global"),displayRequiredFields:!0,headerNode:c("registerTitle")},{children:s.jsxs("form",Object.assign({id:"kc-register-form",className:e("kcFormClass"),action:o.registrationAction,method:"post"},{children:[s.jsx(h,{kcContext:a,onIsFormSubmittableValueChange:x,i18n:t,getClassName:e}),d&&s.jsx("div",Object.assign({className:"form-group"},{children:s.jsx("div",Object.assign({className:e("kcInputWrapperClass")},{children:s.jsx("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":g})}))})),s.jsxs("div",Object.assign({className:e("kcFormGroupClass"),style:{marginBottom:30}},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:e("kcFormOptionsClass")},{children:s.jsx("div",Object.assign({className:e("kcFormOptionsWrapperClass")},{children:s.jsx("span",{children:s.jsx("a",Object.assign({href:o.loginUrl},{children:c("backToLogin")}))})}))})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:e("kcFormButtonsClass")},{children:s.jsx("input",{className:k(e("kcButtonClass"),e("kcButtonPrimaryClass"),e("kcButtonBlockClass"),e("kcButtonLargeClass")),type:"submit",value:u("doRegister"),disabled:!j})}))]}))]}))}))}export{y as default};
//# sourceMappingURL=RegisterUserProfile-D6vhBZO1.js.map
