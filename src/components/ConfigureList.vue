<template>
  <div id="configure_list">
    <el-form>
      <el-form-item v-for="(c, index) in configure"
        :key="index"
        :label="c.title">
        <el-input v-model="c.value" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
    props: ['conf'],
    emits: ['updateConf'],
    setup(props) {
        const configure = ref(props.conf)
        return {
            configure,
        }
    },
})
</script>

<style lang="scss">
#configure_list {
}
</style>