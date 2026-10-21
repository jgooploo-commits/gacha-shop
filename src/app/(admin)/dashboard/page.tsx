export default function AdminDashboard() {
  const stats = [
    { label: "สมาชิกทั้งหมด", value: "128", icon: "👥" },
    { label: "รออนุมัติเติมเงิน", value: "5", icon: "⏳" },
    { label: "ยอดเติมเงินวันนี้", value: "฿12,400", icon: "💰" },
    { label: "จำนวนครั้งสุ่มวันนี้", value: "342", icon: "🎲" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
        <h2 className="font-semibold mb-3">รายการรอดำเนินการ</h2>
        <p className="text-sm text-slate-400">
          มีคำขอเติมเงิน 5 รายการที่รออนุมัติ และข้อความจากลูกค้า 2 รายการ
        </p>
      </div>
    </div>
  );
}
