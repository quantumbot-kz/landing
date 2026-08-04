# AGENTS.md - Quantum Landing

Project skills live in `.agents/skills/` (see `skills-lock.json`). Both are
gitignored - they are installed per machine rather than vendored, so expect to
install them yourself before relying on the table below.

## Design / UI / UX stack (curated)

Do **not** load every skill at once. Overlapping taste skills fight each other and produce generic output.

| Phase | Skill | Job |
| --- | --- | --- |
| 1. Direction | `frontend-design` | Distinctive visual thesis, type, composition |
| 2. Landing craft | `design-taste-frontend` | Anti-slop rules for marketing/landing pages |
| 3. Redesign loop | `impeccable` | PRODUCT.md / DESIGN.md, craft, polish, audit commands |
| 4. Existing-site pass | `redesign-existing-projects` | Audit current UI, upgrade without breaking behavior |
| 5. Decision lookup | `ui-ux-pro-max` | Styles, palettes, font pairings, UX patterns (Nuxt-aware) |
| 6. Compliance | `web-design-guidelines` | Accessibility / Web Interface Guidelines review |
| 7. Copy | `writing-guidelines` | Landing copy voice and clarity |

## Workflow for a root redesign

1. Read product context (`PRODUCT.md` / `DESIGN.md` if present; otherwise init via `impeccable`).
2. Infer audience and one-line design direction (`design-taste-frontend`).
3. Set art direction with `frontend-design` + optional lookup via `ui-ux-pro-max`.
4. Implement against existing Nuxt/Vue stack - do not introduce React/Next patterns.
5. Audit with `redesign-existing-projects` + `web-design-guidelines`.
6. Polish motion/type/copy with `impeccable` subcommands and `writing-guidelines`.

## Explicitly out of scope here

- `vercel-react-best-practices` and other React/Next skills - wrong stack (Nuxt/Vue).
- Style-locked packs (`high-end-visual-design`, `industrial-brutalist-ui`, `minimalist-ui`) - install only after the brand direction is chosen.
