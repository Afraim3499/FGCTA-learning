# Interactive Mechanics & Minigame Specifications

This document defines the exact data structures and mechanics for the custom React components used as "Interactive Tasks" in the `CourseModule` database.

## 1. Rags to Riches (Macro-Economics Simulator)
**Task Type**: `rags_to_riches`
**Description**: A narrative-driven, turn-based simulator teaching supply, demand, and news analysis.

### JSON Schema (`interactiveTaskData`)
```json
{
  "startCapital": 10.00,
  "startPrice": 1.00,
  "assetName": "Plastic Scrap",
  "events": [
    {
      "month": 1,
      "news": "The Mayor announces a huge tax cut on imported plastics. Ships full of cheap plastic are arriving next week.",
      "priceAfterHold": 0.20,
      "priceAfterSell": 0.20,
      "correctAction": "SELL",
      "lessonText": "When supply floods the market, value drops. By selling early, you preserved capital to buy back cheaper."
    },
    {
      "month": 2,
      "news": "The local recycling plant broke down! Nobody can process new plastic for a month.",
      "priceAfterHold": 2.50,
      "priceAfterSell": 2.50,
      "correctAction": "HOLD",
      "lessonText": "Scarcity drives prices up. Holding during a supply shock yields maximum profit."
    }
  ],
  "winConditionNetWorth": 100.00
}
```

---

## 2. Fund Management Drill
**Task Type**: `fund_management_calculator`
**Description**: A high-speed math drill for calculating lot sizing based on account balance and risk percentage.

### JSON Schema (`interactiveTaskData`)
```json
{
  "rounds": 5,
  "timeLimitSeconds": 30,
  "baseCurrency": "USD",
  "scenarios": [
    { "balance": 5000, "riskPercent": 1, "stopLossPips": 20, "correctLotSize": 0.25 },
    { "balance": 10000, "riskPercent": 0.5, "stopLossPips": 10, "correctLotSize": 0.50 }
  ]
}
```

---

## 3. Candlestick Builder
**Task Type**: `candlestick_builder`
**Description**: Drag-and-drop interface to construct candles from narrative data.

### JSON Schema (`interactiveTaskData`)
```json
{
  "scenarios": [
    {
      "narrative": "The market opened at $10. Buyers pushed it to $15. Sellers crashed it to $5. It closed at $8.",
      "correctO": 10,
      "correctH": 15,
      "correctL": 5,
      "correctC": 8
    }
  ]
}
```

---

## 4. Strategy Cluster Test (Trading Scenario)
**Task Type**: `trading_scenario`
**Description**: Hooks into the `MiniReplayEngine`. Injects pre-configured chart data and sets strict execution rules for graduation.

### JSON Schema (`interactiveTaskData`)
```json
{
  "instrument": "EURUSD",
  "timeframe": "15m",
  "historicalDataId": "DATA_SCENARIO_001",
  "rules": {
    "allowedOrderTypes": ["limit"],
    "maxRiskPercent": 1.0,
    "requiredRR": 2.0
  },
  "winCondition": {
    "type": "profit_target",
    "value": 2.0 // Needs to hit 2R
  },
  "failCondition": {
    "type": "max_drawdown",
    "value": -1.0 // Fails if stops out
  },
  "graduatesToPhaseId": "PHASE_2_UUID"
}
```
