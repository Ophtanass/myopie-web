import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-semibold text-blue-700">
        Portail Myopie
      </div>
      <div className="flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Accueil
        </Link>
        <Link href="/pro" className="text-gray-700 hover:text-blue-600">
          Pro
        </Link>
        <Link href="/public" className="text-gray-700 hover:text-blue-600">
          Grand Public
        </Link>
      </div>
    </nav>
