<script setup lang="ts">
import { company } from '~/data/site'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
</script>

<template>
  <NuxtLink
    to="/"
    class="inline-flex items-center gap-3"
    :class="tone === 'light' ? 'text-white' : 'text-ink'"
    :aria-label="`${company.name} – Startseite`"
  >
    <span class="text-[1.125rem] leading-none font-semibold tracking-[0.2em]">MPB</span>
    <span class="h-4 w-px" :class="tone === 'light' ? 'bg-accent' : 'bg-line'" aria-hidden="true" />
    <span
      class="text-[0.75rem] leading-none tracking-[0.28em] uppercase"
      :class="tone === 'light' ? 'text-white/70' : 'text-muted'"
    >
      Immobilien
    </span>
  </NuxtLink>
</template>
