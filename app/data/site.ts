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
  name: 'MPB Immobilien',
  phone: { display: '0221 / 56 08 30 68', href: 'tel:+4922156083068' },
  mobile: { display: '0176 / 24 66 39 20', href: 'tel:+4917624663920' },
  email: 'info@mpb-immobilien.de',
  // White + teal logo for dark grounds. A dark-on-light SVG would be better for the mobile menu.
  logo: {
    src: '/images/brand/logo-light.png',
    alt: 'MPB Immobilien',
    width: 676,
    height: 314,
  } satisfies ContentImage,
}

export const navigation: NavItem[] = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Referenzen', to: '/#referenzen' },
  { label: 'Immobilien', to: '/#immobilien' },
  { label: 'Über mich', to: '/#ueber-mich' },
]

export const valuationCta = {
  label: 'Immobilie bewerten lassen',
  shortLabel: 'Immobilie bewerten',
  to: '/#bewertung',
}

export const contactCta = {
  label: 'Kontakt aufnehmen',
  to: '/#kontakt',
}

export const hero = {
  eyebrow: 'Immobilienmakler · Köln',
  titleLines: ['Immobilien in Köln.', 'Persönlich vermarktet.'],
  intro:
    'Ich bin Marc Philip Broichheuser. Wenn Sie Ihre Immobilie verkaufen, vermieten oder ihren Wert kennen möchten, begleite ich Sie persönlich – vom ersten Gespräch bis zur Übergabe.',
  secondaryLink: { label: 'Referenzen ansehen', to: '/#referenzen' },
  // TODO: copy into /public/images before launch instead of loading it from the current live site.
  backgroundImage: 'https://mpb-immobilien.de/images/hero-home.jpg',
  services: [
    { label: 'Verkauf', to: '/#verkauf' },
    { label: 'Vermietung', to: '/#vermietung' },
    { label: 'Bewertung', to: '/#bewertung' },
    { label: 'Immobilienfotografie', to: '/#verkauf' },
  ] satisfies NavItem[],
}

export const broker = {
  name: 'Marc Philip Broichheuser',
  role: 'Immobilienmakler in Köln',
  portrait: {
    // Interim composite. TODO(client): replace with a real on-location shoot.
    src: '/images/makler/marc-ueber-mich-portrait.jpg',
    alt: 'Marc Philip Broichheuser vor einer modernen Innenraumkulisse mit Stadtblick',
    width: 598,
    height: 852,
  } satisfies ContentImage,
}

export const about = {
  eyebrow: 'Über mich',
  titleLines: ['Persönliche Beratung', 'statt anonymer Vermittlung.'],
  paragraphs: [
    {
      // TODO(client): temporary copy – replace with approved personal introduction
      // (Werdegang, Weg in die Immobilienbranche, Bezug zu Köln).
      text: 'Hinter MPB Immobilien stehe ich persönlich. Vom ersten Gespräch bis zur Übergabe haben Sie einen Ansprechpartner, der Ihre Immobilie und Ihre Ziele kennt.',
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
    { value: '100%', label: 'Kundenzufriedenheit' },
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
  titleLines: ['Drei Leistungen.', 'Ein persönlicher Ansprechpartner.'],
  intro:
    'Ob Verkauf, Vermietung oder Bewertung – ich begleite Sie in Köln und Umgebung mit einem klaren Prozess und direkter Erreichbarkeit.',
  items: [
    {
      id: 'verkauf',
      number: '01',
      title: 'Verkauf',
      // TODO(client): confirm wording — derived from the current website.
      summary: 'Strategisch und zielgerichtet – vom ersten Exposé bis zur Notarunterschrift.',
      placeholder: true,
      bullets: [
        'Marktgerechte Preisfindung und Verkaufsstrategie',
        'Professionelle Fotos und starkes Exposé',
        'Vorqualifizierte Interessenten und Verhandlungsführung',
        'Begleitung bis zum Notartermin und zur Übergabe',
      ],
      link: { label: 'Verkauf besprechen', to: '/#kontakt' },
    },
    {
      id: 'vermietung',
      number: '02',
      title: 'Vermietung',
      // TODO(client): confirm wording — derived from the current website.
      summary: 'Die richtigen Mieter finden – sicher, sorgfältig und rechtssicher vermittelt.',
      placeholder: true,
      bullets: [
        'Zielgruppengenaue Vermarktung Ihrer Immobilie',
        'Auswahl und Prüfung geeigneter Interessenten',
        'Transparente Abstimmung vor Vertragsabschluss',
        'Entlastung im gesamten Vermietungsprozess',
      ],
      link: { label: 'Vermietung besprechen', to: '/#kontakt' },
    },
    {
      id: 'bewertung',
      number: '03',
      title: 'Bewertung',
      // TODO(client): confirm format (Marktwertinschätzung vs. Gutachten), price and turnaround.
      summary: 'Fundierte Markteinschätzung als Grundlage für Ihre nächste Entscheidung.',
      placeholder: true,
      bullets: [
        'Einschätzung nach Lage, Zustand und aktueller Marktlage',
        'Persönliches Gespräch statt anonymer Online-Rechner',
        'Klare Einordnung für Verkauf, Vermietung oder Orientierung',
        'Unverbindlicher Einstieg in die Zusammenarbeit',
      ],
      link: { label: 'Immobilie bewerten lassen', to: '/#bewertung' },
    },
  ] satisfies ServiceItem[],
}
