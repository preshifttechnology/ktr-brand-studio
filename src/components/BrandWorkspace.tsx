import { useState } from 'react'
import type { Brand } from '../types'
import { OverviewTab } from './tabs/OverviewTab'
import { SourcesTab } from './tabs/SourcesTab'
import { VoiceTab } from './tabs/VoiceTab'
import { DesignTab } from './tabs/DesignTab'
import { CSSTab } from './tabs/CSSTab'
import { Globe, Files, Mic2, Palette, Code2 } from 'lucide-react'

const TABS = [
  { id: 'overview', label: 'Overview', icon: Globe },
  { id: 'sources', label: 'Sources', icon: Files },
  { id: 'voice', label: 'Voice', icon: Mic2 },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'css', label: 'CSS', icon: Code2 },
] as const

type TabId = typeof TABS[number]['id']

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

export function BrandWorkspace({ brand, onUpdate }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  const getTabStatus = (tabId: TabId) => {
    switch (tabId) {
      case 'sources': return brand.sources.length > 0 ? 'has-data' : 'empty'
      case 'voice': return brand.voiceDoc ? 'complete' : brand.voiceAttributes.length > 0 ? 'has-data' : 'empty'
      case 'design': return (brand.designRef && (brand.logoUrl || brand.logoReverseUrl)) ? 'complete' : (brand.designRef || brand.colors.length > 0 || brand.logoUrl) ? 'has-data' : 'empty'
      case 'css': return brand.cssPackage ? 'complete' : 'empty'
      default: return 'empty'
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Brand header */}
      <div className="px-8 pt-6 pb-0 border-b border-white/8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight">{brand.name}</h1>
              <StatusBadge status={brand.status} />
            </div>
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#666] hover:text-[#d4a853] transition-colors mt-0.5 block"
              >
                {brand.url}
              </a>
            )}
            {brand.tagline && (
              <p className="text-sm text-[#888] mt-1 italic">"{brand.tagline}"</p>
            )}
          </div>

          {/* Deliverables status */}
          <div className="flex gap-3 text-xs">
            {[
              { label: 'Voice Doc', value: brand.voiceDoc },
              { label: 'CSS Pkg', value: brand.cssPackage },
              { label: 'Design Ref', value: brand.designRef },
            ].map(({ label, value }) => (
              <div key={label} className={`px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-wider transition-all ${
                value
                  ? 'border-[#6bbf8e]/40 text-[#6bbf8e] bg-[#6bbf8e]/8'
                  : 'border-white/8 text-[#444]'
              }`}>
                {value ? '✓ ' : ''}{label}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1">
          {TABS.map(({ id, label, icon: Icon }) => {
            const tabStatus = getTabStatus(id)
            const isActive = activeTab === id
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-t-lg transition-all ${
                  isActive
                    ? 'text-white bg-white/5 border-b-2 border-[#d4a853]'
                    : 'text-[#666] hover:text-[#aaa] hover:bg-white/3'
                }`}
              >
                <Icon size={13} />
                {label}
                {tabStatus === 'complete' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6bbf8e] ml-0.5" />
                )}
                {tabStatus === 'has-data' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] ml-0.5" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'overview' && <OverviewTab brand={brand} onUpdate={onUpdate} />}
        {activeTab === 'sources' && <SourcesTab brand={brand} onUpdate={onUpdate} />}
        {activeTab === 'voice' && <VoiceTab brand={brand} onUpdate={onUpdate} />}
        {activeTab === 'design' && <DesignTab brand={brand} onUpdate={onUpdate} />}
        {activeTab === 'css' && <CSSTab brand={brand} onUpdate={onUpdate} />}
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: Brand['status'] }) {
  const configs = {
    new: { label: 'New', bg: 'bg-white/8', text: 'text-[#666]' },
    researching: { label: 'Researching', bg: 'bg-[#d4a853]/12', text: 'text-[#d4a853]' },
    draft: { label: 'Draft', bg: 'bg-[#6b9fd4]/12', text: 'text-[#6b9fd4]' },
    complete: { label: 'Complete', bg: 'bg-[#6bbf8e]/12', text: 'text-[#6bbf8e]' },
  }
  const { label, bg, text } = configs[status]
  return (
    <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full ${bg} ${text}`}>
      {label}
    </span>
  )
}
