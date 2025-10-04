
<script setup>

 
const props = defineProps({
  showSidebar: Boolean, 
  toggleActive: Function,
})   

</script>


<template>
  <!--<<  sub side bar custom >>-->
  <div :class="`subside__barmenu sub__contact ${showSidebar ? 'active' : ''}`" style="overflow-y:hidden;">
    <div class="remove__click d-flex justify-content-center align-items-center">
      <i @click="toggleActive" class="bi bi-x-lg"></i>
    </div>
    <div class="sub__contact__wrapper d-grid">
      <NuxtLink to="/" class="side-logo">
        <img src="~/assets/img/logo/logo-er-long-crop.png" alt="img" style="max-width: 100%; margin-left: -40px">
      </NuxtLink>
      <p>
        I'm Elvan Rafif, a Frontend Developer currently residing in the bustling city of Jakarta. Elvan operates globally and is ready to take on any development challenge.
      </p>
      <div class="sub__contact-left d-grid">
        <div class="sub__contac-item">
          <div class="content">
            <span class="address d-block">
              address
            </span>
            <span class="textp">
              South Jakarta, Indonesia
            </span>
          </div>
        </div>
        <div class="sub__contac-item">
          <div class="content">
            <span class="address d-block">
              email
            </span>
            <a href="mailto:matias999@.com" class="textp">
              muhammadelvanrafif@gmail.com
            </a>
          </div>
        </div>
        <!-- <div class="sub__contac-item">
          <div class="content">
            <span class="address d-block">
              call now
            </span>
            <a href="tel:+62 9357 9883" class="textp">
              +62 857 9357 9883
            </a>
          </div>
        </div> -->
      </div>
      <div class="sub__contact-right mb-100 position-relative">
        <ul class="social d-flex gap-3">
          <li>
            <NuxtLink target="_blank" to="https://www.linkedin.com/in/muhammad-elvan-8457b3119/">
              <i class="bi bi-linkedin"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://www.instagram.com/elvanrff/">
              <i class="bi bi-instagram"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://www.facebook.com/elvanrff">
              <i class="bi bi-facebook"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://www.twitter.com/elvanrff">
              <i class="bi bi-twitter"></i>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- <a href="#" class="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
        <span>
          <i class="bi bi-chevron-right"></i>
        </span>
        <span class="get__text">
          Let's Talk
        </span>
      </a> -->
    </div>
  </div>
  <!--<<  sub side bar custom >>-->
</template>

 