<script setup>
import { ref } from 'vue'

const buttons = ['About Me', 'Experience', 'Education', 'Skills'];
const activeIndex = ref(0);

const toggleActive = (index) => {
  activeIndex.value = index;


};

const skills = ref([
  // -- Core Languages (Fondasi Web) --
  { name: 'Typescript', img: 'ts' },
  { name: 'Javascript', img: 'js' },
  { name: 'HTML', img: 'html' },
  { name: 'CSS', img: 'css' },

  // -- FE Frameworks & Libraries --
  { name: 'React', img: 'react' },
  { name: 'Next', img: 'next' },
  { name: 'Vue', img: 'vue' },
  { name: 'Gatsby', ext_img: 'gatsby' },

  // -- State Management & Data Fetching (FE) --
  { name: 'Redux', img: 'redux' },
  { name: 'React Query', ext_img: 'react_query' },

  // -- Styling & CSS Frameworks (FE) --
  { name: 'Tailwind', img: 'tailwind' },
  { name: 'Bootstrap', img: 'bootstrap' },
  { name: 'ShadCn UI', ext_img: 'shadcn_ui' },

  // -- Build Tools & Bundlers (FE) --
  { name: 'Vite', ext_img: 'vite' },

  // -- Back-End (Server Side) --
  { name: 'Node', img: 'nodejs' },
  { name: 'Express', img: 'expressjs' },

  // -- Mobile Development --
  { name: 'React Native', img: 'react-native' },
  { name: 'Android Studio', ext_img: 'android_studio' },
  { name: 'Xcode', ext_img: 'xcode' },

  // -- Deployment & Hosting --
  { name: 'Vercel', img: 'vercel' },
  { name: 'Netlify', img: 'netlify' },

  // -- Tools & Utilities --
  { name: 'VSCode', ext_img: 'visual_studio_code' },
  { name: 'Git', img: 'git' },
  { name: 'NPM', img: 'npm' },
  { name: 'Yarn', ext_img: 'yarn' },
  { name: 'Postman', ext_img: 'postman' },
  { name: 'Jira', ext_img: 'jira' },

  // -- Lainnya --
  { name: 'Others', img: '' },
]);



</script>


<template>
  <!--<< about personal >>-->
  <section class="about__section pt-120 pb-120" id="about">
    <div class="container">
      <div class="personal__head text-center">
        <img src="~/assets/img/about/section-star.png" class="mb-30" alt="star" data-aos="fade-up"
          data-aos-duration="1000">
        <p class="descrp" data-aos="fade-up" data-aos-duration="1500">
          I'm Elvan Rafif, a Frontend Developer currently residing in the bustling city of Jakarta. Elvan operates
          globally and is ready to take on any development challenge.
        </p>
      </div>



      <div class="singletab">
        <ul class="tablinks">
          <li v-for="(button, i) in buttons" :key="i" :class="`nav-links ${i === activeIndex ? 'active' : ''}`"
            @click="toggleActive(i)">
            <button class="tablink">{{ button }}</button>
          </li>
        </ul>
        <div class="tabcontents">

          <div :class="`tabitem ${activeIndex === 0 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb" data-aos="zoom-in" data-aos-duration="500">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2 class="h2-head" data-aos="fade-up" data-aos-duration="500">
                      Personal Info
                    </h2>
                    <p class="p-descrip" data-aos="fade-up" data-aos-duration="500">
                      Ready to take your project to the next level? Whether it's building a sleek web app or optimizing
                      your current site, I'm here to help. Drop me a line, and let's create something awesome together!
                    </p>
                    <div class="about__contactwrap">
                      <div class="row g-4">
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Email
                              </span>
                              <a href="#" style="font-size: 16px;">
                                muhammadelvanrafif@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <!-- <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Phone
                              </span>
                              <a href="#">
                                +(62) 857 9357 9883
                              </a>
                            </div>
                          </div>
                        </div> -->
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Address
                              </span>
                              <a href="#">
                                South Jakarta, Indonesia
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in">
                          <div class="abox text-center">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Follow
                              </span>
                              <ul class="d-flex justify-content-center align-items-center gap-2 gap-xl-4">
                                <li>
                                  <NuxtLink target="_blank" to="https://linkedin.com/in/muhammad-elvan-8457b3119/" aria-label="LinkedIn"> <i class="bi bi-linkedin"></i>
                                  </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://facebook.com/elvanrff" aria-label="Facebook"> <i class="bi bi-facebook"></i>
                                  </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://twitter.com/elvanrff" aria-label="Twitter"> <i class="bi bi-twitter"></i>
                                  </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://instagram.com/elvanrff" aria-label="Instagram"> <i class="bi bi-instagram"></i>
                                  </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://elvanrff.com" aria-label="Website"> <i class="bi bi-globe"></i>
                                  </NuxtLink>
                                </li>
                                
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 1 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Experience
                    </h2>
                    <p>
                      With 5 years as a Frontend Developer in a financial technology startup, I've crafted numerous
                      high-quality products. My focus is on creating intuitive and engaging user experiences, ensuring
                      every project meets and exceeds expectations.
                    </p>
                    <div class="exprience__box mt-30">
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2021 - 2022
                        </span>
                        <div class="expri__cont">
                          <p class="mb-15 text-white fz-24">
                            Jr. Software Engineer
                          </p>
                          <p class="fz-18 pra d-block text-end">
                            Transfez
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2022 - present
                        </span>
                        <div class="expri__cont">
                          <p class="mb-15 text-white fz-24">
                            Software Engineer
                          </p>
                          <p class="fz-18 pra d-block text-end">
                            Transfez & Jack
                          </p>
                        </div>
                      </div>
                      <!-- <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          In 2023
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Senior UI Designer
                          </h4>
                          <p class="fz-18 pra d-block">
                            Fiverr.com
                          </p>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 2 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Education
                    </h2>
                    <p>
                      I graduated with a degree in Computer Science and then boosted my skills by completing a bootcamp.
                      My studies gave me a solid tech foundation, and the bootcamp added hands-on experience with the
                      latest tools and trends. Now, I'm well-equipped to tackle real-world tech challenges.
                    </p>
                    <div class="exprience__box mt-30">
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2013-2017
                        </span>
                        <div class="expri__cont">
                          <p class="mb-15 text-white  text-end fz-24">
                            Information Systems
                          </p>
                          <p class="fz-18 pra d-block text-end">
                            Computer Science at Gunadarma University
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2020
                        </span>
                        <div class="expri__cont">
                          <p class="mb-15 text-white text-end fz-24">
                            Bootcamp Fullstack Javascript
                          </p>
                          <p class="fz-18 pra d-block text-end">
                            Hacktiv8
                          </p>
                        </div>
                      </div>
                      <!-- <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2016-2018
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Web Design Course
                          </h4>
                          <p class="fz-18 pra d-block">
                            New York University
                          </p>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 3 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Skills
                    </h2>
                    <p>
                      To bring intuitive and efficient applications to life, I rely on the following set of technologies and tools. This list covers not only my core tech stack for day-to-day coding but also the various supporting software—from design to deployment—that ensures a smooth, end-to-end development process.
                    </p>
                    <div class="about__contactwrap">
                      <div class="row">
                        <div v-for="(skill, index) in skills" :key="index"
                          class="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-4">
                          <div class="abox myskill__item">
                            <div class="mys">
                              <span class="ptext fz-14 mb-15 flex-nowrap truncate-text">
                                {{ skill.name }}
                              </span>
                            </div>
                            <img v-if="skill.ext_img"
                              :src="`https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/${skill.ext_img}.png`"
                              :alt="skill.name" class="skill-icon external-img" style="width: 32px; height: 32px;" />
                            <i v-else :class="[`ci-${skill.img}`, 'ci', 'ci-2x']"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  </section>
  <!--<< about personal >>-->
</template>
<style>
.truncate-text {
  /* Mencegah teks turun ke baris baru */
  white-space: nowrap;

  /* Menyembunyikan teks yang melebihi lebar kontainer */
  overflow: hidden;

  /* Menampilkan '...' pada teks yang terpotong */
  text-overflow: ellipsis;

  /* Opsional tapi direkomendasikan: pastikan elemen memiliki batasan lebar */
  display: block;
  width: 100%;
}
</style>