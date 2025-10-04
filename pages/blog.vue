
<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Blog - Nuxt 3 Personal Portfolio Template",
})


</script>



<template>
  <HeaderTwo :title="`Blog Standard`" :subtitle="`Blog Standard`" />
  <BlogArea />
  <Footer />
</template>

 