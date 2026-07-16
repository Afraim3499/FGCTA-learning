# Asset Source Freshness QA Report

Started: 2026-07-16T05:26:55.540Z
Finished: 2026-07-16T05:27:33.630Z
Review date: 2026-07-16

## Summary

- Assets checked: 71
- Exposure records checked: 378
- High-risk exposure records: 220
- Unique source URLs checked: 231
- Current / recent / stale / historical: 269 / 74 / 6 / 29
- Blocker issues: 0
- Major issues: 0
- Minor issues: 0

## Exit Gate

- 0 unsupported current amounts: yes
- 0 stale facts labeled current: yes
- 0 missing as-of dates: yes
- 0 missing source URLs: yes
- 0 broken source URLs: yes

## Issue Table

No source freshness issues were found.

## Stale Data Report

| Asset | Entity | Instrument | Status | Cadence | As-of | Age Days | Source |
|---|---|---|---|---|---:|---:|---|
| Bitcoin | Grayscale Bitcoin Trust ETF | GBTC Bitcoin exposure | stale | daily-weekly | 2026-01-09 | 188 | Grayscale |
| Ethereum | Grayscale Ethereum Staking ETF | Total Ether in fund | stale | daily-weekly | 2026-01-09 | 188 | Grayscale |
| Singapore Dollar | Monetary Authority of Singapore | Official foreign reserves | stale | monthly | 2026-01-31 | 166 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Official reserve assets | stale | monthly | 2026-01-31 | 166 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Foreign currency reserves | stale | static-historical | 2026-01-31 | 166 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Foreign reserve securities | stale | monthly | 2026-01-31 | 166 | Monetary Authority of Singapore |

## Broken External Source Report

No broken external source URLs were found.

## High-Risk Claim Review List

| Asset | Category | Entity | Instrument | Status | Cadence | As-of | Source |
|---|---|---|---|---|---|---:|---|
| Bitcoin | Daily transactions or flow | BlackRock iShares Bitcoin Trust ETF | IBIT net assets | current | daily-weekly | 2026-07-13 | BlackRock |
| Bitcoin | ETF or trust holdings | BlackRock iShares Bitcoin Trust ETF | IBIT Basket Bitcoin Amount | current | daily-weekly | 2026-07-13 | BlackRock |
| Bitcoin | Public-company holdings | Strategy | Reported BTC holdings | current | daily-weekly | 2026-07-06 | Strategy |
| Bitcoin | Public-company holdings | Tesla, Inc. | Bitcoin units disclosed inside digital assets | recent | quarterly | 2026-03-31 | SEC |
| Bitcoin | ETF or trust holdings | Grayscale Bitcoin Trust ETF | GBTC Bitcoin exposure | stale | daily-weekly | 2026-01-09 | Grayscale |
| Ethereum | DEX or venue volume | BlackRock iShares Ethereum Trust ETF | ETHA net assets | current | daily-weekly | 2026-07-13 | BlackRock |
| Ethereum | ETF or trust holdings | BlackRock iShares Ethereum Trust ETF | ETHA basket Ether amount | current | daily-weekly | 2026-07-13 | BlackRock |
| Ethereum | ETF or trust holdings | Grayscale Ethereum Staking ETF | Total Ether in fund | stale | daily-weekly | 2026-01-09 | Grayscale |
| Ethereum | Staking or validator metrics | Lido DAO | ETH staked through Lido | current | daily-weekly | 2026-07-15 | Lido DAO |
| Solana | Staking or validator metrics | Solana network | Active stake | current | daily-weekly | 2026-07-13 | Validators Solutions |
| Solana | Staking or validator metrics | Solana validator set | Nakamoto coefficient | current | daily-weekly | 2026-07-13 | Validators Solutions |
| Solana | Staking or validator metrics | Coinbase validators | SOL staked | recent | quarterly | 2026-Q1 | Coinbase |
| US Dollar | Central-bank or FX reserves | Global official foreign exchange reserves | Total FX reserves and USD share | current | quarterly | 2026-Q1 | International Monetary Fund |
| US Dollar | Other monitored current amount | Japan | U.S. Treasury securities | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | Other monitored current amount | United Kingdom | U.S. Treasury securities | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | Other monitored current amount | China, Mainland | U.S. Treasury securities | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | Central-bank or FX reserves | Federal Reserve | U.S. Treasury securities held outright | current | monthly | 2026-07-08 | Federal Reserve |
| US Dollar | Central-bank or FX reserves | Federal Reserve | Federal Reserve notes outstanding | current | monthly | 2026-07-08 | Federal Reserve |
| Euro | Central-bank or FX reserves | European Central Bank | Foreign reserve assets | recent | annual | 2025-12-31 | European Central Bank |
| Euro | Central-bank or FX reserves | European Central Bank | 2026 headline inflation projection | current | monthly | 2026-06-11 | European Central Bank |
| Euro | Central-bank or FX reserves | Non-euro area reserve managers | Euro international role | current | monthly | 2026-06 | European Central Bank |
| Japanese Yen | Central-bank or FX reserves | Japan Ministry of Finance | Official reserve assets | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| Japanese Yen | Other monitored current amount | Japan Ministry of Finance | Foreign currency reserves | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| Japanese Yen | Gold holdings | Japan Ministry of Finance | Gold reserves | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| British Pound | Central-bank or FX reserves | Bank of England | Net foreign currency holdings | current | monthly | 2026-06-30 | UK Government |
| British Pound | Central-bank or FX reserves | Bank of England | Foreign currency assets | recent | monthly | 2026-04-30 | UK Government |
| Chinese Yuan | Other monitored current amount | State Administration of Foreign Exchange | China foreign exchange reserves | current | monthly | 2026-06-30 | State Administration of Foreign Exchange |
| Chinese Yuan | Central-bank or FX reserves | People's Bank of China | Managed floating regime | recent | monthly | 2026-03-23 | The State Council of China |
| Australian Dollar | Central-bank or FX reserves | Reserve Bank of Australia | Official reserve assets | current | monthly | 2026-06-30 | Reserve Bank of Australia |
| Australian Dollar | Daily transactions or flow | Reserve Bank of Australia | AUD/USD exchange-rate print | current | daily-weekly | 2026-07-14 | Reserve Bank of Australia |
| Australian Dollar | Central-bank or FX reserves | Reserve Bank of Australia | Reserve-asset categories | current | monthly | 2026-07-15 | Reserve Bank of Australia |
| Canadian Dollar | Other monitored current amount | Government of Canada | Foreign-currency bond maturity | recent | monthly | 2026-05-31 | Government of Canada |
| Swiss Franc | Central-bank or FX reserves | Swiss National Bank | Foreign currency investments | recent | annual | 2025-12-31 | Swiss National Bank |
| Swiss Franc | Central-bank or FX reserves | Swiss National Bank | Gold holdings | recent | annual | 2025-12-31 | Swiss National Bank |
| Swiss Franc | Central-bank or FX reserves | Swiss National Bank | USD allocation in FX reserves | current | quarterly | 2026-03-31 | Swiss National Bank |
| Swiss Franc | Central-bank or FX reserves | Swiss National Bank | EUR allocation in FX reserves | current | quarterly | 2026-03-31 | Swiss National Bank |
| Swiss Franc | Central-bank or FX reserves | Swiss National Bank | Equities in reserves | current | quarterly | 2026-03-31 | Swiss National Bank |
| Hong Kong Dollar | Other monitored current amount | Hong Kong Monetary Authority | Official foreign currency reserve assets | current | monthly | 2026-06-30 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Central-bank or FX reserves | Exchange Fund | Backing assets | current | monthly | 2026-05-31 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Central-bank or FX reserves | Exchange Fund | Backing ratio | current | monthly | 2026-05-31 | Hong Kong Monetary Authority |
| Singapore Dollar | Central-bank or FX reserves | Monetary Authority of Singapore | Official foreign reserves | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Central-bank or FX reserves | Monetary Authority of Singapore | Official reserve assets | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Central-bank or FX reserves | Monetary Authority of Singapore | Foreign reserve securities | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Swedish Krona | Central-bank or FX reserves | Sveriges Riksbank | Foreign exchange reserves | recent | annual | 2025-12-31 | Sveriges Riksbank |
| Swedish Krona | Central-bank or FX reserves | Sveriges Riksbank | Gold reserve | recent | annual | 2025-12-31 | Sveriges Riksbank |
| Swedish Krona | Central-bank or FX reserves | Sveriges Riksbank | Gold holdings | current | monthly | 2026-04-30 | Sveriges Riksbank |
| Swedish Krona | Public-company holdings | Sveriges Riksbank | USD allocation in FX reserves | recent | quarterly | 2025-12-10 | Sveriges Riksbank |
| Swedish Krona | Central-bank or FX reserves | Sveriges Riksbank | Currency hedging | recent | annual | 2025-12-10 | Sveriges Riksbank |
| South Korean Won | Central-bank or FX reserves | Bank of Korea | Official foreign exchange reserves | current | monthly | 2026-06-30 | Trading Economics, source: Bank of Korea |
| South Korean Won | Other monitored current amount | South Korea current account | Monthly current-account surplus | current | monthly | 2026-05 | Invest Korea |
| Mexican Peso | Central-bank or FX reserves | Banco de Mexico | International reserves | current | monthly | 2026-06 | Trading Economics, source: Banco de Mexico |
| Mexican Peso | Central-bank or FX reserves | Banco de Mexico | Target rate | current | monthly | 2026-05-07 | Banco de Mexico |
| Mexican Peso | Other monitored current amount | Mexican households | Quarterly remittances | current | quarterly | 2026-Q1 | Trading Economics, source: Banco de Mexico |
| Mexican Peso | Central-bank or FX reserves | Banco de Mexico | International reserve statistical series | current | monthly | 2026-06 | Banco de Mexico |
| New Zealand Dollar | Central-bank or FX reserves | Reserve Bank of New Zealand and Treasury | Official reserve assets | current | monthly | 2026-06 | Trading Economics, source: Reserve Bank of New Zealand |
| New Zealand Dollar | Central-bank or FX reserves | Reserve Bank of New Zealand | Official cash rate | current | monthly | 2026-07-08 | Reserve Bank of New Zealand |
| New Zealand Dollar | Fees and revenue | New Zealand dairy exporters | Forecast dairy export revenue | current | daily-weekly | 2026-06 | New Zealand Ministry for Primary Industries |
| New Zealand Dollar | Other monitored current amount | Stats NZ trade release | May 2026 goods exports | current | monthly | 2026-05 | Stats NZ |
| Norwegian Krone | Central-bank or FX reserves | Norges Bank | Policy rate | current | monthly | 2026-06-18 | Norges Bank |
| Norwegian Krone | Daily transactions or flow | Norges Bank | Daily FX transactions | current | daily-weekly | 2026-06 | Norges Bank |
| Norwegian Krone | Central-bank or FX reserves | Norges Bank | Foreign exchange reserves | current | monthly | 2026-07-15 | Norges Bank |
| Indian Rupee | Central-bank or FX reserves | Reserve Bank of India | Foreign exchange reserves | current | monthly | 2026-07-03 | Trading Economics, source: Reserve Bank of India |
| Indian Rupee | Central-bank or FX reserves | Reserve Bank of India | Weekly reserve increase | current | monthly | 2026-07-03 | Economic Times |
| Indian Rupee | Central-bank or FX reserves | Reserve Bank of India | Gold reserves | recent | monthly | 2026-04-10 | Reserve Bank of India |
| Turkish Lira | Central-bank or FX reserves | Central Bank of the Republic of Turkey | Gross foreign exchange reserves | current | monthly | 2026-07-03 | Trading Economics, source: Central Bank of the Republic of Turkey |
| Turkish Lira | Central-bank or FX reserves | Central Bank of the Republic of Turkey | Policy rate | current | monthly | 2026-06 | Trading Economics, source: Central Bank of the Republic of Turkey |
| Turkish Lira | Central-bank or FX reserves | Central Bank of the Republic of Turkey | Inflation uncertainty band | current | monthly | 2026 | Central Bank of the Republic of Turkey |
| South African Rand | Central-bank or FX reserves | South African Reserve Bank | Gross gold and foreign exchange reserves | current | monthly | 2026-06-30 | Trading Economics, source: South African Reserve Bank |
| South African Rand | Central-bank or FX reserves | South African Reserve Bank | Gold reserves component | current | monthly | 2026-06-30 | Trading Economics, source: South African Reserve Bank |
| South African Rand | Other monitored current amount | South African PGM sector | PGM share of mineral export sales | recent | annual | 2025 | Miningmx |
| Brazilian Real | Central-bank or FX reserves | Banco Central do Brasil | International reserves | current | monthly | 2026-06 | Trading Economics, source: Banco Central do Brasil |
| Brazilian Real | Central-bank or FX reserves | Banco Central do Brasil | Selic rate | current | monthly | 2026-06 | Banco Central do Brasil |
| Danish Krone | Central-bank or FX reserves | Danmarks Nationalbank | Foreign exchange reserves | current | monthly | 2026-06 | Trading Economics, source: Danmarks Nationalbank |
| Danish Krone | Central-bank or FX reserves | Danmarks Nationalbank | ERM II central rate | current | monthly | 2026-07-15 | Danmarks Nationalbank |
| Danish Krone | Central-bank or FX reserves | Danmarks Nationalbank | Upper intervention band reference | current | monthly | 2026-07-15 | Danmarks Nationalbank |
| Danish Krone | Central-bank or FX reserves | Danmarks Nationalbank | Lower intervention band reference | current | monthly | 2026-07-15 | Danmarks Nationalbank |
| Gold | ETF or trust holdings | BlackRock iShares Gold Trust | IAU ounces in trust | current | daily-weekly | 2026-07-14 | BlackRock |
| Gold | ETF or trust holdings | BlackRock iShares Gold Trust | IAU tonnes in trust | current | daily-weekly | 2026-07-14 | BlackRock |
| Gold | ETF or trust holdings | SPDR Gold Trust - HSBC allocated account | Allocated fine gold | current | daily-weekly | 2026-07-13 | SPDR Gold Shares |
| Gold | ETF or trust holdings | SPDR Gold Trust - JPMorgan allocated vaults | Allocated fine gold | current | daily-weekly | 2026-07-07 | JPMorgan Chase Bank |
| Gold | Central-bank or FX reserves | National Bank of Poland | Gold reserves | recent | quarterly | 2026-03-31 | World Gold Council |
| Gold | Central-bank or FX reserves | Central Bank of Uzbekistan | Gold reserves | recent | quarterly | 2026-03-31 | World Gold Council |
| Gold | Central-bank or FX reserves | People's Bank of China | Gold reserves | recent | quarterly | 2026-03-31 | World Gold Council |
| Gold | ETF or trust holdings | Central banks and other institutions | Q1 2026 net gold demand | recent | quarterly | 2026-03-31 | World Gold Council |
| Tether | Stablecoin supply | Tether International | Reported total assets | recent | quarterly | 2026-03-31 | TradingView / Cointelegraph |
| Tether | Stablecoin supply | Tether International | Reported liabilities | recent | quarterly | 2026-03-31 | TradingView / Cointelegraph |
| Tether | Stablecoin supply | Tether International | Reported US Treasury exposure | recent | quarterly | 2026-03-31 | TradingView / Cointelegraph |
| Tether | Stablecoin supply | Tether International | Reported gold reserve exposure | recent | quarterly | 2026-03-31 | TradingView / Cointelegraph |
| USD Coin | Stablecoin supply | Circle Internet Group | USDC in circulation | recent | monthly | 2026-05-29 | Circle / Deloitte |
| USD Coin | Stablecoin supply | Circle Internet Group | Fair value of assets held in USDC reserve | recent | monthly | 2026-05-29 | Circle / Deloitte |
| USD Coin | Other monitored current amount | Circle Reserve Fund | Fund size | current | monthly | 2026-07-13 | BlackRock |
| USD Coin | Other monitored current amount | Circle Reserve Fund | U.S. Treasury securities | recent | quarterly | 2026-05-29 | Circle / Deloitte |
| USD Coin | Other monitored current amount | Circle Reserve Fund | U.S. Treasury repurchase agreements | recent | monthly | 2026-05-29 | Circle / Deloitte |
| USD Coin | Stablecoin supply | Circle | Cash held at regulated financial institutions | recent | monthly | 2026-05-29 | Circle / Deloitte |
| BNB | Staking or validator metrics | BNB Chain staking | Total BNB staked | current | daily-weekly | 2026-07-15 | BNB Chain |
| BNB | Staking or validator metrics | BNB Chain validators | Active validators | current | daily-weekly | 2026-07-15 | BNB Chain |
| BNB | Staking or validator metrics | BNB Chain staking | Advertised staking APY | current | daily-weekly | 2026-07-15 | BNB Chain |
| XRP | Other monitored current amount | Ripple | Total XRP held by Ripple | current | daily-weekly | 2026-06-30 | Ripple |
| XRP | Circulating or total supply | XRP market | Distributed XRP | current | daily-weekly | 2026-06-30 | Ripple |
| Dogecoin | Daily transactions or flow | Dogecoin network | Reward last 24 hours | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Dogecoin | Other monitored current amount | BitInfoCharts labeled top DOGE wallet | Largest listed DOGE address | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Dogecoin | DEX or venue volume | Tesla | DOGE accepted for eligible products | current | daily-weekly | 2026-07-15 | Tesla Support |
| Cardano | Other monitored current amount | Cardano Treasury | Treasury balance | current | monthly | 2026-07-15 | Cardano |
| Cardano | Other monitored current amount | Cardano Foundation | 2025 resources allocated | recent | annual | 2025-12-31 | Cardano Foundation |
| Cardano | Fees and revenue | Cardano Summit 2025 | Sponsorship revenue | recent | annual | 2025 | Cardano Foundation |
| TRON | Crypto TVL | TRON network | Total value locked | current | daily-weekly | 2026-07-15 | TRONSCAN |
| TRON | Stablecoin supply | TRON USDT contract | USDT total supply on TRON | current | daily-weekly | 2026-07-15 | TRONSCAN |
| Toncoin | Staking or validator metrics | The Open Network | Validators | current | daily-weekly | 2026-07-15 | The Open Network |
| Toncoin | Other monitored current amount | The Open Network | Nodes | current | daily-weekly | 2026-07-15 | The Open Network |
| Toncoin | Other monitored current amount | The Open Network | Monthly active wallets | current | daily-weekly | 2026-07-15 | The Open Network |
| Toncoin | Daily transactions or flow | The Open Network | Transactions last 24 hours | current | daily-weekly | 2026-07-15 | The Open Network |
| Avalanche | Staking or validator metrics | Avalanche network | Total AVAX stake | current | daily-weekly | 2026-07-15 | Avalanche |
| Avalanche | Staking or validator metrics | Avalanche validators | Validation stake | current | daily-weekly | 2026-07-15 | Avalanche |
| Avalanche | Staking or validator metrics | Avalanche delegators | Delegated stake | current | daily-weekly | 2026-07-15 | Avalanche |
| Avalanche | Staking or validator metrics | Avalanche staking set | Staking validators | current | daily-weekly | 2026-07-15 | Avalanche |
| Avalanche | Staking or validator metrics | Avalanche delegations | Total delegations | current | daily-weekly | 2026-07-15 | Avalanche |
| Avalanche | Public-company holdings | Avalanche Treasury Co. | Initial treasury assets | recent | quarterly | 2025-2026 filing materials | SEC |
| Chainlink | Staking or validator metrics | Chainlink staking v0.2 | Total staking pool cap | current | daily-weekly | 2026-07-15 | Chainlink |
| Chainlink | Staking or validator metrics | Chainlink community stakers | Community allotment | current | daily-weekly | 2026-07-15 | Chainlink |
| Chainlink | Staking or validator metrics | Chainlink node operators | Node-operator allotment | current | daily-weekly | 2026-07-15 | Chainlink |
| Chainlink | Fees and revenue | Chainlink Reserve | Reserve value | current | daily-weekly | 2026-07-15 | Chainlink |
| Chainlink | Circulating or total supply | LINK release schedule | Current annual release pace | current | daily-weekly | 2026-07-15 | Chainlink |
| Shiba Inu | Other monitored current amount | SHIB holders | Holder count | current | daily-weekly | 2026-07-14 | Etherscan |
| Shiba Inu | Daily transactions or flow | Shibarium network | Total transactions | current | daily-weekly | 2026-07-15 | ShibariumScan |
| Shiba Inu | Other monitored current amount | Shibarium network | Wallet addresses | current | daily-weekly | 2026-07-15 | ShibariumScan |
| Polkadot | Other monitored current amount | Polkadot Treasury | Q4 2025 balance sheet | recent | quarterly | 2025-Q4 | Polkadot Governance Forum |
| Polkadot | Other monitored current amount | Polkadot Treasury | Q4 2025 spending | recent | quarterly | 2025-Q4 | Polkadot Governance Forum |
| Polkadot | Other monitored current amount | Polkadot Treasury | Payable liabilities | recent | quarterly | 2025-Q4 | Polkadot Governance Forum |
| Polkadot | Other monitored current amount | Polkadot development spending | Development category spend | recent | quarterly | 2025-Q4 | Polkadot Governance Forum |
| Polkadot | Staking or validator metrics | Polkadot staking system | Validator and nominator staking | current | daily-weekly | 2026-07-15 | Polkadot Wiki |
| Bitcoin Cash | Daily transactions or flow | Bitcoin Cash network | Reward last 24 hours | current | daily-weekly | 2026-07-14 | BitInfoCharts |
| Bitcoin Cash | Other monitored current amount | Bitcoin Cash network | Blocks last 24 hours | current | daily-weekly | 2026-07-14 | BitInfoCharts |
| Litecoin | Daily transactions or flow | Litecoin network | Reward last 24 hours | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Litecoin | Other monitored current amount | Litecoin network | Blocks last 24 hours | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Litecoin | Other monitored current amount | BitInfoCharts largest listed Litecoin address | Largest listed LTC balance | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Uniswap | Other monitored current amount | Uniswap Foundation | Total reported assets | recent | annual | 2025-12-31 | Uniswap Governance Forum |
| Uniswap | Other monitored current amount | Uniswap Foundation | UNI holdings | recent | annual | 2025-12-31 | Uniswap Governance Forum |
| Uniswap | Stablecoin supply | Uniswap Foundation | Cash and stablecoins | recent | annual | 2025-12-31 | Uniswap Governance Forum |
| Uniswap | Other monitored current amount | Uniswap Foundation | ETH holdings | recent | annual | 2025-12-31 | Uniswap Governance Forum |
| Aptos | Staking or validator metrics | Aptos validator operators | Validator stake range | current | daily-weekly | 2026-07-15 | Aptos Docs |
| NEAR Protocol | Staking or validator metrics | NEAR validator set | Current validators | current | daily-weekly | 2026-07-15 | NearBlocks |
| NEAR Protocol | Staking or validator metrics | NEAR network | Total staked | current | daily-weekly | 2026-07-15 | NearBlocks |
| NEAR Protocol | Staking or validator metrics | NEAR validator concentration | Stake above 33% threshold | current | daily-weekly | 2026-07-15 | NearBlocks |
| NEAR Protocol | Staking or validator metrics | NEAR validators | Validator duty | current | daily-weekly | 2026-07-15 | NEAR Docs |
| Ethereum Classic | Daily transactions or flow | Ethereum Classic network | Reward last 24 hours | current | daily-weekly | 2026-07-15 | BitInfoCharts |
| Internet Computer | Staking or validator metrics | NNS neuron holders | Dissolve delay bonus example | current | daily-weekly | 2026-07-15 | Internet Computer |
| Cosmos | Staking or validator metrics | Top Cosmos Hub validators | Validators reaching more than two-thirds stake | current | daily-weekly | 2026-07-15 | Cosmos Hub Forum |
| Cosmos | Staking or validator metrics | ATOM stakers | Unbonding period | current | daily-weekly | 2026-07-15 | Staking Rewards |
| Arbitrum | Token unlocks | Arbitrum circulating unlock state | Unlocked ARB supply | current | daily-weekly | 2026-07-15 | Tokenomist |
| Sui | Circulating or total supply | Sui circulating supply | Circulating SUI | current | daily-weekly | 2026-07-15 | Tokenomist |
| Sui | Staking or validator metrics | Sui validator set | Active validators | current | daily-weekly | 2026-07-15 | Figment |
| Sui | Staking or validator metrics | Sui validator candidates | Minimum active-set stake | current | daily-weekly | 2026-07-15 | Figment |
| Sui | Staking or validator metrics | Sui validator voting power | Voting power cap | current | daily-weekly | 2026-07-15 | Figment |
| Pepe | Circulating or total supply | PEPE token contract | Max total supply | current | daily-weekly | 2026-07-15 | Etherscan |
| Pepe | Other monitored current amount | PEPE onchain market | Onchain market capitalization | current | daily-weekly | 2026-07-15 | Etherscan |
| dogwifhat | Circulating or total supply | WIF circulating supply | Circulating WIF | current | daily-weekly | 2026-07-15 | CoinMarketCap |
| dogwifhat | Other monitored current amount | WIF market capitalization | CoinMarketCap market cap | current | daily-weekly | 2026-07-15 | CoinMarketCap |
| Injective | Token unlocks | INJ tokenomics | Future unlock schedule | current | daily-weekly | 2026-07-15 | Injective |
| Injective | Staking or validator metrics | Injective Hub staking | Total staked INJ | current | daily-weekly | 2026-07-15 | Injective |
| Injective | Staking or validator metrics | Injective Hub staking | Displayed staking APR | current | daily-weekly | 2026-07-15 | Injective |
| Injective | Staking or validator metrics | Injective validators | Active validators | current | daily-weekly | 2026-07-15 | Staking Rewards |
| Render | Circulating or total supply | Render tokenomics | Total RENDER supply | current | daily-weekly | 2026-07-15 | Tokenomist |
| Render | Circulating or total supply | Render circulating supply | Circulating RENDER | current | daily-weekly | 2026-07-15 | Tokenomist |
| Aave | Circulating or total supply | AAVE token supply | Total AAVE supply | current | daily-weekly | 2026-07-15 | Aave Docs |
| Aave | Crypto TVL | Aave active-loan market | Active loans | current | daily-weekly | 2026-07-15 | DefiLlama |
| Maker | Stablecoin supply | Sky USDS supply | USDS supply | current | daily-weekly | 2026-07-15 | Sky Ecosystem |
| Maker | Stablecoin supply | Sky collateral backing | USDS collateral | current | daily-weekly | 2026-07-15 | Sky Ecosystem |
| Maker | Stablecoin supply | Sky Savings Rate | Displayed sUSDS APY | current | daily-weekly | 2026-07-15 | Sky Ecosystem |
| Maker | Stablecoin supply | DAI USDS converter | DAI to USDS conversion | current | daily-weekly | 2026-07-15 | Sky Protocol Docs |
| Lido DAO | Crypto TVL | Lido protocol | Total value locked | current | daily-weekly | 2026-07-15 | DefiLlama |
| Lido DAO | Staking or validator metrics | Lido DVT validators | DVT-powered validators | recent | quarterly | 2025-12-31 | Lido Blog |
| Lido DAO | Other monitored current amount | Lido DVT stake | ETH represented by DVT | recent | quarterly | 2025-12-31 | Lido Blog |
| Lido DAO | Other monitored current amount | Lido node infrastructure | Nodes used by operators | recent | quarterly | 2025-12-31 | Lido Blog |
| Sei | Token unlocks | SEI circulating supply | Circulating SEI | current | daily-weekly | 2026-07-15 | DefiLlama |
| Sei | Token unlocks | SEI noncirculating allocation | Current noncirculating share | current | daily-weekly | 2026-07-15 | DefiLlama |
| Sei | Token unlocks | SEI private sale | Current private-sale share | current | daily-weekly | 2026-07-15 | DefiLlama |
| Sei | Token unlocks | SEI unlock calendar | Displayed unlock value | current | daily-weekly | 2026-07-15 | DefiLlama |
| Stacks | Crypto TVL | sBTC liquidity | sBTC TVL | recent | quarterly | 2026-Q1 | Stacks |
| Stacks | Staking or validator metrics | Bitcoin staking pilot | Participation capital | recent | quarterly | 2026-Q1 | Stacks |
| Stacks | Crypto TVL | Stacks wallet base | Wallets created | recent | quarterly | 2026-Q1 | Stacks |
| Stacks | Daily transactions or flow | Stacks daily transactions | 2025 average daily transactions | recent | quarterly | 2025 | Stacks |
| Stacks | Daily transactions or flow | Stacks transaction peaks | 2025 peak daily transactions | recent | quarterly | 2025 | Stacks |
| Hedera | Circulating or total supply | Hedera network supply | Total HBAR supply | current | daily-weekly | 2026-07-15 | Hedera Council |
| Hedera | Staking or validator metrics | HBAR staking rewards | Estimated reward rate | current | daily-weekly | 2026-07-15 | Coinbase |
| Hedera | Staking or validator metrics | HBAR staking participation | Staked HBAR | current | daily-weekly | 2026-07-15 | Coinbase |
| Stellar | Other monitored current amount | Stellar RWA network | Onchain RWAs | recent | quarterly | 2026-Q1 | Stellar |
| Stellar | Stablecoin supply | Stellar stablecoin payments | Stablecoin payment volume | recent | quarterly | 2026-Q1 | Stellar |
| Stellar | Stablecoin supply | Stellar stablecoin payments | Payment volume growth | recent | quarterly | 2026-Q1 | Stellar |
| Stellar | Other monitored current amount | Stellar developer ecosystem | Developer growth | recent | quarterly | 2026-Q1 | Stellar |
| Stellar | Other monitored current amount | Stellar account reserves | Base reserve | current | monthly | 2026-07-15 | Stellar Developer Docs |
| Stellar | Fees and revenue | Stellar transaction fees | Minimum inclusion fee | current | daily-weekly | 2026-07-15 | Stellar Developer Docs |
| Monero | Daily transactions or flow | Monero block timing | Target block interval | current | daily-weekly | 2026-07-15 | Monero Docs |
| OKB | Other monitored current amount | X Layer gas model | Native gas token | current | daily-weekly | 2026-07-15 | OKX Wallet |
| OKB | Other monitored current amount | X Layer challenge period | Challenge period | current | daily-weekly | 2026-07-15 | OKX Wallet |
| Cronos | Circulating or total supply | Crypto.com | CRO circulating supply | current | daily-weekly | 2026-07-15 | Crypto.com |
| Cronos | Other monitored current amount | Crypto.com | CRO max supply display | current | daily-weekly | 2026-07-15 | Crypto.com |
| Cronos | Staking or validator metrics | Cronos POS Chain | Active validator cap | current | daily-weekly | 2026-07-15 | Cronos POS Chain Docs |
| Cronos | Crypto TVL | Cronos DeFi ecosystem | Stablecoin market cap | current | daily-weekly | 2026-07-15 | DefiLlama |
| Cronos | Crypto TVL | Cronos DeFi ecosystem | Daily transactions | current | daily-weekly | 2026-07-15 | DefiLlama |
| Cronos | Crypto TVL | Cronos bridge ecosystem | Bridged TVL | current | daily-weekly | 2026-07-15 | DefiLlama |
| Polygon | Staking or validator metrics | Polygon PoS validators | Minimum validator stake | current | daily-weekly | 2026-07-15 | Polygon Developer Docs |
| Polygon | Circulating or total supply | Polygon ecosystem | POL circulating supply | current | daily-weekly | 2026-07-15 | Tokenomist |
| Polygon | Crypto TVL | Polygon DeFi ecosystem | Daily transactions | current | daily-weekly | 2026-07-15 | DefiLlama |
| Polygon | Crypto TVL | Polygon bridge ecosystem | Bridged TVL | current | daily-weekly | 2026-07-15 | DefiLlama |
| Algorand | Other monitored current amount | Algorand Foundation | Community stake share | recent | quarterly | 2026-Q1 | Algorand Foundation |
| Algorand | ETF or trust holdings | Algorand Foundation | Foundation stake share | recent | quarterly | 2026-Q1 | Algorand Foundation |
| Algorand | Crypto TVL | Algorand network | Daily transactions | current | daily-weekly | 2026-07-15 | DefiLlama |
| VeChain | Stablecoin supply | VeChain DeFi ecosystem | Stablecoin market cap | current | daily-weekly | 2026-07-15 | DefiLlama |
| VeChain | Crypto TVL | VeChain DeFi ecosystem | Daily DEX volume | current | daily-weekly | 2026-07-15 | DefiLlama |
| VeChain | Crypto TVL | VeChain market | VET market cap | current | daily-weekly | 2026-07-15 | DefiLlama |
| VeChain | Staking or validator metrics | StarGate | NFT staking collateral model | current | daily-weekly | 2026-07-15 | VeChain Docs |
| THORChain | Staking or validator metrics | THORChain validators | Minimum active validator bond | current | daily-weekly | 2026-07-15 | THORChain Docs |
| THORChain | Crypto TVL | THORChain DEX | DEX TVL | current | daily-weekly | 2026-07-15 | DefiLlama |
| THORChain | Fees and revenue | THORChain | TCY fee share | current | daily-weekly | 2026-07-15 | THORChain |
| The Graph | Circulating or total supply | The Graph token market | Total supply | current | daily-weekly | 2026-07-15 | Tokenomics.com |
| The Graph | Token unlocks | GRT unlock schedule | Next scheduled unlock | current | daily-weekly | 2026-07-17 | Tokenomics.com |
| The Graph | Fees and revenue | The Graph Indexers | Query fee and indexing reward streams | current | daily-weekly | 2026-07-15 | The Graph Docs |
| Pyth Network | Fees and revenue | Pyth Network | Q3 2026 gross protocol revenue | current | quarterly | 2026-Q3 to date | DefiLlama |
| Jupiter | Circulating or total supply | JUP token market | Circulating supply | current | daily-weekly | 2026-07-15 | Tokenomist |
| Jupiter | Fees and revenue | Jupiter Aggregator | Annualized fees | current | daily-weekly | 2026-07-15 | DefiLlama |

## Source Freshness Table Preview

The JSON report contains the full source freshness table. This preview shows the first 80 records.

| Asset | Entity | Instrument | Amount | Unit | Status | Cadence | As-of | Source |
|---|---|---|---:|---|---|---|---:|---|
| Bitcoin | BlackRock iShares Bitcoin Trust ETF | IBIT net assets | 45,549,228,493 | USD | current | daily-weekly | 2026-07-13 | BlackRock |
| Bitcoin | BlackRock iShares Bitcoin Trust ETF | IBIT Basket Bitcoin Amount | 22.65 | BTC | current | daily-weekly | 2026-07-13 | BlackRock |
| Bitcoin | Strategy | Reported BTC holdings | 843,775 | BTC | current | daily-weekly | 2026-07-06 | Strategy |
| Bitcoin | Tesla, Inc. | Bitcoin units disclosed inside digital assets | 11,509 | BTC | recent | quarterly | 2026-03-31 | SEC |
| Bitcoin | Grayscale Bitcoin Trust ETF | GBTC Bitcoin exposure | Not disclosed on source page | BTC | stale | daily-weekly | 2026-01-09 | Grayscale |
| Bitcoin | Fidelity Wise Origin Bitcoin Fund | FBTC Bitcoin exposure | Not disclosed on source page | BTC | current | static-historical | 2026-07-15 | Fidelity |
| Bitcoin | U.S. Treasury Strategic Bitcoin Reserve | Government BTC from forfeiture proceedings | Not publicly quantified in executive order | BTC | historical | static-historical | 2025-03-06 | The White House |
| Ethereum | BlackRock iShares Ethereum Trust ETF | ETHA net assets | 4,884,913,163 | USD | current | daily-weekly | 2026-07-13 | BlackRock |
| Ethereum | BlackRock iShares Ethereum Trust ETF | ETHA basket Ether amount | 301.82 | ETH per basket | current | daily-weekly | 2026-07-13 | BlackRock |
| Ethereum | Grayscale Ethereum Staking ETF | Total Ether in fund | 880,795.2601 | ETH | stale | daily-weekly | 2026-01-09 | Grayscale |
| Ethereum | Lido DAO | ETH staked through Lido | 9,182,978 | ETH | current | daily-weekly | 2026-07-15 | Lido DAO |
| Ethereum | Ethereum Foundation | Foundation treasury | 970.2 | million USD total treasury | historical | static-historical | 2024-10-31 | Ethereum Foundation |
| Solana | Solana network | Active stake | 429 | million SOL | current | daily-weekly | 2026-07-13 | Validators Solutions |
| Solana | Solana validator set | Nakamoto coefficient | 19 | validators | current | daily-weekly | 2026-07-13 | Validators Solutions |
| Solana | Coinbase validators | SOL staked | 40.48 | million SOL | recent | quarterly | 2026-Q1 | Coinbase |
| Solana | Goldman Sachs | Disclosed SOL holdings | 108 | million USD | recent | static-historical | 2026-02 | Solana |
| Solana | Solana protocol | Long-term inflation rate | 1.5 | percent annually | current | static-historical | 2026-07-15 | Solana |
| US Dollar | Global official foreign exchange reserves | Total FX reserves and USD share | 13.10 trillion total reserves; USD share 57.13 | USD and percent | current | quarterly | 2026-Q1 | International Monetary Fund |
| US Dollar | Japan | U.S. Treasury securities | 1,143.1 | USD billions | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | United Kingdom | U.S. Treasury securities | 948.6 | USD billions | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | China, Mainland | U.S. Treasury securities | 659.3 | USD billions | current | monthly | 2026-05 | U.S. Department of the Treasury |
| US Dollar | Federal Reserve | U.S. Treasury securities held outright | 4,502,749 | USD millions | current | monthly | 2026-07-08 | Federal Reserve |
| US Dollar | Federal Reserve | Federal Reserve notes outstanding | 2,824,935 | USD millions | current | monthly | 2026-07-08 | Federal Reserve |
| Euro | European Central Bank | Foreign reserve assets | 116.8 | EUR billion | recent | annual | 2025-12-31 | European Central Bank |
| Euro | European Central Bank | Inflation objective | 2.0 | percent | current | static-historical | 2026-07-15 | European Central Bank |
| Euro | European Central Bank | 2026 headline inflation projection | 3.0 | percent | current | monthly | 2026-06-11 | European Central Bank |
| Euro | Global FX market | EUR turnover share | 28.9 | percent of FX trades | recent | static-historical | 2025-04 | Bank for International Settlements |
| Euro | Non-euro area reserve managers | Euro international role | 25th | annual ECB review | current | monthly | 2026-06 | European Central Bank |
| Japanese Yen | Japan Ministry of Finance | Official reserve assets | 1,287,476 | USD million | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| Japanese Yen | Japan Ministry of Finance | Foreign currency reserves | 1,090,515 | USD million | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| Japanese Yen | Japan Ministry of Finance | Gold reserves | 109,505 | USD million | current | monthly | 2026-06-30 | Japan Ministry of Finance |
| Japanese Yen | Bank of Japan | Price stability target | 2.0 | percent CPI | current | static-historical | 2026-07-15 | Bank of Japan |
| Japanese Yen | Global FX market | JPY turnover share | 16.8 | percent of FX trades | recent | static-historical | 2025-04 | Bank for International Settlements |
| British Pound | Bank of England | Inflation target | 2.0 | percent CPI | current | static-historical | 2026-07-15 | Bank of England |
| British Pound | Bank of England | Net foreign currency holdings | 3.0 | USD million | current | monthly | 2026-06-30 | UK Government |
| British Pound | Bank of England | Foreign currency assets | 49,351 | USD million | recent | monthly | 2026-04-30 | UK Government |
| British Pound | Global FX market | GBP turnover share | 10.2 | percent of FX trades | recent | static-historical | 2025-04 | Bank for International Settlements |
| British Pound | UK official reserve framework | Exchange Equalisation Account | monthly | reserve publication cycle | current | static-historical | 2026-07-03 | Bank of England |
| Chinese Yuan | State Administration of Foreign Exchange | China foreign exchange reserves | 3.4163 | USD trillion | current | monthly | 2026-06-30 | State Administration of Foreign Exchange |
| Chinese Yuan | People's Bank of China | Managed floating regime | 1.3 | percent RMB appreciation versus USD year-to-date at cited date | recent | monthly | 2026-03-23 | The State Council of China |
| Chinese Yuan | People's Bank of China | Daily CNY trading band reference | 2.0 | percent around fixing | recent | static-historical | 2026-07-15 | Reserve Bank of Australia |
| Chinese Yuan | Global FX market | Renminbi turnover share | 8.5 | percent of FX trades | recent | static-historical | 2025-04 | Bank for International Settlements |
| Chinese Yuan | Hong Kong CNH market | RMB FX transaction growth | 315.1 | USD billion average daily turnover | recent | static-historical | 2025-04 | Hong Kong Monetary Authority |
| Australian Dollar | Reserve Bank of Australia | Official reserve assets | 70.421 | USD billion | current | monthly | 2026-06-30 | Reserve Bank of Australia |
| Australian Dollar | Reserve Bank of Australia | Inflation target range | 2.0-3.0 | percent CPI | current | static-historical | 2026-07-15 | Reserve Bank of Australia |
| Australian Dollar | Reserve Bank of Australia | AUD/USD exchange-rate print | 0.6935 | USD per AUD | current | daily-weekly | 2026-07-14 | Reserve Bank of Australia |
| Australian Dollar | Reserve Bank of Australia | Reserve-asset categories | 4.0 | major categories | current | monthly | 2026-07-15 | Reserve Bank of Australia |
| Australian Dollar | Global FX market | AUD global role | top | major currency group | recent | static-historical | 2025-04 | Bank for International Settlements |
| Canadian Dollar | Bank of Canada | Inflation-control midpoint | 2.0 | percent CPI | current | static-historical | 2026-07-15 | Bank of Canada |
| Canadian Dollar | Bank of Canada | Inflation-control range | 1.0-3.0 | percent CPI | current | static-historical | 2026-07-15 | Bank of Canada |
| Canadian Dollar | Government of Canada | Canada bills outstanding | 1,478 | USD million | recent | static-historical | 2026-05-31 | Government of Canada |
| Canadian Dollar | Government of Canada | Foreign-currency bond maturity | 3,500 | USD million | recent | monthly | 2026-05-31 | Government of Canada |
| Canadian Dollar | Bank of Canada | Reserve publication schedule | 3.0 | monthly business-day lag | current | static-historical | 2026-07-15 | Bank of Canada |
| Swiss Franc | Swiss National Bank | Foreign currency investments | 759,210.1 | CHF million | recent | annual | 2025-12-31 | Swiss National Bank |
| Swiss Franc | Swiss National Bank | Gold holdings | 115,351.2 | CHF million | recent | annual | 2025-12-31 | Swiss National Bank |
| Swiss Franc | Swiss National Bank | USD allocation in FX reserves | 37.0 | percent | current | quarterly | 2026-03-31 | Swiss National Bank |
| Swiss Franc | Swiss National Bank | EUR allocation in FX reserves | 39.0 | percent | current | quarterly | 2026-03-31 | Swiss National Bank |
| Swiss Franc | Swiss National Bank | Equities in reserves | 28.0 | percent | current | quarterly | 2026-03-31 | Swiss National Bank |
| Hong Kong Dollar | Hong Kong Monetary Authority | Official foreign currency reserve assets | 445.9 | USD billion | current | monthly | 2026-06-30 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Exchange Fund | Total assets | 4,390.7 | HKD billion | current | static-historical | 2026-05-31 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Exchange Fund | Backing assets | 2,313.8 | HKD billion | current | monthly | 2026-05-31 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Exchange Fund | Backing ratio | 111.66 | percent | current | monthly | 2026-05-31 | Hong Kong Monetary Authority |
| Hong Kong Dollar | Hong Kong Monetary Authority | LERS band | 7.75-7.85 | HKD per USD | current | static-historical | 2026-07-15 | Hong Kong Monetary Authority |
| Singapore Dollar | Monetary Authority of Singapore | Official foreign reserves | 529,105.20 | SGD million | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Official reserve assets | 416,969.10 | USD million | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Foreign currency reserves | 404,192.30 | USD million | stale | static-historical | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | Foreign reserve securities | 372,955.60 | USD million | stale | monthly | 2026-01-31 | Monetary Authority of Singapore |
| Singapore Dollar | Monetary Authority of Singapore | S$NEER basket weights | not disclosed | policy basket | current | static-historical | 2026-07-15 | Monetary Authority of Singapore |
| Swedish Krona | Sveriges Riksbank | Foreign exchange reserves | 418.5 | SEK billion | recent | annual | 2025-12-31 | Sveriges Riksbank |
| Swedish Krona | Sveriges Riksbank | Gold reserve | 161.2 | SEK billion | recent | annual | 2025-12-31 | Sveriges Riksbank |
| Swedish Krona | Sveriges Riksbank | Gold holdings | 125.7 | tonnes | current | monthly | 2026-04-30 | Sveriges Riksbank |
| Swedish Krona | Sveriges Riksbank | USD allocation in FX reserves | 70.0 | percent | recent | quarterly | 2025-12-10 | Sveriges Riksbank |
| Swedish Krona | Sveriges Riksbank | Currency hedging | 8.0 USD + 2.0 EUR | billion hedged | recent | annual | 2025-12-10 | Sveriges Riksbank |
| South Korean Won | Bank of Korea | Official foreign exchange reserves | 427.4 | USD billion | current | monthly | 2026-06-30 | Trading Economics, source: Bank of Korea |
| South Korean Won | Bank of Korea | CPI inflation target | 2.0 | percent | current | static-historical | 2026-07-15 | Bank of Korea |
| South Korean Won | South Korea current account | Monthly current-account surplus | 38.61 | USD billion | current | monthly | 2026-05 | Invest Korea |
| South Korean Won | Korean semiconductor exporters | March semiconductor exports | 32.8 | USD billion | recent | static-historical | 2026-03 | Ministry of Trade, Industry and Resources |
| South Korean Won | SK Hynix | US ADR offering repatriation watch | 26.0 | USD billion | current | static-historical | 2026-07-13 | Financial Times |
| Mexican Peso | Banco de Mexico | International reserves | 255050.20 | USD million | current | monthly | 2026-06 | Trading Economics, source: Banco de Mexico |
| Mexican Peso | Banco de Mexico | Target rate | 6.50 | percent | current | monthly | 2026-05-07 | Banco de Mexico |
