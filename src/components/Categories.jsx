export default function Categories(){
  const cats = [
    { key: 'foodstuffs', label: 'Foodstuffs' },
    { key: 'gifts', label: 'Gifts' },
    { key: 'hampers', label: 'Hampers' },
    { key: 'household', label: 'Household' },
    { key: 'office', label: 'Office' },
  ]
  return (
    <section id="categories" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-white text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {cats.map(c => (
          <a key={c.key} href={`#cat-${c.key}`} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-blue-100 hover:bg-white/10 transition">
            {c.label}
          </a>
        ))}
      </div>
    </section>
  )
}
