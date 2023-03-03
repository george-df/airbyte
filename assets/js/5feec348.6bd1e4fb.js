"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[77113],{60896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},c="Step 7: Use the Connector in Airbyte",a={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte",id:"connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte",title:"Step 7: Use the Connector in Airbyte",description:"To use your connector in your own installation of Airbyte, build the docker image for your container by running docker build . -t airbyte/source-python-http-example:dev. Then, follow the instructions from the building a Python source tutorial for using the connector in the Airbyte UI, replacing the name as appropriate.",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 6: Read Data",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/read-data"},next:{title:"Step 8: Test Connector",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/test-your-connector"}},u={},l=[],p={toc:l},s="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-7-use-the-connector-in-airbyte"},"Step 7: Use the Connector in Airbyte"),(0,o.kt)("p",null,"To use your connector in your own installation of Airbyte, build the docker image for your container by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build . -t airbyte/source-python-http-example:dev"),". Then, follow the instructions from the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/tutorials/building-a-python-source#step-11-add-the-connector-to-the-api-ui"},"building a Python source tutorial")," for using the connector in the Airbyte UI, replacing the name as appropriate."),(0,o.kt)("p",null,"Note: your built docker image must be accessible to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," daemon running on the Airbyte node. If you're doing this tutorial locally, these instructions are sufficient. Otherwise you may need to push your Docker image to Dockerhub."))}y.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,h=s["".concat(u,".").concat(d)]||s[d]||y[d]||i;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);