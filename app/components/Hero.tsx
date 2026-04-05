export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-surface/80 border border-surface-light/50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-secondary">Drop de Abril disponible</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
            Los memes de tu nicho, ahora en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
              ropa y accesorios
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-xl">
            Drops curados de gaming, oficina, universidad y streamers para Perú.
            Diseños rápidos, relevantes y hechos para gente demasiado online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#drop"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Ver drop actual
            </a>
            <a
              href="#votar"
              className="inline-flex items-center justify-center border-2 border-secondary text-secondary hover:bg-secondary hover:text-background font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              Votar próximos diseños
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Envíos en Perú
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Print on demand
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Drops limitados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
