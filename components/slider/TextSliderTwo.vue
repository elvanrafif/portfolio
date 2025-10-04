<template>
  <div class="marquee-wrapper text-slider">
    <div class="marquee-inner to-right">
      <ul class="marqee-list d-flex">
        <li class="marquee-item">
          <span v-for="skill in skills" :key="skill.name" class="marquee-text-item">
            {{ skill.name }}
          </span>

          <span v-for="skill in skills" :key="`${skill.name}-duplicate`" class="marquee-text-item">
            {{ skill.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Data skills yang akan ditampilkan di slider
const skills = ref([
  { name: 'Front-End Development' },
  { name: 'Web Applications' },
  { name: 'Single Page Applications (SPA)' },
  { name: 'Jamstack Development' },          // Ditambahkan sesuai permintaan
  { name: 'Cross-Platform Development' },    // Menggantikan 'Mobile App Development'
  { name: 'RESTful API Development' },
  { name: 'Performance Optimization' },
]);
</script>

<style>
/* CSS Tambahan agar teks terlihat bagus di dalam slider */
.marquee-text-item {
  display: inline-block;
  /* Membuat span bisa diberi margin/padding */
  margin: 0 20px;
  /* Jarak antar teks */
  padding: 10px 20px;
  /* Ruang di dalam kotak teks */
  font-size: 1.5rem;
  /* Ukuran font, sesuaikan jika perlu */
  font-weight: 600;
  color: #333;
  /* background-color: #f0f0f0; */
  /* Warna latar belakang */
  border-radius: 8px;
  /* Sudut yang melengkung */
  white-space: nowrap;
  /* Memastikan teks tidak turun baris */
}
</style>