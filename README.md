# attar-cyber-brutalist-portfolio

Personal portfolio of Raihaan, a fullstack web and mobile developer. It covers his work across web application development, cross-platform mobile apps, DevOps, and data science, presented in a cyber-brutalist, terminal-inspired design.

**Tech stack:** React 19, Vite, Tailwind CSS v4

## Run

```bash
npm install
npm run dev
npm run build
```

## Adding project screenshots

1. Put images in `public/projects/` (create the folder if it does not exist).
2. Set `preview.src` for the project in `src/data/projects.js`, e.g. `preview: { type: 'web', src: '/projects/educlass.png' }`.
   Leave `src` as `''` to show the "SCREENSHOT PENDING" placeholder.
3. Recommended sizes: web preview **1280x720** (16:9), mobile preview **540x1140** (9:19).

## Contact form

Copy `.env.example` to `.env` and set your Formspree form ID:

```
VITE_FORMSPREE_ID=your-form-id
```

Without it, the contact form falls back to opening the visitor's email app with the message prefilled.
