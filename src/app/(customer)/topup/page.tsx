"use client";

import { useState } from "react";
import { mockPaymentAccounts } from "@/lib/mock-data";

const amounts = [50, 100, 300, 500, 1000, 2000];

export default function TopupPage() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [slip, setSlip] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const primaryAccount = mockPaymentAccounts.find((a) => a.isPrimary);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slip) {
      alert("กรุณาอัปโหลดสลิป");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2">ส่งคำขอเติมเงินแล้ว</h1>
        <p className="text-slate-400 mb-6">รอแอดมินตรวจสอบสลิป โดยปกติใช้เวลาไม่เกิน 5-15 นาที</p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-xl bg-violet-600 px-6 py-2.5 font-medium hover:bg-violet-500"
        >
          เติมเงินอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">เติมเงิน</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm text-slate-400 mb-2">เลือกจำนวนเงิน</label>
          <div className="grid grid-cols-3 gap-2">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setSelectedAmount(a)}
                className={`rounded-xl py-3 font-semibold transition ${
                  selectedAmount === a
                    ? "bg-violet-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                ฿{a}
              </button>
            ))}
          </div>
        </div>

        {primaryAccount && (
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <div className="text-sm text-slate-400 mb-1">โอนเงินมาที่</div>
            <div className="font-semibold text-lg">{primaryAccount.name}</div>
            <div className="mt-1 flex items-center gap-2">
              <code className="text-amber-400 text-lg tracking-wider">{primaryAccount.number}</code>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(primaryAccount.number)}
                className="text-xs bg-slate-700 px-2 py-1 rounded hover:bg-slate-600"
              >
                คัดลอก
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">* กรุณาโอนตามจำนวนที่เลือกและอัปโหลดสลิป</p>
          </div>
        )}

        <div>
          <label className="block text-sm text-slate-400 mb-2">อัปโหลดสลิป</label>
          <label className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-slate-900/50 p-8 cursor-pointer hover:border-violet-500/50 transition">
            <span className="text-3xl mb-2">📄</span>
            <span className="text-sm text-slate-400">{slip ? slip.name : "คลิกหรือลากไฟล์มาวาง"}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setSlip(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 font-semibold shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
        >
          ส่งคำขอเติมเงิน ฿{selectedAmount}
        </button>
      </form>
    </div>
  );
}
