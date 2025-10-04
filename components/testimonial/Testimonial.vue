
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";


</script>


<template>
  <!--<< testimonial >>-->
  <section class="testimonial__section pt-120 pb-120" id="testi">
    <div class="container">
      <div class="project__head text-center">
        <span class="common__sub" data-aos="fade-up" data-aos-duration="1000">
          Testimonial
        </span>
        <h2 class="fw-500" data-aos="fade-down" data-aos-duration="1000">
          Happy Words From Happy
          <span class="d-block">
            Customer
          </span>
        </h2>
      </div>
      <div class="testimonial__v1wrap pb-120" data-aos="fade-up" data-aos-duration="1000">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <Swiper  
            :loop="true" 
            :autoplay="{ delay: 3000 }" 
            :modules="[Autoplay, Pagination]" 
            :pagination="{
              el: '.swiper-pagination3',
              clickable: true,
            }"
              class="swiper testimonial__slidewrap custom_dot">

              <SwiperSlide class="test__slide swiper-slide">
                <div class="d-flex mb-40 align-items-center gap-2">
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised
                  words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                  need to be hidden in middle of text. All the Lorem Ipsum generators
                </p>
                <h4 class="base mb-2">
                  Shawn Beltran
                </h4>
                <span class="fz-18 ptext">
                  Business Owner
                </span>
              </SwiperSlide>
              <SwiperSlide class="test__slide swiper-slide">
                <div class="d-flex mb-40 align-items-center gap-2">
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised
                  words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                  need to be hidden in middle of text. All the Lorem Ipsum generators
                </p>
                <h4 class="base mb-2">
                  John Methcel
                </h4>
                <span class="fz-18 ptext">
                  Business Owner
                </span>
              </SwiperSlide>
              <SwiperSlide class="test__slide swiper-slide">
                <div class="d-flex mb-40 align-items-center gap-2">
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                  <i class="bi bi-star-fill ratting fz-20"></i>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised
                  words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                  need to be hidden in middle of text. All the Lorem Ipsum generators
                </p>
                <h4 class="base mb-2">
                  Nethon Jr
                </h4>
                <span class="fz-18 ptext">
                  Business Owner
                </span>
              </SwiperSlide> 

              <div class="swiper-pagination3"></div>
            </Swiper>
          </div>
        </div>
        <div class="quote">
          <img src="~/assets/img/testimonial/quote.png" alt="img">
        </div>
        <div class="man1">
          <img src="~/assets/img/testimonial/man1.png" alt="img">
        </div>
        <div class="man2">
          <img src="~/assets/img/testimonial/man3.png" alt="img">
        </div>
        <div class="man3">
          <img src="~/assets/img/testimonial/man2.png" alt="img">
        </div>
        <div class="test__shape">
          <img src="~/assets/img/testimonial/testi-arrow.png" alt="img">
        </div>
      </div>
      <div class="sponsor__area pt-120">
        <h4 class="sponsor__title" data-aos="fade-down" data-aos-duration="1000">
          More than 100+ companies trusted us worldwide
        </h4>
        <Swiper :loop="true" :slides-per-view="5" :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 5,
          },
        }" class="swiper sponsor__wrap">

          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner1.png" alt="img">
          </SwiperSlide>
          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner2.png" alt="img">
          </SwiperSlide>
          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner3.png" alt="img">
          </SwiperSlide>
          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner4.png" alt="img">
          </SwiperSlide>
          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner6.png" alt="img">
          </SwiperSlide>
          <SwiperSlide class="sponsor__slide swiper-slide">
            <img src="~/assets/img/testimonial/partner2.png" alt="img">
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  </section>
  <!--<< testimonial >>-->
</template>

 