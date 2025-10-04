
<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Service Details - Nuxt 3 Personal Portfolio Template",
})


</script>



<template>
  <HeaderTwo :title="`Business Branding`" :subtitle="`Business Branding`" />
  <ServiceDetails />
  <Process />
  <Footer />
</template>

 