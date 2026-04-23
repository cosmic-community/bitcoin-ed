import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata = {
  title: 'Categories - Bitcoin Ed',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Categories</h1>
      <p className="text-gray-600 mb-8">Browse products by category</p>
      
      {categories.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No categories available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}