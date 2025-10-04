import Link from 'next/link'

export default function AdminHome(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card">
        <div className="font-medium mb-2">KYC Queue</div>
        <div className="text-sm text-gray-600">2 pending</div>
        <Link href="/admin/kyc" className="btn mt-3 inline-block">Open</Link>
      </div>
      <div className="card">
        <div className="font-medium mb-2">Disputes</div>
        <div className="text-sm text-gray-600">1 open</div>
        <Link href="/admin/disputes" className="btn mt-3 inline-block">Open</Link>
      </div>
      <div className="card">
        <div className="font-medium mb-2">Fees & Policy</div>
        <div className="text-sm text-gray-600">Commission 12%, Escrow 7 days</div>
        <Link href="/admin/config" className="btn mt-3 inline-block">Open</Link>
      </div>
    </div>
  )
}
