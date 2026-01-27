// Image configuration for the site
// Place your images in the public/images folder and reference them here

export const images = {
  // Lokale bilder (lagt inn av bruker)
  hero: '/images/hero.JPG',
  heroMobile: '/images/hero-mobile.jpg',
  
  // Tiltakspakker (lokale bilder)
  fysiskInfrastruktur: '/images/fysisk-infrastruktur.JPG',
  vertskapFormidling: '/images/vertskap-formidling.JPG',
  organiseringKompetanse: '/images/organisering-kompetanse.JPG',
  
  // Utforsk tiltakene (Unsplash placeholders med relevante bilder for hvert tiltak)
  toaletterHygiene: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  parkeringTrafikk: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  informasjonssystemer: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  naturvernBaerekraft: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  soppelhandtering: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  bilfriSone: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  gronnMobilitet: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  naturrestaurering: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Bakgrunn (lokalt bilde)
  bakgrunn: '/images/bakgrunn.png',
  
  // Prinsipp-illustrasjoner
  lokalsamfunn: '/images/lokalsamfunn.png',
  natur: '/images/natur.png',
  turister: '/images/turister.png',
  
  // Fallback til placeholder hvis bildet ikke finnes (Lofoten-bilde)
  placeholder: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
}

// Helper function to get image path with fallback
export function getImage(path: string | undefined, fallback: string = images.placeholder): string {
  return path || fallback
}
