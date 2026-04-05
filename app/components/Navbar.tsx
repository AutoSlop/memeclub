"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-primary-light">Meme</span>
              <span className="text-secondary">Club</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#categorias" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Categorías
            </a>
            <a href="#drop" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Drop Actual
            </a>
            <a href="#como-funciona" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Cómo Funciona
            </a>
            <a href="#votar" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Votar
            </a>
            <a
              href="#drop"
              className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Ver Drop
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-surface-light/30">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#categorias" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-foreground transition-colors py-2">
              Categorías
            </a>
            <a href="#drop" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-foreground transition-colors py-2">
              Drop Actual
            </a>
            <a href="#como-funciona" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-foreground transition-colors py-2">
              Cómo Funciona
            </a>
            <a href="#votar" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-foreground transition-colors py-2">
              Votar
            </a>
            <a
              href="#drop"
              onClick={() => setOpen(false)}
              className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors text-center"
            >
              Ver Drop
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
