// src/app/robots.txt/route.ts
export async function GET() {
    const content = `User-agent: *
  Allow: /
  Sitemap: https://subtrack.fr/sitemap.xml`
  
    return new Response(content, {
      headers: { 'Content-Type': 'text/plain' }
    })
  }
  