import React from "react";
import Link from "next/link";

export default function Pro() {
  return (
    <main className="min-h-screen text-slate-100 relative">

      {/* Background gradient harmonisé */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-900 opacity-95" />

      {/* HEADER */}
      <header className="w-full px-6 py-5 shadow-lg bg-slate-900/60 backdrop-blur-lg border-b border-slate-800 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight text-sky-300">
          Portail Myopie — Espace Professionnels
        </h1>
        <Link href="/" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
          Retour à l’accueil
        </Link>
      </header>

      {/* INTRO */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-medium mb-4 text-sky-100">
          Des outils concrets pour la prise en charge de la myopie évolutive
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Cet espace vous est dédié, professionnels de santé, pour accéder à des outils validés, 
          des ordonnances types et des ressources actualisées basées sur la littérature scientifique récente.
        </p>
      </section>

      {/* SECTIONS PRINCIPALES */}
      <section className="px-6 pb-20 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">

        {/* ARBRE DÉCISIONNEL */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl shadow-xl 
                        hover:scale-[1.01] transition backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-sky-300 mb-2">🌿 Arbre décisionnel interactif</h3>
          <p className="text-sm text-slate-300 mb-4">
            Utilisez notre simulateur pour vous guider dans le choix du traitement combiné 
            selon le profil clinique et l’évolution de l’enfant.
          </p>
          <Link
            href="/simulateur"
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl inline-block transition"
          >
            Accéder au simulateur
          </Link>
        </div>

        {/* RESSOURCES PRATIQUES */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl shadow-xl 
                        hover:scale-[1.01] transition backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-sky-300 mb-2">📁 Ressources pratiques</h3>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            <li>Ordonnances types (PDF)</li>
            <li>Aides à la prescription (lunettes, lentilles, atropine)</li>
            <li>Courriers types (médecin traitant, mutuelles, etc.)</li>
          </ul>
        </div>

        {/* DOCUMENTATION */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl shadow-xl 
                        hover:scale-[1.01] transition backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-sky-300 mb-2">📘 Documentation & recommandations</h3>
          <p className="text-sm text-slate-300 mb-4">
            Accès rapide aux documents de référence : SFO, IMI, HAS, publications 
            scientifiques et ressources internationales sur la myopie évolutive.
          </p>
          <Link
            href="/pro/documentation"
            className="px-4 py-2 border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 rounded-xl inline-block transition"
          >
            Voir les ressources
          </Link>
        </div>

        {/* QUI SOMMES-NOUS */}
        <div className="bg-slate-900/40 border border-slate-700 p-6 rounded-3xl shadow-xl 
                        hover:scale-[1.01] transition backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-sky-300 mb-2">🔍 En savoir plus</h3>
          <p className="text-sm text-slate-300 mb-4">
            Consultez les données scientifiques, la méthodologie et les résultats de recherche 
            ayant servi de base au développement de ce portail.
          </p>
          <Link
            href="/about"
            className="px-4 py-2 border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 rounded-xl inline-block transition"
          >
            Qui sommes-nous ?
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-slate-800 text-sm text-slate-500 text-center">
        <p>© 2025 Portail Myopie — Tous droits réservés</p>
        <p className="mt-1 text-slate-600">En partenariat avec l’Université de Lille</p>
      </footer>

    </main>
  );
}
