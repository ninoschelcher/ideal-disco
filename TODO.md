# TODO

## Content editing (for mum)

- [ ] Login without GitHub: either create a GitHub account for her and add it as a repo collaborator, or switch to Keystatic Cloud (`storage: { kind: "cloud" }`, she logs in with email)
- [x] Sections / page builder: `src/keystatic/sections/` (schema) + `src/sections/` (rendering)
- [x] Home and Over mij content as sections in `content/` (placeholders like `[REGIO]` still to fill in)
- [x] Contact form via Web3Forms, honeypot, consent checkbox, thank-you page `/bedankt`
- [ ] Web3Forms access key: create one with mum's email at web3forms.com, then set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` and as a Cloudflare build variable, rebuild and send a test message
- [x] Footer singleton (`content/footer.yaml`): name, KvK, links
- [x] Privacy statement template at `/privacyverklaring`: fill in the placeholders and have it checked
- [x] Header singleton (`content/header.yaml`): menu links, CTA button, active-page styling
- [x] Apple touch icon (`src/app/apple-icon.png`)
- [ ] Share image for link previews (SEO group or a generated `opengraph-image`)
- [ ] Optional: Markdoc components inside the rich text (callout, button)
- [ ] "Draft" checkbox on pages: leave drafts out of the build
- [ ] No branch or preview workflow: saving to `main` publishes, and a bad change is undone with a git revert. Tell her changes take a few minutes to appear
