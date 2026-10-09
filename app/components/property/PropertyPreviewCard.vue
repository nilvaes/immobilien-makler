<script setup lang="ts">
import type { ConceptProperty } from '~/data/concept'
defineProps<{ property: ConceptProperty; to?: string }>()
</script>

<template>
  <article class="h-full overflow-hidden rounded-xl border border-ink/10 bg-white/60" :data-placeholder="property.placeholder">
    <div class="image-zoom relative overflow-hidden">
      <NuxtImg :src="property.image.src" :alt="property.image.alt" :width="property.image.width" :height="property.image.height" sizes="sm:100vw md:45vw lg:30vw xl:340px" loading="lazy" class="aspect-[4/3] w-full object-cover" />
      <span class="absolute top-4 left-4 rounded-md bg-paper px-3 py-1.5 text-xs font-semibold text-ink">Beispielobjekt</span>
    </div>
    <div class="p-6">
      <p class="text-xs font-medium tracking-[0.06em] text-accent-ink">{{ property.category }}</p>
      <h3 class="mt-3 text-xl leading-tight tracking-[-0.02em]">{{ property.title }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-muted">{{ property.description }}</p>
      <NuxtLink v-if="to" :to="to" class="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink">Objekt ansehen <span aria-hidden="true">↗</span><span class="sr-only">: {{ property.title }}</span></NuxtLink>
    </div>
  </article>
</template>
