'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-gray-700 gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold">SubTrack</h1>
        <nav className="space-x-4">
          <Link href="/login" className="hover:underline">Connexion</Link>
          <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">S’inscrire</Link>
          <Link href="/pricing" className="hover:underline">Tarifs</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
          Reprenez le contrôle de vos abonnements.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          Suivez, organisez et optimisez vos abonnements mensuels avec simplicité.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-blue-600 px-6 py-3 rounded text-base sm:text-lg font-semibold hover:bg-blue-700 transition"
        >
          Voir les plans
        </Link>
      </section>

      {/* Aperçu visuel fictif */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-8">Aperçu de l’interface</h3>
        <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow-lg text-left space-y-4 hover:scale-[1.01] transition">
          <div className="text-sm text-gray-400">Abonnements actifs</div>

          <div className="flex justify-between text-white font-medium">
            <span>📺 Netflix</span>
            <span className="text-green-400">13,99 €</span>
          </div>

          <div className="flex justify-between text-white font-medium">
            <span>🎵 Spotify</span>
            <span className="text-green-400">9,99 €</span>
          </div>

          <div className="flex justify-between text-white font-medium">
            <span>📱 SFR Mobile</span>
            <span className="text-green-400">19,99 €</span>
          </div>

          <div className="text-xs text-gray-500 text-right pt-4 border-t border-gray-700">
            Total mensuel estimé : <span className="font-semibold text-white">43,97 €</span>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="px-6 py-16 bg-gray-800">
        <h3 className="text-2xl font-bold text-center mb-12">Pourquoi SubTrack ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="hover:bg-gray-700 p-4 rounded transition">
            <h4 className="text-xl font-semibold mb-2">🔔 Rappels intelligents</h4>
            <p className="text-gray-400">Ne soyez plus surpris par un prélèvement. SubTrack vous prévient à temps.</p>
          </div>
          <div className="hover:bg-gray-700 p-4 rounded transition">
            <h4 className="text-xl font-semibold mb-2">💸 Suivi des dépenses</h4>
            <p className="text-gray-400">Visualisez en un clic ce que vous payez chaque mois, et repérez les abus.</p>
          </div>
          <div className="hover:bg-gray-700 p-4 rounded transition">
            <h4 className="text-xl font-semibold mb-2">🧠 Simplicité d’utilisation</h4>
            <p className="text-gray-400">Une interface claire et efficace. Pas besoin d’être un expert en finance.</p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-12">Ce que disent nos utilisateurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.01] transition">
            <p className="text-gray-300 mb-4 italic">"SubTrack m’a permis de découvrir que je payais 4 abonnements inutiles. Résultat : 35€ d’économies chaque mois."</p>
            <p className="text-white font-semibold">– Mehdi, 24 ans</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.01] transition">
            <p className="text-gray-300 mb-4 italic">"Simple, rapide et efficace. Je recommande à tous ceux qui galèrent à suivre leurs dépenses mensuelles."</p>
            <p className="text-white font-semibold">– Sarah, 30 ans</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.01] transition">
            <p className="text-gray-300 mb-4 italic">"J’utilise SubTrack depuis 1 mois et j’ai enfin une vue claire sur mes prélèvements. L’interface est top."</p>
            <p className="text-white font-semibold">– Karim, 27 ans</p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="px-6 py-20 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-4">Choisissez votre plan</h3>
        <p className="text-gray-400 mb-12">Commencez gratuitement. Passez en Premium quand vous êtes prêt.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {/* Gratuit */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.01] transition">
            <h4 className="text-xl font-bold mb-2">🆓 Gratuit</h4>
            <p className="text-gray-400 mb-4">Pour les utilisateurs qui veulent commencer simplement.</p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>✅ Jusqu’à 5 abonnements</li>
              <li>✅ Rappels basiques</li>
              <li>✅ Accès web</li>
              <li>❌ Aucune statistique</li>
              <li>❌ Pas de synchronisation</li>
            </ul>
            <Link href="/register" className="inline-block bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition">
              Créer un compte
            </Link>
          </div>

          {/* Premium */}
          <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition border-2 border-blue-500">
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-2">
              ⭐ Recommandé
            </span>
            <h4 className="text-xl font-bold mb-2">💎 Premium</h4>
            <p className="text-white mb-4">Pour ceux qui veulent maîtriser tous leurs abonnements.</p>
            <ul className="text-sm text-blue-100 space-y-2 mb-6">
              <li>✅ Abonnements illimités</li>
              <li>✅ Statistiques & analyses</li>
              <li>✅ Rappels intelligents</li>
              <li>✅ Synchronisation multi-appareils</li>
              <li>✅ Support prioritaire</li>
            </ul>
            <Link href="/pricing" className="inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
              Voir les plans
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-900 border-t border-gray-700">
        © {new Date().getFullYear()} SubTrack. Tous droits réservés.
      </footer>
    </div>
  )
}
