<template>
  <div class="nav">
    <div class="nav-item">
      <MyCarSvgIcon/>
    </div>
    <div class="gray-dot">
    </div>
    <div class="nav-item">
      <MyCarFinSvgIcon/>
    </div>
    <div class="gray-dot">
    </div>
    <div class="nav-item">
      <MyCarOlxSvgIcon/>
    </div>
  </div>
</template>

<script>
import MyCarSvgIcon from "../assets/mycar.svg"
import MyCarFinSvgIcon from "../assets/mycar-fin.svg"
import MyCarOlxSvgIcon from "../assets/mycar-olx.svg"

export default {
  components: {
    MyCarSvgIcon, MyCarOlxSvgIcon, MyCarFinSvgIcon
  },
  props: {}

}
</script>

<style lang="scss" scoped>

.app {
  padding-left: 12px;
  padding-right: 12px;
}

.nav {
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: flex-start;
  align-items: center;

  &-item:last-child {
    margin-left: 4px;
  }

  .gray-dot {
    border: 2px solid #CFD7E8;
    border-radius: 2px;
    margin: 0px 18px 0px 18px;
  }
}

@media (max-width: 578px) {
  .nav {
    &-item {
      transform: scale(0.82);
    }

    &-item:first-child {
      margin-left: -15px;
    }

    .gray-dot {
      margin: 0px 8px 0px 5px;
    }
  }
}
</style>