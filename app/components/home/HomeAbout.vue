<script setup lang="ts">
import { about, broker } from '~/data/site'
</script>

<template>
  <section
    id="ueber-mich"
    aria-labelledby="about-title"
    class="relative overflow-hidden bg-paper-deep py-16 sm:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgb(28_202_223/0.08),transparent_42%),radial-gradient(ellipse_at_90%_80%,rgb(15_27_52/0.06),transparent_45%)]"
      aria-hidden="true"
    />

    <div class="container-site relative mx-auto max-w-5xl">
      <div class="grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-10 xl:gap-x-12">
        <figure v-reveal class="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:col-span-5 lg:mx-0 lg:max-w-[22rem]">
          <div
            class="absolute top-5 -right-3 bottom-[-0.75rem] left-3 border-2 border-accent/70 bg-accent/10 sm:top-6 sm:-right-4 sm:bottom-[-1rem] sm:left-4"
            aria-hidden="true"
          />
          <div
            class="absolute -top-5 -right-5 size-24 rounded-full border-2 border-accent/65 sm:-top-7 sm:-right-7 sm:size-32"
            aria-hidden="true"
          />
          <div
            class="absolute -top-2 -right-2 size-16 rounded-full border-2 border-dashed border-accent/55 sm:-top-3 sm:-right-3 sm:size-20"
            aria-hidden="true"
          />

          <div class="relative border border-ink/20 bg-paper p-2.5 shadow-[0_24px_60px_-36px_rgb(15_27_52/0.55)] sm:p-3">
            <div class="border border-ink/10">
              <NuxtImg
                :src="broker.portrait.src"
                :alt="broker.portrait.alt"
                :width="broker.portrait.width"
                :height="broker.portrait.height"
                sizes="sm:288px md:320px lg:352px"
                loading="lazy"
                class="block h-auto w-full"
              />
            </div>
          </div>
        </figure>

        <div v-reveal="100" class="flex flex-col gap-7 lg:col-span-6 lg:col-start-7">
          <p class="eyebrow flex items-center gap-3 text-[0.8125rem] tracking-[0.18em] text-accent-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            {{ about.eyebrow }}
          </p>

          <h2 id="about-title" class="text-heading">
            <span class="block">{{ about.titleLines[0] }}</span>
            <span class="block text-night/80">{{ about.titleLines[1] }}</span>
          </h2>

          <div class="border-l-2 border-accent pl-5">
            <p class="text-[1.0625rem] font-medium tracking-[0.01em]">{{ broker.name }}</p>
            <p class="mt-1 text-[0.9375rem] text-muted">{{ broker.role }}</p>
          </div>

          <div class="max-w-[34rem] space-y-4 text-[1.0625rem] leading-relaxed text-ink/90">
            <p
              v-for="paragraph in about.paragraphs"
              :key="paragraph.text"
              :data-placeholder="paragraph.placeholder || undefined"
            >
              {{ paragraph.text }}
            </p>
          </div>
        </div>
      </div>

      <dl v-reveal="200" class="mt-12 grid gap-px bg-line sm:grid-cols-3 lg:mt-14">
        <div
          v-for="fact in about.facts"
          :key="fact.label"
          class="flex flex-col-reverse bg-paper px-5 py-7 sm:px-6 sm:py-8"
          :data-placeholder="fact.placeholder || undefined"
        >
          <dt class="mt-2.5 text-[0.9375rem] leading-snug text-muted">{{ fact.label }}</dt>
          <dd class="font-sans text-[1.875rem] font-semibold leading-none tracking-[-0.025em] text-accent-ink sm:text-[2.125rem]">
            <CountUp :value="fact.value" />
          </dd>
        </div>
      </dl>

      <div v-reveal="240" class="mt-10">
        <TextLink :to="about.link.to" arrow>{{ about.link.label }}</TextLink>
      </div>
    </div>
  </section>
</template>
