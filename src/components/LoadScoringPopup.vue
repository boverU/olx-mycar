<template>
  <el-dialog
      width="502px"
      title="Inner Dialog"
      :visible.sync="isPopupOpen"
      append-to-body
      class="popup"
      :close-on-click-modal="false"
  >
    <div v-if="!resolveCustomStatus" class="form">
      <h2 class="title">
        {{ computedTitle }}
      </h2>
      <span class="subtitle">{{ computedSubTitle }}</span>

      <button class="but" v-if="resolveStatus === 'success'">
        <a href="/">
          На главную
        </a>
      </button>
      <div class="progress-wrap">
        <progress-bar
            v-if="resolveStatus === 'pending'"
            :bar-color="['#c89dfc', '#975CDF']"
            :percentage="percentage"
        />
      </div>

      <icon
          :type="'car'"
          class="car-icon"
          :style="carStyle"
          :class="{ active: resolveStatus === 'success' }"
      />
      <icon :type="'wind'" :class="loaded ? 'wind' : 'wind-animate'"/>
      <icon
          :type="'wind'"
          :class="loaded ? 'wind' : 'wind-animate-second'"
      />

      <div class="man">
        <div class="man_wrapper">
          <icon :type="'man'" class="body"/>
          <icon :type="'hand1'" class="hand1" :class="{ active: active }"/>
          <icon :type="'hand2'" class="hand2" :class="{ active: active }"/>
          <icon
              :type="'glasses'"
              class="glasses"
              :class="{ active: active }"
          />
        </div>
      </div>

      <icon
          :type="'star'"
          class="star star-1"
          :class="{ active: active }"
      />
      <icon
          :type="'star'"
          class="star star-2"
          :class="{ active: active }"
      />

      <icon
          :type="'heart'"
          class="heart heart-1"
          :class="{ active: active }"
      />
      <icon
          :type="'heart'"
          class="heart heart-2"
          :class="{ active: active }"
      />
      <icon
          :type="'heart'"
          class="heart heart-3"
          :class="{ active: active }"
      />
      <icon
          type="'heart'"
          class="heart heart-4"
          :class="{ active: resolveStatus === 'success' }"
      />
    </div>
    <template v-else>
      <resolve-popup :status="resolveCustomStatus"></resolve-popup>
    </template>
  </el-dialog>

</template>

<script>
/*eslint-disable*/
import Icon from './shared/Icon.vue'
import ProgressBar from './shared/ProgressBar.vue'
import ResolvePopup from './Scorring/ResolvePopup.vue'
// eslint-disable-next-line
import {sendToCrm} from '../utils/api.js'

export default {
  components: {
    Icon,
    ProgressBar,
    ResolvePopup,
  },
  props: {
    isPopupOpen: {
      type: Boolean,
    },
    innerVisible: {
      type: Boolean,
    },
    crmData: {
      type: Object,
      default: {}
    },
    resolveStatus: {
      type: String,
      default: 'pending'
    }
  },
  data() {
    return {
      percentage: 0,
      active: false,
      modalName: 'LoadScorringPopup',
      timerId: null,
      timer: 30,
    }
  },
  created() {
    console.log('start second modal')
    this.startProgress()
  },
  beforeDestroy() {
    this.hide();
  },
  watch: {
    async resolveStatus() {
      if (this.resolveStatus === 'pending') {
        this.startProgress();
      } else if (this.resolveStatus === 'send_crm') {
        // Скоринг одобрил, надо отправить в CRM
        this.sendToCrm(this.crmData).then(res => {
          this.percentage = 100;
          this.active = true;
          if (res) {
            // this.resolveStatus = 'success';
            this.$emit('setSuccessStatus')
          } else {
            // this.resolveStatus = 'error';
            this.$emit('setErrorStatus')
          }
        }, () => {
          // this.resolveStatus = 'error';
          this.$emit('setErrorStatus')
        })


      } else {
        // Статус изменился и для него нет опред логики - заканчиваем загрузку, отображаем статус
        clearInterval(this.timerId);
        const endTimerId = setInterval(() => {
          this.percentage += 2;
          if (this.percentage > 96) {
            this.percentage = 100;
            clearInterval(endTimerId);
            this.active = true;
          }
        }, 100);
      }
    },
  },
  computed: {
    carStyle() {
      const obj = {
        left: `${-270 + this.percentage * 4}px`,
      }
      return obj
    },

    loaded() {
      // Расчет когда показывать анимашку ветерка
      if (this.percentage < 100 && this.percentage > 0) {
        return false
      }
      return true
    },

    resolveCustomStatus() {
      // Расчет статусов для отображения
      if (
          this.resolveStatus &&
          this.resolveStatus !== 'pending' &&
          this.resolveStatus !== 'done-recently' &&
          this.resolveStatus !== 'success'
      ) {
        return this.resolveStatus
      }
      return ''
    },

    computedTitle() {
      if (this.resolveStatus === 'done-recently')
        return 'Вы уже оставили заявку на кредит'
      if (this.resolveStatus === 'success')
        return 'Заявка предварительно одобрена'
      return 'Данные отправлены'
    },

    computedSubTitle() {
      if (this.resolveStatus === 'done-recently')
        return 'Заявка с такими данными уже существует.'
      if (this.resolveStatus === 'success')
        return 'В ближайшее время с вами свяжется менеджер'
      return 'Ждём решения по вашей заявке'
    },

    timerTick() {
      return (Number(this.timer) * 1000) / 150
    },
  },
  methods: {
    sendToCrm1(a) {
      return Promise.resolve('asd')
    },
    hide() {
      this.$emit('close')
    },
    clearValues() {
    },

    startProgress() {
      this.percentage = 0

      this.$emit('setPendingStatus')
      this.active = false
      this.timerId = setInterval(() => {
        // Согласно дизайну, мащина сначала вьезжает быстро
        if (this.percentage < 30) this.percentage += 3
        this.percentage += 0.5
        // Всего получается 10 + 70*2 = 150 тиков => время между тиками = timer * 1000 / 150

        // Скоринг одобрил, надо отправить в CRM, после 94 проц загрузка останавливается до ответа
        if (this.percentage > 94 && this.resolveStatus !== 'pending') {
          clearInterval(this.timerId)
        }

        // Не дождались ответа, показываем статус, что не получили ответ
        if (this.percentage === 100) {
          clearInterval(this.timerId)
          this.active = true
          // this.resolveStatus = 'not-done'
          this.$emit('setNotDoneStatus')
        }
      }, this.timerTick)
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  .close {
    position: absolute;
    right: -50px;
    top: -50px;
    z-index: 10;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 502px;
    height: 420px;
    overflow: hidden;
    background: white;
    position: relative;

    .but {
      background: #6c06e8;
      z-index: 2;
      border: none;
      border-radius: 5px;
      outline: none;
      color: white;
      padding: 10px 31px;

      a {
        text-decoration: none;
      }

      a:visited {
        color: white;
      }
    }

    .car-icon {
      z-index: 123;
      position: absolute;
      transition-duration: 4000ms;
      bottom: 50px;

      &.active {
        .body {
          transition-delay: 100ms;
          transition-duration: 400ms;
          fill: #6c06e8;
        }
      }
    }

    .progress-wrap {
      width: 316px;
      height: 12px;
    }

    .title {
      margin: 0;
      margin-top: 32px;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      text-align: center;
      overflow-wrap: break-word;
      word-wrap: normal;
      word-break: normal;
      line-break: auto;
      hyphens: manual;
    }

    .subtitle {
      font-size: 15px;
      line-height: 25px;
      color: #737c92;
      margin-bottom: 28px;
      text-align: center;
      overflow-wrap: break-word;
      word-wrap: normal;
      word-break: normal;
      line-break: auto;
      hyphens: manual;
    }

    .wind {
      display: none;
    }

    .wind-animate {
      z-index: 1;
      position: absolute;
      bottom: 120px;
      animation: wind 4s infinite;
      animation-timing-function: ease-in-out;
    }

    .wind-animate-second {
      opacity: 0;
      z-index: 1;
      position: absolute;
      bottom: 160px;
      animation: wind 4s infinite;
      animation-timing-function: ease-in-out;
      animation-delay: 2500ms;
    }

    .star {
      opacity: 0;

      &-1 {
        position: absolute;
        width: 18px;
        height: 18px;
        bottom: 201px;
        right: 183px;

        &.active {
          opacity: 1;
          transition-delay: 400ms;
          transition-duration: 200ms;
        }
      }

      &-2 {
        position: absolute;
        width: 12px;
        height: 12px;
        bottom: 231px;
        right: 133px;

        &.active {
          opacity: 1;
          transition-delay: 600ms;
          transition-duration: 200ms;
        }
      }
    }

    .heart {
      opacity: 0;

      &-1 {
        position: absolute;
        width: 45px;
        height: 45px;
        bottom: 171px;
        right: 93px;

        &.active {
          animation-delay: 550ms !important;
        }
      }

      &-2 {
        position: absolute;
        width: 25px;
        height: 25px;
        bottom: 162px;
        right: 223px;

        &.active {
          animation-delay: 1200ms !important;
        }
      }

      &-3 {
        position: absolute;
        width: 18px;
        height: 18px;
        bottom: 251px;
        right: 153px;

        &.active {
          animation-delay: 2000ms !important;
        }
      }

      &-4 {
        position: absolute;
        width: 260px;
        height: 260px;
        bottom: -70px;
        left: -60px;

        &.active {
          opacity: 1;
          transition-delay: 300ms;
          transition-duration: 1s;
          animation: none !important;
        }
      }

      &.active {
        animation: statusDone 4s infinite linear;
      }
    }

    .man {
      z-index: 1;
      position: absolute;
      bottom: 67px;
      right: 130px;

      .man_wrapper {
        position: relative;
        width: 50px;

        .hand1 {
          position: absolute;
          top: 23px;
          transform: rotate(-20deg);
          right: 30px;
        }

        .hand1.active {
          transition-duration: 300ms;
          transform: rotate(0deg);
          transition-timing-function: linear;
          position: absolute;
          top: 23px;
          right: 38px;
        }

        .hand2 {
          transform: rotate(-180deg);
          position: absolute;
          top: 40px;
          right: 30px;
          transform-origin: 5px 30px;
          z-index: -1;
        }

        .hand2.active {
          animation: hand2 700ms;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
        }

        .glasses {
          position: absolute;
          right: 23px;
          top: 8px;
          opacity: 0;

          &.active {
            opacity: 1;
            transition-delay: 600ms;
            transition-duration: 200ms;
          }
        }
      }
    }
  }
}

@keyframes wind {
  0% {
    right: 226px;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    right: 100%;
    opacity: 0;
  }
  60% {
    right: 100%;
    opacity: 0;
  }
  100% {
    right: 100%;
    opacity: 1;
  }
}

@keyframes hand2 {
  0% {
    transform: rotate(-180deg);
    position: absolute;
    top: 40px;
    right: 30px;
  }

  38% {
    transform: rotate(-140deg);
    position: absolute;
    top: 28px;
    right: 45px;
  }

  47% {
    position: absolute;
    top: 25px;
    right: 48px;
  }

  52% {
    position: absolute;
    top: 23px;
    right: 50px;
  }

  100% {
    transform: rotate(0deg);
    position: absolute;
    top: 7px;
    right: 45px;
  }
}

@keyframes statusDone {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
