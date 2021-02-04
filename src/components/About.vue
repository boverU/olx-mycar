<template>
  <div class="about">
      <div class="about-title">
        <h1> <a href="https://mycar.kz/cars/" target="_blank">Mycar.kz</a>
         – это платформа, на которой ты можешь купить или выгодно продать автомобиль</h1>
         <h3 class="about-subtitle">
        Получи автокредит, не выходя из дома, или продай авто дилеру за один день в режиме онлайн.
      </h3>
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
  .about{
    padding-top: 120px;
    display: flex;
    justify-content: center;
    &-title{
      text-align: center;
      width: 994px;
      
      h1{
        font-size: 38px;
        line-height: 48px;
        font-weight: 500;
        a{
          text-decoration: none;
          color: #30C884;
    }
      }
    }

    &-subtitle{
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
        margin-top: 18px;
    }
   
  }
</style>