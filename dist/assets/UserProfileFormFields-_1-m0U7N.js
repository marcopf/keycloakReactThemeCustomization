import{r as v,j as e}from"./index-BKbwm7rE.js";import{c as w}from"./useGetClassName-CIoHQgyp.js";import{u as E}from"./useFormValidation-BViieUBW.js";function W(f){const{kcContext:C,onIsFormSubmittableValueChange:F,i18n:m,getClassName:a,BeforeField:p,AfterField:u}=f,{advancedMsg:o,msg:N}=m,{formValidationState:{fieldStateByAttributeName:O,isFormSubmittable:j},formValidationDispatch:c,attributesWithPassword:b}=E({kcContext:C,i18n:m});v.useEffect(()=>{F(j)},[j]);let d="";return e.jsx(e.Fragment,{children:b.map((s,k)=>{var t;const{group:i="",groupDisplayHeader:y="",groupDisplayDescription:g=""}=s,{value:h,displayableErrors:l}=O[s.name],x=w(a("kcFormGroupClass"),l.length!==0&&a("kcFormGroupErrorClass"));return e.jsxs(v.Fragment,{children:[i!==d&&(d=i)!==""&&e.jsxs("div",Object.assign({className:x},{children:[e.jsx("div",Object.assign({className:a("kcContentWrapperClass")},{children:e.jsx("label",Object.assign({id:`header-${i}`,className:a("kcFormGroupHeader")},{children:o(y)||d}))})),g!==""&&e.jsx("div",Object.assign({className:a("kcLabelWrapperClass")},{children:e.jsx("label",Object.assign({id:`description-${i}`,className:a("kcLabelClass")},{children:o(g)}))}))]})),p&&e.jsx(p,{attribute:s}),e.jsxs("div",Object.assign({className:x},{children:[e.jsxs("div",Object.assign({className:a("kcLabelWrapperClass")},{children:[e.jsx("label",Object.assign({htmlFor:s.name,className:a("kcLabelClass")},{children:o((t=s.displayName)!==null&&t!==void 0?t:"")})),s.required&&e.jsx(e.Fragment,{children:"*"})]})),e.jsxs("div",Object.assign({className:a("kcInputWrapperClass")},{children:[(()=>{const{options:r}=s.validators;return r!==void 0?e.jsx("select",Object.assign({id:s.name,name:s.name,onChange:n=>c({action:"update value",name:s.name,newValue:n.target.value}),onBlur:()=>c({action:"focus lost",name:s.name}),value:h},{children:e.jsxs(e.Fragment,{children:[e.jsx("option",Object.assign({value:"",selected:!0,disabled:!0,hidden:!0},{children:N("selectAnOption")})),r.options.map(n=>e.jsx("option",Object.assign({value:n},{children:n}),n))]})})):e.jsx("input",{type:(()=>{switch(s.name){case"password-confirm":case"password":return"password";default:return"text"}})(),id:s.name,name:s.name,value:h,onChange:n=>c({action:"update value",name:s.name,newValue:n.target.value}),onBlur:()=>c({action:"focus lost",name:s.name}),className:a("kcInputClass"),"aria-invalid":l.length!==0,disabled:s.readOnly,autoComplete:s.autocomplete})})(),l.length!==0&&(()=>{const r=`input-error-${s.name}`;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`#${r} > span: { display: block; }`}),e.jsx("span",Object.assign({id:r,className:a("kcInputErrorMessageClass"),style:{position:l.length===1?"absolute":void 0},"aria-live":"polite"},{children:l.map(({errorMessage:n})=>n)}))]})})()]}))]})),u&&e.jsx(u,{attribute:s})]},k)})})}export{W as U};
//# sourceMappingURL=UserProfileFormFields-_1-m0U7N.js.map
