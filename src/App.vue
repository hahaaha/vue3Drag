<template>
  <div id="drag_container">
    <Toolbar />
    <div class="drag_content">
      <div class="left">
        <ElementList />
      </div>
      <div class="center">
        <Editable @getConf="getConf" />
      </div>
      <div class="right">
        <div>属性面板</div>
        <br />
        <ConfigureList :conf="Conf" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Toolbar from './components/Toolbar.vue'
import Editable from './components/Editable.vue'
import ElementList from './components/ElementList.vue'
import ConfigureList from './components/ConfigureList.vue'

export default defineComponent({
    name: 'App',
    components: {
        Toolbar,
        Editable,
        ElementList,
        ConfigureList,
    },
    setup() {
        const conf = ref({})
        const Conf = computed(() => conf)
        console.log(Conf)
        const getConf = (configure: any) => {
            conf.value = configure
        }
        return {
            Conf,
            getConf,
        }
    },
})
</script>

<style lang="scss">
#app {
    #drag_container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #f5f5f5;
        .drag_content {
            display: flex;
            position: relative;
            height: calc(100% - 64px);
            .left {
                position: absolute;
                width: 200px;
                height: 100%;
                top: 0;
                left: 0;
                background: #fff;
            }
            .center {
                width: 100%;
                height: 100%;
                margin-left: 200px;
                margin-right: 262px;
                overflow: auto;
                padding: 20px;
            }
            .right {
                position: absolute;
                width: 262px;
                height: 100%;
                right: 0;
                top: 0;
                padding: 20px;
                background: #fff;
            }
        }
    }
}
</style>
