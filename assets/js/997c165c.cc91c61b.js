"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[97024],{64583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="LinkedIn Pages",l={unversionedId:"integrations/sources/linkedin-pages",id:"integrations/sources/linkedin-pages",title:"LinkedIn Pages",description:"Sync overview",source:"@site/../docs/integrations/sources/linkedin-pages.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/linkedin-pages",permalink:"/integrations/sources/linkedin-pages",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/linkedin-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"LinkedIn Ads",permalink:"/integrations/sources/linkedin-ads"},next:{title:"Linnworks",permalink:"/integrations/sources/linnworks"}},s={},p=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"NOTE:",id:"note",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Create the <code>Refresh_Token</code> or <code>Access_Token</code>:",id:"create-the-refresh_token-or-access_token",level:5},{value:"Changelog",id:"changelog",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkedin-pages"},"LinkedIn Pages"),(0,r.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,r.kt)("p",null,"The LinkedIn Pages source only supports Full Refresh for now. Incremental Sync will be coming soon."),(0,r.kt)("p",null,"This Source Connector is based on a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),". Airbyte uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/marketing-integrations-overview"},"LinkedIn Marketing Developer Platform - API")," to fetch data from LinkedIn Pages."),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following data as streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/organization-lookup-api?tabs=http#retrieve-organizations"},"Organization Lookup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/follower-statistics?tabs=http#retrieve-lifetime-follower-statistics"},"Follower Statistics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/page-statistics?tabs=http#retrieve-lifetime-organization-page-statistics"},"Page Statistics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/share-statistics?tabs=http#retrieve-lifetime-share-statistics"},"Share Statistics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/share-api?tabs=http#find-shares-by-owner"},"Shares (Latest 50)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/organization-lookup-api?tabs=http#retrieve-organization-follower-count"},"Total Follower Count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/ugc-post-api?tabs=http#find-ugc-posts-by-authors"},"UGC Posts"))),(0,r.kt)("h3",{id:"note"},"NOTE:"),(0,r.kt)("p",null,"All streams only sync all-time statistics at this time. A ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," field will be added soon to pull data starting at a single point in time."),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whole number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"True/False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"There are official Rate Limits for LinkedIn Pages API Usage, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/api-guide/concepts/rate-limits?context=linkedin/marketing/context"},"more information here"),". Rate limited requests will receive a 429 response. Rate limits specify the maximum number of API calls that can be made in a 24 hour period. These limits reset at midnight UTC every day. In rare cases, LinkedIn may also return a 429 response as part of infrastructure protection. API service will return to normal automatically. In such cases you will receive the next error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,r.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. If the maximum of available API requests capacity is reached, you will have the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"Max try rate limit exceded..."\n')),(0,r.kt)("p",null,"After 5 unsuccessful attempts - the connector will stop the sync operation. In such cases check your Rate Limits ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"on this page")," ",">"," Choose your app ",">"," Analytics. "),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The API user account should be assigned the following permissions for the API endpoints:\nEndpoints such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization Lookup API"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Follower Statistics"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Page Statistics"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Share Statistics"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Shares"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UGC Posts")," require these permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_organization_social"),": Retrieve your organization's posts, comments, reactions, and other engagement data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rw_organization_admin"),": Manage your organization's pages and retrieve reporting data.")),(0,r.kt)("p",null,"The API user account should be assigned the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN")," role."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"There are 2 authentication methods: Access Token or OAuth2.0.\nOAuth2.0 is recommended since it will continue streaming data for 12 months instead of 2 months with an access token."),(0,r.kt)("h5",{id:"create-the-refresh_token-or-access_token"},"Create the ",(0,r.kt)("inlineCode",{parentName:"h5"},"Refresh_Token")," or ",(0,r.kt)("inlineCode",{parentName:"h5"},"Access_Token"),":"),(0,r.kt)("p",null,"The source LinkedIn Pages can use either the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh_token")," for OAuth2.0 authentication or simply use an ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," in the UI connector's settings to make API requests. Access tokens expire after ",(0,r.kt)("inlineCode",{parentName:"p"},"2 months from creation date (60 days)")," and require a user to manually authenticate again. Refresh tokens expire after ",(0,r.kt)("inlineCode",{parentName:"p"},"12 months from creation date (365 days)"),". If you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"401 invalid token response"),", the error logs will state that your token has expired and to re-authenticate your connection to generate a new token. This is described more ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context"},"here"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Log in to LinkedIn as the API user"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create an App")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"here"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App Name"),": airbyte-source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Company"),": search and find your LinkedIn Company Page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Privacy policy URL"),": link to company privacy policy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Business email"),": developer/admin email address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App logo"),": Airbyte's ","(","or Company's",")"," logo"),(0,r.kt)("li",{parentName:"ul"},"Review/agree to legal terms and create app"),(0,r.kt)("li",{parentName:"ul"},"Review the ",(0,r.kt)("strong",{parentName:"li"},"Auth")," tab:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Save your ",(0,r.kt)("inlineCode",{parentName:"strong"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"client_secret"))," ","(","for later steps",")"),(0,r.kt)("li",{parentName:"ul"},"Oauth 2.0 settings: Provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," ","(","for later steps",")",": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://airbyte.io")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify App"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," tab of your app dashboard, you'll see a ",(0,r.kt)("strong",{parentName:"li"},"Verify")," button. Click that button!"),(0,r.kt)("li",{parentName:"ul"},"Generate and provide the verify URL to your Company's LinkedIn Admin to verify the app."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Request API Access"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Products")," tab"),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/"},"Marketing Developer Platform")," and agree to the legal terms"),(0,r.kt)("li",{parentName:"ul"},"After a few minutes, refresh the page to see a link to ",(0,r.kt)("inlineCode",{parentName:"li"},"View access form")," in place of the ",(0,r.kt)("strong",{parentName:"li"},"Select")," button"),(0,r.kt)("li",{parentName:"ul"},"Fill out the access form and access should be granted ",(0,r.kt)("strong",{parentName:"li"},"within 72 hours")," (usually quicker)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create A Refresh Token")," (or Access Token):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to the LinkedIn Developers' ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/developers/tools/oauth"},"OAuth Token Tools")," and click ",(0,r.kt)("strong",{parentName:"li"},"Create token")),(0,r.kt)("li",{parentName:"ul"},"Select your newly created app and check the boxes for the following scopes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_organization_social")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rw_organization_admin")))),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Request access token")," and once generated, ",(0,r.kt)("strong",{parentName:"li"},"save your Refresh token")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"client_id"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"client_secret")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"refresh_token"))," from Steps 2 and 5 to autorize the LinkedIn Pages connector within the Airbyte UI."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As mentioned earlier, you can also simply use the Access token auth method for 60-day access.")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-11"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13098"},"13098")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);