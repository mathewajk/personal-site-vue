import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './components/home.vue'
import Article from './components/article.vue'
import Shishimai from './components/shishimai.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/articles/:slug', component: Article },
  { path: '/shishimai', component: Shishimai },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})