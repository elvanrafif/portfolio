<script setup>
import { ref } from 'vue';

const skills = ref([
    { name: 'Front-End Development' },
    { name: 'Web Applications' },
    { name: 'Single Page Applications (SPA)' },
    { name: 'Jamstack Development' },          // Ditambahkan sesuai permintaan
    { name: 'Cross-Platform Development' },    // Menggantikan 'Mobile App Development'
    { name: 'API Integration' },
    { name: 'Performance Optimization' },
]);</script>

<template>
    <!--<< text slide v1 >>-->
    <!-- <div class="marquee-wrapper text-slider">
        <div class="marquee-inner to-left">
            <ul class="marqee-list d-flex">
                <li class="marquee-item">
                    <img src="~/assets/img/banner/ts1.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts2.png" alt="text-slide"></span>
                    <img src="~/assets/img/banner/ts3.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts4.png" alt="text-slide"></span>
                    <img src="~/assets/img/banner/ts1.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts2.png" alt="text-slide"></span>
                    <img src="~/assets/img/banner/ts3.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts4.png" alt="text-slide"></span>
                    <img src="~/assets/img/banner/ts1.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts2.png" alt="text-slide"></span>
                    <img src="~/assets/img/banner/ts3.png" alt="text-slide"> <span class="stroke-text"><img
                            src="~/assets/img/banner/ts4.png" alt="text-slide"></span>
                </li>
            </ul>
        </div>
    </div> -->
    <NuxtMarquee :speed="80" class="marquee__manual">
        <div v-for="skill in skills" :key="skill.name" class="marquee__manual" style="overflow-y: hidden; display: flex; align-items: center;">
            <h1 class="marquee-text-item" style='font-size: 36px;'>
                {{ skill.name }}
            </h1>
            <img src="~/assets/img/about/section-star.png" alt="star" data-aos="fade-up" data-aos-duration="1000">
        </div>
        <!-- <h1>Landing Page</h1>
        <h1>Single Page Application</h1>
        <img src="~/assets/img/about/section-star.png" alt="star" data-aos="fade-up" data-aos-duration="1000">
        <h1>Website Application</h1>
        <img src="~/assets/img/about/section-star.png" alt="star" data-aos="fade-up" data-aos-duration="1000">
        <h1>Mobile Application</h1>
        <img src="~/assets/img/about/section-star.png" alt="star" data-aos="fade-up" data-aos-duration="1000"> -->


        <!-- <MyComponent />
        <MyComponent />
        <MyComponent /> -->
    </NuxtMarquee>
    <!--<< text slide v1 >>-->
</template>
