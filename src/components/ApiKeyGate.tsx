import { useState } from 'react'
import { KeyRound, Eye, EyeOff, ExternalLink } from 'lucide-react'

interface Props {
  apiKey: string
  onSave: (key: string) => void
}

export function ApiKeyBanner({ apiKey, onSave }: Props) {
  const [editing, setEditing] = useState(!apiKey)
  const [draft, setDraft] = useState(apiKey)
  const [show, setShow] = useState(false)

  if (!editing && apiKey) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-[#6bbf8e]/10 border-b border-[#6bbf8e]/20 text-xs text-[#6bbf8e]">
        <KeyRound size={11} />
        <span>API key set</span>
        <button onClick={() => { setDraft(apiKey); setEditing(true) }} className="ml-1 text-[#6bbf8e]/60 hover:text-[#6bbf8e] underline">
          change
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-3 bg-[#d4a853]/8 border-b border-[#d4a853]/20">
      <div className="flex items-center gap-2 mb-2">
        <KeyRound size={12} className="text-[#d4a853]" />
        <span className="text-xs text-[#d4a853] font-medium">Anthropic API Key required for AI generation</span>
        <a
          href="https://console.anthropic.com/settings/keys"
          target="_blank"
          rel="noreferrer"
          className="ml-auto text-[10px] text-[#666] hover:text-[#d4a853] flex items-center gap-1 transition-colors"
        >
          Get key <ExternalLink size={9} />
        </a>
      </div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type={show ? 'text' : 'password'}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && draft.startsWith('sk-') && onSave(draft)}
            placeholder="sk-ant-..."
            className="w-full bg-white/5 border border-white/12 rounded-lg px-3 py-2 text-xs text-white placeholder-[#444] focus:outline-none focus:border-[#d4a853]/50 pr-8"
          />
          <button
            onClick={() => setShow(s => !s)}
            className="absolute right-2 top-2 text-[#555] hover:text-[#aaa] transition-colors"
          >
            {show ? <EyeOff size={13} /> : <Eye size={13} />}
          </button>
        </div>
        <button
          onClick={() => { if (draft.startsWith('sk-')) { onSave(draft); setEditing(false) } }}
          disabled={!draft.startsWith('sk-')}
          className="px-4 py-2 rounded-lg bg-[#d4a853] text-[#0f0f0f] font-semibold text-xs hover:bg-[#e0b86a] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Save
        </button>
      </div>
      <p className="text-[10px] text-[#444] mt-1.5">Stored in memory only — never saved to disk or sent anywhere except Anthropic's API.</p>
    </div>
  )
}
