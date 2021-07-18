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
        <ConfigureList :conf="Conf" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/runtime-core'
import draggable from 'vuedraggable'
import ElementRender from './ElementRender.vue'
import ConfigureList from './ConfigureList.vue'
import { IElement } from './type/index'

export default defineComponent({
    components: {
        draggable,
        ElementRender,
        ConfigureList,
    },
    setup() {
        const dragging = ref(false)
        const list = ref<Pick<IElement, 'id' | 'element' | 'configure'>[]>([])
        const conf = ref({})
        const Conf = computed(() => conf)

        const getConf = (configure: any) => {
            conf.value = configure
        }

        return { list, dragging, Conf, getConf }
    },
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