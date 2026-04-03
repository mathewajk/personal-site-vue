import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** Document title and og:title when set. */
    title?: string
    /** Meta description, og:description, twitter:description when set. */
    description?: string
    /**
     * Root-relative path (e.g. from `public/`) or Vite asset URL (`?url` import).
     * Falls back to `DEFAULT_OG_IMAGE` when omitted.
     */
    ogImage?: string
  }
}

export {}
