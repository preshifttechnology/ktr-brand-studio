import { useState, useEffect } from 'react'
import type { Brand, VoiceAttribute } from '../../types'
import { Sparkles, Plus, Trash2, Download, Copy, Check, MessageSquare } from 'lucide-react'

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

export function VoiceTab({ brand, onUpdate }: Props) {
  const [copied, setCopied] = useState(false)

  // Auto-populate voice attributes from voiceDoc JSON on load
  useEffect(() => {
    if (brand.voiceDoc && brand.voiceAttributes.length === 0) {
      try {
        const data = JSON.parse(brand.voiceDoc)
        if (data.voiceAttributes?.length > 0) {
          onUpdate({ voiceAttributes: data.voiceAttributes })
        }
      } catch {}
    }
  }, [brand.id])

  const requestGeneration = () => {
    if (typeof (window as any).sendPrompt === 'function') {
      (window as any).sendPrompt(
        `Generate a brand voice reference JSON for the "${brand.name}" restaurant. ` +
        `Description: ${brand.description || 'N/A'}. ` +
        `Notes: ${(brand.notes || '').slice(0, 400)}. ` +
        `Return ONLY valid JSON matching the voiceDoc format with keys: voiceAttributes (array of {trait, description, examples[]}), toneGuidelines ({do[], dont[]}), vocabularyBank ({powerWords[], avoidWords[]}), writingSamples ({heroHeadline, menuDescription, socialPost, emailSubject, aboutBlurb}), summary.`
      )
    } else {
      alert('Open this artifact inside a Claude.ai chat to use AI generation.')
    }
  }

  const copyDoc = () => {
    if (!brand.voiceDoc) return
    const data = JSON.parse(brand.voiceDoc)
    const text = formatVoiceDoc(brand.name, data)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadDoc = () => {
    if (!brand.voiceDoc) return
    const data = JSON.parse(brand.voiceDoc)
    const text = formatVoiceDoc(brand.name, data)
    const blob = new Blob([text], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${brand.name.toLowerCase().replace(/\s+/g, '-')}-voice-reference.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const addAttribute = () => {
    const newAttr: VoiceAttribute = { trait: 'New Trait', description: '', examples: [] }
    onUpdate({ voiceAttributes: [...brand.voiceAttributes, newAttr] })
  }

  const updateAttribute = (index: number, updates: Partial<VoiceAttribute>) => {
    const updated = brand.voiceAttributes.map((a, i) => i === index ? { ...a, ...updates } : a)
    onUpdate({ voiceAttributes: updated })
  }

  const removeAttribute = (index: number) => {
    onUpdate({ voiceAttributes: brand.voiceAttributes.filter((_, i) => i !== index) })
  }

  const voiceData = brand.voiceDoc ? (() => { try { return JSON.parse(brand.voiceDoc) } catch { return null } })() : null

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm font-medium text-[#aaa]">Brand Voice Reference</h2>
          <p className="text-xs text-[#555] mt-0.5">Voice attributes, tone guidelines, and writing samples</p>
        </div>
        <div className="flex gap-2">
          {brand.voiceDoc && (
            <>
              <button onClick={copyDoc} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white transition-all">
                {copied ? <Check size={13} className="text-[#6bbf8e]" /> : <Copy size={13} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button onClick={downloadDoc} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white transition-all">
                <Download size={13} />
                .md
              </button>
            </>
          )}
          <button
            onClick={requestGeneration}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e0b86a] transition-all"
          >
            <MessageSquare size={14} />
            {brand.voiceDoc ? 'Regenerate via Chat' : 'Generate via Chat'}
          </button>
        </div>
      </div>

      {!brand.voiceDoc && (
        <div className="rounded-lg border border-[#d4a853]/20 bg-[#d4a853]/5 p-4 mb-6">
          <p className="text-xs text-[#d4a853]">
            💡 Click "Generate via Chat" to ask Claude to generate this brand's voice doc in the chat above, then paste the JSON result into the Notes field and click the import button — or ask Claude to update the brand studio directly.
          </p>
        </div>
      )}

      {/* Voice Attributes */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs uppercase tracking-wider text-[#666]">Voice Attributes</h3>
          <button onClick={addAttribute} className="text-xs text-[#666] hover:text-[#d4a853] flex items-center gap-1 transition-colors">
            <Plus size={11} /> Add
          </button>
        </div>
        <div className="space-y-2">
          {brand.voiceAttributes.length === 0 && (
            <p className="text-xs text-[#444] py-4 text-center">No voice attributes yet.</p>
          )}
          {brand.voiceAttributes.map((attr, i) => (
            <div key={i} className="group rounded-lg border border-white/8 bg-white/3 p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <input
                    value={attr.trait}
                    onChange={e => updateAttribute(i, { trait: e.target.value })}
                    className="bg-transparent text-sm font-semibold text-[#d4a853] focus:outline-none border-b border-transparent hover:border-white/15 focus:border-[#d4a853]/40 transition-all w-full"
                  />
                  <input
                    value={attr.description}
                    onChange={e => updateAttribute(i, { description: e.target.value })}
                    placeholder="What does this mean for the brand?"
                    className="bg-transparent text-xs text-[#888] focus:outline-none mt-1.5 w-full placeholder-[#333]"
                  />
                  {attr.examples && attr.examples.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {attr.examples.map((ex, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-white/6 text-[#777] italic">"{ex}"</span>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => removeAttribute(i)} className="opacity-0 group-hover:opacity-100 p-1 text-[#444] hover:text-red-400 transition-all">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {voiceData?.toneGuidelines && (
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-[#6bbf8e]/20 bg-[#6bbf8e]/5 p-4">
            <h3 className="text-xs uppercase tracking-wider text-[#6bbf8e] mb-2">✓ Do</h3>
            <ul className="space-y-1.5">
              {voiceData.toneGuidelines.do?.map((item: string, i: number) => (
                <li key={i} className="text-xs text-[#aaa]">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-400/20 bg-red-400/5 p-4">
            <h3 className="text-xs uppercase tracking-wider text-red-400 mb-2">✗ Don't</h3>
            <ul className="space-y-1.5">
              {voiceData.toneGuidelines.dont?.map((item: string, i: number) => (
                <li key={i} className="text-xs text-[#aaa]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {voiceData?.vocabularyBank && (
        <div className="mb-6 rounded-lg border border-white/8 bg-white/3 p-4">
          <h3 className="text-xs uppercase tracking-wider text-[#666] mb-3">Vocabulary Bank</h3>
          <div className="mb-2">
            <div className="text-[10px] text-[#555] mb-1.5">Power Words</div>
            <div className="flex flex-wrap gap-1.5">
              {voiceData.vocabularyBank.powerWords?.map((w: string, i: number) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#d4a853]/15 text-[#d4a853]">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#555] mb-1.5">Avoid</div>
            <div className="flex flex-wrap gap-1.5">
              {voiceData.vocabularyBank.avoidWords?.map((w: string, i: number) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-red-400/10 text-red-400 line-through">{w}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {voiceData?.writingSamples && (
        <div className="rounded-lg border border-white/8 bg-white/3 p-4">
          <h3 className="text-xs uppercase tracking-wider text-[#666] mb-3">Writing Samples</h3>
          <div className="space-y-3">
            {Object.entries(voiceData.writingSamples).map(([key, value]) => (
              <div key={key}>
                <div className="text-[10px] text-[#555] uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                <p className="text-sm text-[#ccc] italic">"{value as string}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function formatVoiceDoc(name: string, data: any): string {
  return `# Brand Voice Reference: ${name}\n\n${data.summary || ''}\n\n## Voice Attributes\n${
    (data.voiceAttributes || []).map((a: VoiceAttribute) =>
      `\n### ${a.trait}\n${a.description}\nExamples: ${a.examples?.join(' | ')}`
    ).join('\n')
  }\n\n## Tone Guidelines\nDo:\n${data.toneGuidelines?.do?.map((d: string) => `- ${d}`).join('\n')}\n\nDon't:\n${
    data.toneGuidelines?.dont?.map((d: string) => `- ${d}`).join('\n')
  }\n\n## Vocabulary\nPower Words: ${data.vocabularyBank?.powerWords?.join(', ')}\nAvoid: ${
    data.vocabularyBank?.avoidWords?.join(', ')
  }\n\n## Writing Samples\n${
    Object.entries(data.writingSamples || {}).map(([k, v]) => `**${k}:** "${v}"`).join('\n')
  }\n`
}
