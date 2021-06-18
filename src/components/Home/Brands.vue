<template>
  <section class="brands bg-color-primary">
    <h2 class="text-center brands-title text-uppercase font-weight-light ls-5 py-12">{{ $t('brands.title') }}</h2>
    <div class="d-flex justify-center flex-wrap">
      <v-hover v-slot:default="{ hover }" v-for="(brand, i) in brands" :key="brand + i">
        <v-card flat tile>
          <v-img class="brands-list" :src="getImage(brand.icon)">
            <div class="brand-item mt-2">
              <p class="brand-item-title text-center text-uppercase my-2 ls-1">{{ $t(`brands.${brand.type}.name`) }}</p>
              <p class="brand-item-text text-center font-weight-light mt-n2 ls-1">{{ $t(`brands.${brand.type}.text`) }}</p>
            </div>
            <v-expand-transition>
              <div v-if="hover" class="brand-btn d-flex justify-center align-center">
                <v-btn class="btn" width="180" height="30" :href="brand.link" target="_blanck">{{ $t('brands.btn') }}</v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Brands',
  data() {
    return {
      brands: [
        { type: 'drimai', description: 'text', icon: 'drimai', link: 'https://www.drimai.shop' },
        { type: 'sleep', description: 'text', icon: 'sleep', link: 'https://sleep.onnn.eu/#/home' },
        { type: 'lilu', description: 'text', icon: 'lilu', link: 'https://atelierlilu.ua/' },
        { type: 'bambini', description: 'text', icon: 'mini', link: 'https://minibambini.ua/' },
      ],
    };
  },
  methods: {
    getImage(iconPath) {
      return require(`@/assets/images/home/brands/${iconPath}.png`);
    },
  },
};
</script>

<style>
.brands-title {
  font-size: 2.13rem;
}

.brands-list {
  max-width: 360px;
  max-height: 360px;
  cursor: pointer;
  background: #f7f7fa;
}

.brand-item {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
}

.brands-list:hover .brand-item {
  display: none;
}

.brand-btn:hover {
  display: flex !important;
}

.brand-item-title {
  font-size: 1.13rem;
}

.brand-item-text {
  font-size: 0.75rem;
}

.brand-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 959px) {
  .brands {
    padding-bottom: 30px;
  }
}

@media screen and (max-width: 719px) {
  .brands-title {
    font-size: 1.63rem;
  }
  .brands-list {
    width: 187.5px;
    height: 200px;
  }

  .brand-item-title {
    font-size: 1rem;
  }

  .brand-item-text {
    font-size: 0.63rem;
  }
}
</style>
