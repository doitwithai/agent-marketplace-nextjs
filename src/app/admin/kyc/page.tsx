export default function AdminKyc(){
  const items = [
    { id:'u1', name:'Atlas AI Studio', type:'business', status:'pending' },
    { id:'u2', name:'Indie Agent Lab', type:'individual', status:'pending' },
  ]
  return (
    <div className="card space-y-3">
      <div className="font-medium">KYC Queue</div>
      {items.map(k=> (
        <div key={k.id} className="flex items-center justify-between border rounded-2xl p-3 text-sm">
          <div>
            <div className="font-medium">{k.name}</div>
            <div className="text-gray-500">{k.type} • {k.status}</div>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary">Approve</button>
            <button className="btn">Reject</button>
          </div>
        </div>
      ))}
    </div>
  )
}
