/**
 * Build a site-root-relative URL that stays correct whether or not the site is
 * deployed under a base path (see `base` in astro.config.mjs).
 *
 * Do not hand-write `href="/about"` in a component — on a GitHub project site
 * that resolves to the wrong place. Use url('/about') instead.
 */
const BASE = import.meta.env.BASE_URL;

export function url(path = ''): string {
  return `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
