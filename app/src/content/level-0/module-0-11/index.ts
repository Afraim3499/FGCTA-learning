import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module011: AcademyModule = {
  moduleNumber: "0.11",
  level: 0,
  title: "Crypto Reading Lab: Venue Fragmentation & Liquidity Spikes",
  objective: "Teach learners how to verify whether a crypto move is broad market movement or a local venue/liquidity distortion by comparing CEX, DEX, BTC context, venue agreement, liquidity quality, and follow-through.",
  skillLevel: "beginner",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};

export * from "./core";
