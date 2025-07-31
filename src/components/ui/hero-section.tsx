import { AuroraText } from '@/components/magicui/aurora-text'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { AvatarCircles } from '@/components/magicui/avatar-circles'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Fondu en bas pour transition avec la section vidéo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 text-center text-gray-800 z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <AuroraText 
            className="text-6xl md:text-8xl font-bold"
            colors={["#111827", "#1F2937", "#374151", "#4B5563", "#111827"]}
            speed={1.5}
          >
            Webstate
          </AuroraText>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
          Automatisez votre entreprise avec l&apos;IA. Systèmes clés-en-main : site web + automatisations.
        </p>
        
        {/* Social Proof Section - déplacé plus bas */}
        <div className="mb-8 mt-12">
          {/* Étoiles et avis */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">+500 clients satisfaits</span>
          </div>
          
          {/* Avatars des clients */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                "https://avatars.githubusercontent.com/u/40777269?v=4",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
              ].map((url, index) => (
                <img
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  src={url}
                  alt={`Client ${index + 1}`}
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium border-2 border-white shadow-sm">
                +495
              </div>
            </div>
          </div>
          
          {/* Badges de confiance */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-700 text-sm font-medium">Satisfait ou remboursé</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-green-700 text-sm font-medium">100% sécurisé</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-green-700 text-sm font-medium">Installation en 24h</span>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <ShimmerButton 
            className="text-lg font-bold py-4 px-8 shadow-lg"
            shimmerColor="#ffffff"
            background="rgba(31, 41, 55, 1)"
            shimmerDuration="2s"
            shimmerSize="0.1em"
          >
            Prendre RDV Gratuit
          </ShimmerButton>
          <ShinyButton className="text-lg font-medium py-4 px-8 border border-gray-300">
            Voir la démo
          </ShinyButton>
        </div>
        
        {/* Témoignage rapide */}
        <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold">M</span>
            </div>
            <div className="text-left">
              <p className="text-gray-700 italic mb-2">
                "Webstate a transformé notre entreprise. En 2 semaines, nous avons automatisé 80% de nos tâches répétitives. ROI incroyable !"
              </p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Marie Dubois</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 text-sm">Dirigeante, TechStart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Velocity Scroll Section - tout en bas de la hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <VelocityScroll 
          className="py-4 text-gray-700 text-3xl md:text-4xl" 
          defaultVelocity={0.3}
        >
          Made in Amiens • Rentabilité • Automatisation • Fiabilité • Webstate • Solutions clés-en-main • 
        </VelocityScroll>
      </div>
      
      {/* Animated Grid Pattern background - centré sur la hero section */}
      <AnimatedGridPattern 
        numSquares={50}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={0.5}
        className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] absolute inset-0 h-full w-full skew-y-6"
      />
    </section>
  )
} 