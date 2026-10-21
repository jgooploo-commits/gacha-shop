"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center text-slate-400">กำลังโหลด...</div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-slate-400 mb-4">กรุณาเข้าสู่ระบบเพื่อดูโปรไฟล์</p>
        <Link href="/login" className="rounded-xl bg-violet-600 px-6 py-2.5 font-medium hover:bg-violet-500">
          เข้าสู่ระบบ
        </Link>
      </div>
    );
  }

  const user = session.user as any;

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">โปรไฟล์</h1>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-violet-600 flex items-center justify-center text-2xl font-bold">
            {(user.name || "U")[0].toUpperCase()}
          </div>
          <div>
            <div className="text-xl font-bold">{user.name}</div>
            <div className="text-sm text-slate-400">{user.email}</div>
            <div className="text-xs text-violet-400 mt-1">
              {user.role === "ADMIN" ? "ผู้ดูแลระบบ" : "สมาชิก"}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-800/50 p-4 text-center">
            <div className="text-sm text-slate-400">เครดิต</div>
            <div className="text-2xl font-bold text-amber-400">
              {Number(user.credit || 0).toLocaleString()}
            </div>
          </div>
          <div className="rounded-xl bg-slate-800/50 p-4 text-center">
            <div className="text-sm text-slate-400">สถานะ</div>
            <div className="text-lg font-semibold text-green-400">ปกติ</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-slate-300 mb-2">ประวัติ</h2>
        <div className="rounded-xl border border-slate-800 p-4 text-sm text-slate-400">ยังไม่มีประวัติการสุ่ม</div>
        <div className="rounded-xl border border-slate-800 p-4 text-sm text-slate-400">ยังไม่มีประวัติการเติมเงิน</div>
      </div>
    </div>
  );
}
