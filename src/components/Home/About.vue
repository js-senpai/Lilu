<template>
  <section class="about">
    <div class="about-desk d-none d-sm-flex">
      <div class="about-wrap mx-auto my-0">
        <h2 class="about-title text-center text-uppercase font-weight-light ls-5 mb-12">{{ $t('about.title') }}</h2>
        <v-img class="float-right ml-4 mb-4" width="190" src="../../assets/images/home/about/ava.png"></v-img>
        <p class="noto ls-3 mb-7">{{ $t('about.description.part1') }}</p>
        <p class="noto ls-3  mb-7">{{ $t('about.description.part2') }}</p>
        <p class="noto ls-3  mb-7">{{ $t('about.description.part3') }}</p>
        <p class="noto ls-3  mb-7">{{ $t('about.description.part4') }}</p>
        <div class="d-flex justify-space-between align-end mt-12">
          <div style="width: 160px">
            <v-img src="../../assets/images/home/about/avtog.png"></v-img>
          </div>
          <p class="noto font-italic font-weight-bold">{{ $t('about.signature') }}</p>
        </div>
      </div>
    </div>

    <!-- MOBILE VERSION -->
    <div class="about-mob d-sm-none">
      <h2 color="#cec6be" class="about-title about-wrap text-center text-uppercase font-weight-light ls-5">{{ $t('about.title') }}</h2>
      <v-expansion-panels tile>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions color="#cec6be" class="noto d-flex flex-column text-center ls-1 py-9"
            >{{ $t('about.description.part1') }}
            <div class="d-flex mt-9">
              <v-icon v-for="(item, i) in 3" :key="i" class="overline">mdi-circle</v-icon>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#cec6be" class="noto">
            <v-img class="mx-auto mb-3" width="190" src="../../assets/images/home/about/ava.png"></v-img>
            <p>{{ $t('about.description.part2') }}</p>
            <p>{{ $t('about.description.part3') }}</p>
            <p>{{ $t('about.description.part4') }}</p>
            <p class="text-end font-italic font-weight-bold">{{ $t('about.signature') }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
.about-desk {
  margin: 70px auto;
}

.about-wrap {
  background: #cec6be;
  max-width: 715px;
  padding: 70px 40px 40px;
}

.about-title {
  font-size: 2.13rem;
}

@media screen and (max-width: 715px) {
  .about {
    margin: 0;
  }
}

@media screen and (max-width: 599px) {
  .about-wrap {
    background: #cec6be;
    padding: 40px 0 0;
  }

  .about-title {
    font-size: 1.8rem;
  }

  .v-expansion-panel::before {
    box-shadow: none !important;
  }
}
</style>
