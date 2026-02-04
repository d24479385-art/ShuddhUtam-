import './globals.css'
import { ShoppingBag, UserCircle } from 'lucide-react'

export const metadata = {
  title: 'ShuddhUtam | Premium Buffalo Bilona Ghee',
  description: 'Authentic Bilona Ghee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-[#F9F6F0] border-b border-[#E8DBC6] py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-[#3E2723]">
              ShuddhUtam<span className="text-[#C5A028]">.</span>
            </div>
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-1 text-sm font-bold">
                  <UserCircle size={20} /> Login
               </button>
               <button className="p-2 bg-[#EBD494] rounded-full text-[#3E2723]">
                  <ShoppingBag size={20} />
               </button>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="bg-[#3E2723] text-[#F3EDE2] py-8 text-center mt-10">
          <p>© 2024 ShuddhUtam. Pure Buffalo Bilona Ghee.</p>
          <div className="text-xs mt-2 opacity-50">Admin Portal Access</div>
        </footer>
      </body>
    </html>
  )
    }
