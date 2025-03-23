"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import OnboardingMockup from "@/components/onboarding-mockup"
import CameraMockup from "@/components/camera-mockup"
import ScanYourSpace from "@/components/scan-your-space"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/50 border-b border-white/20 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold">Roomzy</span>
          </div>
          <Link
            href="#"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
          >
            Download
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container px-4 pt-10 md:pt-24 pb-0 md:px-6 md:py-20 relative">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Mockups first on mobile, second on desktop */}
            <div className="flex flex-col items-center justify-center w-full md:items-center md:justify-center">
              <div className="relative w-full max-w-[500px] h-auto flex items-center justify-center">
                {/* Single mockup centered on mobile, only visible on mobile */}
                <div className="md:hidden relative transform scale-90">
                  <CameraMockup />
                </div>
                
                {/* Two mockups with rotation for desktop only - camera mockup now in front */}
                <div className="hidden md:block absolute left-20 top-[-240px] transform rotate-[4deg] scale-[0.55] z-20">
                  <CameraMockup />
                </div>
                <div className="hidden md:block absolute left-0 top-[-260px] transform rotate-[-4deg] scale-[0.55] z-10">
                  <OnboardingMockup />
                </div>
                
                {/* Spacer for proper sizing */}
                <div className="invisible md:hidden pt-[350px]" />
                <div className="invisible hidden md:block pt-[160px]" />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-5 md:mb-6">
                Transform your space with just a picture.
              </h1>
              <p className="text-gray-700 text-lg md:text-xl/relaxed mb-7 md:mb-8 max-w-[500px]">
                Roomzy is the AI app that transforms your space. Just snap a photo, and get instant layout and decor suggestions to boost wellbeing, focus, and style.
              </p>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Download on the App Store
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 mt-0 md:mt-24 lg:mt-24 relative z-30">
          <div className="relative">
            {/* Removing the white-to-gray gradient overlay that was hiding the bottom of the phones */}
          </div>
          <div className="container px-4 md:px-6">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Before & After Transformation</h2>
            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 p-6">
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src="/before-bedroom.jpg"
                        alt="Before transformation - Cluttered bedroom"
                        width={500}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-md backdrop-blur-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-md">
                        BEFORE
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center italic">
                      Original space with limited functionality
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src="/after-bedroom.jpg"
                        alt="After transformation - Stylish bedroom with warm lighting"
                        width={500}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-md backdrop-blur-lg bg-white/80 px-3 py-1.5 text-xs font-bold text-black shadow-md">
                        AFTER
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center italic">
                      Transformed with AI-powered recommendations
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100">
                  <h3 className="font-serif text-2xl font-medium text-center mb-6">Bedroom Transformation</h3>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-4xl font-bold font-serif text-black mb-2">85%</p>
                      <p className="text-sm text-gray-500">Improved space utilization</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-4xl font-bold font-serif text-black mb-2">3x</p>
                      <p className="text-sm text-gray-500">Better lighting distribution</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-4xl font-bold font-serif text-black mb-2">40%</p>
                      <p className="text-sm text-gray-500">Increased wellbeing score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12">
              Transform Your Space in 3 Simple Steps
            </h2>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

              <div className="grid gap-16 relative">
                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                      <div className="absolute -top-5 -left-5 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white font-bold text-2xl shadow-lg">
                        1
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-4">Define Your Vibe</h3>
                      <p className="text-gray-600 mb-4">
                        Pick the interior styles that match your taste — minimalist, cozy, modern, boho, and more.
                        Roomzy uses your preferences to tailor every design suggestion.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                          Minimalist
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                          Scandinavian
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                          Modern
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                          Bohemian
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="bg-white p-3 rounded-xl shadow-lg rotate-3 transform transition-transform hover:rotate-0">
                      <Image
                        src="/vintage-room.png"
                        alt="Vintage style room with record player and plants"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-[300px] h-[300px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="bg-white p-3 rounded-xl shadow-lg -rotate-3 transform transition-transform hover:rotate-0">
                      <ScanYourSpace />
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                      <div className="absolute -top-5 -left-5 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white font-bold text-2xl shadow-lg">
                        2
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-4">Scan Your Space</h3>
                      <p className="text-gray-600 mb-4">
                        Take a quick photo of your room. Our AI analyzes the layout, lighting, and furniture to
                        understand your space and find ways to improve it.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span>💡</span> Lighting analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <span>📷</span> Spatial recognition
                        </li>
                        <li className="flex items-center gap-2">
                          <span>🛋️</span> Furniture identification
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                      <div className="absolute -top-5 -left-5 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white font-bold text-2xl shadow-lg">
                        3
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-4">Enjoy Your Transformed Space</h3>
                      <p className="text-gray-600 mb-4">
                        Receive personalized recommendations that transform your space to look better, feel better, and
                        work better for you.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 italic">
                          "Roomzy transformed my bedroom from cluttered chaos to a peaceful sanctuary in minutes. I
                          couldn't believe how simple it was!" — Sarah T.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="bg-white p-3 rounded-xl shadow-lg rotate-3 transform transition-transform hover:rotate-0">
                      <Image
                        src="/after-bedroom.jpg"
                        alt="Enjoy your transformed space"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-[300px] h-[300px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-base font-medium text-white shadow-lg transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Transform Your Space Now
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12">
              How your space affects your wellbeing
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-lg bg-black p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="font-serif text-6xl font-bold mb-3 text-white">15%</div>
                    <p className="text-gray-300 text-lg">productivity decrease from poor workspace design</p>
                  </div>
                  <div className="absolute inset-0 opacity-30">
                    {isMounted && (
                      <StatsAreaChart
                        data={[
                          { month: "Jan", value: 40 },
                          { month: "Feb", value: 45 },
                          { month: "Mar", value: 30 },
                          { month: "Apr", value: 25 },
                          { month: "May", value: 15 },
                          { month: "Jun", value: 20 },
                        ]}
                        decreasing
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="font-serif text-6xl font-bold mb-3 text-black">35%</div>
                    <p className="text-gray-600 text-lg">improvement in focus reported by Roomzy users</p>
                  </div>
                  <div className="absolute inset-0 opacity-25">
                    {isMounted && (
                      <StatsAreaChart
                        data={[
                          { month: "Jan", value: 20 },
                          { month: "Feb", value: 25 },
                          { month: "Mar", value: 30 },
                          { month: "Apr", value: 35 },
                          { month: "May", value: 40 },
                          { month: "Jun", value: 55 },
                        ]}
                        increasing
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl font-medium mb-8 text-center">Wellbeing Metrics Comparison</h3>

                <div className="space-y-12">
                  {isMounted && (
                    <>
                      <MetricsComparisonBar label="Productivity" generalValue={45} roomzyValue={85} />
                      <MetricsComparisonBar label="Focus" generalValue={60} roomzyValue={90} />
                      <MetricsComparisonBar label="Wellbeing" generalValue={50} roomzyValue={95} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-12 text-white md:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try Roomzy today.</h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Transform your space with just a picture.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Download on the App Store
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-6 w-full border-t">
        <p className="text-sm text-center">Made with Love ❤️</p>
      </footer>
    </div>
  )
}

// Modify StatsAreaChart to handle undefined data properly
interface ChartDataPoint {
  month: string;
  value: number;
}

function StatsAreaChart({ 
  data = [] as ChartDataPoint[], 
  increasing = true, 
  decreasing = false 
}: { 
  data: ChartDataPoint[]; 
  increasing?: boolean; 
  decreasing?: boolean; 
}) {
  // Create a simpler chart with fixed height instead of responsive container
  // to avoid the yAxisId error in recharts
  return (
    <div className="h-full w-full">
      <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id={increasing ? "gradientIncreasing" : "gradientDecreasing"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={increasing ? "#10b981" : "#ef4444"} stopOpacity={0.6} />
            <stop offset="95%" stopColor={increasing ? "#10b981" : "#ef4444"} stopOpacity={0} />
          </linearGradient>
        </defs>
        {decreasing ? (
          // More subtle downward trend for decreasing chart
          <>
            <path
              d="M0,15 L15,20 L30,27 L45,33 L60,38 L75,43 L100,50 L100,50 L0,50 Z"
              fill="url(#gradientDecreasing)"
              stroke="#ef4444"
              strokeWidth="1.5"
            />
            {/* Add subtle dots at key points */}
            <circle cx="0" cy="15" r="1" fill="#ef4444" />
            <circle cx="45" cy="33" r="1" fill="#ef4444" />
            <circle cx="100" cy="50" r="1" fill="#ef4444" />
          </>
        ) : (
          // More subtle upward trend for increasing chart
          <>
            <path
              d="M0,50 L15,40 L30,33 L45,27 L60,22 L75,15 L100,10 L100,50 Z"
              fill="url(#gradientIncreasing)"
              stroke="#10b981"
              strokeWidth="1.5"
            />
            {/* Add subtle dots at key points */}
            <circle cx="0" cy="50" r="1" fill="#10b981" />
            <circle cx="45" cy="27" r="1" fill="#10b981" />
            <circle cx="100" cy="10" r="1" fill="#10b981" />
          </>
        )}
      </svg>
    </div>
  )
}

// Extract MetricsComparisonBar to be dynamically imported
interface MetricsComparisonBarProps {
  label: string;
  generalValue: number;
  roomzyValue: number;
}

function MetricsComparisonBar({ label, generalValue, roomzyValue }: MetricsComparisonBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between mb-2">
        <span className="font-serif text-lg font-medium">{label}</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gray-400 h-4 rounded-full transition-all duration-1500 ease-out"
              style={{ width: isVisible ? `${generalValue}%` : "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700 min-w-[60px]">General</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-black h-4 rounded-full transition-all duration-1500 ease-out"
              style={{ width: isVisible ? `${roomzyValue}%` : "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-black min-w-[60px]">Roomzy</span>
        </div>
      </div>
    </div>
  )
}

