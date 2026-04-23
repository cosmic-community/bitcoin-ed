import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.name) || product.title
  const price = product.metadata?.price
  const priceBtc = product.metadata?.price_btc
  const image = product.metadata?.featured_image
  const inStock = product.metadata?.in_stock !== false

  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl text-gray-300">₿</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-bitcoin transition-colors line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <div>
            {price !== undefined && (
              <div className="font-bold text-lg">${price.toFixed(2)}</div>
            )}
            {priceBtc !== undefined && (
              <div className="text-sm text-bitcoin">₿ {priceBtc}</div>
            )}
          </div>
          {!inStock && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  )
}