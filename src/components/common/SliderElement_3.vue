<template>
  <div class="adv">
        <div class="adv-left">
            <div class="adv-left__image">
                <img src="../../assets/money-car.png" alt="">
            </div>
        </div>
        <div class="adv-right">
            <div class="adv-right__title">Минимальный первоначальный взнос</div>
            <div class="adv-right__content">
                <div class="item">
                    <div class="item-text">20 %</div>
                     <div class="item-inner">от стоимости автомобиля</div>
                </div>
                <div class="item">
                     <div class="item-inner">Чем выше сумма <br> первоначального взноса, <br> тем ниже процентная ставка</div>
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

    .adv{
         overflow: hidden;
        // margin-top: 48px;
        padding-left: 95px;
        display: flex;
        align-items: center;
        &-left{
            &__image{
                width: 293px;
                img{
                    width: 100%;
                }
            }
        }
        &-right{
            margin-left: 137px;
            &__title{
                font-size: 28px;
                line-height: 38px;
            }
            &__content{
                display: flex;
                 margin-top: 24px;
                
                .item:nth-child(2){
                    margin-left: 48px;
                }
                .item-text{
                    color: #30C884;
                    font-size: 31px;
                    font-weight: 700;
                    line-height: 25px;
                    font-style: normal;
                }
                .item-inner{
                    font-size: 18px;
                    line-height: 22px;
                    margin-top: 2px;
                }
            }
        }
    }

    @media (max-width: 576px) {
      .adv {
        padding-left: 0px;
        flex-direction: column;

        &-left {
          &__image {
            width: 200px;
          }
        }

        &-right{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0px;
          width: 100%;

          &__title{
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            margin-top: 12px;
          }
          &__content {
            width: 80%;
            display: flex;
            margin-top: 0px;
            flex-direction: column;

            .item {
              margin-top: 12px;

              .item-text{
                text-align: center;
                font-size: 18px;
                line-height: 24px;
              }
              .item-inner{
                text-align: center;
                font-size: 15px;
                line-height: 21px;

                br {
                  display: none;
                }
              }
            }

            .item:nth-child(2){
              margin-left: 0px;
            }
          }


        }
      }


    }

</style>