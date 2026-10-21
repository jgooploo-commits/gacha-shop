import { mockPaymentAccounts } from "@/lib/mock-data";

export default function AdminPaymentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">บัญชีรับเงิน</h1>
        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500">+ เพิ่มบัญชี</button>
      </div>
      <div className="space-y-3">
        {mockPaymentAccounts.map((acc) => (
          <div key={acc.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div>
              <div className="font-medium flex items-center gap-2">
                {acc.name}
                {acc.isPrimary && (
                  <span className="rounded bg-violet-500/20 text-violet-300 text-xs px-1.5 py-0.5">หลัก</span>
                )}
              </div>
              <div className="text-sm text-slate-400 mt-0.5">{acc.type} · {acc.number}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs ${acc.isActive ? "text-green-400" : "text-red-400"}`}>
                {acc.isActive ? "เปิดใช้งาน" : "ปิด"}
              </span>
              <button className="text-xs text-violet-400 hover:underline">แก้ไข</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
