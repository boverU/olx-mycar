<template>
  <div class="advantages">
    <h3>
      Преимущества автокредита от Mycar.kz</h3>
      <slider-element4/>
  </div>
</template>

<script>
import SliderElement4 from './common/SliderElement_4.vue';
export default {
  components: { SliderElement4 },
    props: {
      
  }

}
</script>

<style lang = "scss" scoped>
    .advantages{
      width: 100%;
      height: 389px;
      margin-top: 120px;
      h3{
        font-size: 38px;
        text-align: center;
      }
    }
</style>