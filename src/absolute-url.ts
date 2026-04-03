/**
 * Open Graph and Twitter expect image URLs that crawlers can fetch.
 * Set `VITE_SITE_URL` in production (e.g. https://yoursite.com, no trailing slash)
 * so `vite build` can emit absolute `og:image` / `og:url` in HTML (helps Google Docs
 * and similar unfurlers). The Vue app also uses this after hydration.
 */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (site) return `${site}${normalized}`
  if (typeof window !== 'undefined') return `${window.location.origin}${normalized}`
  return normalized
}
