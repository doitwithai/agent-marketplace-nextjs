import Link from 'next/link'

const LISTINGS = [
  { id:'l1', type:'agent', title:'Sales Email Writer', desc:'Generates tailored outbound sequences.', price: 99, sub: 29, rating: 4.8, reviews: 186, category:'Sales' },
  { id:'l2', type:'service', title:'Custom Agent Build', desc:'2-week sprint with integrations.', price: 3990, sub: null, rating: 4.9, reviews: 73, category:'Custom' },
  { id:'l3', type:'agent', title:'Support Triage Bot', desc:'Classifies and drafts replies.', price: 129, sub: 19, rating: 4.6, reviews: 52, category:'Support' },
]

export default function Market(){
  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input className="input" placeholder="Search agents & services"/>
          <select className="input max-w-xs">
            <option>All</option>
            <option>Sales</option>
            <option>Support</option>
            <option>Custom</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {LISTINGS.map((l)=> (
          <div key={l.id} className="card space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{l.title}</div>
              <span className="badge">{l.type}</span>
            </div>
            <div className="text-sm text-gray-600">{l.desc}</div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">${l.price.toFixed(2)} {l.sub && <span className="text-sm text-gray-500">or ${l.sub}/mo</span>}</div>
              <Link className="btn" href={`/listings/${l.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
