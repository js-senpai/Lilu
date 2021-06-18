<template>
  <section class="product main-margin" v-if="selectedProduct">
    <div class="d-flex wrap product-list">
      <div class="product-item">
        <span class="text-uppercase mt-2 mr-7 product-title">{{ $t(`products.${selectedProduct.translateKey}.productName`) }}</span>
        <v-tabs color="black">
          <v-tab class="font-weight-bold">{{ $t('product.tissue') }}</v-tab>
          <v-tab class="font-weight-bold">{{ $t('product.sizes') }}</v-tab>
          <v-tab-item class="pt-5 product-tab">
            <div class="product-tissue">
              <img :src="tissueImage" alt="tissue" class="product-tissue-img" />
            </div>
            <div class="product-select d-flex flex-wrap align-center">
              <div
                v-for="tissue in selectedProduct.tissues"
                :key="tissue.imgName"
                class="product-circle ma-2"
                :class="[tissue.color == tissueColor ? 'product-circle-active' : '', tissue.color == '' ? 'hidden' : '']"
                :style="{ background: ` ${tissue.color}` }"
                @click="setTissue(tissue)"
              ></div>
            </div>
          </v-tab-item>
          <v-tab-item class="pt-5">
            <v-img :src="getSizeImage(selectedProduct.size)" alt="tissue" max-width="355" height="355" contain></v-img>
            <div class="mt-3 empty-block"></div>
          </v-tab-item>
        </v-tabs>
        <div class="product-btn-block">
          <v-btn @click="contact = !contact" class="noto btn product-btn ls-3" width="100%" height="50">{{ $t('product.btn') }}</v-btn>
        </div>
      </div>
      <div class="product-item">
        <v-carousel
          hide-delimiters
          height="inherit"
          class="product-carusel"
          light
          hide-arrows
          next-icon="mdi-arrow-right"
          prev-icon="mdi-arrow-left"
        >
          <v-carousel-item v-for="(slideImg, i) in selectedProduct.carousel" :key="slideImg + i">
            <v-img :src="getSofaImage(slideImg)" class="product-carusel-img" cover></v-img>
          </v-carousel-item>
        </v-carousel>
        <div class="noto product-carusel-text ls-1">
          <span class="text-center d-block font-weight-bold mb-3 ls-3 product-carusel-title">
            {{ $t(`products.${selectedProduct.translateKey}.titleCarousel`) }}
          </span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part1`) }}</span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part2`) }}</span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part3`) }}</span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part4`) }}</span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part5`) }}</span>
          <span class="text-justify d-block">{{ $t(`products.${selectedProduct.translateKey}.descriptionCarousel.part6`) }}</span>
        </div>
      </div>

      <!---------------------------------- CONTACT FORM ------------------------------------->
      <v-navigation-drawer
        class="main-margin"
        fixed
        temporary
        overlay-opacity
        v-model="contact"
        :width="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '100%' : '38%'"
      >
        <div class=" mt-5 contact-close d-flex justify-center align-center d-md-none" @click="contact = !contact">&#10006;</div>
        <div class="d-flex flex-column justify-center align-md-start align-center contact-block">
          <span class="text-uppercase product-title font-weight-bold ls-3">{{
            $t(`products.${selectedProduct.translateKey}.productName`)
          }}</span>
          <div class="mt-10">
            <v-form v-model="valid">
              <v-text-field
                v-model="name"
                :rules="rulesName"
                color="black"
                required
                type="text"
                :label="$t('product.name')"
                class="red-star"
                dense
                height="40"
              >
              </v-text-field>
              <v-text-field
                v-model="number"
                :rules="rulesNumber"
                required
                :label="$t('product.number')"
                class="red-star"
                type="number"
                dense
                height="40"
                color="black"
              >
              </v-text-field>
              <v-text-field v-model="email" :rules="rulesEmail" color="black" class="red-star" required label="E-mail" dense height="40">
              </v-text-field>
              <v-textarea no-resize rows="2" color="black" v-model="note" :label="$t('product.textarea')"></v-textarea>
              <p class="mt-8 contact-text">{{ $t('product.text') }}<span style="color: red;">*</span></p>
            </v-form>
          </div>
          <div class="product-btn-block">
            <v-btn :disabled="!valid" class="btn product-btn ls-3" width="100%" height="50" @click="sendData">
              {{ $t('product.btn') }}
            </v-btn>
          </div>
        </div>
      </v-navigation-drawer>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Product',

  watch: {
    selectedProduct: {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (newVal) {
          this.setTissue(this.selectedProduct.tissues[0]);
        } else {
          this.$router.push({ name: 'error' });
        }
      },
    },
  },
  props: {
    productId: {
      required: true,
    },
  },

  data() {
    return {
      contact: null,
      valid: false,
      name: '',
      note: '',
      rulesName: [(v) => /^[a-zA-Zа-яА-ЯёЁєЄіІїЇ'][a-zA-Z-а-яА-ЯёЁєЄіІїЇ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(v) || 'Введите ваше имя'],
      number: '',
      rulesNumber: [(v) => /^[0-9]+$/.test(v) || 'Введите ваш номер'],
      email: '',
      rulesEmail: [(v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9]+(\.[a-z_-]+)*\.[a-z]{2,3}$/.test(v) || 'Введите валидный email'],
      message: '',
      tissueImage: '',
      tissueColor: '',
    };
  },

  computed: {
    ...mapGetters({
      getProduct: 'products/getProduct',
    }),

    selectedProduct() {
      return this.getProduct(this.productId);
    },
  },

  methods: {
    async sendData() {
      try {
        const form = new FormData();
        form.append('userName', this.name);
        form.append('note', this.note);
        form.append('number', this.number);
        form.append('email', this.email);
        form.append('url', window.location.href);
        form.append('title', this.$i18n.t(`products.${this.selectedProduct.translateKey}.productName`));
        await axios.post('https://atelierlilu.ua/mail.php', form, { headers: { 'Content-Type': 'multipart/form-data' } });
      } catch (e) {
        console.log(e);
      } finally {
        this.contact = false;
        this.name = '';
        this.note = '';
        this.number = '';
        this.email = '';
      }
    },
    setTissue(tissue) {
      this.tissueImage = require(`@/assets/images/product/tissue/${tissue.imgName}.png`);
      this.tissueColor = tissue.color;
    },
    getSizeImage(sizeImg) {
      return require(`@/assets/images/product/${sizeImg}.png`);
    },
    getSofaImage(sofaImg) {
      return require(`@/assets/images/product/sofa/${sofaImg}.png`);
    },
  },
  mounted() {},
};
</script>

<style>
.red-star label::after {
  content: '*';
  color: red;
}

.product .theme--light.v-label {
  color: black;
}

.product-list {
  position: relative;
  margin: 50px auto;
}

.product-item {
  max-width: 600px;
  width: 100%;
}

.product-title {
  float: left;
  font-size: 1.38rem;
  height: 30px;
}

.product-tissue {
  max-width: 355px;
  width: 100%;
  max-height: 355px;
  height: 100%;
}

.product-tissue-img {
  height: 355px;
  width: 355px;
}

.product-select {
  margin-top: 4px;
}

.product-circle {
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.product-circle-active {
  border: 2px solid black;
}

.empty-block {
  height: 48px;
}

.product-btn-block {
  margin-top: 60px;
  width: 250px;
}

.product-btn {
  color: black !important;
  border: 1px solid black !important;
}

.product-btn:hover {
  background: black !important;
  color: white !important;
  border: 1px solid white !important;
}

.product-carusel {
  margin-top: 68px;
  height: 355px !important;
}

.product-carusel-img {
  max-height: 355px;
  max-width: 600px;
}

.product .v-window__next,
.product .v-window__prev {
  background: none;
  top: 10px;
}
.product .v-window__prev {
  left: inherit;
  right: 50px;
}

.product .mdi-arrow-left::before,
.product .mdi-arrow-right::before {
  content: '';
}

.product .mdi-arrow-left {
  background: url('../assets/Left.svg');
}

.product .mdi-arrow-right {
  background: url('../assets/Right.svg');
}

.product .v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  width: 31px;
  margin-bottom: 5px;
}

.product-carusel-text {
  font-size: 1rem;
  font-weight: 200;
  margin: 20px auto 0;
}

.product-carusel-title {
  font-size: 1rem;
}

.contact-close {
  position: absolute;
  background: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 1px 20px;
}

.contact-block {
  height: calc(100vh - 95px);
  max-width: 310px;
  margin: 0 auto;
}

.contact-text {
  font-size: 0.75rem;
  color: #616161;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  box-shadow: none;
}

@media screen and (max-width: 1200px) {
  .product-list {
    flex-direction: column-reverse;
    margin: 0 auto 40px;
  }

  .product-item {
    margin: 0 auto;
  }
}

@media screen and (max-width: 620px) {
  .product {
    padding: 0 20px;
  }

  .product-btn-block {
    margin-left: auto;
    margin-right: auto;
    max-width: 335px;
    width: 100%;
  }

  .product-tissue {
    max-width: 155px;
    max-height: 155px;
  }

  .product-tissue-img {
    height: 152px;
    width: 152px;
  }

  .product-tab {
    display: flex;
  }

  .product-select {
    margin: 20px 0 20px 30px;
  }
}

@media screen and (max-width: 513px) {
  .product-carusel {
    margin-top: 48px;
    height: 250px !important;
  }
  .product-item {
    display: flex;
    flex-direction: column;
  }
  .product-btn-block {
    width: 100%;
  }
}
</style>
