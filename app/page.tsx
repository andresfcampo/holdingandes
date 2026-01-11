'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Animation */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat animate-bg-zoom"
        style={{
          backgroundImage: 'url(/caio-bandeira-BoWcG31MkLo-unsplash.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60 animate-fade-in"></div>
      </div>

      {/* Main Content - Centered */}
      <div 
        className="relative z-10 flex h-screen items-center justify-center px-8 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center gap-0">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Holding Company of the Andes Logo"
            width={260}
            height={260}
            className={`animate-logo-fade-in transition-all duration-500 ${isHovered ? 'scale-95' : 'scale-100'}`}
            priority
          />

          {/* Hero Text - Directly below logo */}
          <p 
            className={`max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg font-light tracking-wide transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            The Holding Company of the Andes is an investment vehicle deploying capital and hard-won experience to fellow founders. We seek those curious enough to dream of a better world, brave enough to demand it, and crazy enough to think they can lead us to it.
          </p>
        </div>
      </div>
    </main>
  )
}
