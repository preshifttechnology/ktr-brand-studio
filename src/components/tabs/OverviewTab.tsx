import { useState } from 'react'
import type { Brand } from '../../types'
import { Globe, FileText, ChevronDown } from 'lucide-react'
import { MessageSquare } from 'lucide-react'

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

const STATUS_OPTIONS: Brand['status'][] = ['new', 'researching', 'draft', 'complete']

export function OverviewTab({ brand, onUpdate }: Props) {
  const [error, setError] = useState<string | null>(null)

  const analyzeWebsite = () => {
    if (typeof (window as any).sendPrompt === 'function') {
      (window as any).sendPrompt(
        `Analyze the restaurant website at ${brand.url} and return a JSON summary with keys: tagline, description, cuisine, tone, voiceAttributes (string array), targetAudience, keyMessages (string array). Return ONLY JSON, no markdown.`
      )
    } else {
      alert('Open this artifact inside a Claude.ai chat to use AI generation.')
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* URL field */}
        <div className="col-span-2">
          <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Website URL</label>
          <div className="flex gap-2">
            <input
              value={brand.url}
              onChange={e => onUpdate({ url: e.target.value })}
              placeholder="https://restaurantname.com"
              className="flex-1 bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 transition-all"
            />
            <button
              onClick={analyzeWebsite}
              disabled={!brand.url}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e0b86a] disabled:opacity-40 disabled:cursor-not-allowed transition-all whitespace-nowrap"
            >
              <Globe size={14} />
              'Analyze Site'
            </button>
          </div>
          {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Status</label>
          <div className="relative">
            <select
              value={brand.status}
              onChange={e => onUpdate({ status: e.target.value as Brand['status'] })}
              className="w-full appearance-none bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853]/50 transition-all cursor-pointer"
            >
              {STATUS_OPTIONS.map(s => (
                <option key={s} value={s} className="bg-[#1a1a1a]">
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-3 text-[#666] pointer-events-none" />
          </div>
        </div>

        {/* Tagline */}
        <div>
          <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Tagline</label>
          <input
            value={brand.tagline || ''}
            onChange={e => onUpdate({ tagline: e.target.value })}
            placeholder="Their main slogan"
            className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 transition-all"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Brand Description</label>
          <textarea
            value={brand.description || ''}
            onChange={e => onUpdate({ description: e.target.value })}
            placeholder="Describe the restaurant concept, positioning, and identity..."
            rows={3}
            className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 transition-all resize-none"
          />
        </div>

        {/* Notes */}
        <div className="col-span-2">
          <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">
            <FileText size={11} className="inline mr-1.5 mb-0.5" />
            Research Notes
          </label>
          <textarea
            value={brand.notes}
            onChange={e => onUpdate({ notes: e.target.value })}
            placeholder="Add notes from your research: target audience, competitive positioning, key differentiators..."
            rows={5}
            className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 transition-all resize-none font-mono"
          />
        </div>
      </div>

      {/* Analysis result indicator */}
      {brand.description && (
        <div className="mt-2 p-4 rounded-lg bg-[#d4a853]/8 border border-[#d4a853]/20">
          <div className="text-xs text-[#d4a853] uppercase tracking-wider mb-1">AI Analysis Complete</div>
          <p className="text-sm text-[#ccc]">{brand.description}</p>
        </div>
      )}
    </div>
  )
}
