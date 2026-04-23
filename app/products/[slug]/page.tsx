// app/products/[slug]/page.tsx
import { getProductBySlug, getReviewsByProduct } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { getMetafieldValue } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import ProductGallery from '@/components/ProductGallery'
import Link from 'next/link'

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) notFound()

  const reviews = await getReviewsByProduct(product.id)

  const name = getMetafieldValue(product.metadata?.name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const price = product.metadata?.price
  const priceBtc = product.metadata?.price_btc
  const inStock = product.metadata?.in_stock !== false
  const category = product.metadata?.category
  const variants = product.metadata?.variants || []
  const featuredImage = product.metadata?.featured_image
  const gallery = product.metadata?.gallery || []

  const images = featuredImage ? [featuredImage, ...gallery] : gallery

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery images={images} alt={name} />

        <div>
          {category && (
            <Link href={`/categories/${category.slug}`} className="text-bitcoin text-sm font-medium hover:underline">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </Link>
          )}
          <h1 className="text-4xl font-bold mt-2 mb-4">{name}</h1>
          
          <div className="flex items-baseline gap-4 mb-6">
            {price !== undefined && (
              <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
            )}
            {priceBtc !== undefined && (
              <span className="text-xl text-bitcoin font-semibold">₿ {priceBtc}</span>
            )}
          </div>

          <div className="mb-6">
            {inStock ? (
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ✓ In Stock
              </span>
            ) : (
              <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {description && (
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
          )}

          {variants.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Available Variants</h3>
              <div className="grid grid-cols-2 gap-3">
                {variants.map((variant, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-bitcoin transition-colors">
                    <div className="font-medium">{variant.name}</div>
                    {variant.price !== undefined && (
                      <div className="text-sm text-gray-600 mt-1">${variant.price.toFixed(2)}</div>
                    )}
                    {variant.price_btc !== undefined && (
                      <div className="text-sm text-bitcoin">₿ {variant.price_btc}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="btn-primary w-full" disabled={!inStock}>
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}