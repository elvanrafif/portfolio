<script setup>

import Header from '~/layouts/Header.vue';
import Footer from "~/layouts/Footer.vue";

const GOOGLE_VERIFICATION_CODE = "ohkKXBm3D9bhDr8runwuTTkY7HEKh3gCuNJM9Gaic_E";

useHead({
  // 1. Title (Already there, but crucial)
  title: "Elvan Rafif | Frontend Developer Portfolio",

  // 2. Meta Description
  // This is the short snippet that appears on Google search results.
  meta: [
    {
      name: 'description',
      content: 'Elvan Rafif\'s portfolio, a dedicated Frontend Developer focused on Nuxt.js, Vue.js, and building fast, responsive, and modern user interfaces.',
    },
    // 3. Canonical Link (Essential for preventing duplicate content issues)
    // Replace with your actual domain URL.
    {
      rel: 'canonical',
      href: 'https://www.your-domain-name.com/', // Replace with your website URL
    },

    // --- Open Graph (For Social Media Sharing like Facebook, LinkedIn, Telegram, etc.) ---
    {
      property: 'og:title',
      content: 'Elvan Rafif | Frontend Developer Portfolio',
    },
    {
      property: 'og:description',
      content: 'Elvan Rafif\'s portfolio, a dedicated Frontend Developer focused on Nuxt.js, Vue.js, and building fast, responsive, and modern user interfaces.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.your-domain-name.com/', // Replace with your website URL
    },
    // The image that appears in the share preview. Needs to be a high-quality, absolute URL.
    {
      property: 'og:image',
      content: 'https://www.your-domain-name.com/images/elvan-preview.png', // Replace with your preview image URL
    },

    // --- Twitter Card (For Sharing on X/Twitter) ---
    {
      name: 'twitter:card',
      content: 'summary_large_image', // Card type: either 'summary' or 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Elvan Rafif | Frontend Developer Portfolio',
    },
    {
      name: 'twitter:description',
      content: 'Elvan Rafif\'s portfolio, a dedicated Frontend Developer focused on Nuxt.js, Vue.js, and building fast, responsive, and modern user interfaces.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.your-domain-name.com/images/elvan-preview.png', // Replace with your preview image URL
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      name: 'google-site-verification',
      content: GOOGLE_VERIFICATION_CODE,
    },
  ],
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