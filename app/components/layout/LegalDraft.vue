<script setup lang="ts">
defineProps<{ title: string; intro: string; items: string[] }>()
</script>

<template>
  <section class="bg-paper pt-36 pb-20 sm:pt-44 sm:pb-28">
    <div class="container-site mx-auto max-w-3xl">
      <NuxtLink to="/" class="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent-ink"><span aria-hidden="true">←</span> Zur Startseite</NuxtLink>
      <p class="eyebrow mt-8 text-accent-ink">Konzeptvorschau · Entwurf</p>
      <h1 class="mt-5 text-heading">{{ title }}</h1>
      <div class="mt-8 rounded-2xl border border-accent-ink/20 bg-white p-6 sm:p-8">
        <h2 class="text-lg font-semibold">Diese Seite ist noch nicht fertiggestellt.</h2>
        <p class="mt-3 leading-relaxed text-muted">{{ intro }}</p>
      </div>
      <h2 class="mt-10 text-xl font-semibold">Vor der Veröffentlichung ergänzen</h2>
      <ul class="mt-5 space-y-4 text-muted">
        <li v-for="item in items" :key="item" class="flex gap-3 leading-relaxed"><span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-ink" aria-hidden="true" />{{ item }}</li>
      </ul>
      <p class="mt-10 text-sm leading-relaxed text-muted">Diese Entwurfsseite dient ausschließlich der Präsentation des Website-Konzepts.</p>
    </div>
  </section>
</template>
