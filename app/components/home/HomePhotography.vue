<script setup lang="ts">
import { conceptImages, photography } from '~/data/concept'
</script>

<template>
  <section id="fotografie" aria-labelledby="photography-title" class="on-dark overflow-hidden bg-night py-16 text-white sm:py-24 lg:py-28" data-placeholder="true">
    <div class="container-site mx-auto max-w-5xl">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div v-reveal class="lg:col-span-5">
          <p class="eyebrow flex items-center gap-3 text-accent">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            {{ photography.eyebrow }}
          </p>
          <h2 id="photography-title" class="mt-6 text-heading">
            <span class="block">{{ photography.titleLines[0] }}</span>
            <span class="block text-accent">{{ photography.titleLines[1] }}</span>
          </h2>
          <p class="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-white/75">{{ photography.intro }}</p>
          <ul class="mt-8 space-y-5">
            <li v-for="(benefit, index) in photography.benefits" :key="benefit.title" class="flex gap-4">
              <span class="mt-0.5 text-sm font-medium text-accent tabular-nums" aria-hidden="true">0{{ index + 1 }}</span>
              <div>
                <h3 class="text-base font-semibold">{{ benefit.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-white/65">{{ benefit.text }}</p>
              </div>
            </li>
          </ul>
          <div class="mt-9">
            <TextLink to="/#referenzen" arrow tone="light">Zur Objektgalerie</TextLink>
          </div>
        </div>

        <div v-reveal="120" class="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
          <figure class="image-zoom relative col-span-2 overflow-hidden rounded-xl">
            <NuxtImg :src="conceptImages.living.src" :alt="conceptImages.living.alt" :width="conceptImages.living.width" :height="conceptImages.living.height" sizes="sm:100vw md:90vw lg:55vw xl:560px" loading="lazy" class="aspect-[3/2] w-full object-cover" />
            <figcaption class="absolute bottom-4 left-4 rounded-md bg-night/85 px-3 py-2 text-xs font-medium text-white">Licht. Raum. Atmosphäre.</figcaption>
          </figure>
          <figure class="image-zoom overflow-hidden rounded-xl">
            <NuxtImg :src="conceptImages.detail.src" :alt="conceptImages.detail.alt" :width="conceptImages.detail.width" :height="conceptImages.detail.height" sizes="sm:45vw lg:25vw xl:270px" loading="lazy" class="aspect-[4/3] w-full object-cover" />
          </figure>
          <figure class="image-zoom overflow-hidden rounded-xl">
            <NuxtImg :src="conceptImages.facade.src" :alt="conceptImages.facade.alt" :width="conceptImages.facade.width" :height="conceptImages.facade.height" sizes="sm:45vw lg:25vw xl:270px" loading="lazy" class="aspect-[4/3] w-full object-cover object-[center_40%]" />
          </figure>
        </div>
      </div>
      <p class="mt-8 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/60">{{ photography.previewNote }}</p>
    </div>
  </section>
</template>
