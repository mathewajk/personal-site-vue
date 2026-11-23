<script setup lang="ts">
/** Internal routes mirrored from the header nav (home is listed separately). */
const pages = [
  { url: '/shishimai', title: 'Toronto Shishimai Kai' },
  { url: '/articles/cv', title: 'CV' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <nav class="site-footer-sitemap" aria-label="Site map">
        <ul class="site-footer-links">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li v-for="page in pages" :key="page.url">
            <RouterLink :to="page.url">{{ page.title }}</RouterLink>
          </li>
        </ul>
      </nav>
      <p class="site-footer-copy">© Mathew A. Jacqmin-Kramer 2026</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1.5rem 2rem;
  background-color: var(--color-bg);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--color-border-subtle);
}

.site-footer-inner {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.site-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer-links a {
  color: var(--color-text);
  text-decoration: none;
  text-underline-offset: 0.15em;
}

.site-footer-links a:hover,
.site-footer-links a:focus-visible,
.site-footer-links a.router-link-active {
  color: var(--color-link);
}

.site-footer-links a:focus-visible {
  outline: 2px solid var(--color-link);
  outline-offset: 2px;
}

.site-footer-copy {
  margin: 0;
  font-size: 0.9rem;
}

@media screen and (max-width: 767px) {
  .site-footer {
    padding: 1.25rem 1.5rem;
  }
}
</style>
