export const TRACK_CONFIG = {
  forex: {
    label: "Forex Track",
    instruments: ["EURUSD", "GBPUSD", "USDJPY"],
    color: "text-blue-400",
  },
  crypto: {
    label: "Crypto Track",
    instruments: ["BTCUSD", "ETHUSD"],
    color: "text-amber-400",
  },
  gold: {
    label: "Gold Track",
    instruments: ["XAUUSD"],
    color: "text-yellow-400",
  },
  multi: {
    label: "Multi-Asset Track",
    instruments: ["EURUSD", "BTCUSD", "XAUUSD"],
    color: "text-indigo-400",
  },
};

export function canAccessTrack(userTrack: string, targetTrack: string): boolean {
  if (userTrack === "multi") return true;
  return userTrack.toLowerCase() === targetTrack.toLowerCase();
}

export function getTrackConfig(track: string) {
  return TRACK_CONFIG[track as keyof typeof TRACK_CONFIG] || TRACK_CONFIG.forex;
}

export function isInstrumentAllowed(userTrack: string, instrument: string): boolean {
  const config = getTrackConfig(userTrack);
  return config.instruments.includes(instrument);
}
