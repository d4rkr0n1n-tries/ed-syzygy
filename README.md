# Education for All

A monochrome Next.js site for developers, software engineers and security engineers whose work goes unnoticed, inviting them to put their skills into education as Corporate Social Responsibility.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/page.tsx`: all page sections and copy
- `app/globals.css`: grey-ramp design tokens, light/dark themes, responsive layout
- `components/Terminal.tsx`: hero terminal that types itself out
- `components/EraSwitcher.tsx`: the same idea written in COBOL, C, Java, Python and Rust
- `components/PledgeForm.tsx`: pledge form that builds a git-style receipt (runs in the browser, nothing is sent)
- `components/DisplayControls.tsx`: theme and text-size toggles, saved locally
