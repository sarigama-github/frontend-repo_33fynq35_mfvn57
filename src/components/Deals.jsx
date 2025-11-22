import { useEffect, useState } from 'react'

export default function Deals() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/products?limit=8`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      }
    }
    fetchDeals()
  }, [])

  return (
    <section id="shop" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-white text-2xl font-semibold">Featured Deals</h2>
        <a href="#categories" className="text-blue-300 text-sm">Browse categories</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((p) => (
          <div key={p._id} className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="aspect-square rounded-lg bg-slate-800/40 mb-3" />
            <div className="text-white font-medium line-clamp-1">{p.title}</div>
            <div className="text-blue-200 text-sm">₦{Number(p.price).toLocaleString()}</div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-blue-200/80 text-sm">
            No products yet. Add some in the admin panel.
          </div>
        )}
      </div>
    </section>
  )
}
