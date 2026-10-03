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
}

export const navigation: NavItem[] = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Referenzen', to: '/#referenzen' },
  { label: 'Immobilien', to: '/#immobilien' },
  { label: 'Über mich', to: '/#ueber-mich' },
  { label: 'Kontakt', to: '/#kontakt' },
]

export const valuationCta = {
  label: 'Immobilie bewerten lassen',
  shortLabel: 'Immobilie bewerten',
  to: '/#bewertung',
}

export const hero = {
  eyebrow: 'Immobilienmakler · Köln',
  titleLines: ['Immobilien in Köln.', 'Persönlich vermarktet.'],
  intro:
    'Ich bin Marc Philip Broichheuser. Wenn Sie Ihre Immobilie verkaufen, vermieten oder ihren Wert kennen möchten, begleite ich Sie persönlich – vom ersten Gespräch bis zur Übergabe.',
  secondaryLink: { label: 'Referenzen ansehen', to: '/#referenzen' },
  // TODO: copy into /public/images before launch instead of loading it from the current live site.
  backgroundImage: 'https://mpb-immobilien.de/images/hero-home.jpg',
}

export const broker = {
  name: 'Marc Philip Broichheuser',
  role: 'Immobilienmakler in Köln',
  portrait: {
    src: '/images/makler/marc-philip-broichheuser.jpg',
    alt: 'Porträt von Marc Philip Broichheuser im dunklen Sakko',
    width: 1122,
    height: 1402,
  } satisfies ContentImage,
  // TODO(client): interim studio portrait from the current site – replace with on-location shoot.
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
    // TODO(client): confirm start year. The current Impressum dates the § 34c licence to 02.12.2008,
    // which is not necessarily the start of brokerage activity.
    { value: 'Seit [Jahr]', label: 'in der Immobilienvermittlung tätig', placeholder: true },
    { value: 'Köln & Umgebung', label: 'Regionale Betreuung' },
    // Confirmed by the current Impressum: "Gewerbeanmeldung nach § 34c GewO … durch die Stadt Köln erteilt".
    { value: '§ 34c GewO', label: 'Erlaubnis erteilt durch die Stadt Köln' },
  ] satisfies TrustFact[],
  link: { label: 'Persönlich kennenlernen', to: '/#kontakt' },
}
