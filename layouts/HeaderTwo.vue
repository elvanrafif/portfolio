

<script setup>


const showSidebar = ref(false)
const toggleActive = () => {
  showSidebar.value = !showSidebar.value
}

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// active menu
const isSticky = ref(false);
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});


const props = defineProps({
  title: String,
  subtitle: String,
})



</script>


<template>
  <CommonSidebar :showSidebar="showSidebar" :toggleActive="toggleActive" />

  <!--<< banner >>-->
  <section class="breadcrumnd__section">
    <!--<< Header v-1 >>-->
    <header :class="`header-section ${isSticky ? 'menu-fixed' : ''}`">
      <div class="container">
        <div class="header-wrapper">

          <div class="main__logo" style="text-align: center;">
            <NuxtLink to="/" class="logo">
              <img src="~/assets/img/logo/logo-er.png" alt="logo" style="max-width: 100px;">
            </NuxtLink>
          </div>
          <ul :class="`main-menu ${showMenu ? 'active' : ''}`">
            <li>
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/#about" aria-label="About">
                About
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink href="/#prot">
                Work
              </NuxtLink>
            </li> -->
            <li>
              <NuxtLink to="/#services" aria-label="Services">
                Services
              </NuxtLink>
              <!-- <ul class="sub-menu">
                <li>
                  <NuxtLink to="/service">
                    Service
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/service-details">
                    Service Details
                  </NuxtLink>
                </li>
              </ul> -->
            </li>
            <!-- <li>
              <NuxtLink to="/#testi">
                Testimonial
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#">
                Blog
              </NuxtLink>
              <ul class="sub-menu">
                <li class="subtwohober">
                  <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog-details">Blog Details</NuxtLink>
                </li>
              </ul>
            </li> -->
            <li>
              <NuxtLink to="/contact" aria-label="Contact">
                Contact
              </NuxtLink>
            </li>
          </ul>

          <div class="menu__components d-flex align-items-center">
            <NuxtLink to="/contact" class="d-flex fw-500 cmn--btn align-items-center gap-2">
              <span class="get__text">
                Let's Talk
              </span>
              <span>
                <i class="bi bi-arrow-right fz-20"></i>
              </span>
            </NuxtLink>
            <div @click="toggleMenu" :class="`header-bar d-lg-none ${showMenu ? 'active' : ''}`">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div @click="toggleActive" class="remove__click">
              <i class="bi bi-list"></i>
            </div>
          </div>


        </div>
      </div>
    </header>
    <!--<< Header v-1 >>-->
    <div class="container pt-120 pb-120">
      <div class="row g-4 justify-content-center">
        <div class="col-lg-8">
          <div class="breadcrumnd__wrap text-center">
            <h1>
              {{ title }}
            </h1>
            <ul class="breakcrumnd__cont justify-content-center">
              <li>
                <NuxtLink to="/">
                  Home
                </NuxtLink>
              </li>
              <li class="white">
                /
              </li>
              <li class="base">
                {{ subtitle }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< banner >>-->
</template>

 