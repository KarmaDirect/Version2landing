import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { UnifiedButton } from '@/components/ui/unified-button'

export function PricingSection() {
  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden py-20">
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
         <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto items-end">
           {/* Offre Starter */}
           <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              ESSENTIEL
            </div>
            
            {/* Header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Starter</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-800">€297</span>
                <span className="text-gray-500 font-medium">/mois</span>
              </div>
            </div>
            
            {/* Features */}
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Site web professionnel</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Automatisations de base</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Support email</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Installation en 24h</span>
              </li>
            </ul>
            
                         {/* CTA Button */}
             <div className="relative z-10 mt-auto">
               <UnifiedButton variant="secondary" size="lg" className="w-full">
                 Choisir Starter
               </UnifiedButton>
             </div>
          </div>
          
                     {/* Offre Pro - Mise en avant */}
           <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 transform scale-105 border-2 border-gray-300 h-full flex flex-col">
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Badge POPULAIRE */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              POPULAIRE
            </div>
            
            {/* Header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-800">€597</span>
                <span className="text-gray-500 font-medium">/mois</span>
              </div>
            </div>
            
            {/* Features */}
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Tout Starter +</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">IA avancée</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">CRM intégré</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Support prioritaire</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Formation incluse</span>
              </li>
            </ul>
            
                         {/* CTA Button */}
             <div className="relative z-10 mt-auto">
               <UnifiedButton variant="primary" size="lg" className="w-full">
                 Choisir Pro
               </UnifiedButton>
             </div>
          </div>
          
                     {/* Offre Enterprise */}
           <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              ENTERPRISE
            </div>
            
            {/* Header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-800">€997</span>
                <span className="text-gray-500 font-medium">/mois</span>
              </div>
            </div>
            
            {/* Features */}
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Tout Pro +</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Personnalisation complète</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Formation dédiée</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">Manager de compte</span>
              </li>
              <li className="flex items-center group/item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium">SLA garanti</span>
              </li>
            </ul>
            
                         {/* CTA Button */}
             <div className="relative z-10 mt-auto">
               <UnifiedButton variant="secondary" size="lg" className="w-full">
                 Contacter
               </UnifiedButton>
             </div>
          </div>
        </div>
        
                 {/* CTA final */}
         <div className="text-center">
           <p className="text-xl text-gray-600 mb-6">
             Pas sûr de l&apos;offre ? Parlons-en ensemble !
           </p>
           <UnifiedButton variant="primary" size="lg">
             Prendre RDV gratuit
           </UnifiedButton>
         </div>
      </div>
    </section>
  )
} 