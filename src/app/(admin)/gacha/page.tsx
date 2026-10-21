import { mockGachaBoxes } from "@/lib/mock-data";

export default function AdminGachaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">จัดการระบบสุ่ม</h1>
        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500">+ สร้างกล่องใหม่</button>
      </div>
      <div className="space-y-4">
        {mockGachaBoxes.map((box) => (
          <div key={box.id} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{box.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{box.description}</p>
                <p className="text-amber-400 text-sm mt-2">{box.price} เครดิต / ครั้ง</p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-violet-400 hover:underline">แก้ไข</button>
                <button className="text-xs text-slate-400 hover:underline">ปิดกล่อง</button>
              </div>
            </div>
            <div className="mt-4 border-t border-slate-800 pt-3">
              <div className="text-xs text-slate-500 mb-2">ไอเทมในกล่อง</div>
              <div className="flex flex-wrap gap-2">
                {box.items.map((item) => (
                  <span key={item.id} className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    item.rarity === "SSR" ? "bg-yellow-500/20 text-yellow-300" :
                    item.rarity === "SR" ? "bg-purple-500/20 text-purple-300" :
                    item.rarity === "R" ? "bg-blue-500/20 text-blue-300" : "bg-slate-700 text-slate-300"
                  }`}>{item.rarity} {item.name} ({item.rate}%)</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
