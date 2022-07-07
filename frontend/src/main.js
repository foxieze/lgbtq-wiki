import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/spectre.min.css'
import '@/assets/css/styles.css'
import '@/assets/css/spectre-icons.min.css'

createApp(App).use(router).mount('#app')
