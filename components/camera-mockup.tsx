"use client"
import Image from "next/image"

export default function CameraMockup() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[375px] h-[812px] bg-white rounded-[60px] overflow-hidden shadow-2xl border-8 border-black">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-2xl z-20"></div>

        {/* Camera View - Modified to take full height */}
        <div className="relative h-full overflow-hidden">
          <Image src="/before-bedroom.jpg" alt="Bedroom view through camera" fill className="object-cover" />

          {/* Scanning Frames */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[200px] h-[100px] border-2 border-white rounded-sm"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-[250px] h-[80px] border-2 border-white rounded-sm"></div>
          <div className="absolute right-10 top-1/3 w-[80px] h-[150px] border-2 border-white rounded-sm"></div>

          {/* Scanning Animation */}
          <div className="absolute inset-0 bg-white bg-opacity-5 animate-pulse"></div>

          {/* Scanning Indicators */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs py-1 px-3 rounded-full">
            Scanning room...
          </div>
        </div>

        {/* Camera Controls */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-black bg-opacity-80 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-between h-full py-6">
            {/* Mode Selection */}
            <div className="flex space-x-4">
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Redecorate</button>
              <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                Rearrange
              </button>
            </div>

            {/* Capture Button */}
            <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white"></div>
            </div>

            {/* Additional Controls - Camera and Settings icons removed */}
            <div className="flex space-x-8">
              {/* Icons removed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

