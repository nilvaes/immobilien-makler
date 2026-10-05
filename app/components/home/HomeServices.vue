<script setup lang="ts">
import { services } from '~/data/site'

const iconPaths: Record<string, string[]> = {
  verkauf: ['M3 10 12 3l9 7', 'M5 9v12h14V9', 'M9 21v-8h6v8'],
  vermietung: ['M14 7a5 5 0 1 1-4.5 7.2L3 21H1v-3l6.8-6.5A5 5 0 0 1 14 7Z', 'M16 10h.01'],
  bewertung: ['M5 3h14v18H5z', 'M8 7h8', 'M8 17v-3', 'M12 17v-5', 'M16 17v-7'],
}
</script>

<template>
  <section id="leistungen" aria-labelledby="services-title" class="bg-paper py-16 sm:py-24 lg:py-28">
    <div class="container-site mx-auto max-w-5xl">
      <header v-reveal>
        <p class="eyebrow flex items-center gap-3 text-[0.8125rem] tracking-[0.18em] text-accent-ink">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ services.eyebrow }}
        </p>
        <h2 id="services-title" class="mt-5 text-heading">
          <span class="block">{{ services.titleLines[0] }}</span>
          <span class="block text-accent-ink">{{ services.titleLines[1] }}</span>
        </h2>
      </header>

      <ul class="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3">
        <li
          v-for="(item, index) in services.items"
          :id="item.id"
          :key="item.id"
          v-reveal="index * 100"
          :data-placeholder="item.placeholder || undefined"
        >
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-[translate,box-shadow] duration-650 ease-[var(--ease-out-soft)] motion-safe:hover:-translate-y-1 sm:p-8 lg:p-6 xl:p-8"
            :class="index === 0
              ? 'on-dark border-night bg-night text-white shadow-[0_16px_40px_-20px_rgb(10_18_36/0.5)]'
              : 'border-ink/10 bg-white/65 hover:shadow-[0_16px_40px_-24px_rgb(10_18_36/0.25)]'"
          >
            <div class="flex items-center justify-between">
              <div
                class="flex size-14 items-center justify-center rounded-xl"
                :class="index === 0 ? 'bg-accent text-night' : 'bg-accent-ink/8 text-accent-ink'"
              >
                <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path v-for="path in iconPaths[item.id]" :key="path" :d="path" />
                </svg>
              </div>
              <span class="text-sm font-medium tracking-widest tabular-nums" :class="index === 0 ? 'text-white/45' : 'text-muted'" aria-hidden="true">
                {{ item.number }}
              </span>
            </div>

            <h3 class="mt-8 text-[1.75rem] leading-tight tracking-[-0.02em]">{{ item.title }}</h3>
            <p class="mt-3 text-[0.9375rem] leading-relaxed" :class="index === 0 ? 'text-white/75' : 'text-muted'">
              {{ item.summary }}
            </p>
            <ul class="mt-7 space-y-3 border-t pt-6" :class="index === 0 ? 'border-white/15' : 'border-ink/10'">
              <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-2.5 text-sm leading-relaxed">
                <svg class="mt-1 size-4 shrink-0" :class="index === 0 ? 'text-accent' : 'text-accent-ink'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                  <path d="m3 8 3 3 7-7" />
                </svg>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="mt-auto pt-8">
              <NuxtLink
                :to="item.link.to"
                class="flex min-h-12 items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-450 ease-[var(--ease-out-soft)]"
                :class="index === 0 ? 'bg-accent text-night hover:bg-white' : 'bg-ink/5 text-ink hover:bg-ink/10'"
              >
                {{ item.link.label }}
                <span class="text-lg transition-[translate] duration-650 ease-[var(--ease-out-soft)] motion-safe:group-hover:translate-x-1" aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
