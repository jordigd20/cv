# CV Maker

Simple project that generates a CV in PDF using Astro and a javascript object. Every push at the main branch triggers a Github Action that commits to the portfolio repository to keep the cv updated. 

# Tech stack

- Astro
- Node.js
- HTML
- TailwindCSS

## Installation

```bash
$ pnpm install
```

## Development

1. Fill the `src/data/resume-data.ts` file with your personal data.
1. Set the template styles using TailwindCSS in `index.astro`.
2. Run the app using the command below and open `http://localhost:4323` in your browser.

```bash
# development
$ pnpm run dev
```

## Generate PDF

Once you are happy with the result, you can generate the PDF following the next steps:

1. Create the output folder. By default the `.pdf` file will be created inside the `ouptput` folder. You can change this in the `app.cjs` file.

````bash
$ mkdir output
````

2. Run the command below to generate the PDF.

```bash
$ pnpm run generate
```

