



<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Blog Details - Nuxt 3 Personal Portfolio Template",
})

</script>



<template>
  <HeaderTwo :title="`Brand design that helps the company grow`" :subtitle="`Brand Design`" />
  <BlogDetails />
  <Footer />
</template>

 