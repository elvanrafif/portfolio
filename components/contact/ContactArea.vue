<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  message: ''
});

const status = ref('');
const isLoading = ref(false);

function validateForm() {
  errors.value = { name: '', email: '', message: '' };
  let isValid = true;

  // Validasi Nama (hanya memeriksa jika kosong, karena panjang sudah dibatasi HTML)
  if (!form.value.name) {
    errors.value.name = 'Name is required.';
    isValid = false;
  }

  // Validasi Email (tetap di sini, dijalankan saat submit)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Email format is invalid.';
    isValid = false;
  }

  // Validasi Pesan (hanya memeriksa jika kosong, karena panjang sudah dibatasi HTML)
  if (!form.value.message) {
    errors.value.message = 'Message is required.';
    isValid = false;
  }

  return isValid;
}

async function handleSubmit() {
  status.value = '';
  if (!validateForm()) {
    return;
  }

  isLoading.value = true;
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value
    });

    if (response.success) {
      status.value = 'Message sent successfully!';
      form.value = { name: '', email: '', message: '' };
    } else {
      throw new Error(response.error || 'Failed to send message.');
    }

  } catch (error) {
    status.value = `Error: Failed to send message. Please try again.`;
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <!--<< Contact >>-->
  <section class="contact__section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
          <div class="contact__box">
            <div class="replay__box cmn__bg">
              <h3>
                Leave a Reply
              </h3>
              <form @submit.prevent="handleSubmit" class="row g-4">
                <div class="col-lg-12">
                  <input type="text" v-model="form.name" placeholder="Name" maxlength="20">
                  <p v-if="errors.name" style="color: red; margin-top: 5px;">{{ errors.name }}</p>
                </div>
                <div class="col-lg-12">
                  <input type="email" v-model="form.email" placeholder="Email">
                  <p v-if="errors.email" style="color: red; margin-top: 5px;">{{ errors.email }}</p>
                </div>
                <div class="col-lg-12">
                  <textarea v-model="form.message" rows="5" placeholder="Message" maxlength="320"></textarea>
                  <p v-if="errors.message" style="color: red; margin-top: 5px;">{{ errors.message }}</p>
                </div>
                <div class="col-lg-12">
                  <button type="submit" :disabled="isLoading"
                    class="border-0 d-flex fw-500 cmn--btn align-items-center gap-2">
                    <span class="get__text">
                      {{ isLoading ? 'Sending...' : 'Send Message' }}
                    </span>
                    <span>
                      <i class="bi bi-arrow-right fz-20"></i>
                    </span>
                  </button>
                </div>
                <div v-if="status" class="col-lg-12" style="margin-top: 15px;">
                  <p>{{ status }}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1500">
          <div class="contact__rightside cmn__bg">
            <h4 class="mb-30">
              Feel free to contact me anytime
            </h4>
            <div class="contact__item mb-20">
              <span class="he1">
                Email
              </span>
              <a href="mailto:info@gmail.com">
                muhammadelvanrafif@gmail.com
              </a>
            </div>
            <div class="contact__item mb-20">
              <span class="he1">
                Phone
              </span>
              <a href="tel:+(2) 871 382 023">
                +(62) 857 9357 9883
              </a>
            </div>
            <div class="contact__item">
              <span class="he1">
                Address
              </span>
              <span class="address">
                South Jakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< Contact >>-->
</template>