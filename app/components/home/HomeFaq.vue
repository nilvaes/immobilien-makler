<script setup lang="ts">
import { faq } from '~/data/site'

const openIndex = ref<number | null>(null)

function toggleAnswer(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" aria-labelledby="faq-title" class="border-t border-ink/10 bg-white/50 py-16 sm:py-24 lg:py-28" :data-placeholder="faq.placeholder">
    <div class="container-site mx-auto max-w-5xl">
      <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <header v-reveal class="lg:col-span-4">
          <p class="eyebrow flex items-center gap-3 text-accent-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            {{ faq.eyebrow }}
          </p>
          <h2 id="faq-title" class="mt-5 text-heading">
            <span class="block">{{ faq.titleLines[0] }}</span>
            <span class="block text-accent-ink">{{ faq.titleLines[1] }}</span>
          </h2>
        </header>

        <div v-reveal="100" class="border-t border-ink/15 lg:col-span-8">
          <div v-for="(item, index) in faq.items" :key="item.question" class="faq-item border-b border-ink/15" :class="{ 'is-open': openIndex === index }">
            <h3>
              <button :id="`faq-question-${index}`" type="button" :aria-expanded="openIndex === index" :aria-controls="`faq-answer-${index}`" class="flex min-h-20 w-full cursor-pointer items-center justify-between gap-5 rounded-sm py-5 text-left text-base font-semibold leading-relaxed transition-colors duration-300 hover:text-accent-ink" @click="toggleAnswer(index)">
                <span>{{ item.question }}</span>
                <span class="faq-icon flex size-8 shrink-0 items-center justify-center rounded-full border border-accent-ink/20 bg-paper text-accent-ink" aria-hidden="true">
                  <svg class="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10" /></svg>
                </span>
              </button>
            </h3>
            <div :id="`faq-answer-${index}`" class="faq-panel" role="region" :aria-labelledby="`faq-question-${index}`" :inert="openIndex !== index">
              <div class="faq-panel-inner">
                <div class="faq-answer pr-3 pb-6 sm:pr-12">
                  <p class="max-w-xl text-[0.9375rem] leading-relaxed text-muted">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden;
  transition:
    grid-template-rows 450ms var(--ease-out-soft),
    opacity 350ms var(--ease-out-soft),
    visibility 0s 450ms;
}

.faq-panel-inner {
  min-height: 0;
  overflow: hidden;
}

.is-open .faq-panel {
  grid-template-rows: 1fr;
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

.faq-icon {
  transition:
    transform 450ms var(--ease-out-soft),
    background-color 450ms var(--ease-out-soft),
    color 450ms var(--ease-out-soft);
}

.is-open button {
  color: var(--color-accent-ink);
}

.is-open .faq-icon {
  transform: rotate(45deg);
  background-color: var(--color-accent-ink);
  color: white;
}

@media (prefers-reduced-motion: reduce) {
  .faq-panel,
  .faq-icon {
    transition: none;
  }
}
</style>
