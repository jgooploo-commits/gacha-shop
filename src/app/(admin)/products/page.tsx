import { mockProducts } from "@/lib/mock-data";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">จัดการสินค้า</h1>
        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500">+ เพิ่มสินค้า</button>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">ชื่อสินค้า</th>
              <th className="px-4 py-3 text-right">ราคา</th>
              <th className="px-4 py-3 text-right">สต็อก</th>
              <th className="px-4 py-3 text-center">สถานะ</th>
              <th className="px-4 py-3 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((p) => (
              <tr key={p.id} className="border-t border-slate-800">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-right text-amber-400">{p.price}</td>
                <td className="px-4 py-3 text-right">{p.stock ?? "-"}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block rounded-full bg-green-500/20 text-green-400 px-2 py-0.5 text-xs">เปิดขาย</span>
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <button className="text-violet-400 hover:underline text-xs">แก้ไข</button>
                  <button className="text-red-400 hover:underline text-xs">ลบ</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
