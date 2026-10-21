export default function AdminCustomersPage() {
  const customers = [
    { id: "1", username: "DemoPlayer", email: "demo@example.com", credit: 1500, status: "ปกติ" },
    { id: "2", username: "PlayerTwo", email: "p2@example.com", credit: 320, status: "ปกติ" },
    { id: "3", username: "BannedUser", email: "ban@example.com", credit: 0, status: "แบน" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">จัดการลูกค้า</h1>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Username</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-right">เครดิต</th>
              <th className="px-4 py-3 text-center">สถานะ</th>
              <th className="px-4 py-3 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t border-slate-800">
                <td className="px-4 py-3 font-medium">{c.username}</td>
                <td className="px-4 py-3 text-slate-400">{c.email}</td>
                <td className="px-4 py-3 text-right text-amber-400">{c.credit.toLocaleString()}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                    c.status === "ปกติ" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}>{c.status}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="text-violet-400 hover:underline text-xs">ปรับเครดิต</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
