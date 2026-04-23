import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-bitcoin-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block text-6xl mb-4">₿</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn Bitcoin. <span className="text-bitcoin">Own Your Future.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover quality educational products, hardware wallets, and resources to master Bitcoin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary">
            Shop Products
          </Link>
          <Link href="/categories" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  )
}