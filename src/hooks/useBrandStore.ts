import { useState, useEffect, useCallback } from 'react'
import type { Brand } from '../types'

const STORAGE_KEY = 'ktr-brand-studio-v1'

function loadFromStorage(): Brand[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length > 0) return parsed.map(sanitizeBrand)
    return null
  } catch {
    return null
  }
}

function saveToStorage(brands: Brand[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(brands))
  } catch (e) {
    console.warn('Could not save to localStorage:', e)
  }
}

/** Ensure every brand loaded from JSON/localStorage has all required fields */
function sanitizeBrand(b: Record<string, unknown>): Brand {
  return {
    id: (b.id as string) ?? Date.now().toString(),
    name: (b.name as string) ?? 'Unnamed',
    url: (b.url as string) ?? '',
    status: (b.status as Brand['status']) ?? 'new',
    sources: (b.sources as Brand['sources']) ?? [],
    notes: (b.notes as string) ?? '',
    colors: (b.colors as Brand['colors']) ?? [],
    fonts: (b.fonts as Brand['fonts']) ?? [],
    voiceAttributes: (b.voiceAttributes as Brand['voiceAttributes']) ?? [],
    voiceDoc: (b.voiceDoc as string | null) ?? null,
    cssPackage: (b.cssPackage as string | null) ?? null,
    designRef: (b.designRef as string | null) ?? null,
    logoUrl: b.logoUrl as string | undefined,
    logoReverseUrl: b.logoReverseUrl as string | undefined,
    logoNotes: b.logoNotes as string | undefined,
    tagline: b.tagline as string | undefined,
    description: b.description as string | undefined,
    screenshotUrl: b.screenshotUrl as string | undefined,
  }
}

async function loadInitialData(): Promise<Brand[] | null> {
  try {
    // Fetch the seed JSON from /public/initial-data.json
    const base = import.meta.env.BASE_URL ?? '/'
    const res = await fetch(`${base}initial-data.json`)
    if (!res.ok) return null
    const data = await res.json()
    const brands = data.brands ?? null
    return brands ? brands.map(sanitizeBrand) : null
  } catch {
    return null
  }
}

export function useBrandStore(fallbackBrands: Brand[]) {
  const [brands, setBrandsRaw] = useState<Brand[]>([])
  const [ready, setReady] = useState(false)

  // On mount: localStorage → initial-data.json → fallback
  useEffect(() => {
    const fromStorage = loadFromStorage()
    if (fromStorage) {
      setBrandsRaw(fromStorage)
      setReady(true)
    } else {
      loadInitialData().then(seeded => {
        const initial = seeded ?? fallbackBrands
        setBrandsRaw(initial)
        saveToStorage(initial)
        setReady(true)
      })
    }
  }, [])

  const setBrands = useCallback((updater: Brand[] | ((prev: Brand[]) => Brand[])) => {
    setBrandsRaw(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      saveToStorage(next)
      return next
    })
  }, [])

  const updateBrand = useCallback((id: string, updates: Partial<Brand>) => {
    setBrands(prev => prev.map(b => b.id === id ? { ...b, ...updates } : b))
  }, [setBrands])

  const addBrand = useCallback((brand: Brand) => {
    setBrands(prev => [...prev, brand])
  }, [setBrands])

  const deleteBrand = useCallback((id: string) => {
    setBrands(prev => prev.filter(b => b.id !== id))
  }, [setBrands])

  const resetToDefaults = useCallback(async () => {
    const seeded = await loadInitialData()
    const defaults = seeded ?? fallbackBrands
    setBrandsRaw(defaults)
    saveToStorage(defaults)
  }, [fallbackBrands])

  const exportData = useCallback(() => {
    const data = JSON.stringify({ version: '1.0', exportedAt: new Date().toISOString(), brands }, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ktr-brand-studio-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [brands])

  const importData = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target?.result as string)
        const imported: Brand[] = data.brands ?? data
        if (Array.isArray(imported)) {
          setBrands(imported)
        }
      } catch {
        alert('Invalid JSON file')
      }
    }
    reader.readAsText(file)
  }, [setBrands])

  return { brands, ready, updateBrand, addBrand, deleteBrand, resetToDefaults, exportData, importData }
}
