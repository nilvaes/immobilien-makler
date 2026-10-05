<script setup lang="ts">
const route = useRoute()
const topics = ['Verkauf', 'Vermietung', 'Bewertung', 'Sonstiges'] as const
const topic = ref<string>('Verkauf')
const name = ref('')
const email = ref('')
const propertyType = ref('')
const postcode = ref('')
const message = ref('')
const submitted = ref(false)
const confirmation = ref<HTMLElement | null>(null)
const nameInput = ref<HTMLInputElement | null>(null)

watch(() => route.hash, (hash) => {
  if (hash === '#immobilienbewertung') {
    topic.value = 'Bewertung'
    submitted.value = false
  }
}, { immediate: true })

async function submitPreview() {
  // Deliberately no request, email, localStorage, or other persistence in this concept.
  submitted.value = true
  await nextTick()
  confirmation.value?.focus()
}

async function editPreview() {
  submitted.value = false
  await nextTick()
  nameInput.value?.focus()
}
</script>

<template>
  <div id="immobilienbewertung" class="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_16px_50px_-30px_rgb(10_18_36/0.2)] sm:p-8">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h3 id="enquiry-title" class="text-xl tracking-[-0.02em]">Ihr Anliegen</h3>
      <span class="rounded-md bg-accent-ink/8 px-2.5 py-1 text-xs font-medium text-accent-ink">Demoformular</span>
    </div>
    <p id="preview-note" class="mt-2 text-sm leading-relaxed text-muted">Konzeptvorschau: Dieses Formular sendet keine Daten.</p>

    <div v-if="submitted" ref="confirmation" tabindex="-1" role="status" class="mt-8 rounded-xl bg-paper p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink">
      <div class="flex size-12 items-center justify-center rounded-full bg-accent-ink/10 text-accent-ink" aria-hidden="true">
        <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12 4 4L19 6" /></svg>
      </div>
      <h4 class="mt-5 text-xl font-semibold text-ink">So sieht die Bestätigung aus.</h4>
      <p class="mt-3 text-sm leading-relaxed text-muted">Die Demo ist abgeschlossen. Es wurde keine Anfrage versendet. Für einen echten Kontakt nutzen Sie bitte Telefon oder E-Mail.</p>
      <button type="button" class="mt-6 min-h-11 font-semibold text-accent-ink underline underline-offset-4" @click="editPreview">Zurück zum Formular</button>
    </div>

    <form v-else class="mt-7 space-y-5" aria-labelledby="enquiry-title" aria-describedby="preview-note" @submit.prevent="submitPreview">
      <fieldset>
        <legend class="mb-3 text-sm font-medium">Worum geht es?</legend>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <label v-for="option in topics" :key="option" class="relative cursor-pointer">
            <input v-model="topic" type="radio" name="anliegen" :value="option" class="peer sr-only" required>
            <span class="flex min-h-11 items-center justify-center rounded-lg border border-ink/15 px-2 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-ink hover:border-accent-ink">{{ option }}</span>
          </label>
        </div>
      </fieldset>

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="enquiry-name" class="mb-2 block text-sm font-medium">Ihr Name <span class="text-muted">*</span></label>
          <input id="enquiry-name" ref="nameInput" v-model="name" class="enquiry-input" name="name" autocomplete="name" maxlength="120" required>
        </div>
        <div>
          <label for="enquiry-email" class="mb-2 block text-sm font-medium">E-Mail-Adresse <span class="text-muted">*</span></label>
          <input id="enquiry-email" v-model="email" class="enquiry-input" name="email" type="email" autocomplete="email" maxlength="254" required>
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="enquiry-property" class="mb-2 block text-sm font-medium">Immobilienart <span class="font-normal text-muted">(optional)</span></label>
          <select id="enquiry-property" v-model="propertyType" class="enquiry-input" name="immobilienart">
            <option value="">Bitte auswählen</option>
            <option>Wohnung</option>
            <option>Haus</option>
            <option>Mehrfamilienhaus</option>
            <option>Grundstück</option>
            <option>Andere Immobilie</option>
          </select>
        </div>
        <div>
          <label for="enquiry-postcode" class="mb-2 block text-sm font-medium">PLZ der Immobilie <span class="font-normal text-muted">(optional)</span></label>
          <input id="enquiry-postcode" v-model="postcode" class="enquiry-input" name="plz" inputmode="numeric" pattern="[0-9]{5}" maxlength="5" title="Bitte eine fünfstellige Postleitzahl eingeben.">
        </div>
      </div>

      <div>
        <label for="enquiry-message" class="mb-2 block text-sm font-medium">Ihre Nachricht <span class="font-normal text-muted">(optional)</span></label>
        <textarea id="enquiry-message" v-model="message" class="enquiry-input min-h-28 resize-y" name="nachricht" rows="3" maxlength="2000" placeholder="Was möchten Sie über Ihre Immobilie besprechen?" />
      </div>

      <p class="text-xs text-muted">* Pflichtfelder</p>
      <button type="submit" class="flex min-h-12 w-full items-center justify-between gap-4 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-ink">
        Anfrage ausprobieren
        <span class="text-lg" aria-hidden="true">→</span>
      </button>
    </form>
  </div>
</template>
