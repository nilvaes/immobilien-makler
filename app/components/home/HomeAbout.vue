<script setup lang="ts">
import { about, broker } from '~/data/site'
</script>

<template>
  <section id="ueber-mich" aria-labelledby="about-title" class="bg-paper-deep py-16 sm:py-24 lg:py-28">
    <div class="container-site mx-auto max-w-5xl">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <figure v-reveal class="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-night lg:col-span-5 lg:mx-0">
          <NuxtImg
            :src="broker.portrait.src"
            :alt="broker.portrait.alt"
            :width="broker.portrait.width"
            :height="broker.portrait.height"
            sizes="sm:90vw md:384px lg:40vw xl:384px"
            loading="lazy"
            class="block aspect-[4/5] w-full object-cover object-[center_20%]"
          />
          <figcaption class="on-dark px-6 py-5 text-white">
            <p class="text-base font-semibold">{{ broker.name }}</p>
            <p class="mt-1 text-sm text-white/60">{{ broker.role }}</p>
          </figcaption>
        </figure>

        <div v-reveal="100" class="lg:col-span-7">
          <p class="eyebrow flex items-center gap-3 text-accent-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            {{ about.eyebrow }}
          </p>
          <h2 id="about-title" class="mt-6 text-heading">
            <span class="block">{{ about.titleLines[0] }}</span>
            <span class="block text-accent-ink">{{ about.titleLines[1] }}</span>
          </h2>
          <div class="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-muted">
            <p v-for="paragraph in about.paragraphs" :key="paragraph.text" :data-placeholder="paragraph.placeholder || undefined">
              {{ paragraph.text }}
            </p>
          </div>
          <div class="mt-8">
            <TextLink :to="about.link.to" arrow>{{ about.link.label }}</TextLink>
          </div>
        </div>
      </div>

      <dl v-reveal="200" class="mt-12 grid gap-7 border-t border-ink/15 pt-8 sm:grid-cols-3 sm:gap-0 lg:mt-16 lg:pt-10">
        <div
          v-for="fact in about.facts"
          :key="fact.label"
          class="flex flex-col-reverse sm:px-7 sm:first:pl-0 sm:last:pr-0 sm:not-first:border-l sm:not-first:border-ink/15"
          :data-placeholder="fact.placeholder || undefined"
        >
          <dt class="mt-3 text-sm leading-snug text-muted">{{ fact.label }}</dt>
          <dd class="font-sans text-4xl font-semibold leading-none tracking-tight text-accent-ink sm:text-[2.5rem]">
            <CountUp :value="fact.value" />
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
