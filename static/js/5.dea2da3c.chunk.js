(this["webpackJsonplck-stats"]=this["webpackJsonplck-stats"]||[]).push([[5],{106:function(e,n,t){"use strict";t.r(n);var a=t(79),r=t(0),c=t.n(r),l=t(80),i=t(103),o=t(95),u=t(94),d=t(96),m=(t(90),t(81)),s=t(85),f=c.a.memo((function(e){var n=e.name,t=e.desc,a=e.handleChangeCheck,r=e.checkFlag;return c.a.createElement(s.a.Check,{key:n,type:"checkbox",id:n,label:c.a.createElement(c.a.Fragment,null,c.a.createElement("b",null,n),c.a.createElement("small",null,t?" - "+t:"")),onChange:a,checked:r})}),(function(e,n){return e.checkFlag===n.checkFlag}));function p(){var e=Object(a.a)(["\n    border-radius: 20px;\n    background-color: #495057;\n    color: white;\n    width: 60px;\n    height: 28px;\n    text-align: center;\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #C0C0C0, 0 0 30px #C0C0C0, 0 0 40px #C0C0C0, 0 0 55px #C0C0C0, 0 0 75px #C0C0C0;\n    cursor: pointer;\n    box-shadow: 5px 5px 5px gray;\n"]);return p=function(){return e},e}var b=l.a.div(p()),g=function(){var e=Object(m.a)(),n=e.statList,t=e.selectedStat,a=e.handleChangeCheck,l=e.handleAllCheck,i=Object(r.useState)(!1),s=Object(o.a)(i,2),p=s[0],g=s[1],h=function(){return g(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{onClick:function(){return g(!0)}},c.a.createElement("small",null,c.a.createElement("b",null,"Add Stat"))),c.a.createElement(u.a,{show:p,onHide:h},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Stat View/Hide")),c.a.createElement(u.a.Body,null,n.map((function(e){var n=e.name,r=e.desc,l=t.includes(n);return c.a.createElement(f,{key:n,name:n,desc:r,handleChangeCheck:a,checkFlag:l})}))),c.a.createElement(u.a.Footer,null,c.a.createElement(d.a,{variant:"primary",onClick:l},"All Check"),c.a.createElement(d.a,{variant:"secondary",onClick:h},"Close"))))},h=t(82),x=t(83),v=t.n(x),E=t(88);function y(){var e=Object(a.a)(["\n    .modal-dialog {\n        width: fit-content;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(a.a)(["\n    height: 750px;\n    overflow-y: scroll;\n\n    @media screen and (max-width: 1025px) {\n        height: 600px;\n    }\n\n    @media screen and (max-width: 480px) {\n        height: 500px;\n    }\n"]);return k=function(){return e},e}function j(){var e=Object(a.a)(["\n    align-self: center;\n    font-weight: bold;\n"]);return j=function(){return e},e}function O(){var e=Object(a.a)(["\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: larger;\n    padding: 3px 10px;\n"]);return O=function(){return e},e}function C(){var e=Object(a.a)(["\n    display: flex;\n\n    @media screen and (max-width: 1420px) {\n        flex-flow: column;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function w(){var e=Object(a.a)(["\n    width: 80px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    border-radius: 50%;\n    margin: 1rem .3rem .3rem .3rem;\n    border: 1px inset;\n"]);return w=function(){return e},e}function S(){var e=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    position: relative;\n"]);return S=function(){return e},e}function P(){var e=Object(a.a)(["\n    // border: solid #ccc;\n    // border-style: dashed;\n    // border-radius: 25px; \n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    text-shadow: 5px 5px 0 #e2e2e2;\n    font-size: 1.5rem;\n    color: #909090;\n    height: -webkit-fill-available;\n    justify-content: center;\n    text-align: center;\n    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('choose-player.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    min-height: 500px;\n"]);return P=function(){return e},e}var F=l.a.div(P()),L=l.a.div(S()),N=l.a.div(w()),z=l.a.div(C()),A=l.a.div(O()),M=l.a.h4(j()),R=Object(l.a)(u.a.Body)(k()),T=v()(Object(l.a)(u.a))(y()),W=c.a.memo((function(e){var n=e.id,t=Object(m.a)(),a=t.players,l=t.handleRemoveSelect,i=t.handleAddPlayer,s=Object(r.useState)(!1),f=Object(o.a)(s,2),p=f[0],b=f[1],g=function(){return b(!1)};return c.a.createElement(c.a.Fragment,null,0===Object.keys(a[n-1]).length?c.a.createElement(F,{onClick:function(){return b(!0)}},c.a.createElement("p",null,c.a.createElement("b",null,"Choose",c.a.createElement("br",null)," Player"))):c.a.createElement(L,null,c.a.createElement(A,{onClick:function(e){return l(n)}},"\xd7"),c.a.createElement(N,null,c.a.createElement("img",{src:"player/".concat(a[n-1].Player,".png"),onError:function(e){e.currentTarget.onerror=null,e.currentTarget.src="player/noplayer.png"},alt:a[n-1].Player})),c.a.createElement(z,null,c.a.createElement("img",{src:"position/".concat(a[n-1].Position,".png"),alt:a[n-1].Position}),c.a.createElement(M,null,a[n-1].Player))),c.a.createElement(T,{show:p,onHide:g},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Players")),c.a.createElement(R,null,c.a.createElement(E.a,{statList:[{name:"Player",desc:""},{name:"Position",desc:""},{name:"Games",desc:""}],recordPosition:"",showRegular:!1,id:n,handleClose:g,handleAddPlayer:i,isPlayerSelector:!0})),c.a.createElement(u.a.Footer,null,c.a.createElement(d.a,{variant:"secondary",onClick:g},"Close"))))})),D=t(102);function H(){var e=Object(a.a)(["\n    padding: 1rem 0 1rem 0;\n"]);return H=function(){return e},e}function B(){var e=Object(a.a)(["\n    @media screen and (max-width: 1280px) {\n        display: none;\n    }\n"]);return B=function(){return e},e}function J(){var e=Object(a.a)(["\n    width: calc(100% * "," / ",");\n    height: 10px;\n    background-color: ",";\n    border-radius: 1rem;\n    transition: 1s ease;\n    transitionDelay: 0.5s;\n"]);return J=function(){return e},e}function G(){var e=Object(a.a)(["\n    background-color: #E9E9E9;\n    border-radius: .5rem;\n"]);return G=function(){return e},e}function K(){var e=Object(a.a)(["\n    padding: .35rem .5rem .35rem .5rem\n"]);return K=function(){return e},e}var I=v()(l.a.div).attrs((function(e){return{key:e.key}}))(K()),V=l.a.div(G()),_=v()(l.a.div)(J(),(function(e){return e.val}),(function(e){return e.maxStat}),(function(e){var n=e.id,t=e.mark,a="";switch(n){case 1:a=t?"#e03131":"#ff8787";break;case 2:a=t?"#f76707":"#ffc078";break;case 3:a=t?"#099268":"#63e6be";break;case 4:a=t?"#3b5bdb":"#91a7ff";break;case 5:a=t?"#6741d9":"#b197fc"}return a})),q=l.a.span(B()),Q=l.a.div(H()),U=c.a.memo((function(e){var n=e.id,t=Object(m.a)(),a=t.players,r=t.selectedStat,l=t.maxStats;return c.a.createElement(Q,null,c.a.createElement("div",null,Object.keys(a[n-1]).length>0?Object.keys(a[n-1]).map((function(e){if("Player"!==e&&"Position"!==e&&"Team"!==e&&r.includes(e)){var t="number"===typeof a[n-1][e]?a[n-1][e]:Number((a[n-1][e]||"0").replace(/[^0-9.]/g,"")),i=t===l[e];return c.a.createElement(I,{key:e},i?c.a.createElement("div",null,c.a.createElement("small",null,c.a.createElement("b",null,e," (",a[n-1][e],")  "),c.a.createElement(q,null,"     ",c.a.createElement(D.a,{variant:"dark"},"best"),"      "))):c.a.createElement("div",null,c.a.createElement("small",null,e," (",a[n-1][e],")")),c.a.createElement(V,null,c.a.createElement(_,{maxStat:l[e],val:t,id:n,mark:i})))}return null})):c.a.createElement("div",null)))})),X=t(25),Y=t(26),Z=t(27),$=function(){var e=Object(X.c)((function(e){return e.tournament})),n=e.pending,t=e.error,a=e.data,c=Object(X.c)((function(e){return e.player})).tournament,l=Object(X.b)();return Object(r.useEffect)((function(){l(Y.b(c)),l(Z.f())}),[l,c]),{pending:n,error:t,data:a}},ee=t(89);function ne(){var e=Object(a.a)(["\n    float: left;\n    display: inline-block;\n    margin: 10px;\n    width: 25%;\n    max-width: 230px;\n    min-width: 130px;\n\n    ","\n\n    @media screen and (max-width: 865px) {\n        margin: 5px;\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(a.a)(["\n    position: fixed;\n    top: 100px;\n    left: 180px;\n    zIndex: 100;\n\n    @media screen and (max-width: 1150px) {\n        left: 25px;\n    }\n\n    @media screen and (max-width: 321px) {\n        top: 130px;\n        left: 5px;\n    }\n"]);return te=function(){return e},e}var ae=l.a.div(te()),re=l.a.section(ne(),(function(e){var n=e.id;if(Number(n)>0){var t="";switch(Number(n)){case 1:t="#ffa8a8";break;case 2:t="#ffc078";break;case 3:t="#63e6be";break;case 4:t="#91a7ff";break;case 5:t="#b197fc";break;default:t="#ccc"}return"border: solid ".concat(t,";\n                    border-radius: 10px;")}return"border: solid #ccc;\n                    border-style: dashed;\n                    border-radius: 10px; "}));n.default=function(){var e=$(),n=e.pending,t=e.error,a=Object(m.a)().players;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ee.a,null),c.a.createElement(h.b,null,c.a.createElement(ae,null,c.a.createElement(g,null)),c.a.createElement(h.c,null,n&&c.a.createElement(i.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),t?c.a.createElement("h1",null,"Sorry. Data could not be loaded."):c.a.createElement(c.a.Fragment,null,c.a.createElement(re,{id:Object.keys(a[0]).length>0?"1":"0"},c.a.createElement(W,{id:1}),c.a.createElement(U,{id:1})),c.a.createElement(re,{id:Object.keys(a[1]).length>0?"2":"0"},c.a.createElement(W,{id:2}),c.a.createElement(U,{id:2})),Object.keys(a[0]).length>0&&Object.keys(a[1]).length>0?c.a.createElement(re,{id:Object.keys(a[2]).length>0?"3":"0"},c.a.createElement(W,{id:3}),c.a.createElement(U,{id:3})):c.a.createElement(c.a.Fragment,null),Object.keys(a[2]).length>0?c.a.createElement(re,{id:Object.keys(a[3]).length>0?"4":"0"},c.a.createElement(W,{id:4}),c.a.createElement(U,{id:4})):c.a.createElement(c.a.Fragment,null),Object.keys(a[3]).length>0?c.a.createElement(re,{id:Object.keys(a[4]).length>0?"5":"0"},c.a.createElement(W,{id:5}),c.a.createElement(U,{id:5})):c.a.createElement(c.a.Fragment,null)))),c.a.createElement(h.a,null,c.a.createElement("p",null," \xa9 2020. Cheol-Woo Noh Website All Rights Reserved.")))}},81:function(e,n,t){"use strict";var a=t(25),r=t(27);n.a=function(){var e=Object(a.c)((function(e){return e.player})),n=e.players,t=e.maxStats,c=e.selectedStat,l=e.statList,i=e.tournament,o=Object(a.c)((function(e){return e.tournament})).data,u=Object(a.b)();return{players:n,maxStats:t,selectedStat:c,statList:l,tournament:i,data:o,handleAddPlayer:function(e,n){u(r.a(n,e))},handleRemoveSelect:function(e){u(r.g(e))},handleChange:function(e){u(r.d(e.target.value))},handleChangeCheck:function(e){u(r.c(e.target.checked,e.target.id))},handleAllCheck:function(){u(r.b())}}}},82:function(e,n,t){"use strict";t.d(n,"e",(function(){return o})),t.d(n,"d",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return m})),t.d(n,"a",(function(){return s}));var a=t(79),r=t(80);function c(){var e=Object(a.a)(["\n    min-height: 15vh;\n    background: #343a40;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return c=function(){return e},e}function l(){var e=Object(a.a)(["\n    overflow-y: auto;\n    padding: 1rem 1rem;\n    background: white;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    margin: 0 auto;\n    min-height: 500px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n\n    @media screen and (max-width: 825px) {\n        padding: .15rem .15rem;\n    }\n\n    @media screen and (max-width: 500px) {\n        padding: 0;\n    }\n"]);return l=function(){return e},e}function i(){var e=Object(a.a)(["\n    background-image: url('background.jpg');\n    min-height: 85vh;\n    background-color: #eae8e3;\n    padding: 70px 10rem 1rem 10rem;\n    overflow-y: auto;\n\n    @media screen and (max-width: 1150px) {\n        padding-left: 2rem;\n        padding-right: 2rem;\n    }\n\n    @media screen and (max-width: 842px) {\n        padding-top: 94px;\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n\n    @media screen and (max-width: 500px) {\n        padding-top: 124px;\n        padding: 124px 0rem 1rem 0rem;\n        flex-direction: column;\n    }\n"]);return i=function(){return e},e}var o=function(e,n,t,a,r){if(a){var c=Math.max.apply(Math,n.map((function(e){return e.Games})));n=n.filter((function(e){return e.Games>=.25*c}))}if(t&&(n=n.filter((function(e){return e.Position===t}))),null!==e&&null===r)return n.sort((function(n,t){return"-"===n[e]&&(n[e]=0),"-"===t[e]&&(t[e]=0),("string"===typeof n[e]?Number(n[e].replace(/[^0-9.]/g,""))>Number(t[e].replace(/[^0-9.]/g,"")):n[e]>t[e])?-1:("string"===typeof n[e]?Number(n[e].replace(/[^0-9.]/g,""))<Number(t[e].replace(/[^0-9.]/g,"")):n[e]<t[e])?1:0}));if(null===e&&null!==r){for(var l=function(e){n.sort((function(n,t){var a=[];return a=r[e].asc?[1,-1,0]:[-1,1,0],"-"===n[r[e].stat]&&(n[r[e].stat]=0),"-"===t[r[e].stat]&&(t[r[e].stat]=0),"Player"===r[e].stat||"Position"===r[e].stat?n[r[e].stat]>t[r[e].stat]?a[0]:n[r[e].stat]<t[r[e].stat]?a[1]:a[2]:("string"===typeof n[r[e].stat]?Number(n[r[e].stat].replace(/[^0-9.]/g,""))>Number(t[r[e].stat].replace(/[^0-9.]/g,"")):n[r[e].stat]>t[r[e].stat])?a[0]:("string"===typeof n[r[e].stat]?Number(n[r[e].stat].replace(/[^0-9.]/g,""))<Number(t[r[e].stat].replace(/[^0-9.]/g,"")):n[r[e].stat]<t[r[e].stat])?a[1]:a[2]}))},i=0;i<r.length;i++)l(i);return n}return[]},u=function(e,n){var t="";return n.find((function(n){return e===n.stat&&n.asc}))?t="\u2191":n.find((function(n){return e===n.stat&&!n.asc}))&&(t="\u2193"),t},d=r.a.div(i()),m=r.a.main(l()),s=r.a.div(c())},84:function(e,n,t){"use strict";var a=t(0),r=t(26),c=t(25),l=t(29);n.a=function(){var e=Object(c.c)((function(e){return e.record})),n=e.recordStat,t=e.recordPosition,i=e.sortCondition,o=e.showRegular,u=Object(c.c)((function(e){return e.tournament})).data,d=Object(c.c)((function(e){return e.player})).tournament,m=Object(c.b)();Object(a.useEffect)((function(){m(r.b(d)),m(l.e("")),m(l.d())}),[m,d]);return{recordStat:n,recordPosition:t,sortCondition:i,showRegular:o,data:u,handleChangeStat:function(e,n){m(l.b(e,n))},handleSelectPosition:function(e){m(l.e(e))},handleAddSortCondition:function(e){m(l.a(e))},handleToggleShowRegular:function(){m(l.f())}}}},88:function(e,n,t){"use strict";var a=t(79),r=t(0),c=t.n(r),l=t(80),i=t(83),o=t.n(i),u=t(82),d=t(84);function m(){var e=Object(a.a)(["\n    align-self: center;\n    font-weight: bold;\n"]);return m=function(){return e},e}function s(){var e=Object(a.a)(["\n    display: flex;\n"]);return s=function(){return e},e}function f(){var e=Object(a.a)(["\n    padding: 0 0.5rem;\n    cursor: pointer;\n"]);return f=function(){return e},e}function p(){var e=Object(a.a)(["\n    margin: 0px 1.5rem;\n"]);return p=function(){return e},e}function b(){var e=Object(a.a)(["\n    padding: 0 0.5rem;\n    background-color: ",";\n"]);return b=function(){return e},e}function g(){var e=Object(a.a)(["\n    border-bottom: ",";\n    border-color: #e0e0e0;\n\n    ","\n"]);return g=function(){return e},e}function h(){var e=Object(a.a)(["\n    border-top-style: double;\n    border-bottom-style: double;\n    background-color: #495057;\n    color: white;\n\n    ","\n"]);return h=function(){return e},e}var x=o()(l.a.tr)(h(),(function(e){if(e.isPlayerSelector)return"font-size: 20px"})),v=o()(l.a.tr)(g(),(function(e){return e.idx%5===0?"groove 2px":"solid 0.5px"}),(function(e){if(e.isPlayerSelector)return"font-size: 16px; \n                cursor: pointer;\n\n                &:hover {\n                    background-color: #ddd;\n                    td {\n                        background-color: #ddd;\n                    }\n                }\n\n                td {\n                    padding: 0.25rem 0.5rem;\n                }\n                "})),E=o()(l.a.td)(b(),(function(e){return e.stat===e.sortCond?"#ffc9c9":""})),y=l.a.table(p()),k=o()(l.a.th)(f()),j=l.a.div(s()),O=l.a.div(m());n.a=c.a.memo((function(e){var n=e.statList,t=e.recordPosition,a=e.showRegular,r=e.id,l=e.handleClose,i=e.handleAddPlayer,o=e.isPlayerSelector,m=Object(d.a)(),s=m.sortCondition,f=m.data,p=m.handleAddSortCondition;return c.a.createElement(y,null,c.a.createElement("thead",null,c.a.createElement(x,{isPlayerSelector:o},n.map((function(e){return c.a.createElement(k,{key:e.name,onClick:function(){p(e.name)}},c.a.createElement(j,null,c.a.createElement("div",null,c.a.createElement("small",null,e.name)),c.a.createElement(O,null,"\xa0",Object(u.d)(e.name,s))))})))),c.a.createElement("tbody",null,Object(u.e)(null,JSON.parse(JSON.stringify(f)),t,a,s).map((function(e,t){return c.a.createElement(v,{key:"".concat(e.Player,"_").concat(e.Position),idx:t+1,isPlayerSelector:o},n.map((function(n){var t="",a=n.name;return s.length>0&&(t=s[s.length-1].stat),c.a.createElement(E,{key:a,stat:a,sortCond:t,onClick:function(){i&&l&&"number"===typeof r&&(i(e,r),l())}},c.a.createElement("small",null,e[a]))})))}))))}))},89:function(e,n,t){"use strict";var a=t(79),r=t(0),c=t.n(r),l=t(28),i=t(85),o=t(81),u=c.a.memo((function(){var e=Object(o.a)(),n=e.handleChange,t=e.tournament;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a.Control,{as:"select",size:"sm",placeholder:"Select tournament",onChange:n,value:t},["Mid-Season Cup 2020","LCK Spring 2020","LPL Spring 2020","LEC Spring 2020","LCS Spring 2020","World Championship 2019","LCK Summer 2019","LPL Summer 2019","LEC Summer 2019","LCS Summer 2019"].map((function(e){return c.a.createElement("option",{key:e},e)}))))})),d=t(92),m=t.n(d),s=t(93),f=t(80);function p(){var e=Object(a.a)(["\n    position: relative;\n    display: inline-block;\n\n    &:hover .dropMenuWrap {\n        display: block;\n    }\n"]);return p=function(){return e},e}function b(){var e=Object(a.a)(["\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 10;\n    left: -10px;\n    width: auto;\n    border-radius: 5px;\n\n    .linkMenu {\n        padding: 5px 10px;\n        text-decoration: none;\n        display: block;\n        border-bottom: 0.5px solid #ddd;\n        font: initial;\n    }\n    .linkMenu:hover {\n        background-color: #ddd;\n        border-radius: 5px;\n    }\n"]);return b=function(){return e},e}function g(){var e=Object(a.a)(["\n    max-width: 250px;\n    padding: 0 .5rem 0 .5rem;\n"]);return g=function(){return e},e}function h(){var e=Object(a.a)(["\n    cursor: pointer;\n"]);return h=function(){return e},e}function x(){var e=Object(a.a)(["\n    display: flex;\n    flex-basis: auto;\n    flex-grow: 1;\n    justify-content: flex-end;\n    padding: .5rem 1rem;\n    align-items: center;\n"]);return x=function(){return e},e}function v(){var e=Object(a.a)(["\n\tbackground: #343a40;\n\tposition: fixed;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n    padding: .5rem 10rem;\n    display: flex;\n    flex-flow: row nowrap;\n    color: white;\n    font-size: 1.5em;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n    opacity: 0.9;\n\n    @media screen and (max-width: 986px) {\n        padding-right: 5rem;\n        padding-left: 5rem;\n    }\n\n    @media screen and (max-width: 640px) {\n        padding-right: 1rem;\n        padding-left: 0;\n    }\n"]);return v=function(){return e},e}var E=f.a.nav(v()),y=f.a.div(x()),k=f.a.div(h()),j=f.a.div(g()),O=f.a.div(b()),C=f.a.div(p());n.a=c.a.memo((function(){return c.a.createElement(E,null,c.a.createElement(l.b,{to:"/",style:{textDecoration:"none",color:"white",fontWeight:"bold"}},"LOL Pro Stat Comparison"),c.a.createElement(y,null,c.a.createElement(j,null,c.a.createElement(u,null)),c.a.createElement(C,null,c.a.createElement(k,null,c.a.createElement(m.a,{path:s.a,title:"Select Menu",size:2,horizontal:!0,vertical:!0}),c.a.createElement(O,{className:"dropMenuWrap"},c.a.createElement(l.b,{to:"/",className:"linkMenu",style:{textDecoration:"none",color:"black"}},c.a.createElement("small",null,"Comparison")),c.a.createElement(l.b,{to:"/record",className:"linkMenu",style:{textDecoration:"none",color:"black"}},c.a.createElement("small",null,"Record")))))))}))}}]);