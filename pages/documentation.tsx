import React from "react";
import Link from "next/link";
import { ExternalLink, Book, FileSearch } from "lucide-react";

export default function Documentation() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-emerald-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            <Book className="h-8 w-8 text-sky-600" />
            Documentation & Recommandations
          </h1>

          <p className="text-slate-600 text-sm max-w-xl mt-2 leading-relaxed">
            Sélection des sources scientifiques essentielles pour la prise en charge de la
            myopie évolutive : IMI, SFO-ALC, HAS, publications internationales, arbres
            décisionnels et consensus.
          </p>
        </header>

        {/* SECTION — IMI */}
        <section className="mb-10 bg-white/90 border border-slate-200 p-6 rounded-3xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            🌍 International Myopia Institute (IMI)
          </h2>

          <p className="text-sm text-slate-700 mb-4">
            L’IMI publie les recommandations internationales de référence sur la myopie :
            épidémiologie, ralentissement, risques, progression, éthique et outils de
            décision. Indispensable pour toute prise en charge standardisée.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <a
                href="https://myopiainstitute.org/imi-white-papers/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                IMI White Papers – All editions <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://myopiainstitute.org/imi-2023-white-papers/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                IMI 2023 Update – Myopia Management Guidelines <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://myopiainstitute.org/wp-content/uploads/2023/02/IMI-Clinical-Management-Guidelines.pdf"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                IMI – Clinical Management Guidelines (PDF) <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        {/* SECTION — SFO / ALC */}
        <section className="mb-10 bg-white/90 border border-slate-200 p-6 rounded-3xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            🇫🇷 SFO — Association de Lutte contre la Cécité (ALC)
          </h2>

          <p className="text-sm text-slate-700 mb-4">
            La Société Française d’Ophtalmologie et l’ALC proposent des fiches pratiques,
            des synthèses et des recommandations cliniques sur la myopie évolutive.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <a
                href="https://www.sfo-online.fr/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                SFO – Site officiel <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://www.alc-france.org/myopie/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                ALC – Ressources sur la myopie <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        {/* SECTION — HAS */}
        <section className="mb-10 bg-white/90 border border-slate-200 p-6 rounded-3xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            🏛️ Haute Autorité de Santé (HAS)
          </h2>

          <p className="text-sm text-slate-700 mb-4">
            La HAS publie des recommandations sur le dépistage visuel de l’enfant,
            l'utilisation des collyres et l’évaluation des dispositifs médicaux.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <a
                href="https://www.has-sante.fr/jcms/c_2956519/fr/depistage-des-troubles-visuels-chez-l-enfant"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                Dépistage visuel de l’enfant – HAS <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://www.has-sante.fr/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                Site officiel HAS <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        {/* SECTION — Publications scientifiques majeures */}
        <section className="mb-10 bg-white/90 border border-slate-200 p-6 rounded-3xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            📚 Publications scientifiques majeures
          </h2>

          <p className="text-sm text-slate-700 mb-4">
            Quelques publications clés utilisées pour établir les algorithmes du Portail Myopie :
          </p>

          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/36913649/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                LAMP Study (Atropine 0.01 / 0.025 / 0.05 %) <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26071705/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                ATOM 1 & ATOM 2 – Atropine Studies <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/33479061/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                Bullimore 2021 – Lens-based Myopia Control <ExternalLink className="h-4 w-4" />
              </a>
            </li>

            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/35352631/"
                target="_blank"
                className="text-sky-700 hover:underline flex items-center gap-1"
              >
                Stellest – Clinical validation (HSA 2021) <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        {/* RETOUR */}
        <div className="text-center mt-8">
          <Link
            href="/pro"
            className="inline-flex items-center justify-center rounded-full border border-sky-600 px-4 py-2 text-sm text-sky-700 hover:bg-sky-600 hover:text-white transition"
          >
            ← Retour à l’espace professionnels
          </Link>
        </div>
      </div>
    </main>
  );
}
