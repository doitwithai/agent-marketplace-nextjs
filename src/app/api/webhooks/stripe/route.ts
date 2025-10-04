import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'

export async function POST(req: Request){
  const stripe = getStripe()
  const sig = (await headers()).get('stripe-signature')
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const body = await req.text()

  if (!secret || !sig) {
    console.warn('Webhook missing secret or signature')
    return new NextResponse(null, { status: 200 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return new NextResponse(null, { status: 400 })
  }

  console.log('[webhook] event', event.type)

  // TODO: handle events:
  // - checkout.session.completed: create an order row
  // - invoice.paid: mark subscription active
  // - charge.dispute.created / closed: update ledger
  return new NextResponse(null, { status: 200 })
}

export const dynamic = 'force-dynamic'
