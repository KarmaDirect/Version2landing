import { NumberTicker } from "@/components/magicui/number-ticker"

export function MetricsSection() {
  return (
    <section id="metrics" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20 z-20 px-4">
      {/* Séparateur discret en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-15"></div>
      {/* Fondu en bas pour transition avec la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent z-15"></div>
      
      <div className="container mx-auto px-4 text-center text-gray-800 z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
          Nos{" "}
          <div className="relative inline-block ml-2">
            <span className="relative z-10">Résultats</span>
            <svg 
              className="absolute -bottom-4 left-0 w-full h-4 z-0" 
              viewBox="0 0 100 15" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,8 C20,2 40,12 60,4 80,10 100,6 100,8" 
                stroke="#16a34a" 
                strokeWidth="7" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>{" "}
          Chiffrés
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-800">
          Des performances exceptionnelles qui parlent d&apos;elles-mêmes
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Métrique 1 - Mise en place */}
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-8 h-full flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 text-gray-800">
                  <NumberTicker value={2} className="text-4xl font-bold force-dark-gray" /> semaines
                </h3>
                <p className="text-gray-800 leading-relaxed text-lg font-bold">
                  Mise en place complète de votre solution d&apos;automatisation IA
                </p>
              </div>
            </div>
          </div>

          {/* Métrique 2 - Tâches automatisées */}
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-8 h-full flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 text-gray-800">
                  <NumberTicker value={80} className="text-4xl font-bold force-dark-gray" />%
                </h3>
                <p className="text-gray-800 leading-relaxed text-lg font-bold">
                  De vos tâches répétitives automatisées grâce à notre IA
                </p>
              </div>
            </div>
          </div>

          {/* Métrique 3 - ROI */}
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-8 h-full flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 text-gray-800">
                  <NumberTicker value={250} className="text-4xl font-bold force-dark-gray" />%
                </h3>
                <p className="text-gray-800 leading-relaxed text-lg font-bold">
                  ROI moyen constaté par nos clients après 6 mois d&apos;utilisation
                </p>
              </div>
            </div>
          </div>

          {/* Métrique 4 - Temps économisé */}
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-8 h-full flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 text-gray-800">
                  <NumberTicker value={15} className="text-4xl font-bold force-dark-gray" />h/semaine
                </h3>
                <p className="text-gray-800 leading-relaxed text-lg font-bold">
                  Temps économisé en moyenne par nos clients grâce aux automatisations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques supplémentaires avec le même style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <NumberTicker value={500} className="text-4xl font-bold force-dark-gray" />+
                </div>
                                 <div className="text-gray-800 font-bold">Clients satisfaits</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <NumberTicker value={15} className="text-4xl font-bold force-dark-gray" />k+
                </div>
                                 <div className="text-gray-800 font-bold">Heures économisées</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <NumberTicker value={98} className="text-4xl font-bold force-dark-gray" />%
                </div>
                                 <div className="text-gray-800 font-bold">Taux de satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <NumberTicker value={24} className="text-4xl font-bold force-dark-gray" />h
                </div>
                                 <div className="text-gray-800 font-bold">Installation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 