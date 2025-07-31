import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Meteors } from '@/components/magicui/meteors'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShinyButton } from '@/components/magicui/shiny-button'

export function VideoCTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden py-20 z-20">
      {/* Overlay sombre pour plus d'impact */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
             {/* Animations de météores sur les côtés */}
       <div className="absolute left-0 top-0 h-full w-1/2 z-5">
         <Meteors number={25} angle={200} minDuration={2} maxDuration={6} />
       </div>
       <div className="absolute right-0 top-0 h-full w-1/2 z-5">
         <Meteors number={25} angle={160} minDuration={2} maxDuration={6} />
       </div>
      
      {/* Fondu en haut pour transition avec la hero section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent z-15"></div>
      {/* Fondu en bas pour transition avec la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-15"></div>
      
      <div className="container mx-auto px-4 text-center text-white z-20 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez Webstate en action
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Regardez comment notre solution d&apos;automatisation IA transforme les entreprises en 2 semaines
          </p>
        </div>
        
        {/* Vidéo centrée */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/mAGW3izg0hk"
              thumbnailSrc="https://img.youtube.com/vi/mAGW3izg0hk/maxresdefault.jpg"
              thumbnailAlt="Démonstration Webstate - Automatisation IA"
            />
          </div>
        </div>
        
        {/* Description vidéo */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          Une démonstration complète de nos fonctionnalités d&apos;automatisation
        </p>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">2 semaines</div>
            <div className="text-gray-300">Mise en place</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">80%</div>
            <div className="text-gray-300">Tâches automatisées</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">250%</div>
            <div className="text-gray-300">ROI moyen</div>
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