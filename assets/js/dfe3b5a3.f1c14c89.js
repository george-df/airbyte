"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[874],{69973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},o="December 2022",l={unversionedId:"release_notes/december_2022",id:"release_notes/december_2022",title:"December 2022",description:"Airbyte v0.40.24 to v0.40.26",source:"@site/../docs/release_notes/december_2022.md",sourceDirName:"release_notes",slug:"/release_notes/december_2022",permalink:"/release_notes/december_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/december_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"January 2023",permalink:"/release_notes/january_2023"},next:{title:"November 2022",permalink:"/release_notes/november_2022"}},s={},u=[{value:"Airbyte v0.40.24 to v0.40.26",id:"airbyte-v04024-to-v04026",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugs",id:"bugs",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"december-2022"},"December 2022"),(0,n.kt)("h2",{id:"airbyte-v04024-to-v04026"},"Airbyte ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.24"},"v0.40.24")," to ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.26"},"v0.40.26")),(0,n.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,n.kt)("h3",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added throughput metrics and a progress bar to the Connection Sync History UI for Airbyte Open Source. These provide real-time information on data transfer rates and sync progress. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19193"},"#19193")),(0,n.kt)("li",{parentName:"ul"},"Added the custom connector UI in alpha to Airbyte Cloud, which allows you to create and update custom connectors. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20483"},"#20483")),(0,n.kt)("li",{parentName:"ul"},"Added the stream details panel to the Connection Replication UI, which allows you to display and configure streams in your connection. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19219"},"#19219"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added source-defined ",(0,n.kt)("strong",{parentName:"li"},"Cursor")," and ",(0,n.kt)("strong",{parentName:"li"},"Primary key")," fields to the stream details panel. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20366"},"#20366")," "))),(0,n.kt)("li",{parentName:"ul"},"Added the UX flow for auto-detect schema changes. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19226"},"#19226")),(0,n.kt)("li",{parentName:"ul"},"Added the auto-detect schema changes option to the Connection Replication UI, which allows you to choose whether Airbyte ignores or disables the connection when it detects a non-breaking schema change in the source. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19734"},"#19734")),(0,n.kt)("li",{parentName:"ul"},"Added stream table configuration windows for Destination namespace and Stream name, which allow you to choose how the data is stored and edit the names and prefixes of tables in the destination. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19713"},"#19713")),(0,n.kt)("li",{parentName:"ul"},"Added the AWS Secret Manager to Airbyte Open Source as an option for storing secrets. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19690"},"#19690")),(0,n.kt)("li",{parentName:"ul"},"Added the ",(0,n.kt)("a",{parentName:"li",href:"http://reference.airbyte.com/"},"Airbyte Cloud API")," in alpha, which allows you to programmatically control Airbyte Cloud through an API.")),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved the Connection UX by preventing users from modifying an existing connection if there is a breaking change in the source schema. Now users must review changes before modifying the connection. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20276"},"#20276")),(0,n.kt)("li",{parentName:"ul"},"Improved the stream catalog index by defining ",(0,n.kt)("inlineCode",{parentName:"li"},"stream"),". This precaution keeps all streams matching correctly and data organized consistently. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20443"},"#20443")),(0,n.kt)("li",{parentName:"ul"},"Updated the API to support column selection configuration in Airbyte Cloud. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20259"},"#20259")),(0,n.kt)("li",{parentName:"ul"},"Ongoing improvements to Low-code CDK in alpha:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"SessionTokenAuthenticator")," for authentication management. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19716"},"#19716")),(0,n.kt)("li",{parentName:"ul"},"Added the first iteration of the Configuration UI, which allows you to build connectors using forms instead of writing a YAML file. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20008"},"#20008")),(0,n.kt)("li",{parentName:"ul"},"Added request options component to streams. You can now choose request options for streams in the connector builder. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20497"},"#20497")),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where errors were not indicated properly by omitting individually touched fields in ",(0,n.kt)("inlineCode",{parentName:"li"},"useBuilderErrors"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20463"},"#20463")),(0,n.kt)("li",{parentName:"ul"},"Updated UI to match the current design, including UI text changes and the addition of the stream delete button. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20464"},"#20464")),(0,n.kt)("li",{parentName:"ul"},"Upgraded Orval and updated the connector builder OpenAPI to pull the connector manifest schema directly into the API. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20166"},"#20166"))))),(0,n.kt)("h2",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where Airbyte Cloud would not properly load the values of normalization fields into the database by updating destination definitions. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20573"},"#20573"))))}h.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);