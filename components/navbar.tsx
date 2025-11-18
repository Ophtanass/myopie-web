// components/navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-lg font-semibold text-sky-700 hover:text-sky-600">
          Portail Myopie
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <Link
            href="/pro"
            className="text-slate-700 hover:text-sky-600 transition"
          >
            Professionnels
          </Link>

          <Link
            href="/grand-public"
            className="text-slate-700 hover:text-sky-600 transition"
          >
            Grand public
          </Link>

          <Link
            href="/documentation"
            className="text-slate-700 hover:text-sky-600 transition"
          >
            Documentation
          </Link>

          <Link
            href="/about"
            className="text-slate-700 hover:text-sky-600 transition"
          >
            À propos
          </Link>

          <Link
            href="/contact"
            className="text-slate-700 hover:text-sky-600 transition"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

