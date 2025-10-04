

<script setup>


// video popup
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/cuA_ZDb-QDk?si=MlPxBV05EDKHnvIk';

if(typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}


</script>


<template>
  <!--<< service details >>-->
  <section class="service__details overhid pb-120">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8">
          <div class="ser__left__details">
            <div class="thumb">
              <img src="~/assets/img/project/ser-dv1.png" alt="img">
            </div>
            <div class="text__box mb__cus60" data-aos="fade-up" data-aos-duration="1400">
              <h3 class="textt36 d-block">
                About Business Branding Service
              </h3>
              <p class="fz-16 pra ttext__one">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
              </p>
              <p class="fz-16 pra">
                Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                fugiat quo voluptas nulla the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
              </p>
            </div>
            <div class="text__box mb__cus60" data-aos="fade-up" data-aos-duration="1400">
              <h3 class="textt36 d-block">
                Specialization & Working Process
              </h3>
              <p class="fz-16 pra">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                the generators on the Internet tend to repeat predefined chunks as necessary,
                Making this the first true generator on the Internet. It uses a dictionary of over combined with a handful
                of structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                always free from injected humour, or non-characteristic words etc.
              </p>
            </div>
            <div class="paythumb position-relative">
              <img src="~/assets/img/project/ser-dv2.png" alt="img">
              <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" class="video__80 video-btn">
                <i class="bi bi-play-fill"></i>
              </a>
            </div>
            <div class="ser__components">
              <h2 class="whites mb-5">
                Questions ? You're Covered
              </h2>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cmnid4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapsecmn4" aria-expanded="true" aria-controls="collapsecmn4">
                      <span>
                        Simple process for workflow?
                      </span>
                      <i class="bi bi-arrow-down"></i>
                    </button>
                  </h2>
                  <div id="collapsecmn4" class="accordion-collapse collapse" aria-labelledby="cmnid4"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet. It uses a dictionary of over words, combined
                        with a handful of model structures, to generate Lorem Ipsum which looks reasonable.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cmnid5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapsecmn5" aria-expanded="false" aria-controls="collapsecmn5">
                      <span>
                        Unique brand identity and strategy
                      </span>
                      <i class="bi bi-arrow-down"></i>
                    </button>
                  </h2>
                  <div id="collapsecmn5" class="accordion-collapse collapse" aria-labelledby="cmnid5"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet. It uses a dictionary of over words, combined
                        with a handful of model structures, to generate Lorem Ipsum which looks reasonable.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cmnid6">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapsecmn6" aria-expanded="false" aria-controls="collapsecmn6">
                      <span>
                        Tailor-made digital products
                      </span>
                      <i class="bi bi-arrow-down"></i>
                    </button>
                  </h2>
                  <div id="collapsecmn6" class="accordion-collapse collapse" aria-labelledby="cmnid6"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet. It uses a dictionary of over words, combined
                        with a handful of model structures, to generate Lorem Ipsum which looks reasonable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="service__right__wrap">
            <div class="service__rightbox mb-30">
              <h3>
                Service List
              </h3>
              <a href="#" class="link__box mb-15">
                Illustration Design
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="#" class="link__box mb-15">
                Business Branding
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="#" class="link__box mb-15">
                Web UI/UX Design
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="#" class="link__box mb-15">
                Application Design
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="#" class="link__box mb-15">
                Digital Marketing
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="#" class="link__box">
                Web Development
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
            <div class="service__rightbox">
              <div class="thumb">
                <img src="~/assets/img/contact/ser-detialcontact.png" alt="img">
                <a href="#" class="cmn--btn">
                  <span>
                    Contact Me
                  </span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< service details >>-->


  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/cuA_ZDb-QDk?si=MlPxBV05EDKHnvIk" />

</template>

 