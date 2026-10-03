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
      title: 'MPB Immobilien – Immobilienmakler in Köln',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Marc Philip Broichheuser, Immobilienmakler in Köln. Persönliche Begleitung beim Verkauf, der Vermietung und der Bewertung Ihrer Immobilie.',
        },
        { name: 'theme-color', content: '#0a1224' },
      ],
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    families: [
      { name: 'Newsreader', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
      { name: 'Instrument Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  image: {
    quality: 78,
    format: ['avif', 'webp'],
    domains: ['mpb-immobilien.de'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },
})
