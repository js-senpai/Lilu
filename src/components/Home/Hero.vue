<template>
  <section class="hero">
    <div class="hero-img">
      <div class="hero-shadow d-flex justify-sm-center justify-space-around align-center flex-column white--text">
        <div class="text-center mt-12 mt-sm-0 text-uppercase">
          <p class="hero-title ls-8 mb-5 mt-12 mt-sm-0">{{ $t('hero.title.part1') }}</p>
          <p class="hero-title-subtitle ls-5 font-weight-light">{{ $t('hero.title.part2') }}</p>
        </div>
        <v-btn class="noto btn ls-5 mt-12" :to="{ name: 'catalog', params: { catalogId: id } }">{{ $t('btn') }}</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
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
.hero-img {
  min-height: calc(100vh - 64px);
  background: url('../../assets/images/home/hero/hero.jpg');
  background-repeat: no-repeat;
  background-position: 20% 0;
  background-size: cover;
}

.hero-shadow {
  height: calc(100vh - 64px);
  background-color: rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 3.44rem;
}

.hero-title-subtitle {
  font-family: Roboto;
  font-size: 1.65rem;
}

.hero .btn {
  width: 195px;
  height: 50px !important;
}

@media screen and (max-width: 959px) {
  .hero-img,
  .hero-shadow {
    min-height: calc(100vh - 90px);
  }
}

@media screen and (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
@media screen and (max-width: 500px) {
  .hero .btn {
    width: 90% !important;
  }
}
</style>
