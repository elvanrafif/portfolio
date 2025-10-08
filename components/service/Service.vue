<script setup>
import { ref } from 'vue';

const services = ref([
  {
    category: 'Development',
    title: 'Front-End Development',
    description: 'Crafting responsive, intuitive, and visually engaging user interfaces with modern web technologies to deliver the best possible user experience.'
  },
  {
    category: 'Development',
    title: 'Web Applications',
    description: 'Building complex and dynamic web applications from the ground up, ranging from internal management systems to public-facing interactive platforms.'
  },
  {
    category: 'Architecture',
    title: 'Single Page Applications (SPA)',
    description: 'Developing fast and fluid single-page applications that feel like a native desktop app, providing a seamless user experience without page reloads.'
  },
  {
    category: 'Architecture',
    title: 'Jamstack Development',
    description: 'Creating blazing-fast, secure, and highly scalable websites using modern Jamstack architecture for superior performance and reliability.'
  },
  {
    category: 'Development',
    title: 'Cross-Platform Development',
    description: 'Building applications that run on multiple platforms (web, desktop, or mobile) from a single codebase, saving development time and costs.'
  },
  {
    category: 'Integration',
    title: 'API Integration',
    description: 'Connecting your application with third-party services, backend systems, or external data sources through APIs to enrich functionality.'
  },
  {
    category: 'Optimization',
    title: 'Performance Optimization',
    description: 'Analyzing and improving your website\'s load speed and responsiveness for a superior user experience and better SEO rankings.'
  }
]);

// Helper function for leading zero format (01, 02, etc.)
const formatIndex = (index) => {
  return String(index + 1).padStart(2, '0');
};
</script>

<template>
  <!--<< service >>-->
  <section id="services" class="service__section overhid pt-120 pb-120">
    <div class="container">
      <div class="project__head text-center">
        <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
          Services That i Provide
        </span>
        <h2 class="fw-500" data-aos="fade-up" data-aos-duration="1200">
          Let's Build Something Great Together.
        </h2>
      </div>
      <div class="service__uniquewrap">

        <!-- Gunakan v-for untuk loop data dari array services -->
        <div v-for="(service, index) in services" :key="service.title" class="service__unique__item pb-40 pt-40"
          data-aos="fade-up" :data-aos-duration="1000 + (index * 200)">
          <div class="left__service">
            <div class="serial__adjust">
              <span>
                <!-- Nomor urut dinamis -->
                {{ formatIndex(index) }}
              </span>
              <div class="cont">
                <h5>
                  <!-- Kategori dinamis -->
                  {{ service.category }}
                </h5>
                <h2>
                  <!-- <NuxtLink to="/service"> -->
                    <!-- Judul dinamis -->
                    {{ service.title }}
                  <!-- </NuxtLink> -->
                </h2>
              </div>
            </div>
            <p class="pra">
              <!-- Deskripsi dinamis -->
              {{ service.description }}
            </p>
          </div>
          <!-- <NuxtLink to="/service" class="common__icon">
            <i class="bi bi-arrow-up-right"></i>
          </NuxtLink> -->
        </div>

      </div>
    </div>
  </section>
  <!--<< service >>-->
</template>