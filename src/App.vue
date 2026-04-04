<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { absoluteUrl } from './absolute-url'
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import { DEFAULT_OG_IMAGE, SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE } from './site-meta'

const route = useRoute()
/** Matches pages that render the hero `background-container` (see home.vue). */
const isHeroLayout = computed(() => route.path === '/')

const pageTitle = computed(
  () => (route.meta.title as string | undefined) ?? SITE_DEFAULT_TITLE,
)
const pageDescription = computed(
  () => (route.meta.description as string | undefined) ?? SITE_DEFAULT_DESCRIPTION,
)
const ogImagePath = computed(
  () => (route.meta.ogImage as string | undefined) ?? DEFAULT_OG_IMAGE,
)
const ogImageAbsolute = computed(() => absoluteUrl(ogImagePath.value))
const canonicalUrl = computed(() => absoluteUrl(route.fullPath || '/'))

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogImage: ogImageAbsolute,
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImageAbsolute,
})
</script>

<template>
  <div class="wrapper" :class="{ home: isHeroLayout }">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
