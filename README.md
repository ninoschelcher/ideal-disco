# Ideal Disco

Next.js, React, Tailwind CSS, and Keystatic CMS, deployed to Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

## Local development

```bash
npm install
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- CMS: [http://localhost:3000/keystatic](http://localhost:3000/keystatic)

Locally, Keystatic writes Markdoc files to `content/`:

- `content/home.mdoc` is the **Home** singleton, rendered at `/`.
- `content/pages/*.mdoc` is the **Pages** collection; each entry becomes a route at `/{slug}`.

To check the site on the Workers runtime before deploying (`next dev` runs on Node and won't catch Workers-only issues):

```bash
npm run preview
```

Don't use `wrangler dev` directly; it skips populating the static assets cache, so every content page 404s.

## How content is served

All pages are prerendered at build time and served read-only from Workers static assets. The worker never reads `content/` at runtime, and unknown slugs return 404. New or edited content therefore needs a new build, which happens automatically when Keystatic (in GitHub mode) commits to `main`.

## Cloudflare

Create a **Worker** (not a Pages project) from this repo: Workers & Pages → Create → Workers → Import a repository. Name it `ideal-disco` to match `wrangler.jsonc`.

| Setting                      | Value                              |
| ---------------------------- | ---------------------------------- |
| Build command                | `npx opennextjs-cloudflare build`  |
| Deploy command               | `npx opennextjs-cloudflare deploy` |
| Non-production branch deploy | `npx opennextjs-cloudflare upload` |

Node is pinned to 24 via `.node-version`, which Cloudflare's build picks up.

To deploy from your machine instead:

```bash
npx wrangler login
npm run deploy
```

### Keystatic on the live site

Without any variables, the site builds from the committed `content/` files and the CMS only works locally. To edit content on the live site, switch Keystatic to GitHub mode:

1. Set `NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO=owner/repo` in your local `.env` (see `.env.example`), run `npm run dev`, open `/keystatic` and follow the prompts to create the GitHub App. This writes the remaining values to `.env`.
2. In Cloudflare, add `NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO` and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` as **build variables** (they're inlined at build time).
3. Add `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET` and `KEYSTATIC_SECRET` as **Worker secrets** (Settings → Variables and Secrets).
4. Add `https://<your-domain>/api/keystatic/github/oauth/callback` as a callback URL in the GitHub App settings.

## Next.js version

`next` is pinned to 16.3.8 because `@opennextjs/cloudflare` 1.20.10 doesn't support 16.4 yet (every route 500s with `Unexpected loadManifest(/.next/server/preview-props.json)`). Upgrade once OpenNext supports it, and re-test with `npm run preview`.
