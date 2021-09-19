(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{232:function(n,t,e){"use strict";e.r(t);var a,i,o,r,c,d,l=e(16),s=e.n(l),p=e(46),x=e.n(p),u=e(80),b=e(14),m=e(4),h=e(81),j=e.n(h),f=e(0),g=e(5),w=e(87),O=e(1),v=g.b.div(a||(a=Object(m.a)(["\n  background-color: white;\n  width: 700px;\n  padding: 10px;\n  margin-bottom: 45px;\n  @media (max-width: 480px) {\n    width: 340px;\n    padding: 5px;\n    margin-bottom: 20px;\n  }\n  @media (min-width: 480px) and (max-width: 768px) {\n    width: 400px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n  @media (min-width: 600px) and (max-width: 768px) {\n    width: 530px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]))),C=function(n){var t=n.countries;return Object(O.jsx)(v,{children:Object(O.jsx)(w.a,{type:"bar",data:function(){var n=[],e=[];return t.forEach((function(t){n.push(t.value.TotalConfirmed),e.push(t.value.Country)})),{labels:e,datasets:[{label:"Confirmed Cases",data:n,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}}()})})},y=g.b.div(i||(i=Object(m.a)(["\n  display: flex;\n  gap: 25px;\n  justify-content: center;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    gap: 0;\n  }\n"]))),k=g.b.h3(o||(o=Object(m.a)(["\n  font-size: 30px;\n  @media (max-width: 768px) {\n    font-size: 20px;\n    margin: 0;\n  }\n"]))),z=function(n){var t=n.totalCases,e=n.totalDeaths;return Object(O.jsxs)(y,{children:[Object(O.jsxs)(k,{children:["Cases: ",(new Intl.NumberFormat).format(t)]}),Object(O.jsxs)(k,{children:["Deaths: ",(new Intl.NumberFormat).format(e)]})]})},D=e(86),I=g.b.div(r||(r=Object(m.a)(["\n  width: 720px;\n  color: black;\n\n  @media (max-width: 480px) {\n    width: 350px;\n    font-size: 15px;\n  }\n\n  @media (min-width: 480px) and (max-width: 600px) {\n    width: 420px;\n    font-size: small;\n  }\n\n  @media (min-width: 600px) and (max-width: 768px) {\n    width: 550px;\n    font-size: small;\n  }\n"]))),E=function(n){var t=n.countries,e=n.onItemClick,a=n.handleClearAll,i=[];return t.forEach((function(n){i.push({value:n,label:n.Country})})),Object(O.jsx)(I,{children:Object(O.jsx)(D.a,{options:i,isMulti:!0,closeMenuOnSelect:!1,placeholder:"Select Country...",onChange:function(n){0===n.length?a():e(n)}})})},F=Object(g.a)(c||(c=Object(m.a)(["\n  body {\n    font-family: 'Courier New', Courier, monospace;\n    color: #f74a4a;\n    background-color: #dff;\n    display: flex;\n    justify-content: center;\n    @media (max-width: 768px) {\n      margin-top: 25px;\n    }\n  }\n"]))),S=g.b.h1(d||(d=Object(m.a)(["\n  font-size: 35px;\n  text-decoration: underline;\n  text-align: center;\n  margin-top: 35px;\n  margin-bottom: 0;\n\n  @media (max-width: 768px) {\n    font-size: 25px;\n    margin-top: 25px;\n  }\n"]))),G=function(){var n,t,e=Object(f.useState)(void 0),a=Object(b.a)(e,2),i=a[0],o=a[1],r=Object(f.useState)([]),c=Object(b.a)(r,2),d=c[0],l=c[1],s=function(){var n=Object(u.a)(x.a.mark((function n(){var t,e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.get("https://api.covid19api.com/summary");case 2:return t=n.sent,n.next=5,null===t||void 0===t?void 0:t.data;case 5:e=n.sent,o(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(f.useEffect)((function(){s()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F,{}),i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{children:"Global Covid-19 Data"}),Object(O.jsx)(z,{totalCases:null===i||void 0===i||null===(n=i.Global)||void 0===n?void 0:n.TotalConfirmed,totalDeaths:null===i||void 0===i||null===(t=i.Global)||void 0===t?void 0:t.TotalDeaths}),Object(O.jsx)(C,{countries:d}),Object(O.jsx)(E,{countries:null===i||void 0===i?void 0:i.Countries,onItemClick:function(n){l(n)},handleClearAll:function(){return l([])}})]}):"Loading..."]})};s.a.render(Object(O.jsx)(G,{}),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.cfaa2553.chunk.js.map