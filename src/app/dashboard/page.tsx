'use client'

import { useEffect, useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import SubscriptionChart from '@/components/SubscriptionChart'
import { sendReminderEmail } from '@/lib/email'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [subscriptions, setSubscriptions] = useState<any[]>([])
  const [form, setForm] = useState({ name: '', amount: '', renewalDate: '' })
  const [totalAmount, setTotalAmount] = useState(0)
  const [isPremium, setIsPremium] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return
      setUser(currentUser)
      fetchSubscriptions(currentUser.uid)
      await fetchPremiumStatus(currentUser.uid)
    })
    return () => unsubscribe()
  }, [])

  const fetchPremiumStatus = async (uid: string) => {
    const userRef = doc(db, 'users', uid)
    const snap = await getDoc(userRef)
    if (snap.exists()) {
      setIsPremium(snap.data().isPremium === true)
    }
  }

  const fetchSubscriptions = async (uid: string) => {
    const q = query(collection(db, 'subscriptions'), where('userId', '==', uid))
    const snapshot = await getDocs(q)
    const subs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setSubscriptions(subs)
  }

  useEffect(() => {
    const total = subscriptions.reduce((acc, sub) => acc + (parseFloat(sub.amount) || 0), 0)
    setTotalAmount(total)
  }, [subscriptions])

  // 📧 Envoi automatique de rappel
  useEffect(() => {
    if (!user || !user.email) return

    subscriptions.forEach((sub) => {
      const daysLeft = getDaysLeft(sub.renewalDate)

      if (daysLeft >= 1 && daysLeft <= 3) {
        const localKey = `emailSent-${user.uid}-${sub.id}`

        const alreadySent = localStorage.getItem(localKey)
        if (!alreadySent) {
          sendReminderEmail({
            userEmail: user.email,
            subscriptionName: sub.name,
            subscriptionAmount: sub.amount.toString(),
            renewalDate: sub.renewalDate,
            daysLeft,
          })
          localStorage.setItem(localKey, new Date().toISOString())
        }
      }
    })
  }, [subscriptions, user])

  const handleAddSubscription = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    if (!isPremium && subscriptions.length >= 5) {
      alert("Vous avez atteint la limite de 5 abonnements dans le plan gratuit. Passez en Premium pour en ajouter plus.")
      return
    }

    await addDoc(collection(db, 'subscriptions'), {
      userId: user.uid,
      name: form.name,
      amount: parseFloat(form.amount),
      renewalDate: form.renewalDate,
      createdAt: new Date().toISOString()
    })
    setForm({ name: '', amount: '', renewalDate: '' })
    fetchSubscriptions(user.uid)
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'subscriptions', id))
    if (user) fetchSubscriptions(user.uid)
  }

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

  const getDaysLeft = (dateStr: string) => {
    const today = dayjs()
    const renewalDate = dayjs(dateStr)
    const diff = renewalDate.diff(today, 'day')
    return diff >= 0 ? diff : 0
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-2 text-gray-200">
        Bienvenue sur ton dashboard, {user?.email}
      </h1>

      {isPremium && (
        <span className="inline-block bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded mb-4">
          💎 Premium actif
        </span>
      )}

      <button
        onClick={handleLogout}
        className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Se déconnecter
      </button>

      <form
        onSubmit={handleAddSubscription}
        className="mb-8 grid grid-cols-1 gap-4 bg-white p-4 rounded shadow"
      >
        <input
          type="text"
          placeholder="Nom de l'abonnement"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 border rounded text-gray-900"
          required
        />
        <input
          type="number"
          placeholder="Montant (€)"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="p-2 border rounded text-gray-900"
          required
        />
        <input
          type="date"
          value={form.renewalDate}
          onChange={(e) => setForm({ ...form, renewalDate: e.target.value })}
          className="p-2 border rounded text-gray-900"
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Ajouter
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Tes abonnements :</h2>
      <p className="text-gray-300 mb-4">
        💰 Total mensuel estimé : <span className="text-white font-bold">{totalAmount.toFixed(2)} €</span>
      </p>

      {totalAmount > 50 && (
        <p className="mb-4 text-yellow-400">⚠️ Tu dépenses beaucoup en abonnements, pense à faire le tri 👀</p>
      )}

      {!isPremium && subscriptions.length >= 5 && (
        <div className="mb-6 p-4 bg-yellow-300 text-black rounded shadow text-center">
          <p className="mb-2 font-semibold">
            🚀 Vous avez atteint la limite gratuite de 5 abonnements.
          </p>
          <p className="mb-4 text-sm">Passez en Premium pour débloquer les abonnements illimités et accéder à des statistiques avancées.</p>
          <button
            onClick={() => router.push('/subscribe')}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Passer en Premium
          </button>
        </div>
      )}

      <ul className="space-y-2">
        {subscriptions.map((sub) => (
          <li
            key={sub.id}
            className="p-4 bg-gray-500 rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <strong>{sub.name}</strong> — 💰 {sub.amount}€ — 📅 {sub.renewalDate} <br />
              {getDaysLeft(sub.renewalDate) <= 3 ? (
                <span className="text-sm text-red-300 font-semibold">
                  🔔 Renouvellement dans {getDaysLeft(sub.renewalDate)} jour(s)
                </span>
              ) : (
                <span className="text-sm text-gray-200">
                  ⏳ Renouvellement dans {getDaysLeft(sub.renewalDate)} jour(s)
                </span>
              )}
            </div>
            <button
              onClick={() => handleDelete(sub.id)}
              className="text-red-500 hover:text-red-700 text-sm font-bold"
            >
              🗑️ Supprimer
            </button>
          </li>
        ))}
      </ul>

      {isPremium && subscriptions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white mb-4">📊 Mes statistiques</h2>
          <SubscriptionChart data={subscriptions} />
        </section>
      )}
    </div>
  )
}
