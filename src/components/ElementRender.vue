<script>
import { defineComponent, h, resolveComponent } from "@vue/runtime-core";

export default defineComponent({
    props:{
        name: {
            type: String,
            require: true
        }
    },
    render() {
        return h(resolveComponent(this.name))
    }
})
</script>