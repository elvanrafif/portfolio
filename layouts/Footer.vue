<template>
  <!--<< Footer >>-->
  <footer class="footer__section">
    <!-- <div class="container">
      <div class="footer__top pt-120 pb-120">
        <div class="fl" data-aos="fade-up" data-aos-duration="1000">
          Get In Touch
        </div>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="get__content">
              <p>
                Hello, I'm Elvan Rafif, FrontEnd
                Developer based in Jakarta.
              </p>
              <a href="mailto:muhammadelvanrafif@gmail.com">muhammadelvanrafif@gmail.com</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="get__rightcontetn">
              <div class="row g-4">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <NuxtLink target="_blank" to="https://www.facebook.com/elvanrff" class="social__footer">
                    Facebook
                    <i class="bi bi-arrow-right"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <NuxtLink target="_blank" to="https://www.instagram.com/elvanrff" class="social__footer">
                    Instagram
                    <i class="bi bi-arrow-right"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <NuxtLink target="_blank" to="https://www.dribble.com" class="social__footer">
                    Dribble
                    <i class="bi bi-arrow-right"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <NuxtLink target="_blank" to="https://www.webflow.com" class="social__footer">
                    Webflow
                    <i class="bi bi-arrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="footer__bottom cmn__bg">
      <div class="container">
        <div class="copyright">
          <p class="white">
            Copyright © {{ new Date().getFullYear() }}
            <NuxtLink to="/" class="base">Elvan.</NuxtLink> All rights reserved.
          </p>
          <!-- <ul class="terms">
            <li>
              <a href="#">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#">
                Privacy Policy
              </a>
            </li>
          </ul> -->
          <NuxtLink to="/#about" class="toparrow">
            <i class="bi bi-arrow-up-short"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
  <!--<< Footer >>-->
</template>
 