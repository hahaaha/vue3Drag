<template>
    <div class="element-list">
        <draggable
            class="dragArea list-group"
            :list="elementList"
            :group="{ name: 'components', pull: 'clone', put: false }"
            :clone="cloneConf"
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
                element: 'GlobalInput',
                title: '输入框',
                icon: 'el-icon-circle-plus-outline',
                id: 0,
                configure: {},
            },
            {
                name: '456',
                element: 'GlobalText',
                title: '文本',
                icon: 'el-icon-circle-plus-outline',
                id: 1,
                configure: {
                    text: {
                        title: '文本内容',
                        value: '文本输入',
                    },
                    color: {
                        title: '字体颜色',
                        type: 'color',
                        value: 'red',
                    },
                    fontSize: {
                        title: '字体大小',
                        type: 'number',
                        value: 28,
                    },
                },
            },
        ])
        const cloneConf = (origial: IElement) => {
            const newClone = JSON.parse(JSON.stringify(origial))
            return newClone
        }
        return { elementList, cloneConf }
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
    .element-group-item {
        padding: 8px 12px;
        border: 1px #e4e7ed solid;
        cursor: pointer;
        & + .element-group-item {
            border-top: none;
        }
    }
}
</style>