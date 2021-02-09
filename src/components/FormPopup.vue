<template>
<div>
  <el-dialog :visible.sync="isPopupOpen" show-close width = "502px">
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
  .el-dialog{
    border-radius: 5px;
    &__header{
      display: none;
    }
  }
  
    
</style>