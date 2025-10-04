import { Resend } from 'resend';

// Ambil API key dari runtime config yang sudah kita set di nuxt.config.ts
const config = useRuntimeConfig();
const resend = new Resend(config.resendApiKey as string);

export default defineEventHandler(async (event) => {
  try {
    // Ambil body (data form) dari request yang masuk
    const body = await readBody(event);
    const { name, email, message } = body;

    // Lakukan validasi sederhana
    if (!name || !email || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Nama, email, dan pesan wajib diisi.',
      });
    }

    // Kirim email menggunakan Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // WAJIB 'onboarding@resend.dev' untuk development
      to: ['muhammadelvanrafif@gmail.com'], // <-- GANTI DENGAN ALAMAT EMAIL ANDA
      subject: `Portfolio pesan dari - ${name}`,
      replyTo: email,
      html: `
        <h3>Pesan dari: ${name}</h3>
        <p><strong>Email Pengirim:</strong> ${email}</p>
        <hr>
        <p>${message}</p>
      `
    });

    return { success: true, data };

  } catch (error) {
    console.error(error);
    return { success: false, error: 'Gagal mengirim email.' };
  }
});