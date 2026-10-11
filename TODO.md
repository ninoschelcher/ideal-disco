# TODO

## Content editing (for mum)

- [ ] Login without GitHub: either create a GitHub account for her and add it as a repo collaborator, or switch to Keystatic Cloud (`storage: { kind: "cloud" }`, she logs in with email)
- [ ] Sections / page builder: a `fields.blocks` "sections" field on Home and Pages (hero, text, image + text, features, CTA, maybe FAQ), with one React component per section type
- [ ] Optional: Markdoc components inside the rich text (callout, button)
- [ ] "Draft" checkbox on pages: leave drafts out of the build
- [ ] No branch or preview workflow: saving to `main` publishes, and a bad change is undone with a git revert. Tell her changes take a few minutes to appear
