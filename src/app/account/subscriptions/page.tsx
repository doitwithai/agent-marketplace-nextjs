export default function Subscriptions(){
  const subs = [{ id:'s1', title:'Sales Email Writer', renews:'2025-11-01', amount:29.00, status:'active' }]
  return (
    <div className="card space-y-3">
      <div className="font-medium">Subscriptions</div>
      {subs.map(s=> (
        <div key={s.id} className="border rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{s.title}</div>
            <div className="text-xs text-gray-500">Renews {s.renews}</div>
          </div>
          <div className="flex items-center gap-3">
            <div>${s.amount.toFixed(2)}/mo</div>
            <button className="btn-secondary">Manage</button>
          </div>
        </div>
      ))}
    </div>
  )
}
