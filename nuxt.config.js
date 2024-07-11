export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  css: ["@/assets/global.css"],
  head: {
    title: "432",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

    router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'page1',
          path: '/page1',
          component: resolve(__dirname, 'pages/page1.vue')
        },
        {
          name: 'page2',
          path: '/page2',
          component: resolve(__dirname, 'pages/page2.vue')
        }
      );
    }
  }

};
