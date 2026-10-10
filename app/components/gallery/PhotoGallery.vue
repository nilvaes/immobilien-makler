<script setup lang="ts">
import type { ConceptImage } from '~/data/concept'

const props = defineProps<{ images: { title: string; image: ConceptImage }[] }>()
const baseURL = useRuntimeConfig().app.baseURL
const imageUrl = (src: string) => `${baseURL.replace(/\/$/, '')}/${src.replace(/^\//, '')}`
const dialog = useTemplateRef<HTMLDialogElement>('viewer')
const activeIndex = ref(0)
const activePhoto = computed(() => props.images[activeIndex.value])
let touchStart: { x: number; y: number } | undefined

function openPhoto(index: number) {
  activeIndex.value = index
  dialog.value?.showModal()
}

function movePhoto(direction: number) {
  activeIndex.value = (activeIndex.value + direction + props.images.length) % props.images.length
}

function startSwipe(event: TouchEvent) {
  const touch = event.touches[0]
  touchStart = touch ? { x: touch.clientX, y: touch.clientY } : undefined
}

function endSwipe(event: TouchEvent) {
  const touch = event.changedTouches[0]
  if (touch && touchStart) {
    const dx = touch.clientX - touchStart.x
    const dy = touch.clientY - touchStart.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) movePhoto(dx < 0 ? 1 : -1)
  }
  touchStart = undefined
}
</script>

<template>
  <ul class="grid gap-6 sm:grid-cols-2 sm:gap-8">
    <li v-for="(photo, index) in images" :key="photo.image.src" v-reveal>
      <button type="button" class="group block w-full rounded-xl text-left" :aria-label="`${photo.title} – Bild ${index + 1} vergrößern`" aria-haspopup="dialog" @click="openPhoto(index)">
        <span class="image-zoom relative block overflow-hidden rounded-xl bg-paper-deep">
          <NuxtImg :src="photo.image.src" :alt="photo.image.alt" :width="photo.image.width" :height="photo.image.height" sizes="sm:100vw md:50vw xl:640px" loading="lazy" class="aspect-[3/2] w-full object-cover object-[center_40%]" />
          <span class="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-white/95 text-xl text-ink shadow-sm" aria-hidden="true">↗</span>
        </span>
        <span class="mt-4 flex items-center justify-between gap-4">
          <span class="text-lg font-semibold transition-colors duration-300 group-hover:text-accent-ink">{{ photo.title }}</span>
          <span class="text-xs text-muted">0{{ index + 1 }}</span>
        </span>
      </button>
    </li>
  </ul>

  <dialog ref="viewer" aria-label="Fotogalerie – Konzeptbilder" class="photo-viewer on-dark fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-night p-0 text-white" @click.self="dialog?.close()" @keydown.left.prevent="movePhoto(-1)" @keydown.right.prevent="movePhoto(1)">
    <div class="flex h-full flex-col">
      <header class="flex shrink-0 items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <p class="text-xs text-white/60 sm:text-sm">Konzeptgalerie · Stockfotografie</p>
        <button type="button" autofocus class="flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold transition-colors hover:text-accent" @click="dialog?.close()">Schließen <span class="text-xl" aria-hidden="true">×</span></button>
      </header>
      <div class="flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16" @touchstart.passive="startSwipe" @touchend.passive="endSwipe" @touchcancel="touchStart = undefined">
        <Transition name="photo" mode="out-in">
          <img v-if="activePhoto" :key="activePhoto.image.src" :src="imageUrl(activePhoto.image.src)" :alt="activePhoto.image.alt" :width="activePhoto.image.width" :height="activePhoto.image.height" class="max-h-full max-w-full object-contain" draggable="false">
        </Transition>
      </div>
      <div class="flex shrink-0 items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <button type="button" aria-label="Vorheriges Bild" class="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-xl transition-colors hover:border-accent hover:text-accent" @click="movePhoto(-1)"><span aria-hidden="true">←</span></button>
        <div class="text-center" aria-live="polite" aria-atomic="true">
          <p class="text-sm font-semibold">{{ activePhoto?.title }}</p>
          <p class="mt-1 text-xs text-white/60">{{ activeIndex + 1 }} / {{ images.length }} · Beispielbild</p>
        </div>
        <button type="button" aria-label="Nächstes Bild" class="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-xl transition-colors hover:border-accent hover:text-accent" @click="movePhoto(1)"><span aria-hidden="true">→</span></button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.photo-viewer::backdrop {
  background: var(--color-night);
}

@media (prefers-reduced-motion: no-preference) {
  .photo-viewer[open] {
    animation: viewer-in 250ms var(--ease-out-soft);
  }

  .photo-enter-active,
  .photo-leave-active {
    transition: opacity 150ms ease;
  }

  .photo-enter-from,
  .photo-leave-to {
    opacity: 0;
  }

  @keyframes viewer-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}
</style>
