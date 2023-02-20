// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image-edge",
        "@vueuse/nuxt",
        "@pinia/nuxt",
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})
