"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{1221:function(n,e,o){o.r(e),o.d(e,{default:function(){return hn}});var t,r,i,a,c,d,s,l,u,p,b,f,h,m=o(885),x=o(4931),g=o.n(x),v=o(2791),j=o(9434),k=o(6916),w=function(n){return n.contacts.contacts},y=function(n){return n.contacts.error},Z=function(n){return n.contacts.operation},C=function(n){return n.filter},z=(0,k.P1)([w,C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=o(3634),A=o(168),D=o(6444),M=D.ZP.section(t||(t=(0,A.Z)(["\n    min-height: 80vh;\n    border: 3px solid black;\n    border-top: none;\n\n    background-color: #6a6767;\n    color: #ffffff;\n\n    \n"]))),S=D.ZP.div(r||(r=(0,A.Z)(["\n    padding: ","px;    \n    text-align: right;    \n    border-bottom: 3px solid #bdb8b8;\n\n"])),(function(n){return n.theme.space[2]})),E=D.ZP.div(i||(i=(0,A.Z)(["\n    display: flex;\n    align-items: center;\n    padding-left: 16px;\n    border-bottom: 3px solid #bdb8b8;\n    justify-content: space-between;\n    \n"]))),B=D.ZP.div(a||(a=(0,A.Z)(["\n    width: 85%;\n\n    p {\n        margin-bottom: ","px;\n        font-size: ","px;\n        font-weight: ",";\n    }\n\n    input {\n        width: 93%;\n        height: 24px;\n        padding-left: 24px;\n        padding-right: 8px;\n        border-radius: 5px;\n        border: 1px solid #bdbdbd;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-position: 0.7% 50%;\n\n        :focus {\n            color: #212529;\n            background-color: #fff;\n            border-color: #bdbdbd;\n            outline: 0;\n            box-shadow: 0 0 0 0.2rem rgba(213, 212, 212, 0.25);\n        }\n    }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontWeights.middle})),F=o(4808),K=o(184),L=function(){var n=(0,j.I0)(),e=(0,j.v9)(C);return(0,K.jsx)(B,{children:(0,K.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var o=e.target.value;console.log(o),n((0,F.K)(o))},placeholder:"Search contact",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})})},J=D.ZP.ul(c||(c=(0,A.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;   \n"]))),N=o(2757),_=o.n(N),q=o(5299),R=o(8820),T=o(9126),I=D.ZP.li(d||(d=(0,A.Z)(["\n    border-bottom: 1px solid #bdb8b8;\n    display: flex;\n\n    div {\n        width: 100%;\n    }\n\n    p {\n        margin-top: 8px;\n        margin-bottom: 8px;\n        margin-left: 16px;\n        margin-right: 16px;\n    }\n"]))),U=D.ZP.button(s||(s=(0,A.Z)(["\n    margin: 0;\n    padding: 10px;\n    border: none;\n    border-right: 1px solid #bdb8b8;\n    width: 60px;\n    height: 60px;\n    background-color: #4f5152;\n    cursor: pointer;\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n        background-color: #6b6b71;       \n    }\n"]))),$=D.ZP.button(l||(l=(0,A.Z)(["\n    margin: 0;\n    padding: 10px;\n    border: none;\n    border-left: 1px solid #bdb8b8;\n    width: 60px;\n    height: 60px;\n    background-color: #4f5152;\n    cursor: pointer;\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n        background-color: #6b6b71;       \n    }\n"]))),O=D.ZP.button(u||(u=(0,A.Z)(["\n    margin: 0;\n    padding: 10px;\n    border: none;\n    border-left: 1px solid #bdb8b8;\n    width: 60px;\n    height: 60px;\n    background-color: #524f50;\n    cursor: pointer;\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n        background-color: #6b6b71;       \n    }\n"]))),W=function(n){n.currentTarget.style.backgroundColor="#b43d4f"},X=function(n){n.currentTarget.style.backgroundColor="#524f50"},G=function(n){var e=n.id,o=n.name,t=n.number,r=n.openModal,i=(0,j.I0)(),a=(0,j.v9)(Z);return(0,K.jsxs)(I,{children:[(0,K.jsx)(U,{type:"button",onClick:function(){return q.Report.info("Outcoming call","call to: ".concat(o.toUpperCase()," on: ").concat(t," ??"),"Okay")},children:(0,K.jsx)(R.rJP,{size:40,color:"#70eb4a"})}),(0,K.jsxs)("div",{children:[(0,K.jsxs)("p",{children:[(0,K.jsx)(T.J4J,{})," ",o]}),(0,K.jsxs)("p",{children:[(0,K.jsx)(T.XXc,{})," ",t]})]}),(0,K.jsx)($,{type:"button",onClick:function(){return r({id:e,data:{name:o,number:t}})},children:(0,K.jsx)(R.xRF,{size:40,color:"#2e312d"})}),(0,K.jsx)(O,{type:"button",onClick:function(){return function(n){i((0,P.GK)(n))}(e)},onMouseDown:W,onMouseUp:X,children:a===e?(0,K.jsx)(_(),{size:8.9,color:"#3d0404"}):(0,K.jsx)(R.YK6,{size:40,color:"#3d0404"})})]})},H=function(n){var e=n.openModal,o=(0,j.v9)(z);return(0,K.jsx)(J,{children:o.map((function(n){var o=n.id,t=n.name,r=n.number;return(0,K.jsx)(G,{id:o,name:t,number:r,openModal:e},o)}))})},V=o(5705),Y=(0,D.ZP)(V.l0)(p||(p=(0,A.Z)(["\n    display: flex;\n    flex-direction: column;\n    \n    padding: ","px ","px;\n    border: 1px solid black;\n    height: 240px;\n    width: 260px;\n    border-radius: ","px;\n    background-color: #6a6767;\n    color: #ffffff;\n\n    label {\n        display: block;\n        height: 48px;\n        /* margin-bottom: ","px;  */\n        padding-bottom: ","px;       \n    }\n\n    input {\n        display: block;\n        width: 100%;\n        margin-top: 8px;    \n        border-radius: 5px;\n        border: 1px solid #bdbdbd;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;        \n\n        :focus {\n            color: #212529;\n            background-color: #fff;\n            border-color: #bdbdbd;\n            outline: 0;\n            box-shadow: 0 0 0 0.2rem rgba(213, 212, 212, 0.25);\n        }\n        \n    }\n\n    span {        \n        color: ",";\n    }\n\n    button {\n        margin-top: ","px;        \n        width: 150px;\n        height: 50px;\n        border-radius: ","px;\n        cursor: pointer;\n        margin-left: auto;\n        margin-right: auto;\n        color: #c7c6c6;\n        border: 1px solid #5b5b5e;        \n    \n        background-color: #4f5152;\n\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n        :hover,\n        :focus {\n            background-color: #6b6b71;\n            color: #ffffff;\n        }\n    }\n\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii[0]})),Q=D.ZP.button(b||(b=(0,A.Z)(["\n    \n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    color: #c7c6c6;\n    border: 1px solid #5b5b5e;\n    font-size: 64px;\n    \n    background-color: #4f5152;\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n        background-color: #6b6b71;\n        color: #ffffff;\n    }\n"]))),nn=o(5671),en=o(3144),on=o(136),tn=o(3668),rn=o(4164),an=D.ZP.div(f||(f=(0,A.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n\n    .div {\n        position: relative;\n        max-width: calc(100vw - 48px);\n        max-height: calc(100vh - 24px);\n    }  \n\n"]))),cn=D.ZP.button(h||(h=(0,A.Z)(["\n    position: absolute;\n    top: calc(50% - 150px);\n    right: calc(50% - 154px);\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: ","px;\n    height: ","px;\n    color: #000000;\n    border: 1px solid #5b5b5e;\n    font-size: 64px;\n    \n    background-color: #969899;\n    border-radius: ","%;\n    /* border: none; */\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n        background-color: #6b6b71;\n        color: #ffffff;\n    }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii[1]})),dn=o(8985),sn=o.n(dn),ln=o(7103),un=function(n){var e=n.contactData,o=(0,j.I0)(),t=(0,j.v9)(w),r=(0,j.v9)(Z),i=(0,j.v9)(y),a=(0,v.useState)((function(){return{name:e.data.name,number:e.data.number}})),c=(0,m.Z)(a,2),d=c[0],s=c[1];return(0,K.jsx)(V.J9,{initialValues:d,onSubmit:function(n,r){var a=r.resetForm,c=n.name;t.some((function(n){return n.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):e.id?(o((0,P.$Z)({id:e.id,data:n})),s({name:"",number:""})):(o((0,P.uK)(n)),!i&&a())},validationSchema:pn,children:(0,K.jsxs)(Y,{children:[(0,K.jsxs)("label",{children:["Name",(0,K.jsx)(V.gN,{type:"text",name:"name"}),(0,K.jsx)(V.Bc,{name:"name",component:"span"})]}),(0,K.jsxs)("label",{children:["Number",(0,K.jsx)(V.gN,{type:"tel",name:"number"}),(0,K.jsx)(V.Bc,{name:"number",component:"span"})]}),e.id?(0,K.jsxs)("button",{type:"submit",children:["change"===r?(0,K.jsx)(sn(),{color:"#ffffff",height:25}):(0,K.jsx)(K.Fragment,{children:"Change contact"})," "]}):(0,K.jsxs)("button",{type:"submit",children:["add"===r?(0,K.jsx)(sn(),{color:"#ffffff",height:25}):(0,K.jsx)(K.Fragment,{children:"Add contact"})," "]})]})})},pn=ln.Ry().shape({name:ln.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").min(2,"Too Short!").max(70,"Too Long!").required("Required"),number:ln.Z_().matches("\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}","Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),bn=document.querySelector("#modal-root"),fn=function(n){(0,on.Z)(o,n);var e=(0,tn.Z)(o);function o(){var n;(0,nn.Z)(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n.handleBackDropClick=function(e){e.currentTarget===e.target&&n.props.onClose()},n}return(0,en.Z)(o,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this;return(0,rn.createPortal)((0,K.jsx)(an,{onClick:this.handleBackDropClick,children:(0,K.jsxs)("div",{children:[(0,K.jsx)(cn,{type:"button",onClick:function(){return n.props.onClose()},children:(0,K.jsx)(R.oHP,{size:20})}),(0,K.jsx)(un,{contactData:this.props.contactData})]})}),bn)}}]),o}(v.Component),hn=function(){var n=(0,j.I0)(),e=(0,j.v9)(z),o=(0,j.v9)(Z),t=(0,j.v9)(y),r=(0,v.useState)(!1),i=(0,m.Z)(r,2),a=i[0],c=i[1],d=(0,v.useState)({id:null,data:{name:"",number:""}}),s=(0,m.Z)(d,2),l=s[0],u=s[1];(0,v.useEffect)((function(){n((0,P.yF)())}),[n]);return(0,K.jsxs)(M,{children:[(0,K.jsxs)(S,{children:["contacts: ",e.length]}),a&&(0,K.jsx)(fn,{onClose:function(){c(!1),u({id:null,data:{name:"",number:""}})},contactData:l}),(0,K.jsxs)(E,{children:[(0,K.jsx)(L,{}),(0,K.jsx)(Q,{type:"button",onClick:function(){return c(!0)},children:"+"})]}),"fetch"!==o||t?(0,K.jsx)(H,{openModal:function(n){c(!0),u(n)}}):(0,K.jsx)(g(),{})]})}}}]);
//# sourceMappingURL=221.3da4b2af.chunk.js.map