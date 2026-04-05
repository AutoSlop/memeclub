const products = [
  {
    id: 1,
    name: "Camiseta 'Error 404: Motivación'",
    category: "Oficina",
    price: 79,
    tag: "Nuevo",
    emoji: "💀",
    gradient: "from-violet-900/50 to-purple-900/50",
  },
  {
    id: 2,
    name: "Hoodie 'GG EZ'",
    category: "Gaming",
    price: 129,
    tag: "Popular",
    emoji: "🎮",
    gradient: "from-emerald-900/50 to-teal-900/50",
  },
  {
    id: 3,
    name: "Taza 'Powered by Café y Ansiedad'",
    category: "Universidad",
    price: 49,
    tag: "Último drop",
    emoji: "☕",
    gradient: "from-amber-900/50 to-orange-900/50",
  },
  {
    id: 4,
    name: "Sticker Pack 'Stream Life'",
    category: "Streamers",
    price: 15,
    tag: "Nuevo",
    emoji: "📺",
    gradient: "from-pink-900/50 to-rose-900/50",
  },
  {
    id: 5,
    name: "Camiseta 'sudo rm -rf parciales'",
    category: "Universidad",
    price: 79,
    tag: "Popular",
    emoji: "🎓",
    gradient: "from-blue-900/50 to-indigo-900/50",
  },
  {
    id: 6,
    name: "Hoodie 'Ctrl+Z mi vida'",
    category: "Oficina",
    price: 129,
    tag: "Edición limitada",
    emoji: "⌨️",
    gradient: "from-slate-800/50 to-zinc-800/50",
  },
  {
    id: 7,
    name: "Taza 'Ping 999ms'",
    category: "Gaming",
    price: 49,
    tag: "Nuevo",
    emoji: "🏓",
    gradient: "from-red-900/50 to-orange-900/50",
  },
  {
    id: 8,
    name: "Sticker Pack 'Memes Universitarios'",
    category: "Universidad",
    price: 15,
    tag: "Último drop",
    emoji: "📝",
    gradient: "from-cyan-900/50 to-sky-900/50",
  },
];

export default function CurrentDrop() {
  return (
    <section id="drop" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Drop de Abril 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Drop <span className="text-primary-light">actual</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            Edición limitada. Cuando se acaba el drop, se acaba. No hay restock.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-surface border border-surface-light/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform">{product.emoji}</span>
                <span className="absolute top-3 right-3 bg-secondary text-background text-xs font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary-light uppercase tracking-wider">{product.category}</span>
                <h3 className="font-bold mt-1 mb-3 leading-snug">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-secondary">S/{product.price}</span>
                  <button className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted text-sm mb-2">Precios referenciales</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted">
            <span className="bg-surface border border-surface-light/30 px-4 py-2 rounded-full">Stickers desde S/15</span>
            <span className="bg-surface border border-surface-light/30 px-4 py-2 rounded-full">Tazas desde S/49</span>
            <span className="bg-surface border border-surface-light/30 px-4 py-2 rounded-full">Camisetas desde S/79</span>
            <span className="bg-surface border border-surface-light/30 px-4 py-2 rounded-full">Hoodies desde S/129</span>
          </div>
        </div>
      </div>
    </section>
  );
}
