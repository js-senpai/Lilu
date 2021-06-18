<template>
  <section class="footer">
    <v-footer min-height="170" class="wrap" absolute padless color="#f7f7fa">
      <div class="footer-item d-flex justify-md-space-between flex-column flex-md-row">
        <div class="logo footer-logo">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/images/logo.png" alt="logo" width="104" />
          </router-link>
        </div>
        <div class="footer-menu-list">
          <div class="d-flex justify-center flex-wrap footer-menu-item">
            <router-link :to="{ name: 'home' }" class="text-uppercase mx-3 mb-5 caption">{{ $t('header.menu.home') }}</router-link>
            <router-link :to="{ name: 'catalog', params: { catalogId: id } }" class="text-uppercase mx-3 mb-5 caption">{{
              $t('header.menu.catalog')
            }}</router-link>
            <router-link :to="{ name: 'tissue' }" class="text-uppercase mx-3 mb-5 caption">{{ $t('header.menu.tissue') }}</router-link>
            <a href="https://sync.tucha.ua/storage/s/teerbOQAzsjcFBW" target="_blank" class="text-uppercase caption">{{
              $t('header.menu.3D')
            }}</a>
          </div>
        </div>
        <div class="footer-text">
          <p class="footer-address ls-3 text-uppercase">{{ $t('footer.city') }}</p>
          <p class="footer-address ls-3 text-uppercase">{{ $t('footer.address') }}</p>
          <p>
            <a class="font-weight-bold" href="tel:+380669728007">{{ $t('footer.tel') }}</a>
          </p>
        </div>
      </div>
      <div class="d-flex justify-center footer-item mb-12">
        <div>
          <v-btn class="footer-circle" fab small href="https://www.facebook.com/atelierlilu.ua/" target="_blanck">
            <svg width="10" height="18" class="footer-fb" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.39703 17.9972V9.80117H9.16203L9.57303
                  6.59217H6.39703V4.54817C6.39703 3.62217 6.65503 2.98817
                  7.98403 2.98817H9.66803V0.127169C8.84867 0.0393602 8.02508
                  -0.00303802 7.20103 0.000169166C4.75703 0.000169166 3.07903
                  1.49217 3.07903
                  4.23117V6.58617H0.332031V9.79517H3.08503V17.9972H6.39703Z"
              />
            </svg>
          </v-btn>
        </div>
        <div class="mx-7">
          <v-btn class="footer-circle" fab small href="https://www.instagram.com/atelierlilu.ua/" target="_blanck"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
        </div>
        <div>
          <v-btn class="footer-circle" fab small href="https://web.telegram.org/#/im?p=@SleepOnnn_bot" target="_blanck"
            ><v-icon>mdi-telegram</v-icon></v-btn
          >
        </div>
      </div>
    </v-footer>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    catalogId: {
      require: true,
    },
  },
  data() {
    return {
      id: 'soft',
    };
  },
};
</script>

<style>
.footer {
  height: 100%;
  background: #f7f7fa !important;
  padding-top: 160px;
  padding-bottom: 100px;
}

.footer-item {
  width: 100%;
}

.footer-menu-list {
  position: absolute;
  left: calc(50% - 350px);
  max-width: 700px;
  width: 100%;
  margin-top: 20px;
}

.footer-fb {
  fill: white;
}

.footer-circle:hover .footer-fb {
  fill: black;
}

.footer-circle {
  background: black !important;
  color: white !important;
}

.footer-circle:hover {
  background: white !important;
  color: black !important;
  border: 1px solid black !important;
}

.footer .v-btn--fab.v-btn--contained {
  box-shadow: none;
}

.footer-text {
  text-align: end;
  max-width: 270px;
}

.footer-address {
  font-size: 0.75rem;
}

@media screen and (max-width: 1220px) {
  .v-footer {
    padding: 0 20px !important;
  }
}

@media screen and (max-width: 959px) {
  .footer {
    margin-top: 96px;
  }

  .footer-menu-list {
    position: static;
    margin: 30px auto;
  }

  .footer-menu-item {
    margin: 0 auto;
  }

  .footer-logo {
    display: none;
  }

  .footer-text {
    text-align: center;
    margin: 0 auto;
  }

  .footer-item {
    margin-top: 30px;
  }
}
</style>
