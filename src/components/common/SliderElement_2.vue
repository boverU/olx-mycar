<template>
  <div class="adv">
        <div class="adv-left">
            <div class="adv-left__image">
                <img src="../../assets/money-tenge.png" alt="">
            </div>
        </div>
        <div class="adv-right">
            <div class="adv-right__title">Максимальная сумма автокредитования</div>
            <div class="adv-right__content">
                <div class="item">
                    <div class="item-text">до 30 млн. ₸</div>
                     <div class="item-inner">на новые авто</div>
                </div>
                <div class="item">
                    <div class="item-text">до 20 млн. ₸</div>
                     <div class="item-inner">на авто с пробегом</div>
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

</style>