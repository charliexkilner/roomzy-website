import Image from "next/image"

export default function ScanYourSpace() {
  return (
    <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden">
      <Image 
        src="/living-room.jpg" 
        alt="Living room being scanned" 
        fill 
        className="object-cover"
      />

      {/* Scanning Frames */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[200px] h-[100px] border-2 border-white rounded-sm"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-[250px] h-[80px] border-2 border-white rounded-sm"></div>
      <div className="absolute right-10 top-1/3 w-[80px] h-[150px] border-2 border-white rounded-sm"></div>

      {/* Scanning Indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xs py-1 px-3 rounded-full text-[10px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Scanning room...
      </div>

      {/* Scanning Animation */}
      <div className="absolute inset-0 bg-white bg-opacity-5 animate-pulse"></div>
    </div>
  )
}

