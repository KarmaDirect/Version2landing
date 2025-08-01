import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'

export function UseCaseSection() {
  return (
    <section id="use-case" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden py-20">
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
          Cas d&apos;usage : Entreprise Artisanale
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-600">
          Découvrez comment Webstate a transformé une entreprise artisanale en 2 semaines
        </p>
        
        {/* Témoignage client */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 max-w-4xl mx-auto border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <span className="text-gray-600 font-bold text-xl">M</span>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold">Marie Dubois</h4>
              <p className="text-gray-600">Dirigeante, TechStart - Entreprise artisanale</p>
            </div>
          </div>
          <blockquote className="text-lg text-gray-700 italic leading-relaxed">
            "Webstate a transformé notre entreprise. En 2 semaines, nous avons automatisé 80% de nos tâches répétitives. 
            Le ROI est incroyable : nous avons gagné 15 heures par semaine et doublé nos réservations !"
          </blockquote>
        </div>
        
        {/* Problèmes rencontrés */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-red-600">❌ Problèmes rencontrés</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Gestion manuelle des prises de RDV (5h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Suivi client par email (3h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Facturation manuelle (2h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Site web obsolète et non responsive</span>
              </li>
            </ul>
          </div>
          
          {/* Solutions Webstate */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Solutions Webstate</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Calendrier automatique avec IA (0h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">CRM automatisé avec suivi client (0.5h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Facturation automatique (0h/semaine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span className="text-gray-700">Site web moderne et responsive</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Résultats chiffrés */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8">📊 Résultats après 2 semaines</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15h</div>
              <div className="text-sm">Économisées/semaine</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+100%</div>
              <div className="text-sm">Réservations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">400%</div>
              <div className="text-sm">ROI en 8 mois</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-sm">Tâches automatisées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 