import type { Directive } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Elements already on screen at hydration stay visible; hiding them would cause a flash.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return
        el.classList.add('is-revealed')
        observer.disconnect()
        observers.delete(el)
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof reveal
  }
}
