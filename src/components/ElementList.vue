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

<script>
import { defineComponent } from "@vue/runtime-core";
import draggable from 'vuedraggable';

export default defineComponent({
    components: {
        draggable
    },
    data() {
        return {
            elementList: [{
                name: '123',
                title: '菜单1',
                icon: 'el-icon-circle-plus-outline',
                id: 0
            },{
                name: '456',
                title: '菜单2',
                icon: 'el-icon-circle-plus-outline',
                id: 1
            }]
        }
    },
    methods: {
        log() {
            console.log(this.elementList)
        }
    }
})
</script>
<style lang="scss">
.element-list {
    border: 1px #DCDFE6 solid;
.element-group-item {
    width: 100px;
    border: 1px #E4E7ED solid;
}
}
</style>