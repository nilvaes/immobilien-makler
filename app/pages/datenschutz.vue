<script setup lang="ts">
import LegalDraft from '~/components/layout/LegalDraft.vue'

useHead({ title: 'Datenschutz – Entwurf | MPB Immobilien', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
const items = [
  'Verantwortlicher und Kontakt für Datenschutzanliegen.',
  'Informationen zur tatsächlichen Hosting- und Serverkonfiguration.',
  'Beschreibung der eingesetzten Funktionen, Dienste und Datenverarbeitung.',
  'Informationen zu Anfragen, Aufbewahrung und Betroffenenrechten nach Prüfung.',
]
</script>

<template>
  <LegalDraft title="Datenschutz" intro="Die Datenschutzhinweise werden auf die endgültige technische Umsetzung und die tatsächlich eingesetzten Dienste abgestimmt. Das Demoformular in dieser Konzeptvorschau versendet keine Daten." :items="items" />
</template>
