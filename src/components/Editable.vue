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
                <ElementRender
                    :name="element.element"
                    :conf="element.configure"
                    @getConf="getConf"
                />
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import draggable from 'vuedraggable'
import ElementRender from './ElementRender.vue'
import { IElement } from './type/index'

export default defineComponent({
    components: {
        draggable,
        ElementRender,
    },
    emits: ['getConf'],
    setup(_, context) {
        const dragging = ref(false)
        const list = ref<Pick<IElement, 'id' | 'element' | 'configure'>[]>([])

        const getConf = (val: any) => {
            context.emit('getConf', val)
        }
        return { list, dragging, getConf }
    },
})
</script>
<style lang="scss">
.drag-field {
    display: flex;
    justify-content: center;
    position: relative;
    width: 1200px;
    height: 780px;
    background: #fff;
    margin: auto;
    .list-group {
        width: 100%;
        height: 100%;
        padding: 20px;
    }
}
</style>