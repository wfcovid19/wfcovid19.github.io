(this.webpackJsonpwalthamforestmutualaid=this.webpackJsonpwalthamforestmutualaid||[]).push([[0],{104:function(e,t,n){},106:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),i=n(95),c=n.n(i),l=(n(104),n(17)),s=n(4),h=n(23),u=n.n(h),d=n(35),m=n(16),p=(n(106),{"Cann Hall":{form:"https://forms.gle/oEgHW4ihCU1WCJ7h6",phone:"07895974729",email:"cannhallmutualaid@gmail.com"},Cathall:{form:"https://forms.gle/PwpvE9Vx5MByutuH6",phone:"07926432520",email:"cathall.mutual.aid@gmail.com"},"Chapel End":{phone:"07511290295",form:"https://forms.gle/rqjMNhRofNjruFuS6"},"Chingford Green":{form:"https://forms.gle/t2SSYURZpeMomNrZA",email:"Chingfordgreenmutualaid@gmail.com"},Endlebury:{form:"https://forms.gle/tsULxCCm4s5RH6Aq6",phone:"020 31373908",email:"chingfordcorona@gmail.com"},Forest:{form:"https://forms.gle/L3kuTdaXnMoaSRbh7",phone:"07515637649",email:"forestwardmutualaid@gmail.com"},"Grove Green":{form:"https://forms.gle/hprd7CxdhYojRrgq9",phone:"07933057684",email:"Grovegreenmutualaid@gmail.com"},"Hale End and Highams Park":{form:"https://forms.gle/EV456iu2xMAGE7gy7",phone:"07424807762",email:"highamsparkcovid19@gmail.com"},"Hatch Lane":{form:"https://forms.gle/EV456iu2xMAGE7gy7",phone:"07424807762",email:"highamsparkcovid19@gmail.com"},"High Street":{form:"https://forms.gle/qgJoFgHxcTEGfisQA",phone:"07516922035",email:"e17highstmutualaid@gmail.com"},"Higham Hill":{form:"https://forms.gle/Du6GuazmUsw5grkJA",phone:"07812053838",email:"highamhillmutualaid@gmail.com"},"Hoe Street":{form:"https://forms.gle/mkDdcDrMgC8Zpd1XA",phone:"07566767950",email:"hoestreetmutualaid@gmail.com"},Larkswood:{form:"https://forms.gle/EQvWgyaqPctWKgSF6",phone:"07546155654",email:"larkswoodcovid19@gmail.com"},"Lea Bridge":{form:"https://forms.gle/KV3AUwxbETsbifAQ9",phone:"0208 539 0732 (12:30-3 tuesday-sat); 07731377893; 07952254487",email:"aid@loveleabridge.com"},Leyton:{form:"https://forms.gle/qnWwP7fhhrBLVgoS8",phone:"07814491184, 07907628933, 07985635019, 07446258318 or 07497620579",email:"leytonmutualaid@gmail.com"},Leytonstone:{form:"https://forms.gle/xFBLwJSVXdPVkMhbA",phone:"07933521407",email:"leytonstone.mutual.aid@gmail.com"},Markhouse:{form:"https://forms.gle/uatuTtynRRYxkiiu9",phone:"For QBC Group ring 07512237948",email:"Markhousema@gmail.com"},Valley:{email:"valleymutualaid.walthamforest@gmail.com",form:"https://forms.gle/wcJtUxN5gj3wYupKA"},"William Morris":{form:"https://forms.gle/mLFpYQFsaSJVAQ9PA",phone:"07305960259",email:"Williammorriscovid@gmail.com"},"Wood Street":{form:"https://forms.gle/9nXHfVeyFPvENM9SA",email:"woodstreetmutualaid@gmail.com",facebook:"https://www.facebook.com/groups/woodstmutualaid/",phone:"07862 797 706"}}),j=n(96),f=n.n(j),b=n(10),g=n(15),x=n.n(g),O=n(97),w=n.n(O),v=(n(253),function(e){return Object(o.jsxs)("li",{className:"card-item",children:[Object(o.jsxs)("strong",{children:[Object(o.jsx)("span",{className:"card-icon",children:Object(o.jsx)(b.a,{icon:e.icon})}),e.title]}),e.children]})}),y=function(e){var t=e.ward,n=e.details;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("h3",{children:[t," Mutual Aid"]}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{children:["phone"in n&&Object(o.jsx)(v,{title:"Phone",icon:"phone",children:n.phone}),"email"in n&&Object(o.jsx)(v,{title:"Email",icon:"envelope",children:Object(o.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})}),"facebook"in n&&Object(o.jsx)(v,{title:"Facebook",icon:["fab","facebook-square"],children:Object(o.jsx)("a",{href:n.facebook,target:"_blank",rel:"noreferrer",children:n.facebook})}),"form"in n&&Object(o.jsx)(v,{title:"Signup form",icon:"clipboard-list",children:Object(o.jsx)("a",{href:n.form,target:"_blank",rel:"noreferrer",children:n.form})})]})})]},t)},k=function(){var e,t=function(){var e=a.a.useState(),t=Object(m.a)(e,2),n=t[0],o=t[1],r=a.a.useState(!1),i=Object(m.a)(r,2),c=i[0],l=i[1];return{perform:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.postcodes.io/postcodes/".concat(t));case 3:n=e.sent,o({ward:n.data.result.admin_ward}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o(null),l(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),result:n,clear:function(){o(null),l(!1)},error:c}}(),n=a.a.useState(""),r=Object(m.a)(n,2),i=r[0],c=r[1],l=a.a.useState(!0),s=Object(m.a)(l,2),h=s[0],j=s[1],g=a.a.useRef(null),O=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.perform(i);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e;t.clear(),c(""),null===(e=g.current)||void 0===e||e.focus()},k=null===(e=t.result)||void 0===e?void 0:e.ward;return Object(o.jsxs)("div",{className:"home container",children:[Object(o.jsx)(x.a,{children:"\nWaltham Forest Mutual Aid is a network of local people who have come together to support each other and our neighbours during the pandemic.\n\n---\n\n## Find your local group\n\nThere are many local groups within Waltham Forest. Each group is different, but the kind of support they provide typically includes things like doing shopping or picking up prescriptions.\n\nIf they can't help you directly, they may be able to put you in touch with someone who can.\n\nIf you need help, or would like to get involved, enter your postcode to find the contact details for your local group.\n",allowDangerousHtml:!0}),Object(o.jsx)("div",{className:"postcode-search",children:Object(o.jsxs)("form",{onSubmit:O,children:[Object(o.jsx)("input",{ref:g,placeholder:"Enter your postcode...",type:"text",name:"postcode",onChange:function(e){t.clear(),c(e.target.value)},value:i,autoFocus:!0}),Object(o.jsx)("button",{type:"submit",children:"Search"})]})}),k&&k in p&&Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsxs)("p",{className:"result-description",children:["Your local group is ",k," Mutual Aid.",Object(o.jsx)("small",{style:{display:"block"},children:Object(o.jsx)("button",{className:"link",onClick:v,children:"Clear search"})})]}),Object(o.jsx)(y,{ward:k,details:p[k]})]}),k&&!(k in p)&&Object(o.jsx)(a.a.Fragment,{children:Object(o.jsxs)("p",{className:"result-description",children:["Your ward is ",k,", but this is not in Waltham Forest. Visit"," ",Object(o.jsx)("a",{href:"https://covidmutualaid.org/",target:"_blank",rel:"noreferrer",children:"https://covidmutualaid.org"})," ","to find mutual aid group in other parts of the UK.",Object(o.jsx)("small",{style:{display:"block"},children:Object(o.jsx)("button",{className:"link",onClick:v,children:"Clear search"})})]})}),t.error&&Object(o.jsxs)("p",{className:"result-description",children:["Could not find a local group for that postcode - are you sure you've typed it correctly?",Object(o.jsx)("small",{style:{display:"block"},children:Object(o.jsx)("button",{className:"link",onClick:v,children:"Clear search"})})]}),!k&&Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("p",{className:"full-list-toggle",children:Object(o.jsxs)("button",{className:"text",onClick:function(){return j(!h)},children:[h?"Hide":"See"," the full list"," ",Object(o.jsx)(b.a,{icon:h?"caret-up":"caret-down"})]})}),h&&Object(o.jsx)("div",{className:"results",children:f.a.map(p,(function(e,t){return Object(o.jsx)(y,{ward:t,details:e},t)}))})]})]})},F=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(x.a,{children:'## Toolkit\n\nA collection of resources for people setting up their own mutual aid group.\n\n<iframe src="https://drive.google.com/embeddedfolderview?id=1GUQEblXqHO8Eevkna2yXHHpTIEk9S5t2#list" style="width:100%; height:600px; border:1px solid black;"></iframe>\n\n---\n\n## Safer spaces policy\n\nThe Safer spaces policy adopted by Waltham Forest Mutual Aid.\n\n<iframe width="100%" height="1000px" src="https://docs.google.com/document/d/e/2PACX-1vSMRoAknHtifyWAFc3TMPs2rH97APM4GjGocQP1H-J34F0dL3oU0yMkJErKhMZG8PL7HiTWNo_4WVF7/pub?embedded=true"></iframe>\n',allowDangerousHtml:!0})})},S=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(x.a,{children:'## Signposting\n\n<a href="https://www.wfchub.org/" target="_blank" rel="noreferrer">Watham Forest Community Hub</a> have put together a map of organisations in Waltham Forest who are working to support people during the pandemic.\n\n<img src="/img/map.jpg" width="100%" />\n\n---\n\nWaltham Forest Mutual Aid has collected a directory of resources, organisations, and services that can help with specific issues.\n\n<iframe src="https://drive.google.com/embeddedfolderview?id=1mIYjr_4yBWhicsYuKoXV3YNeKLdFkun2#list" style="width:100%; height:600px; border:1px solid black;">\n</iframe>\n\n---\n\n## Outreach\n\nThe outreach group is a community based support group within the mutual aid group that is liaising with services in the following sectors, as well as reaching out to the most vulnerable in the community.\n\n* Homelessness and housing\n* Domestic and sexual violence\n* LGTBQ\n* Migrants and refugees\n* Food banks, hot meals\n* Mental Health\n* Disability\n* Care work\n* Addiction\n* Young people\n\nContact: <a href="mailto:outreachwfc19@protonmail.com">outreachwfc19@protonmail.com</a>.\n\n<img src="/img/outreach.jpg" width="100%" />\n',allowDangerousHtml:!0})})},C=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(x.a,{children:'## Our stories\n\n<div style="text-align: center; margin-top: 25px;">\n<iframe style="margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/ILXwnza5XAs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',allowDangerousHtml:!0})})},A=(n(254),function(){return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Find your local group"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/toolkit",children:"Toolkit"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/signposting",children:"Signposting"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/stories",children:"Stories"})})]})}),H=function(){var e=function(){var e=a.a.useState(!1),t=Object(m.a)(e,2),n=t[0],o=t[1];return a.a.useEffect((function(){if(n){var e=function(){return o(!1)};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}}),[n]),{open:n,toggle:function(){return o((function(e){return!e}))}}}();return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:Object(o.jsxs)(l.b,{to:"/",children:[Object(o.jsx)("strong",{children:"Waltham Forest"})," Mutual Aid"]})})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:e.open?"navbar-open":"navbar-closed",children:[e.open&&Object(o.jsx)(A,{}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:e.toggle,children:Object(o.jsx)(b.a,{icon:e.open?"caret-up":"bars"})})})]})})]})},N=(n(256),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://facebook.com/groups/wfcoronavirus",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(b.a,{icon:["fab","facebook-square"]})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:walthamforestmutualaid@gmail.com",children:Object(o.jsx)(b.a,{icon:"envelope"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://twitter.com/WalthamAid",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(b.a,{icon:["fab","twitter"]})})})]})})}),M=function(){return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{id:"main",children:[Object(o.jsx)(H,{}),Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"/",component:k,exact:!0}),Object(o.jsx)(s.a,{path:"/toolkit",component:F,exact:!0}),Object(o.jsx)(s.a,{path:"/signposting",component:S,exact:!0}),Object(o.jsx)(s.a,{path:"/stories",component:C,exact:!0})]}),Object(o.jsx)(N,{})]})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),a(e),i(e)}))},W=n(26),L=n(19),P=n(57);W.b.add(L.d,L.b,L.c,L.f,L.e,L.a,P.b,P.a),c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),E()}},[[257,1,2]]]);
//# sourceMappingURL=main.37917927.chunk.js.map