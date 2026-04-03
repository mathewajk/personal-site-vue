<template>
  <div class="wrapper">
    <div class="article markdown-body">
      <p v-if="!source" class="article-missing">This page could not be found.</p>
      <vue-markdown-render v-else :source="source" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import VueMarkdownRender from 'vue-markdown-render'

const modules = import.meta.glob<string>('../articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const bySlug = Object.fromEntries(
  Object.entries(modules).flatMap(([path, content]) => {
    const name = path.match(/\/([^/]+)\.md$/)?.[1]
    return name ? ([[name, content]] as const) : []
  }),
) as Record<string, string>

const route = useRoute()
const source = computed(() => {
  const p = route.params.slug
  const slug = typeof p === 'string' ? p : Array.isArray(p) ? (p[0] ?? '') : ''
  return bySlug[slug] ?? ''
})
</script>

<style scoped>

</style>