'use client'
import { Star } from 'lucide-react'

// --- MOCK PRODUCT DATA ---
const products = [
  { id: 1, name: "Premium Buffalo Ghee", size: "1 Liter", price: 1299, rating: 5, tag: "Best Seller" },
  { id: 2, name: "Premium Buffalo Ghee", size: "500 ml", price: 699, rating: 5, tag: null },
  { id: 3, name: "A2 Cow Ghee", size: "1 Liter", price: 1800, rating: 4, tag: "New Arrival" },
  { id: 4, name: "Vedic Bilona Ghee", size: "1 Liter (Glass Jar)", price: 1450, rating: 5, tag: "Premium" },
]

export default function ShopPage() {

  const addToCart = (product) => {
    // Dispatch event to RootLayout
    const event = new CustomEvent('addToCart', { detail: product })
    window.dispatchEvent(event)
  }

  return (
    <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-[#3E2723] mb-4">The Collection</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Browse our range of ethically sourced, hand-churned ghees. Made fresh in small batches.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-3xl border border-[#E8DBC6] hover:shadow-xl transition-shadow duration-300 flex flex-col">
            
            {/* Image Area */}
            <div className="relative h-64 bg-[#F9F6F0] rounded-2xl flex items-center justify-center mb-6 overflow-hidden group">
              {product.tag && (
                <span className="absolute top-4 left-4 bg-[#3E2723] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {product.tag}
                </span>
              )}
              <div className="text-[#C5A028] font-serif text-2xl group-hover:scale-110 transition-transform duration-500">
                {product.name}
              </div>
            </div>

            {/* Details */}
            <div className="flex-grow">
              <div className="flex gap-1 text-[#C5A028] mb-2">
                {[...Array(product.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3E2723]">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.size}</p>
            </div>

            {/* Price & Action */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">
              <span className="text-2xl font-bold text-[#3E2723]">₹{product.price}</span>
              <button 
                onClick={() => addToCart(product)}
                className="bg-[#C5A028] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#B08D1E] active:scale-95 transition-all shadow-md"
              >
                Add +
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
