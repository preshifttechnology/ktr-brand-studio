import { useRef } from 'react'
import type { Brand, SourceFile } from '../../types'
import { Upload, FileText, Link, Trash2, Plus } from 'lucide-react'

interface Props {
  brand: Brand
  onUpdate: (updates: Partial<Brand>) => void
}

const FILE_ICONS: Record<SourceFile['type'], React.ReactNode> = {
  pdf: <FileText size={14} className="text-red-400" />,
  doc: <FileText size={14} className="text-blue-400" />,
  image: <FileText size={14} className="text-purple-400" />,
  url: <Link size={14} className="text-[#d4a853]" />,
  text: <FileText size={14} className="text-[#6bbf8e]" />,
}

export function SourcesTab({ brand, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const addUrl = () => {
    const url = prompt('Enter URL:')
    if (!url) return
    const newSource: SourceFile = {
      id: Date.now().toString(),
      name: url,
      type: 'url',
      url,
    }
    onUpdate({ sources: [...brand.sources, newSource] })
  }

  const addTextNote = () => {
    const name = prompt('Name this text note:')
    if (!name) return
    const newSource: SourceFile = {
      id: Date.now().toString(),
      name,
      type: 'text',
      content: '',
    }
    onUpdate({ sources: [...brand.sources, newSource] })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newSources: SourceFile[] = files.map(file => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      type: file.name.endsWith('.pdf') ? 'pdf' : file.name.match(/\.(doc|docx)$/) ? 'doc' : 'text',
      content: '',
    }))
    onUpdate({ sources: [...brand.sources, ...newSources] })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removeSource = (id: string) => {
    onUpdate({ sources: brand.sources.filter(s => s.id !== id) })
  }

  const updateSourceContent = (id: string, content: string) => {
    onUpdate({
      sources: brand.sources.map(s => s.id === id ? { ...s, content } : s)
    })
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <h2 className="text-sm font-medium text-[#aaa] mb-1">Source Files</h2>
        <p className="text-xs text-[#555]">Upload brand guidelines, menus, marketing copy, and other reference materials for {brand.name}.</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mb-5">
        <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleFileUpload} accept=".pdf,.doc,.docx,.txt" />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white hover:bg-white/8 transition-all"
        >
          <Upload size={13} />
          Upload Files
        </button>
        <button
          onClick={addUrl}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white hover:bg-white/8 transition-all"
        >
          <Link size={13} />
          Add URL
        </button>
        <button
          onClick={addTextNote}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[#aaa] hover:text-white hover:bg-white/8 transition-all"
        >
          <Plus size={13} />
          Text Note
        </button>
      </div>

      {/* Sources list */}
      {brand.sources.length === 0 ? (
        <div
          className="border-2 border-dashed border-white/8 rounded-xl p-12 text-center cursor-pointer hover:border-white/15 transition-all"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload size={24} className="text-[#444] mx-auto mb-3" />
          <p className="text-sm text-[#555]">Drop files here or click to upload</p>
          <p className="text-xs text-[#444] mt-1">PDFs, Word docs, and text files</p>
        </div>
      ) : (
        <div className="space-y-2">
          {brand.sources.map(source => (
            <div key={source.id} className="group rounded-lg border border-white/8 bg-white/3 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                {FILE_ICONS[source.type]}
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[#ccc] truncate">{source.name}</div>
                  <div className="text-[10px] text-[#555] uppercase">{source.type}</div>
                </div>
                <button
                  onClick={() => removeSource(source.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded hover:bg-red-500/15 text-[#555] hover:text-red-400 transition-all"
                >
                  <Trash2 size={13} />
                </button>
              </div>
              {(source.type === 'text' || source.type === 'url') && (
                <div className="border-t border-white/8 px-4 py-2">
                  <textarea
                    value={source.content || ''}
                    onChange={e => updateSourceContent(source.id, e.target.value)}
                    placeholder={source.type === 'url' ? 'Paste content or notes from this URL...' : 'Paste or type your text content here...'}
                    rows={3}
                    className="w-full bg-transparent text-xs text-[#aaa] placeholder-[#333] focus:outline-none resize-none"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {brand.sources.length > 0 && (
        <p className="text-xs text-[#444] mt-4">
          {brand.sources.length} source{brand.sources.length !== 1 ? 's' : ''} added — these will be used to generate the Voice Doc, CSS Package, and Design Reference.
        </p>
      )}
    </div>
  )
}
