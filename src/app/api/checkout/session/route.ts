import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export async function POST(){
  const stripe = getStripe()
  const price = process.env.STRIPE_PRICE_ID
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  if (!price) {
    return NextResponse.json({ error: 'Missing STRIPE_PRICE_ID env var' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    success_url: `${baseUrl}/orders/demo?status=paid`,
    cancel_url: `${baseUrl}/checkout?status=cancel`,
  })

  return NextResponse.json({ url: session.url })
}
