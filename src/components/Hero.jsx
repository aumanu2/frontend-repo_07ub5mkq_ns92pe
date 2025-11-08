import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black" id="cars">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Velocity meets luxury
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A celebration of cars, money, games, and lifestyle — crafted for those who move fast and live louder.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#collections" className="px-5 py-3 rounded-lg bg-white text-black font-medium shadow-lg shadow-white/10 hover:shadow-white/20 transition">Explore Collections</a>
            <a href="#subscribe" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Subscribe</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
    </section>
  );
}
