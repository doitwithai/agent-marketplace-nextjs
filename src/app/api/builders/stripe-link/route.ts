import { NextResponse } from 'next/server'
export async function POST(){
  // TODO: Create Stripe Connect onboarding link via stripe.accountLinks.create
  return NextResponse.json({ message: 'Connect onboarding stub — integrate Stripe Connect', url: null })
}
