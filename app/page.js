'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Droplet, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-6 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200 opacity-20 rounded-full blur-3xl"></div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-3 bg-[#F5E6C4] text-[#B08D1E] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Vedic Bilona Method
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#3E2723] leading-tight mb-6">
              Pure Buffalo <br />
              <span className="text-[#C5A028] italic">Liquid Gold.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
              Hand-churned from free-grazing buffalo milk. The taste of true tradition.
            </p>
            <button className="bg-[#3E2723] text-[#F9F6F0] px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto shadow-xl">
                Shop Now <ArrowRight size={18} />
            </button>
        </motion.div>
        
        {/* IMAGE PLACEHOLDER */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="mt-12 mx-auto w-64 h-64 bg-gradient-to-b from-[#EBD494] to-[#C5A028] rounded-full shadow-2xl border-4 border-white flex items-center justify-center"
        >
            <p className="font-serif text-white text-xl">Buffallo Ghee <br/> (Photo Here)</p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 grid gap-4 max-w-lg mx-auto">
        <Feature icon={<ShieldCheck />} title="Lab Tested" desc="100% Pure & Certified" />
        <Feature icon={<Sparkles />} title="Bilona Method" desc="Hand Churned in Clay Pots" />
        <Feature icon={<Droplet />} title="A2 Nutrition" desc="Rich in Vitamins & Omega-3" />
      </section>

      {/* PRODUCT CARD */}
      <section className="mt-20 px-6">
         <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#E8DBC6] max-w-md mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-1">1 Liter Jar</h3>
            <p className="text-[#B08D1E] font-bold mb-4">Premium Buffalo Ghee</p>
            <div className="h-40 bg-[#F9F6F0] rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Product Image
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-gray-400 line-through text-sm">₹1,500</span>
                    <div className="text-2xl font-bold text-[#3E2723]">₹1,299</div>
                </div>
                <button className="bg-[#C5A028] text-white px-4 py-2 rounded-lg font-bold shadow-md">
                    Add to Cart
                </button>
            </div>
         </div>
      </section>
    </div>
  )
}

function Feature({ icon, title, desc }) {
    return (
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#F3EDE2]">
        <div className="text-[#C5A028]">{icon}</div>
        <div>
            <h4 className="font-bold text-[#3E2723]">{title}</h4>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
      </div>
    )
}
