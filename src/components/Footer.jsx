export default function Footer() {
  return (
    <footer id="subscribe" className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Live the luxe life</h3>
            <p className="mt-2 text-white/70">Curated drops on cars, capital, games, and lifestyle — straight to your inbox.</p>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button type="submit" className="px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">Subscribe</button>
          </form>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} LuxDrive. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
