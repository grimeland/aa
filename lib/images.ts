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
  // Søker på relevante titteler for å illustrere hvert tiltak
  toaletterHygiene: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Public bathroom/toilet
  parkeringTrafikk: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Parking lot
  informasjonssystemer: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Information board/sign
  naturvernBaerekraft: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Nature conservation
  
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
