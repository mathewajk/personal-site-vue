import { ref } from 'vue'

export const THEME_STORAGE_KEY = 'theme'

export type ThemePreference = 'light' | 'dark'

export function getStoredTheme(): ThemePreference | null {
  const v = localStorage.getItem(THEME_STORAGE_KEY)
  if (v === 'light' || v === 'dark') return v
  return null
}

export function prefersDarkScheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function resolveIsDark(): boolean {
  const stored = getStoredTheme()
  if (stored) return stored === 'dark'
  return prefersDarkScheme()
}

export function applyThemeToDocument(isDark: boolean): void {
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
}

export const themeIsDark = ref(false)

export function setUserTheme(mode: ThemePreference): void {
  localStorage.setItem(THEME_STORAGE_KEY, mode)
  const dark = mode === 'dark'
  themeIsDark.value = dark
  applyThemeToDocument(dark)
}

export function toggleStoredTheme(): void {
  setUserTheme(themeIsDark.value ? 'light' : 'dark')
}

export function initTheme(): void {
  const dark = resolveIsDark()
  themeIsDark.value = dark
  applyThemeToDocument(dark)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === null) {
      const d = prefersDarkScheme()
      themeIsDark.value = d
      applyThemeToDocument(d)
    }
  })
}
