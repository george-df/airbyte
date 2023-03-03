"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[17882],{75798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={},o="Gridly",l={unversionedId:"integrations/sources/gridly",id:"integrations/sources/gridly",title:"Gridly",description:"This page contains the setup guide and reference information for the Gridly source connector.",source:"@site/../docs/integrations/sources/gridly.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/gridly",permalink:"/integrations/sources/gridly",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/gridly.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Greenhouse",permalink:"/integrations/sources/greenhouse"},next:{title:"Gutendex",permalink:"/integrations/sources/gutendex"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Get api Key",id:"get-api-key",level:3},{value:"Get grid id",id:"get-grid-id",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gridly"},"Gridly"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the Gridly source connector."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A Gridly account."),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"get-api-key"},"Get api Key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To quickly get your API key, access your Gridly Dashboard, then select a Grid View and you can find the key in API quick start right panel.\n",(0,a.kt)("img",{alt:"img.png",src:r(92134).Z,width:"2332",height:"1340"})),(0,a.kt)("li",{parentName:"ol"},"Owner and Administrators can go to Settings/API keys to create company-level API keys with scoped privileges and accesses.\n",(0,a.kt)("img",{alt:"img.png",src:r(81224).Z,width:"2360",height:"1380"}))),(0,a.kt)("h3",{id:"get-grid-id"},"Get grid id"),(0,a.kt)("p",null,"The grid id is available in the url.\nGridly support version control, by default the ",(0,a.kt)("inlineCode",{parentName:"p"},"grid id")," is the same to the ",(0,a.kt)("inlineCode",{parentName:"p"},"branch id")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"Master")," branch is selected. For fetching records on other branches, use ",(0,a.kt)("inlineCode",{parentName:"p"},"branch id")," instead.\n",(0,a.kt)("img",{alt:"img.png",src:r(22520).Z,width:"2360",height:"800"})),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gridly.com/docs/api/#record"},"Records"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-12-08"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20048"},"20048")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Source Gridly: add icon and make grid_id parameter required")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},92134:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_api_key1-17a30e86a42b519489a722a401eb9219.png"},81224:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_api_key2-2edbf715357be0220b0ff0d7ffbee3f7.png"},22520:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_grid_id-78e80091c1ed01a28ff9be633436faa2.png"}}]);