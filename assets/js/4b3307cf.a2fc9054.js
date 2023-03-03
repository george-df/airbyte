"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9059],{48752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="SFTP",l={unversionedId:"integrations/sources/sftp",id:"integrations/sources/sftp",title:"SFTP",description:"This page contains the setup guide and reference information for the SFTP source connector.",source:"@site/../docs/integrations/sources/sftp.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/sftp",permalink:"/integrations/sources/sftp",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/sftp.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"SFTP  Bulk",permalink:"/integrations/sources/sftp-bulk"},next:{title:"Shopify",permalink:"/integrations/sources/shopify"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up SFTP",id:"step-1-set-up-sftp",level:3},{value:"Step 2: Set up the SFTP connector in Airbyte",id:"step-2-set-up-the-sftp-connector-in-airbyte",level:3},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:4},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sftp"},"SFTP"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the SFTP source connector."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Server with SFTP connection type support"),(0,a.kt)("li",{parentName:"ul"},"The Server host"),(0,a.kt)("li",{parentName:"ul"},"The Server port"),(0,a.kt)("li",{parentName:"ul"},"Username-Password/Public Key Access Rights")),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"step-1-set-up-sftp"},"Step 1: Set up SFTP"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use your username/password credential to connect the server."),(0,a.kt)("li",{parentName:"ol"},"Alternatively generate Public Key Access")),(0,a.kt)("p",null,"The following simple steps are required to set up public key authentication:"),(0,a.kt)("p",null,'Key pair is created (typically by the user). This is typically done with ssh-keygen.\nPrivate key stays with the user (and only there), while the public key is sent to the server. Typically with the ssh-copy-id utility.\nServer stores the public key (and "marks" it as authorized).\nServer will now allow access to anyone who can prove they have the corresponding private key.'),(0,a.kt)("h3",{id:"step-2-set-up-the-sftp-connector-in-airbyte"},"Step 2: Set up the SFTP connector in Airbyte"),(0,a.kt)("h4",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Sources")),". In the top-right corner, click ",(0,a.kt)("strong",{parentName:"li"},"+new source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the SFTP connector and select ",(0,a.kt)("strong",{parentName:"li"},"SFTP")," from the Source type dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"User Name"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Host Address"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Port")),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("inlineCode",{parentName:"li"},"Authentication")," type ",(0,a.kt)("inlineCode",{parentName:"li"},"Password Authentication")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Key Authentication")),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"File type")," (temporary comma separated)"),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"Folder Path")," (Optional) to specify server folder for sync"),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"File Pattern")," (Optional). e.g. ",(0,a.kt)("inlineCode",{parentName:"li"}," log-([0-9]{4})([0-9]{2})([0-9]{2})"),". Write your own ",(0,a.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/java/java_regular_expressions.htm"},"regex"),"    "),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Check Connection")," to finish configuring the Amplitude source.")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The SFTP source connector supports the following",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh - Overwrite"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh - Append Sync"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"This source provides a single stream per file with a dynamic schema. The current supported type file: ",(0,a.kt)("inlineCode",{parentName:"p"},".csv")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),"\nMore formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-24-05"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial version")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);