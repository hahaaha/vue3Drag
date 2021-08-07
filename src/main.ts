import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import gc from './globalComponents/index'

import './styles/_reboot.scss'

createApp(App)
    .use(ElementPlus)
    .use(gc)
    .mount('#app')
