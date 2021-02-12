
  <template>
  <div class="advantages">
    <h3>
      Преимущества автокредита от Mycar.kz
    </h3>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <slider-element />
      </swiper-slide>

      <swiper-slide>
        <slider-element2 />
      </swiper-slide>

      <swiper-slide>
        <slider-element3 />
      </swiper-slide>

      <swiper-slide>
        <slider-element4 />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">
      </div>

    </swiper>
  </div>

</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import SliderElement from './common/SliderElement.vue'
  import SliderElement2 from './common/SliderElement_2.vue'
  import SliderElement3 from './common/SliderElement_3.vue'
  import SliderElement4 from './common/SliderElement_4.vue'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-vertical',
    title: 'Vertical slider',
    components: {
      Swiper,
      SwiperSlide,
      SliderElement,
      SliderElement2,
      SliderElement3,
      SliderElement4,

    },
    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
      }
    }
  }
</script>

<style lang="scss" >
  // @import './base.scss';
  .swiper {
    height: 330px;
    width: 100%;

   .swiper-pagination-bullet-active {
     width: 8px;
     height: 8px;
     background-color: #30C884 !important;
    }
  }

  .advantages{
      width: 100%;
      height: 389px;
      margin-top: 120px;
      h3{
        font-size: 38px;
        text-align: center;
        margin-bottom: 48px;
      }
    }
  .my-bullet{
    background-color: #0000;
  }

  @media (max-width: 576px) {
    .advantages{
      margin-top: 48px;
      height: fit-content;

      h3 {
        font-size: 21px;
        line-height: 27px;
        text-align: left;
        margin-bottom: 32px;
      }
    }

    .swiper {
      height: 480px;

      .swiper-pagination-bullets {
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
        width: 4px !important;
        height: 4px !important;
      }

      .swiper-pagination-bullet {
        margin: 0 6px !important;
      }
    }

    .swiper-wrapper {
      margin-bottom: 20px;
    }

  }
</style>