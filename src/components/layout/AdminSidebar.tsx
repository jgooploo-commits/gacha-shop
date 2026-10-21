"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/admin/customers", label: "ลูกค้า", icon: "👥" },
  { href: "/admin/products", label: "สินค้า", icon: "📦" },
  { href: "/admin/gacha", label: "ระบบสุ่ม", icon: "🎲" },
  { href: "/admin/payments", label: "บัญชีรับเงิน", icon: "💳" },
  { href: "/admin/contacts", label: "ข้อความ", icon: "💬" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-slate-800 bg-slate-950 p-4 hidden md:block">
      <div className="mb-6">
        <Link href="/" className="text-sm text-slate-500 hover:text-white">
          ← กลับหน้าร้าน
        </Link>
        <div className="mt-2 font-bold text-violet-400">Admin Panel</div>
      </div>
      <nav className="space-y-1">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition ${
                active
                  ? "bg-violet-600/20 text-violet-300"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
