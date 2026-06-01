import { Plus, Trash2, CheckCircle, Circle, Loader2, FileEdit, Download, Upload, RotateCcw } from 'lucide-react'
import type { Brand, BrandStatus } from '../types'

const statusConfig: Record<BrandStatus, { label: string; color: string; icon: React.ReactNode }> = {
  new: { label: 'New', color: '#555', icon: <Circle size={10} /> },
  researching: { label: 'Researching', color: '#d4a853', icon: <Loader2 size={10} className="animate-spin" /> },
  draft: { label: 'Draft', color: '#6b9fd4', icon: <FileEdit size={10} /> },
  complete: { label: 'Complete', color: '#6bbf8e', icon: <CheckCircle size={10} /> },
}

interface Props {
  brands: Brand[]
  selectedId: string
  onSelect: (id: string) => void
  onAdd: () => void
  onDelete: (id: string) => void
  onExport: () => void
  onImport: () => void
  onReset: () => void
}

export function BrandSidebar({ brands, selectedId, onSelect, onAdd, onDelete, onExport, onImport, onReset }: Props) {
  const completedCount = brands.filter(b => b.status === 'complete').length

  return (
    <aside className="w-64 border-r border-white/8 flex flex-col bg-[#111] shrink-0">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 border-b border-white/8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#888] mb-1">Brand Studio</div>
        <div className="text-base font-semibold tracking-tight leading-tight">Kitchen Table<br/>Restaurants</div>
        <div className="text-xs text-[#666] mt-2">
          {completedCount}/{brands.length} brands complete
        </div>
        {/* Progress bar */}
        <div className="mt-2 h-[2px] bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#d4a853] transition-all duration-500"
            style={{ width: `${brands.length ? (completedCount / brands.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Brand list */}
      <div className="flex-1 overflow-y-auto py-2">
        {brands.map(brand => {
          const status = statusConfig[brand.status]
          const isSelected = brand.id === selectedId
          return (
            <div
              key={brand.id}
              onClick={() => onSelect(brand.id)}
              className={`group relative mx-2 my-0.5 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-white/10 text-white'
                  : 'hover:bg-white/5 text-[#aaa] hover:text-[#ddd]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium truncate ${isSelected ? 'text-white' : ''}`}>
                    {brand.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span style={{ color: status.color }}>{status.icon}</span>
                    <span className="text-[10px]" style={{ color: status.color }}>{status.label}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(brand.id) }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-white/10 text-[#666] hover:text-red-400"
                >
                  <Trash2 size={12} />
                </button>
              </div>
              {/* Deliverables dots */}
              <div className="flex gap-1 mt-1.5">
                {[brand.voiceDoc, brand.cssPackage, brand.designRef, (brand.logoUrl || brand.logoReverseUrl) ? 'has-logo' : null].map((item, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: item ? '#6bbf8e' : 'rgba(255,255,255,0.12)' }}
                    title={['Voice Doc', 'CSS Package', 'Design Ref', 'Logo Assets'][i]}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Add brand button */}
      <div className="p-3 border-t border-white/8 space-y-1.5">
        <button
          onClick={onAdd}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-dashed border-white/15 text-[#666] hover:text-[#aaa] hover:border-white/25 hover:bg-white/4 transition-all text-sm"
        >
          <Plus size={14} />
          Add Brand
        </button>
        <div className="flex gap-1.5">
          <button
            onClick={onExport}
            title="Export all brand data as JSON"
            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-white/4 text-[#555] hover:text-[#aaa] hover:bg-white/8 transition-all text-xs"
          >
            <Download size={12} /> Export
          </button>
          <button
            onClick={onImport}
            title="Import brand data from JSON"
            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-white/4 text-[#555] hover:text-[#aaa] hover:bg-white/8 transition-all text-xs"
          >
            <Upload size={12} /> Import
          </button>
          <button
            onClick={onReset}
            title="Reset to default brand data"
            className="flex items-center justify-center px-2 py-2 rounded-lg bg-white/4 text-[#555] hover:text-red-400 hover:bg-red-400/8 transition-all"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>
    </aside>
  )
}
