"use client";

import { useState } from "react";
import { mockGachaBoxes } from "@/lib/mock-data";
import { pullGacha, rarityColors, rarityBorder, rarityLabel } from "@/lib/gacha";
import type { GachaBox, GachaItem } from "@/types";

export default function GachaPage() {
  const [selectedBox, setSelectedBox] = useState<GachaBox>(mockGachaBoxes[0]);
  const [results, setResults] = useState<GachaItem[]>([]);
  const [isPulling, setIsPulling] = useState(false);
  const [credit, setCredit] = useState(1500);
  const [showRates, setShowRates] = useState(false);

  const handlePull = async (times: 1 | 10) => {
    const cost = selectedBox.price * times;
    if (credit < cost) {
      alert("เครดิตไม่เพียงพอ กรุณาเติมเงิน");
      return;
    }

    setIsPulling(true);
    setResults([]);
    await new Promise((r) => setTimeout(r, 800));

    const pulled = pullGacha(selectedBox.items, times);
    setResults(pulled);
    setCredit((c) => c - cost);
    setIsPulling(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">🎲 ระบบสุ่มของ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {mockGachaBoxes.map((box) => (
          <button
            key={box.id}
            onClick={() => {
              setSelectedBox(box);
              setResults([]);
            }}
            className={`text-left rounded-xl border p-4 transition ${
              selectedBox.id === box.id
                ? "border-violet-500 bg-violet-500/10"
                : "border-slate-800 bg-slate-900/50 hover:border-slate-600"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎁</span>
              <div>
                <div className="font-semibold">{box.name}</div>
                <div className="text-sm text-amber-400">{box.price} เครดิต / ครั้ง</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold">{selectedBox.name}</h2>
            <p className="text-slate-400 text-sm mt-1">{selectedBox.description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400">เครดิตคงเหลือ</div>
            <div className="text-2xl font-bold text-amber-400">{credit.toLocaleString()}</div>
          </div>
        </div>

        <button
          onClick={() => setShowRates(!showRates)}
          className="text-sm text-violet-400 hover:underline mb-3"
        >
          {showRates ? "ซ่อนเรท ▲" : "ดูเรทการสุ่ม ▼"}
        </button>

        {showRates && (
          <div className="mb-4 rounded-lg bg-slate-950/50 p-3 space-y-1">
            {selectedBox.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  <span className={`inline-block w-12 text-xs font-bold ${
                    item.rarity === "SSR" ? "text-yellow-400" :
                    item.rarity === "SR" ? "text-purple-400" :
                    item.rarity === "R" ? "text-blue-400" : "text-slate-400"
                  }`}>{item.rarity}</span>
                  {item.name}
                </span>
                <span className="text-slate-400">{item.rate}%</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handlePull(1)}
            disabled={isPulling}
            className="flex-1 min-w-[140px] rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold shadow-lg shadow-violet-500/20 hover:opacity-90 disabled:opacity-50 transition"
          >
            {isPulling ? "กำลังสุ่ม..." : `สุ่ม 1 ครั้ง (${selectedBox.price})`}
          </button>
          <button
            onClick={() => handlePull(10)}
            disabled={isPulling}
            className="flex-1 min-w-[140px] rounded-xl border border-violet-500/50 bg-violet-500/10 py-3 font-semibold hover:bg-violet-500/20 disabled:opacity-50 transition"
          >
            {isPulling ? "กำลังสุ่ม..." : `สุ่ม 10 ครั้ง (${selectedBox.price * 10})`}
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">ผลลัพธ์ ({results.length} ชิ้น)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {results.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`rounded-xl border-2 p-3 text-center bg-gradient-to-b ${rarityColors[item.rarity]} ${rarityBorder[item.rarity]} shadow-lg`}
              >
                <div className="text-2xl mb-1">
                  {item.rarity === "SSR" ? "👑" : item.rarity === "SR" ? "💎" : item.rarity === "R" ? "⚔️" : "📦"}
                </div>
                <div className="text-xs font-bold opacity-80">{rarityLabel[item.rarity]}</div>
                <div className="text-sm font-semibold mt-1 line-clamp-2">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
