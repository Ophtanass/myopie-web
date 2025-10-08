import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-[Manrope]">
      <Head>
        <title>Portail Myopie</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Image de fond légèrement floutée et dézoomée */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/homepage-illustration.png"
          alt="Background"
          className="w-full h-full object-contain blur-sm opacity-50"
        />
      </div>

      {/* Barre de navigation */}
      <header className="w-full px-4 md:px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm z-10">
        <img src="/logo-portail-myopie.svg" alt="Logo Portail Myopie" className="h-8 md:h-10" />
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide">Portail Myopie</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <img src="/logo-universite-lille.svg" alt="Logo Université de Lille" className="hidden md:block h-8 md:h-10" />
      </header>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow z-20 p-4 flex flex-col items-center gap-4">
          <Link href="/pro">
            <a className="text-blue-600 text-lg font-semibold">Professionnels de santé</a>
          </Link>
          <Link href="/grand-public">
            <a className="text-green-600 text-lg font-semibold">Grand public</a>
          </Link>
        </div>
      )}

      {/* Contenu principal */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32 pb-16 z-10">
        <div className="bg-white/30 backdrop-blur-xl p-6 md:p-12 rounded-xl shadow-xl max-w-full md:max-w-4xl w-full">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-6 md:mb-8 animate-fade-in">
            <Link href="/pro">
              <button className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow bg-blue-600 text-white hover:bg-blue-700 transition">
                Professionnels de santé
              </button>
            </Link>
            <Link href="/grand-public">
              <button className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow bg-green-600 text-white hover:bg-green-700 transition">
                Grand public
              </button>
            </Link>
          </div>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Ce site est le fruit d’un travail de thèse réalisé au CHU de Lille. Il propose un espace dédié aux professionnels de santé et un autre à destination des familles souhaitant s’informer sur la freination de la myopie chez l’enfant.
          </p>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
