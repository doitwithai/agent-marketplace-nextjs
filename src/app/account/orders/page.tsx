export default function BuyerOrders(){
  const orders = [
    { id:'o1', title:'Support Triage Bot', date:'2025-09-10', status:'completed', gross:129.00 },
    { id:'o2', title:'Custom Agent Build', date:'2025-10-01', status:'escrowed', gross:3990.00 },
  ]
  return (
    <div className="card space-y-3">
      <div className="font-medium">My Orders</div>
      {orders.map(o=> (
        <div key={o.id} className="flex items-center justify-between border rounded-2xl p-3">
          <div>
            <div className="font-medium">{o.title}</div>
            <div className="text-xs text-gray-500">{o.date} • {o.status}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">${o.gross.toFixed(2)}</div>
            {o.status==='escrowed' && <button className="btn-secondary mt-1">Accept & Release</button>}
          </div>
        </div>
      ))}
    </div>
  )
}
