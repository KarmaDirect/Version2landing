export function WhyChooseUsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Pourquoi choisir Webstate ?
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-300">
          Découvrez les avantages qui font de Webstate la solution d&apos;automatisation IA la plus performante
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bloc 1 - IA Avancée */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">IA Avancée</h3>
            <p className="text-gray-300 leading-relaxed">
              Automatisations intelligentes basées sur l&apos;intelligence artificielle de pointe pour optimiser vos processus
            </p>
          </div>
          
          {/* Bloc 2 - Clé en Main */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Clé en Main</h3>
            <p className="text-gray-300 leading-relaxed">
              Site web + automatisations : tout est inclus et prêt à l&apos;emploi en moins de 2 semaines
            </p>
          </div>
          
          {/* Bloc 3 - ROI Garanti */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">ROI Garanti</h3>
            <p className="text-gray-300 leading-relaxed">
              Résultats mesurables et retour sur investissement rapide avec un ROI moyen de 250%
            </p>
          </div>
        </div>
        
        {/* Statistiques supplémentaires */}
        <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-300 text-sm">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15k+</div>
            <div className="text-gray-300 text-sm">Heures économisées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300 text-sm">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24h</div>
            <div className="text-gray-300 text-sm">Installation</div>
          </div>
        </div>
      </div>
    </section>
  )
} 