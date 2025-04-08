import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suivi Abonnement Netflix - SubTrack',
  description: 'Gérez facilement votre abonnement Netflix avec des rappels et un suivi de dépenses via SubTrack.',
}

export default function SuiviNetflix() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Gérez votre abonnement Netflix facilement</h1>
      <p className="mb-4 text-gray-300">
        SubTrack est une application simple qui vous aide à suivre vos abonnements comme Netflix, Spotify ou Amazon Prime.
        Avec notre système de rappels intelligents, ne soyez plus jamais surpris par un prélèvement.
      </p>
      <p className="mb-4 text-gray-300">
        Vous pouvez centraliser tous vos abonnements en un seul endroit, suivre vos dépenses mensuelles et recevoir des alertes personnalisées.
      </p>
      <p className="text-gray-400">Essayez SubTrack gratuitement dès maintenant et maîtrisez vos abonnements.</p>
    </div>
  )
}