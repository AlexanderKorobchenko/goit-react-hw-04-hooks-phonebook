(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__1EPtL",label:"ContactForm_label__1Qt3A",input:"ContactForm_input__1RhfR",input_number:"ContactForm_input_number__1RJhT",button:"ContactForm_button__3mtX9"}},,,,function(t,e,n){t.exports={list:"ContactList_list__3edov",item:"ContactList_item__1u0Xw",button:"ContactList_button__1dt61"}},,function(t,e,n){t.exports={label:"Filter_label__31bVX",input:"Filter_input__2ZV4J"}},,,function(t,e,n){t.exports={container:"Container_container__3EyVN"}},function(t,e,n){t.exports={title:"Section_title__2esD-"}},,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(18),n(10)),s=n(4),l=n(12),u=n.n(l),b=n(0);var m=function(t){var e=t.children;return Object(b.jsx)("div",{className:u.a.container,children:e})},d=n(2),j=n.n(d),f=n(13),p=n.n(f);function h(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:p.a.title,children:e}),n]})}h.protoType={title:j.a.string};var _=h,O=n(24),x=n(3),v=n.n(x);function C(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],m=l[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},j=function(){i(""),m("")};return Object(b.jsxs)("form",{className:v.a.form,onSubmit:function(t){t.preventDefault();var n={id:Object(O.a)(),name:r,number:u};e(n),j()},children:[Object(b.jsxs)("label",{className:v.a.label,children:["Name",Object(b.jsx)("input",{className:v.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d,value:r})]}),Object(b.jsxs)("label",{className:v.a.label,children:["Number",Object(b.jsx)("input",{className:v.a.input_number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d,value:u})]}),Object(b.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}C.protoType={onSubmit:j.a.func};var g=C,N=n(9),S=n.n(N),y=function(t){var e=t.filter,n=t.onChangeFilter;return Object(b.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(b.jsx)("input",{className:S.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",required:!0,onChange:n,value:e})]})};y.protoType={filter:j.a.string,onChangeFilter:j.a.func};var A=y,F=n(7),k=n.n(F),w=function(t){var e=t.contacts,n=t.deleteContact;return Object(b.jsx)("ul",{className:k.a.list,children:e.map((function(t){return Object(b.jsxs)("li",{className:k.a.item,children:[Object(b.jsxs)("span",{children:[t.name,": ",t.number]}),Object(b.jsx)("button",{className:k.a.button,type:"button",id:t.id,onClick:function(){return n(t.id)},children:"remove"})]},t.id)}))})},L=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var z=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:L})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],u=i[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=function(t){c(Object(o.a)(n.filter((function(e){return e.id!==t}))))};return Object(b.jsxs)(m,{children:[Object(b.jsx)(_,{title:"Phonebook",children:Object(b.jsx)(g,{onSubmit:function(t){if(n.some((function(e){return e.name.includes(t.name)})))return alert("".concat(t.name," is already in contacts!"));c([].concat(Object(o.a)(n),[t]))}})}),Object(b.jsxs)(_,{title:"Contacts",children:[Object(b.jsx)(A,{filter:l,onChangeFilter:function(t){u(t.currentTarget.value.toLocaleLowerCase())}}),""===l?Object(b.jsx)(w,{contacts:n,deleteContact:d}):Object(b.jsx)(w,{contacts:n.filter((function(t){return t.name.toLocaleLowerCase().includes(l)})),deleteContact:d})]})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.942089b0.chunk.js.map