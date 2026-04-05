"use client";

import { useState } from "react";

const upcomingDesigns = [
  { id: 1, name: "'Jefe final: el lunes'", category: "Oficina", emoji: "👔", votes: 142 },
  { id: 2, name: "'Lag emocional'", category: "Gaming", emoji: "🎮", votes: 98 },
  { id: 3, name: "'Tesis loading... 99%'", category: "Universidad", emoji: "🎓", votes: 231 },
  { id: 4, name: "'Subscribe o pierdes'", category: "Streamers", emoji: "🔔", votes: 67 },
];

export default function VotingForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [votes, setVotes] = useState<Record<number, number>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  function handleVote(id: number) {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  return (
    <section id="votar" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Vota por el próximo <span className="text-secondary">drop</span>
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Tú decides qué memes se imprimen. Vota y deja tu email para enterarte primero cuando salgan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {upcomingDesigns.map((design) => {
              const totalVotes = design.votes + (votes[design.id] || 0);
              const voted = (votes[design.id] || 0) > 0;

              return (
                <div
                  key={design.id}
                  className="flex items-center gap-4 bg-surface border border-surface-light/30 rounded-xl p-4 hover:border-primary/30 transition-colors"
                >
                  <span className="text-3xl">{design.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm">{design.name}</h3>
                    <span className="text-xs text-muted">{design.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted">{totalVotes}</span>
                    <button
                      onClick={() => handleVote(design.id)}
                      disabled={voted}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        voted
                          ? "bg-primary/20 text-primary-light cursor-default"
                          : "bg-primary hover:bg-primary-light text-white hover:scale-105"
                      }`}
                    >
                      {voted ? "Votado ✓" : "Votar"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-surface border border-surface-light/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">No te pierdas el próximo drop</h3>
            <p className="text-muted text-sm mb-6">
              Sé el primero en enterarte cuando lancemos nuevos diseños. Sin spam, solo memes.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl mb-4 block">🎉</span>
                <h4 className="text-lg font-bold mb-2">¡Estás dentro!</h4>
                <p className="text-muted text-sm">
                  Te avisaremos cuando el próximo drop esté listo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Tu email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@gmail.com"
                    className="w-full bg-background border border-surface-light/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-background font-bold py-3 rounded-full transition-all hover:scale-[1.02]"
                >
                  Avisarme del próximo drop
                </button>
                <p className="text-xs text-muted text-center">
                  Cero spam. Solo drops y memes. Puedes salir cuando quieras.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
