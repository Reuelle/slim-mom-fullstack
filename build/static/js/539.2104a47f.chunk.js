"use strict";(self.webpackChunkslim_mom_project=self.webpackChunkslim_mom_project||[]).push([[539],{539:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(2791),r=t(5861),s=t(9439),o=t(7757),i=t.n(o),l="LoginForm_formTitle__B+G+l",c="LoginForm_inputBox__rMJ5f",u="LoginForm_buttonContainer__s6Gsn",d="LoginForm_button__SMcn1",m="LoginForm_active__JkB3n",p=t(7689),g=t(3016),h=t(2564),f=t(9900),v=(t(5462),t(184));g.Z.defaults.baseURL="https://slim-mom-project.onrender.com";var x=function(e){var n=e.onLogin,t=(0,a.useState)(""),o=(0,s.Z)(t,2),x=o[0],_=o[1],j=(0,a.useState)(""),b=(0,s.Z)(j,2),L=b[0],k=b[1],w=(0,a.useState)(!1),y=(0,s.Z)(w,2),C=y[0],N=y[1],S=(0,p.s0)(),F="/login"===(0,p.TH)().pathname,Z=function(){var e=(0,r.Z)(i().mark((function e(t){var a,r,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.prev=2,e.next=5,g.Z.post("/api/users/login",{email:x,password:L});case 5:a=e.sent,console.log(a.data),r=a.data,s=r.token,o=r.name,l=r.dailyConsumedProducts,s?(localStorage.setItem("token",s),localStorage.setItem("userName",o),localStorage.setItem("dailyConsumedProducts",JSON.stringify(l)),g.Z.defaults.headers.common.Authorization="Bearer ".concat(s),h.Am.success("Login successful!"),n(),S("/calculator")):h.Am.error("Login failed. Please try again."),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response&&e.t0.response.data.message?h.Am.error(e.t0.response.data.message):h.Am.error("Login failed. Please check your credentials and try again.");case 14:return e.prev=14,N(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h4",{children:"LOG IN"}),(0,v.jsxs)("form",{onSubmit:Z,children:[(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("input",{type:"email",name:"email",id:"email",placeholder:" ",value:x,onChange:function(e){return _(e.target.value)},required:!0}),(0,v.jsx)("label",{htmlFor:"email",children:"Email*"})]}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("input",{type:"password",name:"password",id:"password",placeholder:" ",value:L,onChange:function(e){return k(e.target.value)},required:!0}),(0,v.jsx)("label",{htmlFor:"password",children:"Password*"})]}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("button",{className:"".concat(d," ").concat(F?m:""),type:"submit",disabled:C,children:C?(0,v.jsx)(f.s5,{visible:!0,height:"24",width:"24",color:"white",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"}):"Log in"}),(0,v.jsx)("button",{className:d,type:"button",onClick:function(){return S("/register")},children:"Register"})]})]}),(0,v.jsx)(h.Ix,{position:"top-right",autoClose:3e3})]})})},_="LoginPage_backgroundContainer__wYg6L",j=function(e){var n=e.onLogin;return(0,v.jsx)("div",{className:_,children:(0,v.jsx)(x,{onLogin:n})})}}}]);
//# sourceMappingURL=539.2104a47f.chunk.js.map