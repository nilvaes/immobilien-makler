<script setup lang="ts">
import { about, broker } from '~/data/site'
</script>

<template>
  <section id="ueber-mich" aria-labelledby="about-title" class="bg-paper-deep py-16 sm:py-24 lg:py-28">
    <div class="container-site grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-8">
      <figure v-reveal class="lg:col-span-5">
        <div class="bg-white">
          <NuxtImg
            :src="broker.portrait.src"
            :alt="broker.portrait.alt"
            :width="broker.portrait.width"
            :height="broker.portrait.height"
            sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:540px"
            loading="lazy"
            class="block aspect-square h-auto w-full object-cover object-[center_20%]"
            data-placeholder
          />
        </div>
      </figure>

      <div v-reveal="100" class="lg:col-span-6 lg:col-start-7">
        <p class="eyebrow flex items-center gap-3 text-muted">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ about.eyebrow }}
        </p>

        <h2 id="about-title" class="mt-6 text-heading">
          <span class="block">{{ about.titleLines[0] }}</span>
          <span class="block">{{ about.titleLines[1] }}</span>
        </h2>

        <p class="mt-6 text-[0.9375rem]">
          <span class="font-medium">{{ broker.name }}</span>
          <span class="text-muted"> · {{ broker.role }}</span>
        </p>

        <div class="mt-5 max-w-[34rem] space-y-4">
          <p
            v-for="paragraph in about.paragraphs"
            :key="paragraph.text"
            :data-placeholder="paragraph.placeholder || undefined"
          >
            {{ paragraph.text }}
          </p>
        </div>

        <dl class="mt-10 grid border-t border-line sm:grid-cols-3">
          <div
            v-for="fact in about.facts"
            :key="fact.label"
            class="flex flex-col-reverse border-b border-line py-4 sm:border-b-0 sm:py-5 sm:pr-5 sm:not-first:border-l sm:not-first:pl-5"
            :data-placeholder="fact.placeholder || undefined"
          >
            <dt class="mt-1 text-[0.8125rem] leading-snug text-muted">{{ fact.label }}</dt>
            <dd class="font-serif text-[1.25rem] leading-tight">{{ fact.value }}</dd>
          </div>
        </dl>

        <div class="mt-8">
          <TextLink :to="about.link.to" arrow>{{ about.link.label }}</TextLink>
        </div>
      </div>
    </div>
  </section>
</template>
