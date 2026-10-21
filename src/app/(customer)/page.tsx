import Link from "next/link";
import { mockGachaBoxes, mockProducts } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-900/50 via-slate-900 to-fuchsia-900/40 border border-violet-500/20 p-8 md:p-12 mb-10">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            ยินดีต้อนรับสู่{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Gacha Shop
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-6 max-w-xl">
            สุ่มของหายาก ซื้อสินค้า และเติมเงินได้ง่าย ๆ ในที่เดียว
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gacha"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold shadow-lg shadow-violet-500/25 hover:opacity-90 transition"
            >
              🎲 เริ่มสุ่มเลย
            </Link>
            <Link
              href="/topup"
              className="rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3 font-semibold hover:bg-slate-800 transition"
            >
              เติมเงิน
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">กล่องสุ่มยอดนิยม</h2>
          <Link href="/gacha" className="text-sm text-violet-400 hover:underline">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockGachaBoxes.map((box) => (
            <Link
              key={box.id}
              href="/gacha"
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-violet-500/50 transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎁</div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-violet-300 transition">{box.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{box.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-amber-400 font-medium">{box.price} เครดิต / ครั้ง</span>
                    <span className="text-xs text-slate-500">{box.items.length} ไอเทม</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">สินค้าแนะนำ</h2>
          <Link href="/products" className="text-sm text-violet-400 hover:underline">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockProducts.map((p) => (
            <Link
              key={p.id}
              href="/products"
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 hover:border-violet-500/40 transition"
            >
              <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center text-3xl mb-3">⚔️</div>
              <h3 className="font-medium text-sm line-clamp-1">{p.name}</h3>
              <p className="text-amber-400 text-sm mt-1">{p.price} เครดิต</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
