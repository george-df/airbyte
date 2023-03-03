"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[83387],{43692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},l="Sqlite",o={unversionedId:"integrations/destinations/sqlite",id:"integrations/destinations/sqlite",title:"Sqlite",description:"This destination is meant to be used on a local workstation and won't work on Kubernetes",source:"@site/../docs/integrations/destinations/sqlite.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/sqlite",permalink:"/integrations/destinations/sqlite",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/sqlite.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snowflake",permalink:"/integrations/destinations/snowflake"},next:{title:"Streamr",permalink:"/integrations/destinations/streamr"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Sync Overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Performance considerations",id:"performance-considerations",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Example:",id:"example",level:3},{value:"Access Replicated Data Files",id:"access-replicated-data-files",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sqlite"},"Sqlite"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This destination is meant to be used on a local workstation and won't work on Kubernetes")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This destination writes data to a file on the ",(0,i.kt)("em",{parentName:"p"},"local")," filesystem on the host running Airbyte. By default, data is written to ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local"),". To change this location, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT")," environment variable for Airbyte."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please make sure that Docker Desktop has access to ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"/private"),' on a MacOS, as /tmp has a symlink that points to /private. It will not work otherwise). You allow it with "File sharing" in ',(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> Resources -> File sharing -> add the one or two above folder"),' and hit the "Apply & restart" button.')),(0,i.kt)("h3",{id:"sync-overview"},"Sync Overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into its own table ",(0,i.kt)("inlineCode",{parentName:"p"},"_airbyte_raw_{stream_name}"),". Each table will contain 3 columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data.")),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"This integration will be constrained by the speed at which your filesystem accepts writes."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"destination_path")," will always start with ",(0,i.kt)("inlineCode",{parentName:"p"},"/local")," whether it is specified by the user or not. Any directory nesting within local will be mapped onto the local mount."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT")," env variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file is set ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local"),"."),(0,i.kt)("p",null,"The local mount is mounted by Docker onto ",(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT"),". This means the ",(0,i.kt)("inlineCode",{parentName:"p"},"/local")," is substituted by ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local")," by default."),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"destination_path")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"/local/sqlite.db")),(0,i.kt)("li",{parentName:"ul"},"the local mount is using the ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/airbyte_local")," default"),(0,i.kt)("li",{parentName:"ul"},"then all data will be written to ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/airbyte_local/sqlite.db"),".")),(0,i.kt)("h2",{id:"access-replicated-data-files"},"Access Replicated Data Files"),(0,i.kt)("p",null,"If your Airbyte instance is running on the same computer that you are navigating with, you can open your browser and enter ",(0,i.kt)("a",{parentName:"p",href:"file:///tmp/airbyte_local"},"file:///tmp/airbyte","_","local")," to look at the replicated data locally. If the first approach fails or if your Airbyte instance is running on a remote server, follow the following steps to access the replicated files:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the scheduler container using ",(0,i.kt)("inlineCode",{parentName:"li"},"docker exec -it airbyte-server bash")),(0,i.kt)("li",{parentName:"ol"},"Navigate to the default local mount using ",(0,i.kt)("inlineCode",{parentName:"li"},"cd /tmp/airbyte_local")),(0,i.kt)("li",{parentName:"ol"},"Navigate to the replicated file directory you specified when you created the destination, using ",(0,i.kt)("inlineCode",{parentName:"li"},"cd /{destination_path}")),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"sqlite3 {filename}")," to access the data in a particular database file.")),(0,i.kt)("p",null,"You can also copy the output file to your host machine, the following command will copy the file to the current working directory you are using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"docker cp airbyte-server:/tmp/airbyte_local/{destination_path} .\n")),(0,i.kt)("p",null,"Note: If you are running Airbyte on Windows with Docker backed by WSL2, you have to use similar step as above or refer to this ",(0,i.kt)("a",{parentName:"p",href:"/operator-guides/locating-files-local-destination"},"link")," for an alternative approach."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-07-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15018"},"15018")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New SQLite destination")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);