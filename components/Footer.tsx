export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">₿</span>
              <span className="text-xl font-bold">Bitcoin Ed</span>
            </div>
            <p className="text-gray-400">Your source for quality Bitcoin educational products.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-bitcoin">All Products</a></li>
              <li><a href="/categories" className="hover:text-bitcoin">Categories</a></li>
              <li><a href="/reviews" className="hover:text-bitcoin">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-gray-400 text-sm">Helping people learn about Bitcoin, one product at a time.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Bitcoin Ed. All rights reserved.
        </div>
      </div>
    </footer>
  )
}