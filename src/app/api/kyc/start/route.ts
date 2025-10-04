import { NextResponse } from 'next/server'
export async function POST(){
  // TODO: Create Stripe Identity verification session and return client_secret / url
  return NextResponse.json({ message: 'KYC stub — integrate Stripe Identity' })
}
