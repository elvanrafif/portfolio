
<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Portfolio Details - Nuxt 3 Personal Portfolio Template",
})


</script>



<template>
  <HeaderTwo :title="`Brand Identity & Motion Design`" :subtitle="`Brand Identity & Motion Design`" />
  <PortfolioDetails />
  <Related />
  <Footer />
</template>

 