<template>
<div>
  <el-dialog
      :visible.sync="isPopupOpen"
      width="502px"
      :fullscreen="true"
      :show-close="true"
      custom-class="dialog-window"
  >
    <slot/>
  </el-dialog>
</div>
  
</template>

<script>
export default {
    props: {
        isPopupOpen: {
            type: Boolean
        }
  }

}
</script>

<style lang="scss">
  .dialog-window {
    background: rgba(0, 0, 0, 0.1) !important;
    backdrop-filter: blur(15px);
  }
  .el-dialog{
    &__header{
      display: none;
    }
  }
  
    
</style>