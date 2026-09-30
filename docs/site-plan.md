# Portfolio site plan

Status: implementation direction for the reviewed portfolio tickets. Public copy and launch remain subject to Bradley's approval.

## Purpose and hosting

Build a static TypeScript portfolio in `bgolski/bgolski.github.io` with Astro. GitHub Actions will build a Pages artifact for `https://bradleygolski.com`; Cloudflare continues to manage DNS. The public pages must contain their core text and links in generated HTML. No application server or client-side router is needed for those pages. AWS is reserved for the contact endpoint (HTTP API, Lambda, SES), which will be budgeted and checked before launch.

The current published main branch serves a redirect at `/` and contains an older `album-visualizer/` static export. The portfolio review branch excludes project application files. Each project application deploys from its own repository; `bgolski/album-wall` already does so at `/album-wall/`. The existing `bgolski/album-wall` project site serves `/album-wall/`; keep `/album-visualizer/` as a small legacy redirect to that route after verifying the target. The portfolio case study lives at `/projects/album-wall/`. Do not change DNS or the live Pages source while developing the candidate.

## Route and content map

| Route | Source | Visitor task |
| --- | --- | --- |
| `/` | Astro home page; approved introduction from `docs/content-inventory.md` | See the work and reach projects, resume, contact |
| `/about/` | Approved biography and experience | Understand Bradley's work and approach |
| `/projects/` | Validated project collection | Browse the Album Wall and Resume builder case studies first; support future projects without GitHub repositories |
| `/projects/<slug>/` | One static detail page per approved project | Read reusable case-study sections; show explicit copy and image placeholders until Bradley supplies the final content |
| `/credentials/` | Approved certifications and technology groups, cross-checked against the resume | Review qualifications |
| `/contact/` | Static form and visible `brad@bradleygolski.com` fallback | Send a message through the AWS endpoint after setup |
| `/resume/` | Astro page with PDF preview and download fallback | View the latest published resume |
| `/resume.pdf` | PDF copied from `bgolski/resume` during the build | Download the PDF |
| `/album-visualizer/` | Static redirect to `/album-wall/`; no application assets in this repository | Preserve the URL named in the brief |
| `/album-wall/` | Independent `bgolski/album-wall` Pages project repository | Open the independently maintained app |

The resume repository remains the source of its PDF. The committed file is `BradleyGolskiResume.pdf` at repository root (`latexmkrc` copies it there). The site build fetches and validates that PDF from a specified resume commit, or from `main` for an ordinary build; it does not commit the PDF into the portfolio source. A workflow in the resume repository dispatches a rebuild when its `main` branch changes. The site build fails if the PDF cannot be validated, preserving the last published artifact.

## Visual direction

Use a calm, editorial layout suited to a software developer: a concise introduction, clear page hierarchy, readable case-study cards, and a small set of reusable components. Let project screenshots and concise technical decisions provide the visual interest. The reference site is inspiration for a polished personal portfolio with an introduction, project highlights, credentials and contact; do not copy its layout or wording.

Use the requested purple `#7951A8`, grey `#989898`, white, and black. Purple can mark actions and section accents; grey should primarily serve borders or muted surfaces until text contrast is measured. Choose darker text variants where needed to meet WCAG AA. Use a responsive content width, mobile-first spacing, visible keyboard focus, and semantic header, main, and footer regions. Navigation and primary content must work without JavaScript. Avoid animation that obscures content or ignores reduced-motion preferences.

Expected reusable pieces: base layout, site header/footer, project card, project detail template, contact form, and SEO head. The first two case studies use clearly labeled temporary copy and one shared generic preview asset. Bradley supplies their final descriptions and screenshots later. Biography, role history, and credentials may be drafted from the committed `bgolski/resume` source; avoid confidential employer details and obtain Bradley's final review before publication.

## Delivery, cost, and recovery

Keep the portfolio itself on GitHub Pages. Before enabling contact delivery, review the expected HTTP API, Lambda, SES, logging, and alerting cost at anticipated traffic; set a low AWS spend alert and bounded throttling/concurrency. CORS does not prevent non-browser requests, so delivery and spend checks remain necessary. Confirm SES sender identity and the Cloudflare forwarding rule with direct and form-delivery tests. Do not change the existing Cloudflare MX records for inbound mail.

Package only the portfolio routes and `.nojekyll` with each site build. Check root pages, project case studies, the PDF, and 404 before upload. Verify `/album-wall/` separately and test the small `/album-visualizer/` redirect; the portfolio artifact must contain no project application subtree. Keep the candidate workflow on a review branch until the owner approves the cutover. Record the current Pages source, custom-domain setting, and prior deployment or commit before switching to Actions. Recovery is to restore the previous Pages source/deployment or deploy its recorded artifact, then recheck the apex and both independently served album routes. The custom domain stays configured in GitHub Pages settings; a repository `CNAME` file is ignored for an Actions-published site.

## References

- Owner brief: `/mnt/ssd/home/brad/portfolio-website.md` and its dated decisions in `codex-agent/plans/portfolio/brief.md`.
- Current-state observations: `codex-agent/plans/portfolio/proposals/research.md` (2026-09-28 and 2026-09-29).
- [Astro static deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
- [GitHub custom domains with an Actions publishing source](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages).
