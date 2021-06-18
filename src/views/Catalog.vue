<template>
  <section class="catalog main-margin">
    <FurnitureNav />
    <Brands />
  </section>
</template>

<script>
import FurnitureNav from '@/components/Catalog/FurnitureNav';
import Brands from '@/components/Home/Brands';

export default {
  name: 'Catalog',
  components: {
    FurnitureNav,
    Brands,
  },
};
</script>

<style></style>
