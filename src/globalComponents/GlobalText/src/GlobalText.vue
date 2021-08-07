<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, toRefs, ref } from '@vue/runtime-core'

export default defineComponent({
    name: 'GlobalText',
    props: {
        color: {
            type: String,
        },
        fontSize: {
            type: Number,
        },
    },
    setup(props) {
        const { color, fontSize } = toRefs(props)
        const style = computed(() => {
            return {
                color: color.value,
                fontSize: fontSize.value + 'px',
            }
        })

        return { style }
    },
})
</script>