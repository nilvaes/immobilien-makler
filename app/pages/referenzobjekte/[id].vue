<script setup lang="ts">
import { properties, propertyDemoNote } from '~/data/properties'

const route = useRoute()
const property = computed(() => properties.find(item => item.id === route.params.id))
if (!property.value) throw createError({ statusCode: 404, statusMessage: 'Objekt nicht gefunden' })
useHead(() => ({ title: `${property.value?.title ?? 'Referenzobjekt'} | Muster Immobilien` }))
</script>

<template>
  <div v-if="property" class="bg-paper pt-32 pb-16 sm:pt-40 sm:pb-24" data-placeholder="true">
    <div class="container-site mx-auto max-w-6xl">
      <NuxtLink to="/referenzobjekte" class="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink"><span aria-hidden="true">←</span> Alle Beispielobjekte</NuxtLink>
      <header class="mt-8 mb-8">
        <p class="eyebrow text-accent-ink">{{ property.location }} · Beispielobjekt</p>
        <h1 class="mt-5 text-display">{{ property.title }}</h1>
        <p class="mt-5 max-w-xl text-lead text-muted">{{ property.description }}</p>
      </header>
      <div class="overflow-hidden rounded-2xl bg-paper-deep">
        <NuxtImg :src="property.image.src" :alt="property.image.alt" :width="property.image.width" :height="property.image.height" sizes="sm:100vw lg:1100px" loading="eager" fetchpriority="high" class="max-h-[70vh] w-full object-contain" />
      </div>
      <div class="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <section aria-labelledby="property-description">
          <h2 id="property-description" class="text-2xl">Ein Blick auf die Immobilie.</h2>
          <p class="mt-5 leading-relaxed text-muted">{{ property.story }}</p>
          <ul class="mt-6 space-y-3">
            <li v-for="highlight in property.highlights" :key="highlight" class="flex gap-3 text-base"><span aria-hidden="true" class="font-semibold text-accent-ink">✓</span>{{ highlight }}</li>
          </ul>
        </section>
        <section aria-labelledby="property-facts" class="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
          <h2 id="property-facts" class="text-xl">Auf einen Blick</h2>
          <dl class="mt-5 divide-y divide-ink/10 text-sm">
            <div v-for="fact in [{ label: 'Immobilienart', value: property.type }, { label: 'Wohnfläche', value: `${property.area} m²` }, { label: 'Zimmer', value: property.rooms }, { label: 'Beispielstatus', value: property.status }]" :key="fact.label" class="flex justify-between gap-5 py-3"><dt class="text-muted">{{ fact.label }}</dt><dd class="text-right font-semibold">{{ fact.value }}</dd></div>
          </dl>
          <p class="mt-5 text-xs leading-relaxed text-muted">{{ propertyDemoNote }}</p>
        </section>
      </div>
      <section class="on-dark mt-12 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white sm:mt-16 sm:flex-row sm:items-center sm:justify-between" aria-labelledby="property-contact">
        <div><h2 id="property-contact" class="text-2xl">Was macht Ihre Immobilie besonders?</h2><p class="mt-3 text-sm text-white/70">Lassen Sie uns über den nächsten Schritt sprechen.</p></div>
        <BaseButton to="/#kontakt" variant="accent">Kontakt aufnehmen <span aria-hidden="true" class="ml-3">↗</span></BaseButton>
      </section>
    </div>
  </div>
</template>
