<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.main-margin {
  margin-top: 90px;
}

@font-face {
  font-family: RobotoCondensed;
  src: url(./assets/font/RobotoCondensed-Regular.ttf);
}

.noto {
  font-family: 'Noto Serif', serif;
}

/* #app {
  font-family: 'Noto Serif', serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app .display-4,
#app .display-3,
#app .display-2,
#app .display-1,
#app .headline,
#app .title,
#app .subtitle-1,
#app .subtitle-2,
#app .body-1,
#app .body-2,
#app .caption,
#app .overline {
  font-family: 'Noto Serif', serif !important;
} */

.wrap {
  max-width: 1200px !important;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: black !important;
}

.logo {
  width: 104px;
  height: 56px;
}

.bg-color-primary {
  background: #f7f7fa;
}

#app .ls-1 {
  letter-spacing: 1px !important;
}

#app .ls-3 {
  letter-spacing: 3px !important;
}

#app .ls-5 {
  letter-spacing: 5px !important;
}

#app .ls-8 {
  letter-spacing: 8px !important;
}

.btn {
  background: rgba(255, 255, 255, 0) !important;
  color: white !important;
  border: 1px solid white !important;
  border-radius: 0;
}

.btn:hover {
  background: white !important;
  color: black !important;
  border: none !important;
}

.v-tabs-slider-wrapper {
  height: 1px !important;
}

.hidden {
  visibility: hidden;
}
</style>
