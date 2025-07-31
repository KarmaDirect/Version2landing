import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShinyButton } from '@/components/magicui/shiny-button'

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden py-20">
      {/* Fondu en bas pour transition avec la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
      
      {/* Animated Grid Pattern background */}
      <AnimatedGridPattern 
        numSquares={50}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={0.5}
        className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] absolute inset-0 h-full w-full skew-y-6"
      />
      
      <div className="container mx-auto px-4 text-center text-gray-800 z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Prêt à transformer votre entreprise ?
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600">
          Rejoignez +500 entrepreneurs qui ont déjà automatisé leurs processus avec Webstate
        </p>
        
        {/* Statistiques rapides */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">80%</div>
            <div className="text-gray-600">Tâches automatisées</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">2 semaines</div>
            <div className="text-gray-600">Mise en place</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">250%</div>
            <div className="text-gray-600">ROI moyen</div>
          </div>
        </div>
        
        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <ShimmerButton 
            className="text-lg font-bold py-4 px-8 shadow-lg"
            shimmerColor="#ffffff"
            background="rgba(31, 41, 55, 1)"
            shimmerDuration="2s"
          >
            Prendre RDV Gratuit
          </ShimmerButton>
          <ShinyButton className="text-lg font-medium py-4 px-8 border-2 border-gray-300">
            Voir la démo
          </ShinyButton>
        </div>
        
        {/* Badges de confiance */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 font-medium">Essai gratuit 14 jours</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 font-medium">Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 font-medium">Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
} 