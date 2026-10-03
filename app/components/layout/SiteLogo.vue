<script setup lang="ts">
import { company } from '~/data/site'

withDefaults(
  defineProps<{
    tone?: 'dark' | 'light'
    compact?: boolean
  }>(),
  { tone: 'dark', compact: false },
)
</script>

<template>
  <NuxtLink
    to="/"
    class="inline-flex shrink-0 items-center"
    :aria-label="`${company.name} – Startseite`"
  >
    <!-- White/teal logo for dark grounds. On light grounds, brightness-0 yields a solid dark mark until a dedicated dark logo exists. -->
    <NuxtImg
      :src="company.logo.src"
      :alt="company.logo.alt"
      :width="company.logo.width"
      :height="company.logo.height"
      class="w-auto transition-[height] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
      :class="[
        tone === 'dark' ? 'brightness-0' : undefined,
        compact ? 'h-9 lg:h-10' : 'h-12 lg:h-14',
      ]"
    />
  </NuxtLink>
</template>
