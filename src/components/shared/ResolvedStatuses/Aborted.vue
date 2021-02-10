<template>
  <div class="popup-status">
    <h2 class="title">
      Заявка не одобрена
    </h2>
    <span class="subtitle">
      Вы можете узнать причину отказа, позвонив на бесплатный номер 2525
    </span>
    <button class="but"></button>
    <img
      class="wasted"
      src="@/assets/images/scorringSprites/ManWasted.png"
      alt=""
    />
    <img class="cry" src="@/assets/images/scorringSprites/ManCry.png" alt="" />
    <img
      class="car"
      src="@/assets/images/scorringSprites/CarBumper.png"
      alt=""
    />
    <svg
      class="wind-1"
      width="31"
      height="3"
      viewBox="0 0 31 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.45007 1.7207H29.5514"
        stroke="#F0E6FD"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      class="wind-2"
      width="22"
      height="3"
      viewBox="0 0 22 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.76929 1.8501L20.5035 1.8501"
        stroke="#F0E6FD"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    <icon :type="'bittenHeart'" class="heart-1" />
    <icon :type="'bittenHeart'" class="heart-2" />
  </div>
</template>

<script>
import Icon from '../Icon.vue'

export default {
  components: { Icon },
}
</script>

<style lang="scss" scoped>
.popup-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .bg-img {
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
  }
  .title {
    margin: 0;
    margin-top: 32px;
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
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 31px;
    a:visited {
      color: white;
    }
  }
  .cry {
    z-index: 3;
    position: absolute;
    right: 118px;
    bottom: 65px;
    width: 34px;
    height: 133px;
  }
  .wasted {
    z-index: 3;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 226px;
    height: 235px;
  }
  .car {
    position: absolute;
    right: 0;
    bottom: 48px;
    height: 102px;
  }
  .wind-2 {
    position: absolute;
    bottom: 99px;
    right: 71px;
  }
  .wind-1 {
    position: absolute;
    bottom: 118px;
    right: 80px;
  }
  .heart-1 {
    z-index: 2;
    position: absolute;
    right: 15.82%;
    bottom: 30.06%;
    height: 58px;
    width: 61px;
    animation: heart 8s infinite ease-in-out;
    transform: scale(2, 2);
    path {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .heart-2 {
    z-index: 2;
    right: 40.82%;
    bottom: 46.97%;
    position: absolute;
    height: 23px;
    width: 25px;
    animation: heart 8s infinite ease-in-out;
    animation-delay: 600ms;
    opacity: 0;
  }
}

@media (max-width: 576px) {
  .popup-status {
    .title {
      margin-top: 20vh;
    }
    .wasted {
      left: -20px;
    }
    .cry {
      z-index: 9;
      right: 48px;
    }
  }
}

@keyframes heart {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  35% {
    transform: translateY(-15px) scale(1.2, 1.2);
  }
  70% {
    transform: translateY(15px) scale(1, 1);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0px) scale(1, 1);
  }
}
</style>
