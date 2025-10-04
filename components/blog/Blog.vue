

<script>
import ImagePopup from "~/components/common/ImagePopup.vue";
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

import blog_img from "~/assets/img/blog/opa-blog.png";



export default {
  components: {
    ImagePopup
  },
  data() {
    return {
      blog_data: [
        {
          id: 1,
          duration: "1000",
          img: blog_img,
          time: "Sept 19, 2023",
          title: "Brand design that helps the company grow",
        },
        {
          id: 2,
          duration: "1400",
          img: blog_img,
          time: "Sept 19, 2023",
          title: "Brand design that helps the company grow",
        },
        {
          id: 3,
          duration: "1800",
          img: blog_img,
          time: "Sept 19, 2023",
          title: "Brand design that helps the company grow",
        },
      ]
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
  <!--<< blog >>-->
  <section class="blog__section overhid pt-120 pb-120">
    <div class="container">
      <div class="row g-4">
        <div class="col-xl-4 col-lg-3">
          <div class="project__head">
            <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
              My Blogs
            </span>
            <h2 class="fw-500 mt-3" data-aos="fade-down" data-aos-duration="1500">
              Recent Posts
            </h2>
            <div class="blog__hoverbox">
              <NuxtLink to="/blog" class="hover__circle wow fadeInUp" data-wow-duration="1.6s">
                <span class="box">
                  <i class="bi bi-arrow-up-right"></i>
                  <span class="textmore">
                    Click More Work
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-9">
          <div class="blog__rightwrap">
            <div class="service__uniquewrap">


              <div v-for="(item, i) in blog_data" :key="i" class="service__unique__item pb-40 pt-40" data-aos="fade-up"
                :data-aos-duration="item.duration">
                <div class="left__service">
                  <div class="serial__adjust">
                    <div class="cont">
                      <span class="dates">
                        {{ item.time }}
                      </span>
                      <h3>
                        <NuxtLink to="/blog">
                          {{ item.title }}
                        </NuxtLink>
                      </h3>
                    </div>
                  </div>
                  <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="opa__thumb imgc">
                    <img :src="item.img" alt="img-opa">
                  </a>
                </div>
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="common__icon imgc">
                  <i class="bi bi-eye"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< blog >>-->



  <!-- image popup start -->
  <ImagePopup ref="image_popup" :images="blog_data.map((item) => item.img)" />
  <!-- image popup end -->
</template>
