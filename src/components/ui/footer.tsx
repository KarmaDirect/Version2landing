'use client';

import { useState } from 'react';

export function Footer() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 relative z-20">
      <div className="container mx-auto px-4">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Webstate</h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Automatisez votre entreprise avec l&apos;IA. Solutions clés-en-main pour transformer votre business 
              et maximiser votre rentabilité en moins de 2 semaines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-left"
                >
                  Pourquoi nous choisir
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('use-case')}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-left"
                >
                  Cas d&apos;usage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-left"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-left"
                >
                  Tarifs
                </button>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Formation</a></li>
            </ul>
          </div>
        </div>
        
        {/* Informations légales - style inspiré de votre exemple */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 Webstate. Tous droits réservés.
            </p>
            <ul className="flex flex-row">
              <li className="mr-4 md:mr-[44px]">
                <a
                  className="text-[10px] font-medium text-gray-600 hover:text-gray-800 lg:text-sm transition-colors"
                  href="#"
                >
                  Mentions légales
                </a>
              </li>
              <li className="mr-4 md:mr-[44px]">
                <a
                  className="text-[10px] font-medium text-gray-600 hover:text-gray-800 lg:text-sm transition-colors"
                  href="#"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li className="mr-4 md:mr-[44px]">
                <a
                  className="text-[10px] font-medium text-gray-600 hover:text-gray-800 lg:text-sm transition-colors"
                  href="#"
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  className="text-[10px] font-medium text-gray-600 hover:text-gray-800 lg:text-sm transition-colors"
                  href="#"
                >
                  Politique de remboursement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 