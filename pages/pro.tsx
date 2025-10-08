import React from "react";
import Link from "next/link";

export default function Pro() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full px-6 py-4 shadow-md flex justify-between items-center bg-white/90 backdrop-blur-md">
        <h1 className="text-2xl font-semibold">Portail Myopie — Espace Professionnels</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Retour à l’accueil
        </Link>
      </header>

      {/* Intro */}
      <section className="px-6 py-10 text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-medium mb-4">
          Des outils concrets pour la prise en charge de la myopie évolutive
        </h2>
        <p className="text-gray-600">
          Cet espace vous est dédié, professionnels de santé, pour accéder à des outils validés, des ordonnances types et des ressources actualisées.
        </p>
      </section>

      {/* Sections principales */}
      <section className="px-6 py-8 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Arbre décisionnel */}
        <div className="bg-white p-6 rounded-2xl shadow-md transition transform hover:scale-[1.01]">
          <h3 className="text-lg font-semibold mb-2">🌿 Arbre décisionnel interactif</h3>
          <p className="text-sm text-gray-600 mb-4">
            Utilisez notre simulateur pour vous guider dans le choix du traitement combiné selon le profil de l’enfant.
          </p>
          <Link
            href="/simulateur"
            className="px-4 py-2 bg-blue-600 text-white rounded-xl inline-block"
          >
            Accéder au simulateur
          </Link>
        </div>

        {/* Ressources pratiques */}
        <div className="bg-white p-6 rounded-2xl shadow-md transition transform hover:scale-[1.01]">
          <h3 className="text-lg font-semibold mb-2">📁 Ressources pratiques</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Ordonnances types (PDF)</li>
            <li>Aides à la prescription (lunettes, lentilles, atropine)</li>
            <li>Courriers types (au médecin traitant, mutuelles, etc.)</li>
          </ul>
        </div>

        {/* Documentation & guidelines */}
        <div className="bg-white p-6 rounded-2xl shadow-md transition transform hover:scale-[1.01]">
          <h3 className="text-lg font-semibold mb-2">📘 Documentation & recommandations</h3>
          <p className="text-sm text-gray-600 mb-4">
            Accès rapide aux documents de référence : SFO, IMI, HAS, publications scientifiques.
          </p>
          <Link
            href="/docs"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-xl inline-block"
          >
            Voir les ressources
          </Link>
        </div>

        {/* Lien vers la page "Qui sommes-nous" */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-200 transition transform hover:scale-[1.01]">
          <h3 className="text-lg font-semibold mb-2">🔍 En savoir plus</h3>
          <p className="text-sm text-gray-600 mb-4">
            Pour consulter les données scientifiques et les résultats de recherche à l’origine de ce portail, rendez-vous sur notre page dédiée.
          </p>
          <Link
            href="/about"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-xl inline-block"
          >
            Qui sommes-nous ?
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 px-6 py-6 border-t text-sm text-gray-500 text-center">
        <p>© 2025 Portail Myopie — Tous droits réservés</p>
        <p className="mt-1">En partenariat avec l’Université de Lille</p>
      </footer>
    </div>
  );
}
