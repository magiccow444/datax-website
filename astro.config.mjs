// @ts-check
import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// Site URL configuration.
//
// The site is hosted on cPanel and served from the root of its own domain, so
// there is no `base`. `site` is used to build canonical and social-preview URLs.
//
// Live at: https://datax.sdsu.edu
//
// Internal links should still go through url() in src/utils/url.ts rather than
// being hand-written as href="/something". If the site is ever moved into a
// subfolder (e.g. https://example.com/datax/), add `base: '/datax'` here and
// every link built with url() will pick it up.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://datax.sdsu.edu',
});
