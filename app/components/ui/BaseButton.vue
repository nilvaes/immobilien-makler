<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    type?: 'button' | 'submit'
    size?: 'sm' | 'md'
    variant?: 'ink' | 'accent'
  }>(),
  { to: undefined, type: 'button', size: 'md', variant: 'ink' },
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="props.to ? NuxtLink : 'button'"
    :to="props.to"
    :type="props.to ? undefined : props.type"
    class="btn group relative inline-flex items-center justify-center overflow-hidden rounded-[1px] font-medium tracking-[0.02em] whitespace-nowrap"
    :class="[
      props.size === 'sm' ? 'h-10 px-5 text-[0.8125rem]' : 'h-11 px-6 text-[0.875rem]',
      props.variant === 'accent'
        ? 'bg-accent text-night'
        : 'bg-ink text-paper hover:bg-accent-ink',
    ]"
  >
    <span
      v-if="props.variant === 'accent'"
      class="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
      aria-hidden="true"
    />
    <span class="relative z-10">
      <slot />
    </span>
  </component>
</template>
