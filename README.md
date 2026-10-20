# Rampa

Public site: https://rampa-mea.vercel.app

Rampa is developing a CMR and delivery-document workflow for Romanian carriers with approximately 5–50 trucks. This repository contains the **prelaunch website** and a fictional-data demonstration. Pilot registration and customer access are closed pending operator identification, contracts and production privacy/security work. The operational Next.js/Supabase product is a separate repository; this site does not provide its customer sessions, automatic extraction, signed-document uploads or legally operative eCMR.

## Development

Node 24 and npm. Run `npm ci`, then `npm run dev`. The existing Start/Vite server uses port 8080. `npm run build` produces the Vercel output; `npm run preview` serves it on 8081. On Windows the command wrapper launches Node directly so the same scripts work without shell-specific executable resolution.

## Checks

- `npm test`: application and platform checks, including refusal of personal-data intake while launch is closed. Four platform checks explicitly skip external `.grok/skills/og` documentation that is not distributed with this repository.
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `node scripts/brand-check.mjs --root .`

Template tests use isolated fixtures rather than the live project's branding or untracked builder environment. Windows tests use directory junctions for symlink coverage. No behavioral assertions were removed.

## Pilot requests

`POST /api/pilot` currently returns `503 { ok: false, code: "intake_closed" }` before reading the body or writing to storage. The public form is replaced with a closed-pilot notice. This is enforced on the server, including direct API submissions. `src/lib/sigiliu/launch-status.ts` records the code-level hold; reopening requires review of operator details, public notices, retention/deletion, vendor/customer contracts and hosting eligibility, not just changing the constant.

The retained intake processor is separately tested for validation, bounded input, consent, same-origin checking and durable private writes. It is not independently exposed as a route. No contact data is saved in localStorage or returned through a listing endpoint.

The existing Vercel **rampa** project is connected to the private **rampa-pilot-requests** Blob store (Frankfurt). Existing storage is retained for administering any earlier requests. Connected environments supply server-only storage credentials; never copy them into client variables or source. The team was verified on Hobby on 2026-10-20: commercial eligibility and a suitable processor agreement remain launch blockers. See [Hobby restrictions](https://vercel.com/docs/plans/hobby) and [Vercel DPA scope](https://vercel.com/legal/dpa). Storage region alone does not establish EU-only processing.

To review requests, open the Rampa store in Vercel's Storage dashboard and inspect the private JSON files under `pilot-requests/`. Names are random IDs rather than email addresses. There is no public admin interface. Delete a specific request when asked by the registrant, and remove records no longer needed when pilot recruitment ends. The contact address is listed on `/confidentialitate`.

## Product surfaces

- `/`: Romanian by default, optional English, editable sample order-to-CMR flow, native print action for an incomplete demonstration layout, proposed signed-copy return workflow, closed-pilot notice and FAQs.
- `/aplicatie`: closed product entry page. Connect a verified separate app deployment after production setup; customer authentication belongs to the product, with individual accounts and company permissions. Infrastructure credentials must never be customer credentials, and unrelated `vercel.app` sites must not share session cookies.
- `/confidentialitate`: transitional bilingual public-demo notice, earlier-request handling, technical providers and rights contact. Full operator identification remains required before opening intake.
- `/fisa`: internal listing copy, marked noindex and containing no visitor data.
- `src/styles/`: base layout, demo, sections and responsive/print styles.
- `public/fonts/`: self-hosted IBM Plex fonts and SIL license; no Google Fonts requests.
- `public/og.svg`: editable source for the 1200×630 share image.

Product scope and acceptance criteria are recorded in `SPEC.md`.

Private operator/contract/runbook working drafts may be kept locally in `docs/legal/`. That directory is ignored by Git and Vercel uploads. Do not publish blank drafts as effective customer contracts or place customer data there.
