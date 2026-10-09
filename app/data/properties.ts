import { conceptImages, type ConceptProperty } from './concept'

export interface ReferenceProperty extends ConceptProperty {
  location: string
  status: 'Verkauft' | 'Vermietet'
  area: number
  rooms: number
  type: string
  highlights: string[]
  story: string
}

// All property descriptions and specifications are fictional portfolio examples.
export const properties: ReferenceProperty[] = [
  {
    id: 'wohnen-licht', title: 'Licht & Weite', category: 'Eigentumswohnung',
    description: 'Offenes Wohnen mit viel Tageslicht und Platz für den Alltag.',
    image: conceptImages.living, placeholder: true, location: 'Köln · Sülz',
    status: 'Verkauft', area: 95, rooms: 3, type: 'Eigentumswohnung',
    highlights: ['Offener Wohn- und Essbereich', 'Große Fensterflächen', 'Natürliche Materialien'],
    story: 'Ein großzügiger Wohnbereich bildet den Mittelpunkt dieser Beispielwohnung. Die klare Raumaufteilung verbindet gemeinsames Wohnen mit Rückzugsmöglichkeiten – ein Zuhause für unterschiedliche Lebensphasen.',
  },
  {
    id: 'wohnen-charakter', title: 'Wohnen mit Charakter', category: 'Mietwohnung',
    description: 'Hohe Fenster, individuelle Details und ein lebendiges Wohngefühl.',
    image: conceptImages.apartment, placeholder: true, location: 'Köln · Ehrenfeld',
    status: 'Vermietet', area: 78, rooms: 2, type: 'Mietwohnung',
    highlights: ['Lichtdurchflutete Räume', 'Individuelle Gestaltung', 'Urbanes Wohnumfeld'],
    story: 'Diese fiktive Wohnung zeigt, wie besondere Details einem Zuhause Persönlichkeit geben. Hohe Fenster und ein vielseitiger Wohnbereich schaffen Raum für eigene Ideen mitten in der Stadt.',
  },
  {
    id: 'wohnen-stadt', title: 'Zuhause in der Stadt', category: 'Mehrfamilienhaus',
    description: 'Klassische Architektur mit Balkonen und einer markanten Fassade.',
    image: conceptImages.facade, placeholder: true, location: 'Köln · Lindenthal',
    status: 'Verkauft', area: 320, rooms: 12, type: 'Mehrfamilienhaus',
    highlights: ['Charaktervolle Fassade', 'Balkone zum Außenbereich', 'Mehrere Wohneinheiten'],
    story: 'Das Beispielhaus verbindet klassische Architektur mit städtischem Wohnen. Die gegliederte Fassade und die Balkone prägen den ersten Eindruck und machen den Charakter des Gebäudes sichtbar.',
  },
]

export const propertyDemoNote = 'Fiktive Beispielobjekte: Standorte, Flächen und Vermittlungsstatus sind erfunden. Die Stockfotos dienen nur der Gestaltung und zeigen keine realen Angebote.'
