import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestion abonnements mobiles - SubTrack',
  description: 'SubTrack vous aide à suivre vos abonnements mobiles (SFR, Free, Orange) et à recevoir des rappels.',
}

export default function AbosMobile() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Gérez vos abonnements mobiles sans prise de tête</h1>
      <p className="mb-4 text-gray-300">
        Marre des surprises sur vos factures téléphoniques ? SubTrack vous permet de suivre précisément vos abonnements : SFR, Free, Orange, etc.
      </p>
      <p className="mb-4 text-gray-300">
        Indiquez vos abonnements, dates de renouvellement et montants — on s’occupe des rappels et du suivi. Gagnez en visibilité sur vos dépenses.
      </p>
      <p className="text-gray-400">SubTrack est l’outil qu’il vous faut pour prendre le contrôle.</p>
    </div>
  )
}