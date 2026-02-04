'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, UserCircle, X, LayoutDashboard, LogOut, Menu, Trash2, CheckCircle } from 'lucide-react'

export default function RootLayout({ children }) {
  // --- STATE MANAGEMENT ---
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null) // 'admin' | 'customer' | null
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdminView, setIsAdminView] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState('cart') // 'cart' | 'processing' | 'success'

  // --- LISTEN FOR ADD-TO-CART EVENTS ---
  useEffect(() => {
    const handleAddToCart = (e) => {
      const product = e.detail
      setCart((prev) => [...prev, product])
      setIsCartOpen(true)
    }
    window.addEventListener('addToCart', handleAddToCart)
    return () => window.removeEventListener('addToCart', handleAddToCart)
  }, [])

  // --- AUTH LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin@shuddhutam.com' && password === 'admin123') {
      setUser('admin')
      setIsAdminView(true)
    } else {
      setUser('customer')
    }
    setIsLoginOpen(false)
  }

  const handleCheckout = () => {
    setCheckoutStep('processing')
    setTimeout(() => {
      setCheckoutStep('success')
      setCart([]) // Clear cart after 'purchase'
    }, 2500)
  }

  const closeCart = () => {
    setIsCartOpen(false)
    setTimeout(() => setCheckoutStep('cart'), 500) // Reset for next time
  }

  return (
    <html lang="en">
      <head><title>ShuddhUtam | Premium Bilona Ghee</title></head>
      <body className="font-sans min-h-screen flex flex-col bg-[#F9F6F0] text-[#3E2723]">
        
        {/* === TOP NAVIGATION BAR === */}
        <nav className="sticky top-0 z-40 bg-[#F9F6F0]/95 backdrop-blur border-b border-[#E8DBC6] h-16">
          <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
              ShuddhUtam<span className="text-[#C5A028]">.</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
              <Link href="/" className="hover:text-[#C5A028]">Home</Link>
              <Link href="/shop" className="hover:text-[#C5A028]">Shop</Link>
              <Link href="#" className="hover:text-[#C5A028] opacity-50 cursor-not-allowed">About</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* Login/User State */}
              {!user ? (
                 <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-1 text-sm font-bold">
                    <UserCircle size={20} /> <span className="hidden md:inline">Login</span>
                 </button>
              ) : (
                 <div className="flex items-center gap-2">
                   {user === 'admin' && (
                      <button onClick={() => setIsAdminView(!isAdminView)} className="hidden md:flex px-3 py-1 bg-[#3E2723] text-white text-xs rounded-full items-center gap-1">
                        <LayoutDashboard size={12} /> {isAdminView ? 'View Site' : 'Admin'}
                      </button>
                   )}
                   <button onClick={() => setUser(null)}><LogOut size={20} /></button>
                 </div>
              )}

              {/* Cart Toggle */}
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 bg-[#EBD494] rounded-full hover:bg-[#D4AF37] transition">
                  <ShoppingBag size={20} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {cart.length}
                    </span>
                  )}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-[#F9F6F0] border-b border-[#E8DBC6] p-4 flex flex-col gap-4 shadow-xl">
              <Link href="/" className="font-bold">Home</Link>
              <Link href="/shop" className="font-bold">Shop Collection</Link>
              {user === 'admin' && (
                <button onClick={() => setIsAdminView(!isAdminView)} className="text-left text-[#C5A028] font-bold">
                  Toggle Admin Dashboard
                </button>
              )}
            </div>
          )}
        </nav>

        {/* === MAIN CONTENT RENDERER === */}
        <main className="flex-grow">
          {user === 'admin' && isAdminView ? <AdminDashboard /> : children}
        </main>

        {/* === FOOTER === */}
        <footer className="bg-[#3E2723] text-[#F3EDE2] py-12 px-6 mt-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">ShuddhUtam.</h3>
              <p className="opacity-70">Reviving the Vedic tradition of Bilona Ghee. Pure, Ethical, and Healthy.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Quick Links</h4>
              <ul className="space-y-2 opacity-70">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop Ghee</Link></li>
                <li>Track Order</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Contact</h4>
              <p className="opacity-70">support@shuddhutam.com</p>
              <p className="opacity-70">+91 98765 43210</p>
            </div>
          </div>
        </footer>

        {/* === SLIDE-OVER CART === */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart}></div>
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
              
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h2 className="font-serif text-2xl font-bold">Your Cart ({cart.length})</h2>
                <button onClick={closeCart}><X size={24} /></button>
              </div>

              {checkoutStep === 'cart' && (
                <>
                  <div className="flex-grow overflow-y-auto space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-center mt-20 opacity-50">Your cart is empty.</div>
                    ) : (
                      cart.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-center bg-[#F9F6F0] p-3 rounded-lg">
                          <div className="w-12 h-12 bg-[#EBD494] rounded flex items-center justify-center text-[10px] font-bold">IMG</div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-sm">{item.name}</h4>
                            <p className="text-xs opacity-70">{item.size}</p>
                          </div>
                          <div className="font-bold text-[#C5A028]">₹{item.price}</div>
                        </div>
                      ))
                    )}
                  </div>
                  {cart.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between text-xl font-bold mb-4">
                        <span>Total</span>
                        <span>₹{cart.reduce((a, b) => a + b.price, 0)}</span>
                      </div>
                      <button onClick={handleCheckout} className="w-full bg-[#3E2723] text-white py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition">
                        Proceed to Checkout
                      </button>
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'processing' && (
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 border-4 border-[#EBD494] border-t-[#3E2723] rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-bold">Processing Payment...</h3>
                  <p className="text-sm opacity-60">Please do not refresh.</p>
                </div>
              )}

              {checkoutStep === 'success' && (
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <CheckCircle size={64} className="text-green-600 mb-6" />
                  <h3 className="text-2xl font-serif font-bold mb-2">Order Confirmed!</h3>
                  <p className="text-sm opacity-60 mb-8">Thank you for choosing purity.</p>
                  <button onClick={closeCart} className="bg-[#3E2723] text-white px-8 py-3 rounded-full font-bold">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* === LOGIN MODAL === */}
        {isLoginOpen && (
          <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
             <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl relative">
                <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4"><X /></button>
                <h2 className="font-serif text-3xl font-bold mb-1">Welcome</h2>
                <p className="text-sm opacity-60 mb-6">Enter your details to access account.</p>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-[#C5A028] outline-none" value={email} onChange={e => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password" className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-[#C5A028] outline-none" value={password} onChange={e => setPassword(e.target.value)} />
                  <button className="w-full bg-[#C5A028] text-white p-4 rounded-xl font-bold hover:bg-[#B08D1E] transition">Sign In</button>
                </form>

                <div className="mt-6 bg-[#F9F6F0] p-4 rounded-lg text-xs space-y-1 text-left">
                  <p className="font-bold text-[#3E2723] mb-1">FOR TESTING:</p>
                  <p>👑 Admin: <span className="font-mono">admin@shuddhutam.com</span> / <span className="font-mono">admin123</span></p>
                  <p>👤 User: Any Email / Any Password</p>
                </div>
             </div>
          </div>
        )}

      </body>
    </html>
  )
}

// --- ADMIN COMPONENT (Internal) ---
function AdminDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-[60vh]">
      <div className="flex justify-between items-center mb-8">
        <h
