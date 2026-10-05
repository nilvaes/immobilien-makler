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

    <div class="container-site flex min-h-svh flex-col pt-32 pb-8 sm:pt-36 sm:pb-10 lg:pt-40 lg:pb-12">
      <div class="flex flex-1 flex-col justify-center py-8">
        <div class="max-w-[44rem]">
          <p class="eyebrow flex animate-rise items-center gap-3 text-accent">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            {{ hero.eyebrow }}
          </p>

          <h1 id="hero-title" class="mt-6 animate-rise text-display [animation-delay:80ms] lg:mt-8">
            <span class="block">{{ hero.titleLines[0] }}</span>
            <span class="block text-accent">{{ hero.titleLines[1] }}</span>
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

      <ul class="animate-rise flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 lg:gap-x-10 [animation-delay:320ms]">
        <li v-for="service in hero.services" :key="service.label">
          <NuxtLink
            :to="service.to"
            class="group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-white transition-colors duration-200 hover:text-accent"
          >
            <span
              class="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-night"
              aria-hidden="true"
            >
              <svg class="size-2.5" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6.2 4.8 9 10 3"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ service.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
