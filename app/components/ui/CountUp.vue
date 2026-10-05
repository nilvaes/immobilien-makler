<script setup lang="ts">
const props = defineProps<{ value: string }>()
const element = ref<HTMLElement | null>(null)
const displayedValue = ref(props.value)
let observer: IntersectionObserver | undefined
let frame = 0
let motionPreference: MediaQueryList | undefined

function finish() {
  cancelAnimationFrame(frame)
  observer?.disconnect()
  displayedValue.value = props.value
}

function handleMotionChange() {
  if (motionPreference?.matches) finish()
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const match = props.value.match(/^(\d+)(.*)$/)
  if (!match || motionPreference.matches || !('IntersectionObserver' in window)) return

  const target = Number(match[1])
  const suffix = match[2] ?? ''
  displayedValue.value = `0${suffix}`
  motionPreference.addEventListener('change', handleMotionChange)

  observer = new IntersectionObserver((entries) => {
    if (!entries.some(entry => entry.isIntersecting)) return
    observer?.disconnect()
    let startedAt: number | undefined

    function tick(now: number) {
      startedAt ??= now
      const progress = Math.min((now - startedAt) / 1600, 1)
      const eased = 1 - (1 - progress) ** 3
      displayedValue.value = `${Math.floor(target * eased)}${suffix}`
      if (progress < 1) frame = requestAnimationFrame(tick)
      else displayedValue.value = props.value
    }

    frame = requestAnimationFrame(tick)
  }, { threshold: 0.5, rootMargin: '0px 0px -10% 0px' })

  if (element.value) observer.observe(element.value)
})

onBeforeUnmount(() => {
  finish()
  motionPreference?.removeEventListener('change', handleMotionChange)
})
</script>

<template>
  <span ref="element" class="inline-block tabular-nums">
    <span class="sr-only">{{ value }}</span>
    <span aria-hidden="true">{{ displayedValue }}</span>
  </span>
</template>
