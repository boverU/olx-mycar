<template functional>
    <div class="footer-copyright">
        <span class="full">
          © 2020 - 2021 ТОО "Mycar Group"
        </span>
        <span class="mobile">
          © 2020 - 2021 ТОО "Mycar Group"
        </span>
    </div>
</template>

<style lang="scss" scoped>
.footer-copyright {
    font-size: 13px;
    line-height: 15px;
    color: var(--black);
    .mobile {
        display: none;
    }
}

@media (max-width: 767px) {
    .footer-copyright {
        padding-bottom: 40px;
    }
}

@media (max-width: 576px) {
    .footer-copyright {
        padding-bottom: 0;
        .mobile {
            display: block;
        }
        .full {
            display: none;
        }
    }
}
</style>
