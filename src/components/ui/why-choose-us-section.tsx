import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"
import { Meteors } from "@/components/magicui/meteors"
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo"

export function WhyChooseUsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden py-20 z-20 px-4">
      {/* Overlay sombre pour plus d'impact */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Animations de météores sur les côtés */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-5">
        <Meteors number={25} angle={200} minDuration={2} maxDuration={6} />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 z-5">
        <Meteors number={25} angle={160} minDuration={2} maxDuration={6} />
      </div>
      
      {/* Séparateur discret en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-15"></div>
      {/* Fondu en bas pour transition avec la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-15"></div>
      
      <div className="container mx-auto px-4 text-center text-white z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
          Pourquoi choisir{" "}
          <div className="relative inline-block ml-2">
            <span className="relative z-10">Webstate</span>
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
          ?
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-gray-300">
          Découvrez les avantages qui font de Webstate la solution d&apos;automatisation IA la plus performante
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bloc 1 - IA Avancée */}
          <div className="relative">
            <NeonGradientCard 
              className="h-full"
              neonColors={{
                firstColor: "#16a34a",
                secondColor: "#ffffff"
              }}
              borderSize={2}
              borderRadius={20}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IA Avancée</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatisations intelligentes basées sur l&apos;intelligence artificielle de pointe pour optimiser vos processus
                </p>
              </div>
            </NeonGradientCard>
          </div>
          
          {/* Bloc 2 - Clé en Main */}
          <div className="relative">
            <NeonGradientCard 
              className="h-full"
              neonColors={{
                firstColor: "#16a34a",
                secondColor: "#ffffff"
              }}
              borderSize={2}
              borderRadius={20}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Clé en Main</h3>
                <p className="text-gray-300 leading-relaxed">
                  Site web + automatisations : tout est inclus et prêt à l&apos;emploi en moins de 2 semaines
                </p>
              </div>
            </NeonGradientCard>
          </div>
          
          {/* Bloc 3 - ROI Garanti */}
          <div className="relative">
            <NeonGradientCard 
              className="h-full"
              neonColors={{
                firstColor: "#16a34a",
                secondColor: "#ffffff"
              }}
              borderSize={2}
              borderRadius={20}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">ROI Garanti</h3>
                <p className="text-gray-300 leading-relaxed">
                  Résultats mesurables et retour sur investissement rapide avec un ROI moyen de 250%
                </p>
              </div>
            </NeonGradientCard>
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