import { Crown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 grid place-items-center text-white shadow-lg shadow-rose-500/30">
            <Crown className="h-5 w-5" />
          </div>
          <span className="font-semibold text-white tracking-wide">LuxDrive</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#cars" className="hover:text-white transition">Cars</a>
          <a href="#money" className="hover:text-white transition">Money</a>
          <a href="#games" className="hover:text-white transition">Games</a>
          <a href="#lifestyle" className="hover:text-white transition">Lifestyle</a>
        </nav>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-sm border border-white/10 transition">
          Join Elite
        </button>
      </div>
    </header>
  );
}
