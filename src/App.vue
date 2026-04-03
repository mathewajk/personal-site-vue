<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/header.vue'

const route = useRoute()
/** Matches pages that render the hero `background-container` (see home.vue). */
const isHeroLayout = computed(() => route.path === '/')
</script>

<template>
  <div class="wrapper" :class="{ home: isHeroLayout }">
    <Header />
    <RouterView />
  </div>
</template>
