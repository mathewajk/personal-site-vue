<script setup lang="ts">
/** Internal routes mirrored from the header nav (home is listed separately). */
const pages = [
  { url: '/shishimai', title: 'toronto shishimai kai' },
  { url: '/articles/cv', title: 'cv' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <nav class="site-footer-sitemap" aria-label="Site map">
        <ul class="site-footer-links">
          <li>
            <RouterLink to="/">home</RouterLink>
          </li>
          <li v-for="page in pages" :key="page.url">
            <RouterLink :to="page.url">{{ page.title }}</RouterLink>
          </li>
        </ul>
      </nav>
      <p class="site-footer-copy">© mathew a. jacqmin-kramer 2026</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1.5rem 2rem;
  background-color: var(--color-link);
  color: white;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .site-footer {
    background-color: var(--color-link-muted);
  }
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
  color: white;
  text-decoration: none;
  text-underline-offset: 0.15em;
}

.site-footer-links a:hover {
  text-decoration-thickness: 2px;
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
