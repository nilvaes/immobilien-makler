<script setup lang="ts">
import { hero, valuationCta } from '~/data/site'
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="on-dark relative isolate overflow-hidden bg-night text-white"
  >
    <div class="absolute inset-0 -z-20" aria-hidden="true">
      <NuxtPicture
        :src="hero.backgroundImage"
        alt=""
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        loading="eager"
        fetchpriority="high"
        preload
        :img-attrs="{ class: 'absolute inset-0 block h-full w-full animate-settle object-cover object-center' }"
      />
    </div>
    <!-- Keeps white text legible over the photograph; the right side stays open for the skyline. -->
    <div
      class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_18_36/0.7)_0%,rgb(10_18_36/0.45)_45%,rgb(10_18_36/0.9)_100%),linear-gradient(100deg,rgb(10_18_36/0.85)_0%,rgb(10_18_36/0.2)_65%)]"
      aria-hidden="true"
    />

    <div class="container-site flex min-h-svh items-center pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div class="max-w-[44rem]">
        <p class="eyebrow flex animate-rise items-center gap-3 text-accent">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ hero.eyebrow }}
        </p>

        <h1 id="hero-title" class="mt-6 animate-rise text-display [animation-delay:80ms] lg:mt-8">
          <span class="block">{{ hero.titleLines[0] }}</span>
          <span class="block text-accent italic">{{ hero.titleLines[1] }}</span>
        </h1>

        <p class="mt-6 max-w-[34rem] animate-rise text-lead text-white/80 [animation-delay:160ms] lg:mt-7">
          {{ hero.intro }}
        </p>

        <div class="mt-9 flex animate-rise flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:240ms]">
          <BaseButton :to="valuationCta.to" variant="accent">
            {{ valuationCta.label }}
          </BaseButton>
          <TextLink :to="hero.secondaryLink.to" arrow tone="light">
            {{ hero.secondaryLink.label }}
          </TextLink>
        </div>
      </div>
    </div>
  </section>
</template>
