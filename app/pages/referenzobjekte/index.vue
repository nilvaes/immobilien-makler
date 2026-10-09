<script setup lang="ts">
import { properties, propertyDemoNote } from '~/data/properties'

useHead({ title: 'Referenzobjekte | Muster Immobilien' })
const filters = ['Alle', 'Verkauft', 'Vermietet'] as const
const selected = ref<(typeof filters)[number]>('Alle')
const filtered = computed(() => properties.filter(property => selected.value === 'Alle' || property.status === selected.value))
</script>

<template>
  <div class="bg-paper pt-32 pb-16 sm:pt-40 sm:pb-24" data-placeholder="true">
    <div class="container-site mx-auto max-w-6xl">
      <NuxtLink to="/#referenzen" class="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink"><span aria-hidden="true">←</span> Zur Startseite</NuxtLink>
      <header class="mt-8">
        <p class="eyebrow text-accent-ink">Referenzobjekte · Portfolio-Demo</p>
        <h1 class="mt-5 text-display">Besondere Räume.<br><span class="text-accent-ink">Neue Perspektiven.</span></h1>
        <p class="mt-6 max-w-xl leading-relaxed text-muted">Von der Stadtwohnung bis zum Wohnhaus: So lassen sich Immobilien klar und ansprechend präsentieren.</p>
        <p class="mt-5 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">{{ propertyDemoNote }}</p>
      </header>

      <div class="mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-ink/10 py-5">
        <div role="group" aria-label="Beispielobjekte nach Vermittlungsstatus filtern" class="flex flex-wrap gap-2">
          <button v-for="filter in filters" :key="filter" type="button" :aria-pressed="selected === filter" class="min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors duration-300" :class="selected === filter ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white/60 text-ink hover:border-accent-ink hover:text-accent-ink'" @click="selected = filter">{{ filter }}</button>
        </div>
        <p role="status" class="text-sm text-muted">{{ filtered.length }} {{ filtered.length === 1 ? 'Beispielobjekt' : 'Beispielobjekte' }}</p>
      </div>

      <ul class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="property in filtered" :key="property.id">
          <article class="h-full overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <NuxtLink :to="`/referenzobjekte/${property.id}`" class="image-zoom relative block overflow-hidden" :aria-label="`${property.title} – Details ansehen`">
              <NuxtImg :src="property.image.src" :alt="property.image.alt" :width="property.image.width" :height="property.image.height" sizes="sm:100vw md:45vw lg:30vw" loading="lazy" class="aspect-[4/3] w-full object-cover" />
              <span class="absolute top-4 left-4 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">{{ property.status }} · Demo</span>
            </NuxtLink>
            <div class="p-6">
              <p class="text-xs font-semibold tracking-wide text-accent-ink">{{ property.location }}</p>
              <h2 class="mt-3 text-2xl"><NuxtLink :to="`/referenzobjekte/${property.id}`">{{ property.title }}</NuxtLink></h2>
              <p class="mt-2 text-sm text-muted">{{ property.type }}</p>
              <dl class="mt-5 grid grid-cols-2 border-y border-ink/10 py-4 text-sm">
                <div><dt class="text-muted">Wohnfläche</dt><dd class="mt-1 font-semibold">{{ property.area }} m²</dd></div>
                <div><dt class="text-muted">Zimmer</dt><dd class="mt-1 font-semibold">{{ property.rooms }}</dd></div>
              </dl>
              <NuxtLink :to="`/referenzobjekte/${property.id}`" class="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink">Objekt entdecken <span aria-hidden="true">↗</span><span class="sr-only">: {{ property.title }}</span></NuxtLink>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>
