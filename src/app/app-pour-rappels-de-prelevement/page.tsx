import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App pour rappels de prélèvements - SubTrack',
  description: 'Recevez des rappels de prélèvements et gérez vos abonnements grâce à SubTrack.',
}

export default function RappelPrelevement() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">L'application ultime pour vos rappels de prélèvements</h1>
      <p className="mb-4 text-gray-300">
        Avec SubTrack, recevez des notifications avant chaque prélèvement important : forfait mobile, Netflix, assurance...
        Organisez votre budget et anticipez vos dépenses facilement.
      </p>
      <p className="mb-4 text-gray-300">
        Notre outil en ligne vous offre un tableau clair de tous vos abonnements, avec rappels personnalisables et statistiques visuelles.
      </p>
      <p className="text-gray-400">Disponible gratuitement avec option premium.</p>
    </div>
  )
}