

<script setup>

// service data 
const service_data = [
  {
    id: 1,
    duration: "1000",
    category: "Designer",
    title: "Illustration Design",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 2,
    duration: "1400",
    category: "Branding",
    title: "Business Branding",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 3,
    duration: "1600",
    category: "UI/UX Design",
    title: "Web UI/UX Design",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 4,
    duration: "1800",
    category: "Web Design",
    title: "Application Design",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 5,
    duration: "2000",
    category: "SEO Analytics",
    title: "Digital Marketing",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 6,
    duration: "2200",
    category: "Web Design",
    title: "Web Development",
    sm_des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },

]

</script>



<template>
  <!--<< service >>-->
  <section class="service__section overhid pb-120">
    <div class="container">
      <div class="service__uniquewrap">

        <div v-for="(item, i) in service_data" :key="i" class="service__unique__item pb-40 pt-40" data-aos="fade-up"
          :data-aos-duration="item.duration">
          <div class="left__service">
            <div class="serial__adjust">
              <span>
                0{{ item.id }}
              </span>
              <div class="cont">
                <h5>
                  {{ item.category }}
                </h5>
                <h2>
                  <NuxtLink to="/service-details">
                    {{ item.title }}
                  </NuxtLink>
                </h2>
              </div>
            </div>
            <p class="pra">{{ item.sm_des }}</p>
          </div>
          <NuxtLink to="/service-details" class="common__icon">
            <i class="bi bi-arrow-up-right"></i>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
  <!--<< service >>-->
</template>

 