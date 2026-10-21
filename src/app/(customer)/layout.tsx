import Navbar from "@/components/layout/Navbar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 Gacha Shop · ระบบร้านสุ่มของ
      </footer>
    </>
  );
}
