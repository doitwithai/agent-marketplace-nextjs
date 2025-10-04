import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">A trusted marketplace for MindStudio agents</h1>
        <p className="text-gray-600">Buy ready-made agents or hire verified builders. Escrow, subscriptions, and payouts via Stripe.</p>
        <div className="flex gap-3">
          <Link href="/market" className="btn">Explore Agents</Link>
          <Link href="/dashboard" className="btn-secondary">Become a Builder</Link>
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <div>✅ Escrow & Disputes</div>
          <div>✅ Verified Builders</div>
          <div>✅ Stripe Payouts</div>
        </div>
      </div>
      <div className="card h-64">Hero image / promo</div>
    </div>
  )
}
