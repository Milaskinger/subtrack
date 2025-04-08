'use client'

import { useState } from 'react'

export default function SubscribePage() {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
    })

    const data = await res.json()
    if (data?.url) {
      window.location.href = data.url
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Passer à SubTrack Premium 💎</h1>
        <p className="text-gray-300 mb-6">
          Débloquez les rappels intelligents, les stats, les abonnements illimités et plus encore.
        </p>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700 transition"
        >
          {loading ? 'Redirection en cours...' : 'S’abonner maintenant'}
        </button>
      </div>
    </div>
  )
}
