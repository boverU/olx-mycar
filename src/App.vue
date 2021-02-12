<template>
  <div>
    <div class="wrapper">
      <div class="app"><nav-bar /></div>
    </div>

    <div class="grey-wrapper">
      <div class="app">
        <hero />
      </div>
    </div>

    <div class="wrapper">
      <div class="app"><about /></div>
    </div>

    <div class="wrapper">
      <div class="app"><slider /></div>
    </div>
    <div class="wrapper">
      <div class="app"><approvement-info /></div>
    </div>
    <div class="grey-wrapper">
      <div class="app"><calculator /></div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import ApprovementInfo from './components/ApprovementInfo.vue'
import Calculator from './components/Calculator.vue'
import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    About,
    ApprovementInfo,
    Calculator,
    Slider,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'regular';
  src: url('./fonts/Raleway-Regular.ttf');
}

@font-face {
  font-family: 'medium';
  src: url('./fonts/Raleway-Medium.ttf');
}
body {
  background: rgba(207, 215, 232, 0.08);
}
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: regular;
  font-weight: 500;
  font-feature-settings: 'pnum' on, 'lnum' on;
  scroll-behavior: smooth;
}
.app {
  max-width: 1198px;
  width: 100%;
}
.grey-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background: rgba(207, 215, 232, 0.2);
}

.wrapper {
  display: flex;
  justify-content: center;
}

@media (max-width: 1100px) {
  .app {
    padding-left: 30px;
  }
}

@media (max-width: 576px) {
  .app {
    padding-left: 24px;
    padding-right: 24px;
  }

  .el-dialog {
    width: 89%;
  }
}
.el-dialog__wrapper {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
}
.el-dialog {
  background-color: transparent !important;
  box-shadow: none !important;
  &__header {
   display: none;
 }
}


</style>
