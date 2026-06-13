import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module713: AcademyModule = {
  moduleNumber: "7.13",
  level: 7,
  title: "Crypto Execution Specifics",
  objective: "Master perp exchange mechanics, funding rate windows, and slippage management for BTC/ETH.",
  skillLevel: "expert",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
