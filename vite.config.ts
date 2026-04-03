import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Replaces `__OG_ORIGIN__` in HTML shells so `og:image` / `og:url` use absolute
 * https URLs when `VITE_SITE_URL` is set (needed for some unfurlers, e.g. Google Docs).
 * When unset, the placeholder becomes empty so paths stay root-relative (e.g. `/self-taiko-2.jpg`).
 */
function ogOriginPlugin(origin: string) {
  const trimmed = origin.replace(/\/$/, '')
  return {
    name: 'html-og-origin',
    transformIndexHtml(html: string) {
      return html.replaceAll('__OG_ORIGIN__', trimmed)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL ?? ''

  return {
    plugins: [vue(), ogOriginPlugin(siteUrl)],
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('index.html', import.meta.url)),
          shishimai: fileURLToPath(new URL('shishimai.html', import.meta.url)),
        },
      },
    },
  }
})
