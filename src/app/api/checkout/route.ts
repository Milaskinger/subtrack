import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

// Initialisation de Stripe avec ta clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // apiVersion: '2023-10-16' // Optionnel : tu peux commenter
})

export async function POST(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: 'price_1RBJmcKshGq6KC7gF0kPkWjo', // ⚠️ Remplace par TON ID Stripe exact
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Erreur Stripe :', error)
    console.error('Clé Stripe utilisée :', process.env.STRIPE_SECRET_KEY)
    return NextResponse.json({ error: 'Erreur lors de la création de la session Stripe' }, { status: 500 })
  }
}
