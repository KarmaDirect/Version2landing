import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Meteors } from '@/components/magicui/meteors'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { NumberTicker } from '@/components/magicui/number-ticker'

export function VideoCTASection() {
  return (
    <section className="test-section-2 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden py-20 z-20 px-4">
      {/* Overlay sombre pour plus d'impact */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
             {/* Animations de météores sur les côtés */}
       <div className="absolute left-0 top-0 h-full w-1/2 z-5">
         <Meteors number={25} angle={200} minDuration={2} maxDuration={6} />
       </div>
       <div className="absolute right-0 top-0 h-full w-1/2 z-5">
         <Meteors number={25} angle={160} minDuration={2} maxDuration={6} />
       </div>
      
      {/* Séparateur discret en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-15"></div>
      
      <div className="container mx-auto px-4 text-center text-white z-20 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez{" "}
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
            </div>
            {" "}en action
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Regardez comment notre solution d&apos;automatisation IA transforme les entreprises en 2 semaines
          </p>
        </div>
        
        {/* Vidéo centrée avec effet glow aura */}
        <div className="flex justify-center mb-12 relative">
          {/* Effet glow aura en arrière-plan */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-white/20 blur-[100px] rounded-full z-0 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-400/15 via-green-500/10 to-white/15 blur-[80px] rounded-full z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Container vidéo avec effet glow */}
          <div className="relative z-10 w-full max-w-4xl">
            <div className="relative">
              {/* Glow autour du lecteur vidéo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/30 via-emerald-500/20 to-white/30 blur-2xl rounded-2xl z-0"></div>
              <div className="relative z-10">
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/mAGW3izg0hk"
                  thumbnailSrc="https://img.youtube.com/vi/mAGW3izg0hk/maxresdefault.jpg"
                  thumbnailAlt="Démonstration Webstate - Automatisation IA"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Description vidéo */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          Une démonstration complète de nos fonctionnalités d&apos;automatisation
        </p>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="relative flex justify-center">
            <div className="card stats-card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <h3 className="text-5xl font-bold mb-4 text-gray-800">
                  <NumberTicker value={7} className="text-5xl font-bold force-dark-gray" /> j
                </h3>
                <p className="text-gray-800 leading-relaxed text-base font-bold">
                  Mise en place complète
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="card stats-card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <h3 className="text-5xl font-bold mb-4 text-gray-800">
                  <NumberTicker value={80} className="text-5xl font-bold force-dark-gray" />%
                </h3>
                <p className="text-gray-800 leading-relaxed text-base font-bold">
                  Tâches automatisées
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="card stats-card">
              <div className="text-center p-6 h-full flex flex-col justify-center">
                <h3 className="text-5xl font-bold mb-4 text-gray-800">
                  <NumberTicker value={250} className="text-5xl font-bold force-dark-gray" />%
                </h3>
                <p className="text-gray-800 leading-relaxed text-base font-bold">
                  ROI moyen
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <ShimmerButton 
            className="text-lg font-bold py-4 px-8 shadow-lg"
            shimmerColor="#1f2937"
            background="rgba(255, 255, 255, 1)"
          >
            Prendre RDV Gratuit
          </ShimmerButton>
          <ShinyButton className="text-lg font-medium py-4 px-8 border-2 border-white/30 text-white">
            Voir plus de démos
          </ShinyButton>
        </div>
        
        {/* Badges de confiance */}
        <div className="flex items-center justify-center gap-6 flex-wrap max-w-4xl mx-auto">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Essai gratuit 14 jours</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
} 