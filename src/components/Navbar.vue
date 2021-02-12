<template>
  <div class="nav">
    <div class="nav-item">
      <MyCarSvgIcon/>
    </div>
    <div class="nav-item">
      <MyCarFinSvgIcon/>
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
.nav {
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: flex-start;
  align-items: center;

  &-item {
    width: fit-content;
  }

  &-item:not(:first-child) {
    margin-left: 20px;
  }
}
</style>