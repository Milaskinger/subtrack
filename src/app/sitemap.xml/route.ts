// src/app/sitemap.xml/route.ts
export async function GET() {
    const baseUrl = 'https://subtrack.fr'
  
    const pages = [
      '', 'register', 'login', 'pricing', 'subscribe',
      'suivi-abonnement-netflix', 'app-pour-rappels-de-prelevement', 'gestion-abonnement-mobile'
    ]
  
    const urls = pages.map((page) => `
      <url><loc>${baseUrl}/${page}</loc></url>
    `).join('')
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset>`
  
    return new Response(sitemap, {
      headers: { 'Content-Type': 'application/xml' }
    })
  }
  