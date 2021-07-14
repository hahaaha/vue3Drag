<template>
    <div id="drag_container">
        <ElementList />
        <DragField />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DragField from './components/DragField.vue'
import ElementList from './components/ElementList.vue'

export default defineComponent({
    name: 'App',
    components: {
        DragField,
        ElementList,
    },
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f2f6fc;
    #drag_container {
        display: flex;
    }
}
</style>
