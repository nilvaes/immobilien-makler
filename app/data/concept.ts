import type { ContentImage } from './site'

export interface ConceptImage extends ContentImage {
  photographer: string
  source: string
}

// Stock photography for the private concept preview, not Muster properties or work.
// Replace these entries with approved client images before presenting real references.
export const conceptImages = {
  living: {
    src: '/images/concept/living-light.jpg',
    alt: 'Heller Wohnbereich mit großen Fenstern, Sitzgruppe und Holzboden – Beispielbild',
    width: 1800,
    height: 1201,
    photographer: 'Max Vakhtbovych',
    source: 'https://www.pexels.com/photo/light-living-room-in-luxury-apartment-in-daytime-7534561/',
  },
  detail: {
    src: '/images/concept/living-detail.jpg',
    alt: 'Blick durch einen offenen Wohn- und Essbereich – Beispielbild',
    width: 1400,
    height: 942,
    photographer: 'Max Vakhtbovych',
    source: 'https://www.pexels.com/photo/luxury-living-room-in-modern-apartment-7534563/',
  },
  apartment: {
    src: '/images/concept/apartment-character.jpg',
    alt: 'Wohnzimmer mit hohen Fenstern, farbigen Sesseln und Wandbildern – Beispielbild',
    width: 1400,
    height: 933,
    photographer: 'RDNE Stock project',
    source: 'https://www.pexels.com/photo/living-room-of-a-flat-in-an-apartment-building-8489374/',
  },
  facade: {
    src: '/images/concept/residential-facade.jpg',
    alt: 'Fassade eines Wohnhauses mit Balkonen und Dachgauben – Beispielbild',
    width: 1400,
    height: 2100,
    photographer: 'Markus Winkler',
    source: 'https://www.pexels.com/photo/elegant-european-residential-building-facade-32478753/',
  },
} satisfies Record<string, ConceptImage>

export const photography = {
  eyebrow: 'Vermarktung & Fotografie',
  titleLines: ['Eine Immobilie.', 'Ein guter erster Eindruck.'],
  intro: 'Gute Bilder machen Räume erlebbar. Ein klares Exposé bringt die wichtigen Informationen auf den Punkt.',
  benefits: [
    { title: 'Räume zeigen', text: 'Licht, Raumgefühl und die Besonderheiten Ihrer Immobilie.' },
    { title: 'Details sichtbar machen', text: 'Ein stimmiger Blick auf das, was Ihr Zuhause auszeichnet.' },
    { title: 'Klar präsentieren', text: 'Aussagekräftige Bilder und übersichtliche Informationen.' },
  ],
  previewNote: 'Stockfotografie für diese fiktive Portfolio-Demo.',
}

export interface ConceptProperty {
  id: string
  title: string
  category: string
  description: string
  image: ConceptImage
  placeholder: true
}

export const referencePreview = {
  eyebrow: 'Referenzen · Konzeptvorschau',
  titleLines: ['Jede Immobilie', 'hat ihren eigenen Charakter.'],
  intro: 'So könnten ausgewählte Referenzen hier präsentiert werden: mit starken Bildern und dem Blick für das Wesentliche.',
  note: 'Fiktive Objektbeispiele mit Stockfotos für dieses Portfolio-Projekt. Keine tatsächlich vermittelten Immobilien.',
  items: [
    { id: 'wohnen-licht', title: 'Licht & Weite', category: 'Wohnung · Innenansicht', description: 'Offene Räume, natürliche Materialien und viel Tageslicht.', image: conceptImages.living, placeholder: true },
    { id: 'wohnen-charakter', title: 'Wohnen mit Charakter', category: 'Wohnung · Innenansicht', description: 'Hohe Fenster und individuelle Details schaffen Atmosphäre.', image: conceptImages.apartment, placeholder: true },
    { id: 'wohnen-stadt', title: 'Zuhause in der Stadt', category: 'Wohnhaus · Außenansicht', description: 'Klassische Architektur mit Balkonen und markanter Fassade.', image: conceptImages.facade, placeholder: true },
  ] satisfies ConceptProperty[],
}
