'use client'
import { useState } from 'react'

export default function Checkout(){
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function startCheckout(){
    setLoading(true)
    try{
      const res = await fetch('/api/checkout/session', { method:'POST' })
      const data = await res.json()
      setResult(data)
      if (data?.url) window.location.href = data.url
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card space-y-3">
      <div className="font-medium">Stripe Checkout (TEST mode)</div>
      <p className="text-sm text-gray-600">Click to create a real test Checkout Session. Configure your Stripe keys and STRIPE_PRICE_ID in Vercel env vars.</p>
      <button className="btn" onClick={startCheckout} disabled={loading}>{loading?'Creating session...':'Create Checkout Session'}</button>
      {result && <pre className="text-xs bg-gray-50 p-3 rounded-2xl overflow-auto">{JSON.stringify(result,null,2)}</pre>}
    </div>
  )
}
