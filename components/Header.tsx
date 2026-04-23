import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">₿</span>
            <span className="text-xl font-bold text-gray-900">Bitcoin Ed</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-bitcoin font-medium">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-bitcoin font-medium">Products</Link>
            <Link href="/categories" className="text-gray-700 hover:text-bitcoin font-medium">Categories</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-bitcoin font-medium">Reviews</Link>
          </nav>
          <div className="md:hidden">
            <Link href="/products" className="text-bitcoin font-medium">Shop</Link>
          </div>
        </div>
      </div>
    </header>
  )
}