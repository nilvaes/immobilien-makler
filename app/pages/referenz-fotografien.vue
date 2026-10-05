<script setup lang="ts">
import PhotoGallery from '~/components/gallery/PhotoGallery.vue'
import { conceptImages } from '~/data/concept'

useHead({ title: 'Immobilienfotografie – Konzeptgalerie | MPB Immobilien' })

const photos = [
  { title: 'Licht & Weite', image: conceptImages.living },
  { title: 'Räume im Zusammenhang', image: conceptImages.detail },
  { title: 'Wohnen mit Charakter', image: conceptImages.apartment },
  { title: 'Architektur im Blick', image: conceptImages.facade },
]
</script>

<template>
  <div class="bg-paper pt-32 pb-16 sm:pt-40 sm:pb-24" data-placeholder="true">
    <div class="container-site mx-auto max-w-6xl">
      <NuxtLink to="/#fotografie" class="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink"><span aria-hidden="true">←</span> Zur Startseite</NuxtLink>
      <header class="mt-8 mb-10 sm:mb-14">
        <p class="eyebrow text-accent-ink">Fotografie · Konzeptgalerie</p>
        <h1 class="mt-5 text-display">Räume zeigen.<br><span class="text-accent-ink">Atmosphäre spürbar machen.</span></h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-muted">Licht, Perspektive und die Details, die eine Immobilie besonders machen. Entdecken Sie die Bilder in voller Größe.</p>
        <p class="mt-5 max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">Stockfotos zur Gestaltung dieser Konzeptvorschau. Keine Aufnahmen oder Referenzen von MPB Immobilien.</p>
      </header>

      <PhotoGallery :images="photos" />

      <section aria-labelledby="gallery-contact-title" class="mt-14 flex flex-col gap-6 border-t border-ink/15 pt-10 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="gallery-contact-title" class="text-2xl font-semibold">Ihre Immobilie im besten Licht.</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">Sprechen wir über die Präsentation Ihrer Immobilie.</p>
        </div>
        <BaseButton to="/#kontakt" variant="accent">Kontakt aufnehmen <span class="ml-4" aria-hidden="true">↗</span></BaseButton>
      </section>
    </div>
  </div>
</template>
