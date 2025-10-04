'use client'
import { useState } from 'react'
import Link from 'next/link'
import { redact } from '@/lib/redact'

const DEMO = {
  id:'l1', title:'Sales Email Writer', desc:'Generates tailored outbound sequences and follow-ups.',
  price: 99, sub: 29, category:'Sales'
}

export default function ListingDetail(){
  const [mode, setMode] = useState<'one'|'sub'|'escrow'>('one')
  const [chat, setChat] = useState<string[]>([
    'Buyer: Can you integrate HubSpot?',
    'Builder: Yes, included in Pro.'
  ])
  const [msg, setMsg] = useState('')

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="card">
          <h2 className="text-2xl font-semibold">{DEMO.title}</h2>
          <p className="text-gray-600">{DEMO.desc}</p>
          <div className="text-sm text-gray-500">Category: {DEMO.category}</div>
        </div>
        <div className="card">
          <div className="font-medium mb-2">Ask the seller (PII redacted)</div>
          <div className="border rounded-2xl p-3 h-40 overflow-auto mb-2 text-sm space-y-1 bg-gray-50">
            {chat.map((c,i)=> <div key={i}>{c}</div>)}
          </div>
          <div className="flex gap-2">
            <input className="input" placeholder="Type a message" value={msg} onChange={e=>setMsg(e.target.value)}/>
            <button className="btn" onClick={()=>{ setChat([...chat, 'You: '+redact(msg)]); setMsg('') }}>Send</button>
          </div>
          <div className="text-xs text-gray-500 mt-1">Emails/phones/links are redacted to keep transactions on-platform.</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="card space-y-3">
          <div className="font-medium">Pricing</div>
          <label className="flex items-center justify-between border rounded-2xl p-3">
            <span>One-time</span>
            <input type="radio" name="mode" checked={mode==='one'} onChange={()=>setMode('one')}/>
          </label>
          {DEMO.sub && (
            <label className="flex items-center justify-between border rounded-2xl p-3">
              <span>Subscription</span>
              <input type="radio" name="mode" checked={mode==='sub'} onChange={()=>setMode('sub')}/>
            </label>
          )}
          <label className="flex items-center justify-between border rounded-2xl p-3">
            <span>Service via Escrow</span>
            <input type="radio" name="mode" checked={mode==='escrow'} onChange={()=>setMode('escrow')}/>
          </label>
          <Link href="/checkout" className="btn w-full">Checkout</Link>
          <div className="text-xs text-gray-500">Commission & net to builder are shown on confirmation.</div>
        </div>
        <div className="card text-sm text-gray-600 space-y-1">
          <div>✅ Escrow & disputes</div>
          <div>✅ Anti-circumvention terms</div>
          <div>✅ License included (IP retained by builder)</div>
        </div>
      </div>
    </div>
  )
}
