

<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Service - Nuxt 3 Personal Portfolio Template",
})

</script>


<template>
  <HeaderTwo :title="`Services All`" :subtitle="`Services All`" />
  <ServiceArea />
  <MettingTwo />
  <Pricing />
  <Process />
  <Footer />
</template>

 