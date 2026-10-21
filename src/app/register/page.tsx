"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }
    if (form.password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert("สมัครสำเร็จ! (โหมด Demo — ใช้บัญชีทดสอบแทน)\n\nUser: demo@example.com\nAdmin: admin@example.com\nรหัสผ่าน: password123");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            🎲 Gacha Shop
          </Link>
          <p className="text-slate-400 mt-2">สมัครสมาชิก</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          {error && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm p-3">{error}</div>
          )}

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">ชื่อผู้ใช้</label>
            <input type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">อีเมล</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">รหัสผ่าน</label>
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">ยืนยันรหัสผ่าน</label>
            <input type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500" />
          </div>

          <button type="submit" disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold hover:opacity-90 disabled:opacity-50 transition">
            {loading ? "กำลังสมัคร..." : "สมัครสมาชิก"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          มีบัญชีแล้ว?{" "}
          <Link href="/login" className="text-violet-400 hover:underline">เข้าสู่ระบบ</Link>
        </p>
      </div>
    </div>
  );
}
