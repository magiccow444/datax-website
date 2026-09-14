// @ts-check
import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// GitHub Pages URL configuration — read this before your first deploy.
//
// Where the site will live decides whether you need `base`. Getting this wrong
// is what makes a deployed Astro site show up as unstyled HTML (the CSS 404s).
//
//   1. Org/user root site  -> repo is named `<org>.github.io`
//      site: 'https://<org>.github.io'          and NO base
//
//   2. Project site        -> repo is named anything else
//      site: 'https://<org>.github.io'          and base: '/<repo-name>'
//
//   3. Custom domain       -> e.g. dataxclub.org
//      site: 'https://dataxclub.org'            and NO base
//
// Currently configured for case 1/3 (no base). If you end up on a project site,
// uncomment the `base` line below and set it to your repo name.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://magiccow444.github.io',
  // base: '/datax-website',
});
