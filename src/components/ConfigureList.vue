<template>
    <div id="configure_list">
        <el-form>
            <el-form-item v-for="(c, index) in configure" :key="index" :label="c.title">
                <el-color-picker v-if="c.type === 'color'" v-model="c.value"></el-color-picker>
                <el-input-number
                    v-else-if="c.type === 'number'"
                    v-model="c.value"
                    :min="1"
                    :max="100"
                    label="描述文字"
                ></el-input-number>
                <el-input v-else v-model="c.value" />
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