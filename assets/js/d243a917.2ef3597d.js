"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[53865],{75325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Genesys",s={unversionedId:"integrations/sources/genesys",id:"integrations/sources/genesys",title:"Genesys",description:"Overview",source:"@site/../docs/integrations/sources/genesys.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/genesys",permalink:"/integrations/sources/genesys",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/genesys.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Freshservice",permalink:"/integrations/sources/freshservice"},next:{title:"getLago API",permalink:"/integrations/sources/getlago"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup Guide",id:"setup-guide",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"genesys"},"Genesys"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Genesys source retrieves data from ",(0,a.kt)("a",{parentName:"p",href:"https://www.genesys.com/"},"Genesys")," using their ",(0,a.kt)("a",{parentName:"p",href:"https://developer.genesys.cloud/devapps/api-explorer"},"JSON REST APIs"),"."),(0,a.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"We are using ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth2")," as this is the only supported authentication method. So you will need to follow the steps below to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Genesys region"),(0,a.kt)("li",{parentName:"ul"},"Client ID"),(0,a.kt)("li",{parentName:"ul"},"Client Secret")),(0,a.kt)("p",null,"You can follow the documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.genesys.cloud/authorization/platform-auth/use-client-credentials#obtain-an-access-token"},"API credentials")," or you can login directly to the ",(0,a.kt)("a",{parentName:"p",href:"https://apps.mypurecloud.com/directory/#/admin/integrations/oauth"},"OAuth admin page")),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.genesys.cloud/telephony/locations-apis"},"Locations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.genesys.cloud/routing/routing/"},"Routing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.genesys.cloud/telephony/stations-apis"},"Stations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"hhttps://developer.genesys.cloud/telephony/telephony-apis"},"Telephony")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.genesys.cloud/useragentman/users/"},"Users"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-06"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17559"},"17559")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The Genesys Source is created")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);