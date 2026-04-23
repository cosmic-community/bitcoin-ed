// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) notFound()

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.image

  return (
    <div>
      {image && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              {description && <p className="text-lg max-w-2xl">{description}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {!image && (
          <>
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            {description && <p className="text-gray-600 mb-8">{description}</p>}
          </>
        )}

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}