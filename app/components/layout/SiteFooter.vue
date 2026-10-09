<script setup lang="ts">
import { broker, company } from '~/data/site'

const footerLinks = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Referenzen', to: '/#referenzen' },
  { label: 'Referenzobjekte', to: '/referenzobjekte' },
  { label: 'Fotogalerie', to: '/referenz-fotografien' },
  { label: 'Über mich', to: '/#ueber-mich' },
  { label: 'Häufige Fragen', to: '/#faq' },
]
</script>

<template>
  <footer id="footer" class="on-dark bg-night text-white">
    <div class="container-site mx-auto max-w-5xl pt-14 sm:pt-16">
      <div class="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div>
          <SiteLogo tone="light" />
          <p class="mt-6 max-w-xs text-lg font-semibold leading-relaxed">Immobilien in Köln.<br><span class="text-accent">Persönlich begleitet.</span></p>
          <p class="mt-3 text-sm leading-relaxed text-white/60">Verkauf, Vermietung und Bewertung<br>in Köln und Umgebung.</p>
        </div>
        <nav aria-label="Footernavigation">
          <h2 class="text-sm font-semibold text-white/50">Entdecken</h2>
          <ul class="mt-4 space-y-1">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="inline-flex min-h-11 items-center text-sm text-white/80 transition-colors duration-300 hover:text-accent">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <h2 class="text-sm font-semibold text-white/50">Direkter Kontakt</h2>
          <p class="mt-5 text-sm">{{ broker.name }}</p>
          <a :href="company.phone.href" class="mt-2 flex min-h-11 items-center text-sm text-white/80 transition-colors duration-300 hover:text-accent">{{ company.phone.display }}</a>
          <a :href="`mailto:${company.email}`" class="flex min-h-11 items-center break-all text-sm text-white/80 transition-colors duration-300 hover:text-accent">{{ company.email }}</a>
          <NuxtLink to="/#kontakt" class="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent transition-colors duration-300 hover:text-white">Kontakt aufnehmen <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ company.name }} · Portfolio-Demo</p>
        <nav aria-label="Rechtliche Informationen" class="flex gap-6">
          <NuxtLink to="/impressum" class="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white">Datenschutz</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
