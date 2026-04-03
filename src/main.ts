import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { initTheme } from './theme'

initTheme()

const head = createHead()
createApp(App).use(head).use(router).mount('#app')
