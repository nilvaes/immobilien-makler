<script setup lang="ts">
import { referencePreview } from '~/data/concept'
</script>

<template>
  <section id="referenzen" aria-labelledby="references-title" class="bg-paper py-16 sm:py-24 lg:py-28" data-placeholder="true">
    <div class="container-site mx-auto max-w-5xl">
      <header v-reveal>
        <p class="eyebrow flex items-center gap-3 text-accent-ink">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ referencePreview.eyebrow }}
        </p>
        <div class="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12">
          <h2 id="references-title" class="text-heading">
            <span class="block">{{ referencePreview.titleLines[0] }}</span>
            <span class="block text-accent-ink">{{ referencePreview.titleLines[1] }}</span>
          </h2>
          <p class="max-w-md text-base leading-relaxed text-muted">{{ referencePreview.intro }}</p>
        </div>
      </header>
      <ul class="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        <li v-for="(property, index) in referencePreview.items" :key="property.id" v-reveal="index * 100">
          <PropertyPreviewCard :property="property" />
        </li>
      </ul>
      <p class="mt-7 max-w-3xl text-xs leading-relaxed text-muted">{{ referencePreview.note }}</p>
    </div>
  </section>
</template>
