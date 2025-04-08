'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Choisissez votre plan</h1>
      <p className="text-gray-400 mb-12">Commencez gratuitement, passez en Premium quand vous êtes prêt.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        {/* Gratuit */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.01] transition">
          <h2 className="text-xl font-bold mb-2">🆓 Gratuit</h2>
          <p className="text-gray-400 mb-4">Pour démarrer simplement sans engagement.</p>
          <ul className="text-sm text-gray-300 space-y-2 mb-6">
            <li>✅ Jusqu’à 5 abonnements</li>
            <li>✅ Rappels basiques</li>
            <li>✅ Accès web</li>
            <li>❌ Statistiques</li>
            <li>❌ Synchronisation</li>
          </ul>
          <Link href="/register" className="inline-block bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition">
            Créer un compte
          </Link>
        </div>

        {/* Premium */}
        <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition border-2 border-blue-500">
          <h2 className="text-xl font-bold mb-2">💎 Premium</h2>
          <p className="text-white mb-4">Pour une maîtrise complète de vos abonnements.</p>
          <ul className="text-sm text-blue-100 space-y-2 mb-6">
            <li>✅ Abonnements illimités</li>
            <li>✅ Rappels intelligents</li>
            <li>✅ Statistiques mensuelles</li>
            <li>✅ Synchronisation multi-appareils</li>
            <li>✅ Support prioritaire</li>
          </ul>
          <Link href="/subscribe" className="inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
            Passer en Premium
          </Link>
        </div>
      </div>
    </div>
  )
}
