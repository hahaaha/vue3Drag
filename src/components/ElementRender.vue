<script>
import { defineComponent, h, resolveComponent, } from "@vue/runtime-core";

export default defineComponent({
    props: {
        name: {
            type: String,
            require: true
        },
        conf: {
            type: Object,
            require: true
        }
    },
    emits: ['getConf'],
    render() {
        const attr = {}
        Object.keys(this.conf).forEach((k) => {
            if (k !== 'text') {
                attr[k] = this.conf[k].value
            }
        })
        attr.onClick = () => {
            this.$emit('getConf', this.conf)
        }
        return h(resolveComponent(this.name), attr, this.conf.text.value)
    },
})
</script>