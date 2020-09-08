(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),o=t.n(l),c=(t(19),t(2)),u=function(e){return r.a.createElement("button",{type:e.type,onClick:e.handleClick},e.text)},i=u,m=function(e){var n=e.filteredString,t=e.handleFilterChange;return r.a.createElement("input",{value:n,onChange:t,placeholder:"filter by name"})},s=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,l=e.handleNumberChange,o=e.addContact;return r.a.createElement("form",null,r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement(u,{handleClick:o,text:"add",type:"submit"})))},d=function(e){var n=e.message;if(null===n.msg)return null;var t=null;return"error"===n.type&&(t={padding:"4px",border:"1px solid black",backgroundColor:"red",display:"inline-block"}),"success"===n.type&&(t={padding:"4px",border:"1px solid black",backgroundColor:"green",display:"inline-block"}),r.a.createElement("div",{className:"error",style:t},n.msg)},f=t(3),h=t.n(f),p="/api/persons",g=function(){return h.a.get(p).then((function(e){return e.data}))},b=function(e){return h.a.post(p,e).then((function(e){return e.data}))},E=function(e){return h.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},y=function(e){var n=e.person,t=e.deleteContact;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement(i,{handleClick:function(){return t(n.id,n.name)},type:"submit",text:"delete"})))},C=function(e){var n=e.persons,t=e.filteringString,a=e.deleteContact;if(0===n.length)return r.a.createElement("h4",null,"No numbers yet. Add some using the form above.");var l=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).sort((function(e,n){return e.name.toLowerCase()>n.name.toLowerCase()?1:-1}));return console.log(l),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Phone number")),l.map((function(e){return r.a.createElement(y,{key:e.id,person:e,deleteContact:a})}))))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)(""),u=Object(c.a)(o,2),i=u[0],f=u[1],h=Object(a.useState)(""),p=Object(c.a)(h,2),y=p[0],w=p[1],k=Object(a.useState)(""),N=Object(c.a)(k,2),j=N[0],O=N[1],S=Object(a.useState)({msg:null,type:null}),x=Object(c.a)(S,2),L=x[0],A=x[1],B=function(){return{name:i,number:y}},D=function(){f(""),w("")},F=function(){setTimeout((function(){A({msg:null,type:null})}),5e3)};Object(a.useEffect)((function(){g().then((function(e){l(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook app"),r.a.createElement("h2",null,"Add a new number"),r.a.createElement(s,{newName:i,handleNameChange:function(e){f(e.target.value)},newNumber:y,handleNumberChange:function(e){w(e.target.value)},addContact:function(e){if(e.preventDefault(),""===i)A({msg:"Name cannot be empty.",type:"error"}),F();else if(""===y)A({msg:"Number cannot be empty.",type:"error"}),F();else if(t.some((function(e){return e.name===i}))){var n=t.find((function(e){return e.name===i})).id;if(window.confirm("".concat(i," is already added to phonebook. Change the number?"))){var a=B();v(n,a).then((function(e){l(t.map((function(t){return t.id!==n?t:e}))),D(),A({msg:"".concat(i," modified."),type:"success"}),F()})).catch((function(e){A({msg:"The contact was already deleted from the server. Refreshing the contact list.",type:"error"}),g().then((function(e){l(e)})),F()}))}}else{var r=B();b(r).then((function(e){l(t.concat(e)),D(),A({msg:"".concat(i," added."),type:"success"}),F()}))}}}),r.a.createElement(d,{message:L}),r.a.createElement("h3",null,"Numbers ",r.a.createElement(m,{filteringString:j,handleFilterChange:function(e){O(e.target.value)}})),r.a.createElement(C,{persons:t,filteringString:j,deleteContact:function(e,n){window.confirm("Delete ".concat(n," from phonebook?"))&&E(e).then((function(){l(t.filter((function(n){return e!==n.id}))),A({msg:"".concat(n," deleted."),type:"success"}),F()}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ea999711.chunk.js.map