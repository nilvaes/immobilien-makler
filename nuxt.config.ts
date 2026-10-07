import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Muster Immobilien – Immobilienmakler in Köln',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Max Mustermann, Immobilienmakler in Köln. Persönliche Begleitung beim Verkauf, der Vermietung und der Bewertung Ihrer Immobilie.',
        },
        { name: 'theme-color', content: '#0a1224' },
      ],
    },
  },

  fonts: {
    // Nuxt Fonts downloads provider fonts and serves them from this site's own origin.
    // Keep this self-hosted setup instead of adding Google Fonts CDN links to app.head.
    defaults: {
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    families: [
      { name: 'Instrument Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  image: {
    quality: 78,
    format: ['avif', 'webp'],
    domains: [],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },
})
