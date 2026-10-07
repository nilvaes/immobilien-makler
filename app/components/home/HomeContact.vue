<script setup lang="ts">
import { broker, company } from '~/data/site'
</script>

<template>
  <section id="kontakt" aria-labelledby="contact-title" class="relative border-t border-ink/10 bg-paper-deep py-16 sm:py-24 lg:py-28">
    <span id="immobilienbewertung" class="absolute top-0" aria-hidden="true" />
    <div class="container-site mx-auto max-w-5xl">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div v-reveal class="lg:col-span-5">
          <p class="eyebrow flex items-center gap-3 text-accent-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            Kontakt & Bewertung
          </p>
          <h2 id="contact-title" class="mt-6 text-heading">
            Ihr nächster Schritt.<br>
            <span class="text-accent-ink">Ein persönliches Gespräch.</span>
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-muted">Sie möchten verkaufen, vermieten oder den Wert Ihrer Immobilie einschätzen? Erzählen Sie mir, was Sie vorhaben.</p>
          <p class="mt-6 text-sm leading-relaxed text-muted" data-placeholder="true">Gemeinsam klären wir Ihre Fragen und besprechen die nächsten Schritte.</p>
        </div>

        <div v-reveal="100" class="on-dark rounded-2xl bg-night p-6 text-white shadow-[0_24px_60px_-40px_rgb(10_18_36/0.4)] sm:p-9 lg:col-span-7">
          <div class="flex items-center gap-4 border-b border-white/15 pb-7">
            <NuxtImg :src="broker.portrait.src" :alt="broker.name" width="80" height="80" sizes="80px" loading="lazy" class="size-16 shrink-0 rounded-full object-cover object-top sm:size-20" />
            <div>
              <p class="text-base font-semibold sm:text-lg">{{ broker.name }}</p>
              <p class="mt-1 text-sm text-white/60">{{ broker.role }}</p>
            </div>
          </div>

          <p class="mt-5 text-xs text-white/60">Portfolio-Demo · Fiktive Kontaktdaten</p>
          <address class="not-italic">
            <a :href="company.phone.href" class="contact-channel group flex items-center justify-between gap-4 border-b border-white/15 py-7">
              <span>
                <span class="block text-xs font-medium tracking-[0.08em] text-white/60 uppercase">Direkt anrufen</span>
                <span class="mt-3 block text-xl font-semibold tracking-tight sm:text-2xl">{{ company.phone.display }}</span>
              </span>
              <span class="contact-arrow flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-xl text-night" aria-hidden="true">↗</span>
            </a>
            <a :href="`mailto:${company.email}`" class="contact-channel group flex items-center justify-between gap-4 pt-7">
              <span class="min-w-0">
                <span class="block text-xs font-medium tracking-[0.08em] text-white/60 uppercase">Eine E-Mail schreiben</span>
                <span class="mt-3 block break-all text-base font-semibold sm:text-xl">{{ company.email }}</span>
              </span>
              <span class="contact-arrow flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl text-accent" aria-hidden="true">↗</span>
            </a>
          </address>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-channel {
  transition: color 450ms var(--ease-out-soft);
}

.contact-channel:hover {
  color: var(--color-accent);
}

.contact-arrow {
  transition: transform 450ms var(--ease-out-soft);
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .contact-channel:hover .contact-arrow {
    transform: translate(2px, -2px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-channel,
  .contact-arrow {
    transition: none;
  }
}
</style>
