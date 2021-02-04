<template>
 <div id = "calculator" class="calculator-wrapper">
  <div class="calculator">
      <div class="calculator-left">
        <h4>Кредитный калькулятор</h4>
        <div class="calculator-flow">
          <div class="calculator-field">
          <div class="calculator-field__title">Стоимость авто</div>
          <div class="calculator-field__value">9 000 000 ₸</div>
          <el-slider style="width: 100%"/>
        </div>

        <div class="calculator-field">
          <div class="calculator-field__title">Первоначальный взнос</div>
          <div class="calculator-field__value">2 700 000 (20%)</div>
          <el-slider style="width: 100%"/>
        </div>

         <div class="calculator-field">
          <div class="calculator-field__title">Срок кредитования</div>
          <div class="calculator-field__value">60 месяцев</div>
          <el-slider style="width: 100%"/>
        </div> 
        </div>
        
      </div>
       <div class="calculator-right">
         <div class="calculator-right__card">
            <h4>Ежемесячный платеж</h4>
            <h3>150 000 ₸</h3>
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
export default {
  components: {
    // SliderInput
  }


}
</script>

<style lang="scss" scoped>
  .calculator-wrapper{
    padding-top: 64px;
    padding-bottom: 100px;
  }
  .calculator{
    width: 1100px;
    display: flex;
    margin-left: auto;
    &-flow{
      margin-top: 38px;
    }
    &-field{
      margin-top: 50px;
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

</style>