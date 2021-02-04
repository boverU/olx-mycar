<template>
  <div class="full-white" :class="color === 'white' ? 'full-white' : 'full-grey'">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default(){
        return 'white';
      }
    }
  }

}
</script>

<style lang ="scss" scoped>
  .full{
    margin: 0 auto;
  }

  .full-white{
    margin: 0 auto;
    background-color: #0000;
  }

  .full-grey{
    background-color: rgba(207, 215, 232, 0.2);
  }

</style>