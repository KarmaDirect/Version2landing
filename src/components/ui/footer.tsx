export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6">Webstate</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Automatisez votre entreprise avec l&apos;IA. Solutions clés-en-main pour transformer votre business 
              et maximiser votre rentabilité en moins de 2 semaines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Produit</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Intégrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Démo</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formation</a></li>
            </ul>
          </div>
        </div>
        
        {/* Informations légales */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">
              © 2024 Webstate. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 