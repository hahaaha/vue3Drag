import { App } from 'vue'
import GlobalText from './src/GlobalText.vue'

GlobalText.install = function (app: App): void {
    app.component(GlobalText.name, GlobalText)
}

export default GlobalText