'use client'

import { useState } from 'react'

interface GalleryImage {
  url: string
  imgix_url: string
}

export default function ProductGallery({ images, alt }: { images: GalleryImage[]; alt: string }) {
  const [selected, setSelected] = useState(0)

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-8xl text-gray-300">
        ₿
      </div>
    )
  }

  const currentImage = images[selected] || images[0]

  if (!currentImage) {
    return (
      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-8xl text-gray-300">
        ₿
      </div>
    )
  }

  return (
    <div>
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
        <img
          src={`${currentImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selected === idx ? 'border-bitcoin' : 'border-transparent'
              }`}
            >
              <img
                src={`${img.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${alt} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}