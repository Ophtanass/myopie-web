// app/grand-public/page.tsx

import {
  BookOpen,
  Eye,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

export default function GrandPublicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-emerald-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-5 py-12">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            <span className="text-sky-600">Portail Myopie</span> — Parents & familles
          </h1>
          <p className="mt-2 text-slate-600 text-sm max-w-xl">
            Une page conçue pour vous aider à comprendre la myopie de votre enfant,
            son évolution et les solutions disponibles pour la freiner.
          </p>
        </header>

        {/* SECTION 1 — INTRO */}
        <section className="mb-12 rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 mb-4">
            <Sparkles className="h-4 w-4" />
            Comprendre la myopie
          </p>

          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            La myopie de votre enfant : comment elle évolue et comment la freiner
          </h2>

          <p className="text-sm text-slate-700 leading-relaxed">
            La myopie est de plus en plus fréquente chez les enfants. Elle provoque
            une vision floue de loin mais une vision de près généralement nette. La
            bonne nouvelle : il existe aujourd’hui des solutions efficaces pour
            <strong> ralentir sa progression</strong>.
          </p>
        </section>

        {/* SECTION 2 — QU’EST-CE QUE LA MYOPIE */}
        <section className="mb-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-slate-900">
            <BookOpen className="h-5 w-5 text-sky-600" />
            Qu’est-ce que la myopie ?
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Dans un œil qui voit bien, l’image se forme exactement sur la rétine.
            Dans un œil myope, elle se forme <strong>en avant</strong> de la rétine,
            généralement parce que l’œil est un peu trop long.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Résultat : la vision de loin devient floue, surtout à l’école ou dans les
            activités sportives. La myopie apparaît souvent entre <strong>6 et 12 ans</strong>
            et peut progresser jusqu’à la fin de l’adolescence.
          </p>
        </section>

        {/* SECTION 3 — POURQUOI SURVEILLER */}
        <section className="mb-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-slate-900">
            <Heart className="h-5 w-5 text-rose-600" />
            Pourquoi faut-il surveiller la myopie ?
          </h3>

          <p className="text-sm text-slate-700 mb-4">
            La myopie n’est pas seulement un défaut visuel. Lorsqu’elle progresse
            trop vite, elle augmente le risque de certaines maladies oculaires à
            l’âge adulte.
          </p>

          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Décollement de rétine</li>
            <li>• Maculopathie myopique</li>
            <li>• Glaucome</li>
            <li>• Rétinopathies liées à la forte myopie</li>
          </ul>
        </section>

        {/* SECTION 4 — MYOPIE ÉVOLUTIVE */}
        <section className="mb-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-slate-900">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            Myopie évolutive : qu’est-ce que c’est ?
          </h3>

          <p className="text-sm text-slate-700 mb-3">
            On parle de myopie évolutive lorsque la correction augmente plus vite que
            prévu :
          </p>

          <ul className="text-sm text-slate-700 mb-3 space-y-1">
            <li>• ≥ 0,50 dioptrie par an</li>
            <li>• Allongement axial rapide</li>
            <li>• Apparition précoce (avant 7–8 ans)</li>
          </ul>

          <p className="text-sm text-slate-700">
            Ce sont ces situations qui nécessitent une prise en charge spécifique.
          </p>
        </section>

        {/* SECTION 5 — FREINATION */}
        <section className="mb-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-slate-900">
            <Eye className="h-5 w-5 text-sky-600" />
            Comment peut-on ralentir la myopie ?
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            {/* OPTIQUE */}
            <div className="rounded-2xl bg-sky-50 p-4 border border-sky-200">
              <h4 className="font-semibold text-sky-700 mb-2">
                1. Les solutions optiques
              </h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Verres spéciaux</li>
                <li>• Lentilles multifocales</li>
                <li>• Orthokératologie</li>
              </ul>
            </div>

            {/* ATROPINE */}
            <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-2">
                2. Collyres d’atropine
              </h4>
              <p className="text-sm text-slate-700">
                L’atropine faiblement dosée peut ralentir la progression chez les
                enfants. Bien tolérée, elle est utilisée sous prescription.
              </p>
            </div>

            {/* ENVIRONNEMENT */}
            <div className="rounded-2xl bg-rose-50 p-4 border border-rose-200">
              <h4 className="font-semibold text-rose-700 mb-2">
                3. L’environnement visuel
              </h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• 2 heures par jour dehors</li>
                <li>• Pause toutes les 20 minutes</li>
                <li>• Distance d’au moins 30 cm</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 6 — RÔLE DES PARENTS */}
        <section className="mb-10 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-slate-900">
            <Users className="h-5 w-5 text-purple-600" />
            Le rôle des parents
          </h3>

          <p className="text-sm text-slate-700 mb-3">
            Votre implication est essentielle. Vous pouvez aider votre enfant en :
          </p>

          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Encouragent les activités en extérieur</li>
            <li>• Limitant les écrans sans pause</li>
            <li>• Respectant les consultations de suivi</li>
            <li>• Aménageant un espace de lecture confortable</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
