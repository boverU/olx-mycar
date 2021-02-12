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
          <NextIconLogo/>
        </div>
      </div>
      <div class="approvement-steps__step even">
        <div class="number">2</div>
        <div class="instruction">
          <span>Отправьте заявление на одобрение</span>
          <NextIconLogo/>
        </div>
      </div>
      <div class="approvement-steps__step odd">
        <div class="number">3</div>
        <div class="instruction">
          <span>Получите  консультацию от специалистов</span>
          <NextIconLogo/>
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
import NextIconLogo from "../assets/Next-icon.svg";

export default {
  components: {
    NextIconLogo
  },
  props: {}

}
</script>

<style lang="scss" scoped>
.approvement {
  padding-bottom: 120px;
  margin-top: 120px;

  &-title {
    text-align: center;
    font-size: 38px;
    height: 48px;
    font-weight: 500;
  }

  &-steps {
    display: flex;
    margin-top: 48px;
  }

  &-steps__step {
    padding-left: 48px;
    padding-bottom: 30px;
    padding-right: 66px;
    max-width: 25%;
    position: relative;

    &.odd {
      background: rgba(207, 215, 232, 0.2);
    }

    &.even {
      background: rgba(207, 215, 232, 0.08);
    }

    .number {
      font-size: 100px;
      color: rgba(207, 215, 232, 0.5);
      line-height: 117px;
    }

    .instruction {
      margin-top: 16px;
      font-size: 21px;
      line-height: 25px;

      a {
        color: #6C06E8;
        text-decoration: none;
      }

      svg {
        position: absolute;
        top: 132px;
        left: 78%;
        z-index: 1;

        g {
          box-shadow: 0px 2px 10px rgba(41, 42, 46, 0.05), 0px 15px 40px rgba(29, 42, 69, 0.08);
          fill: #ffff;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .approvement {
    margin-top: 50px;
    padding-bottom: 40px;

    &-title {
      font-size: 21px;
      line-height: 27px;
    }

    &-steps {
      flex-direction: column;
      margin-top: 24px;
    }

    &-steps__step {
      max-width: 100%;
      height: 122px;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-content: center;

      .number {
        display: none;
      }

      .instruction {
        width: 80%;
        margin: 0px;
        display: flex;
        align-items: center;
        font-size: 15px;
        line-height: 21px;
        text-align: center;
        justify-content: center;


        svg {
          transform: rotate(90deg);
          top: 57px;
          left: 50%;
          margin-left: -79px;
        }

      }
    }
  }
}
</style>