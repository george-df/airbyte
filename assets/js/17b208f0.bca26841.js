"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8426],{87948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={},i="Step 5: Incremental Reads",s={unversionedId:"connector-development/config-based/tutorial/incremental-reads",id:"connector-development/config-based/tutorial/incremental-reads",title:"Step 5: Incremental Reads",description:"We now have a working implementation of a connector reading the latest exchange rates for a given currency.",source:"@site/../docs/connector-development/config-based/tutorial/5-incremental-reads.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/incremental-reads",permalink:"/connector-development/config-based/tutorial/incremental-reads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/5-incremental-reads.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 4: Reading data",permalink:"/connector-development/config-based/tutorial/reading-data"},next:{title:"Step 6: Testing",permalink:"/connector-development/config-based/tutorial/testing"}},l={},c=[{value:"Supporting incremental syncs",id:"supporting-incremental-syncs",level:2},{value:"Next steps:",id:"next-steps",level:2},{value:"More readings",id:"more-readings",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-5-incremental-reads"},"Step 5: Incremental Reads"),(0,r.kt)("p",null,"We now have a working implementation of a connector reading the latest exchange rates for a given currency.\nIn this section, we'll update the source to read historical data instead of only reading the latest exchange rates."),(0,r.kt)("p",null,"According to the API documentation, we can read the exchange rate for a specific date by querying the ",(0,r.kt)("inlineCode",{parentName:"p"},'"/exchangerates_data/{date}"')," endpoint instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'"/exchangerates_data/latest"'),"."),(0,r.kt)("p",null,"We'll now add a ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," property to the connector."),(0,r.kt)("p",null,"First we'll update the spec ",(0,r.kt)("inlineCode",{parentName:"p"},"source_exchange_rates_tutorial/spec.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'documentationUrl: https://docs.airbyte.io/integrations/sources/exchangeratesapi\nconnectionSpecification:\n  $schema: http://json-schema.org/draft-07/schema#\n  title: exchangeratesapi.io Source Spec\n  type: object\n  required:\n    - start_date\n    - access_key\n    - base\n  additionalProperties: true\n  properties:\n    start_date:\n      type: string\n      description: Start getting data from that date.\n      pattern: ^[0-9]{4}-[0-9]{2}-[0-9]{2}$\n      examples:\n        - YYYY-MM-DD\n    access_key:\n      type: string\n      description: >-\n        Your API Access Key. See <a\n        href="https://exchangeratesapi.io/documentation/">here</a>. The key is\n        case sensitive.\n      airbyte_secret: true\n    base:\n      type: string\n      description: >-\n        ISO reference currency. See <a\n        href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">here</a>.\n      examples:\n        - EUR\n        - USD\n')),(0,r.kt)("p",null,"Then we'll set the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," to last week in our connection config in ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),".\nLet's add a start_date field to ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),".\nThe file should look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_key": "<your_access_key>",\n  "start_date": "2022-07-26",\n  "base": "USD"\n}\n')),(0,r.kt)("p",null,"where the start date should be 7 days in the past."),(0,r.kt)("p",null,"And we'll update the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," in the connector definition to point to ",(0,r.kt)("inlineCode",{parentName:"p"},"/{{ config.start_date }}"),".\nNote that we are setting a default value because the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," operation does not know the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date"),". We'll default to hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"/exchangerates_data/latest"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  rates_stream:\n    $ref: "*ref(definitions.base_stream)"\n    $options:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/{{config[\'start_date\'] or \'latest\'}}"\n')),(0,r.kt)("p",null,"You can test these changes by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config secrets/config.json --catalog integration_tests/configured_catalog.json\n")),(0,r.kt)("p",null,"By reading the output record, you should see that we read historical data instead of the latest exchange rate.\nFor example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"historical": true, "base": "USD", "date": "2022-07-18"')),(0,r.kt)("p",null,"The connector will now always read data for the start date, which is not exactly what we want.\nInstead, we would like to iterate over all the dates between the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," and today and read data for each day."),(0,r.kt)("p",null,"We can do this by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"DatetimeStreamSlicer")," to the connector definition, and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," to point to the stream_slice's ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date"),":"),(0,r.kt)("p",null,"More details on the stream slicers can be found ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/stream-slicers"},"here"),"."),(0,r.kt)("p",null,"Let's first define a stream slicer at the top level of the connector definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  requester:\n    <...>\n  stream_slicer:\n    type: "DatetimeStreamSlicer"\n    start_datetime:\n      datetime: "{{ config[\'start_date\'] }}"\n      datetime_format: "%Y-%m-%d"\n    end_datetime:\n      datetime: "{{ now_utc() }}"\n      datetime_format: "%Y-%m-%d %H:%M:%S.%f"\n    step: "1d"\n    datetime_format: "%Y-%m-%d"\n    cursor_field: "{{ options[\'stream_cursor_field\'] }}"\n')),(0,r.kt)("p",null,"and refer to it in the stream's retriever.\nThis will generate slices from the start time until the end time, where each slice is exactly one day.\nThe start time is defined in the config file, while the end time is defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"now_local()")," macro, which will evaluate to the current date in the current timezone at runtime. See the section on ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/advanced-topics#string-interpolation"},"string interpolation")," for more details."),(0,r.kt)("p",null,"Note that we're also setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_cursor_field")," in the stream's ",(0,r.kt)("inlineCode",{parentName:"p"},"$options")," so it can be accessed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamSlicer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  rates_stream:\n    $ref: "*ref(definitions.base_stream)"\n    $options:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/{{config[\'start_date\'] or \'latest\'}}"\n      stream_cursor_field: "date"\n')),(0,r.kt)("p",null,"We'll also update the retriever to user the stream slicer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  retriever:\n    <...>\n    stream_slicer:\n      $ref: "*ref(definitions.stream_slicer)"\n')),(0,r.kt)("p",null,"This will generate slices from the start time until the end time, where each slice is exactly one day.\nThe start time is defined in the config file, while the end time is defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"now_utc()")," macro, which will evaluate to the current date in the current timezone at runtime. See the section on ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/advanced-topics#string-interpolation"},"string interpolation")," for more details."),(0,r.kt)("p",null,"Finally, we'll update the path to point to the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_slice"),"'s start_time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  rates_stream:\n    $ref: "*ref(definitions.base_stream)"\n    $options:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/{{stream_slice[\'start_time\'] or \'latest\'}}"\n      stream_cursor_field: "date"\n')),(0,r.kt)("p",null,"The full connector definition should now look like ",(0,r.kt)("inlineCode",{parentName:"p"},"./source_exchange_rates_tutorial/exchange_rates_tutorial.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "0.1.0"\n\ndefinitions:\n  selector:\n    extractor:\n      field_pointer: [ ]\n  requester:\n    url_base: "https://api.apilayer.com"\n    http_method: "GET"\n    authenticator:\n      type: ApiKeyAuthenticator\n      header: "apikey"\n      api_token: "{{ config[\'access_key\'] }}"\n    request_options_provider:\n      request_parameters:\n        base: "{{ config[\'base\'] }}"\n  stream_slicer:\n    type: "DatetimeStreamSlicer"\n    start_datetime:\n      datetime: "{{ config[\'start_date\'] }}"\n      datetime_format: "%Y-%m-%d"\n    end_datetime:\n      datetime: "{{ now_utc() }}"\n      datetime_format: "%Y-%m-%d %H:%M:%S.%f"\n    step: "1d"\n    datetime_format: "%Y-%m-%d"\n    cursor_field: "{{ options[\'stream_cursor_field\'] }}"\n  retriever:\n    record_selector:\n      $ref: "*ref(definitions.selector)"\n    paginator:\n      type: NoPagination\n    requester:\n      $ref: "*ref(definitions.requester)"\n    stream_slicer:\n      $ref: "*ref(definitions.stream_slicer)"\n  base_stream:\n    retriever:\n      $ref: "*ref(definitions.retriever)"\n  rates_stream:\n    $ref: "*ref(definitions.base_stream)"\n    $options:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/{{stream_slice[\'start_time\'] or \'latest\'}}"\n      stream_cursor_field: "date"\nstreams:\n  - "*ref(definitions.rates_stream)"\ncheck:\n  stream_names:\n    - "rates"\n\n')),(0,r.kt)("p",null,"Running the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation will now read all data for all days between start_date and now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config secrets/config.json --catalog integration_tests/configured_catalog.json\n")),(0,r.kt)("p",null,"The operation should now output more than one record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"type": "LOG", "log": {"level": "INFO", "message": "Read 8 records from rates stream"}}\n')),(0,r.kt)("h2",{id:"supporting-incremental-syncs"},"Supporting incremental syncs"),(0,r.kt)("p",null,"Instead of always reading data for all dates, we would like the connector to only read data for dates we haven't read yet.\nThis can be achieved by updating the catalog to run in incremental mode (",(0,r.kt)("inlineCode",{parentName:"p"},"integration_tests/configured_catalog.json"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "streams": [\n    {\n      "stream": {\n        "name": "rates",\n        "json_schema": {},\n        "supported_sync_modes": [\n          "full_refresh",\n          "incremental"\n        ]\n      },\n      "sync_mode": "incremental",\n      "destination_sync_mode": "overwrite"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In addition to records, the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation now also outputs state messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"type": "STATE", "state": {"data": {"rates": {"date": "2022-07-15"}}}}\n')),(0,r.kt)("p",null,'Where the date ("2022-07-15") should be replaced by today\'s date.'),(0,r.kt)("p",null,"We can simulate incremental syncs by creating a state file containing the last state produced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation.\n",(0,r.kt)("inlineCode",{parentName:"p"},"source-exchange-rates-tutorial/integration_tests/sample_state.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rates": {\n    "date": "2022-07-15"\n  }\n}\n')),(0,r.kt)("p",null,"Running the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation will now only read data for dates later than the given state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config secrets/config.json --catalog integration_tests/configured_catalog.json --state integration_tests/sample_state.json\n")),(0,r.kt)("p",null,"There shouldn't be any data read if the state is today's date:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"type": "LOG", "log": {"level": "INFO", "message": "Setting state of rates stream to {\'date\': \'2022-07-15\'}"}}\n{"type": "LOG", "log": {"level": "INFO", "message": "Read 0 records from rates stream"}}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps:"),(0,r.kt)("p",null,"Next, we'll run the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/testing"},"Source Acceptance Tests suite to ensure the connector invariants are respected"),"."),(0,r.kt)("h2",{id:"more-readings"},"More readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/incremental-stream"},"Incremental reads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/stream-slicers"},"Stream slicers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/stream-slices"},"Stream slices"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);