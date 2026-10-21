import type { GachaBox, Product, PaymentAccount, User } from "@/types";

export const mockUser: User = {
  id: "user-1",
  email: "demo@example.com",
  username: "DemoPlayer",
  credit: 1500,
  role: "USER",
  isBanned: false,
  createdAt: new Date().toISOString(),
};

export const mockAdmin: User = {
  id: "admin-1",
  email: "admin@example.com",
  username: "Admin",
  credit: 0,
  role: "ADMIN",
  isBanned: false,
  createdAt: new Date().toISOString(),
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "ดาบตำนานมังกร",
    description: "อาวุธระดับตำนาน มีพลังโจมตีสูง",
    price: 299,
    image: "/products/sword.png",
    stock: 50,
    isActive: true,
  },
  {
    id: "p2",
    name: "เกราะอัศวินเงิน",
    description: "ป้องกันได้ดี เหมาะกับผู้เริ่มต้น",
    price: 149,
    image: "/products/armor.png",
    stock: 100,
    isActive: true,
  },
  {
    id: "p3",
    name: "แหวนแห่งโชค",
    description: "เพิ่มโอกาสคริติคอล",
    price: 99,
    image: "/products/ring.png",
    stock: 200,
    isActive: true,
  },
  {
    id: "p4",
    name: "ยาเพิ่มพลัง",
    description: "ฟื้นฟู HP และเพิ่ม ATK ชั่วคราว",
    price: 49,
    image: "/products/potion.png",
    stock: 500,
    isActive: true,
  },
];

export const mockGachaBoxes: GachaBox[] = [
  {
    id: "box-1",
    name: "กล่องตำนานเริ่มต้น",
    description: "กล่องสุ่มมาตรฐาน มีโอกาสได้ของหายาก",
    price: 100,
    image: "/gacha/box-starter.png",
    isActive: true,
    items: [
      { id: "gi1", boxId: "box-1", name: "ดาบมังกรทอง", rarity: "SSR", rate: 2 },
      { id: "gi2", boxId: "box-1", name: "เกราะคริสตัล", rarity: "SR", rate: 8 },
      { id: "gi3", boxId: "box-1", name: "ดาบเหล็กกล้า", rarity: "R", rate: 25 },
      { id: "gi4", boxId: "box-1", name: "เกราะหนัง", rarity: "R", rate: 25 },
      { id: "gi5", boxId: "box-1", name: "ยาฟื้นฟูเล็ก", rarity: "N", rate: 40 },
    ],
  },
  {
    id: "box-2",
    name: "กล่องเทพเจ้า",
    description: "กล่องพรีเมียม เรท SSR สูงขึ้น",
    price: 300,
    image: "/gacha/box-premium.png",
    isActive: true,
    items: [
      { id: "gi6", boxId: "box-2", name: "อาวุธเทพเจ้า", rarity: "SSR", rate: 5 },
      { id: "gi7", boxId: "box-2", name: "ชุดเกราะเทพ", rarity: "SSR", rate: 3 },
      { id: "gi8", boxId: "box-2", name: "เครื่องประดับเทพ", rarity: "SR", rate: 15 },
      { id: "gi9", boxId: "box-2", name: "อาวุธหายาก", rarity: "R", rate: 30 },
      { id: "gi10", boxId: "box-2", name: "วัตถุดิบพิเศษ", rarity: "N", rate: 47 },
    ],
  },
];

export const mockPaymentAccounts: PaymentAccount[] = [
  {
    id: "pa1",
    type: "promptpay",
    name: "พร้อมเพย์ (แนะนำ)",
    number: "0812345678",
    isActive: true,
    isPrimary: true,
  },
  {
    id: "pa2",
    type: "bank",
    name: "ธนาคารกสิกรไทย",
    number: "123-4-56789-0",
    isActive: true,
    isPrimary: false,
  },
];
