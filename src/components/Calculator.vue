<template>
 <div id = "calculator" class="calculator-wrapper">
  <div class="calculator">
      <div class="calculator-left">
        <h4>Кредитный калькулятор</h4>
        <div class="calculator-flow">
          <div>
        <div class="calculator-field__title">Выберите марку авто, которую хотите приобрести</div>
        <el-select v-model="selectedBrand" placeholder="Марка" class="calculator-field__input">
         <el-option
               v-for="item in brands"
               :key="item.value"
               :label="item.label"
               :value="item.value">
          </el-option>
        </el-select>
      </div>


          <div class="calculator-field">
          <div class="calculator-field__title">Стоимость авто</div>
          <div class="calculator-field__value">{{price}} ₸</div>
          
          </div>

        <div class="calculator-field">
          <div class="calculator-field__title">Первоначальный взнос</div>
          <div class="calculator-field__value">{{cashNow}} ({{min_initial_fee}}%)</div>
          <element-slider
                    v-model="cashNow"
                    :min="min_init_fee"
                    :max="max_init_fee"
                    :custom-step="100000"
                    icon-class="icon-tenge"
                    type="number"
                    placeholder="Первоначальный взнос"
                    @slider-change="dataChange"/>
        </div>

         <div class="calculator-field">
          <div class="calculator-field__title">Срок кредитования</div>
          <!-- <div class="calculator-field__value">{{max_months}} месяцев</div> -->
          <element-slider/>
        </div> 
      </div>
       
    </div>
    <div class="calculator-right">
         <div class="calculator-right__card">
            <h4>Ежемесячный платеж</h4>
            <h3>{{creditPriceMonth}}</h3>
            <p>включены страхование от несчатных случаев и КАСКО</p>
            <a href="" class="button">Получить онлайн одобрение</a>
           
            <div class="img">
                <img src="../assets/Keys.png" alt="">
            </div> 
         </div>
       </div>
  </div>
 </div>
</template>

<script>
// import SliderInput from './common/SliderInput.vue'
import {getCreditAvailableBrands, getCreditInfoByBrandId, getAnnualPayment} from '../utils/api';
import ElementSlider  from './common/calculator/ElementSlider.vue'
export default {
  components: {
    // SliderInput
    ElementSlider
  },
  data(){
    return {
          price: 2000000,
          cashNow: '',
          months: '',
          creditPriceMonth: 0,   
          selectedBrand: '',
          brands: [],
          min_initial_fee: 0,
          payment: null,
          maxPrice: 0,
          min_init_fee: 0
    }
  },
  watch:{
    selectedBrand(){
        getCreditInfoByBrandId(this.selectedBrand).then(res=>{
          console.log(res)
          this.maxPrice = res.data.any[0].price_limit_value,
          this.min_init_fee = res.data.any[0].min_initial_fee,
          this.months = res.data.data.max_credit_term
        })
    },
   
  },
  created(){
    getCreditAvailableBrands().then(res=>{
      this.brands = res.data.data.map(brand=>{
        return {label: brand.brand_name, value: brand.brand_advertisement_id}
      })
    })
  },
  methods:{
    async dataChange(){
      const data = {
                brand_id: this.selectedBrand,
                auto_price: 1000000,
                term: Number(this.months),
                start_sum: Number(this.cashNow),
                car_type: 'any',}
      getAnnualPayment(data).then(response=>{
          this.creditPriceMonth = response.data.result;
      })  
    }

  },
  computed:{
    max_init_fee() {
          let index = 0.99;
            /* Пограничное значени */
          if (this.price < 500000) {
                return 500000 * 0.99;
          }

            /* Меняем процент если суммма уж очень большая */
            if (this.price >= 1000000000) index = 0.9999;
            return Math.floor(this.price * index);
        },
  
  },
  
}
</script>

<style lang="scss" scoped>
  .calculator-wrapper{
    padding-top: 64px;
    padding-bottom: 100px;
  }
  .calculator{
    max-width: 1100px;
    width: 100%;
    display: flex;
    margin-left: auto;
    &-flow{
      margin-top: 38px;
    }
    &-field{
      margin-top: 50px;
      &__input{
        width: 100%; 
        margin-top: 12px;
        input{
          height: 50px;
        }
      }
      &__title{
       color:#737C92;
       font-size: 13px;
       line-height: 15px;
      }
      &__value{
        margin-top: 8px;
        font-size: 21px;
        line-height: 25px;
      }
    }
    &-left{
      max-width: 485px;
      width: 100%;
      h4{
        font-size: 38px;
        line-height: 48px;
        text-align: center;
      }
      
    }
    &-right{
      margin-left: 125px;
      min-width: 485px;
      height: 468px;
      &__card{
        padding-left: 48px;
        padding-top: 48px;
        margin-top: 75px;
        box-shadow: 0px 2px 10px rgba(41, 42, 46, 0.05), 0px 15px 40px rgba(29, 42, 69, 0.08);
        border-radius: 10px;
        width: 100%;
        background-color: #fff;
        h4{
          font-size: 18px;
          line-height: 22px;
          font-weight: 400;
        }
        h3{
          font-weight: 700;
          font-size: 21px;
          line-height: 25px;
          margin-top: 6px;
        }
        p{
          margin-top: 34px;
          color: #737C92;
          max-width: 292px;
        }
        .img{
          width: 100%;
          height: auto;
          position: relative;
          // z-index: -1;
          img{
            margin-top: -80px;
            width: 100%;
            transform: scale(1.07, 1.03);
            margin-left: -15px;
          }
        }

      }
      .button{
       margin-top: 12px;
       width: 243px;
       padding: 16px 16px;
       border-radius: 5px;
       display: block;
       background: #30C884;
       text-align: center;
       text-decoration: none;
       color: #ffff;
       font-size: 15px;
       position: relative;
       z-index: 1;
      }
      .button:hover{
       background: #38B37B;
      }
      .button:active{
        background: #339D6D;
      }
    }
  }
  .d-none{
    display: none;
  }

</style>