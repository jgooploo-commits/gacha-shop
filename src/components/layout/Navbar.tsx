"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const navItems = [
  { href: "/", label: "หน้าหลัก" },
  { href: "/products", label: "สินค้า" },
  { href: "/gacha", label: "สุ่มของ" },
  { href: "/topup", label: "เติมเงิน" },
  { href: "/contact", label: "ติดต่อเรา" },
  { href: "/profile", label: "โปรไฟล์" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const credit = (session?.user as any)?.credit ?? 0;
  const isAdmin = (session?.user as any)?.role === "ADMIN";
  const username = session?.user?.name;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎲</span>
          <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Gacha Shop
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-violet-600/20 text-violet-300"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {status === "loading" ? (
            <div className="h-8 w-20 rounded-full bg-slate-800 animate-pulse" />
          ) : session ? (
            <>
              <div className="rounded-full bg-slate-800 px-3 py-1.5 text-sm">
                <span className="text-slate-400">เครดิต </span>
                <span className="font-semibold text-amber-400">
                  {Number(credit).toLocaleString()}
                </span>
              </div>
              <div className="hidden sm:block text-sm text-slate-300">{username}</div>
              {isAdmin && (
                <Link
                  href="/admin/dashboard"
                  className="rounded-lg bg-violet-600/20 text-violet-300 px-3 py-1.5 text-xs font-medium hover:bg-violet-600/30"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-white"
              >
                ออกจากระบบ
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-slate-300 hover:text-white"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-medium hover:bg-violet-500"
              >
                สมัคร
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="flex md:hidden overflow-x-auto border-t border-slate-800 px-2 py-2 gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium ${
                active ? "bg-violet-600/20 text-violet-300" : "text-slate-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
