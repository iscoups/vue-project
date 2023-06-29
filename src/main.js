// 引入静态样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

createApp(App).use(router).mount('#app')
