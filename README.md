# PriorAuth Connect

PriorAuth Connect is a portfolio prototype using synthetic data. It is not a production healthcare integration, does not process real PHI, and does not claim Da Vinci or regulatory certification.

## Overview

This demo shows a provider workflow for an MRI of the knee: discover simulated coverage requirements, complete documentation, generate a simplified FHIR-style representation, submit to a local simulated payer, and inspect the result and audit trail.

## Run

```bash
npm install
npm run dev
```

Focused tests: `npm test`; production build: `npm run build`.

## Publish a public demo with GitHub Pages

1. Create a new public GitHub repository, for example `priorauth-connect`.
2. From this folder, commit and push the project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy PriorAuth Connect to GitHub Pages** to finish.
5. GitHub will show the public URL under **Settings → Pages**. For a repository named `priorauth-connect`, it will normally be `https://YOUR-USERNAME.github.io/priorauth-connect/`.

The included workflow builds `dist/` and deploys it automatically on every push to `main`. The Vite base path is set automatically for repository pages.

## Da Vinci concepts

The UI uses CRD (Coverage Requirements Discovery), DTR (Documentation Templates and Rules), and PAS (Prior Authorization Support) at a conceptual demo level. It explicitly does not claim conformance or certification. The payload is a simplified educational FHIR-style representation, not a production PAS transaction.

## What is simulated

All data, payer rules, processing delay, payer outcomes, timestamps, identifiers, and status transitions are local and deterministic. The default demo outcome is Approved; the review selector also supports Additional Information Required and Denied.

## Not implemented

No EHR/payer integrations, real authentication, PHI, X12, CDS Hooks, CQL, clearinghouse, production security, database, multi-tenancy, RBAC, payments, appeals, or notifications.

## Production considerations / roadmap

Validate standards against authoritative HL7/Da Vinci implementation guides, then add reviewed EHR/FHIR and payer adapters, identity/access controls, audit/security controls, operational monitoring, error recovery, and a compliant deployment model. None of those integrations are implemented here.
