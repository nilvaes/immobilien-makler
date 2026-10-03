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
    class="inline-flex items-center justify-center rounded-[1px] font-medium tracking-[0.02em] whitespace-nowrap"
    :class="[
      props.size === 'sm' ? 'h-10 px-5 text-[0.8125rem]' : 'h-11 px-6 text-[0.875rem]',
      props.variant === 'accent' ? 'bg-accent text-night hover:bg-white' : 'bg-ink text-paper hover:bg-accent-ink',
    ]"
  >
    <slot />
  </component>
</template>
