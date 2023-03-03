"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[56668],{67842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Xero",p={unversionedId:"integrations/sources/xero",id:"integrations/sources/xero",title:"Xero",description:"This is a setup guide for the Xero source connector which ingests data from the Accounting API.",source:"@site/../docs/integrations/sources/xero.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/xero",permalink:"/integrations/sources/xero",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/xero.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Wrike",permalink:"/integrations/sources/wrike"},next:{title:"XKCD",permalink:"/integrations/sources/xkcd"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Dates transformation",id:"dates-transformation",level:3},{value:"Set up the Xero source connector",id:"set-up-the-xero-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:c},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xero"},"Xero"),(0,o.kt)("p",null,"This is a setup guide for the Xero source connector which ingests data from the Accounting API."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"First of all you should create an application in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/app/manage/"},"Xero development center"),". The only supported integration type is to use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/guides/oauth2/custom-connections/developer"},"Xero Custom Connections")," so you should choose it on creating your Xero App.\nAfter creating an application, on configuration screen, authorize user for your Xero Organisation. Also, issue new Client Secret and remember it - it will be required for setting up Xero connector in your Airbyte instance."),(0,o.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/accounts"},"Accounts"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/banktransactions"},"BankTransactions"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/banktransfers"},"BankTransfers"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/brandingthemes"},"BrandingThemes"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/contactgroups"},"ContactGroups"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/contacts"},"Contacts"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/creditnotes"},"CreditNotes"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/currencies"},"Currencies"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/employees"},"Employees"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/invoices"},"Invoices"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/items"},"Items"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/manualjournals"},"ManualJournals"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/organisation"},"Organisation"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/overpayments"},"Overpayments"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/payments"},"Payments"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/prepayments"},"Prepayments"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/purchaseorders"},"PurchaseOrders"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/repeatinginvoices"},"RepeatingInvoices"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/taxrates"},"TaxRates"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/trackingcategories"},"TrackingCategories"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/users"},"Users")),(0,o.kt)("h3",{id:"dates-transformation"},"Dates transformation"),(0,o.kt)("p",null,"As Xero uses .NET, some date fields in records could be in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.xero.com/documentation/api/accounting/requests-and-responses"},".NET JSON date format"),". These dates are transformed into ISO 8601."),(0,o.kt)("h2",{id:"set-up-the-xero-source-connector"},"Set up the Xero source connector"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,o.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,o.kt)("strong",{parentName:"li"},"Xerp")," from the Source type dropdown."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for your new source."),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Client ID"),", enter Client ID of your Xero App."),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Client Secret"),', enter a Client Secret created on "Configuration" screen of your Xero App'),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Tenant ID")," field, enter your Xero Organisation's ",(0,o.kt)("a",{parentName:"li",href:"https://developer.xero.com/documentation/guides/oauth2/auth-flow/#xero-tenants"},"Tenant ID")),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Scopes"),' field enter scopes you used for user\'s authorization on "Configuration" screen of your Xero App'),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Custom Connections Authentication")," as ",(0,o.kt)("strong",{parentName:"li"},"Authentication")," option"),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Start date")," enter UTC date and time in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:mm:ssZ")," as the start date and time of ingestion."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,o.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,o.kt)("p",null,"The source connector supports the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full Refresh"),(0,o.kt)("li",{parentName:"ul"},"Incremental")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18666"},"18666")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source - Xero ","[python cdk]")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,h=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);