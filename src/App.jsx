import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Deals from './components/Deals'
import Categories from './components/Categories'
import BudgetAssistant from './components/BudgetAssistant'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Deals />
      <Categories />
      <BudgetAssistant />
      <footer className="border-t border-white/10 py-6 text-center text-blue-200/70">© {new Date().getFullYear()} Coral Shopping</footer>
    </div>
  )
}

export default App
