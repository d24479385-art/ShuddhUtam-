'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Droplet, Sparkles, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 text-center lg:text-left max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="lg:w-1/2 z-10"
        >
            <span className="inline-block py-2 px-4 bg-[#F5E6C4] text-[#B08D1E] text-xs font-bold rounded-full uppercase tracking-wider mb-6 border border-[#EBD494]">
              Since 1985 • Vedic Method
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#3E2723] leading-[1.1] mb-6">
              The Purest <br />
              <span className="text-[#C5A028] italic">Golden Elixir.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg mb-8 leading-relaxed">
              Experience ShuddhUtam. Hand-churned Bilona Ghee from free-grazing Murrah buffaloes. No machines. No shortcuts. Just purity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="bg-[#3E2723] text-[#F9F6F0] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-[#5D4037] transition-all">
                  Shop Collection <ArrowRight size={18} />
              </Link>
              <button className="px-8 py-4 rounded-full font-bold border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all">
                  Watch Our Process
              </button>
            </div>
        </motion.div>
        
        {/* Visual Content */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
           className="lg:w-1/2 relative"
        >
            <div className="absolute inset-0 bg-[#EBD494] blur-3xl opacity-30 rounded-full animate-pulse"></div>
            <div className="relative w-full aspect-square bg-gradient-to-br from-[#EBD494] to-[#C5A028] rounded-[3rem] shadow-2xl border-4 border-white flex flex-col items-center justify-center">
              <span className="font-serif text-white text-4xl font-bold">ShuddhUtam</span>
              <span className="text-white/80 mt-2 uppercase tracking-widest text-sm">Premium Ghee</span>
            </div>
        </motion.div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-white py-16 border-y border-[#E8DBC6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <Feature icon={<ShieldCheck />} title="Lab Tested Purity" desc="Every batch is tested for 18 parameters." />
            <Feature icon={<Sparkles />} title="Bilona Method" desc="Churned in clay pots during Brahma Muhurta." />
            <Feature icon={<Droplet />} title="100% Organic" desc="Zero preservatives. Zero additives." />
        </div>
      </section>

      {/* FEATURED PREVIEW */}
      <section className="py-24 px-6 text-center">
         <h2 className="font-serif text-4xl font-bold text-[#3E2723] mb-4">Our Best Sellers</h2>
         <p className="text-gray-500 mb-12">Loved by over 10,000+ families across India.</p>
         
         <div className="max-w-md mx-auto bg-white p-2 rounded-[2rem] shadow-xl border border-[#E8DBC6] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="h-64 bg-[#F9F6F0] rounded-[1.5rem] flex items-center justify-center text-[#C5A028] mb-4">
              (Product Image)
            </div>
            <div className="p-4">
              <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Premium Buffalo Ghee</h3>
              <p className="text-[#B08D1E] font-bold">₹1,299</p>
              <Link href="/shop" className="block w-full mt-4 bg-[#F5E6C4] text-[#3E2723] py-3 rounded-xl font-bold hover:bg-[#EBD494]">
                View Details
              </Link>
            </div>
         </div>
      </section>
    </div>
  )
}

function Feature({ icon, title, desc }) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center text-[#C5A028] shrink-0">
          {icon}
        </div>
        <div>
            <h4 className="font-bold text-[#3E2723] text-lg">{title}</h4>
            <p className="text-sm text-gray-500 leading-snug">{desc}</p>
        </div>
      </div>
    )
}
