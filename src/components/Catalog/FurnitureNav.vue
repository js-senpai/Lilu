<template>
  <section class="nav">
    <div class="wrap d-flex flex-wrap">
      <div class="tabs">
        <div class="tabs-link mt-3">
          <a
            :href="`http://docs.google.com/gview?url=${windowOrigin}/catalog-colors.pdf&embedded=true`"
            target="_blank"
            class="tabs-link-text mr-8"
          >
            {{ $t('furniture.season19') }}
          </a>

          <a
            :href="`https://docs.google.com/viewerng/viewer?url=${windowOrigin}/catalog-nord.pdf&embedded=true`"
            target="_blank"
            class="tabs-link-text"
          >
            {{ $t('furniture.season20') }}
          </a>
        </div>

        <v-tabs color="black" v-model="tab">
          <v-tab v-for="(item, i) in names" :key="item + i" :to="item">
            <span class="tab-title text-uppercase">{{ $t(`furniture.${item}`) }}</span>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, i) in names" :key="item + i" :value="item">
            <Furniture :selectedFurnitureType="item" />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </section>
</template>

<script>
import Furniture from '@/components/Catalog/Furniture';

export default {
  name: 'FurnitureNav',
  components: {
    Furniture,
  },

  data() {
    return {
      tab: null,
      names: ['soft', 'body', 'textile'],
    };
  },

  computed: {
    windowOrigin() {
      return window.origin;
    },
  },
};
</script>

<style>
.nav {
  padding: 50px 0;
}

.tabs {
  width: 100%;
}

.tabs-link {
  float: right;
}

.tab-title {
  font-size: 0.94rem;
}

.tabs-link-text {
  color: rgba(0, 0, 0, 0.54) !important;
  font-size: 0.94rem;
  font-weight: bold;
}

.tabs-link-text:hover {
  color: black !important;
  border-bottom: 1px solid black;
}

.tab-title {
  font-weight: bold;
}

@media screen and (max-width: 1220px) {
  .tabs {
    margin: 0 20px;
  }
}

@media screen and (max-width: 600px) {
  .tabs-link {
    float: none;
    text-align: right;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 500px) {
  .nav {
    padding: 20px 0;
  }

  .tab-title {
    font-size: 0.75rem;
  }

  .tabs-link-text {
    font-size: 0.88rem;
  }

  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
