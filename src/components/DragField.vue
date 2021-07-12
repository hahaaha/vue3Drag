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
          <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
            {{ element.name }}
          </div>
        </template>
      </draggable>
      </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import draggable from 'vuedraggable'

export default defineComponent({
    components: {
        draggable
    },
    data() {
        return {
            enabled: true,
            list: [{
                name: 'abc',
                id: 0
            },{
                name: 'efg',
                id: 1
            }],
            dragging: false
        }
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