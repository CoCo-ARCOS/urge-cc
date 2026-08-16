# URGE-CC

Website for the **Workshop on Urgent Computing Applications Across the Edge-to-HPC
Computing Continuum**, held with **HPC Asia 2027** in Seoul, Korea.

Single page, static, no backend. Built with [Astro](https://astro.build) and
Tailwind CSS v4.

## Running it

```sh
npm install     # once
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
npm run preview # serve the built output
```

## Personalising the site

Everything you would normally want to change lives in **one file**:

```
src/site.config.ts
```

Titles, dates, topics, committee members, links and contact details are all
defined there, and the page renders from it. You should not need to open an
`.astro` file to update content.

A few things worth knowing:

- **Placeholders.** Anything still reading `TBA` or linking to `#` is waiting on
  real information — deadlines, venue, organiser names, the conference URL, and
  the submission system link.
- **Adding or removing items.** The objectives, topics, dates, organisers and
  programme committee are plain arrays. Add or delete entries and the grids
  reflow on their own.
- **Navigation.** `site.nav` drives both the header and the footer. Each `id`
  must match the `id` of a section in `src/pages/index.astro`.
- **Opening submissions.** In `site.submission.button`, set `href` to your
  EasyChair/HotCRP URL and change `disabled` to `false` to turn the greyed-out
  button into a live link.
- **Social preview.** Set `site.meta.url` to the real deployed URL, and drop a
  1200×630 image in `public/` and point `site.meta.ogImage` at it.

### The hero banner

The banner has two modes, chosen with `hero.background`:

**`"photo"`** (current) — a photograph of Seoul. Drop the file in
`src/assets/hero/` and name it in the config:

```ts
hero: {
  background: "photo",
  photo: "seoul-south-korea.jpg",   // a file in src/assets/hero/
  photoAlt: "…",
  photoScrim: 0.62,                 // 0–1; raise it if the headline is hard to read
  photoCredit: "Image by … ",       // or { text, href } for a link, or null
}
```

Images in `src/assets/hero/` go through Astro's image pipeline: it emits WebP at
five widths with a JPEG fallback, so a large original is fine — the 7 MB source
here ships as 35–380 KB depending on the viewport. A path starting with `/` is
treated as a file in `public/` instead and is served as-is, with no
optimisation.

A wide, dark, dusk-or-night shot works best — the headline sits over the upper
left, so avoid photos with a busy subject there. Make sure you have the right to
use the image; the scrim and credit line are there to help, but they are not a
licence.

**`"skyline"`** — an illustrated Seoul skyline with N Seoul Tower on Namsan,
Lotte World Tower, the 63 Building, and the Han River, drawn as inline SVG in
`src/components/SeoulSkyline.astro`. No image file, sharp at any size, and it
picks up the tier colours from the theme.

### Colours and type

Design tokens are at the top of `src/styles/global.css`, inside the `@theme`
block — the navy neutral (`--color-ink-*`), the accent (`--color-urgent-*`), and
the four continuum tier colours (`--color-tier-*`). Change them there and the
whole site follows, including the hero glow and the continuum rail.

Fonts (Inter + JetBrains Mono) are loaded from Google Fonts in
`src/layouts/Layout.astro`.

## Structure

```
src/
  site.config.ts        ← all content
  pages/index.astro     ← the page; composes the sections
  layouts/Layout.astro  ← <head>, meta tags, theme bootstrap
  assets/hero/          ← hero photos, optimised at build time
  components/
    Header.astro        ← sticky nav, dark-mode toggle, scroll spy
    Hero.astro          ← banner; photo or illustrated skyline
    SeoulSkyline.astro  ← the illustrated skyline
    Section.astro       ← shared section shell (eyebrow + heading + lead)
    Footer.astro
  styles/global.css     ← design tokens, dark-mode variant, animations
```

The sections, in order: **Motivation and objectives** (the motivation
paragraphs, then the objectives as prose), **Topics of interest** (a numbered
list), **Important dates**, **Submission**, **Organising committee**, **Venue**,
and the alignment statement for the main conference.

In `motivation`, `body` and `objectives` are one continuous prose column. Each
objective's `title` renders as a bold lead-in to its paragraph — set it to `""`
for a plain paragraph, and set `objectivesHeading` to `""` to drop the
subheading. A section whose `lead` is `""` simply omits it.

Dark mode is class-based and remembered in `localStorage` under `urge-theme`;
it defaults to the visitor's system preference.

## Deploying

Pushing to the default branch builds and publishes the site to GitHub Pages via
`.github/workflows/deploy.yml`. It installs with `npm ci`, runs `npm run build`,
and uploads `dist/` — nothing is committed to a `gh-pages` branch.

**One-time setup:** in the repository, go to *Settings → Pages* and set
**Source** to **GitHub Actions**. Until that is done the workflow will run but
the deploy step will fail.

The live URL is <https://coco-arcos.github.io/urge-cc/>.

### The base path

GitHub Pages serves this project repo from a subpath, so `astro.config.mjs`
sets:

```js
site: "https://coco-arcos.github.io",
base: "/urge-cc",
```

Both are needed. `site` gives the canonical and Open Graph tags an absolute
URL; `base` prefixes every asset URL so CSS, fonts, and images resolve under
`/urge-cc/`. The dev server also serves from <http://localhost:4321/urge-cc/>,
which keeps local and production identical.

If you move to a custom domain, or rename the repo to `coco-arcos.github.io`,
change `site` to the new origin and set `base` to `"/"`.

Root-relative paths written by hand need the prefix too — use
`import.meta.env.BASE_URL`, as `Layout.astro` does for the favicon. Anything
imported from `src/assets/` or handled by `<Picture>` is prefixed automatically.

`npm run build` also produces a plain static `dist/` deployable to Netlify,
Vercel, or any static host — adjust `site`/`base` to match.
