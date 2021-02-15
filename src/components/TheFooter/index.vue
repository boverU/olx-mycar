<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
        <footer-logo :logo-data="logoData"/>
        <footer-social :social-links="socialChannelLink"/>
      </div>
      <div class="footer-second-wrap">
        <footer-menu :menu-links="menuLinks"/>
        <footer-copyright/>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogo from './components/Logo/index.vue';
import FooterSocial from './components/Social/index.vue';
import FooterMenu from './components/Menu/index.vue';
import FooterCopyright from './components/Copyright/index.vue';

import config from '@/config';

const {socialChannelLink} = config;

export default {
  components: {
    FooterLogo,
    FooterSocial,
    FooterMenu,
    FooterCopyright,
  },
  data() {
    return {
      socialChannelLink,
    };
  },
  computed: {
    logoData() {
      return {
        name: 'appBaseUrl',
        link: this.links.main,
      };
    },
    links() {
      const {
        main, terms, confidentiality, about, feedback,
      } = config.pageLink;
      return {
        main: main,
        profile: '/profile',
        feedback: feedback,
        about: about,
        terms: terms,
        confidentiality: confidentiality,
      };
    },
    menuLinks() {
      return [
        {
          title: 'Обратная связь',
          link: this.links.feedback,
        },
        {
          title: 'О нас',
          link: this.links.about,
        },
        {
          title: 'Условия',
          link: this.links.terms,
        },
        {
          title: 'Конфиденциальность',
          link: this.links.confidentiality,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 22px 22px 16px 0;
}

.footer-wrap,
.footer-second-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 15px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

@media (max-width: 1023px) {
  .footer {
    padding-bottom: 22px;

    .footer-wrap {
      justify-content: flex-start;
    }

    .footer-second-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & div:not(:last-child) {
        margin-bottom: 26px;
      }

      & div:last-child {
        margin-left: 3px;
      }
    }
  }
}

@media (max-width: 767px) {
  .footer {
    padding-bottom: 25px;

    .footer-second-wrap {
      & div:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    .container {
      position: relative;
    }
  }
}

@media (max-width: 576px) {
  .footer {
    padding-bottom: 32px;

    .container {
      .footer-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & div:nth-child(2) {
          display: none;
        }
      }

      .footer-second-wrap {
        & div:nth-child(1) {
          display: none;
        }
      }
    }
  }
}
</style>
