import { getProducts, getCategories, getReviews } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews(),
  ])

  const featuredProducts = products.slice(0, 4)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <Link href="/categories" className="text-bitcoin hover:text-bitcoin-dark font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-bitcoin hover:text-bitcoin-dark font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {featuredReviews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}