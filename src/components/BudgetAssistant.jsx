import { useState } from 'react'

export default function BudgetAssistant() {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [prefs, setPrefs] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const search = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/recommendations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          budget_min: min ? Number(min) : 0,
          budget_max: max ? Number(max) : undefined,
          preferences: prefs ? prefs.split(',').map(s => s.trim()) : undefined,
        })
      })
      const data = await res.json()
      setResults(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="assistant" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-white text-2xl font-semibold mb-4">AI Assistant</h2>

      <form onSubmit={search} className="grid sm:grid-cols-4 gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
        <input value={min} onChange={e=>setMin(e.target.value)} type="number" min="0" placeholder="Min ₦" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
        <input value={max} onChange={e=>setMax(e.target.value)} type="number" min="0" placeholder="Max ₦" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
        <input value={prefs} onChange={e=>setPrefs(e.target.value)} placeholder="Preferences e.g. rice, hamper, household" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 col-span-2 sm:col-span-1" />
        <button disabled={loading} className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold px-4 rounded-lg">
          {loading ? 'Finding...' : 'Get Recommendations'}
        </button>
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {results.map((p) => (
          <div key={p._id} className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="aspect-square rounded-lg bg-slate-800/40 mb-3" />
            <div className="text-white font-medium line-clamp-1">{p.title}</div>
            <div className="text-blue-200 text-sm">₦{Number(p.price).toLocaleString()}</div>
          </div>
        ))}
        {results.length === 0 && (
          <div className="col-span-full text-blue-200/80 text-sm">Enter a budget to see recommendations.</div>
        )}
      </div>

      <div className="mt-10 bg-white/5 border border-white/10 p-6 rounded-xl">
        <h3 className="text-white font-semibold mb-2">Open-ended Shopping</h3>
        <p className="text-blue-200/80 text-sm mb-4">Describe what you want and your budget, and we’ll curate a basket for you.</p>
        <OpenEndedForm />
      </div>

      <div className="mt-4">
        <a
          href="https://wa.me/2349061965441?text=Hello%20Coral%20Shopping%2C%20I%20want%20to%20speak%20with%20a%20representative%20regarding%20my%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg"
        >
          Speak with a representative regarding your order
        </a>
      </div>
    </section>
  )
}

function OpenEndedForm() {
  const [details, setDetails] = useState('')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-blue-100 text-sm">
        Thanks! We’ll review your request and send tailored picks shortly. You can also chat us on WhatsApp for faster service.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-3 gap-3">
      <input value={details} onChange={e=>setDetails(e.target.value)} placeholder="What do you need? e.g. student food hamper" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 sm:col-span-2" />
      <input value={budget} onChange={e=>setBudget(e.target.value)} type="number" min="0" placeholder="Budget ₦" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg sm:col-span-3">Submit</button>
    </form>
  )
}
