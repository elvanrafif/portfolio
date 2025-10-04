
<script setup>

import Header from '~/layouts/Header.vue';
import Footer from "~/layouts/Footer.vue";

useHead({
  title: "Elvan Rafif | Frontend Developer Portfolio",
})


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}


</script>


<template>
  <Header />
  <SliderTextSlider />
  <About />
  <SliderTextSlider />
  <!-- <SliderTextSliderTwo /> -->
  <!-- <Aword /> -->
  <!-- <Project /> -->
  <!-- <Metting /> -->
  <Service />
  <!-- <Process /> -->
  <!-- <Testimonial /> -->
  <!-- <Blog /> -->
  <Footer />
</template>
 