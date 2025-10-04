
<script setup>
import project_img_1 from "~/assets/img/project/pro1.png";
import project_img_2 from "~/assets/img/project/pro3.png";
import project_img_3 from "~/assets/img/project/pro5.png";

import project_img_4 from "~/assets/img/project/pro2.png";
import project_img_5 from "~/assets/img/project/pro4.png";
import project_img_6 from "~/assets/img/project/pro6.png";

const project_data = [
   {
    id: 1,
    category: "Branding-App",
    items: [
      {
        inner_item_1: [
          {
            id: 1,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_1,
            category: "Branding-App",
            subtitle: "Product Design",
            title: "Brand Identity & Motion Design",
          },
          {
            id: 2,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_2,
            category: "Branding-App",
            subtitle: "Product Design",
            title: "Brand Identity & Motion Design",
          },
          {
            id: 3,
            cls: "",
            duration: "1000",
            img: project_img_3,
            category: "Branding-App",
            subtitle: "Ui/ux Design",
            title: "Mobile Application Development",
          },

        ]
      },
      {
        inner_item_2: [
          {
            id: 4,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_4,
            category: "Branding-App",
            subtitle: "Creative",
            title: "Paper & Book Covers Design",
          },
          {
            id: 5,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_5,
            category: "Branding-App",
            subtitle: "Design & Branding",
            title: "Creative Graphics Design",
          },
          {
            id: 6,
            cls: "",
            duration: "1000",
            img: project_img_6,
            category: "Branding-App",
            subtitle: "MOCKUP DESIGN",
            title: "Brand Identity & Motion Design",
          },

        ]
      },

    ]
  },
  {
    id: 2,
    category: "Los-App",
    items: [
      // tab 02 Los-App
      {
        inner_item_1: [
          {
            id: 7,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_2,
            category: "Los-App",
            subtitle: "Product Design",
            title: "Design & Branding Mokeup",
          },
          {
            id: 8,
            cls: "",
            duration: "1000",
            img: project_img_3,
            category: "Los-App",
            subtitle: "Ui/ux Design",
            title: "Mobile Application Development",
          },

        ]

      },
      {
        inner_item_2: [
          {
            id: 9,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_5,
            category: "Los-App",
            subtitle: "Product Design",
            title: "Design & Branding Mokeup",
          },
          {
            id: 10,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_6,
            category: "Los-App",
            subtitle: "Ui/ux Design",
            title: "Mobile Application Development",
          },
        ]

      },
    ]
  },
  {
    id: 3,
    category: "Landing Page",
    items: [

      // tab 03 Landing Page 
      {
        inner_item_1: [
          {
            id: 11,
            cls: "",
            duration: "1000",
            img: project_img_3,
            category: "Landing Page",
            subtitle: "Ui/ux Design",
            title: "Mobile Application Development",
          },

        ]

      },
      {
        inner_item_2: [
          {
            id: 13,
            cls: "",
            duration: "1000",
            img: project_img_2,
            category: "Landing Page",
            subtitle: "MOCKUP DESIGN",
            title: "Brand Identity & Motion Design",
          },

        ]

      },
    ]
  },
  {
    id: 4,
    category: "Website",
    items: [
      // tab 04  Website
      {
        inner_item_1: [
          {
            id: 14,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_1,
            category: "Website",
            subtitle: "Product Design",
            title: "Brand Identity & Motion Design",
          },

          {
            id: 15,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_2,
            category: "Website",
            subtitle: "Ui/ux Design",
            title: "Design & Branding Mokeup",
          },

          {
            id: 16,
            cls: "",
            duration: "1000",
            img: project_img_5,
            category: "Website",
            subtitle: "Ui/ux Design",
            title: "Mobile Application Development",
          },

        ]
      },
      {
        inner_item_2: [
          {
            id: 17,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_4,
            category: "Branding-App",
            subtitle: "Creative",
            title: "Paper & Book Covers Design",
          },
          {
            id: 18,
            cls: "cus__mb60",
            duration: "1000",
            img: project_img_5,
            category: "Branding-App",
            subtitle: "Design & Branding",
            title: "Creative Graphics Design",
          },
          {
            id: 19,
            cls: "",
            duration: "1000",
            img: project_img_6,
            category: "Branding-App",
            subtitle: "MOCKUP DESIGN",
            title: "Brand Identity & Motion Design",
          },

        ]

      },
    ]
  },

]



const categories = [
  "All",
  ...new Set(project_data.map((item) => item.category)),
]; 

const activeCategory = ref("All");
const items = ref(project_data);


const filterItems = (cateItem) => {
  activeCategory.value = cateItem;

  if (cateItem === "All") {
    items.value = project_data;
  } else {
    const findItems = project_data.filter(
      (findItem) => findItem.category === cateItem
    );
    items.value = findItems;
  }
};



</script>



<template>
  <!--<< project one >>-->
  <section class="project__section pb-120">
    <div class="container">
      <div class="singletab protfolio__filter">
        <ul class="tablinks" data-aos="fade-down" data-aos-duration="2000">

          <li v-for="(item, i) in categories" :key="i" @click="filterItems(item)"
            :class="`nav-links ${item === activeCategory ? 'active' : ''}`">
            <button>
              {{ item }}
            </button> {{ ' ' }}
          </li>

        </ul>
        <div class="tabcontents">

          <div v-for="(item, i) in items" :key="i" class="tabitem active">
            <div class="prot__bximg">
              <div class="row g-4">

                <div  class="col-lg-6 col-md-6">
                  <div v-for="(inner_item, index) in item.items[0]" :key="index" class="project__wrapone">
                    <div  :class="`project__item ${inner_item[0].cls}`" data-aos="fade-up"
                      :data-aos-duration="inner_item[0].duration">
                     
                      <a href="#" class="thumb mb-30 imgc">
                        <img :src="inner_item[0].img" alt="img">
                      </a>
                      <div class="content d-flex align-items-center justify-content-between gap-2">
                        <NuxtLink to="/protfolio-details" class="left__cont">
                          <span class="base mb-2 mb-xxl-3 d-block text-uppercase">
                            {{ inner_item[0].subtitle }}
                          </span>
                          <h3>
                            {{ inner_item[0].title }}
                          </h3>
                        </NuxtLink>
                        <NuxtLink to="#" class="common__icon imgc">
                          <i class="bi bi-arrow-up-right"></i>
                        </NuxtLink>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div v-for="(inner_item, index) in item.items[1]" :key="index" class="project__wraptwo">

                    <div :class="`project__item ${inner_item[0].cls}`" data-aos="fade-up" :data-aos-duration="inner_item[0].duration"> 
                      <a href="#" class="thumb mb-30 imgc">
                        <img :src="inner_item[0].img" alt="img">
                      </a>
                      <div class="content d-flex align-items-center justify-content-between gap-2">
                        <NuxtLink to="/protfolio-details" class="left__cont">
                          <span class="base mb-2 mb-xxl-3 d-block text-uppercase">
                            {{ inner_item[0].subtitle }}
                          </span>
                          <h3>
                            {{ inner_item[0].title }}
                          </h3>
                        </NuxtLink>
                        <a href="#" class="common__icon imgc">
                          <i class="bi bi-arrow-up-right"></i>
                        </a>
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
  <!--<< project one >>-->
</template>
 