<template>
  <div>
    <el-dialog
      :visible.sync="isPopupOpen"
      width="502px"
      :fullscreen="true"
      :show-close="true"
      custom-class="dialog-window"
    >
      <slot />
    </el-dialog>
  </div>
</template>

<script>
// import Icon from './shared/Icon.vue'
// import ProgressBar from './shared/ProgressBar.vue'
// import ResolvePopup from './Scorring/ResolvePopup.vue'
// eslint-disable-next-line
import { getScorringTimer } from '../utils/api.js'
export default {
  components: {},
  props: {
    isPopupOpen: {
      type: Boolean,
    },
    innerVisible: {
      type: Boolean,
    },
  },
  data() {
    return {
      percentage: 0,
      active: false,
      modalName: 'LoadScorringPopup',
      resolveStatus: '',
      timerId: null,
    }
  },
  created() {
    this.startProgress()
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
    clearValues() {},

    startProgress() {
      this.percentage = 0
      this.resolveStatus = 'pending'
      this.active = false
      this.timerId = setInterval(() => {
        // Согласно дизайну, мащина сначала вьезжает быстро
        if (this.percentage < 30) this.percentage += 3
        this.percentage += 0.5
        // Всего получается 10 + 70*2 = 150 тиков => время между тиками = timer * 1000 / 150

        // Скоринг одобрил, надо отправить в CRM, после 94 проц загрузка останавливается до ответа
        if (this.percentage > 94 && this.resolveVuexStatus !== 'pending') {
          clearInterval(this.timerId)
        }

        // Не дождались ответа, показываем статус, что не получили ответ
        if (this.percentage === 100) {
          clearInterval(this.timerId)
          this.active = true
          this.resolveStatus = 'not-done'
        }
      }, this.timerTick)
    },
  },
}
</script>

<style lang="scss">
.dialog-window {
  background: rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(15px);
}
.el-dialog {
  &__header {
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
