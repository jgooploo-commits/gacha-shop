"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">ติดต่อเรา</h1>
      <p className="text-slate-400 mb-6">มีปัญหาหรือต้องการสอบถาม ส่งข้อความมาได้เลย</p>

      {sent && (
        <div className="mb-4 rounded-xl bg-green-500/10 border border-green-500/30 p-4 text-green-300 text-sm">
          ส่งข้อความเรียบร้อยแล้ว แอดมินจะตอบกลับโดยเร็วที่สุด
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="พิมพ์ข้อความของคุณ..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-violet-500 resize-none"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-500 transition"
        >
          ส่งข้อความ
        </button>
      </form>
    </div>
  );
}
