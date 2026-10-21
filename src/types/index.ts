export type Role = "USER" | "ADMIN";
export type Rarity = "SSR" | "SR" | "R" | "N";
export type TopupStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface User {
  id: string;
  email: string;
  username: string;
  credit: number;
  role: Role;
  isBanned: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  stock?: number;
  isActive: boolean;
}

export interface GachaItem {
  id: string;
  boxId: string;
  name: string;
  rarity: Rarity;
  rate: number;
  image?: string;
  productId?: string;
}

export interface GachaBox {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  isActive: boolean;
  items: GachaItem[];
}

export interface Topup {
  id: string;
  userId: string;
  amount: number;
  method: string;
  slipUrl?: string;
  status: TopupStatus;
  adminNote?: string;
  createdAt: string;
}

export interface PaymentAccount {
  id: string;
  type: "promptpay" | "bank" | "truemoney";
  name: string;
  number: string;
  isActive: boolean;
  isPrimary: boolean;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  isFromAdmin: boolean;
  isRead: boolean;
  createdAt: string;
}

export interface GachaLog {
  id: string;
  userId: string;
  boxId: string;
  itemId: string;
  itemName: string;
  rarity: Rarity;
  createdAt: string;
}
