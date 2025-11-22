import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-white font-bold">Coral</a>
        <nav className="hidden sm:flex items-center gap-6 text-blue-100">
          <a href="#shop" className="hover:text-white">Home</a>
          <a href="#categories" className="hover:text-white">Categories</a>
          <a href="#assistant" className="hover:text-white">AI Assistant</a>
          <a href="#account" className="hover:text-white">My Account</a>
          <a href="#admin" className="hover:text-white">Admin</a>
        </nav>
        <button className="sm:hidden text-white" onClick={()=>setOpen(v=>!v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="sm:hidden px-4 pb-4 grid gap-2 text-blue-100">
          <a href="#shop" className="hover:text-white">Home</a>
          <a href="#categories" className="hover:text-white">Categories</a>
          <a href="#assistant" className="hover:text-white">AI Assistant</a>
          <a href="#account" className="hover:text-white">My Account</a>
          <a href="#admin" className="hover:text-white">Admin</a>
        </div>
      )}
    </header>
  )
}
