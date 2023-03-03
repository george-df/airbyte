"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[32493],{96623:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},p="Pipedrive",l={unversionedId:"integrations/sources/pipedrive",id:"integrations/sources/pipedrive",title:"Pipedrive",description:"This page contains the setup guide and reference information for the Pipedrive connector.",source:"@site/../docs/integrations/sources/pipedrive.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/pipedrive",permalink:"/integrations/sources/pipedrive",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/pipedrive.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pinterest",permalink:"/integrations/sources/pinterest"},next:{title:"Pivotal Tracker",permalink:"/integrations/sources/pivotal-tracker"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Via API Token Authentication",id:"via-api-token-authentication",level:3},{value:"Via OAuth",id:"via-oauth",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:d},m="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pipedrive"},"Pipedrive"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Pipedrive connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Pipedrive account;"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("inlineCode",{parentName:"li"},"API token"),";"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token"),". ")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"The Pipedrive connector accepts two authentication flows:"),(0,n.kt)("h3",{id:"via-api-token-authentication"},"Via API Token Authentication"),(0,n.kt)("p",null,"Step 1 - Enable API Token:"),(0,n.kt)("p",null,"If you don't see API next to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Your companies")," section, it's due to the permission sets handled by the company's admin. The company's admin can give you access to your API token by enabling it for you from the Settings in Pipedrive web app."),(0,n.kt)("p",null,"For more information, access ",(0,n.kt)("a",{parentName:"p",href:"https://pipedrive.readme.io/docs/enabling-api-for-company-users"},"enabling API for company users"),"."),(0,n.kt)("p",null,"Step 2 - Find the API Token:"),(0,n.kt)("p",null,"You can get the API Token manually from the Pipedrive web app by going to account name (on the top right) > Company settings > Personal preferences > API."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://pipedrive.readme.io/docs/how-to-find-the-api-token"},"How to find the API Token")," for detailed information."),(0,n.kt)("h3",{id:"via-oauth"},"Via OAuth"),(0,n.kt)("p",null,"Step 1 - Register a Pipedrive app:"),(0,n.kt)("p",null,"Pipedrive allows integrations with its API through ",(0,n.kt)("strong",{parentName:"p"},"registered apps"),". So, to authenticate Airbyte, first you need to create a Pipedrive private app in the marketplace. Follow these ",(0,n.kt)("a",{parentName:"p",href:"https://pipedrive.readme.io/docs/marketplace-registering-the-app"},"instructions")," to register your integration."),(0,n.kt)("p",null,"Step 2 - Follow the Oauth Authorization flow:"),(0,n.kt)("p",null,"With the registered app, you can follow the authorization flow to obtain the ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"client_secret"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh_token")," secrets. Pipedrive has documentation about it: ",(0,n.kt)("a",{parentName:"p",href:"https://pipedrive.readme.io/docs/marketplace-oauth-authorization"},"https://pipedrive.readme.io/docs/marketplace-oauth-authorization"),"."),(0,n.kt)("p",null,"Step 3 - Configure Airbyte:"),(0,n.kt)("p",null,"Now you can fill the fields Client ID, Client Secret, and Refresh Token. Your Pipedrive connector is set up to work with the OAuth authentication."),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Pipedrive connector supports the following sync modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"Apart from ",(0,n.kt)("inlineCode",{parentName:"p"},"Fields")," streams, all other streams support incremental."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Activities#getActivities"},"Activities"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/ActivityFields#getActivityFields"},"ActivityFields"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/DealFields#getDealFields"},"DealFields"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Deals#getDeals"},"Deals"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Leads#getLeads"},"Leads"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/OrganizationFields#getOrganizationFields"},"OrganizationFields"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Organizations#getOrganizations"},"Organizations"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/PersonFields#getPersonFields"},"PersonFields"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Persons#getPersons"},"Persons"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Pipelines#getPipelines"},"Pipelines"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Stages#getStages"},"Stages"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developers.pipedrive.com/docs/api/v1/Users#getUsers"},"Users")))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Pipedrive connector will gracefully handle rate limits. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://pipedrive.readme.io/docs/core-api-concepts-rate-limiting"},"the Pipedrive docs for rate limitations"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23705"},"23705")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disable OAuth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23539"},"23539")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Fix schema for "activities", "check" works if empty "deals"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16799"},"16799")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12806"},"12806")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove date-time format from schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11870"},"11870")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add 3 streams: DealFields, OrganizationFields and PersonFields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8582"},"8582")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7875"},"7875")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Extend schema for "persons" stream')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7968"},"7968")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update oAuth flow config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6821"},"6821")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add OAuth support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6441"},"6441")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix normalization error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5943"},"5943")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add organizations stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5642"},"5642")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove date-time from deals stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4912"},"4912")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update money type to support floating point")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4686"},"4686")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update spec.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4686"},"4686")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New source: Pipedrive connector")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(a),k=n,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(u,p(p({ref:e},s),{},{components:a})):r.createElement(u,p({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[m]="string"==typeof t?t:n,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);