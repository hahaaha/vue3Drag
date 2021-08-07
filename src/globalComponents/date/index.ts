import { App } from 'vue'
import date from './src/date.vue'

date.install = function (app: App): void {
    app.component(date.name, date)
}

export default date