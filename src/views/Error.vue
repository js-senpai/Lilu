<template>
  <section class="error-404 text-center main-margin">
    <v-img src="@/assets/images/404.png" alt="bg" class="error-404-img">
      <div class="error-404-btn">
        <v-btn :to="{ name: 'home' }" class="btn" height="46" width="194">{{ $t('error.btn') }}</v-btn>
      </div>
    </v-img>
  </section>
</template>
<script>
export default {};
</script>

<style>
.error-404 {
  height: calc(100vh - 90px);
}

.error-404-img {
  position: relative;
  height: 100%;
  width: 100%;
}

.error-404-btn {
  position: absolute;
  top: 72%;
  width: 100%;
}
</style>
