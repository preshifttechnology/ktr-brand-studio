import { useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
  onAdd: (name: string, url: string) => void
}

export function AddBrandDialog({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  if (!open) return null

  const handleSubmit = () => {
    if (!name.trim()) return
    onAdd(name.trim(), url.trim())
    setName('')
    setUrl('')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#1a1a1a] border border-white/12 rounded-xl w-full max-w-md mx-4 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold">Add Restaurant Brand</h2>
            <p className="text-xs text-[#666] mt-0.5">Enter the brand name and website URL to get started</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded hover:bg-white/8 text-[#666] hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Brand Name</label>
            <input
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="e.g. The Rusty Fork"
              className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 focus:bg-white/8 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wider">Website URL</label>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="https://example.com"
              className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 text-[#888] hover:text-white hover:bg-white/5 transition-all text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="flex-1 px-4 py-2.5 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e0b86a] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Add Brand
          </button>
        </div>
      </div>
    </div>
  )
}
