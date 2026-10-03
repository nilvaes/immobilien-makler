<script setup lang="ts">
import { services } from '~/data/site'
</script>

<template>
  <section id="leistungen" aria-labelledby="services-title" class="bg-paper py-16 sm:py-24 lg:py-28">
    <div class="container-site mx-auto max-w-5xl">
      <header v-reveal class="max-w-[36rem]">
        <p class="eyebrow flex items-center gap-3 text-[0.8125rem] tracking-[0.18em] text-accent-ink">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ services.eyebrow }}
        </p>
        <h2 id="services-title" class="mt-6 text-heading">
          <span class="block">{{ services.titleLines[0] }}</span>
          <span class="block italic text-night/80">{{ services.titleLines[1] }}</span>
        </h2>
        <p class="mt-6 text-[1.0625rem] leading-relaxed text-muted">
          {{ services.intro }}
        </p>
      </header>

      <ul class="mt-14 border-t border-line lg:mt-16">
        <li
          v-for="(item, index) in services.items"
          :id="item.id"
          :key="item.id"
          v-reveal="80 + index * 60"
          class="grid gap-6 border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14"
          :data-placeholder="item.placeholder || undefined"
        >
          <div class="flex items-baseline gap-4 lg:col-span-4">
            <span class="font-serif text-[1.125rem] text-accent-ink tabular-nums">{{ item.number }}</span>
            <h3 class="font-serif text-[1.75rem] leading-tight tracking-[-0.01em] sm:text-[2rem]">
              {{ item.title }}
            </h3>
          </div>

          <div class="lg:col-span-8">
            <p class="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink/90">
              {{ item.summary }}
            </p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li
                v-for="bullet in item.bullets"
                :key="bullet"
                class="flex gap-3 text-[0.9375rem] leading-snug text-muted"
              >
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <TextLink :to="item.link.to" arrow>{{ item.link.label }}</TextLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
