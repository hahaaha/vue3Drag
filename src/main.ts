import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import gInput from './globalComponents/GlobalInput.vue'

createApp(App)
    .use(ElementPlus)
    .component('gInput',gInput)
    .mount('#app')
