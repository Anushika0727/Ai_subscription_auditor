# ARCHITECTURE

## Project Overview

AI Subscription Auditor is a web application that helps teams track and analyze AI tool subscription spending.

The current version focuses on collecting subscription data through a structured spend input form.

---

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

---

## Current Routes

### `/`
Landing page

### `/audit`
Spend input form

### `/results`
Audit results page

### `/audit/[id]`
Shareable public audit route

---

## Current Features

### Spend Input Form

Users can:

- add multiple AI tools
- enter plan details
- enter monthly spend
- enter seat counts
- enter team size
- enter primary use case

### Dynamic Tool Rows

The form supports dynamically adding multiple tool entries.

### Local Persistence

Form data is persisted using localStorage so refreshes do not lose progress.

### Navigation Flow

Users can continue from the audit form to the results page.

---

## Current Data Flow

1. User enters subscription information
2. Form state is stored locally in browser storage
3. Form submission routes user to results page
4. Results page will later generate spending insights

---

## Future Improvements

- pricing analysis
- duplicate subscription detection
- cost optimization recommendations
- backend database storage
- authentication
- shareable reports