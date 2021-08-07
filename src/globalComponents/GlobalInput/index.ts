import { App } from 'vue'
import GlobalInput from './src/GlobalInput.vue'

GlobalInput.install = function (app: App): void {
    app.component(GlobalInput.name, GlobalInput)
}

export default GlobalInput