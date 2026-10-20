# Rampa

Public site: https://rampa-mea.vercel.app

Rampa is developing a CMR and delivery-document workflow for Romanian carriers with approximately 5–50 trucks. This repository contains the **prelaunch website**, a fictional-data demonstration, and private pilot registration. It does not yet provide an operational fleet product, automatic extraction, signed-document uploads, or legally operative eCMR.

## Development

Node 24 and npm. Run `npm ci`, then `npm run dev`. The existing Start/Vite server uses port 8080. `npm run build` produces the Vercel output; `npm run preview` serves it on 8081. On Windows the command wrapper launches Node directly so the same scripts work without shell-specific executable resolution.

## Checks

- `npm test`: application and platform checks. The application group has 63 passing checks; the platform group has 195 passing checks and four explicit skips for external `.grok/skills/og` documentation that is not distributed with this repository.
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `node scripts/brand-check.mjs --root .`

Template tests use isolated fixtures rather than the live project's branding or untracked builder environment. Windows tests use directory junctions for symlink coverage. No behavioral assertions were removed.

## Pilot requests

`POST /api/pilot` accepts company, contact email, fleet-size range, language, and explicit contact consent. The endpoint validates and bounds the body, rejects cross-origin submissions, and ignores the honeypot. It acknowledges success only after a private durable Blob write. Failures remain errors in the UI. No contact data is saved in localStorage or returned through a listing endpoint.

The existing Vercel **rampa** project is connected to the private **rampa-pilot-requests** Blob store (`store_nSctmz3rCsVoiOqd`, Frankfurt). Connected production/preview/development environments supply server-only storage credentials. Do not copy these into client variables or source. Local development without storage credentials exercises the honest failure state; deployed builds use the connected store.

To review requests, open the Rampa store in Vercel's Storage dashboard and inspect the private JSON files under `pilot-requests/`. Names are random IDs rather than email addresses. There is no public admin interface. Delete a specific request when asked by the registrant, and remove records no longer needed when pilot recruitment ends. The contact address is listed on `/confidentialitate`.

## Product surfaces

- `/`: Romanian by default, optional English, editable sample order-to-CMR flow, native print action for an incomplete demonstration layout, proposed signed-copy return workflow, pilot form and FAQs.
- `/confidentialitate`: bilingual explanation of data use and contact details.
- `/fisa`: internal listing copy, marked noindex and containing no visitor data.
- `src/styles/`: base layout, demo, sections and responsive/print styles.
- `public/fonts/`: self-hosted IBM Plex fonts and SIL license; no Google Fonts requests.
- `public/og.svg`: editable source for the 1200×630 share image.

Product scope and acceptance criteria are recorded in `SPEC.md`.
