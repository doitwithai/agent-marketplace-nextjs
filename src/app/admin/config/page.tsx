'use client'
import { useState } from 'react'

export default function AdminConfig(){
  const [commission, setCommission] = useState(12)
  const [escrow, setEscrow] = useState(7)
  return (
    <div className="card space-y-3 max-w-md">
      <div className="font-medium">Fees & Policy</div>
      <label className="label">Commission (%)</label>
      <input className="input" type="number" value={commission} onChange={e=>setCommission(parseFloat(e.target.value||'0'))}/>
      <label className="label">Escrow hold (days)</label>
      <input className="input" type="number" value={escrow} onChange={e=>setEscrow(parseFloat(e.target.value||'0'))}/>
      <button className="btn w-full">Save</button>
      <div className="text-xs text-gray-500">These map to a `fees_config` table in Supabase in the full build.</div>
    </div>
  )
}
