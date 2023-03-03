"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[81139],{49996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={description:"Missing a connector?"},a="Custom or New Connector",c={unversionedId:"integrations/custom-connectors",id:"integrations/custom-connectors",title:"Custom or New Connector",description:"Missing a connector?",source:"@site/../docs/integrations/custom-connectors.md",sourceDirName:"integrations",slug:"/integrations/custom-connectors",permalink:"/integrations/custom-connectors",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/custom-connectors.md",tags:[],version:"current",frontMatter:{description:"Missing a connector?"},sidebar:"mySidebar",previous:{title:"Yugabytedb",permalink:"/integrations/destinations/yugabytedb"},next:{title:"Getting Started with Airbyte Cloud",permalink:"/cloud/getting-started-with-airbyte-cloud"}},s={},l=[{value:"Developing your own connector",id:"developing-your-own-connector",level:2},{value:"Adding your connectors in the UI",id:"adding-your-connectors-in-the-ui",level:2},{value:"Upgrading a connector",id:"upgrading-a-connector",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-or-new-connector"},"Custom or New Connector"),(0,r.kt)("p",null,"If you'd like to ",(0,r.kt)("strong",{parentName:"p"},"ask for a new connector,")," you can request it directly ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=area%2Fintegration%2C+new-integration&template=new-integration-request.md&title="},"here"),"."),(0,r.kt)("p",null,"If you'd like to build new connectors and ",(0,r.kt)("strong",{parentName:"p"},"make them part of the pool of pre-built connectors on Airbyte,")," first a big thank you. We invite you to check our ",(0,r.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/"},"contributing guide on building connectors"),"."),(0,r.kt)("p",null,"If you'd like to build new connectors, or update existing ones, ",(0,r.kt)("strong",{parentName:"p"},"for your own usage,")," without contributing to the Airbyte codebase, read along."),(0,r.kt)("h2",{id:"developing-your-own-connector"},"Developing your own connector"),(0,r.kt)("p",null,"It's easy to code your own connectors on Airbyte. Here is a link to instruct on how to code new sources and destinations: ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/"},"building new connectors")),(0,r.kt)("p",null,"While the guides in the link above are specific to the languages used most frequently to write integrations, ",(0,r.kt)("strong",{parentName:"p"},"Airbyte connectors can be written in any language"),". Please reach out to us if you'd like help developing connectors in other languages."),(0,r.kt)("h2",{id:"adding-your-connectors-in-the-ui"},"Adding your connectors in the UI"),(0,r.kt)("p",null,"There are only 3 easy steps to do that:"),(0,r.kt)("p",null,"1.Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker")," coordinate of a custom connector from ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerhub")," ","(","or any image repository that Airbyte can access",")","."),(0,r.kt)("p",null,"2.In the UI, go to the Admin section, and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"[+ New connector]")," on the top right"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/8lW_KRkw8w8q96JUJ7Snxj9MRC8toOyd7avLEj9anID53Q7Vj1bkPRSp8skV1VcIJPWsjWugX0pj0jCZ2jdaBwqhZED9E7DN5SRX_FWyRMdQu1eRojCTGm3xW2R8xYC9JE_kQtwn",alt:null})),(0,r.kt)("p",null,"3.We will ask you for the display name, the Docker repository name (repository + image name), tag and documentation URL for that connector."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/UfEol2AKAR-7pKtJnzPNRoEDgOlEfoi9cA3SzB1NboENOZnniaJFfUGcCcVxYtzC8R97tnLwOh28Er5wS_aNujfXCSKUh0K7lhu7xUFYm4oiVCDlFdsdJNvgVihWp0u13ZNyzFuA",alt:null})),(0,r.kt)("p",null,"Once this is filled, you will see your connector in the UI and your team will be able to use it, ",(0,r.kt)("strong",{parentName:"p"},"from the UI and Airbyte's API too.")),(0,r.kt)("p",null,"Note that this new connector could just be an updated version of an existing connector that you adapted to your specific edge case. Anything is possible!"),(0,r.kt)("p",null,"When using Airbyte on Kubernetes, the repository name must be a valid Kubernetes name. That is, it must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character (e.g. 'my-name',  or '123-abc'). Other names will work locally on Docker but cause an error on Kubernetes (Internal Server Error: Get Spec job failed)."),(0,r.kt)("h2",{id:"upgrading-a-connector"},"Upgrading a connector"),(0,r.kt)("p",null,"To upgrade your connector version, go to the admin panel in the left hand side of the UI, find this connector in the list, and input the latest connector version."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79464).Z,width:"2924",height:"1442"})),(0,r.kt)("p",null,"To browse the available connector versions, simply click on the relevant link in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," column to navigate to the connector's DockerHub page. From there, simply click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," section in the top bar."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79464:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/upgrading_connector_admin_panel-6e764714cb5bbfe5e031ee41295f5d1a.png"}}]);