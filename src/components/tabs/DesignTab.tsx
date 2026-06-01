import { useState, useEffect, useRef } from 'react'
import type { Brand, ColorSwatch, FontPair } from '../../types'
import { Plus, Copy, Check, MessageSquare, Upload, X, ExternalLink, FileImage } from 'lucide-react'

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

// ── Logo input: accepts file upload OR a URL ──────────────────
function LogoInput({
  label, value, darkBg, onUpdate, onClear
}: {
  label: string
  value?: string
  darkBg?: boolean
  onUpdate: (val: string) => void
  onClear: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [urlMode, setUrlMode] = useState(false)
  const [urlDraft, setUrlDraft] = useState('')

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      if (ev.target?.result) onUpdate(ev.target.result as string)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const handleUrl = () => {
    if (urlDraft.trim()) {
      onUpdate(urlDraft.trim())
      setUrlDraft('')
      setUrlMode(false)
    }
  }

  const bg = darkBg ? 'bg-[#10312B]' : 'bg-[#F8F3EB]'
  const emptyBg = darkBg ? 'bg-white/5' : 'bg-white/5'

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider text-[#666]">{label}</span>
        {value && (
          <div className="flex items-center gap-1.5">
            {!value.startsWith('data:') && (
              <a href={value} target="_blank" rel="noreferrer"
                className="text-[10px] text-[#555] hover:text-[#d4a853] transition-colors">
                <ExternalLink size={10} />
              </a>
            )}
            <button onClick={onClear}
              className="text-[10px] text-[#555] hover:text-red-400 transition-colors">
              <X size={11} />
            </button>
          </div>
        )}
      </div>

      {value ? (
        /* Preview */
        <div
          className={`rounded-lg border border-white/8 ${bg} flex items-center justify-center p-4 min-h-[100px] group relative cursor-pointer`}
          onClick={() => inputRef.current?.click()}
          title="Click to replace"
        >
          <img
            src={value}
            alt={label}
            className="max-h-[80px] max-w-full object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-xs text-white">Replace</span>
          </div>
          <input ref={inputRef} type="file" accept="image/*,.svg" className="hidden" onChange={handleFile} />
        </div>
      ) : urlMode ? (
        /* URL input mode */
        <div className={`rounded-lg border border-white/8 ${emptyBg} p-3`}>
          <input
            autoFocus
            value={urlDraft}
            onChange={e => setUrlDraft(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleUrl(); if (e.key === 'Escape') setUrlMode(false) }}
            placeholder="https://..."
            className="w-full bg-transparent text-xs text-white placeholder-[#444] focus:outline-none mb-2"
          />
          <div className="flex gap-1.5">
            <button onClick={handleUrl} disabled={!urlDraft.trim()}
              className="flex-1 text-[10px] px-2 py-1 rounded bg-[#d4a853] text-[#0f0f0f] font-semibold disabled:opacity-40 transition-all">
              Set URL
            </button>
            <button onClick={() => setUrlMode(false)}
              className="text-[10px] px-2 py-1 rounded bg-white/8 text-[#666] hover:text-white transition-all">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        /* Empty state */
        <div className={`rounded-lg border-2 border-dashed border-white/10 ${emptyBg} min-h-[100px] flex flex-col items-center justify-center gap-2 p-4`}>
          <FileImage size={20} className="text-[#444]" />
          <div className="flex gap-1.5">
            <button
              onClick={() => inputRef.current?.click()}
              className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/6 text-[#666] hover:text-[#aaa] hover:bg-white/10 transition-all flex items-center gap-1"
            >
              <Upload size={10} /> Upload
            </button>
            <button
              onClick={() => setUrlMode(true)}
              className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/6 text-[#666] hover:text-[#aaa] hover:bg-white/10 transition-all flex items-center gap-1"
            >
              <ExternalLink size={10} /> URL
            </button>
          </div>
          <input ref={inputRef} type="file" accept="image/*,.svg" className="hidden" onChange={handleFile} />
        </div>
      )}
    </div>
  )
}

// ── Main DesignTab ────────────────────────────────────────────
export function DesignTab({ brand, onUpdate }: Props) {
  const [copied, setCopied] = useState(false)

  // Auto-populate colors and fonts from designRef JSON on load
  useEffect(() => {
    if (brand.designRef && (brand.colors.length === 0 || brand.fonts.length === 0)) {
      try {
        const data = JSON.parse(brand.designRef)
        const updates: any = {}
        if (data.colors?.length > 0 && brand.colors.length === 0) updates.colors = data.colors
        if (data.fonts?.length > 0 && brand.fonts.length === 0) updates.fonts = data.fonts
        if (Object.keys(updates).length > 0) onUpdate(updates)
      } catch {}
    }
  }, [brand.id])

  const generateDesignRef = () => {
    if (typeof (window as any).sendPrompt === 'function') {
      (window as any).sendPrompt(
        `Generate a design reference JSON for "${brand.name}" restaurant. ` +
        `Colors: ${brand.colors.map(c => c.name + ':' + c.hex).join(', ') || 'derive from brand'}. ` +
        `Description: ${(brand.description || '').slice(0, 200)}. Notes: ${(brand.notes || '').slice(0, 300)}. ` +
        `Return ONLY JSON with keys: colors (array of {name,hex,usage}), fonts (array of {role,family,weight,notes}), moodKeywords[], designPrinciples[], imageStyle, layoutApproach`
      )
    } else {
      alert('Open this artifact inside a Claude.ai chat to use AI generation.')
    }
  }

  const designData = brand.designRef
    ? (() => { try { return JSON.parse(brand.designRef) } catch { return null } })()
    : null

  const addColor = () => {
    const newColor: ColorSwatch = { name: 'New Color', hex: '#888888', usage: '' }
    onUpdate({ colors: [...brand.colors, newColor] })
  }

  const updateColor = (i: number, updates: Partial<ColorSwatch>) => {
    onUpdate({ colors: brand.colors.map((c, idx) => idx === i ? { ...c, ...updates } : c) })
  }

  const copyDesignRef = () => {
    if (!brand.designRef) return
    navigator.clipboard.writeText(brand.designRef)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-8 max-w-3xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm font-medium text-[#aaa]">Design Reference</h2>
          <p className="text-xs text-[#555] mt-0.5">Logos, colors, typography, and visual system for {brand.name}</p>
        </div>
        <div className="flex gap-2">
          {brand.designRef && (
            <button onClick={copyDesignRef} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white transition-all">
              {copied ? <Check size={13} className="text-[#6bbf8e]" /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy JSON'}
            </button>
          )}
          <button
            onClick={generateDesignRef}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e0b86a] transition-all"
          >
            <MessageSquare size={14} />
            {brand.designRef ? 'Regenerate via Chat' : 'Generate via Chat'}
          </button>
        </div>
      </div>

      {/* ── LOGOS ─────────────────────────────────────── */}
      <div className="mb-7">
        <h3 className="text-xs uppercase tracking-wider text-[#666] mb-3">Logo Assets</h3>
        <div className="flex gap-3 mb-3">
          <LogoInput
            label="Primary Logo"
            value={brand.logoUrl}
            darkBg={false}
            onUpdate={val => onUpdate({ logoUrl: val })}
            onClear={() => onUpdate({ logoUrl: undefined })}
          />
          <LogoInput
            label="Reverse Logo"
            value={brand.logoReverseUrl}
            darkBg={true}
            onUpdate={val => onUpdate({ logoReverseUrl: val })}
            onClear={() => onUpdate({ logoReverseUrl: undefined })}
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#555] mb-1.5">
            Logo Usage Notes
          </label>
          <textarea
            value={brand.logoNotes || ''}
            onChange={e => onUpdate({ logoNotes: e.target.value })}
            placeholder="Minimum sizes, clear space rules, approved backgrounds, file formats available, what to avoid..."
            rows={2}
            className="w-full bg-white/4 border border-white/8 rounded-lg px-3 py-2 text-xs text-[#aaa] placeholder-[#333] focus:outline-none focus:border-white/15 transition-all resize-none"
          />
        </div>
      </div>

      {/* ── COLOR PALETTE ─────────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs uppercase tracking-wider text-[#666]">Color Palette</h3>
          <button onClick={addColor} className="text-xs text-[#666] hover:text-[#d4a853] flex items-center gap-1 transition-colors">
            <Plus size={11} /> Add
          </button>
        </div>
        {brand.colors.length === 0 ? (
          <p className="text-xs text-[#444] py-4 text-center">No colors yet. Generate the Design Ref to extract brand colors.</p>
        ) : (
          <div className="grid grid-cols-5 gap-2">
            {brand.colors.map((color, i) => (
              <div key={i} className="group">
                <div
                  className="w-full aspect-square rounded-lg mb-2 cursor-pointer border border-white/8 transition-transform hover:scale-105"
                  style={{ background: color.hex }}
                  onClick={() => {
                    const hex = prompt('Enter hex color:', color.hex)
                    if (hex) updateColor(i, { hex })
                  }}
                  title="Click to edit hex"
                />
                <input
                  value={color.name}
                  onChange={e => updateColor(i, { name: e.target.value })}
                  className="bg-transparent text-xs text-[#aaa] focus:outline-none w-full text-center font-medium"
                />
                <div className="text-[10px] text-[#555] text-center">{color.hex}</div>
                <div className="text-[10px] text-[#444] text-center truncate" title={color.usage}>{color.usage}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── TYPOGRAPHY ────────────────────────────────── */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-wider text-[#666] mb-3">Typography</h3>
        {brand.fonts.length === 0 ? (
          <p className="text-xs text-[#444] py-4 text-center">No fonts yet. Generate the Design Ref to get font recommendations.</p>
        ) : (
          <div className="space-y-2">
            {brand.fonts.map((font, i) => (
              <div key={i} className="rounded-lg border border-white/8 bg-white/3 p-4">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full ${
                    font.role === 'display' ? 'bg-[#d4a853]/15 text-[#d4a853]' :
                    font.role === 'body' ? 'bg-[#6b9fd4]/15 text-[#6b9fd4]' :
                    'bg-[#6bbf8e]/15 text-[#6bbf8e]'
                  }`}>{font.role}</span>
                  <div className="text-sm font-semibold text-white">{font.family}</div>
                  {font.weight && <span className="text-xs text-[#555]">w{font.weight}</span>}
                </div>
                <p className="text-xs text-[#666] mt-1.5">{font.notes}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── DESIGN PRINCIPLES / IMAGERY / MOOD ───────── */}
      {designData && (
        <div className="grid grid-cols-2 gap-4">
          {designData.designPrinciples && (
            <div className="rounded-lg border border-white/8 bg-white/3 p-4">
              <h3 className="text-xs uppercase tracking-wider text-[#666] mb-2">Design Principles</h3>
              <ul className="space-y-1.5">
                {designData.designPrinciples.map((p: string, i: number) => (
                  <li key={i} className="text-xs text-[#aaa] flex items-start gap-1.5">
                    <span className="text-[#d4a853] mt-0.5">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {designData.imageStyle && (
            <div className="rounded-lg border border-white/8 bg-white/3 p-4">
              <h3 className="text-xs uppercase tracking-wider text-[#666] mb-2">Imagery Style</h3>
              <p className="text-xs text-[#aaa]">{designData.imageStyle}</p>
              {designData.layoutApproach && (
                <>
                  <h3 className="text-xs uppercase tracking-wider text-[#666] mb-2 mt-3">Layout Approach</h3>
                  <p className="text-xs text-[#aaa]">{designData.layoutApproach}</p>
                </>
              )}
            </div>
          )}
          {designData.moodKeywords && (
            <div className="col-span-2 flex flex-wrap gap-1.5">
              {designData.moodKeywords.map((k: string, i: number) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/6 text-[#888] border border-white/8">{k}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
