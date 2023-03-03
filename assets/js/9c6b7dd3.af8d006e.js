"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[99828],{83698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="S3-Glue",o={unversionedId:"integrations/destinations/s3-glue",id:"integrations/destinations/s3-glue",title:"S3-Glue",description:"This page guides you through the process of setting up the S3 destination connector with Glue.",source:"@site/../docs/integrations/destinations/s3-glue.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/s3-glue",permalink:"/integrations/destinations/s3-glue",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/s3-glue.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Rockset",permalink:"/integrations/destinations/rockset"},next:{title:"S3",permalink:"/integrations/destinations/s3"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up S3",id:"step-1-set-up-s3",level:2},{value:"Step 2: Set up Glue",id:"step-2-set-up-glue",level:2},{value:"Step 3: Set up the S3-Glue destination connector in Airbyte",id:"step-3-set-up-the-s3-glue-destination-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Output schema",id:"supported-output-schema",level:2},{value:"JSON Lines (JSONL)",id:"json-lines-jsonl",level:3},{value:"CHANGELOG",id:"changelog",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-glue"},"S3-Glue"),(0,r.kt)("p",null,"This page guides you through the process of setting up the S3 destination connector with Glue."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"List of required fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Region")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue serialization library"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allow connections from Airbyte server to your AWS S3/ Minio S3 cluster ","(","if they exist in separate VPCs",")","."),(0,r.kt)("li",{parentName:"ol"},"An S3 bucket with credentials or an instance profile with read/write permissions configured for the host (ec2, eks)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html#transit"},"Enforce encryption of data in transit")),(0,r.kt)("li",{parentName:"ol"},"Allow permissions to access the AWS Glue service from the Airbyte connector")),(0,r.kt)("h2",{id:"step-1-set-up-s3"},"Step 1: Set up S3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://signin.aws.amazon.com/signin"},"Sign in")," to your AWS account.\nUse an existing or create new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#:~:text=IAM%20User%20Guide.-,Programmatic%20access,-You%20must%20provide"},"Access Key ID and Secret Access Key"),"."),(0,r.kt)("p",null,"Prepare S3 bucket that will be used as destination, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this")," to create an S3 bucket."),(0,r.kt)("p",null,"NOTE: If the S3 cluster is not configured to use TLS, the connection to Amazon S3 silently reverts to an unencrypted connection. Airbyte recommends all connections be configured to use TLS/SSL as support for AWS's ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/compliance/shared-responsibility-model/"},"shared responsibility model")),(0,r.kt)("h2",{id:"step-2-set-up-glue"},"Step 2: Set up Glue"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://signin.aws.amazon.com/signin"},"Sign in")," to your AWS account.\nUse an existing or create new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#:~:text=IAM%20User%20Guide.-,Programmatic%20access,-You%20must%20provide"},"Access Key ID and Secret Access Key"),"."),(0,r.kt)("p",null,"Prepare the Glue database that will be used as destination, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/console-databases.html"},"this")," to create a Glue database"),(0,r.kt)("h2",{id:"step-3-set-up-the-s3-glue-destination-connector-in-airbyte"},"Step 3: Set up the S3-Glue destination connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new destination"),"."),(0,r.kt)("li",{parentName:"ol"},"On the destination setup page, select ",(0,r.kt)("strong",{parentName:"li"},"S3")," from the Destination type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Configure fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"this")," on how to generate an access key."),(0,r.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user. This user will require ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read and write permissions")," to objects in the bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this")," to create an S3 bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subdirectory under the above bucket to sync the data into."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Region"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"here")," for all region codes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Path Format"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Additional string format on how to store data under S3 Bucket Path. Default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Endpoint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Leave empty if using AWS S3, fill in S3 URL if using Minio S3."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Filename pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: {date}, {date:yyyy_MM}, {timestamp}, {timestamp:millis}, {timestamp:micros}, {part_number}, {sync_id}, {format_extension}. Please, don't use empty space and not supportable placeholders, as they won't recognized."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Glue database name that was previously created through the management console or the cli."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue serialization library"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The library that your query engine will use for reading and writing data in your lake"))))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up destination"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to local Airbyte page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"p"},"+ new destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the destination setup page, select ",(0,r.kt)("strong",{parentName:"p"},"S3")," from the Destination type dropdown and enter a name for this connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"this")," on how to generate an access key."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html"},"this")," on how to create a instanceprofile."),(0,r.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user. This user will require ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read and write permissions")," to objects in the staging bucket."),(0,r.kt)("li",{parentName:"ul"},"If the Access Key and Secret Access Key are not provided, the authentication will rely on the instanceprofile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,r.kt)("li",{parentName:"ul"},"Make sure your S3 bucket is accessible from the machine running Airbyte.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This depends on your networking setup."),(0,r.kt)("li",{parentName:"ul"},"You can check AWS S3 documentation with a tutorial on how to properly configure your S3's access ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"If you use instance profile authentication, make sure the role has permission to read/write on the bucket."),(0,r.kt)("li",{parentName:"ul"},"The easiest way to verify if Airbyte is able to connect to your S3 bucket is via the check connection tool in the UI."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this")," to create an S3 bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subdirectory under the above bucket to sync the data into."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Region"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"here")," for all region codes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Path Format"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Additional string format on how to store data under S3 Bucket Path. Default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Endpoint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Leave empty if using AWS S3, fill in S3 URL if using Minio S3."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Filename pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: {date}, {date:yyyy_MM}, {timestamp}, {timestamp:millis}, {timestamp:micros}, {part_number}, {sync_id}, {format_extension}. Please, don't use empty space and not supportable placeholders, as they won't recognized."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Glue database name that was previously created through the management console or the cli."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Glue serialization library"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The library that your query engine will use for reading and writing data in your lake"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Set up destination"),"."))),(0,r.kt)("p",null,'In order for everything to work correctly, it is also necessary that the user whose "S3 Key Id" and "S3 Access Key" are used have access to both the bucket and its contents. Policies to use:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:*",\n      "Resource": [\n        "arn:aws:s3:::YOUR_BUCKET_NAME/*",\n        "arn:aws:s3:::YOUR_BUCKET_NAME"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"For setting up the necessary Glue policies see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/glue-resource-policies.html"},"this")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/create-service-policy.html"},"this")),(0,r.kt)("p",null,"The full path of the output data with the default S3 Path Format ",(0,r.kt)("inlineCode",{parentName:"p"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<bucket-name>/<source-namespace-if-exists>/<stream-name>/<upload-date>_<epoch>_<partition-id>.<format-extension>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"testing_bucket/data_output_path/public/users/2021_01_01_1234567890_0.csv.gz\n\u2191              \u2191                \u2191      \u2191     \u2191          \u2191          \u2191 \u2191\n|              |                |      |     |          |          | format extension\n|              |                |      |     |          |          unique incremental part id\n|              |                |      |     |          milliseconds since epoch\n|              |                |      |     upload date in YYYY_MM_DD\n|              |                |      stream name\n|              |                source namespace (if it exists)\n|              bucket path\nbucket name\n")),(0,r.kt)("p",null,"The rationales behind this naming pattern are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each stream has its own directory."),(0,r.kt)("li",{parentName:"ol"},"The data output files can be sorted by upload time."),(0,r.kt)("li",{parentName:"ol"},"The upload time composes of a date part and millis part so that it is both readable and unique.")),(0,r.kt)("p",null,"But it is possible to further customize by using the available variables to format the bucket path:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}"),": Namespace where the stream comes from or configured by the connection namespace fields."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${STREAM_NAME}"),": Name of the stream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${YEAR}"),": Year in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MONTH}"),": Month in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${DAY}"),": Day in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${HOUR}"),": Hour in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MINUTE}")," : Minute in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${SECOND}"),": Second in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MILLISECOND}"),": Millisecond in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${EPOCH}"),": Milliseconds since Epoch in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${UUID}"),": random uuid string")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," characters in the S3 path are collapsed into a single ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," character."),(0,r.kt)("li",{parentName:"ul"},"If the output bucket contains too many files, the part id variable is using a ",(0,r.kt)("inlineCode",{parentName:"li"},"UUID")," instead. It uses sequential ID otherwise.")),(0,r.kt)("p",null,"Please note that the stream name may contain a prefix, if it is configured on the connection.\nA data sync may create multiple files as the output files can be partitioned by size (targeting a size of 200MB compressed or lower) ."),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting a specific bucket path is equivalent to having separate namespaces.")))),(0,r.kt)("p",null,'The Airbyte S3 destination allows you to sync data to AWS S3 or Minio S3. Each stream is written to its own directory under the bucket.\n\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you to provision a dedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,r.kt)("h2",{id:"supported-output-schema"},"Supported Output schema"),(0,r.kt)("p",null,"Each stream will be outputted to its dedicated directory according to the configuration. The complete datastore of each stream includes all the output files under that directory. You can think of the directory as equivalent of a Table in the database world."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under Full Refresh Sync mode, old output files will be purged before new files are created."),(0,r.kt)("li",{parentName:"ul"},"Under Incremental - Append Sync mode, new output files will be added that only contain the new data.")),(0,r.kt)("h3",{id:"json-lines-jsonl"},"JSON Lines ","(","JSONL",")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"JSON Lines")," is a text format with one JSON per line. Each line has a structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source><optional>"\n}\n')),(0,r.kt)("p",null,"For example, given the following two json objects from a source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"depending on whether you want to flatten your data or not (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"available as a configuration option")),")"),(0,r.kt)("p",null,"The json objects can have the following formats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "user_id": 123, "name": { "first": "John", "last": "Doe" } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "user_id": 456, "name": { "first": "Jane", "last": "Roe" } }\n')),(0,r.kt)("p",null,"Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ",(0,r.kt)("inlineCode",{parentName:"p"},".jsonl.gz"),")."),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-02-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22220"},"22220")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix race condition in test, table metadata, add Airbyte sync fields to table definition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19907"},"19907")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix parsing empty object in schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18695"},"18695")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial Commit")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);