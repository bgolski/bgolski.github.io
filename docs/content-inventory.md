# Portfolio content inventory

Status: draft for Bradley's review. This file is planning material, not published page copy. Source for biography, roles, credentials, and technologies: [`bgolski/resume`](https://github.com/bgolski/resume), commit `754f349b7b40ba009824a986d540db6d889f7f29` (`resume.tex` and the committed PDF). Do not infer that a listed certification is currently active without checking its badge.

## Initial case studies

| Case study | Detail route | Repository | Live route | Copy and image status |
| --- | --- | --- | --- | --- |
| Album Wall | `/projects/album-wall/` | `https://github.com/bgolski/album-wall` | `https://bradleygolski.com/album-wall/` | Temporary description and shared preview; Bradley will supply final copy and screenshots. |
| Resume Builder | `/projects/resume/` | `https://github.com/bgolski/resume` | `/resume/` | Temporary description and shared preview; Bradley will supply final copy and screenshots. |

Project applications and the LaTeX source stay in their own repositories. The portfolio stores case-study content and a build-time copy of the committed resume PDF only. `/album-visualizer/` will redirect to the independent Album Wall app at launch.

### Fields Bradley will supply later

For each case study: a short summary, two or three highlights, preferred technology list, why it was built, real screenshot files or stable URLs, publication permission, and any wording for the live or source links. The planner can draft image alt text once the images arrive. Do not replace the public placeholders with inferred project stories.

## Draft biography and experience

> Bradley Golski is a software developer focused on web platforms, cloud infrastructure, and developer tooling. His work includes TypeScript and React applications, AWS infrastructure, delivery automation, and observability. He currently works as an Associate Software Engineer III at JPMorgan Chase & Co. and previously built and maintained university web applications at Ohio University.

This is a concise draft drawn from the public resume. Bradley should review the role wording, current employment claim, and level of detail before publication. Keep employer work high-level and avoid confidential implementation details.

| Role in committed resume | Dates in source | Draft use |
| --- | --- | --- |
| JPMorgan Chase & Co., Associate Software Engineer III | July 2022–present | Current role; verify the “present” claim at publication. |
| Ohio University, Student Software Engineer | September 2019–April 2022 | Prior web application work. |
| JPMorgan Chase & Co., Software Engineer Program Intern | Summer 2021 | Optional earlier role. |
| KeyBank, Key Technology, Operations and Services Intern | Summer 2020 | Optional earlier role. |

## Certifications to verify before publication

The committed resume lists the following credentials and issue dates. Use these as source facts, then check current badge status and Bradley's preferred display order. The site must not say “active” or “current” until verified.

| Credential | Issue date in source |
| --- | --- |
| AWS Certified Solutions Architect – Associate | July 2023 |
| AWS Certified Developer – Associate | January 2025 |
| AWS Certified CloudOps Engineer – Associate | May 2026 |
| CKAD: Certified Kubernetes Application Developer | December 2023 |
| HashiCorp Certified: Terraform Associate | June 2026 |
| FinOps Certified Practitioner | September 2024 |

The resume source contains public badge links for each credential; the credentials page can use them after review.

## Technology groups from the committed resume

- Languages: TypeScript, JavaScript, Python; Swift and C++ appear in the source but may be omitted for focus.
- Front-end and platform: React, Node.js, Next.js, GraphQL, npm libraries and CLI tooling.
- Cloud and delivery: AWS, Terraform, Docker, Kubernetes, Ansible, Jenkins and CI/CD.
- Observability: OpenTelemetry and Datadog.

These are draft selections from the source, not proficiency ratings or a claim that every tool is used in current work.

## Contact and resume

- Public contact address in the site brief: `brad@bradleygolski.com`. Bradley expects forwarding to `bgolski@gmail.com` to work; verify it during delivery testing and repair it later if needed.
- The PDF viewing route is `/resume/`; `/resume.pdf` is fetched from the committed root `BradleyGolskiResume.pdf` in the separate resume repository at build time. A resume-repository push will later trigger a site rebuild.

## Approval still needed

Bradley reviews the draft biography, roles, credential status, skill emphasis, contact wording, final case-study copy, and actual screenshots before the launch decision. The temporary project descriptions and preview are intentionally visible as placeholders on the review branch.
