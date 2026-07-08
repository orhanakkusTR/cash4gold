// "All Gold Coins" — the union of every per-coin listing we carry, deduped by
// name. Order follows the gallery order (Eagles first). Rebuilt automatically
// from the individual data files, so adding a new coin listing flows in here.
import { AMERICAN_GOLD_EAGLES } from "./american-gold-eagle";
import { AMERICAN_GOLD_BUFFALOS } from "./american-gold-buffalo";
import { CANADIAN_GOLD_COINS } from "./canadian-gold-coins";
import { BRITISH_GOLD_COINS } from "./british-gold-coins";
import { GOLD_KRUGERRANDS } from "./gold-krugerrands";
import { PRE33_US_GOLD_COINS } from "./pre33-us-gold-coins";
import { CHINESE_GOLD_PANDAS } from "./chinese-gold-pandas";
import { MEXICAN_GOLD_COINS } from "./mexican-gold-coins";
import { EUROPEAN_GOLD_COINS } from "./european-gold-coins";

export type GoldCoin = { name: string; image: string };

const SOURCES: GoldCoin[][] = [
  AMERICAN_GOLD_EAGLES,
  AMERICAN_GOLD_BUFFALOS,
  CANADIAN_GOLD_COINS,
  BRITISH_GOLD_COINS,
  GOLD_KRUGERRANDS,
  PRE33_US_GOLD_COINS,
  CHINESE_GOLD_PANDAS,
  MEXICAN_GOLD_COINS,
  EUROPEAN_GOLD_COINS,
];

const seen = new Set<string>();
export const ALL_GOLD_COINS: GoldCoin[] = SOURCES.flat().filter((coin) => {
  const key = coin.name.toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

export const ALL_GOLD_COINS_COUNT = ALL_GOLD_COINS.length;
