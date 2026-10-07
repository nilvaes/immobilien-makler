export interface NavItem {
  label: string
  to: string
}

export interface ContentImage {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * `placeholder: true` marks content not yet confirmed by the client; it must be replaced before launch.
 * It renders like normal copy and is exposed as a `data-placeholder` attribute for auditing.
 */
export interface ContentText {
  text: string
  placeholder?: boolean
}

export interface TrustFact {
  value: string
  label: string
  placeholder?: boolean
}

export const company = {
  name: 'Muster Immobilien',
  phone: { display: '0000 / 123 45 67', href: 'tel:+490001234567' },
  mobile: { display: '0000 / 765 43 21', href: 'tel:+490007654321' },
  email: 'info@muster-immobilien.example',
  // Fictional identity and non-deliverable sample contact details for the portfolio demo.
  logo: {
    src: '/images/brand/muster-logo.svg',
    alt: 'Muster Immobilien',
    width: 360,
    height: 100,
  } satisfies ContentImage,
}

export const navigation: NavItem[] = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Referenzen', to: '/#referenzen' },
  { label: 'Fotogalerie', to: '/referenz-fotografien' },
  { label: 'Über mich', to: '/#ueber-mich' },
]

export const valuationCta = {
  label: 'Immobilie bewerten lassen',
  shortLabel: 'Immobilie bewerten',
  to: '/#kontakt',
}

export const contactCta = {
  label: 'Kontakt aufnehmen',
  to: '/#kontakt',
}

export const hero = {
  eyebrow: 'Immobilienmakler · Köln',
  titleLines: ['Immobilien in Köln.', 'Persönlich vermarktet.'],
  intro:
    'Ich bin Max Mustermann. Wenn Sie Ihre Immobilie verkaufen, vermieten oder ihren Wert kennen möchten, begleite ich Sie persönlich – vom ersten Gespräch bis zur Übergabe.',
  secondaryLink: { label: 'Referenzen ansehen', to: '/#referenzen' },
  // Locally hosted, licensed stock image for the portfolio template.
  backgroundImage: '/images/concept/residential-facade.jpg',
  services: [
    { label: 'Verkauf', to: '/#verkauf' },
    { label: 'Vermietung', to: '/#vermietung' },
    { label: 'Bewertung', to: '/#bewertung' },
    { label: 'Immobilienfotografie', to: '/#fotografie' },
  ] satisfies NavItem[],
}

export const broker = {
  name: 'Max Mustermann',
  role: 'Immobilienmakler in Köln',
  portrait: {
    // Neutral illustration for the fictional broker; replace when adapting the template.
    src: '/images/makler/muster-portrait.svg',
    alt: 'Illustration als Musterporträt für Max Mustermann',
    width: 600,
    height: 750,
  } satisfies ContentImage,
}

export const about = {
  eyebrow: 'Über mich',
  titleLines: ['Persönliche Beratung', 'statt anonymer Vermittlung.'],
  paragraphs: [
    {
      // TODO(client): temporary copy – replace with approved personal introduction
      // (Werdegang, Weg in die Immobilienbranche, Bezug zu Köln).
      text: 'Hinter Muster Immobilien stehe ich persönlich. Vom ersten Gespräch bis zur Übergabe haben Sie einen Ansprechpartner, der Ihre Immobilie und Ihre Ziele kennt.',
      placeholder: true,
    },
    {
      // TODO(client): wording derived from the current website – confirm.
      text: 'Ich begleite Eigentümer in Köln und Umgebung durch den gesamten Prozess – von der Einschätzung des Marktwerts über professionelle Fotos und das Exposé bis zum Notartermin.',
      placeholder: true,
    },
  ] satisfies ContentText[],
  facts: [
    // TODO(client): confirm before launch — currently mirrored from the live site, not independently verified.
    { value: '10+', label: 'Jahre Erfahrung', placeholder: true },
    // TODO(client): confirm before launch — currently mirrored from the live site, not independently verified.
    { value: '150+', label: 'Verkäufe', placeholder: true },
    { value: '100%', label: 'Kundenzufriedenheit', placeholder: true },
  ] satisfies TrustFact[],
  link: { label: 'Persönlich kennenlernen', to: '/#kontakt' },
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  summary: string
  bullets: string[]
  link: NavItem
  placeholder?: boolean
}

export const services = {
  eyebrow: 'Leistungen',
  titleLines: ['Für Ihre Immobilie.', 'Für Ihren nächsten Schritt.'],
  items: [
    {
      id: 'verkauf',
      number: '01',
      title: 'Verkauf',
      // TODO(client): confirm wording — derived from the current website.
      summary: 'Ihre Immobilie überzeugend vermarktet. Vom ersten Exposé bis zur Übergabe.',
      placeholder: true,
      bullets: [
        'Marktgerechter Preis & Verkaufsstrategie',
        'Professionelle Fotos & Exposé',
        'Interessentenprüfung & Begleitung zum Notar',
      ],
      link: { label: 'Verkauf besprechen', to: '/#kontakt' },
    },
    {
      id: 'vermietung',
      number: '02',
      title: 'Vermietung',
      // TODO(client): confirm wording — derived from the current website.
      summary: 'Passende Mieter finden. Mit sorgfältiger Auswahl und weniger Aufwand für Sie.',
      placeholder: true,
      bullets: [
        'Gezielte Vermarktung',
        'Sorgfältige Prüfung der Interessenten',
        'Begleitung bis zum Vertragsabschluss',
      ],
      link: { label: 'Vermietung besprechen', to: '/#kontakt' },
    },
    {
      id: 'bewertung',
      number: '03',
      title: 'Bewertung',
      // TODO(client): confirm format (Marktwertinschätzung vs. Gutachten), price and turnaround.
      summary: 'Wissen, was Ihre Immobilie wert ist. Als Grundlage für Ihre nächste Entscheidung.',
      placeholder: true,
      bullets: [
        'Lage, Zustand & Markt im Blick',
        'Persönliche Einschätzung',
        'Unverbindlich ins Gespräch kommen',
      ],
      link: { label: 'Immobilie bewerten lassen', to: valuationCta.to },
    },
  ] satisfies ServiceItem[],
}

export const process = {
  eyebrow: 'So arbeiten wir',
  titleLines: ['Von der ersten Frage', 'bis zur Übergabe.'],
  // TODO(client): approve these concise descriptions of the workflow before launch.
  placeholder: true,
  steps: [
    {
      number: '01',
      title: 'Kennenlernen & einschätzen',
      text: 'Wir besprechen Ihre Ziele und schauen gemeinsam auf Ihre Immobilie und die aktuelle Marktlage.',
    },
    {
      number: '02',
      title: 'Planen & präsentieren',
      text: 'Eine passende Strategie, professionelle Bilder und ein klares Exposé bilden die Grundlage der Vermarktung.',
    },
    {
      number: '03',
      title: 'Besichtigen & verhandeln',
      text: 'Interessenten werden geprüft, Besichtigungen koordiniert und die nächsten Schritte mit Ihnen abgestimmt.',
    },
    {
      number: '04',
      title: 'Abschließen & übergeben',
      text: 'Vom Vertragsabschluss bis zur Übergabe bleibt die Begleitung persönlich – beim Verkauf auch beim Notartermin.',
    },
  ],
}

export const faq = {
  eyebrow: 'Häufige Fragen',
  titleLines: ['Ihre Fragen.', 'Klar beantwortet.'],
  // TODO(client): approve these general answers and adapt them to the template offer before launch.
  placeholder: true,
  items: [
    {
      question: 'Wie wird der Wert meiner Immobilie eingeschätzt?',
      answer: 'Lage, Größe, Zustand und Ausstattung werden zusammen mit der aktuellen Marktlage betrachtet. Ein persönliches Gespräch und ein Blick auf die Immobilie helfen, diese Faktoren einzuordnen und eine nachvollziehbare Einschätzung zu erhalten.',
    },
    {
      question: 'Welche Unterlagen brauche ich für den Verkauf?',
      answer: 'Hilfreich sind zum Beispiel ein Grundriss, Angaben zur Wohnfläche, ein Grundbuchauszug und ein Energieausweis. Je nach Immobilie kommen weitere Unterlagen hinzu. Im ersten Gespräch lässt sich klären, was bereits vorliegt und was noch benötigt wird.',
    },
    {
      question: 'Wie lange dauert es, eine Immobilie zu verkaufen?',
      answer: 'Das hängt unter anderem von Lage, Zustand, Angebotspreis und Nachfrage ab. Eine feste Dauer lässt sich vorab nicht versprechen. Nach einer ersten Einschätzung können der Ablauf und ein realistischer Zeitrahmen gemeinsam besprochen werden.',
    },
    {
      question: 'Wie wird die Maklerprovision vereinbart?',
      answer: 'Die Provision und ihre Verteilung hängen von der Art des Geschäfts und den geltenden Vorgaben ab. Die konkreten Konditionen werden vor einer Beauftragung besprochen und vertraglich festgehalten.',
    },
    {
      question: 'Kann ich mich melden, wenn ich noch unentschlossen bin?',
      answer: 'Ja. Sie müssen noch keinen festen Verkaufs- oder Vermietungsplan haben. Ein erstes Gespräch kann helfen, Ihre Fragen zu sortieren und mögliche nächste Schritte zu besprechen.',
    },
  ],
}
