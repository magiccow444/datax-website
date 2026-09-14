// @ts-check
import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// GitHub Pages URL configuration.
//
// This is a PROJECT site: the repo is named `datax-website`, so the site is
// served from a subpath and `base` must match the repo name. Getting `base`
// wrong is what makes a deployed Astro site render as unstyled HTML (the CSS
// 404s), so if you rename the repo, change `base` in the same commit.
//
// Live at: https://magiccow444.github.io/datax-website
//
// Internal links must go through url() in src/utils/url.ts rather than being
// hand-written as href="/something" — that helper prepends the base for you.
//
// If the club later moves to its own org and takes the root URL
// (e.g. https://dataxsdsu.github.io), update `site` and DELETE the `base` line.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://magiccow444.github.io',
  base: '/datax-website',
});
