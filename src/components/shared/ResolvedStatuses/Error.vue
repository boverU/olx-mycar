<template>
  <div class="popup-status">
    <img
      class="bg-img"
      align="right"
      :src="require('@/assets/images/scorringSprites/error.png')"
    />
    <h2 class="title">
      Произошла системная ошибка
    </h2>
    <span class="subtitle">Попробуйте оставить заявку позже</span>
    <button class="but">
      <a>
        На главную
      </a>
    </button>
    <svg class="smoke" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#ECF0F8" cx="20" cy="20" r="20" />
    </svg>
    <svg class="smoke2" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#ECF0F8" cx="20" cy="20" r="20" />
    </svg>
  </div>
</template>

<script>
export default {}
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
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right bottom;
    position: absolute;
  }
  .title {
    z-index: 2;
    margin: 0;
    margin-top: 32px;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
  }
  .subtitle {
    z-index: 2;
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
    color: white;
    padding: 10px 31px;
    a:visited {
      color: white;
    }
  }
  .smoke {
    width: 40px;
    height: 40px;
    position: absolute;
    left: -160px;
    top: -200px;
    animation: smoke 6s 0ms infinite ease-in-out;
    offset-path: path('M 398 444 Q 260 354 407 293 Q 260 295 129 166 ');
  }

  .smoke2 {
    width: 40px;
    height: 40px;
    position: absolute;
    left: -140px;
    top: -60px;
    animation: smoke 6s infinite ease-in-out;
    animation-delay: 2000ms;
    opacity: 0;
    offset-path: path('M 400 330 C 511 236 428 234 404 166 Q 619 132 630 26 ');
  }
}

@media (max-width: 576px) {
  .popup-status {
    .title {
      margin-top: 15vh;
    }
    .smoke {
      width: 80px;
      height: 80px;
      offset-path: none;
      circle {
        transform: scale(2, 2);
      }
      top: 50%;
      left: 50%;
      animation: smokeAdaptive 6s infinite ease-in-out;
      transform-origin: -10% -10%;
    }
    .smoke2 {
      top: 60%;
      left: 40%;
      offset-path: none;
      animation: smokeAdaptive 3s infinite linear;
      transform-origin: -10% -10%;
    }
  }
}

@media screen and (max-width: 576px) and (max-device-aspect-ratio: 11/16) {
  .popup-status {
    .bg-img {
      object-position: 65% bottom;
    }
  }
}

@keyframes smoke {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
  }
}

@keyframes smokeAdaptive {
  0% {
    opacity: 0;
    transform: translate(0px, 0px) rotate(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(90px, -200px) rotate(-60deg);
  }
}
</style>
