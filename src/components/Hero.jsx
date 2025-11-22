import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl sm:text-5xl font-bold leading-tight"
        >
          Coral Shopping
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-blue-100 max-w-2xl mt-4"
        >
          AI-powered e-commerce for budget-conscious Nigerians. Discover foodstuffs, gifts, hampers and household items within your budget in seconds.
        </motion.p>
        <div className="mt-6 flex gap-3">
          <a href="#shop" className="bg-white/90 hover:bg-white text-slate-900 font-semibold px-5 py-3 rounded-lg transition">Start Shopping</a>
          <a href="#assistant" className="bg-slate-900/50 hover:bg-slate-900 text-white font-semibold px-5 py-3 rounded-lg border border-white/20 transition">Ask the AI Assistant</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900" />
    </section>
  )
}
