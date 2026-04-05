const categories = [
  {
    name: "Gaming",
    emoji: "🎮",
    description: "Memes de rage quit, speedruns y tardes de ranked",
    color: "from-violet-600 to-purple-600",
    count: 12,
  },
  {
    name: "Oficina",
    emoji: "💼",
    description: "Para sobrevivir al daily standup y los mails eternos",
    color: "from-amber-500 to-orange-500",
    count: 8,
  },
  {
    name: "Universidad",
    emoji: "📚",
    description: "Parciales, amanecidas y ese profe que no perdona",
    color: "from-emerald-500 to-teal-500",
    count: 10,
  },
  {
    name: "Streamers",
    emoji: "📺",
    description: "Chat, clips virales y la vida del viewer 24/7",
    color: "from-pink-500 to-rose-500",
    count: 6,
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Elige tu <span className="text-secondary">nicho</span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Cada categoría tiene sus propios drops con memes que solo los de tu tribu entienden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#drop"
              className="group relative bg-surface border border-surface-light/30 rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {cat.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{cat.description}</p>
              <span className="text-xs font-medium text-primary-light">{cat.count} productos →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
