@AGENTS.md

Open work is tracked in `TODO.md`.

## Renaming or moving the GitHub repo

The repo is currently `ninoschelcher/oradoro`. If its name or owner changes:

1. **`NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO`** — set it to the new `owner/name` in both places, then trigger a new Cloudflare build (the value is inlined at build time):
   - local `.env`
   - Cloudflare → Worker `oradoro` → Settings → Build → Variables and secrets

   This is the only thing that actually breaks: Keystatic looks the repo up through GitHub's GraphQL API, which doesn't follow rename redirects, so the CMS reports "repo not found" until it's updated.

2. **Git remote** — GitHub redirects the old URL, but update it anyway (the redirect dies if a new repo reuses the old name). Pushes go through the `github-personal` SSH alias:

   ```bash
   git remote set-url origin git@github-personal:<owner>/<new-name>.git
   ```

3. **This file** — update the repo name at the top.

4. **Verify** the next push still triggers a Cloudflare build; if not, reconnect the repo under Worker → Settings → Builds.

Not affected by a rename:

- **GitHub App installation**: tracked by repo ID. If the repo moves to a different owner, the app must be installed on the new owner's repo instead.
- **Worker name and URL** (`oradoro` in `wrangler.jsonc`, the `workers.dev` URL): independent of the repo name. Don't rename the Worker as part of this; the `WORKER_SELF_REFERENCE` service binding in `wrangler.jsonc` must match the Worker name.
- **Keystatic secrets** (`KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`) and the GitHub App callback URLs.
