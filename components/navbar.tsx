// components/navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Portail Myopie
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/pro" className="hover:underline">
            Professionnels
          </Link>
          <Link href="/grand-public" className="hover:underline">
            Grand public
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

        </div>
      </div>
    </nav>
  );
}
