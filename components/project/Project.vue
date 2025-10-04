<script>
import ImagePopup from "~/components/common/ImagePopup.vue";
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

import project_img_1 from "~/assets/img/project/pro1.png";
import project_img_2 from "~/assets/img/project/pro3.png";
import project_img_3 from "~/assets/img/project/pro5.png";
import project_img_4 from "~/assets/img/project/pro2.png";
import project_img_5 from "~/assets/img/project/pro4.png";
import project_img_6 from "~/assets/img/project/pro6.png";



export default {
  components: {
    ImagePopup
  },
  data() {
    return {
      project_left_data: [
        {
          id: 1,
          duration: "1000",
          cls: "cus__mb60",
          img: project_img_1,
          category: "Product Design",
          title: "Brand Identity & Motion Design",
        },
        {
          id: 2,
          duration: "1000",
          cls: "cus__mb60",
          img: project_img_2,
          category: "Product Design",
          title: "Design & Branding Mokeup",
        },
        {
          id: 3,
          duration: "1000",
          cls: "",
          img: project_img_3,
          category: "Ui/ux Design",
          title: "Mobile Application Development",
        },

      ],
      project_right_data: [
        {
          id: 1,
          duration: "2200",
          cls: "cus__mb60",
          img: project_img_4,
          category: "Creative",
          title: "Paper & Book Covers Design",
        },
        {
          id: 2,
          duration: "2200",
          cls: "cus__mb60",
          img: project_img_5,
          category: "Design & Branding",
          title: "Creative Graphics Design",
        },
        {
          id: 3,
          duration: "1000",
          cls: "",
          img: project_img_6,
          category: "MOCKUP DESIGN",
          title: "Brand Identity & Motion Design",
        },

      ],
    }
  },
  methods: {
    handleImagePopup(index) {
      this.$refs.image_popup.showImg(index);
    }
  },
}

</script>


<template>
  <!--<< project one >>-->
  <section class="project__section pt-120 pb-120" id="prot">
    <div class="container">
      <div class="project__head text-center">
        <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
          Complete Project
        </span>
        <h2 class="fw-500" data-aos="fade-down" data-aos-duration="2000">
          Look at my portfolio and give me
          your feedback
        </h2>
      </div>
      <div class="row g-4">
        <div class="col-lg-6 col-md-6">
          <div class="project__wrapone">


            <div v-for="(item, i) in project_left_data" :key="i" :class="`project__item ${item.cls}`" data-aos="fade-up"
              :data-aos-duration="item.duration">
              <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="thumb mb-30 imgc">
                <img :src="item.img" alt="img">
              </a>
              <div class="content d-flex align-items-center justify-content-between gap-2">
                <NuxtLink to="/portfolio" class="left__cont">
                  <span class="base mb-2 mb-xxl-3 d-block text-uppercase">
                    {{ item.category }}
                  </span>
                  <h3>
                    {{ item.title }}
                  </h3>
                </NuxtLink>
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="common__icon imgc">
                  <i class="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>



          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="project__wraptwo">

            <div v-for="(item, i) in project_right_data" :key="i" 
              :class="`project__item ${item.cls}`" data-aos="fade-up" :data-aos-duration="item.duration">
              <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="thumb mb-30 imgc">
                <img :src="item.img" alt="img">
              </a>
              <div class="content d-flex align-items-center justify-content-between gap-2">
                <NuxtLink to="/portfolio" class="left__cont">
                  <span class="base mb-2 mb-xxl-3 d-block text-uppercase">
                    {{ item.category }}
                  </span>
                  <h3>
                    {{ item.title }}
                  </h3>
                </NuxtLink>
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="common__icon imgc">
                  <i class="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
 

          </div>
        </div>
      </div>
      <div class="custom__hover">
        <NuxtLink to="/portfolio-details" class="hover__circle mauto" data-aos="zoom-out-down" data-aos-duration="2000">
          <span class="box">
            <i class="bi bi-arrow-up-right"></i>
            <span class="textmore">
              Click More Work
            </span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
  <!--<< project one >>-->


  <!-- image popup start -->
  <ImagePopup ref="image_popup" :images="project_left_data.map((item) => item.img)" />
  <ImagePopup ref="image_popup" :images="project_right_data.map((item) => item.img)" />
  <!-- image popup end -->
</template>
 