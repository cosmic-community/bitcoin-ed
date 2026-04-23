import { getProducts } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'All Products - Bitcoin Ed',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">All Products</h1>
      <p className="text-gray-600 mb-8">Discover our collection of Bitcoin educational products</p>
      
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No products available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}