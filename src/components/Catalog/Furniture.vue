<template>
  <section class="furniture">
    <!-- {{ selectedFurnitureType.name }} -->
    <!-- <p @click="testAction()">CLICK ME</p> -->
    <div class="pt-10 d-flex justify-lg-start justify-center flex-wrap">
      <v-card flat tile class="item-list" v-for="(product, i) in furniture" :key="product + i">
        <div class="item-items">
          <router-link :to="{ name: 'product', params: { productId: product.id } }">
            <p class="item-title text-uppercase text-center py-5 ls-3">{{ $t(`${product.type}`) }}</p>
            <div class="text-center">
              <img class="item-img" :src="getImage(product.img)" height="100%" />
            </div>
          </router-link>
        </div>
      </v-card>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Furniture',
  props: {
    selectedFurnitureType: {
      require: true,
    },
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      getFurniture: 'furniture/getFurniture',
    }),

    furniture() {
      return this.getFurniture(this.selectedFurnitureType);
    },
  },

  methods: {
    getImage(imgPathSegment) {
      return require(`@/assets/images/catalog/${imgPathSegment}.png`);
    },

    // testAction() {
    //   this.$store.dispatch('furniture/someAction', { ss: 'lol', aa: 'puk' });
    // },
  },
};
</script>

<style>
.item-list {
  margin: 0 12px 50px;
}

.item-items {
  width: 375px;
}

.item-title {
  font-size: 1.25rem;
}

.item-img {
  max-height: 180px;
}

@media screen and (max-width: 500px) {
  .item-list {
    margin: 0 auto;
  }

  .item-items {
    width: 162px;
  }
  .item-title {
    font-size: 0.88rem;
  }

  .item-img {
    width: 100%;
  }
}
</style>
