'use client' 
// ^ The line above is crucial for buttons to work!

import './globals.css'
import { ShoppingBag, UserCircle } from 'lucide-react'

// Note: We moved metadata to a separate static file or keep it simple here.
// Since 'use client' cannot have metadata export, we remove it for this prototype to prevent errors.

export default function RootLayout({ children }) {
  
  const handleLogin = () => {
    alert("🔐 Login clicked!\n(In the real app, this opens the login popup).");
  };

  return (
    <html lang="en">
      <head>
        <title>ShuddhUtam | Premium Ghee</title>
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E8DBC6] py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-[#3E2723] tracking-wide">
              ShuddhUtam<span className="text-[#C5A028]">.</span>
            </div>
            <div className="flex items-center gap-4">
               
               {/* FIXED BUTTON: Login */}
               <button 
                  onClick={handleLogin}
                  className="flex items-center gap-1 text-sm font-bold hover:text-[#C5A028] transition-colors"
               >
                  <UserCircle size={20} /> Login
               </button>

               <button className="p-2 bg-[#EBD494] rounded-full text-[#3E2723] hover:bg-[#D4AF37] transition-colors">
                  <ShoppingBag size={20} />
               </button>
            </div>
          </div>
        </nav>
        
        <main className="flex-grow">{children}</main>
        
        <footer className="bg-[#3E2723] text-[#F3EDE2] py-8 text-center mt-10">
          <p className="font-serif text-lg">© 2024 ShuddhUtam</p>
          <div className="text-xs mt-4 text-[#D4AF37] opacity-50 uppercase tracking-widest">Admin Portal Access Only</div>
        </footer>
      </body>
    </html>
  )
}
