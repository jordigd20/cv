# CV Maker

Simple project that generates a CV in PDF from an HTML template and a javascript object.

# Tech stack

- NodeJS
- Vite
- HTML
- TailwindCSS

## Installation

```bash
$ pnpm install
```

## Development

1. Set the resume object in `src/data/resume-data.ts`
2. Set the template styles using TailwindCSS in `index.html` and `src/main.ts`.
<!-- 3. You are able to use more than one language, just add -->
4. Run the app using the command below and open `http://localhost:5173` in your browser.

```bash
# development
$ pnpm run dev
```

## Generate PDF

Once you are happy with the result, you can generate the PDF using the command below.

```bash
pnpm run generate
```

