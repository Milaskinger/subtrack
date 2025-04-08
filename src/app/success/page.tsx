'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { auth, db } from '@/lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function SuccessPage() {
  useEffect(() => {
    const user = auth.currentUser
    if (!user) return

    const userRef = doc(db, 'users', user.uid)
    setDoc(userRef, {
      isPremium: true,
      abonnement: 'premium',
      dateInscription: new Date().toISOString(),
    }, { merge: true })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="bg-gray-800 p-10 rounded-xl shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Merci pour ton abonnement Premium !</h1>
        <p className="text-gray-300 mb-6">
          Tu as maintenant accès à toutes les fonctionnalités de SubTrack 💎<br />
          Rappels intelligents, stats détaillées, abonnements illimités et bien plus encore.
        </p>
        <Link
          href="/dashboard"
          className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700 transition"
        >
          Accéder au dashboard
        </Link>
      </div>
    </div>
  )
}
