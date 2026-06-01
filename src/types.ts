export type BrandStatus = 'new' | 'researching' | 'draft' | 'complete'

export interface SourceFile {
  id: string
  name: string
  type: 'pdf' | 'doc' | 'image' | 'url' | 'text'
  content?: string
  url?: string
}

export interface VoiceAttribute {
  trait: string
  description: string
  examples: string[]
}

export interface ColorSwatch {
  name: string
  hex: string
  usage: string
}

export interface FontPair {
  role: 'display' | 'body' | 'accent'
  family: string
  weight?: string
  notes: string
}

export interface Brand {
  id: string
  name: string
  url: string
  status: BrandStatus
  sources: SourceFile[]
  notes: string
  colors: ColorSwatch[]
  fonts: FontPair[]
  voiceAttributes: VoiceAttribute[]
  voiceDoc: string | null
  cssPackage: string | null
  designRef: string | null
  // Logo assets
  logoUrl?: string        // Primary logo — URL or base64 data URI
  logoReverseUrl?: string // Reverse/white logo — URL or base64 data URI
  logoNotes?: string      // Usage notes, file format info, etc.
  // scraped/analyzed data
  tagline?: string
  description?: string
  screenshotUrl?: string
}
