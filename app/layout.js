'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import { ShoppingBag, UserCircle, X, LayoutDashboard, LogOut } from 'lucide-react'

export default function RootLayout({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [user, setUser] = useState(null) // null, 'customer', or 'admin'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdminView, setIsAdminView] = useState(false)

  // Fake "Database" Login Logic
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

  const handleLogout = () => {
    setUser(null)
    setIsAdminView(false)
    setEmail('')
    setPassword('')
  }

  return (
    <html lang="en">
      <head><title>ShuddhUtam</title></head>
      <body className="font-sans min-h-screen flex flex-col bg-[#F9F6F0]">
        
        {/* --- NAVIGATION BAR --- */}
        <nav className="sticky top-0 z-50 bg-[#F9F6F0]/95 backdrop-blur border-b border-[#E8DBC6] py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-[#3E2723]">
              ShuddhUtam<span className="text-[#C5A028]">.</span>
            </div>

            <div className="flex items-center gap-4">
               {/* IF NOT LOGGED IN: Show Login Button */}
               {!user && (
                 <button 
                    onClick={() => setIsLoginOpen(true)}
                    className="flex items-center gap-1 text-sm font-bold text-[#3E2723]"
                 >
                    <UserCircle size={20} /> Login
                 </button>
               )}

               {/* IF CUSTOMER: Show Name */}
               {user === 'customer' && (
                 <div className="flex items-center gap-2">
                   <span className="text-sm font-bold text-[#B08D1E]">Hello, User</span>
                   <button onClick={handleLogout}><LogOut size={18} /></button>
                 </div>
               )}

               {/* IF ADMIN: Show Dashboard Toggle */}
               {user === 'admin' && (
                 <div className="flex items-center gap-3">
                   <button 
                     onClick={() => setIsAdminView(!isAdminView)}
                     className="px-3 py-1 bg-[#3E2723] text-white text-xs rounded-full flex items-center gap-1"
                   >
                     <LayoutDashboard size={14} /> {isAdminView ? 'View Store' : 'Admin Panel'}
                   </button>
                   <button onClick={handleLogout}><LogOut size={18} /></button>
                 </div>
               )}

               <button className="p-2 bg-[#EBD494] rounded-full text-[#3E2723]">
                  <ShoppingBag size={20} />
               </button>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-grow">
          {user === 'admin' && isAdminView ? (
            /* ADMIN DASHBOARD UI */
            <div className="p-8 max-w-4xl mx-auto">
              <h1 className="text-3xl font-serif font-bold text-[#3E2723] mb-6">Owner Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow border border-gold-200">
                  <p className="text-gray-500 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-[#3E2723]">₹ 45,200</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border border-gold-200">
                  <p className="text-gray-500 text-sm">Active Orders</p>
                  <p className="text-2xl font-bold text-[#C5A028]">12</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border border-gold-200">
                   <p className="text-gray-500 text-sm">Stock Level</p>
                   <p className="text-2xl font-bold text-green-600">High</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between font-bold text-sm bg-gold-100">
                  <span>Order ID</span>
                  <span>Customer</span>
                  <span>Status</span>
                </div>
                {/* Fake Orders List */}
                <div className="p-4 border-b border-gray-100 flex justify-between text-sm">
                  <span>#ORD-001</span>
                  <span>Rahul Sharma</span>
                  <span className="text-green-600 font-bold">Shipped</span>
                </div>
                <div className="p-4 border-b border-gray-100 flex justify-between text-sm">
                  <span>#ORD-002</span>
                  <span>Priya Singh</span>
                  <span className="text-orange-500 font-bold">Pending</span>
                </div>
              </div>
            </div>
          ) : (
            /* NORMAL STORE UI */
            children
          )}
        </main>
        
        {/* --- LOGIN POPUP MODAL --- */}
        {isLoginOpen && (
          <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in">
              <button 
                onClick={() => setIsLoginOpen(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-serif font-bold text-[#3E2723] mb-1">Welcome Back</h2>
              <p className="text-sm text-gray-500 mb-6">Login to access your account</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C5A028]"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
                  <input 
                    type="password" 
                    required 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C5A028]"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="w-full bg-[#3E2723] text-white py-3 rounded-xl font-bold hover:bg-[#5D4037]">
                  Sign In
                </button>
              </form>

              <div className="mt-4 p-3 bg-gray-100 rounded text-xs text-gray-500">
                <p className="font-bold">🔑 DEMO PASSWORDS:</p>
                <p>Admin: <span className="font-mono text-black">admin@shuddhutam.com</span> / <span className="font-mono text-black">admin123</span></p>
                <p>User: (Any email) / (Any password)</p>
              </div>
            </div>
          </div>
        )}

      </body>
    </html>
  )
}
