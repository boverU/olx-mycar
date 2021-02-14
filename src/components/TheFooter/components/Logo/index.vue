<template>
  <div
      class="footer-logo">
    <MyCarSvgIcon
        :to="logoData.link"
        :alt="logoData.name"/>
  </div>

</template>

<script>
import MyCarSvgIcon from "@/assets/mycar.svg"

export default {
  components: {
    MyCarSvgIcon
  },
  props: {
    logoData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-logo {
  display: flex;
  align-items: center;

  > svg {
    width: 100%;
    max-width: 118px;
    height: 30px;
  }
}
</style>
