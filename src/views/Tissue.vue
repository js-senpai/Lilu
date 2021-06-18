<template>
  <section class="tissue py-12 main-margin">
    <div class="wrap">
      <v-item-group class="d-flex justify-center flex-wrap">
        <v-item v-slot:default="{ active, toggle }" v-for="(tissue, i) in tissues" :key="i">
          <div @click="toggle">
            <v-card flat tile class="tissue-item">
              <img :src="getImage(tissue.icon)" width="100%" />
            </v-card>
            <v-scroll-y-transition>
              <div ref="block" v-if="active" class="tissue-item-active text-center d-flex flex-column">
                <img :src="getImage(tissue.icon)" width="100%" />
                <span class="tissue-name ls-3 text-uppercase">{{ tissue.title }}</span>
              </div>
            </v-scroll-y-transition>
          </div>
        </v-item>
      </v-item-group>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tissue',
  data() {
    return {
      tissues: [
        { icon: '1293910', title: 'DOUCEUR 1293910' },
        { icon: '1293912', title: 'DOUCEUR 1293912' },
        { icon: '1293913', title: 'DOUCEUR 1293913' },
        { icon: '1293914', title: 'DOUCEUR 1293914' },
        { icon: '1293915', title: 'DOUCEUR 1293915' },
        { icon: '1293918', title: 'DOUCEUR 1293918' },
        { icon: '1293919', title: 'DOUCEUR 1293919' },
        { icon: '1293921', title: 'DOUCEUR 1293921' },
        { icon: '1293922', title: 'DOUCEUR 1293922' },
        { icon: '1293923', title: 'DOUCEUR 1293923' },
        { icon: '1293924', title: 'DOUCEUR 1293924' },
        { icon: '1293926', title: 'DOUCEUR 1293926' },
        { icon: '1293927', title: 'DOUCEUR 1293927' },
        { icon: '1293929', title: 'DOUCEUR 1293929' },
        { icon: '1293930', title: 'DOUCEUR 1293930' },
        { icon: '1293931', title: 'DOUCEUR 1293931' },
        { icon: '1293932', title: 'DOUCEUR 1293932' },
        { icon: '1293933', title: 'DOUCEUR 1293933' },
        { icon: '1293934', title: 'DOUCEUR 1293934' },
        { icon: '1293935', title: 'DOUCEUR 1293935' },
        { icon: '1293936', title: 'DOUCEUR 1293936' },
        { icon: '1293938', title: 'DOUCEUR 1293938' },
        { icon: '1293939', title: 'DOUCEUR 1293939' },
        { icon: '1293940', title: 'DOUCEUR 1293940' },
        { icon: '1293941', title: 'DOUCEUR 1293941' },
        { icon: '1293942', title: 'DOUCEUR 1293942' },
        { icon: '1293943', title: 'DOUCEUR 1293943' },
        { icon: '1293944', title: 'DOUCEUR 1293944' },
        { icon: '1293945', title: 'DOUCEUR 1293945' },
        { icon: '1293946', title: 'DOUCEUR 1293946' },
        { icon: '1293947', title: 'DOUCEUR 1293947' },
        { icon: '1293948', title: 'DOUCEUR 1293948' },
        { icon: '1293949', title: 'DOUCEUR 1293949' },
        { icon: '1293950', title: 'DOUCEUR 1293950' },
        { icon: '1293951', title: 'DOUCEUR 1293951' },
        { icon: '1293953', title: 'DOUCEUR 1293953' },
        { icon: '1293954', title: 'DOUCEUR 1293954' },
        { icon: '1293955', title: 'DOUCEUR 1293955' },
        { icon: '1293956', title: 'DOUCEUR 1293956' },
        { icon: '1177920', title: 'SWEET LOVE 1177920' },
        { icon: '1177921', title: 'SWEET LOVE 1177921' },
        { icon: '1177923', title: 'SWEET LOVE 1177923' },
        { icon: '1177924', title: 'SWEET LOVE 1177924' },
        { icon: '1177925', title: 'SWEET LOVE 1177925' },
        { icon: '1177927', title: 'SWEET LOVE 1177927' },
        { icon: '1177929', title: 'SWEET LOVE 1177929' },
        { icon: '1177930', title: 'SWEET LOVE 1177930' },
        { icon: '1177932', title: 'SWEET LOVE 1177932' },
        { icon: '1177933', title: 'SWEET LOVE 1177933' },
        { icon: '1177936', title: 'SWEET LOVE 1177936' },
        { icon: '1177938', title: 'SWEET LOVE 1177938' },
        { icon: '1177939', title: 'SWEET LOVE 1177939' },
        { icon: '1177941', title: 'SWEET LOVE 1177941' },
        { icon: '1177942', title: 'SWEET LOVE 1177942' },
        { icon: '1177943', title: 'SWEET LOVE 1177943' },
        { icon: '1177944', title: 'SWEET LOVE 1177944' },
        { icon: '1177945', title: 'SWEET LOVE 1177945' },
        { icon: '1177946', title: 'SWEET LOVE 1177946' },
        { icon: '1177947', title: 'SWEET LOVE 1177947' },
        { icon: '1177948', title: 'SWEET LOVE 1177948' },
        { icon: '1177949', title: 'SWEET LOVE 1177949' },
        { icon: '1177950', title: 'SWEET LOVE 1177950' },
        { icon: '1177951', title: 'SWEET LOVE 1177951' },
        { icon: '1177952', title: 'SWEET LOVE 1177952' },
        { icon: '1177953', title: 'SWEET LOVE 1177953' },
        { icon: '1177954', title: 'SWEET LOVE 1177954' },
        { icon: '1177955', title: 'SWEET LOVE 1177955' },
        { icon: '1177956', title: 'SWEET LOVE 1177956' },
        { icon: '1177957', title: 'SWEET LOVE 1177957' },
        { icon: '1177958', title: 'SWEET LOVE 1177958' },
        { icon: '1177959', title: 'SWEET LOVE 1177959' },
        { icon: '1177960', title: 'SWEET LOVE 1177960' },
        { icon: '1177961', title: 'SWEET LOVE 1177961' },
        { icon: '1177962', title: 'SWEET LOVE 1177962' },
        { icon: '1177963', title: 'SWEET LOVE 1177963' },
        { icon: '1177964', title: 'SWEET LOVE 1177964' },
        { icon: 'BAVARIA-01 Aluminium', title: 'Suerte BAVARIA-01 Aluminium' },
        { icon: 'BAVARIA-02 Steel', title: 'Suerte BAVARIA-02 Steel' },
        { icon: 'BAVARIA-03-DOVE', title: 'Suerte BAVARIA-03-DOVE' },
        { icon: 'BAVARIA-04-MIST', title: 'Suerte BAVARIA-04-MIST' },
        { icon: 'BAVARIA-05 WINTER', title: 'Suerte BAVARIA-05 WINTER' },
        { icon: 'BAVARIA-06 SWAN', title: 'Suerte BAVARIA-06 SWAN' },
        { icon: 'BAVARIA-07 IVORY', title: 'Suerte BAVARIA-07 IVORY' },
        { icon: 'BAVARIA-08 SESAME', title: 'Suerte BAVARIA-08 SESAME' },
        { icon: 'BAVARIA-09-NOUGAT', title: 'Suerte BAVARIA-09-NOUGAT' },
        { icon: 'BAVARIA-10-SAND', title: 'Suerte BAVARIA-10-SAND' },
        { icon: 'BAVARIA-11-SEAGRASS', title: 'Suerte BAVARIA-11-SEAGRASS' },
        { icon: 'BAVARIA-12-FOSSIL', title: 'Suerte BAVARIA-12-FOSSIL' },
        { icon: 'BAVARIA-13 OTTER', title: 'Suerte BAVARIA-13 OTTER' },
        { icon: 'BAVARIA-14 DUNE', title: 'Suerte BAVARIA-14 DUNE' },
        { icon: 'BAVARIA-15 EARTH', title: 'Suerte BAVARIA-15 EARTH' },
        { icon: 'BAVARIA-16 BLOSSOM', title: 'Suerte BAVARIA-16 BLOSSOM' },
        { icon: 'BAVARIA-17 PLUM', title: 'Suerte BAVARIA-17 PLUM' },
        { icon: 'BAVARIA-18 CLOUD', title: 'Suerte BAVARIA-18 CLOUD' },
        { icon: 'BAVARIA-19-AQUA', title: 'Suerte BAVARIA-19-AQUA' },
        { icon: 'BAVARIA-20 CADET', title: 'Suerte BAVARIA-20 CADET' },
        { icon: 'BAVARIA-21-MARINE', title: 'Suerte BAVARIA-21-MARINE' },
        { icon: 'BAVARIA-22-TEAL', title: 'Suerte BAVARIA-22-TEAL' },
        { icon: '0000', title: 'Camillatex 0000' },
        { icon: '1019', title: 'Camillatex 1019' },
        { icon: '1418', title: 'Camillatex 1418' },
        { icon: '1423', title: 'Camillatex 1423' },
        { icon: '1430', title: 'Camillatex 1430' },
        { icon: '1465', title: 'Camillatex 1465' },
        { icon: '2201', title: 'Camillatex 2201' },
        { icon: '3250', title: 'Camillatex 3250' },
        { icon: '4011', title: 'Camillatex 4011' },
        { icon: '4050', title: 'Camillatex 4050' },
        { icon: '4170', title: 'Camillatex 4170' },
        { icon: '4508', title: 'Camillatex 4508' },
        { icon: '5001', title: 'Camillatex 5001' },
        { icon: '9009', title: 'Camillatex 9009' },
        { icon: '9015', title: 'Camillatex 9015' },
        { icon: '9050', title: 'Camillatex 9050' },
        { icon: '0000 bianco', title: 'Camillatex 0000 bianco' },
        { icon: '0030', title: 'Camillatex 0030' },
        { icon: '0070', title: 'Camillatex 0070' },
        { icon: '2520', title: 'Camillatex 2520' },
        { icon: '2752', title: 'Camillatex 2752' },
        { icon: '3210', title: 'Camillatex 3210' },
        { icon: '3410', title: 'Camillatex 3410' },
        { icon: '4114', title: 'Camillatex 4114' },
        { icon: '4129', title: 'Camillatex 4129' },
        { icon: '5220', title: 'Camillatex 5220' },
        { icon: '9002', title: 'Camillatex 9002' },
        { icon: '9514', title: 'Camillatex 9514' },
        { icon: '9751', title: 'Camillatex 9751' },
      ],
    };
  },
  methods: {
    getImage(iconPath) {
      return require(`@/assets/images/tissue/${iconPath}.png`);
    },
  },
};
</script>

<style>
.tissue-item {
  cursor: pointer;
  width: 185px;
  height: 185px;
  margin: 7.5px;
}

.tissue-name {
  margin-top: 25px;
  font-size: 0.94rem;
}

.tissue-item-active {
  position: absolute;
  height: 354px;
  width: 307px;
  margin-top: -220px;
  margin-left: -60px;
  padding: 30px;
  background: white;
  z-index: 5;
}

@media screen and (max-width: 1120px) {
  .tissue {
    padding: 0 50px;
  }
}

@media screen and (max-width: 530px) {
  .tissue {
    padding: 0;
  }
}

@media screen and (max-width: 450px) {
  .tissue-item {
    width: 160px;
    height: 160px;
    margin: 5px;
  }
  .tissue-item-active {
    margin: -200px auto 0;
    position: absolute;
    left: 0;
    right: 0;
  }
}
</style>
