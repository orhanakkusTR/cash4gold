// "All Silver Coins" — the union of every per-coin silver listing we carry,
// deduped by name. Rebuilt automatically from the individual data files, so
// adding a new silver listing flows in here.
import { AMERICAN_SILVER_EAGLES } from "./american-silver-eagle";
import { CANADIAN_SILVER_COINS } from "./canadian-silver-coins";
import { BRITISH_SILVER_COINS } from "./british-silver-coins";
import { AUSTRALIAN_SILVER_COINS } from "./australian-silver-coins";
import { SILVER_DOLLARS } from "./silver-dollars";
import { CHINESE_SILVER_PANDAS } from "./chinese-silver-pandas";
import { JUNK_SILVER } from "./junk-silver";
import { MEXICAN_SILVER_LIBERTADS } from "./mexican-silver-libertads";
import { SILVER_KRUGERRANDS } from "./silver-krugerrands";
import { ATB_SILVER_COINS } from "./atb-silver-coins";

export type SilverCoin = { name: string; image: string };

const SOURCES: SilverCoin[][] = [
  AMERICAN_SILVER_EAGLES,
  CANADIAN_SILVER_COINS,
  BRITISH_SILVER_COINS,
  AUSTRALIAN_SILVER_COINS,
  SILVER_DOLLARS,
  CHINESE_SILVER_PANDAS,
  JUNK_SILVER,
  MEXICAN_SILVER_LIBERTADS,
  SILVER_KRUGERRANDS,
  ATB_SILVER_COINS,
];

const seen = new Set<string>();
export const ALL_SILVER_COINS: SilverCoin[] = SOURCES.flat().filter((coin) => {
  const key = coin.name.toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

export const ALL_SILVER_COINS_COUNT = ALL_SILVER_COINS.length;
