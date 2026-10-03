<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string
    arrow?: boolean
    tone?: 'dark' | 'light'
  }>(),
  { arrow: false, tone: 'dark' },
)
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-baseline gap-2 font-medium underline decoration-1 underline-offset-[6px] transition-colors duration-200"
    :class="
      tone === 'light'
        ? 'text-white decoration-white/40 hover:text-accent hover:decoration-accent'
        : 'text-ink decoration-line hover:text-accent-ink hover:decoration-accent-ink'
    "
  >
    <slot />
    <span v-if="arrow" aria-hidden="true">→</span>
  </NuxtLink>
</template>
