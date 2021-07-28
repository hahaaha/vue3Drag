<template>
  <div class="toolbar">
    <el-button size="small">撤销</el-button>
    <el-button size="small">重做</el-button>
    <el-button size="small">插入图片</el-button>
    <el-button size="small">预览</el-button>
    <el-button size="small">保存</el-button>
    <el-button size="small">清空画布</el-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.toolbar {
    padding-left: 20px;
    box-sizing: border-box;
    height: 64px;
    line-height: 64px;
    background: #fff;
    border-bottom: 1px solid #ddd;
}
</style>