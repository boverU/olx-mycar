<template>
  <div class="footer-social">
    <div class="title">
      Мы в соц. сетях:
    </div>
    <div class="links">
      <a
          v-for="item in socialLinks"
          :key="item.name"
          :href="item.link"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
      >
        <icon :type="'icon-' + item.icon" :class="['icon', 'icon-' + item.icon]"/>
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/shared/Icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    socialLinks: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-social {
  display: flex;
  align-items: center;
  margin-left: auto;

  .title {
    margin-right: 17px;
    font-size: 13px;
    line-height: 15px;
    color: var(--black);
  }

  .links {
    display: flex;
    align-items: center;

    .link {
      &:not(:last-child) {
        margin-right: 22px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .footer-social {
    margin-left: 59px;
  }
}

@media (max-width: 767px) {
  .footer-social {
    margin-left: 64px;
  }
}
</style>
