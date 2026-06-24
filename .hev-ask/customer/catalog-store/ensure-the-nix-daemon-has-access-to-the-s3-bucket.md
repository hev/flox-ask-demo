---
id: "customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"
title: "Catalog Store"
heading: "Ensure the Nix Daemon has access to the S3 Bucket"
group: "Customer"
order: 170
url: "/docs/customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"
anchor: "ensure-the-nix-daemon-has-access-to-the-s3-bucket"
terms: ["ensure","daemon","access","bucket","explains","since","flox","powered","must","obtaining","cloud","credentials","configuring","profile","region","match","verifying","stored","credential","values","secret","session","token","configure","home","awscli","amazonaws","index","html","probably","know","underlying","technology","powering","accordingly","need","take","couple","steps","just"]
hash: "9e70d2b45f35d0bd4f0dd5373940bc78bebf2ad930f5ba76c351eb4312617454"
mode: "agent-primary"
facts: [{"kind":"code","literal":"AWS_ACCESS_KEY_ID","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"code","literal":"AWS_SECRET_ACCESS_KEY","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"code","literal":"AWS_SESSION_TOKEN","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"code","literal":"aws configure","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"code","literal":"aws configure sso","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"code","literal":"$HOME/.aws/credentials","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"value","literal":"awscli.amazonaws.com","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"},{"kind":"value","literal":"index.html","chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket"}]
sources: [{"chunkId":"customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket","url":"/docs/customer/catalog-store#ensure-the-nix-daemon-has-access-to-the-s3-bucket","anchor":"ensure-the-nix-daemon-has-access-to-the-s3-bucket"}]
---

Explains that since Flox is powered by Nix, you must ensure the Nix daemon can access the S3 bucket by obtaining cloud credentials and configuring them so the profile and region match the bucket, then verifying the stored credential values.
