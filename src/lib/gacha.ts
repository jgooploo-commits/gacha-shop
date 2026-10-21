import type { GachaItem, Rarity } from "@/types";

export function weightedRandom(items: GachaItem[]): GachaItem {
  if (items.length === 0) {
    throw new Error("No items available");
  }

  const total = items.reduce((sum, item) => sum + item.rate, 0);
  let random = Math.random() * total;

  for (const item of items) {
    if (random < item.rate) {
      return item;
    }
    random -= item.rate;
  }

  return items[items.length - 1];
}

export function pullGacha(items: GachaItem[], times: number = 1): GachaItem[] {
  const results: GachaItem[] = [];
  for (let i = 0; i < times; i++) {
    results.push(weightedRandom(items));
  }
  return results;
}

export const rarityColors: Record<Rarity, string> = {
  SSR: "from-yellow-400 via-amber-300 to-yellow-500 text-yellow-900",
  SR: "from-purple-400 via-fuchsia-300 to-purple-500 text-purple-900",
  R: "from-blue-400 via-cyan-300 to-blue-500 text-blue-900",
  N: "from-gray-400 via-slate-300 to-gray-500 text-gray-900",
};

export const rarityBorder: Record<Rarity, string> = {
  SSR: "border-yellow-400 shadow-yellow-400/50",
  SR: "border-purple-400 shadow-purple-400/50",
  R: "border-blue-400 shadow-blue-400/40",
  N: "border-gray-400 shadow-gray-400/30",
};

export const rarityLabel: Record<Rarity, string> = {
  SSR: "SSR ★★★★★",
  SR: "SR ★★★★",
  R: "R ★★★",
  N: "N ★★",
};
