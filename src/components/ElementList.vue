<template>
    <div class="element-list">
        <draggable
            class="dragArea list-group"
            :list="elementList"
            :group="{ name: 'components', pull: 'clone', put: false }"
            @change="log"
        >
            <template #item="{ element }">
                <div class="element-group-item">
                    <i :class="element.icon"></i>
                    {{ element.title }}
                </div>
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import draggable from 'vuedraggable'
import { IElement } from './type/index'

export default defineComponent({
    components: {
        draggable,
    },
    setup() {
        const elementList = ref<IElement[]>([
            {
                name: '123',
                element: 'gInput',
                title: '菜单1',
                icon: 'el-icon-circle-plus-outline',
                id: 0,
            },
            {
                name: '456',
                element: 'gInput',
                title: '菜单2',
                icon: 'el-icon-circle-plus-outline',
                id: 1,
            },
        ])
        return { elementList }
    },
    methods: {
        log() {
            console.log(this.elementList)
        },
    },
})
</script>
<style lang="scss">
.element-list {
    border: 1px #dcdfe6 solid;
    .element-group-item {
        width: 100px;
        border: 1px #e4e7ed solid;
    }
}
</style>