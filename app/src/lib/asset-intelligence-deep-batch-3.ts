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
  avalancheHome: source(
    "Avalanche",
    "Avalanche",
    "https://www.avax.network/",
    "Official ecosystem source for Avalanche network positioning, AVAX utility, and builder references."
  ),
  avalancheDocs: source(
    "Avalanche Builder Hub",
    "Avalanche",
    "https://build.avax.network/docs",
    "Official technical documentation for Avalanche L1 architecture, validators, interoperability, and network mechanics."
  ),
  avalancheValidators: source(
    "Avalanche validators",
    "Avalanche",
    "https://www.avax.network/build/validators",
    "Official staking page used for AVAX total stake, validator count, delegated stake, and delegations during review."
  ),
  avalancheTreasurySec: source(
    "Avalanche Treasury Co. investor presentation",
    "SEC",
    "https://www.sec.gov/Archives/edgar/data/2029492/000121390025094940/ea025986801ex99-1_mount.htm",
    "SEC-hosted investor presentation used for public treasury-company exposure and stated AVAX acquisition plan."
  ),
  chainlinkHome: source(
    "Chainlink",
    "Chainlink",
    "https://chain.link/",
    "Official source for Chainlink's oracle, cross-chain, proof-of-reserve, automation, and capital-markets infrastructure role."
  ),
  chainlinkDocs: source(
    "Chainlink documentation",
    "Chainlink",
    "https://docs.chain.link/",
    "Official developer documentation for Chainlink services, data feeds, automation, CCIP, and integrations."
  ),
  chainlinkStaking: source(
    "Chainlink staking",
    "Chainlink",
    "https://chain.link/economics/staking",
    "Official staking source for the v0.2 pool cap, community allotment, and node-operator allotment."
  ),
  chainlinkReserve: source(
    "Chainlink Reserve",
    "Chainlink",
    "https://reserve.chain.link/",
    "Official reserve dashboard used for Chainlink Reserve value and reserve accumulation context."
  ),
  chainlinkReserveBlog: source(
    "Introducing the Chainlink Reserve",
    "Chainlink",
    "https://chain.link/blog/chainlink-reserve-strategic-link-reserve",
    "Official explanation of how offchain and onchain revenue can flow into a strategic LINK reserve."
  ),
  chainlinkSupply: source(
    "LINK circulating supply",
    "Chainlink",
    "https://chain.link/circulating-supply",
    "Official Chainlink source for LINK total supply cap, token release schedule, and supply reporting."
  ),
  shibEtherscan: source(
    "SHIBA INU token",
    "Etherscan",
    "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    "Explorer source for SHIB max total supply, holder count, transfer activity, and concentration limitations."
  ),
  shibariumScan: source(
    "Shibarium explorer",
    "ShibariumScan",
    "https://shibariumscan.io/",
    "Blockscout-powered explorer used for Shibarium transactions, wallet-address count, and network activity context."
  ),
  shibariumDocs: source(
    "Shibarium explorer documentation",
    "Shib.io",
    "https://docs.shib.io/shibarium/quickstart/shibarium-explorer",
    "Official documentation explaining ShibariumScan blocks, transactions, charts, API access, and contract verification."
  ),
  shibariumBurn: source(
    "Shibarium burn portal",
    "Shib.io",
    "https://shib.io/shibarium/burn",
    "Official burn-mechanism page describing how BONE gas fees can be collected and used for SHIB burns."
  ),
  vitalikBurnTx: source(
    "Vitalik SHIB burn transaction",
    "Etherscan",
    "https://etherscan.io/tx/0x125714bb4db48757007fff2671b37637bbfd6d47b3a4757ebbd0c5222984f905",
    "Explorer transaction source for the 2021 burn of more than 410 trillion SHIB to a null address."
  ),
  polkadotHome: source(
    "Polkadot",
    "Polkadot",
    "https://polkadot.com/",
    "Official source for Polkadot's multichain network identity, DOT role, and ecosystem references."
  ),
  polkadotWiki: source(
    "Polkadot Wiki",
    "Polkadot",
    "https://wiki.polkadot.com/",
    "Official wiki source for staking, validator, nominator, treasury, governance, and network-architecture education."
  ),
  polkadotStaking: source(
    "Staking",
    "Polkadot Wiki",
    "https://wiki.polkadot.com/learn/learn-staking/",
    "Official staking education source for validators, nominators, eras, rewards, and decentralization mechanics."
  ),
  polkadotTreasuryQ4: source(
    "2025 Q4 Polkadot Treasury Report",
    "Polkadot Governance Forum",
    "https://forum.polkadot.network/t/2025-q4-polkadot-treasury-report/16847",
    "Governance forum treasury report used for DOT balances, spending, liabilities, and category detail."
  ),
  parityTreasuryData: source(
    "Polkadot treasury data",
    "Parity Data",
    "https://data.parity.io/treasury",
    "Treasury dashboard reference for ongoing Polkadot treasury monitoring and historical budget analysis."
  ),
  bitcoinCashHome: source(
    "Bitcoin Cash",
    "BitcoinCash.org",
    "https://bitcoincash.org/en/",
    "Official educational source for Bitcoin Cash purpose, peer-to-peer cash framing, and 21 million BCH cap."
  ),
  bitcoinCashBitinfocharts: source(
    "Bitcoin Cash statistics",
    "BitInfoCharts",
    "https://bitinfocharts.com/bitcoin%20cash/",
    "Explorer-style source used for BCH block reward, hash rate, block count, difficulty, fees, and recent issuance."
  ),
  bitcoinCashHalving: source(
    "Bitcoin Cash halving countdown",
    "NiceHash",
    "https://www.nicehash.com/countdown/bch-halving-2028-04-03-12-00",
    "Mining reference used for current BCH subsidy and next programmed block-reward reduction."
  ),
  bitcoinCashBlockchair: source(
    "Bitcoin Cash explorer",
    "Blockchair",
    "https://blockchair.com/bitcoin-cash",
    "Explorer reference for BCH blocks, transactions, outputs, and chain activity checks."
  ),
  litecoinHome: source(
    "Litecoin",
    "Litecoin Foundation",
    "https://litecoin.org/",
    "Official Litecoin Foundation source for Litecoin's identity, payment focus, and ecosystem links."
  ),
  litecoinBitinfocharts: source(
    "Litecoin statistics",
    "BitInfoCharts",
    "https://bitinfocharts.com/litecoin/",
    "Explorer-style source used for LTC block reward, block cadence, hash rate, daily rewards, and difficulty."
  ),
  litecoinHalving: source(
    "Litecoin halving countdown",
    "NiceHash",
    "https://www.nicehash.com/countdown/ltc-halving-2027-07-30-12-00",
    "Mining reference for Litecoin's current 6.25 LTC block reward and next programmed halving."
  ),
  litecoinMweb: source(
    "MWEB has officially activated",
    "Litecoin.com",
    "https://litecoin.com/news/mweb-has-officially-activated",
    "Foundation news source for MimbleWimble Extension Blocks activation and Litecoin privacy-option context."
  ),
  litecoinRichList: source(
    "Top Litecoin addresses",
    "BitInfoCharts",
    "https://bitinfocharts.com/top-100-richest-litecoin-addresses.html",
    "Explorer-style rich-list source used only with attribution limits because wallet ownership can change or be mislabeled."
  ),
  uniswapUniLaunch: source(
    "Introducing UNI",
    "Uniswap Labs",
    "https://blog.uniswap.org/uni",
    "Official UNI launch source for genesis supply, allocation categories, governance rollout, and vesting context."
  ),
  uniswapFoundationFinancials: source(
    "Uniswap Foundation FY 2025 financials",
    "Uniswap Governance Forum",
    "https://gov.uniswap.org/t/uniswap-foundation-summary-fy-2025-financials/26068",
    "Official foundation financial summary for cash, stables, UNI, ETH, runway, grant commitments, and operating spend."
  ),
  uniswapGovernance: source(
    "Uniswap governance",
    "Uniswap Governance",
    "https://gov.uniswap.org/",
    "Official governance forum used for proposals, treasury decisions, foundation reports, and protocol-development debate."
  ),
  uniswapDocs: source(
    "Uniswap protocol concepts",
    "Uniswap Docs",
    "https://docs.uniswap.org/concepts/protocol/overview",
    "Official documentation for automated market makers, liquidity pools, swaps, and protocol mechanics."
  ),
  aptosTokenomics: source(
    "Aptos tokenomics overview",
    "Aptos Foundation",
    "https://aptosnetwork.com/currents/aptos-tokenomics-overview",
    "Official tokenomics source for initial supply, allocation, lockups, staking rewards, and release schedule."
  ),
  aptosStaking: source(
    "Aptos staking",
    "Aptos Docs",
    "https://aptos.dev/network/blockchain/staking",
    "Official staking documentation for validator and delegation structure, required stake, and consensus role."
  ),
  aptosDocs: source(
    "Aptos documentation",
    "Aptos",
    "https://aptos.dev/",
    "Official developer documentation for Move, accounts, transactions, consensus, and network architecture."
  ),
  aptosExplorer: source(
    "Aptos explorer validators",
    "Aptos Labs",
    "https://explorer.aptoslabs.com/validators/delegation",
    "Official explorer reference for validator and delegation review when current validator data is needed."
  ),
  nearHome: source(
    "NEAR Protocol",
    "NEAR",
    "https://near.org/",
    "Official ecosystem source for NEAR's user-owned AI, chain abstraction, app ecosystem, and protocol identity."
  ),
  nearDocs: source(
    "NEAR documentation",
    "NEAR",
    "https://docs.near.org/",
    "Official documentation for NEAR accounts, validators, smart contracts, chain abstraction, and protocol mechanics."
  ),
  nearValidatorsDocs: source(
    "Validators",
    "NEAR Docs",
    "https://docs.near.org/protocol/network/validators",
    "Official validator source explaining NEAR validator duties, staking position, and network-security role."
  ),
  nearInflation: source(
    "Supporting community proposals to upgrade NEAR tokenomics",
    "NEAR Foundation",
    "https://www.near.org/blog/supporting-community-proposals-to-upgrade-near-tokenomics-halving-inflation-and-introducing-rewards-to-support-small-validators-and-venear-holders",
    "Foundation source for the move to lower maximum annual inflation toward 2.5% and improve validator incentives."
  ),
  nearBlocksValidators: source(
    "NEAR validator list",
    "NearBlocks",
    "https://nearblocks.io/validators",
    "Explorer source for current validator count, total staked NEAR, and validator concentration observations."
  ),
  ethereumClassicHome: source(
    "Ethereum Classic",
    "EthereumClassic.org",
    "https://ethereumclassic.org/",
    "Official ecosystem source for Ethereum Classic identity, proof-of-work stance, and educational references."
  ),
  ethereumClassicEcip1017: source(
    "ECIP-1017 monetary policy",
    "Ethereum Classic ECIPs",
    "https://ecips.ethereumclassic.org/ECIPs/ecip-1017",
    "Official ECIP source for ETC's 5M20 emission schedule and upper supply bound."
  ),
  ethereumClassicBitinfocharts: source(
    "Ethereum Classic statistics",
    "BitInfoCharts",
    "https://bitinfocharts.com/ethereum%20classic/",
    "Explorer-style source used for ETC block reward, hash rate, difficulty, daily rewards, and block cadence."
  ),
  ethereumClassicAttacks: source(
    "What is a 51% attack?",
    "EthereumClassic.org",
    "https://ethereumclassic.org/blog/2023-11-21-what-is-a-51-attack/",
    "Official educational source for Ethereum Classic's 2019 and 2020 51% attack history and security lessons."
  ),
  coinbaseEtcAttack: source(
    "Coinbase perspective on ETC double spends",
    "Coinbase",
    "https://www.coinbase.com/blog/coinbases-perspective-on-the-recent-ethereum-classic-etc-double-spend",
    "Exchange security source for the 2020 ETC double-spend amounts Coinbase observed during network attacks."
  ),
};

export const assetDeepBatch3Enhancements: Record<string, AssetProfileEnhancement> = {
  avalanche: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Avalanche? AVAX Network and Staking Guide",
    seoDescription:
      "Study Avalanche, AVAX staking, validators, custom L1 networks, treasury exposure, and the market forces that move the ecosystem.",
    publicHeadline: "Avalanche turns blockchain infrastructure into custom networks.",
    publicSubheadline:
      "AVAX matters because Avalanche combines a public smart-contract chain, custom L1 networks, validator economics, DeFi liquidity, gaming infrastructure, and institutional tokenization experiments.",
    plainEnglish:
      "Avalanche is a blockchain ecosystem where teams can build their own dedicated networks while still connecting to the broader Avalanche environment. AVAX is used for fees, staking, validator participation, and network-level coordination.",
    marketRole:
      "AVAX is studied as an application-chain asset. Its lesson is not only speed; students need to connect C-Chain activity, custom L1 adoption, validator count, delegated stake, developer traction, and market liquidity before forming a view.",
    whyTradersWatch:
      "Traders watch AVAX when smart-contract assets rotate, when new Avalanche L1s launch, when DeFi liquidity changes, when validators or stake levels move, and when institutional tokenization headlines create renewed demand for the network.",
    lurnavaMonitorNote:
      "Lurnava monitors Avalanche through validator data, delegated stake, C-Chain activity, custom L1 launches, DeFi liquidity, gaming network activity, treasury-company filings, exchange depth, slippage, and relative strength versus other Layer 1 assets.",
    conversionCta:
      "Inside Lurnava, learn how to separate a real network-usage thesis from an AVAX price move driven only by sector rotation or short-lived attention.",
    sources: [batchSources.avalancheHome, batchSources.avalancheDocs, batchSources.avalancheValidators, batchSources.avalancheTreasurySec],
    drivers: [
      { title: "Custom L1 adoption", detail: "Avalanche's main differentiator is the ability for builders to launch specialized networks with their own performance and compliance choices." },
      { title: "Validator participation", detail: "The official validator page gives students concrete AVAX stake, validation stake, delegated stake, and validator counts to review." },
      { title: "C-Chain activity", detail: "Smart-contract usage, DeFi liquidity, and fee behavior show whether users are active on the core application layer." },
      { title: "Institutional tokenization", detail: "Tokenization and treasury-company filings can expand attention, but students must separate disclosed holdings from plans." },
      { title: "Liquidity depth", detail: "AVAX can move sharply when spot and derivatives depth thins, so slippage and exchange concentration matter." },
      { title: "Layer 1 rotation", detail: "AVAX often trades in relation to Ethereum, Solana, and other smart-contract networks during sector-wide rotations." },
    ],
    publicRisks: [
      { risk: "Adoption spread", watch: "Custom networks can fragment activity, so students should check whether usage stays isolated or benefits AVAX demand." },
      { risk: "Incentive-led liquidity", watch: "DeFi activity can rise while rewards are active and then cool when incentives decline." },
      { risk: "Validator concentration", watch: "A large stake base is useful, but students still need operator distribution and delegation quality." },
      { risk: "Institutional headline gap", watch: "A filing or announced plan is not the same as finished, on-chain demand." },
      { risk: "Cross-chain competition", watch: "Avalanche competes with other high-throughput and modular networks for builders and liquidity." },
    ],
    lab: {
      deskBrief:
        "Avalanche is a custom-network and staking lesson. The Asset Lab studies whether AVAX demand is supported by verifiable stake, validator participation, C-Chain usage, custom L1 adoption, DeFi liquidity, gaming or institutional deployments, treasury-company exposure, and exchange depth.",
      researchQuestion:
        "Is AVAX moving because Avalanche network usage improved, validator participation changed, custom L1 adoption expanded, institutional filings increased attention, or Layer 1 assets rotated together?",
      operatingModel:
        "Start with the official validator page, then move outward to C-Chain activity, custom network launches, DeFi liquidity, institutional filings, and market depth. A strong lesson teaches students to connect usage, security, and liquidity rather than repeating a speed story.",
      participants: [
        { name: "Avalanche Foundation", role: "Ecosystem steward", whyItMatters: "The foundation supports network growth, grants, partnerships, and ecosystem positioning.", sourceBasis: "Avalanche official site and Builder Hub." },
        { name: "Avalanche validators", role: "Consensus participants", whyItMatters: "Validators secure the network and turn AVAX staking into a measurable security layer.", sourceBasis: "Avalanche validators page." },
        { name: "Delegators", role: "Stake providers", whyItMatters: "Delegated stake shows how non-validator holders participate in security and reward economics.", sourceBasis: "Avalanche validators page." },
        { name: "Custom L1 builders", role: "Network creators", whyItMatters: "They create the specialized networks that make Avalanche different from a single-chain platform.", sourceBasis: "Avalanche Builder Hub documentation." },
        { name: "DeFi protocols", role: "Liquidity venues", whyItMatters: "Their activity decides whether capital is actually using Avalanche's application layer.", sourceBasis: "Avalanche ecosystem and Builder Hub references." },
        { name: "Avalanche Treasury Co.", role: "Public-market exposure vehicle", whyItMatters: "Its SEC-hosted materials show how public companies can create indirect AVAX exposure.", sourceBasis: "SEC investor presentation." },
      ],
      historicalEvents: [
        { year: "2020", title: "Avalanche mainnet goes live", detail: "The network enters public operation with fast-finality and smart-contract infrastructure." },
        { year: "2021", title: "DeFi expansion cycle", detail: "Liquidity programs and application growth make AVAX a major Layer 1 asset to track." },
        { year: "2022", title: "Subnet narrative matures", detail: "Custom network architecture becomes central to Avalanche's market identity." },
        { year: "2023", title: "Institutional and gaming focus grows", detail: "The market begins watching tokenization, enterprise, and gaming networks as separate adoption paths." },
        { year: "2024", title: "Avalanche L1 language expands", detail: "The ecosystem frames specialized networks as Avalanche L1s, helping students map use cases more clearly." },
        { year: "2025-2026", title: "Treasury-company interest appears", detail: "SEC-hosted materials show public-market structures exploring AVAX acquisition and treasury exposure." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "Avalanche competes for smart-contract users, liquidity, and developers.", learnerNote: "Compare activity and liquidity, not only fees." },
        { market: "Solana", relationship: "Both can trade as high-throughput Layer 1 assets during rotation.", learnerNote: "Check whether AVAX is moving on its own data or with the sector." },
        { market: "DeFi liquidity", relationship: "Avalanche demand improves when capital and applications are active.", learnerNote: "Separate incentive deposits from durable usage." },
      ],
      riskMap: [
        { risk: "Stake metric confusion", watch: "Students should separate total stake, validation stake, delegated stake, and validator count." },
        { risk: "Custom network isolation", watch: "A new network may create usage without directly improving AVAX liquidity demand." },
        { risk: "Exchange-depth shock", watch: "Thin order books can create oversized moves around news." },
        { risk: "Bridge or cross-chain risk", watch: "Cross-chain movement can carry operational and security risk." },
        { risk: "Public treasury execution", watch: "A planned acquisition vehicle may not complete purchases at the scale implied by headlines." },
      ],
      researchRoutine: [
        "Check official AVAX stake, validation stake, delegated stake, validators, and delegations.",
        "Review C-Chain activity, DeFi liquidity, and active application usage.",
        "Map new Avalanche L1 launches and classify whether they bring users, capital, or only announcements.",
        "Review treasury-company filings and separate disclosed holdings from planned acquisitions.",
        "Compare AVAX with ETH, SOL, and other Layer 1 assets for relative strength.",
        "Check spot depth, perpetual funding, open interest, and slippage before interpreting a sharp move.",
      ],
      relatedLessons: ["Level 7 Layer 1 Networks", "Level 8 DeFi Protocols", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Narrative With Data Confirmation", "Volatility Breakout (ATR) Strategy"],
      deepDive: {
        identity: [
          { title: "Custom-network Layer 1", detail: "Avalanche is best taught as infrastructure for many dedicated networks, not just one fast smart-contract chain." },
          { title: "Staking-backed security", detail: "AVAX staking metrics give students real numbers for network security and liquid-supply pressure." },
          { title: "Institutional narrative asset", detail: "Tokenization and public-market treasury structures can matter, but the lesson must use filings and disclosed amounts." },
        ],
        authorityOrFounders: [
          { title: "Ava Labs and Avalanche Foundation", detail: "Development and ecosystem support come through named organizations, so students can track official docs and announcements." },
          { title: "Validator governance layer", detail: "Validators and delegators are operational participants, not passive background characters." },
          { title: "SEC-filed treasury vehicle", detail: "Avalanche Treasury Co. materials give students a source-backed way to discuss public-market AVAX exposure." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Avalanche network", entityType: "Proof-of-stake network", assetOrInstrument: "Total AVAX stake", amount: "247,622,350", unit: "AVAX", exposureType: "Network security stake", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.avalancheValidators.title, sourcePublisher: batchSources.avalancheValidators.publisher, sourceUrl: batchSources.avalancheValidators.url, freshnessStatus: "current", whyItMatters: "Total stake shows the scale of AVAX committed to network security and is the starting point for the staking lesson." }),
          exposure({ entityName: "Avalanche validators", entityType: "Validator set", assetOrInstrument: "Validation stake", amount: "201,886,319", unit: "AVAX", exposureType: "Validator-controlled stake", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.avalancheValidators.title, sourcePublisher: batchSources.avalancheValidators.publisher, sourceUrl: batchSources.avalancheValidators.url, freshnessStatus: "current", whyItMatters: "Validation stake helps students separate validator-backed security from delegated participation." }),
          exposure({ entityName: "Avalanche delegators", entityType: "Delegated staking base", assetOrInstrument: "Delegated stake", amount: "45,736,031", unit: "AVAX", exposureType: "Delegated network stake", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.avalancheValidators.title, sourcePublisher: batchSources.avalancheValidators.publisher, sourceUrl: batchSources.avalancheValidators.url, freshnessStatus: "current", whyItMatters: "Delegated stake shows how much AVAX participates through validators without running validator infrastructure." }),
          exposure({ entityName: "Avalanche staking set", entityType: "Validator network", assetOrInstrument: "Staking validators", amount: "1,724", unit: "validators", exposureType: "Consensus participation count", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.avalancheValidators.title, sourcePublisher: batchSources.avalancheValidators.publisher, sourceUrl: batchSources.avalancheValidators.url, freshnessStatus: "current", whyItMatters: "Validator count gives learners a concrete decentralization metric to compare with other proof-of-stake networks." }),
          exposure({ entityName: "Avalanche delegations", entityType: "Delegation activity", assetOrInstrument: "Total delegations", amount: "161,835", unit: "delegations", exposureType: "Stake participation count", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.avalancheValidators.title, sourcePublisher: batchSources.avalancheValidators.publisher, sourceUrl: batchSources.avalancheValidators.url, freshnessStatus: "current", whyItMatters: "Delegation count helps students see whether staking participation is broadening beyond a small validator-only base." }),
          exposure({ entityName: "Avalanche Treasury Co.", entityType: "Public treasury company plan", assetOrInstrument: "Initial treasury assets", amount: "460", unit: "million USD", exposureType: "Planned AVAX treasury backing", asOfDate: "2025-2026 filing materials", retrievedAt, sourceTitle: batchSources.avalancheTreasurySec.title, sourcePublisher: batchSources.avalancheTreasurySec.publisher, sourceUrl: batchSources.avalancheTreasurySec.url, freshnessStatus: "recent", whyItMatters: "Public treasury assets can create institutional AVAX attention, but students must verify actual purchases and not treat plans as finished holdings.", limitations: "The filing describes planned structure and assets; exact live AVAX units require later company reporting." }),
        ],
        marketStructure: [
          { title: "Stake and supply layer", detail: "Students start with total stake, validation stake, delegated stake, and validator count." },
          { title: "Usage layer", detail: "C-Chain transactions, fees, and DeFi liquidity show whether applications are active." },
          { title: "Custom L1 layer", detail: "New networks can create specific demand, but each one must be checked for real users and capital." },
          { title: "Liquidity layer", detail: "Spot depth, derivatives funding, and slippage decide whether AVAX moves are healthy or fragile." },
        ],
        driverRegimes: [
          { title: "Staking-confidence regime", detail: "AVAX is stronger educationally when stake participation and validator distribution support the network story." },
          { title: "Application-demand regime", detail: "A better move includes DeFi, gaming, or custom L1 usage instead of only a sector-wide price lift." },
          { title: "Treasury headline regime", detail: "Public-market filings can move attention, but the lab treats them as a separate evidence bucket." },
        ],
        sourceBackedClaims: [
          { title: "Total stake", detail: "Avalanche reported 247,622,350 AVAX total stake during review." },
          { title: "Validation stake", detail: "The same page showed 201,886,319 AVAX in validation stake." },
          { title: "Delegated stake", detail: "Avalanche reported 45,736,031 AVAX delegated stake." },
          { title: "Validator count", detail: "Avalanche showed 1,724 staking validators and 161,835 delegations during review." },
          { title: "Treasury structure", detail: "The SEC-hosted presentation described approximately $460 million in initial treasury assets for Avalanche Treasury Co." },
        ],
        reviewNotes: [
          "Do not teach AVAX as only a speed asset; require stake, validator, custom-network, and liquidity evidence.",
          "Date every validator and stake metric because the official page updates.",
          "When using treasury-company materials, separate planned acquisition capacity from completed AVAX holdings.",
        ],
      },
    },
  },
  chainlink: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Chainlink? LINK Oracle and Reserve Guide",
    seoDescription:
      "Study Chainlink, LINK staking, oracle infrastructure, the Chainlink Reserve, token supply, and the adoption data students should verify.",
    publicHeadline: "Chainlink is the data layer many smart contracts depend on.",
    publicSubheadline:
      "LINK matters because Chainlink connects blockchains with market data, proof-of-reserve tools, automation, cross-chain messaging, institutional infrastructure, staking, and reserve economics.",
    plainEnglish:
      "Chainlink helps smart contracts use information and services that live outside their own chain. LINK is connected to that infrastructure through staking, network economics, and the Chainlink Reserve.",
    marketRole:
      "LINK is an infrastructure asset rather than a single app chain. Students should study oracle adoption, Cross-Chain Interoperability Protocol use, data-feed dependency, reserve accumulation, staking caps, token releases, and market depth.",
    whyTradersWatch:
      "Traders watch LINK when DeFi activity increases, when Chainlink announces institutional integrations, when CCIP usage grows, when staking economics change, and when reserve accumulation gives the market a clearer token-economics story.",
    lurnavaMonitorNote:
      "Lurnava monitors Chainlink through official docs, staking-pool data, Chainlink Reserve dashboard values, supply releases, oracle integrations, CCIP adoption, DeFi dependency, exchange depth, slippage, funding, and relative strength versus infrastructure assets.",
    conversionCta:
      "Inside Lurnava, learn how to judge whether a LINK move is backed by real infrastructure adoption or only partnership excitement.",
    sources: [batchSources.chainlinkHome, batchSources.chainlinkDocs, batchSources.chainlinkStaking, batchSources.chainlinkReserve, batchSources.chainlinkSupply],
    drivers: [
      { title: "Oracle adoption", detail: "Data feeds remain Chainlink's core market role because many DeFi applications need outside price data." },
      { title: "CCIP usage", detail: "Cross-chain messaging can expand Chainlink beyond price feeds if production usage grows." },
      { title: "Staking economics", detail: "The staking pool cap and allocation split give students measurable token participation data." },
      { title: "Chainlink Reserve", detail: "Reserve accumulation creates a source-backed way to study revenue-to-token demand mechanics." },
      { title: "Token release schedule", detail: "LINK supply releases affect float and must be checked against adoption narratives." },
      { title: "Institutional integrations", detail: "Capital-markets and data-provider relationships can widen the long-term infrastructure story." },
    ],
    publicRisks: [
      { risk: "Adoption-to-token gap", watch: "Chainlink services can grow without LINK price moving in a straight line." },
      { risk: "Release pressure", watch: "Supply releases can create sell pressure even during positive adoption cycles." },
      { risk: "Oracle competition", watch: "Other data networks and app-specific oracle designs compete for usage." },
      { risk: "Integration headline risk", watch: "Pilot work must be separated from production transaction volume." },
      { risk: "Reserve interpretation", watch: "Reserve value is useful but should not be treated as a full valuation model." },
    ],
    lab: {
      deskBrief:
        "Chainlink is a crypto infrastructure lesson. The Asset Lab reviews oracle data-feed dependency, CCIP adoption, staking pool capacity, Chainlink Reserve value, LINK supply releases, node-operator roles, institutional integrations, and whether LINK liquidity confirms the adoption story.",
      researchQuestion:
        "Is LINK moving because Chainlink adoption improved, CCIP usage expanded, staking participation changed, reserve accumulation increased, token releases shifted float, or infrastructure assets rotated together?",
      operatingModel:
        "Start with official Chainlink documentation, then check staking capacity, reserve dashboard values, supply schedule, data-feed and CCIP adoption, and liquidity. The core teaching point is that infrastructure usage and token economics must both be reviewed.",
      participants: [
        { name: "Chainlink Labs", role: "Core ecosystem developer", whyItMatters: "It drives product expansion, documentation, enterprise relationships, and developer adoption.", sourceBasis: "Chainlink official site and documentation." },
        { name: "Oracle node operators", role: "Data delivery operators", whyItMatters: "They help deliver reliable offchain data into smart contracts.", sourceBasis: "Chainlink documentation and staking materials." },
        { name: "Community stakers", role: "LINK staking participants", whyItMatters: "They participate in staking capacity and can affect perceived token utility.", sourceBasis: "Chainlink staking page." },
        { name: "Node-operator stakers", role: "Professional network operators", whyItMatters: "Their allotment separates operating infrastructure from community participation.", sourceBasis: "Chainlink staking page." },
        { name: "DeFi protocols", role: "Data-feed users", whyItMatters: "Lending, derivatives, and collateral systems often need oracle data.", sourceBasis: "Chainlink docs and protocol integration materials." },
        { name: "Chainlink Reserve", role: "Strategic LINK reserve", whyItMatters: "It gives students a measurable reserve connected to Chainlink revenue flows.", sourceBasis: "Chainlink Reserve dashboard and reserve blog." },
      ],
      historicalEvents: [
        { year: "2017", title: "Chainlink project launches", detail: "The project frames itself around connecting smart contracts to external data." },
        { year: "2019-2020", title: "DeFi oracle demand expands", detail: "Price feeds become essential to lending, collateral, and derivatives systems." },
        { year: "2022", title: "Staking starts", detail: "Staking adds a new educational layer around LINK token participation and network security." },
        { year: "2023", title: "CCIP enters market discussion", detail: "Cross-chain communication becomes a major expansion area beyond data feeds." },
        { year: "2024-2025", title: "Institutional integrations grow", detail: "Capital-market and tokenization use cases make Chainlink a wider infrastructure asset." },
        { year: "2025-2026", title: "Chainlink Reserve becomes measurable", detail: "The reserve dashboard gives students a source-backed value to track over time." },
      ],
      correlations: [
        { market: "Ethereum DeFi", relationship: "Chainlink demand is tied to DeFi applications that need secure data.", learnerNote: "Check whether DeFi usage is expanding or contracting." },
        { market: "Infrastructure tokens", relationship: "LINK can rotate with other middleware and interoperability assets.", learnerNote: "Compare real usage and token design." },
        { market: "Tokenized assets", relationship: "Institutional tokenization can increase the value of reliable data and messaging.", learnerNote: "Verify production usage instead of relying on press releases." },
      ],
      riskMap: [
        { risk: "Token utility mismatch", watch: "Network usage does not automatically translate into immediate LINK demand." },
        { risk: "Supply-release overhang", watch: "The release schedule matters when adoption and float change at the same time." },
        { risk: "Operator centralization", watch: "Students should review node and service dependency, not only headline integrations." },
        { risk: "Reserve-size overread", watch: "Reserve value can grow but may still be small compared with total market capitalization." },
        { risk: "Cross-chain security", watch: "CCIP and interoperability use cases carry different risk than simple price feeds." },
      ],
      researchRoutine: [
        "Check Chainlink Reserve value and any reserve-method updates.",
        "Review staking pool cap, community allotment, and node-operator allotment.",
        "Read LINK circulating-supply schedule and compare releases with market depth.",
        "Separate data-feed adoption from CCIP, automation, and proof-of-reserve adoption.",
        "Compare LINK with ETH DeFi activity and infrastructure-token rotation.",
        "Review spot depth, derivatives funding, open interest, and slippage before reading a breakout.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Token Utility", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Narrative With Data Confirmation", "Volatility-Adjusted Trend (ATR Filter)"],
      deepDive: {
        identity: [
          { title: "Oracle infrastructure asset", detail: "Chainlink teaches students that some crypto assets are middleware, not payment coins or app chains." },
          { title: "Adoption versus token design", detail: "The key question is how service adoption connects to LINK staking, reserve accumulation, and supply releases." },
          { title: "Cross-chain expansion story", detail: "CCIP can widen Chainlink's role, but students need usage evidence before accepting a broad interoperability thesis." },
        ],
        authorityOrFounders: [
          { title: "Chainlink Labs", detail: "Chainlink Labs is the most visible development and adoption organization students should track." },
          { title: "Node operator network", detail: "The network depends on independent node operators and oracle infrastructure reliability." },
          { title: "Reserve framework", detail: "The Chainlink Reserve creates a public dashboard for revenue-linked LINK accumulation." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Chainlink staking v0.2", entityType: "Staking program", assetOrInstrument: "Total staking pool cap", amount: "45,000,000", unit: "LINK", exposureType: "Staking capacity", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkStaking.title, sourcePublisher: batchSources.chainlinkStaking.publisher, sourceUrl: batchSources.chainlinkStaking.url, freshnessStatus: "current", whyItMatters: "The staking cap is the clearest source-backed number for how much LINK can participate in the current staking design." }),
          exposure({ entityName: "Chainlink community stakers", entityType: "Staking participants", assetOrInstrument: "Community allotment", amount: "40,875,000", unit: "LINK", exposureType: "Community staking allocation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkStaking.title, sourcePublisher: batchSources.chainlinkStaking.publisher, sourceUrl: batchSources.chainlinkStaking.url, freshnessStatus: "current", whyItMatters: "Community allotment shows how much of the staking pool is open to non-operator participants." }),
          exposure({ entityName: "Chainlink node operators", entityType: "Oracle operators", assetOrInstrument: "Node-operator allotment", amount: "4,125,000", unit: "LINK", exposureType: "Operator staking allocation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkStaking.title, sourcePublisher: batchSources.chainlinkStaking.publisher, sourceUrl: batchSources.chainlinkStaking.url, freshnessStatus: "current", whyItMatters: "The operator allotment lets students separate professional infrastructure stake from broad community participation." }),
          exposure({ entityName: "Chainlink Reserve", entityType: "Strategic LINK reserve", assetOrInstrument: "Reserve value", amount: "38.5", unit: "million USD", exposureType: "Revenue-linked reserve", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkReserve.title, sourcePublisher: batchSources.chainlinkReserve.publisher, sourceUrl: batchSources.chainlinkReserve.url, freshnessStatus: "current", whyItMatters: "Reserve value gives learners a concrete way to follow whether Chainlink revenue is adding persistent LINK exposure." }),
          exposure({ entityName: "LINK token supply", entityType: "Token supply schedule", assetOrInstrument: "Maximum LINK supply", amount: "1,000,000,000", unit: "LINK", exposureType: "Supply cap", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkSupply.title, sourcePublisher: batchSources.chainlinkSupply.publisher, sourceUrl: batchSources.chainlinkSupply.url, freshnessStatus: "current", whyItMatters: "The supply cap is required before students can understand release schedules, float, and reserve size." }),
          exposure({ entityName: "LINK release schedule", entityType: "Token supply schedule", assetOrInstrument: "Current annual release pace", amount: "7.0", unit: "percent of total supply per year", exposureType: "Scheduled token release", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.chainlinkSupply.title, sourcePublisher: batchSources.chainlinkSupply.publisher, sourceUrl: batchSources.chainlinkSupply.url, freshnessStatus: "current", whyItMatters: "Release pace is a real float variable that students must compare with adoption and reserve accumulation." }),
        ],
        marketStructure: [
          { title: "Data-feed base", detail: "Price feeds and proof-of-reserve use cases form the first adoption layer." },
          { title: "CCIP expansion", detail: "Cross-chain messaging expands the addressable market but must be verified through production use." },
          { title: "Staking layer", detail: "Staking capacity and allocation show how LINK participates in network economics." },
          { title: "Reserve and release layer", detail: "Reserve accumulation and scheduled releases together shape the token-economics lesson." },
        ],
        driverRegimes: [
          { title: "DeFi dependency regime", detail: "LINK strengthens educationally when DeFi usage and oracle dependency are both active." },
          { title: "Institutional infrastructure regime", detail: "Capital-market integrations can reframe Chainlink as financial plumbing rather than only DeFi middleware." },
          { title: "Token-economics regime", detail: "Reserve growth, staking capacity, and release pace become the main reading tools." },
        ],
        sourceBackedClaims: [
          { title: "Staking cap", detail: "Chainlink lists a 45,000,000 LINK total cap for Staking v0.2." },
          { title: "Community allotment", detail: "The staking page lists 40,875,000 LINK for community stakers." },
          { title: "Node-operator allotment", detail: "The node-operator allotment is 4,125,000 LINK." },
          { title: "Reserve value", detail: "The Chainlink Reserve dashboard showed about $38.5 million during review." },
          { title: "Supply schedule", detail: "Chainlink states LINK total supply is capped at 1,000,000,000 and the current release schedule is 7% of total supply per year." },
        ],
        reviewNotes: [
          "Do not equate Chainlink adoption with immediate LINK demand; teach the bridge between usage, staking, reserve, and releases.",
          "Date reserve values because the dashboard can update frequently.",
          "Use crypto market terms: slippage, liquidity depth, open interest, funding, reserve, staking, and oracle dependency.",
        ],
      },
    },
  },
  "shiba-inu": {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Shiba Inu? SHIB Supply, Shibarium, and Burn Guide",
    seoDescription:
      "Study SHIB supply, Shibarium activity, holder concentration, burn history, ecosystem risk, and how students should review meme assets.",
    publicHeadline: "Shiba Inu is a meme asset with a large on-chain footprint.",
    publicSubheadline:
      "SHIB matters because it combines massive ERC-20 supply, community culture, Shibarium Layer 2 activity, burn mechanics, exchange liquidity, large holder concentration, and attention-driven market cycles.",
    plainEnglish:
      "Shiba Inu started as a meme token on Ethereum and grew into a wider ecosystem with Shibarium. SHIB is not valued like a cash-flow asset, so students must study supply, holders, burn history, network activity, and liquidity carefully.",
    marketRole:
      "SHIB is a meme-sector and ecosystem-token lesson. The right classroom angle is supply math, concentration, burn events, Shibarium activity, exchange depth, social attention, and the difference between cultural demand and durable utility.",
    whyTradersWatch:
      "Traders watch SHIB because meme assets can move quickly when attention returns, when burn discussions rise, when Shibarium activity changes, when exchange depth improves, or when Ethereum-based meme assets rotate together.",
    lurnavaMonitorNote:
      "Lurnava monitors SHIB through Etherscan supply and holder data, ShibariumScan transactions and addresses, burn-mechanism updates, exchange depth, slippage, open interest, funding, whale-wallet concentration, and social-attention cycles.",
    conversionCta:
      "Inside Lurnava, learn how to study high-supply meme assets without confusing community attention, burn headlines, and real liquidity demand.",
    sources: [batchSources.shibEtherscan, batchSources.shibariumScan, batchSources.shibariumDocs, batchSources.shibariumBurn, batchSources.vitalikBurnTx],
    drivers: [
      { title: "Holder concentration", detail: "SHIB requires wallet-distribution checks because very large supplies can sit inside a small number of addresses." },
      { title: "Shibarium activity", detail: "Layer 2 transaction and address counts help students evaluate ecosystem activity beyond the ERC-20 token." },
      { title: "Burn events", detail: "Burn history is important, but students must compare burned amounts with remaining supply." },
      { title: "Exchange liquidity", detail: "SHIB can trade with high volume, but slippage and order-book depth still matter during sharp moves." },
      { title: "Meme-sector rotation", detail: "SHIB often moves with social attention and meme-asset cycles rather than only its own fundamentals." },
      { title: "Ethereum ecosystem context", detail: "Because SHIB is an ERC-20 token, Ethereum congestion, custody, and exchange flows can influence activity." },
    ],
    publicRisks: [
      { risk: "Attention decay", watch: "Meme-led demand can fade quickly when social interest moves elsewhere." },
      { risk: "Burn misunderstanding", watch: "Students should compare burn amounts with total supply before assuming scarcity changed meaningfully." },
      { risk: "Explorer-label limits", watch: "Large wallet labels can be incomplete, stale, or exchange-related." },
      { risk: "Shibarium activity quality", watch: "High transaction totals need context from current daily activity and active users." },
      { risk: "Liquidity trap", watch: "Thin depth during fast moves can create severe slippage for late entries." },
    ],
    lab: {
      deskBrief:
        "SHIB is a meme-asset and supply-education lesson. The Asset Lab studies max total supply, holders, historical burn amount, Shibarium transactions, wallet-address counts, burn-mechanism design, wallet concentration, exchange depth, slippage, derivatives positioning, and social-attention cycles.",
      researchQuestion:
        "Is SHIB moving because meme-sector attention returned, Shibarium activity improved, burn discussion increased, large wallets moved tokens, exchange depth changed, or Ethereum meme assets rotated together?",
      operatingModel:
        "Begin with supply and holder data, then check Shibarium activity, burn mechanics, large wallet movement, exchange depth, and social attention. The lesson must show students why meme assets require evidence and humility, not hype.",
      participants: [
        { name: "SHIB token holders", role: "Market ownership base", whyItMatters: "Holder count and concentration shape how fragile or distributed the market can be.", sourceBasis: "Etherscan SHIB token page." },
        { name: "Shibarium users", role: "Layer 2 activity base", whyItMatters: "Transactions and wallet addresses show whether the ecosystem has activity beyond the token.", sourceBasis: "ShibariumScan and Shibarium docs." },
        { name: "Shiba Inu developers", role: "Ecosystem builders", whyItMatters: "They maintain Shibarium, burn tools, and ecosystem infrastructure.", sourceBasis: "Shib.io documentation and burn portal." },
        { name: "Vitalik Buterin burn address event", role: "Historical supply event", whyItMatters: "The 2021 burn is one of the largest named SHIB supply events students can verify.", sourceBasis: "Etherscan burn transaction." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "SHIB trading often depends on exchange access, depth, and derivatives positioning.", sourceBasis: "Exchange and explorer liquidity review." },
        { name: "Large SHIB wallets", role: "Concentration risk", whyItMatters: "Large wallet movement can affect market confidence and liquidity.", sourceBasis: "Etherscan holder distribution and token analytics." },
      ],
      historicalEvents: [
        { year: "2020", title: "SHIB launches on Ethereum", detail: "The token enters the market as an ERC-20 meme asset." },
        { year: "2021", title: "Large burn transaction occurs", detail: "More than 410 trillion SHIB are sent to a null address in a widely tracked burn event." },
        { year: "2021", title: "Major exchange access expands", detail: "SHIB becomes easier to trade through large venues, increasing liquidity and attention." },
        { year: "2022", title: "Meme-sector volatility normalizes", detail: "Students see that attention-led assets can retrace heavily after peak attention." },
        { year: "2023", title: "Shibarium launches", detail: "The ecosystem adds its own Layer 2 network and broader activity metrics." },
        { year: "2024-2026", title: "Burn and Shibarium data remain central", detail: "The lesson shifts from simple meme framing to supply, activity, and liquidity checks." },
      ],
      correlations: [
        { market: "Ethereum meme assets", relationship: "SHIB can rotate with other Ethereum-based meme tokens.", learnerNote: "Check whether the move is SHIB-specific or sector-wide." },
        { market: "Dogecoin", relationship: "DOGE often anchors the broader meme-asset category.", learnerNote: "Compare DOGE and SHIB market structure before assuming leadership." },
        { market: "Ethereum gas and liquidity", relationship: "ERC-20 activity and exchange flows can affect SHIB trading conditions.", learnerNote: "Review network costs and venue depth." },
      ],
      riskMap: [
        { risk: "Supply scale confusion", watch: "A low token price does not mean the asset is cheap without market-cap and supply math." },
        { risk: "Burn headline overread", watch: "Burn events should be compared against remaining supply and active demand." },
        { risk: "Wallet concentration", watch: "Large wallets may include exchanges, contracts, or unlabeled holders, so ownership claims need limits." },
        { risk: "Activity-count distortion", watch: "Total transactions can look large even when current daily activity is weak." },
        { risk: "Social volatility", watch: "Attention-led moves can reverse before new learners understand liquidity risk." },
      ],
      researchRoutine: [
        "Check SHIB max supply, holder count, and large-address distribution.",
        "Review Shibarium transactions, wallet addresses, and current activity quality.",
        "Compare burn amounts with remaining supply and market capitalization.",
        "Watch exchange depth, slippage, funding, open interest, and whale transfers.",
        "Compare SHIB with DOGE and Ethereum meme assets.",
        "Classify the move as meme-sector rotation, burn-led attention, Shibarium-led activity, whale-flow, or liquidity squeeze.",
      ],
      relatedLessons: ["Level 6 Crypto Market Structure", "Level 9 Market Depth", "Level 9 Risk Controls"],
      relatedStrategies: ["Narrative With Data Confirmation", "Volatility Breakout (ATR) Strategy", "False Breakout Strategy"],
      deepDive: {
        identity: [
          { title: "Meme asset with infrastructure", detail: "SHIB is not only a joke token anymore, but its infrastructure must be checked with real activity data." },
          { title: "Supply-math classroom case", detail: "The massive SHIB supply helps students learn why unit price alone is misleading." },
          { title: "Burn-versus-demand lesson", detail: "Burn events are useful only when students compare them with remaining supply and market demand." },
        ],
        authorityOrFounders: [
          { title: "Community-led origin", detail: "SHIB's identity is community-driven, which makes source verification more important than founder authority." },
          { title: "Shibarium developer ecosystem", detail: "Shibarium gives students a named network layer to inspect through docs and explorers." },
          { title: "Explorer-verifiable supply events", detail: "The Vitalik burn transaction gives the lesson a concrete on-chain historical reference." },
        ],
        holderExposureMap: [
          exposure({ entityName: "SHIB token contract", entityType: "ERC-20 token", assetOrInstrument: "Max total supply", amount: "999,982,329,478,393.982378038372706779", unit: "SHIB", exposureType: "Token supply reference", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.shibEtherscan.title, sourcePublisher: batchSources.shibEtherscan.publisher, sourceUrl: batchSources.shibEtherscan.url, freshnessStatus: "current", whyItMatters: "Max supply is the first number students need before judging SHIB price or burn claims." }),
          exposure({ entityName: "SHIB holders", entityType: "Token holder base", assetOrInstrument: "Holder count", amount: "1,676,797", unit: "holders", exposureType: "Ownership breadth metric", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.shibEtherscan.title, sourcePublisher: batchSources.shibEtherscan.publisher, sourceUrl: batchSources.shibEtherscan.url, freshnessStatus: "current", whyItMatters: "Holder count shows broad distribution, but it must be paired with concentration and exchange-wallet caveats." }),
          exposure({ entityName: "Shibarium network", entityType: "Layer 2 network", assetOrInstrument: "Total transactions", amount: "1,561,367,068", unit: "transactions", exposureType: "Network activity metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.shibariumScan.title, sourcePublisher: batchSources.shibariumScan.publisher, sourceUrl: batchSources.shibariumScan.url, freshnessStatus: "current", whyItMatters: "Transaction count helps students study whether SHIB ecosystem discussion has supporting network activity." }),
          exposure({ entityName: "Shibarium network", entityType: "Layer 2 network", assetOrInstrument: "Wallet addresses", amount: "269,899,351", unit: "addresses", exposureType: "Network address footprint", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.shibariumScan.title, sourcePublisher: batchSources.shibariumScan.publisher, sourceUrl: batchSources.shibariumScan.url, freshnessStatus: "current", whyItMatters: "Address count shows reach, but students must still review current active usage and avoid equating addresses with unique humans." }),
          exposure({ entityName: "Vitalik Buterin burn transaction", entityType: "Historical on-chain event", assetOrInstrument: "SHIB burned to null address", amount: "410,241,996,771,871.894771826174755464", unit: "SHIB", exposureType: "Historical supply reduction", asOfDate: "2021-05-16", retrievedAt, sourceTitle: batchSources.vitalikBurnTx.title, sourcePublisher: batchSources.vitalikBurnTx.publisher, sourceUrl: batchSources.vitalikBurnTx.url, freshnessStatus: "historical", whyItMatters: "This is a verifiable burn event students can inspect directly rather than learning it as folklore." }),
          exposure({ entityName: "Shibarium burn mechanism", entityType: "Ecosystem burn process", assetOrInstrument: "BONE gas-fee burn route", amount: "Mechanism disclosed", unit: "process", exposureType: "Burn design reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.shibariumBurn.title, sourcePublisher: batchSources.shibariumBurn.publisher, sourceUrl: batchSources.shibariumBurn.url, freshnessStatus: "current", whyItMatters: "The burn mechanism matters because students need to know how future burns are supposed to happen, not only that burns are discussed." }),
        ],
        marketStructure: [
          { title: "Supply layer", detail: "Max supply, holder count, and burn history anchor the lesson." },
          { title: "Shibarium layer", detail: "Transactions and addresses show ecosystem activity, but quality and current activity still matter." },
          { title: "Attention layer", detail: "Meme-sector demand can overpower fundamentals temporarily and then fade quickly." },
          { title: "Liquidity layer", detail: "Exchange depth and derivatives positioning decide how risky fast SHIB moves become." },
        ],
        driverRegimes: [
          { title: "Meme-sector rotation", detail: "SHIB moves when attention and liquidity flow into meme assets as a group." },
          { title: "Burn narrative regime", detail: "Burn discussions matter most when the amounts are large enough relative to supply and demand." },
          { title: "Shibarium activity regime", detail: "Network activity can support the ecosystem story when current usage is broad and durable." },
        ],
        sourceBackedClaims: [
          { title: "Max supply", detail: "Etherscan showed SHIB max total supply at 999,982,329,478,393.982378038372706779 SHIB during review." },
          { title: "Holder base", detail: "Etherscan showed 1,676,797 SHIB holders at the checked timestamp." },
          { title: "Shibarium transactions", detail: "ShibariumScan showed 1,561,367,068 total transactions during review." },
          { title: "Shibarium addresses", detail: "ShibariumScan showed 269,899,351 wallet addresses during review." },
          { title: "Historic burn", detail: "Etherscan records a burn transfer of more than 410 trillion SHIB to a null address in 2021." },
        ],
        reviewNotes: [
          "Do not teach SHIB through hype; teach supply, holder distribution, burn math, Shibarium activity, and liquidity.",
          "Explorer address counts and holder labels require limitations because they do not equal unique people.",
          "Use crypto terms: slippage, liquidity depth, open interest, funding, token supply, holder concentration, and chain activity.",
        ],
      },
    },
  },
  polkadot: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Polkadot? DOT Governance, Staking, and Treasury Guide",
    seoDescription:
      "Study Polkadot, DOT staking, validators, nominators, OpenGov, treasury spending, multichain architecture, and market risk.",
    publicHeadline: "Polkadot is a multichain network governed through DOT.",
    publicSubheadline:
      "DOT matters because Polkadot combines validator and nominator staking, shared security, parachain and rollup-style infrastructure, OpenGov, treasury spending, and ecosystem funding decisions.",
    plainEnglish:
      "Polkadot is built to connect many chains under a shared security and governance system. DOT is used for staking, governance participation, and ecosystem economics, so students must study both network design and treasury behavior.",
    marketRole:
      "DOT is a governance, staking, and multichain-infrastructure asset. A serious review includes validators, nominators, treasury balances, spending categories, OpenGov decisions, developer activity, liquidity depth, and competition from other interoperability designs.",
    whyTradersWatch:
      "Traders watch DOT when governance votes change incentives, when treasury spending accelerates, when validator or nominator participation changes, when ecosystem development improves, or when interoperability assets rotate together.",
    lurnavaMonitorNote:
      "Lurnava monitors Polkadot through official wiki references, staking and nominator mechanics, treasury reports, Parity treasury data, OpenGov debates, ecosystem development, exchange depth, slippage, funding, and DOT relative strength.",
    conversionCta:
      "Inside Lurnava, learn how to read DOT as a network-governance asset rather than only another Layer 1 token.",
    sources: [batchSources.polkadotHome, batchSources.polkadotWiki, batchSources.polkadotStaking, batchSources.polkadotTreasuryQ4, batchSources.parityTreasuryData],
    drivers: [
      { title: "OpenGov decisions", detail: "DOT holders and delegates shape treasury spending, protocol direction, and ecosystem incentives." },
      { title: "Treasury balance", detail: "Treasury reports give students real DOT amounts and spending categories to audit." },
      { title: "Validator and nominator health", detail: "Staking participation helps students study security, rewards, and decentralization." },
      { title: "Ecosystem development", detail: "Developer and parachain activity determine whether Polkadot infrastructure has demand." },
      { title: "Interoperability competition", detail: "Polkadot competes with bridges, modular stacks, app chains, and other multichain designs." },
      { title: "Liquidity and unlock context", detail: "DOT trading depends on exchange depth, derivatives positioning, and governance-related expectations." },
    ],
    publicRisks: [
      { risk: "Governance complexity", watch: "OpenGov can be hard to read unless students separate proposals, spending, and execution." },
      { risk: "Treasury burn rate", watch: "Large treasury balances can still weaken if spending outpaces value creation." },
      { risk: "Nominator concentration", watch: "Students should review how stake is distributed across validators." },
      { risk: "Ecosystem fragmentation", watch: "Activity across many projects can be difficult to convert into DOT demand." },
      { risk: "Competition", watch: "Other interoperability and app-chain systems can capture builder attention." },
    ],
    lab: {
      deskBrief:
        "Polkadot is a governance, treasury, and staking lesson. The Asset Lab reviews OpenGov, validator and nominator mechanics, treasury balances, DOT spending categories, liabilities, ecosystem funding, parachain or rollup-style activity, liquidity depth, and competition from other multichain networks.",
      researchQuestion:
        "Is DOT moving because governance changed expectations, treasury spending improved confidence, staking participation shifted, ecosystem development accelerated, or interoperability assets rotated together?",
      operatingModel:
        "Read Polkadot in layers: staking mechanics, governance decisions, treasury health, ecosystem execution, and market depth. Students should learn to audit budgets and proposals the same way they audit charts.",
      participants: [
        { name: "DOT holders", role: "Governance participants", whyItMatters: "They vote and delegate within OpenGov, shaping spending and protocol direction.", sourceBasis: "Polkadot governance and wiki materials." },
        { name: "Validators", role: "Network security operators", whyItMatters: "Validators produce blocks and secure the network through nominated proof of stake.", sourceBasis: "Polkadot staking wiki." },
        { name: "Nominators", role: "Stake allocators", whyItMatters: "Nominators choose validators and influence stake distribution.", sourceBasis: "Polkadot staking and nominator wiki pages." },
        { name: "Polkadot Treasury", role: "Ecosystem funding source", whyItMatters: "Treasury balances and spending categories directly affect ecosystem runway and confidence.", sourceBasis: "Polkadot Q4 2025 treasury report." },
        { name: "Parity Technologies", role: "Core technical contributor", whyItMatters: "Parity data and development work remain important for infrastructure and treasury transparency.", sourceBasis: "Parity treasury data and Polkadot documentation." },
        { name: "Ecosystem builders", role: "Application and infrastructure teams", whyItMatters: "Builder traction decides whether treasury funding turns into useful activity.", sourceBasis: "Polkadot ecosystem and governance sources." },
      ],
      historicalEvents: [
        { year: "2020", title: "Polkadot launches public network", detail: "The network enters market discussion as a shared-security multichain system." },
        { year: "2021", title: "Parachain auctions begin", detail: "DOT demand becomes linked to ecosystem-chain allocation and crowdloan activity." },
        { year: "2022", title: "Bear-market treasury questions increase", detail: "Students learn to study runway and spending quality when token prices fall." },
        { year: "2023", title: "OpenGov matures", detail: "Governance becomes a bigger part of DOT's market identity." },
        { year: "2024", title: "Treasury spending debate intensifies", detail: "Community analysis focuses on whether ecosystem spending creates enough return." },
        { year: "2025", title: "Q4 treasury report shows positive quarter", detail: "The reported quarter gives students source-backed figures for balance, spend, liabilities, and net profit." },
      ],
      correlations: [
        { market: "Interoperability assets", relationship: "DOT can rotate with other cross-chain and modular infrastructure assets.", learnerNote: "Compare real usage and governance strength." },
        { market: "Ethereum ecosystem", relationship: "Polkadot competes and cooperates with broader smart-contract infrastructure.", learnerNote: "Check developer and liquidity migration rather than slogans." },
        { market: "Treasury-funded ecosystems", relationship: "DOT's treasury model makes budget quality a market factor.", learnerNote: "Read spending reports as part of the asset review." },
      ],
      riskMap: [
        { risk: "Treasury misallocation", watch: "Spending without measurable adoption can weaken confidence." },
        { risk: "Stake concentration", watch: "Validator and nominator concentration can reduce perceived decentralization." },
        { risk: "Governance fatigue", watch: "Complex voting can reduce student understanding and holder engagement." },
        { risk: "Ecosystem underuse", watch: "Infrastructure is less valuable if applications and users do not grow." },
        { risk: "DOT value-capture gap", watch: "Students must connect network activity and governance decisions back to DOT demand." },
      ],
      researchRoutine: [
        "Read the latest Polkadot treasury report and identify balance, spend, liabilities, and major categories.",
        "Check staking mechanics, validator participation, and nominator behavior.",
        "Review active OpenGov proposals and separate budget decisions from protocol upgrades.",
        "Map ecosystem usage and developer activity against treasury spending.",
        "Compare DOT with interoperability and Layer 1 assets for relative strength.",
        "Review spot depth, derivatives funding, open interest, and slippage around governance events.",
      ],
      relatedLessons: ["Level 7 Layer 1 Networks", "Level 8 Governance and Treasury", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Narrative With Data Confirmation", "Volatility-Adjusted Trend (ATR Filter)"],
      deepDive: {
        identity: [
          { title: "Governed multichain network", detail: "Polkadot is best taught through shared security, governance, staking, and treasury economics together." },
          { title: "Treasury-audit case", detail: "DOT students can inspect real treasury balances and spending categories rather than relying on vague ecosystem claims." },
          { title: "Nominated proof-of-stake lesson", detail: "Validators and nominators make Polkadot useful for teaching stake allocation and decentralization." },
        ],
        authorityOrFounders: [
          { title: "Web3 Foundation and ecosystem governance", detail: "Polkadot has institutional history, but ongoing authority sits heavily in OpenGov decisions." },
          { title: "Parity Technologies", detail: "Parity remains an important technical and data contributor students can track." },
          { title: "OpenGov voters and delegates", detail: "DOT governance participants shape treasury and protocol direction in a measurable way." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Polkadot Treasury", entityType: "Protocol treasury", assetOrInstrument: "Q4 2025 balance sheet", amount: "32", unit: "million DOT", estimatedUsdValue: "58 million USD", exposureType: "Treasury balance", asOfDate: "2025-Q4", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.polkadotTreasuryQ4.title, sourcePublisher: batchSources.polkadotTreasuryQ4.publisher, sourceUrl: batchSources.polkadotTreasuryQ4.url, freshnessStatus: "recent", whyItMatters: "Treasury balance gives students a concrete funding base for judging ecosystem runway and governance capacity." }),
          exposure({ entityName: "Polkadot Treasury", entityType: "Protocol treasury", assetOrInstrument: "Q4 2025 spending", amount: "2.6", unit: "million DOT", estimatedUsdValue: "7.4 million USD", exposureType: "Treasury outflow", asOfDate: "2025-Q4", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.polkadotTreasuryQ4.title, sourcePublisher: batchSources.polkadotTreasuryQ4.publisher, sourceUrl: batchSources.polkadotTreasuryQ4.url, freshnessStatus: "recent", whyItMatters: "Quarterly spend teaches students to compare budget outflow with ecosystem results and treasury runway." }),
          exposure({ entityName: "Polkadot Treasury", entityType: "Protocol treasury", assetOrInstrument: "Payable liabilities", amount: "1.5", unit: "million DOT", estimatedUsdValue: "2.7 million USD", exposureType: "Treasury liability", asOfDate: "2025-Q4", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.polkadotTreasuryQ4.title, sourcePublisher: batchSources.polkadotTreasuryQ4.publisher, sourceUrl: batchSources.polkadotTreasuryQ4.url, freshnessStatus: "recent", whyItMatters: "Liabilities show students that a treasury balance is not the same as free capital available for new work." }),
          exposure({ entityName: "Polkadot Treasury", entityType: "Protocol treasury", assetOrInstrument: "Q4 2025 net profit", amount: "1.6", unit: "million DOT", exposureType: "Quarterly net treasury result", asOfDate: "2025-Q4", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.polkadotTreasuryQ4.title, sourcePublisher: batchSources.polkadotTreasuryQ4.publisher, sourceUrl: batchSources.polkadotTreasuryQ4.url, freshnessStatus: "recent", whyItMatters: "A positive treasury quarter helps students see that inflows, burns, and price changes can alter runway beyond spending alone." }),
          exposure({ entityName: "Polkadot development spending", entityType: "Treasury category", assetOrInstrument: "Development category spend", amount: "760,000", unit: "DOT", estimatedUsdValue: "2.5 million USD", exposureType: "Treasury spending category", asOfDate: "2025-Q4", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.polkadotTreasuryQ4.title, sourcePublisher: batchSources.polkadotTreasuryQ4.publisher, sourceUrl: batchSources.polkadotTreasuryQ4.url, freshnessStatus: "recent", whyItMatters: "Development spend is the largest reported category and helps students judge whether treasury use supports product progress." }),
          exposure({ entityName: "Polkadot staking system", entityType: "Nominated proof-of-stake network", assetOrInstrument: "Validator and nominator staking", amount: "Mechanism disclosed", unit: "staking roles", exposureType: "Security and rewards model", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.polkadotStaking.title, sourcePublisher: batchSources.polkadotStaking.publisher, sourceUrl: batchSources.polkadotStaking.url, freshnessStatus: "current", whyItMatters: "The staking mechanism explains how DOT holders participate in security and why validator selection matters for risk." }),
        ],
        marketStructure: [
          { title: "Governance layer", detail: "OpenGov proposals and voting behavior shape market expectations." },
          { title: "Treasury layer", detail: "Balance, spend, liabilities, and category allocation are core DOT research fields." },
          { title: "Staking layer", detail: "Validators and nominators turn DOT into a security and reward mechanism." },
          { title: "Ecosystem layer", detail: "Applications and infrastructure must show enough usage to justify funding and attention." },
        ],
        driverRegimes: [
          { title: "Governance catalyst regime", detail: "DOT can move when important proposals change expectations around spending or network direction." },
          { title: "Treasury confidence regime", detail: "Stronger reporting and better spending discipline can improve confidence in ecosystem execution." },
          { title: "Interoperability rotation regime", detail: "DOT can rotate with other assets tied to cross-chain and modular infrastructure." },
        ],
        sourceBackedClaims: [
          { title: "Treasury balance", detail: "The Q4 report listed 58M USD, or 32M DOT, on the Polkadot Treasury balance sheet." },
          { title: "Quarterly spend", detail: "The same report showed Q4 2025 spending of 7.4M USD, or 2.6M DOT." },
          { title: "Liabilities", detail: "The report listed 2.7M USD, or 1.5M DOT, in payable liabilities over the next twelve months." },
          { title: "Positive quarter", detail: "The report described Q4 2025 as the first positive quarter under OpenGov, with 1.6M DOT net profit." },
          { title: "Staking design", detail: "Polkadot Wiki explains validators and nominators as the key staking roles students must understand." },
        ],
        reviewNotes: [
          "Do not teach DOT as only a cross-chain story; include governance and treasury accounting.",
          "Source treasury amounts with dates because DOT price and spending change the interpretation.",
          "Use crypto terms: staking, governance, treasury, liquidity depth, slippage, open interest, funding, and validator distribution.",
        ],
      },
    },
  },
  "bitcoin-cash": {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Bitcoin Cash? BCH Mining and Payment Network Guide",
    seoDescription:
      "Study Bitcoin Cash, BCH supply, mining rewards, hash rate, block activity, payment use, and the risks students should understand.",
    publicHeadline: "Bitcoin Cash is a peer-to-peer cash network with BCH mining economics.",
    publicSubheadline:
      "BCH matters because it preserves a 21 million supply model while focusing on payment usage, larger-block capacity, SHA-256 mining, block rewards, exchange liquidity, and merchant-style settlement.",
    plainEnglish:
      "Bitcoin Cash is a proof-of-work network that split from Bitcoin and focuses on everyday digital cash use. BCH has a capped supply like Bitcoin, but students must study its own hash rate, miners, fees, blocks, and market liquidity.",
    marketRole:
      "BCH is a payment-network and proof-of-work lesson. The correct review includes the 21 million cap, current subsidy, hash rate, block cadence, miner economics, fee share, merchant use, exchange depth, and its relationship with Bitcoin.",
    whyTradersWatch:
      "Traders watch BCH around proof-of-work rotations, payment-coin attention, halving expectations, hash-rate changes, exchange listing activity, fee behavior, and liquidity changes versus BTC and LTC.",
    lurnavaMonitorNote:
      "Lurnava monitors BCH through official supply references, BitInfoCharts network data, halving schedules, Blockchair explorer checks, miner reward data, hash rate, block activity, exchange depth, slippage, funding, and BCH/BTC relative behavior.",
    conversionCta:
      "Inside Lurnava, learn how to review proof-of-work payment coins through mining data, supply rules, liquidity, and real usage instead of name similarity alone.",
    sources: [batchSources.bitcoinCashHome, batchSources.bitcoinCashBitinfocharts, batchSources.bitcoinCashHalving, batchSources.bitcoinCashBlockchair],
    drivers: [
      { title: "Supply cap", detail: "BCH keeps a 21 million cap, so supply education starts with Bitcoin-like scarcity mechanics." },
      { title: "Block reward", detail: "The current subsidy and fee component show how miners are paid today." },
      { title: "Hash rate", detail: "Hash rate helps students judge miner commitment and network-security conditions." },
      { title: "Payment usage", detail: "Bitcoin Cash positions itself around transaction utility, so usage and fees matter." },
      { title: "BTC relationship", detail: "BCH can move with or against Bitcoin depending on sector attention and relative demand." },
      { title: "Liquidity depth", detail: "BCH can be liquid on major venues, but slippage and derivatives conditions still matter during fast moves." },
    ],
    publicRisks: [
      { risk: "Hash-rate weakness", watch: "Lower hash rate can reduce confidence in proof-of-work security." },
      { risk: "Payment adoption gap", watch: "A payment narrative needs transaction and merchant evidence, not only branding." },
      { risk: "BTC comparison pressure", watch: "BCH is often judged against Bitcoin's stronger liquidity and mindshare." },
      { risk: "Miner revenue stress", watch: "Low fees and lower price can pressure miners after reward reductions." },
      { risk: "Liquidity bursts", watch: "Fast BCH moves can attract late entries when spreads and slippage widen." },
    ],
    lab: {
      deskBrief:
        "Bitcoin Cash is a proof-of-work payment-network lesson. The Asset Lab reviews the 21 million BCH supply cap, mining reward, daily block rewards, hash rate, difficulty, block cadence, fee share, payment adoption, exchange depth, derivatives positioning, and BCH relationship to BTC and LTC.",
      researchQuestion:
        "Is BCH moving because payment-coin attention improved, mining data changed, halving expectations returned, Bitcoin-relative rotation appeared, or liquidity conditions created an outsized move?",
      operatingModel:
        "Start with supply and mining facts, then review block data, hash rate, fee share, payment usage, and liquidity. Students should understand BCH on its own chain before comparing it with Bitcoin.",
      participants: [
        { name: "BCH miners", role: "Proof-of-work security providers", whyItMatters: "Miners secure the chain and respond to reward, fee, and price incentives.", sourceBasis: "BitInfoCharts BCH mining and block statistics." },
        { name: "Bitcoin Cash developers", role: "Protocol maintainers", whyItMatters: "They maintain software and network functionality for payment use.", sourceBasis: "BitcoinCash.org and node-client ecosystem references." },
        { name: "Payment users", role: "Transaction demand source", whyItMatters: "BCH's identity depends on real payment and transfer activity.", sourceBasis: "BitcoinCash.org payment framing and explorer data." },
        { name: "Merchants and payment processors", role: "Adoption venues", whyItMatters: "Merchant acceptance can support the peer-to-peer cash thesis.", sourceBasis: "BitcoinCash.org ecosystem references." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "BCH access and depth are important because proof-of-work rotations can be volatile.", sourceBasis: "Market-depth and exchange review." },
        { name: "Block explorers", role: "Verification tools", whyItMatters: "Explorers let students verify blocks, transactions, fees, and chain activity.", sourceBasis: "BitInfoCharts and Blockchair BCH pages." },
      ],
      historicalEvents: [
        { year: "2017", title: "Bitcoin Cash splits from Bitcoin", detail: "BCH begins as a separate chain focused on larger-block payment usage." },
        { year: "2018", title: "Ecosystem split creates BCH and BSV separation", detail: "Students learn that forks can divide users, miners, and liquidity." },
        { year: "2020", title: "First BCH halving occurs", detail: "The subsidy falls to 6.25 BCH, changing miner economics." },
        { year: "2021", title: "Payment-coin rotation returns", detail: "BCH receives attention during broader crypto and older-coin rotations." },
        { year: "2024", title: "Second BCH halving occurs", detail: "The subsidy moves to 3.125 BCH, making fees and hash rate more important." },
        { year: "2026", title: "Mining data remains the classroom anchor", detail: "Current hash rate, blocks, and rewards help students read BCH beyond legacy narratives." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "BCH often trades in relation to BTC because of shared origin and proof-of-work framing.", learnerNote: "Compare BCH/BTC to see whether BCH has independent strength." },
        { market: "Litecoin", relationship: "Both are older payment-focused proof-of-work assets.", learnerNote: "Compare hash rate, reward schedules, fees, and liquidity." },
        { market: "Payment coins", relationship: "BCH can rotate with assets framed around transfer utility.", learnerNote: "Usage data matters more than slogans." },
      ],
      riskMap: [
        { risk: "Miner security pressure", watch: "Hash rate and difficulty should support confidence in network security." },
        { risk: "Low fee revenue", watch: "If fee share is very small, long-term miner incentives deserve extra review." },
        { risk: "Narrative dependency", watch: "BCH can rally on old recognition without matching usage growth." },
        { risk: "Liquidity mismatch", watch: "Exchange volume does not always mean deep order books at entry time." },
        { risk: "Fork-history confusion", watch: "Students should separate BCH from BTC and BSV clearly." },
      ],
      researchRoutine: [
        "Confirm the BCH supply cap and current block reward.",
        "Check reward per block, daily rewards, fee share, hash rate, difficulty, and blocks last 24 hours.",
        "Review payment and transaction activity through explorers.",
        "Compare BCH/BTC and BCH/LTC relative strength.",
        "Check exchange depth, slippage, funding, and open interest before reading a move.",
        "Classify the move as proof-of-work rotation, payment adoption, halving expectation, miner-data shift, or liquidity squeeze.",
      ],
      relatedLessons: ["Level 6 Crypto Market Structure", "Level 7 Proof-of-Work Networks", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Price Channel Breakout", "Volatility Breakout (ATR) Strategy"],
      deepDive: {
        identity: [
          { title: "Bitcoin-derived payment chain", detail: "BCH is best taught as its own proof-of-work payment network, not as a cheaper version of BTC." },
          { title: "Mining-economics lesson", detail: "Current rewards, hash rate, and fees show how proof-of-work security is funded." },
          { title: "Fork-history case", detail: "BCH helps students understand how community, miner, and developer disagreements can create separate assets." },
        ],
        authorityOrFounders: [
          { title: "Decentralized developer ecosystem", detail: "BCH does not have one controlling issuer, so students rely on protocol, node, and explorer sources." },
          { title: "Miner security base", detail: "Miners are practical power centers because proof-of-work security follows hash rate and economics." },
          { title: "Payment-focused community", detail: "The ecosystem frames BCH around peer-to-peer cash and merchant settlement." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Bitcoin Cash protocol", entityType: "Proof-of-work network", assetOrInstrument: "Maximum supply", amount: "21,000,000", unit: "BCH", exposureType: "Supply cap", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.bitcoinCashHome.title, sourcePublisher: batchSources.bitcoinCashHome.publisher, sourceUrl: batchSources.bitcoinCashHome.url, freshnessStatus: "current", whyItMatters: "The 21 million cap anchors the BCH scarcity lesson and lets students compare it with Bitcoin." }),
          exposure({ entityName: "Bitcoin Cash miners", entityType: "Proof-of-work miners", assetOrInstrument: "Reward per block", amount: "3.125 + 0.00166", unit: "BCH", exposureType: "Current miner compensation", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.bitcoinCashBitinfocharts.title, sourcePublisher: batchSources.bitcoinCashBitinfocharts.publisher, sourceUrl: batchSources.bitcoinCashBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Reward per block shows the subsidy and fee component miners receive for securing the network." }),
          exposure({ entityName: "Bitcoin Cash network", entityType: "Proof-of-work network", assetOrInstrument: "Reward last 24 hours", amount: "418.75 + 0.222", unit: "BCH", exposureType: "Recent issuance and fees", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.bitcoinCashBitinfocharts.title, sourcePublisher: batchSources.bitcoinCashBitinfocharts.publisher, sourceUrl: batchSources.bitcoinCashBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Daily reward flow lets students compare recent issuance and fee contribution with market demand." }),
          exposure({ entityName: "Bitcoin Cash network", entityType: "Proof-of-work network", assetOrInstrument: "Hash rate", amount: "3.27", unit: "E hash/s", exposureType: "Network security metric", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.bitcoinCashBitinfocharts.title, sourcePublisher: batchSources.bitcoinCashBitinfocharts.publisher, sourceUrl: batchSources.bitcoinCashBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Hash rate shows how much mining power is securing BCH and belongs in every proof-of-work lesson." }),
          exposure({ entityName: "Bitcoin Cash network", entityType: "Proof-of-work network", assetOrInstrument: "Blocks last 24 hours", amount: "134", unit: "blocks", exposureType: "Recent block activity", asOfDate: "2026-07-14", retrievedAt, sourceTitle: batchSources.bitcoinCashBitinfocharts.title, sourcePublisher: batchSources.bitcoinCashBitinfocharts.publisher, sourceUrl: batchSources.bitcoinCashBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Blocks produced over the last day help students understand cadence, difficulty, and mining rhythm." }),
          exposure({ entityName: "Bitcoin Cash halving schedule", entityType: "Protocol issuance schedule", assetOrInstrument: "Current subsidy", amount: "3.125", unit: "BCH per block", exposureType: "Programmed issuance", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.bitcoinCashHalving.title, sourcePublisher: batchSources.bitcoinCashHalving.publisher, sourceUrl: batchSources.bitcoinCashHalving.url, freshnessStatus: "current", whyItMatters: "The current subsidy and next reduction teach students how BCH issuance changes over time." }),
        ],
        marketStructure: [
          { title: "Supply layer", detail: "The 21 million cap and halving schedule frame long-term scarcity." },
          { title: "Mining layer", detail: "Reward, fees, difficulty, and hash rate show security conditions." },
          { title: "Payment layer", detail: "Transaction usage and merchant acceptance test the peer-to-peer cash thesis." },
          { title: "Liquidity layer", detail: "Exchange depth and BCH/BTC relative strength decide whether moves are durable." },
        ],
        driverRegimes: [
          { title: "Proof-of-work rotation", detail: "BCH can move when older mining assets attract renewed demand." },
          { title: "Payment-use regime", detail: "Usage-led strength should show transaction and adoption evidence." },
          { title: "Halving-awareness regime", detail: "Reward reductions change miner economics and market attention around supply." },
        ],
        sourceBackedClaims: [
          { title: "Supply cap", detail: "BitcoinCash.org states BCH has a maximum supply of 21 million coins." },
          { title: "Current reward", detail: "NiceHash and BitInfoCharts show the BCH subsidy at 3.125 BCH per block." },
          { title: "Recent hash rate", detail: "BitInfoCharts showed BCH hash rate near 3.27 E hash/s during review." },
          { title: "Daily reward flow", detail: "BitInfoCharts showed 418.75 BCH subsidy plus about 0.222 BCH fees over the last 24 hours." },
          { title: "Block cadence", detail: "BitInfoCharts showed 134 BCH blocks over the last 24 hours at the checked timestamp." },
        ],
        reviewNotes: [
          "Do not teach BCH as BTC-light; teach its own miners, blocks, payment use, and liquidity.",
          "Date hash-rate and reward data because proof-of-work metrics update constantly.",
          "Use crypto terms: hash rate, subsidy, fees, liquidity depth, slippage, open interest, and exchange depth.",
        ],
      },
    },
  },
  litecoin: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Litecoin? LTC Mining, Halving, and Payment Guide",
    seoDescription:
      "Study Litecoin, LTC supply, block rewards, hash rate, MWEB, payment use, holder concentration, and market risks.",
    publicHeadline: "Litecoin is a long-running proof-of-work payment network.",
    publicSubheadline:
      "LTC matters because it combines an 84 million supply cap, fast block cadence, Scrypt mining, halving cycles, payment history, optional MWEB privacy features, and strong exchange availability.",
    plainEnglish:
      "Litecoin is an older proof-of-work cryptocurrency designed for payments and faster block settlement than Bitcoin. LTC is useful for teaching supply caps, halvings, mining, fees, network longevity, and payment-coin market cycles.",
    marketRole:
      "LTC is a proof-of-work payment asset. Students should study the 84 million supply cap, 2.5-minute block cadence, current 6.25 LTC subsidy, hash rate, fees, MWEB context, exchange depth, and its relationship with Bitcoin and Bitcoin Cash.",
    whyTradersWatch:
      "Traders watch LTC around halving cycles, proof-of-work rotations, payment-coin attention, MWEB discussion, miner behavior, hash-rate changes, and relative strength versus BTC and BCH.",
    lurnavaMonitorNote:
      "Lurnava monitors Litecoin through official ecosystem sources, BitInfoCharts network data, halving schedule references, MWEB activation history, explorer-rich-list limitations, hash rate, block rewards, exchange depth, slippage, funding, and LTC/BTC behavior.",
    conversionCta:
      "Inside Lurnava, learn how to review older proof-of-work assets through mining data, supply rules, usage, and liquidity without relying on nostalgia.",
    sources: [batchSources.litecoinHome, batchSources.litecoinBitinfocharts, batchSources.litecoinHalving, batchSources.litecoinMweb, batchSources.litecoinRichList],
    drivers: [
      { title: "Halving schedule", detail: "Litecoin halvings reduce new LTC issuance and regularly bring attention back to miner economics." },
      { title: "Hash rate", detail: "Scrypt mining power is a key proof-of-work security metric." },
      { title: "Payment usage", detail: "Litecoin's long-running payment identity depends on transaction demand and merchant or processor support." },
      { title: "MWEB context", detail: "MimbleWimble Extension Blocks give Litecoin an optional privacy-related feature students should understand carefully." },
      { title: "BTC and BCH comparison", detail: "LTC often trades against other proof-of-work payment assets and should be compared structurally." },
      { title: "Large-wallet concentration", detail: "Explorer rich lists are useful for concentration study when limitations are clearly stated." },
    ],
    publicRisks: [
      { risk: "Mature-asset attention cycles", watch: "Older assets can rally on recognition but still need current usage evidence." },
      { risk: "Miner revenue pressure", watch: "Lower subsidy after halvings can pressure miners if fees and price do not support economics." },
      { risk: "Privacy-feature venue risk", watch: "MWEB-related features can affect how some venues view the asset." },
      { risk: "Explorer ownership limits", watch: "Top-address data does not prove final beneficial ownership." },
      { risk: "Liquidity rotation", watch: "LTC can move quickly during proof-of-work rotations and then fade if attention shifts." },
    ],
    lab: {
      deskBrief:
        "Litecoin is a proof-of-work and payment-network lesson. The Asset Lab reviews the 84 million LTC cap, 6.25 LTC subsidy, halving timeline, hash rate, block cadence, daily rewards, MWEB activation, top-address concentration limits, exchange depth, derivatives positioning, and LTC behavior versus BTC and BCH.",
      researchQuestion:
        "Is LTC moving because halving expectations returned, proof-of-work assets rotated, hash-rate data changed, MWEB discussion increased, payment usage improved, or liquidity conditions created a temporary expansion?",
      operatingModel:
        "Teach Litecoin through supply, mining, network usage, MWEB context, concentration, and liquidity. The asset's age is not enough; students need current data to decide whether a move has support.",
      participants: [
        { name: "Litecoin miners", role: "Scrypt security providers", whyItMatters: "They secure the network and respond to subsidy, fee, and price incentives.", sourceBasis: "BitInfoCharts Litecoin mining data." },
        { name: "Litecoin Foundation", role: "Ecosystem steward", whyItMatters: "The foundation supports education, adoption, and ecosystem resources.", sourceBasis: "Litecoin Foundation official sources." },
        { name: "Payment users", role: "Transaction demand source", whyItMatters: "Litecoin's payment identity depends on real transfer usage.", sourceBasis: "Litecoin official site and explorer data." },
        { name: "MWEB users", role: "Optional privacy-feature users", whyItMatters: "MWEB activity affects Litecoin's feature set and venue-risk discussion.", sourceBasis: "Litecoin MWEB activation announcement." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "LTC has broad access, but order-book depth still controls execution quality.", sourceBasis: "Market-depth and exchange review." },
        { name: "Large Litecoin addresses", role: "Concentration reference", whyItMatters: "Top addresses can shape concentration analysis when attribution limits are included.", sourceBasis: "BitInfoCharts Litecoin rich list." },
      ],
      historicalEvents: [
        { year: "2011", title: "Litecoin launches", detail: "LTC enters the market as an early Bitcoin-inspired payment network." },
        { year: "2015", title: "First Litecoin halving", detail: "The block subsidy falls from 50 to 25 LTC." },
        { year: "2017", title: "SegWit adoption and payment attention", detail: "Litecoin becomes a major example of earlier network-upgrade adoption." },
        { year: "2019", title: "Second halving", detail: "The subsidy falls to 12.5 LTC and renews miner-economics discussion." },
        { year: "2022", title: "MWEB activates", detail: "MimbleWimble Extension Blocks add optional privacy-related functionality." },
        { year: "2023", title: "Third halving", detail: "The subsidy falls to 6.25 LTC, making hash rate and fee share important teaching points." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "LTC often follows broad proof-of-work sentiment but can underperform or outperform in cycles.", learnerNote: "Check LTC/BTC instead of only LTC/USD." },
        { market: "Bitcoin Cash", relationship: "Both are payment-oriented proof-of-work assets with halving schedules.", learnerNote: "Compare mining, fees, and liquidity." },
        { market: "Privacy-feature assets", relationship: "MWEB can pull Litecoin into privacy-feature discussion.", learnerNote: "Separate optional feature design from exchange policy risk." },
      ],
      riskMap: [
        { risk: "Low-fee sustainability", watch: "Low fees are useful for users but can affect long-term miner revenue after halvings." },
        { risk: "Recognition without growth", watch: "An old brand can create attention without fresh adoption." },
        { risk: "MWEB venue sensitivity", watch: "Optional privacy features can complicate exchange and compliance discussion." },
        { risk: "Top-wallet attribution", watch: "Explorer rich lists are not verified ownership registries." },
        { risk: "Proof-of-work competition", watch: "LTC competes for miner and trader attention with many older assets." },
      ],
      researchRoutine: [
        "Confirm Litecoin supply cap, current subsidy, and next halving context.",
        "Check reward per block, daily reward, hash rate, difficulty, and block cadence.",
        "Review MWEB context separately from basic payment use.",
        "Use top-address data only with clear attribution limitations.",
        "Compare LTC/BTC and LTC/BCH for relative strength.",
        "Review exchange depth, slippage, funding, and open interest before reading a move.",
      ],
      relatedLessons: ["Level 6 Crypto Market Structure", "Level 7 Proof-of-Work Networks", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Price Channel Breakout", "Volatility Breakout (ATR) Strategy"],
      deepDive: {
        identity: [
          { title: "Long-running payment coin", detail: "Litecoin's classroom value comes from longevity plus measurable mining data." },
          { title: "Halving-cycle asset", detail: "The subsidy schedule is central because it changes issuance and miner economics." },
          { title: "Optional privacy-feature case", detail: "MWEB lets students study how feature design can create both utility and venue sensitivity." },
        ],
        authorityOrFounders: [
          { title: "Charlie Lee origin", detail: "Litecoin's early history is tied to Charlie Lee, but current analysis should rely on network data." },
          { title: "Litecoin Foundation", detail: "The foundation provides education and adoption context without replacing on-chain evidence." },
          { title: "Miner network", detail: "Scrypt miners secure the chain and make hash-rate monitoring essential." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Litecoin protocol", entityType: "Proof-of-work network", assetOrInstrument: "Maximum supply", amount: "84,000,000", unit: "LTC", exposureType: "Supply cap", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinHome.title, sourcePublisher: batchSources.litecoinHome.publisher, sourceUrl: batchSources.litecoinHome.url, freshnessStatus: "current", whyItMatters: "The 84 million cap anchors the Litecoin scarcity lesson and helps students compare it with Bitcoin and BCH." }),
          exposure({ entityName: "Litecoin miners", entityType: "Proof-of-work miners", assetOrInstrument: "Reward per block", amount: "6.25 + 0.01684", unit: "LTC", exposureType: "Current miner compensation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinBitinfocharts.title, sourcePublisher: batchSources.litecoinBitinfocharts.publisher, sourceUrl: batchSources.litecoinBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Reward per block shows the subsidy and fee component miners receive for securing Litecoin." }),
          exposure({ entityName: "Litecoin network", entityType: "Proof-of-work network", assetOrInstrument: "Reward last 24 hours", amount: "3,606 + 9.72", unit: "LTC", exposureType: "Recent issuance and fees", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinBitinfocharts.title, sourcePublisher: batchSources.litecoinBitinfocharts.publisher, sourceUrl: batchSources.litecoinBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Daily reward flow helps students compare issuance with current demand and market depth." }),
          exposure({ entityName: "Litecoin network", entityType: "Proof-of-work network", assetOrInstrument: "Hash rate", amount: "2.65", unit: "P hash/s", exposureType: "Network security metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinBitinfocharts.title, sourcePublisher: batchSources.litecoinBitinfocharts.publisher, sourceUrl: batchSources.litecoinBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Hash rate shows how much mining power secures Litecoin and is a core proof-of-work metric." }),
          exposure({ entityName: "Litecoin network", entityType: "Proof-of-work network", assetOrInstrument: "Blocks last 24 hours", amount: "577", unit: "blocks", exposureType: "Recent block activity", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinBitinfocharts.title, sourcePublisher: batchSources.litecoinBitinfocharts.publisher, sourceUrl: batchSources.litecoinBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Block count helps students connect Litecoin's 2.5-minute target cadence with actual network activity." }),
          exposure({ entityName: "BitInfoCharts largest listed Litecoin address", entityType: "Explorer-labeled wallet", assetOrInstrument: "Largest listed LTC balance", amount: "2,510,003", unit: "LTC", exposureType: "Explorer concentration reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.litecoinRichList.title, sourcePublisher: batchSources.litecoinRichList.publisher, sourceUrl: batchSources.litecoinRichList.url, freshnessStatus: "current", whyItMatters: "A large listed balance helps students study concentration, but it must not be presented as verified beneficial ownership.", limitations: "Explorer rich lists can include exchanges, custodians, contracts, and unlabeled wallets; ownership must be verified separately." }),
        ],
        marketStructure: [
          { title: "Supply and halving layer", detail: "Cap, subsidy, and halving schedule shape long-term issuance." },
          { title: "Mining layer", detail: "Hash rate, difficulty, rewards, and fees show current security conditions." },
          { title: "Feature layer", detail: "MWEB adds a separate optional privacy-feature discussion." },
          { title: "Liquidity layer", detail: "LTC/BTC, spot depth, funding, and open interest define trade quality." },
        ],
        driverRegimes: [
          { title: "Halving expectation regime", detail: "LTC can receive attention when the next subsidy reduction approaches." },
          { title: "Proof-of-work rotation regime", detail: "Older mining assets can move together during sector rotations." },
          { title: "Payment-network regime", detail: "A stronger lesson includes transaction use and payment adoption beyond exchange trading." },
        ],
        sourceBackedClaims: [
          { title: "Block reward", detail: "NiceHash and BitInfoCharts show Litecoin's current subsidy at 6.25 LTC per block." },
          { title: "Recent network data", detail: "BitInfoCharts showed 577 blocks in the last 24 hours and a 2m 30s average block time." },
          { title: "Hash rate", detail: "BitInfoCharts showed Litecoin hash rate near 2.65 P hash/s during review." },
          { title: "Daily rewards", detail: "BitInfoCharts showed 3,606 LTC subsidy plus 9.72 LTC fees over the last 24 hours." },
          { title: "MWEB activation", detail: "Litecoin.com states that MWEB officially activated, adding optional privacy-related functionality." },
        ],
        reviewNotes: [
          "Do not teach LTC only through age or reputation; require current mining, fee, usage, and liquidity data.",
          "Use source limitations for any rich-list wallet claim.",
          "Use crypto terms: hash rate, subsidy, fees, liquidity depth, slippage, funding, open interest, and MWEB context.",
        ],
      },
    },
  },
  uniswap: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Uniswap? UNI Governance, Treasury, and DEX Guide",
    seoDescription:
      "Study Uniswap, UNI allocation, governance, AMM liquidity, foundation financials, grants, and the risks around DEX value capture.",
    publicHeadline: "Uniswap is a decentralized exchange protocol with UNI governance.",
    publicSubheadline:
      "UNI matters because Uniswap combines automated market makers, liquidity pools, Ethereum and multi-chain DEX activity, governance, treasury decisions, foundation grants, and fee-value debates.",
    plainEnglish:
      "Uniswap lets users swap tokens through liquidity pools instead of a traditional order book. UNI is the governance token tied to protocol decisions, treasury discussions, and the long debate over how DEX usage should connect to token value.",
    marketRole:
      "UNI is a DeFi governance and DEX-infrastructure asset. Students should study protocol volume, liquidity quality, fee debates, UNI allocation, foundation financials, grants, governance participation, competition, and exchange depth.",
    whyTradersWatch:
      "Traders watch UNI when DEX volume rises, when fee-switch debates return, when governance proposals change expectations, when the foundation reports runway, when DeFi assets rotate, or when Ethereum activity improves.",
    lurnavaMonitorNote:
      "Lurnava monitors Uniswap through official docs, UNI launch allocation, governance forum proposals, foundation financial reports, grants, liquidity-pool activity, Ethereum DeFi conditions, exchange depth, slippage, funding, and UNI relative strength.",
    conversionCta:
      "Inside Lurnava, learn how to judge a DeFi governance token by usage, treasury decisions, liquidity, and value-capture design.",
    sources: [batchSources.uniswapUniLaunch, batchSources.uniswapFoundationFinancials, batchSources.uniswapGovernance, batchSources.uniswapDocs],
    drivers: [
      { title: "DEX volume", detail: "Protocol usage matters because Uniswap's core product is token swapping through liquidity pools." },
      { title: "Governance proposals", detail: "UNI value expectations can change when proposals affect fees, treasury, or protocol direction." },
      { title: "Foundation runway", detail: "Financial reports show how much funding supports grants and operations." },
      { title: "Grant allocation", detail: "Grant commitments can support ecosystem growth or raise spending-quality questions." },
      { title: "DeFi sector rotation", detail: "UNI often moves with DeFi governance assets during sector cycles." },
      { title: "Liquidity competition", detail: "Other DEXs, aggregators, and app-specific venues compete for swap flow." },
    ],
    publicRisks: [
      { risk: "Usage-to-token gap", watch: "High protocol volume does not automatically mean UNI captures value." },
      { risk: "Governance uncertainty", watch: "Proposals can change expectations before implementation is clear." },
      { risk: "DEX competition", watch: "Liquidity can move to other venues when incentives, fees, or execution improve." },
      { risk: "Treasury spending quality", watch: "Foundation and grants should be measured against outcomes." },
      { risk: "Regulatory pressure", watch: "DEX interfaces, governance, and fee mechanisms can face legal attention." },
    ],
    lab: {
      deskBrief:
        "Uniswap is a DeFi governance and exchange-infrastructure lesson. The Asset Lab reviews AMM mechanics, liquidity quality, swap demand, UNI allocation, governance proposals, foundation cash and token resources, grant commitments, fee-value debate, competition, exchange depth, slippage, and DeFi-sector rotation.",
      researchQuestion:
        "Is UNI moving because DEX volume improved, governance changed expectations, foundation financials improved confidence, fee-value debate returned, grants supported growth, or DeFi assets rotated together?",
      operatingModel:
        "Teach Uniswap by separating protocol usage from token value capture. Students review liquidity pools, volume, governance, foundation resources, grants, competition, and UNI market depth before accepting a bullish or bearish thesis.",
      participants: [
        { name: "Uniswap Labs", role: "Protocol and interface developer", whyItMatters: "It remains a major builder and product force around the protocol.", sourceBasis: "Uniswap Labs blog and official docs." },
        { name: "Uniswap Foundation", role: "Ecosystem funder", whyItMatters: "Foundation resources, grants, and runway affect development and ecosystem support.", sourceBasis: "Uniswap Foundation FY 2025 financials." },
        { name: "UNI token holders", role: "Governance participants", whyItMatters: "They can vote or delegate on governance proposals that shape protocol direction.", sourceBasis: "Uniswap governance forum." },
        { name: "Liquidity providers", role: "Pool capital providers", whyItMatters: "They supply the liquidity that makes swaps possible.", sourceBasis: "Uniswap protocol docs." },
        { name: "Swappers and aggregators", role: "Demand and routing users", whyItMatters: "Their order flow determines whether Uniswap pools remain important execution venues.", sourceBasis: "Uniswap protocol docs and ecosystem usage review." },
        { name: "Grant recipients", role: "Ecosystem builders", whyItMatters: "Grant outcomes help students assess whether treasury spending improves the protocol ecosystem.", sourceBasis: "Uniswap Foundation financial report." },
      ],
      historicalEvents: [
        { year: "2018", title: "Uniswap launches", detail: "The protocol popularizes automated market maker exchange design on Ethereum." },
        { year: "2020", title: "UNI token launches", detail: "Governance begins with a one billion UNI genesis supply and public allocation schedule." },
        { year: "2021", title: "Uniswap v3 launches", detail: "Concentrated liquidity changes the DEX liquidity lesson." },
        { year: "2022-2023", title: "Multi-chain and governance debate grows", detail: "Students begin studying deployment decisions, fees, and treasury use." },
        { year: "2024", title: "DeFi competition intensifies", detail: "Aggregators and new DEX designs compete for routing and liquidity." },
        { year: "2025", title: "Foundation financial reporting expands", detail: "The FY 2025 summary gives students a source-backed view of runway and grants." },
      ],
      correlations: [
        { market: "Ethereum DeFi", relationship: "UNI is closely tied to Ethereum trading and DeFi activity.", learnerNote: "Compare UNI with ETH and DeFi volume." },
        { market: "DEX and aggregator assets", relationship: "UNI can rotate with other exchange and liquidity tokens.", learnerNote: "Compare usage, fees, governance, and token value capture." },
        { market: "Stablecoin liquidity", relationship: "DEX volume often depends on stablecoin and major-asset liquidity.", learnerNote: "Check pool depth before reading volume alone." },
      ],
      riskMap: [
        { risk: "Value-capture uncertainty", watch: "UNI governance does not automatically receive protocol economics." },
        { risk: "Liquidity migration", watch: "LPs can move capital to better incentives or execution venues." },
        { risk: "Grant effectiveness", watch: "Large grants must be matched with measurable protocol benefit." },
        { risk: "Governance concentration", watch: "Delegation and voter concentration can shape decisions." },
        { risk: "Interface and regulatory risk", watch: "DEX access and policy questions can affect market confidence." },
      ],
      researchRoutine: [
        "Review Uniswap volume, liquidity, pool depth, and fee context.",
        "Read active governance proposals and distinguish discussion from implementation.",
        "Check foundation financials, runway, grants, and token holdings.",
        "Compare UNI with DeFi sector assets and Ethereum activity.",
        "Review liquidity depth, slippage, funding, and open interest for UNI itself.",
        "Classify the move as usage-led, governance-led, fee-debate, foundation-report, DeFi-rotation, or liquidity squeeze.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 8 Governance and Treasury", "Level 9 Token Utility"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Narrative With Data Confirmation", "Price Channel Breakout"],
      deepDive: {
        identity: [
          { title: "DEX infrastructure asset", detail: "UNI teaches students how exchange protocols work through pools instead of centralized order books." },
          { title: "Governance-value debate", detail: "The central UNI question is how governance, fees, and protocol usage connect to token demand." },
          { title: "Foundation runway case", detail: "Financial reports let students inspect resources, grants, and runway in a source-backed way." },
        ],
        authorityOrFounders: [
          { title: "Hayden Adams and Uniswap Labs", detail: "The origin story includes Hayden Adams and Uniswap Labs, while ongoing authority also flows through governance." },
          { title: "Uniswap Foundation", detail: "The foundation manages grants and operational resources that students can audit through reports." },
          { title: "UNI governance", detail: "Token holders and delegates shape protocol decisions, deployments, and treasury discussions." },
        ],
        holderExposureMap: [
          exposure({ entityName: "UNI genesis supply", entityType: "Governance token allocation", assetOrInstrument: "Genesis supply", amount: "1,000,000,000", unit: "UNI", exposureType: "Initial token supply", asOfDate: "2020-09-16", retrievedAt, sourceTitle: batchSources.uniswapUniLaunch.title, sourcePublisher: batchSources.uniswapUniLaunch.publisher, sourceUrl: batchSources.uniswapUniLaunch.url, freshnessStatus: "historical", whyItMatters: "Genesis supply is the base number for understanding UNI allocation, treasury, and governance concentration." }),
          exposure({ entityName: "Uniswap community", entityType: "Governance allocation", assetOrInstrument: "Community allocation", amount: "600,000,000", unit: "UNI", exposureType: "Initial allocation", asOfDate: "2020-09-16", retrievedAt, sourceTitle: batchSources.uniswapUniLaunch.title, sourcePublisher: batchSources.uniswapUniLaunch.publisher, sourceUrl: batchSources.uniswapUniLaunch.url, freshnessStatus: "historical", whyItMatters: "Community allocation shows how much of the genesis supply was assigned to users, governance, and community control." }),
          exposure({ entityName: "Uniswap team and future employees", entityType: "Insider allocation", assetOrInstrument: "Team allocation", amount: "212,660,000", unit: "UNI", exposureType: "Initial team allocation", asOfDate: "2020-09-16", retrievedAt, sourceTitle: batchSources.uniswapUniLaunch.title, sourcePublisher: batchSources.uniswapUniLaunch.publisher, sourceUrl: batchSources.uniswapUniLaunch.url, freshnessStatus: "historical", whyItMatters: "Team allocation helps students study governance concentration and long-term incentive alignment." }),
          exposure({ entityName: "Uniswap Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "Total reported assets", amount: "85.8", unit: "million USD", exposureType: "Foundation resources", asOfDate: "2025-12-31", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.uniswapFoundationFinancials.title, sourcePublisher: batchSources.uniswapFoundationFinancials.publisher, sourceUrl: batchSources.uniswapFoundationFinancials.url, freshnessStatus: "recent", whyItMatters: "Total resources show how much runway and grant capacity the foundation reported at year-end." }),
          exposure({ entityName: "Uniswap Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "UNI holdings", amount: "15.1", unit: "million UNI", exposureType: "Foundation token resources", asOfDate: "2025-12-31", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.uniswapFoundationFinancials.title, sourcePublisher: batchSources.uniswapFoundationFinancials.publisher, sourceUrl: batchSources.uniswapFoundationFinancials.url, freshnessStatus: "recent", whyItMatters: "Foundation UNI holdings matter because token resources can fund grants or affect governance expectations." }),
          exposure({ entityName: "Uniswap Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "Cash and stablecoins", amount: "49.9", unit: "million USD", exposureType: "Foundation liquid resources", asOfDate: "2025-12-31", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.uniswapFoundationFinancials.title, sourcePublisher: batchSources.uniswapFoundationFinancials.publisher, sourceUrl: batchSources.uniswapFoundationFinancials.url, freshnessStatus: "recent", whyItMatters: "Cash and stablecoins are important because they fund operations and grants without relying only on token sales." }),
          exposure({ entityName: "Uniswap Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "ETH holdings", amount: "240", unit: "ETH", exposureType: "Foundation crypto holdings", asOfDate: "2025-12-31", sourcePublishedAt: "2026", retrievedAt, sourceTitle: batchSources.uniswapFoundationFinancials.title, sourcePublisher: batchSources.uniswapFoundationFinancials.publisher, sourceUrl: batchSources.uniswapFoundationFinancials.url, freshnessStatus: "recent", whyItMatters: "ETH holdings add another resource line and teach students to inspect full treasury composition, not only UNI." }),
        ],
        marketStructure: [
          { title: "Protocol usage layer", detail: "Volume, liquidity, and fee context show whether Uniswap remains an important DEX." },
          { title: "Governance layer", detail: "Proposals and delegation decide how protocol decisions are made." },
          { title: "Treasury layer", detail: "Foundation assets and grants show development runway and spending quality." },
          { title: "Token-value layer", detail: "UNI demand depends on how the market reads governance and value-capture potential." },
        ],
        driverRegimes: [
          { title: "DeFi activity regime", detail: "UNI strengthens when DEX activity and Ethereum DeFi liquidity improve together." },
          { title: "Governance catalyst regime", detail: "Important proposals can change how the market values UNI governance." },
          { title: "Foundation-report regime", detail: "Financial reporting can improve or weaken confidence in runway and grant discipline." },
        ],
        sourceBackedClaims: [
          { title: "Genesis supply", detail: "Uniswap Labs stated one billion UNI were minted at genesis." },
          { title: "Community allocation", detail: "The UNI launch post assigned 600 million UNI to the community." },
          { title: "Team allocation", detail: "The same launch post assigned 212.66 million UNI to team members and future employees." },
          { title: "Foundation resources", detail: "The FY 2025 report listed $85.8 million in total market value at year-end." },
          { title: "Foundation holdings", detail: "The report listed $49.9 million in USD or stables, 15.1 million UNI, and 240 ETH." },
        ],
        reviewNotes: [
          "Do not teach UNI as if DEX volume automatically flows to token holders; explain governance and fee design carefully.",
          "Date foundation financial figures and distinguish cash, UNI, and ETH resources.",
          "Use crypto terms: liquidity pools, slippage, depth, governance, treasury, open interest, funding, and value capture.",
        ],
      },
    },
  },
  aptos: {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Aptos? APT Move, Tokenomics, and Staking Guide",
    seoDescription:
      "Study Aptos, APT allocation, Move smart contracts, staking requirements, unlocks, validators, ecosystem growth, and liquidity risk.",
    publicHeadline: "Aptos is a Move-based Layer 1 built for scalable applications.",
    publicSubheadline:
      "APT matters because Aptos combines Move smart contracts, high-throughput infrastructure, validator staking, large initial allocations, unlock schedules, ecosystem funding, and intense Layer 1 competition.",
    plainEnglish:
      "Aptos is a Layer 1 blockchain that uses the Move programming language. APT is used for fees, staking, governance context, and ecosystem participation, but students must study allocation and unlocks carefully because supply structure is a major market factor.",
    marketRole:
      "APT is a newer Layer 1 and tokenomics lesson. A real review includes Move development, validators, staking requirements, allocation categories, investor and contributor lockups, ecosystem usage, liquidity depth, and competition with Sui, Solana, Avalanche, and Ethereum.",
    whyTradersWatch:
      "Traders watch APT when Layer 1 assets rotate, when Move-based ecosystems gain attention, when unlock schedules approach, when validator or staking rules change, and when apps, stablecoins, or wallets show stronger usage.",
    lurnavaMonitorNote:
      "Lurnava monitors Aptos through official tokenomics, staking docs, developer activity, validator references, unlock calendars, ecosystem usage, stablecoin activity, exchange depth, slippage, funding, open interest, and relative strength versus other Layer 1 assets.",
    conversionCta:
      "Inside Lurnava, learn how to analyze a newer Layer 1 by joining technical promise with supply structure, unlock risk, usage, and liquidity.",
    sources: [batchSources.aptosTokenomics, batchSources.aptosStaking, batchSources.aptosDocs, batchSources.aptosExplorer],
    drivers: [
      { title: "Move developer adoption", detail: "Aptos depends on whether builders choose Move and launch applications that retain users." },
      { title: "Initial allocation", detail: "Community, foundation, contributor, and investor allocations shape supply education." },
      { title: "Unlock calendar", detail: "APT supply releases can affect float and investor expectations." },
      { title: "Validator requirements", detail: "Staking minimums and maximums show who can operate at the validator layer." },
      { title: "Layer 1 competition", detail: "Aptos competes with Sui, Solana, Avalanche, Ethereum, and modular stacks for developers and liquidity." },
      { title: "Ecosystem liquidity", detail: "Stablecoins, DeFi venues, wallets, and exchange depth decide whether activity is tradable." },
    ],
    publicRisks: [
      { risk: "Unlock pressure", watch: "Large scheduled releases can weigh on APT even during strong ecosystem news." },
      { risk: "Adoption gap", watch: "A scalable chain needs active apps, users, and liquidity, not only technical claims." },
      { risk: "Validator access concentration", watch: "High stake requirements can affect who participates directly." },
      { risk: "Layer 1 crowding", watch: "Many high-performance chains compete for the same builders and capital." },
      { risk: "Liquidity shock", watch: "Newer assets can move sharply when order-book depth thins around unlock or news events." },
    ],
    lab: {
      deskBrief:
        "Aptos is a newer Layer 1 and tokenomics lesson. The Asset Lab reviews Move developer adoption, validator staking requirements, initial token allocation, investor and contributor lockups, unlock cadence, ecosystem usage, stablecoin activity, exchange depth, slippage, funding, and competition with Sui, Solana, Avalanche, and Ethereum.",
      researchQuestion:
        "Is APT moving because Move ecosystem usage improved, unlock risk changed, validator or staking details shifted, Layer 1 assets rotated, stablecoin liquidity expanded, or market depth created a sharp move?",
      operatingModel:
        "Teach Aptos by reading tokenomics before charts. Students review allocation, lockups, staking requirements, ecosystem usage, developer traction, and liquidity to avoid confusing technical promise with immediate token demand.",
      participants: [
        { name: "Aptos Foundation", role: "Ecosystem steward", whyItMatters: "The foundation manages ecosystem growth, tokenomics communication, and developer support.", sourceBasis: "Aptos tokenomics overview and official site." },
        { name: "Aptos Labs", role: "Core technical contributor", whyItMatters: "Aptos Labs contributes technology, ecosystem tooling, and network development.", sourceBasis: "Aptos documentation and explorer references." },
        { name: "Validators", role: "Consensus participants", whyItMatters: "Validators secure the network and require substantial stake under official rules.", sourceBasis: "Aptos staking docs." },
        { name: "Delegators and stakers", role: "Network participants", whyItMatters: "They help allocate stake and share in the security model.", sourceBasis: "Aptos staking docs." },
        { name: "Core contributors", role: "Locked allocation group", whyItMatters: "Contributor allocation and lockups shape future supply and incentives.", sourceBasis: "Aptos tokenomics overview." },
        { name: "Private investors", role: "Locked allocation group", whyItMatters: "Investor allocation and vesting are central to APT float risk.", sourceBasis: "Aptos tokenomics overview." },
      ],
      historicalEvents: [
        { year: "2022", title: "Aptos mainnet launches", detail: "The network enters the market with Move-based smart contracts and a one billion APT initial supply." },
        { year: "2022", title: "Tokenomics become a core debate", detail: "Allocation and lockup details become part of every serious APT review." },
        { year: "2023", title: "Ecosystem grants and apps expand", detail: "The market watches whether funding creates durable applications." },
        { year: "2024", title: "Move ecosystem competition rises", detail: "Aptos is increasingly compared with Sui and other high-throughput networks." },
        { year: "2025", title: "Unlock calendar remains important", detail: "Scheduled releases keep supply analysis in the classroom." },
        { year: "2026", title: "Usage quality becomes the main test", detail: "Students focus on whether apps, stablecoins, and wallets support the Layer 1 thesis." },
      ],
      correlations: [
        { market: "Sui", relationship: "Both use Move-derived technology and compete for similar builders.", learnerNote: "Compare developer activity, apps, liquidity, and token unlocks." },
        { market: "Solana", relationship: "Aptos competes for high-throughput application narratives.", learnerNote: "Check usage data before comparing speed." },
        { market: "Layer 1 rotation", relationship: "APT can move with newer Layer 1 assets during sector rotations.", learnerNote: "Separate sector lift from Aptos-specific usage." },
      ],
      riskMap: [
        { risk: "Vesting pressure", watch: "Investor and contributor unlocks can increase float." },
        { risk: "High validator requirement", watch: "Large staking requirements may limit direct validator participation." },
        { risk: "App retention", watch: "Funded ecosystems need repeat usage after incentives fade." },
        { risk: "Narrative crowding", watch: "Many chains promise scale, so students should demand activity evidence." },
        { risk: "Market-depth weakness", watch: "APT can move sharply when depth is thin near unlock dates." },
      ],
      researchRoutine: [
        "Review initial allocation percentages and lockup details from the official tokenomics source.",
        "Check upcoming unlock dates and compare with exchange depth.",
        "Review validator staking requirements and active validator references.",
        "Map Move-based apps, stablecoin activity, wallets, and developer traction.",
        "Compare APT with SUI, SOL, AVAX, and ETH for relative strength.",
        "Check slippage, funding, open interest, and order-book depth before reading a move.",
      ],
      relatedLessons: ["Level 7 Layer 1 Networks", "Level 9 Tokenomics", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Narrative With Data Confirmation", "Volatility Breakout (ATR) Strategy"],
      deepDive: {
        identity: [
          { title: "Move-based Layer 1", detail: "Aptos teaches a modern smart-contract platform with a different programming model from EVM-first chains." },
          { title: "Supply-structure case", detail: "Allocation and unlocks are central because APT launched with major stakeholder categories and vesting schedules." },
          { title: "High-throughput competition case", detail: "Aptos must be compared with other fast chains through actual usage, not only technical claims." },
        ],
        authorityOrFounders: [
          { title: "Aptos Labs and Foundation", detail: "Students can identify formal organizations behind development, ecosystem support, and communication." },
          { title: "Move developer base", detail: "Developers are important because app adoption validates or weakens the Layer 1 thesis." },
          { title: "Validators and stakers", detail: "Staking rules determine who secures the network and how participation is structured." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Aptos initial supply", entityType: "Layer 1 tokenomics", assetOrInstrument: "Initial supply", amount: "1,000,000,000", unit: "APT", exposureType: "Genesis token supply", asOfDate: "2022-10-12", retrievedAt, sourceTitle: batchSources.aptosTokenomics.title, sourcePublisher: batchSources.aptosTokenomics.publisher, sourceUrl: batchSources.aptosTokenomics.url, freshnessStatus: "historical", whyItMatters: "Initial supply gives students the base number for all allocation, vesting, and unlock analysis." }),
          exposure({ entityName: "Aptos community allocation", entityType: "Token allocation", assetOrInstrument: "Community allocation", amount: "51.02", unit: "percent of initial supply", exposureType: "Initial allocation", asOfDate: "2022-10-12", retrievedAt, sourceTitle: batchSources.aptosTokenomics.title, sourcePublisher: batchSources.aptosTokenomics.publisher, sourceUrl: batchSources.aptosTokenomics.url, freshnessStatus: "historical", whyItMatters: "Community allocation is the largest category and must be separated from foundation, contributors, and investors." }),
          exposure({ entityName: "Aptos core contributors", entityType: "Token allocation", assetOrInstrument: "Core contributor allocation", amount: "19.00", unit: "percent of initial supply", exposureType: "Locked stakeholder allocation", asOfDate: "2022-10-12", retrievedAt, sourceTitle: batchSources.aptosTokenomics.title, sourcePublisher: batchSources.aptosTokenomics.publisher, sourceUrl: batchSources.aptosTokenomics.url, freshnessStatus: "historical", whyItMatters: "Contributor allocation shapes long-term incentive alignment and unlock pressure." }),
          exposure({ entityName: "Aptos Foundation", entityType: "Ecosystem foundation", assetOrInstrument: "Foundation allocation", amount: "16.50", unit: "percent of initial supply", exposureType: "Foundation allocation", asOfDate: "2022-10-12", retrievedAt, sourceTitle: batchSources.aptosTokenomics.title, sourcePublisher: batchSources.aptosTokenomics.publisher, sourceUrl: batchSources.aptosTokenomics.url, freshnessStatus: "historical", whyItMatters: "Foundation allocation supports ecosystem activity and is part of supply-risk analysis." }),
          exposure({ entityName: "Aptos investors", entityType: "Private investor allocation", assetOrInstrument: "Investor allocation", amount: "13.48", unit: "percent of initial supply", exposureType: "Locked investor allocation", asOfDate: "2022-10-12", retrievedAt, sourceTitle: batchSources.aptosTokenomics.title, sourcePublisher: batchSources.aptosTokenomics.publisher, sourceUrl: batchSources.aptosTokenomics.url, freshnessStatus: "historical", whyItMatters: "Investor allocation and release schedules are essential when teaching APT float and market pressure." }),
          exposure({ entityName: "Aptos validator operators", entityType: "Staking operators", assetOrInstrument: "Validator stake range", amount: "1,000,000 to 50,000,000", unit: "APT", exposureType: "Validator staking requirement", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.aptosStaking.title, sourcePublisher: batchSources.aptosStaking.publisher, sourceUrl: batchSources.aptosStaking.url, freshnessStatus: "current", whyItMatters: "The required stake range helps students understand validator access, capital intensity, and network participation." }),
        ],
        marketStructure: [
          { title: "Tokenomics layer", detail: "Initial supply, allocation, and lockups frame the market before any chart read." },
          { title: "Validator layer", detail: "Stake requirements show the capital needed to secure the network directly." },
          { title: "Application layer", detail: "Move apps, wallets, DeFi, games, and stablecoins test real usage." },
          { title: "Liquidity layer", detail: "Exchange depth and derivatives positioning decide how unlocks and news affect price." },
        ],
        driverRegimes: [
          { title: "Unlock regime", detail: "APT can trade around known supply releases and investor-float concerns." },
          { title: "Layer 1 rotation regime", detail: "APT can rise with newer smart-contract assets even without asset-specific data." },
          { title: "Usage-validation regime", detail: "A better move includes app activity, stablecoin liquidity, and developer traction." },
        ],
        sourceBackedClaims: [
          { title: "Initial supply", detail: "Aptos reported one billion APT initial supply at mainnet." },
          { title: "Allocation split", detail: "Aptos listed 51.02% community, 19.00% core contributors, 16.50% foundation, and 13.48% investors." },
          { title: "Lockup structure", detail: "Aptos stated investors and current core contributors had a four-year lockup schedule with no APT available for the first twelve months." },
          { title: "Validator stake", detail: "Aptos staking docs state the validator stake range as 1,000,000 to 50,000,000 APT." },
          { title: "Staking rewards", detail: "The tokenomics source states the maximum reward rate started at 7% annually and is evaluated at every epoch." },
        ],
        reviewNotes: [
          "Do not teach APT only through speed; teach allocation, lockups, validators, app usage, and liquidity together.",
          "Date unlock and staking details because tokenomics can change through governance or updated documentation.",
          "Use crypto terms: unlocks, vesting, slippage, liquidity depth, funding, open interest, validators, and staking.",
        ],
      },
    },
  },
  "near-protocol": {
    lastReviewed: retrievedAt,
    seoTitle: "What Is NEAR Protocol? NEAR Validators and Tokenomics Guide",
    seoDescription:
      "Study NEAR Protocol, validator staking, inflation changes, chain abstraction, user-owned AI, ecosystem usage, and market risk.",
    publicHeadline: "NEAR Protocol is a scalable app platform built around usability and chain abstraction.",
    publicSubheadline:
      "NEAR matters because it combines validator staking, account usability, chain abstraction, user-owned AI positioning, application activity, inflation changes, and ecosystem liquidity.",
    plainEnglish:
      "NEAR is a smart-contract platform focused on making blockchain apps easier to use. NEAR tokens are used for fees, staking, and network participation, while students must track validator data, inflation policy, app usage, and liquidity.",
    marketRole:
      "NEAR is a Layer 1 and chain-abstraction asset. A useful review includes validators, total stake, inflation policy, application usage, AI-related positioning, stablecoin and DeFi activity, exchange depth, and competition with other app platforms.",
    whyTradersWatch:
      "Traders watch NEAR when chain-abstraction and AI narratives strengthen, when inflation policy changes, when validator or stake data improves, when apps show usage, or when Layer 1 assets rotate together.",
    lurnavaMonitorNote:
      "Lurnava monitors NEAR through official docs, validator references, NearBlocks staking data, inflation-policy sources, app and chain-abstraction adoption, stablecoin activity, liquidity depth, slippage, funding, open interest, and relative strength versus Layer 1 assets.",
    conversionCta:
      "Inside Lurnava, learn how to analyze NEAR by separating narrative, validator health, inflation policy, real usage, and market depth.",
    sources: [batchSources.nearHome, batchSources.nearDocs, batchSources.nearValidatorsDocs, batchSources.nearInflation, batchSources.nearBlocksValidators],
    drivers: [
      { title: "Chain abstraction adoption", detail: "NEAR's market story increasingly depends on whether users can access apps across chains more easily." },
      { title: "Validator participation", detail: "Validator count and total stake help students judge network security and decentralization." },
      { title: "Inflation policy", detail: "A lower inflation rate changes supply expectations and staking-reward discussion." },
      { title: "AI positioning", detail: "User-owned AI narrative can attract attention, but students need usage and developer evidence." },
      { title: "Application usage", detail: "Apps, wallets, stablecoins, and DeFi activity show whether infrastructure has demand." },
      { title: "Layer 1 rotation", detail: "NEAR can move with high-beta Layer 1 assets when risk appetite improves." },
    ],
    publicRisks: [
      { risk: "Narrative overreach", watch: "AI and abstraction language needs supporting product and usage evidence." },
      { risk: "Validator concentration", watch: "Students should review how stake is distributed across validators." },
      { risk: "Inflation misunderstanding", watch: "Lower inflation is not automatically bullish without demand and liquidity." },
      { risk: "App adoption gap", watch: "Strong infrastructure still needs durable app usage." },
      { risk: "Liquidity sensitivity", watch: "NEAR can move sharply during Layer 1 rotations when depth changes." },
    ],
    lab: {
      deskBrief:
        "NEAR is a Layer 1, staking, and chain-abstraction lesson. The Asset Lab reviews validator count, total staked NEAR, inflation-policy changes, account and chain-abstraction features, app usage, user-owned AI positioning, stablecoin activity, exchange depth, slippage, funding, and NEAR relative strength versus other Layer 1 assets.",
      researchQuestion:
        "Is NEAR moving because validator data improved, inflation policy changed, chain-abstraction adoption grew, AI positioning attracted attention, app usage increased, or Layer 1 assets rotated together?",
      operatingModel:
        "Start with validators and inflation policy, then review apps, stablecoins, chain abstraction, AI-related product evidence, and liquidity. Students should learn to test NEAR's narrative against measurable network data.",
      participants: [
        { name: "NEAR Foundation", role: "Ecosystem steward", whyItMatters: "The foundation communicates tokenomics, ecosystem direction, and chain-abstraction priorities.", sourceBasis: "NEAR official site and foundation blog." },
        { name: "NEAR validators", role: "Network security operators", whyItMatters: "Validators secure the chain and make total stake a core metric.", sourceBasis: "NEAR validator docs and NearBlocks validator list." },
        { name: "Delegators and stakers", role: "Stake participants", whyItMatters: "They influence validator distribution and staking incentives.", sourceBasis: "NEAR validator documentation and explorer data." },
        { name: "Application builders", role: "Usage creators", whyItMatters: "Apps and wallets determine whether NEAR infrastructure reaches real users.", sourceBasis: "NEAR documentation and ecosystem sources." },
        { name: "Chain abstraction users", role: "Cross-chain user base", whyItMatters: "Their adoption tests NEAR's usability thesis.", sourceBasis: "NEAR official positioning and documentation." },
        { name: "Governance and tokenomics contributors", role: "Policy shapers", whyItMatters: "Inflation proposals and validator incentives affect supply and network security.", sourceBasis: "NEAR Foundation inflation proposal and governance discussion." },
      ],
      historicalEvents: [
        { year: "2020", title: "NEAR mainnet launches", detail: "The network enters public operation as a scalable smart-contract platform." },
        { year: "2021", title: "Ecosystem and funding expand", detail: "Developers, apps, and ecosystem funds increase NEAR's market visibility." },
        { year: "2022", title: "Bear-market adoption test", detail: "Students learn to separate funded growth from durable usage." },
        { year: "2023", title: "Account and abstraction focus grows", detail: "NEAR increasingly emphasizes usability and cross-chain access." },
        { year: "2024-2025", title: "Inflation reduction debate advances", detail: "The ecosystem considers lowering inflation to improve long-term tokenomics." },
        { year: "2025-2026", title: "User-owned AI narrative appears", detail: "NEAR's market story includes AI infrastructure, requiring extra product-evidence checks." },
      ],
      correlations: [
        { market: "Layer 1 assets", relationship: "NEAR often moves with smart-contract platform rotations.", learnerNote: "Compare network data, not only price." },
        { market: "AI-linked crypto assets", relationship: "NEAR can attract attention when AI infrastructure narratives rise.", learnerNote: "Demand product proof and usage metrics." },
        { market: "Stablecoin and DeFi activity", relationship: "App liquidity supports whether NEAR is useful as an active platform.", learnerNote: "Check active liquidity and transaction use." },
      ],
      riskMap: [
        { risk: "Story-data mismatch", watch: "AI and abstraction narratives must be checked against active users and app usage." },
        { risk: "Stake concentration", watch: "A high total stake can still hide validator concentration." },
        { risk: "Inflation tradeoff", watch: "Lower inflation can change rewards and validator incentives." },
        { risk: "Cross-chain complexity", watch: "Abstraction tools can add technical and custody assumptions." },
        { risk: "Layer 1 competition", watch: "NEAR competes with many chains for developers, users, and liquidity." },
      ],
      researchRoutine: [
        "Check current validators, total staked NEAR, and any concentration notes.",
        "Review inflation-policy sources and distinguish proposal, approved change, and live parameter.",
        "Map chain-abstraction and user-owned AI claims to active products and users.",
        "Review stablecoin, DeFi, wallet, and app activity.",
        "Compare NEAR with SOL, AVAX, APT, SUI, and ETH for relative strength.",
        "Check order-book depth, slippage, funding, and open interest before reading a move.",
      ],
      relatedLessons: ["Level 7 Layer 1 Networks", "Level 9 Tokenomics", "Level 9 Market Depth"],
      relatedStrategies: ["Narrative With Data Confirmation", "Technical + Fundamental Confirmation", "Volatility-Adjusted Trend (ATR Filter)"],
      deepDive: {
        identity: [
          { title: "Usability-focused Layer 1", detail: "NEAR is best taught through accounts, apps, abstraction, staking, and inflation policy." },
          { title: "Tokenomics-change case", detail: "The inflation reduction debate gives students a concrete supply-policy example." },
          { title: "Narrative-testing asset", detail: "AI and abstraction positioning must be tested against product usage and network data." },
        ],
        authorityOrFounders: [
          { title: "NEAR Foundation", detail: "The foundation provides official ecosystem direction and tokenomics communication." },
          { title: "Validator set", detail: "Validators are named operational participants because they produce and validate blocks and chunks." },
          { title: "Governance contributors", detail: "Protocol economics can change through community proposals and validator adoption." },
        ],
        holderExposureMap: [
          exposure({ entityName: "NEAR validator set", entityType: "Proof-of-stake network", assetOrInstrument: "Current validators", amount: "416", unit: "validators", exposureType: "Consensus participation count", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.nearBlocksValidators.title, sourcePublisher: batchSources.nearBlocksValidators.publisher, sourceUrl: batchSources.nearBlocksValidators.url, freshnessStatus: "current", whyItMatters: "Validator count gives students a direct participation metric for NEAR's security layer." }),
          exposure({ entityName: "NEAR network", entityType: "Proof-of-stake network", assetOrInstrument: "Total staked", amount: "590.2", unit: "million NEAR", exposureType: "Staked network security exposure", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.nearBlocksValidators.title, sourcePublisher: batchSources.nearBlocksValidators.publisher, sourceUrl: batchSources.nearBlocksValidators.url, freshnessStatus: "current", whyItMatters: "Total staked NEAR shows how much supply is committed to the validator system and should be compared with concentration." }),
          exposure({ entityName: "NEAR validator concentration", entityType: "Validator concentration metric", assetOrInstrument: "Stake above 33% threshold", amount: "9.0", unit: "validators", exposureType: "Concentration observation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.nearBlocksValidators.title, sourcePublisher: batchSources.nearBlocksValidators.publisher, sourceUrl: batchSources.nearBlocksValidators.url, freshnessStatus: "current", whyItMatters: "The explorer note that validators 1 through 9 exceed a cumulative 33% stake helps students see concentration risk clearly." }),
          exposure({ entityName: "NEAR inflation proposal", entityType: "Tokenomics policy", assetOrInstrument: "Target maximum annual inflation", amount: "2.5", unit: "percent", exposureType: "Inflation policy target", asOfDate: "2025-2026", retrievedAt, sourceTitle: batchSources.nearInflation.title, sourcePublisher: batchSources.nearInflation.publisher, sourceUrl: batchSources.nearInflation.url, freshnessStatus: "recent", whyItMatters: "Lower maximum inflation can change supply pressure and staking discussion, so students must follow policy status and implementation." }),
          exposure({ entityName: "NEAR prior inflation model", entityType: "Tokenomics policy", assetOrInstrument: "Previous maximum annual inflation", amount: "5.0", unit: "percent", exposureType: "Prior inflation reference", asOfDate: "2025", retrievedAt, sourceTitle: batchSources.nearInflation.title, sourcePublisher: batchSources.nearInflation.publisher, sourceUrl: batchSources.nearInflation.url, freshnessStatus: "recent", whyItMatters: "The previous 5% context helps students understand why a reduction toward 2.5% matters for supply education." }),
          exposure({ entityName: "NEAR validators", entityType: "Network operators", assetOrInstrument: "Validator duty", amount: "Mechanism disclosed", unit: "validator role", exposureType: "Consensus role reference", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.nearValidatorsDocs.title, sourcePublisher: batchSources.nearValidatorsDocs.publisher, sourceUrl: batchSources.nearValidatorsDocs.url, freshnessStatus: "current", whyItMatters: "Official docs explain that validators produce and validate blocks and chunks, which grounds the staking lesson in protocol mechanics." }),
        ],
        marketStructure: [
          { title: "Validator layer", detail: "Current validators, total stake, and concentration notes form the first evidence set." },
          { title: "Tokenomics layer", detail: "Inflation policy and staking rewards affect supply expectations and validator incentives." },
          { title: "Application layer", detail: "Apps, wallets, stablecoins, and abstraction tools test real demand." },
          { title: "Narrative layer", detail: "AI and chain-abstraction stories need product evidence and liquidity confirmation." },
        ],
        driverRegimes: [
          { title: "Inflation-policy regime", detail: "NEAR can trade around supply-policy changes and staking-incentive discussion." },
          { title: "Abstraction-adoption regime", detail: "The strongest version of the thesis includes users crossing chains through NEAR-backed tools." },
          { title: "AI-attention regime", detail: "AI-related attention can lift NEAR, but students should demand live product metrics." },
        ],
        sourceBackedClaims: [
          { title: "Validator count", detail: "NearBlocks showed 416 current validators during review." },
          { title: "Total stake", detail: "NearBlocks showed about 590.2M NEAR total staked during review." },
          { title: "Concentration note", detail: "NearBlocks noted validators 1 through 9 hold a cumulative stake above 33%." },
          { title: "Inflation reduction", detail: "NEAR Foundation described a proposal to reduce inflation from about 5% toward 2.5%." },
          { title: "Validator duties", detail: "NEAR docs state validators are responsible for producing and validating blocks and chunks." },
        ],
        reviewNotes: [
          "Do not teach NEAR only through AI or abstraction narratives; require validator, inflation, app, and liquidity evidence.",
          "Date validator and stake metrics because explorer values update frequently.",
          "Use crypto terms: staking, validators, inflation, slippage, liquidity depth, funding, open interest, and app usage.",
        ],
      },
    },
  },
  "ethereum-classic": {
    lastReviewed: retrievedAt,
    seoTitle: "What Is Ethereum Classic? ETC Supply, Mining, and Security Guide",
    seoDescription:
      "Study Ethereum Classic, ETC proof-of-work mining, ECIP-1017 supply policy, hash rate, 51% attack history, and market risks.",
    publicHeadline: "Ethereum Classic is a proof-of-work smart-contract network with ETC monetary policy.",
    publicSubheadline:
      "ETC matters because it preserves the original Ethereum Classic chain, uses proof-of-work mining, follows a capped emission schedule, supports smart contracts, and carries important security-history lessons.",
    plainEnglish:
      "Ethereum Classic is a separate blockchain from Ethereum. It kept a proof-of-work design and has its own ETC supply policy, miner economics, smart-contract ecosystem, and history of network attacks that students must understand clearly.",
    marketRole:
      "ETC is a proof-of-work smart-contract and security-history asset. A serious review includes ECIP-1017 monetary policy, block rewards, hash rate, difficulty, miner incentives, 51% attack history, exchange liquidity, and its relationship with ETH and mining cycles.",
    whyTradersWatch:
      "Traders watch ETC when proof-of-work assets rotate, when mining economics change, when security concerns return, when Ethereum-related narratives spread, and when ETC liquidity expands during older-coin rallies.",
    lurnavaMonitorNote:
      "Lurnava monitors Ethereum Classic through official ECIP policy, BitInfoCharts network data, mining hash rate, difficulty, attack-history sources, exchange depth, slippage, funding, open interest, and ETC behavior versus ETH and proof-of-work assets.",
    conversionCta:
      "Inside Lurnava, learn how to study a proof-of-work smart-contract asset by combining monetary policy, mining data, security history, and liquidity.",
    sources: [batchSources.ethereumClassicHome, batchSources.ethereumClassicEcip1017, batchSources.ethereumClassicBitinfocharts, batchSources.ethereumClassicAttacks, batchSources.coinbaseEtcAttack],
    drivers: [
      { title: "Monetary policy", detail: "ECIP-1017 creates a capped emission schedule that students can inspect directly." },
      { title: "Hash rate", detail: "Proof-of-work security depends heavily on available mining power and attack cost." },
      { title: "Security history", detail: "ETC's 2019 and 2020 attacks are essential classroom material for confirmation and settlement risk." },
      { title: "Smart-contract usage", detail: "ETC supports smart contracts, but students must verify actual ecosystem demand." },
      { title: "ETH relationship", detail: "ETC can move with Ethereum-adjacent narratives while remaining a separate network." },
      { title: "Mining-cycle rotation", detail: "Older proof-of-work assets can rotate together when miner and scarcity themes return." },
    ],
    publicRisks: [
      { risk: "Attack-history overhang", watch: "Students must understand how previous 51% attacks affect confidence and exchange confirmation rules." },
      { risk: "Hash-rate sensitivity", watch: "Lower mining power can increase perceived attack risk." },
      { risk: "ETH confusion", watch: "ETC is separate from Ethereum and should not be taught as the same ecosystem." },
      { risk: "Low application activity", watch: "Smart-contract capability needs current user and developer demand." },
      { risk: "Liquidity spikes", watch: "ETC can move sharply during proof-of-work rotations when order-book depth thins." },
    ],
    lab: {
      deskBrief:
        "Ethereum Classic is a proof-of-work smart-contract and security-history lesson. The Asset Lab reviews ECIP-1017 supply policy, block rewards, hash rate, difficulty, daily rewards, 51% attack history, exchange confirmation risk, smart-contract activity, liquidity depth, slippage, funding, and ETC behavior versus ETH and mining assets.",
      researchQuestion:
        "Is ETC moving because proof-of-work assets rotated, mining economics changed, monetary-policy attention returned, Ethereum-adjacent narratives spread, hash rate improved, or liquidity conditions created a sharp move?",
      operatingModel:
        "Teach ETC through four layers: monetary policy, mining security, attack history, and current liquidity. Students should never confuse ETC with ETH or ignore the security history.",
      participants: [
        { name: "ETC miners", role: "Proof-of-work security providers", whyItMatters: "Miners secure the network and decide practical attack cost through hash rate.", sourceBasis: "BitInfoCharts ETC mining statistics." },
        { name: "Ethereum Classic community", role: "Protocol stewardship group", whyItMatters: "Community and ecosystem contributors maintain the network's proof-of-work identity.", sourceBasis: "EthereumClassic.org." },
        { name: "ECIP contributors", role: "Policy authors and reviewers", whyItMatters: "ECIPs define monetary policy and protocol changes students can inspect.", sourceBasis: "ECIP-1017 official source." },
        { name: "Centralized exchanges", role: "Confirmation and liquidity venues", whyItMatters: "Attack history can affect deposit confirmation requirements and trading access.", sourceBasis: "Coinbase ETC double-spend perspective." },
        { name: "Smart-contract users", role: "Application demand source", whyItMatters: "ETC capability matters only if applications and users are active.", sourceBasis: "EthereumClassic.org and explorer checks." },
        { name: "Security researchers", role: "Attack-risk analysts", whyItMatters: "They help students understand 51% attacks, reorganizations, and double-spend risk.", sourceBasis: "EthereumClassic.org attack education and Coinbase analysis." },
      ],
      historicalEvents: [
        { year: "2016", title: "Ethereum Classic separates from Ethereum", detail: "ETC continues the original chain after the DAO-related split." },
        { year: "2017", title: "ECIP-1017 monetary policy accepted", detail: "The 5M20 schedule gives ETC a capped emission framework." },
        { year: "2019", title: "Two 51% attacks occur", detail: "EthereumClassic.org records January 2019 attacks that become central to ETC security education." },
        { year: "2020", title: "Three more 51% attacks occur", detail: "The 2020 events show why hash rate and exchange confirmation rules matter." },
        { year: "2022", title: "Ethereum moves to proof of stake", detail: "ETC remains proof of work and receives renewed mining-sector attention." },
        { year: "2026", title: "Mining and policy remain core review fields", detail: "Students continue to monitor block rewards, hash rate, and emission schedule." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "ETC can receive attention from Ethereum-related narratives but remains a separate chain.", learnerNote: "Never copy ETH assumptions into ETC analysis." },
        { market: "Proof-of-work assets", relationship: "ETC can rotate with mining assets when scarcity and miner narratives strengthen.", learnerNote: "Compare hash rate and security history." },
        { market: "Mining profitability", relationship: "Miner behavior depends on price, reward, difficulty, and alternative coins.", learnerNote: "Review mining data before treating price alone as strength." },
      ],
      riskMap: [
        { risk: "51% attack history", watch: "Past attacks affect confidence and exchange confirmation behavior." },
        { risk: "Hash-rate drawdown", watch: "Lower hash rate can make the network more vulnerable." },
        { risk: "ETH identity confusion", watch: "Students must separate ETC from Ethereum after the merge." },
        { risk: "Application underuse", watch: "Smart-contract capability needs actual demand." },
        { risk: "Emission misunderstanding", watch: "The cap and reward reductions should be read from ECIP policy, not social claims." },
      ],
      researchRoutine: [
        "Read ECIP-1017 supply policy and current reward schedule.",
        "Check reward per block, daily rewards, hash rate, difficulty, and block cadence.",
        "Review official 51% attack history and exchange confirmation notes.",
        "Check application activity and smart-contract usage separately from ETH narratives.",
        "Compare ETC with ETH and proof-of-work assets for relative strength.",
        "Review spot depth, slippage, funding, and open interest around sharp ETC moves.",
      ],
      relatedLessons: ["Level 7 Proof-of-Work Networks", "Level 9 Risk Controls", "Level 9 Market Depth"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "Volatility Breakout (ATR) Strategy", "False Breakout Strategy"],
      deepDive: {
        identity: [
          { title: "Proof-of-work smart-contract chain", detail: "ETC combines smart-contract capability with mining, making it different from post-merge Ethereum." },
          { title: "Security-history lesson", detail: "The 51% attack history makes ETC one of the clearest examples of proof-of-work security risk." },
          { title: "Policy-defined supply asset", detail: "ECIP-1017 gives students an official monetary-policy source to read directly." },
        ],
        authorityOrFounders: [
          { title: "Ethereum Classic community", detail: "ETC's identity is community-led and policy-driven rather than controlled by one issuer." },
          { title: "ECIP process", detail: "Protocol policy and upgrades are documented through ECIPs that students can inspect." },
          { title: "Miner network", detail: "Miners are central because proof-of-work security depends on their hash power." },
        ],
        holderExposureMap: [
          exposure({ entityName: "Ethereum Classic monetary policy", entityType: "Protocol emission schedule", assetOrInstrument: "Upper supply bound", amount: "210.7", unit: "million ETC", exposureType: "Supply policy cap", asOfDate: "2017 ECIP", retrievedAt, sourceTitle: batchSources.ethereumClassicEcip1017.title, sourcePublisher: batchSources.ethereumClassicEcip1017.publisher, sourceUrl: batchSources.ethereumClassicEcip1017.url, freshnessStatus: "historical", whyItMatters: "The upper supply bound anchors ETC scarcity education and must be sourced from ECIP-1017." }),
          exposure({ entityName: "Ethereum Classic miners", entityType: "Proof-of-work miners", assetOrInstrument: "Reward per block", amount: "2.56 + 0.000648 + 0.00312 + 0.00249", unit: "ETC", exposureType: "Current miner compensation", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.ethereumClassicBitinfocharts.title, sourcePublisher: batchSources.ethereumClassicBitinfocharts.publisher, sourceUrl: batchSources.ethereumClassicBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Reward per block shows the subsidy and fee-related components miners receive for securing ETC." }),
          exposure({ entityName: "Ethereum Classic network", entityType: "Proof-of-work network", assetOrInstrument: "Reward last 24 hours", amount: "16,090 + 4.07 + 19.6 + 15.68", unit: "ETC", exposureType: "Recent issuance and fees", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.ethereumClassicBitinfocharts.title, sourcePublisher: batchSources.ethereumClassicBitinfocharts.publisher, sourceUrl: batchSources.ethereumClassicBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Daily reward flow gives students a concrete measure of current issuance and fee contribution." }),
          exposure({ entityName: "Ethereum Classic network", entityType: "Proof-of-work network", assetOrInstrument: "Hash rate", amount: "165.75", unit: "T hash/s", exposureType: "Network security metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.ethereumClassicBitinfocharts.title, sourcePublisher: batchSources.ethereumClassicBitinfocharts.publisher, sourceUrl: batchSources.ethereumClassicBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Hash rate is central for ETC because past attacks make mining security a first-order classroom topic." }),
          exposure({ entityName: "Ethereum Classic network", entityType: "Proof-of-work network", assetOrInstrument: "Difficulty", amount: "2.19", unit: "P difficulty", exposureType: "Mining difficulty metric", asOfDate: "2026-07-15", retrievedAt, sourceTitle: batchSources.ethereumClassicBitinfocharts.title, sourcePublisher: batchSources.ethereumClassicBitinfocharts.publisher, sourceUrl: batchSources.ethereumClassicBitinfocharts.url, freshnessStatus: "current", whyItMatters: "Difficulty helps students connect hash rate, block cadence, and miner competition in proof-of-work analysis." }),
          exposure({ entityName: "Coinbase ETC double-spend analysis", entityType: "Exchange security report", assetOrInstrument: "Observed double spends", amount: "800,000 and 460,000", unit: "ETC", exposureType: "Historical attack exposure", asOfDate: "2020-08", retrievedAt, sourceTitle: batchSources.coinbaseEtcAttack.title, sourcePublisher: batchSources.coinbaseEtcAttack.publisher, sourceUrl: batchSources.coinbaseEtcAttack.url, freshnessStatus: "historical", whyItMatters: "The Coinbase figures give students concrete historical amounts for understanding why confirmation and hash-rate risk matter." }),
        ],
        marketStructure: [
          { title: "Monetary-policy layer", detail: "ECIP-1017 supply and reward reductions shape the scarcity lesson." },
          { title: "Mining-security layer", detail: "Hash rate, difficulty, and reward data show proof-of-work security conditions." },
          { title: "Security-history layer", detail: "Past attacks make confirmation and exchange-risk education essential." },
          { title: "Liquidity layer", detail: "ETC depth, funding, and open interest decide whether proof-of-work rotations are tradable." },
        ],
        driverRegimes: [
          { title: "Mining rotation regime", detail: "ETC can move when proof-of-work and miner narratives strengthen." },
          { title: "Security-confidence regime", detail: "Hash-rate improvement and stable confirmation conditions can reduce immediate concern." },
          { title: "Ethereum-adjacent regime", detail: "ETC can receive attention from Ethereum narratives, but students must keep the chains separate." },
        ],
        sourceBackedClaims: [
          { title: "Supply policy", detail: "ECIP-1017 states ETC total supply is not expected to exceed 210.7 million ETC." },
          { title: "Reward data", detail: "BitInfoCharts showed 2.56 ETC subsidy plus fee components per block during review." },
          { title: "Hash rate", detail: "BitInfoCharts showed ETC hash rate near 165.75 T hash/s during review." },
          { title: "Attack history", detail: "EthereumClassic.org records two 51% attacks in January 2019 and three in August 2020." },
          { title: "Double-spend amounts", detail: "Coinbase described 2020 observed double-spend amounts of roughly 800,000 ETC and 460,000 ETC." },
        ],
        reviewNotes: [
          "Do not teach ETC as ETH with a smaller price; teach separate chain history, mining, policy, and security risk.",
          "Date mining data because hash rate and difficulty update constantly.",
          "Use crypto terms: hash rate, difficulty, subsidy, confirmations, liquidity depth, slippage, funding, and open interest.",
        ],
      },
    },
  },
};
