import { useState } from 'react'
import type { Brand } from '../../types'
import { Sparkles, Copy, Check, Download } from 'lucide-react'
import { MessageSquare } from 'lucide-react'

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

export function CSSTab({ brand, onUpdate }: Props) {
  const [copied, setCopied] = useState(false)
  const [activeView, setActiveView] = useState<'code' | 'preview'>('code')

  const generateCSS = () => {
    if (typeof (window as any).sendPrompt === 'function') {
      (window as any).sendPrompt(
        `Generate a complete CSS custom properties package for "${brand.name}" restaurant. ` +
        `Colors: ${brand.colors.map(c=>c.name+' '+c.hex+' ('+c.usage+')').join(', ') || 'derive from brand'}. ` +
        `Fonts: ${brand.fonts.map(f=>f.role+': '+f.family).join(', ') || 'derive from brand'}. ` +
        `Description: ${(brand.description||'').slice(0,200)}. ` +
        `Return only valid CSS with :root variables, base typography, utility classes, and component styles. No markdown.`
      )
    } else {
      alert('Open this artifact inside a Claude.ai chat to use AI generation.')
    }
  }

  const copyCSS = () => {
    if (!brand.cssPackage) return
    navigator.clipboard.writeText(brand.cssPackage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadCSS = () => {
    if (!brand.cssPackage) return
    const blob = new Blob([brand.cssPackage], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${brand.name.toLowerCase().replace(/\s+/g, '-')}-brand.css`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Build preview HTML
  const previewHTML = brand.cssPackage ? `<!DOCTYPE html>
<html>
<head>
<style>${brand.cssPackage}</style>
<style>
body { padding: 2rem; background: var(--color-background, #fff); color: var(--color-text, #333); font-family: var(--font-body, sans-serif); }
.preview-grid { display: grid; gap: 2rem; max-width: 800px; margin: 0 auto; }
</style>
</head>
<body>
<div class="preview-grid brand-preview">
  <div>
    <h1>${brand.name}</h1>
    <p>${brand.tagline || 'Where every meal is an experience.'}</p>
  </div>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;">
    <button class="btn btn-primary">Reserve a Table</button>
    <button class="btn btn-secondary">View Menu</button>
  </div>
  <div class="card">
    <h2>About Us</h2>
    <p>${brand.description || 'A restaurant dedicated to exceptional cuisine and warm hospitality.'}</p>
  </div>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;">
    ${brand.colors.map(c => `<div style="width:60px;height:60px;background:${c.hex};border-radius:8px;display:flex;align-items:end;padding:4px;font-size:10px;color:white;text-shadow:0 1px 2px rgba(0,0,0,0.5)">${c.name}</div>`).join('')}
  </div>
</div>
</body>
</html>` : ''

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm font-medium text-[#aaa]">CSS Package</h2>
          <p className="text-xs text-[#555] mt-0.5">Custom properties, typography, and utility classes for {brand.name}</p>
        </div>
        <div className="flex gap-2">
          {brand.cssPackage && (
            <>
              <div className="flex rounded-lg overflow-hidden border border-white/10">
                <button
                  onClick={() => setActiveView('code')}
                  className={`px-3 py-1.5 text-xs transition-all ${activeView === 'code' ? 'bg-white/10 text-white' : 'text-[#666] hover:text-[#aaa]'}`}
                >
                  Code
                </button>
                <button
                  onClick={() => setActiveView('preview')}
                  className={`px-3 py-1.5 text-xs transition-all ${activeView === 'preview' ? 'bg-white/10 text-white' : 'text-[#666] hover:text-[#aaa]'}`}
                >
                  Preview
                </button>
              </div>
              <button onClick={copyCSS} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white transition-all">
                {copied ? <Check size={13} className="text-[#6bbf8e]" /> : <Copy size={13} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button onClick={downloadCSS} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white transition-all">
                <Download size={13} />
                .css
              </button>
            </>
          )}
          <button
            onClick={generateCSS}
            
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e0b86a] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <MessageSquare size={14} />
            {brand.cssPackage ? 'Regenerate via Chat' : 'Generate via Chat'}
          </button>
        </div>
      </div>

      {!brand.colors.length && !brand.fonts.length && !brand.cssPackage && (
        <div className="rounded-lg border border-[#d4a853]/20 bg-[#d4a853]/5 p-4 mb-4">
          <p className="text-xs text-[#d4a853]">
            💡 Generate the Design Reference first to extract colors and fonts — they'll be used to build an accurate CSS package.
          </p>
        </div>
      )}

      {brand.cssPackage ? (
        activeView === 'code' ? (
          <div className="relative">
            <pre className="bg-[#111] border border-white/8 rounded-xl p-5 text-xs text-[#9cdcfe] overflow-auto max-h-[60vh] font-mono leading-relaxed">
              {brand.cssPackage}
            </pre>
          </div>
        ) : (
          <div className="border border-white/8 rounded-xl overflow-hidden bg-white" style={{ height: '60vh' }}>
            <iframe
              srcDoc={previewHTML}
              className="w-full h-full"
              title="CSS Preview"
              sandbox="allow-same-origin"
            />
          </div>
        )
      ) : (
        <div className="border-2 border-dashed border-white/8 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">{ }</div>
          <p className="text-sm text-[#555]">No CSS package generated yet</p>
          <p className="text-xs text-[#444] mt-1">Complete the Design tab first for best results</p>
        </div>
      )}
    </div>
  )
}
