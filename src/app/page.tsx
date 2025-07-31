import { Navigation } from '@/components/ui/navigation'
import { HeroSection } from '@/components/ui/hero-section'
import { VideoCTASection } from '@/components/ui/video-cta-section'

import { WhyChooseUsSection } from '@/components/ui/why-choose-us-section'
import { UseCaseSection } from '@/components/ui/use-case-section'
import { TestimonialsSection } from '@/components/ui/testimonials-section'
import { PricingSection } from '@/components/ui/pricing-section'
import { Footer } from '@/components/ui/footer'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Navigation */}
      <Navigation />
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Video + CTA Section */}
      <VideoCTASection />
      

      
      {/* 3. Section "Pourquoi nous choisir" */}
      <WhyChooseUsSection />
      
      {/* 4. Section "Cas d'usage" */}
      <UseCaseSection />
      
      {/* 5. Section témoignages ou résultats */}
      <TestimonialsSection />
      
      {/* 6. Section pricing ou "commencer maintenant" */}
      <PricingSection />
      
      {/* 7. Footer sobre mais stylé */}
      <Footer />
    </main>
  )
}
