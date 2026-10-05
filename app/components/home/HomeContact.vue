<script setup lang="ts">
import { broker, company } from '~/data/site'
</script>

<template>
  <section id="kontakt" aria-labelledby="contact-title" class="border-t border-ink/10 bg-paper-deep py-16 sm:py-24 lg:py-28">
    <div class="container-site mx-auto max-w-5xl">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div v-reveal class="lg:col-span-5">
          <p class="eyebrow flex items-center gap-3 text-accent-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            Kontakt & Bewertung
          </p>
          <h2 id="contact-title" class="mt-6 text-heading">
            Lassen Sie uns über<br>
            <span class="text-accent-ink">Ihre Immobilie sprechen.</span>
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-muted">Sie möchten verkaufen, vermieten oder den Wert Ihrer Immobilie einschätzen? Der erste Schritt ist ein persönliches Gespräch.</p>

          <div class="mt-8 flex items-center gap-4">
            <NuxtImg :src="broker.portrait.src" :alt="broker.name" width="64" height="64" sizes="64px" loading="lazy" class="size-16 rounded-full object-cover object-top" />
            <div>
              <p class="text-base font-semibold">{{ broker.name }}</p>
              <p class="mt-1 text-sm text-muted">{{ broker.role }}</p>
            </div>
          </div>

          <address class="mt-8 space-y-5 border-y border-ink/10 py-7 not-italic">
            <div>
              <p class="text-xs font-medium tracking-[0.08em] text-muted uppercase">Direkt anrufen</p>
              <a :href="company.phone.href" class="mt-2 inline-flex min-h-11 items-center gap-3 text-xl font-semibold transition-colors hover:text-accent-ink">
                {{ company.phone.display }} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p class="text-xs font-medium tracking-[0.08em] text-muted uppercase">Per E-Mail</p>
              <a :href="`mailto:${company.email}`" class="mt-2 inline-flex min-h-11 items-center gap-3 text-base font-medium transition-colors hover:text-accent-ink">
                {{ company.email }} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </address>

          <div class="mt-7" data-placeholder="true">
            <h3 class="text-sm font-semibold">Was folgt auf Ihre Anfrage?</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">Im ersten Gespräch klären wir Ihr Anliegen und besprechen, welche nächsten Schritte zu Ihrer Immobilie passen.</p>
          </div>
        </div>
        <div class="lg:col-span-7">
          <ContactPreviewForm />
        </div>
      </div>
    </div>
  </section>
</template>
