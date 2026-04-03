/**
 * Default Open Graph / splash image (root-relative path under `public/`).
 * Per-route overrides: set `meta.ogImage` on the route (see `router.ts`).
 * For link previews without JavaScript, add a dedicated HTML shell (see `shishimai.html`)
 * and a Vercel rewrite so crawlers receive the right `<head>`.
 */
export const DEFAULT_OG_IMAGE = '/self-taiko-2.jpg'

export const SITE_DEFAULT_TITLE = 'Mathew A. Jacqmin-Kramer'
export const SITE_DEFAULT_DESCRIPTION =
  'Taiko artist, composer, web developer, and linguist.'

export const SHISHIMAI_PAGE_TITLE = 'Toronto Shishimai Kai | トロント獅子舞会'
/**
 * Small JPEG for Open Graph / WhatsApp (~1200px, under ~300KB). The in-page photo stays
 * `edojishi.jpeg`; large originals often fail link-preview crawlers and fall back to favicon.
 */
export const SHISHIMAI_OG_IMAGE = '/og-shishimai.jpg'

/** First paragraph of the group description (also used for link previews). */
export const SHISHIMAI_ABOUT_FIRST_PARAGRAPH =
  'Toronto Shishimai Kai (TSK), founded January 2026, is a performing ensemble based in Toronto, Canada. We are dedicated to the practice and performance of Edo Kotobuki Jishi (江戸寿獅子), the traditional celebratory lion dance of Tokyo, and Edo Bayashi (江戸囃子), the traditional festival music of Tokyo.'
