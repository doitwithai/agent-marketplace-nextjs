export default function AdminDisputes(){
  const disputes = [{ id:'d1', order:'o2', reason:'Scope not met', status:'open' }]
  return (
    <div className="card space-y-3">
      <div className="font-medium">Disputes</div>
      {disputes.map(d=> (
        <div key={d.id} className="flex items-center justify-between border rounded-2xl p-3 text-sm">
          <div>
            <div className="font-medium">Order {d.order}</div>
            <div className="text-gray-500">{d.reason} • {d.status}</div>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary">Refund</button>
            <button className="btn">Release</button>
          </div>
        </div>
      ))}
    </div>
  )
}
