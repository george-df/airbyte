"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[10363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},a="Connector Builder UI",l={unversionedId:"connector-development/config-based/connector-builder-ui",id:"connector-development/config-based/connector-builder-ui",title:"Connector Builder UI",description:"The connector builder UI provides an ergonomic iteration interface on top of the low-code YAML format. We recommend using it to iterate on your low-code connectors.",source:"@site/../docs/connector-development/config-based/connector-builder-ui.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/connector-builder-ui",permalink:"/connector-development/config-based/connector-builder-ui",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/connector-builder-ui.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Development",permalink:"/connector-development/"},next:{title:"Low-code connector development",permalink:"/connector-development/config-based/low-code-cdk-overview"}},c={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Run an Airbyte instance",id:"run-an-airbyte-instance",level:3},{value:"Visit the connector builder",id:"visit-the-connector-builder",level:3},{value:"Exporting the YAML",id:"exporting-the-yaml",level:3},{value:"Building the connector image",id:"building-the-connector-image",level:3},{value:"Connector Builder Testing Panel",id:"connector-builder-testing-panel",level:2},{value:"Upgrading",id:"upgrading",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connector-builder-ui"},"Connector Builder UI"),(0,r.kt)("p",null,"The connector builder UI provides an ergonomic iteration interface on top of the ",(0,r.kt)("a",{parentName:"p",href:"understanding-the-yaml-file/yaml-overview"},"low-code YAML format"),". We recommend using it to iterate on your low-code connectors."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The connector builder UI is in alpha, which means it\u2019s still in active development and may include backward-incompatible changes. Share feedback and requests with us on our Slack channel or email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:feedback@airbyte.io"},"feedback@airbyte.io"))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The high level flow for using the connector builder is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the Airbyte webapp to access the connector builder"),(0,r.kt)("li",{parentName:"ol"},"Use the connector builder to iterate on your low-code connector"),(0,r.kt)("li",{parentName:"ol"},"Export the YAML into a low-code connector module on your local machine"),(0,r.kt)("li",{parentName:"ol"},"Build the connector's Docker image"),(0,r.kt)("li",{parentName:"ol"},"Use the built connector image in Airbyte")),(0,r.kt)("h3",{id:"run-an-airbyte-instance"},"Run an Airbyte instance"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You need at least Airbyte v0.40.27 to run the connector builder UI.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using a dedicated Airbyte instance for the connector builder UI. This will allow you to pick up connector builder UI upgrades without impacting your production data pipelines.")),(0,r.kt)("p",null,"The connector builder UI is bundled as part of the Airbyte webapp. To run it, follow ",(0,r.kt)("a",{parentName:"p",href:"../../../deploying-airbyte/local-deployment"},"the instructions for deploying Airbyte locally")," to run Airbyte on your machine. Once you do, Airbyte should be reachable at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,r.kt)("h3",{id:"visit-the-connector-builder"},"Visit the connector builder"),(0,r.kt)("p",null,"Once your Airbyte instance has started and you've moved past the initial setup screen, visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/connector-builder"),". On this page you will find the connector builder UI. It should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Connector Builder home page",src:n(62644).Z,width:"3934",height:"2414"})),(0,r.kt)("p",null,"You can now use this UI to build your connector. See the ",(0,r.kt)("a",{parentName:"p",href:"#connector-builder-testing-panel"},"Testing Panel")," section for more information on how to use the UI to iterate on your connector."),(0,r.kt)("p",null,"The output of this UI is a low-code YAML representation of your connector, which you can preview by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"UI | YAML")," toggle button the the top-left. This screen also allows you to edit the low-code YAML directly if desired, and continue to test it in the testing panel."),(0,r.kt)("h3",{id:"exporting-the-yaml"},"Exporting the YAML"),(0,r.kt)("p",null,"Once you're done iterating on your connector in the UI, you'll need to export the low-code YAML representation of the connector to your local filesystem into a connector module. This YAML can be downloaded by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Download Config")," button in the bottom-left."),(0,r.kt)("p",null,"If you haven't already, create a low-code connector module using the connector generator (see ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/create-source"},"this YAML tutorial for an example"),") using the name you'd like to use for your connector. For this section, let's assume our connector is called ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange-rates"),". After creating the connector, overwrite the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-exchange-rates/source_exchange_rates/exchange_rates.yaml")," with the YAML you created in the UI."),(0,r.kt)("h3",{id:"building-the-connector-image"},"Building the connector image"),(0,r.kt)("p",null,"Follow the instructions in the connector README to build the Docker image. Typically this will be something like ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build . -t airbyte/source-<name>:<version>"),"."),(0,r.kt)("p",null,"Once you've built the connector image, ",(0,r.kt)("a",{parentName:"p",href:"../../../integrations/custom-connectors#adding-your-connectors-in-the-ui"},"follow these instructions")," to add your connector to your Airbyte instance."),(0,r.kt)("h2",{id:"connector-builder-testing-panel"},"Connector Builder Testing Panel"),(0,r.kt)("p",null,"The UI contains two main components: the Builder UI where you can fill out inputs to build your connector (left), and the testing panel (right) where you can get feedback on how your connector works."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Annotated Test Pane",src:n(18508).Z,width:"1458",height:"1728"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Input parameters panel"),": Configure the input parameters to be used in testing. For example, if the connector requires an API key, open this menu to input your API which will be used for testing."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stream Picker dropdown"),": Use this dropdown to choose which stream you want to test"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Endpoint URL"),": Displays the URL queried by the CDK to retrieve data for the current stream"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Test button"),": When clicked, retrieves the data for the selected stream using the stream configuration setup in the UI. This is the equivalent of running the ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," command on the terminal for a single stream (the selected stream)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Records tab"),": Displays the final output returned by the connector for the selected page of data in this stream"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Request tab"),": Displays the outgoing HTTP request made by the connector to retrieve the selected page of data. Useful for debugging."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response tab"),": Displays the full HTTP response received by the connector for the selected page of data. Useful for debugging."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Results view"),": Displays information based on the selected tab"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Page selector")," Displays the selected page"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Logs view"),": Displays the logs emitted by the connector while running")),(0,r.kt)("p",null,"The following demo video demonstrates these components on a very simple API:"),(0,r.kt)("div",{style:{position:"relative","padding-bottom":"64.90384615384616%",height:0}},(0,r.kt)("iframe",{src:"https://www.loom.com/embed/acf899938ef74dec8dd61ba012bc872f",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("p",null,"The connector builder ships as part of the Airbyte platform. So if you want to get the latest and greatest updates to the builder UI, follow the process for ",(0,r.kt)("a",{parentName:"p",href:"../../../operator-guides/upgrading-airbyte"},"upgrading Airbyte")," and you should pick up the upgrades."))}u.isMDXComponent=!0},18508:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lowcode_annotated_test_pane-69b3e2a65172fbc49472b0674046fa33.png"},62644:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lowcode_landing_screen-1ac61a7cbf35abfb1058d896351b0aa9.png"}}]);