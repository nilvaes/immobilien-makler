<script setup lang="ts">
import LegalDraft from '~/components/layout/LegalDraft.vue'

useHead({ title: 'Impressum – Entwurf | Muster Immobilien', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
const items = [
  'Bestätigte Angaben zum Anbieter, zur Anschrift und zu den Kontaktmöglichkeiten.',
  'Zutreffende Register-, Steuer- und berufsbezogene Angaben.',
  'Weitere Angaben nach Prüfung und Freigabe durch den Betreiber.',
]
</script>

<template>
  <LegalDraft title="Impressum" intro="Die vollständigen Anbieterangaben werden vor dem Start mit dem Betreiber abgestimmt und hier eingesetzt." :items="items" />
</template>
