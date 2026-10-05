<script setup lang="ts">
import { contactCta, navigation } from '~/data/site'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

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
    class="on-dark fixed inset-x-0 top-0 z-40 border-b text-white transition-[background-color,border-color,backdrop-filter,height] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
    :class="
      isScrolled || route.path !== '/'
        ? 'border-white/10 bg-night/90 backdrop-blur-md'
        : 'border-transparent bg-transparent'
    "
  >
    <div
      class="container-site flex items-center justify-between gap-8 transition-[height] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
      :class="isScrolled ? 'h-16 lg:h-18' : 'h-20 lg:h-24'"
    >
      <SiteLogo tone="light" :compact="isScrolled" />

      <nav aria-label="Hauptnavigation" class="ml-auto hidden lg:block">
        <ul
          class="flex items-center transition-[gap] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
          :class="isScrolled ? 'gap-6 xl:gap-8' : 'gap-7 xl:gap-9'"
        >
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="text-white/80 underline decoration-transparent decoration-1 underline-offset-[6px] transition-[color,font-size] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-white hover:decoration-accent"
              :class="isScrolled ? 'text-[0.875rem]' : 'text-[0.9375rem]'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink
        :to="contactCta.to"
        class="hidden text-[0.9375rem] font-semibold tracking-[0.02em] text-accent underline decoration-accent decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-white hover:decoration-white lg:inline-flex"
      >
        {{ contactCta.label }}
      </NuxtLink>

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
