

<template>
  <!--<< blog >>-->
  <section class="blog__bsection pb-120">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8">
          <div class="blog__bleft__wrapper">
            <div class="blog__bitem mb__cus50" data-aos="fade-up" data-aos-duration="1000">
              <NuxtLink to="/blog-details" class="thumb">
                <img src="~/assets/img/blog/bblog1.png" alt="img">
              </NuxtLink>
              <div class="content">
                <span class="bdate d-flex align-items-center gap-1 ptext fz-16">
                  <span class="text-uppercase text-white">
                    NEWS
                  </span>
                  . October 19, 2023
                </span>
                <h3>
                  <NuxtLink to="/blog-details">
                    Brand design that helps the company grow
                  </NuxtLink>
                </h3>
                <p class="fz-16 ptext">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words
                </p>
                <NuxtLink to="/blog-details"
                  class="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
                  <span class="get__text">
                    Read More
                  </span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="blog__bitem mb__cus50" data-aos="fade-up" data-aos-duration="1000">
              <NuxtLink to="/blog-details" class="thumb">
                <img src="~/assets/img/blog/bblog2.png" alt="img">
              </NuxtLink>
              <div class="content">
                <span class="bdate d-flex align-items-center gap-1 ptext fz-16">
                  <span class="text-uppercase text-white">
                    NEWS
                  </span>
                  . October 19, 2023
                </span>
                <h3>
                  <NuxtLink to="/blog-details">
                    Fresh design ideas & inspiration for 2023
                  </NuxtLink>
                </h3>
                <p class="fz-16 ptext">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words
                </p>
                <NuxtLink to="/blog-details"
                  class="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
                  <span class="get__text">
                    Read More
                  </span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="blog__bitem mb__cus50" data-aos="fade-up" data-aos-duration="1000">
              <NuxtLink to="/blog-details" class="thumb">
                <img src="~/assets/img/blog/bblog3.png" alt="img">
              </NuxtLink>
              <div class="content">
                <span class="bdate d-flex align-items-center gap-1 ptext fz-16">
                  <span class="text-uppercase text-white">
                    NEWS
                  </span>
                  . October 19, 2023
                </span>
                <h3>
                  <NuxtLink to="/blog-details">
                    Features of creating a company identity
                  </NuxtLink>
                </h3>
                <p class="fz-16 ptext">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words
                </p>
                <NuxtLink to="/blog-details"
                  class="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
                  <span class="get__text">
                    Read More
                  </span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="blog__bitem mb__cus50" data-aos="fade-up" data-aos-duration="1000">
              <NuxtLink to="/blog-details" class="thumb">
                <img src="~/assets/img/blog/bblog4.png" alt="img">
              </NuxtLink>
              <div class="content">
                <span class="bdate d-flex align-items-center gap-1 ptext fz-16">
                  <span class="text-uppercase text-white">
                    NEWS
                  </span>
                  . October 19, 2023
                </span>
                <h3>
                  <NuxtLink to="/blog-details">
                    Brand design that helps the company grow
                  </NuxtLink>
                </h3>
                <p class="fz-16 ptext">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words
                </p>
                <NuxtLink to="/blog-details"
                  class="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
                  <span class="get__text">
                    Read More
                  </span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="pagination__box cmn__bg">
              <ul class="pagi">
                <li>
                  <NuxtLink to="#">
                    1
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    2
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    3
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    <i class="bi bi-chevron-right"></i>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog__bright__bar">
            <div class="scope__item mb__cus60">
              <h4 class="scope__title">
                Serach
              </h4>
              <form @submit.prevent class="d-flex align-content-center justify-content-between">
                <input type="text" placeholder="Search">
                <button type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div class="scope__item mb__cus60 position-relative">
              <h4 class="scope__title">
                Categories
              </h4>
              <ul class="category">
                <li>
                  <NuxtLink to="#" class="d-flex align-items-center justify-content-between">
                    <span class="fz-18 ptext">
                      Creative
                    </span>
                    <span class="arrow">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="d-flex align-items-center justify-content-between">
                    <span class="fz-18 ptext">
                      Business
                    </span>
                    <span class="arrow">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="d-flex align-items-center justify-content-between">
                    <span class="fz-18 ptext">
                      Design
                    </span>
                    <span class="arrow">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="d-flex align-items-center justify-content-between">
                    <span class="fz-18 ptext">
                      Marketing
                    </span>
                    <span class="arrow">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="d-flex align-items-center justify-content-between">
                    <span class="fz-18 ptext">
                      Lifestyle
                    </span>
                    <span class="arrow">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="scope__item mb__cus60">
              <h4 class="scope__title">
                Recent Post
              </h4>
              <ul class="recent__post">
                <li>
                  <NuxtLink to="/blog-details" class="recent__innter">
                    <img src="~/assets/img/blog/bsmall1.png" alt="img">
                    <div class="cont__box">
                      <span class="retitle">
                        The Main Thing For The
                        Designer
                      </span>
                      <span class="base fz-16 d-flex align-items-center gap-2">
                        <i class="bi bi-clock"></i>
                        October 19, 2023
                      </span>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog-details" class="recent__innter">
                    <img src="~/assets/img/blog/bsmall2.png" alt="img">
                    <div class="cont__box">
                      <span class="retitle">
                        The services provide for
                        design
                      </span>
                      <span class="base fz-16 d-flex align-items-center gap-2">
                        <i class="bi bi-clock"></i>
                        October 19, 2023
                      </span>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog-details" class="recent__innter">
                    <img src="~/assets/img/blog/bsmall3.png" alt="img">
                    <div class="cont__box">
                      <span class="retitle">
                        The Main Thing For The
                        Designer
                      </span>
                      <span class="base fz-16 d-flex align-items-center gap-2">
                        <i class="bi bi-clock"></i>
                        October 19, 2023
                      </span>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="scope__item">
              <h4 class="scope__title">
                Tag
              </h4>
              <ul class="tags">
                <li>
                  <NuxtLink to="#">
                    Business
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Digital
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Audio Post
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Gallery Post
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Marketing
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Agency
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Graphic
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    Web Development
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< blog >>-->
</template>

 