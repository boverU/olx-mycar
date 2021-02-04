<template>
  <div class="approvement">
        <h3 class="approvement-title">
          Онлайн одобрение, не выходя из дома
        </h3>
        <div class="approvement-steps">
          <div class="approvement-steps__step odd">
            <div class="number">1</div>
            <div class="instruction">
            <span>Укажите марку  и стоимость авто на <a href="#calculator">калькуляторе</a> </span> 
             <img src="../assets/Next-icon.svg" alt="">
            </div>
          </div>
          <div class="approvement-steps__step even">
            <div class="number">2</div>
            <div class="instruction">
            <span>Отправьте заявление на одобрение</span> 
             <img src="../assets/Next-icon.svg" alt="">
            </div>
          </div>
          <div class="approvement-steps__step odd">
             <div class="number">3</div>
            <div class="instruction">
            <span>Получите  консультацию от специалистов</span>
             <img src="../assets/Next-icon.svg" alt="">
            </div>
          </div>
          <div class="approvement-steps__step even">
             <div class="number">4</div>
            <div class="instruction">
             Оформите автокредит по выгодной ставке!
            </div>
          </div>

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
  .approvement{
    padding-bottom: 120px;
    margin-top: 120px;
      &-title{
        text-align: center;
        font-size: 38px;
        height: 48px;
        font-weight: 500; 
      }
      &-steps{
        display: flex;
        margin-top: 48px;
      }
      &-steps__step{
          padding-left: 48px;
          padding-bottom: 30px;
          padding-right: 66px;
          max-width: 25%;
          position: relative;
          &.odd{
            background: rgba(207, 215, 232, 0.2);
          }
          &.even{
            background: rgba(207, 215, 232, 0.08);
          }
          .number{
            font-size: 100px;
            color: rgba(207, 215, 232, 0.5);
            line-height: 117px;
          }
          .instruction{
            margin-top: 16px;
            font-size: 21px;
            line-height: 25px;
            a{
              color: #6C06E8;
              text-decoration: none;
            }
            img{
              position: absolute;
              top: 132px;
              left: 78%;
              svg{
                box-shadow: 0px 2px 10px rgba(41, 42, 46, 0.05), 0px 15px 40px rgba(29, 42, 69, 0.08);
                fill: #ffff;
              }
            }
          }
        }
  }
</style>