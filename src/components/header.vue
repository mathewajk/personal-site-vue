<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faExternalLink, faHome, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import { themeIsDark, toggleStoredTheme } from '../theme'

const pages = [
  { url: '/shishimai', title: 'Toronto Shishimai Kai' },
  { url: '/articles/cv', title: 'CV' },
]

const route = useRoute()
const menuOpen = ref(false)
const navMoreMenuRef = ref<HTMLElement | null>(null)
const navMenuBtnRef = ref<HTMLElement | null>(null)

const themeIcon = computed(() => (themeIsDark.value ? faSun : faMoon))

const themeToggleLabel = computed(() =>
  themeIsDark.value ? 'Switch to light mode' : 'Switch to dark mode',
)

const menuIcon = computed(() => (menuOpen.value ? faXmark : faBars))

const menuToggleLabel = computed(() => (menuOpen.value ? 'Close site links menu' : 'Open site links menu'))

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

watch(
  () => route.path,
  () => {
    closeMenu()
  },
)

function onDocumentPointerDown(e: PointerEvent) {
  if (!menuOpen.value) return
  const t = e.target
  if (t instanceof Node) {
    if (navMoreMenuRef.value?.contains(t) || navMenuBtnRef.value?.contains(t)) return
  }
  closeMenu()
}

function onDocumentKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointerDown)
  document.addEventListener('keydown', onDocumentKeydown)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<template>
  <div class="header-container">
    <nav class="navbar" aria-label="Main">
      <div class="container">
        <div class="navbar-header">
          <RouterLink to="/" class="navbar-home-link" aria-label="Home">
            <span class="navbar-home-text">Mathew A. Jacqmin-Kramer</span>
            <FontAwesomeIcon :icon="faHome" class="navbar-home-icon" aria-hidden="true" />
          </RouterLink>
        </div>
        <div class="menu navbar-right">
          <div class="nav-links-desktop">
            <a
              href="https://sazanamitaiko.net"
              target="_blank"
              rel="noopener noreferrer"
              title="Sazanami Taiko Arts Ensemble"
            >
              Sazanami
              <FontAwesomeIcon :icon="faExternalLink" class="nav-external-link-icon" aria-hidden="true" />
            </a>
            <RouterLink
              v-for="page in pages"
              :key="page.url"
              class="menu-item"
              :to="page.url"
              :title="page.title"
            >
              {{ page.title }}
            </RouterLink>
          </div>
          <div
            id="nav-more-menu"
            ref="navMoreMenuRef"
            class="nav-dropdown"
            :class="{ 'is-open': menuOpen }"
            role="region"
            :aria-hidden="!menuOpen"
            aria-label="Site links"
          >
            <a
                class="dropdown-link"
                href="https://sazanamitaiko.net"
                target="_blank"
                rel="noopener noreferrer"
                title="Sazanami Taiko Arts Ensemble"
                @click="closeMenu"
                >
                Sazanami
                <FontAwesomeIcon :icon="faExternalLink" class="nav-external-link-icon" aria-hidden="true" />
            </a>
            <RouterLink
              v-for="page in pages"
              :key="page.url"
              class="dropdown-link"
              :to="page.url"
              :title="page.title"
              @click="closeMenu"
            >
              {{ page.title }}
            </RouterLink>
          </div>
          <a class="nav-contact" href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">Contact</a>
          <button
            type="button"
            class="theme-toggle"
            :aria-pressed="themeIsDark"
            :aria-label="themeToggleLabel"
            @click="toggleStoredTheme"
          >
            <FontAwesomeIcon :icon="themeIcon" class="theme-toggle-icon" aria-hidden="true" />
          </button>
          <button
            ref="navMenuBtnRef"
            type="button"
            class="nav-menu-toggle"
            :aria-expanded="menuOpen"
            aria-controls="nav-more-menu"
            :aria-label="menuToggleLabel"
            @click="toggleMenu"
          >
            <FontAwesomeIcon :icon="menuIcon" class="nav-menu-toggle-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

.header-container {
  position: relative;
  z-index: 10;
  padding: 1em 1em 0.5em 1em;
}

.navbar {
  min-height: 4em;
  line-height: 1.5em;
  font-size: 1em;
  width: 100%;
}

.navbar .container {
  width: auto;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.navbar .navbar-right {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
}

.nav-links-desktop {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem 0.75rem;
}

.nav-dropdown {
  display: none;
}

.nav-menu-toggle {
  margin: 0;
  padding: 0.15em;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  color: var(--color-link);
  display: none;
  align-items: center;
  justify-content: center;
}

.nav-menu-toggle-icon {
  color: inherit;
  font-size: 1.15em;
}

.nav-menu-toggle:focus-visible {
  outline: 2px solid var(--color-link);
  outline-offset: 2px;
}

.theme-toggle {
  margin: 0;
  padding: 0.15em;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  color: var(--color-text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.theme-toggle-icon {
  color: inherit;
  font-size: 1.15em;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  color: var(--color-link);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-link);
  outline-offset: 2px;
}

.navbar a {
  color: var(--color-text);
  text-decoration: none;
  text-underline-offset: 0.2em;
}

.navbar a:hover,
.navbar a:focus-visible {
  color: var(--color-link);
}

.navbar a:focus-visible {
  outline: 2px solid var(--color-link);
  outline-offset: 2px;
}

.navbar .menu-item.router-link-active,
.navbar .dropdown-link.router-link-active {
  color: var(--color-link);
  text-decoration: underline;
}

.dropdown-link {
  display: block;
  padding: 0.65rem 1rem;
  text-align: left;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 4px;
}

.dropdown-link:hover,
.dropdown-link:focus-visible {
  background: color-mix(in srgb, var(--color-link) 12%, transparent);
  outline: none;
}

@media screen and (max-width: 1098px) {
  .nav-links-desktop {
    display: none;
  }

  .nav-menu-toggle {
    display: inline-flex;
  }

  .nav-dropdown {
    display: none;
    position: absolute;
    top: calc(100% + 0.35rem);
    right: 0;
    left: auto;
    min-width: min(18rem, calc(100vw - 2rem));
    max-width: calc(100vw - 2rem);
    flex-direction: column;
    padding: 0.35rem 0;
    margin: 0;
    list-style: none;
    z-index: 30;
    background: var(--color-bg);
    color: var(--color-text);
    border: 1px solid var(--color-border-subtle);
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .nav-dropdown {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }

  .nav-dropdown.is-open {
    display: flex;
  }

}

.navbar .navbar-header {
  font-weight: bold;
  color: var(--color-text);
}

.hero .navbar .navbar-header a,
.hero .navbar .nav-links-desktop a,
.hero .navbar .nav-contact,
.hero .navbar .theme-toggle,
.hero .navbar .theme-toggle-icon,
.hero .navbar .nav-menu-toggle,
.hero .navbar .nav-menu-toggle-icon {
  color: var(--color-nav-on-hero);
}

.hero .navbar .navbar-header a:hover,
.hero .navbar .navbar-header a:focus-visible,
.hero .navbar .nav-links-desktop a:hover,
.hero .navbar .nav-links-desktop a:focus-visible,
.hero .navbar .nav-contact:hover,
.hero .navbar .nav-contact:focus-visible,
.hero .navbar .theme-toggle:hover,
.hero .navbar .theme-toggle:focus-visible,
.hero .navbar .nav-menu-toggle:hover,
.hero .navbar .nav-menu-toggle:focus-visible,
.hero .navbar .menu-item.router-link-active {
  color: var(--color-nav-on-hero);
}

.hero .navbar a:focus-visible,
.hero .navbar .theme-toggle:focus-visible,
.hero .navbar .nav-menu-toggle:focus-visible {
  outline-color: var(--color-nav-on-hero);
}

.hero .navbar .nav-dropdown a {
  color: var(--color-text);
}

.hero .navbar .nav-dropdown a:hover,
.hero .navbar .nav-dropdown a:focus-visible,
.hero .navbar .dropdown-link.router-link-active {
  color: var(--color-link);
}

.hero .navbar .nav-dropdown a:focus-visible {
  outline-color: var(--color-link);
}

.navbar .navbar-header a {
  color: var(--color-text);
}

.navbar-home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.navbar-home-icon {
  display: none;
  color: inherit;
  font-size: 1.2em;
}

.nav-external-link-icon {
  margin-inline-start: 0.35em;
  font-size: 0.85em;
  vertical-align: -0.1em;
  opacity: 0.85;
}

@media screen and (max-width: 767px) {
  .navbar-home-text {
    display: none;
  }

  .navbar-home-icon {
    display: block;
  }
}
</style>
