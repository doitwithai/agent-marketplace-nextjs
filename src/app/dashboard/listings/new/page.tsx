'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function NewListing(){
  const [title, setTitle] = useState('')
  const [type, setType] = useState<'agent'|'service'>('agent')
  const [price, setPrice] = useState(99)
  return (
    <div className="card space-y-3 max-w-2xl">
      <div className="font-medium">New Listing</div>
      <label className="label">Title</label>
      <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Agent title"/>
      <label className="label">Type</label>
      <select className="input" value={type} onChange={e=>setType(e.target.value as any)}>
        <option value="agent">Agent</option>
        <option value="service">Service</option>
      </select>
      <label className="label">Price (USD)</label>
      <input className="input" type="number" value={price} onChange={e=>setPrice(+e.target.value||0)}/>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Media uploads, tags, categories…</span>
        <Link href="/dashboard" className="btn">Create</Link>
      </div>
    </div>
  )
}
