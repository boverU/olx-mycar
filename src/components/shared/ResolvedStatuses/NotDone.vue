<template>
  <div class="popup-status">
    <h2 class="title">
      Не удалось проверить данные
    </h2>
    <span class="subtitle">
      Мы проверим сами, перезвоним вам и сообщим результат
    </span>
    <button class="but">
      <a href="/">
        На главную
      </a>
    </button>
    <icon :type="'car'" class="car" />
    <img class="man" src="@/assets/images/scorringSprites/ManThink.png" />
    <icon :type="'questions'" class="question question-1" />
    <icon :type="'questions'" class="question question-2" />
    <icon :type="'questions'" class="question question-3" />
  </div>
</template>

<script>
import Icon from '../Icon.vue'

export default {
  components: { Icon },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.popup-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 502px;
  height: 420px;
  position: relative;
  overflow: hidden;
  padding-top: 32px;
  .title {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
  }
  .subtitle {
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 16px;
    max-width: 312px;
    text-align: center;
    color: #737c92;
    word-wrap: normal;
    word-break: normal;
    line-break: auto;
    hyphens: manual;
  }
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
  .close {
    position: absolute;
    right: -20px;
    top: -20px;
  }
  .man {
    position: absolute;
    right: 120px;
    bottom: 60px;
    width: 65px;
  }
  .car {
    position: absolute;
    left: -20px;
    bottom: 40px;

    & > path,
    & > ellipse {
      stroke-dasharray: 4 6;
      stroke: black;
      fill: white;
    }
    & > .window,
    .body {
      display: none;
    }
  }
  .question {
    position: absolute;
    animation: question 5s infinite linear;
    &-1 {
      right: 40px;
      top: 180px;
      height: 48px;
      width: 30px;
      path {
        fill: #b583f3;
      }
    }
    &-2 {
      animation-delay: 600ms;
      height: 27px;
      right: 60px;
      top: 300px;
      path {
        fill: #b583f3;
      }
      opacity: 0.5;
    }
    &-3 {
      animation-delay: 1200ms;
      right: 230px;
      top: 200px;
      height: 33px;
      width: 24px;
      path {
        fill: #434a5b;
      }
    }
  }
}

@keyframes question {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  30% {
    transform: scale(0.7);
    transform: rotate(-25deg);
  }
  55% {
    transform: scale(1.2);
  }
  80% {
    opacity: 1;
    transform: rotate(50deg);
  }
  100% {
    opacity: 0;
    transform: scale(1);
    transform: rotate(-25deg);
  }
}

@media (max-width: 576px) {
  .popup-status {
    padding-top: 0;
    .question {
      &-1 {
        right: 210px;
        top: 180px;
      }
      &-2 {
        right: 190px;
        top: 300px;
      }
      &-3 {
        right: 360px;
        top: 220px;
      }
    }
  }
}
</style>
