export function TestimonialsSection() {
  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ils nous font confiance
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-300">
          Découvrez les témoignages de nos clients qui ont transformé leur entreprise avec Webstate
        </p>
        
        {/* Témoignages clients */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Témoignage 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/30 rounded-full mr-4 flex items-center justify-center">
                <span className="text-purple-300 font-bold">J</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Jean Martin</h4>
                <p className="text-sm text-gray-300">Restaurateur</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">
              "Webstate a transformé notre gestion client. Nous avons doublé nos réservations en seulement 2 semaines !"
            </p>
          </div>
          
          {/* Témoignage 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full mr-4 flex items-center justify-center">
                <span className="text-blue-300 font-bold">S</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Sophie Bernard</h4>
                <p className="text-sm text-gray-300">Coiffeuse</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">
              "L&apos;automatisation des prises de RDV m&apos;a fait gagner un temps fou. Je peux enfin me concentrer sur mon métier !"
            </p>
          </div>
          
          {/* Témoignage 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/30 rounded-full mr-4 flex items-center justify-center">
                <span className="text-green-300 font-bold">P</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Pierre Dubois</h4>
                <p className="text-sm text-gray-300">Plombier</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">
              "ROI exceptionnel : 400% en 8 mois grâce aux automatisations Webstate. Un investissement qui se rentabilise rapidement !"
            </p>
          </div>
        </div>
        
        {/* Métriques de succès */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-8">📈 Nos Chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-sm">Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15k+</div>
              <p className="text-sm">Heures économisées</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-sm">Taux de satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250%</div>
              <p className="text-sm">ROI moyen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 