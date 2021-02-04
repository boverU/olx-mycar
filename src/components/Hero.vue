<template>
  <div class="hero">
      <div class="hero-left">
        <h2 class="hero-left__title">Покупка автомобиля <br> доступна для каждого!</h2>
        <h1 class="hero-left__subtitle">Выгодно купи автомобиль на OLX, оформив автокредит на Mycar.kz</h1>
        <div class="hero-left__conditions">
            <div class="condition">
              <div>до</div>
              <div>30 млн. ₸</div>
            </div>
            <div class="condition">
              <div>срок</div>
              <div>до 7 лет</div>
            </div>
            <div class="condition">
              <div>включено</div>
              <div>КАСКО</div>
            </div>
        </div>
        <a href="#calculator" class="button">Расчитать кредит</a>
      </div>
      <div class="hero-right">
          <img src="../assets/Hero.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props: {
    
  }

}
</script>

<style scoped lang = "scss">

  .hero{
    display: flex;
    
    &-left{
      max-width: 587px;
      &__title{
        font-size: 38px;
        margin-top: 58px;
        line-height: 48px;
      }
      &__subtitle{
        font-size: 18px;
        line-height: 28px;
        margin-top: 18px;
        font-weight: 400;
      }
      &__conditions{
        display: flex;
        margin-top: 28px;
      }
      .condition {
        font-weight: 400;
        div:first-child{
          color: #737C92;
        }
        div:nth-child(2){
          font-size: 31px;
          line-height: 36px;
        }
        font-size: 21px;
      }
      .condition:not(:first-child){
        margin-left: 64px;
      }
      .button{
       margin-top: 36px;
       width: 203px;
       padding: 16px 20px;
       border-radius: 5px;
       display: block;
       background: #30C884;
       text-align: center;
       text-decoration: none;
       color: #ffff;
      }
      .button:hover{
       background: #38B37B;
      }
      .button:active{
        background: #339D6D;
      }
    }
    &-right{
      width:708px;
      margin-right: -120px;
      img{
        width: 100%;
      };
    }
    
  }

</style>