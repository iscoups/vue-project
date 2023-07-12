// 引入静态样式
import '@/styles/common.scss'
import {lazyPlugin} from '@/directives/index'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index'

const app = createApp(App)
const pinia = createPinia()



app.use(router).use(pinia).use(lazyPlugin).mount('#app')
