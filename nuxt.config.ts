// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		"~/assets/css/animate.css",
		"~/assets/css/magnific-popup.css",
		"~/assets/css/nice-select.css",
		"~/assets/css/odometer.css",
		"~/assets/css/bootstrap-icons.min.css",
		// "~/assets/css/bootstrap.min.css",

		"bootstrap/scss/bootstrap.scss",
		"~/assets/sass/main.scss",
		"~/assets/css/main.css",
		"swiper/css/bundle",
	],

	plugins: [{ src: "@/plugins/aos", ssr: false }],
	modules: ["nuxt-marquee", '@nuxt/image'],
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css' }
			]
		}
	},
	runtimeConfig: {
		resendApiKey: process.env.RESEND_API_KEY
	},
	routeRules: {
		'/blog-details': { redirect: '/' }, // Redirect permanen (301)
		'/blog': { redirect: '/' }, // Redirect permanen (301)
		'/portfolio': { redirect: '/' }, // Redirect permanen (301)
		'/portfolio-details': { redirect: '/' }, // Redirect permanen (301)
		'/service': { redirect: '/' }, // Redirect permanen (301)
		'/service-details': { redirect: '/' }, // Redirect permanen (301)
	}
});