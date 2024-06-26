import { createApp } from 'vue'
import { App } from './app/ui'
import { router } from './app/router'
import './style.css'
createApp(App).use(router).mount('#app')
