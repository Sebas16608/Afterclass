import { useState } from 'react'
import termsMd from '../../TERMS.md?raw'

const TERMS_VERSION = 'afterclass_terms_v1'

// Renderizador mínimo: convierte el markdown de TERMS.md en elementos simples.
function TermsContent() {
  const lines = termsMd.split('\n').reduce((acc, rawLine) => {
    // Une líneas indentadas (continuación de un ítem) con la línea anterior.
    if ((rawLine.startsWith('  ') || rawLine.startsWith('\t')) && acc.length > 0 && rawLine.trim()) {
      acc[acc.length - 1] += ' ' + rawLine.trim()
    } else {
      acc.push(rawLine)
    }
    return acc
  }, [])
  const blocks = []
  let key = 0
  let paragraph = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(<p key={key++} className="mb-2">{formatInline(paragraph.join(' '))}</p>)
      paragraph = []
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()
    if (!line.trim()) {
      flushParagraph()
      continue
    }
    if (line.startsWith('# ')) {
      flushParagraph()
      blocks.push(<h1 key={key++} className="text-xl font-bold mb-2">{line.slice(2)}</h1>)
    } else if (line.startsWith('## ')) {
      flushParagraph()
      blocks.push(<h2 key={key++} className="text-base font-bold mt-3 mb-1">{line.slice(3)}</h2>)
    } else if (line.startsWith('- ')) {
      flushParagraph()
      blocks.push(<li key={key++} className="ml-4 list-disc">{formatInline(line.slice(2))}</li>)
    } else {
      paragraph.push(line)
    }
  }
  flushParagraph()

  return <div>{blocks}</div>
}

// Convierte **negrita** y *cursiva* en tags.
function formatInline(text) {
  const parts = []
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g
  let lastIndex = 0
  let match
  let i = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    const token = match[0]
    if (token.startsWith('**')) {
      parts.push(<strong key={i++}>{token.slice(2, -2)}</strong>)
    } else {
      parts.push(<em key={i++}>{token.slice(1, -1)}</em>)
    }
    lastIndex = match.index + token.length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

function TermsGate({ children }) {
  const [accepted, setAccepted] = useState(() => localStorage.getItem(TERMS_VERSION) === 'true')
  const [view, setView] = useState('welcome') // 'welcome' | 'terms'
  const [checked, setChecked] = useState(false)

  if (accepted) return children

  const accept = () => {
    localStorage.setItem(TERMS_VERSION, 'true')
    setAccepted(true)
  }

  return (
    <div className="fixed inset-0 bg-[#eef2ff] overflow-y-auto">
      <div className="max-w-3xl mx-auto p-6">
        <header className="text-center border-b border-[#b7c5d9] pb-4 mb-6">
          <h1 className="text-4xl font-bold text-[#af0a0f]">/Afterclass/</h1>
          <p className="text-sm text-gray-600">El tablón de la universidad</p>
        </header>

        {view === 'welcome' && (
          <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
            <h2 className="text-xl font-bold mb-3 text-center">Bienvenido a Afterclass</h2>
            <p className="mb-3 text-justify">
              Antes de continuar, debes revisar los términos de uso de AfterClass.
              No podrás acceder a la plataforma hasta que los leas y aceptes.
            </p>
            <p className="mb-6 text-justify">
              AfterClass es un espacio independiente y no representa oficialmente a ninguna
              universidad, institución, docente o autoridad.
            </p>
            <div className="text-center">
              <button
                onClick={() => setView('terms')}
                className="bg-[#b7c5d9] border border-[#98a2b3] px-4 py-2 cursor-pointer"
              >
                Leer nuestros términos
              </button>
            </div>
          </div>
        )}

        {view === 'terms' && (
          <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
            <h2 className="text-lg font-bold mb-2 text-center">Términos de uso de AfterClass</h2>
            <div className="max-h-96 overflow-y-auto border border-[#b7c5d9] bg-[#eef2ff] p-4 mb-4 text-justify">
              <TermsContent />
            </div>

            <label className="flex items-center gap-2 mb-4 justify-center cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>He leído y acepto los términos de uso de AfterClass.</span>
            </label>

            <div className="text-center">
              <button
                onClick={accept}
                disabled={!checked}
                className={`px-4 py-2 border ${
                  checked
                    ? 'bg-[#b7c5d9] border-[#98a2b3] cursor-pointer'
                    : 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Aceptar y continuar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TermsGate
