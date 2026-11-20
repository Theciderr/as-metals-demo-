# Project progress

Updated 21 November 2026 (Asia/Calcutta). Read with AGENTS.md and DESIGN.md at every new session.

## Redesign checkpoint 3e - Contact and final polish
- Branch: `redesign`
- Contact/About page upgraded with a premium contact card, two-column business information, clear visit details and verified phone/WhatsApp/Instagram links.
- Shared footer now has a deeper gold-framed dark surface, larger text, stronger collection links and the supplied gold logo on transparent backing.
- Header, focus, mobile bottom contact bar, Home, Gallery and Quote layouts preserve the one-theme dark/gold system.
- Verified `npm run typecheck`, `npm run build --webpack`, route axe checks, filter motion, quote logic and 375px/1280px/1440px geometry.
- Lighthouse 12.6.1 mobile results: Home 71, Gallery 74, Quote 89, Contact 84 performance. Accessibility, best practices and SEO are 100 on all four routes.
- Performance target 90+ is not yet met. Remaining work is trace-led JavaScript/image/LCP optimization, not visual redesign.
- No invented hours, map pin, reviews, client history or business claims were added.

## Redesign checkpoint 3d
- Branch: `redesign`
- Quote page composition upgraded only. Added a premium heading, framed selected-design panel, clearer form surface, stronger required/optional labels and a sticky desktop guidance panel.
- Inline validation, first-invalid focus, local file handling, direct WhatsApp alternative and prepared-message fallback behavior are unchanged.
- Selected catalogue references now use "Selected design · concept" and design-concept alt text.
- Verified `npm run typecheck` and `npm run build --webpack`.
- Browser/axe route checks pass at 375px and 1280px. Manual 375px/1440px geometry checks show no overflow.
- Standalone quote logic passes validation, selected-design, optional-field, attachment-reminder and Unicode/URL round-trip checks.
- Invalid submission exposes name and phone errors correctly. Valid submission shows the prepared WhatsApp message success state.
- Contact/About redesign remains pending.

## Redesign checkpoint 3c
- Branch: `redesign`
- Gallery page composition upgraded only. Heading, offering tabs, search/filter controls and catalogue grid now use the shared dark/gold system.
- Design cards use a three-column desktop rhythm with staggered offsets and stronger image hover/press feedback. Mobile remains a readable single-column catalogue.
- Catalogue labels now say "Design concepts" in the Gallery heading summary and detail dialog.
- Existing 54-design filtering, search, family filter, pagination, native dialog, quote handoff and custom comparison behavior were preserved.
- Verified `npm run typecheck` and `npm run build --webpack`.
- Browser/axe route checks pass at 375px and 1280px. Manual 1440px geometry check has three columns, 12 cards and no horizontal overflow.
- Gallery filter/reduced-motion/count script passes. Quote and Contact redesign work remain pending.

## Redesign checkpoint 3b
- Branch: `redesign`
- Home page composition updated only. The hero now has a compact grand-opening badge, a 620ms staged entrance, stronger 54px mobile CTAs and an image-led right visual.
- Collection section uses a responsive asymmetric desktop grid with the first and third tiles offset from the equal-card baseline.
- Catalogue scenes are labelled as design concepts in Home captions and collection alt text.
- Hero and collection imagery retain real catalogue assets; no invented project claims or unsupported facts were added.
- The mobile CTA is visible in the initial viewport and the fixed WhatsApp/Call bar remains thumb-sized.
- Verified `npm run typecheck` and `npm run build --webpack`.
- Verified no horizontal overflow at 375px and 1440px; primary hero CTA is visible within the initial viewport at both sizes.
- Browser/axe route checks passed. Lighthouse and Gallery, Quote and Contact redesign work remain pending.

## Redesign checkpoint 3a
- Branch: `redesign`
- Global design system implemented only. Bricolage Grotesque display and Manrope body fonts load through `next/font`.
- Charcoal/ink, warm gold, bronze and sand semantic tokens are consolidated in `app/globals.css`; the palette remains dark and catalogue-led.
- Shared controls now use 6px radii, 52px mobile primary/control height, visible focus rings, gold press feedback and a 260ms eased transition system.
- Warm radial surfaces, restrained fine grain and deeper tinted shadows add depth without a new theme or image assets.
- Verified `npm run typecheck` and `npm run build --webpack`.
- Browser checks passed at 375px, 1280px and 1440px with no horizontal overflow, missing alt text, axe violations or one-H1 regressions.
- Lighthouse and page-specific redesign work remain pending. Do not mark Phase 4 complete.

## Current checkpoint
Phase 4 INCOMPLETE. User authorised final pass, but two performance optimization attempts did not reach the required mobile >=90 scores. STOPPED under the brief's two-failure rule; await go before further fixes. Recommend gpt-6.2-astra/high for the performance fix. Do not call this Checkpoint 7/final handover complete or deploy-ready.

Latest measured mobile Lighthouse (12.6.1, isolated headless Edge, default mobile simulation): Home performance 71, Gallery 83, Quote 81, Contact 85. Accessibility, best practices and SEO are 100 on all four pages. Reports at output/lighthouse/{home,gallery,quote,contact}.{html,json}, summary.json. Baseline and intermediate reports preserved; intermediate performance was 88/85/89/89. Latest changes regressed the measured run; do not present intermediate results as final or claim a causal explanation without trace review.

Final-pass changes implemented: canonical/OG/Twitter metadata, LocalBusiness schema using verified facts, sitemap/robots, generated social image, AS utility favicon, friendly 404, native keyboard 2D/3D comparison and text alternative, correct skip/quick-contact/notice landmarks, source formatting, unused public image-copy pruning (original research assets retained), header Escape/dialog conflict fix. Shared header no longer eagerly imports Framer Motion. Gallery mini animation loads only on filter changes; current build/typecheck and latest dynamic-import interaction script pass.

Current experiment: next.config.ts experimental.inlineCss=true, hero eager/high fetch priority, header logo eager rather than preloaded, Gallery import framer-motion/dom/mini on interaction. Do not assume inlineCss is an improvement: latest performance was lower. The first mini import used framer-motion/mini (hook-only); corrected to dom/mini and typechecked/built successfully. Revisit experimental inline CSS and traces first rather than guessing further.

Latest browser audit: all four pages at 375px/1280px, axe WCAG/best-practice scan zero violations, no page errors/overflow/missing alt, one H1, canonical/OG present. Native dialog focus/Escape, range ArrowRight (50→51), reduced motion/text alternative, sitemap/robots/OG/favicon endpoints and 404 all passed. Evidence output/final/browser-checks.json. Re-run after performance fixes before final handover. Quote logic checks still pass; no messages sent.

Audit tooling: Lighthouse/axe-core/Prettier installed as dev dependencies. npm audit --omit=dev reported zero production vulnerabilities. Lighthouse's temporary dev-tool dependency tree still has 10 high advisories after the recommended 12.6.1 version change; remove the temporary Lighthouse dependency after measuring (retain reports) or otherwise resolve it before calling final cleanup complete. Do not force-upgrade blindly. Audit runner uses isolated Playwright Edge because chrome-launcher failed to detect its dynamic debugging port. Script scripts/lighthouse-final.cjs requires local Lighthouse installed and the bundled Playwright path; scripts/check-filter-motion.cjs is ready but not yet run.

Domain: user gave asmetalfabiractors.com 'for example'. Treat as unconfirmed spelling/ownership, not a verified domain. SITE_URL config plus VERCEL_PROJECT_PRODUCTION_URL fallback implemented; local canonical remains localhost. .env.example and HANDOVER.md document configuration. HANDOVER.md is provisional while final checks remain incomplete. No deployment occurred.

## Approved decisions
- Source catalogue is authoritative; illustrative images must not be presented as completed installations.
- Existing dark/gold visual identity accepted. Refined stone monochromes, serif hierarchy, line icons, fine borders and subtle static gradients accepted for current direction.
- Navigation-based architecture, professional footer, all four offerings/full catalogue. Home expanded to six sections after feedback that it became too short.
- Local file selection followed by manual WhatsApp attachment explicitly approved. No hosted upload or automatic attachment.
- Contact working days confirmed by user: Every day. User asked to show just Lakhnaur Sahib, Ambala as location for now; no map pin. Exact opening/closing times remain unconfirmed and clearly marked.
- Latest gold logo supplied by user (81a0d918-58c8-46ec-b0d5-2c1dcfa711eb.png) supersedes earlier red/silver version. Use original PNG unchanged in app/brand.tsx, shared Header/Footer. No light backing; CSS trims empty display margins. Main site palette remains stone/gold.

## Completed
- Phase 1: four PDFs read, 63 pages rendered/reviewed, 54 unique designs indexed with source/image provenance. Research report covers eight comparable businesses.
- Phase 2: strategy and mobile/desktop wireframes revised; production implementation now supersedes Home/Gallery/Quote wireframes.
- Production Home: hero, four collections, catalogue feature/PDF links, custom CNC capabilities, material/finish guidance, closing quote prompt, professional shared footer.
- Production /gallery: 54 records, offering/family filters, code/name search, 12-design pagination, empty-state recovery, shareable native dialogs, source PDF page references, selected-design quote links. /gallery?view=custom-work contains capacity/material/finish guidance and static 2D/3D explanation.
- Production /quote: selected design/name/offer, change/remove, unknown-code recovery, required name/phone/requirement; optional size/material/message/reference. Inline validation/focus, direct WhatsApp alternative, prepared message/copy/reopen fallback. Opens a new WhatsApp tab; visitor still presses Send. Local filename reminder, no server upload or localStorage persistence.
- Production /contact: verified business/owner overview, all-offering links, phone/Instagram/quote contacts, locality Lakhnaur Sahib, Ambala, working days Every day, visiting-time placeholder, WhatsApp directions request. No invented map pin, history, reviews or service promises. Header/footer now target /contact with current-navigation state.
- Header/Home/Gallery/footer CTAs route to Quote; Gallery passes AMF code. Old Home/catalogue/custom/quote/contact preview URLs redirect to production equivalents.
- User-supplied gold logo installed globally; source at public/brand/as-metal-fabricators-gold.png. Header/footer no longer text-only wordmarks.

## Verification
- Production build and TypeScript pass. Webpack scripts avoid environment-specific Turbopack CSS subprocess failure. Next.js 16.4.6 and package-lock installed.
- Home/Gallery checked at 375px and 1280px; no overflow, images and source links valid, dialog Escape/focus return/Back, query links and filters checked.
- Quote checked at 375x812 and 1280x900; no horizontal/button overflow. Selected-code handoff, invalid required fields/first focus, optional defaults, retained values, unknown/remove-design and Gallery-to-Quote verified. Unicode/script-like input stays safe text in prepared message.
- Reference tests used synthetic browser File/DataTransfer fixtures after two disk-path upload_file attempts were denied by tool workspace-root configuration. Unsupported type rejected; supported PDF filename shown, manual attachment reminder included in message, remove clears input/summary/stale message. Simulated clipboard denial selects prepared message and shows copy instructions. Real OS picker was not exercised.
- All WhatsApp submission tests intercepted window.open. No business chat, upload or enquiry sent.
- Console clear. Full Lighthouse and final SEO/accessibility audit still Phase 4. Evidence: output/quote-verification.md.
- Contact: final production build/typecheck passed; checked at 375x812 and 1280x900 with no horizontal/button overflow, quote CTA above fold, responsive columns, correct menu/current nav, Escape close, all local links/PDFs HTTP 200. Phone/Instagram/directions URLs inspected without contacting business; no Google map shown. Confirmed old preview redirect. Console clear. Evidence: output/contact-verification.md.
- Logo: final build/typecheck pass, isolated headless Edge verified image load/no overflow at 375px/1280px, page errors empty. Screenshots output/playwright/logo-mobile.png and logo-footer.png visually inspected. Connected Chrome tool stalled while awaiting lazy footer decode; test switched to isolated browser without altering app behaviour. scripts/check-brand.cjs is environment-specific (bundled runtime path).

## Preview and commands
- Running production server: http://127.0.0.1:3005 (session 3727).
- About & contact: http://127.0.0.1:3005/contact
- Quote: http://127.0.0.1:3005/quote?design=AMF-3DR-01
- Restart: npm run build then node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3005
- Validate: npm run typecheck
- Message checks: node --experimental-strip-types scripts/check-quote.cjs (Node 22 warnings expected).
- Earlier preview servers on 3003 may be stale. Do not use those for review. An old dev process may occupy 3000; stop only a verified task process or select a free port.

## Needed from client
- Exact map pin/street directions and opening/closing times. Working days Every day confirmed; show only Lakhnaur Sahib, Ambala location for now as requested. Keep exact times placeholder and omit unverified map.
- Actual ordering stages before How ordering works can be published. No assumed deposits/approval/production/delivery sequence.
- Genuine workshop or completed-work photos; current catalogue scenes are illustrative. Gold PNG logo is now supplied/implemented. True vector is optional for future larger placements, not a blocker for this site.
- Installation/delivery/service area, warranty, turnaround and prices only if those claims should appear. Omit unsupported promises.
- Confirm business WhatsApp is active and public email may be published (catalogue: akay0171@gmail.com).
- Confirm public brand punctuation if needed: brief A.S Metal Fabricators, collateral A.S. METAL FABRICATORS.
- Higher-resolution originals if final crops need them. Do not synthesize missing craft detail.

## Exact next step after go
Resume Phase 4 with gpt-6.2-astra/high. Inspect output/lighthouse latest versus intermediate metrics/traces, especially TBT and inline-CSS duplication; resolve mobile performance >=90 without weakening audit settings or hiding content. Consider reverting the experimental CSS change first. Run scripts/check-filter-motion.cjs and final-browser-check.cjs on final build; preserve actual reports. Clean temporary audit dependencies and verify production audit, build/typecheck. Complete copy/animation/SEO review and update provisional HANDOVER.md/README. Then Checkpoint 7 with actual measured scores, remaining client details and deploy steps. Do not deploy unless authorised.

## Remaining final pass
Performance target still unmet; audit-tool dependency cleanup and final copy/handover review remain. Comparison/SEO endpoints and latest interaction/reduced-motion checks are implemented and checked. Automatic opening notice expires at 24 November 2026 00:00 Asia/Kolkata; do not claim actual opening without confirmation.

## Migration caution
Scripts/build_home.py and gallery_data.py are one-time migration helpers and must not be rerun over refactored React files. Source data now lives in app/gallery/designs.json; provenance in research/catalogue. See README.
