import Link from 'next/link'

export default function Dashboard(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 card space-y-3">
        <div className="font-medium">My Listings</div>
        <div className="border rounded-2xl p-3">Sales Email Writer — $99 (or $29/mo)</div>
        <div className="border rounded-2xl p-3">Support Triage Bot — $129 (or $19/mo)</div>
        <Link href="/dashboard/listings/new" className="btn w-max">New Listing</Link>
      </div>
      <div className="card space-y-2">
        <div className="font-medium">Earnings & Payouts</div>
        <div className="text-sm">Gross: $542.10</div>
        <div className="text-sm">Commission: -$65.05</div>
        <div className="text-sm">Net (lifetime): $477.05</div>
        <div className="text-sm">Pending (escrow): $89.00</div>
        <button className="btn w-full">Withdraw (requires KYC)</button>
      </div>
    </div>
  )
}
