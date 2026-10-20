# Rampa experience refresh

## Launch hold — 2026-10-20

The user requested product integration and legal readiness, but chose to leave the service operator identity blank for now. Superseding the original intake acceptance below: remove public contact fields and reject `/api/pilot` before reading or storing input. Add a closed `/aplicatie` entry page for the separate CargoDesk product. Keep the fictional demo available. Do not publish incomplete contracts or claim compliance. Vercel Hobby/commercial eligibility and the applicable processor agreement must be resolved before a business launch. Private legal drafts stay outside Git and deployment uploads. Product production access is guarded independently in its repository; this change does not migrate or duplicate customer accounts.

Improve the existing public Romanian carrier landing page, preserving its brand and English option. This remains a prelaunch product site, not a fleet management application.

## Deliverables and acceptance

- Distinctive, accessible industrial design with readable typography, mobile navigation, consistent amber/ivory/dark tokens, and correct anchor offsets.
- An interactive example showing the same sample transport order, editable CMR details, and a printable demonstration document. No simulated AI, invented customers, timing claims, or working-product claims.
- A clearly described signed-document return workflow, marked as planned for the pilot.
- A three-field pilot request form with explicit contact consent, loading/error/success feedback, and server-side validation. Success requires a durable write to private Vercel Blob storage; no personal information is stored in localStorage or exposed through a public listing route.
- Romanian and English content, privacy information, useful metadata, and consistent share assets. The internal listing sheet stays accessible at /fisa without visitor data or a public footer link.
- Deploy a verified build to the existing Rampa Vercel project and check rampa-mea.vercel.app.

## Implementation order

1. Durable private lead collection and regression checks.
2. Product demonstration and complete page refresh.
3. Metadata/privacy/brand consistency, full verification, GitHub delivery, deployment.

## Structure and commands

Use the existing React/TanStack Start, Tailwind, Lucide, Zod, Node test runner and Vercel deployment. Keep platform helpers intact. New product components live in src/components/sigiliu; product/server helpers in src/lib/sigiliu; HTTP routes in src/routes. Use existing double-quoted, typed functional React conventions.

- Install: npm ci --no-audit --no-fund
- Dev: npm run dev
- Checks: npm test; npm run typecheck; npm run lint; npm run build
- Focused behavior check: node --experimental-strip-types --test src/lib/sigiliu/pilot.test.ts
- Browser: inspect development and production renders; test 320, 390, 768, 1024 and 1440 pixel widths, keyboard navigation, language preservation, demo edits/printing, and form error and success behavior.

## Boundaries

Use private, server-only storage and bounded inputs. Do not fabricate a founder identity, customer endorsements, launch dates, guaranteed time savings, legal acceptance, or automatic document extraction. Do not alter unrelated local CargoDesk work. No secrets in source or screenshots. User has authorized implementation and improvements at will; routine choices and reversible releases are covered by that authorization.
