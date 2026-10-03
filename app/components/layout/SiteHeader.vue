<script setup lang="ts">
import { navigation, valuationCta } from '~/data/site'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function updateScrolled() {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrolled)
})
</script>

<template>
  <header
    class="on-dark sticky top-0 z-40 border-b bg-night text-white transition-colors duration-300"
    :class="isScrolled ? 'border-white/10' : 'border-transparent'"
  >
    <div class="container-site flex h-18 items-center justify-between gap-8 lg:h-20">
      <SiteLogo tone="light" />

      <nav aria-label="Hauptnavigation" class="ml-auto hidden lg:block">
        <ul class="flex items-center gap-7 xl:gap-9">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="text-[0.9375rem] text-white/80 underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-200 hover:text-white hover:decoration-accent"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <BaseButton :to="valuationCta.to" size="sm" variant="accent" class="hidden lg:inline-flex">
        {{ valuationCta.shortLabel }}
      </BaseButton>

      <button
        type="button"
        class="-mr-2 inline-flex h-11 items-center gap-3 px-2 text-[0.9375rem] font-medium text-white lg:hidden"
        aria-haspopup="dialog"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="isMenuOpen = true"
      >
        Menü
        <span class="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span class="h-px w-full bg-white" />
          <span class="h-px w-full bg-white" />
        </span>
      </button>
    </div>

    <MobileMenu id="mobile-menu" v-model:open="isMenuOpen" />
  </header>
</template>
