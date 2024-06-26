import { createApp } from 'vue'
import './app/style.css'
import { App } from './app/'
import { router } from './app/'
createApp(App).use(router).mount('#app')
