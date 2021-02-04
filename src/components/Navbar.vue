<template>
  <div class="nav">
      <div class="nav-item">
          <img src="../assets/mycar.svg" alt="">
      </div>
      <div class="nav-item">
          <img src="../assets/mycar-fin.svg" alt="">
      </div>
      <div class="nav-item">
          <img src="../assets/mycar-olx.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props: {
    
  }

}
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;
        justify-content: flex-start;
        align-items: center;
        &-item{
            width: 116px;
        }
        &-item:not(:first-child){
            margin-left: 20px;
        }
    }
</style>