# Gacha Shop — ระบบร้านสุ่มของครบวงจร

เว็บแอปสำหรับร้านค้า + ระบบสุ่มของ (Gacha) พร้อมหลังบ้าน Admin

## ฟีเจอร์ที่มี

### ฝั่งลูกค้า
- หน้าหลัก (Banner, กล่องสุ่ม, สินค้าแนะนำ)
- สินค้า
- ระบบสุ่มของ (เลือกกล่อง, สุ่ม 1/10 ครั้ง, แสดงเรท, ผลลัพธ์ตาม rarity)
- เติมเงิน (เลือกยอด, แสดงบัญชี, อัปโหลดสลิป)
- ติดต่อเรา
- โปรไฟล์

### ฝั่ง Admin
- Dashboard
- จัดการลูกค้า
- จัดการสินค้า
- จัดการกล่องสุ่ม + เรท
- จัดการบัญชีรับเงิน
- จัดการข้อความลูกค้า

## เริ่มต้นใช้งาน

```bash
cd gacha-shop
npm install
npm run dev
```

เปิด http://localhost:3000

- หน้าร้าน: `/`
- Admin: `/admin/dashboard`

## บัญชีทดสอบ

| Role  | Email              | Password     |
|-------|--------------------|--------------|
| User  | demo@example.com   | password123  |
| Admin | admin@example.com  | password123  |

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- NextAuth.js
- Mock data (พร้อมต่อ Database จริงได้)
