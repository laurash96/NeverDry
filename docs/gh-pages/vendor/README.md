# vendor/ - third-party code served from our own origin

Everything in this directory is somebody else's code, copied here on purpose
instead of being loaded from their CDN. A CDN in the page is a third party that
sees every visitor's IP address before we do, and a script URL we do not control
can change under us between one visit and the next. Serving our own copy removes
both, at the cost of having to update it by hand.

## vemetric-main.js

| | |
|---|---|
| Upstream | https://cdn.vemetric.com/main.js |
| Copied on | 2026-09-20 |
| Size | 7290 bytes |
| SHA-384 | `TX7HhcQPBYtVarsLOZVwwcPXzwliiI/LdBvjJv+sUrMMVJTUUoX5yjRL+wkYrKON` |

The script reads its configuration from its own `<script>` tag
(`document.currentScript`), so the `id`, `data-token` and any `data-*`
options travel with the tag and keep working from this location. It sends events
to `https://hub.vemetric.com`, which is why that origin is the only one allowed
in `connect-src` by the pages' Content-Security-Policy.

Self-hosting removes the CDN from the trust chain. It does **not** remove
Vemetric: the ingest endpoint still sees the visitor's IP address at the moment
an event is sent. That is declared on `privacy.html`, and it is the honest
limit of what this copy buys.

### Updating it

    curl -sS -o vendor/vemetric-main.js https://cdn.vemetric.com/main.js
    openssl dgst -sha384 -binary vendor/vemetric-main.js | openssl base64 -A

Then update the date, size and hash in the table above. Read the diff before
committing: this file runs on every page, and reviewing it is the whole reason
it lives in the repository instead of behind a URL.

## vemetric-init.js

Ours, not theirs. It holds the two lines that queue events fired before the
analytics script has finished loading. They used to sit inline in every page,
which forced `script-src 'unsafe-inline'` into the Content-Security-Policy and
therefore allowed *any* injected inline script to run. In a file, the policy
stays `script-src 'self'`.
