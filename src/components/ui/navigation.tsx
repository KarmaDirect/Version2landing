"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ShinyButton } from '@/components/magicui/shiny-button'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

export function Navigation() {
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Fermer le dropdown quand on clique en dehors
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Webstate</span>
          </div>
          
          {/* Menu central */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors flex items-center gap-1"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg z-[60]"
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="p-4 space-y-3">
                    <a 
                      href="/solutions/automation" 
                      className="block p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        console.log('Clic sur Automatisation IA')
                        setIsSolutionsOpen(false)
                      }}
                    >
                      <div className="text-sm font-medium text-gray-800">Automatisation IA</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Automatisez vos processus métier avec l&apos;intelligence artificielle.
                      </p>
                    </a>
                    <a 
                      href="/solutions/website" 
                      className="block p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        console.log('Clic sur Sites Web')
                        setIsSolutionsOpen(false)
                      }}
                    >
                      <div className="text-sm font-medium text-gray-800">Sites Web</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Créez des sites web professionnels et performants.
                      </p>
                    </a>
                    <a 
                      href="/solutions/integration" 
                      className="block p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        console.log('Clic sur Intégration')
                        setIsSolutionsOpen(false)
                      }}
                    >
                      <div className="text-sm font-medium text-gray-800">Intégration</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Intégrations complètes pour votre écosystème digital.
                      </p>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/cas-usage" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">
              Cas d&apos;usage
            </a>
            
            <a href="/temoignages" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">
              Témoignages
            </a>
            
            <a href="/tarifs" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors">
              Tarifs
            </a>
          </div>
          
          {/* Bouton CTA */}
          <div className="flex items-center">
            <ShimmerButton 
              className="font-medium px-6 py-2 !text-white"
              shimmerColor="#ffffff"
              background="rgba(31, 41, 55, 1)"
              shimmerDuration="2s"
              shimmerSize="0.1em"
            >
              Prendre RDV
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  )
} 