---
id: "customer/catalog-store#policy-example"
title: "Catalog Store"
heading: "Policy example"
group: "Customer"
order: 171
url: "/docs/customer/catalog-store#policy-example"
anchor: "policy-example"
terms: ["policy","example","notes","buckets","normally","readable","only","owner","same","account","users","reasonable","starting","point","provides","bucket","making","published","software","available","wider","audience","while","warning","makes","contents","public","version","2012","statement","allowpublicread","effect","allow","principal","action","getobject","resource","name","default","confined"]
hash: "ae57c70935ec1a6ffc18bd3c9dcf3c75f498d7f7c05a1f26213ae10b7ec8c405"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"AllowPublicRead\",\n      \"Effect\": \"Allow\",\n      \"Principal\": \"*\",\n      \"Action\": \"s3:GetObject\",\n      \"Resource\": \"arn:aws:s3:::$BUCKET_NAME/*\"\n    }\n  ]\n}","chunkId":"customer/catalog-store#policy-example"}]
sources: [{"chunkId":"customer/catalog-store#policy-example","url":"/docs/customer/catalog-store#policy-example","anchor":"policy-example"}]
---

Notes that S3 buckets are normally readable only by the owner or same-account users, which is a reasonable starting point, and provides an example bucket policy for making published software available to a wider audience while warning that it makes the bucket contents public.
