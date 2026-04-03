import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/home.vue'
import Article from './components/article.vue'
import Shishimai from './components/shishimai.vue'
import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SHISHIMAI_ABOUT_FIRST_PARAGRAPH,
  SHISHIMAI_PAGE_TITLE,
} from './site-meta'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: SITE_DEFAULT_TITLE, description: SITE_DEFAULT_DESCRIPTION },
  },
  {
    path: '/articles/:slug',
    component: Article,
    meta: { title: SITE_DEFAULT_TITLE, description: SITE_DEFAULT_DESCRIPTION },
  },
  {
    path: '/shishimai',
    component: Shishimai,
    meta: {
      title: SHISHIMAI_PAGE_TITLE,
      description: SHISHIMAI_ABOUT_FIRST_PARAGRAPH,
      ogImage: '/edojishi.jpeg',
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})