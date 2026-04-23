import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.image

  return (
    <Link href={`/categories/${category.slug}`} className="group block relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] bg-gray-200">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bitcoin to-bitcoin-dark flex items-center justify-center text-6xl text-white">₿</div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        {description && (
          <p className="text-white/90 text-sm line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  )
}