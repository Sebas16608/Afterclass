import { useEffect, useState } from 'react'

function PostItem({ p }) {
  const [replies, setReplies] = useState([])
  const [showReply, setShowReply] = useState(false)
  const [form, setForm] = useState({ content: '', author: '' })

  const cargarReplies = () => {
    fetch(`/post/posts/?parent=${p.id}`)
      .then((res) => res.json())
      .then(setReplies)
  }

  useEffect(cargarReplies, [p.id])

  const responder = (e) => {
    e.preventDefault()
    fetch('/post/posts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, thread_id: p.thread.id, parent: p.id }),
    }).then((res) => {
      if (res.ok) {
        setForm({ content: '', author: '' })
        setShowReply(false)
        cargarReplies()
      }
    })
  }

  return (
    <div className="bg-[#eef2ff] border border-[#b7c5d9] p-2">
      <p className="text-xs text-gray-600">
        {p.author || 'Anónimo'} · {new Date(p.created_at).toLocaleString()}
      </p>
      <p className="whitespace-pre-wrap">{p.content}</p>

      <div className="ml-6 mt-2 space-y-2">
        {replies.map((r) => (
          <PostItem key={r.id} p={r} />
        ))}
      </div>

      <button className="underline text-sm mt-2" onClick={() => setShowReply(!showReply)}>
        Responder
      </button>
      {showReply && (
        <form onSubmit={responder} className="bg-white border border-[#b7c5d9] p-2 mt-2 space-y-2">
          <textarea
            className="w-full p-1 border border-[#b7c5d9]"
            placeholder="Tu respuesta..."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
          <input
            className="w-full p-1 border border-[#b7c5d9]"
            placeholder="Autor (opcional)"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          <button className="bg-[#b7c5d9] px-3 py-1 border border-[#98a2b3]">Enviar</button>
        </form>
      )}
    </div>
  )
}

function ThreadCard({ t }) {
  const [posts, setPosts] = useState([])
  const [showReply, setShowReply] = useState(false)
  const [form, setForm] = useState({ content: '', author: '' })

  const cargarPosts = () => {
    fetch(`/post/posts/?thread=${t.id}`)
      .then((res) => res.json())
      .then(setPosts)
  }

  useEffect(cargarPosts, [t.id])

  const responder = (e) => {
    e.preventDefault()
    fetch('/post/posts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, thread_id: t.id }),
    }).then((res) => {
      if (res.ok) {
        setForm({ content: '', author: '' })
        setShowReply(false)
        cargarPosts()
      }
    })
  }

  return (
    <div className="bg-[#d6daf0] border border-[#b7c5d9] p-3 mb-3">
      <p className="text-xs text-gray-600">
        {t.author || 'Anónimo'} · {new Date(t.created_at).toLocaleString()} · Hilo #{t.id}
        {t.is_locked && ' 🔒'}
      </p>
      {t.is_pinned && (
        <p className="text-sm text-[#af0a0f] font-bold">📌 Fijado</p>
      )}
      <h3 className="font-bold text-[#0f0c5d]">{t.title}</h3>
      <p className="whitespace-pre-wrap">{t.content}</p>

      <div className="ml-6 mt-3 space-y-2">
        {posts.map((p) => (
          <PostItem key={p.id} p={p} />
        ))}
      </div>

      {!t.is_locked && (
        <>
          <button className="underline text-sm mt-3" onClick={() => setShowReply(!showReply)}>
            Responder
          </button>
          {showReply && (
            <form onSubmit={responder} className="bg-[#eef2ff] border border-[#b7c5d9] p-3 mt-2 space-y-2">
              <textarea
                className="w-full p-1 border border-[#b7c5d9]"
                placeholder="Tu respuesta..."
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                required
              />
              <input
                className="w-full p-1 border border-[#b7c5d9]"
                placeholder="Autor (opcional, vacío = anónimo)"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
              <button className="bg-[#b7c5d9] px-3 py-1 border border-[#98a2b3]">Enviar</button>
            </form>
          )}
        </>
      )}
    </div>
  )
}

function Board() {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(null)
  const [threads, setThreads] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', content: '', author: '' })

  useEffect(() => {
    fetch('/category/categories/')
      .then((res) => res.json())
      .then(setCategories)
  }, [])

  useEffect(() => {
    if (!category) return
    fetch(`/post/threads/?category=${category.id}`)
      .then((res) => res.json())
      .then(setThreads)
      .catch(() => setThreads([]))
  }, [category])

  const crearHilo = (e) => {
    e.preventDefault()
    fetch('/post/threads/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, category_id: category.id }),
    }).then((res) => {
      if (res.ok) {
        setShowForm(false)
        setForm({ title: '', content: '', author: '' })
        fetch(`/post/threads/?category=${category.id}`)
          .then((r) => r.json())
          .then(setThreads)
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="text-center border-b border-[#b7c5d9] pb-4 mb-4">
        <h1 className="text-3xl font-bold text-[#af0a0f]"><a href="/">/Afterclass/</a></h1>
        <p className="text-base text-gray-600">El tablón de la universidad</p>
      </header>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-3 mb-4 text-sm">
        <strong>Reglas rápidas:</strong> no amenazar ni acosar, no publicar información
        personal de otras personas, respetar a los demás y usar las categorías
        correctamente. <a href="/rules" className="underline text-[#34345c]">Ver las reglas</a>
      </div>

      {!category && (
        <>
          <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 text-center">
            <h2 className="text-xl font-bold text-[#af0a0f] mb-4">Categorías</h2>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <button className="text-[#34345c] underline hover:text-[#af0a0f]" onClick={() => setCategory(c)}>
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {category && (
        <>
          <button className="underline text-sm mb-3" onClick={() => setCategory(null)}>← Volver</button>
          <h2 className="text-2xl font-bold text-center mb-4">{category.name}</h2>
          <div className="text-center mb-4">
            <button
              className="bg-[#d6daf0] border border-[#b7c5d9] px-4 py-2"
              onClick={() => setShowForm(!showForm)}
            >
              Nuevo hilo
            </button>
          </div>

          {showForm && (
            <form onSubmit={crearHilo} className="bg-[#d6daf0] border border-[#b7c5d9] p-3 mb-4 space-y-2">
              <input
                className="w-full p-1 border border-[#b7c5d9]"
                placeholder="Título"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <textarea
                className="w-full p-1 border border-[#b7c5d9]"
                placeholder="Escribe tu mensaje..."
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                required
              />
              <input
                className="w-full p-1 border border-[#b7c5d9]"
                placeholder="Autor (opcional, déjalo vacío para ser anónimo)"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
              <button className="bg-[#b7c5d9] px-3 py-1 border border-[#98a2b3]">Publicar</button>
            </form>
          )}

          {threads.length === 0 && <p>No hay hilos en esta categoría.</p>}
          {threads.map((t) => (
            <ThreadCard key={t.id} t={t} />
          ))}
        </>
      )}
    </div>
  )
}

export default Board
