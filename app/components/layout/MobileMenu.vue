<script setup lang="ts">
import { company, contactCta, navigation } from '~/data/site'

const open = defineModel<boolean>('open', { required: true })
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

watch(open, (isOpen) => {
  const el = dialog.value
  if (!el) return
  if (isOpen && !el.open) el.showModal()
  if (!isOpen && el.open) el.close()
})

let desktopQuery: MediaQueryList | undefined

function closeOnDesktop(event: MediaQueryListEvent) {
  if (event.matches) open.value = false
}

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 64rem)')
  desktopQuery.addEventListener('change', closeOnDesktop)
})

onBeforeUnmount(() => {
  desktopQuery?.removeEventListener('change', closeOnDesktop)
})
</script>

<template>
  <dialog
    ref="dialog"
    aria-label="Menü"
    class="mobile-menu m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-paper p-0 text-ink"
    @close="open = false"
  >
    <div class="flex min-h-full flex-col">
      <div class="container-site flex h-20 shrink-0 items-center justify-between border-b border-line">
        <SiteLogo @click="open = false" />
        <button
          type="button"
          class="-mr-2 inline-flex h-11 items-center gap-3 px-2 text-[0.9375rem] font-medium"
          @click="open = false"
        >
          Schließen
          <span class="relative block size-5" aria-hidden="true">
            <span class="absolute top-1/2 left-0 h-px w-full rotate-45 bg-ink" />
            <span class="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-ink" />
          </span>
        </button>
      </div>

      <nav aria-label="Hauptnavigation" class="container-site flex-1 pt-6">
        <ul>
          <li v-for="item in navigation" :key="item.to" class="border-b border-line">
            <NuxtLink
              :to="item.to"
              class="block py-4 font-sans text-[1.875rem] leading-tight"
              @click="open = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="container-site space-y-6 pt-10 pb-10">
        <BaseButton :to="contactCta.to" variant="accent" class="w-full" @click="open = false">
          {{ contactCta.label }}
        </BaseButton>
        <dl class="grid grid-cols-2 gap-4 text-[0.9375rem]">
          <div>
            <dt class="eyebrow text-muted">Telefon</dt>
            <dd class="mt-2"><a :href="company.phone.href" class="underline decoration-line underline-offset-4">{{ company.phone.display }}</a></dd>
          </div>
          <div>
            <dt class="eyebrow text-muted">E-Mail</dt>
            <dd class="mt-2"><a :href="`mailto:${company.email}`" class="underline decoration-line underline-offset-4">{{ company.email }}</a></dd>
          </div>
        </dl>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.mobile-menu[open] {
  animation: menu-in 220ms var(--ease-out-soft);
}

.mobile-menu::backdrop {
  background: transparent;
}

@keyframes menu-in {
  from {
    opacity: 0;
  }
}
</style>
