import Link from 'next/link'
import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ReviewCard({ review, showProduct }: { review: Review; showProduct?: boolean }) {
  const reviewerName = getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous'
  const rating = review.metadata?.rating || 0
  const comment = getMetafieldValue(review.metadata?.comment)
  const product = review.metadata?.product

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-bitcoin' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {comment && <p className="text-gray-700 mb-4 italic">"{comment}"</p>}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="font-semibold text-gray-900">{reviewerName}</span>
        {showProduct && product && (
          <Link href={`/products/${product.slug}`} className="text-sm text-bitcoin hover:underline">
            {product.title} →
          </Link>
        )}
      </div>
    </div>
  )
}