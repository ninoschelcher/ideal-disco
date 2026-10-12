# TODO

## Content editing (for mum)

- [ ] Login without GitHub: either create a GitHub account for her and add it as a repo collaborator, or switch to Keystatic Cloud (`storage: { kind: "cloud" }`, she logs in with email)
- [x] Sections / page builder: `src/keystatic/sections/` (schema) + `src/sections/` (rendering)
- [x] Home and Over mij content as sections in `content/` (placeholders like `[REGIO]` still to fill in)
- [ ] Contact form handler: `ContactForm` now posts to `mailto:` (opens the visitor's mail app). Pick a handler and pass its URL as `action` in `ContactSection`:
  - a form service (Web3Forms / Formspree): free, no server code, needs an account + key
  - or a Worker route sending via Cloudflare Email Routing: Email Routing on for oradoro.nl, verify mum's address (changes the MX/SPF records)
  - then add a thank-you state or page, and spam protection (honeypot or Turnstile)
- [ ] Site settings for the footer (KvK, Instagram, privacy link) and a header CTA
- [ ] Optional: Markdoc components inside the rich text (callout, button)
- [ ] "Draft" checkbox on pages: leave drafts out of the build
- [ ] No branch or preview workflow: saving to `main` publishes, and a bad change is undone with a git revert. Tell her changes take a few minutes to appear
