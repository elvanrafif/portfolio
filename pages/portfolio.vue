
<script setup>

import HeaderTwo from '~/layouts/HeaderTwo.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Portfolio - Nuxt 3 Personal Portfolio Template",
})


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}



</script>



<template>
  <HeaderTwo :title="`My Work & Portfolio`" :subtitle="`Works`" />
  <ProjectTwo />
  <Process />
  <Footer />
</template>
