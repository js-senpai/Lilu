<template>
  <section class="header">
    <div class="wrap">
      <!-- MOBILE MENU -->
      <v-navigation-drawer
        fixed
        overlay-opacity
        temporary
        v-model="drawer"
        width="420px"
        class="main-margin hidden-md-and-up header-drawer"
      >
        <div class="header-menu d-flex justify-center align-center">
          <div class="mt-n10">
            <div class="text-center my-7">
              <router-link :to="{ name: 'home' }" class="text-uppercase headline header-menu-item">{{
                $t('header.menu.home')
              }}</router-link>
            </div>
            <div class="text-center my-7">
              <router-link :to="{ name: 'catalog', params: { catalogId: id } }" class="text-uppercase headline header-menu-item">{{
                $t('header.menu.catalog')
              }}</router-link>
            </div>
            <div class="text-center my-7">
              <router-link :to="{ name: 'tissue' }" class="text-uppercase headline header-menu-item">{{
                $t('header.menu.tissue')
              }}</router-link>
            </div>
            <div class="text-center my-7">
              <a href="https://sync.tucha.ua/storage/s/teerbOQAzsjcFBW" target="_blank" class="text-uppercase headline">{{
                $t('header.menu.3D')
              }}</a>
            </div>
          </div>
        </div>
      </v-navigation-drawer>

      <!-- DESKTOP VERSION -->
      <v-app-bar height="90" fixed flat color="#f7f7fa">
        <div class="header-width mx-auto d-flex align-center">
          <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <div class="hidden-sm-and-down">
            <router-link :to="{ name: 'home' }" class="text-uppercase mr-10 caption">{{ $t('header.menu.home') }}</router-link>
            <router-link :to="{ name: 'catalog', params: { catalogId: id } }" class="text-uppercase mr-10 caption">{{
              $t('header.menu.catalog')
            }}</router-link>
            <router-link :to="{ name: 'tissue' }" class="text-uppercase mr-10 caption">{{ $t('header.menu.tissue') }}</router-link>
            <a href="https://sync.tucha.ua/storage/s/teerbOQAzsjcFBW" target="_blank" class="text-uppercase caption">{{
              $t('header.menu.3D')
            }}</a>
          </div>
          <v-spacer></v-spacer>
          <div class="logo header-logo">
            <router-link :to="{ name: 'home' }">
              <img src="@/assets/images/logo.png" alt="logo" width="104" />
            </router-link>
          </div>
          <v-spacer></v-spacer>
          <div class="header-select mt-5">
            <v-select
              class="caption"
              v-model="select"
              :items="lang"
              item-text="name"
              item-value="key"
              @change="changeLang($event)"
              value="РУС"
              dense
            ></v-select>
          </div>
        </div>
      </v-app-bar>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    catalogId: {
      require: true,
    },
  },
  data() {
    return {
      id: 'soft',
      select: { name: 'РУС', key: 'ru' },
      lang: [
        { name: 'РУС', key: 'ru' },
        { name: 'УКР', key: 'ua' },
        { name: 'ENG', key: 'en' },
      ],
      drawer: null,
    };
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = `${lang}`;
    },
  },
};
</script>

<style>
.header {
  z-index: 15;
  background: white;
}

.header-width {
  max-width: 1200px;
  width: 100%;
}

.header-menu {
  height: calc(100vh - 68px);
}

#app .header-menu-item {
  letter-spacing: 3px !important;
}

.header-logo {
  position: absolute;
  left: calc(50% - 52px);
}

.header-select {
  max-width: 60px;
  z-index: 18;
}

.header-select .mdi-menu-down::before {
  content: '\F0140' !important;
}

.header .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}

.header-drawer-content {
  background: #f7f7fa;
  height: 90px;
  position: relative;
}

@media screen and (max-width: 600px) {
  #app .headline {
    font-size: 18px !important;
  }
}
</style>
