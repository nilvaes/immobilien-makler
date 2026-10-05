<script setup lang="ts">
import { process } from '~/data/site'
</script>

<template>
  <section id="ablauf" aria-labelledby="process-title" class="border-t border-ink/10 bg-paper py-16 sm:py-24 lg:py-28" :data-placeholder="process.placeholder">
    <div class="container-site mx-auto max-w-5xl">
      <header v-reveal>
        <p class="eyebrow flex items-center gap-3 text-accent-ink">
          <span class="h-px w-8 bg-accent" aria-hidden="true" />
          {{ process.eyebrow }}
        </p>
        <h2 id="process-title" class="mt-5 text-heading">
          <span class="block">{{ process.titleLines[0] }}</span>
          <span class="block text-accent-ink">{{ process.titleLines[1] }}</span>
        </h2>
      </header>

      <div class="relative mt-10 lg:mt-14">
        <div class="absolute top-7 bottom-7 left-7 border-l border-accent-ink/25 lg:top-7 lg:right-[calc(25%-3.0625rem)] lg:bottom-auto lg:border-t lg:border-l-0" aria-hidden="true" />
        <ol class="relative grid gap-8 lg:grid-cols-4 lg:gap-7">
          <li v-for="(step, index) in process.steps" :key="step.number" v-reveal="index * 100" class="process-step grid grid-cols-[3.5rem_1fr] items-start gap-5 lg:block">
            <span
              class="process-number relative flex size-14 items-center justify-center rounded-full border text-base font-semibold tabular-nums"
              :class="index === 0 ? 'border-ink bg-ink text-white' : 'border-accent-ink/30 bg-paper text-accent-ink'"
              aria-hidden="true"
            >{{ step.number }}</span>
            <div class="process-copy pt-1 lg:mt-6 lg:pt-0">
              <h3 class="max-w-xs text-lg leading-snug tracking-[-0.01em]">{{ step.title }}</h3>
              <p class="mt-3 max-w-sm text-sm leading-relaxed text-muted">{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (hover: hover) and (pointer: fine) {
  .process-number {
    transition:
      background-color 650ms var(--ease-out-soft),
      border-color 650ms var(--ease-out-soft),
      color 650ms var(--ease-out-soft),
      transform 650ms var(--ease-out-soft);
  }

  .process-copy {
    transition: transform 650ms var(--ease-out-soft);
  }

  .process-copy h3 {
    transition: color 650ms var(--ease-out-soft);
  }

  .process-step:hover .process-number {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-night);
  }

  .process-step:hover h3 {
    color: var(--color-accent-ink);
  }
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .process-step:hover .process-number {
    transform: scale(1.08);
  }

  .process-step:hover .process-copy {
    transform: translateY(-3px);
  }
}
</style>
