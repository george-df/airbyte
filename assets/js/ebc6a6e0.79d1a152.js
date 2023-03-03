"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[55676],{18800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},i="Facebook Pages",l={unversionedId:"integrations/sources/facebook-pages",id:"integrations/sources/facebook-pages",title:"Facebook Pages",description:"This page contains the setup guide and reference information for the Facebook Pages source connector.",source:"@site/../docs/integrations/sources/facebook-pages.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/facebook-pages",permalink:"/integrations/sources/facebook-pages",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/facebook-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Facebook Marketing",permalink:"/integrations/sources/facebook-marketing"},next:{title:"Faker",permalink:"/integrations/sources/faker"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Facebook Pages",id:"step-1-set-up-facebook-pages",level:3},{value:"Step 2: Set up the Facebook Pages connector in Airbyte",id:"step-2-set-up-the-facebook-pages-connector-in-airbyte",level:3},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"facebook-pages"},"Facebook Pages"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Facebook Pages source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To set up the Facebook Pages source connector with Airbyte, you'll need to create your Facebook Application and use both long-lived Page access token and Facebook Page ID."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-facebook-pages"},"Step 1: Set up Facebook Pages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create Facebook Developer Account. Follow ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/async/registration/"},"instruction")," to create one."),(0,n.kt)("li",{parentName:"ol"},"Create ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/apps/"},"Facebook App"),'. Choose "Company" as the purpose of the app. Fill out the remaining fields to create your app, then follow along the "Connect a User Page" section.'),(0,n.kt)("li",{parentName:"ol"},"Connect a User ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/tools/explorer/"},"Page"),". Choose your app at ",(0,n.kt)("inlineCode",{parentName:"li"},"Meta App")," field. Choose your Page at ",(0,n.kt)("inlineCode",{parentName:"li"},"User or Page")," field. Add next permission:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pages","_","read","_","engagement"),(0,n.kt)("li",{parentName:"ul"},"pages","_","read","_","user","_","content "),(0,n.kt)("li",{parentName:"ul"},"pages","_","show","_","list"),(0,n.kt)("li",{parentName:"ul"},"read","_","insights"))),(0,n.kt)("li",{parentName:"ol"},"Click Generate Access Token and follow instructions.")),(0,n.kt)("p",null,"After all the steps, it should look something like this"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(48299).Z,width:"1115",height:"1045"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived#get-a-long-lived-user-access-token"},"Generate")," Long-Lived User Access Token."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived#long-lived-page-token"},"Generate")," Long-Lived Page Token.")),(0,n.kt)("h3",{id:"step-2-set-up-the-facebook-pages-connector-in-airbyte"},"Step 2: Set up the Facebook Pages connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Facebook Pages connector and select ",(0,n.kt)("strong",{parentName:"li"},"Facebook Pages")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Fill in Page Access Token with Long-Lived Page Token"),(0,n.kt)("li",{parentName:"ol"},"Fill in Page ID (if you have a page URL such as ",(0,n.kt)("inlineCode",{parentName:"li"},"https://www.facebook.com/Test-1111111111"),", the ID would be",(0,n.kt)("inlineCode",{parentName:"li"},"Test-1111111111"),")")),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source. "),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Facebook Pages connector and select ",(0,n.kt)("strong",{parentName:"li"},"Facebook Pages")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Fill in Page Access Token with Long-Lived Page Token"),(0,n.kt)("li",{parentName:"ol"},"Fill in Page ID (if you have a page URL such as ",(0,n.kt)("inlineCode",{parentName:"li"},"https://www.facebook.com/Test-1111111111"),", the ID would be",(0,n.kt)("inlineCode",{parentName:"li"},"Test-1111111111"),")")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Facebook Pages source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v15.0/page/#overview"},"Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v15.0/page/feed"},"Post")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v15.0/page/insights"},"Page Insights")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v15.0/insights"},"Post Insights"))),(0,n.kt)("h2",{id:"data-type-map"},"Data type map"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Facebook heavily throttles API tokens generated from Facebook Apps by default, making it infeasible to use such a token for syncs with Airbyte. To be able to use this connector without your syncs taking days due to rate limiting follow the instructions in the Setup Guide below to access better rate limits."),(0,n.kt)("p",null,"See Facebook's ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting"},"documentation on rate limiting")," for more information on requesting a quota upgrade."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23395"},"23395")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parse datetime to rfc3339")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22804"},"22804")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Retry 500 errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20925"},"20925")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix tests; modify expected records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19788"},"19788")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate lo low-code; Beta certification; Upgrade Facebook API to v.15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9032"},"9032")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove deprecated field ",(0,n.kt)("inlineCode",{parentName:"td"},"live_encoders")," from Page stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8267"},"8267")),(0,n.kt)("td",{parentName:"tr",align:"left"},"updated all empty objects in schemas for Page and Post streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove unsupported insights_export field from Pages request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7440"},"7440")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Generate Page token from config access token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7128"},"7128")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade Facebook API to v.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6438"},"6438")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotate Oauth2 flow initialization parameters in connector specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5158"},"5158")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=n,g=d["".concat(p,".").concat(k)]||d[k]||m[k]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},48299:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/facebook-pages-1-fcfbf072b9e3659c832b3c5e82baede5.png"}}]);