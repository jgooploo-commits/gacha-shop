import { mockProducts } from "@/lib/mock-data";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockProducts.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-violet-500/40 transition"
          >
            <div className="aspect-square bg-slate-800 flex items-center justify-center text-5xl">⚔️</div>
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-slate-400 mt-1 line-clamp-2">{p.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-amber-400 font-medium">{p.price} เครดิต</span>
                <button className="rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-medium hover:bg-violet-500 transition">
                  ซื้อ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
