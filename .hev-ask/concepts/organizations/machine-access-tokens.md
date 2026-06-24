---
id: "concepts/organizations#machine-access-tokens"
title: "Organizations"
heading: "Machine Access Tokens"
group: "Concepts"
order: 102
url: "/docs/concepts/organizations#machine-access-tokens"
anchor: "machine-access-tokens"
terms: ["machine","access","tokens","describes","programmatic","interactive","floxhub","authenticate","organization","itself","rather","user","intended","cases","explains","these","client","credentials","grant","requiring","secret","provisioned","flox","after","workflows","fetch","token","calls","curl","request","post","https","auth","oauth","header","content","type","application","form","urlencoded"]
hash: "57f042a301da11fc863aba913a84031ac65bc1b2b90f9bba28c1ee60d2a058cd"
mode: "agent-primary"
facts: [{"kind":"code","literal":"curl --request POST \\\n  --url https://auth.flox.dev/oauth/token \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data \"client_id=YOUR_CLIENT_ID\" \\\n  --data \"client_secret=YOUR_CLIENT_SECRET\" \\\n  --data \"audience=https://hub.flox.dev/api\" \\\n  --data \"grant_type=client_credentials\"","chunkId":"concepts/organizations#machine-access-tokens"},{"kind":"code","literal":"Auth0","chunkId":"concepts/organizations#machine-access-tokens"},{"kind":"code","literal":"curl","chunkId":"concepts/organizations#machine-access-tokens"},{"kind":"flag","literal":"-issued","chunkId":"concepts/organizations#machine-access-tokens"}]
sources: [{"chunkId":"concepts/organizations#machine-access-tokens","url":"/docs/concepts/organizations#machine-access-tokens","anchor":"machine-access-tokens"}]
---

Describes programmatic, non-interactive access to FloxHub via machine tokens that authenticate as the organization itself rather than a user, intended for CI/CD use cases. Explains these use a client-credentials grant requiring a client ID and secret provisioned by Flox, after which workflows can fetch an access token to authenticate API or CLI calls.
