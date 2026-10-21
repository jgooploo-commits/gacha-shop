export default function AdminContactsPage() {
  const messages = [
    { id: "1", user: "DemoPlayer", content: "เติมเงินแล้วยังไม่เข้าครับ", time: "10 นาทีที่แล้ว", unread: true },
    { id: "2", user: "PlayerTwo", content: "กล่องสุ่มมีบั๊กไหมครับ", time: "1 ชั่วโมงที่แล้ว", unread: true },
    { id: "3", user: "OldUser", content: "ขอบคุณครับ", time: "เมื่อวาน", unread: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อความจากลูกค้า</h1>
      <div className="space-y-2">
        {messages.map((m) => (
          <div key={m.id} className={`rounded-xl border p-4 cursor-pointer hover:border-violet-500/40 transition ${
            m.unread ? "border-violet-500/30 bg-violet-500/5" : "border-slate-800 bg-slate-900/50"
          }`}>
            <div className="flex items-center justify-between">
              <div className="font-medium">
                {m.user}
                {m.unread && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-violet-400" />}
              </div>
              <div className="text-xs text-slate-500">{m.time}</div>
            </div>
            <p className="text-sm text-slate-400 mt-1 line-clamp-1">{m.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
