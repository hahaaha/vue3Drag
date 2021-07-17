<template>
    <div class="drag-field">
        <draggable
            :list="list"
            class="list-group"
            item-key="simple"
            ghost-class="ghost"
            group="components"
            @start="dragging = true"
            @end="dragging = false"
        >
            <template #item="{ element }">
                <ElementRender :name="element.element" />
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import draggable from 'vuedraggable'
import ElementRender from './ElementRender.vue'
import { IElement } from './type/index'

export default defineComponent({
    components: {
        draggable,
        ElementRender
    },
    setup() {
        const dragging = ref(false)
        const list = ref<Pick<IElement,'id'|'element'>[]>([{
            id: 0,
            element: 'gInput',
        }, {
            id: 1,
            element: 'gInput'
        }])

        return { list,dragging }
    }
})
</script>
<style lang="scss">
.drag-field {
    width: 100%;
    display: flex;
    justify-content: center;
    .list-group {
        width: 300px;
        height: 500px;
        border: 1px #ccc solid;
    }
}
</style>