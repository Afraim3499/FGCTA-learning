import { create } from "zustand";

export interface Position {
  id: string;
  symbol: string;
  type: "LONG" | "SHORT";
  entryPrice: number;
  size: number;
  leverage: number;
  unrealizedPnL: number;
  takeProfit?: number;
  stopLoss?: number;
}

interface MarginState {
  balance: number;
  equity: number;
  usedMargin: number;
  freeMargin: number;
  marginLevel: number;
  positions: Position[];
  
  // Actions
  openPosition: (pos: Omit<Position, "id" | "unrealizedPnL">) => void;
  closePosition: (id: string, exitPrice: number) => void;
  updatePrices: (currentPrices: Record<string, number>) => void;
  resetAccount: (initialBalance?: number) => void;
}

export const useMarginStore = create<MarginState>((set, get) => ({
  balance: 100000,
  equity: 100000,
  usedMargin: 0,
  freeMargin: 100000,
  marginLevel: 0,
  positions: [],

  openPosition: (pos) => {
    const id = Math.random().toString(36).substr(2, 9);
    const requiredMargin = (pos.entryPrice * pos.size) / pos.leverage;
    
    set((state) => {
      if (state.freeMargin < requiredMargin) {
        // Insufficient margin
        return state;
      }
      
      const newPositions = [...state.positions, { ...pos, id, unrealizedPnL: 0 }];
      const newUsedMargin = state.usedMargin + requiredMargin;
      const newFreeMargin = state.equity - newUsedMargin;
      const newMarginLevel = newUsedMargin > 0 ? (state.equity / newUsedMargin) * 100 : 0;
      
      return {
        positions: newPositions,
        usedMargin: newUsedMargin,
        freeMargin: newFreeMargin,
        marginLevel: newMarginLevel,
      };
    });
  },

  closePosition: (id, exitPrice) => {
    set((state) => {
      const position = state.positions.find((p) => p.id === id);
      if (!position) return state;

      const pnl = position.type === "LONG" 
        ? (exitPrice - position.entryPrice) * position.size
        : (position.entryPrice - exitPrice) * position.size;

      const newBalance = state.balance + pnl;
      const newPositions = state.positions.filter((p) => p.id !== id);
      
      // Recalculate margins
      const newUsedMargin = newPositions.reduce((acc, p) => acc + ((p.entryPrice * p.size) / p.leverage), 0);
      const newEquity = newBalance + newPositions.reduce((acc, p) => acc + p.unrealizedPnL, 0);
      const newFreeMargin = newEquity - newUsedMargin;
      const newMarginLevel = newUsedMargin > 0 ? (newEquity / newUsedMargin) * 100 : 0;

      return {
        balance: newBalance,
        equity: newEquity,
        usedMargin: newUsedMargin,
        freeMargin: newFreeMargin,
        marginLevel: newMarginLevel,
        positions: newPositions,
      };
    });
  },

  updatePrices: (currentPrices) => {
    set((state) => {
      let totalUnrealizedPnL = 0;
      
      const newPositions = state.positions.map((p) => {
        const currentPrice = currentPrices[p.symbol];
        if (!currentPrice) return p;

        const pnl = p.type === "LONG"
          ? (currentPrice - p.entryPrice) * p.size
          : (p.entryPrice - currentPrice) * p.size;
          
        totalUnrealizedPnL += pnl;
        return { ...p, unrealizedPnL: pnl };
      });

      const newEquity = state.balance + totalUnrealizedPnL;
      const newFreeMargin = newEquity - state.usedMargin;
      const newMarginLevel = state.usedMargin > 0 ? (newEquity / state.usedMargin) * 100 : 0;

      return {
        positions: newPositions,
        equity: newEquity,
        freeMargin: newFreeMargin,
        marginLevel: newMarginLevel,
      };
    });
  },

  resetAccount: (initialBalance = 100000) => {
    set({
      balance: initialBalance,
      equity: initialBalance,
      usedMargin: 0,
      freeMargin: initialBalance,
      marginLevel: 0,
      positions: [],
    });
  },
}));
