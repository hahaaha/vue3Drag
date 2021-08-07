import { App } from 'vue'
import date from './date'
import GlobalText from './GlobalText'
import GlobalInput from './GlobalInput'

const components = [
    date,
    GlobalText,
    GlobalInput
]

const install = function (app: App) {

    components.map(component => app.component(component.name, component))
}


export default {
    install,
    ...components
}