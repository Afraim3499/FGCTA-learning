import type { AssetHoldingExposure, AssetProfile, AssetResearchSource } from "./asset-intelligence-data";

type AssetProfileEnhancement = Partial<
  Omit<AssetProfile, "slug" | "name" | "symbol" | "assetClass" | "rank" | "status" | "snapshotLabel" | "lab">
> & {
  lab?: Partial<AssetProfile["lab"]>;
};

const retrievedAt = "2026-07-15";

function source(title: string, publisher: string, url: string, note: string): AssetResearchSource {
  return { title, publisher, url, note };
}

function exposure(item: AssetHoldingExposure): AssetHoldingExposure {
  return item;
}

const batchSources = {
  ethereumDocs: source(
    "Ethereum documentation",
    "Ethereum.org",
    "https://ethereum.org/en/developers/docs/",
    "Official technical reference for Ethereum accounts, smart contracts, staking, and network behavior."
  ),
  ethereumFoundationTreasuryPolicy: source(
    "Ethereum Foundation Treasury Policy",
    "Ethereum Foundation",
    "https://blog.ethereum.org/2025/06/04/ef-treasury-policy",
    "Official policy source for Ethereum Foundation treasury management, ETH sales framework, and stewardship role."
  ),
  ethereumFoundationReport2024: source(
    "Ethereum Foundation Report 2024",
    "Ethereum Foundation",
    "https://ethereum.foundation/report-2024.pdf",
    "Foundation report used as a historical treasury reference because newer exact treasury amounts were not published in the policy note."
  ),
  blackrockEtha: source(
    "iShares Ethereum Trust ETF",
    "BlackRock",
    "https://www.blackrock.com/us/individual/products/337614/ishares-ethereum-trust-etf",
    "Official ETHA source for net assets, daily volume, basket ether amount, benchmark, and share count."
  ),
  grayscaleEthe: source(
    "Grayscale Ethereum Staking ETF",
    "Grayscale",
    "https://etfs.grayscale.com/ethe",
    "Official ETHE source for total Ether in fund, AUM, staking percentage, custodian, and listing history."
  ),
  lidoHome: source(
    "Lido liquid staking",
    "Lido DAO",
    "https://lido.fi/",
    "Official Lido source for stETH TVL, ETH staked through Lido, operator set, rewards paid, and integrations."
  ),
  tetherTransparency: source(
    "Tether transparency",
    "Tether",
    "https://tether.to/transparency/",
    "Official Tether source for token backing language, daily circulation context, and reserve-report access."
  ),
  tetherQ12026: source(
    "Tether Q1 2026 reserve figures",
    "TradingView / Cointelegraph",
    "https://www.tradingview.com/news/cointelegraph%3A9620496ac094b%3A0-tether-reports-1-04b-profit-in-q1-as-treasury-holdings-reach-141b/",
    "News report summarizing Tether's Q1 2026 attestation figures, used with the official transparency page as the primary trail."
  ),
  tronUsdt: source(
    "Tether USD on TRON",
    "TRONSCAN",
    "https://tronscan.org/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/transfers",
    "Explorer source for USDT supply on TRON and the contract-level stablecoin footprint."
  ),
  circleTransparency: source(
    "Transparency and Stability",
    "Circle",
    "https://www.circle.com/transparency",
    "Official Circle transparency hub for USDC reserve process, weekly disclosure model, monthly assurance, and reserve links."
  ),
  circleMay2026Attestation: source(
    "USDC Examination Report May 2026",
    "Circle / Deloitte",
    "https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/USDCAttestationReports/2026/2026%20USDC_Examination%20Report%20May%2026.pdf",
    "Monthly accountant report for USDC in circulation and reserve assets as of May 5 and May 29, 2026."
  ),
  circleReserveFund: source(
    "Circle Reserve Fund",
    "BlackRock",
    "https://www.blackrock.com/cash/en-us/products/329365/circle-reserve-fund",
    "Official BlackRock fund page for Circle Reserve Fund size, liquidity, yield, and portfolio characteristics."
  ),
  circleUsdc: source(
    "USDC",
    "Circle",
    "https://www.circle.com/usdc",
    "Official issuer page for USDC backing, issuance model, and stable digital-dollar positioning."
  ),
  bnbBurn35: source(
    "35th BNB Burn",
    "BNB Chain",
    "https://www.bnbchain.org/en/blog/35th-bnb-burn",
    "Official burn announcement with BNB burned, approximate USD value, remaining supply, and transaction reference."
  ),
  bnbDocs: source(
    "BNB Chain Docs",
    "BNB Chain",
    "https://docs.bnbchain.org/",
    "Official BNB Chain docs for ecosystem structure, BNB utility, and chain composition."
  ),
  bnbBscIntro: source(
    "BNB Smart Chain introduction",
    "BNB Chain",
    "https://docs.bnbchain.org/bnb-smart-chain/introduction/",
    "Official BSC reference for Proof of Staked Authority, validator count, and chain behavior."
  ),
  bnbStaking: source(
    "BNB Chain Staking",
    "BNB Chain",
    "https://www.bnbchain.org/en/bnb-staking",
    "Official staking page for total BNB staked, validator set count, and staking participation."
  ),
  solanaFoundation: source(
    "Solana Foundation",
    "Solana Foundation",
    "https://solana.org/",
    "Official foundation page for decentralization, adoption, security, grants, and ecosystem role."
  ),
  solanaStaking: source(
    "Solana staking",
    "Solana",
    "https://solana.com/staking",
    "Official staking page for inflation schedule, staking role, and network participation framing."
  ),
  solanaStateFeb2026: source(
    "Solana Ecosystem Report: February 2026",
    "Solana",
    "https://solana.com/news/state-of-solana-february-2026",
    "Official ecosystem report used for public-company SOL exposure and ecosystem context."
  ),
  solanaValidators: source(
    "Solana Validator Decentralization Report",
    "Validators Solutions",
    "https://validators.solutions/en/validators/decentralization/",
    "Current validator and stake-distribution dashboard for active stake, superminority, and Nakamoto coefficient."
  ),
  coinbaseSolanaValidator: source(
    "Q1 2026 Solana Validator Performance Report",
    "Coinbase",
    "https://www.coinbase.com/blog/q1-2026-solana-validator-performance-report",
    "Validator operator report for Coinbase SOL stake, share of total staked SOL, APY comparison, and validator footprint."
  ),
  rippleXrp: source(
    "XRP digital asset",
    "Ripple",
    "https://ripple.com/xrp/",
    "Official Ripple source for XRP distribution, escrow amounts, and quarterly reporting process."
  ),
  rippleQ12025: source(
    "Q1 2025 XRP Markets Report",
    "Ripple",
    "https://ripple.com/insights/q1-2025-xrp-markets-report/",
    "Ripple report explaining XRP holdings categories and quarterly reporting practice."
  ),
  xrplEscrow: source(
    "An Explanation of Ripple's XRP Escrow",
    "XRP Ledger",
    "https://xrpl.org/blog/2017/an-explanation-of-ripples-xrp-escrow",
    "XRPL source for escrow mechanics and the original 55 billion XRP lockup context."
  ),
  secRippleSettlement: source(
    "Statement on the Agency's Settlement with Ripple Labs, Inc.",
    "SEC",
    "https://www.sec.gov/newsroom/speeches-statements/crenshaw-statement-ripple-050825",
    "Regulatory source for the 2025 settlement context and returned escrowed funds reference."
  ),
  xrplDocs: source(
    "XRP Ledger documentation",
    "XRP Ledger",
    "https://xrpl.org/docs.html",
    "Official XRPL documentation for consensus, escrow, amendments, validators, and network features."
  ),
  dogecoinFoundationTrailmap: source(
    "Dogecoin Trailmap: Prologue",
    "Dogecoin Foundation",
    "https://foundation.dogecoin.com/trailmap/prologue/",
    "Foundation source for Dogecoin's community-led development model and stewardship approach."
  ),
  dogecoinHome: source(
    "Dogecoin",
    "Dogecoin",
    "https://dogecoin.com/",
    "Official Dogecoin page for community framing, documentation links, and supply questions."
  ),
  dogecoinFaq: source(
    "Dogecoin Core FAQ",
    "Dogecoin Core",
    "https://github.com/dogecoin/dogecoin/blob/master/doc/FAQ.md",
    "Protocol source for Dogecoin block time, proof-of-work design, and fixed 10,000 DOGE block reward."
  ),
  teslaDogecoin: source(
    "Dogecoin",
    "Tesla Support",
    "https://www.tesla.com/support/dogecoin",
    "Official Tesla support page for eligible product pricing, payment timing, and DOGE checkout behavior."
  ),
  dogecoinBitinfocharts: source(
    "Dogecoin network stats",
    "BitInfoCharts",
    "https://bitinfocharts.com/dogecoin/",
    "Explorer-style source for Dogecoin block reward, daily reward, block count, hash rate, and network activity."
  ),
  dogecoinRichList: source(
    "Top 100 richest Dogecoin addresses",
    "BitInfoCharts",
    "https://bitinfocharts.com/top-100-richest-dogecoin-addresses.html",
    "Explorer-style rich-list source used only with labeling limitations because exchange wallet attribution can change."
  ),
  cardanoSupply: source(
    "Cardano Supply Summary",
    "Cardano",
    "https://cardano.org/insights/supply/summary/",
    "Official Cardano supply source for treasury balance, withdrawals, additions, and supply changes."
  ),
  cardanoReports: source(
    "Reports",
    "Cardano Foundation",
    "https://cardanofoundation.org/reports",
    "Official foundation report hub for financial resources, governance work, and audited reporting trail."
  ),
  cardanoReport2025: source(
    "Activity and Financial Insights Report 2025",
    "Cardano Foundation",
    "https://cardanofoundation.org/activity-financial-insights-report-2025.pdf",
    "Foundation report for 2025 resource allocation, on-chain financial reporting, and Cardano Summit revenue."
  ),
  cardanoStakePool: source(
    "Run a Cardano Stake Pool",
    "Cardano",
    "https://cardano.org/stake-pool-operation/",
    "Official Cardano staking source for delegation, stake-pool operation, and ADA network participation."
  ),
  cardanoMay2026: source(
    "Cardano Foundation Monthly Update: May 2026",
    "Cardano Foundation",
    "https://cardanofoundation.org/blog/may-2026-activities",
    "Foundation update for 2026 governance proposal outcomes and ecosystem activity."
  ),
  tronScanHome: source(
    "TRONSCAN",
    "TRONSCAN",
    "https://tronscan.org/",
    "Primary TRON explorer for accounts, transactions, TVL, and on-chain activity."
  ),
  tronQ12026: source(
    "TRON Q1 2026 Quarterly Report",
    "TRON DAO",
    "https://trondao.org/research/tron-q1-2026-quarterly-report",
    "Official TRON DAO report for stablecoin supply, settlement volume, TRX mint/burn, and ecosystem data."
  ),
  tronQ12026Pdf: source(
    "TRON Q1 2026 Quarterly Report PDF",
    "TRON DAO",
    "https://trondao.org/pdfs/q1-2026-quarterly-report-pdf.pdf",
    "Report PDF used for Q1 2026 stablecoin supply and stablecoin settlement figures."
  ),
  tronEconomicModel: source(
    "TRON economic model",
    "TRON Developer",
    "https://developers.tron.network/docs/tron-economic-model",
    "Developer source for TRX burn mechanics, bandwidth, energy, and resource model."
  ),
  tronStablecoinOverview: source(
    "Stablecoin Overview",
    "TRONSCAN",
    "https://tronscan.org/data/analytics/stablecoin/overview",
    "TRONSCAN stablecoin dashboard for current stablecoin supply and token events."
  ),
  tonHome: source(
    "The Open Network",
    "The Open Network",
    "https://ton.org/",
    "Official TON page for validator count, node count, smart contracts, active wallets, and 24-hour transactions."
  ),
  tonStat: source(
    "TON Stat",
    "TonStat",
    "https://tonstat.com/",
    "TON statistics dashboard for transactions, fees, wallets, validators, DeFi, and network metrics."
  ),
  tonLocker: source(
    "The Locker or TON Believers Fund",
    "The Open Network Community",
    "https://blog.ton.cat/locker/",
    "Community source for the TON Believers Fund lockup design, cliff, and vesting structure."
  ),
  tonFoundation: source(
    "TON Foundation",
    "TON Foundation",
    "https://ton.foundation/",
    "Foundation source for ecosystem stewardship, builders, grants, and TON adoption work."
  ),
};

export const assetDeepBatch2Enhancements: Record<string, AssetProfileEnhancement> = {
  ethereum: {
    lastReviewed: retrievedAt,
    sources: [
      batchSources.ethereumDocs,
      batchSources.ethereumFoundationTreasuryPolicy,
      batchSources.ethereumFoundationReport2024,
      batchSources.blackrockEtha,
      batchSources.grayscaleEthe,
      batchSources.lidoHome,
    ],
    drivers: [
      { title: "Base-chain settlement demand", detail: "Ethereum gains strength when users and applications need secure settlement on the base chain rather than only cheaper execution elsewhere." },
      { title: "Staking and liquid supply", detail: "Validator deposits, withdrawals, liquid staking, and ETF staking policies change how much ETH remains easy to trade." },
      { title: "Layer-2 activity", detail: "Scaling networks can expand Ethereum's reach while shifting fees away from the base chain, so students must read both layers together." },
      { title: "ETF and trust demand", detail: "ETHA, ETHE, and similar products create regulated access channels that can pull traditional market flow into ETH exposure." },
      { title: "Fee burn versus issuance", detail: "ETH supply pressure changes when fees, burn, validator rewards, and staking participation move together." },
      { title: "ETH/BTC rotation", detail: "Relative strength against Bitcoin shows whether the market wants application-chain exposure or only reserve crypto exposure." },
    ],
    publicRisks: [
      { risk: "Weak fee demand", watch: "Low fees can reduce the burn story and make ETH look less productive." },
      { risk: "Staking concentration", watch: "Large liquid-staking or custodian footprints can become governance and validator-risk debates." },
      { risk: "Layer-2 value split", watch: "Activity can grow while base-chain fee capture stays muted." },
      { risk: "Smart-contract and bridge loss", watch: "Major DeFi or bridge incidents can hurt Ethereum ecosystem confidence." },
    ],
    lab: {
      deskBrief:
        "Ethereum is studied as a settlement economy, staking asset, application base, and institutional access market. The paid desk links ETH price to validator supply, fee burn, layer-2 usage, ETF demand, DeFi liquidity, and ETH/BTC rotation.",
      researchQuestion:
        "Is ETH being repriced because Ethereum settlement demand improved, staking supply tightened, ETF access expanded, layer-2 activity grew, or crypto capital rotated beyond Bitcoin?",
      operatingModel:
        "Start with ETH/BTC, then read base-chain fees, validator deposits, withdrawals, liquid-staking concentration, layer-2 activity, DeFi liquidity, ETF products, and derivatives depth. ETH is weaker when only price rises while network and flow evidence stays thin.",
      participants: [
        { name: "Ethereum Foundation", role: "Protocol stewardship and research funder", whyItMatters: "The Foundation funds research, client work, grants, and treasury management that support Ethereum's long-term technical direction.", sourceBasis: "Ethereum Foundation treasury policy and 2024 report" },
        { name: "Vitalik Buterin", role: "Co-founder and public research voice", whyItMatters: "Vitalik's writing helps shape roadmap debates around scaling, decentralization, privacy, and protocol priorities.", sourceBasis: "Ethereum.org and Ethereum Foundation publications" },
        { name: "Ethereum validators", role: "Consensus security layer", whyItMatters: "Validators secure the chain, earn protocol rewards, and create staking supply dynamics students must understand.", sourceBasis: "Ethereum documentation and staking references" },
        { name: "Lido DAO", role: "Liquid staking infrastructure", whyItMatters: "Lido's stETH footprint makes it a major lens for staking concentration, liquidity, and DeFi collateral behavior.", sourceBasis: "Lido official staking metrics" },
        { name: "BlackRock iShares Ethereum Trust ETF", role: "Institutional ETH access product", whyItMatters: "ETHA gives traditional-market investors a regulated ETH exposure channel and publishes daily fund metrics.", sourceBasis: "BlackRock ETHA issuer page" },
        { name: "Grayscale Ethereum Staking ETF", role: "ETH trust and staking product", whyItMatters: "ETHE publishes total Ether, staking percentage, custodian, and AUM, making it useful for institutional-flow study.", sourceBasis: "Grayscale ETHE official page" },
        { name: "Coinbase Custody Trust Company", role: "Digital asset custodian", whyItMatters: "Coinbase Custody is listed as ETHE custodian, so custody concentration and service-provider risk belong in the ETH lesson.", sourceBasis: "Grayscale ETHE custodian disclosure" },
      ],
      historicalEvents: [
        { year: "2013-2014", title: "Ethereum is proposed and funded", detail: "The smart-contract network concept moves from whitepaper to public funding and builder activity." },
        { year: "2015", title: "Ethereum mainnet launches", detail: "ETH begins live network operation and becomes the leading programmable blockchain asset." },
        { year: "2016", title: "DAO exploit and chain split", detail: "The Ethereum and Ethereum Classic split creates a permanent governance and immutability lesson." },
        { year: "2020", title: "DeFi cycle expands", detail: "Lending, DEXs, collateral, and stablecoins make Ethereum the center of on-chain finance." },
        { year: "2022", title: "The Merge", detail: "Ethereum moves to proof of stake, changing issuance, security, and validator economics." },
        { year: "2024", title: "US spot Ether ETPs list", detail: "Traditional market access grows through ETF and trust products." },
        { year: "2025-2026", title: "Foundation treasury policy evolves", detail: "The EF publishes a clearer treasury-management framework around operating buffer, ETH sales, and DeFi use." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "ETH often follows BTC but can outperform when application demand expands.", learnerNote: "ETH/BTC is the cleanest first comparison for crypto rotation." },
        { market: "Layer-2 networks", relationship: "Layer-2 growth can strengthen Ethereum reach while changing base-chain fee capture.", learnerNote: "Study activity and economics together." },
        { market: "Stablecoins and DeFi", relationship: "Ethereum liquidity rises when stablecoin settlement and DeFi collateral use expand.", learnerNote: "Usage quality matters more than headlines." },
      ],
      riskMap: [
        { risk: "Validator concentration", watch: "Large staking pools, custodians, or ETF staking can raise concentration concerns." },
        { risk: "Fee-burn weakness", watch: "ETH supply narratives weaken when blockspace demand and burn are low." },
        { risk: "Layer-2 fragmentation", watch: "Activity can scatter across networks and reduce simple base-chain readings." },
        { risk: "Smart-contract loss", watch: "A major DeFi, bridge, or oracle event can hurt ecosystem trust." },
        { risk: "ETF outflow pressure", watch: "Fund redemptions can create traditional-market selling pressure during weak crypto regimes." },
      ],
      researchRoutine: [
        "Compare ETH against BTC and the broad smart-contract basket.",
        "Check base-chain fees, burn, validator deposits, withdrawals, and staking concentration.",
        "Review layer-2 activity, bridge usage, stablecoin settlement, and DeFi liquidity.",
        "Read ETF and trust data from issuer pages before writing an institutional-flow note.",
        "Review funding, open interest, basis, and exchange liquidity depth before calling a move durable.",
      ],
      relatedLessons: ["Level 8 On-Chain Analysis", "Level 8 DeFi Protocols", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Network Adoption Trend", "On-Chain + Technical Confluence", "Funding + Basis + OI Composite"],
      deepDive: {
        identity: [
          { title: "Programmable settlement network", detail: "Ethereum is not only a token transfer chain. It is a programmable settlement network where ETH pays for execution, secures consensus, and anchors DeFi and token activity." },
          { title: "Productive asset debate", detail: "After proof of stake, ETH is often studied through staking rewards, fee burn, and network usage rather than only scarcity." },
          { title: "Base layer plus scaling layers", detail: "Students must separate Ethereum base-chain settlement from layer-2 execution because both can support ETH while affecting fees differently." },
        ],
        authorityOrFounders: [
          { title: "Foundation and client ecosystem", detail: "The Ethereum Foundation funds research and public goods, but Ethereum is operated by many clients, validators, developers, and application teams." },
          { title: "Vitalik Buterin and early builders", detail: "Vitalik Buterin remains an important research voice, while early and current teams across clients and applications shape implementation." },
          { title: "Validator governance reality", detail: "Ethereum governance is social and technical, so students should not treat one foundation, company, or founder as a direct controller." },
        ],
        holderExposureMap: [
          exposure({
            entityName: "BlackRock iShares Ethereum Trust ETF",
            entityType: "Spot Ether ETP",
            assetOrInstrument: "ETHA net assets",
            amount: "4,884,913,163",
            unit: "USD",
            exposureType: "Institutional Ether access product",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt,
            sourceTitle: batchSources.blackrockEtha.title,
            sourcePublisher: batchSources.blackrockEtha.publisher,
            sourceUrl: batchSources.blackrockEtha.url,
            freshnessStatus: "current",
            whyItMatters: "ETHA is a major regulated access channel, so its net assets and volume help learners separate ETF-led demand from native crypto venue demand.",
          }),
          exposure({
            entityName: "BlackRock iShares Ethereum Trust ETF",
            entityType: "Spot Ether ETP",
            assetOrInstrument: "ETHA basket Ether amount",
            amount: "301.82",
            unit: "ETH per basket",
            exposureType: "Creation and redemption basket reference",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt,
            sourceTitle: batchSources.blackrockEtha.title,
            sourcePublisher: batchSources.blackrockEtha.publisher,
            sourceUrl: batchSources.blackrockEtha.url,
            freshnessStatus: "current",
            whyItMatters: "Basket data helps students understand how ETF share creation connects to underlying ETH exposure without pretending every shareholder owns direct ETH.",
          }),
          exposure({
            entityName: "Grayscale Ethereum Staking ETF",
            entityType: "Ether ETP",
            assetOrInstrument: "Total Ether in fund",
            amount: "880,795.2601",
            unit: "ETH",
            estimatedUsdValue: "2,703,627,475 USD AUM",
            exposureType: "Trust Ether holding",
            asOfDate: "2026-01-09",
            sourcePublishedAt: "2026-01-09",
            retrievedAt,
            sourceTitle: batchSources.grayscaleEthe.title,
            sourcePublisher: batchSources.grayscaleEthe.publisher,
            sourceUrl: batchSources.grayscaleEthe.url,
            freshnessStatus: "stale",
            whyItMatters: "ETHE remains a large institutional product, but its page data is older than 30 days, so students must label the amount as stale until refreshed.",
            limitations: "Use as a stale issuer reference only; do not compare directly with current ETF pages without refreshing the source date.",
          }),
          exposure({
            entityName: "Lido DAO",
            entityType: "Liquid staking protocol",
            assetOrInstrument: "ETH staked through Lido",
            amount: "9,182,978",
            unit: "ETH",
            estimatedUsdValue: "17,305,132,855 USD TVL",
            exposureType: "Liquid staking exposure",
            asOfDate: "2026-07-15",
            retrievedAt,
            sourceTitle: batchSources.lidoHome.title,
            sourcePublisher: batchSources.lidoHome.publisher,
            sourceUrl: batchSources.lidoHome.url,
            freshnessStatus: "current",
            whyItMatters: "Lido's size affects ETH liquidity, DeFi collateral behavior, staking concentration debate, and how students read validator supply.",
          }),
          exposure({
            entityName: "Ethereum Foundation",
            entityType: "Protocol foundation",
            assetOrInstrument: "Foundation treasury",
            amount: "970.2",
            unit: "million USD total treasury",
            exposureType: "Historical foundation treasury reference",
            asOfDate: "2024-10-31",
            sourcePublishedAt: "2024-11-08",
            retrievedAt,
            sourceTitle: batchSources.ethereumFoundationReport2024.title,
            sourcePublisher: batchSources.ethereumFoundationReport2024.publisher,
            sourceUrl: batchSources.ethereumFoundationReport2024.url,
            freshnessStatus: "historical",
            whyItMatters: "The Foundation's treasury explains grant capacity and ETH sales context, but the amount is a historical anchor rather than a current holding.",
            limitations: "Use the 2025 treasury policy for current policy logic; use the 2024 report only as the latest explicit amount found in this update.",
          }),
        ],
        marketStructure: [
          { title: "Spot and ETF layer", detail: "ETH trades on crypto venues while ETF products create a separate traditional-market access channel." },
          { title: "Staking layer", detail: "Validators, liquid staking, and ETF staking policies change liquid supply and concentration risk." },
          { title: "Application layer", detail: "DeFi, stablecoins, NFTs, and tokenized assets create demand for Ethereum settlement and data." },
          { title: "Layer-2 execution layer", detail: "Rollups and scaling networks expand usage while changing where fees and activity appear." },
          { title: "Derivatives layer", detail: "Perps, futures, options, funding, and basis can lead short-term moves away from network fundamentals." },
        ],
        driverRegimes: [
          { title: "ETF accumulation regime", detail: "ETF inflows can support ETH even when native venue activity is quiet, but issuer data must confirm the flow." },
          { title: "Application expansion regime", detail: "ETH is stronger when DeFi, stablecoins, and layer-2 activity expand together." },
          { title: "Fee weakness regime", detail: "ETH can lag when low fees reduce burn and investors question the productive-asset story." },
          { title: "Leverage unwind regime", detail: "ETH can drop faster than network metrics suggest when funding and open interest are crowded." },
        ],
        sourceBackedClaims: [
          { title: "ETHA current fund scale", detail: "BlackRock reported ETHA net assets of $4.884 billion and 366.4 million shares outstanding as of July 13, 2026." },
          { title: "ETHE stale but detailed holding", detail: "Grayscale reported 880,795.2601 Ether in ETHE and 74.11% staked as of January 9, 2026." },
          { title: "Lido staking footprint", detail: "Lido reported 9,182,978 ETH and $17.305 billion TVL on the checked page." },
          { title: "Foundation policy model", detail: "The EF treasury policy sets operating-buffer logic around annual opex and years of reserve runway." },
        ],
        reviewNotes: [
          "Never teach ETH as only a Bitcoin follower; always compare ETH/BTC with network usage and staking evidence.",
          "Mark stale ETF or foundation amounts clearly when issuer pages have not updated within the current month.",
          "Use spread percentage, slippage, liquidity depth, funding, open interest, staking, and bridge-risk language for ETH.",
        ],
      },
    },
  },
  tether: {
    lastReviewed: retrievedAt,
    sources: [batchSources.tetherTransparency, batchSources.tetherQ12026, batchSources.tronUsdt, batchSources.tronStablecoinOverview],
    drivers: [
      { title: "Reserve credibility", detail: "USDT depends on market confidence that reserve assets can meet redemptions during stress." },
      { title: "Treasury yield income", detail: "Large Treasury exposure means rate levels can affect Tether's income and reserve-buffer discussion." },
      { title: "TRON settlement demand", detail: "A large share of USDT activity occurs on TRON, so chain-specific costs and liquidity matter." },
      { title: "Exchange liquidity", detail: "USDT is widely used as a trading quote asset, making exchange depth central to its market role." },
      { title: "Regulatory pressure", detail: "Stablecoin rules, issuer licensing, and reserve requirements can reshape USDT demand by region." },
      { title: "Redemption confidence", detail: "Peg trust can weaken if users question redemption access, reserve composition, or banking relationships." },
    ],
    publicRisks: [
      { risk: "Reserve opacity debate", watch: "Attestations are not the same as a full audit, so students must read source limits." },
      { risk: "Peg stress", watch: "Large redemptions or exchange stress can pressure the one-dollar trading range." },
      { risk: "Chain concentration", watch: "Heavy TRON use creates network and venue-specific dependency." },
      { risk: "Regulatory access", watch: "Regional rules can change who can issue, hold, or redeem stablecoins." },
    ],
    lab: {
      deskBrief:
        "Tether is studied as the dominant offshore-style crypto dollar. The paid desk reads USDT through reserve reports, Treasury exposure, excess reserves, TRON settlement, exchange liquidity, redemption access, and regulatory pressure.",
      researchQuestion:
        "Is USDT trading normally because reserve confidence is intact, exchange demand is stable, TRON settlement is healthy, and redemption access remains trusted?",
      operatingModel:
        "Treat USDT as market plumbing, not a growth token. Check reserve report dates, assets versus liabilities, Treasury exposure, chain supply, exchange depth, redemption commentary, and any legal or banking pressure before interpreting peg behavior.",
      participants: [
        { name: "Tether International", role: "USDT issuer", whyItMatters: "The issuer controls reserve reporting, token issuance, redemptions, and stablecoin policy communication.", sourceBasis: "Tether transparency page and reserve-report trail" },
        { name: "BDO Italia", role: "Attestation provider", whyItMatters: "Tether reserve reports have been tied to BDO assurance work, which students must distinguish from a full audit.", sourceBasis: "Tether reserve-report references" },
        { name: "Cantor Fitzgerald", role: "Treasury and custody relationship reference", whyItMatters: "Tether's Treasury-heavy reserve story makes custody and securities relationships important to monitor.", sourceBasis: "Public reserve and custody reporting trail" },
        { name: "TRON Network", role: "Major USDT settlement rail", whyItMatters: "TRON carries a large USDT footprint, so network fees, reliability, and transfers affect USDT usage.", sourceBasis: "TRONSCAN USDT and stablecoin pages" },
        { name: "Bitfinex", role: "Affiliated exchange history", whyItMatters: "Tether's corporate history is closely tied to Bitfinex, which belongs in the risk and governance lesson.", sourceBasis: "Tether historical and legal reporting trail" },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "USDT's value in crypto markets comes from deep spot and derivatives liquidity across major venues.", sourceBasis: "Market-structure role supported by Tether and TRON settlement data" },
      ],
      historicalEvents: [
        { year: "2014", title: "USDT launches", detail: "Tether begins as a tokenized dollar product used for crypto settlement." },
        { year: "2017", title: "Reserve questions intensify", detail: "Market debate grows around how USDT is backed and how backing is verified." },
        { year: "2021", title: "Regulatory settlements", detail: "US authorities penalize past reserve claims, making transparency a central USDT lesson." },
        { year: "2022", title: "Stablecoin stress test", detail: "The Terra collapse makes reserve quality and redemption design central across stablecoins." },
        { year: "2024-2026", title: "Treasury-heavy reserve scale grows", detail: "Tether becomes a major holder of US Treasury exposure according to public reserve reporting." },
        { year: "2026", title: "Q1 reserve report shows large excess buffer", detail: "Reported assets exceed liabilities by more than $8 billion in the Q1 2026 reserve discussion." },
      ],
      correlations: [
        { market: "Bitcoin and crypto spot markets", relationship: "USDT liquidity often supports crypto trading pairs.", learnerNote: "A peg issue can affect broad crypto liquidity." },
        { market: "US Treasury yields", relationship: "Treasury returns influence reserve income and issuer profitability.", learnerNote: "Stablecoin issuers can benefit from high short-term rates." },
        { market: "TRON", relationship: "TRON's stablecoin use is deeply tied to USDT transfers.", learnerNote: "Read chain data and issuer data together." },
      ],
      riskMap: [
        { risk: "Attestation limit", watch: "A reserve attestation is date-specific and narrower than a full audit." },
        { risk: "Redemption concentration", watch: "Not every holder has direct issuer redemption access, so venue liquidity matters." },
        { risk: "Volatile reserve components", watch: "Gold and Bitcoin reserve exposure can change buffer quality under stress." },
        { risk: "Regulatory exclusion", watch: "Stablecoin laws can affect exchange listings, institutional access, and issuer operations." },
        { risk: "Chain and exchange dependency", watch: "Heavy use on specific chains or venues can create operational bottlenecks." },
      ],
      researchRoutine: [
        "Check USDT peg behavior across major exchanges and chains.",
        "Review the latest Tether reserve report, assets, liabilities, and excess reserve buffer.",
        "Compare TRON USDT supply with Ethereum and other chain footprints.",
        "Scan redemption, banking, regulatory, and exchange-liquidity news from primary sources.",
        "Classify any USDT move as normal liquidity, venue stress, chain stress, or reserve-confidence stress.",
      ],
      relatedLessons: ["Level 5 Crypto Liquidity", "Level 8 Stablecoin Mechanics", "Level 9 Counterparty Risk"],
      relatedStrategies: ["Stablecoin Peg Stress Monitor", "Crypto Liquidity Risk Assessment", "Funding + Basis + OI Composite"],
      deepDive: {
        identity: [
          { title: "Crypto dollar rail", detail: "USDT is a tokenized dollar used heavily for exchange settlement, cross-venue liquidity, and stable quoting inside crypto markets." },
          { title: "Issuer-backed stablecoin", detail: "USDT is not decentralized money. It relies on Tether's reserve assets, redemption rules, banking access, and legal structure." },
          { title: "Infrastructure before investment", detail: "Students should read USDT as liquidity infrastructure and counterparty exposure rather than a token designed to appreciate." },
        ],
        authorityOrFounders: [
          { title: "Issuer authority", detail: "Tether controls issuance, redemption, reserve reporting, and compliance decisions around USDT." },
          { title: "Reserve-report authority", detail: "Reserve discussions depend on issuer transparency pages, attestation reports, and date-specific disclosures." },
          { title: "Venue and chain authority", detail: "Exchange support and chain infrastructure strongly affect practical USDT usefulness." },
        ],
        holderExposureMap: [
          exposure({
            entityName: "Tether International",
            entityType: "Stablecoin issuer",
            assetOrInstrument: "Reported total assets",
            amount: "191.7+",
            unit: "billion USD",
            exposureType: "Reserve asset base",
            asOfDate: "2026-03-31",
            sourcePublishedAt: "2026-Q1 reserve discussion",
            retrievedAt,
            sourceTitle: batchSources.tetherQ12026.title,
            sourcePublisher: batchSources.tetherQ12026.publisher,
            sourceUrl: batchSources.tetherQ12026.url,
            freshnessStatus: "recent",
            whyItMatters: "Total assets are the top-line reserve base students compare against issued-token liabilities when studying stablecoin backing.",
            limitations: "Use with the official Tether transparency page because the detailed figures are summarized through a news report rather than extracted from a live official PDF in this run.",
          }),
          exposure({
            entityName: "Tether International",
            entityType: "Stablecoin issuer",
            assetOrInstrument: "Reported liabilities",
            amount: "183.5",
            unit: "billion USD",
            exposureType: "Issued-token and liability base",
            asOfDate: "2026-03-31",
            retrievedAt,
            sourceTitle: batchSources.tetherQ12026.title,
            sourcePublisher: batchSources.tetherQ12026.publisher,
            sourceUrl: batchSources.tetherQ12026.url,
            freshnessStatus: "recent",
            whyItMatters: "Liabilities show the claim base that reserve assets must cover during normal redemptions or market stress.",
            limitations: "Treat as a Q1 2026 reserve snapshot, not a live daily amount.",
          }),
          exposure({
            entityName: "Tether International",
            entityType: "Stablecoin issuer",
            assetOrInstrument: "Reported US Treasury exposure",
            amount: "141",
            unit: "billion USD",
            exposureType: "Reserve asset allocation",
            asOfDate: "2026-03-31",
            retrievedAt,
            sourceTitle: batchSources.tetherQ12026.title,
            sourcePublisher: batchSources.tetherQ12026.publisher,
            sourceUrl: batchSources.tetherQ12026.url,
            freshnessStatus: "recent",
            whyItMatters: "Treasury exposure links USDT to short-term rates, liquidity, and reserve-quality discussion.",
            limitations: "The source summarizes direct and indirect exposure; do not treat it as a security-by-security holdings file.",
          }),
          exposure({
            entityName: "Tether International",
            entityType: "Stablecoin issuer",
            assetOrInstrument: "Reported gold reserve exposure",
            amount: "20",
            unit: "billion USD",
            exposureType: "Reserve asset allocation",
            asOfDate: "2026-03-31",
            retrievedAt,
            sourceTitle: batchSources.tetherQ12026.title,
            sourcePublisher: batchSources.tetherQ12026.publisher,
            sourceUrl: batchSources.tetherQ12026.url,
            freshnessStatus: "recent",
            whyItMatters: "Gold exposure can strengthen or weaken the reserve-buffer discussion depending on gold volatility and liquidity conditions.",
            limitations: "Use as an aggregate reserve category, not a bar-list or custodian-level verification.",
          }),
          exposure({
            entityName: "TRON USDT contract",
            entityType: "Stablecoin contract",
            assetOrInstrument: "USDT on TRON",
            amount: "90,289,221,400.885127",
            unit: "USDT total supply",
            exposureType: "Chain-specific stablecoin supply",
            asOfDate: "2026-07-15",
            retrievedAt,
            sourceTitle: batchSources.tronUsdt.title,
            sourcePublisher: batchSources.tronUsdt.publisher,
            sourceUrl: batchSources.tronUsdt.url,
            freshnessStatus: "current",
            whyItMatters: "TRON's USDT supply shows why USDT research must include chain-level settlement, transfer costs, and operational risk.",
          }),
        ],
        marketStructure: [
          { title: "Issuer and reserve layer", detail: "Tether issues and redeems USDT against reserves, with transparency and attestation pages shaping confidence." },
          { title: "Exchange liquidity layer", detail: "USDT is a major quote asset across spot and derivatives venues." },
          { title: "Chain settlement layer", detail: "TRON, Ethereum, and other networks carry USDT balances with different fees and operational risks." },
          { title: "Regulatory layer", detail: "Stablecoin law can affect access, reserve design, and institutional acceptance." },
        ],
        driverRegimes: [
          { title: "Normal liquidity regime", detail: "USDT trades near one dollar when reserves, redemptions, and exchange liquidity are trusted." },
          { title: "Peg-stress regime", detail: "Discounts can appear when holders prefer alternative dollars or question venue redemption paths." },
          { title: "Rate-income regime", detail: "High short-term yields can increase issuer income when Treasury exposure is large." },
        ],
        sourceBackedClaims: [
          { title: "Official backing statement", detail: "Tether states that tokens are pegged one-to-one with a matching fiat currency and backed by reserves." },
          { title: "Q1 reserve scale", detail: "Q1 2026 reporting described assets above $191.7 billion and liabilities around $183.5 billion." },
          { title: "Treasury exposure", detail: "The same reserve discussion cited roughly $141 billion in U.S. Treasury exposure." },
          { title: "TRON footprint", detail: "TRONSCAN showed more than 90.289 billion USDT total supply on the TRON USDT contract during review." },
        ],
        reviewNotes: [
          "Do not call USDT risk-free; teach reserve, redemption, venue, chain, and legal layers separately.",
          "Label reserve figures with source dates because stablecoin supply and assets change quickly.",
          "Use crypto liquidity language: spread percentage, slippage, liquidity depth, chain fees, exchange depth, redemption access, and custody risk.",
        ],
      },
    },
  },
  "usd-coin": {
    lastReviewed: retrievedAt,
    sources: [batchSources.circleTransparency, batchSources.circleMay2026Attestation, batchSources.circleReserveFund, batchSources.circleUsdc],
    drivers: [
      { title: "Reserve transparency", detail: "USDC demand is heavily tied to confidence in cash, Treasury, repo, and assurance reporting." },
      { title: "US regulatory position", detail: "Circle's US-centered compliance posture can support institutional use but also raises policy sensitivity." },
      { title: "On-chain issuance and redemption", detail: "Mint and burn flows show whether users are entering or leaving USDC liquidity." },
      { title: "Chain distribution", detail: "USDC exists across many approved blockchains, so chain-level activity affects usage quality." },
      { title: "Short-term rate environment", detail: "Treasury and repo yields affect reserve income and issuer economics." },
      { title: "Stablecoin competition", detail: "USDC competes with USDT and newer regulated stablecoins for exchange, DeFi, and payment use." },
    ],
    publicRisks: [
      { risk: "Banking stress", watch: "USDC has shown that bank exposure can create temporary peg pressure." },
      { risk: "Regulatory change", watch: "Rules can help regulated access while changing issuer costs and allowed reserve design." },
      { risk: "Chain support limits", watch: "Some chains can have issuance, redemption, or support restrictions." },
      { risk: "Reserve report timing", watch: "Weekly and monthly data need date checks before being treated as current." },
    ],
    lab: {
      deskBrief:
        "USDC is studied as a regulated dollar stablecoin with public reserve reports, BlackRock-managed fund exposure, multi-chain issuance, and institutional payments use. The paid desk separates reserve facts from exchange liquidity and chain usage.",
      researchQuestion:
        "Is USDC demand rising because reserve confidence improved, regulated access expanded, chain activity grew, or users are rotating from other stablecoin rails?",
      operatingModel:
        "Read USDC from the reserve report first: USDC in circulation, reserve assets, Treasury securities, repo, cash, approved blockchains, and access-denied tokens. Then compare on-chain distribution, exchange depth, DeFi use, and redemption context.",
      participants: [
        { name: "Circle Internet Group", role: "USDC issuer group", whyItMatters: "Circle controls issuance, reserve reporting, redemption policy, and institutional positioning for USDC.", sourceBasis: "Circle transparency hub and May 2026 examination report" },
        { name: "Circle Internet Financial, LLC", role: "US issuer entity", whyItMatters: "The May 2026 report identifies Circle entities responsible for issuing and redeeming USDC.", sourceBasis: "USDC May 2026 examination report" },
        { name: "Circle Internet Financial Europe SAS", role: "European issuer entity", whyItMatters: "European issuance and redemption matter for USDC's global regulatory footprint.", sourceBasis: "USDC May 2026 examination report" },
        { name: "Deloitte", role: "Assurance provider", whyItMatters: "The monthly report gives an independent accountant's view of whether reserve assets meet or exceed USDC in circulation.", sourceBasis: "USDC May 2026 examination report" },
        { name: "BlackRock", role: "Circle Reserve Fund manager", whyItMatters: "The Circle Reserve Fund is a major reserve vehicle, and BlackRock publishes fund size, liquidity, and yield data.", sourceBasis: "BlackRock Circle Reserve Fund page" },
        { name: "BNY Mellon", role: "Fund service and source reference", whyItMatters: "BlackRock lists BNY Mellon in the Circle Reserve Fund source line, making it part of the reserve-fund infrastructure.", sourceBasis: "BlackRock Circle Reserve Fund page" },
      ],
      historicalEvents: [
        { year: "2018", title: "USDC launches", detail: "Circle and partners introduce a regulated dollar stablecoin for blockchain settlement." },
        { year: "2020-2021", title: "DeFi and exchange adoption expands", detail: "USDC becomes a major collateral and payment asset across DeFi and exchanges." },
        { year: "2022", title: "Reserve disclosure matures", detail: "Stablecoin market stress increases focus on high-quality reserves and reports." },
        { year: "2023", title: "SVB stress tests the peg", detail: "USDC temporarily depegs after Silicon Valley Bank exposure becomes public, then recovers." },
        { year: "2024-2026", title: "Multi-chain approved-blockchain list grows", detail: "Circle expands supported networks while documenting tokens allowed but not issued and restricted tokens." },
        { year: "2026", title: "May reserve report shows more assets than circulation", detail: "Circle reports $75.961 billion in reserve assets against $75.885 billion USDC in circulation as of May 29, 2026." },
      ],
      correlations: [
        { market: "US Treasury bills and repo", relationship: "USDC reserves use short-term dollar assets, so rates affect reserve income.", learnerNote: "Stablecoin reserve quality and yield are linked." },
        { market: "Ethereum and layer-2 networks", relationship: "USDC settlement depends on supported-chain usage.", learnerNote: "Track chain distribution, not only total supply." },
        { market: "USDT", relationship: "USDC often gains or loses share relative to USDT depending on regulation, exchange access, and user preference.", learnerNote: "Stablecoins compete as liquidity rails." },
      ],
      riskMap: [
        { risk: "Banking exposure", watch: "Cash held at financial institutions can create headline and liquidity risk during bank stress." },
        { risk: "Reserve timing mismatch", watch: "Monthly assurance is date-specific and weekly updates still need freshness checks." },
        { risk: "Regulatory cost", watch: "A stronger compliance profile can raise costs or limit some offshore use cases." },
        { risk: "Chain incident", watch: "Supported blockchains can create operational risk even if Circle reserves remain intact." },
        { risk: "Stablecoin share loss", watch: "USDC can lose market share if venues, apps, or payment partners prefer another dollar token." },
      ],
      researchRoutine: [
        "Start with the latest Circle reserve report and confirm report dates.",
        "Compare USDC in circulation against reserve assets and reserve composition.",
        "Check Circle Reserve Fund size, Treasury securities, repo, and cash lines.",
        "Review approved blockchains, mint/burn flows, and access-denied token amounts.",
        "Compare USDC liquidity against USDT and other regulated dollar stablecoins.",
      ],
      relatedLessons: ["Level 5 Crypto Liquidity", "Level 8 Stablecoin Mechanics", "Level 9 Counterparty Risk"],
      relatedStrategies: ["Stablecoin Peg Stress Monitor", "Crypto Liquidity Risk Assessment", "Cross-Market Risk Filter"],
      deepDive: {
        identity: [
          { title: "Regulated digital dollar", detail: "USDC is designed as a dollar stablecoin backed by highly liquid reserves and issued through Circle-controlled entities." },
          { title: "Reserve-report product", detail: "The lesson depends on reading reserve reports, not marketing copy, because backing quality is the asset's core feature." },
          { title: "Multi-chain settlement rail", detail: "USDC exists across many approved blockchains, so students must check where supply and usage sit." },
        ],
        authorityOrFounders: [
          { title: "Circle issuer role", detail: "Circle issues and redeems USDC and publishes reserve reporting materials." },
          { title: "Assurance provider role", detail: "Deloitte's examination report gives date-specific assurance around management's reserve assertion." },
          { title: "Reserve fund manager role", detail: "BlackRock manages the Circle Reserve Fund, which is central to the reserve asset stack." },
        ],
        holderExposureMap: [
          exposure({
            entityName: "Circle Internet Group",
            entityType: "Stablecoin issuer group",
            assetOrInstrument: "USDC in circulation",
            amount: "75,885,403,148",
            unit: "USDC",
            exposureType: "Issued stablecoin liability",
            asOfDate: "2026-05-29",
            sourcePublishedAt: "2026-06-29",
            retrievedAt,
            sourceTitle: batchSources.circleMay2026Attestation.title,
            sourcePublisher: batchSources.circleMay2026Attestation.publisher,
            sourceUrl: batchSources.circleMay2026Attestation.url,
            freshnessStatus: "recent",
            whyItMatters: "USDC in circulation is the liability base that reserve assets must cover for the stablecoin to maintain trust.",
          }),
          exposure({
            entityName: "Circle Internet Group",
            entityType: "Stablecoin issuer group",
            assetOrInstrument: "Fair value of assets held in USDC reserve",
            amount: "75,961,621,872",
            unit: "USD",
            exposureType: "Reserve asset base",
            asOfDate: "2026-05-29",
            sourcePublishedAt: "2026-06-29",
            retrievedAt,
            sourceTitle: batchSources.circleMay2026Attestation.title,
            sourcePublisher: batchSources.circleMay2026Attestation.publisher,
            sourceUrl: batchSources.circleMay2026Attestation.url,
            freshnessStatus: "recent",
            whyItMatters: "Reserve assets exceeding USDC in circulation are the core data point for USDC backing analysis.",
          }),
          exposure({
            entityName: "Circle Reserve Fund",
            entityType: "Government money market fund",
            assetOrInstrument: "Fund size",
            amount: "62,517.3",
            unit: "million USD",
            exposureType: "Reserve fund exposure",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt,
            sourceTitle: batchSources.circleReserveFund.title,
            sourcePublisher: batchSources.circleReserveFund.publisher,
            sourceUrl: batchSources.circleReserveFund.url,
            freshnessStatus: "current",
            whyItMatters: "The Circle Reserve Fund is the largest named reserve vehicle in the USDC lesson and must be checked from BlackRock data.",
          }),
          exposure({
            entityName: "Circle Reserve Fund",
            entityType: "Government money market fund",
            assetOrInstrument: "U.S. Treasury securities",
            amount: "22,061,994,431",
            unit: "USD fair value",
            exposureType: "Reserve asset allocation",
            asOfDate: "2026-05-29",
            sourcePublishedAt: "2026-06-29",
            retrievedAt,
            sourceTitle: batchSources.circleMay2026Attestation.title,
            sourcePublisher: batchSources.circleMay2026Attestation.publisher,
            sourceUrl: batchSources.circleMay2026Attestation.url,
            freshnessStatus: "recent",
            whyItMatters: "Treasury securities show the high-quality short-duration reserve layer behind USDC.",
          }),
          exposure({
            entityName: "Circle Reserve Fund",
            entityType: "Government money market fund",
            assetOrInstrument: "U.S. Treasury repurchase agreements",
            amount: "45,171,000,000",
            unit: "USD",
            exposureType: "Overnight reserve allocation",
            asOfDate: "2026-05-29",
            sourcePublishedAt: "2026-06-29",
            retrievedAt,
            sourceTitle: batchSources.circleMay2026Attestation.title,
            sourcePublisher: batchSources.circleMay2026Attestation.publisher,
            sourceUrl: batchSources.circleMay2026Attestation.url,
            freshnessStatus: "recent",
            whyItMatters: "Repo exposure matters because it explains how USDC reserves can remain liquid while earning short-term rates.",
          }),
          exposure({
            entityName: "Circle",
            entityType: "Stablecoin issuer",
            assetOrInstrument: "Cash held at regulated financial institutions",
            amount: "10,794,851,072",
            unit: "USD",
            exposureType: "Bank cash reserve",
            asOfDate: "2026-05-29",
            sourcePublishedAt: "2026-06-29",
            retrievedAt,
            sourceTitle: batchSources.circleMay2026Attestation.title,
            sourcePublisher: batchSources.circleMay2026Attestation.publisher,
            sourceUrl: batchSources.circleMay2026Attestation.url,
            freshnessStatus: "recent",
            whyItMatters: "Bank cash is important for redemption liquidity, but it also creates bank-exposure lessons during stress.",
          }),
        ],
        marketStructure: [
          { title: "Issuer and reserve layer", detail: "Circle issues and redeems USDC while publishing reserve reports and assurance materials." },
          { title: "Fund and cash layer", detail: "Treasuries, repo, and cash balances form the reserve stack students must read." },
          { title: "Approved blockchain layer", detail: "USDC supply sits across many supported chains with specific issuance and redemption rules." },
          { title: "DeFi and payments layer", detail: "USDC is used for collateral, settlement, payments, and exchange liquidity." },
        ],
        driverRegimes: [
          { title: "Reserve-confidence regime", detail: "USDC trades normally when reports, bank access, and redemption processes are trusted." },
          { title: "Banking-stress regime", detail: "USDC can temporarily trade below one dollar when holders worry about cash balances or banking partners." },
          { title: "Regulated-adoption regime", detail: "USDC can gain share when institutions prefer a more compliance-oriented stablecoin." },
        ],
        sourceBackedClaims: [
          { title: "May circulation", detail: "Circle reported 75,885,403,148 USDC in circulation as of May 29, 2026." },
          { title: "Reserve assets", detail: "The May report showed $75,961,621,872 in reserve assets as of the same date." },
          { title: "Circle Reserve Fund size", detail: "BlackRock reported the Circle Reserve Fund at $62.517 billion as of July 13, 2026." },
          { title: "Reserve composition", detail: "The May report listed Treasury securities, Treasury repos, fund cash, and bank cash as reserve components." },
        ],
        reviewNotes: [
          "Do not teach USDC as simply safer than USDT; teach reserve design, bank exposure, regulatory access, and chain distribution.",
          "Use the latest monthly report and date every reserve amount.",
          "Use crypto stablecoin language: peg, redemption, reserve assets, chain supply, slippage, liquidity depth, and counterparty risk.",
        ],
      },
    },
  },
  bnb: {
    lastReviewed: retrievedAt,
    sources: [batchSources.bnbBurn35, batchSources.bnbDocs, batchSources.bnbBscIntro, batchSources.bnbStaking],
    drivers: [
      { title: "BNB Chain usage", detail: "Transactions, fees, DeFi activity, and app usage affect whether BNB is being used as gas and network collateral." },
      { title: "Quarterly burn mechanics", detail: "Auto-burn removes BNB from supply and gives students a concrete supply-adjustment item to monitor." },
      { title: "Staking and validator set", detail: "BNB staking supports the Proof of Staked Authority model, so validator concentration and delegated stake matter." },
      { title: "Binance ecosystem dependency", detail: "BNB has strong historical and practical links to Binance products, exchange access, and user behavior." },
      { title: "Regulatory pressure", detail: "Exchange-token assets can reprice when regulators focus on exchange operations, listings, or issuer-linked activity." },
      { title: "Liquidity depth", detail: "BNB is liquid, but thin depth during stress can create sharp slippage across spot and derivatives venues." },
    ],
    publicRisks: [
      { risk: "Exchange dependency", watch: "BNB can be affected by Binance-specific legal, product, or liquidity events." },
      { risk: "Validator concentration", watch: "Students should review how many validators are active and how stake is distributed." },
      { risk: "Burn misunderstanding", watch: "A burn does not automatically mean demand improved." },
      { risk: "Regulatory shock", watch: "Exchange-linked tokens can react quickly to enforcement or licensing events." },
    ],
    lab: {
      deskBrief:
        "BNB is studied as an exchange-linked network asset. The paid desk connects BNB Chain usage, staking, validator structure, quarterly burns, Binance ecosystem exposure, liquidity depth, and regulatory pressure.",
      researchQuestion:
        "Is BNB moving because BNB Chain usage improved, the burn changed supply perception, Binance ecosystem demand shifted, staking participation changed, or exchange-token risk repriced?",
      operatingModel:
        "Begin with BNB Chain activity and staking. Then review the latest burn, remaining supply, validator count, Binance ecosystem headlines, exchange liquidity, funding, open interest, and slippage across venues.",
      participants: [
        { name: "BNB Foundation", role: "Burn announcer and ecosystem steward", whyItMatters: "The foundation publishes quarterly burn records and supply updates that affect BNB's supply lesson.", sourceBasis: "35th BNB Burn announcement" },
        { name: "BNB Chain validators", role: "Consensus operators", whyItMatters: "Validators and delegators secure BSC and make concentration a practical risk item.", sourceBasis: "BNB Smart Chain introduction and staking page" },
        { name: "BNB stakers", role: "Delegated security base", whyItMatters: "Staked BNB reduces liquid supply and shows user participation in chain security.", sourceBasis: "BNB Chain staking page" },
        { name: "Binance", role: "Ecosystem venue and historical issuer link", whyItMatters: "BNB's market role remains tied to Binance exchange access, product demand, and regulatory perception.", sourceBasis: "BNB Chain docs and ecosystem history" },
        { name: "BNB Smart Chain developers", role: "Application builders", whyItMatters: "Apps create transactions, fees, and real network demand beyond token narratives.", sourceBasis: "BNB Chain docs" },
        { name: "BNB Chain users", role: "Gas and app demand source", whyItMatters: "User activity is what makes BNB more than a burn story.", sourceBasis: "BNB Chain docs and staking page" },
      ],
      historicalEvents: [
        { year: "2017", title: "BNB launches", detail: "BNB begins as an exchange-linked token before later becoming central to BNB Chain." },
        { year: "2020", title: "BNB Smart Chain grows", detail: "BSC becomes an EVM-compatible chain with low-fee application activity." },
        { year: "2021", title: "DeFi activity expands", detail: "BNB gains attention as BSC DeFi and retail trading activity grow." },
        { year: "2021-2022", title: "Auto-burn framework becomes central", detail: "Burn mechanics become a recurring supply event students can verify." },
        { year: "2023-2025", title: "Regulatory focus on exchanges rises", detail: "Exchange-linked tokens face sharper legal and operational risk review." },
        { year: "2026", title: "35th BNB burn completes", detail: "BNB Chain reports 1,569,307.34 BNB burned and remaining supply near 134.79 million BNB." },
      ],
      correlations: [
        { market: "Binance ecosystem", relationship: "BNB can react to exchange-specific demand and risk.", learnerNote: "Separate BNB Chain usage from Binance headline risk." },
        { market: "Ethereum and EVM chains", relationship: "BNB competes for EVM users and liquidity.", learnerNote: "Compare fees, apps, and liquidity depth." },
        { market: "Exchange tokens", relationship: "BNB may move with assets tied to centralized exchanges.", learnerNote: "Check whether the move is sector-wide or BNB-specific." },
      ],
      riskMap: [
        { risk: "Exchange-linked regulatory risk", watch: "Legal action or licensing restrictions can affect BNB demand." },
        { risk: "Validator concentration", watch: "A smaller validator set can create governance and network-trust concerns." },
        { risk: "Burn narrative error", watch: "A burn is supply data, not proof of stronger usage." },
        { risk: "App activity decline", watch: "Lower BSC usage can weaken gas-demand reasoning." },
        { risk: "Liquidity pocket", watch: "Fast exchange-token moves can widen spreads and increase slippage." },
      ],
      researchRoutine: [
        "Review BNB trend against BTC, ETH, and exchange-token peers.",
        "Check BNB Chain transactions, fees, DeFi activity, and app usage.",
        "Read the latest BNB burn amount, remaining supply, and burn transaction reference.",
        "Check total staked BNB, validator count, funding, open interest, and liquidity depth.",
        "Separate chain demand from Binance-specific legal or exchange-access risk.",
      ],
      relatedLessons: ["Level 5 Crypto Liquidity", "Level 8 Network Tokenomics", "Level 9 Counterparty Risk"],
      relatedStrategies: ["Exchange Token Risk Filter", "Network Adoption Trend", "Liquidity Risk Assessment"],
      deepDive: {
        identity: [
          { title: "Exchange-linked network asset", detail: "BNB is tied to BNB Chain gas, staking, governance context, and Binance ecosystem perception." },
          { title: "Burn-driven supply story", detail: "BNB has recurring burn events that students can verify, but burn data must be separated from real demand." },
          { title: "PoSA chain exposure", detail: "BNB Smart Chain uses a validator model that makes stake and validator count central to the lesson." },
        ],
        authorityOrFounders: [
          { title: "BNB Foundation", detail: "The foundation communicates burn records and supply updates." },
          { title: "BNB Chain validator set", detail: "Validators and delegators operate the chain's security layer." },
          { title: "Binance ecosystem history", detail: "BNB's market story cannot be separated from Binance-related access, products, and regulatory perception." },
        ],
        holderExposureMap: [
          exposure({ entityName: "BNB Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "35th BNB auto-burn", amount: "1,569,307.34", unit: "BNB", estimatedUsdValue: "about 1.02 billion USD at completion", exposureType: "Supply reduction event", asOfDate: "2026-04-15", sourcePublishedAt: "2026-04-15", retrievedAt, sourceTitle: batchSources.bnbBurn35.title, sourcePublisher: batchSources.bnbBurn35.publisher, sourceUrl: batchSources.bnbBurn35.url, freshnessStatus: "recent", whyItMatters: "The burn amount is the most concrete supply-adjustment record for BNB and must be read directly from the official announcement." }),
          exposure({ entityName: "BNB Chain", entityType: "Blockchain network", assetOrInstrument: "Remaining total supply", amount: "134,786,916.53", unit: "BNB", exposureType: "Post-burn supply reference", asOfDate: "2026-04-15", sourcePublishedAt: "2026-04-15", retrievedAt, sourceTitle: batchSources.bnbBurn35.title, sourcePublisher: batchSources.bnbBurn35.publisher, sourceUrl: batchSources.bnbBurn35.url, freshnessStatus: "recent", whyItMatters: "Remaining supply helps students connect burn mechanics to circulating-supply pressure without overstating demand." }),
          exposure({ entityName: "BNB Chain staking", entityType: "Network staking layer", assetOrInstrument: "Total BNB staked", amount: "25,772,926.02969661", unit: "BNB", exposureType: "Staked network security exposure", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.bnbStaking.title, sourcePublisher: batchSources.bnbStaking.publisher, sourceUrl: batchSources.bnbStaking.url, freshnessStatus: "current", whyItMatters: "Staked BNB shows the delegated security base and the amount of BNB tied to validator economics." }),
          exposure({ entityName: "BNB Chain validators", entityType: "Validator set", assetOrInstrument: "Active validators", amount: "45 / 53", unit: "validators", exposureType: "Consensus participation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.bnbStaking.title, sourcePublisher: batchSources.bnbStaking.publisher, sourceUrl: batchSources.bnbStaking.url, freshnessStatus: "current", whyItMatters: "Validator count matters because BNB uses a Proof of Staked Authority model rather than open-ended proof of work." }),
          exposure({ entityName: "BNB Chain staking", entityType: "Network staking layer", assetOrInstrument: "Advertised staking APY", amount: "up to 1.10", unit: "percent APY", exposureType: "Staking reward reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.bnbStaking.title, sourcePublisher: batchSources.bnbStaking.publisher, sourceUrl: batchSources.bnbStaking.url, freshnessStatus: "current", whyItMatters: "APY helps students understand why holders may stake instead of keeping BNB fully liquid, while reward levels can change." }),
        ],
        marketStructure: [
          { title: "Gas and staking layer", detail: "BNB is used for network resources and delegated staking on BNB Chain." },
          { title: "Burn layer", detail: "Quarterly burns create recurring supply events that must be source-checked." },
          { title: "Exchange liquidity layer", detail: "BNB trades deeply but remains sensitive to exchange-specific events." },
          { title: "Application layer", detail: "BSC DeFi, gaming, payments, and app activity create practical demand." },
        ],
        driverRegimes: [
          { title: "Chain-usage regime", detail: "BNB is stronger when BNB Chain usage, fees, and application activity support demand." },
          { title: "Exchange-risk regime", detail: "BNB can weaken even with chain activity if Binance-related risk rises." },
          { title: "Burn-focus regime", detail: "Markets can focus on supply reduction, but the lesson must check demand data too." },
        ],
        sourceBackedClaims: [
          { title: "35th burn amount", detail: "BNB Chain reported 1,569,307.34 BNB burned in the 35th burn." },
          { title: "Remaining supply", detail: "The same announcement reported remaining total supply of 134,786,916.53 BNB." },
          { title: "Staking footprint", detail: "BNB Chain staking showed 25,772,926.02969661 BNB staked during review." },
          { title: "Validator count", detail: "The staking page showed 45 / 53 validators during review." },
        ],
        reviewNotes: [
          "Never teach BNB as only a burn token; connect burn, chain usage, staking, exchange dependency, and regulation.",
          "Date burn and staking metrics because both can change.",
          "Use crypto terms: slippage, liquidity depth, funding, open interest, staking, validator set, and chain activity.",
        ],
      },
    },
  },
  solana: {
    lastReviewed: retrievedAt,
    sources: [batchSources.solanaFoundation, batchSources.solanaStaking, batchSources.solanaStateFeb2026, batchSources.solanaValidators, batchSources.coinbaseSolanaValidator],
    drivers: [
      { title: "High-throughput app demand", detail: "Solana is strongest when consumer apps, DeFi, DePIN, payments, and DEX activity create real transaction demand." },
      { title: "Network reliability", detail: "Reliability and upgrade quality are central because Solana's market identity depends on speed and low cost." },
      { title: "Staking concentration", detail: "Active stake, validator distribution, and large operator shares shape decentralization debate." },
      { title: "Institutional SOL exposure", detail: "Public disclosures such as Goldman Sachs' SOL exposure can affect institutional attention." },
      { title: "SOL ecosystem rotation", detail: "SOL often moves when traders rotate into high-activity application chains and Solana-native assets." },
      { title: "Liquidity depth and leverage", detail: "SOL can move quickly when funding, open interest, and order-book depth become crowded." },
    ],
    publicRisks: [
      { risk: "Reliability shock", watch: "Congestion, failed transactions, or downtime can weaken Solana's core thesis." },
      { risk: "Validator concentration", watch: "Stake distribution and superminority risk need current dashboard checks." },
      { risk: "Theme reversal", watch: "Memecoin or app-cycle attention can fade quickly." },
      { risk: "Leverage unwind", watch: "SOL can move violently when derivatives positions crowd one side." },
    ],
    lab: {
      deskBrief:
        "Solana is studied as a high-throughput activity network. The paid desk links SOL to app usage, validator health, staking concentration, ecosystem revenue, institutional exposure, liquidity depth, and leverage.",
      researchQuestion:
        "Is SOL moving because real Solana activity improved, institutional exposure appeared, validator/staking data changed, or a short-lived ecosystem theme pulled leverage into the asset?",
      operatingModel:
        "Start with SOL versus BTC and ETH, then check network health, active stake, validator distribution, app activity, DEX flow, stablecoin usage, public-company exposure, funding, open interest, and slippage.",
      participants: [
        { name: "Solana Foundation", role: "Ecosystem and decentralization steward", whyItMatters: "The Foundation supports adoption, security, grants, and decentralization programs.", sourceBasis: "Solana Foundation official page" },
        { name: "Anatoly Yakovenko", role: "Co-founder and technical voice", whyItMatters: "Yakovenko remains a key public voice in Solana's performance and design debates.", sourceBasis: "Solana ecosystem and official historical context" },
        { name: "Solana validators", role: "Consensus operators", whyItMatters: "Validator distribution and stake concentration directly affect network trust.", sourceBasis: "Solana validator decentralization dashboard" },
        { name: "Coinbase validators", role: "Large staking operator", whyItMatters: "Coinbase disclosed 40.48M SOL staked, making it a named operator learners can quantify.", sourceBasis: "Coinbase Q1 2026 Solana validator report" },
        { name: "Goldman Sachs", role: "Publicly disclosed SOL exposure", whyItMatters: "The official Solana report cited $108M in SOL holdings, showing institutional attention.", sourceBasis: "Solana Ecosystem Report February 2026" },
        { name: "Solana application teams", role: "Demand creators", whyItMatters: "Apps, DEXs, DePIN projects, and wallets create the usage that supports SOL demand.", sourceBasis: "Solana Foundation and ecosystem reports" },
      ],
      historicalEvents: [
        { year: "2020", title: "Mainnet beta launches", detail: "Solana begins public network operation with high-throughput design." },
        { year: "2021", title: "DeFi and NFT activity expands", detail: "SOL gains attention as app activity, trading, and NFTs grow." },
        { year: "2022", title: "Reliability and ecosystem stress", detail: "Network and market stress make reliability a permanent Solana lesson." },
        { year: "2023-2024", title: "Activity rebound", detail: "New wallets, apps, and trading cycles revive Solana ecosystem attention." },
        { year: "2025", title: "Validator health reports continue", detail: "Stake distribution and Nakamoto coefficient remain major decentralization references." },
        { year: "2026", title: "Institutional exposure appears in reports", detail: "Solana's February report cites Goldman Sachs SOL holdings in regulatory filings." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "Solana competes for smart-contract users and liquidity.", learnerNote: "Compare real activity, not only fees." },
        { market: "Bitcoin", relationship: "SOL usually needs broad crypto risk appetite.", learnerNote: "A weak BTC regime can limit SOL follow-through." },
        { market: "Solana meme and DeFi assets", relationship: "SOL often moves with ecosystem attention.", learnerNote: "Separate durable app use from short theme bursts." },
      ],
      riskMap: [
        { risk: "Reliability failure", watch: "Any network interruption can challenge Solana's high-throughput value claim." },
        { risk: "Stake concentration", watch: "Large operator shares can create centralization debate." },
        { risk: "Theme-led excess", watch: "Memecoin or app hype can lift SOL without durable usage." },
        { risk: "Validator economics", watch: "Inflation changes and rewards can affect smaller validator sustainability." },
        { risk: "Liquidity shock", watch: "Crowded SOL derivatives can unwind quickly." },
      ],
      researchRoutine: [
        "Compare SOL against BTC, ETH, and the Solana ecosystem basket.",
        "Check active stake, validator distribution, and superminority metrics.",
        "Review app usage, DEX activity, stablecoin settlement, and wallet growth.",
        "Read any public institutional exposure disclosure before using it in the lesson.",
        "Check funding, open interest, basis, spread percentage, and slippage before trusting the move.",
      ],
      relatedLessons: ["Level 8 Ecosystem Growth", "Level 8 Network Tokenomics", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Ecosystem Growth Play", "Narrative With Data Confirmation", "Liquidity Risk Assessment"],
      deepDive: {
        identity: [
          { title: "High-throughput app chain", detail: "Solana is built around speed, low transaction costs, and consumer-scale application design." },
          { title: "Activity-led asset", detail: "SOL is easiest to teach when price is connected to real app, DEX, wallet, and validator data." },
          { title: "Reliability-sensitive network", detail: "Solana's strength is also its audit point: performance must stay reliable when demand rises." },
        ],
        authorityOrFounders: [
          { title: "Foundation stewardship", detail: "The Solana Foundation supports adoption, decentralization, security, and grants." },
          { title: "Open validator market", detail: "Validators and stake delegators secure the chain and shape decentralization metrics." },
          { title: "Builder ecosystem", detail: "Wallets, apps, DePIN teams, DEXs, and infrastructure providers create practical demand." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Solana network", entityType: "Proof-of-stake network", assetOrInstrument: "Active stake", amount: "429", unit: "million SOL", exposureType: "Staked network security exposure", asOfDate: "2026-07-13", retrievedAt, sourceTitle: batchSources.solanaValidators.title, sourcePublisher: batchSources.solanaValidators.publisher, sourceUrl: batchSources.solanaValidators.url, freshnessStatus: "current", whyItMatters: "Active stake shows how much SOL secures the network and is the first concentration metric students should check." }),
          exposure({ entityName: "Solana validator set", entityType: "Validator network", assetOrInstrument: "Nakamoto coefficient", amount: "19", unit: "validators", exposureType: "Superminority risk metric", asOfDate: "2026-07-13", retrievedAt, sourceTitle: batchSources.solanaValidators.title, sourcePublisher: batchSources.solanaValidators.publisher, sourceUrl: batchSources.solanaValidators.url, freshnessStatus: "current", whyItMatters: "The Nakamoto coefficient shows how many validators form the superminority threshold, making decentralization measurable for learners." }),
          exposure({ entityName: "Coinbase validators", entityType: "Staking operator", assetOrInstrument: "SOL staked", amount: "40.48", unit: "million SOL", estimatedUsdValue: "9.52% of total staked SOL", exposureType: "Named operator stake", asOfDate: "2026-Q1", sourcePublishedAt: "2026-06", retrievedAt, sourceTitle: batchSources.coinbaseSolanaValidator.title, sourcePublisher: batchSources.coinbaseSolanaValidator.publisher, sourceUrl: batchSources.coinbaseSolanaValidator.url, freshnessStatus: "recent", whyItMatters: "Coinbase's stake share gives students a named operator to track when studying concentration and validator performance." }),
          exposure({ entityName: "Goldman Sachs", entityType: "Financial institution", assetOrInstrument: "Disclosed SOL holdings", amount: "108", unit: "million USD", exposureType: "Reported institutional exposure", asOfDate: "2026-02", sourcePublishedAt: "2026-02", retrievedAt, sourceTitle: batchSources.solanaStateFeb2026.title, sourcePublisher: batchSources.solanaStateFeb2026.publisher, sourceUrl: batchSources.solanaStateFeb2026.url, freshnessStatus: "recent", whyItMatters: "A named institutional exposure helps students separate real disclosure from vague institutional-interest claims." }),
          exposure({ entityName: "Solana protocol", entityType: "Network monetary policy", assetOrInstrument: "Long-term inflation rate", amount: "1.5", unit: "percent annually", exposureType: "Protocol issuance model", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.solanaStaking.title, sourcePublisher: batchSources.solanaStaking.publisher, sourceUrl: batchSources.solanaStaking.url, freshnessStatus: "current", whyItMatters: "The inflation schedule affects validator rewards, supply growth, and staking economics over long horizons." }),
        ],
        marketStructure: [
          { title: "Validator and stake layer", detail: "SOL staking secures the network and creates concentration metrics." },
          { title: "Application activity layer", detail: "Wallets, DEXs, DePIN, NFTs, payments, and games create user demand." },
          { title: "Institutional exposure layer", detail: "Public disclosures and future ETP structures can add traditional-market attention." },
          { title: "Derivatives layer", detail: "SOL perps and futures can create leverage-led moves away from usage data." },
        ],
        driverRegimes: [
          { title: "Usage expansion regime", detail: "SOL is stronger when app activity and validator health improve together." },
          { title: "Reliability-risk regime", detail: "SOL weakens when performance or congestion questions return." },
          { title: "Leverage rotation regime", detail: "SOL can move sharply when traders rotate into high-beta crypto assets." },
        ],
        sourceBackedClaims: [
          { title: "Active stake", detail: "The validator dashboard showed 429M SOL active stake during review." },
          { title: "Nakamoto coefficient", detail: "The dashboard showed a Nakamoto coefficient of 19." },
          { title: "Coinbase stake", detail: "Coinbase reported 40.48M SOL staked across its validators in Q1 2026." },
          { title: "Goldman Sachs exposure", detail: "Solana's February 2026 report cited $108M in SOL holdings disclosed by Goldman Sachs." },
        ],
        reviewNotes: [
          "Do not treat Solana as only a fast-chain story; require activity, reliability, staking, and liquidity evidence.",
          "Date validator metrics because stake distribution changes.",
          "Use crypto-specific terms: slippage, liquidity depth, funding, open interest, validator concentration, and network reliability.",
        ],
      },
    },
  },
  xrp: {
    lastReviewed: retrievedAt,
    sources: [batchSources.rippleXrp, batchSources.rippleQ12025, batchSources.xrplEscrow, batchSources.secRippleSettlement, batchSources.xrplDocs],
    drivers: [
      { title: "Ripple escrow releases", detail: "XRP supply discussion depends on how much XRP is locked, released, returned, or held by Ripple." },
      { title: "Payments and liquidity use", detail: "XRP is watched for settlement and liquidity use cases rather than smart-contract app demand alone." },
      { title: "Regulatory clarity", detail: "Court and settlement developments can change institutional access and exchange confidence." },
      { title: "XRPL network activity", detail: "Ledger transactions, amendments, DEX use, and account growth help students separate utility from price-only claims." },
      { title: "Exchange liquidity", detail: "XRP is heavily traded, so order-book depth and venue support shape short-term behavior." },
      { title: "Institutional partnerships", detail: "Ripple payment partnerships and custody products can influence XRP narratives when they connect to real usage." },
    ],
    publicRisks: [
      { risk: "Escrow misunderstanding", watch: "Students must separate locked XRP, released XRP, returned XRP, and Ripple-held XRP." },
      { risk: "Legal headline risk", watch: "XRP can react quickly to regulatory updates." },
      { risk: "Usage-to-token gap", watch: "Ripple business growth does not automatically mean direct XRP demand." },
      { risk: "Exchange concentration", watch: "Venue access and liquidity depth matter when XRP moves quickly." },
    ],
    lab: {
      deskBrief:
        "XRP is studied as a ledger asset tied to Ripple escrow, payments liquidity, regulatory history, exchange depth, and XRPL network activity. The paid desk uses official Ripple and XRPL sources before interpreting supply or legal narratives.",
      researchQuestion:
        "Is XRP moving because escrow data changed, legal access improved, XRPL usage expanded, Ripple-related payment narratives strengthened, or broad crypto liquidity rotated into high-volume legacy assets?",
      operatingModel:
        "Read XRP in this order: escrow and distribution data, legal status, XRPL activity, exchange liquidity, payment-use evidence, and derivatives positioning. Do not confuse Ripple business headlines with automatic XRP demand.",
      participants: [
        { name: "Ripple", role: "XRP holder and payments company", whyItMatters: "Ripple publishes XRP holdings and escrow data, making it central to XRP supply education.", sourceBasis: "Ripple XRP page and markets report" },
        { name: "XRP Ledger validators", role: "Network consensus participants", whyItMatters: "Validators support ledger consensus and amendment activation.", sourceBasis: "XRPL documentation" },
        { name: "XRPL Foundation and developer ecosystem", role: "Ecosystem support", whyItMatters: "Developer tools, documentation, and amendments shape practical network use.", sourceBasis: "XRPL documentation" },
        { name: "SEC", role: "Regulatory authority", whyItMatters: "The SEC case and settlement history are central to XRP access and risk perception.", sourceBasis: "SEC 2025 statement" },
        { name: "Crypto exchanges", role: "Liquidity venues", whyItMatters: "Exchange listings and depth determine practical access and slippage during XRP moves.", sourceBasis: "Ripple markets reporting and market structure" },
        { name: "Payment and liquidity users", role: "Potential utility demand", whyItMatters: "Real payment or liquidity use is what can distinguish XRP from pure speculation.", sourceBasis: "Ripple product and XRP reporting trail" },
      ],
      historicalEvents: [
        { year: "2012", title: "XRP Ledger launches", detail: "XRPL begins as a fast settlement ledger with XRP as its native asset." },
        { year: "2017", title: "Ripple escrow framework announced", detail: "Ripple explains the 55B XRP escrow design to reduce supply uncertainty." },
        { year: "2020", title: "SEC lawsuit begins", detail: "Regulatory action makes legal status a central XRP market driver." },
        { year: "2023", title: "Court rulings reshape access", detail: "Exchange and institutional interpretation shifts after major court developments." },
        { year: "2025", title: "Settlement process advances", detail: "The SEC statement describes settlement terms and returned escrowed funds context." },
        { year: "2026", title: "Ripple reports current XRP distribution", detail: "Ripple's XRP page lists distributed XRP and Ripple-held XRP with escrow details." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "XRP often needs broad crypto liquidity to sustain large moves.", learnerNote: "Check whether XRP is leading or following BTC." },
        { market: "Regulatory headlines", relationship: "XRP is unusually sensitive to legal-access updates.", learnerNote: "Separate court facts from social interpretation." },
        { market: "Legacy high-volume crypto assets", relationship: "XRP can rotate with older liquid assets during retail activity bursts.", learnerNote: "Liquidity depth matters more than narratives alone." },
      ],
      riskMap: [
        { risk: "Legal reinterpretation", watch: "Regulatory updates can quickly change market access." },
        { risk: "Escrow release anxiety", watch: "Supply headlines can be misread if returned XRP and locked XRP are ignored." },
        { risk: "Utility overstatement", watch: "Payment company announcements do not always create XRP demand." },
        { risk: "Venue risk", watch: "Exchange support and liquidity depth affect execution quality." },
        { risk: "Concentration debate", watch: "Ripple's large XRP position remains a standing supply-risk lesson." },
      ],
      researchRoutine: [
        "Start with Ripple's current distributed, held, and escrow XRP figures.",
        "Check legal and regulatory source dates before reading XRP headlines.",
        "Review XRPL transactions, amendments, DEX use, and account activity.",
        "Compare XRP liquidity depth across exchanges and derivatives venues.",
        "Classify the move as escrow-led, legal-led, usage-led, liquidity-led, or broad crypto rotation.",
      ],
      relatedLessons: ["Level 5 Crypto Liquidity", "Level 8 Network Tokenomics", "Level 9 Regulatory Risk"],
      relatedStrategies: ["Regulatory Catalyst Review", "Liquidity Risk Assessment", "Narrative With Data Confirmation"],
      deepDive: {
        identity: [
          { title: "Ledger settlement asset", detail: "XRP is the native asset of XRP Ledger, built around fast settlement and liquidity movement." },
          { title: "Ripple-linked supply lesson", detail: "Ripple's holdings and escrow are central because they shape the supply and concentration discussion." },
          { title: "Legal-history asset", detail: "XRP must be taught with its regulatory history because access and institutional comfort have been major drivers." },
        ],
        authorityOrFounders: [
          { title: "XRPL network", detail: "The ledger operates through validators and protocol amendments rather than a single company database." },
          { title: "Ripple role", detail: "Ripple is not the ledger itself, but it holds large XRP amounts and publishes key supply data." },
          { title: "Regulatory authorities", detail: "SEC actions and court process have shaped XRP market access and risk perception." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Ripple", entityType: "XRP holder and payments company", assetOrInstrument: "Total XRP held by Ripple", amount: "37,656,053,914", unit: "XRP", exposureType: "Company-held and escrow XRP", asOfDate: "2026-06-30", sourcePublishedAt: "2026-06-30", retrievedAt, sourceTitle: batchSources.rippleXrp.title, sourcePublisher: batchSources.rippleXrp.publisher, sourceUrl: batchSources.rippleXrp.url, freshnessStatus: "current", whyItMatters: "Ripple's XRP position is the largest named supply factor students must understand before reading price narratives." }),
          exposure({ entityName: "XRP market", entityType: "Distributed supply", assetOrInstrument: "Distributed XRP", amount: "62,329,587,596", unit: "XRP", exposureType: "Distributed circulating reference", asOfDate: "2026-06-30", retrievedAt, sourceTitle: batchSources.rippleXrp.title, sourcePublisher: batchSources.rippleXrp.publisher, sourceUrl: batchSources.rippleXrp.url, freshnessStatus: "current", whyItMatters: "Distributed XRP gives learners the practical supply base outside Ripple's reported holdings." }),
          exposure({ entityName: "Ripple escrow", entityType: "Escrowed XRP", assetOrInstrument: "XRP locked in escrow", amount: "32,600,000,000", unit: "XRP", exposureType: "Programmatic escrow supply", asOfDate: "2026-06-30", retrievedAt, sourceTitle: batchSources.rippleXrp.title, sourcePublisher: batchSources.rippleXrp.publisher, sourceUrl: batchSources.rippleXrp.url, freshnessStatus: "current", whyItMatters: "Escrowed XRP is the supply reservoir that drives many XRP supply questions and must be separated from distributed XRP." }),
          exposure({ entityName: "Ripple escrow design", entityType: "Escrow framework", assetOrInstrument: "Original escrow lockup", amount: "55,000,000,000", unit: "XRP", exposureType: "Historical escrow framework", asOfDate: "2017-12", sourcePublishedAt: "2017-05-16", retrievedAt, sourceTitle: batchSources.xrplEscrow.title, sourcePublisher: batchSources.xrplEscrow.publisher, sourceUrl: batchSources.xrplEscrow.url, freshnessStatus: "historical", whyItMatters: "The original 55B escrow explains why monthly release mechanics remain central to XRP education.", limitations: "Historical design reference only; use Ripple's current XRP page for latest escrow amount." }),
          exposure({ entityName: "SEC settlement context", entityType: "Regulatory settlement item", assetOrInstrument: "Settlement amount discussed", amount: "75,000,000", unit: "USD", exposureType: "Regulatory settlement reference", asOfDate: "2025-05-08", sourcePublishedAt: "2025-05-08", retrievedAt, sourceTitle: batchSources.secRippleSettlement.title, sourcePublisher: batchSources.secRippleSettlement.publisher, sourceUrl: batchSources.secRippleSettlement.url, freshnessStatus: "historical", whyItMatters: "The settlement context helps students understand why legal status is part of XRP's market structure, not just a headline." }),
        ],
        marketStructure: [
          { title: "Escrow and distribution layer", detail: "Ripple-held XRP, escrowed XRP, and distributed XRP must be read separately." },
          { title: "Ledger activity layer", detail: "XRPL transactions, accounts, amendments, DEX use, and payment activity show network use." },
          { title: "Legal access layer", detail: "Court and regulatory outcomes affect listings, institutional access, and risk premium." },
          { title: "Exchange liquidity layer", detail: "XRP's high-volume trading makes venue depth and derivatives exposure important." },
        ],
        driverRegimes: [
          { title: "Legal-clarity regime", detail: "XRP can strengthen when access and regulatory confidence improve." },
          { title: "Escrow-anxiety regime", detail: "Supply concerns rise when traders misread unlocks or Ripple-held XRP." },
          { title: "Liquidity-rotation regime", detail: "XRP can move with legacy high-volume assets during broad crypto activity." },
        ],
        sourceBackedClaims: [
          { title: "Ripple-held XRP", detail: "Ripple reported 37,656,053,914 total XRP held by Ripple as of June 30, 2026." },
          { title: "Distributed XRP", detail: "Ripple reported 62,329,587,596 XRP distributed as of the same date." },
          { title: "Escrow amount", detail: "Ripple reported 32.6B XRP in escrow as of June 30, 2026." },
          { title: "Original escrow design", detail: "XRPL's escrow explainer described the original 55B XRP escrow arrangement." },
        ],
        reviewNotes: [
          "Never merge Ripple business, XRP Ledger, and XRP token demand into one vague story.",
          "Always date Ripple-held and escrow amounts.",
          "Use crypto language: slippage, liquidity depth, funding, open interest, escrow, exchange access, and regulatory risk.",
        ],
      },
    },
  },
  dogecoin: {
    lastReviewed: retrievedAt,
    sources: [batchSources.dogecoinFoundationTrailmap, batchSources.dogecoinHome, batchSources.dogecoinFaq, batchSources.teslaDogecoin, batchSources.dogecoinBitinfocharts, batchSources.dogecoinRichList],
    drivers: [
      { title: "Community attention", detail: "DOGE often moves when attention broadens across social channels, exchanges, and meme-asset baskets." },
      { title: "Exchange liquidity", detail: "DOGE is highly traded, so spot depth and derivatives positioning matter for execution quality." },
      { title: "Issuance rate", detail: "Dogecoin has a fixed block reward rather than a fixed maximum supply, so inflation belongs in every lesson." },
      { title: "Elon Musk and Tesla context", detail: "Tesla's DOGE payment support makes DOGE sensitive to public-figure and merchant-adoption discussion." },
      { title: "Mining security", detail: "Proof-of-work mining, merged mining, and hash-rate conditions affect network security." },
      { title: "Meme-sector rotation", detail: "DOGE can move with other meme assets when speculative capital rotates into high-attention tokens." },
    ],
    publicRisks: [
      { risk: "Attention reversal", watch: "DOGE can weaken quickly when social interest fades." },
      { risk: "No supply cap", watch: "Students must understand the continuing issuance model." },
      { risk: "Public-figure overreaction", watch: "Headlines can move DOGE without changing network use." },
      { risk: "Explorer-label uncertainty", watch: "Large wallet labels are not the same as audited ownership." },
    ],
    lab: {
      deskBrief:
        "Dogecoin is studied as a proof-of-work meme asset with deep liquidity, ongoing issuance, community identity, public-figure sensitivity, merchant-payment references, and concentration questions.",
      researchQuestion:
        "Is DOGE moving because meme-sector attention expanded, liquidity improved, a public-figure catalyst appeared, mining or issuance data changed, or leverage crowded into the asset?",
      operatingModel:
        "Start with DOGE versus the meme basket and BTC. Then check exchange depth, funding, open interest, Dogecoin issuance, mining data, Tesla payment context, large-wallet explorer data with limitations, and whether activity is broader than social attention.",
      participants: [
        { name: "Dogecoin Foundation", role: "Community stewardship and development support", whyItMatters: "The Foundation gives DOGE a public development and education structure without making it a company-issued asset.", sourceBasis: "Dogecoin Foundation trailmap" },
        { name: "Dogecoin Core developers", role: "Protocol maintainers", whyItMatters: "Core development and releases affect network reliability and wallet compatibility.", sourceBasis: "Dogecoin Core FAQ and repository" },
        { name: "Dogecoin miners", role: "Proof-of-work security providers", whyItMatters: "Mining security affects transaction settlement and network resilience.", sourceBasis: "Dogecoin Core FAQ and network stats" },
        { name: "Tesla", role: "Merchant DOGE payment support", whyItMatters: "Tesla accepts DOGE for eligible products and creates a concrete merchant-use example.", sourceBasis: "Tesla DOGE support page" },
        { name: "Elon Musk", role: "Public attention source", whyItMatters: "DOGE has repeatedly reacted to Musk-related public attention, making public-figure risk a real lesson.", sourceBasis: "Tesla DOGE support and public market history" },
        { name: "Major exchanges", role: "Liquidity venues", whyItMatters: "DOGE's practical tradability depends on deep venue support, spreads, and derivatives access.", sourceBasis: "Market-structure data and BitInfoCharts network context" },
      ],
      historicalEvents: [
        { year: "2013", title: "Dogecoin launches", detail: "DOGE begins as a meme-inspired proof-of-work cryptocurrency." },
        { year: "2014", title: "Community fundraising era", detail: "Dogecoin becomes known for public community campaigns and cultural reach." },
        { year: "2021", title: "Retail attention cycle", detail: "DOGE becomes one of the best-known meme assets during a major retail cycle." },
        { year: "2021-2022", title: "Tesla DOGE payments appear", detail: "Tesla adds DOGE payment support for eligible products, creating a named merchant reference." },
        { year: "2023-2025", title: "Meme sector matures", detail: "DOGE becomes the benchmark that newer meme assets are compared against." },
        { year: "2026", title: "Network data remains issuance-focused", detail: "Block reward and daily issuance continue to be the most concrete DOGE supply lesson." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "DOGE usually needs broad crypto risk appetite.", learnerNote: "DOGE strength during weak BTC regimes needs extra caution." },
        { market: "Meme assets", relationship: "DOGE often moves with meme-sector rotation.", learnerNote: "Compare DOGE with SHIB, PEPE, and newer meme assets." },
        { market: "Public-figure attention", relationship: "DOGE can react to Musk or Tesla-related attention.", learnerNote: "A headline is not the same as network demand." },
      ],
      riskMap: [
        { risk: "Social-only move", watch: "DOGE can rise without network activity or liquidity improvement." },
        { risk: "Continuing issuance", watch: "A fixed block reward means supply keeps expanding." },
        { risk: "Large-wallet uncertainty", watch: "Explorer labels and rich lists need limitation notes." },
        { risk: "Leverage crowding", watch: "DOGE derivatives can unwind quickly." },
        { risk: "Merchant-use overstatement", watch: "Tesla support does not disclose DOGE revenue or holdings." },
      ],
      researchRoutine: [
        "Compare DOGE with BTC and the meme-asset basket.",
        "Check exchange depth, funding, open interest, and spot volume quality.",
        "Review Dogecoin block reward, daily reward, hash rate, and transaction activity.",
        "Treat large-wallet labels as explorer clues unless an entity confirms ownership.",
        "Classify the move as meme-sector, public-figure, liquidity, mining, or leverage-led.",
      ],
      relatedLessons: ["Level 4 Market Sentiment", "Level 5 Crypto Liquidity", "Level 9 Crypto Risk Mapping"],
      relatedStrategies: ["Sentiment + Technical Overlay", "Volume Spike Breakout", "Liquidity Risk Assessment"],
      deepDive: {
        identity: [
          { title: "Proof-of-work meme asset", detail: "Dogecoin is both a proof-of-work network and a cultural crypto asset, so students must study mining and attention together." },
          { title: "No fixed maximum supply", detail: "DOGE has continuing issuance through a fixed block reward, making supply education essential." },
          { title: "Liquidity benchmark for memes", detail: "DOGE is often the reference asset for meme-sector rotations because it has deep exchange support." },
        ],
        authorityOrFounders: [
          { title: "Community-led structure", detail: "Dogecoin does not have a single issuing company controlling monetary policy." },
          { title: "Foundation support", detail: "The Dogecoin Foundation supports development and education but should not be treated as a central bank." },
          { title: "Core developer role", detail: "Dogecoin Core maintainers keep the network software functional and secure." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Dogecoin protocol", entityType: "Proof-of-work network", assetOrInstrument: "Block reward", amount: "10,000", unit: "DOGE per block", exposureType: "Protocol issuance", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.dogecoinFaq.title, sourcePublisher: batchSources.dogecoinFaq.publisher, sourceUrl: batchSources.dogecoinFaq.url, freshnessStatus: "current", whyItMatters: "The block reward explains why Dogecoin does not have a fixed maximum supply and why issuance matters." }),
          exposure({ entityName: "Dogecoin network", entityType: "Proof-of-work network", assetOrInstrument: "Reward last 24 hours", amount: "13,620,000", unit: "DOGE", exposureType: "Recent issuance flow", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.dogecoinBitinfocharts.title, sourcePublisher: batchSources.dogecoinBitinfocharts.publisher, sourceUrl: batchSources.dogecoinBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Daily reward data makes the continuing issuance model visible in a way learners can compare with demand." }),
          exposure({ entityName: "BitInfoCharts labeled top DOGE wallet", entityType: "Explorer-labeled wallet", assetOrInstrument: "Largest listed DOGE address", amount: "27,164,003,540", unit: "DOGE", exposureType: "Explorer concentration reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.dogecoinRichList.title, sourcePublisher: batchSources.dogecoinRichList.publisher, sourceUrl: batchSources.dogecoinRichList.url, freshnessStatus: "current", whyItMatters: "Large-wallet concentration can affect market confidence, but the entity label must be treated carefully.", limitations: "Explorer labels can be wrong or outdated; do not present this as verified ownership unless the entity confirms the address." }),
          exposure({ entityName: "Tesla", entityType: "Merchant", assetOrInstrument: "DOGE accepted for eligible products", amount: "Not disclosed", unit: "DOGE payments or holdings", exposureType: "Merchant payment support", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.teslaDogecoin.title, sourcePublisher: batchSources.teslaDogecoin.publisher, sourceUrl: batchSources.teslaDogecoin.url, freshnessStatus: "current", whyItMatters: "Tesla gives DOGE a real merchant-use reference, but it does not disclose DOGE payment volume on the support page.", limitations: "Do not claim Tesla holds or receives a specific DOGE amount from this source; it only confirms eligible product payment support." }),
          exposure({ entityName: "Dogecoin Foundation", entityType: "Community foundation", assetOrInstrument: "Public treasury balance", amount: "Not disclosed", unit: "DOGE", exposureType: "Foundation resource reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.dogecoinFoundationTrailmap.title, sourcePublisher: batchSources.dogecoinFoundationTrailmap.publisher, sourceUrl: batchSources.dogecoinFoundationTrailmap.url, freshnessStatus: "current", whyItMatters: "The Foundation matters for development support, but students should not invent a treasury balance when the trailmap does not publish one.", limitations: "Use foundation role and development scope, not an assumed DOGE holding amount." }),
        ],
        marketStructure: [
          { title: "Mining layer", detail: "DOGE uses proof-of-work, so hash rate, rewards, and miner economics belong in the lesson." },
          { title: "Exchange liquidity layer", detail: "DOGE liquidity is broad, but meme moves can still create slippage." },
          { title: "Attention layer", detail: "DOGE reacts to community attention and public figures more than many utility tokens." },
          { title: "Merchant reference layer", detail: "Tesla support is real, but undisclosed payment volume limits the conclusion." },
        ],
        driverRegimes: [
          { title: "Meme rotation regime", detail: "DOGE strengthens when capital rotates into high-attention meme assets." },
          { title: "Public-figure regime", detail: "DOGE can move on Musk or Tesla-related attention without network changes." },
          { title: "Liquidity unwind regime", detail: "Leverage-led DOGE moves can reverse quickly when funding and open interest are crowded." },
        ],
        sourceBackedClaims: [
          { title: "Block reward", detail: "Dogecoin Core FAQ states the block reward is 10,000 DOGE." },
          { title: "Recent issuance", detail: "BitInfoCharts showed 13.62M DOGE reward over the last 24 hours during review." },
          { title: "Tesla support", detail: "Tesla's support page states that eligible products can be purchased using DOGE." },
          { title: "Top-wallet limitation", detail: "BitInfoCharts rich-list data can show concentration, but labels are not audited ownership proof." },
        ],
        reviewNotes: [
          "Never pretend DOGE has the same utility profile as a smart-contract chain.",
          "Use source limitations for every large-wallet claim.",
          "Use crypto language: slippage, liquidity depth, funding, open interest, hash rate, block reward, and meme-sector rotation.",
        ],
      },
    },
  },
  cardano: {
    lastReviewed: retrievedAt,
    sources: [batchSources.cardanoSupply, batchSources.cardanoReports, batchSources.cardanoReport2025, batchSources.cardanoStakePool, batchSources.cardanoMay2026],
    drivers: [
      { title: "Treasury governance", detail: "Cardano's on-chain treasury and governance votes affect how ecosystem resources are allocated." },
      { title: "Staking participation", detail: "ADA staking and stake-pool health influence decentralization, liquid supply, and network security." },
      { title: "Development delivery", detail: "Cardano often trades on whether upgrades, tooling, and app activity are turning research into use." },
      { title: "Governance credibility", detail: "Budget votes, constitutional processes, and committee decisions shape the market's trust in Cardano's direction." },
      { title: "DeFi and app usage", detail: "TVL, stablecoins, DEX activity, and wallet use show whether ADA demand is more than a staking story." },
      { title: "Crypto liquidity rotation", detail: "ADA can move with older smart-contract assets when broad crypto liquidity rotates." },
    ],
    publicRisks: [
      { risk: "Slow delivery perception", watch: "Research-heavy development can frustrate markets if app usage lags." },
      { risk: "Treasury vote disappointment", watch: "Budget outcomes can shift ecosystem expectations." },
      { risk: "Stake-pool concentration", watch: "Delegation distribution matters for decentralization quality." },
      { risk: "Low application demand", watch: "Staking strength does not replace app and liquidity growth." },
    ],
    lab: {
      deskBrief:
        "Cardano is studied as a research-led proof-of-stake network with on-chain treasury, delegation, governance, and a slow-build ecosystem model. The paid desk connects ADA to treasury data, staking, governance votes, development delivery, and liquidity.",
      researchQuestion:
        "Is ADA moving because governance and treasury decisions improved confidence, staking participation changed, app usage expanded, or older smart-contract assets rotated together?",
      operatingModel:
        "Start with ADA versus BTC, ETH, and smart-contract peers. Then review treasury balance, withdrawals, stake-pool structure, governance outcomes, development updates, DeFi activity, exchange depth, and derivatives positioning.",
      participants: [
        { name: "Cardano Foundation", role: "Ecosystem and reporting body", whyItMatters: "The Foundation publishes reports, governance updates, and ecosystem information that anchor paid research.", sourceBasis: "Cardano Foundation reports and May 2026 update" },
        { name: "Input Output Global", role: "Core engineering contributor", whyItMatters: "IOG has been a major Cardano research and engineering contributor.", sourceBasis: "Cardano public ecosystem history and documentation" },
        { name: "Charles Hoskinson", role: "Founder and public ecosystem voice", whyItMatters: "Hoskinson remains influential in Cardano governance and market perception.", sourceBasis: "Cardano ecosystem history" },
        { name: "Stake pool operators", role: "Network validators", whyItMatters: "Stake pools secure the network and make delegation quality central to ADA analysis.", sourceBasis: "Cardano stake-pool operation documentation" },
        { name: "ADA delegators", role: "Staking participants", whyItMatters: "Delegators affect stake distribution and liquid supply without handing custody to a centralized validator by default.", sourceBasis: "Cardano stake-pool operation documentation" },
        { name: "Cardano governance voters", role: "Treasury and proposal decision makers", whyItMatters: "Governance votes can approve or reject ecosystem funding and shape the chain's operating priorities.", sourceBasis: "Cardano Foundation May 2026 update and supply summary" },
      ],
      historicalEvents: [
        { year: "2017", title: "Cardano launches", detail: "ADA begins as a proof-of-stake project with a research-led identity." },
        { year: "2020", title: "Shelley decentralization era", detail: "Staking and delegation become central to Cardano's network model." },
        { year: "2021", title: "Smart contracts arrive", detail: "Alonzo introduces smart-contract functionality and app expectations." },
        { year: "2023-2024", title: "Governance framework expands", detail: "Cardano moves deeper into on-chain governance and treasury debate." },
        { year: "2025", title: "Foundation publishes financial insights", detail: "Public reporting makes resource allocation more visible." },
        { year: "2026", title: "Treasury and budget votes stay central", detail: "Cardano Foundation updates show governance outcomes and proposal debates." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "ADA is compared with smart-contract platforms.", learnerNote: "Compare app usage and liquidity, not ideology." },
        { market: "Bitcoin", relationship: "ADA generally benefits from broad crypto risk appetite.", learnerNote: "ADA strength without BTC support needs extra confirmation." },
        { market: "Older smart-contract assets", relationship: "ADA can rotate with DOT, AVAX, and other established L1s.", learnerNote: "Check whether the move is Cardano-specific." },
      ],
      riskMap: [
        { risk: "Governance disappointment", watch: "Rejected or disputed proposals can reduce ecosystem confidence." },
        { risk: "Treasury-use confusion", watch: "Treasury withdrawals must be tied to actual approved work." },
        { risk: "App-usage weakness", watch: "ADA can lag if staking is strong but DeFi and user activity remain thin." },
        { risk: "Stake concentration", watch: "Delegation distribution and pool economics affect decentralization." },
        { risk: "Liquidity rotation fade", watch: "Older L1 rallies can unwind if broad crypto liquidity moves elsewhere." },
      ],
      researchRoutine: [
        "Compare ADA with BTC, ETH, and established L1 peers.",
        "Check treasury balance, withdrawals, additions, and latest governance outcomes.",
        "Review stake-pool operation, delegation behavior, and validator distribution.",
        "Scan development updates, app usage, DeFi liquidity, and stablecoin activity.",
        "Check exchange depth, funding, open interest, and slippage before judging move quality.",
      ],
      relatedLessons: ["Level 8 Network Tokenomics", "Level 8 Governance", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Governance Catalyst Review", "Network Adoption Trend", "Technical + Fundamental Confirmation"],
      deepDive: {
        identity: [
          { title: "Research-led proof-of-stake network", detail: "Cardano teaches students how a slower research-heavy chain can still have serious treasury, staking, and governance structure." },
          { title: "Treasury and governance asset", detail: "ADA is deeply tied to on-chain funding and governance decisions, so budget votes matter." },
          { title: "Delegation-based security model", detail: "Stake pools and delegators are central because Cardano security depends on delegated proof of stake." },
        ],
        authorityOrFounders: [
          { title: "Cardano Foundation", detail: "The Foundation publishes ecosystem, governance, and financial reporting used in the paid profile." },
          { title: "Input Output Global", detail: "IOG remains a major technical contributor and part of Cardano's origin story." },
          { title: "On-chain governance", detail: "Cardano increasingly routes decisions through governance processes and treasury votes." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Cardano Treasury", entityType: "Protocol treasury", assetOrInstrument: "Treasury balance", amount: "1,473,782,005", unit: "ADA", exposureType: "On-chain treasury reserve", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.cardanoSupply.title, sourcePublisher: batchSources.cardanoSupply.publisher, sourceUrl: batchSources.cardanoSupply.url, freshnessStatus: "current", whyItMatters: "The treasury balance is a concrete funding base for Cardano governance and ecosystem development decisions." }),
          exposure({ entityName: "Cardano Treasury", entityType: "Protocol treasury", assetOrInstrument: "Treasury withdrawals", amount: "216,719,540", unit: "ADA", exposureType: "Governance spending flow", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.cardanoSupply.title, sourcePublisher: batchSources.cardanoSupply.publisher, sourceUrl: batchSources.cardanoSupply.url, freshnessStatus: "current", whyItMatters: "Withdrawals show how much ADA has left treasury control and help students audit governance spending pressure." }),
          exposure({ entityName: "Cardano Treasury", entityType: "Protocol treasury", assetOrInstrument: "Treasury additions", amount: "748,137,426", unit: "ADA", exposureType: "Treasury inflow record", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.cardanoSupply.title, sourcePublisher: batchSources.cardanoSupply.publisher, sourceUrl: batchSources.cardanoSupply.url, freshnessStatus: "current", whyItMatters: "Treasury additions show the funding inflow side, which matters when evaluating budget sustainability." }),
          exposure({ entityName: "Cardano Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "2025 resources allocated", amount: "23.6", unit: "million CHF", exposureType: "Foundation resource allocation", asOfDate: "2025-12-31", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.cardanoReport2025.title, sourcePublisher: batchSources.cardanoReport2025.publisher, sourceUrl: batchSources.cardanoReport2025.url, freshnessStatus: "recent", whyItMatters: "Foundation resource allocation gives learners a named budget reference rather than vague ecosystem-support language." }),
          exposure({ entityName: "Cardano Summit 2025", entityType: "Foundation event finance item", assetOrInstrument: "Sponsorship revenue", amount: "428,475", unit: "ADA", exposureType: "Event revenue flow", asOfDate: "2025", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.cardanoReport2025.title, sourcePublisher: batchSources.cardanoReport2025.publisher, sourceUrl: batchSources.cardanoReport2025.url, freshnessStatus: "recent", whyItMatters: "A real ADA-denominated revenue item helps students see how foundation reporting connects to ecosystem operations." }),
        ],
        marketStructure: [
          { title: "Treasury layer", detail: "On-chain treasury data makes funding and governance measurable." },
          { title: "Delegated staking layer", detail: "Stake pools and delegators secure the network and affect liquid supply." },
          { title: "Governance layer", detail: "Budget votes, proposals, and constitutional process influence market confidence." },
          { title: "Application layer", detail: "DeFi, stablecoins, wallets, and developer activity test whether research turns into user demand." },
        ],
        driverRegimes: [
          { title: "Governance-confidence regime", detail: "ADA can strengthen when treasury decisions and development updates look credible." },
          { title: "Delivery-doubt regime", detail: "ADA can lag when app activity and development delivery disappoint markets." },
          { title: "Legacy-L1 rotation regime", detail: "ADA can move with older smart-contract assets during broad liquidity rotations." },
        ],
        sourceBackedClaims: [
          { title: "Treasury balance", detail: "Cardano's supply summary showed 1,473,782,005 ADA in the treasury during review." },
          { title: "Treasury withdrawals", detail: "The same supply source showed 216,719,540 ADA withdrawn." },
          { title: "Treasury additions", detail: "The same source showed 748,137,426 ADA added to the treasury." },
          { title: "Foundation allocation", detail: "The 2025 Foundation report referenced CHF 23.6M in resources allocated." },
        ],
        reviewNotes: [
          "Do not teach ADA only through ideology or founder commentary; anchor it in treasury, staking, governance, and usage data.",
          "Date treasury figures because they can change through withdrawals and additions.",
          "Use crypto terms: staking, validator or stake-pool distribution, governance, slippage, liquidity depth, funding, and open interest.",
        ],
      },
    },
  },
  tron: {
    lastReviewed: retrievedAt,
    sources: [batchSources.tronScanHome, batchSources.tronQ12026, batchSources.tronQ12026Pdf, batchSources.tronEconomicModel, batchSources.tronStablecoinOverview, batchSources.tronUsdt],
    drivers: [
      { title: "Stablecoin settlement", detail: "TRON's biggest market role is high-volume stablecoin settlement, especially USDT." },
      { title: "Transaction cost and speed", detail: "Users choose TRON when transfer cost and practical settlement speed are attractive." },
      { title: "TRX burn and resource model", detail: "Energy, bandwidth, burns, and fee mechanics shape TRX utility and supply pressure." },
      { title: "USDT chain concentration", detail: "Large USDT supply on TRON makes the chain important but also concentration-sensitive." },
      { title: "Governance and super representatives", detail: "TRON's delegated model means students must review governance and validator-like participants." },
      { title: "Regulatory and issuer risk", detail: "Stablecoin-heavy chains are exposed to stablecoin issuer and policy changes." },
    ],
    publicRisks: [
      { risk: "Stablecoin concentration", watch: "TRON can look strong because of USDT activity while other app categories remain less important." },
      { risk: "Issuer dependency", watch: "Tether policy or regulation can affect TRON usage." },
      { risk: "Governance concentration", watch: "Super representative structure needs review." },
      { risk: "Fee-model confusion", watch: "Energy, bandwidth, burns, and transfer fees need separate explanation." },
    ],
    lab: {
      deskBrief:
        "TRON is studied as a stablecoin-settlement network. The paid desk connects TRX to USDT supply, settlement volume, accounts, transactions, TVL, resource costs, burn mechanics, and issuer/regulatory risk.",
      researchQuestion:
        "Is TRX moving because TRON stablecoin settlement improved, USDT supply grew, resource costs changed, TRX burn pressure increased, or stablecoin policy risk shifted?",
      operatingModel:
        "Start with stablecoin supply and settlement volume, then check TRONSCAN accounts, transactions, TVL, USDT contract data, TRX mint/burn figures, resource model, governance, and exchange liquidity.",
      participants: [
        { name: "TRON DAO", role: "Ecosystem publisher and network steward", whyItMatters: "TRON DAO publishes quarterly data that anchors stablecoin and TRX supply lessons.", sourceBasis: "TRON Q1 2026 quarterly report" },
        { name: "TRON Super Representatives", role: "Block producers and governance participants", whyItMatters: "They shape network operation under TRON's delegated model.", sourceBasis: "TRON developer and explorer documentation" },
        { name: "Tether", role: "Major stablecoin issuer on TRON", whyItMatters: "USDT is the largest practical use case on TRON, making Tether central to TRX analysis.", sourceBasis: "TRONSCAN USDT contract and Tether transparency trail" },
        { name: "TRONSCAN", role: "Primary explorer and data source", whyItMatters: "Students need explorer data for accounts, transactions, TVL, and contract-level stablecoin supply.", sourceBasis: "TRONSCAN homepage and stablecoin dashboard" },
        { name: "TRON stablecoin users", role: "Settlement demand source", whyItMatters: "User transfers drive the network's strongest market role.", sourceBasis: "TRON Q1 2026 quarterly report" },
        { name: "Crypto exchanges", role: "TRX and USDT liquidity venues", whyItMatters: "Exchange depth affects practical TRX execution and stablecoin transfer routes.", sourceBasis: "TRON market-structure context and USDT contract data" },
      ],
      historicalEvents: [
        { year: "2017", title: "TRON project launches", detail: "TRON begins as a blockchain project focused on digital content and scalable transactions." },
        { year: "2018", title: "Mainnet migration", detail: "TRX moves away from Ethereum-token status to its own chain." },
        { year: "2019-2021", title: "USDT on TRON expands", detail: "TRON becomes a major stablecoin transfer rail." },
        { year: "2022", title: "Stablecoin sector stress rises", detail: "Stablecoin risk becomes a central item for TRON research." },
        { year: "2024-2025", title: "Settlement footprint grows", detail: "TRON continues building its identity around low-cost stablecoin movement." },
        { year: "2026", title: "Q1 report shows large stablecoin settlement", detail: "TRON DAO reports $86.02B stablecoin supply and $1.96T stablecoin settlement volume in Q1." },
      ],
      correlations: [
        { market: "USDT", relationship: "TRON activity is closely tied to USDT supply and transfers.", learnerNote: "TRON analysis begins with stablecoins." },
        { market: "Ethereum", relationship: "TRON competes as a cheaper transfer rail for some stablecoin users.", learnerNote: "Compare fees and settlement use, not brand perception." },
        { market: "Stablecoin regulation", relationship: "Policy can affect issuer behavior and user access.", learnerNote: "TRON risk includes stablecoin issuer risk." },
      ],
      riskMap: [
        { risk: "USDT dependency", watch: "A Tether-specific issue can affect TRON usage." },
        { risk: "Governance concentration", watch: "Super representative structure needs monitoring." },
        { risk: "Stablecoin policy shock", watch: "Regulation can affect transfer rails and exchange access." },
        { risk: "App diversity weakness", watch: "TRON may rely too heavily on stablecoin transfers." },
        { risk: "Resource-cost surprise", watch: "Energy, bandwidth, and fees can change user behavior." },
      ],
      researchRoutine: [
        "Check TRON stablecoin supply and USDT contract supply first.",
        "Review accounts, transactions, TVL, and stablecoin settlement volume.",
        "Read TRX mint, burn, and net issuance from the latest report.",
        "Check resource costs, energy, bandwidth, and governance updates.",
        "Compare TRX liquidity depth and derivatives positioning before judging price behavior.",
      ],
      relatedLessons: ["Level 5 Crypto Liquidity", "Level 8 Stablecoin Mechanics", "Level 9 Counterparty Risk"],
      relatedStrategies: ["Stablecoin Settlement Monitor", "Network Adoption Trend", "Liquidity Risk Assessment"],
      deepDive: {
        identity: [
          { title: "Stablecoin settlement chain", detail: "TRON's core lesson is stablecoin movement, especially USDT transfers at large scale." },
          { title: "Resource-model asset", detail: "TRX is tied to bandwidth, energy, fees, burns, and network resources." },
          { title: "Issuer-dependent utility", detail: "TRON's strongest use case depends heavily on stablecoin issuers and user demand for transfers." },
        ],
        authorityOrFounders: [
          { title: "TRON DAO role", detail: "TRON DAO publishes ecosystem data and supports network development." },
          { title: "Super representative model", detail: "TRON uses elected block producers, making governance and concentration important." },
          { title: "Tether dependency", detail: "Tether's USDT issuance makes TRON one of the most important stablecoin rails." },
        ],
        holderExposureMap: [
          exposure({ entityName: "TRON network", entityType: "Blockchain network", assetOrInstrument: "Total accounts", amount: "393,142,581", unit: "accounts", exposureType: "Network adoption metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tronScanHome.title, sourcePublisher: batchSources.tronScanHome.publisher, sourceUrl: batchSources.tronScanHome.url, freshnessStatus: "current", whyItMatters: "Account count shows the scale of TRON's user footprint, though it should not be confused with unique active humans." }),
          exposure({ entityName: "TRON network", entityType: "Blockchain network", assetOrInstrument: "Total value locked", amount: "26.6", unit: "billion USD", exposureType: "Network value locked metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tronScanHome.title, sourcePublisher: batchSources.tronScanHome.publisher, sourceUrl: batchSources.tronScanHome.url, freshnessStatus: "current", whyItMatters: "TVL helps students compare stablecoin-heavy activity with broader capital locked on the network." }),
          exposure({ entityName: "TRON stablecoin market", entityType: "Stablecoin settlement layer", assetOrInstrument: "Q1 stablecoin supply", amount: "86.02", unit: "billion USD", exposureType: "Stablecoin supply on network", asOfDate: "2026-03-31", sourcePublishedAt: "2026-Q1", retrievedAt, sourceTitle: batchSources.tronQ12026.title, sourcePublisher: batchSources.tronQ12026.publisher, sourceUrl: batchSources.tronQ12026.url, freshnessStatus: "recent", whyItMatters: "Stablecoin supply is the central metric for TRON's practical market role." }),
          exposure({ entityName: "TRON stablecoin market", entityType: "Stablecoin settlement layer", assetOrInstrument: "Q1 stablecoin settlement volume", amount: "1.96", unit: "trillion USD", exposureType: "Quarterly transfer volume", asOfDate: "2026-03-31", sourcePublishedAt: "2026-Q1", retrievedAt, sourceTitle: batchSources.tronQ12026Pdf.title, sourcePublisher: batchSources.tronQ12026Pdf.publisher, sourceUrl: batchSources.tronQ12026Pdf.url, freshnessStatus: "recent", whyItMatters: "Settlement volume shows why TRON is important for stablecoin flows rather than only for TRX speculation." }),
          exposure({ entityName: "TRON USDT contract", entityType: "Stablecoin contract", assetOrInstrument: "USDT total supply on TRON", amount: "90,289,221,400.885127", unit: "USDT", exposureType: "Chain-specific stablecoin supply", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tronUsdt.title, sourcePublisher: batchSources.tronUsdt.publisher, sourceUrl: batchSources.tronUsdt.url, freshnessStatus: "current", whyItMatters: "Current USDT contract supply gives students a direct chain-level measure of TRON's stablecoin footprint." }),
        ],
        marketStructure: [
          { title: "Stablecoin transfer layer", detail: "USDT movement is TRON's dominant practical use case." },
          { title: "Resource layer", detail: "Energy, bandwidth, and burns connect network usage to TRX demand." },
          { title: "Governance layer", detail: "Super representatives operate the chain and create governance concentration questions." },
          { title: "Exchange liquidity layer", detail: "TRX and TRON USDT depend on exchange and wallet support for practical access." },
        ],
        driverRegimes: [
          { title: "Stablecoin-growth regime", detail: "TRON strengthens when USDT supply and settlement activity grow." },
          { title: "Issuer-risk regime", detail: "TRON weakens when stablecoin issuer or regulatory concerns rise." },
          { title: "Resource-cost regime", detail: "User behavior can shift when bandwidth, energy, or fee conditions change." },
        ],
        sourceBackedClaims: [
          { title: "TRON accounts", detail: "TRONSCAN showed 393,142,581 total accounts during review." },
          { title: "TVL", detail: "TRONSCAN showed about $26.6B total value locked during review." },
          { title: "Q1 stablecoin supply", detail: "TRON's Q1 2026 report cited $86.02B stablecoin supply." },
          { title: "Q1 stablecoin volume", detail: "The same report cited $1.96T stablecoin settlement volume in Q1." },
        ],
        reviewNotes: [
          "Do not teach TRON as a broad smart-contract story first; teach stablecoin settlement first.",
          "Date TRONSCAN metrics because accounts, TVL, and USDT supply update constantly.",
          "Use crypto language: slippage, liquidity depth, chain fees, bandwidth, energy, stablecoin supply, and issuer risk.",
        ],
      },
    },
  },
  toncoin: {
    lastReviewed: retrievedAt,
    sources: [batchSources.tonHome, batchSources.tonStat, batchSources.tonLocker, batchSources.tonFoundation],
    drivers: [
      { title: "Telegram ecosystem access", detail: "TON is watched because Telegram-linked distribution can expose crypto tools to a large user base." },
      { title: "Validator and node growth", detail: "Validator count and node count show whether network operation is broadening." },
      { title: "Wallet and contract activity", detail: "Monthly active wallets, smart contracts, and transactions help separate real usage from attention." },
      { title: "Locked supply and vesting", detail: "Lockups such as the TON Believers Fund can affect liquid supply and future release pressure." },
      { title: "Mini-app and payment activity", detail: "Telegram mini-apps, payments, games, and community products can change TON demand." },
      { title: "Liquidity depth", detail: "TON can move sharply if exchange depth and derivatives positioning are thinner than major L1 assets." },
    ],
    publicRisks: [
      { risk: "Telegram dependency", watch: "TON attention can rely heavily on Telegram integration and policy." },
      { risk: "Lockup release pressure", watch: "Large locked balances can become future supply pressure." },
      { risk: "Usage quality", watch: "Wallet or app counts need activity quality checks." },
      { risk: "Liquidity depth", watch: "TON may have thinner depth than older large-cap crypto assets in some venues." },
    ],
    lab: {
      deskBrief:
        "Toncoin is studied as a messaging-linked network asset. The paid desk connects TON to validators, nodes, wallets, smart contracts, Telegram distribution, mini-app activity, locked supply, and liquidity depth.",
      researchQuestion:
        "Is TON moving because network activity improved, Telegram-linked distribution expanded, locked-supply expectations changed, validator participation grew, or exchange liquidity rotated into TON?",
      operatingModel:
        "Start with TON network metrics, then check validators, nodes, wallets, smart contracts, transaction activity, Telegram-related product use, lockup schedules, exchange depth, funding, and slippage.",
      participants: [
        { name: "TON Foundation", role: "Ecosystem steward", whyItMatters: "The Foundation supports builders, grants, ecosystem growth, and public TON positioning.", sourceBasis: "TON Foundation official page" },
        { name: "The Open Network validators", role: "Consensus operators", whyItMatters: "Validator count and stake distribution affect network trust and decentralization.", sourceBasis: "TON.org metrics" },
        { name: "TON node operators", role: "Network infrastructure", whyItMatters: "Node count helps learners judge operational breadth beyond price action.", sourceBasis: "TON.org metrics" },
        { name: "Telegram ecosystem builders", role: "Distribution and app channel", whyItMatters: "Mini-apps and wallet integrations can connect TON to Telegram users.", sourceBasis: "TON and foundation ecosystem material" },
        { name: "TON Believers Fund participants", role: "Locked-supply participants", whyItMatters: "Lockup behavior affects liquid supply and future release schedules.", sourceBasis: "TON Locker community explainer" },
        { name: "TON wallets and users", role: "Network demand source", whyItMatters: "Monthly active wallets and transaction metrics show whether TON has real activity.", sourceBasis: "TON.org and TonStat metrics" },
      ],
      historicalEvents: [
        { year: "2018-2020", title: "Telegram Open Network origin", detail: "TON begins with Telegram-linked ambitions before legal and structural changes." },
        { year: "2020", title: "Original Telegram project stops", detail: "Regulatory pressure forces Telegram to step away from the original token sale path." },
        { year: "2021", title: "Community network continues", detail: "The Open Network continues through community and foundation-led development." },
        { year: "2023-2024", title: "Telegram integrations expand attention", detail: "Wallet, mini-app, and messaging-linked usage make TON more visible." },
        { year: "2025", title: "Locked supply debate grows", detail: "Market participants monitor lockups and future release schedules." },
        { year: "2026", title: "TON.org publishes large network metrics", detail: "TON's public page displays validators, nodes, smart contracts, wallets, and 24-hour transaction data." },
      ],
      correlations: [
        { market: "Telegram ecosystem", relationship: "TON attention is closely tied to Telegram distribution and mini-app activity.", learnerNote: "Check real usage before assuming distribution equals demand." },
        { market: "Layer-1 assets", relationship: "TON can rotate with other L1 networks.", learnerNote: "Compare users, validators, and liquidity depth." },
        { market: "Exchange liquidity", relationship: "TON can move fast when depth is thinner than larger assets.", learnerNote: "Slippage and venue support matter." },
      ],
      riskMap: [
        { risk: "Distribution overstatement", watch: "Telegram access does not automatically mean token demand." },
        { risk: "Lockup release pressure", watch: "Locked TON can become future market supply." },
        { risk: "Metric quality", watch: "Wallet and transaction counts need context, not blind acceptance." },
        { risk: "Validator concentration", watch: "Validator and node distribution should be monitored." },
        { risk: "Liquidity shock", watch: "TON can gap when depth thins across major venues." },
      ],
      researchRoutine: [
        "Review TON trend against BTC and other L1 assets.",
        "Check validators, nodes, smart contracts, wallets, and transaction data from TON.org and TonStat.",
        "Review Telegram-linked product adoption and mini-app usage carefully.",
        "Check locked-supply schedules and public lockup references.",
        "Audit exchange depth, funding, open interest, and slippage before judging move quality.",
      ],
      relatedLessons: ["Level 8 Ecosystem Growth", "Level 8 Network Tokenomics", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Ecosystem Growth Play", "Narrative With Data Confirmation", "Liquidity Risk Assessment"],
      deepDive: {
        identity: [
          { title: "Messaging-linked network asset", detail: "TON is different because its market story is connected to Telegram distribution and app access." },
          { title: "Network-activity lesson", detail: "Validators, nodes, contracts, wallets, and transactions must support any TON thesis." },
          { title: "Locked-supply lesson", detail: "TON students must understand lockups and release schedules before trusting supply narratives." },
        ],
        authorityOrFounders: [
          { title: "TON Foundation", detail: "The Foundation supports ecosystem growth, grants, builders, and public education." },
          { title: "Community continuation", detail: "TON's history includes Telegram origin and later community-led continuation." },
          { title: "Validator network", detail: "Validators and nodes operate the network and provide decentralization evidence." },
        ],
        holderExposureMap: [
          exposure({ entityName: "The Open Network", entityType: "Blockchain network", assetOrInstrument: "Validators", amount: "392", unit: "validators", exposureType: "Consensus participation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tonHome.title, sourcePublisher: batchSources.tonHome.publisher, sourceUrl: batchSources.tonHome.url, freshnessStatus: "current", whyItMatters: "Validator count is a direct network-security metric for TON and belongs in every paid profile update." }),
          exposure({ entityName: "The Open Network", entityType: "Blockchain network", assetOrInstrument: "Nodes", amount: "1,485", unit: "nodes", exposureType: "Network infrastructure", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tonHome.title, sourcePublisher: batchSources.tonHome.publisher, sourceUrl: batchSources.tonHome.url, freshnessStatus: "current", whyItMatters: "Node count helps learners judge the network's operational footprint beyond exchange price action." }),
          exposure({ entityName: "The Open Network", entityType: "Blockchain network", assetOrInstrument: "Smart contracts", amount: "174.7", unit: "million contracts", exposureType: "Application footprint", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tonHome.title, sourcePublisher: batchSources.tonHome.publisher, sourceUrl: batchSources.tonHome.url, freshnessStatus: "current", whyItMatters: "Smart-contract count gives students an app-footprint metric, though quality and activity must be checked separately." }),
          exposure({ entityName: "The Open Network", entityType: "Blockchain network", assetOrInstrument: "Monthly active wallets", amount: "2.1", unit: "million wallets", exposureType: "User activity metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tonHome.title, sourcePublisher: batchSources.tonHome.publisher, sourceUrl: batchSources.tonHome.url, freshnessStatus: "current", whyItMatters: "Monthly active wallets help learners connect Telegram-linked distribution to actual network activity." }),
          exposure({ entityName: "The Open Network", entityType: "Blockchain network", assetOrInstrument: "Transactions last 24 hours", amount: "3.1", unit: "million transactions", exposureType: "Recent network usage", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.tonHome.title, sourcePublisher: batchSources.tonHome.publisher, sourceUrl: batchSources.tonHome.url, freshnessStatus: "current", whyItMatters: "Recent transaction count shows whether TON activity is visible now rather than only promised through distribution narratives." }),
        ],
        marketStructure: [
          { title: "Validator and node layer", detail: "TON's validator and node counts anchor the network-health lesson." },
          { title: "Telegram app layer", detail: "Wallets, mini-apps, games, and payments can create user demand." },
          { title: "Lockup layer", detail: "Locked supply and future releases can change liquid market conditions." },
          { title: "Exchange liquidity layer", detail: "TON venue support, derivatives, and order-book depth control execution quality." },
        ],
        driverRegimes: [
          { title: "Telegram-adoption regime", detail: "TON strengthens when messaging-linked apps show real user activity." },
          { title: "Lockup-risk regime", detail: "TON weakens when future supply release concerns dominate." },
          { title: "L1 rotation regime", detail: "TON can move with other L1 assets when crypto liquidity rotates toward network tokens." },
        ],
        sourceBackedClaims: [
          { title: "Validator count", detail: "TON.org showed 392 validators during review." },
          { title: "Node count", detail: "TON.org showed 1,485 nodes during review." },
          { title: "Monthly wallets", detail: "TON.org showed 2.1M monthly active wallets during review." },
          { title: "Recent transactions", detail: "TON.org showed 3.1M transactions over the last 24 hours during review." },
        ],
        reviewNotes: [
          "Do not teach TON as Telegram exposure alone; require network activity and liquidity evidence.",
          "Date TON.org metrics because they update frequently.",
          "Use crypto language: validator set, nodes, slippage, liquidity depth, funding, open interest, lockups, and wallet activity.",
        ],
      },
    },
  },
};
