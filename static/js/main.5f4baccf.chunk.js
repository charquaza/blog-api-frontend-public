(this["webpackJsonpblog-api-frontend-public"]=this["webpackJsonpblog-api-frontend-public"]||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),o=(n(21),n(2)),i=n(8),u=n(3),j=n(0);var l=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1];Object(r.useEffect)((function(){c&&(localStorage.removeItem("user"),localStorage.removeItem("token"),s(!1),e.setCurrUser(null))}));var a=e.currUser?[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})},"home")]:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})},"home"),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/sign-up",children:"Sign Up"})},"signup"),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/log-in",children:"Log In"})},"login")],u=e.currUser?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Welcome, ",e.currUser.first_name,"\xa0",e.currUser.last_name,"\xa0(",e.currUser.username,")"]}),Object(j.jsx)("button",{onClick:function(){s(!0)},children:"Log Out"})]}):null;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"The Blog"}),u,Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:a})})]})};var b=function(e){var t=e.postData,n=t.author;return Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("h3",{children:Object(j.jsx)(i.b,{to:"/posts/"+t._id,children:t.title})})}),Object(j.jsxs)("li",{children:[n.username," (",n.first_name," ",n.last_name,") ",t.timestamp]}),Object(j.jsx)("li",{children:t.content})]})};var d=function(e){var t=e.postList.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(b,{postData:e})},e._id)}));return Object(j.jsxs)("main",{children:[Object(j.jsxs)("h2",{children:["Welcome to ",Object(j.jsx)("em",{children:"The Blog"})]}),Object(j.jsx)("ul",{children:t})]})},h=n(9),O=n(7);var m=function(e){var t=e.currUser,n=e.commentData,c=n.author,s=t&&(t.is_admin||t._id===c._id),i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)(!1),m=Object(o.a)(d,2),f=m[0],p=m[1],x=Object(r.useState)(!1),g=Object(o.a)(x,2),v=g[0],U=g[1],S=Object(r.useState)(null),w=Object(o.a)(S,2),_=w[0],C=w[1],L=Object(r.useState)({content:n.content}),y=Object(o.a)(L,2),E=y[0],k=y[1];return Object(r.useEffect)((function(){if(f){var t=e.apiURL+"/posts/"+n.post+"/comments/"+n._id,r={method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify(E),mode:"cors"};fetch(t,r).then((function(e){return e.json()})).then((function(t){if(!t)throw new Error("Server error");t.errors?a.a.unstable_batchedUpdates((function(){C(t.errors),p(!1)})):(a.a.unstable_batchedUpdates((function(){p(!1),b(!1)})),e.setDataNeedsUpdate(!0))})).catch((function(e){console.log(e),a.a.unstable_batchedUpdates((function(){C([e.message]),p(!1)}))}))}})),Object(r.useEffect)((function(){if(v){var t=e.apiURL+"/posts/"+n.post+"/comments/"+n._id,r={method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")},mode:"cors"};fetch(t,r).then((function(e){return e.json()})).then((function(t){if(!t)throw new Error("Server error");t.errors?a.a.unstable_batchedUpdates((function(){C(t.errors),U(!1)})):(U(!1),e.setDataNeedsUpdate(!0))})).catch((function(e){console.log(e),a.a.unstable_batchedUpdates((function(){C([e.message]),U(!1)}))}))}})),Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[c.username," (",c.first_name," ",c.last_name,") ",n.timestamp]}),Object(j.jsx)("li",{children:l?Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),U(!1),C(null)},children:[Object(j.jsx)("textarea",{id:"content",name:"content",required:!0,value:E.content,onChange:function(e){var t=e.target;k((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.name,t.value))}))}}),Object(j.jsx)("button",{children:"Save"})]}):n.content})]}),_&&Object(j.jsx)("ul",{children:_.map((function(e){return Object(j.jsx)("li",{children:e},e)}))}),s&&!v&&!f&&(l?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{onClick:function(){b(!1),C(null),k({content:n.content})},children:"Cancel"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(e){b(!0),C(null)},children:"Edit"}),Object(j.jsx)("button",{onClick:function(){U(!0),p(!1),C(null)},children:"Delete"})]}))]})};var f=function(e){var t=Object(r.useState)({content:""}),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)([]),m=Object(o.a)(d,2),f=m[0],p=m[1];return Object(r.useEffect)((function(){if(l){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(c),mode:"cors"},n=e.apiURL+"/posts/"+e.postId+"/comments";fetch(n,t).then((function(e){if(e.ok||400===e.status)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(t){t.errors?a.a.unstable_batchedUpdates((function(){p(t.errors),b(!1)})):(a.a.unstable_batchedUpdates((function(){s({content:""}),b(!1)})),e.setDataNeedsUpdate(!0))})).catch((function(e){console.log(e),a.a.unstable_batchedUpdates((function(){p([e.message]),b(!1)}))}))}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p([]),b(!0)},children:[Object(j.jsx)("label",{htmlFor:"content",children:"New Comment: "}),Object(j.jsx)("textarea",{id:"content",name:"content",required:!0,value:c.content,onChange:function(e){var t=e.target;s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.name,t.value))}))}}),Object(j.jsx)("button",{type:"submit",children:"Post Comment"})]}),f.length>0&&Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})};var p=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)([]),l=Object(o.a)(i,2),b=l[0],d=l[1],h=Object(r.useState)(null),O=Object(o.a)(h,2),p=O[0],x=O[1],g=Object(r.useState)(!1),v=Object(o.a)(g,2),U=v[0],S=v[1],w=Object(u.h)();Object(r.useEffect)((function(){if(!(p||c&&!U)){var t=e.apiURL+"/posts/"+w.id;fetch(t,{method:"GET",mode:"cors"}).then((function(e){if(e.ok)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(e){a.a.unstable_batchedUpdates((function(){s(e.data),S(!1)}))})).catch((function(e){console.log(e),x(e.message)}))}})),Object(r.useEffect)((function(){if(!(p||c&&!U)){var t=e.apiURL+"/posts/"+w.id+"/comments";fetch(t,{method:"GET",mode:"cors"}).then((function(e){if(e.ok)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(e){d(e.data)})).catch((function(e){console.log(e),x(e.message)}))}}));var _=b.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(m,{commentData:t,currUser:e.currUser,apiURL:e.apiURL,setDataNeedsUpdate:S})},t._id)}));return Object(j.jsx)("main",{children:p?Object(j.jsx)("p",{children:p}):c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:c.title}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[c.author.username," (",c.author.first_name,"\xa0",c.author.last_name,") ",c.timestamp]}),Object(j.jsx)("li",{children:c.content})]}),Object(j.jsx)("ul",{children:_}),e.currUser&&Object(j.jsx)(f,{apiURL:e.apiURL,postId:w.id,setDataNeedsUpdate:S})]}):Object(j.jsx)("p",{children:"Loading post..."})})};var x=function(e){var t=Object(r.useState)({first_name:"",last_name:"",username:"",password:"",confirm_password:""}),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)([]),m=Object(o.a)(d,2),f=m[0],p=m[1];function x(e){var t=e.target;s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.name,t.value))}))}return Object(r.useEffect)((function(){if(l){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),mode:"cors"};fetch(e.apiURL+"/sign-up",t).then((function(e){if(e.ok||400===e.status)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(t){t.errors?a.a.unstable_batchedUpdates((function(){p(t.errors),b(!1)})):(localStorage.setItem("user",JSON.stringify(t.user)),localStorage.setItem("token",t.token),e.setCurrUser(t.user))})).catch((function(e){console.log(e),a.a.unstable_batchedUpdates((function(){p([e.message]),b(!1)}))}))}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p([]),b(!0)},children:[Object(j.jsx)("label",{htmlFor:"first_name",children:"First Name: "}),Object(j.jsx)("input",{type:"text",id:"first_name",name:"first_name",required:!0,maxLength:"100",value:c.first_name,onChange:x}),Object(j.jsx)("label",{htmlFor:"last_name",children:"Last Name: "}),Object(j.jsx)("input",{type:"text",id:"last_name",name:"last_name",required:!0,maxLength:"100",value:c.last_name,onChange:x}),Object(j.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(j.jsx)("input",{type:"text",id:"username",name:"username",required:!0,maxLength:"100",value:c.username,onChange:x}),Object(j.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(j.jsx)("input",{type:"password",id:"password",name:"password",required:!0,value:c.password,onChange:x}),Object(j.jsx)("label",{htmlFor:"confirm_password",children:"Confirm Password: "}),Object(j.jsx)("input",{type:"password",id:"confirm_password",name:"confirm_password",required:!0,value:c.confirm_password,onChange:x}),Object(j.jsx)("button",{type:"submit",children:"Sign Up"})]}),f.length>0&&Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})};var g=function(e){var t=Object(r.useState)({username:"",password:""}),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)([]),m=Object(o.a)(d,2),f=m[0],p=m[1];function x(e){var t=e.target;s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.name,t.value))}))}return Object(r.useEffect)((function(){if(l){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),mode:"cors"};fetch(e.apiURL+"/log-in",t).then((function(e){if(e.ok||401===e.status)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(t){t.errors?a.a.unstable_batchedUpdates((function(){p(t.errors),b(!1)})):(localStorage.setItem("user",JSON.stringify(t.user)),localStorage.setItem("token",t.token),e.setCurrUser(t.user))})).catch((function(e){console.log(e),a.a.unstable_batchedUpdates((function(){p([e.message]),b(!1)}))}))}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p([]),b(!0)},children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(j.jsx)("input",{type:"text",id:"username",name:"username",value:c.username,required:!0,maxLength:"100",onChange:x}),Object(j.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(j.jsx)("input",{type:"password",id:"password",name:"password",value:c.password,required:!0,onChange:x}),Object(j.jsx)("button",{type:"submit",children:"Log In"})]}),f.length>0&&Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})};var v=function(e){var t,n,r=Object(u.g)();return e.currUser?Object(j.jsx)(u.a,{to:"/"}):("/sign-up"===r.pathname&&(t="Sign Up",n=Object(j.jsx)(x,{apiURL:e.apiURL,setCurrUser:e.setCurrUser})),"/log-in"===r.pathname&&(t="Log In",n=Object(j.jsx)(g,{apiURL:e.apiURL,setCurrUser:e.setCurrUser})),Object(j.jsxs)("main",{children:[Object(j.jsx)("h2",{children:t}),n]}))};var U=function(){return Object(j.jsx)("main",{children:Object(j.jsx)("h2",{children:"404: Not Found"})})};n(31);var S=function(){var e=Object(r.useState)(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(o.a)(s,2),b=a[0],h=a[1],O="http://localhost:3000";return Object(r.useEffect)((function(){fetch(O+"/posts",{method:"GET",mode:"cors"}).then((function(e){if(e.ok)return e.json();throw new Error("Server responded with: "+e.status)})).then((function(e){return h(e.data)})).catch((function(e){console.log(e)}))}),[n]),Object(j.jsxs)(i.a,{children:[Object(j.jsx)(l,{currUser:n,setCurrUser:c}),Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:["/sign-up","/log-in"],children:Object(j.jsx)(v,{currUser:n,setCurrUser:c,apiURL:O})}),Object(j.jsx)(u.b,{path:"/posts/:id",children:Object(j.jsx)(p,{apiURL:O,currUser:n})}),Object(j.jsx)(u.b,{exact:!0,path:"/",children:Object(j.jsx)(d,{postList:b})}),Object(j.jsx)(u.b,{path:"/",children:Object(j.jsx)(U,{})})]})]})};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5f4baccf.chunk.js.map