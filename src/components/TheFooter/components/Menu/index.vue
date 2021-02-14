<template>
  <div class="footer-menu">
        <span
            v-for="(item, idx) in menuLinks"
            :key="idx"
            class="link"
        >
            <a
                v-if="item.link.includes('.pdf')"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
            >{{
                item.title
              }}</a>
            <a
                v-else
                :href="item.link"
            >{{ item.title }}</a>
        </span>
  </div>
</template>

<script>
export default {
  props: {
    menuLinks: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-menu {
  .link {
    font-size: 13px;
    line-height: normal;
    color: var(--black);

    &:not(:last-child) {
      margin-right: 32px;
    }

    a,
    a:visited {
      text-decoration: none;
      color: black;
    }
  }
}

@media (max-width: 1245px) {
  .footer-menu {
    .link {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
}

@media (max-width: 767px) {
  .footer-menu {
    display: flex;
    flex-direction: column;
    max-height: 130px;
    flex-wrap: wrap;

    .link {
      &:not(:last-child) {
        margin-right: 40px;
      }

      margin-right: 40px;
      margin-bottom: 16px;
    }
  }
}
</style>
