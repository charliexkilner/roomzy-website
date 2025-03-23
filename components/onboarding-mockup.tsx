"use client"

import { useState } from "react"
import Image from "next/image"

export default function OnboardingMockup() {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])

  const interiorStyles = [
    { id: "minimalist", name: "Minimalist", image: "/style-minimalist.jpg" },
    { id: "scandinavian", name: "Scandinavian", image: "/style-scandinavian.jpg" },
    { id: "modern", name: "Modern", image: "/style-modern.jpg" },
    { id: "bohemian", name: "Bohemian", image: "/style-bohemian.jpg" },
    { id: "industrial", name: "Industrial", image: "/style-industrial.jpg" },
    { id: "mid-century", name: "Mid-Century", image: "/style-midcentury.jpg" },
    { id: "coastal", name: "Coastal", image: "/style-coastal.jpg" },
    { id: "traditional", name: "Traditional", image: "/style-traditional.jpg" },
  ]

  const toggleStyle = (id: string) => {
    if (selectedStyles.includes(id)) {
      setSelectedStyles(selectedStyles.filter((style) => style !== id))
    } else {
      setSelectedStyles([...selectedStyles, id])
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[375px] h-[812px] bg-white rounded-[60px] overflow-hidden shadow-2xl border-8 border-black">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-2xl z-20"></div>

        {/* Status Bar */}
        <div className="h-12 bg-white"></div>

        {/* App Content */}
        <div className="relative h-full pt-6 pb-24 px-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <span className="font-serif text-xl font-semibold">Roomzy</span>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-1 mb-8">
            <div className="w-8 h-1 rounded-full bg-black"></div>
            <div className="w-2 h-1 rounded-full bg-gray-300"></div>
            <div className="w-2 h-1 rounded-full bg-gray-300"></div>
            <div className="w-2 h-1 rounded-full bg-gray-300"></div>
          </div>

          {/* Title and Description */}
          <h1 className="font-serif text-3xl font-bold mb-3">Define Your Style</h1>
          <p className="text-gray-600 mb-8">
            Select the interior styles that inspire you. We'll use these to personalize your recommendations.
          </p>

          {/* Style Selection Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {interiorStyles.map((style) => (
              <div
                key={style.id}
                onClick={() => toggleStyle(style.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                  selectedStyles.includes(style.id) ? "ring-4 ring-black" : "ring-1 ring-gray-200"
                }`}
              >
                <div className="aspect-square relative">
                  <Image src={style.image || "/placeholder.svg"} alt={style.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Selected Indicator */}
                  {selectedStyles.includes(style.id) && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-2 bg-white">
                  <p className="font-medium text-center">{style.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

