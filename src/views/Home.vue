<template>
  <section class="home main-margin">
    <Hero />
    <About />
    <Brands />
  </section>
</template>

<script>
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Brands from '@/components/Home/Brands';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Brands,
  },
};
</script>

<style></style>
