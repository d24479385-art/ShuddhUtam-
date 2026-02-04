'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Droplet, Sparkles, Star } from 'lucide-react'

export default function Home() {
  
  // REAL ADD TO CART FUNCTION
  const addToCart = () => {
    // This sends a signal to layout.js to open the cart
    const event = new CustomEvent('addToCart', { 
      detail: { name: 'Premium Buffalo Ghee', price: 1299, size: '1 Liter' } 
    })
    window.dispatchEvent(event)
  }

  const scrollToShop = () => {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden pb-20">
      
      {/* HERO */}
      <section className="relative pt-16 pb-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-3 bg-[#F5E6C4] text-[#B08D1E] text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-[#EBD494]">
              Vedic Bilona Method
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#3E2723] leading-tight mb-6">
              Pure Buffalo <br />
              <span className="text-[#C5A028] italic">Liquid Gold.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto mb-8 leading-relaxed">
              Hand-churned from free-grazing buffalo milk. The taste of true Indian tradition.
            </p>
            <button onClick={scrollToShop} className="bg-[#3E2723] text-[#F9F6F0] px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto shadow-xl hover:bg-[#5D4037] transition-all">
                Shop Now <ArrowRight size={18} />
            </button>
        </motion.div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="shop" className="px-6">
         <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-[#E8DBC6] max-w-md mx-auto"
         >
            <div className="h-56 bg-[#F9F6F0] rounded-2xl mb-6 flex items-center justify-center text-[#C5A028]">
                <span className="font-serif text-xl">1 Liter Jar</span>
            </div>

            <div className="mb-4">
                <div className="flex gap-1 text-[#C5A028] mb-2">
                   {[1,2,3,4,5].map((_,i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Premium Buffalo Ghee</h3>
                <p className="text-sm text-gray-500">100% Pure Murrah Buffalo Milk</p>
            </div>

            <div className="flex justify-between items-end border-t border-gray-100 pt-6">
                <div>
                    <span className="text-gray-400 line-through text-sm">₹1,500</span>
                    <div className="text-3xl font-bold text-[#3E2723]">₹1,299</div>
                </div>
                
                {/* --- REAL ACTION BUTTON --- */}
                <button 
                    onClick={addToCart}
                    className="bg-[#C5A028] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#B08D1E] transition-colors active:scale-95"
                >
                    Add to Cart
                </button>
            </div>
         </motion.div>
      </section>
    </div>
  )
}
