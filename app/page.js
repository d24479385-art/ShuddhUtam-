'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Droplet, Sparkles, Star } from 'lucide-react'

export default function Home() {
  
  // 1. Function to Scroll to Product
  const scrollToShop = () => {
    const section = document.getElementById('shop-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Function for Add to Cart
  const handleAddToCart = () => {
    alert("✅ Success! Item added to your cart.\n(This is a demo. In the real app, this opens the checkout).");
  };

  return (
    <div className="overflow-hidden pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 px-6 text-center">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBD494] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
        
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
            
            {/* FIXED BUTTON: Shop Now */}
            <button 
                onClick={scrollToShop}
                className="bg-[#3E2723] text-[#F9F6F0] px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto shadow-xl hover:bg-[#5D4037] transition-all active:scale-95"
            >
                Shop Now <ArrowRight size={18} />
            </button>
        </motion.div>
        
        {/* VISUAL */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 mx-auto w-72 h-72 bg-gradient-to-b from-[#EBD494] to-[#C5A028] rounded-full shadow-2xl border-4 border-white flex flex-col items-center justify-center relative"
        >
            <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl"></div>
            <p className="font-serif text-white text-2xl font-bold relative z-10">ShuddhUtam</p>
        </motion.div>
      </section>

      {/* TRUST BADGES */}
      <section className="px-6 grid gap-4 max-w-lg mx-auto mb-20">
        <Feature icon={<ShieldCheck />} title="Lab Tested" desc="100% Pure & Certified" />
        <Feature icon={<Sparkles />} title="Bilona Method" desc="Hand Churned in Clay Pots" />
        <Feature icon={<Droplet />} title="A2 Nutrition" desc="Rich in Vitamins & Omega-3" />
      </section>

      {/* FEATURED PRODUCT (ID ADDED HERE) */}
      <section id="shop-section" className="px-6">
         <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#3E2723]">Our Masterpiece</h2>
         </div>
         <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-[#E8DBC6] max-w-md mx-auto"
         >
            <div className="h-56 bg-[#F9F6F0] rounded-2xl mb-6 flex items-center justify-center text-[#C5A028] relative overflow-hidden">
                <span className="font-serif text-xl">1 Liter Jar</span>
            </div>

            <div className="mb-4">
                <div className="flex gap-1 text-[#C5A028] mb-2">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Premium Buffalo Ghee</h3>
            </div>

            <div className="flex justify-between items-end border-t border-gray-100 pt-6">
                <div>
                    <span className="text-gray-400 line-through text-sm">₹1,500</span>
                    <div className="text-3xl font-bold text-[#3E2723]">₹1,299</div>
                </div>
                
                {/* FIXED BUTTON: Add to Cart */}
                <button 
                    onClick={handleAddToCart}
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

function Feature({ icon, title, desc }) {
    return (
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#F3EDE2]">
        <div className="text-[#C5A028] bg-[#F9F6F0] p-3 rounded-full">{icon}</div>
        <div>
            <h4 className="font-bold text-[#3E2723] text-lg">{title}</h4>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
      </div>
    )
}
