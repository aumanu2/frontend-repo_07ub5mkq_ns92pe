import { Car, Gamepad2, Wallet, Gem } from 'lucide-react';

const items = [
  {
    id: 'cars',
    title: 'Cars',
    icon: Car,
    desc: 'Sleek machines, roaring power, and design perfection.',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'money',
    title: 'Money',
    icon: Wallet,
    desc: 'Wealth strategies, investment insights, and cash flow.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'games',
    title: 'Games',
    icon: Gamepad2,
    desc: 'Next-gen titles, esports energy, and play without limits.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    icon: Gem,
    desc: 'Travel, fashion, and the art of living luxuriously.',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function Categories() {
  return (
    <section id="collections" className="relative w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Explore the worlds</h2>
          <a href="#subscribe" className="text-sm text-white/70 hover:text-white transition">Get updates →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ id, title, icon: Icon, desc, color }) => (
            <a key={id} href={`#${id}`} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${color}`} />
              <div className="relative p-6 h-full flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <span className="mt-auto pt-4 text-sm text-white/80 group-hover:text-white">Dive in →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
