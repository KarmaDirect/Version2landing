import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShinyButton } from '@/components/magicui/shiny-button'

export function PricingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden py-20">
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
          Commencer maintenant
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-600">
          Choisissez l&apos;offre qui correspond le mieux à vos besoins. Toutes incluent un essai gratuit de 14 jours.
        </p>
        
        {/* Offres */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Offre Starter */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">
              <span className="text-2xl">€</span>297
              <span className="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Site web professionnel
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Automatisations de base
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Support email
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Installation en 24h
              </li>
            </ul>
            <ShimmerButton 
              className="w-full font-bold py-3 px-6"
              shimmerColor="#ffffff"
              background="rgba(75, 85, 99, 1)"
            >
              Choisir Starter
            </ShimmerButton>
          </div>
          
          {/* Offre Pro - Mise en avant */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              POPULAIRE
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-6">
              <span className="text-2xl">€</span>597
              <span className="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Tout Starter +
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                IA avancée
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                CRM intégré
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Support prioritaire
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Formation incluse
              </li>
            </ul>
            <ShimmerButton 
              className="w-full font-bold py-3 px-6"
              shimmerColor="#ffffff"
              background="rgba(147, 51, 234, 1)"
            >
              Choisir Pro
            </ShimmerButton>
          </div>
          
          {/* Offre Enterprise */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">
              <span className="text-2xl">€</span>997
              <span className="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Tout Pro +
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Personnalisation complète
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Formation dédiée
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                Manager de compte
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">✓</span>
                SLA garanti
              </li>
            </ul>
            <ShimmerButton 
              className="w-full font-bold py-3 px-6"
              shimmerColor="#ffffff"
              background="rgba(75, 85, 99, 1)"
            >
              Contacter
            </ShimmerButton>
          </div>
        </div>
        
        {/* CTA final */}
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-6">
            Pas sûr de l&apos;offre ? Parlons-en ensemble !
          </p>
          <ShimmerButton 
            className="text-lg font-bold py-4 px-8 shadow-lg"
            shimmerColor="#ffffff"
            background="rgba(147, 51, 234, 1)"
          >
            Prendre RDV gratuit
          </ShimmerButton>
        </div>
      </div>
    </section>
  )
} 