import { assetDeepBatch2Enhancements } from "./asset-intelligence-deep-batch-2";
import { assetDeepBatch3Enhancements } from "./asset-intelligence-deep-batch-3";
import { assetDeepBatch4Enhancements } from "./asset-intelligence-deep-batch-4";
import { assetDeepBatch5Enhancements } from "./asset-intelligence-deep-batch-5";
import { assetDeepBatch6Enhancements } from "./asset-intelligence-deep-batch-6";
import { assetDeepBatch7Enhancements } from "./asset-intelligence-deep-batch-7";
import { assetDeepBatch8Enhancements } from "./asset-intelligence-deep-batch-8";

export type AssetClassKey = "crypto" | "forex" | "gold";
export type AssetCoverageStatus = "ready" | "planned" | "archived";

export type AssetDriver = {
  title: string;
  detail: string;
};

export type AssetEvent = {
  year: string;
  title: string;
  detail: string;
};

export type AssetParticipant = {
  name: string;
  role: string;
  whyItMatters: string;
  sourceBasis?: string;
};

export type AssetFreshnessStatus = "current" | "recent" | "stale" | "historical";

export type AssetHoldingExposure = {
  entityName: string;
  entityType: string;
  assetOrInstrument: string;
  amount: string;
  unit: string;
  estimatedUsdValue?: string;
  exposureType: string;
  asOfDate: string;
  sourcePublishedAt?: string;
  retrievedAt: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceUrl: string;
  freshnessStatus: AssetFreshnessStatus;
  whyItMatters: string;
  limitations?: string;
};

export type AssetDeepResearch = {
  identity: AssetDriver[];
  authorityOrFounders: AssetDriver[];
  holderExposureMap: AssetHoldingExposure[];
  marketStructure: AssetDriver[];
  driverRegimes: AssetDriver[];
  sourceBackedClaims: AssetDriver[];
  reviewNotes: string[];
};

export type AssetCorrelation = {
  market: string;
  relationship: string;
  learnerNote: string;
};

export type AssetRisk = {
  risk: string;
  watch: string;
};

export type AssetResearchSource = {
  title: string;
  publisher: string;
  url: string;
  note: string;
};

export type AssetProfile = {
  slug: string;
  name: string;
  symbol: string;
  assetClass: AssetClassKey;
  rank: number;
  status: AssetCoverageStatus;
  snapshotLabel: string;
  lastReviewed: string;
  seoTitle: string;
  seoDescription: string;
  publicHeadline: string;
  publicSubheadline: string;
  plainEnglish: string;
  marketRole: string;
  whyTradersWatch: string;
  lurnavaMonitorNote: string;
  conversionCta: string;
  sources: AssetResearchSource[];
  drivers: AssetDriver[];
  publicRisks: AssetRisk[];
  lab: {
    deskBrief: string;
    researchQuestion: string;
    operatingModel: string;
    participants: AssetParticipant[];
    historicalEvents: AssetEvent[];
    correlations: AssetCorrelation[];
    riskMap: AssetRisk[];
    researchRoutine: string[];
    relatedLessons: string[];
    relatedStrategies: string[];
    deepDive?: AssetDeepResearch;
  };
};

export type CoverageAsset = {
  slug: string;
  name: string;
  symbol: string;
  assetClass: AssetClassKey;
  rank: number;
  status: AssetCoverageStatus;
};

export const coverageSnapshot = {
  label: "Curated monthly review - July 2026",
  basis:
    "Manual Lurnava coverage universe built from highly traded and widely monitored crypto, forex, and gold markets. This is not a live external API list.",
  nextReview: "2026-08-01",
} as const;

const assetDataRetrievedAt = "2026-07-15";

export const assetResearchSources = {
  bitcoinWhitepaper: {
    title: "Bitcoin whitepaper",
    publisher: "Bitcoin.org",
    url: "https://bitcoin.org/bitcoin.pdf",
    note: "Primary design paper for Bitcoin's peer-to-peer monetary network.",
  },
  bitcoinDeveloperGuide: {
    title: "Bitcoin developer guide",
    publisher: "Bitcoin.org",
    url: "https://developer.bitcoin.org/devguide/",
    note: "Technical reference for Bitcoin network behavior and transaction structure.",
  },
  blackrockIbit: {
    title: "iShares Bitcoin Trust ETF",
    publisher: "BlackRock",
    url: "https://www.blackrock.com/us/individual/products/333011/ishares-bitcoin-trust-etf",
    note: "Official issuer page for IBIT assets, shares outstanding, basket Bitcoin amount, benchmark, and holdings notes.",
  },
  strategyBitcoinPurchases: {
    title: "Bitcoin purchases",
    publisher: "Strategy",
    url: "https://www.strategy.com/purchases",
    note: "Official Strategy treasury page showing reported BTC holdings, purchase history, reserve context, and source dates.",
  },
  teslaSecQ12026: {
    title: "Tesla Form 10-Q for quarter ended March 31, 2026",
    publisher: "SEC",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026026673/tsla-20260331.htm",
    note: "Company filing used to verify Tesla digital asset exposure and disclosed Bitcoin unit count.",
  },
  grayscaleGbtc: {
    title: "Grayscale Bitcoin Trust ETF",
    publisher: "Grayscale",
    url: "https://etfs.grayscale.com/gbtc",
    note: "Official trust page for GBTC structure, ETP conversion context, and passive Bitcoin exposure.",
  },
  fidelityFbtc: {
    title: "Fidelity Wise Origin Bitcoin Fund",
    publisher: "Fidelity",
    url: "https://institutional.fidelity.com/advisors/investment-solutions/asset-classes/alternatives/digital-assets/fidelity-wise-origin-bitcoin-fund",
    note: "Official fund page for Fidelity's spot Bitcoin product and custody-style access channel.",
  },
  whiteHouseStrategicBitcoinReserve: {
    title: "Strategic Bitcoin Reserve executive order",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/",
    note: "Official policy source describing US government Bitcoin reserve treatment and forfeited-asset custody policy.",
  },
  ethereumWhitepaper: {
    title: "Ethereum whitepaper",
    publisher: "Ethereum.org",
    url: "https://ethereum.org/en/whitepaper/",
    note: "Primary Ethereum design overview for programmable smart contracts.",
  },
  ethereumDocs: {
    title: "Ethereum developer documentation",
    publisher: "Ethereum.org",
    url: "https://ethereum.org/en/developers/docs/",
    note: "Technical documentation for Ethereum network concepts, staking, and applications.",
  },
  solanaDocs: {
    title: "Solana documentation",
    publisher: "Solana",
    url: "https://solana.com/docs",
    note: "Official documentation for Solana's high-throughput blockchain design.",
  },
  solanaCoreDocs: {
    title: "Solana core concepts",
    publisher: "Solana",
    url: "https://solana.com/docs/core",
    note: "Official technical reference for accounts, transactions, programs, and validators.",
  },
  federalReservePolicy: {
    title: "Monetary policy",
    publisher: "Federal Reserve",
    url: "https://www.federalreserve.gov/monetarypolicy.htm",
    note: "Official policy reference for US rate decisions and monetary conditions.",
  },
  federalReserveH41: {
    title: "H.4.1 Factors Affecting Reserve Balances",
    publisher: "Federal Reserve",
    url: "https://www.federalreserve.gov/releases/h41/current/",
    note: "Official weekly balance-sheet release used for Reserve Bank credit, Treasury securities, and currency in circulation context.",
  },
  imfCofer2026Q1: {
    title: "COFER world aggregates, first quarter 2026",
    publisher: "International Monetary Fund",
    url: "https://data.imf.org/en/news/imf%20data%20brief%20july%201",
    note: "High-authority source for global official FX reserves and US dollar reserve-share data.",
  },
  treasuryTicMajorForeignHolders: {
    title: "Major Foreign Holders of Treasury Securities",
    publisher: "U.S. Department of the Treasury",
    url: "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.html",
    note: "Official TIC table for foreign holdings of U.S. Treasury securities by country.",
  },
  bisFxSurvey: {
    title: "2025 foreign exchange turnover survey",
    publisher: "Bank for International Settlements",
    url: "https://www.bis.org/statistics/rpfx25.htm",
    note: "High-authority 2025 FX market turnover reference used for currency-market context.",
  },
  bisFxTurnover2025: {
    title: "OTC foreign exchange turnover in April 2025",
    publisher: "Bank for International Settlements",
    url: "https://www.bis.org/statistics/rpfx25_fx.htm",
    note: "BIS triennial FX release showing global turnover, USD trade share, counterparty mix, and top trading jurisdictions.",
  },
  ecbEuroIntro: {
    title: "The euro",
    publisher: "European Central Bank",
    url: "https://www.ecb.europa.eu/euro/intro/html/index.en.html",
    note: "Official ECB reference for the shared European currency.",
  },
  ecbMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "European Central Bank",
    url: "https://www.ecb.europa.eu/mopo/html/index.en.html",
    note: "Official ECB policy reference for Euro market drivers.",
  },
  bojMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Bank of Japan",
    url: "https://www.boj.or.jp/en/mopo/index.htm",
    note: "Official Bank of Japan reference for monetary-policy releases, meetings, and yen policy context.",
  },
  bankEnglandMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Bank of England",
    url: "https://www.bankofengland.co.uk/monetary-policy",
    note: "Official Bank of England reference for Bank Rate, inflation targeting, and sterling policy context.",
  },
  pbocHome: {
    title: "People's Bank of China",
    publisher: "People's Bank of China",
    url: "https://www.pbc.gov.cn/en/3688006/index.html",
    note: "Official PBC reference for monetary policy, RMB exchange-rate releases, and renminbi market context.",
  },
  bisChinaPolicy: {
    title: "China monetary authority profile",
    publisher: "Bank for International Settlements",
    url: "https://www.bis.org/mc/currency_areas/cn.htm",
    note: "BIS central-bank profile summarizing China's monetary-policy objective and institutional context.",
  },
  rbaMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Reserve Bank of Australia",
    url: "https://www.rba.gov.au/monetary-policy/",
    note: "Official RBA reference for cash-rate policy, inflation targeting, employment, and AUD macro context.",
  },
  rbaExchangeRates: {
    title: "Exchange rates",
    publisher: "Reserve Bank of Australia",
    url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html",
    note: "Official RBA reference for exchange-rate data and trade-weighted index context.",
  },
  bankCanadaMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Bank of Canada",
    url: "https://www.bankofcanada.ca/core-functions/monetary-policy/",
    note: "Official Bank of Canada reference for inflation targeting, the floating dollar, and CAD policy context.",
  },
  snbMonetaryPolicy: {
    title: "The SNB's monetary policy",
    publisher: "Swiss National Bank",
    url: "https://www.snb.ch/en/the-snb/mandates-goals/monetary-policy",
    note: "Official SNB reference for price stability, the SNB policy rate, and Swiss franc market context.",
  },
  hkmaLinkedExchangeRate: {
    title: "Linked Exchange Rate System",
    publisher: "Hong Kong Monetary Authority",
    url: "https://www.hkma.gov.hk/eng/key-functions/money/linked-exchange-rate-system/",
    note: "Official HKMA reference for the Hong Kong dollar currency-board system and USD-linked exchange band.",
  },
  masMonetaryPolicyFramework: {
    title: "Monetary policy framework",
    publisher: "Monetary Authority of Singapore",
    url: "https://www.mas.gov.sg/monetary-policy/singapores-monetary-policy-framework",
    note: "Official MAS reference for Singapore's exchange-rate-centred monetary-policy framework.",
  },
  riksbankMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Sveriges Riksbank",
    url: "https://www.riksbank.se/en-gb/monetary-policy/",
    note: "Official Riksbank reference for the policy rate, CPIF target, and Swedish krona policy context.",
  },
  riksbankExchangeRates: {
    title: "Interest rates and exchange rates",
    publisher: "Sveriges Riksbank",
    url: "https://www.riksbank.se/en-gb/statistics/interest-rates-and-exchange-rates/search-interest-rates-and-exchange-rates/",
    note: "Official Riksbank reference for exchange-rate and interest-rate data used in SEK market study.",
  },
  bankKoreaMonetaryPolicy: {
    title: "Objectives of monetary policy",
    publisher: "Bank of Korea",
    url: "https://www.bok.or.kr/eng/main/contents.do?menuNo=400012",
    note: "Official Bank of Korea reference for price stability, monetary-policy objectives, and KRW policy context.",
  },
  bankKoreaPolicyBoard: {
    title: "Monetary Policy Board",
    publisher: "Bank of Korea",
    url: "https://www.bok.or.kr/eng/main/contents.do?menuNo=400242",
    note: "Official Bank of Korea reference for policy-board structure, meetings, and decision process.",
  },
  banxicoMonetaryPolicy: {
    title: "Monetary policy announcements",
    publisher: "Banco de Mexico",
    url: "https://www.banxico.org.mx/publications-and-press/announcements-of-monetary-policy-decisions/monetary-policy-announcements.html",
    note: "Official Banco de Mexico reference for monetary-policy decisions, target-rate communication, and peso policy context.",
  },
  rbnzMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Reserve Bank of New Zealand",
    url: "https://www.rbnz.govt.nz/monetary-policy",
    note: "Official RBNZ reference for monetary policy, the Official Cash Rate, and NZD inflation-targeting context.",
  },
  norgesBankPolicyStrategy: {
    title: "Monetary policy strategy",
    publisher: "Norges Bank",
    url: "https://www.norges-bank.no/en/topics/monetary-policy/monetary-policy-strategy/",
    note: "Official Norges Bank reference for inflation targeting, the policy rate, and Norwegian krone policy context.",
  },
  rbiMonetaryPolicyCommunication: {
    title: "Monetary policy communication",
    publisher: "Reserve Bank of India",
    url: "https://rbi.org.in/commonman/English/scripts/commpol.aspx",
    note: "Official RBI reference for India's monetary-policy framework, repo-rate communication, and liquidity operations.",
  },
  tcmbPolicyFramework: {
    title: "Central Bank monetary policy framework",
    publisher: "Central Bank of the Republic of Turkiye",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB%2BEN/Main%2BMenu/Core%2BFunctions/Monetary%2BPolicy/Central%2BBank%2BMonetary%2BPolicy%2BFramework",
    note: "Official TCMB reference for price stability, inflation targeting, and Turkish lira policy framework.",
  },
  sarbHome: {
    title: "South African Reserve Bank",
    publisher: "South African Reserve Bank",
    url: "https://www.resbank.co.za/en/home",
    note: "Official SARB reference for rand mandate, monetary policy, repo-rate communication, and financial-market functions.",
  },
  bcbMonetaryPolicy: {
    title: "Monetary policy",
    publisher: "Banco Central do Brasil",
    url: "https://www.bcb.gov.br/en/monetarypolicy",
    note: "Official BCB reference for monetary policy, Selic-rate context, and Brazilian real policy communication.",
  },
  nationalbankenFixedFx: {
    title: "Questions regarding fixed exchange rate policy",
    publisher: "Danmarks Nationalbank",
    url: "https://www.nationalbanken.dk/en/frequently-asked-questions/questions-regarding-fixed-exchange-rate-policy",
    note: "Official Danmarks Nationalbank reference for Denmark's fixed exchange-rate policy against the euro and ERM II framework.",
  },
  nationalbankenExchangeRates: {
    title: "Exchange rates",
    publisher: "Danmarks Nationalbank",
    url: "https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/exchange-rates",
    note: "Official Danmarks Nationalbank reference for DKK exchange-rate data and the krone's central rate against the euro.",
  },
  worldGoldCouncilDemand: {
    title: "Gold demand trends",
    publisher: "World Gold Council",
    url: "https://www.gold.org/goldhub/research/gold-demand-trends",
    note: "Industry research for gold demand, central-bank activity, and investment flows.",
  },
  worldGoldCouncilCentralBankReserves: {
    title: "Gold reserves by country",
    publisher: "World Gold Council",
    url: "https://www.gold.org/goldhub/data/gold-reserves-by-country",
    note: "World Gold Council data hub for official gold reserves, compiled from central banks, IMF, and other high-authority sources.",
  },
  worldGoldCouncilQ12026CentralBanks: {
    title: "Gold Demand Trends Q1 2026: Central Banks",
    publisher: "World Gold Council",
    url: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q1-2026/central-banks",
    note: "Quarterly source for Q1 2026 central-bank gold buying and named reserve changes.",
  },
  iSharesGoldTrust: {
    title: "iShares Gold Trust",
    publisher: "BlackRock",
    url: "https://www.ishares.com/us/products/239561/ishares-gold-trust-fund",
    note: "Official issuer page for IAU ounces in trust, tonnes in trust, net assets, shares outstanding, and LBMA benchmark reference.",
  },
  spdrGoldShares: {
    title: "SPDR Gold Shares",
    publisher: "World Gold Trust Services",
    url: "https://www.spdrgoldshares.com/usa/gld/",
    note: "Official GLD product page for trust structure, LBMA benchmark, sponsor, trustee, and named custodians.",
  },
  spdrGldHsbcBarList: {
    title: "SPDR Gold Trust HSBC bar list",
    publisher: "SPDR Gold Shares",
    url: "https://api.spdrgoldshares.com/api/v1/barlist?underlying=gld",
    note: "Official HSBC allocated-gold bar list showing SPDR Gold Trust fine ounces and bar count by source date.",
  },
  spdrGldJpmBarList: {
    title: "SPDR Gold Trust JPMorgan bar list",
    publisher: "JPMorgan Chase Bank",
    url: "https://emea-markets.jpmorgan.com/metalicsWebAppJanus/publicUnauthenticated/SPDR_GOLD_TRUST_JPM_BARLIST.pdf",
    note: "Official JPMorgan allocated-gold bar list for SPDR Gold Trust fine ounces, vault locations, and bar count.",
  },
  lbmaPrices: {
    title: "Precious metal prices and data",
    publisher: "LBMA",
    url: "https://www.lbma.org.uk/prices-and-data/precious-metal-prices",
    note: "Market infrastructure reference for precious-metal pricing context.",
  },
  cmeGoldOverview: {
    title: "Gold futures",
    publisher: "CME Group",
    url: "https://www.cmegroup.com/markets/metals/precious/gold.html",
    note: "CME market-structure reference for gold futures, options, open interest tools, and nearly 24-hour access.",
  },
  tetherTransparency: {
    title: "Tether transparency",
    publisher: "Tether",
    url: "https://tether.to/transparency/",
    note: "Issuer transparency reference for token circulation and reserve reporting.",
  },
  circleUsdc: {
    title: "USDC",
    publisher: "Circle",
    url: "https://www.circle.com/usdc",
    note: "Issuer reference for USDC design, reserves, and supported use cases.",
  },
  circleTransparency: {
    title: "Transparency and stability",
    publisher: "Circle",
    url: "https://www.circle.com/transparency",
    note: "Issuer transparency reference for USDC reserve disclosures and attestations.",
  },
  bnbDocs: {
    title: "BNB Chain docs",
    publisher: "BNB Chain",
    url: "https://docs.bnbchain.org/",
    note: "Official documentation for BNB Chain and the BNB token's network role.",
  },
  bnbSmartChain: {
    title: "BNB Smart Chain",
    publisher: "BNB Chain",
    url: "https://www.bnbchain.org/en/bnb-smart-chain",
    note: "Official network overview for BNB Smart Chain application activity.",
  },
  xrplDocs: {
    title: "XRP Ledger documentation",
    publisher: "XRPL.org",
    url: "https://xrpl.org/docs",
    note: "Community-maintained technical documentation for the XRP Ledger.",
  },
  xrplHome: {
    title: "XRP Ledger",
    publisher: "XRPL.org",
    url: "https://xrpl.org/",
    note: "Official community reference for XRP Ledger as an open-source public blockchain.",
  },
  dogecoinHome: {
    title: "Dogecoin",
    publisher: "Dogecoin.com",
    url: "https://dogecoin.com/",
    note: "Official project reference for Dogecoin's peer-to-peer currency identity.",
  },
  dogecoinFoundation: {
    title: "Dogecoin Foundation",
    publisher: "Dogecoin Foundation",
    url: "https://foundation.dogecoin.com/",
    note: "Foundation reference for development support and community stewardship.",
  },
  cardanoDocs: {
    title: "Cardano docs",
    publisher: "Cardano",
    url: "https://docs.cardano.org/",
    note: "Official documentation for Cardano fundamentals and developer resources.",
  },
  cardanoIntro: {
    title: "Cardano introduction",
    publisher: "Cardano",
    url: "https://docs.cardano.org/about-cardano/introduction",
    note: "Official overview of Cardano as a proof-of-stake blockchain platform.",
  },
  tronTrxDocs: {
    title: "TRX",
    publisher: "TRON Developer Hub",
    url: "https://developers.tron.network/docs/token-standards-trx",
    note: "Official developer reference for TRX utility, staking, resources, and voting rights.",
  },
  tronNetwork: {
    title: "TRON network",
    publisher: "TRON",
    url: "https://tron.network/",
    note: "Official network reference for TRON's Web3, DeFi, and payments ecosystem.",
  },
  tonHome: {
    title: "The Open Network",
    publisher: "TON",
    url: "https://ton.org/",
    note: "Official network reference for TON and its Telegram-linked ecosystem.",
  },
  tonDocs: {
    title: "TON documentation",
    publisher: "TON",
    url: "https://docs.ton.org/",
    note: "Official developer reference for scalable smart contracts, applications, and payments.",
  },
  avalancheHome: {
    title: "Avalanche",
    publisher: "Avalanche",
    url: "https://www.avax.network/",
    note: "Official reference for Avalanche network and AVAX token utility.",
  },
  avalancheDocs: {
    title: "Primary Network",
    publisher: "Avalanche Builder Hub",
    url: "https://build.avax.network/docs",
    note: "Official technical documentation for Avalanche's heterogeneous blockchain network.",
  },
  chainlinkHome: {
    title: "Chainlink",
    publisher: "Chainlink",
    url: "https://chain.link/",
    note: "Official reference for Chainlink's decentralized oracle platform.",
  },
  chainlinkDocs: {
    title: "Chainlink documentation",
    publisher: "Chainlink",
    url: "https://docs.chain.link/",
    note: "Official developer documentation for Chainlink services and integrations.",
  },
  shibaDocs: {
    title: "Shiba Inu documentation",
    publisher: "Shib.io",
    url: "https://docs.shib.io/",
    note: "Official documentation for the Shiba Inu ecosystem and Shibarium network.",
  },
  shibariumOverview: {
    title: "Shibarium PoS overview",
    publisher: "Shib.io",
    url: "https://docs.shib.io/shibarium/architecture/overview",
    note: "Official architecture reference for Shibarium scalability, validators, and network design.",
  },
  polkadotHome: {
    title: "Polkadot",
    publisher: "Polkadot",
    url: "https://polkadot.com/",
    note: "Official network reference for Polkadot's interoperability and ecosystem role.",
  },
  polkadotDocs: {
    title: "Polkadot developer docs",
    publisher: "Polkadot",
    url: "https://docs.polkadot.com/",
    note: "Official documentation for building on Polkadot and understanding network components.",
  },
  bitcoinCashHome: {
    title: "Bitcoin Cash",
    publisher: "BitcoinCash.org",
    url: "https://bitcoincash.org/en/",
    note: "Community reference for Bitcoin Cash as peer-to-peer electronic cash.",
  },
  bitcoinCashInfo: {
    title: "Bitcoin Cash information hub",
    publisher: "BCH.info",
    url: "https://bch.info/_/",
    note: "Community resource hub for Bitcoin Cash users, developers, and protocol references.",
  },
  litecoinHome: {
    title: "Litecoin",
    publisher: "Litecoin.org",
    url: "https://litecoin.org/",
    note: "Official Litecoin reference for the peer-to-peer digital currency and core software.",
  },
  litecoinDocs: {
    title: "Litecoin documentation",
    publisher: "Litecoin Wiki",
    url: "https://litecoin.info/docs",
    note: "Technical reference for Litecoin design, supply, proof-of-work, and network concepts.",
  },
  uniswapDocs: {
    title: "Uniswap documentation",
    publisher: "Uniswap Developers",
    url: "https://developers.uniswap.org/docs",
    note: "Official developer documentation for Uniswap protocol products and integration paths.",
  },
  uniswapGovernance: {
    title: "Uniswap governance overview",
    publisher: "Uniswap Developers",
    url: "https://developers.uniswap.org/docs/ecosystem/governance/overview",
    note: "Official reference for UNI governance controls, treasury, and protocol stewardship.",
  },
  aptosHome: {
    title: "Aptos network",
    publisher: "Aptos",
    url: "https://aptosnetwork.com/",
    note: "Official network reference for Aptos as a Move-based Layer 1 blockchain.",
  },
  aptosDocs: {
    title: "Aptos documentation",
    publisher: "Aptos",
    url: "https://aptos.dev/",
    note: "Official developer documentation for Aptos smart contracts, tokens, and network design.",
  },
  nearHome: {
    title: "NEAR Protocol",
    publisher: "NEAR",
    url: "https://near.org/",
    note: "Official network reference for NEAR ecosystem, token economics, and applications.",
  },
  nearDocs: {
    title: "NEAR developer docs",
    publisher: "NEAR",
    url: "https://docs.near.org/",
    note: "Official documentation for NEAR smart contracts, accounts, and chain abstraction.",
  },
  ethereumClassicHome: {
    title: "Ethereum Classic",
    publisher: "EthereumClassic.org",
    url: "https://ethereumclassic.org/",
    note: "Community-maintained reference for Ethereum Classic history, purpose, and ecosystem.",
  },
  ethereumClassicDocs: {
    title: "Ethereum Classic documentation",
    publisher: "EthereumClassic.org",
    url: "https://ethereumclassic.com/build/docs",
    note: "Developer documentation for building on Ethereum Classic and reviewing protocol tooling.",
  },
  internetComputerHome: {
    title: "Internet Computer",
    publisher: "Internet Computer",
    url: "https://internetcomputer.org/",
    note: "Official network reference for Internet Computer's on-chain application hosting model.",
  },
  internetComputerDocs: {
    title: "ICP developer docs",
    publisher: "Internet Computer",
    url: "https://docs.internetcomputer.org/",
    note: "Official documentation for building full-stack applications on the Internet Computer.",
  },
  filecoinHome: {
    title: "Filecoin",
    publisher: "Filecoin",
    url: "https://filecoin.io/",
    note: "Official network reference for Filecoin's decentralized storage market.",
  },
  filecoinDocs: {
    title: "Filecoin docs",
    publisher: "Filecoin",
    url: "https://docs.filecoin.io/",
    note: "Official documentation for Filecoin storage, retrieval, incentives, and network mechanics.",
  },
  cosmosHome: {
    title: "Cosmos Network",
    publisher: "Cosmos",
    url: "https://cosmos.network/",
    note: "Official ecosystem reference for Cosmos Hub, ATOM, and interchain applications.",
  },
  cosmosHubDocs: {
    title: "Cosmos Hub documentation",
    publisher: "Cosmos Docs",
    url: "https://docs.cosmos.network/hub/latest",
    note: "Official documentation for ATOM staking, governance, validators, and Cosmos Hub participation.",
  },
  arbitrumDocs: {
    title: "Arbitrum documentation",
    publisher: "Arbitrum",
    url: "https://docs.arbitrum.io/",
    note: "Official developer documentation for Arbitrum chains, rollups, and application deployment.",
  },
  arbitrumGovernance: {
    title: "Arbitrum DAO governance",
    publisher: "Arbitrum Foundation",
    url: "https://docs.arbitrum.foundation/gentle-intro-dao-governance",
    note: "Official governance reference for ARB token holders, delegates, and DAO responsibilities.",
  },
  optimismHome: {
    title: "Optimism",
    publisher: "Optimism",
    url: "https://optimism.io/",
    note: "Official network reference for Optimism, OP Stack, and Superchain infrastructure.",
  },
  optimismGovernance: {
    title: "Optimism governance",
    publisher: "Optimism Docs",
    url: "https://docs.optimism.io/governance",
    note: "Official documentation for Optimism protocol upgrades, governance, and OP Stack coordination.",
  },
  suiHome: {
    title: "Sui",
    publisher: "Sui",
    url: "https://www.sui.io/",
    note: "Official network reference for Sui's object-based blockchain and application ecosystem.",
  },
  suiDocs: {
    title: "Sui documentation",
    publisher: "Sui",
    url: "https://docs.sui.io/",
    note: "Official developer documentation for Sui, Move packages, objects, and network concepts.",
  },
  pepeEtherscan: {
    title: "PEPE token contract",
    publisher: "Etherscan",
    url: "https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933",
    note: "Ethereum block-explorer reference for PEPE contract, supply, transfers, and holder activity.",
  },
  pepeCoinGecko: {
    title: "PEPE market profile",
    publisher: "CoinGecko",
    url: "https://www.coingecko.com/en/coins/pepe",
    note: "Market-data reference for PEPE classification, liquidity context, and public asset information.",
  },
  dogwifhatSolscan: {
    title: "dogwifhat token contract",
    publisher: "Solscan",
    url: "https://solscan.io/token/FkehaSb81A93RJYEWr9TmTpXvHANLwMwLBZatjdUpump",
    note: "Solana block-explorer reference for WIF token activity, holders, and on-chain transfers.",
  },
  dogwifhatCoinGecko: {
    title: "dogwifhat market profile",
    publisher: "CoinGecko",
    url: "https://www.coingecko.com/en/coins/dogwifhat",
    note: "Market-data reference for WIF classification, exchange context, and public asset information.",
  },
  injectiveHome: {
    title: "Injective",
    publisher: "Injective",
    url: "https://injective.com/",
    note: "Official network reference for Injective as finance-focused Layer 1 infrastructure.",
  },
  injectiveTokenomics: {
    title: "INJ tokenomics paper",
    publisher: "Injective",
    url: "https://injective.com/INJ_Tokenomics_Paper.pdf",
    note: "Official Injective research paper covering INJ utility, staking, governance, and burn mechanics.",
  },
  renderHome: {
    title: "Render Network",
    publisher: "Render Network",
    url: "https://rendernetwork.com/",
    note: "Official network reference for decentralized GPU rendering and creator compute demand.",
  },
  renderKnowledgeBase: {
    title: "Render Network knowledge base",
    publisher: "Render Network",
    url: "https://know.rendernetwork.com/",
    note: "Official knowledge base for Render Network mechanics, node participation, and token context.",
  },
  aaveHome: {
    title: "Aave",
    publisher: "Aave",
    url: "https://aave.com/",
    note: "Official protocol reference for Aave lending markets, governance, and token role.",
  },
  aaveDocs: {
    title: "Aave documentation",
    publisher: "Aave",
    url: "https://aave.com/docs",
    note: "Official documentation for Aave liquidity protocol mechanics, suppliers, borrowers, and risk modules.",
  },
  makerHome: {
    title: "MakerDAO and Sky",
    publisher: "MakerDAO",
    url: "https://makerdao.com/",
    note: "Official reference noting MakerDAO's transition into Sky and the Maker Protocol governance context.",
  },
  makerDocs: {
    title: "Maker protocol documentation",
    publisher: "MakerDAO",
    url: "https://docs.makerdao.com/",
    note: "Technical documentation for Maker Protocol, Dai, MKR governance, and smart contract modules.",
  },
  lidoDocs: {
    title: "Lido documentation",
    publisher: "Lido",
    url: "https://docs.lido.fi/",
    note: "Official documentation for Lido liquid staking, stETH mechanics, and protocol architecture.",
  },
  lidoGovernance: {
    title: "Lido DAO governance",
    publisher: "Lido",
    url: "https://lido.fi/governance",
    note: "Official governance reference for LDO holders, stETH safeguards, and DAO decision processes.",
  },
  celestiaDataAvailability: {
    title: "Celestia data availability",
    publisher: "Celestia",
    url: "https://docs.celestia.org/learn/celestia-101/data-availability/",
    note: "Official reference for Celestia's modular data availability role and sampling model.",
  },
  celestiaTiaOverview: {
    title: "TIA overview",
    publisher: "Celestia",
    url: "https://docs.celestia.org/learn/TIA/overview/",
    note: "Official reference for TIA fees, staking, blobspace use, and Celestia network economics.",
  },
  seiHome: {
    title: "Sei",
    publisher: "Sei",
    url: "https://www.sei.io/",
    note: "Official network reference for Sei as a high-performance blockchain for financial applications.",
  },
  seiDocs: {
    title: "Sei documentation",
    publisher: "Sei",
    url: "https://docs.sei.io/",
    note: "Official documentation for building on Sei EVM and understanding network architecture.",
  },
  stacksHome: {
    title: "Stacks",
    publisher: "Stacks",
    url: "https://www.stacks.co/",
    note: "Official network reference for Stacks as a Bitcoin layer for applications and BTC-linked products.",
  },
  stacksDocs: {
    title: "Stacks documentation",
    publisher: "Stacks",
    url: "https://docs.stacks.co/",
    note: "Official documentation for Stacks, Clarity smart contracts, and Bitcoin-linked application development.",
  },
  hederaHome: {
    title: "Hedera",
    publisher: "Hedera",
    url: "https://hedera.com/",
    note: "Official network reference for Hedera services, HBAR utility, and enterprise-grade infrastructure.",
  },
  hederaDocs: {
    title: "Hedera developer docs",
    publisher: "Hedera",
    url: "https://docs.hedera.com/",
    note: "Official documentation for Hedera accounts, HBAR, SDKs, staking, and network services.",
  },
  stellarHome: {
    title: "Stellar",
    publisher: "Stellar Development Foundation",
    url: "https://stellar.org/",
    note: "Official network reference for Stellar payments, tokenization, and real-world financial applications.",
  },
  stellarDocs: {
    title: "Stellar developer docs",
    publisher: "Stellar Development Foundation",
    url: "https://developers.stellar.org/",
    note: "Official developer documentation for Stellar applications, assets, validators, and smart contracts.",
  },
  moneroHome: {
    title: "Monero",
    publisher: "GetMonero",
    url: "https://www.getmonero.org/",
    note: "Official community reference for Monero privacy, wallets, documentation, and network resources.",
  },
  moneroOverview: {
    title: "What is Monero",
    publisher: "GetMonero",
    url: "https://www.getmonero.org/get-started/what-is-monero/",
    note: "Official explanation of Monero privacy features, confidential transactions, and XMR purpose.",
  },
  okbWhitepaper: {
    title: "OKB white paper",
    publisher: "OKX",
    url: "https://www.okx.com/whitepaper/okb-okb.xhtml",
    note: "Official OKX white paper reference for OKB utility and X Layer gas-payment context.",
  },
  okbStatement: {
    title: "OKX statement on OKB",
    publisher: "OKX",
    url: "https://www.okx.com/learn/okx-statement-on-okb-story",
    note: "Official OKX reference for OKB exchange utility, fee discounts, rewards, and burn-program context.",
  },
  cronosEvmDocs: {
    title: "Cronos EVM docs",
    publisher: "Cronos",
    url: "https://docs.cronos.com/",
    note: "Official documentation for Cronos EVM, settlement behavior, and EVM-compatible application development.",
  },
  cronosPosStaking: {
    title: "Cronos POS staking",
    publisher: "Cronos POS Chain",
    url: "https://docs.cronos-pos.org/cronos-pos-chain-protocol/module_overview/module_staking",
    note: "Official reference for CRO delegation, validator staking, and Cronos POS participation.",
  },
  polygonHome: {
    title: "Polygon",
    publisher: "Polygon",
    url: "https://polygon.technology/",
    note: "Official network reference for Polygon payments, applications, staking, and POL utility.",
  },
  polygonPolDocs: {
    title: "POL token docs",
    publisher: "Polygon",
    url: "https://docs.polygon.technology/pos/concepts/tokens/pol",
    note: "Official documentation for POL as Polygon's native gas and staking token replacing MATIC.",
  },
  algorandHome: {
    title: "Algorand",
    publisher: "Algorand",
    url: "https://algorand.co/",
    note: "Official network reference for Algorand settlement, applications, and developer resources.",
  },
  algorandConsensus: {
    title: "Algorand consensus overview",
    publisher: "Algorand Developer Portal",
    url: "https://dev.algorand.co/concepts/protocol/overview/",
    note: "Official developer reference for Algorand consensus, committee selection, and ALGO participation.",
  },
  vechainHome: {
    title: "VeChain",
    publisher: "VeChain",
    url: "https://vechain.org/",
    note: "Official network reference for VeChainThor, VET utility, wallets, and ecosystem products.",
  },
  vechainVetDocs: {
    title: "VET documentation",
    publisher: "VeChain",
    url: "https://docs.vechain.org/introduction-to-vechain/dual-token-economic-model/vechain-vet",
    note: "Official documentation for VET utility and the VeChainThor dual-token economic model.",
  },
  asiToken: {
    title: "ASI token FET",
    publisher: "Artificial Superintelligence Alliance",
    url: "https://superintelligence.io/asi-token-fet/",
    note: "Official alliance reference for FET utility across decentralized AI infrastructure and applications.",
  },
  fetchAiHome: {
    title: "Fetch.ai",
    publisher: "Fetch.ai",
    url: "https://fetch.ai/",
    note: "Official reference for Fetch.ai agent infrastructure within the broader AI ecosystem.",
  },
  thorchainHome: {
    title: "THORChain",
    publisher: "THORChain",
    url: "https://thorchain.org/",
    note: "Official network reference for THORChain native-asset swaps, RUNE utility, and liquidity.",
  },
  thorchainDocs: {
    title: "THORChain docs",
    publisher: "THORChain",
    url: "https://docs.thorchain.org/",
    note: "Official documentation for THORChain network mechanics, liquidity pools, nodes, and RUNE context.",
  },
  graphHome: {
    title: "The Graph",
    publisher: "The Graph",
    url: "https://thegraph.com/",
    note: "Official protocol reference for blockchain indexing, subgraphs, and decentralized data access.",
  },
  graphIndexingDocs: {
    title: "The Graph indexing overview",
    publisher: "The Graph",
    url: "https://thegraph.com/docs/en/indexing/overview/",
    note: "Official documentation for indexers, GRT staking, query processing, and network economics.",
  },
  pythHome: {
    title: "Pyth Network",
    publisher: "Pyth Network",
    url: "https://www.pyth.network/",
    note: "Official network reference for real-time market data and price-feed infrastructure.",
  },
  pythDocs: {
    title: "Pyth docs",
    publisher: "Pyth Network",
    url: "https://docs.pyth.network/",
    note: "Official documentation for Pyth price feeds, staking, publishers, and network products.",
  },
  jupiterDocs: {
    title: "Jupiter user docs",
    publisher: "Jupiter",
    url: "https://docs.jup.ag/",
    note: "Official documentation for Jupiter products, trading tools, and Solana user workflows.",
  },
  jupiterDeveloperDocs: {
    title: "Jupiter developer docs",
    publisher: "Jupiter",
    url: "https://dev.jup.ag/docs/get-started",
    note: "Official developer reference for Jupiter APIs, token data, price tools, and Solana integrations.",
  },
} satisfies Record<string, AssetResearchSource>;

export const coverageUniverse: CoverageAsset[] = [
  { rank: 1, slug: "bitcoin", name: "Bitcoin", symbol: "BTC", assetClass: "crypto", status: "ready" },
  { rank: 2, slug: "ethereum", name: "Ethereum", symbol: "ETH", assetClass: "crypto", status: "ready" },
  { rank: 3, slug: "tether", name: "Tether", symbol: "USDT", assetClass: "crypto", status: "ready" },
  { rank: 4, slug: "usd-coin", name: "USD Coin", symbol: "USDC", assetClass: "crypto", status: "ready" },
  { rank: 5, slug: "bnb", name: "BNB", symbol: "BNB", assetClass: "crypto", status: "ready" },
  { rank: 6, slug: "solana", name: "Solana", symbol: "SOL", assetClass: "crypto", status: "ready" },
  { rank: 7, slug: "xrp", name: "XRP", symbol: "XRP", assetClass: "crypto", status: "ready" },
  { rank: 8, slug: "dogecoin", name: "Dogecoin", symbol: "DOGE", assetClass: "crypto", status: "ready" },
  { rank: 9, slug: "cardano", name: "Cardano", symbol: "ADA", assetClass: "crypto", status: "ready" },
  { rank: 10, slug: "tron", name: "TRON", symbol: "TRX", assetClass: "crypto", status: "ready" },
  { rank: 11, slug: "toncoin", name: "Toncoin", symbol: "TON", assetClass: "crypto", status: "ready" },
  { rank: 12, slug: "avalanche", name: "Avalanche", symbol: "AVAX", assetClass: "crypto", status: "ready" },
  { rank: 13, slug: "chainlink", name: "Chainlink", symbol: "LINK", assetClass: "crypto", status: "ready" },
  { rank: 14, slug: "shiba-inu", name: "Shiba Inu", symbol: "SHIB", assetClass: "crypto", status: "ready" },
  { rank: 15, slug: "polkadot", name: "Polkadot", symbol: "DOT", assetClass: "crypto", status: "ready" },
  { rank: 16, slug: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH", assetClass: "crypto", status: "ready" },
  { rank: 17, slug: "litecoin", name: "Litecoin", symbol: "LTC", assetClass: "crypto", status: "ready" },
  { rank: 18, slug: "uniswap", name: "Uniswap", symbol: "UNI", assetClass: "crypto", status: "ready" },
  { rank: 19, slug: "aptos", name: "Aptos", symbol: "APT", assetClass: "crypto", status: "ready" },
  { rank: 20, slug: "near-protocol", name: "NEAR Protocol", symbol: "NEAR", assetClass: "crypto", status: "ready" },
  { rank: 21, slug: "ethereum-classic", name: "Ethereum Classic", symbol: "ETC", assetClass: "crypto", status: "ready" },
  { rank: 22, slug: "internet-computer", name: "Internet Computer", symbol: "ICP", assetClass: "crypto", status: "ready" },
  { rank: 23, slug: "filecoin", name: "Filecoin", symbol: "FIL", assetClass: "crypto", status: "ready" },
  { rank: 24, slug: "cosmos", name: "Cosmos", symbol: "ATOM", assetClass: "crypto", status: "ready" },
  { rank: 25, slug: "arbitrum", name: "Arbitrum", symbol: "ARB", assetClass: "crypto", status: "ready" },
  { rank: 26, slug: "optimism", name: "Optimism", symbol: "OP", assetClass: "crypto", status: "ready" },
  { rank: 27, slug: "sui", name: "Sui", symbol: "SUI", assetClass: "crypto", status: "ready" },
  { rank: 28, slug: "pepe", name: "Pepe", symbol: "PEPE", assetClass: "crypto", status: "ready" },
  { rank: 29, slug: "dogwifhat", name: "dogwifhat", symbol: "WIF", assetClass: "crypto", status: "ready" },
  { rank: 30, slug: "injective", name: "Injective", symbol: "INJ", assetClass: "crypto", status: "ready" },
  { rank: 31, slug: "render", name: "Render", symbol: "RENDER", assetClass: "crypto", status: "ready" },
  { rank: 32, slug: "aave", name: "Aave", symbol: "AAVE", assetClass: "crypto", status: "ready" },
  { rank: 33, slug: "maker", name: "Maker", symbol: "MKR", assetClass: "crypto", status: "ready" },
  { rank: 34, slug: "lido-dao", name: "Lido DAO", symbol: "LDO", assetClass: "crypto", status: "ready" },
  { rank: 35, slug: "celestia", name: "Celestia", symbol: "TIA", assetClass: "crypto", status: "ready" },
  { rank: 36, slug: "sei", name: "Sei", symbol: "SEI", assetClass: "crypto", status: "ready" },
  { rank: 37, slug: "stacks", name: "Stacks", symbol: "STX", assetClass: "crypto", status: "ready" },
  { rank: 38, slug: "hedera", name: "Hedera", symbol: "HBAR", assetClass: "crypto", status: "ready" },
  { rank: 39, slug: "stellar", name: "Stellar", symbol: "XLM", assetClass: "crypto", status: "ready" },
  { rank: 40, slug: "monero", name: "Monero", symbol: "XMR", assetClass: "crypto", status: "ready" },
  { rank: 41, slug: "okb", name: "OKB", symbol: "OKB", assetClass: "crypto", status: "ready" },
  { rank: 42, slug: "cronos", name: "Cronos", symbol: "CRO", assetClass: "crypto", status: "ready" },
  { rank: 43, slug: "polygon", name: "Polygon", symbol: "POL", assetClass: "crypto", status: "ready" },
  { rank: 44, slug: "algorand", name: "Algorand", symbol: "ALGO", assetClass: "crypto", status: "ready" },
  { rank: 45, slug: "vechain", name: "VeChain", symbol: "VET", assetClass: "crypto", status: "ready" },
  { rank: 46, slug: "fetch-ai", name: "Artificial Superintelligence Alliance", symbol: "FET", assetClass: "crypto", status: "ready" },
  { rank: 47, slug: "thorchain", name: "THORChain", symbol: "RUNE", assetClass: "crypto", status: "ready" },
  { rank: 48, slug: "the-graph", name: "The Graph", symbol: "GRT", assetClass: "crypto", status: "ready" },
  { rank: 49, slug: "pyth-network", name: "Pyth Network", symbol: "PYTH", assetClass: "crypto", status: "ready" },
  { rank: 50, slug: "jupiter", name: "Jupiter", symbol: "JUP", assetClass: "crypto", status: "ready" },

  { rank: 1, slug: "us-dollar", name: "US Dollar", symbol: "USD", assetClass: "forex", status: "ready" },
  { rank: 2, slug: "euro", name: "Euro", symbol: "EUR", assetClass: "forex", status: "ready" },
  { rank: 3, slug: "japanese-yen", name: "Japanese Yen", symbol: "JPY", assetClass: "forex", status: "ready" },
  { rank: 4, slug: "british-pound", name: "British Pound", symbol: "GBP", assetClass: "forex", status: "ready" },
  { rank: 5, slug: "chinese-yuan", name: "Chinese Yuan", symbol: "CNY", assetClass: "forex", status: "ready" },
  { rank: 6, slug: "australian-dollar", name: "Australian Dollar", symbol: "AUD", assetClass: "forex", status: "ready" },
  { rank: 7, slug: "canadian-dollar", name: "Canadian Dollar", symbol: "CAD", assetClass: "forex", status: "ready" },
  { rank: 8, slug: "swiss-franc", name: "Swiss Franc", symbol: "CHF", assetClass: "forex", status: "ready" },
  { rank: 9, slug: "hong-kong-dollar", name: "Hong Kong Dollar", symbol: "HKD", assetClass: "forex", status: "ready" },
  { rank: 10, slug: "singapore-dollar", name: "Singapore Dollar", symbol: "SGD", assetClass: "forex", status: "ready" },
  { rank: 11, slug: "swedish-krona", name: "Swedish Krona", symbol: "SEK", assetClass: "forex", status: "ready" },
  { rank: 12, slug: "south-korean-won", name: "South Korean Won", symbol: "KRW", assetClass: "forex", status: "ready" },
  { rank: 13, slug: "mexican-peso", name: "Mexican Peso", symbol: "MXN", assetClass: "forex", status: "ready" },
  { rank: 14, slug: "new-zealand-dollar", name: "New Zealand Dollar", symbol: "NZD", assetClass: "forex", status: "ready" },
  { rank: 15, slug: "norwegian-krone", name: "Norwegian Krone", symbol: "NOK", assetClass: "forex", status: "ready" },
  { rank: 16, slug: "indian-rupee", name: "Indian Rupee", symbol: "INR", assetClass: "forex", status: "ready" },
  { rank: 17, slug: "turkish-lira", name: "Turkish Lira", symbol: "TRY", assetClass: "forex", status: "ready" },
  { rank: 18, slug: "south-african-rand", name: "South African Rand", symbol: "ZAR", assetClass: "forex", status: "ready" },
  { rank: 19, slug: "brazilian-real", name: "Brazilian Real", symbol: "BRL", assetClass: "forex", status: "ready" },
  { rank: 20, slug: "danish-krone", name: "Danish Krone", symbol: "DKK", assetClass: "forex", status: "ready" },

  { rank: 1, slug: "gold", name: "Gold", symbol: "XAU", assetClass: "gold", status: "ready" },
];

const baseAssetProfiles: AssetProfile[] = [
  {
    slug: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    assetClass: "crypto",
    rank: 1,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-15",
    seoTitle: "What Is Bitcoin? BTC Market Guide",
    seoDescription: "Understand Bitcoin, why BTC matters, who holds public exposure, what moves it, and how Lurnava studies its market structure.",
    publicHeadline: "Bitcoin is crypto's reserve benchmark.",
    publicSubheadline:
      "BTC is watched because it sits at the center of crypto liquidity, ETF access, public-company exposure, miner economics, and macro risk appetite.",
    plainEnglish:
      "Bitcoin is a decentralized digital asset launched from the 2008 whitepaper and 2009 network start. It is not issued by a company or central bank. The protocol follows a fixed issuance schedule, and market participants often use BTC as the main reference asset for crypto liquidity.",
    marketRole:
      "Bitcoin often sets the temperature for the wider digital-asset market. ETF flows, public-company treasury exposure, miners, derivatives, custody access, and dollar liquidity can all affect how capital moves across crypto.",
    whyTradersWatch:
      "Traders watch Bitcoin to understand crypto risk appetite, ETF demand, miner stress, treasury behavior, derivatives leverage, exchange liquidity depth, and whether capital is rotating into or away from digital assets.",
    lurnavaMonitorNote:
      "Lurnava studies Bitcoin through spot liquidity, ETF access, custody structure, public treasury exposure, exchange flow, miner pressure, derivatives leverage, macro liquidity, and major policy changes.",
    conversionCta:
      "Learn how to study Bitcoin and markets like it through structured lessons, guided practice, Strategy Lab reviews, and certification checks.",
    sources: [
      assetResearchSources.bitcoinWhitepaper,
      assetResearchSources.bitcoinDeveloperGuide,
      assetResearchSources.blackrockIbit,
      assetResearchSources.strategyBitcoinPurchases,
      assetResearchSources.teslaSecQ12026,
      assetResearchSources.grayscaleGbtc,
      assetResearchSources.fidelityFbtc,
      assetResearchSources.whiteHouseStrategicBitcoinReserve,
    ],
    drivers: [
      { title: "ETF access and custody demand", detail: "Spot Bitcoin products such as IBIT, FBTC, and GBTC create regulated access channels. Persistent assets or redemptions can alter demand without requiring holders to manage wallets directly." },
      { title: "Public treasury exposure", detail: "Companies such as Strategy and Tesla publish Bitcoin exposure through official pages or filings. Their changes can reshape market attention because those holdings are visible and trackable." },
      { title: "Miner economics and halvings", detail: "Mining rewards, hash rate, energy cost, difficulty, and scheduled halvings affect miner revenue and potential BTC distribution pressure." },
      { title: "Liquidity depth and exchange flow", detail: "BTC can move sharply when order books thin, exchange balances change, or large transfers alter available liquidity. Crypto reads need slippage and depth context." },
      { title: "Derivatives leverage", detail: "Perpetual funding, futures basis, open interest, and liquidation clusters can move BTC faster than spot demand alone." },
      { title: "Policy and reserve treatment", detail: "Government custody, forfeiture policy, ETF rules, and exchange regulation affect whether Bitcoin is treated as fringe speculation or monitored reserve-style exposure." },
    ],
    publicRisks: [
      { risk: "Sharp volatility", watch: "BTC can move quickly around macro data, ETF flow changes, liquidation clusters, and weekend liquidity gaps." },
      { risk: "Regulatory pressure", watch: "Policy changes around custody, exchange access, ETF products, or mining can alter market behavior." },
      { risk: "Crowded positioning", watch: "When too many traders lean one way, liquidation cascades can turn a small move into a fast reset." },
      { risk: "Custody concentration", watch: "Large ETF and institutional custody channels can concentrate operational and redemption risk in a small number of market access points." },
    ],
    lab: {
      deskBrief:
        "Bitcoin is the core crypto asset for studying market-wide liquidity. The Asset Lab treats BTC as a dashboard for ETF access, public-company exposure, miner stress, exchange inventory, derivatives leverage, custody concentration, and macro risk conditions.",
      researchQuestion:
        "Is Bitcoin being accumulated through spot and ETF channels, distributed through visible holders, repriced by macro conditions, or pulled by derivatives leverage?",
      operatingModel:
        "Study BTC in layers: spot and ETF flow first, public-holder changes second, derivatives pressure third, macro context fourth, and long-term holder behavior as the slow anchor.",
      participants: [
        { name: "Satoshi Nakamoto", role: "Protocol author", whyItMatters: "The whitepaper defines the peer-to-peer design and explains why BTC is studied as protocol money rather than company equity.", sourceBasis: "Bitcoin whitepaper" },
        { name: "Bitcoin Core contributors", role: "Protocol maintenance layer", whyItMatters: "Software maintenance and review matter because Bitcoin has no central issuer; network changes require careful open-source coordination.", sourceBasis: "Bitcoin developer guide" },
        { name: "BlackRock iShares Bitcoin Trust ETF", role: "ETF access channel", whyItMatters: "IBIT gives regulated brokerage access to Bitcoin exposure and publishes fund assets, basket data, shares, and holdings notes.", sourceBasis: "BlackRock IBIT issuer page" },
        { name: "Fidelity Wise Origin Bitcoin Fund", role: "ETF access channel", whyItMatters: "Fidelity adds another large traditional-finance access path for BTC exposure and custody-style product monitoring.", sourceBasis: "Fidelity fund page" },
        { name: "Grayscale Bitcoin Trust ETF", role: "Trust and ETF structure", whyItMatters: "GBTC matters because it represents a long-running Bitcoin trust structure that converted into ETF access in 2024.", sourceBasis: "Grayscale GBTC page" },
        { name: "Strategy", role: "Public-company treasury holder", whyItMatters: "Strategy publishes a dedicated Bitcoin treasury page, making its BTC balance one of the most visible corporate exposure records.", sourceBasis: "Strategy purchases page" },
        { name: "Tesla, Inc.", role: "Public-company holder", whyItMatters: "Tesla's filings show Bitcoin units and fair-value exposure, giving learners a company-filing example of BTC balance-sheet treatment.", sourceBasis: "Tesla Q1 2026 Form 10-Q" },
        { name: "U.S. Treasury", role: "Government custody and reserve policy", whyItMatters: "The Strategic Bitcoin Reserve order changed how forfeited government BTC may be held and reported.", sourceBasis: "White House executive order" },
      ],
      historicalEvents: [
        { year: "2008", title: "Whitepaper released", detail: "Satoshi Nakamoto publishes the Bitcoin whitepaper, creating the design reference for a peer-to-peer electronic cash system." },
        { year: "2009", title: "Network launch", detail: "Bitcoin begins as a peer-to-peer monetary network with a fixed supply schedule." },
        { year: "2012-2024", title: "Halving cycles", detail: "Scheduled issuance reductions become major study points for miner economics and market psychology." },
        { year: "2021", title: "Public-company treasury cycle expands", detail: "Company balance sheets and digital-asset accounting become part of how markets discuss Bitcoin exposure." },
        { year: "2024", title: "US spot ETFs begin trading", detail: "ETF access changes how many institutions can gain BTC exposure without direct wallet operations." },
        { year: "2025", title: "US Strategic Bitcoin Reserve order", detail: "The White House orders a Strategic Bitcoin Reserve built from certain forfeited government BTC, adding a policy-reserve lens." },
        { year: "2026", title: "Visible treasury monitoring remains central", detail: "Strategy and Tesla records show why learners must separate official holding data from recycled holder claims." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "Often inverse during broad risk repricing.", learnerNote: "A stronger dollar can drain risk appetite, but BTC can decouple during crypto-specific demand." },
        { market: "NASDAQ", relationship: "Can behave like a high-beta risk asset.", learnerNote: "Tech risk appetite often matters, but Bitcoin has its own supply and custody cycles." },
        { market: "Gold", relationship: "Sometimes compared as scarce assets.", learnerNote: "The comparison is useful only when macro liquidity and real-yield context are included." },
        { market: "Stablecoin liquidity", relationship: "Stablecoin supply and exchange balances can affect crypto buying power.", learnerNote: "BTC movement is clearer when spot liquidity and stablecoin deployment are checked together." },
      ],
      riskMap: [
        { risk: "Weekend liquidity", watch: "Thin weekend books can make moves look stronger than weekday confirmation." },
        { risk: "ETF-flow overreaction", watch: "One day of flow data is not the same as a sustained institutional trend." },
        { risk: "Derivative squeeze", watch: "High leverage can move price without new spot demand." },
        { risk: "Holder-data confusion", watch: "Use official filings, issuer pages, or inspectable wallets before trusting holder claims." },
        { risk: "Custody and redemption stress", watch: "ETF, trust, exchange, and custody channels can create operational risk when redemptions or transfers accelerate." },
      ],
      researchRoutine: [
        "Check spot BTC trend and key structure levels.",
        "Review ETF assets, public-company exposure changes, exchange inflows, and exchange reserves.",
        "Check funding, open interest, and liquidation clusters.",
        "Compare BTC behavior against dollar strength, rates, and equity risk appetite.",
        "Review major source updates from issuer pages, SEC filings, and official policy sources.",
        "Record whether the move is spot-led, ETF-led, leverage-led, holder-led, or macro-led.",
      ],
      relatedLessons: ["Level 5 Market Regimes", "Level 8 On-Chain Analysis", "Level 9 Crypto Derivatives Risk"],
      relatedStrategies: ["Exchange Inflow Exhaustion", "Volatility Breakout (ATR) Strategy", "Funding & OI Combined Sentiment"],
      deepDive: {
        identity: [
          { title: "Fixed-supply protocol asset", detail: "Bitcoin is studied as a protocol asset with a capped supply schedule, not as equity in a company or a claim on issuer revenue." },
          { title: "Crypto reserve benchmark", detail: "Many crypto pairs, funds, and portfolio decisions use BTC as the first reference point for digital-asset demand." },
          { title: "Source discipline matters", detail: "BTC attracts unsupported holder claims, so the paid page separates official records, issuer pages, company filings, and policy sources from market rumors." },
        ],
        authorityOrFounders: [
          { title: "Origin", detail: "The origin record is Satoshi Nakamoto's 2008 whitepaper and the 2009 network launch." },
          { title: "No central issuer", detail: "There is no company balance sheet, central bank, or foundation that issues BTC. Protocol changes depend on software, node, miner, and user adoption." },
          { title: "Policy overlay", detail: "Government treatment, ETF rules, custody rules, and forfeiture policy can change the market access layer even when the protocol itself does not change." },
        ],
        holderExposureMap: [
          {
            entityName: "BlackRock iShares Bitcoin Trust ETF",
            entityType: "ETF issuer",
            assetOrInstrument: "IBIT net assets",
            amount: "45,549,228,493",
            unit: "USD",
            exposureType: "ETF net assets backed by Bitcoin exposure",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "iShares Bitcoin Trust ETF",
            sourcePublisher: "BlackRock",
            sourceUrl: assetResearchSources.blackrockIbit.url,
            freshnessStatus: "current",
            whyItMatters: "IBIT is a major regulated access channel, so its asset base helps learners separate ETF demand from direct spot exchange activity.",
            limitations: "The issuer page publishes net assets, shares, basket data, and a holdings section. Exact BTC quantity can change daily and must be rechecked from the live issuer source.",
          },
          {
            entityName: "BlackRock iShares Bitcoin Trust ETF",
            entityType: "ETF issuer",
            assetOrInstrument: "IBIT Basket Bitcoin Amount",
            amount: "22.65",
            unit: "BTC",
            exposureType: "ETF creation basket reference",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "iShares Bitcoin Trust ETF",
            sourcePublisher: "BlackRock",
            sourceUrl: assetResearchSources.blackrockIbit.url,
            freshnessStatus: "current",
            whyItMatters: "Basket data helps students understand that ETF mechanics use operational units rather than only headline price movement.",
            limitations: "Basket data is not the same as total fund BTC holdings and should not be used as a holder total.",
          },
          {
            entityName: "Strategy",
            entityType: "Public company",
            assetOrInstrument: "Reported BTC holdings",
            amount: "843,775",
            unit: "BTC",
            exposureType: "Corporate treasury holding",
            asOfDate: "2026-07-06",
            sourcePublishedAt: "2026-07-06",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Bitcoin purchases",
            sourcePublisher: "Strategy",
            sourceUrl: assetResearchSources.strategyBitcoinPurchases.url,
            freshnessStatus: "current",
            whyItMatters: "Strategy is a visible corporate holder, so changes in its BTC balance can affect market attention and treasury-stock comparisons.",
            limitations: "Use the latest row on Strategy's official treasury page because the balance can change after buys or sales.",
          },
          {
            entityName: "Tesla, Inc.",
            entityType: "Public company",
            assetOrInstrument: "Bitcoin units disclosed inside digital assets",
            amount: "11,509",
            unit: "BTC",
            estimatedUsdValue: "786 million USD fair value for digital assets",
            exposureType: "Corporate digital asset holding",
            asOfDate: "2026-03-31",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Tesla Form 10-Q for quarter ended March 31, 2026",
            sourcePublisher: "SEC",
            sourceUrl: assetResearchSources.teslaSecQ12026.url,
            freshnessStatus: "recent",
            whyItMatters: "Tesla gives learners a filing-based example of how a public company reports Bitcoin exposure and fair-value movement.",
            limitations: "Tesla states the majority of digital assets were 11,509 Bitcoin units. The exact mix of any remaining digital assets requires the latest company filing.",
          },
          {
            entityName: "Grayscale Bitcoin Trust ETF",
            entityType: "ETF and trust sponsor",
            assetOrInstrument: "GBTC Bitcoin exposure",
            amount: "Not disclosed on source page",
            unit: "BTC",
            exposureType: "Passively managed Bitcoin trust exposure",
            asOfDate: "2026-01-09",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Grayscale Bitcoin Trust ETF",
            sourcePublisher: "Grayscale",
            sourceUrl: assetResearchSources.grayscaleGbtc.url,
            freshnessStatus: "stale",
            whyItMatters: "GBTC is important because its long trust history and ETF conversion changed the accessible Bitcoin product landscape.",
            limitations: "The public page reviewed did not expose a current BTC unit total. Treat GBTC quantity as a monitored item until an issuer file or fresh report is checked.",
          },
          {
            entityName: "Fidelity Wise Origin Bitcoin Fund",
            entityType: "ETF issuer",
            assetOrInstrument: "FBTC Bitcoin exposure",
            amount: "Not disclosed on source page",
            unit: "BTC",
            exposureType: "Spot Bitcoin fund exposure",
            asOfDate: "2026-07-15",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Fidelity Wise Origin Bitcoin Fund",
            sourcePublisher: "Fidelity",
            sourceUrl: assetResearchSources.fidelityFbtc.url,
            freshnessStatus: "current",
            whyItMatters: "Fidelity is a major traditional-finance access channel for spot Bitcoin exposure.",
            limitations: "The fund page confirms product structure but did not provide a BTC unit total in the reviewed public text. Use current issuer data before writing an exact FBTC holding amount.",
          },
          {
            entityName: "U.S. Treasury Strategic Bitcoin Reserve",
            entityType: "Government policy account",
            assetOrInstrument: "Government BTC from forfeiture proceedings",
            amount: "Not publicly quantified in executive order",
            unit: "BTC",
            exposureType: "Government reserve and custody policy",
            asOfDate: "2025-03-06",
            sourcePublishedAt: "2025-03-06",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Strategic Bitcoin Reserve executive order",
            sourcePublisher: "The White House",
            sourceUrl: assetResearchSources.whiteHouseStrategicBitcoinReserve.url,
            freshnessStatus: "historical",
            whyItMatters: "The order gives BTC a government custody and reserve-policy lens that learners should separate from market-price claims.",
            limitations: "The order describes the policy framework but does not publish a current total BTC amount.",
          },
        ],
        marketStructure: [
          { title: "Spot and custody layer", detail: "BTC trades across crypto venues while ETF and institutional products create custody-based exposure that may not touch retail exchange books directly." },
          { title: "ETF creation and redemption layer", detail: "ETF baskets, shares outstanding, premiums, and discounts can change how institutional demand appears." },
          { title: "Derivatives layer", detail: "Perpetual funding, futures basis, options positioning, and liquidation clusters can create fast BTC repricing without matching spot accumulation." },
          { title: "24/7 liquidity layer", detail: "Weekend and off-hours crypto liquidity can be thinner, so slippage and order-book depth must be checked before trusting a move." },
        ],
        driverRegimes: [
          { title: "ETF accumulation regime", detail: "ETF assets and persistent buying can support BTC even when retail exchange activity looks quiet." },
          { title: "Leverage reset regime", detail: "High open interest and one-sided funding can create forced moves that clear derivatives before spot demand returns." },
          { title: "Macro-dollar stress regime", detail: "Dollar strength, rising yields, or liquidity stress can pressure BTC as risk appetite contracts." },
          { title: "Policy legitimacy regime", detail: "ETF approvals, custody rules, and government reserve policy can change how institutions frame Bitcoin exposure." },
        ],
        sourceBackedClaims: [
          { title: "IBIT assets and basket data", detail: "BlackRock reported IBIT net assets of $45.549 billion, shares outstanding of 1,296,480,000, and Basket Bitcoin Amount of 22.65 BTC as of July 13, 2026." },
          { title: "Strategy BTC treasury", detail: "Strategy's official treasury page showed 843,775 BTC in the latest reviewed row dated July 6, 2026." },
          { title: "Tesla filing exposure", detail: "Tesla's Q1 2026 filing states the majority of its digital assets were 11,509 units of Bitcoin at a $386 million acquisition cost." },
          { title: "Government reserve policy", detail: "The March 6, 2025 White House order established a Strategic Bitcoin Reserve using certain forfeited government BTC." },
        ],
        reviewNotes: [
          "Do not copy social-media holder rankings into the paid page without an issuer, filing, official dashboard, or inspectable-wallet source.",
          "ETF and trust amounts must be rechecked from current issuer pages because daily assets, baskets, and holdings can change.",
          "Public-company BTC amounts must come from company filings, investor pages, or official treasury records.",
        ],
      },
    },
  },
  {
    slug: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    assetClass: "crypto",
    rank: 2,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Ethereum? ETH Market Guide",
    seoDescription: "Learn what Ethereum is, why ETH matters, what affects it, and how Lurnava studies Ethereum as a smart-contract market.",
    publicHeadline: "Ethereum is the settlement layer behind much of crypto finance.",
    publicSubheadline:
      "ETH is watched because decentralized apps, stablecoins, staking, layer-2 networks, and token issuance all depend on Ethereum activity.",
    plainEnglish:
      "Ethereum is a programmable blockchain. Instead of only transferring value, it lets developers build financial apps, tokens, games, identity systems, and infrastructure that settle activity through the Ethereum network.",
    marketRole:
      "Ethereum is the main smart-contract benchmark. ETH price often reflects network demand, staking economics, application usage, layer-2 growth, and investor appetite for on-chain activity.",
    whyTradersWatch:
      "Traders watch Ethereum to understand whether crypto activity is broadening beyond Bitcoin into apps, stablecoins, DeFi, NFTs, staking, and infrastructure.",
    lurnavaMonitorNote:
      "Lurnava studies Ethereum through network fees, staking flows, layer-2 activity, ETF demand, developer activity, DeFi liquidity, and ETH/BTC rotation.",
    conversionCta:
      "Learn how to read Ethereum's market role through structured asset research, visual lessons, and guided practice inside Lurnava.",
    sources: [assetResearchSources.ethereumWhitepaper, assetResearchSources.ethereumDocs],
    drivers: [
      { title: "Network usage", detail: "Transaction fees, app activity, and settlement demand show whether Ethereum blockspace is being used heavily or quietly." },
      { title: "Staking and supply", detail: "Validator participation, staking withdrawals, and fee burn can affect liquid ETH supply." },
      { title: "Layer-2 growth", detail: "Scaling networks can expand Ethereum usage while changing where fees and activity appear." },
      { title: "ETH/BTC rotation", detail: "Relative strength against Bitcoin helps learners study when crypto capital is moving from reserve exposure into application exposure." },
    ],
    publicRisks: [
      { risk: "Technology complexity", watch: "Ethereum has many moving parts, including staking, layer-2 networks, bridges, and smart-contract risk." },
      { risk: "Fee cycles", watch: "Low fees may suggest weak blockspace demand, while high fees can push activity to other networks." },
      { risk: "Regulatory uncertainty", watch: "Staking, tokens, DeFi, and ETFs can face different policy interpretations." },
    ],
    lab: {
      deskBrief:
        "Ethereum is analyzed as a programmable settlement economy. The Asset Lab looks beyond price into validators, layer-2 usage, fee burn, DeFi liquidity, stablecoin settlement, and ETH/BTC rotation.",
      researchQuestion:
        "Is Ethereum being valued as a productive settlement network, a yield-bearing asset, a risk asset, or a slower beta trade behind Bitcoin?",
      operatingModel:
        "Separate Ethereum into four layers: base-chain demand, staking supply, application liquidity, and relative strength against BTC.",
      participants: [
        { name: "Validators and staking providers", role: "Network security and supply holder", whyItMatters: "Staking participation affects liquid supply and confidence in network security." },
        { name: "Layer-2 networks", role: "Scaling channel", whyItMatters: "Layer-2 activity can show Ethereum adoption even when base-chain fees are low." },
        { name: "DeFi protocols", role: "Liquidity engine", whyItMatters: "Lending, trading, collateral, and stablecoin activity often reveal whether capital is active on Ethereum." },
        { name: "ETF and institutional holders", role: "Traditional access channel", whyItMatters: "Flow changes can affect ETH demand outside native crypto venues." },
      ],
      historicalEvents: [
        { year: "2015", title: "Ethereum launches", detail: "The network introduces programmable smart contracts at scale." },
        { year: "2020", title: "DeFi cycle expands", detail: "On-chain lending, trading, and yield activity make Ethereum the center of crypto finance." },
        { year: "2022", title: "The Merge", detail: "Ethereum moves to proof-of-stake, changing issuance and validator economics." },
        { year: "2024", title: "ETF access grows", detail: "Traditional market access increases focus on ETH as an institutional asset." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "ETH often follows BTC but can outperform when app activity expands.", learnerNote: "ETH/BTC is a useful relative-strength lens." },
        { market: "Stablecoins", relationship: "Stablecoin settlement can reveal demand for Ethereum-based activity.", learnerNote: "Stablecoin growth is not always ETH demand, but it shows network relevance." },
        { market: "Layer-2 tokens", relationship: "Scaling ecosystems can pull attention toward or away from ETH.", learnerNote: "Study whether activity strengthens Ethereum or fragments attention." },
      ],
      riskMap: [
        { risk: "Bridge and app risk", watch: "A major exploit can hurt confidence even if Ethereum itself remains secure." },
        { risk: "Weak fee demand", watch: "Low fee burn can weaken the supply story when network usage falls." },
        { risk: "Narrative crowding", watch: "ETH can lag when traders prefer simpler BTC exposure." },
      ],
      researchRoutine: [
        "Check ETH trend, ETH/BTC relative strength, and broad crypto regime.",
        "Review base-chain fees, burn, validator activity, and staking flows.",
        "Scan layer-2 activity and DeFi total value behavior.",
        "Compare ETF flows and institutional activity against native crypto venues.",
        "Write whether ETH strength is network-led, BTC-led, or leverage-led.",
      ],
      relatedLessons: ["Level 8 On-Chain Analysis", "Level 9 DeFi and Derivatives Risk"],
      relatedStrategies: ["Network Adoption Trend", "On-Chain + Technical Confluence", "Funding + Basis + OI Composite"],
    },
  },
  {
    slug: "solana",
    name: "Solana",
    symbol: "SOL",
    assetClass: "crypto",
    rank: 6,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Solana? SOL Market Guide",
    seoDescription: "Understand Solana, what moves SOL, why traders watch it, and how Lurnava studies high-throughput crypto networks.",
    publicHeadline: "Solana is crypto's high-speed application network.",
    publicSubheadline:
      "SOL is watched because it reflects demand for fast consumer crypto apps, active trading venues, DePIN projects, and high-throughput blockchain infrastructure.",
    plainEnglish:
      "Solana is a blockchain designed for fast, low-cost transactions. It attracts traders and builders who want apps that feel closer to web products than slow settlement systems.",
    marketRole:
      "Solana often acts as a growth and activity gauge inside crypto. When users, developers, and app revenue expand, SOL can become a focus for traders looking beyond Bitcoin and Ethereum.",
    whyTradersWatch:
      "Traders watch Solana for ecosystem rotation, app usage, validator health, memecoin activity, DePIN adoption, and whether network activity is translating into durable demand.",
    lurnavaMonitorNote:
      "Lurnava studies Solana through network usage, validator performance, app revenue, liquidity depth, ecosystem launches, and risk from congestion or outages.",
    conversionCta:
      "Learn how to study fast-moving crypto ecosystems with structured research, risk mapping, and professional testing inside Lurnava.",
    sources: [assetResearchSources.solanaDocs, assetResearchSources.solanaCoreDocs],
    drivers: [
      { title: "Application activity", detail: "DEX volume, wallet activity, NFT activity, and consumer apps help show whether users are active or only speculating." },
      { title: "Network reliability", detail: "Solana's speed is central to its appeal, so congestion, downtime, or upgrades can affect confidence." },
      { title: "Ecosystem rotation", detail: "Capital often rotates into Solana when traders look for growth outside BTC and ETH." },
      { title: "Liquidity depth", detail: "SOL can move quickly when venue depth thins or leveraged positioning becomes crowded." },
    ],
    publicRisks: [
      { risk: "Network congestion", watch: "High activity can pressure the user experience if the network struggles to process demand smoothly." },
      { risk: "Speculative bursts", watch: "Fast ecosystem attention can fade quickly if app usage is not durable." },
      { risk: "Validator and upgrade risk", watch: "Infrastructure changes need monitoring because reliability is part of Solana's market story." },
    ],
    lab: {
      deskBrief:
        "Solana is studied as an activity-driven growth network. The Asset Lab separates real usage from short-lived attention by reviewing transactions, app revenue, validator behavior, liquidity, and ecosystem catalysts.",
      researchQuestion:
        "Is SOL moving because durable activity is expanding, or because speculative attention is crowding into a short-term theme?",
      operatingModel:
        "Start with network health, then app activity, then liquidity and positioning. A SOL thesis is weak if price moves while usage and reliability data do not support it.",
      participants: [
        { name: "Validators", role: "Network operators", whyItMatters: "Reliability and decentralization affect trust in a high-throughput chain." },
        { name: "Application teams", role: "Demand creators", whyItMatters: "Consumer apps, DEXs, and DePIN projects create the activity that gives SOL its growth case." },
        { name: "Market makers", role: "Liquidity providers", whyItMatters: "SOL often trades quickly, so depth and spreads matter for clean execution study." },
        { name: "Ecosystem funds", role: "Capital allocators", whyItMatters: "Funding and launches can shape attention across the Solana ecosystem." },
      ],
      historicalEvents: [
        { year: "2020", title: "Mainnet beta launch", detail: "Solana begins its public network phase focused on high throughput." },
        { year: "2021", title: "Ecosystem expansion", detail: "DeFi, NFTs, and trading applications pull major attention to Solana." },
        { year: "2022", title: "Confidence reset", detail: "Market stress forces traders to reassess ecosystem durability and counterparty exposure." },
        { year: "2023-2025", title: "Activity rebound", detail: "New apps, memecoin activity, and DePIN interest revive attention around Solana usage." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "Often compared as competing smart-contract ecosystems.", learnerNote: "Compare usage quality, fees, developer activity, and liquidity rather than price alone." },
        { market: "Bitcoin", relationship: "SOL usually needs broad crypto risk appetite to sustain large advances.", learnerNote: "A weak BTC regime can make SOL strength harder to trust." },
        { market: "Meme assets", relationship: "Solana attention can rise with active retail trading themes.", learnerNote: "Separate durable network demand from short attention cycles." },
      ],
      riskMap: [
        { risk: "Reliability shock", watch: "Any network interruption can weaken the speed-and-scale thesis." },
        { risk: "Attention reversal", watch: "Speculative ecosystems can unwind quickly when volume leaves." },
        { risk: "Liquidity pockets", watch: "Rapid moves can form when depth is thin across venues." },
      ],
      researchRoutine: [
        "Review SOL trend and relative strength against BTC and ETH.",
        "Check transactions, active addresses, app revenue, and DEX activity.",
        "Scan reliability updates, validator notes, and network upgrade context.",
        "Review liquidity depth, funding, and open interest.",
        "Classify the move as usage-led, theme-led, or leverage-led.",
      ],
      relatedLessons: ["Level 8 Ecosystem Growth", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Ecosystem Growth Play", "Narrative Rotation Strategy", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "us-dollar",
    name: "US Dollar",
    symbol: "USD",
    assetClass: "forex",
    rank: 1,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-15",
    seoTitle: "What Moves the US Dollar? USD Market Guide",
    seoDescription: "Learn why the US Dollar matters, who holds dollar exposure, what moves USD, and how Lurnava studies reserve-currency flow.",
    publicHeadline: "The US Dollar is the anchor of global currency markets.",
    publicSubheadline:
      "USD is watched because global trade, official reserves, Treasury holdings, debt, commodities, and risk appetite often pass through dollar pricing.",
    plainEnglish:
      "The US Dollar is the currency of the United States and the main reserve currency used across global trade and finance. Many assets are priced, borrowed, saved, hedged, or settled in dollars, so USD can move markets far outside the United States.",
    marketRole:
      "USD is the reference point for many currency pairs, commodities, reserve portfolios, and global risk decisions. When the dollar strengthens or weakens, it can affect forex pairs, gold, crypto, emerging markets, and foreign Treasury holders.",
    whyTradersWatch:
      "Traders watch USD because Federal Reserve policy, Treasury yields, inflation, employment data, reserve decisions, funding stress, and foreign demand for U.S. securities can change dollar demand quickly.",
    lurnavaMonitorNote:
      "Lurnava studies the dollar through Fed policy, H.4.1 balance-sheet data, IMF reserve composition, Treasury foreign-holder data, BIS FX turnover, DXY behavior, session liquidity, and pair-specific context.",
    conversionCta:
      "Learn how to read the US Dollar through macro lessons, forex structure, strategy practice, and professional certification checks.",
    sources: [
      assetResearchSources.federalReservePolicy,
      assetResearchSources.federalReserveH41,
      assetResearchSources.imfCofer2026Q1,
      assetResearchSources.treasuryTicMajorForeignHolders,
      assetResearchSources.bisFxSurvey,
      assetResearchSources.bisFxTurnover2025,
    ],
    drivers: [
      { title: "Federal Reserve policy", detail: "Rate expectations can change the reward for holding dollars compared with other currencies." },
      { title: "Treasury yields", detail: "US bond yields influence capital flows, dollar demand, and the pricing of many global assets." },
      { title: "Inflation and labor data", detail: "CPI, PCE, payrolls, and unemployment data can reshape what traders expect the Fed to do next." },
      { title: "Global stress", detail: "During stress, market participants may seek dollar liquidity because many debts and settlements are dollar-based." },
      { title: "Official reserve composition", detail: "IMF COFER data helps learners study whether reserve managers are keeping or changing dollar exposure over time." },
      { title: "Foreign Treasury holdings", detail: "Treasury TIC data shows named countries with large U.S. securities exposure, which matters for reserve flow and dollar funding context." },
    ],
    publicRisks: [
      { risk: "Data shock", watch: "Major inflation or employment surprises can move USD pairs quickly." },
      { risk: "Policy repricing", watch: "Fed language can shift rate expectations even before policy changes." },
      { risk: "Pair-specific distortion", watch: "USD strength against one currency does not mean the same behavior across every pair." },
      { risk: "Reserve-flow misread", watch: "A change in one holder's Treasury balance does not prove a full reserve trend without COFER, TIC, and yield context." },
    ],
    lab: {
      deskBrief:
        "The US Dollar is studied as the central pricing unit for global macro. The Asset Lab connects Fed policy, balance-sheet data, reserve share, Treasury holder exposure, yield curves, inflation data, labor data, funding stress, and pair structure.",
      researchQuestion:
        "Is USD moving because of US strength, foreign weakness, rate repricing, reserve flow, Treasury demand, liquidity demand, or position unwind?",
      operatingModel:
        "Never read USD in isolation. Compare the dollar driver against the other currency in the pair, then check yields, Fed expectations, reserve data, TIC data, risk tone, pips, spread, and session behavior.",
      participants: [
        { name: "Federal Reserve", role: "Policy and balance-sheet authority", whyItMatters: "The Fed sets the policy-rate framework and publishes H.4.1 balance-sheet data that anchors dollar liquidity study.", sourceBasis: "Federal Reserve policy page and H.4.1 release" },
        { name: "U.S. Department of the Treasury", role: "Debt issuer and TIC publisher", whyItMatters: "Treasury issuance and TIC holder data show how official and private foreign demand connects to dollar funding.", sourceBasis: "Treasury TIC table" },
        { name: "International Monetary Fund", role: "Reserve composition source", whyItMatters: "COFER gives a high-authority view of dollar share inside official FX reserves.", sourceBasis: "IMF COFER 2026Q1 data brief" },
        { name: "Bank for International Settlements", role: "FX market infrastructure source", whyItMatters: "BIS turnover data shows the dollar's role in global FX trading and which jurisdictions drive dealer activity.", sourceBasis: "BIS 2025 Triennial Survey" },
        { name: "Japan", role: "Foreign Treasury holder", whyItMatters: "Japan was the largest listed foreign holder in the May 2026 TIC table, making it a key reserve-flow reference.", sourceBasis: "Treasury TIC table 5" },
        { name: "United Kingdom", role: "Foreign Treasury holder and FX center", whyItMatters: "The UK combines large Treasury holdings with London FX-market importance, so it matters for both securities and trading-channel analysis.", sourceBasis: "Treasury TIC table and BIS turnover release" },
        { name: "China, Mainland", role: "Foreign Treasury holder", whyItMatters: "China's Treasury holdings are monitored because changes can affect reserve-flow narratives and USD/CNY discussion.", sourceBasis: "Treasury TIC table 5" },
        { name: "Reporting dealers and global banks", role: "Dollar liquidity channels", whyItMatters: "BIS data shows dealer and financial-institution activity as the plumbing where dollar funding pressure can appear.", sourceBasis: "BIS FX turnover release" },
      ],
      historicalEvents: [
        { year: "1913", title: "Federal Reserve created", detail: "The central-bank framework that now anchors dollar policy and liquidity operations is established." },
        { year: "1944", title: "Bretton Woods system", detail: "The dollar becomes central to the post-war monetary system." },
        { year: "1971", title: "Gold convertibility ends", detail: "The dollar moves fully into a fiat currency regime." },
        { year: "1985", title: "Plaza Accord", detail: "Major economies coordinate to weaken an overvalued dollar, showing that FX policy and diplomacy can matter." },
        { year: "2008", title: "Global funding stress", detail: "Dollar liquidity demand surges during the financial crisis." },
        { year: "2020", title: "Pandemic liquidity shock", detail: "Dollar funding and central-bank liquidity tools become central to market stabilization." },
        { year: "2022", title: "Aggressive Fed tightening", detail: "Rapid rate increases push the dollar into a major global repricing cycle." },
        { year: "2025", title: "BIS survey confirms dollar dominance", detail: "BIS reports USD on one side of 89.2% of OTC FX trades in April 2025." },
        { year: "2026", title: "COFER reserve share update", detail: "IMF reports the dollar share of official FX reserves at 57.13% in 2026Q1." },
      ],
      correlations: [
        { market: "Gold", relationship: "Often inverse when real yields and dollar strength rise together.", learnerNote: "Gold can still rise with USD during stress, so context matters." },
        { market: "Emerging-market currencies", relationship: "A stronger USD can pressure countries with dollar debt.", learnerNote: "Check local policy and reserves before assuming the same reaction everywhere." },
        { market: "Bitcoin", relationship: "USD strength can reduce risk appetite in crypto.", learnerNote: "Crypto-specific flows can override the relationship for periods." },
        { market: "U.S. Treasury yields", relationship: "Yield changes can pull dollar demand through rate differential and reserve allocation logic.", learnerNote: "Pair the yield move with the other currency's policy path." },
      ],
      riskMap: [
        { risk: "One-sided Fed interpretation", watch: "Markets may react more to future expectations than the current policy rate." },
        { risk: "Wrong pair read", watch: "EUR/USD and USD/JPY can move for very different reasons." },
        { risk: "Session spread changes", watch: "Major data releases can widen spreads and distort short-term reads." },
        { risk: "TIC custody limitation", watch: "Treasury states that securities held through overseas custody accounts may not precisely identify the actual owner." },
        { risk: "Reserve-share valuation effect", watch: "IMF COFER shares can move because exchange rates change, not only because reserve managers buy or sell dollars." },
      ],
      researchRoutine: [
        "Check DXY and the specific USD pair being studied.",
        "Review the latest inflation, labor, growth, and Fed-pricing context.",
        "Compare US yields with the other country's rate expectations.",
        "Review IMF COFER and Treasury TIC data when the study involves reserve flow.",
        "Check H.4.1 balance-sheet data when dollar liquidity is part of the thesis.",
        "Mark session timing, spread behavior, and structure on the chart.",
        "Write whether USD strength is policy-led, reserve-led, Treasury-flow-led, stress-led, or counterpart weakness.",
      ],
      relatedLessons: ["Level 4 Sessions", "Level 6 Central Banks", "Level 7 News Releases"],
      relatedStrategies: ["Central Bank Divergence Trading", "Interest Rate Differential Momentum", "News Trading on Economic Releases"],
      deepDive: {
        identity: [
          { title: "Reserve-currency anchor", detail: "USD is more than one side of a forex pair; it is the settlement and reserve unit used across debt, trade, commodities, and official reserves." },
          { title: "Policy plus market plumbing", detail: "The dollar is shaped by Fed policy, Treasury securities, banking channels, dealer balance sheets, and global funding demand." },
          { title: "Pair-relative reading", detail: "Every forex chart is a comparison. USD strength in one pair may reflect the other currency's weakness rather than pure dollar demand." },
        ],
        authorityOrFounders: [
          { title: "Central bank authority", detail: "The Federal Reserve sets the U.S. monetary-policy framework and publishes balance-sheet data used to study dollar liquidity." },
          { title: "Debt and fiscal authority", detail: "The U.S. Treasury issues securities and publishes TIC data that helps explain foreign dollar-asset exposure." },
          { title: "International measurement", detail: "IMF COFER and BIS turnover data let learners verify reserve and FX-market claims from high-authority sources." },
        ],
        holderExposureMap: [
          {
            entityName: "Global official foreign exchange reserves",
            entityType: "Reserve aggregate",
            assetOrInstrument: "Total FX reserves and USD share",
            amount: "13.10 trillion total reserves; USD share 57.13",
            unit: "USD and percent",
            exposureType: "Official reserve composition",
            asOfDate: "2026-Q1",
            sourcePublishedAt: "2026-07-01",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "COFER world aggregates, first quarter 2026",
            sourcePublisher: "International Monetary Fund",
            sourceUrl: assetResearchSources.imfCofer2026Q1.url,
            freshnessStatus: "current",
            whyItMatters: "COFER gives learners the high-authority reserve-share backdrop behind the dollar's global role.",
            limitations: "Reserve-share changes can reflect exchange-rate valuation effects as well as active allocation decisions.",
          },
          {
            entityName: "Japan",
            entityType: "Foreign holder of U.S. Treasury securities",
            assetOrInstrument: "U.S. Treasury securities",
            amount: "1,143.1",
            unit: "USD billions",
            exposureType: "Foreign Treasury holding",
            asOfDate: "2026-05",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Major Foreign Holders of Treasury Securities",
            sourcePublisher: "U.S. Department of the Treasury",
            sourceUrl: assetResearchSources.treasuryTicMajorForeignHolders.url,
            freshnessStatus: "current",
            whyItMatters: "Japan was the largest listed foreign holder in the latest reviewed TIC table, making it central to official dollar-asset exposure study.",
            limitations: "Treasury notes that custody-location reporting may not precisely identify the final owner.",
          },
          {
            entityName: "United Kingdom",
            entityType: "Foreign holder of U.S. Treasury securities",
            assetOrInstrument: "U.S. Treasury securities",
            amount: "948.6",
            unit: "USD billions",
            exposureType: "Foreign Treasury holding",
            asOfDate: "2026-05",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Major Foreign Holders of Treasury Securities",
            sourcePublisher: "U.S. Department of the Treasury",
            sourceUrl: assetResearchSources.treasuryTicMajorForeignHolders.url,
            freshnessStatus: "current",
            whyItMatters: "The UK is a large listed holder and a major FX trading center, linking securities exposure with market plumbing.",
            limitations: "TIC country attribution can be affected by custody chains.",
          },
          {
            entityName: "China, Mainland",
            entityType: "Foreign holder of U.S. Treasury securities",
            assetOrInstrument: "U.S. Treasury securities",
            amount: "659.3",
            unit: "USD billions",
            exposureType: "Foreign Treasury holding",
            asOfDate: "2026-05",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Major Foreign Holders of Treasury Securities",
            sourcePublisher: "U.S. Department of the Treasury",
            sourceUrl: assetResearchSources.treasuryTicMajorForeignHolders.url,
            freshnessStatus: "current",
            whyItMatters: "China's Treasury balance is watched because it often shapes reserve-flow narratives around USD and USD/CNY.",
            limitations: "A single country line should not be treated as the full dollar-reserve story.",
          },
          {
            entityName: "Federal Reserve",
            entityType: "Central bank",
            assetOrInstrument: "U.S. Treasury securities held outright",
            amount: "4,502,749",
            unit: "USD millions",
            exposureType: "Central-bank balance-sheet holding",
            asOfDate: "2026-07-08",
            sourcePublishedAt: "2026-07-09",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "H.4.1 Factors Affecting Reserve Balances",
            sourcePublisher: "Federal Reserve",
            sourceUrl: assetResearchSources.federalReserveH41.url,
            freshnessStatus: "current",
            whyItMatters: "Fed Treasury holdings affect balance-sheet and liquidity context around the dollar.",
            limitations: "H.4.1 is a weekly balance-sheet snapshot, not a trading instruction.",
          },
          {
            entityName: "Federal Reserve",
            entityType: "Central bank",
            assetOrInstrument: "Federal Reserve notes outstanding",
            amount: "2,824,935",
            unit: "USD millions",
            exposureType: "Currency issuance reference",
            asOfDate: "2026-07-08",
            sourcePublishedAt: "2026-07-09",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "H.4.1 Factors Affecting Reserve Balances",
            sourcePublisher: "Federal Reserve",
            sourceUrl: assetResearchSources.federalReserveH41.url,
            freshnessStatus: "current",
            whyItMatters: "Currency outstanding helps learners connect the dollar's physical note system with broader balance-sheet collateral data.",
            limitations: "This is not the full money supply and should not be confused with broad dollar liquidity.",
          },
        ],
        marketStructure: [
          { title: "Interbank and dealer layer", detail: "BIS data shows FX turnover through dealers and other financial institutions, where dollar liquidity pressure can appear before it is clear on retail charts." },
          { title: "Treasury securities layer", detail: "Foreign holders, reserve managers, pension funds, banks, and central banks use Treasury securities as dollar assets." },
          { title: "Session layer", detail: "London and New York sessions matter because dollar spreads, liquidity, and data-release reactions change through the trading day." },
          { title: "Pair layer", detail: "USD must be read against the other side of the pair. EUR/USD, USD/JPY, USD/CNY, and USD/MXN can each move for different reasons." },
        ],
        driverRegimes: [
          { title: "Fed repricing regime", detail: "When inflation, labor, or FOMC expectations move sharply, USD pairs can reprice through rate differentials and yield moves." },
          { title: "Funding-stress regime", detail: "During liquidity stress, market participants may demand dollars even when U.S. data is weak." },
          { title: "Reserve-flow regime", detail: "COFER and TIC data can change the longer-term discussion around official dollar demand." },
          { title: "Counterpart weakness regime", detail: "USD can strengthen because the other currency weakens from local policy, growth, or intervention pressure." },
        ],
        sourceBackedClaims: [
          { title: "COFER reserve share", detail: "IMF reported total official FX reserves of $13.10 trillion and a USD share of 57.13% in 2026Q1." },
          { title: "BIS turnover dominance", detail: "BIS reported OTC FX turnover of $9.6 trillion per day in April 2025 and USD on one side of 89.2% of trades." },
          { title: "TIC named holders", detail: "Treasury listed Japan at $1,143.1 billion, the UK at $948.6 billion, and Mainland China at $659.3 billion in U.S. Treasury securities for May 2026." },
          { title: "Fed balance-sheet anchor", detail: "The July 9, 2026 H.4.1 release showed $4,502,749 million in U.S. Treasury securities held outright for Wednesday, July 8, 2026." },
        ],
        reviewNotes: [
          "Use pips, spread, session, pair, rate differential, reserve flow, and policy-expectation language for USD pages.",
          "Do not treat one TIC country row as complete proof of global reserve rotation.",
          "Reserve and balance-sheet data must be shown with dates because these figures update on release schedules.",
        ],
      },
    },
  },
  {
    slug: "euro",
    name: "Euro",
    symbol: "EUR",
    assetClass: "forex",
    rank: 2,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Euro? EUR Market Guide",
    seoDescription: "Understand the Euro, what moves EUR pairs, and how Lurnava studies ECB policy, growth, inflation, and European risk.",
    publicHeadline: "The Euro is the second major pillar of global forex.",
    publicSubheadline:
      "EUR is watched because it reflects European growth, ECB policy, inflation pressure, energy exposure, and global demand for non-dollar reserves.",
    plainEnglish:
      "The Euro is the shared currency used by many European economies. It is heavily traded because it represents a large economic region and is the other side of the world's most watched currency pair, EUR/USD.",
    marketRole:
      "The Euro helps traders study the balance between US and European policy, growth, inflation, and risk appetite. EUR/USD is often the cleanest window into dollar-versus-Europe repricing.",
    whyTradersWatch:
      "Traders watch EUR for ECB policy, inflation, growth data, energy costs, bond spreads, political risk, and relative strength against USD, GBP, CHF, and JPY.",
    lurnavaMonitorNote:
      "Lurnava studies the Euro through ECB expectations, euro-area inflation, growth divergence, German data, bond spreads, energy sensitivity, and EUR pair structure.",
    conversionCta:
      "Learn how to read the Euro through macro structure, central-bank lessons, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.ecbEuroIntro, assetResearchSources.ecbMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "ECB policy", detail: "Rate guidance and inflation language shape whether traders expect the Euro to gain or lose yield support." },
      { title: "Growth divergence", detail: "European growth compared with US or UK growth can shift demand for EUR pairs." },
      { title: "Energy exposure", detail: "Energy costs can affect inflation, trade balances, and confidence across the euro area." },
      { title: "Bond spread stress", detail: "Differences between member-country bond yields can reveal stress inside the currency bloc." },
    ],
    publicRisks: [
      { risk: "Fragmented data", watch: "The euro area is not one economy, so country-level weakness can matter." },
      { risk: "Policy mismatch", watch: "ECB policy may not match every member country's conditions." },
      { risk: "External shock", watch: "Energy, geopolitics, and global trade changes can hit Europe quickly." },
    ],
    lab: {
      deskBrief:
        "The Euro is studied as a shared-currency macro market. The Asset Lab connects ECB policy, euro-area inflation, German growth, bond spreads, energy pressure, and pair-specific structure.",
      researchQuestion:
        "Is EUR moving because Europe is strengthening, the dollar is weakening, ECB expectations changed, or regional stress is rising?",
      operatingModel:
        "Study EUR through relative policy and regional cohesion. A clean EUR thesis compares the euro area against the counterpart currency and checks bond-spread pressure.",
      participants: [
        { name: "European Central Bank", role: "Policy authority", whyItMatters: "ECB language controls the rate-expectation anchor for EUR." },
        { name: "Euro-area governments", role: "Fiscal and political backdrop", whyItMatters: "Policy conflict, debt stress, and elections can affect confidence." },
        { name: "European exporters", role: "Trade flow source", whyItMatters: "Export competitiveness and global demand influence euro-area growth expectations." },
        { name: "Global reserve managers", role: "Reserve allocation", whyItMatters: "The Euro is a major reserve currency and alternative to USD concentration." },
      ],
      historicalEvents: [
        { year: "1999", title: "Euro introduced electronically", detail: "The shared currency begins for accounting and financial markets." },
        { year: "2002", title: "Euro banknotes and coins launch", detail: "The Euro becomes physical money for participating economies." },
        { year: "2010-2012", title: "Sovereign debt crisis", detail: "Bond-spread stress becomes a core risk lens for EUR." },
        { year: "2022", title: "Energy shock and inflation surge", detail: "European energy pressure and inflation reshape ECB policy expectations." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "EUR/USD is the main relative policy battleground.", learnerNote: "Always decide whether EUR/USD is moving because of EUR, USD, or both." },
        { market: "German Bund yields", relationship: "German yields often anchor European rate expectations.", learnerNote: "Bund movement can help explain EUR repricing." },
        { market: "Energy markets", relationship: "Energy stress can pressure European growth and inflation.", learnerNote: "Energy impact depends on the macro regime and policy response." },
      ],
      riskMap: [
        { risk: "Country-level stress", watch: "Watch bond spreads when political or debt concerns rise." },
        { risk: "ECB communication gap", watch: "Markets can reprice quickly when the ECB shifts tone." },
        { risk: "USD dominance", watch: "EUR analysis can fail if the real driver is broad dollar repricing." },
      ],
      researchRoutine: [
        "Check EUR/USD, EUR/GBP, and EUR/JPY structure.",
        "Review ECB pricing, inflation data, PMIs, and German growth data.",
        "Compare Bund yields and member-country spreads.",
        "Scan energy and geopolitical pressure affecting Europe.",
        "Record whether EUR strength is policy-led, growth-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 6 Interest Rate Differentials", "Level 7 Macro Event Risk"],
      relatedStrategies: ["Central Bank Divergence Trading", "Terms of Trade Strategy", "Inflation Differential Trading"],
    },
  },
  {
    slug: "japanese-yen",
    name: "Japanese Yen",
    symbol: "JPY",
    assetClass: "forex",
    rank: 3,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Japanese Yen? JPY Market Guide",
    seoDescription: "Understand the Japanese Yen, what moves JPY pairs, and how Lurnava studies BOJ policy, yields, funding flows, and risk stress.",
    publicHeadline: "The Japanese Yen is a major funding and safety currency.",
    publicSubheadline:
      "JPY is watched because Bank of Japan policy, Japanese government bond yields, rate gaps, global stress, and official intervention risk can reshape yen pairs quickly.",
    plainEnglish:
      "The Japanese Yen is Japan's currency and one of the most traded currencies in global forex. It often matters when traders compare Japan's low-yield history with higher-yielding markets.",
    marketRole:
      "JPY is a major reserve and funding currency. It can strengthen during risk reduction, weaken when global yield gaps favor other currencies, and move sharply when Japan policy expectations change.",
    whyTradersWatch:
      "Traders watch JPY for BOJ decisions, Japanese yields, US Treasury yields, carry-trade pressure, intervention warnings, and global risk appetite.",
    lurnavaMonitorNote:
      "Lurnava studies JPY through BOJ policy, Japan yield behavior, USD/JPY structure, carry pressure, intervention context, cross-yen pairs, and risk-stress flows.",
    conversionCta:
      "Learn how to study JPY through central-bank lessons, yield comparison, session behavior, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.bojMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Bank of Japan policy", detail: "Policy-rate changes, bond-purchase guidance, and inflation language can change how traders value the yen." },
      { title: "Yield differentials", detail: "JPY pairs often react when Japanese yields move differently from US, European, or Australian yields." },
      { title: "Carry-trade pressure", detail: "When traders borrow low-yielding yen to buy higher-yielding assets, unwind risk can become important." },
      { title: "Official intervention risk", detail: "Large yen moves can bring warnings or action from Japanese authorities, especially around disorderly weakness." },
    ],
    publicRisks: [
      { risk: "Policy surprise", watch: "JPY can reprice quickly when BOJ guidance or yield-market operations change." },
      { risk: "Carry unwind", watch: "Risk stress can force crowded yen-funded positions to close." },
      { risk: "Pair confusion", watch: "USD/JPY, EUR/JPY, and AUD/JPY can move for different counterpart-currency reasons." },
    ],
    lab: {
      deskBrief:
        "The Japanese Yen is studied as a funding, reserve, and risk-sensitive currency. The Asset Lab connects BOJ policy, Japan yields, global rate gaps, carry pressure, intervention context, and cross-yen structure.",
      researchQuestion:
        "Is JPY moving because Japan policy changed, global yields shifted, carry trades are being reduced, or the counterpart currency is driving the pair?",
      operatingModel:
        "Start with USD/JPY, then compare cross-yen pairs. A useful yen read checks BOJ language, Japan yields, US yields, risk tone, and whether movement is broad yen strength or one-pair distortion.",
      participants: [
        { name: "Bank of Japan", role: "Policy authority", whyItMatters: "BOJ decisions and bond-market operations shape yen rate expectations." },
        { name: "Ministry of Finance Japan", role: "FX intervention authority", whyItMatters: "Official warnings and intervention risk can affect disorderly yen moves." },
        { name: "Japanese institutional investors", role: "Capital-flow source", whyItMatters: "Overseas bond and equity allocation can influence yen demand and hedging." },
        { name: "Global macro funds", role: "Carry and relative-rate traders", whyItMatters: "Crowded carry trades can create sharp yen reversals." },
      ],
      historicalEvents: [
        { year: "1985", title: "Plaza Accord", detail: "Global coordination leads to major yen appreciation and becomes a key FX history reference." },
        { year: "1990s-2010s", title: "Low-rate era defines the yen", detail: "Japan's low-yield environment makes JPY central to carry-trade study." },
        { year: "2013", title: "Abenomics era begins", detail: "Large policy easing changes yen expectations and global macro positioning." },
        { year: "2022-2026", title: "Yield and policy normalization become central", detail: "Learners track the shift from ultra-low-rate framing toward changing BOJ policy expectations." },
      ],
      correlations: [
        { market: "US Treasury yields", relationship: "USD/JPY often responds to the gap between US and Japanese yields.", learnerNote: "Check whether yield movement or risk stress is dominant." },
        { market: "Equity risk appetite", relationship: "JPY can strengthen when risky positions are reduced.", learnerNote: "A yen rally during stress may be position cleanup, not Japan strength." },
        { market: "Gold", relationship: "Both can attract defensive attention in stress, but they do not always move together.", learnerNote: "Compare real yields and risk tone before linking them." },
      ],
      riskMap: [
        { risk: "Intervention headline risk", watch: "Official language can change short-term behavior around extreme yen weakness." },
        { risk: "Carry crowding", watch: "A popular yield trade can unwind faster than a normal trend." },
        { risk: "Wrong driver label", watch: "Separate yen movement from USD, EUR, AUD, or GBP movement inside the pair." },
      ],
      researchRoutine: [
        "Check USD/JPY, EUR/JPY, and AUD/JPY for broad yen confirmation.",
        "Compare BOJ expectations with US and European yield behavior.",
        "Review Japanese inflation, wage, and bond-market context.",
        "Mark Tokyo, London, and New York session behavior around major releases.",
        "Record whether the move is policy-led, carry-led, stress-led, or counterpart-led.",
      ],
      relatedLessons: ["Level 4 Sessions", "Level 6 Central Banks", "Level 6 Interest Rate Differentials"],
      relatedStrategies: ["Carry Trade Strategy", "Central Bank Divergence Trading", "Session Volatility Mapping"],
    },
  },
  {
    slug: "british-pound",
    name: "British Pound",
    symbol: "GBP",
    assetClass: "forex",
    rank: 4,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the British Pound? GBP Market Guide",
    seoDescription: "Understand the British Pound, what moves GBP pairs, and how Lurnava studies Bank of England policy, inflation, gilts, and UK risk.",
    publicHeadline: "The British Pound is a high-attention major currency.",
    publicSubheadline:
      "GBP is watched because UK inflation, Bank of England policy, growth data, fiscal credibility, gilt yields, and political risk can make sterling pairs move with force.",
    plainEnglish:
      "The British Pound is the currency of the United Kingdom. In forex, sterling often reacts strongly when traders reassess UK rates, growth, inflation, government policy, or the dollar and euro sides of major pairs.",
    marketRole:
      "GBP sits between US dollar, euro, and global risk themes. GBP/USD and EUR/GBP help traders study whether the market is repricing the UK specifically or reacting to broader dollar and European movement.",
    whyTradersWatch:
      "Traders watch GBP for Bank of England decisions, inflation data, wage growth, GDP, fiscal announcements, gilt-market stress, and UK political headlines.",
    lurnavaMonitorNote:
      "Lurnava studies GBP through Bank Rate expectations, inflation pressure, wage data, gilt yields, fiscal credibility, GBP/USD, EUR/GBP, and London session structure.",
    conversionCta:
      "Learn how to study sterling through macro structure, central-bank lessons, London session behavior, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.bankEnglandMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Bank of England policy", detail: "Bank Rate expectations shape sterling's yield support against USD, EUR, JPY, and CHF." },
      { title: "Inflation and wages", detail: "UK inflation and labor pressure can change how long traders expect restrictive policy to last." },
      { title: "Gilt-market behavior", detail: "Government bond yields help reveal whether moves are policy-led, fiscal-led, or confidence-led." },
      { title: "UK political and fiscal risk", detail: "Budget plans, elections, and policy credibility can affect sterling beyond normal data releases." },
    ],
    publicRisks: [
      { risk: "Fiscal credibility shock", watch: "Sterling can react sharply when markets question the policy mix behind borrowing and growth." },
      { risk: "Data whiplash", watch: "UK inflation, wages, and growth data can pull policy expectations in different directions." },
      { risk: "Wrong pair lens", watch: "GBP/USD may move on USD behavior while EUR/GBP may show a cleaner UK-versus-Europe read." },
    ],
    lab: {
      deskBrief:
        "The British Pound is studied as a liquid major currency with strong policy, fiscal, and sentiment sensitivity. The Asset Lab connects Bank of England guidance, inflation, wages, gilts, UK growth, fiscal risk, and pair structure.",
      researchQuestion:
        "Is GBP moving because UK rates changed, fiscal confidence shifted, growth data surprised, or the counterpart currency is controlling the pair?",
      operatingModel:
        "Study GBP through GBP/USD and EUR/GBP together. A stronger sterling read checks Bank of England expectations, gilt behavior, UK data, London session flow, and whether the move survives dollar or euro confirmation.",
      participants: [
        { name: "Bank of England", role: "Policy authority", whyItMatters: "Bank Rate decisions and MPC language anchor sterling rate expectations." },
        { name: "UK Treasury", role: "Fiscal-policy source", whyItMatters: "Budget credibility can affect gilt yields and sterling confidence." },
        { name: "Gilt-market investors", role: "Funding and confidence gauge", whyItMatters: "Bond-market stress can spill into GBP quickly." },
        { name: "London FX desks", role: "Liquidity center", whyItMatters: "London trading often shapes sterling liquidity and intraday structure." },
      ],
      historicalEvents: [
        { year: "1992", title: "ERM exit", detail: "Sterling leaves the Exchange Rate Mechanism after pressure against the pound." },
        { year: "2016", title: "Brexit referendum", detail: "GBP reprices sharply as trade, policy, and political expectations change." },
        { year: "2020", title: "Pandemic policy shock", detail: "UK growth, rates, and fiscal support become central sterling drivers." },
        { year: "2022", title: "Gilt-market stress", detail: "Fiscal credibility and bond-market stability become a modern GBP risk lesson." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "GBP/USD is highly sensitive to dollar strength and US rate expectations.", learnerNote: "A falling cable chart can be dollar strength, sterling weakness, or both." },
        { market: "Euro", relationship: "EUR/GBP helps compare UK conditions with euro-area conditions.", learnerNote: "Use EUR/GBP to filter out some broad dollar noise." },
        { market: "UK gilts", relationship: "Gilt yields can show policy expectations or fiscal confidence stress.", learnerNote: "Higher yields are not always supportive if they reflect confidence concerns." },
      ],
      riskMap: [
        { risk: "Policy-data conflict", watch: "Inflation, wages, and growth can point in different directions." },
        { risk: "Gilt stress", watch: "Bond volatility can change sterling behavior quickly." },
        { risk: "Headline sensitivity", watch: "Political and fiscal headlines can dominate technical structure around announcements." },
      ],
      researchRoutine: [
        "Check GBP/USD, EUR/GBP, and GBP/JPY for sterling-wide behavior.",
        "Review Bank of England expectations, inflation, wage, and growth data.",
        "Compare gilt yields with US Treasuries and German Bunds.",
        "Mark London session highs, lows, spreads, and release windows.",
        "Record whether GBP strength is policy-led, fiscal-led, growth-led, or counterpart-led.",
      ],
      relatedLessons: ["Level 4 London Session", "Level 6 Central Banks", "Level 7 Macro Event Risk"],
      relatedStrategies: ["Central Bank Divergence Trading", "News Trading on Economic Releases", "Session Breakout Strategy"],
    },
  },
  {
    slug: "chinese-yuan",
    name: "Chinese Yuan",
    symbol: "CNY",
    assetClass: "forex",
    rank: 5,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Chinese Yuan? CNY Market Guide",
    seoDescription: "Understand the Chinese Yuan, what moves CNY and CNH, and how Lurnava studies PBC policy, fixing, trade, and capital-flow context.",
    publicHeadline: "The Chinese Yuan is a managed currency tied to global trade.",
    publicSubheadline:
      "CNY is watched because China's policy stance, daily fixing, export cycle, capital-flow controls, credit conditions, and USD/CNH behavior affect global risk and Asia FX.",
    plainEnglish:
      "The Chinese Yuan, also called the renminbi, is China's currency. Onshore CNY and offshore CNH can trade differently, so learners study both policy management and market pricing.",
    marketRole:
      "CNY is central to Asia FX, global manufacturing, commodity demand, and emerging-market risk. Its movement can influence AUD, HKD, SGD, KRW, commodities, and broad dollar sentiment.",
    whyTradersWatch:
      "Traders watch CNY for PBC fixing behavior, credit support, trade data, capital-flow management, property-sector stress, and USD/CNH liquidity.",
    lurnavaMonitorNote:
      "Lurnava studies CNY through PBC policy, daily fixing context, USD/CNH structure, trade data, credit conditions, offshore liquidity, and spillovers into Asia FX.",
    conversionCta:
      "Learn how to study managed currencies through policy context, macro lessons, cross-market links, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.pbocHome, assetResearchSources.bisChinaPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "PBC fixing and policy", detail: "Daily reference-rate behavior and policy operations help learners read how authorities are guiding the currency." },
      { title: "China growth and credit", detail: "Credit impulse, property stress, production, and consumption data can change expectations for yuan demand." },
      { title: "Trade and tariff pressure", detail: "Export competitiveness, trade balances, and global trade policy can affect yuan pricing." },
      { title: "Onshore-offshore spread", detail: "Differences between CNY and CNH can reveal stress, liquidity gaps, or policy tension." },
    ],
    publicRisks: [
      { risk: "Managed-market assumption", watch: "CNY is not a free-floating currency, so policy context must be part of the read." },
      { risk: "Offshore liquidity gap", watch: "CNH can move differently from onshore CNY during stress." },
      { risk: "Headline concentration", watch: "Trade, property, and policy headlines can affect Asia FX quickly." },
    ],
    lab: {
      deskBrief:
        "The Chinese Yuan is studied as a managed macro currency with global spillovers. The Asset Lab connects PBC guidance, the daily fixing, USD/CNH, credit conditions, trade data, offshore liquidity, and regional currency links.",
      researchQuestion:
        "Is yuan movement policy-guided, dollar-driven, growth-driven, trade-driven, or a stress gap between onshore and offshore pricing?",
      operatingModel:
        "Study CNY through policy first, then market price. A useful read compares the daily fixing, USD/CNH behavior, Asia FX, Chinese data, and whether pressure is local or broad-dollar driven.",
      participants: [
        { name: "People's Bank of China", role: "Policy and fixing authority", whyItMatters: "PBC policy tools and fixing behavior shape yuan expectations." },
        { name: "Chinese exporters and importers", role: "Trade-flow source", whyItMatters: "Trade settlement and hedging affect currency demand." },
        { name: "Offshore CNH banks", role: "Liquidity channel", whyItMatters: "Offshore liquidity can show stress or global demand for yuan exposure." },
        { name: "Global commodity and Asia FX desks", role: "Spillover observers", whyItMatters: "Yuan behavior can influence AUD, KRW, SGD, and commodity-linked markets." },
      ],
      historicalEvents: [
        { year: "2005", title: "Exchange-rate reform begins", detail: "China moves away from a strict dollar peg toward a more flexible managed framework." },
        { year: "2010s", title: "Offshore CNH market grows", detail: "Offshore yuan trading becomes an important lens for global participants." },
        { year: "2015", title: "Yuan devaluation shock", detail: "A currency adjustment creates global market stress and highlights policy communication risk." },
        { year: "Ongoing", title: "Daily fixing remains central", detail: "Learners monitor fixing behavior, onshore-offshore gaps, and broad dollar pressure." },
      ],
      correlations: [
        { market: "Australian Dollar", relationship: "AUD often reacts to China growth and commodity-demand expectations.", learnerNote: "AUD/CNY links are about trade and growth expectations, not only price charts." },
        { market: "Hong Kong Dollar and CNH", relationship: "Hong Kong is a key offshore yuan and financial-market center.", learnerNote: "Separate the HKD peg from CNH market pricing." },
        { market: "Copper and industrial commodities", relationship: "China demand expectations can influence commodity-linked FX.", learnerNote: "Commodity moves need data confirmation from China activity." },
      ],
      riskMap: [
        { risk: "Policy opacity", watch: "Managed currency moves can reflect policy choices that are not fully visible in advance." },
        { risk: "Onshore-offshore mismatch", watch: "CNY and CNH can diverge when liquidity or policy pressure changes." },
        { risk: "Contagion read error", watch: "Do not assume every Asia FX move is yuan-led without checking USD and local factors." },
      ],
      researchRoutine: [
        "Check USD/CNH, USD/CNY context, and the onshore-offshore gap.",
        "Review PBC fixing behavior, liquidity operations, and policy language.",
        "Compare China activity data with commodity and Asia FX behavior.",
        "Watch AUD, KRW, HKD, and SGD for regional spillovers.",
        "Record whether yuan pressure is policy-led, dollar-led, growth-led, or liquidity-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Central Bank Divergence Trading", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "australian-dollar",
    name: "Australian Dollar",
    symbol: "AUD",
    assetClass: "forex",
    rank: 6,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Australian Dollar? AUD Market Guide",
    seoDescription: "Understand the Australian Dollar, what moves AUD pairs, and how Lurnava studies RBA policy, commodities, China demand, and risk appetite.",
    publicHeadline: "The Australian Dollar is a commodity-linked major currency.",
    publicSubheadline:
      "AUD is watched because RBA policy, China demand, iron ore, global risk appetite, yield gaps, and trade-weighted behavior often meet inside Australian dollar pairs.",
    plainEnglish:
      "The Australian Dollar is Australia's currency. In forex, it is often studied as a growth-sensitive and commodity-linked currency because Australia exports major raw materials and trades heavily with Asia.",
    marketRole:
      "AUD helps traders read global growth appetite, commodity demand, China-sensitive flows, and rate differentials. AUD/USD is a common risk and commodity lens.",
    whyTradersWatch:
      "Traders watch AUD for RBA decisions, inflation, jobs data, China activity, commodity prices, risk appetite, and Asia-Pacific session behavior.",
    lurnavaMonitorNote:
      "Lurnava studies AUD through RBA expectations, inflation and employment data, China demand, iron ore and commodity context, AUD/USD, AUD/JPY, and trade-weighted behavior.",
    conversionCta:
      "Learn how to study AUD through commodity links, central-bank lessons, Asia-Pacific session structure, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.rbaMonetaryPolicy, assetResearchSources.rbaExchangeRates, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "RBA policy", detail: "Cash-rate expectations affect AUD's yield support against USD, JPY, NZD, and other majors." },
      { title: "China demand", detail: "China growth expectations can affect Australian exports, commodity pricing, and AUD sentiment." },
      { title: "Commodity prices", detail: "Iron ore, energy, and metals can influence terms-of-trade expectations for Australia." },
      { title: "Risk appetite", detail: "AUD can strengthen when markets prefer growth exposure and weaken when investors reduce risk." },
    ],
    publicRisks: [
      { risk: "Commodity mismatch", watch: "AUD does not follow one commodity every day; the broader terms-of-trade context matters." },
      { risk: "China headline shock", watch: "China data, property stress, or trade headlines can move AUD even without Australian news." },
      { risk: "Carry reversal", watch: "AUD/JPY and other risk pairs can unwind quickly during global stress." },
    ],
    lab: {
      deskBrief:
        "The Australian Dollar is studied as a commodity-linked, China-sensitive, and risk-aware major currency. The Asset Lab connects RBA policy, inflation, employment, commodity prices, China demand, trade-weighted behavior, and AUD pair structure.",
      researchQuestion:
        "Is AUD moving because Australia rates changed, China demand shifted, commodities repriced, or global risk appetite changed?",
      operatingModel:
        "Study AUD through AUD/USD, AUD/JPY, and AUD/NZD. A stronger read checks RBA expectations, commodities, China data, risk tone, and whether the move is broad AUD strength or counterpart weakness.",
      participants: [
        { name: "Reserve Bank of Australia", role: "Policy authority", whyItMatters: "Cash-rate decisions and inflation guidance anchor AUD rate expectations." },
        { name: "Australian commodity exporters", role: "Trade-flow source", whyItMatters: "Export income and hedging can affect AUD demand." },
        { name: "China-linked importers and investors", role: "Demand channel", whyItMatters: "China demand affects Australia's trade outlook." },
        { name: "Global macro and carry traders", role: "Risk-flow participants", whyItMatters: "AUD is often used for growth and carry exposure." },
      ],
      historicalEvents: [
        { year: "1983", title: "AUD floats", detail: "Australia moves to a floating exchange-rate regime." },
        { year: "2000s", title: "Commodity boom era", detail: "China demand and resources exports become a key AUD study theme." },
        { year: "2008", title: "Global financial crisis", detail: "AUD falls sharply as risk appetite and commodity demand weaken." },
        { year: "2020s", title: "Inflation and China cycles dominate", detail: "RBA policy and China demand remain central to AUD market study." },
      ],
      correlations: [
        { market: "China growth data", relationship: "AUD often reacts to China-sensitive demand expectations.", learnerNote: "Use China data with commodity confirmation, not in isolation." },
        { market: "Iron ore and commodities", relationship: "Commodity strength can support terms-of-trade expectations.", learnerNote: "AUD needs broad confirmation because one commodity can mislead." },
        { market: "Japanese Yen", relationship: "AUD/JPY often reflects growth appetite and carry behavior.", learnerNote: "AUD/JPY can reverse quickly during risk reduction." },
      ],
      riskMap: [
        { risk: "Single-commodity overread", watch: "Avoid reducing AUD to one raw material." },
        { risk: "China dependency", watch: "China policy and property stress can change AUD sentiment quickly." },
        { risk: "Risk-off reversal", watch: "AUD can weaken even with decent local data when global risk appetite fades." },
      ],
      researchRoutine: [
        "Check AUD/USD, AUD/JPY, and AUD/NZD structure.",
        "Review RBA expectations, inflation, employment, and wage data.",
        "Compare iron ore, broad commodities, and China activity data.",
        "Mark Asia-Pacific session movement and London follow-through.",
        "Record whether AUD strength is rates-led, commodity-led, China-led, or risk-led.",
      ],
      relatedLessons: ["Level 4 Sessions", "Level 6 Interest Rate Differentials", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Carry Trade Strategy", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "canadian-dollar",
    name: "Canadian Dollar",
    symbol: "CAD",
    assetClass: "forex",
    rank: 7,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Canadian Dollar? CAD Market Guide",
    seoDescription: "Understand the Canadian Dollar, what moves CAD pairs, and how Lurnava studies Bank of Canada policy, oil, US trade, and risk conditions.",
    publicHeadline: "The Canadian Dollar is a North American commodity-linked currency.",
    publicSubheadline:
      "CAD is watched because Bank of Canada policy, oil prices, US trade, inflation, employment, and broad dollar behavior often combine inside Canadian dollar pairs.",
    plainEnglish:
      "The Canadian Dollar is Canada's currency. In forex, it is often studied through Canada-US links, commodity exposure, Bank of Canada policy, and the behavior of USD/CAD.",
    marketRole:
      "CAD helps traders read North American growth, oil sensitivity, US dollar pressure, and rate differentials. USD/CAD is the main window, while CAD crosses help isolate Canadian strength.",
    whyTradersWatch:
      "Traders watch CAD for Bank of Canada decisions, inflation, employment, oil prices, US growth, trade policy, and broad risk appetite.",
    lurnavaMonitorNote:
      "Lurnava studies CAD through Bank of Canada expectations, Canada-US yield spreads, oil and energy context, employment, inflation, USD/CAD structure, and CAD cross behavior.",
    conversionCta:
      "Learn how to study CAD through commodity links, central-bank lessons, North American macro context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.bankCanadaMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Bank of Canada policy", detail: "Policy-rate expectations shape CAD's yield support against USD, EUR, JPY, and other majors." },
      { title: "Oil and energy prices", detail: "Energy exports can influence Canada's terms of trade and CAD sentiment." },
      { title: "US economic conditions", detail: "Canada's close trade connection with the United States makes US growth and demand important." },
      { title: "Inflation and jobs data", detail: "Canadian CPI and employment reports can quickly change Bank of Canada expectations." },
    ],
    publicRisks: [
      { risk: "Oil overread", watch: "CAD is oil-sensitive, but USD/CAD can move for dollar reasons too." },
      { risk: "US data spillover", watch: "Strong or weak US data can move CAD even when Canadian data is quiet." },
      { risk: "Rate-path confusion", watch: "Bank of Canada and Federal Reserve expectations must be compared together." },
    ],
    lab: {
      deskBrief:
        "The Canadian Dollar is studied as a North American commodity-linked currency. The Asset Lab connects Bank of Canada policy, Canada-US yield spreads, oil, employment, inflation, trade exposure, and USD/CAD structure.",
      researchQuestion:
        "Is CAD moving because Canada rates changed, oil repriced, US data shifted, or broad USD behavior is controlling the pair?",
      operatingModel:
        "Start with USD/CAD, then compare CAD/JPY, EUR/CAD, and oil context. A useful CAD read separates Canadian strength from US dollar movement and checks energy, rates, and trade together.",
      participants: [
        { name: "Bank of Canada", role: "Policy authority", whyItMatters: "Rate decisions and inflation guidance anchor CAD expectations." },
        { name: "Canadian energy exporters", role: "Commodity-flow source", whyItMatters: "Energy revenue and hedging can affect CAD context." },
        { name: "US consumers and businesses", role: "Trade-demand channel", whyItMatters: "US demand matters because Canada and the United States are closely linked." },
        { name: "North American macro desks", role: "Relative-rate participants", whyItMatters: "USD/CAD often reflects Canada-US policy and growth comparison." },
      ],
      historicalEvents: [
        { year: "1970", title: "CAD returns to floating", detail: "Canada moves back to a floating exchange-rate regime." },
        { year: "1991", title: "Inflation targeting begins", detail: "Canada's monetary-policy framework becomes a central CAD reference." },
        { year: "2008-2009", title: "Oil and crisis shock", detail: "Energy prices and risk stress reshape CAD behavior." },
        { year: "2020s", title: "Inflation and rate cycles dominate", detail: "Bank of Canada policy and US comparison remain central to CAD study." },
      ],
      correlations: [
        { market: "WTI crude oil", relationship: "CAD can react to oil because energy exports affect terms of trade.", learnerNote: "Oil is a context driver, not a full CAD explanation by itself." },
        { market: "US Dollar", relationship: "USD/CAD can move strongly on broad dollar repricing.", learnerNote: "Check CAD crosses before calling a move Canadian strength or weakness." },
        { market: "US economic data", relationship: "Canada's trade link with the US makes US demand important.", learnerNote: "US data can support CAD or dominate it through USD movement." },
      ],
      riskMap: [
        { risk: "USD dominance", watch: "USD/CAD can hide the Canadian side of the story." },
        { risk: "Energy headline risk", watch: "Oil shocks can change CAD behavior quickly." },
        { risk: "Policy divergence", watch: "Compare Bank of Canada and Federal Reserve expectations before forming a CAD view." },
      ],
      researchRoutine: [
        "Check USD/CAD, CAD/JPY, and EUR/CAD for broad CAD confirmation.",
        "Review Bank of Canada expectations, inflation, jobs, and growth data.",
        "Compare Canada-US yield spreads and Federal Reserve pricing.",
        "Check oil and energy-market context without relying on oil alone.",
        "Record whether CAD movement is rates-led, oil-led, US-led, or USD-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 6 Interest Rate Differentials", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Central Bank Divergence Trading", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "swiss-franc",
    name: "Swiss Franc",
    symbol: "CHF",
    assetClass: "forex",
    rank: 8,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Swiss Franc? CHF Market Guide",
    seoDescription: "Understand the Swiss Franc, what moves CHF pairs, and how Lurnava studies SNB policy, safe-haven demand, inflation, and Europe risk.",
    publicHeadline: "The Swiss Franc is a defensive major currency.",
    publicSubheadline:
      "CHF is watched because Swiss National Bank policy, low-inflation credibility, safe-haven demand, European risk, and intervention history can shape franc pairs.",
    plainEnglish:
      "The Swiss Franc is Switzerland's currency. It is often studied as a defensive currency because Switzerland has a strong financial reputation, a small open economy, and a history of currency management concerns.",
    marketRole:
      "CHF helps traders study defensive demand, European stress, low-inflation policy, and relative-rate pressure. EUR/CHF and USD/CHF are the main windows into franc behavior.",
    whyTradersWatch:
      "Traders watch CHF for SNB decisions, inflation, European risk, bank-sector stress, intervention language, and broad demand for defensive currencies.",
    lurnavaMonitorNote:
      "Lurnava studies CHF through SNB policy, Swiss inflation, EUR/CHF structure, USD/CHF behavior, European risk, intervention context, and safe-haven demand.",
    conversionCta:
      "Learn how to study CHF through defensive-flow analysis, central-bank lessons, European macro context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.snbMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "SNB policy", detail: "The SNB policy rate and inflation forecast shape how traders value the franc against EUR and USD." },
      { title: "Safe-haven demand", detail: "CHF can attract demand when investors reduce risk or seek defensive currency exposure." },
      { title: "European risk", detail: "Because Switzerland is closely linked to Europe, euro-area stress often matters for EUR/CHF." },
      { title: "Intervention history", detail: "SNB willingness to use FX operations makes policy language important in franc markets." },
    ],
    publicRisks: [
      { risk: "Policy intervention risk", watch: "SNB language or operations can change franc behavior." },
      { risk: "Low-yield drag", watch: "CHF strength can fade when carry demand favors higher-yielding currencies." },
      { risk: "Europe spillover", watch: "EUR/CHF can react to euro-area stress even without Swiss data." },
    ],
    lab: {
      deskBrief:
        "The Swiss Franc is studied as a defensive, low-inflation, policy-sensitive currency. The Asset Lab connects SNB policy, Swiss inflation, EUR/CHF, USD/CHF, European stress, intervention history, and relative-rate pressure.",
      researchQuestion:
        "Is CHF moving because defensive demand rose, SNB expectations changed, Europe stress shifted, or the counterpart currency is driving the pair?",
      operatingModel:
        "Study CHF through EUR/CHF first, then USD/CHF and CHF/JPY. A useful franc read separates defensive flow from rate-differential pressure and checks SNB policy context before reading the chart alone.",
      participants: [
        { name: "Swiss National Bank", role: "Policy authority", whyItMatters: "SNB policy and FX-operation language directly affect CHF expectations." },
        { name: "Swiss financial institutions", role: "Capital and custody channels", whyItMatters: "Banking and wealth-management flows support CHF's defensive role." },
        { name: "European investors", role: "Regional risk channel", whyItMatters: "Europe stress can push demand toward or away from CHF." },
        { name: "Global macro desks", role: "Safe-haven and relative-rate traders", whyItMatters: "CHF often appears in defensive and funding comparisons." },
      ],
      historicalEvents: [
        { year: "2011", title: "EUR/CHF floor introduced", detail: "The SNB sets a minimum exchange-rate policy during euro-area stress." },
        { year: "2015", title: "EUR/CHF floor removed", detail: "A sudden policy change creates a major CHF repricing lesson." },
        { year: "2020", title: "Pandemic stress", detail: "Defensive demand and policy management become central CHF study areas." },
        { year: "Ongoing", title: "Inflation and intervention language monitored", detail: "Learners track SNB policy rate, inflation forecast, and FX-operation context." },
      ],
      correlations: [
        { market: "Euro", relationship: "EUR/CHF often reflects Europe-specific risk and SNB tolerance.", learnerNote: "Use EUR/CHF to study regional stress, but include SNB policy context." },
        { market: "Gold", relationship: "Both can attract defensive demand during stress.", learnerNote: "Gold and CHF can diverge when rates or dollar behavior dominate." },
        { market: "US Dollar", relationship: "USD/CHF can be affected by both defensive flow and dollar repricing.", learnerNote: "Check EUR/CHF before calling a move pure franc strength." },
      ],
      riskMap: [
        { risk: "SNB surprise", watch: "Policy decisions or FX language can quickly change CHF pricing." },
        { risk: "Safe-haven overread", watch: "Not every CHF move is defensive; rate gaps and EUR movement matter." },
        { risk: "Liquidity squeeze", watch: "CHF pairs can move sharply when crowded positions unwind." },
      ],
      researchRoutine: [
        "Check EUR/CHF, USD/CHF, and CHF/JPY for broad franc behavior.",
        "Review SNB policy, inflation forecast, and FX-operation language.",
        "Compare European risk, Bund yields, and euro behavior.",
        "Check risk appetite and defensive-asset demand.",
        "Record whether CHF movement is SNB-led, safety-led, euro-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Central Bank Divergence Trading", "Safe-Haven Flow Strategy", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "hong-kong-dollar",
    name: "Hong Kong Dollar",
    symbol: "HKD",
    assetClass: "forex",
    rank: 9,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Hong Kong Dollar? HKD Market Guide",
    seoDescription: "Understand the Hong Kong Dollar, the USD-linked exchange-rate system, and how Lurnava studies HKD liquidity, rates, and China links.",
    publicHeadline: "The Hong Kong Dollar is anchored by a USD-linked currency-board system.",
    publicSubheadline:
      "HKD is watched because its linked exchange-rate system, interbank liquidity, HIBOR, China-Hong Kong flows, and USD rate pressure shape a very specific market structure.",
    plainEnglish:
      "The Hong Kong Dollar is Hong Kong's currency. Unlike most freely floating major currencies, HKD is kept within a stated band against the US Dollar through Hong Kong's linked exchange-rate system.",
    marketRole:
      "HKD helps traders study currency-board mechanics, USD rate transmission, Hong Kong liquidity, China-linked capital flows, and the difference between a pegged currency and a free-floating pair.",
    whyTradersWatch:
      "Traders watch HKD for HKMA operations, the convertibility band, interbank liquidity, HIBOR, USD rates, equity-market flows, and offshore China finance.",
    lurnavaMonitorNote:
      "Lurnava studies HKD through the linked exchange-rate system, USD/HKD band behavior, HKMA operations, HIBOR, aggregate balance context, and China-Hong Kong flow pressure.",
    conversionCta:
      "Learn how to study pegged and managed FX systems through policy mechanics, liquidity dashboards, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.hkmaLinkedExchangeRate, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Linked exchange-rate system", detail: "HKD is managed inside a stated band against USD, so learners study the band and HKMA operations first." },
      { title: "HIBOR and liquidity", detail: "Interbank rates and aggregate liquidity help show whether pressure is building inside the system." },
      { title: "US rate transmission", detail: "Because HKD is linked to USD, US rate cycles influence Hong Kong monetary conditions." },
      { title: "China-Hong Kong flows", detail: "Equity, bond, and offshore yuan activity can affect local liquidity and market attention." },
    ],
    publicRisks: [
      { risk: "Free-float mistake", watch: "HKD should not be studied like a normal floating currency pair." },
      { risk: "Rate squeeze", watch: "HIBOR can adjust sharply when the system defends the band." },
      { risk: "China-flow shock", watch: "Cross-border market changes can affect Hong Kong liquidity and sentiment." },
    ],
    lab: {
      deskBrief:
        "The Hong Kong Dollar is studied as a currency-board market, not a standard floating FX pair. The Asset Lab connects USD/HKD band behavior, HKMA operations, HIBOR, aggregate liquidity, US rates, and China-Hong Kong capital-market links.",
      researchQuestion:
        "Is HKD pressure coming from the USD link, local liquidity, US rate transmission, China-Hong Kong flows, or temporary market stress?",
      operatingModel:
        "Start with the linked exchange-rate band. A useful HKD read checks USD/HKD location in the band, HKMA operations, HIBOR, aggregate balance context, and whether the pressure is local or broad USD-driven.",
      participants: [
        { name: "Hong Kong Monetary Authority", role: "Currency-board authority", whyItMatters: "HKMA operations maintain the linked exchange-rate system." },
        { name: "Hong Kong banks", role: "Interbank liquidity channels", whyItMatters: "HIBOR and liquidity conditions transmit pressure inside the system." },
        { name: "US dollar funding markets", role: "Rate anchor", whyItMatters: "USD rates affect Hong Kong monetary conditions through the link." },
        { name: "China-Hong Kong investors", role: "Cross-border flow source", whyItMatters: "Equity, bond, and offshore yuan activity can affect local liquidity." },
      ],
      historicalEvents: [
        { year: "1983", title: "Linked Exchange Rate System begins", detail: "Hong Kong implements the USD-linked currency-board framework." },
        { year: "1997-1998", title: "Asian financial crisis test", detail: "The linked system faces major regional stress." },
        { year: "2005", title: "Convertibility zone refined", detail: "The operating band is clarified around the linked rate." },
        { year: "Ongoing", title: "Band and liquidity monitoring continues", detail: "Learners track USD/HKD, HIBOR, and HKMA operations." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "HKD is linked to USD through the currency-board framework.", learnerNote: "USD rate cycles are central to HKD conditions." },
        { market: "Hong Kong equities", relationship: "Equity inflows and outflows can affect liquidity and local demand.", learnerNote: "Market flow matters more than a simple price comparison." },
        { market: "Offshore yuan", relationship: "Hong Kong is a major offshore China finance center.", learnerNote: "CNH and HKD have different regimes, so study them separately." },
      ],
      riskMap: [
        { risk: "Band misunderstanding", watch: "Students must know the linked system before interpreting USD/HKD." },
        { risk: "Liquidity squeeze", watch: "HIBOR and aggregate balance changes can alter trading conditions." },
        { risk: "Policy-mechanics gap", watch: "HKD analysis should include HKMA operations, not only chart levels." },
      ],
      researchRoutine: [
        "Check USD/HKD location inside the linked exchange-rate band.",
        "Review HKMA operations, aggregate balance context, and HIBOR.",
        "Compare US rate expectations with Hong Kong money-market behavior.",
        "Watch China-Hong Kong equity, bond, and offshore yuan flow context.",
        "Record whether HKD pressure is band-led, liquidity-led, US-rate-led, or flow-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Pegged Currency Framework", "Interest Rate Differential Momentum", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "singapore-dollar",
    name: "Singapore Dollar",
    symbol: "SGD",
    assetClass: "forex",
    rank: 10,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Singapore Dollar? SGD Market Guide",
    seoDescription: "Understand the Singapore Dollar, MAS exchange-rate policy, and how Lurnava studies SGD through NEER, trade, inflation, and Asia FX.",
    publicHeadline: "The Singapore Dollar is managed through an exchange-rate policy band.",
    publicSubheadline:
      "SGD is watched because MAS uses the exchange rate as its main policy tool, so the S$NEER band, trade exposure, inflation, and Asia FX pressure matter.",
    plainEnglish:
      "The Singapore Dollar is Singapore's currency. Singapore is a small, highly open economy, so its central bank manages monetary policy mainly through the exchange rate instead of a typical short-term interest-rate target.",
    marketRole:
      "SGD helps traders study managed-float policy, trade-weighted currency behavior, Asia financial stability, and how imported inflation can shape exchange-rate decisions.",
    whyTradersWatch:
      "Traders watch SGD for MAS policy statements, S$NEER behavior, inflation, trade data, China and regional FX pressure, and USD/SGD structure.",
    lurnavaMonitorNote:
      "Lurnava studies SGD through MAS policy, S$NEER context, USD/SGD and SGD crosses, inflation, trade exposure, regional Asia FX, and liquidity conditions.",
    conversionCta:
      "Learn how to study SGD through managed-float policy, Asia FX links, macro dashboards, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.masMonetaryPolicyFramework, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "MAS exchange-rate policy", detail: "Singapore policy is centered on the exchange-rate band, so MAS decisions directly shape SGD context." },
      { title: "S$NEER behavior", detail: "The trade-weighted SGD index helps learners study policy pressure beyond USD/SGD alone." },
      { title: "Inflation and imported prices", detail: "Imported inflation is important in Singapore's open economy and can affect policy settings." },
      { title: "Regional Asia FX", detail: "CNY, KRW, HKD, and broader Asian risk can affect SGD sentiment and liquidity." },
    ],
    publicRisks: [
      { risk: "Interest-rate framework mistake", watch: "SGD policy is not read the same way as Fed or Bank of England policy." },
      { risk: "USD/SGD overfocus", watch: "USD/SGD can hide the trade-weighted policy story." },
      { risk: "Regional spillover", watch: "Asia FX stress can affect SGD even when Singapore data is steady." },
    ],
    lab: {
      deskBrief:
        "The Singapore Dollar is studied as a managed-float currency with exchange-rate-centered policy. The Asset Lab connects MAS statements, S$NEER behavior, inflation, trade exposure, USD/SGD, regional Asia FX, and liquidity conditions.",
      researchQuestion:
        "Is SGD moving because MAS policy expectations changed, trade-weighted pressure shifted, inflation changed, or regional Asia FX is pulling the market?",
      operatingModel:
        "Study SGD through policy and basket context first. A useful SGD read compares USD/SGD, S$NEER context, MAS language, inflation, and regional FX instead of reading one pair alone.",
      participants: [
        { name: "Monetary Authority of Singapore", role: "Policy authority", whyItMatters: "MAS manages monetary policy mainly through the Singapore dollar exchange-rate path." },
        { name: "Singapore trade and logistics firms", role: "Real-economy flow source", whyItMatters: "Trade exposure makes exchange-rate policy central to inflation and competitiveness." },
        { name: "Regional banks", role: "Asia FX liquidity channels", whyItMatters: "SGD liquidity is linked to broader Asian currency markets." },
        { name: "Global macro desks", role: "Managed-currency observers", whyItMatters: "SGD is often studied as a high-credibility managed-float currency." },
      ],
      historicalEvents: [
        { year: "1981", title: "Exchange-rate-centered policy adopted", detail: "Singapore begins using the exchange rate as the main monetary-policy tool." },
        { year: "1997-1998", title: "Asian financial crisis test", detail: "Regional stress highlights Singapore's policy framework and financial credibility." },
        { year: "2020", title: "Pandemic policy easing", detail: "MAS adjusts policy as global demand and inflation conditions change." },
        { year: "Ongoing", title: "S$NEER monitoring remains central", detail: "Learners track MAS statements, inflation, and trade-weighted SGD behavior." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "USD/SGD reflects dollar pressure but not the whole policy story.", learnerNote: "Always include trade-weighted SGD context." },
        { market: "Chinese Yuan", relationship: "CNY moves can influence regional Asia FX sentiment.", learnerNote: "Check whether SGD is moving with the region or from Singapore-specific policy." },
        { market: "Asian trade data", relationship: "Singapore's open economy makes trade conditions important.", learnerNote: "Trade data helps explain policy pressure, not just price movement." },
      ],
      riskMap: [
        { risk: "Wrong policy lens", watch: "SGD is centered on exchange-rate management, not a normal policy-rate read." },
        { risk: "Basket opacity", watch: "The exact policy band details are not fully public, so use official statements carefully." },
        { risk: "Regional pressure", watch: "Asia FX moves can affect SGD even when local data is calm." },
      ],
      researchRoutine: [
        "Check USD/SGD and relevant SGD crosses.",
        "Review MAS policy statements and S$NEER context.",
        "Compare Singapore inflation and trade data.",
        "Watch CNY, HKD, KRW, and broader Asia FX movement.",
        "Record whether SGD movement is MAS-led, basket-led, inflation-led, or regional-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Managed Currency Framework", "Macro Correlation Mapping", "Terms of Trade Strategy"],
    },
  },
  {
    slug: "swedish-krona",
    name: "Swedish Krona",
    symbol: "SEK",
    assetClass: "forex",
    rank: 11,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Swedish Krona? SEK Market Guide",
    seoDescription: "Understand the Swedish Krona, what moves SEK pairs, and how Lurnava studies Riksbank policy, Europe exposure, inflation, and risk appetite.",
    publicHeadline: "The Swedish Krona is a small open-economy currency tied to Europe and risk appetite.",
    publicSubheadline:
      "SEK is watched because Riksbank policy, Swedish inflation, housing sensitivity, European growth, export demand, and global risk appetite can reshape krona pairs.",
    plainEnglish:
      "The Swedish Krona is Sweden's currency. Sweden is a small, open, export-oriented economy, so SEK often reacts to Riksbank policy, Europe conditions, and changes in global risk appetite.",
    marketRole:
      "SEK helps traders study small open-economy FX, Nordic and European growth links, relative-rate pressure, and how risk appetite affects less dominant major currencies.",
    whyTradersWatch:
      "Traders watch SEK for Riksbank decisions, CPIF inflation, Swedish growth, housing and credit sensitivity, EUR/SEK, USD/SEK, and European risk conditions.",
    lurnavaMonitorNote:
      "Lurnava studies SEK through Riksbank policy, CPIF inflation, EUR/SEK, USD/SEK, Swedish housing sensitivity, European growth, export demand, and risk appetite.",
    conversionCta:
      "Learn how to study SEK through small open-economy analysis, central-bank lessons, European macro context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.riksbankMonetaryPolicy, assetResearchSources.riksbankExchangeRates, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Riksbank policy", detail: "Policy-rate expectations and inflation guidance shape SEK's yield support." },
      { title: "European growth", detail: "Sweden's regional trade exposure makes euro-area demand important for SEK." },
      { title: "Housing and credit sensitivity", detail: "Domestic housing and household-debt conditions can affect growth and policy expectations." },
      { title: "Global risk appetite", detail: "SEK can weaken when investors reduce exposure to smaller open-economy currencies." },
    ],
    publicRisks: [
      { risk: "Liquidity sensitivity", watch: "SEK can move sharply when risk appetite fades or liquidity thins." },
      { risk: "Europe overhang", watch: "EUR/SEK may react to European conditions as much as Swedish data." },
      { risk: "Domestic credit pressure", watch: "Housing and debt concerns can affect the policy and growth read." },
    ],
    lab: {
      deskBrief:
        "The Swedish Krona is studied as a small open-economy currency tied to Riksbank policy, Europe, and risk appetite. The Asset Lab connects CPIF inflation, policy-rate expectations, EUR/SEK, USD/SEK, housing sensitivity, export demand, and liquidity conditions.",
      researchQuestion:
        "Is SEK moving because Riksbank expectations changed, Europe growth shifted, domestic credit risk increased, or global risk appetite weakened?",
      operatingModel:
        "Study SEK through EUR/SEK first, then USD/SEK and regional comparison. A useful krona read checks Riksbank expectations, CPIF inflation, Europe data, housing sensitivity, and liquidity tone.",
      participants: [
        { name: "Sveriges Riksbank", role: "Policy authority", whyItMatters: "Policy-rate decisions and inflation targeting anchor SEK expectations." },
        { name: "Swedish exporters", role: "Trade-flow source", whyItMatters: "Export demand links SEK to European and global growth." },
        { name: "Swedish housing and credit markets", role: "Domestic-risk channel", whyItMatters: "Housing sensitivity can affect growth and policy expectations." },
        { name: "European macro desks", role: "Regional comparison traders", whyItMatters: "EUR/SEK is often read through Sweden-versus-euro-area conditions." },
      ],
      historicalEvents: [
        { year: "1992", title: "Krona floats", detail: "Sweden abandons the fixed exchange-rate defense and the krona becomes free floating." },
        { year: "1993", title: "Inflation-targeting framework begins", detail: "Inflation targeting becomes a core Riksbank policy reference." },
        { year: "2008-2009", title: "Global crisis pressure", detail: "Risk appetite and export demand reshape SEK behavior." },
        { year: "2020s", title: "Inflation and housing sensitivity monitored", detail: "Riksbank policy and domestic credit conditions remain central SEK study areas." },
      ],
      correlations: [
        { market: "Euro", relationship: "EUR/SEK reflects Sweden's link to European growth and rate comparison.", learnerNote: "Use EUR/SEK to reduce broad dollar noise." },
        { market: "Global equities", relationship: "SEK can weaken when risk appetite drops.", learnerNote: "Small open-economy currencies can be sensitive to global positioning." },
        { market: "Swedish housing data", relationship: "Housing sensitivity can affect domestic growth expectations.", learnerNote: "Local credit context matters more for SEK than for many larger currencies." },
      ],
      riskMap: [
        { risk: "Thin-liquidity moves", watch: "SEK can move quickly in stressed markets." },
        { risk: "Europe-driver mix", watch: "Separate Swedish data from euro-area data in EUR/SEK." },
        { risk: "Housing sensitivity", watch: "Domestic credit concerns can change growth and policy expectations." },
      ],
      researchRoutine: [
        "Check EUR/SEK, USD/SEK, and Nordic comparison where useful.",
        "Review Riksbank expectations, CPIF inflation, and growth data.",
        "Compare Sweden with euro-area data and rate expectations.",
        "Check housing, credit, and export-demand context.",
        "Record whether SEK movement is policy-led, Europe-led, risk-led, or credit-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Central Bank Divergence Trading", "Macro Correlation Mapping", "Terms of Trade Strategy"],
    },
  },
  {
    slug: "south-korean-won",
    name: "South Korean Won",
    symbol: "KRW",
    assetClass: "forex",
    rank: 12,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the South Korean Won? KRW Market Guide",
    seoDescription: "Understand the South Korean Won, what moves KRW, and how Lurnava studies Bank of Korea policy, exports, semiconductors, USD, and Asia FX.",
    publicHeadline: "The South Korean Won is a technology-export and Asia-risk currency.",
    publicSubheadline:
      "KRW is watched because Bank of Korea policy, semiconductor exports, foreign equity flows, USD strength, China demand, and regional risk can move the won quickly.",
    plainEnglish:
      "The South Korean Won is South Korea's currency. It is often studied through the country's export cycle, technology sector, Bank of Korea policy, and sensitivity to dollar and Asia FX pressure.",
    marketRole:
      "KRW helps traders study export-driven currency behavior, semiconductor cycles, Asia risk, USD pressure, and how equity flows can affect a major regional currency.",
    whyTradersWatch:
      "Traders watch KRW for Bank of Korea decisions, inflation, export data, semiconductor demand, foreign equity flows, China demand, and USD/KRW behavior.",
    lurnavaMonitorNote:
      "Lurnava studies KRW through Bank of Korea policy, inflation, export data, semiconductor demand, equity flows, USD/KRW, China links, and Asia FX pressure.",
    conversionCta:
      "Learn how to study KRW through export-cycle analysis, central-bank lessons, Asia FX links, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.bankKoreaMonetaryPolicy, assetResearchSources.bankKoreaPolicyBoard, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Bank of Korea policy", detail: "Base-rate expectations and inflation language influence KRW's rate support." },
      { title: "Semiconductor exports", detail: "Technology demand can affect Korea's trade balance, equity flows, and won sentiment." },
      { title: "Foreign equity flows", detail: "International buying or selling of Korean assets can affect currency demand." },
      { title: "China and US dollar pressure", detail: "KRW often reacts to China demand and broad dollar strength because Korea is deeply linked to global trade." },
    ],
    publicRisks: [
      { risk: "Dollar dominance", watch: "USD/KRW can move from broad dollar pressure even when Korea-specific data is stable." },
      { risk: "Export-cycle shock", watch: "Semiconductor and trade data can shift KRW expectations quickly." },
      { risk: "Regional spillover", watch: "CNY, JPY, and broader Asia FX moves can affect KRW behavior." },
    ],
    lab: {
      deskBrief:
        "The South Korean Won is studied as an export-sensitive Asia FX market. The Asset Lab connects Bank of Korea policy, inflation, export data, semiconductor demand, foreign equity flows, China links, USD/KRW, and regional currency pressure.",
      researchQuestion:
        "Is KRW moving because Korea policy changed, exports repriced, equity flows shifted, China demand moved, or broad USD pressure is leading the pair?",
      operatingModel:
        "Study KRW through USD/KRW, export data, equity flows, and Asia FX together. A useful won read separates Korea-specific technology and policy pressure from broad USD or regional movement.",
      participants: [
        { name: "Bank of Korea", role: "Policy authority", whyItMatters: "Base-rate decisions and inflation guidance anchor KRW policy expectations." },
        { name: "Korean exporters", role: "Trade-flow source", whyItMatters: "Semiconductor, auto, shipbuilding, and technology exports affect currency context." },
        { name: "Foreign equity investors", role: "Capital-flow channel", whyItMatters: "Large stock-market flows can influence KRW demand." },
        { name: "Asia FX desks", role: "Regional-risk participants", whyItMatters: "KRW often moves with CNY, JPY, and broad Asia risk conditions." },
      ],
      historicalEvents: [
        { year: "1997-1998", title: "Asian financial crisis", detail: "KRW faces severe pressure and becomes a major regional currency-risk case study." },
        { year: "2008-2009", title: "Global crisis pressure", detail: "USD funding stress and export slowdown reshape won behavior." },
        { year: "2020", title: "Pandemic export shock", detail: "Global demand and policy support become central KRW drivers." },
        { year: "2020s", title: "Semiconductor cycle stays central", detail: "Technology demand and foreign equity flows remain key won study areas." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "USD/KRW is sensitive to broad dollar strength and funding pressure.", learnerNote: "Check DXY and US yields before calling a KRW-specific move." },
        { market: "Semiconductor equities", relationship: "Tech export expectations can connect Korean equities and KRW.", learnerNote: "Equity strength needs flow and export confirmation." },
        { market: "Chinese Yuan", relationship: "KRW often reacts to China growth and regional Asia FX pressure.", learnerNote: "Compare CNY and KRW to identify regional versus Korea-specific drivers." },
      ],
      riskMap: [
        { risk: "Equity-flow reversal", watch: "Foreign buying or selling can change won demand quickly." },
        { risk: "Export-data shock", watch: "Trade and semiconductor surprises can reshape KRW expectations." },
        { risk: "Regional contagion", watch: "CNY or JPY stress can spill into KRW even without Korean news." },
      ],
      researchRoutine: [
        "Check USD/KRW and regional Asia FX behavior.",
        "Review Bank of Korea expectations, inflation, and growth data.",
        "Study export data, semiconductor demand, and foreign equity flows.",
        "Compare CNY, JPY, and DXY context before forming a KRW read.",
        "Record whether KRW movement is policy-led, export-led, flow-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Macro Correlation Mapping", "Central Bank Divergence Trading"],
    },
  },
  {
    slug: "mexican-peso",
    name: "Mexican Peso",
    symbol: "MXN",
    assetClass: "forex",
    rank: 13,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Mexican Peso? MXN Market Guide",
    seoDescription: "Understand the Mexican Peso, what moves MXN pairs, and how Lurnava studies Banxico policy, US links, carry demand, and fiscal risk.",
    publicHeadline: "The Mexican Peso is a liquid emerging-market currency tied closely to the US economy.",
    publicSubheadline:
      "MXN is watched because Banxico policy, US growth, remittances, nearshoring flows, oil and fiscal context, and carry demand can all shape peso pairs.",
    plainEnglish:
      "The Mexican Peso is Mexico's currency. In forex, it is one of the most liquid emerging-market currencies and is often studied through USD/MXN, Mexico-US trade, and interest-rate comparison.",
    marketRole:
      "MXN helps traders study emerging-market carry, North American trade links, US dollar pressure, fiscal credibility, and how a liquid regional currency behaves during risk changes.",
    whyTradersWatch:
      "Traders watch MXN for Banco de Mexico decisions, inflation, US demand, remittances, manufacturing investment, oil and fiscal news, and broad emerging-market appetite.",
    lurnavaMonitorNote:
      "Lurnava studies MXN through Banxico policy, Mexico-US yield spreads, USD/MXN structure, nearshoring flows, remittances, fiscal credibility, oil context, and emerging-market risk appetite.",
    conversionCta:
      "Learn how to study MXN through rate comparison, emerging-market risk lessons, North American macro context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.banxicoMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Banxico policy", detail: "Policy-rate expectations can support or weaken MXN through carry demand and inflation credibility." },
      { title: "US economic link", detail: "Mexico's trade, remittance, and manufacturing links with the United States make US data important for peso context." },
      { title: "Carry demand", detail: "MXN can attract investors when Mexican yields look attractive relative to perceived risk." },
      { title: "Fiscal and political credibility", detail: "Budget plans, energy policy, and institutional confidence can affect foreign demand for peso assets." },
    ],
    publicRisks: [
      { risk: "Carry unwind", watch: "High-yield currency demand can reverse quickly when global risk appetite falls." },
      { risk: "US-dollar dominance", watch: "USD/MXN can move because of broad dollar pressure, not only Mexico-specific news." },
      { risk: "Policy credibility shock", watch: "Fiscal or institutional headlines can change peso risk pricing quickly." },
    ],
    lab: {
      deskBrief:
        "The Mexican Peso is studied as a liquid emerging-market currency with strong North American links. The Asset Lab connects Banxico policy, Mexico-US yield spreads, USD/MXN, remittances, manufacturing investment, fiscal credibility, oil context, and broad risk appetite.",
      researchQuestion:
        "Is MXN moving because Banxico expectations changed, carry demand shifted, US data moved, fiscal risk rose, or broad dollar pressure is controlling the pair?",
      operatingModel:
        "Study MXN through USD/MXN first, then compare emerging-market peers. A useful peso read checks Banxico policy, US data, rate spreads, fiscal context, and whether the move is Mexico-specific or broad dollar-driven.",
      participants: [
        { name: "Banco de Mexico", role: "Policy authority", whyItMatters: "Rate decisions and inflation communication anchor peso credibility." },
        { name: "Mexican exporters and manufacturers", role: "Trade-flow source", whyItMatters: "North American supply chains affect demand for peso exposure." },
        { name: "Remittance channels", role: "Household income flow", whyItMatters: "US-to-Mexico remittances are a recurring macro input." },
        { name: "Global emerging-market investors", role: "Carry and bond-market participants", whyItMatters: "Foreign demand for peso assets can shift quickly with risk appetite." },
      ],
      historicalEvents: [
        { year: "1994-1995", title: "Tequila crisis", detail: "A balance-of-payments shock becomes a core peso risk-history reference." },
        { year: "2008-2009", title: "Global crisis pressure", detail: "US recession and risk reduction hit Mexico-linked markets." },
        { year: "2020", title: "Pandemic and oil shock", detail: "Risk appetite, energy, and US demand become central MXN drivers." },
        { year: "2020s", title: "Nearshoring theme expands", detail: "Manufacturing investment and North American supply chains become key peso study areas." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "USD/MXN reacts strongly to broad dollar movement.", learnerNote: "Check DXY and US yields before calling a peso-specific move." },
        { market: "US manufacturing and demand", relationship: "Mexico's export cycle is closely tied to the United States.", learnerNote: "US data can affect MXN through trade and remittance channels." },
        { market: "Emerging-market carry basket", relationship: "MXN often moves with high-yield emerging-market currencies.", learnerNote: "Carry strength can fade quickly if risk appetite weakens." },
      ],
      riskMap: [
        { risk: "Crowded carry", watch: "A popular yield trade can unwind faster than local fundamentals change." },
        { risk: "Fiscal credibility", watch: "Budget, energy, or institutional concerns can reprice risk." },
        { risk: "US spillover", watch: "US data can dominate USD/MXN even when Mexico data is quiet." },
      ],
      researchRoutine: [
        "Check USD/MXN structure and broad emerging-market currency behavior.",
        "Review Banxico expectations, inflation, and Mexico-US rate spreads.",
        "Compare US growth, manufacturing, and remittance context.",
        "Check fiscal, energy, and policy-credibility headlines.",
        "Record whether MXN movement is rates-led, carry-led, US-led, fiscal-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 6 Interest Rate Differentials", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Carry Trade Strategy", "Central Bank Divergence Trading", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "new-zealand-dollar",
    name: "New Zealand Dollar",
    symbol: "NZD",
    assetClass: "forex",
    rank: 14,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the New Zealand Dollar? NZD Market Guide",
    seoDescription: "Understand the New Zealand Dollar, what moves NZD pairs, and how Lurnava studies RBNZ policy, dairy exports, China demand, and risk appetite.",
    publicHeadline: "The New Zealand Dollar is a small open-economy currency with strong dairy and risk links.",
    publicSubheadline:
      "NZD is watched because RBNZ policy, dairy prices, China demand, tourism, housing sensitivity, and global risk appetite can reshape kiwi pairs.",
    plainEnglish:
      "The New Zealand Dollar is New Zealand's currency. In forex, it is often called the kiwi and is studied through RBNZ policy, commodity exports, China links, and growth-sensitive market behavior.",
    marketRole:
      "NZD helps traders study small open-economy FX, commodity income, China demand, rate differentials, and how less dominant major currencies behave during risk changes.",
    whyTradersWatch:
      "Traders watch NZD for RBNZ decisions, inflation, employment, dairy auctions, China activity, tourism, housing data, AUD/NZD, and NZD/USD structure.",
    lurnavaMonitorNote:
      "Lurnava studies NZD through RBNZ policy, OCR expectations, dairy and agriculture exports, China demand, housing sensitivity, AUD/NZD comparison, NZD/USD structure, and risk appetite.",
    conversionCta:
      "Learn how to study NZD through small-economy macro lessons, commodity links, central-bank comparison, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.rbnzMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "RBNZ policy", detail: "Official Cash Rate expectations shape NZD's yield support against USD, AUD, JPY, and other currencies." },
      { title: "Dairy and export income", detail: "Dairy prices and agricultural demand affect New Zealand's terms-of-trade story." },
      { title: "China and Australia links", detail: "China demand and AUD/NZD comparison help learners separate regional themes." },
      { title: "Housing and domestic demand", detail: "Housing sensitivity can affect growth, inflation, and RBNZ expectations." },
    ],
    publicRisks: [
      { risk: "Small-market sensitivity", watch: "NZD can move sharply when liquidity thins or risk appetite fades." },
      { risk: "Commodity overread", watch: "Dairy matters, but NZD also needs rate, China, and dollar context." },
      { risk: "AUD/NZD confusion", watch: "AUD/NZD can move because Australia changes, New Zealand changes, or both." },
    ],
    lab: {
      deskBrief:
        "The New Zealand Dollar is studied as a small open-economy, commodity-linked, and risk-sensitive currency. The Asset Lab connects RBNZ policy, OCR expectations, dairy exports, China demand, housing conditions, AUD/NZD comparison, and NZD/USD structure.",
      researchQuestion:
        "Is NZD moving because RBNZ expectations changed, dairy income shifted, China demand moved, housing data changed, or global risk appetite is leading?",
      operatingModel:
        "Study NZD through NZD/USD and AUD/NZD together. A useful kiwi read checks RBNZ expectations, dairy and export data, China demand, housing sensitivity, and whether the move is broad NZD strength or counterpart weakness.",
      participants: [
        { name: "Reserve Bank of New Zealand", role: "Policy authority", whyItMatters: "OCR decisions and inflation guidance anchor NZD expectations." },
        { name: "Dairy and agriculture exporters", role: "Trade-flow source", whyItMatters: "Export prices and volumes affect national income expectations." },
        { name: "New Zealand banks and mortgage borrowers", role: "Domestic-demand channel", whyItMatters: "Housing sensitivity can affect growth and policy expectations." },
        { name: "Asia-Pacific macro desks", role: "Regional comparison traders", whyItMatters: "AUD/NZD and China-linked themes help frame NZD behavior." },
      ],
      historicalEvents: [
        { year: "1985", title: "NZD floats", detail: "New Zealand moves to a floating exchange-rate system." },
        { year: "1990s", title: "Inflation targeting becomes a reference", detail: "New Zealand becomes known for a formal inflation-targeting approach." },
        { year: "2008-2009", title: "Global crisis pressure", detail: "Risk appetite and export demand reshape NZD behavior." },
        { year: "2020s", title: "Housing and inflation cycles dominate", detail: "RBNZ policy, housing sensitivity, and external demand remain key study areas." },
      ],
      correlations: [
        { market: "Australian Dollar", relationship: "AUD/NZD compares two commodity-linked Asia-Pacific economies.", learnerNote: "Use AUD/NZD to separate regional from local drivers." },
        { market: "Dairy prices", relationship: "Dairy export income can affect NZD terms-of-trade expectations.", learnerNote: "Commodity context needs confirmation from rates and demand." },
        { market: "Chinese Yuan", relationship: "China demand can affect Asia-Pacific growth currencies.", learnerNote: "Check CNY and China data before treating NZD movement as purely domestic." },
      ],
      riskMap: [
        { risk: "Thin-liquidity reversal", watch: "NZD can reverse quickly when global risk appetite changes." },
        { risk: "Housing sensitivity", watch: "Mortgage and housing data can alter RBNZ expectations." },
        { risk: "Regional spillover", watch: "AUD, CNY, and commodity moves can influence NZD." },
      ],
      researchRoutine: [
        "Check NZD/USD, AUD/NZD, and NZD/JPY structure.",
        "Review RBNZ expectations, inflation, jobs, and housing data.",
        "Compare dairy prices, export context, and China demand.",
        "Check risk appetite and Asia-Pacific session behavior.",
        "Record whether NZD movement is RBNZ-led, commodity-led, China-led, housing-led, or risk-led.",
      ],
      relatedLessons: ["Level 4 Sessions", "Level 6 Central Banks", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Carry Trade Strategy", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "norwegian-krone",
    name: "Norwegian Krone",
    symbol: "NOK",
    assetClass: "forex",
    rank: 15,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Norwegian Krone? NOK Market Guide",
    seoDescription: "Understand the Norwegian Krone, what moves NOK pairs, and how Lurnava studies Norges Bank policy, oil, gas, Europe, and liquidity.",
    publicHeadline: "The Norwegian Krone is an energy-linked Nordic currency.",
    publicSubheadline:
      "NOK is watched because Norges Bank policy, oil and gas income, European growth, sovereign-wealth flows, liquidity, and global risk appetite can move krone pairs.",
    plainEnglish:
      "The Norwegian Krone is Norway's currency. In forex, it is often studied through oil and gas exposure, Norges Bank policy, Europe links, and the way smaller currencies behave when liquidity changes.",
    marketRole:
      "NOK helps traders study energy-linked currency behavior, Nordic macro conditions, rate differentials, European demand, and the extra liquidity risk that can appear in smaller FX markets.",
    whyTradersWatch:
      "Traders watch NOK for Norges Bank decisions, inflation, oil and gas prices, EUR/NOK, USD/NOK, sovereign-wealth-flow context, and European risk.",
    lurnavaMonitorNote:
      "Lurnava studies NOK through Norges Bank policy, inflation, petroleum income, gas and oil prices, EUR/NOK structure, USD/NOK behavior, fiscal-flow context, and liquidity conditions.",
    conversionCta:
      "Learn how to study NOK through energy links, central-bank lessons, Nordic macro context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.norgesBankPolicyStrategy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Norges Bank policy", detail: "Policy-rate expectations and inflation forecasts shape NOK's yield support." },
      { title: "Oil and gas prices", detail: "Energy income affects Norway's terms of trade and market attention around NOK." },
      { title: "European growth", detail: "Norway's regional trade and energy links make Europe demand important." },
      { title: "Liquidity and positioning", detail: "NOK can move sharply when market liquidity is thin or crowded positions are reduced." },
    ],
    publicRisks: [
      { risk: "Energy overread", watch: "NOK is energy-linked, but EUR/NOK and USD/NOK also respond to rates and liquidity." },
      { risk: "Liquidity sensitivity", watch: "Smaller currency markets can move quickly during risk stress." },
      { risk: "Europe-demand shock", watch: "Weak European growth can affect NOK even when local data looks steady." },
    ],
    lab: {
      deskBrief:
        "The Norwegian Krone is studied as an energy-linked Nordic currency with meaningful liquidity sensitivity. The Asset Lab connects Norges Bank policy, inflation, oil and gas prices, petroleum revenue context, EUR/NOK, USD/NOK, Europe demand, and risk appetite.",
      researchQuestion:
        "Is NOK moving because Norges Bank expectations changed, energy prices shifted, Europe demand moved, or liquidity and risk appetite are controlling the pair?",
      operatingModel:
        "Study NOK through EUR/NOK first, then USD/NOK and oil/gas context. A useful krone read checks Norges Bank expectations, energy prices, Europe data, and whether the movement is NOK-specific or a broader liquidity event.",
      participants: [
        { name: "Norges Bank", role: "Policy authority", whyItMatters: "Policy-rate decisions and inflation strategy anchor NOK expectations." },
        { name: "Norwegian energy sector", role: "Trade-income source", whyItMatters: "Oil and gas revenue affects terms-of-trade context." },
        { name: "Government Pension Fund Global", role: "Fiscal and savings backdrop", whyItMatters: "Norway's petroleum wealth framework shapes macro credibility." },
        { name: "Nordic and European FX desks", role: "Liquidity participants", whyItMatters: "NOK can be sensitive to regional positioning and liquidity." },
      ],
      historicalEvents: [
        { year: "1990", title: "Petroleum wealth framework develops", detail: "Energy revenue becomes central to Norway's macro identity." },
        { year: "2001", title: "Inflation-targeting framework begins", detail: "Norges Bank policy becomes a core NOK study reference." },
        { year: "2014-2016", title: "Oil-price decline pressures NOK", detail: "Energy-linked currency behavior becomes clear during the oil downturn." },
        { year: "2022-2026", title: "Energy and inflation cycles dominate", detail: "Gas prices, inflation, and Europe demand remain central NOK study areas." },
      ],
      correlations: [
        { market: "Oil and gas", relationship: "Energy prices can affect NOK through Norway's export income.", learnerNote: "Energy is important, but the pair also needs rate and liquidity context." },
        { market: "Euro", relationship: "EUR/NOK is a key regional comparison.", learnerNote: "Use EUR/NOK to study Norway-versus-Europe pressure." },
        { market: "Global risk appetite", relationship: "NOK can weaken when smaller currency exposure is reduced.", learnerNote: "Liquidity can dominate during stress." },
      ],
      riskMap: [
        { risk: "Thin-liquidity move", watch: "NOK can overshoot when participation is light." },
        { risk: "Single-driver mistake", watch: "Oil alone does not explain every NOK move." },
        { risk: "Europe spillover", watch: "Regional growth and euro behavior can affect EUR/NOK strongly." },
      ],
      researchRoutine: [
        "Check EUR/NOK, USD/NOK, and NOK/SEK when useful.",
        "Review Norges Bank expectations, inflation, and growth data.",
        "Compare oil, gas, and European energy-demand context.",
        "Check liquidity tone and global risk appetite.",
        "Record whether NOK movement is policy-led, energy-led, Europe-led, or liquidity-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 8 Cross-Market Correlation", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Terms of Trade Strategy", "Macro Correlation Mapping", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "indian-rupee",
    name: "Indian Rupee",
    symbol: "INR",
    assetClass: "forex",
    rank: 16,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Indian Rupee? INR Market Guide",
    seoDescription: "Understand the Indian Rupee, what moves INR, and how Lurnava studies RBI policy, oil imports, capital flows, USD strength, and reserves.",
    publicHeadline: "The Indian Rupee is a large emerging-market currency shaped by policy, oil, and capital flows.",
    publicSubheadline:
      "INR is watched because RBI policy, oil imports, inflation, current-account pressure, foreign investment, reserves, and USD strength can all affect rupee behavior.",
    plainEnglish:
      "The Indian Rupee is India's currency. In forex, it is studied through Reserve Bank of India policy, oil-import costs, foreign investment flows, growth, inflation, and how actively authorities manage market stability.",
    marketRole:
      "INR helps traders study a large emerging-market currency where domestic growth, imported energy, foreign capital, policy liquidity, and reserve management all matter.",
    whyTradersWatch:
      "Traders watch INR for RBI decisions, inflation, oil prices, current-account pressure, equity and bond flows, foreign-exchange reserves, and broad USD behavior.",
    lurnavaMonitorNote:
      "Lurnava studies INR through RBI policy, repo-rate expectations, liquidity operations, oil-import costs, USD/INR structure, capital flows, reserves, inflation, and current-account context.",
    conversionCta:
      "Learn how to study INR through emerging-market macro lessons, policy liquidity, energy-import context, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.rbiMonetaryPolicyCommunication, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "RBI policy and liquidity", detail: "Repo-rate decisions and liquidity operations shape rupee funding and money-market conditions." },
      { title: "Oil-import costs", detail: "India imports large energy volumes, so oil prices can affect inflation and external balances." },
      { title: "Capital flows", detail: "Foreign equity, bond, and direct investment flows can change demand for rupees." },
      { title: "Reserve management", detail: "RBI reserve use and market operations can affect how smoothly INR adjusts to pressure." },
    ],
    publicRisks: [
      { risk: "Imported inflation", watch: "Oil and commodity price increases can pressure inflation and external balances." },
      { risk: "Capital-flow reversal", watch: "Foreign selling of Indian assets can weaken rupee demand." },
      { risk: "Managed-adjustment assumption", watch: "INR may move gradually until pressure becomes large enough to change the market read." },
    ],
    lab: {
      deskBrief:
        "The Indian Rupee is studied as a large emerging-market currency shaped by policy liquidity, energy imports, capital flows, and reserve management. The Asset Lab connects RBI policy, repo-rate expectations, oil prices, inflation, USD/INR, current-account pressure, foreign investment, and reserves.",
      researchQuestion:
        "Is INR moving because RBI expectations changed, oil pressure rose, capital flows shifted, USD strength increased, or reserve management is smoothing the move?",
      operatingModel:
        "Study INR through USD/INR, oil, reserves, and flow context together. A useful rupee read separates broad dollar pressure from India-specific inflation, energy, and capital-flow pressure.",
      participants: [
        { name: "Reserve Bank of India", role: "Policy and liquidity authority", whyItMatters: "Repo-rate decisions, liquidity operations, and FX management shape INR context." },
        { name: "Indian energy importers", role: "Dollar-demand source", whyItMatters: "Oil imports create recurring foreign-currency demand." },
        { name: "Foreign portfolio investors", role: "Capital-flow channel", whyItMatters: "Equity and bond flows can affect rupee demand." },
        { name: "Indian corporates", role: "Hedging and trade participants", whyItMatters: "Importers and exporters affect practical currency demand." },
      ],
      historicalEvents: [
        { year: "1991", title: "Balance-of-payments crisis", detail: "External-pressure history becomes a core rupee study reference." },
        { year: "2013", title: "Taper-tantrum pressure", detail: "Emerging-market capital-flow risk hits INR and other currencies." },
        { year: "2016", title: "Monetary-policy committee framework begins", detail: "India formalizes a clearer monetary-policy decision structure." },
        { year: "2020s", title: "Oil, reserves, and index-flow context expand", detail: "Energy costs, reserve management, and portfolio flows remain central INR study areas." },
      ],
      correlations: [
        { market: "Crude oil", relationship: "Higher oil can pressure INR through import costs and inflation.", learnerNote: "Oil impact depends on dollar strength and domestic policy context." },
        { market: "US Dollar", relationship: "USD/INR is highly sensitive to broad dollar and US yield pressure.", learnerNote: "Check DXY and US yields before calling a rupee-specific move." },
        { market: "Indian equities and bonds", relationship: "Foreign inflows can support INR, while outflows can weaken demand.", learnerNote: "Flow direction matters more than index direction alone." },
      ],
      riskMap: [
        { risk: "Oil shock", watch: "Energy-price jumps can change inflation and current-account expectations." },
        { risk: "Flow reversal", watch: "Foreign portfolio outflows can pressure INR quickly." },
        { risk: "Policy smoothing misread", watch: "A gradual move can still contain meaningful pressure if reserves are being used." },
      ],
      researchRoutine: [
        "Check USD/INR structure and broad dollar behavior.",
        "Review RBI expectations, liquidity operations, and inflation data.",
        "Compare oil prices, current-account context, and import pressure.",
        "Check foreign equity and bond flow direction.",
        "Record whether INR movement is RBI-led, oil-led, flow-led, reserve-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Terms of Trade Strategy", "Central Bank Divergence Trading", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "turkish-lira",
    name: "Turkish Lira",
    symbol: "TRY",
    assetClass: "forex",
    rank: 17,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Turkish Lira? TRY Market Guide",
    seoDescription: "Understand the Turkish Lira, what moves TRY, and how Lurnava studies TCMB policy, inflation, reserves, credibility, and dollarization risk.",
    publicHeadline: "The Turkish Lira is a high-inflation currency where policy credibility matters deeply.",
    publicSubheadline:
      "TRY is watched because TCMB policy, inflation expectations, reserve adequacy, dollarization, external financing, and political credibility can dominate lira behavior.",
    plainEnglish:
      "The Turkish Lira is Turkiye's currency. It needs extra caution because inflation, policy credibility, reserve pressure, and local dollar demand can matter as much as ordinary rate comparison.",
    marketRole:
      "TRY helps traders study high-inflation FX, policy credibility, real-rate pressure, reserve management, and the difference between a tradable idea and a fragile macro environment.",
    whyTradersWatch:
      "Traders watch TRY for TCMB decisions, inflation, real rates, reserves, current-account pressure, local foreign-currency demand, and policy credibility.",
    lurnavaMonitorNote:
      "Lurnava studies TRY through TCMB policy, inflation expectations, real rates, USD/TRY structure, reserves, dollarization, external financing needs, and credibility risk.",
    conversionCta:
      "Learn how to study TRY through high-inflation macro lessons, policy credibility checks, risk mapping, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.tcmbPolicyFramework, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "TCMB policy", detail: "Interest-rate decisions, liquidity tools, and policy language shape whether markets trust the inflation fight." },
      { title: "Inflation expectations", detail: "Persistent inflation can weaken currency confidence and affect local pricing behavior." },
      { title: "Reserves and external financing", detail: "Foreign-exchange reserves and external funding needs affect lira resilience during stress." },
      { title: "Dollarization behavior", detail: "Local demand for foreign currency can pressure TRY even when policy rates are high." },
    ],
    publicRisks: [
      { risk: "Credibility gap", watch: "High rates may not support TRY if markets doubt the policy path." },
      { risk: "Inflation spiral", watch: "Currency weakness can feed inflation, and inflation can weaken currency confidence." },
      { risk: "Liquidity and access risk", watch: "Trading conditions can change when policy tools or market restrictions shift." },
    ],
    lab: {
      deskBrief:
        "The Turkish Lira is studied as a high-inflation and credibility-sensitive currency. The Asset Lab connects TCMB policy, inflation expectations, real rates, USD/TRY, reserves, dollarization, external financing, political credibility, and market-access risk.",
      researchQuestion:
        "Is TRY moving because policy credibility changed, inflation pressure rose, reserves shifted, local dollar demand increased, or broad USD pressure is adding stress?",
      operatingModel:
        "Study TRY with a risk-first lens. A useful lira read checks TCMB policy, real rates, inflation trend, reserves, local dollar demand, and whether market access or liquidity conditions are changing.",
      participants: [
        { name: "Central Bank of the Republic of Turkiye", role: "Policy authority", whyItMatters: "Policy decisions and inflation strategy shape TRY credibility." },
        { name: "Turkish households and businesses", role: "Local currency-demand channel", whyItMatters: "Dollarization behavior can affect lira stability." },
        { name: "External creditors and importers", role: "Foreign-currency demand source", whyItMatters: "External financing needs can pressure reserves and TRY." },
        { name: "Global emerging-market investors", role: "Risk-pricing participants", whyItMatters: "Foreign participation changes with credibility and access conditions." },
      ],
      historicalEvents: [
        { year: "2001", title: "Free-floating regime after crisis", detail: "Turkiye shifts away from an exchange-rate-based program after severe stress." },
        { year: "2005", title: "Currency redenomination", detail: "Six zeros are removed from the lira after a long high-inflation history." },
        { year: "2018-2022", title: "Currency and inflation stress", detail: "TRY weakness and inflation become central risk lessons." },
        { year: "2023-2026", title: "Policy normalization and credibility monitored", detail: "Markets track whether policy tightening and communication rebuild confidence." },
      ],
      correlations: [
        { market: "US Dollar", relationship: "USD/TRY can rise when dollar strength meets local credibility concerns.", learnerNote: "Broad USD pressure can worsen local stress." },
        { market: "Turkish inflation", relationship: "Inflation expectations and lira confidence are closely linked.", learnerNote: "Real rates matter more than nominal rates alone." },
        { market: "Emerging-market risk", relationship: "TRY can react with other fragile high-yield currencies.", learnerNote: "Compare TRY with peers, but keep local credibility separate." },
      ],
      riskMap: [
        { risk: "Real-rate mismatch", watch: "High nominal rates may not be supportive if inflation expectations are higher." },
        { risk: "Reserve pressure", watch: "Reserve changes can affect market confidence." },
        { risk: "Policy-access risk", watch: "Market rules and liquidity tools can change practical trading conditions." },
      ],
      researchRoutine: [
        "Check USD/TRY structure and broad dollar pressure.",
        "Review TCMB decisions, inflation trend, and real-rate context.",
        "Compare reserves, external financing, and dollarization behavior.",
        "Check emerging-market risk appetite and policy-credibility headlines.",
        "Record whether TRY movement is policy-led, inflation-led, reserve-led, credibility-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Central Bank Divergence Trading", "Macro Correlation Mapping", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "south-african-rand",
    name: "South African Rand",
    symbol: "ZAR",
    assetClass: "forex",
    rank: 18,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the South African Rand? ZAR Market Guide",
    seoDescription: "Understand the South African Rand, what moves ZAR, and how Lurnava studies SARB policy, commodities, electricity risk, China demand, and fiscal context.",
    publicHeadline: "The South African Rand is a commodity-linked emerging-market currency with strong domestic-risk sensitivity.",
    publicSubheadline:
      "ZAR is watched because SARB policy, metals prices, China demand, electricity and logistics constraints, fiscal credibility, and global risk appetite can all move the rand.",
    plainEnglish:
      "The South African Rand is South Africa's currency. In forex, it is studied through commodity exports, South African Reserve Bank policy, domestic infrastructure risk, fiscal credibility, and broad emerging-market appetite.",
    marketRole:
      "ZAR helps traders study commodity-linked emerging-market FX, domestic constraint risk, China demand, carry behavior, and how a liquid regional currency reacts to global stress.",
    whyTradersWatch:
      "Traders watch ZAR for SARB decisions, inflation, gold and platinum-group metals, China demand, electricity supply, fiscal plans, USD/ZAR, and emerging-market risk appetite.",
    lurnavaMonitorNote:
      "Lurnava studies ZAR through SARB policy, repo-rate expectations, inflation, USD/ZAR structure, metals prices, China demand, electricity and logistics constraints, fiscal credibility, and risk appetite.",
    conversionCta:
      "Learn how to study ZAR through commodity links, domestic-risk mapping, central-bank lessons, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.sarbHome, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "SARB policy", detail: "Repo-rate expectations and inflation credibility affect rand yield support." },
      { title: "Metals and commodity demand", detail: "Gold, platinum-group metals, and mining exports affect South Africa's terms-of-trade context." },
      { title: "Electricity and logistics constraints", detail: "Infrastructure stress can affect growth, exports, and investor confidence." },
      { title: "Fiscal and political credibility", detail: "Debt, budget, and policy stability can change foreign demand for rand assets." },
    ],
    publicRisks: [
      { risk: "Infrastructure shock", watch: "Power or logistics disruption can quickly affect growth and export confidence." },
      { risk: "Commodity reversal", watch: "Metals weakness can pressure ZAR when risk appetite is already fragile." },
      { risk: "Emerging-market unwind", watch: "ZAR can weaken when global investors reduce risk exposure." },
    ],
    lab: {
      deskBrief:
        "The South African Rand is studied as a commodity-linked emerging-market currency with domestic constraint risk. The Asset Lab connects SARB policy, inflation, USD/ZAR, gold and platinum-group metals, China demand, electricity and logistics constraints, fiscal credibility, and global risk appetite.",
      researchQuestion:
        "Is ZAR moving because SARB expectations changed, commodities repriced, domestic constraints worsened, fiscal risk rose, or broad emerging-market risk appetite shifted?",
      operatingModel:
        "Study ZAR through USD/ZAR, commodity context, and domestic-risk checks. A useful rand read separates broad dollar pressure from South Africa-specific policy, infrastructure, fiscal, and export drivers.",
      participants: [
        { name: "South African Reserve Bank", role: "Policy authority", whyItMatters: "Repo-rate decisions and inflation communication anchor rand expectations." },
        { name: "Mining exporters", role: "Commodity-flow source", whyItMatters: "Metals exports affect income and foreign-currency flow." },
        { name: "South African Treasury", role: "Fiscal credibility source", whyItMatters: "Debt and budget policy influence investor confidence." },
        { name: "Global emerging-market investors", role: "Capital-flow participants", whyItMatters: "Foreign demand can shift quickly with risk appetite." },
      ],
      historicalEvents: [
        { year: "1994", title: "Democratic transition", detail: "South Africa's modern financial-market identity enters a new period." },
        { year: "2001", title: "Rand volatility episode", detail: "Sharp currency weakness becomes a key risk-history reference." },
        { year: "2008-2009", title: "Commodity and crisis shock", detail: "Global stress and commodity weakness pressure ZAR." },
        { year: "2020s", title: "Infrastructure and fiscal risks monitored", detail: "Electricity, logistics, and fiscal credibility remain central rand study areas." },
      ],
      correlations: [
        { market: "Gold and platinum-group metals", relationship: "Metals demand can affect South Africa's export income.", learnerNote: "Commodity strength needs confirmation from risk and domestic context." },
        { market: "Chinese Yuan", relationship: "China demand affects commodity-linked emerging markets.", learnerNote: "Check whether ZAR is moving with broad China-sensitive assets." },
        { market: "US Dollar", relationship: "USD/ZAR can move strongly on broad dollar and US yield pressure.", learnerNote: "Separate dollar pressure from rand-specific weakness." },
      ],
      riskMap: [
        { risk: "Domestic constraint risk", watch: "Power, logistics, and policy execution can affect investor confidence." },
        { risk: "Commodity concentration", watch: "Metals moves can amplify rand volatility." },
        { risk: "Fiscal credibility", watch: "Debt and budget concerns can change ZAR risk pricing." },
      ],
      researchRoutine: [
        "Check USD/ZAR and broad emerging-market currency behavior.",
        "Review SARB expectations, inflation, and local yield context.",
        "Compare metals prices, China demand, and export conditions.",
        "Check electricity, logistics, fiscal, and political-risk context.",
        "Record whether ZAR movement is policy-led, commodity-led, domestic-risk-led, fiscal-led, or dollar-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 8 Cross-Market Correlation", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Terms of Trade Strategy", "Macro Correlation Mapping", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "brazilian-real",
    name: "Brazilian Real",
    symbol: "BRL",
    assetClass: "forex",
    rank: 19,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Brazilian Real? BRL Market Guide",
    seoDescription: "Understand the Brazilian Real, what moves BRL, and how Lurnava studies BCB policy, Selic rates, commodities, fiscal credibility, and China demand.",
    publicHeadline: "The Brazilian Real is a high-attention Latin American currency driven by rates, commodities, and fiscal trust.",
    publicSubheadline:
      "BRL is watched because BCB policy, Selic-rate expectations, inflation, fiscal credibility, commodities, China demand, and global risk appetite can reshape real pairs.",
    plainEnglish:
      "The Brazilian Real is Brazil's currency. In forex, it is studied through Brazil's central-bank policy, commodity exports, fiscal policy, inflation, China demand, and the behavior of USD/BRL.",
    marketRole:
      "BRL helps traders study Latin American FX, high-rate cycles, commodity-linked growth, fiscal credibility, and how emerging-market currencies react when global capital flows change.",
    whyTradersWatch:
      "Traders watch BRL for Banco Central do Brasil decisions, Selic-rate expectations, inflation, fiscal headlines, iron ore, soybeans, oil, China demand, and USD/BRL structure.",
    lurnavaMonitorNote:
      "Lurnava studies BRL through BCB policy, Selic-rate expectations, inflation, USD/BRL structure, fiscal credibility, commodities, China demand, equity flows, and broad emerging-market appetite.",
    conversionCta:
      "Learn how to study BRL through Latin American macro lessons, commodity links, fiscal-risk mapping, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.bcbMonetaryPolicy, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "BCB policy and Selic expectations", detail: "Brazil's policy-rate path can attract or reduce carry demand for BRL." },
      { title: "Fiscal credibility", detail: "Budget discipline and debt expectations affect foreign demand for Brazilian assets." },
      { title: "Commodity exports", detail: "Iron ore, soybeans, oil, and agricultural exports affect Brazil's trade and growth outlook." },
      { title: "China demand", detail: "China is important for Brazilian commodity demand, so China data can affect BRL." },
    ],
    publicRisks: [
      { risk: "Fiscal headline shock", watch: "Budget and debt concerns can weaken BRL even when rates are high." },
      { risk: "Commodity reversal", watch: "A commodity downturn can reduce terms-of-trade support." },
      { risk: "Carry unwind", watch: "High-rate demand can reverse when global risk appetite drops." },
    ],
    lab: {
      deskBrief:
        "The Brazilian Real is studied as a Latin American currency shaped by policy rates, fiscal credibility, commodities, and China demand. The Asset Lab connects BCB policy, Selic expectations, inflation, USD/BRL, fiscal rules, exports, equity flows, and emerging-market risk appetite.",
      researchQuestion:
        "Is BRL moving because BCB expectations changed, fiscal credibility shifted, commodities repriced, China demand moved, or global carry appetite changed?",
      operatingModel:
        "Study BRL through USD/BRL, rate expectations, fiscal context, and commodity demand together. A useful real read checks whether high rates are being supported or weakened by fiscal and external conditions.",
      participants: [
        { name: "Banco Central do Brasil", role: "Policy authority", whyItMatters: "Selic decisions and inflation communication anchor BRL expectations." },
        { name: "Brazilian Treasury and fiscal policymakers", role: "Credibility source", whyItMatters: "Debt and budget expectations can dominate BRL risk pricing." },
        { name: "Commodity exporters", role: "Trade-flow source", whyItMatters: "Agriculture, mining, and energy exports affect BRL context." },
        { name: "Global emerging-market investors", role: "Carry and capital-flow participants", whyItMatters: "Foreign demand changes with rates, fiscal trust, and risk appetite." },
      ],
      historicalEvents: [
        { year: "1994", title: "Real Plan launches", detail: "Brazil introduces the real as part of a stabilization program." },
        { year: "1999", title: "BRL floats", detail: "Brazil moves to a floating exchange-rate regime after pressure on the currency." },
        { year: "2015-2016", title: "Recession and political stress", detail: "Fiscal and political risk become central BRL study areas." },
        { year: "2020s", title: "Selic and fiscal credibility cycles dominate", detail: "High-rate policy and budget credibility remain key real drivers." },
      ],
      correlations: [
        { market: "Chinese Yuan", relationship: "China demand influences Brazilian commodity exports.", learnerNote: "Check China data and commodity prices before reading BRL in isolation." },
        { market: "Iron ore and soybeans", relationship: "Key exports can affect trade-income expectations.", learnerNote: "Commodity links are useful only with fiscal and rate context." },
        { market: "Emerging-market carry", relationship: "BRL can attract carry demand when risk appetite is supportive.", learnerNote: "Carry can reverse quickly when global positioning changes." },
      ],
      riskMap: [
        { risk: "Fiscal-risk repricing", watch: "Budget and debt concerns can overpower rate support." },
        { risk: "Commodity dependence", watch: "Export-price weakness can reduce BRL support." },
        { risk: "Political volatility", watch: "Policy uncertainty can change foreign-demand assumptions." },
      ],
      researchRoutine: [
        "Check USD/BRL and Latin American FX behavior.",
        "Review BCB expectations, Selic path, inflation, and local yields.",
        "Compare fiscal headlines, budget rules, and debt expectations.",
        "Check commodities, China demand, and equity-flow context.",
        "Record whether BRL movement is rates-led, fiscal-led, commodity-led, China-led, or carry-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 8 Cross-Market Correlation", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Carry Trade Strategy", "Terms of Trade Strategy", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "danish-krone",
    name: "Danish Krone",
    symbol: "DKK",
    assetClass: "forex",
    rank: 20,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Moves the Danish Krone? DKK Market Guide",
    seoDescription: "Understand the Danish Krone, Denmark's fixed exchange-rate policy, and how Lurnava studies DKK through EUR linkage, rates, reserves, and intervention.",
    publicHeadline: "The Danish Krone is built around a fixed exchange-rate policy against the euro.",
    publicSubheadline:
      "DKK is watched because Danmarks Nationalbank keeps the krone stable against the euro using interest-rate adjustments, FX intervention, reserves, and ERM II mechanics.",
    plainEnglish:
      "The Danish Krone is Denmark's currency. Unlike ordinary free-floating currencies, DKK is managed to stay very close to the euro, so learners must study the policy framework before reading the chart.",
    marketRole:
      "DKK helps traders study fixed exchange-rate policy, euro linkage, central-bank intervention, reserve management, and why some currencies should not be interpreted like normal floating pairs.",
    whyTradersWatch:
      "Traders watch DKK for EUR/DKK location around the central rate, Danmarks Nationalbank rate changes, FX intervention, reserves, ECB policy, and pressure inside the fixed exchange-rate system.",
    lurnavaMonitorNote:
      "Lurnava studies DKK through EUR/DKK central-rate behavior, Danmarks Nationalbank policy, ERM II mechanics, ECB comparison, interest-rate spreads, reserves, and intervention context.",
    conversionCta:
      "Learn how to study DKK through fixed-exchange-rate mechanics, central-bank operations, euro linkage, Strategy Lab practice, and certification checks.",
    sources: [assetResearchSources.nationalbankenFixedFx, assetResearchSources.nationalbankenExchangeRates, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Fixed exchange-rate policy", detail: "DKK is managed around the euro, so the framework is the first driver learners must understand." },
      { title: "Interest-rate spread versus the euro area", detail: "Danmarks Nationalbank can adjust rates to support the krone's stability against the euro." },
      { title: "FX intervention and reserves", detail: "Buying or selling kroner against euro can help keep EUR/DKK close to the central rate." },
      { title: "ECB policy", detail: "Because DKK is linked to EUR, ECB decisions strongly influence Danish monetary conditions." },
    ],
    publicRisks: [
      { risk: "Free-float mistake", watch: "DKK should not be studied like USD, GBP, or AUD because the policy goal is euro stability." },
      { risk: "Spread compression", watch: "Small rate-spread changes can matter when the exchange-rate band is narrow." },
      { risk: "Intervention pressure", watch: "Reserve and intervention data can show whether pressure is building around the framework." },
    ],
    lab: {
      deskBrief:
        "The Danish Krone is studied as a fixed-exchange-rate currency linked to the euro. The Asset Lab connects EUR/DKK central-rate behavior, Danmarks Nationalbank policy, ERM II, ECB decisions, interest-rate spreads, reserves, and FX intervention.",
      researchQuestion:
        "Is DKK pressure coming from euro linkage, rate-spread changes, intervention needs, reserve movement, or broader European market stress?",
      operatingModel:
        "Start with the framework, not the candlestick. A useful DKK read checks EUR/DKK location versus the central rate, Danmarks Nationalbank rate decisions, ECB policy, intervention context, and reserve behavior.",
      participants: [
        { name: "Danmarks Nationalbank", role: "Policy and intervention authority", whyItMatters: "The central bank manages rates and interventions to keep DKK stable against EUR." },
        { name: "European Central Bank", role: "External policy anchor", whyItMatters: "ECB policy shapes the euro side of the fixed exchange-rate system." },
        { name: "Danish banks", role: "Money-market channels", whyItMatters: "Rate spreads and liquidity pass through the banking system." },
        { name: "Danish government", role: "Foreign-exchange policy setting", whyItMatters: "The fixed exchange-rate policy is set by government in consultation with Danmarks Nationalbank." },
      ],
      historicalEvents: [
        { year: "1982", title: "Fixed exchange-rate policy begins", detail: "Denmark starts the current fixed exchange-rate approach." },
        { year: "1999", title: "ERM II euro framework begins", detail: "The krone becomes linked to the euro through ERM II." },
        { year: "2015", title: "European low-rate pressure", detail: "Krone pressure and rate adjustments show how fixed-rate defense works in practice." },
        { year: "Ongoing", title: "Central-rate stability monitored", detail: "Learners track EUR/DKK, rate spreads, reserves, and ECB comparison." },
      ],
      correlations: [
        { market: "Euro", relationship: "DKK is managed to stay stable against EUR.", learnerNote: "EUR/DKK should be read through the fixed exchange-rate framework first." },
        { market: "ECB policy rates", relationship: "ECB decisions influence Danish rate conditions.", learnerNote: "Danmarks Nationalbank often responds through rate-spread management." },
        { market: "Danish reserves", relationship: "FX reserve changes can reflect intervention pressure.", learnerNote: "Reserve movement helps explain whether the framework is being actively supported." },
      ],
      riskMap: [
        { risk: "Framework misunderstanding", watch: "Reading DKK like a normal floating currency leads to wrong conclusions." },
        { risk: "Intervention-pressure build", watch: "Watch reserves and rate changes when EUR/DKK moves away from the central area." },
        { risk: "ECB transmission", watch: "Euro-area policy can shape Danish conditions even without local policy independence." },
      ],
      researchRoutine: [
        "Check EUR/DKK against the central-rate context.",
        "Review Danmarks Nationalbank rate decisions and intervention language.",
        "Compare ECB policy, euro-area rates, and Danish rate spreads.",
        "Watch reserve data and any pressure around the fixed exchange-rate system.",
        "Record whether DKK movement is framework-led, spread-led, intervention-led, reserve-led, or euro-led.",
      ],
      relatedLessons: ["Level 6 Central Banks", "Level 7 Macro Event Risk", "Level 8 Cross-Market Correlation"],
      relatedStrategies: ["Pegged Currency Framework", "Interest Rate Differential Momentum", "Macro Correlation Mapping"],
    },
  },
  {
    slug: "gold",
    name: "Gold",
    symbol: "XAU",
    assetClass: "gold",
    rank: 1,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-15",
    seoTitle: "What Moves Gold? XAU Market Guide",
    seoDescription: "Learn what moves gold, who holds major gold exposure, and how Lurnava studies real yields, central banks, ETFs, LBMA, and COMEX.",
    publicHeadline: "Gold is the market's old monetary mirror.",
    publicSubheadline:
      "Gold is watched because it reacts to real yields, central-bank reserves, ETF flows, dollar strength, crisis demand, and long-term trust in money.",
    plainEnglish:
      "Gold is a scarce physical metal used in jewelry, technology, central-bank reserves, investment products, and trading markets. In markets, it often reflects how people feel about money, inflation, real yields, currency trust, and crisis protection.",
    marketRole:
      "Gold sits between commodity, currency, reserve asset, and store-of-value behavior. It can react like a macro asset when real yields move, like a reserve asset when central banks buy, and like a defensive asset when confidence weakens.",
    whyTradersWatch:
      "Traders watch gold for real-yield pressure, US Dollar behavior, central-bank buying, ETF holdings, LBMA pricing, COMEX futures, inflation expectations, geopolitical stress, and physical demand.",
    lurnavaMonitorNote:
      "Lurnava studies gold through real yields, dollar strength, World Gold Council reserve data, ETF holdings, SPDR and iShares trust data, LBMA pricing, COMEX futures, physical demand, event risk, and Gold-specific wick behavior.",
    conversionCta:
      "Learn how to study gold with macro context, chart structure, risk mapping, and professional certification checks inside Lurnava.",
    sources: [
      assetResearchSources.worldGoldCouncilDemand,
      assetResearchSources.worldGoldCouncilCentralBankReserves,
      assetResearchSources.worldGoldCouncilQ12026CentralBanks,
      assetResearchSources.iSharesGoldTrust,
      assetResearchSources.spdrGoldShares,
      assetResearchSources.spdrGldHsbcBarList,
      assetResearchSources.spdrGldJpmBarList,
      assetResearchSources.lbmaPrices,
      assetResearchSources.cmeGoldOverview,
    ],
    drivers: [
      { title: "Real yields", detail: "Gold often reacts when inflation-adjusted yield expectations rise or fall." },
      { title: "US Dollar behavior", detail: "Dollar strength can pressure gold, but crisis demand can sometimes lift both together." },
      { title: "Central-bank demand", detail: "Reserve buying can create a deeper demand story than short-term chart movement alone." },
      { title: "Crisis and inflation fear", detail: "Gold can attract attention when markets question currency value, policy credibility, or financial stability." },
      { title: "ETF holdings", detail: "SPDR Gold Shares and iShares Gold Trust show how investment demand can be stored in exchange-traded products backed by allocated gold." },
      { title: "LBMA and COMEX structure", detail: "London OTC pricing and COMEX futures/options shape how gold is referenced, hedged, and traded across global desks." },
      { title: "Physical demand cycle", detail: "Jewelry, bars, coins, refining, and regional buying can affect gold demand differently from futures positioning." },
    ],
    publicRisks: [
      { risk: "False safety assumption", watch: "Gold can fall during stress if investors need cash or if real yields rise sharply." },
      { risk: "Dollar conflict", watch: "Gold and USD do not always move opposite; the reason for the move matters." },
      { risk: "Wick-heavy behavior", watch: "Gold can reject levels quickly, so learners need invalidation and volatility context." },
      { risk: "ETF outflow pressure", watch: "Investment-product selling can pressure gold even when long-term reserve demand remains strong." },
      { risk: "Positioning unwind", watch: "COMEX futures and options positioning can accelerate moves through points and dollars during major events." },
    ],
    lab: {
      deskBrief:
        "Gold is studied as a macro-sensitive reserve and store-of-value market. The Asset Lab links XAU behavior to real yields, USD, inflation expectations, central-bank demand, ETF holdings, LBMA pricing, COMEX futures, vault/custody records, and event stress.",
      researchQuestion:
        "Is gold moving because real yields changed, the dollar repriced, central-bank demand strengthened, ETF holdings shifted, futures positioning changed, or risk stress created defensive demand?",
      operatingModel:
        "Gold requires a macro-first read and a chart-second read. The strongest study notes explain the macro driver, then show where price accepts or rejects that idea through dollars, points, ATR, wick behavior, and event context.",
      participants: [
        { name: "World Gold Council", role: "Gold data and demand source", whyItMatters: "WGC data helps learners verify central-bank demand, reserves, and demand categories instead of relying on broad claims.", sourceBasis: "World Gold Council demand and reserve data" },
        { name: "London Bullion Market Association", role: "London benchmark infrastructure", whyItMatters: "LBMA prices anchor the London reference used by major gold products and institutions.", sourceBasis: "LBMA price data" },
        { name: "CME Group COMEX", role: "Futures and options venue", whyItMatters: "COMEX futures and options help set leveraged positioning, open interest, and nearly 24-hour hedging context.", sourceBasis: "CME Gold futures page" },
        { name: "SPDR Gold Trust", role: "Physical gold ETF trust", whyItMatters: "GLD is a major exchange-traded gold access product with named trustee, sponsor, and custodians.", sourceBasis: "SPDR Gold Shares page" },
        { name: "BlackRock iShares Gold Trust", role: "Physical gold trust", whyItMatters: "IAU publishes ounces, tonnes, shares outstanding, net assets, and LBMA benchmark references.", sourceBasis: "iShares Gold Trust issuer page" },
        { name: "JPMorgan Chase Bank, N.A.", role: "SPDR Gold Trust custodian", whyItMatters: "JPMorgan's bar list shows allocated GLD gold by vault, bar count, gross ounces, and fine ounces.", sourceBasis: "JPMorgan GLD bar list" },
        { name: "HSBC Bank plc", role: "SPDR Gold Trust custodian", whyItMatters: "The HSBC bar list verifies another allocated GLD custody pool and helps students see real bar-level trust backing.", sourceBasis: "SPDR HSBC bar list" },
        { name: "National Bank of Poland", role: "Central-bank buyer", whyItMatters: "Poland led reported Q1 2026 central-bank buying and is a named example of official-sector demand.", sourceBasis: "World Gold Council Q1 2026 central-bank report" },
        { name: "People's Bank of China", role: "Central-bank reserve holder", whyItMatters: "PBoC holdings matter because China's reserve actions often shape global gold-demand discussion.", sourceBasis: "World Gold Council Q1 2026 central-bank report" },
      ],
      historicalEvents: [
        { year: "1971", title: "Dollar-gold link ends", detail: "Gold enters a modern free-floating market regime." },
        { year: "1974", title: "US private ownership restrictions end", detail: "US private gold ownership access changes, widening the modern investment discussion." },
        { year: "2004", title: "SPDR Gold Trust lists", detail: "GLD becomes the first US-traded gold ETF and a major channel for exchange-traded physical gold exposure." },
        { year: "2005", title: "iShares Gold Trust launches", detail: "IAU adds another large physical gold trust structure with published ounces and tonnes in trust." },
        { year: "2008", title: "Financial crisis demand", detail: "Gold gains attention as trust in financial institutions weakens." },
        { year: "2020", title: "Pandemic policy shock", detail: "Aggressive liquidity and uncertainty push gold into a major macro cycle." },
        { year: "2022-2026", title: "Central-bank buying focus", detail: "Reserve demand becomes a major part of the gold market discussion." },
        { year: "2026-Q1", title: "Named central-bank buying remains visible", detail: "World Gold Council reports Poland, Uzbekistan, and China as important Q1 2026 official-sector buyers." },
      ],
      correlations: [
        { market: "Real yields", relationship: "Often inverse when inflation-adjusted yields move clearly.", learnerNote: "Real-yield direction is a core lens, but not the only driver." },
        { market: "US Dollar", relationship: "Often inverse, but can rise together during stress.", learnerNote: "Identify whether the driver is currency pressure or safety demand." },
        { market: "Oil and inflation expectations", relationship: "Can affect inflation narratives.", learnerNote: "Gold responds to perceived monetary impact, not just commodity prices." },
        { market: "COMEX futures positioning", relationship: "Can accelerate short-term moves through leverage and options hedging.", learnerNote: "Futures positioning can affect speed without changing the long-term reserve story." },
      ],
      riskMap: [
        { risk: "Macro conflict", watch: "Gold can stall when real yields, USD, and risk stress point in different directions." },
        { risk: "Fast rejection wicks", watch: "Gold often tests levels and rejects them quickly." },
        { risk: "Event-driven gaps", watch: "Central-bank decisions, inflation data, and geopolitical headlines can shift conditions rapidly." },
        { risk: "ETF outflows", watch: "Trust holdings can fall even when central banks keep buying, so separate investment flow from official demand." },
        { risk: "Custody and bar-list timing", watch: "Trust pages and bar lists may use different as-of dates, so do not combine them without date checks." },
        { risk: "Real-yield reversal", watch: "A sharp rise in real yields can pressure gold even when inflation headlines sound supportive." },
      ],
      researchRoutine: [
        "Check XAU structure on the selected timeframe.",
        "Review real yields, US Dollar behavior, and rate expectations.",
        "Scan World Gold Council central-bank data, ETF holdings, and physical demand context.",
        "Check LBMA reference behavior and COMEX futures/options context.",
        "Compare SPDR and iShares trust data with dates before writing a holding note.",
        "Mark event risk and volatility zones before studying entries.",
        "Write whether the move is yield-led, dollar-led, reserve-led, ETF-led, futures-led, physical-demand-led, or stress-led.",
      ],
      relatedLessons: ["Level 6 Real Yields", "Level 6 Central Banks", "Level 7 Event Risk"],
      relatedStrategies: ["Real Yield Inverse Correlation", "Central Bank Net Buying (Long Gold)", "Gold vs DXY Divergence"],
      deepDive: {
        identity: [
          { title: "No founder, real market structure", detail: "Gold has no founder or issuer. Its paid profile must explain the market infrastructure that makes gold tradable: LBMA, COMEX, ETFs, vaults, central banks, and physical demand." },
          { title: "Reserve asset plus trading asset", detail: "Gold can be held for reserves, bought through trusts, traded as futures, or purchased physically. Each channel can move differently." },
          { title: "Chart reads need macro context", detail: "Gold wick behavior, ATR, dollars, and points matter, but the stronger lesson explains the macro driver behind the chart reaction." },
        ],
        authorityOrFounders: [
          { title: "Reserve and data authority", detail: "World Gold Council and IMF-linked data help verify official reserve holdings and central-bank changes." },
          { title: "Benchmark infrastructure", detail: "LBMA pricing provides a London reference point used by many funds and institutions." },
          { title: "Futures infrastructure", detail: "CME Group COMEX futures and options create a venue for hedging, leveraged exposure, and open-interest monitoring." },
        ],
        holderExposureMap: [
          {
            entityName: "BlackRock iShares Gold Trust",
            entityType: "Physical gold trust",
            assetOrInstrument: "IAU ounces in trust",
            amount: "14,851,741.09",
            unit: "troy ounces",
            estimatedUsdValue: "60,522,411,523 USD net assets",
            exposureType: "ETF trust gold backing",
            asOfDate: "2026-07-14",
            sourcePublishedAt: "2026-07-14",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "iShares Gold Trust",
            sourcePublisher: "BlackRock",
            sourceUrl: assetResearchSources.iSharesGoldTrust.url,
            freshnessStatus: "current",
            whyItMatters: "IAU is a major investment access channel, and its issuer page publishes ounces, tonnes, net assets, and shares outstanding.",
            limitations: "BlackRock notes webpage ounces and tonnes use trade-date activity, while bar-list data may use accounting data.",
          },
          {
            entityName: "BlackRock iShares Gold Trust",
            entityType: "Physical gold trust",
            assetOrInstrument: "IAU tonnes in trust",
            amount: "461.94",
            unit: "tonnes",
            estimatedUsdValue: "60,522,411,523 USD net assets",
            exposureType: "ETF trust gold backing",
            asOfDate: "2026-07-14",
            sourcePublishedAt: "2026-07-14",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "iShares Gold Trust",
            sourcePublisher: "BlackRock",
            sourceUrl: assetResearchSources.iSharesGoldTrust.url,
            freshnessStatus: "current",
            whyItMatters: "Tonnes make the trust easier to compare with central-bank reserves and large custody pools.",
            limitations: "Do not add tonnes from separate sources unless dates and calculation bases match.",
          },
          {
            entityName: "SPDR Gold Trust - HSBC allocated account",
            entityType: "Physical gold trust custodian account",
            assetOrInstrument: "Allocated fine gold",
            amount: "2,411,823.374",
            unit: "fine troy ounces",
            exposureType: "Custodian bar-list allocation",
            asOfDate: "2026-07-13",
            sourcePublishedAt: "2026-07-13",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "SPDR Gold Trust HSBC bar list",
            sourcePublisher: "SPDR Gold Shares",
            sourceUrl: assetResearchSources.spdrGldHsbcBarList.url,
            freshnessStatus: "current",
            whyItMatters: "The HSBC bar list shows real allocated bars behind GLD, including 5,944 bars and fine ounces.",
            limitations: "This is only the HSBC allocated-account bar list and should not be combined with JPMorgan data unless dates are reconciled.",
          },
          {
            entityName: "SPDR Gold Trust - JPMorgan allocated vaults",
            entityType: "Physical gold trust custodian account",
            assetOrInstrument: "Allocated fine gold",
            amount: "29,829,394.913",
            unit: "fine troy ounces",
            exposureType: "Custodian bar-list allocation",
            asOfDate: "2026-07-07",
            sourcePublishedAt: "2026-07-07",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "SPDR Gold Trust JPMorgan bar list",
            sourcePublisher: "JPMorgan Chase Bank",
            sourceUrl: assetResearchSources.spdrGldJpmBarList.url,
            freshnessStatus: "current",
            whyItMatters: "The JPMorgan bar list shows a large allocated GLD custody pool split across London and New York vaults.",
            limitations: "The JPMorgan bar-list date differs from the HSBC list date, so totals should be date-matched before being presented as a single GLD total.",
          },
          {
            entityName: "National Bank of Poland",
            entityType: "Central bank",
            assetOrInstrument: "Gold reserves",
            amount: "582",
            unit: "tonnes",
            exposureType: "Official gold reserve holding",
            asOfDate: "2026-03-31",
            sourcePublishedAt: "2026-04-29",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Gold Demand Trends Q1 2026: Central Banks",
            sourcePublisher: "World Gold Council",
            sourceUrl: assetResearchSources.worldGoldCouncilQ12026CentralBanks.url,
            freshnessStatus: "recent",
            whyItMatters: "Poland was the largest reported Q1 buyer, adding 31 tonnes and making official-sector demand concrete for learners.",
            limitations: "Quarterly WGC data should be refreshed on the next central-bank reserve update.",
          },
          {
            entityName: "Central Bank of Uzbekistan",
            entityType: "Central bank",
            assetOrInstrument: "Gold reserves",
            amount: "416",
            unit: "tonnes",
            exposureType: "Official gold reserve holding",
            asOfDate: "2026-03-31",
            sourcePublishedAt: "2026-04-29",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Gold Demand Trends Q1 2026: Central Banks",
            sourcePublisher: "World Gold Council",
            sourceUrl: assetResearchSources.worldGoldCouncilQ12026CentralBanks.url,
            freshnessStatus: "recent",
            whyItMatters: "Uzbekistan added 25 tonnes in Q1 2026, and WGC reports gold at 87% of the bank's total reserves.",
            limitations: "Use WGC or central-bank updates for any newer monthly reserve figure.",
          },
          {
            entityName: "People's Bank of China",
            entityType: "Central bank",
            assetOrInstrument: "Gold reserves",
            amount: "2,313",
            unit: "tonnes",
            exposureType: "Official gold reserve holding",
            asOfDate: "2026-03-31",
            sourcePublishedAt: "2026-04-29",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Gold Demand Trends Q1 2026: Central Banks",
            sourcePublisher: "World Gold Council",
            sourceUrl: assetResearchSources.worldGoldCouncilQ12026CentralBanks.url,
            freshnessStatus: "recent",
            whyItMatters: "PBoC reserve changes matter because China is central to global reserve-diversification discussion.",
            limitations: "WGC reported 9% of total reserves at the Q1 date; update this when newer official reserve data is published.",
          },
          {
            entityName: "Central banks and other institutions",
            entityType: "Official-sector aggregate",
            assetOrInstrument: "Q1 2026 net gold demand",
            amount: "243.7",
            unit: "tonnes",
            exposureType: "Official-sector quarterly demand",
            asOfDate: "2026-03-31",
            sourcePublishedAt: "2026-04-29",
            retrievedAt: assetDataRetrievedAt,
            sourceTitle: "Gold Demand Trends Q1 2026: Central Banks",
            sourcePublisher: "World Gold Council",
            sourceUrl: assetResearchSources.worldGoldCouncilQ12026CentralBanks.url,
            freshnessStatus: "recent",
            whyItMatters: "The aggregate figure helps learners separate central-bank demand from ETF flows and short-term futures positioning.",
            limitations: "Reported and unreported buying can differ; WGC quarterly updates should be rechecked before publication refreshes.",
          },
        ],
        marketStructure: [
          { title: "LBMA London OTC layer", detail: "London pricing and OTC activity provide a benchmark reference used by funds, banks, refiners, and physical-market participants." },
          { title: "COMEX futures and options layer", detail: "CME gold futures and options support hedging, leverage, open-interest tracking, and almost continuous response to macro events." },
          { title: "ETF trust layer", detail: "GLD and IAU let investors access physical gold exposure through shares, while issuer and custodian records help verify backing." },
          { title: "Central-bank reserve layer", detail: "Official reserves can reshape the long-term demand story even when short-term futures flows are noisy." },
          { title: "Physical demand layer", detail: "Jewelry, bars, coins, refining, and regional buying affect gold differently from electronic positioning." },
        ],
        driverRegimes: [
          { title: "Real-yield pressure regime", detail: "Rising real yields can pressure gold because non-yielding assets become less attractive relative to inflation-adjusted bonds." },
          { title: "Dollar-strength regime", detail: "A stronger dollar can weigh on gold, but stress demand can sometimes lift both together." },
          { title: "Central-bank accumulation regime", detail: "Official buying can support a longer demand narrative even when ETF flows are mixed." },
          { title: "ETF outflow regime", detail: "Trust selling can weaken investment demand while leaving central-bank demand intact." },
          { title: "Event-volatility regime", detail: "Inflation data, FOMC decisions, war risk, and liquidity stress can create fast wick-heavy moves in dollars and points." },
        ],
        sourceBackedClaims: [
          { title: "IAU trust backing", detail: "BlackRock reported IAU at 14,851,741.09 ounces in trust, 461.94 tonnes in trust, and $60.522 billion in net assets as of July 14, 2026." },
          { title: "GLD custodian structure", detail: "SPDR lists JPMorgan Chase Bank, N.A. and HSBC Bank plc as gold custodians." },
          { title: "GLD HSBC allocation", detail: "The SPDR HSBC bar list reported 5,944 allocated bars and 2,411,823.374 fine troy ounces as of July 13, 2026." },
          { title: "GLD JPMorgan allocation", detail: "The JPMorgan bar list reported 74,802 allocated bars and 29,829,394.913 fine troy ounces as of July 7, 2026." },
          { title: "Named central-bank reserves", detail: "WGC reported Poland at 582 tonnes, Uzbekistan at 416 tonnes, and PBoC at 2,313 tonnes after Q1 2026 buying." },
        ],
        reviewNotes: [
          "Never use Forex unit language for gold; use dollars, points, ATR, wick behavior, futures positioning, ETF flows, and central-bank demand.",
          "Do not combine GLD custodian bar-list amounts across different dates without stating the date mismatch.",
          "Gold paid pages need both macro explanation and physical-market evidence; one without the other feels thin.",
        ],
      },
    },
  },
  {
    slug: "tether",
    name: "Tether",
    symbol: "USDT",
    assetClass: "crypto",
    rank: 3,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Tether? USDT Stablecoin Guide",
    seoDescription: "Understand Tether, why USDT matters, what moves stablecoin demand, and how Lurnava studies crypto liquidity.",
    publicHeadline: "Tether is crypto's most watched dollar-linked liquidity token.",
    publicSubheadline:
      "USDT is watched because it sits across exchanges, settlement rails, offshore liquidity, DeFi venues, and crypto trading pairs.",
    plainEnglish:
      "Tether issues USDT, a stablecoin designed to track the value of the US Dollar. Traders use it as a dollar-like unit inside crypto venues, especially where direct bank dollars are harder to move quickly.",
    marketRole:
      "USDT is a liquidity bridge. It helps traders move value between exchanges, crypto assets, and blockchain networks without leaving the crypto system every time they want dollar exposure.",
    whyTradersWatch:
      "Traders watch USDT supply, reserves, redemptions, chain distribution, exchange balances, and issuer transparency because stablecoin liquidity can shape crypto risk appetite.",
    lurnavaMonitorNote:
      "Lurnava studies Tether as a crypto liquidity gauge. The review focuses on supply changes, issuer disclosures, reserve confidence, chain movement, exchange balances, and stress behavior during market selloffs.",
    conversionCta:
      "Learn how to study stablecoins like USDT through liquidity lessons, on-chain review, risk mapping, and certified market training inside Lurnava.",
    sources: [assetResearchSources.tetherTransparency, assetResearchSources.bisFxSurvey],
    drivers: [
      { title: "Stablecoin supply", detail: "USDT supply growth or contraction can show whether dollar-like liquidity is entering or leaving crypto venues." },
      { title: "Reserve confidence", detail: "Transparency reports and reserve composition affect how market participants judge the stability of the token." },
      { title: "Exchange balances", detail: "Large USDT balances on exchanges can support trading activity, but sudden movement may also reflect defensive positioning." },
      { title: "Chain distribution", detail: "USDT moves across several networks, so learners study which chains are carrying settlement and trading demand." },
    ],
    publicRisks: [
      { risk: "Reserve trust risk", watch: "Stablecoins depend on confidence that backing assets and redemption mechanics can hold under stress." },
      { risk: "Issuer and regulatory pressure", watch: "Stablecoin issuers can face policy, banking, or jurisdictional pressure." },
      { risk: "Venue concentration", watch: "USDT activity can cluster on specific exchanges or chains, which can matter during stress events." },
    ],
    lab: {
      deskBrief:
        "Tether is studied as a crypto liquidity rail, not as a growth asset. The Asset Lab reviews USDT supply, reserve disclosures, exchange balances, chain distribution, redemption stress, and the role of dollar-linked settlement across crypto venues.",
      researchQuestion:
        "Is USDT activity showing fresh crypto liquidity, defensive dollar demand, exchange preparation, or stress in stablecoin confidence?",
      operatingModel:
        "Start with supply and reserve confidence, then compare exchange balances, chain movement, and market regime. A USDT read is strongest when liquidity behavior matches price and venue data.",
      participants: [
        { name: "Tether issuer", role: "Stablecoin operator", whyItMatters: "Issuer disclosures, reserves, and redemption handling sit at the center of USDT confidence." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "Many crypto pairs use USDT as the quote asset, so exchange balances affect market depth." },
        { name: "Market makers", role: "Settlement users", whyItMatters: "They use USDT to move liquidity across venues and respond to spreads." },
        { name: "Stablecoin users", role: "Dollar-demand base", whyItMatters: "User demand can rise when traders seek dollar-like exposure without leaving crypto rails." },
      ],
      historicalEvents: [
        { year: "2014", title: "Tether launches", detail: "USDT begins as one of the earliest dollar-linked stablecoins." },
        { year: "2017-2021", title: "Exchange quote expansion", detail: "USDT becomes a dominant quote asset across many crypto venues." },
        { year: "2022", title: "Stablecoin stress focus", detail: "Market stress increases attention on reserves, redemptions, and stablecoin transparency." },
        { year: "2023-2026", title: "Reserve-disclosure scrutiny", detail: "Stablecoin issuers face more attention from regulators, institutions, and risk teams." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "USDT liquidity can support BTC trading activity.", learnerNote: "More USDT does not automatically mean BTC demand; check exchange flow and price behavior." },
        { market: "US Dollar", relationship: "USDT is designed to track dollar value.", learnerNote: "Study stablecoin confidence separately from the dollar's macro strength." },
        { market: "Exchange volume", relationship: "USDT is deeply tied to crypto venue activity.", learnerNote: "Volume without depth can still be fragile during forced moves." },
      ],
      riskMap: [
        { risk: "Redemption pressure", watch: "Large redemptions can test stablecoin confidence." },
        { risk: "Transparency dispute", watch: "Questions around reserves can create market-wide caution." },
        { risk: "Chain-specific stress", watch: "Network congestion or bridge issues can distort stablecoin movement." },
      ],
      researchRoutine: [
        "Check USDT supply and recent issuer transparency updates.",
        "Review exchange USDT balances and large transfers.",
        "Compare USDT movement against BTC, ETH, and broad crypto volume.",
        "Check whether activity is concentrated on one chain or venue.",
        "Classify the read as fresh liquidity, defensive liquidity, or stress behavior.",
      ],
      relatedLessons: ["Level 8 On-Chain Analysis", "Level 9 Crypto Liquidity Risk"],
      relatedStrategies: ["Stablecoin Supply Ratio Strategy", "Stablecoin Hedging", "Emergency Stop on Exchange Outage"],
    },
  },
  {
    slug: "usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    assetClass: "crypto",
    rank: 4,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is USD Coin? USDC Stablecoin Guide",
    seoDescription: "Learn what USDC is, why it matters, what affects stablecoin demand, and how Lurnava studies regulated crypto liquidity.",
    publicHeadline: "USD Coin is a regulated dollar-linked stablecoin used across crypto markets.",
    publicSubheadline:
      "USDC is watched because it connects dollar settlement, exchanges, DeFi, payment use cases, and institutional stablecoin adoption.",
    plainEnglish:
      "USD Coin is a stablecoin issued by Circle and designed to track the US Dollar. It is used for trading, payments, settlement, and moving dollar-like value across supported blockchain networks.",
    marketRole:
      "USDC often represents a more regulated stablecoin rail inside crypto. It helps learners study how dollar liquidity, compliance expectations, DeFi activity, and institutional access interact.",
    whyTradersWatch:
      "Traders watch USDC supply, reserve transparency, chain usage, exchange balances, DeFi lending, and redemption behavior because those factors reveal dollar-like liquidity conditions.",
    lurnavaMonitorNote:
      "Lurnava studies USDC through issuer transparency, reserve disclosures, supply changes, DeFi use, supported-chain activity, exchange balances, and stress behavior during market uncertainty.",
    conversionCta:
      "Learn how to study regulated stablecoin liquidity through structured lessons, DeFi risk review, on-chain practice, and certification checks inside Lurnava.",
    sources: [assetResearchSources.circleUsdc, assetResearchSources.circleTransparency],
    drivers: [
      { title: "Circle reserve transparency", detail: "Reserve reports and attestations shape how market participants judge USDC's stability." },
      { title: "Institutional adoption", detail: "USDC is often watched for regulated access, payments, and business settlement use cases." },
      { title: "DeFi liquidity", detail: "USDC is widely used in lending, liquidity pools, and collateral systems, so DeFi conditions matter." },
      { title: "Chain support", detail: "USDC activity can shift between networks as fees, app demand, and exchange support change." },
    ],
    publicRisks: [
      { risk: "Banking and reserve stress", watch: "Stablecoin confidence can weaken if markets question reserve access or redemption timing." },
      { risk: "Regulatory changes", watch: "Rules for stablecoin issuers can change supply, adoption, and venue access." },
      { risk: "DeFi smart-contract exposure", watch: "USDC use in DeFi can expose learners to protocol and collateral risk." },
    ],
    lab: {
      deskBrief:
        "USDC is studied as a regulated stablecoin rail. The Asset Lab compares supply, reserves, redemptions, DeFi deployment, chain distribution, venue balances, and institutional use to understand dollar-like liquidity inside crypto.",
      researchQuestion:
        "Is USDC activity showing institutional liquidity, DeFi collateral demand, defensive dollar positioning, or stablecoin confidence stress?",
      operatingModel:
        "Separate issuer stability from market usage. A clean USDC read checks reserves and redemptions first, then DeFi demand, exchange balances, and chain-level flow.",
      participants: [
        { name: "Circle", role: "Issuer", whyItMatters: "Circle controls issuance, redemption, reserve disclosure, and supported network expansion." },
        { name: "DeFi protocols", role: "Liquidity and collateral venues", whyItMatters: "USDC often sits inside lending, trading, and collateral systems." },
        { name: "Institutions and payment firms", role: "Adoption channel", whyItMatters: "Business use cases can create demand separate from retail trading." },
        { name: "Exchanges and market makers", role: "Trading infrastructure", whyItMatters: "They determine how easily USDC liquidity moves into crypto markets." },
      ],
      historicalEvents: [
        { year: "2018", title: "USDC launches", detail: "Circle introduces USDC as a dollar-linked stablecoin for crypto markets." },
        { year: "2020-2021", title: "DeFi adoption expands", detail: "USDC becomes a major stablecoin in lending and decentralized exchange activity." },
        { year: "2023", title: "Reserve confidence stress", detail: "Banking-sector stress makes stablecoin reserve transparency a central market topic." },
        { year: "2024-2026", title: "Multi-chain and institutional focus", detail: "USDC coverage increasingly includes payments, business use, and cross-chain liquidity." },
      ],
      correlations: [
        { market: "DeFi lending rates", relationship: "USDC demand can appear in lending and collateral markets.", learnerNote: "High yields may reflect demand, stress, or protocol risk." },
        { market: "US Dollar", relationship: "USDC is designed to track dollar value.", learnerNote: "The stablecoin's peg and the dollar's macro trend are different subjects." },
        { market: "Ethereum and layer-2 networks", relationship: "USDC settlement often travels through smart-contract ecosystems.", learnerNote: "Track where activity happens, not only total supply." },
      ],
      riskMap: [
        { risk: "Reserve-access concern", watch: "Markets can react quickly if reserve access appears uncertain." },
        { risk: "Protocol dependency", watch: "DeFi usage adds smart-contract and liquidation risk around USDC pools." },
        { risk: "Chain fragmentation", watch: "Different network versions and bridges can create operational confusion." },
      ],
      researchRoutine: [
        "Check Circle transparency updates and USDC supply behavior.",
        "Review chain distribution and exchange balances.",
        "Scan DeFi lending rates, collateral use, and liquidity pools.",
        "Compare USDC activity with USDT and broad crypto volume.",
        "Classify the move as institutional use, DeFi demand, defensive liquidity, or stress behavior.",
      ],
      relatedLessons: ["Level 8 Stablecoin Flows", "Level 9 DeFi Liquidity Risk"],
      relatedStrategies: ["Stablecoin Yield Diversification", "Stablecoin Hedging", "Rate Arbitrage Between Lending Platforms"],
    },
  },
  {
    slug: "bnb",
    name: "BNB",
    symbol: "BNB",
    assetClass: "crypto",
    rank: 5,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is BNB? BNB Chain Market Guide",
    seoDescription: "Understand BNB, BNB Chain activity, what moves it, and how Lurnava studies exchange-linked crypto ecosystems.",
    publicHeadline: "BNB is the utility asset at the center of the BNB Chain ecosystem.",
    publicSubheadline:
      "BNB is watched because it connects exchange utility, chain fees, application activity, validator economics, and ecosystem liquidity.",
    plainEnglish:
      "BNB is a crypto asset used across the BNB Chain ecosystem. It can be used for network fees, ecosystem activity, and services connected to BNB Chain applications.",
    marketRole:
      "BNB often behaves like an exchange-linked ecosystem asset. Its market read combines network activity, application demand, liquidity, venue confidence, and broader crypto risk appetite.",
    whyTradersWatch:
      "Traders watch BNB for BNB Chain usage, app revenue, exchange-related headlines, liquidity depth, token utility, and whether ecosystem activity is expanding or fading.",
    lurnavaMonitorNote:
      "Lurnava studies BNB through chain activity, validator and fee context, ecosystem launches, liquidity depth, regulatory pressure, exchange confidence, and relative strength against BTC and ETH.",
    conversionCta:
      "Learn how to study exchange-linked ecosystem assets through structured crypto lessons, liquidity review, and professional testing inside Lurnava.",
    sources: [assetResearchSources.bnbDocs, assetResearchSources.bnbSmartChain],
    drivers: [
      { title: "BNB Chain activity", detail: "Transactions, fees, applications, and active users help show whether ecosystem demand is real or attention-led." },
      { title: "Exchange-related confidence", detail: "BNB can react when market confidence changes around major exchange infrastructure connected to its ecosystem." },
      { title: "Application liquidity", detail: "DeFi, gaming, and token activity can increase demand for blockspace and BNB utility." },
      { title: "Regulatory pressure", detail: "Exchange-linked assets can be sensitive to legal, jurisdictional, or compliance headlines." },
    ],
    publicRisks: [
      { risk: "Concentration risk", watch: "BNB's market story can be tied to a small number of major ecosystem institutions." },
      { risk: "Regulatory headline risk", watch: "Exchange-linked themes can reprice quickly when policy attention rises." },
      { risk: "Ecosystem activity quality", watch: "High activity is more useful when it is durable, not only short-term token speculation." },
    ],
    lab: {
      deskBrief:
        "BNB is studied as a utility and ecosystem asset. The Asset Lab separates BNB Chain usage, exchange-linked confidence, app liquidity, validator context, regulatory risk, and relative strength into one research workspace.",
      researchQuestion:
        "Is BNB moving because the chain is being used, exchange confidence changed, regulatory pressure shifted, or broad crypto risk appetite improved?",
      operatingModel:
        "Start with ecosystem activity, then check exchange-linked context, liquidity, and regulatory pressure. BNB reads are weak when price rises while chain usage and confidence data do not support the move.",
      participants: [
        { name: "BNB Chain validators", role: "Network operators", whyItMatters: "Validator structure and network performance support the chain's utility case." },
        { name: "Application teams", role: "Demand creators", whyItMatters: "Apps create the activity that can make BNB useful beyond speculation." },
        { name: "Centralized venues", role: "Liquidity channels", whyItMatters: "Exchange access and market depth affect how BNB trades during stress." },
        { name: "Ecosystem funds and builders", role: "Growth support", whyItMatters: "Developer activity and grants can influence long-term ecosystem health." },
      ],
      historicalEvents: [
        { year: "2017", title: "BNB launches", detail: "BNB begins as a utility asset connected to exchange services." },
        { year: "2020", title: "BNB Smart Chain expands", detail: "Smart-contract activity gives BNB a stronger network-utility role." },
        { year: "2021", title: "DeFi and retail activity grow", detail: "BNB Chain becomes a major venue for low-cost application activity." },
        { year: "2023-2026", title: "Regulatory and ecosystem scrutiny", detail: "Market focus shifts toward compliance, chain durability, and app quality." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "BNB usually needs broad crypto risk appetite to sustain strength.", learnerNote: "BNB-specific strength should also show ecosystem confirmation." },
        { market: "Exchange volumes", relationship: "Exchange activity can affect confidence in exchange-linked assets.", learnerNote: "Volume is useful only with liquidity and risk context." },
        { market: "BNB Chain DeFi", relationship: "App usage and liquidity can support the utility case.", learnerNote: "Separate real usage from promotional activity." },
      ],
      riskMap: [
        { risk: "Exchange confidence shock", watch: "BNB can reprice quickly if confidence around major venues changes." },
        { risk: "Regulatory shock", watch: "Policy attention can affect exchange-linked assets faster than general market assets." },
        { risk: "Low-quality ecosystem activity", watch: "Temporary token launches can inflate activity without durable demand." },
      ],
      researchRoutine: [
        "Review BNB trend and relative strength against BTC and ETH.",
        "Check BNB Chain transactions, fees, app activity, and liquidity.",
        "Scan exchange-related and regulatory context.",
        "Review market depth, spreads, and derivatives positioning.",
        "Classify the move as chain-led, confidence-led, regulation-led, or market beta.",
      ],
      relatedLessons: ["Level 8 Ecosystem Growth", "Level 9 Counterparty Risk"],
      relatedStrategies: ["Ecosystem Growth Play", "Counterparty Risk Diversification", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "xrp",
    name: "XRP",
    symbol: "XRP",
    assetClass: "crypto",
    rank: 7,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is XRP? XRP Ledger Market Guide",
    seoDescription: "Learn what XRP is, how the XRP Ledger works, what affects XRP, and how Lurnava studies payment-focused crypto assets.",
    publicHeadline: "XRP is the native asset of the XRP Ledger payment network.",
    publicSubheadline:
      "XRP is watched because it sits inside a fast settlement network, payment narratives, exchange liquidity, and long-running regulatory discussion.",
    plainEnglish:
      "XRP is the native asset of the XRP Ledger, an open-source public blockchain designed for fast value transfer. It is often discussed in relation to payments, liquidity, and cross-border settlement use cases.",
    marketRole:
      "XRP behaves like a payment-network asset with strong sensitivity to legal clarity, exchange access, liquidity, adoption claims, and broad crypto conditions.",
    whyTradersWatch:
      "Traders watch XRP for regulatory developments, ledger activity, payment adoption, exchange listings, liquidity depth, and retail positioning around major headlines.",
    lurnavaMonitorNote:
      "Lurnava studies XRP through XRP Ledger usage, legal and regulatory context, payment-related adoption, exchange access, liquidity depth, and headline-driven volatility.",
    conversionCta:
      "Learn how to study payment-focused crypto assets through legal-context review, liquidity mapping, and structured market training inside Lurnava.",
    sources: [assetResearchSources.xrplDocs, assetResearchSources.xrplHome],
    drivers: [
      { title: "Regulatory clarity", detail: "XRP has a long history of market sensitivity to legal interpretations and exchange access." },
      { title: "Ledger activity", detail: "Transactions, accounts, and network usage help learners study whether the payment network is active." },
      { title: "Payment adoption", detail: "Partnerships and settlement narratives can affect how traders frame XRP demand." },
      { title: "Exchange liquidity", detail: "Listings, delistings, and venue depth can strongly affect XRP access and volatility." },
    ],
    publicRisks: [
      { risk: "Headline-driven movement", watch: "Legal or adoption headlines can move XRP quickly before deeper market confirmation appears." },
      { risk: "Adoption gap", watch: "Payment narratives need real usage evidence, not only announcements." },
      { risk: "Retail crowding", watch: "XRP can attract highly emotional positioning around major news." },
    ],
    lab: {
      deskBrief:
        "XRP is studied as a payment-focused network asset. The Asset Lab separates ledger usage, regulatory context, exchange access, payment adoption, liquidity depth, and retail positioning so learners do not treat one headline as a full market read.",
      researchQuestion:
        "Is XRP moving because network usage improved, legal context shifted, exchange access changed, payment adoption strengthened, or retail positioning crowded into a headline?",
      operatingModel:
        "Start with the legal and venue-access backdrop, then review XRP Ledger usage and liquidity depth. Payment narratives matter only when supported by usage and market access.",
      participants: [
        { name: "XRP Ledger validators", role: "Network operators", whyItMatters: "Validator health supports the open-source ledger's reliability." },
        { name: "Ripple and ecosystem builders", role: "Adoption promoters", whyItMatters: "Payment products and ecosystem activity often shape the XRP narrative." },
        { name: "Exchanges", role: "Access providers", whyItMatters: "Venue access can influence liquidity and trader participation." },
        { name: "Regulators and courts", role: "Legal context", whyItMatters: "Policy and court decisions can reshape XRP market access and confidence." },
      ],
      historicalEvents: [
        { year: "2012", title: "XRP Ledger launches", detail: "The ledger begins as a public network focused on fast settlement." },
        { year: "2017-2018", title: "Retail cycle attention", detail: "XRP becomes one of the most watched large-cap crypto assets." },
        { year: "2020", title: "US legal case begins", detail: "Regulatory attention becomes a central part of XRP market analysis." },
        { year: "2023-2026", title: "Legal clarity remains a market theme", detail: "Traders continue tracking rulings, settlements, listings, and policy developments." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "XRP often follows broad crypto risk appetite but can decouple on legal headlines.", learnerNote: "Separate XRP-specific events from market beta." },
        { market: "Exchange listings", relationship: "Venue access affects liquidity and participation.", learnerNote: "A listing change can alter market structure quickly." },
        { market: "Payment-sector narratives", relationship: "Settlement themes can support interest in XRP.", learnerNote: "Narratives need usage evidence." },
      ],
      riskMap: [
        { risk: "Legal surprise", watch: "Court or policy updates can reprice XRP rapidly." },
        { risk: "Narrative without usage", watch: "Payment claims need ledger activity and adoption detail." },
        { risk: "Liquidity gap", watch: "Venue access and depth can change around headlines." },
      ],
      researchRoutine: [
        "Check XRP trend, venue depth, and headline context.",
        "Review XRP Ledger activity and ecosystem updates.",
        "Scan regulatory and court-related developments.",
        "Compare movement against BTC and other large-cap crypto assets.",
        "Classify the move as legal-led, usage-led, access-led, or retail-crowding behavior.",
      ],
      relatedLessons: ["Level 7 Regulatory Events", "Level 8 Network Activity"],
      relatedStrategies: ["Regulatory Event Trading", "Network Adoption Trend", "News + Technical Event Trading"],
    },
  },
  {
    slug: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    assetClass: "crypto",
    rank: 8,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Dogecoin? DOGE Market Guide",
    seoDescription: "Understand Dogecoin, why DOGE trades actively, what moves it, and how Lurnava studies community-driven crypto assets.",
    publicHeadline: "Dogecoin is the original meme currency with real market liquidity.",
    publicSubheadline:
      "DOGE is watched because community attention, payment use, exchange depth, social cycles, and retail positioning can create large moves.",
    plainEnglish:
      "Dogecoin is a peer-to-peer digital currency that began as an internet meme and grew into a widely recognized crypto asset. Its market behavior is shaped heavily by community attention and liquidity.",
    marketRole:
      "Dogecoin is the benchmark meme asset. It helps learners study how attention, community behavior, social media, exchange access, and broad crypto cycles can affect a liquid asset.",
    whyTradersWatch:
      "Traders watch DOGE for social attention, large-holder movement, exchange liquidity, payment integrations, broad meme-asset rotation, and crowd behavior around public figures.",
    lurnavaMonitorNote:
      "Lurnava studies Dogecoin through social attention, wallet concentration, exchange liquidity, meme-sector rotation, payment-related updates, and volatility caused by crowded retail positioning.",
    conversionCta:
      "Learn how to study community-driven assets with attention analysis, liquidity review, risk controls, and structured training inside Lurnava.",
    sources: [assetResearchSources.dogecoinHome, assetResearchSources.dogecoinFoundation],
    drivers: [
      { title: "Community attention", detail: "DOGE can move when social activity and retail participation rise quickly." },
      { title: "Meme-sector rotation", detail: "Capital can rotate into DOGE when traders seek large, liquid meme exposure." },
      { title: "Large-holder movement", detail: "Wallet concentration and exchange transfers can affect perceived supply pressure." },
      { title: "Payment and integration headlines", detail: "Any payment-use discussion can change how traders frame DOGE utility." },
    ],
    publicRisks: [
      { risk: "Attention reversal", watch: "Community-driven moves can fade quickly when attention leaves." },
      { risk: "Large-holder concentration", watch: "Whale movement can create sudden supply pressure." },
      { risk: "Headline dependence", watch: "DOGE can react to social posts before durable market structure forms." },
    ],
    lab: {
      deskBrief:
        "Dogecoin is studied as a liquid attention-driven crypto asset. The Asset Lab reviews community activity, social bursts, whale movement, exchange depth, payment narratives, and meme-sector rotation to separate durable interest from short-lived crowd behavior.",
      researchQuestion:
        "Is DOGE moving because broad crypto liquidity improved, meme-sector attention returned, whales moved supply, or retail positioning crowded into social headlines?",
      operatingModel:
        "DOGE analysis starts with attention and liquidity. Price movement is more meaningful when social activity, exchange depth, and broad crypto risk appetite support the same read.",
      participants: [
        { name: "Dogecoin community", role: "Attention base", whyItMatters: "Community energy is central to DOGE's market identity." },
        { name: "Dogecoin developers and foundation", role: "Protocol support", whyItMatters: "Development and stewardship affect long-term credibility." },
        { name: "Large holders", role: "Supply pressure", whyItMatters: "Whale movement can affect short-term market confidence." },
        { name: "Exchanges and payment services", role: "Access and utility channels", whyItMatters: "Listings and integrations influence liquidity and use cases." },
      ],
      historicalEvents: [
        { year: "2013", title: "Dogecoin launches", detail: "DOGE begins as a lighthearted peer-to-peer digital currency." },
        { year: "2014", title: "Community funding moments", detail: "Early community campaigns make Dogecoin known beyond speculation." },
        { year: "2021", title: "Major retail attention cycle", detail: "Social-media attention and public-figure discussion pull DOGE into mainstream market focus." },
        { year: "2022-2026", title: "Meme-sector benchmark role", detail: "DOGE remains a reference asset for studying large-cap meme-asset behavior." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "DOGE usually needs broad crypto liquidity to hold larger moves.", learnerNote: "A weak BTC regime can make meme strength fragile." },
        { market: "Social attention", relationship: "DOGE is strongly tied to attention cycles.", learnerNote: "Attention should be checked against depth and structure." },
        { market: "Other meme assets", relationship: "DOGE can lead or lag meme-sector rotation.", learnerNote: "Compare DOGE with newer meme assets to see where capital is rotating." },
      ],
      riskMap: [
        { risk: "Crowded retail move", watch: "Fast attention can turn into fast exits." },
        { risk: "Whale transfer shock", watch: "Large exchange deposits can change the supply read." },
        { risk: "Thin follow-through", watch: "A social burst without volume quality can fail quickly." },
      ],
      researchRoutine: [
        "Review DOGE trend and meme-sector behavior.",
        "Check social attention, exchange balances, and whale movement.",
        "Compare DOGE volume and depth across major venues.",
        "Check BTC and broad crypto liquidity conditions.",
        "Classify the move as attention-led, liquidity-led, whale-led, or market beta.",
      ],
      relatedLessons: ["Level 8 Sentiment Analysis", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Twitter Influencer Monitoring", "Fear & Greed Index Contrarian", "Crowded Short Squeeze Play"],
    },
  },
  {
    slug: "cardano",
    name: "Cardano",
    symbol: "ADA",
    assetClass: "crypto",
    rank: 9,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Cardano? ADA Market Guide",
    seoDescription: "Learn what Cardano is, why ADA matters, what affects it, and how Lurnava studies proof-of-stake blockchain networks.",
    publicHeadline: "Cardano is a research-driven proof-of-stake blockchain.",
    publicSubheadline:
      "ADA is watched because it connects staking, governance, smart contracts, academic design, ecosystem growth, and long-term community conviction.",
    plainEnglish:
      "Cardano is a proof-of-stake blockchain platform. ADA is its native asset, used for fees, staking participation, governance activity, and value transfer inside the Cardano ecosystem.",
    marketRole:
      "Cardano is often studied as a long-horizon smart-contract ecosystem. Its market read depends on staking health, developer activity, governance progress, application liquidity, and broader crypto appetite.",
    whyTradersWatch:
      "Traders watch ADA for network upgrades, staking participation, DeFi growth, governance changes, developer activity, and relative strength against other smart-contract platforms.",
    lurnavaMonitorNote:
      "Lurnava studies Cardano through staking participation, governance milestones, upgrade progress, ecosystem activity, DeFi liquidity, and whether ADA strength is network-led or broad-market-led.",
    conversionCta:
      "Learn how to study proof-of-stake assets with network research, ecosystem review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.cardanoDocs, assetResearchSources.cardanoIntro],
    drivers: [
      { title: "Network upgrades", detail: "Protocol improvements can change expectations around scalability, governance, and application capability." },
      { title: "Staking participation", detail: "ADA staking behavior helps learners study holder conviction and network security participation." },
      { title: "Ecosystem growth", detail: "DeFi, applications, and developer activity help show whether Cardano is being used beyond holding." },
      { title: "Governance progress", detail: "Governance milestones can affect confidence in long-term network direction." },
    ],
    publicRisks: [
      { risk: "Slow adoption perception", watch: "Markets can discount networks if application activity grows slower than expectations." },
      { risk: "Upgrade expectation gap", watch: "A technical milestone may not immediately create usage or liquidity." },
      { risk: "Smart-contract competition", watch: "Cardano competes for developer and user attention with many other ecosystems." },
    ],
    lab: {
      deskBrief:
        "Cardano is studied as a proof-of-stake smart-contract ecosystem with a research-heavy identity. The Asset Lab reviews staking health, governance, upgrades, app liquidity, developer activity, and ADA's relative strength against competing networks.",
      researchQuestion:
        "Is ADA moving because Cardano usage improved, staking and governance confidence rose, an upgrade changed expectations, or broad smart-contract rotation lifted the sector?",
      operatingModel:
        "Cardano analysis separates long-term protocol progress from current market activity. A stronger ADA read needs ecosystem usage or governance progress, not only community conviction.",
      participants: [
        { name: "Stake pool operators", role: "Network participation layer", whyItMatters: "They support Cardano's proof-of-stake operation and decentralization." },
        { name: "Input Output and ecosystem developers", role: "Technical builders", whyItMatters: "Development progress affects upgrade timelines and capability." },
        { name: "Cardano community", role: "Governance and adoption base", whyItMatters: "Community participation can influence staking, governance, and ecosystem attention." },
        { name: "DeFi and application teams", role: "Usage creators", whyItMatters: "Applications turn protocol capability into measurable activity." },
      ],
      historicalEvents: [
        { year: "2017", title: "Cardano launches", detail: "ADA becomes publicly traded as Cardano begins its staged development roadmap." },
        { year: "2020", title: "Shelley staking era", detail: "Staking participation becomes central to Cardano's proof-of-stake identity." },
        { year: "2021", title: "Smart contracts arrive", detail: "Cardano adds smart-contract capability, expanding its application potential." },
        { year: "2024-2026", title: "Governance focus expands", detail: "Market attention includes decentralized governance and ecosystem maturity." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "ADA is often compared with other smart-contract platforms.", learnerNote: "Compare actual usage and developer activity, not only narratives." },
        { market: "Bitcoin", relationship: "ADA often needs broad crypto risk appetite to sustain advances.", learnerNote: "Sector rotation can fade if BTC weakens sharply." },
        { market: "DeFi liquidity", relationship: "Application liquidity can support the network-usage case.", learnerNote: "TVL-style metrics need quality checks and risk context." },
      ],
      riskMap: [
        { risk: "Roadmap delay", watch: "Delayed upgrades can weaken expectations." },
        { risk: "Usage gap", watch: "Technical progress needs users, liquidity, and applications." },
        { risk: "Sector crowding", watch: "Many smart-contract platforms compete for similar attention." },
      ],
      researchRoutine: [
        "Review ADA trend and relative strength against ETH and BTC.",
        "Check staking participation, governance updates, and upgrade progress.",
        "Review Cardano DeFi and application activity.",
        "Compare ecosystem growth against other smart-contract networks.",
        "Classify the move as protocol-led, usage-led, governance-led, or sector beta.",
      ],
      relatedLessons: ["Level 8 Network Adoption", "Level 9 Governance Risk"],
      relatedStrategies: ["Governance Proposal Trading", "Network Adoption Trend", "Ecosystem Developer Activity Play"],
    },
  },
  {
    slug: "tron",
    name: "TRON",
    symbol: "TRX",
    assetClass: "crypto",
    rank: 10,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is TRON? TRX Market Guide",
    seoDescription: "Understand TRON, TRX utility, stablecoin settlement, what affects it, and how Lurnava studies payment-heavy networks.",
    publicHeadline: "TRON is a high-activity network known for stablecoin settlement.",
    publicSubheadline:
      "TRX is watched because TRON carries heavy transfer activity, stablecoin movement, DeFi usage, resource mechanics, and payment-style crypto demand.",
    plainEnglish:
      "TRON is a blockchain network used for value transfer, smart contracts, and decentralized applications. TRX is its native asset and is used for fees, staking-style network participation, and resource mechanics.",
    marketRole:
      "TRON is important because a large amount of stablecoin activity travels through its network. That makes TRX useful for studying settlement demand, transfer behavior, and network resource economics.",
    whyTradersWatch:
      "Traders watch TRX for stablecoin transfer demand, network resources, DeFi activity, governance participation, exchange liquidity, and regulatory attention around payment rails.",
    lurnavaMonitorNote:
      "Lurnava studies TRON through USDT settlement activity, account growth, resource usage, DeFi liquidity, exchange balances, regulatory context, and whether TRX strength reflects real network demand.",
    conversionCta:
      "Learn how to study payment-heavy blockchain networks with on-chain review, liquidity mapping, and structured crypto education inside Lurnava.",
    sources: [assetResearchSources.tronTrxDocs, assetResearchSources.tronNetwork],
    drivers: [
      { title: "Stablecoin settlement", detail: "TRON is closely watched for USDT movement and low-cost transfer behavior." },
      { title: "Network resource demand", detail: "TRX has resource mechanics tied to bandwidth, energy, and network usage." },
      { title: "DeFi and app activity", detail: "Lending, liquidity, and application use can affect demand for the network." },
      { title: "Regulatory attention", detail: "Payment-heavy networks can face policy scrutiny around transfers and stablecoins." },
    ],
    publicRisks: [
      { risk: "Stablecoin concentration", watch: "Heavy reliance on stablecoin settlement means TRON can be sensitive to stablecoin policy or issuer changes." },
      { risk: "Regulatory pressure", watch: "Payment and transfer networks can draw attention from compliance authorities." },
      { risk: "Usage-quality question", watch: "High transaction count needs context around real users, apps, and economic value." },
    ],
    lab: {
      deskBrief:
        "TRON is studied as a settlement-heavy blockchain. The Asset Lab reviews stablecoin transfer volume, resource mechanics, account activity, DeFi liquidity, regulatory context, and whether TRX demand is connected to network use.",
      researchQuestion:
        "Is TRX moving because TRON settlement demand improved, stablecoin activity expanded, resource demand changed, or broad crypto liquidity lifted the market?",
      operatingModel:
        "Start with stablecoin movement and resource usage, then compare app activity, liquidity, and regulatory context. TRX analysis is strongest when network activity and market depth agree.",
      participants: [
        { name: "TRON validators and governance participants", role: "Network operators", whyItMatters: "They support block production, resource mechanics, and governance." },
        { name: "Stablecoin issuers and users", role: "Settlement flow source", whyItMatters: "Stablecoin transfers are central to TRON's market role." },
        { name: "DeFi protocols", role: "Liquidity venues", whyItMatters: "Application demand can make network usage more economically meaningful." },
        { name: "Exchanges and payment services", role: "Access layer", whyItMatters: "Venue and payment support affect how easily TRX and stablecoins move." },
      ],
      historicalEvents: [
        { year: "2017", title: "TRON founded", detail: "The project begins with a focus on decentralized internet and content infrastructure." },
        { year: "2018", title: "Mainnet and token migration", detail: "TRON moves into its own network environment." },
        { year: "2020-2022", title: "Stablecoin settlement grows", detail: "TRON becomes widely used for stablecoin transfers." },
        { year: "2023-2026", title: "Payment-rail scrutiny increases", detail: "Stablecoin-heavy transfer networks receive more market and regulatory attention." },
      ],
      correlations: [
        { market: "USDT", relationship: "TRON is heavily connected to stablecoin movement.", learnerNote: "Track stablecoin flow quality, not only transfer count." },
        { market: "Bitcoin", relationship: "TRX can follow broad crypto risk appetite.", learnerNote: "A TRX-specific read should show TRON network confirmation." },
        { market: "DeFi lending", relationship: "TRON liquidity can show economic use beyond transfers.", learnerNote: "Check protocol risk before treating liquidity as strength." },
      ],
      riskMap: [
        { risk: "Policy shock", watch: "Stablecoin-transfer networks can face compliance pressure." },
        { risk: "Low-quality activity", watch: "Transaction count can overstate economic demand." },
        { risk: "Stablecoin issuer dependency", watch: "Changes in stablecoin support can affect network activity." },
      ],
      researchRoutine: [
        "Review TRX trend and TRON stablecoin transfer activity.",
        "Check network resource use, active accounts, and app liquidity.",
        "Scan stablecoin issuer and regulatory context.",
        "Compare TRX movement with BTC and other payment-network assets.",
        "Classify the move as settlement-led, resource-led, policy-led, or broad-market beta.",
      ],
      relatedLessons: ["Level 8 On-Chain Flows", "Level 9 Stablecoin Risk"],
      relatedStrategies: ["Stablecoin Supply Ratio Strategy", "Peg Maintenance Strategy", "Regulatory Event Trading"],
    },
  },
  {
    slug: "toncoin",
    name: "Toncoin",
    symbol: "TON",
    assetClass: "crypto",
    rank: 11,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Toncoin? TON Market Guide",
    seoDescription: "Learn what Toncoin is, why TON matters, what affects it, and how Lurnava studies Telegram-linked crypto ecosystems.",
    publicHeadline: "Toncoin is the native asset of The Open Network ecosystem.",
    publicSubheadline:
      "TON is watched because it connects scalable blockchain design, wallet adoption, Telegram-linked distribution, mini-app activity, and payment-style crypto use.",
    plainEnglish:
      "Toncoin is the native asset of The Open Network, a blockchain ecosystem designed for scalable applications and payments. Its market story is closely tied to user distribution and app adoption.",
    marketRole:
      "TON is studied as a distribution-led ecosystem asset. Because Telegram-linked access can bring many users near crypto apps, traders watch whether attention turns into durable on-chain activity.",
    whyTradersWatch:
      "Traders watch TON for wallet adoption, mini-app activity, ecosystem grants, payments, exchange liquidity, developer growth, and regulatory risk around distribution channels.",
    lurnavaMonitorNote:
      "Lurnava studies TON through wallet activity, app usage, payments, ecosystem launches, exchange depth, distribution quality, and whether growth is sticky or only campaign-driven.",
    conversionCta:
      "Learn how to study user-distribution crypto ecosystems with adoption research, risk review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.tonHome, assetResearchSources.tonDocs],
    drivers: [
      { title: "User distribution", detail: "TON is watched for how easily users can reach apps and wallets through its ecosystem." },
      { title: "Mini-app and payment activity", detail: "Consumer-facing apps and payments can show whether adoption is practical." },
      { title: "Ecosystem incentives", detail: "Grants and campaigns can create growth, but learners must separate durable use from temporary rewards." },
      { title: "Exchange liquidity", detail: "TON's market quality depends on depth, venue support, and derivatives conditions." },
    ],
    publicRisks: [
      { risk: "Campaign-driven activity", watch: "Incentives can inflate usage without long-term retention." },
      { risk: "Distribution dependency", watch: "TON's market story can be sensitive to app-store, platform, or Telegram-linked access." },
      { risk: "Regulatory attention", watch: "Payment and messaging-linked crypto tools can face policy scrutiny." },
    ],
    lab: {
      deskBrief:
        "TON is studied as a user-distribution and application ecosystem. The Asset Lab reviews wallet growth, mini-app activity, payments, exchange liquidity, incentives, developer progress, and platform-dependency risk.",
      researchQuestion:
        "Is TON moving because real users are adopting the network, ecosystem incentives are pulling temporary activity, exchange access improved, or broad crypto risk appetite lifted the asset?",
      operatingModel:
        "TON analysis starts with adoption quality. A strong profile connects wallet growth, app usage, payments, and liquidity rather than relying only on social reach.",
      participants: [
        { name: "TON Foundation and ecosystem teams", role: "Growth support", whyItMatters: "They influence grants, developer activity, and ecosystem direction." },
        { name: "Wallet and mini-app developers", role: "User interface builders", whyItMatters: "They turn network capability into user-facing products." },
        { name: "Telegram-linked user base", role: "Distribution channel", whyItMatters: "Large distribution can matter if users become active on-chain participants." },
        { name: "Exchanges and liquidity providers", role: "Market access", whyItMatters: "Depth and access determine whether TON can absorb demand or stress." },
      ],
      historicalEvents: [
        { year: "2018", title: "Original TON concept emerges", detail: "Telegram-linked blockchain plans bring early attention to the network idea." },
        { year: "2020", title: "Community development continues", detail: "The Open Network continues through community-led work after legal setbacks." },
        { year: "2022-2024", title: "Wallet and ecosystem growth", detail: "TON gains attention through wallets, apps, and user-distribution narratives." },
        { year: "2024-2026", title: "Mini-app and payment focus", detail: "Market attention shifts to whether distribution becomes durable usage." },
      ],
      correlations: [
        { market: "Telegram-linked adoption", relationship: "TON's thesis is closely tied to user distribution.", learnerNote: "Distribution matters only when it turns into sustained activity." },
        { market: "Bitcoin", relationship: "TON can still follow broad crypto liquidity.", learnerNote: "Separate ecosystem strength from market beta." },
        { market: "Consumer crypto apps", relationship: "Mini-app activity can support the adoption story.", learnerNote: "Check retention and economic value, not only user count." },
      ],
      riskMap: [
        { risk: "Platform dependency", watch: "Changes in app distribution or policy can affect TON attention." },
        { risk: "Incentive fade", watch: "Activity may weaken when rewards end." },
        { risk: "Liquidity mismatch", watch: "Fast attention can outrun available market depth." },
      ],
      researchRoutine: [
        "Review TON trend and exchange depth.",
        "Check wallet activity, mini-app usage, and payment-related updates.",
        "Scan ecosystem incentives and whether activity persists after campaigns.",
        "Compare TON strength with BTC and other consumer-crypto assets.",
        "Classify the move as adoption-led, incentive-led, platform-led, or market beta.",
      ],
      relatedLessons: ["Level 8 Network Adoption", "Level 8 Narrative Rotation"],
      relatedStrategies: ["Narrative Rotation Strategy", "Network Adoption Trend", "Ecosystem Growth Play"],
    },
  },
  {
    slug: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    assetClass: "crypto",
    rank: 12,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Avalanche? AVAX Market Guide",
    seoDescription: "Understand Avalanche, AVAX, subnets, what affects the network, and how Lurnava studies application-chain ecosystems.",
    publicHeadline: "Avalanche is a high-performance blockchain ecosystem built for custom networks.",
    publicSubheadline:
      "AVAX is watched because Avalanche connects smart contracts, custom blockchain networks, DeFi activity, gaming, institutions, and ecosystem liquidity.",
    plainEnglish:
      "Avalanche is a blockchain platform that supports fast settlement and custom blockchain environments. AVAX is the native asset used for fees, staking, and network participation.",
    marketRole:
      "Avalanche is studied as an application-chain ecosystem. Its market read depends on C-Chain activity, custom network adoption, DeFi liquidity, gaming projects, institutional experiments, and AVAX staking behavior.",
    whyTradersWatch:
      "Traders watch AVAX for network activity, subnet or L1 adoption, DeFi growth, institutional pilots, validator economics, liquidity depth, and relative strength among smart-contract platforms.",
    lurnavaMonitorNote:
      "Lurnava studies Avalanche through C-Chain usage, custom network adoption, validator and staking data, ecosystem launches, DeFi liquidity, institutional activity, and market depth.",
    conversionCta:
      "Learn how to study application-chain ecosystems with network research, DeFi review, liquidity mapping, and structured training inside Lurnava.",
    sources: [assetResearchSources.avalancheHome, assetResearchSources.avalancheDocs],
    drivers: [
      { title: "Custom network adoption", detail: "Avalanche's app-chain design is central to how traders judge ecosystem growth." },
      { title: "C-Chain activity", detail: "Transactions, fees, and DeFi use on the main smart-contract chain show current demand." },
      { title: "Institutional and gaming use cases", detail: "Avalanche often attracts attention when custom network experiments move forward." },
      { title: "Validator and staking behavior", detail: "AVAX staking and validator participation affect network security and liquid supply." },
    ],
    publicRisks: [
      { risk: "Adoption fragmentation", watch: "Custom networks can spread activity across separate environments, making demand harder to read." },
      { risk: "Ecosystem competition", watch: "Avalanche competes with many smart-contract and app-chain platforms." },
      { risk: "Incentive-driven liquidity", watch: "DeFi activity may weaken when incentives decline." },
    ],
    lab: {
      deskBrief:
        "Avalanche is studied as a customizable blockchain ecosystem. The Asset Lab reviews C-Chain activity, custom network adoption, validator participation, staking, DeFi liquidity, gaming and institutional use cases, and AVAX market depth.",
      researchQuestion:
        "Is AVAX moving because Avalanche usage improved, custom networks gained traction, DeFi liquidity expanded, staking behavior changed, or smart-contract sector rotation lifted the asset?",
      operatingModel:
        "Avalanche analysis separates current C-Chain demand from longer-term custom network adoption. A strong AVAX read should show usage, liquidity, and ecosystem evidence together.",
      participants: [
        { name: "Validators", role: "Network security", whyItMatters: "Validator participation supports consensus and staking economics." },
        { name: "Custom network builders", role: "Ecosystem expansion", whyItMatters: "They create the specialized networks that define Avalanche's differentiation." },
        { name: "DeFi protocols", role: "Liquidity venues", whyItMatters: "DeFi activity shows whether users and capital are active." },
        { name: "Institutional and gaming teams", role: "Use-case adopters", whyItMatters: "These teams can turn Avalanche infrastructure into concrete demand." },
      ],
      historicalEvents: [
        { year: "2020", title: "Avalanche mainnet launches", detail: "The network begins public operation with a focus on fast finality and flexible infrastructure." },
        { year: "2021", title: "DeFi incentive cycle", detail: "Avalanche gains attention as liquidity and applications expand." },
        { year: "2022-2023", title: "Subnet focus grows", detail: "Custom network architecture becomes a central part of the Avalanche thesis." },
        { year: "2024-2026", title: "Institutional and app-chain focus", detail: "Market attention includes gaming, tokenization, and custom network adoption." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "Avalanche competes for smart-contract users and liquidity.", learnerNote: "Compare fees, usage, and liquidity depth." },
        { market: "Bitcoin", relationship: "AVAX often needs broad crypto risk appetite.", learnerNote: "Sector strength can fade if BTC regime weakens." },
        { market: "DeFi liquidity", relationship: "Avalanche demand can rise with active application liquidity.", learnerNote: "Check whether liquidity is incentive-supported or organic." },
      ],
      riskMap: [
        { risk: "Fragmented demand", watch: "Custom networks may make activity harder to measure from one dashboard." },
        { risk: "Liquidity incentive fade", watch: "Capital can leave when rewards weaken." },
        { risk: "Sector competition", watch: "Other app-chain ecosystems can pull developers and users away." },
      ],
      researchRoutine: [
        "Review AVAX trend and relative strength against ETH and SOL.",
        "Check C-Chain activity, DeFi liquidity, and fees.",
        "Scan custom network launches and institutional use-case updates.",
        "Review staking, validator participation, and exchange depth.",
        "Classify the move as usage-led, custom-network-led, DeFi-led, or sector beta.",
      ],
      relatedLessons: ["Level 8 Ecosystem Growth", "Level 9 Liquidity Risk"],
      relatedStrategies: ["Ecosystem Growth Play", "Technical + Fundamental Confirmation", "Liquidity Risk Assessment"],
    },
  },
  {
    slug: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    assetClass: "crypto",
    rank: 13,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Chainlink? LINK Oracle Guide",
    seoDescription: "Learn what Chainlink is, why LINK matters, what affects it, and how Lurnava studies oracle and infrastructure assets.",
    publicHeadline: "Chainlink is crypto's leading oracle and data-infrastructure network.",
    publicSubheadline:
      "LINK is watched because smart contracts need reliable external data, cross-chain messaging, proof-of-reserve tools, automation, and institutional connectivity.",
    plainEnglish:
      "Chainlink is a decentralized oracle network that helps smart contracts use external data and services. LINK is the asset connected to the Chainlink ecosystem and its network economics.",
    marketRole:
      "Chainlink is an infrastructure asset. Instead of being only a base blockchain, it supports data feeds, automation, cross-chain communication, and other services used by applications across many networks.",
    whyTradersWatch:
      "Traders watch LINK for oracle adoption, DeFi integration, cross-chain infrastructure use, staking updates, institutional partnerships, and whether network usage translates into stronger token economics.",
    lurnavaMonitorNote:
      "Lurnava studies Chainlink through oracle usage, data-feed adoption, cross-chain messaging, staking, institutional integrations, DeFi dependency, and LINK relative strength versus other infrastructure assets.",
    conversionCta:
      "Learn how to study crypto infrastructure assets through adoption review, protocol-risk mapping, and structured market training inside Lurnava.",
    sources: [assetResearchSources.chainlinkHome, assetResearchSources.chainlinkDocs],
    drivers: [
      { title: "Oracle adoption", detail: "More integrations can show that applications rely on Chainlink data services." },
      { title: "Cross-chain infrastructure", detail: "Messaging and interoperability products can expand Chainlink's role beyond price feeds." },
      { title: "Staking and token economics", detail: "Staking updates can affect how market participants think about LINK utility and supply behavior." },
      { title: "Institutional integrations", detail: "Partnerships with financial infrastructure can affect Chainlink's long-term adoption narrative." },
    ],
    publicRisks: [
      { risk: "Adoption-to-token gap", watch: "Network adoption does not always translate directly into LINK demand." },
      { risk: "Infrastructure competition", watch: "Oracle, data, and interoperability markets have competing providers." },
      { risk: "Protocol dependency risk", watch: "DeFi applications depending on oracles need reliable data delivery during stress." },
    ],
    lab: {
      deskBrief:
        "Chainlink is studied as a crypto infrastructure network. The Asset Lab reviews oracle adoption, data-feed usage, cross-chain messaging, staking changes, institutional integrations, DeFi dependency, and whether LINK token behavior reflects network usage.",
      researchQuestion:
        "Is LINK moving because Chainlink adoption improved, staking economics changed, infrastructure demand expanded, institutional integrations advanced, or broad crypto rotation lifted infrastructure assets?",
      operatingModel:
        "Chainlink analysis separates network adoption from token-market behavior. A stronger LINK read connects integrations, usage quality, staking context, and relative strength rather than relying only on partnership headlines.",
      participants: [
        { name: "Oracle node operators", role: "Data delivery layer", whyItMatters: "They support the reliability of Chainlink services used by smart contracts." },
        { name: "DeFi protocols", role: "Data consumers", whyItMatters: "Many protocols depend on oracle data for pricing, collateral, and liquidation logic." },
        { name: "Chainlink Labs and ecosystem teams", role: "Development and adoption support", whyItMatters: "They drive product expansion, integrations, and institutional outreach." },
        { name: "Financial institutions and data providers", role: "External infrastructure partners", whyItMatters: "They can expand Chainlink's role in tokenized assets and market data." },
      ],
      historicalEvents: [
        { year: "2017", title: "Chainlink project launches", detail: "The network focuses on connecting smart contracts with external data." },
        { year: "2019-2020", title: "DeFi oracle demand grows", detail: "Price feeds become central to lending and trading protocols." },
        { year: "2022", title: "Staking begins", detail: "Staking introduces a new layer to Chainlink network economics." },
        { year: "2023-2026", title: "Cross-chain and institutional focus", detail: "Market attention expands to interoperability and capital-market infrastructure." },
      ],
      correlations: [
        { market: "Ethereum DeFi", relationship: "Chainlink usage is deeply tied to DeFi application demand.", learnerNote: "DeFi growth can support oracle demand but does not automatically reprice LINK." },
        { market: "Infrastructure tokens", relationship: "LINK can rotate with other middleware and data assets.", learnerNote: "Compare adoption quality and token economics." },
        { market: "Tokenized assets", relationship: "Institutional infrastructure work can support the long-term narrative.", learnerNote: "Separate pilot announcements from production usage." },
      ],
      riskMap: [
        { risk: "Token-value capture gap", watch: "Integrations may not immediately create LINK demand." },
        { risk: "Oracle incident", watch: "Data-delivery failures can affect confidence in oracle infrastructure." },
        { risk: "Partnership overreaction", watch: "Announcements need follow-through and usage evidence." },
      ],
      researchRoutine: [
        "Review LINK trend and relative strength against BTC, ETH, and infrastructure tokens.",
        "Check new Chainlink integrations and whether they are active or exploratory.",
        "Review staking, token economics, and network service updates.",
        "Scan DeFi usage, oracle dependency, and cross-chain product activity.",
        "Classify the move as adoption-led, staking-led, partnership-led, or sector beta.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 DeFi Protocol Risk"],
      relatedStrategies: ["Technical + Fundamental Confirmation", "On-Chain + Technical Confluence", "Multi-Factor Quant Scoring"],
    },
  },
  {
    slug: "shiba-inu",
    name: "Shiba Inu",
    symbol: "SHIB",
    assetClass: "crypto",
    rank: 14,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Shiba Inu? SHIB Market Guide",
    seoDescription: "Learn what Shiba Inu is, why SHIB is watched, what affects it, and how Lurnava studies meme-led crypto assets with real ecosystem checks.",
    publicHeadline: "Shiba Inu is a meme-led crypto asset with a growing ecosystem layer.",
    publicSubheadline:
      "SHIB is watched because community attention, exchange liquidity, token burns, Ethereum costs, Shibarium development, and meme-sector rotation can move it quickly.",
    plainEnglish:
      "Shiba Inu started as a meme token on Ethereum and became a large community-led crypto asset. Today SHIB is studied through both attention cycles and ecosystem work around Shibarium.",
    marketRole:
      "SHIB sits in the meme and community asset lane. It does not behave like a base settlement network, so the key lesson is how attention, liquidity, burns, and ecosystem promises affect price behavior.",
    whyTradersWatch:
      "Traders watch SHIB for meme-sector rotation, exchange volume, burn updates, Shibarium usage, Ethereum fee conditions, whale wallet behavior, and whether community attention is broadening or fading.",
    lurnavaMonitorNote:
      "Lurnava studies SHIB through social attention quality, spot and perpetual liquidity, Shibarium activity, holder concentration, burn data, Ethereum network context, and comparison with other meme assets.",
    conversionCta:
      "Learn how to study high-attention crypto assets with risk controls, source review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.shibaDocs, assetResearchSources.shibariumOverview],
    drivers: [
      { title: "Community attention", detail: "SHIB often moves when social attention expands across exchanges, wallets, and broader crypto media." },
      { title: "Shibarium activity", detail: "Usage of Shibarium can affect whether the market treats SHIB as only a meme asset or part of a wider ecosystem." },
      { title: "Burn and supply narrative", detail: "Burn updates can affect market psychology, especially when traders are focused on circulating supply." },
      { title: "Meme-sector rotation", detail: "SHIB can move with other meme assets when speculative capital rotates toward high-attention tokens." },
    ],
    publicRisks: [
      { risk: "Attention reversal", watch: "When social interest cools, SHIB can lose momentum very quickly." },
      { risk: "Thin order-book pockets", watch: "Fast meme moves can create slippage during rushed entries and exits." },
      { risk: "Ecosystem expectation gap", watch: "Shibarium headlines need real usage evidence before students treat them as durable drivers." },
    ],
    lab: {
      deskBrief:
        "SHIB is studied as a high-attention community asset with an attached ecosystem story. The Asset Lab separates meme-sector rotation from Shibarium usage, burn data, liquidity conditions, whale concentration, and whether attention is broad or only headline-driven.",
      researchQuestion:
        "Is SHIB moving because community attention expanded, Shibarium usage improved, burn headlines changed supply perception, meme-sector rotation lifted the asset, or leverage created a short-lived move?",
      operatingModel:
        "SHIB analysis starts with attention and liquidity, then checks whether ecosystem evidence supports the move. A stronger read connects social breadth, exchange depth, on-chain holder behavior, Shibarium usage, and sector rotation.",
      participants: [
        { name: "SHIB holders and community", role: "Attention base", whyItMatters: "Community participation can affect social reach, exchange activity, and meme-sector momentum." },
        { name: "Shibarium developers and validators", role: "Ecosystem infrastructure", whyItMatters: "Network usage helps students judge whether the ecosystem story has real activity." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "SHIB liquidity and derivatives access can magnify both strong moves and sharp reversals." },
        { name: "Large wallets", role: "Concentration risk", whyItMatters: "Large holder movement can affect supply pressure and market confidence." },
      ],
      historicalEvents: [
        { year: "2020", title: "SHIB launches on Ethereum", detail: "The asset begins as a meme-led ERC-20 token with a community-first identity." },
        { year: "2021", title: "Meme-sector expansion", detail: "SHIB becomes one of the most watched meme assets during the broad crypto retail cycle." },
        { year: "2023", title: "Shibarium expands the ecosystem story", detail: "The market begins watching whether Shibarium can create sustained network usage." },
        { year: "2024-2026", title: "Meme rotation becomes a separate market lane", detail: "SHIB is increasingly compared with newer meme assets during attention-led rotations." },
      ],
      correlations: [
        { market: "Meme assets", relationship: "SHIB often trades with the wider meme-token basket.", learnerNote: "Compare SHIB against DOGE and newer meme assets before assuming the move is SHIB-specific." },
        { market: "Ethereum fees", relationship: "Ethereum conditions can affect token movement, wallet behavior, and ecosystem activity.", learnerNote: "High network costs can change participation behavior." },
        { market: "Exchange derivatives", relationship: "Perpetual futures activity can amplify sharp SHIB moves.", learnerNote: "A move driven by leverage can unwind faster than a spot-led move." },
      ],
      riskMap: [
        { risk: "Social-only move", watch: "Price can rise before evidence appears in usage or liquidity depth." },
        { risk: "Whale distribution", watch: "Large wallet movement can pressure the market during crowded conditions." },
        { risk: "Ecosystem overstatement", watch: "Students should verify Shibarium activity instead of relying on broad community claims." },
      ],
      researchRoutine: [
        "Review SHIB trend and compare it with DOGE and the wider meme-token basket.",
        "Check exchange volume, funding, open interest, and order-book depth before judging move quality.",
        "Review Shibarium activity and whether usage improved beyond headline attention.",
        "Check burn data, large wallet transfers, and holder concentration changes.",
        "Classify the move as community-led, Shibarium-led, burn-led, sector-led, or leverage-led.",
      ],
      relatedLessons: ["Level 4 Market Sentiment", "Level 9 Crypto Risk Mapping"],
      relatedStrategies: ["News Catalyst Momentum", "Volume Spike Breakout", "Sentiment + Technical Overlay"],
    },
  },
  {
    slug: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    assetClass: "crypto",
    rank: 15,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Polkadot? DOT Network Guide",
    seoDescription: "Learn what Polkadot is, why DOT matters, what affects it, and how Lurnava studies interoperability and shared-security assets.",
    publicHeadline: "Polkadot is an interoperability network built around shared security.",
    publicSubheadline:
      "DOT is watched because Polkadot connects application chains, governance, staking, ecosystem upgrades, developer activity, and cross-chain infrastructure demand.",
    plainEnglish:
      "Polkadot is designed to let different blockchains and applications connect under a shared security model. DOT is the asset tied to staking, governance, and network participation.",
    marketRole:
      "Polkadot sits in the interoperability and infrastructure lane. Students study it to understand how app-specific chains, shared security, governance, and ecosystem upgrades can affect token behavior.",
    whyTradersWatch:
      "Traders watch DOT for staking yields, governance decisions, ecosystem upgrades, developer adoption, parachain and app-chain activity, and whether cross-chain infrastructure gains market attention.",
    lurnavaMonitorNote:
      "Lurnava studies Polkadot through governance activity, staking behavior, developer traction, ecosystem migration, app-chain usage, treasury decisions, and DOT relative strength versus infrastructure tokens.",
    conversionCta:
      "Learn how to study interoperability assets through ecosystem review, governance tracking, and structured market training inside Lurnava.",
    sources: [assetResearchSources.polkadotHome, assetResearchSources.polkadotDocs],
    drivers: [
      { title: "Shared-security adoption", detail: "More useful applications using Polkadot infrastructure can support the network's long-term relevance." },
      { title: "Governance decisions", detail: "DOT holders can influence treasury use and protocol changes, which can affect market expectations." },
      { title: "Staking participation", detail: "Staking affects circulating supply behavior and how holders think about network security." },
      { title: "Ecosystem upgrades", detail: "Polkadot changes can shift attention toward new app deployment models and cross-chain use cases." },
    ],
    publicRisks: [
      { risk: "Complexity risk", watch: "Polkadot can be harder for new students to understand than simple payment coins." },
      { risk: "Adoption gap", watch: "Infrastructure value depends on real application demand, not only technical design." },
      { risk: "Governance disagreement", watch: "Major treasury or protocol choices can divide market opinion." },
    ],
    lab: {
      deskBrief:
        "Polkadot is studied as a shared-security and interoperability asset. The Asset Lab reviews DOT staking, governance participation, app-chain usage, developer activity, ecosystem upgrades, treasury decisions, and whether cross-chain demand is strengthening.",
      researchQuestion:
        "Is DOT moving because Polkadot usage improved, governance changed expectations, staking behavior shifted, ecosystem upgrades gained attention, or infrastructure assets rotated together?",
      operatingModel:
        "Polkadot analysis separates technical capability from adoption evidence. A stronger DOT read connects real app activity, governance quality, staking context, developer momentum, and sector-relative behavior.",
      participants: [
        { name: "DOT stakers", role: "Security participants", whyItMatters: "They help secure the network and affect liquid supply behavior." },
        { name: "Polkadot governance voters", role: "Protocol stewards", whyItMatters: "Governance choices can change treasury spending, upgrades, and ecosystem priorities." },
        { name: "Application-chain teams", role: "Demand creators", whyItMatters: "Useful applications are needed for Polkadot infrastructure to matter to users." },
        { name: "Developers and infrastructure providers", role: "Ecosystem builders", whyItMatters: "Developer tooling and integrations affect whether teams keep building on Polkadot." },
      ],
      historicalEvents: [
        { year: "2020", title: "Polkadot mainnet begins", detail: "The network launches around shared security and interoperability." },
        { year: "2021", title: "Parachain auctions gain attention", detail: "Market focus turns to app-chain slots and ecosystem expansion." },
        { year: "2022-2023", title: "Governance and treasury activity grows", detail: "Polkadot becomes a major case study in on-chain governance." },
        { year: "2024-2026", title: "Polkadot evolves its application model", detail: "Students watch whether upgrades simplify deployment and improve adoption." },
      ],
      correlations: [
        { market: "Infrastructure tokens", relationship: "DOT often rotates with other interoperability and base-layer assets.", learnerNote: "Compare DOT with ATOM, AVAX, and NEAR for sector context." },
        { market: "Staking markets", relationship: "Staking participation can affect liquid supply and holder behavior.", learnerNote: "High staking does not remove market risk, but it changes supply context." },
        { market: "Developer ecosystems", relationship: "Sustained developer activity can support long-term confidence.", learnerNote: "Look for deployed products and usage, not only technical announcements." },
      ],
      riskMap: [
        { risk: "Low application demand", watch: "Infrastructure can remain underpriced or ignored if users do not arrive." },
        { risk: "Upgrade misunderstanding", watch: "Technical upgrades may be misread by traders who do not understand the network." },
        { risk: "Treasury controversy", watch: "Governance spending can affect community trust and market opinion." },
      ],
      researchRoutine: [
        "Review DOT trend and relative strength against infrastructure tokens.",
        "Check governance proposals, treasury activity, and major protocol decisions.",
        "Review staking participation, unlock behavior, and liquid supply context.",
        "Scan application-chain usage, developer updates, and ecosystem deployments.",
        "Classify the move as governance-led, staking-led, upgrade-led, adoption-led, or sector-led.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Governance Risk"],
      relatedStrategies: ["Sector Rotation Strategy", "Technical + Fundamental Confirmation", "Trend Continuation With Fundamentals"],
    },
  },
  {
    slug: "bitcoin-cash",
    name: "Bitcoin Cash",
    symbol: "BCH",
    assetClass: "crypto",
    rank: 16,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Bitcoin Cash? BCH Market Guide",
    seoDescription: "Learn what Bitcoin Cash is, why BCH is watched, what affects it, and how Lurnava studies payment-focused crypto assets.",
    publicHeadline: "Bitcoin Cash is a payment-focused fork of the Bitcoin network history.",
    publicSubheadline:
      "BCH is watched because it keeps the electronic-cash idea front and center, with market interest around payments, halvings, exchange liquidity, and Bitcoin-linked rotation.",
    plainEnglish:
      "Bitcoin Cash was created from a Bitcoin network split and focuses on peer-to-peer electronic cash with low-cost transactions. BCH is studied as a payment asset with Bitcoin-family roots.",
    marketRole:
      "BCH sits in the payment-coin lane. Students use it to compare store-of-value narratives, payment utility, proof-of-work security, fixed supply, and how fork history can shape market perception.",
    whyTradersWatch:
      "Traders watch BCH for Bitcoin rotation, payment adoption, miner economics, halving cycles, exchange liquidity, network upgrade debates, and whether proof-of-work payment coins gain attention.",
    lurnavaMonitorNote:
      "Lurnava studies BCH through Bitcoin-relative behavior, transaction activity, miner conditions, proof-of-work security, payment-coin rotation, liquidity depth, and narrative separation from BTC.",
    conversionCta:
      "Learn how to study proof-of-work payment assets through structure, adoption checks, and market training inside Lurnava.",
    sources: [assetResearchSources.bitcoinCashHome, assetResearchSources.bitcoinCashInfo],
    drivers: [
      { title: "Bitcoin-family rotation", detail: "BCH can attract attention when traders rotate across assets connected to Bitcoin history." },
      { title: "Payment utility", detail: "Low-cost transaction use can support the electronic-cash narrative." },
      { title: "Miner economics", detail: "Proof-of-work security depends on mining incentives and network participation." },
      { title: "Halving cycle attention", detail: "Supply issuance changes can affect how traders frame BCH during cycle analysis." },
    ],
    publicRisks: [
      { risk: "BTC comparison pressure", watch: "BCH is often judged against Bitcoin, which can overshadow its separate payment thesis." },
      { risk: "Adoption evidence gap", watch: "Payment claims need real usage checks and merchant activity context." },
      { risk: "Mining security context", watch: "Hashrate and miner incentives matter for confidence in proof-of-work networks." },
    ],
    lab: {
      deskBrief:
        "BCH is studied as a proof-of-work payment asset with Bitcoin-family history. The Asset Lab reviews BTC-relative behavior, payment activity, miner economics, halving cycle context, exchange liquidity, and whether electronic-cash demand is improving.",
      researchQuestion:
        "Is BCH moving because Bitcoin-linked rotation expanded, payment usage improved, miner economics changed, halving attention returned, or liquidity conditions created a temporary move?",
      operatingModel:
        "BCH analysis starts with its payment thesis, then checks proof-of-work security, miner incentives, transaction use, Bitcoin comparison, and liquidity. The best read separates BCH-specific demand from broad BTC beta.",
      participants: [
        { name: "BCH users", role: "Payment demand base", whyItMatters: "Payment use is central to the BCH thesis." },
        { name: "Miners", role: "Network security providers", whyItMatters: "Mining incentives help determine security and confidence." },
        { name: "Wallet and merchant providers", role: "Usability layer", whyItMatters: "Payment adoption depends on simple access and acceptance." },
        { name: "Exchange liquidity providers", role: "Market access layer", whyItMatters: "Depth affects how smoothly BCH absorbs large market orders." },
      ],
      historicalEvents: [
        { year: "2017", title: "Bitcoin Cash splits from Bitcoin", detail: "The network emerges from disagreement over scaling and block size." },
        { year: "2018", title: "Fork debates continue", detail: "Further network disagreements show how governance conflict can affect market trust." },
        { year: "2020", title: "Halving cycle changes issuance", detail: "BCH experiences reduced new coin issuance like other Bitcoin-family assets." },
        { year: "2024-2026", title: "Payment-coin role is re-evaluated", detail: "Students compare BCH with BTC, LTC, stablecoins, and faster settlement networks." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "BCH often reacts to Bitcoin-led market phases.", learnerNote: "Always compare BCH strength against BTC before calling the move asset-specific." },
        { market: "Payment coins", relationship: "BCH can rotate with LTC and other payment-focused crypto assets.", learnerNote: "Payment-coin baskets help show whether the move is sector-wide." },
        { market: "Mining economics", relationship: "Proof-of-work security depends on miner incentives and market value.", learnerNote: "Hashrate and miner behavior are part of the research map." },
      ],
      riskMap: [
        { risk: "Fork-history baggage", watch: "Old debates can still affect how investors frame BCH." },
        { risk: "Merchant adoption weakness", watch: "Low real-world payment use can weaken the core thesis." },
        { risk: "BTC dominance", watch: "Bitcoin strength can pull capital away from BCH during risk-off phases." },
      ],
      researchRoutine: [
        "Review BCH trend against BTC and LTC.",
        "Check transaction activity, payment adoption references, and wallet ecosystem updates.",
        "Review miner conditions, hashrate context, and halving-cycle discussion.",
        "Check exchange depth, funding, and spot volume quality.",
        "Classify the move as Bitcoin-beta, payment-adoption, miner-led, halving-led, or liquidity-led.",
      ],
      relatedLessons: ["Level 2 Market Structure Basics", "Level 7 Crypto Market Cycles"],
      relatedStrategies: ["Relative Strength Rotation", "Range Breakout Strategy", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    assetClass: "crypto",
    rank: 17,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Litecoin? LTC Payment Asset Guide",
    seoDescription: "Learn what Litecoin is, why LTC is watched, what affects it, and how Lurnava studies payment coins and proof-of-work market cycles.",
    publicHeadline: "Litecoin is a long-running proof-of-work payment asset.",
    publicSubheadline:
      "LTC is watched because it has deep exchange history, fast block timing, fixed supply, halving cycles, payment use, and strong comparison value against Bitcoin-family assets.",
    plainEnglish:
      "Litecoin is a peer-to-peer digital currency that uses proof of work and is often described as a lighter payment-focused relative of Bitcoin. LTC is studied for payments, cycles, and market maturity.",
    marketRole:
      "LTC sits in the payment and proof-of-work lane. Students use it to understand how older crypto assets behave when liquidity, halvings, payment use, and Bitcoin-relative rotation change.",
    whyTradersWatch:
      "Traders watch LTC for Bitcoin-relative strength, halving cycle attention, payment adoption, exchange liquidity, miner conditions, MWEB privacy discussion, and payment-coin sector rotation.",
    lurnavaMonitorNote:
      "Lurnava studies Litecoin through BTC and BCH comparison, payment usage, mining conditions, halving context, exchange depth, derivatives positioning, and whether LTC is leading or lagging older proof-of-work assets.",
    conversionCta:
      "Learn how to study mature crypto assets through cycle review, liquidity checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.litecoinHome, assetResearchSources.litecoinDocs],
    drivers: [
      { title: "Halving cycles", detail: "LTC issuance reductions can bring attention back to supply and miner economics." },
      { title: "Payment use", detail: "Litecoin's low-cost payment identity can matter when users seek simple transfer rails." },
      { title: "Bitcoin comparison", detail: "LTC is often judged against BTC because both are long-running proof-of-work assets." },
      { title: "Exchange maturity", detail: "LTC has deep listing history, which makes it useful for studying older-market liquidity behavior." },
    ],
    publicRisks: [
      { risk: "Narrative fatigue", watch: "Older assets can be ignored when markets chase newer sectors." },
      { risk: "Mining economics", watch: "Proof-of-work security depends on incentives and sustained participation." },
      { risk: "Payment competition", watch: "Stablecoins and faster networks compete with payment-coin use cases." },
    ],
    lab: {
      deskBrief:
        "Litecoin is studied as a mature proof-of-work payment asset. The Asset Lab reviews BTC-relative behavior, BCH comparison, payment use, halving-cycle context, miner economics, exchange depth, and whether old-cycle capital is rotating back into LTC.",
      researchQuestion:
        "Is LTC moving because payment-coin rotation returned, Bitcoin comparison improved, halving-cycle attention increased, miner context changed, or liquidity created a short-lived breakout?",
      operatingModel:
        "Litecoin analysis separates maturity from momentum. A stronger LTC read connects payment relevance, proof-of-work security, halving context, Bitcoin-relative strength, and market depth rather than relying on age alone.",
      participants: [
        { name: "Litecoin users", role: "Payment demand base", whyItMatters: "Payment use supports the core reason Litecoin exists." },
        { name: "Miners", role: "Security providers", whyItMatters: "Mining incentives and hashrate context affect confidence in proof-of-work settlement." },
        { name: "Wallet and merchant providers", role: "Access layer", whyItMatters: "Simple wallet support and merchant tools make payment use more practical." },
        { name: "Long-term holders", role: "Mature asset holders", whyItMatters: "Older-holder behavior can affect supply during major rotations." },
      ],
      historicalEvents: [
        { year: "2011", title: "Litecoin launches", detail: "The network begins as an early Bitcoin-inspired peer-to-peer currency." },
        { year: "2017", title: "SegWit attention grows", detail: "Litecoin becomes part of broader scaling and payment discussions." },
        { year: "2019-2023", title: "Halving cycles shape attention", detail: "Issuance reductions bring recurring focus to supply and miner economics." },
        { year: "2024-2026", title: "Payment role is compared with stablecoins", detail: "Students study how LTC competes with stablecoin payment rails and newer networks." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "LTC often trades as an older proof-of-work relative to BTC.", learnerNote: "BTC comparison helps show whether LTC has independent strength." },
        { market: "Bitcoin Cash", relationship: "LTC and BCH are often compared as payment-oriented proof-of-work assets.", learnerNote: "Compare both before judging payment-coin rotation." },
        { market: "Stablecoins", relationship: "Stablecoins compete with payment coins for transfer use cases.", learnerNote: "Payment usefulness is not only about low fees; users also care about price stability." },
      ],
      riskMap: [
        { risk: "Older asset neglect", watch: "Market attention can leave LTC behind during newer-sector cycles." },
        { risk: "Payment thesis pressure", watch: "If users prefer stablecoins, LTC payment demand may weaken." },
        { risk: "Halving overreaction", watch: "Halving narratives can be priced before the event." },
      ],
      researchRoutine: [
        "Review LTC trend versus BTC, BCH, and older proof-of-work assets.",
        "Check halving-cycle context, miner economics, and hashrate discussion.",
        "Review payment adoption references and wallet support.",
        "Check exchange depth, spot volume, funding, and open interest.",
        "Classify the move as Bitcoin-beta, payment-led, halving-led, miner-led, or rotation-led.",
      ],
      relatedLessons: ["Level 7 Crypto Market Cycles", "Level 8 Proof-of-Work Assets"],
      relatedStrategies: ["Relative Strength Rotation", "Trend Continuation With Fundamentals", "Range Breakout Strategy"],
    },
  },
  {
    slug: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    assetClass: "crypto",
    rank: 18,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Uniswap? UNI Protocol Guide",
    seoDescription: "Learn what Uniswap is, why UNI is watched, what affects it, and how Lurnava studies decentralized exchange governance assets.",
    publicHeadline: "Uniswap is a major decentralized exchange protocol with a governance asset.",
    publicSubheadline:
      "UNI is watched because Uniswap volume, liquidity, governance votes, fee discussions, regulatory pressure, and DeFi sector rotation can all affect market behavior.",
    plainEnglish:
      "Uniswap is a decentralized exchange protocol where users can swap crypto assets through smart contracts. UNI is mainly studied as a governance asset tied to the protocol ecosystem.",
    marketRole:
      "UNI sits in the DeFi governance lane. Students use it to understand protocol usage, liquidity pools, governance decisions, treasury choices, and the gap between protocol adoption and token value.",
    whyTradersWatch:
      "Traders watch UNI for decentralized exchange volume, liquidity pool depth, governance votes, fee-switch discussion, new protocol versions, regulatory headlines, and DeFi-sector rotation.",
    lurnavaMonitorNote:
      "Lurnava studies UNI through Uniswap volume, liquidity depth, governance proposals, treasury use, protocol fee debates, DEX market share, DeFi risk appetite, and UNI relative strength versus DeFi tokens.",
    conversionCta:
      "Learn how to study DeFi protocol assets through usage review, governance checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.uniswapDocs, assetResearchSources.uniswapGovernance],
    drivers: [
      { title: "DEX volume", detail: "Higher exchange usage can strengthen the protocol adoption story." },
      { title: "Governance votes", detail: "UNI holders can steer protocol and treasury decisions, which can shift market expectations." },
      { title: "Fee discussion", detail: "Protocol fee choices can change how traders think about token value capture." },
      { title: "DeFi rotation", detail: "UNI often moves when capital rotates toward decentralized finance assets." },
    ],
    publicRisks: [
      { risk: "Value-capture gap", watch: "Protocol use does not automatically create direct UNI demand." },
      { risk: "Regulatory pressure", watch: "DEX policy debates can affect market confidence." },
      { risk: "Liquidity competition", watch: "Other exchanges and aggregators compete for trading flow." },
    ],
    lab: {
      deskBrief:
        "UNI is studied as a DeFi governance asset tied to Uniswap protocol activity. The Asset Lab reviews DEX volume, liquidity depth, governance proposals, fee debates, treasury choices, regulatory pressure, and whether UNI is leading or lagging the DeFi sector.",
      researchQuestion:
        "Is UNI moving because Uniswap usage improved, governance changed fee expectations, DeFi rotation expanded, regulatory news shifted sentiment, or liquidity conditions created a temporary move?",
      operatingModel:
        "UNI analysis separates protocol success from token economics. A stronger read connects Uniswap usage, governance quality, possible value capture, regulatory context, and DeFi-sector relative strength.",
      participants: [
        { name: "Liquidity providers", role: "Market depth suppliers", whyItMatters: "Pool depth affects swap pricing and protocol usefulness." },
        { name: "Traders and aggregators", role: "Volume source", whyItMatters: "Swap demand drives protocol activity and DEX market share." },
        { name: "UNI governance voters", role: "Protocol stewards", whyItMatters: "Voting can affect treasury use, fees, and protocol direction." },
        { name: "Competing DEX protocols", role: "Market-share pressure", whyItMatters: "Competition can affect Uniswap volume and market expectations." },
      ],
      historicalEvents: [
        { year: "2018", title: "Uniswap launches", detail: "The automated market maker model becomes a core DeFi building block." },
        { year: "2020", title: "UNI launches", detail: "Governance begins and the market starts pricing a protocol-linked token." },
        { year: "2021-2023", title: "Protocol versions expand", detail: "New versions improve capital efficiency and trading design." },
        { year: "2024-2026", title: "Fee and governance debates remain central", detail: "Students watch whether governance choices improve token-market clarity." },
      ],
      correlations: [
        { market: "Ethereum DeFi", relationship: "Uniswap activity is deeply connected to Ethereum and Layer 2 trading.", learnerNote: "DEX activity can rise on multiple chains, so check where volume is coming from." },
        { market: "DeFi governance tokens", relationship: "UNI often rotates with AAVE, MKR, and other DeFi assets.", learnerNote: "Sector comparison helps separate UNI-specific catalysts from broad DeFi appetite." },
        { market: "Regulatory policy", relationship: "DEX policy discussion can affect DeFi valuations.", learnerNote: "Policy headlines need careful source review before students overreact." },
      ],
      riskMap: [
        { risk: "Protocol-token mismatch", watch: "High Uniswap usage may not directly benefit UNI unless governance or economics connect the two." },
        { risk: "DEX competition", watch: "Aggregators and rival exchanges can pressure market share." },
        { risk: "Governance fatigue", watch: "Complex proposals can reduce voter participation and market clarity." },
      ],
      researchRoutine: [
        "Review UNI trend against ETH and major DeFi governance assets.",
        "Check Uniswap volume, liquidity depth, and market share across chains.",
        "Read active governance proposals and fee-related discussion.",
        "Review regulatory headlines from primary or high-authority sources.",
        "Classify the move as usage-led, governance-led, fee-expectation-led, regulatory, or DeFi-sector rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Governance Risk"],
      relatedStrategies: ["DeFi Sector Rotation", "Technical + Fundamental Confirmation", "Volume Breakout With Catalyst Review"],
    },
  },
  {
    slug: "aptos",
    name: "Aptos",
    symbol: "APT",
    assetClass: "crypto",
    rank: 19,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Aptos? APT Layer 1 Guide",
    seoDescription: "Learn what Aptos is, why APT is watched, what affects it, and how Lurnava studies Move-based Layer 1 blockchain assets.",
    publicHeadline: "Aptos is a Move-based Layer 1 blockchain built for scalable applications.",
    publicSubheadline:
      "APT is watched because Aptos combines high-throughput design, Move smart contracts, ecosystem grants, token unlocks, developer adoption, and Layer 1 competition.",
    plainEnglish:
      "Aptos is a Layer 1 blockchain that uses the Move programming language. APT is the network asset tied to fees, staking, governance context, and ecosystem activity.",
    marketRole:
      "APT sits in the newer Layer 1 lane. Students use it to compare technology promises, developer traction, token unlocks, application usage, and competition against other high-performance chains.",
    whyTradersWatch:
      "Traders watch APT for ecosystem launches, token unlock schedules, developer activity, Move adoption, venture-backed growth, exchange liquidity, and relative strength against SOL, SUI, and other Layer 1 assets.",
    lurnavaMonitorNote:
      "Lurnava studies Aptos through app usage, developer activity, unlock calendars, staking behavior, ecosystem funding, exchange depth, and APT relative strength versus newer high-performance chains.",
    conversionCta:
      "Learn how to study Layer 1 assets through unlock review, ecosystem checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.aptosHome, assetResearchSources.aptosDocs],
    drivers: [
      { title: "Ecosystem adoption", detail: "More useful applications can support demand for the network and its asset." },
      { title: "Move developer activity", detail: "Aptos depends on whether developers build durable applications with Move." },
      { title: "Token unlocks", detail: "Unlock schedules can affect available supply and market expectations." },
      { title: "Layer 1 competition", detail: "APT is compared with other fast networks competing for users and builders." },
    ],
    publicRisks: [
      { risk: "Unlock pressure", watch: "Newly liquid supply can affect price behavior if demand is not strong enough." },
      { risk: "Adoption gap", watch: "High throughput matters only if applications attract users." },
      { risk: "Layer 1 crowding", watch: "Many networks compete for the same developer and liquidity attention." },
    ],
    lab: {
      deskBrief:
        "APT is studied as a newer high-performance Layer 1 asset. The Asset Lab reviews Aptos app usage, Move developer activity, token unlock calendars, staking behavior, ecosystem funding, exchange liquidity, and competition with Solana, Sui, and other Layer 1 networks.",
      researchQuestion:
        "Is APT moving because Aptos adoption improved, unlock pressure changed, ecosystem funding attracted builders, Move developer activity expanded, or Layer 1 sector rotation lifted the asset?",
      operatingModel:
        "APT analysis balances technology claims with adoption and supply. A stronger read connects real application usage, developer traction, unlock timing, staking context, and Layer 1 relative strength.",
      participants: [
        { name: "Aptos developers", role: "Application builders", whyItMatters: "Durable applications are needed for network activity to matter." },
        { name: "APT stakers", role: "Network participants", whyItMatters: "Staking behavior affects supply and network security context." },
        { name: "Early investors and unlock recipients", role: "Supply source", whyItMatters: "Unlock events can change market supply conditions." },
        { name: "Users and liquidity providers", role: "Demand layer", whyItMatters: "Real usage and liquidity determine whether applications become active markets." },
      ],
      historicalEvents: [
        { year: "2022", title: "Aptos mainnet launches", detail: "The network enters the Layer 1 market with Move-based smart contracts." },
        { year: "2023", title: "Ecosystem funding and applications expand", detail: "Market attention turns to whether grants and builders create durable usage." },
        { year: "2024-2026", title: "Layer 1 competition intensifies", detail: "APT is compared with Solana, Sui, Avalanche, and other high-performance networks." },
        { year: "Ongoing", title: "Unlock calendars remain important", detail: "Students track supply releases because they can affect market structure." },
      ],
      correlations: [
        { market: "Solana and Sui", relationship: "APT often rotates with other high-performance Layer 1 assets.", learnerNote: "Relative strength can show whether APT is leading or following the group." },
        { market: "Token unlock markets", relationship: "Unlock expectations can affect how traders price supply.", learnerNote: "Supply timing matters most when demand is weak." },
        { market: "Developer ecosystems", relationship: "Move adoption can support the Aptos application story.", learnerNote: "Watch shipped applications, not only hackathon headlines." },
      ],
      riskMap: [
        { risk: "Supply unlock shock", watch: "Large unlocks can pressure markets if buyers are not absorbing supply." },
        { risk: "Application weakness", watch: "Technology does not matter much without active users." },
        { risk: "Competitive compression", watch: "Layer 1 assets can lose attention when another network becomes the market favorite." },
      ],
      researchRoutine: [
        "Review APT trend against SOL, SUI, and newer Layer 1 assets.",
        "Check unlock calendars and recent supply changes.",
        "Review Aptos application usage, active addresses, and ecosystem launches.",
        "Scan developer updates and Move-based application growth.",
        "Classify the move as adoption-led, unlock-led, sector-led, funding-led, or liquidity-led.",
      ],
      relatedLessons: ["Level 8 Layer 1 Networks", "Level 9 Token Supply Risk"],
      relatedStrategies: ["Layer 1 Relative Strength", "Technical + Fundamental Confirmation", "Unlock Event Risk Review"],
    },
  },
  {
    slug: "near-protocol",
    name: "NEAR Protocol",
    symbol: "NEAR",
    assetClass: "crypto",
    rank: 20,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is NEAR Protocol? NEAR Guide",
    seoDescription: "Learn what NEAR Protocol is, why NEAR is watched, what affects it, and how Lurnava studies chain abstraction and Layer 1 adoption.",
    publicHeadline: "NEAR Protocol is a Layer 1 network focused on usable applications and chain abstraction.",
    publicSubheadline:
      "NEAR is watched because account design, application growth, chain abstraction, token economics, staking, AI-linked narratives, and Layer 1 rotation can affect demand.",
    plainEnglish:
      "NEAR Protocol is a Layer 1 blockchain built to make applications easier for users and developers. NEAR is the asset connected to fees, staking, governance context, and ecosystem activity.",
    marketRole:
      "NEAR sits in the Layer 1 and chain-abstraction lane. Students use it to study usability, application adoption, staking, developer activity, and whether narrative strength turns into real usage.",
    whyTradersWatch:
      "Traders watch NEAR for application activity, chain-abstraction progress, staking behavior, token economics, developer traction, AI-related ecosystem attention, and relative strength against other Layer 1 networks.",
    lurnavaMonitorNote:
      "Lurnava studies NEAR through application usage, account activity, chain-abstraction updates, staking, token economics, developer growth, ecosystem announcements, and NEAR relative strength versus Layer 1 peers.",
    conversionCta:
      "Learn how to study Layer 1 ecosystems through usage checks, narrative review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.nearHome, assetResearchSources.nearDocs],
    drivers: [
      { title: "Application usage", detail: "More active applications can support the network adoption story." },
      { title: "Chain abstraction", detail: "NEAR is watched for efforts that make blockchain use less fragmented for users." },
      { title: "Staking and token economics", detail: "Staking, emissions, and supply behavior affect how traders evaluate NEAR." },
      { title: "Layer 1 rotation", detail: "NEAR can move when capital rotates toward application-focused base networks." },
    ],
    publicRisks: [
      { risk: "Narrative without usage", watch: "Strong themes need evidence in users and applications." },
      { risk: "Layer 1 competition", watch: "NEAR competes with many networks for developers and liquidity." },
      { risk: "Token economics uncertainty", watch: "Supply and staking context need regular review." },
    ],
    lab: {
      deskBrief:
        "NEAR is studied as a usability-focused Layer 1 and chain-abstraction asset. The Asset Lab reviews application activity, account growth, staking, token economics, developer traction, AI-linked ecosystem themes, and whether NEAR is leading or following Layer 1 rotation.",
      researchQuestion:
        "Is NEAR moving because application usage improved, chain-abstraction updates gained attention, staking or token economics changed, AI-linked narratives expanded, or Layer 1 rotation lifted the asset?",
      operatingModel:
        "NEAR analysis connects usability claims to real activity. A stronger read checks applications, account behavior, developer updates, staking context, and whether the market is rewarding NEAR specifically or the whole Layer 1 sector.",
      participants: [
        { name: "Application developers", role: "Demand creators", whyItMatters: "Useful applications are needed for network activity and user retention." },
        { name: "NEAR stakers", role: "Security participants", whyItMatters: "Staking affects network security context and liquid supply behavior." },
        { name: "Users and account creators", role: "Adoption base", whyItMatters: "Usability claims need evidence in active account behavior." },
        { name: "Ecosystem foundations and partners", role: "Growth support", whyItMatters: "Funding, integrations, and developer programs can support adoption." },
      ],
      historicalEvents: [
        { year: "2020", title: "NEAR mainnet launches", detail: "The network enters the market with a focus on usability and scalable applications." },
        { year: "2021-2022", title: "Ecosystem applications expand", detail: "Market attention turns to DeFi, NFTs, and user-facing products." },
        { year: "2023-2024", title: "Chain abstraction becomes a core theme", detail: "NEAR is increasingly studied through cross-chain user experience." },
        { year: "2025-2026", title: "AI and application narratives grow", detail: "Students track whether ecosystem themes produce durable usage." },
      ],
      correlations: [
        { market: "Layer 1 assets", relationship: "NEAR often rotates with SOL, AVAX, APT, and other base networks.", learnerNote: "Relative strength helps show whether NEAR has its own catalyst." },
        { market: "AI-linked crypto themes", relationship: "NEAR can attract attention when AI and agent narratives expand.", learnerNote: "Students should verify products and users before accepting the theme." },
        { market: "Staking markets", relationship: "Staking behavior affects supply and participation context.", learnerNote: "Staking metrics should be read with token emissions and liquidity." },
      ],
      riskMap: [
        { risk: "Theme overextension", watch: "AI or abstraction headlines may run ahead of usage evidence." },
        { risk: "Developer competition", watch: "Builders can move to ecosystems with stronger liquidity or tooling." },
        { risk: "Sector beta", watch: "NEAR can rise with Layer 1 rotation even without NEAR-specific improvement." },
      ],
      researchRoutine: [
        "Review NEAR trend versus SOL, AVAX, APT, and other Layer 1 assets.",
        "Check application usage, active accounts, and ecosystem launches.",
        "Review chain-abstraction updates and whether they create user activity.",
        "Scan staking, token economics, and supply changes.",
        "Classify the move as application-led, abstraction-led, AI-theme-led, staking-led, or sector-led.",
      ],
      relatedLessons: ["Level 8 Layer 1 Networks", "Level 9 Narrative Versus Usage"],
      relatedStrategies: ["Layer 1 Relative Strength", "Narrative With Data Confirmation", "Trend Continuation With Fundamentals"],
    },
  },
  {
    slug: "ethereum-classic",
    name: "Ethereum Classic",
    symbol: "ETC",
    assetClass: "crypto",
    rank: 21,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Ethereum Classic? ETC Guide",
    seoDescription: "Learn what Ethereum Classic is, why ETC is watched, what affects it, and how Lurnava studies proof-of-work smart contract assets.",
    publicHeadline: "Ethereum Classic is a proof-of-work smart contract network from Ethereum history.",
    publicSubheadline:
      "ETC is watched because it combines Ethereum-family history, proof-of-work security, smart contracts, miner economics, exchange liquidity, and cycle-based rotation.",
    plainEnglish:
      "Ethereum Classic continued the original Ethereum chain after the 2016 split. ETC is studied as a proof-of-work smart contract asset with a strong immutability narrative.",
    marketRole:
      "ETC sits between smart contract platforms and proof-of-work assets. Students use it to study chain history, miner security, immutability narratives, and comparison with Ethereum after its move to proof of stake.",
    whyTradersWatch:
      "Traders watch ETC for Ethereum comparison, proof-of-work rotation, miner behavior, smart-contract activity, security context, exchange liquidity, and whether older-cycle assets are attracting capital again.",
    lurnavaMonitorNote:
      "Lurnava studies ETC through ETH-relative behavior, miner economics, proof-of-work security, application activity, historical narrative strength, liquidity depth, and sector rotation among older smart contract assets.",
    conversionCta:
      "Learn how to study legacy crypto assets through history, security review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.ethereumClassicHome, assetResearchSources.ethereumClassicDocs],
    drivers: [
      { title: "Ethereum comparison", detail: "ETC is often judged against ETH because both share early history but now use different security models." },
      { title: "Proof-of-work narrative", detail: "ETC can attract attention when traders focus on mined smart contract networks." },
      { title: "Miner economics", detail: "Hashrate and miner incentives affect security confidence." },
      { title: "Legacy asset rotation", detail: "Older crypto assets can move together when the market revisits prior-cycle names." },
    ],
    publicRisks: [
      { risk: "Security perception", watch: "Proof-of-work networks need enough hashpower and confidence to support trust." },
      { risk: "Application gap", watch: "Smart contract capability needs actual application usage." },
      { risk: "ETH overshadowing", watch: "Ethereum's larger ecosystem can pull attention away from ETC." },
    ],
    lab: {
      deskBrief:
        "ETC is studied as a proof-of-work smart contract asset with Ethereum-family history. The Asset Lab reviews ETH-relative behavior, miner economics, security perception, application activity, liquidity depth, and whether older-cycle rotation is driving the move.",
      researchQuestion:
        "Is ETC moving because proof-of-work assets are in favor, Ethereum comparison changed, miner behavior improved, application activity expanded, or legacy crypto rotation lifted older smart contract assets?",
      operatingModel:
        "ETC analysis starts with chain history but cannot stop there. A stronger read connects security context, miner incentives, application usage, ETH comparison, and market depth before treating a move as durable.",
      participants: [
        { name: "Miners", role: "Security providers", whyItMatters: "ETC relies on proof-of-work participation for network security." },
        { name: "ETC developers", role: "Protocol and tooling contributors", whyItMatters: "Developer work affects wallet, application, and infrastructure support." },
        { name: "Application builders", role: "Demand creators", whyItMatters: "Smart contract networks need useful applications to sustain activity." },
        { name: "Legacy asset traders", role: "Rotation participants", whyItMatters: "ETC can move when traders revisit older crypto names." },
      ],
      historicalEvents: [
        { year: "2016", title: "Ethereum chain split", detail: "Ethereum Classic continues the original chain after the DAO-related split." },
        { year: "2017-2021", title: "ETC becomes a legacy smart contract asset", detail: "The market studies ETC through both Ethereum history and proof-of-work identity." },
        { year: "2022", title: "Ethereum changes security model", detail: "Ethereum's move to proof of stake renews comparison with proof-of-work ETC." },
        { year: "2023-2026", title: "Legacy rotation remains part of ETC behavior", detail: "Students track whether moves are driven by usage, miners, or old-cycle attention." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "ETC is often compared with ETH due to shared history.", learnerNote: "ETC strength versus ETH helps separate its own demand from broad Ethereum-family attention." },
        { market: "Proof-of-work assets", relationship: "ETC can rotate with BTC, BCH, LTC, and mined crypto assets.", learnerNote: "Miner economics should be part of the review." },
        { market: "Legacy crypto baskets", relationship: "Older assets can rally together during nostalgia or cycle rotation.", learnerNote: "Legacy rotation can fade if fresh demand does not follow." },
      ],
      riskMap: [
        { risk: "Application weakness", watch: "Smart contract capability needs users and developers." },
        { risk: "Security doubts", watch: "Market confidence depends on proof-of-work security and infrastructure quality." },
        { risk: "Narrative-only move", watch: "Historical relevance can lift attention without improving current usage." },
      ],
      researchRoutine: [
        "Review ETC trend against ETH, BTC, and proof-of-work assets.",
        "Check miner participation, security context, and hashrate discussion.",
        "Review application activity and developer updates.",
        "Check exchange depth, derivatives positioning, and spot volume.",
        "Classify the move as proof-of-work rotation, ETH-comparison, miner-led, application-led, or legacy-sector rotation.",
      ],
      relatedLessons: ["Level 8 Proof-of-Work Assets", "Level 9 Protocol History Risk"],
      relatedStrategies: ["Legacy Asset Rotation", "Technical + Fundamental Confirmation", "Relative Strength Rotation"],
    },
  },
  {
    slug: "internet-computer",
    name: "Internet Computer",
    symbol: "ICP",
    assetClass: "crypto",
    rank: 22,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Internet Computer? ICP Guide",
    seoDescription: "Learn what Internet Computer is, why ICP is watched, what affects it, and how Lurnava studies on-chain application infrastructure.",
    publicHeadline: "Internet Computer is a blockchain network for hosting applications on-chain.",
    publicSubheadline:
      "ICP is watched because its canister model, developer activity, token economics, network governance, AI application themes, and infrastructure adoption can affect demand.",
    plainEnglish:
      "The Internet Computer is built so applications can run directly on blockchain infrastructure, not only store tokens or settlement data. ICP is used in the network's resource and governance model.",
    marketRole:
      "ICP sits in the on-chain compute and infrastructure lane. Students use it to study whether a network can host full applications, attract developers, and turn technical ambition into usage.",
    whyTradersWatch:
      "Traders watch ICP for canister usage, developer adoption, governance activity, token burn and mint dynamics, AI-linked application themes, ecosystem launches, and infrastructure-sector rotation.",
    lurnavaMonitorNote:
      "Lurnava studies ICP through application hosting usage, canister activity, developer updates, governance, token economics, AI-related products, infrastructure comparison, and ICP relative strength versus compute assets.",
    conversionCta:
      "Learn how to study crypto infrastructure assets through usage checks, governance review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.internetComputerHome, assetResearchSources.internetComputerDocs],
    drivers: [
      { title: "Canister activity", detail: "More active canisters can show whether on-chain applications are being used." },
      { title: "Developer adoption", detail: "ICP depends on builders choosing its hosting model over other infrastructure." },
      { title: "Token economics", detail: "Network resource use and governance can affect how traders study ICP supply behavior." },
      { title: "AI and app themes", detail: "ICP can attract attention when the market studies blockchain-hosted applications and AI-related products." },
    ],
    publicRisks: [
      { risk: "Complex architecture", watch: "Students need to understand the model before comparing ICP with simpler networks." },
      { risk: "Adoption gap", watch: "Technical ambition needs real apps and users." },
      { risk: "Narrative swings", watch: "AI and cloud themes can move quickly without matching usage." },
    ],
    lab: {
      deskBrief:
        "ICP is studied as an on-chain application infrastructure asset. The Asset Lab reviews canister usage, developer activity, governance, token economics, ecosystem launches, AI-related application themes, and whether infrastructure demand is visible in real network activity.",
      researchQuestion:
        "Is ICP moving because application hosting usage improved, developer activity expanded, token economics changed, AI-linked themes attracted attention, or infrastructure assets rotated together?",
      operatingModel:
        "ICP analysis separates technical possibility from current adoption. A stronger read connects canister activity, shipped applications, developer updates, governance context, token economics, and relative strength against infrastructure assets.",
      participants: [
        { name: "Application developers", role: "Usage creators", whyItMatters: "Developer adoption determines whether the hosting model becomes useful." },
        { name: "Node providers", role: "Infrastructure operators", whyItMatters: "Independent infrastructure supports the network's operating model." },
        { name: "Governance participants", role: "Protocol stewards", whyItMatters: "Governance affects upgrades and network direction." },
        { name: "Users of hosted applications", role: "Demand base", whyItMatters: "Real user activity is needed for the application thesis." },
      ],
      historicalEvents: [
        { year: "2021", title: "Internet Computer launches publicly", detail: "The market begins pricing a blockchain designed for hosted applications." },
        { year: "2022-2023", title: "Developer tooling expands", detail: "Students watch whether tools reduce friction for builders." },
        { year: "2024-2026", title: "AI and on-chain app themes grow", detail: "ICP is often studied through application-hosting and AI-related narratives." },
        { year: "Ongoing", title: "Canister activity remains central", detail: "Usage data helps separate real demand from technical storytelling." },
      ],
      correlations: [
        { market: "Infrastructure tokens", relationship: "ICP can rotate with compute, data, and middleware assets.", learnerNote: "Compare ICP against LINK, FIL, and other infrastructure tokens." },
        { market: "AI-linked crypto assets", relationship: "ICP can attract attention when AI application narratives expand.", learnerNote: "Check shipped products and usage before accepting the theme." },
        { market: "Cloud infrastructure", relationship: "ICP positions itself against traditional hosting models.", learnerNote: "This is a product adoption question, not only a token chart question." },
      ],
      riskMap: [
        { risk: "Usage underdelivery", watch: "Applications need active users to support the thesis." },
        { risk: "Complex valuation", watch: "Token economics can be misunderstood if students do not review network resource flows." },
        { risk: "Theme overreaction", watch: "AI and cloud narratives can produce sharp but temporary moves." },
      ],
      researchRoutine: [
        "Review ICP trend against infrastructure and compute-related crypto assets.",
        "Check canister activity, application usage, and developer updates.",
        "Review governance changes and token-economics context.",
        "Scan ecosystem launches and AI-related application evidence.",
        "Classify the move as usage-led, governance-led, token-economics-led, AI-theme-led, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Token Economics"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "filecoin",
    name: "Filecoin",
    symbol: "FIL",
    assetClass: "crypto",
    rank: 23,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Filecoin? FIL Storage Network Guide",
    seoDescription: "Learn what Filecoin is, why FIL is watched, what affects it, and how Lurnava studies decentralized storage and infrastructure assets.",
    publicHeadline: "Filecoin is a decentralized storage network with market-based incentives.",
    publicSubheadline:
      "FIL is watched because storage demand, provider economics, retrieval markets, data-verification tools, AI data themes, and infrastructure rotation can affect behavior.",
    plainEnglish:
      "Filecoin is a peer-to-peer network where storage providers can offer data storage and earn FIL through network incentives. FIL is studied as an infrastructure asset tied to storage markets.",
    marketRole:
      "FIL sits in the decentralized storage and data-infrastructure lane. Students use it to study real storage demand, provider economics, retrieval quality, and how infrastructure stories are tested by usage.",
    whyTradersWatch:
      "Traders watch FIL for storage deals, provider economics, protocol upgrades, retrieval performance, data-availability and AI-data themes, exchange liquidity, and relative strength against infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Filecoin through storage and retrieval activity, provider economics, verified-data usage, protocol upgrades, developer tools, AI-data demand narratives, and FIL relative strength versus infrastructure tokens.",
    conversionCta:
      "Learn how to study decentralized infrastructure assets through usage review, incentive mapping, and structured market training inside Lurnava.",
    sources: [assetResearchSources.filecoinHome, assetResearchSources.filecoinDocs],
    drivers: [
      { title: "Storage demand", detail: "More real storage use can support the network's infrastructure thesis." },
      { title: "Provider economics", detail: "Storage providers need incentives that make participation sustainable." },
      { title: "Retrieval and tooling", detail: "Useful data markets require storage and access, not only capacity." },
      { title: "AI and data themes", detail: "FIL can attract attention when markets focus on decentralized data and compute-adjacent infrastructure." },
    ],
    publicRisks: [
      { risk: "Demand quality", watch: "Students should separate real customer storage from inflated capacity narratives." },
      { risk: "Provider incentive pressure", watch: "Provider economics can affect network reliability and participation." },
      { risk: "Infrastructure theme swings", watch: "Data and AI narratives can move faster than actual adoption." },
    ],
    lab: {
      deskBrief:
        "FIL is studied as a decentralized storage infrastructure asset. The Asset Lab reviews storage demand, provider economics, retrieval quality, verified-data activity, protocol upgrades, AI-data themes, and whether FIL is leading or following infrastructure-token rotation.",
      researchQuestion:
        "Is FIL moving because storage demand improved, provider economics changed, retrieval and tooling advanced, AI-data narratives expanded, or infrastructure assets rotated together?",
      operatingModel:
        "Filecoin analysis tests the storage thesis against usage and incentives. A stronger read connects real data demand, provider participation, retrieval quality, protocol upgrades, and infrastructure-sector relative strength.",
      participants: [
        { name: "Storage providers", role: "Capacity suppliers", whyItMatters: "They supply the storage resources that make the network useful." },
        { name: "Data clients", role: "Demand source", whyItMatters: "Real customers are needed for durable storage demand." },
        { name: "Developers and tooling teams", role: "Access layer", whyItMatters: "Tooling affects whether users can store and retrieve data reliably." },
        { name: "Protocol and ecosystem contributors", role: "Network stewards", whyItMatters: "Upgrades and incentive design shape the storage market." },
      ],
      historicalEvents: [
        { year: "2020", title: "Filecoin mainnet launches", detail: "The network opens a crypto-native market for storage providers and data clients." },
        { year: "2021-2022", title: "Storage capacity expands", detail: "Market focus turns to whether large capacity translates into useful demand." },
        { year: "2023-2024", title: "Data services and tooling improve", detail: "Students watch whether retrieval and developer tools make the network more practical." },
        { year: "2025-2026", title: "AI-data infrastructure theme grows", detail: "FIL is studied as part of broader data and infrastructure narratives." },
      ],
      correlations: [
        { market: "Infrastructure tokens", relationship: "FIL often rotates with LINK, ICP, and other infrastructure assets.", learnerNote: "Compare FIL strength against the infrastructure basket." },
        { market: "AI and data markets", relationship: "AI-data themes can bring attention to storage assets.", learnerNote: "Theme strength needs real storage and retrieval evidence." },
        { market: "Provider economics", relationship: "Storage provider incentives affect network health.", learnerNote: "A network can have capacity while still needing durable demand." },
      ],
      riskMap: [
        { risk: "Capacity without customers", watch: "Large storage capacity matters less if real demand is weak." },
        { risk: "Retrieval friction", watch: "Data storage is less useful if retrieval is unreliable or hard to use." },
        { risk: "Narrative-driven spike", watch: "Infrastructure and AI themes can create sharp moves before usage confirms them." },
      ],
      researchRoutine: [
        "Review FIL trend against LINK, ICP, and infrastructure tokens.",
        "Check storage activity, provider participation, and verified-data context.",
        "Review retrieval tooling, developer updates, and protocol upgrades.",
        "Scan AI-data and decentralized-infrastructure narratives for source quality.",
        "Classify the move as storage-demand, provider-economics, tooling-led, AI-data-theme, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Usage Versus Narrative"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "cosmos",
    name: "Cosmos",
    symbol: "ATOM",
    assetClass: "crypto",
    rank: 24,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Cosmos? ATOM Interchain Guide",
    seoDescription: "Learn what Cosmos is, why ATOM is watched, what affects it, and how Lurnava studies interchain ecosystems and staking assets.",
    publicHeadline: "Cosmos is an interchain ecosystem built around app-specific blockchains.",
    publicSubheadline:
      "ATOM is watched because Cosmos Hub staking, governance, IBC activity, app-chain adoption, validator behavior, and interchain upgrades can shape market demand.",
    plainEnglish:
      "Cosmos is a network ecosystem where separate blockchains can connect and communicate. ATOM is tied to the Cosmos Hub, staking, governance, and interchain participation.",
    marketRole:
      "ATOM sits in the interoperability and staking-asset lane. Students use it to study app-chain ecosystems, validator economics, governance decisions, and whether interchain activity is growing.",
    whyTradersWatch:
      "Traders watch ATOM for Cosmos Hub governance, staking participation, validator behavior, IBC activity, app-chain adoption, token-economics changes, and rotation among interoperability assets.",
    lurnavaMonitorNote:
      "Lurnava studies Cosmos through Cosmos Hub governance, ATOM staking, validator activity, IBC usage, app-chain launches, ecosystem liquidity, and ATOM relative strength versus DOT and other interoperability assets.",
    conversionCta:
      "Learn how to study interchain assets through governance review, staking context, and structured market training inside Lurnava.",
    sources: [assetResearchSources.cosmosHome, assetResearchSources.cosmosHubDocs],
    drivers: [
      { title: "IBC activity", detail: "More interchain transfers can support the Cosmos ecosystem usage story." },
      { title: "Staking participation", detail: "ATOM staking affects security context, liquid supply, and holder behavior." },
      { title: "Governance decisions", detail: "Cosmos Hub proposals can affect token economics, treasury use, and ecosystem direction." },
      { title: "App-chain adoption", detail: "Cosmos becomes more relevant when useful independent chains attract users and liquidity." },
    ],
    publicRisks: [
      { risk: "Hub value capture", watch: "The Cosmos ecosystem can grow without all value flowing directly to ATOM." },
      { risk: "Validator concentration", watch: "Security and governance quality depend on validator distribution and participation." },
      { risk: "Interchain complexity", watch: "Students need to separate Cosmos Hub activity from the wider ecosystem." },
    ],
    lab: {
      deskBrief:
        "ATOM is studied as a staking and interoperability asset tied to Cosmos Hub. The Asset Lab reviews governance proposals, staking behavior, validator concentration, IBC activity, app-chain adoption, token-economics changes, and whether ATOM captures value from the wider Cosmos ecosystem.",
      researchQuestion:
        "Is ATOM moving because Cosmos Hub governance changed expectations, staking behavior shifted, IBC activity expanded, app-chain adoption improved, or interoperability assets rotated together?",
      operatingModel:
        "Cosmos analysis separates ecosystem growth from ATOM-specific demand. A stronger read connects Cosmos Hub governance, validator health, staking context, IBC usage, app-chain activity, and relative strength versus interoperability peers.",
      participants: [
        { name: "Validators", role: "Security and governance layer", whyItMatters: "They secure the Cosmos Hub and influence governance outcomes." },
        { name: "ATOM delegators", role: "Staking participants", whyItMatters: "Delegation affects liquid supply and validator voting power." },
        { name: "App-chain teams", role: "Ecosystem demand creators", whyItMatters: "Useful chains create activity across the interchain ecosystem." },
        { name: "IBC users and relayers", role: "Connectivity layer", whyItMatters: "Interchain transfers need reliable infrastructure and demand." },
      ],
      historicalEvents: [
        { year: "2019", title: "Cosmos Hub launches", detail: "The network begins with ATOM staking and governance at the center of the hub." },
        { year: "2021", title: "IBC goes live", detail: "Inter-blockchain communication becomes a core Cosmos ecosystem feature." },
        { year: "2022-2024", title: "App-chain ecosystem expands", detail: "Independent chains make Cosmos a major app-chain case study." },
        { year: "2025-2026", title: "Value-capture debates continue", detail: "Students track whether ATOM benefits from wider interchain growth." },
      ],
      correlations: [
        { market: "Polkadot and interoperability assets", relationship: "ATOM often rotates with other cross-chain infrastructure assets.", learnerNote: "Compare ATOM with DOT before calling a move Cosmos-specific." },
        { market: "Staking markets", relationship: "ATOM holder behavior is shaped by staking rewards and validator participation.", learnerNote: "Staking context changes liquid supply and governance power." },
        { market: "App-chain liquidity", relationship: "Cosmos ecosystem liquidity affects how traders view interchain growth.", learnerNote: "The ecosystem can be active even when ATOM itself lags." },
      ],
      riskMap: [
        { risk: "Value-capture debate", watch: "ATOM may not capture all growth from independent Cosmos chains." },
        { risk: "Governance fragmentation", watch: "Complex proposals can split community attention." },
        { risk: "Validator risk", watch: "Validator health and distribution affect security and governance confidence." },
      ],
      researchRoutine: [
        "Review ATOM trend against DOT and other interoperability assets.",
        "Check Cosmos Hub governance proposals and token-economics discussion.",
        "Review staking participation, validator concentration, and delegation changes.",
        "Scan IBC activity and major app-chain launches.",
        "Classify the move as governance-led, staking-led, IBC-led, app-chain-led, or sector-led.",
      ],
      relatedLessons: ["Level 8 Interoperability Assets", "Level 9 Governance Risk"],
      relatedStrategies: ["Interoperability Relative Strength", "Technical + Fundamental Confirmation", "Governance Catalyst Review"],
    },
  },
  {
    slug: "arbitrum",
    name: "Arbitrum",
    symbol: "ARB",
    assetClass: "crypto",
    rank: 25,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Arbitrum? ARB Layer 2 Guide",
    seoDescription: "Learn what Arbitrum is, why ARB is watched, what affects it, and how Lurnava studies Ethereum Layer 2 governance assets.",
    publicHeadline: "Arbitrum is an Ethereum Layer 2 ecosystem governed by the ARB token.",
    publicSubheadline:
      "ARB is watched because Layer 2 activity, DAO governance, sequencer economics, Ethereum fees, ecosystem grants, and rollup competition can affect demand.",
    plainEnglish:
      "Arbitrum helps Ethereum applications run with lower cost and faster execution. ARB is mainly a governance asset used in the Arbitrum DAO rather than a simple gas token.",
    marketRole:
      "ARB sits in the Ethereum scaling and governance lane. Students use it to study rollup adoption, DAO decisions, ecosystem incentives, and the difference between network usage and token value.",
    whyTradersWatch:
      "Traders watch ARB for Arbitrum One activity, governance votes, grant programs, Layer 2 fee economics, Ethereum demand, developer adoption, and relative strength against OP and other rollup assets.",
    lurnavaMonitorNote:
      "Lurnava studies Arbitrum through transaction activity, total ecosystem liquidity, DAO proposals, delegate behavior, grant use, sequencer revenue context, Ethereum fee conditions, and ARB relative strength versus OP.",
    conversionCta:
      "Learn how to study Layer 2 assets through usage review, governance checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.arbitrumDocs, assetResearchSources.arbitrumGovernance],
    drivers: [
      { title: "Layer 2 usage", detail: "More active applications and transactions can support the Arbitrum adoption story." },
      { title: "DAO governance", detail: "ARB holder and delegate decisions can change incentives, upgrades, and treasury allocation." },
      { title: "Ethereum fee pressure", detail: "Higher Ethereum costs can increase interest in Layer 2 execution environments." },
      { title: "Rollup competition", detail: "ARB is compared with OP, Base, zk rollups, and other scaling ecosystems." },
    ],
    publicRisks: [
      { risk: "Usage-to-token gap", watch: "Arbitrum usage does not automatically create direct ARB demand." },
      { risk: "Governance controversy", watch: "DAO spending and delegate decisions can affect market confidence." },
      { risk: "Layer 2 competition", watch: "Users and liquidity can move between rollup ecosystems." },
    ],
    lab: {
      deskBrief:
        "ARB is studied as an Ethereum Layer 2 governance asset. The Asset Lab reviews Arbitrum transaction activity, application liquidity, DAO proposals, delegate behavior, treasury spending, sequencer economics, Ethereum fee conditions, and competition with OP and other scaling networks.",
      researchQuestion:
        "Is ARB moving because Arbitrum usage improved, DAO governance changed expectations, grant spending attracted activity, Ethereum fees increased Layer 2 demand, or rollup assets rotated together?",
      operatingModel:
        "ARB analysis separates network success from token value capture. A stronger read connects real usage, governance quality, treasury choices, developer traction, Ethereum demand, and relative strength against rollup peers.",
      participants: [
        { name: "Arbitrum DAO delegates", role: "Governance decision makers", whyItMatters: "Delegates influence upgrades, incentives, and treasury direction." },
        { name: "Application teams", role: "Demand creators", whyItMatters: "Useful apps bring transactions, liquidity, and users to the ecosystem." },
        { name: "Liquidity providers", role: "Market depth suppliers", whyItMatters: "DeFi liquidity affects the usefulness of the Arbitrum ecosystem." },
        { name: "Ethereum users", role: "Scaling demand source", whyItMatters: "Layer 2 demand often grows when users need lower-cost execution." },
      ],
      historicalEvents: [
        { year: "2021", title: "Arbitrum One opens to users", detail: "The network becomes a major Ethereum rollup ecosystem." },
        { year: "2023", title: "ARB launches with DAO governance", detail: "Market attention shifts to token governance and delegate behavior." },
        { year: "2024-2026", title: "Rollup competition expands", detail: "Arbitrum is compared with OP Stack chains, Base, and zk rollups." },
        { year: "Ongoing", title: "DAO treasury choices remain central", detail: "Students track whether incentives create durable activity." },
      ],
      correlations: [
        { market: "Ethereum", relationship: "Arbitrum demand is tied to Ethereum scaling needs.", learnerNote: "ETH fee conditions can shape Layer 2 usage." },
        { market: "Optimism", relationship: "ARB often trades against OP as a rollup governance comparison.", learnerNote: "Compare usage and governance, not only price movement." },
        { market: "DeFi liquidity", relationship: "Arbitrum ecosystem health depends heavily on DeFi activity.", learnerNote: "Liquidity can rotate quickly between chains." },
      ],
      riskMap: [
        { risk: "Token value uncertainty", watch: "ARB governance power may not directly capture network activity." },
        { risk: "Incentive dependency", watch: "Grant-funded activity may fade when incentives end." },
        { risk: "Governance trust", watch: "DAO process quality affects confidence." },
      ],
      researchRoutine: [
        "Review ARB trend versus OP and ETH.",
        "Check Arbitrum transactions, active applications, and liquidity depth.",
        "Read major DAO proposals, delegate votes, and treasury decisions.",
        "Review Ethereum fee context and Layer 2 sector demand.",
        "Classify the move as usage-led, governance-led, incentive-led, Ethereum-fee-led, or rollup-sector rotation.",
      ],
      relatedLessons: ["Level 8 Ethereum Scaling", "Level 9 Governance Risk"],
      relatedStrategies: ["Layer 2 Relative Strength", "Governance Catalyst Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "optimism",
    name: "Optimism",
    symbol: "OP",
    assetClass: "crypto",
    rank: 26,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Optimism? OP Superchain Guide",
    seoDescription: "Learn what Optimism is, why OP is watched, what affects it, and how Lurnava studies Ethereum scaling and Superchain assets.",
    publicHeadline: "Optimism is an Ethereum scaling ecosystem built around the OP Stack and Superchain.",
    publicSubheadline:
      "OP is watched because Superchain adoption, governance, protocol upgrades, sequencer economics, Ethereum demand, and Layer 2 competition can affect market behavior.",
    plainEnglish:
      "Optimism helps applications and chains use Ethereum-aligned scaling infrastructure. OP is the governance asset connected to the Optimism Collective and Superchain decisions.",
    marketRole:
      "OP sits in the Ethereum scaling and infrastructure lane. Students use it to study Layer 2 networks, shared software stacks, governance houses, ecosystem funding, and Superchain adoption.",
    whyTradersWatch:
      "Traders watch OP for OP Stack adoption, Superchain activity, governance votes, protocol upgrades, sequencer revenue context, ecosystem incentives, and relative strength against ARB and other rollup assets.",
    lurnavaMonitorNote:
      "Lurnava studies Optimism through OP Stack adoption, Superchain chain activity, governance decisions, grant programs, developer traction, Ethereum fee conditions, and OP relative strength versus ARB.",
    conversionCta:
      "Learn how to study Layer 2 infrastructure through governance review, ecosystem checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.optimismHome, assetResearchSources.optimismGovernance],
    drivers: [
      { title: "Superchain adoption", detail: "More chains using the OP Stack can support Optimism's infrastructure narrative." },
      { title: "Governance decisions", detail: "OP holders and governance bodies can shape protocol upgrades and capital allocation." },
      { title: "Ethereum scaling demand", detail: "Layer 2 demand often rises when users seek lower-cost Ethereum execution." },
      { title: "Sequencer economics", detail: "Fee and revenue discussions affect how traders evaluate OP value capture." },
    ],
    publicRisks: [
      { risk: "Value-capture uncertainty", watch: "Network growth may not directly translate into OP demand." },
      { risk: "Stack competition", watch: "Other scaling stacks compete for builders and liquidity." },
      { risk: "Governance complexity", watch: "Students need to understand the Collective before judging governance headlines." },
    ],
    lab: {
      deskBrief:
        "OP is studied as an Ethereum scaling and Superchain governance asset. The Asset Lab reviews OP Stack adoption, Superchain chain activity, governance proposals, upgrade schedules, ecosystem funding, sequencer economics, and competition with Arbitrum and other scaling networks.",
      researchQuestion:
        "Is OP moving because Superchain adoption improved, governance changed expectations, protocol upgrades gained attention, Ethereum scaling demand expanded, or rollup assets rotated together?",
      operatingModel:
        "Optimism analysis connects stack adoption with token context. A stronger read checks Superchain usage, governance quality, fee economics, developer adoption, Ethereum demand, and relative strength against Layer 2 peers.",
      participants: [
        { name: "OP governance participants", role: "Collective stewards", whyItMatters: "Governance affects upgrades, incentives, and resource allocation." },
        { name: "OP Stack chain teams", role: "Adoption drivers", whyItMatters: "More production chains can strengthen the Superchain thesis." },
        { name: "Application developers", role: "User demand creators", whyItMatters: "Applications create transactions and ecosystem activity." },
        { name: "Ethereum users", role: "Scaling demand source", whyItMatters: "Layer 2 demand depends on real user need for Ethereum-aligned execution." },
      ],
      historicalEvents: [
        { year: "2021", title: "Optimism opens as an Ethereum rollup", detail: "The network becomes one of the early major Layer 2 ecosystems." },
        { year: "2022", title: "OP token and governance expand", detail: "Market attention shifts to the Optimism Collective and governance design." },
        { year: "2023-2024", title: "OP Stack and Superchain theme grows", detail: "The market begins watching chains built with Optimism infrastructure." },
        { year: "2025-2026", title: "Layer 2 stack competition intensifies", detail: "Students compare OP Stack adoption with other scaling systems." },
      ],
      correlations: [
        { market: "Arbitrum", relationship: "OP often trades against ARB as a Layer 2 governance comparison.", learnerNote: "Compare adoption model, not only price." },
        { market: "Ethereum", relationship: "Optimism demand is tied to Ethereum scaling needs.", learnerNote: "ETH fees and activity can affect rollup demand." },
        { market: "Infrastructure tokens", relationship: "OP can rotate with other protocol-infrastructure assets.", learnerNote: "Stack adoption is the key difference to monitor." },
      ],
      riskMap: [
        { risk: "Adoption-to-token gap", watch: "More OP Stack chains do not automatically create OP demand." },
        { risk: "Governance misunderstanding", watch: "Collective design can be misread by students who only watch headlines." },
        { risk: "Competitive migration", watch: "Builders and liquidity can move between scaling stacks." },
      ],
      researchRoutine: [
        "Review OP trend versus ARB and ETH.",
        "Check Superchain activity and OP Stack adoption by production chains.",
        "Read major governance proposals, upgrades, and capital allocation decisions.",
        "Review Ethereum fee conditions and Layer 2 sector demand.",
        "Classify the move as Superchain-led, governance-led, upgrade-led, Ethereum-demand-led, or rollup-sector rotation.",
      ],
      relatedLessons: ["Level 8 Ethereum Scaling", "Level 9 Governance Risk"],
      relatedStrategies: ["Layer 2 Relative Strength", "Governance Catalyst Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "sui",
    name: "Sui",
    symbol: "SUI",
    assetClass: "crypto",
    rank: 27,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Sui? SUI Layer 1 Guide",
    seoDescription: "Learn what Sui is, why SUI is watched, what affects it, and how Lurnava studies object-based Layer 1 blockchain assets.",
    publicHeadline: "Sui is an object-based Layer 1 blockchain built with Move.",
    publicSubheadline:
      "SUI is watched because object-based execution, Move development, token unlocks, application adoption, staking, and Layer 1 competition can affect demand.",
    plainEnglish:
      "Sui is a smart contract blockchain that uses an object-based model and the Move language. SUI is used for gas, staking context, and network participation.",
    marketRole:
      "SUI sits in the high-performance Layer 1 lane. Students use it to compare application adoption, token unlocks, Move developer growth, validator behavior, and competition with Aptos and Solana.",
    whyTradersWatch:
      "Traders watch SUI for application usage, DeFi liquidity, token unlocks, Move developer activity, staking behavior, ecosystem launches, and relative strength against APT, SOL, and other Layer 1 assets.",
    lurnavaMonitorNote:
      "Lurnava studies Sui through application usage, object-based ecosystem growth, developer activity, unlock schedules, staking behavior, exchange liquidity, and SUI relative strength versus APT and SOL.",
    conversionCta:
      "Learn how to study high-performance Layer 1 assets through usage checks, supply review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.suiHome, assetResearchSources.suiDocs],
    drivers: [
      { title: "Application adoption", detail: "Sui needs useful applications and active users to support its network thesis." },
      { title: "Move developer growth", detail: "More builders using Move can strengthen Sui's ecosystem." },
      { title: "Token unlocks", detail: "Unlock schedules can affect available supply and trader expectations." },
      { title: "Layer 1 rotation", detail: "SUI is compared with APT, SOL, and other high-performance networks." },
    ],
    publicRisks: [
      { risk: "Unlock pressure", watch: "New supply can pressure markets if demand is weak." },
      { risk: "Adoption gap", watch: "Fast execution needs real user activity to matter." },
      { risk: "Competitive crowding", watch: "Layer 1 ecosystems compete for the same builders, users, and liquidity." },
    ],
    lab: {
      deskBrief:
        "SUI is studied as a high-performance object-based Layer 1 asset. The Asset Lab reviews application activity, DeFi liquidity, Move developer adoption, unlock schedules, staking behavior, validator context, ecosystem launches, and comparison with Aptos and Solana.",
      researchQuestion:
        "Is SUI moving because application usage improved, Move developer activity expanded, unlock pressure changed, DeFi liquidity grew, or Layer 1 assets rotated together?",
      operatingModel:
        "Sui analysis balances technical design with market evidence. A stronger read connects application usage, developer traction, unlock context, staking behavior, liquidity depth, and relative strength against Layer 1 peers.",
      participants: [
        { name: "Sui developers", role: "Application builders", whyItMatters: "Builder traction determines whether the object-based model attracts real products." },
        { name: "Validators and stakers", role: "Network participants", whyItMatters: "Staking and validation affect security and supply behavior." },
        { name: "DeFi and gaming teams", role: "Usage creators", whyItMatters: "Consumer and financial applications can create repeat activity." },
        { name: "Unlock recipients", role: "Supply source", whyItMatters: "Supply releases can affect market pressure and expectations." },
      ],
      historicalEvents: [
        { year: "2023", title: "Sui mainnet launches", detail: "The network enters the high-performance Layer 1 market." },
        { year: "2023-2024", title: "Move ecosystem comparison grows", detail: "Sui and Aptos become key assets for studying Move-based chains." },
        { year: "2024-2026", title: "Application and DeFi growth becomes central", detail: "Students track whether ecosystem launches turn into durable activity." },
        { year: "Ongoing", title: "Unlock calendars remain important", detail: "Supply releases are part of every SUI market review." },
      ],
      correlations: [
        { market: "Aptos", relationship: "SUI is often compared with APT because both use Move-based architecture.", learnerNote: "Compare developer traction and application usage." },
        { market: "Solana", relationship: "SUI can rotate with other high-throughput Layer 1 assets.", learnerNote: "SOL comparison helps judge market preference." },
        { market: "Unlock schedules", relationship: "Supply timing can affect SUI risk.", learnerNote: "Unlocks matter most when demand is not absorbing new supply." },
      ],
      riskMap: [
        { risk: "Supply event pressure", watch: "Unlocks can create sell pressure or expectation risk." },
        { risk: "Application underdelivery", watch: "Technical performance needs active applications." },
        { risk: "Layer 1 rotation reversal", watch: "Capital can leave high-performance chains quickly when narratives change." },
      ],
      researchRoutine: [
        "Review SUI trend versus APT, SOL, and newer Layer 1 assets.",
        "Check unlock calendars, staking behavior, and supply changes.",
        "Review application usage, DeFi liquidity, and ecosystem launches.",
        "Scan Move developer updates and Sui tooling progress.",
        "Classify the move as application-led, unlock-led, Move-theme-led, liquidity-led, or Layer 1 sector rotation.",
      ],
      relatedLessons: ["Level 8 Layer 1 Networks", "Level 9 Token Supply Risk"],
      relatedStrategies: ["Layer 1 Relative Strength", "Unlock Event Risk Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "pepe",
    name: "Pepe",
    symbol: "PEPE",
    assetClass: "crypto",
    rank: 28,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Pepe? PEPE Meme Asset Guide",
    seoDescription: "Learn what Pepe is, why PEPE is watched, what affects it, and how Lurnava studies meme assets using on-chain and liquidity checks.",
    publicHeadline: "Pepe is an Ethereum meme asset driven by attention, liquidity, and community rotation.",
    publicSubheadline:
      "PEPE is watched because meme-sector flows, exchange liquidity, Ethereum wallet activity, holder concentration, social attention, and leverage can move it quickly.",
    plainEnglish:
      "Pepe is an Ethereum ERC-20 meme token. It is not studied like a protocol with cash-flow mechanics; it is studied through attention, liquidity, on-chain activity, and risk behavior.",
    marketRole:
      "PEPE sits in the meme-asset lane. Students use it to understand how cultural attention, exchange listings, holder concentration, and derivatives activity can create sharp moves and sharp reversals.",
    whyTradersWatch:
      "Traders watch PEPE for meme-sector rotation, exchange volume, Ethereum holder activity, whale transfers, social reach, funding pressure, and whether the move is spot-led or leverage-led.",
    lurnavaMonitorNote:
      "Lurnava studies PEPE through Etherscan contract activity, holder distribution, exchange depth, perpetual positioning, social breadth, meme-sector comparison, and ETH network context.",
    conversionCta:
      "Learn how to study high-attention crypto assets through on-chain checks, liquidity review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.pepeEtherscan, assetResearchSources.pepeCoinGecko],
    drivers: [
      { title: "Meme-sector rotation", detail: "PEPE can rise when capital moves toward high-attention meme assets." },
      { title: "Ethereum holder activity", detail: "Transfers, holder concentration, and wallet behavior help students judge market pressure." },
      { title: "Exchange liquidity", detail: "Depth and spread affect how well PEPE absorbs fast buying or selling." },
      { title: "Leverage conditions", detail: "Crowded perpetual positioning can amplify both upward moves and reversals." },
    ],
    publicRisks: [
      { risk: "Attention collapse", watch: "Meme-asset demand can fade faster than protocol-usage demand." },
      { risk: "Whale concentration", watch: "Large wallet movement can pressure price during crowded conditions." },
      { risk: "Leverage unwind", watch: "Derivatives-driven moves can reverse when funding and positioning become crowded." },
    ],
    lab: {
      deskBrief:
        "PEPE is studied as an Ethereum meme asset, not as a protocol utility asset. The Asset Lab reviews contract activity, holder concentration, exchange depth, social breadth, meme-sector rotation, derivatives pressure, and whether spot demand is present beneath the attention cycle.",
      researchQuestion:
        "Is PEPE moving because meme-sector rotation expanded, spot liquidity improved, whale wallets changed behavior, social attention widened, or leveraged positioning created a short-lived move?",
      operatingModel:
        "PEPE analysis starts with humility: the asset is attention-led. A stronger read connects on-chain holder activity, exchange depth, derivatives context, social breadth, ETH network conditions, and comparison with other meme assets.",
      participants: [
        { name: "PEPE holders", role: "Community and supply base", whyItMatters: "Holder behavior affects supply pressure and attention durability." },
        { name: "Large wallets", role: "Concentration risk", whyItMatters: "Large transfers can change market pressure quickly." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "Listings, depth, and derivatives access shape tradeability." },
        { name: "Meme-sector traders", role: "Rotation participants", whyItMatters: "PEPE can move with the broader meme-token basket." },
      ],
      historicalEvents: [
        { year: "2023", title: "PEPE gains market attention", detail: "The token becomes one of the most watched Ethereum meme assets." },
        { year: "2023-2024", title: "Exchange access expands", detail: "Broader market access increases liquidity and derivatives attention." },
        { year: "2024-2026", title: "Meme assets become a tracked sector", detail: "Students compare PEPE with DOGE, SHIB, and Solana meme assets." },
        { year: "Ongoing", title: "On-chain monitoring remains central", detail: "Holder movement and contract activity help keep the profile evidence-based." },
      ],
      correlations: [
        { market: "DOGE and SHIB", relationship: "PEPE often rotates with larger meme assets.", learnerNote: "Compare PEPE with the meme basket before assuming an isolated catalyst." },
        { market: "Ethereum", relationship: "PEPE is an Ethereum token, so ETH activity and fees can affect participation.", learnerNote: "Ethereum context matters for wallet behavior." },
        { market: "Perpetual futures", relationship: "Leverage can magnify PEPE moves.", learnerNote: "Crowded funding can make reversals more violent." },
      ],
      riskMap: [
        { risk: "No protocol-utility anchor", watch: "PEPE should not be studied as a DeFi or infrastructure protocol." },
        { risk: "Social crowding", watch: "Heavy attention can mean late-cycle risk." },
        { risk: "Liquidity pocket risk", watch: "Fast moves can pass through thin order-book areas." },
      ],
      researchRoutine: [
        "Review PEPE trend versus DOGE, SHIB, and the meme-token basket.",
        "Check Etherscan holder concentration, transfers, and contract activity.",
        "Review exchange depth, spot volume, funding, and open interest.",
        "Scan social breadth while filtering out recycled hype.",
        "Classify the move as spot-led, whale-led, meme-sector-led, leverage-led, or attention-only.",
      ],
      relatedLessons: ["Level 4 Market Sentiment", "Level 9 Crypto Risk Mapping"],
      relatedStrategies: ["Meme Sector Rotation", "Volume Spike Breakout", "Sentiment + Technical Overlay"],
    },
  },
  {
    slug: "dogwifhat",
    name: "dogwifhat",
    symbol: "WIF",
    assetClass: "crypto",
    rank: 29,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is dogwifhat? WIF Meme Asset Guide",
    seoDescription: "Learn what dogwifhat is, why WIF is watched, what affects it, and how Lurnava studies Solana meme assets with liquidity checks.",
    publicHeadline: "dogwifhat is a Solana meme asset driven by culture, liquidity, and rotation.",
    publicSubheadline:
      "WIF is watched because Solana meme flows, exchange liquidity, holder activity, social attention, SOL conditions, and leverage can create fast market movement.",
    plainEnglish:
      "dogwifhat, known by the symbol WIF, is a Solana-based meme token. It is studied through attention, liquidity, Solana ecosystem context, and on-chain activity rather than protocol utility.",
    marketRole:
      "WIF sits in the Solana meme-asset lane. Students use it to understand how cultural attention, chain-specific liquidity, exchange access, and derivatives positioning can drive high-volatility assets.",
    whyTradersWatch:
      "Traders watch WIF for Solana meme-sector rotation, SOL strength, exchange depth, holder movement, social breadth, funding pressure, and whether market activity is spot-led or leverage-led.",
    lurnavaMonitorNote:
      "Lurnava studies WIF through Solscan token activity, holder behavior, exchange liquidity, perpetual positioning, social breadth, Solana network context, and comparison with other Solana meme assets.",
    conversionCta:
      "Learn how to study meme assets through liquidity checks, on-chain review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.dogwifhatSolscan, assetResearchSources.dogwifhatCoinGecko],
    drivers: [
      { title: "Solana meme rotation", detail: "WIF can move when traders rotate into Solana-native meme assets." },
      { title: "SOL ecosystem strength", detail: "Strong Solana attention can increase interest in Solana-based meme assets." },
      { title: "Exchange liquidity", detail: "Market depth affects how well WIF absorbs fast buying and selling." },
      { title: "Social breadth", detail: "WIF depends heavily on whether attention spreads beyond a narrow crowd." },
    ],
    publicRisks: [
      { risk: "Attention-led reversal", watch: "WIF can reverse quickly if cultural attention fades." },
      { risk: "Chain-specific crowding", watch: "Solana meme rotations can become crowded and unwind together." },
      { risk: "Thin liquidity pockets", watch: "Fast meme moves can create slippage and sharp retracements." },
    ],
    lab: {
      deskBrief:
        "WIF is studied as a Solana meme asset with high attention sensitivity. The Asset Lab reviews Solscan token activity, holder concentration, exchange depth, SOL ecosystem conditions, social breadth, derivatives positioning, and whether demand is broad or only crowd-driven.",
      researchQuestion:
        "Is WIF moving because Solana meme rotation expanded, SOL strength lifted ecosystem assets, spot liquidity improved, holder behavior changed, or leveraged positioning created a temporary move?",
      operatingModel:
        "WIF analysis treats the asset as attention-led and liquidity-sensitive. A stronger read connects Solana context, holder movement, exchange depth, social breadth, derivatives data, and comparison with other meme assets.",
      participants: [
        { name: "WIF holders", role: "Community and supply base", whyItMatters: "Holder behavior affects supply pressure and attention durability." },
        { name: "Solana meme traders", role: "Rotation participants", whyItMatters: "WIF often moves with Solana meme-sector appetite." },
        { name: "Centralized exchanges", role: "Liquidity venues", whyItMatters: "Listings and order-book depth shape tradeability." },
        { name: "Large wallets", role: "Concentration risk", whyItMatters: "Large transfers can alter short-term supply pressure." },
      ],
      historicalEvents: [
        { year: "2023", title: "WIF launches in the Solana meme sector", detail: "The asset becomes part of a growing Solana meme-token market." },
        { year: "2024", title: "Solana meme attention expands", detail: "WIF becomes one of the most watched Solana meme assets." },
        { year: "2025-2026", title: "Exchange and derivatives context deepens", detail: "Students watch liquidity quality and leverage conditions more closely." },
        { year: "Ongoing", title: "On-chain verification remains important", detail: "Solscan and market-data sources help separate real token activity from recycled hype." },
      ],
      correlations: [
        { market: "Solana", relationship: "WIF often reacts to SOL ecosystem strength and liquidity.", learnerNote: "SOL context helps judge whether WIF is moving alone or with the chain." },
        { market: "Solana meme basket", relationship: "WIF can rotate with other Solana meme assets.", learnerNote: "Compare sector movement before assigning a WIF-only cause." },
        { market: "Perpetual futures", relationship: "Leverage can amplify WIF moves.", learnerNote: "Crowded funding makes sharp reversals more likely." },
      ],
      riskMap: [
        { risk: "No protocol-utility anchor", watch: "WIF should be studied as a meme asset, not as an infrastructure protocol." },
        { risk: "Solana rotation unwind", watch: "Meme assets on one chain can decline together when attention leaves." },
        { risk: "Social concentration", watch: "A narrow attention base can weaken fast." },
      ],
      researchRoutine: [
        "Review WIF trend versus SOL and Solana meme assets.",
        "Check Solscan holder activity, transfers, and concentration.",
        "Review exchange depth, spot volume, funding, and open interest.",
        "Scan social breadth while filtering repeated hype.",
        "Classify the move as SOL-led, meme-sector-led, holder-led, liquidity-led, or leverage-led.",
      ],
      relatedLessons: ["Level 4 Market Sentiment", "Level 9 Crypto Risk Mapping"],
      relatedStrategies: ["Meme Sector Rotation", "Volume Spike Breakout", "Sentiment + Technical Overlay"],
    },
  },
  {
    slug: "injective",
    name: "Injective",
    symbol: "INJ",
    assetClass: "crypto",
    rank: 30,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Injective? INJ Finance Chain Guide",
    seoDescription: "Learn what Injective is, why INJ is watched, what affects it, and how Lurnava studies finance-focused Layer 1 crypto assets.",
    publicHeadline: "Injective is a finance-focused Layer 1 network with INJ at the center.",
    publicSubheadline:
      "INJ is watched because staking, governance, DeFi applications, exchange activity, token burn mechanics, AI finance themes, and market liquidity can affect demand.",
    plainEnglish:
      "Injective is a blockchain built for on-chain finance applications. INJ is connected to staking, governance, network use, and token-economics mechanics described by the Injective ecosystem.",
    marketRole:
      "INJ sits in the DeFi Layer 1 and on-chain finance lane. Students use it to study exchange infrastructure, staking, governance, burn mechanics, application usage, and finance-specific ecosystem demand.",
    whyTradersWatch:
      "Traders watch INJ for staking participation, governance proposals, exchange and DeFi application activity, burn mechanics, token-economics changes, AI finance themes, and relative strength against DeFi infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Injective through application usage, staking behavior, governance, burn data, liquidity depth, finance-sector themes, token-economics updates, and INJ relative strength versus DeFi and Layer 1 assets.",
    conversionCta:
      "Learn how to study finance-focused crypto networks through usage checks, staking review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.injectiveHome, assetResearchSources.injectiveTokenomics],
    drivers: [
      { title: "DeFi application usage", detail: "More trading, lending, or tokenized-market activity can support Injective demand." },
      { title: "Staking and governance", detail: "INJ staking and governance participation affect network security and protocol direction." },
      { title: "Burn mechanics", detail: "Token burn updates can affect how traders evaluate supply behavior." },
      { title: "Finance-sector narratives", detail: "Injective can attract attention when markets focus on on-chain finance infrastructure." },
    ],
    publicRisks: [
      { risk: "Usage concentration", watch: "Finance-focused chains need durable application activity." },
      { risk: "Token-economics overreaction", watch: "Burn narratives need usage context before students treat them as durable." },
      { risk: "Sector competition", watch: "Many chains compete for DeFi liquidity and financial applications." },
    ],
    lab: {
      deskBrief:
        "INJ is studied as a finance-focused Layer 1 asset. The Asset Lab reviews application usage, staking participation, governance proposals, burn mechanics, token-economics updates, exchange liquidity, AI finance themes, and relative strength versus DeFi infrastructure assets.",
      researchQuestion:
        "Is INJ moving because Injective application usage improved, staking or governance changed expectations, burn mechanics gained attention, finance-sector themes expanded, or DeFi infrastructure rotated together?",
      operatingModel:
        "Injective analysis connects finance-specific adoption with token mechanics. A stronger read checks real application usage, staking participation, governance quality, burn context, liquidity depth, and DeFi-sector relative strength.",
      participants: [
        { name: "Injective validators and stakers", role: "Network security layer", whyItMatters: "Staking supports network security and affects liquid supply context." },
        { name: "DeFi application teams", role: "Demand creators", whyItMatters: "Applications create the financial activity that supports the network thesis." },
        { name: "Governance voters", role: "Protocol stewards", whyItMatters: "Governance choices affect upgrades, parameters, and ecosystem direction." },
        { name: "Liquidity providers", role: "Market depth suppliers", whyItMatters: "On-chain finance needs depth and reliable execution." },
      ],
      historicalEvents: [
        { year: "2021-2022", title: "Injective expands as DeFi infrastructure", detail: "The network becomes known for finance-oriented blockchain design." },
        { year: "2023", title: "INJ gains cycle attention", detail: "Market focus grows around DeFi infrastructure and token-economics themes." },
        { year: "2024-2026", title: "Token-economics and finance themes deepen", detail: "Students track burn mechanics, governance, and application usage together." },
        { year: "Ongoing", title: "Application activity remains the core test", detail: "Usage helps separate durable demand from narrative-only moves." },
      ],
      correlations: [
        { market: "DeFi infrastructure", relationship: "INJ can rotate with AAVE, UNI, and finance-linked protocol assets.", learnerNote: "Compare usage and token mechanics across the group." },
        { market: "Layer 1 assets", relationship: "INJ can also move with base-chain rotations.", learnerNote: "Check whether the move is DeFi-specific or Layer 1 beta." },
        { market: "AI finance themes", relationship: "Injective can attract attention during AI and on-chain finance rotations.", learnerNote: "Verify product use before trusting the theme." },
      ],
      riskMap: [
        { risk: "Narrative ahead of usage", watch: "Finance themes need real application activity." },
        { risk: "Liquidity fragmentation", watch: "DeFi liquidity can move across chains and protocols." },
        { risk: "Burn-mechanic misunderstanding", watch: "Supply mechanics should be read with demand and usage." },
      ],
      researchRoutine: [
        "Review INJ trend against DeFi infrastructure and Layer 1 assets.",
        "Check staking participation, governance proposals, and token-economics updates.",
        "Review application usage, exchange depth, and DeFi liquidity.",
        "Scan burn mechanics and whether they connect to real activity.",
        "Classify the move as usage-led, staking-led, governance-led, token-economics-led, or sector-led.",
      ],
      relatedLessons: ["Level 8 DeFi Infrastructure", "Level 9 Token Economics"],
      relatedStrategies: ["DeFi Infrastructure Rotation", "Technical + Fundamental Confirmation", "Governance Catalyst Review"],
    },
  },
  {
    slug: "render",
    name: "Render",
    symbol: "RENDER",
    assetClass: "crypto",
    rank: 31,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Render? RENDER GPU Network Guide",
    seoDescription: "Learn what Render is, why RENDER is watched, what affects it, and how Lurnava studies decentralized GPU and creator-infrastructure assets.",
    publicHeadline: "Render is a decentralized GPU network for rendering and compute demand.",
    publicSubheadline:
      "RENDER is watched because creator demand, GPU supply, AI compute themes, node economics, token migration context, and infrastructure rotation can affect market behavior.",
    plainEnglish:
      "Render connects people who need GPU rendering or compute with network participants who can provide GPU resources. RENDER is studied as a decentralized compute and creator-infrastructure asset.",
    marketRole:
      "RENDER sits in the decentralized compute and infrastructure lane. Students use it to study real network demand, node participation, creator adoption, AI compute narratives, and token-economics context.",
    whyTradersWatch:
      "Traders watch RENDER for GPU demand, creator and AI usage, node participation, token burn and emission context, Solana migration effects, exchange liquidity, and relative strength against compute assets.",
    lurnavaMonitorNote:
      "Lurnava studies Render through network usage, creator demand, node economics, token metrics, AI and GPU compute themes, exchange depth, and RENDER relative strength versus infrastructure and AI-linked assets.",
    conversionCta:
      "Learn how to study compute infrastructure assets through usage checks, demand mapping, and structured market training inside Lurnava.",
    sources: [assetResearchSources.renderHome, assetResearchSources.renderKnowledgeBase],
    drivers: [
      { title: "GPU demand", detail: "More rendering or compute demand can support the network usage story." },
      { title: "Creator adoption", detail: "Render's core market depends on artists, studios, and builders using the network." },
      { title: "AI compute theme", detail: "RENDER can attract attention when markets focus on decentralized compute and AI infrastructure." },
      { title: "Node economics", detail: "GPU supplier participation affects network capacity and reliability." },
    ],
    publicRisks: [
      { risk: "Narrative overreach", watch: "AI compute themes need real usage evidence." },
      { risk: "Demand concentration", watch: "Render needs recurring customers, not only headline attention." },
      { risk: "Infrastructure competition", watch: "Centralized cloud and decentralized compute networks compete for demand." },
    ],
    lab: {
      deskBrief:
        "RENDER is studied as a decentralized GPU and creator-infrastructure asset. The Asset Lab reviews network usage, creator demand, node participation, token metrics, AI compute narratives, Solana context, exchange liquidity, and whether demand is visible beyond broad infrastructure rotation.",
      researchQuestion:
        "Is RENDER moving because network usage improved, creator demand expanded, AI compute themes gained attention, token metrics changed, or infrastructure assets rotated together?",
      operatingModel:
        "Render analysis tests compute narratives against usage. A stronger read connects creator demand, node participation, token metrics, AI infrastructure context, exchange depth, and relative strength against compute and infrastructure assets.",
      participants: [
        { name: "Creators and studios", role: "Demand source", whyItMatters: "Rendering demand is central to the network's core use case." },
        { name: "GPU node operators", role: "Supply providers", whyItMatters: "Node participation affects capacity and reliability." },
        { name: "Render ecosystem contributors", role: "Network builders", whyItMatters: "Tools and integrations can make the network easier to use." },
        { name: "AI and compute users", role: "Expansion demand", whyItMatters: "Compute-adjacent use cases can broaden market attention." },
      ],
      historicalEvents: [
        { year: "2017-2020", title: "Render network concept develops", detail: "The project focuses on decentralized GPU resources for rendering." },
        { year: "2021-2023", title: "Creator and GPU infrastructure attention grows", detail: "Market focus expands beyond simple token trading into network demand." },
        { year: "2023-2024", title: "Solana and token migration context becomes important", detail: "Students track token and network changes as part of market review." },
        { year: "2024-2026", title: "AI compute narrative expands", detail: "RENDER is studied with broader decentralized compute and AI infrastructure assets." },
      ],
      correlations: [
        { market: "AI-linked crypto assets", relationship: "RENDER can rotate with decentralized compute and AI-infrastructure tokens.", learnerNote: "AI theme strength needs usage evidence." },
        { market: "Solana", relationship: "RENDER market context can include Solana ecosystem liquidity.", learnerNote: "Chain context matters for token access and participation." },
        { market: "Cloud and GPU demand", relationship: "Broader GPU demand can shape the infrastructure story.", learnerNote: "Public compute demand is not the same as Render network usage." },
      ],
      riskMap: [
        { risk: "Theme-only move", watch: "AI and GPU headlines can lift RENDER without usage growth." },
        { risk: "Node-supply imbalance", watch: "The network needs both demand and reliable supply." },
        { risk: "Competitive pressure", watch: "Centralized and decentralized compute providers compete for users." },
      ],
      researchRoutine: [
        "Review RENDER trend against compute, AI-linked, and infrastructure assets.",
        "Check official network usage, creator demand, and node-participation updates.",
        "Review token metrics and migration-related context.",
        "Scan AI compute narratives and verify whether Render-specific demand is present.",
        "Classify the move as usage-led, AI-theme-led, node-economics-led, token-metrics-led, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Narrative Versus Usage"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "aave",
    name: "Aave",
    symbol: "AAVE",
    assetClass: "crypto",
    rank: 32,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Aave? AAVE DeFi Lending Guide",
    seoDescription: "Learn what Aave is, why AAVE is watched, what affects it, and how Lurnava studies DeFi lending and governance assets.",
    publicHeadline: "Aave is a major DeFi lending protocol governed by the AAVE token.",
    publicSubheadline:
      "AAVE is watched because lending activity, collateral risk, governance, safety-module context, protocol upgrades, and DeFi liquidity can affect market demand.",
    plainEnglish:
      "Aave is a non-custodial liquidity protocol where users can supply and borrow crypto assets through smart contracts. AAVE is tied to governance and protocol risk context.",
    marketRole:
      "AAVE sits in the DeFi lending and governance lane. Students use it to study liquidity pools, collateral rules, borrowing demand, risk parameters, governance proposals, and DeFi market health.",
    whyTradersWatch:
      "Traders watch AAVE for deposit and borrow activity, collateral changes, governance votes, risk-parameter updates, protocol version upgrades, safety-module context, and DeFi-sector rotation.",
    lurnavaMonitorNote:
      "Lurnava studies Aave through lending market activity, collateral exposure, governance proposals, risk-parameter changes, protocol upgrades, safety-module context, liquidity depth, and AAVE relative strength versus DeFi assets.",
    conversionCta:
      "Learn how to study DeFi lending assets through collateral review, governance checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.aaveHome, assetResearchSources.aaveDocs],
    drivers: [
      { title: "Lending market activity", detail: "More supply and borrow demand can support the Aave protocol usage story." },
      { title: "Collateral risk", detail: "Listed assets and liquidation parameters affect protocol safety." },
      { title: "Governance decisions", detail: "AAVE holders can vote on risk settings, upgrades, and ecosystem direction." },
      { title: "DeFi rotation", detail: "AAVE can move when capital rotates toward established DeFi protocols." },
    ],
    publicRisks: [
      { risk: "Collateral shock", watch: "Volatile collateral can stress lending protocols." },
      { risk: "Governance risk", watch: "Risk-parameter decisions can affect market confidence." },
      { risk: "Protocol-token gap", watch: "Strong protocol usage does not automatically create direct AAVE demand." },
    ],
    lab: {
      deskBrief:
        "AAVE is studied as a DeFi lending and governance asset. The Asset Lab reviews supply and borrow activity, collateral composition, liquidation risk, governance proposals, risk-parameter updates, safety-module context, protocol upgrades, and DeFi-sector relative strength.",
      researchQuestion:
        "Is AAVE moving because lending activity improved, collateral risk changed, governance upgraded protocol parameters, DeFi liquidity expanded, or established DeFi assets rotated together?",
      operatingModel:
        "Aave analysis connects protocol usage with risk management. A stronger read checks lending demand, collateral quality, governance decisions, safety context, upgrade roadmap, and relative strength against DeFi peers.",
      participants: [
        { name: "Suppliers", role: "Liquidity providers", whyItMatters: "They provide assets that borrowers can access." },
        { name: "Borrowers", role: "Demand source", whyItMatters: "Borrow demand shows whether markets need on-chain credit." },
        { name: "AAVE governance voters", role: "Protocol stewards", whyItMatters: "Governance controls risk parameters and upgrades." },
        { name: "Risk service providers", role: "Safety analysts", whyItMatters: "Risk review helps protect lending markets during stress." },
      ],
      historicalEvents: [
        { year: "2017-2020", title: "Aave evolves from ETHLend into liquidity pools", detail: "The protocol becomes a major DeFi lending market." },
        { year: "2020", title: "AAVE governance expands", detail: "The token becomes central to protocol governance." },
        { year: "2021-2024", title: "Aave deploys across networks", detail: "Multi-chain deployments broaden liquidity and risk surfaces." },
        { year: "2025-2026", title: "Protocol upgrades remain central", detail: "Students track new versions, risk modules, and liquidity design changes." },
      ],
      correlations: [
        { market: "Ethereum DeFi", relationship: "Aave activity is closely tied to DeFi liquidity conditions.", learnerNote: "ETH and stablecoin liquidity matter for lending demand." },
        { market: "Maker and stablecoins", relationship: "Lending demand often interacts with stablecoin and collateral markets.", learnerNote: "Collateral risk can connect multiple DeFi protocols." },
        { market: "Governance tokens", relationship: "AAVE can rotate with UNI, MKR, and other DeFi governance assets.", learnerNote: "Compare protocol usage and risk quality." },
      ],
      riskMap: [
        { risk: "Bad collateral settings", watch: "Poor risk parameters can stress lending markets." },
        { risk: "Liquidity crunch", watch: "Borrowing demand and withdrawals can create stress in volatile conditions." },
        { risk: "Upgrade risk", watch: "New protocol versions need careful review before students assume improvement." },
      ],
      researchRoutine: [
        "Review AAVE trend against UNI, MKR, and DeFi governance assets.",
        "Check supply, borrow, utilization, and collateral composition.",
        "Read major governance proposals and risk-parameter updates.",
        "Review protocol upgrades and safety-module context.",
        "Classify the move as usage-led, governance-led, collateral-risk-led, upgrade-led, or DeFi-sector rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Protocol Risk"],
      relatedStrategies: ["DeFi Sector Rotation", "Governance Catalyst Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "maker",
    name: "Maker",
    symbol: "MKR",
    assetClass: "crypto",
    rank: 33,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Maker? MKR and Sky Governance Guide",
    seoDescription: "Learn what Maker is, why MKR is watched, what affects it, and how Lurnava studies MakerDAO, Sky, Dai, and DeFi governance risk.",
    publicHeadline: "Maker is a major DeFi governance system now tied to the Sky transition.",
    publicSubheadline:
      "MKR is watched because Maker/Sky governance, Dai and stablecoin demand, collateral risk, migration context, protocol revenue, and DeFi rotation can affect behavior.",
    plainEnglish:
      "MakerDAO built the Maker Protocol and Dai stablecoin system. Because MakerDAO has moved into the Sky transition, students study MKR with governance and migration context instead of treating it as a static asset.",
    marketRole:
      "MKR sits in the DeFi governance and stablecoin-infrastructure lane. Students use it to study collateral management, stablecoin demand, governance votes, migration risk, and protocol economics.",
    whyTradersWatch:
      "Traders watch MKR for Maker/Sky governance, Dai and stablecoin demand, collateral composition, protocol revenue, burn and surplus mechanics, migration updates, and DeFi-sector rotation.",
    lurnavaMonitorNote:
      "Lurnava studies Maker through MakerDAO and Sky sources, governance votes, Dai and stablecoin demand, collateral risk, migration context, protocol economics, liquidity depth, and MKR relative strength versus DeFi assets.",
    conversionCta:
      "Learn how to study DeFi governance assets through collateral review, migration checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.makerHome, assetResearchSources.makerDocs],
    drivers: [
      { title: "Stablecoin demand", detail: "Dai and Sky ecosystem demand can affect how markets view Maker-related governance assets." },
      { title: "Collateral risk", detail: "The system depends on collateral quality, liquidation design, and risk parameters." },
      { title: "Governance and migration", detail: "Maker/Sky governance and migration context can change how traders evaluate MKR." },
      { title: "Protocol economics", detail: "Revenue, surplus, and burn discussions can affect market expectations." },
    ],
    publicRisks: [
      { risk: "Migration confusion", watch: "Students must check current Maker/Sky status before interpreting MKR." },
      { risk: "Collateral stress", watch: "Stablecoin systems can face pressure when collateral markets move sharply." },
      { risk: "Governance complexity", watch: "Maker/Sky decisions can be technical and easy to misread." },
    ],
    lab: {
      deskBrief:
        "MKR is studied as a DeFi governance asset in the MakerDAO to Sky transition context. The Asset Lab reviews Dai and stablecoin demand, collateral composition, governance votes, migration updates, protocol economics, surplus and burn mechanics, and MKR relative strength versus DeFi governance assets.",
      researchQuestion:
        "Is MKR moving because Maker/Sky governance changed expectations, stablecoin demand improved, collateral risk shifted, migration context changed, protocol economics strengthened, or DeFi governance assets rotated together?",
      operatingModel:
        "Maker analysis starts with current governance context. A stronger read connects Dai and Sky ecosystem demand, collateral risk, migration status, governance decisions, protocol economics, and relative strength against DeFi peers.",
      participants: [
        { name: "MKR and Sky governance participants", role: "Protocol stewards", whyItMatters: "Governance decisions shape collateral, rates, risk, and migration context." },
        { name: "Stablecoin users", role: "Demand source", whyItMatters: "Dai and Sky ecosystem demand support protocol relevance." },
        { name: "Collateral providers", role: "System backing layer", whyItMatters: "Collateral quality affects system health." },
        { name: "Risk and oracle contributors", role: "Safety layer", whyItMatters: "Stablecoin systems rely on careful risk inputs and reliable data." },
      ],
      historicalEvents: [
        { year: "2017", title: "Dai system begins", detail: "Maker becomes one of the earliest major DeFi stablecoin systems." },
        { year: "2019", title: "Multi-collateral Dai expands the system", detail: "Collateral variety increases both utility and risk complexity." },
        { year: "2020-2024", title: "Maker becomes a core DeFi governance case study", detail: "Students track collateral, rates, surplus, and governance quality." },
        { year: "2024-2026", title: "MakerDAO moves into Sky transition context", detail: "MKR research must include current migration and governance status." },
      ],
      correlations: [
        { market: "Stablecoins", relationship: "Maker is tied to demand for decentralized stablecoin infrastructure.", learnerNote: "Stablecoin demand and collateral health should be reviewed together." },
        { market: "Aave and DeFi lending", relationship: "Maker risk can connect with broader DeFi collateral markets.", learnerNote: "Stress in collateral markets can affect multiple protocols." },
        { market: "Governance tokens", relationship: "MKR can rotate with AAVE, UNI, and other established DeFi assets.", learnerNote: "Compare governance quality and protocol economics." },
      ],
      riskMap: [
        { risk: "Outdated MKR assumptions", watch: "Maker/Sky migration context must be checked before analysis." },
        { risk: "Collateral market stress", watch: "Sharp collateral moves can affect stablecoin system confidence." },
        { risk: "Governance opacity", watch: "Complex votes and migrations can confuse market participants." },
      ],
      researchRoutine: [
        "Review MKR trend against AAVE, UNI, and DeFi governance assets.",
        "Check current MakerDAO and Sky governance updates before interpreting the asset.",
        "Review Dai and stablecoin demand, collateral composition, and protocol economics.",
        "Read major governance votes, migration notices, and risk updates.",
        "Classify the move as governance-led, stablecoin-demand-led, collateral-risk-led, migration-led, or DeFi-sector rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Governance Risk"],
      relatedStrategies: ["DeFi Sector Rotation", "Governance Catalyst Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "lido-dao",
    name: "Lido DAO",
    symbol: "LDO",
    assetClass: "crypto",
    rank: 34,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Lido DAO? LDO Liquid Staking Guide",
    seoDescription: "Learn what Lido DAO is, why LDO is watched, what affects it, and how Lurnava studies liquid staking and governance assets.",
    publicHeadline: "Lido DAO governs one of the largest liquid staking systems in Ethereum.",
    publicSubheadline:
      "LDO is watched because stETH demand, validator risk, DAO governance, Ethereum staking yields, DeFi integrations, and dual-governance safeguards can affect market behavior.",
    plainEnglish:
      "Lido lets users stake ETH and receive liquid staking tokens such as stETH. LDO is the governance asset tied to protocol decisions, risk controls, and DAO direction.",
    marketRole:
      "LDO sits in the liquid staking and DeFi governance lane. Students use it to study Ethereum staking demand, stETH liquidity, validator selection, protocol governance, and DeFi dependency risk.",
    whyTradersWatch:
      "Traders watch LDO for stETH demand, Ethereum staking yields, validator performance, governance votes, dual-governance changes, DeFi integrations, and LDO strength versus DeFi infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Lido through stETH demand, ETH staking context, validator-set quality, governance proposals, DeFi liquidity, dual-governance safeguards, and LDO relative strength versus staking and DeFi assets.",
    conversionCta:
      "Learn how to study liquid staking assets through governance review, validator risk checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.lidoDocs, assetResearchSources.lidoGovernance],
    drivers: [
      { title: "stETH demand", detail: "Demand for liquid staked ETH affects how markets view the Lido ecosystem." },
      { title: "Ethereum staking yield", detail: "ETH staking conditions can change interest in liquid staking products." },
      { title: "DAO governance", detail: "LDO governance decisions affect protocol parameters, operators, and risk controls." },
      { title: "DeFi integration", detail: "stETH use across DeFi can strengthen or stress Lido's market role." },
    ],
    publicRisks: [
      { risk: "Validator risk", watch: "Node operator performance and concentration matter for staking confidence." },
      { risk: "stETH liquidity stress", watch: "Liquid staking tokens can face liquidity pressure during market stress." },
      { risk: "Governance complexity", watch: "DAO decisions and dual-governance mechanics require careful reading." },
    ],
    lab: {
      deskBrief:
        "LDO is studied as a liquid staking governance asset tied to Ethereum staking. The Asset Lab reviews stETH demand, ETH staking yields, validator-set risk, DAO proposals, dual-governance safeguards, DeFi liquidity, and whether LDO token behavior reflects protocol conditions.",
      researchQuestion:
        "Is LDO moving because stETH demand improved, Ethereum staking conditions changed, governance altered risk expectations, DeFi liquidity shifted, or liquid staking assets rotated together?",
      operatingModel:
        "Lido analysis separates protocol usage from governance-token demand. A stronger read connects stETH liquidity, validator quality, Ethereum staking economics, governance decisions, DeFi integrations, and LDO relative strength.",
      participants: [
        { name: "stETH holders", role: "Liquid staking users", whyItMatters: "Their demand and exit behavior affect liquidity and protocol confidence." },
        { name: "Node operators", role: "Validator providers", whyItMatters: "Operator performance affects staking reliability and risk." },
        { name: "LDO governance voters", role: "Protocol stewards", whyItMatters: "Governance controls important parameters and operator decisions." },
        { name: "DeFi protocols", role: "Integration layer", whyItMatters: "stETH use across DeFi can create demand and systemic links." },
      ],
      historicalEvents: [
        { year: "2020", title: "Lido launches liquid staking", detail: "The protocol gives ETH stakers a liquid representation of staked ETH." },
        { year: "2021-2022", title: "stETH becomes core DeFi collateral", detail: "Market attention grows around stETH liquidity and DeFi integrations." },
        { year: "2023", title: "Ethereum withdrawals change staking context", detail: "Withdrawals make liquid staking risk and liquidity easier to compare." },
        { year: "2025-2026", title: "Dual governance becomes central", detail: "Students track how stETH-holder safeguards interact with LDO governance." },
      ],
      correlations: [
        { market: "Ethereum staking", relationship: "Lido demand is tied to ETH staking economics.", learnerNote: "ETH yield and withdrawal context should be checked before judging LDO." },
        { market: "DeFi liquidity", relationship: "stETH use in DeFi connects Lido to lending and liquidity markets.", learnerNote: "Liquidity health matters as much as headline staking deposits." },
        { market: "Governance tokens", relationship: "LDO can rotate with AAVE, MKR, and UNI.", learnerNote: "Compare protocol usage and governance risk across DeFi assets." },
      ],
      riskMap: [
        { risk: "stETH discount pressure", watch: "Liquidity stress can affect confidence in liquid staking tokens." },
        { risk: "Operator concentration", watch: "Validator set quality affects protocol resilience." },
        { risk: "Governance conflict", watch: "LDO holder decisions and stETH-holder safeguards can create tension." },
      ],
      researchRoutine: [
        "Review LDO trend against ETH and DeFi governance assets.",
        "Check stETH liquidity, demand, and DeFi integration health.",
        "Review validator-set updates and operator risk discussion.",
        "Read DAO proposals and dual-governance updates.",
        "Classify the move as staking-demand, governance-led, liquidity-led, ETH-beta, or DeFi-sector rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Governance Risk"],
      relatedStrategies: ["DeFi Sector Rotation", "Governance Catalyst Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "celestia",
    name: "Celestia",
    symbol: "TIA",
    assetClass: "crypto",
    rank: 35,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Celestia? TIA Modular Data Guide",
    seoDescription: "Learn what Celestia is, why TIA is watched, what affects it, and how Lurnava studies modular data availability assets.",
    publicHeadline: "Celestia is a modular data availability network for rollups and app chains.",
    publicSubheadline:
      "TIA is watched because blobspace demand, rollup adoption, staking, validator participation, token unlocks, and modular blockchain narratives can affect market behavior.",
    plainEnglish:
      "Celestia helps blockchains publish and verify data availability without handling every part of execution. TIA is used around fees, staking, and network participation.",
    marketRole:
      "TIA sits in the modular infrastructure lane. Students use it to study data availability demand, rollup architecture, staking security, token unlocks, and whether modular blockchain usage is real.",
    whyTradersWatch:
      "Traders watch TIA for blobspace demand, rollup launches, data availability usage, staking participation, validator behavior, token unlocks, and relative strength against modular infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Celestia through PayForBlobs demand, rollup adoption, validator health, staking behavior, unlock calendars, modular-sector narratives, and TIA relative strength versus infrastructure assets.",
    conversionCta:
      "Learn how to study modular crypto infrastructure through usage checks, supply review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.celestiaDataAvailability, assetResearchSources.celestiaTiaOverview],
    drivers: [
      { title: "Blobspace demand", detail: "More rollups publishing data to Celestia can support the network usage thesis." },
      { title: "Modular adoption", detail: "Celestia benefits when builders choose modular blockchain designs." },
      { title: "Staking participation", detail: "TIA staking affects network security and liquid supply behavior." },
      { title: "Token unlocks", detail: "Unlock schedules can change supply pressure and trader expectations." },
    ],
    publicRisks: [
      { risk: "Narrative ahead of usage", watch: "Modular blockchain attention needs data availability demand evidence." },
      { risk: "Unlock pressure", watch: "New supply can pressure the market if demand is weak." },
      { risk: "Infrastructure competition", watch: "Other data availability systems compete for rollup customers." },
    ],
    lab: {
      deskBrief:
        "TIA is studied as a modular data availability asset. The Asset Lab reviews blobspace demand, PayForBlobs usage, rollup adoption, validator health, staking participation, token unlocks, infrastructure competition, and whether modular blockchain demand is visible in real usage.",
      researchQuestion:
        "Is TIA moving because Celestia data availability demand improved, modular rollup adoption expanded, staking conditions changed, unlock pressure shifted, or infrastructure assets rotated together?",
      operatingModel:
        "Celestia analysis checks whether modular theory is becoming usage. A stronger read connects blobspace demand, rollup customers, staking security, unlock timing, validator health, and TIA relative strength.",
      participants: [
        { name: "Rollup developers", role: "Blobspace demand source", whyItMatters: "Their usage creates real demand for Celestia data availability." },
        { name: "Validators and stakers", role: "Security participants", whyItMatters: "They secure the network and affect liquid supply context." },
        { name: "Light node participants", role: "Verification layer", whyItMatters: "Data availability sampling relies on broad verification participation." },
        { name: "Modular infrastructure competitors", role: "Market pressure", whyItMatters: "Competing systems can affect Celestia adoption." },
      ],
      historicalEvents: [
        { year: "2023", title: "Celestia mainnet launches", detail: "The market begins tracking modular data availability as a live network." },
        { year: "2024", title: "Modular rollup activity expands", detail: "Students watch whether more chains publish data to Celestia." },
        { year: "2025-2026", title: "Data availability competition grows", detail: "Celestia is compared with Ethereum blobspace and other DA layers." },
        { year: "Ongoing", title: "Unlock calendars remain important", detail: "Supply timing is part of every TIA market review." },
      ],
      correlations: [
        { market: "Ethereum blobspace", relationship: "Celestia competes and coexists with Ethereum data availability options.", learnerNote: "Compare customer demand and cost context." },
        { market: "Modular infrastructure assets", relationship: "TIA can rotate with other infrastructure tokens.", learnerNote: "Sector strength does not prove Celestia-specific usage." },
        { market: "Token unlock markets", relationship: "TIA supply schedules can affect risk.", learnerNote: "Unlocks matter most when demand is not absorbing new supply." },
      ],
      riskMap: [
        { risk: "Low blobspace demand", watch: "The network thesis needs active rollup customers." },
        { risk: "Unlock overhang", watch: "Supply expectations can weigh on rallies." },
        { risk: "Competition from cheaper or native DA", watch: "Rollups can choose other availability layers." },
      ],
      researchRoutine: [
        "Review TIA trend against modular and infrastructure assets.",
        "Check PayForBlobs activity, rollup customers, and data availability demand.",
        "Review staking participation, validator health, and network upgrades.",
        "Check unlock calendars and supply context.",
        "Classify the move as usage-led, modular-theme-led, staking-led, unlock-led, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Token Supply Risk"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Unlock Event Risk Review"],
    },
  },
  {
    slug: "sei",
    name: "Sei",
    symbol: "SEI",
    assetClass: "crypto",
    rank: 36,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Sei? SEI Trading Chain Guide",
    seoDescription: "Learn what Sei is, why SEI is watched, what affects it, and how Lurnava studies high-speed finance-focused Layer 1 assets.",
    publicHeadline: "Sei is a high-performance Layer 1 built for finance and trading applications.",
    publicSubheadline:
      "SEI is watched because EVM adoption, parallel execution, DeFi liquidity, validator staking, application launches, and high-speed chain competition can affect demand.",
    plainEnglish:
      "Sei is a blockchain designed for fast, low-cost applications, especially financial and trading use cases. SEI is the asset tied to network fees, staking, and ecosystem participation.",
    marketRole:
      "SEI sits in the finance-focused Layer 1 lane. Students use it to study EVM adoption, parallel execution, DeFi liquidity, validator security, application usage, and competition with other fast chains.",
    whyTradersWatch:
      "Traders watch SEI for application launches, DeFi liquidity, EVM usage, staking participation, validator health, exchange depth, and relative strength against SUI, APT, SOL, and INJ.",
    lurnavaMonitorNote:
      "Lurnava studies Sei through EVM activity, application usage, DeFi liquidity, validator staking, ecosystem launches, exchange depth, and SEI relative strength versus high-performance Layer 1 assets.",
    conversionCta:
      "Learn how to study fast Layer 1 networks through usage checks, liquidity review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.seiHome, assetResearchSources.seiDocs],
    drivers: [
      { title: "Application launches", detail: "New useful applications can create demand for network activity." },
      { title: "EVM adoption", detail: "EVM compatibility can attract developers and liquidity from Ethereum-style ecosystems." },
      { title: "DeFi liquidity", detail: "Finance-focused chains need active markets and depth to support their thesis." },
      { title: "Layer 1 rotation", detail: "SEI can move when capital rotates toward high-performance networks." },
    ],
    publicRisks: [
      { risk: "Adoption gap", watch: "Speed claims need real applications and users." },
      { risk: "Liquidity fragmentation", watch: "DeFi liquidity can move quickly between chains." },
      { risk: "Competitive pressure", watch: "Many high-speed chains compete for builders and capital." },
    ],
    lab: {
      deskBrief:
        "SEI is studied as a high-performance finance-focused Layer 1 asset. The Asset Lab reviews EVM activity, application launches, DeFi liquidity, validator staking, exchange depth, ecosystem incentives, and whether market demand is Sei-specific or part of broad Layer 1 rotation.",
      researchQuestion:
        "Is SEI moving because application usage improved, DeFi liquidity expanded, EVM adoption gained traction, staking conditions changed, or high-performance Layer 1 assets rotated together?",
      operatingModel:
        "Sei analysis connects speed with adoption. A stronger read checks EVM usage, finance applications, liquidity depth, validator context, ecosystem launches, and relative strength against other fast chains.",
      participants: [
        { name: "Sei developers", role: "Application builders", whyItMatters: "Developers create the products needed for network demand." },
        { name: "Validators and stakers", role: "Security participants", whyItMatters: "Staking supports network security and supply context." },
        { name: "DeFi liquidity providers", role: "Market depth suppliers", whyItMatters: "Trading-focused applications need deep liquidity." },
        { name: "EVM users", role: "Adoption bridge", whyItMatters: "EVM access can help users and developers move into Sei." },
      ],
      historicalEvents: [
        { year: "2023", title: "Sei mainnet gains attention", detail: "The network enters the market as a trading-focused high-speed chain." },
        { year: "2024", title: "Parallelized EVM direction expands", detail: "Market attention turns to EVM compatibility and performance claims." },
        { year: "2025-2026", title: "Finance application adoption becomes the test", detail: "Students track whether speed leads to durable liquidity." },
        { year: "Ongoing", title: "Layer 1 comparison remains important", detail: "SEI is compared with SUI, APT, SOL, and INJ." },
      ],
      correlations: [
        { market: "High-performance Layer 1 assets", relationship: "SEI can rotate with SUI, APT, SOL, and INJ.", learnerNote: "Relative strength helps show whether Sei is leading or following." },
        { market: "DeFi liquidity", relationship: "Finance apps need active liquidity to matter.", learnerNote: "Check liquidity quality before trusting ecosystem claims." },
        { market: "Ethereum EVM ecosystems", relationship: "EVM compatibility can affect developer migration.", learnerNote: "Compatibility helps only when apps and users arrive." },
      ],
      riskMap: [
        { risk: "Performance without demand", watch: "Fast blockchains still need active applications." },
        { risk: "Liquidity migration", watch: "Capital can leave when incentives fade." },
        { risk: "Sector beta", watch: "SEI can move with Layer 1 rotation even without Sei-specific improvement." },
      ],
      researchRoutine: [
        "Review SEI trend against SUI, APT, SOL, and INJ.",
        "Check application launches, active usage, and DeFi liquidity.",
        "Review EVM adoption and developer updates.",
        "Check staking participation and validator context.",
        "Classify the move as application-led, EVM-led, liquidity-led, staking-led, or Layer 1 sector rotation.",
      ],
      relatedLessons: ["Level 8 Layer 1 Networks", "Level 9 Usage Versus Narrative"],
      relatedStrategies: ["Layer 1 Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "stacks",
    name: "Stacks",
    symbol: "STX",
    assetClass: "crypto",
    rank: 37,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Stacks? STX Bitcoin Layer Guide",
    seoDescription: "Learn what Stacks is, why STX is watched, what affects it, and how Lurnava studies Bitcoin-linked smart contract assets.",
    publicHeadline: "Stacks brings smart contracts and applications to the Bitcoin economy.",
    publicSubheadline:
      "STX is watched because Bitcoin-secured applications, sBTC adoption, Clarity development, stacking, BTC cycles, and Bitcoin DeFi demand can affect market behavior.",
    plainEnglish:
      "Stacks is a Bitcoin-linked network that lets builders create smart contracts and applications connected to Bitcoin. STX is tied to network participation, stacking, and ecosystem activity.",
    marketRole:
      "STX sits in the Bitcoin application and smart-contract lane. Students use it to study how Bitcoin can support apps, BTC-linked liquidity, sBTC adoption, and the difference between Bitcoin beta and Stacks-specific demand.",
    whyTradersWatch:
      "Traders watch STX for Bitcoin strength, sBTC adoption, application launches, Clarity developer activity, stacking participation, BTC DeFi liquidity, and relative strength versus Bitcoin-linked assets.",
    lurnavaMonitorNote:
      "Lurnava studies Stacks through Bitcoin context, sBTC activity, application usage, Clarity development, stacking participation, BTC liquidity, and STX relative strength versus BTC and Bitcoin ecosystem assets.",
    conversionCta:
      "Learn how to study Bitcoin-linked assets through adoption review, ecosystem checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.stacksHome, assetResearchSources.stacksDocs],
    drivers: [
      { title: "Bitcoin market context", detail: "STX often reacts to BTC strength and Bitcoin ecosystem attention." },
      { title: "sBTC adoption", detail: "Bitcoin-linked application demand depends partly on usable BTC liquidity." },
      { title: "Clarity development", detail: "Developers using Clarity can expand the Stacks application ecosystem." },
      { title: "Stacking participation", detail: "Stacking behavior affects supply context and network participation." },
    ],
    publicRisks: [
      { risk: "BTC beta confusion", watch: "STX can rise with Bitcoin without Stacks-specific adoption improving." },
      { risk: "Application liquidity risk", watch: "Bitcoin DeFi needs usable liquidity and active applications." },
      { risk: "Architecture misunderstanding", watch: "Stacks is not the same design as an Ethereum-style rollup." },
    ],
    lab: {
      deskBrief:
        "STX is studied as a Bitcoin-linked smart contract and application asset. The Asset Lab reviews BTC context, sBTC adoption, Clarity developer activity, stacking participation, app usage, Bitcoin DeFi liquidity, and whether STX is moving on its own evidence or simply following Bitcoin.",
      researchQuestion:
        "Is STX moving because Bitcoin strength lifted the ecosystem, sBTC adoption improved, applications gained usage, stacking participation changed, or Bitcoin DeFi narratives expanded?",
      operatingModel:
        "Stacks analysis separates Bitcoin beta from Stacks-specific demand. A stronger read connects BTC context, sBTC activity, application usage, Clarity development, stacking behavior, and relative strength versus Bitcoin ecosystem assets.",
      participants: [
        { name: "Stacks developers", role: "Application builders", whyItMatters: "Developers create the apps that give STX ecosystem demand." },
        { name: "STX stackers", role: "Network participants", whyItMatters: "Stacking behavior affects supply and network participation context." },
        { name: "Bitcoin holders", role: "Potential demand base", whyItMatters: "BTC liquidity and holder interest shape Bitcoin application adoption." },
        { name: "sBTC users", role: "BTC-linked liquidity users", whyItMatters: "sBTC adoption helps determine whether Bitcoin DeFi is gaining traction." },
      ],
      historicalEvents: [
        { year: "2021", title: "Stacks mainnet expands Bitcoin smart contracts", detail: "The network becomes a major case study for Bitcoin-linked applications." },
        { year: "2023-2024", title: "Bitcoin application narratives grow", detail: "Ordinals, inscriptions, and BTC DeFi themes increase market attention." },
        { year: "2024-2026", title: "sBTC and Bitcoin DeFi become key tests", detail: "Students watch whether BTC-linked liquidity supports applications." },
        { year: "Ongoing", title: "BTC comparison remains central", detail: "STX research always begins with Bitcoin-relative behavior." },
      ],
      correlations: [
        { market: "Bitcoin", relationship: "STX often reacts to BTC strength and Bitcoin ecosystem attention.", learnerNote: "Compare STX against BTC to see whether it is leading or following." },
        { market: "Bitcoin DeFi", relationship: "sBTC and applications can affect Stacks demand.", learnerNote: "Usage matters more than broad Bitcoin branding." },
        { market: "Layer 2 assets", relationship: "STX may rotate with other scaling or application-layer assets.", learnerNote: "Stacks has a different architecture, so comparisons need care." },
      ],
      riskMap: [
        { risk: "Bitcoin-only move", watch: "STX can move because BTC is strong, not because Stacks adoption improved." },
        { risk: "Liquidity underdelivery", watch: "Bitcoin applications need usable liquidity to grow." },
        { risk: "Technical confusion", watch: "Students should understand Stacks design before comparing it to Ethereum rollups." },
      ],
      researchRoutine: [
        "Review STX trend against BTC and Bitcoin ecosystem assets.",
        "Check sBTC activity, application usage, and Bitcoin DeFi liquidity.",
        "Review Clarity developer updates and ecosystem launches.",
        "Check stacking participation and supply context.",
        "Classify the move as BTC-beta, sBTC-led, app-usage-led, stacking-led, or Bitcoin-ecosystem rotation.",
      ],
      relatedLessons: ["Level 8 Bitcoin Ecosystem Assets", "Level 9 Narrative Versus Usage"],
      relatedStrategies: ["Bitcoin Ecosystem Rotation", "Technical + Fundamental Confirmation", "Narrative With Data Confirmation"],
    },
  },
  {
    slug: "hedera",
    name: "Hedera",
    symbol: "HBAR",
    assetClass: "crypto",
    rank: 38,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Hedera? HBAR Enterprise Network Guide",
    seoDescription: "Learn what Hedera is, why HBAR is watched, what affects it, and how Lurnava studies enterprise ledger and tokenization assets.",
    publicHeadline: "Hedera is an enterprise-focused public network powered by HBAR.",
    publicSubheadline:
      "HBAR is watched because enterprise adoption, council governance, fixed-fee services, staking, tokenization demand, and real-world application usage can affect market behavior.",
    plainEnglish:
      "Hedera is a public distributed network built for fast, low-cost applications. HBAR is used for network fees, staking context, and access to Hedera services.",
    marketRole:
      "HBAR sits in the enterprise ledger and tokenization lane. Students use it to study institutional governance, application usage, fixed-fee design, staking, and whether enterprise announcements create real network activity.",
    whyTradersWatch:
      "Traders watch HBAR for enterprise partnerships, council decisions, transaction activity, tokenization projects, staking participation, ecosystem funding, and relative strength against real-world asset infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Hedera through HBAR utility, network transactions, council governance, enterprise adoption, staking behavior, tokenization activity, developer usage, and HBAR relative strength versus infrastructure assets.",
    conversionCta:
      "Learn how to study enterprise blockchain assets through usage checks, governance review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.hederaHome, assetResearchSources.hederaDocs],
    drivers: [
      { title: "Enterprise adoption", detail: "Real production use can support Hedera's institutional infrastructure thesis." },
      { title: "Council governance", detail: "Council decisions affect network direction, trust, and ecosystem development." },
      { title: "Tokenization activity", detail: "Hedera is watched for real-world asset and payment-related applications." },
      { title: "Staking participation", detail: "HBAR staking affects network participation and security context." },
    ],
    publicRisks: [
      { risk: "Announcement-to-usage gap", watch: "Enterprise names matter only when they turn into measurable activity." },
      { risk: "Governance centralization concern", watch: "Council governance is different from fully open validator networks." },
      { risk: "Token utility clarity", watch: "Students should connect HBAR demand to actual network services." },
    ],
    lab: {
      deskBrief:
        "HBAR is studied as an enterprise-focused network asset. The Asset Lab reviews Hedera service usage, transaction activity, council governance, enterprise deployments, tokenization demand, staking behavior, developer activity, and whether HBAR demand follows real network use.",
      researchQuestion:
        "Is HBAR moving because enterprise usage improved, council governance changed expectations, tokenization demand expanded, staking conditions shifted, or infrastructure assets rotated together?",
      operatingModel:
        "Hedera analysis tests enterprise claims against network evidence. A stronger read connects real transaction demand, governance quality, service usage, staking context, tokenization projects, and relative strength against infrastructure assets.",
      participants: [
        { name: "Hedera Council members", role: "Governance stewards", whyItMatters: "Council decisions shape policy, services, and ecosystem direction." },
        { name: "Enterprise builders", role: "Adoption source", whyItMatters: "Production applications create real network demand." },
        { name: "HBAR stakers", role: "Network participants", whyItMatters: "Staking contributes to network security context." },
        { name: "Developers and tokenization teams", role: "Usage creators", whyItMatters: "Applications and asset issuance are needed for durable activity." },
      ],
      historicalEvents: [
        { year: "2018-2019", title: "Hedera network launches", detail: "The network enters the market with enterprise governance and public ledger services." },
        { year: "2021-2023", title: "Council and ecosystem activity expands", detail: "Market attention grows around institutional participation and services." },
        { year: "2024-2026", title: "Tokenization and enterprise use remain central", detail: "Students track whether enterprise claims turn into transaction activity." },
        { year: "Ongoing", title: "Staking and governance are monitored", detail: "HBAR research includes staking context and council decisions." },
      ],
      correlations: [
        { market: "Real-world asset infrastructure", relationship: "HBAR can rotate with tokenization and enterprise blockchain assets.", learnerNote: "Tokenization themes need production evidence." },
        { market: "Enterprise technology adoption", relationship: "Hedera narratives often include business and institutional use.", learnerNote: "Separate partnership headlines from active usage." },
        { market: "Infrastructure tokens", relationship: "HBAR can move with broader infrastructure-token rotations.", learnerNote: "Relative strength shows whether HBAR is leading the group." },
      ],
      riskMap: [
        { risk: "Low production usage", watch: "Enterprise announcements do not always become active transactions." },
        { risk: "Governance criticism", watch: "Council-based governance can be debated by decentralization-focused investors." },
        { risk: "Theme crowding", watch: "Tokenization narratives can run ahead of adoption." },
      ],
      researchRoutine: [
        "Review HBAR trend against infrastructure and tokenization-linked assets.",
        "Check Hedera transaction activity and service usage.",
        "Review council updates, ecosystem funding, and governance changes.",
        "Scan enterprise and tokenization projects for production evidence.",
        "Classify the move as enterprise-usage, governance-led, tokenization-theme, staking-led, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Narrative Versus Usage"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "stellar",
    name: "Stellar",
    symbol: "XLM",
    assetClass: "crypto",
    rank: 39,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Stellar? XLM Payments Network Guide",
    seoDescription: "Learn what Stellar is, why XLM is watched, what affects it, and how Lurnava studies payments and tokenization networks.",
    publicHeadline: "Stellar is a public network built for payments, assets, and financial access.",
    publicSubheadline:
      "XLM is watched because payment rails, tokenized assets, stablecoin activity, anchors, smart contract adoption, and cross-border settlement demand can affect behavior.",
    plainEnglish:
      "Stellar is a public blockchain designed for fast, low-cost transfers and tokenized assets. XLM is the network asset used for fees and account-level network mechanics.",
    marketRole:
      "XLM sits in the payments and tokenization lane. Students use it to study cross-border settlement, anchors, asset issuance, real-world payment use, and whether network activity supports the market story.",
    whyTradersWatch:
      "Traders watch XLM for payment partnerships, stablecoin and asset issuance, network activity, anchor adoption, Soroban smart contract growth, liquidity depth, and relative strength against XRP and payment assets.",
    lurnavaMonitorNote:
      "Lurnava studies Stellar through network transactions, anchor activity, tokenized asset usage, smart contract adoption, XLM liquidity, payment-network narratives, and XLM relative strength versus XRP and payment assets.",
    conversionCta:
      "Learn how to study payments networks through usage checks, asset-flow review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.stellarHome, assetResearchSources.stellarDocs],
    drivers: [
      { title: "Payment network use", detail: "Cross-border and cash-like transfer activity can support Stellar's core role." },
      { title: "Tokenized assets", detail: "Asset issuance and movement can create demand for Stellar infrastructure." },
      { title: "Anchor adoption", detail: "On and off-ramp providers affect how useful Stellar is for real users." },
      { title: "Smart contract growth", detail: "Soroban adoption can broaden Stellar beyond simple payments." },
    ],
    publicRisks: [
      { risk: "Adoption gap", watch: "Payment claims need real transaction and anchor evidence." },
      { risk: "Payment competition", watch: "Stablecoins, XRP, and bank rails compete for similar use cases." },
      { risk: "Token value gap", watch: "Network utility does not automatically create strong XLM demand." },
    ],
    lab: {
      deskBrief:
        "XLM is studied as a payments and tokenization network asset. The Asset Lab reviews Stellar transaction activity, anchor adoption, stablecoin and asset issuance, Soroban smart contract growth, cross-border payment use, exchange liquidity, and whether XLM value follows network activity.",
      researchQuestion:
        "Is XLM moving because payment usage improved, tokenized assets expanded, anchors increased access, smart contract activity grew, or payment-network assets rotated together?",
      operatingModel:
        "Stellar analysis connects payment claims to usage evidence. A stronger read checks transaction activity, asset issuance, anchor quality, smart contract adoption, liquidity, and relative strength versus XRP and other payment assets.",
      participants: [
        { name: "Anchors and ramps", role: "Access layer", whyItMatters: "On and off-ramps determine how users move between local money and Stellar assets." },
        { name: "Payment builders", role: "Demand creators", whyItMatters: "Payment applications create practical network use." },
        { name: "Asset issuers", role: "Tokenization participants", whyItMatters: "Issued assets and stablecoins can drive transaction demand." },
        { name: "Developers", role: "Application builders", whyItMatters: "Smart contract and wallet development broadens the network's use cases." },
      ],
      historicalEvents: [
        { year: "2014", title: "Stellar network launches", detail: "The network begins with a focus on accessible, low-cost value transfer." },
        { year: "2015", title: "Stellar consensus design changes", detail: "The network moves to the Stellar Consensus Protocol model." },
        { year: "2021-2024", title: "Tokenization and institutional payment use grows", detail: "Students track asset issuance and payment rails on Stellar." },
        { year: "2024-2026", title: "Smart contract adoption expands the study area", detail: "Soroban gives students another activity layer to monitor." },
      ],
      correlations: [
        { market: "XRP and payment assets", relationship: "XLM often rotates with other payment-network assets.", learnerNote: "Compare payment adoption and liquidity quality." },
        { market: "Stablecoins", relationship: "Stellar usage can include stablecoin and tokenized-asset movement.", learnerNote: "Stablecoin activity should be checked separately from XLM price." },
        { market: "Cross-border payments", relationship: "Payment adoption depends on access, regulation, and local rails.", learnerNote: "A partnership headline needs transaction evidence." },
      ],
      riskMap: [
        { risk: "Partnership without volume", watch: "Payment announcements can fail to produce meaningful use." },
        { risk: "Competitive rails", watch: "Users may choose other payment networks or stablecoin chains." },
        { risk: "Utility-to-token gap", watch: "Network use may not directly translate into XLM demand." },
      ],
      researchRoutine: [
        "Review XLM trend against XRP and payment-network assets.",
        "Check Stellar transaction activity, asset issuance, and anchor updates.",
        "Review Soroban smart contract activity and developer updates.",
        "Scan payment partnerships for production usage.",
        "Classify the move as payment-led, tokenization-led, smart-contract-led, partnership-led, or sector rotation.",
      ],
      relatedLessons: ["Level 8 Payment Networks", "Level 9 Utility Versus Token Demand"],
      relatedStrategies: ["Payment Asset Rotation", "Technical + Fundamental Confirmation", "Narrative With Data Confirmation"],
    },
  },
  {
    slug: "monero",
    name: "Monero",
    symbol: "XMR",
    assetClass: "crypto",
    rank: 40,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Monero? XMR Privacy Asset Guide",
    seoDescription: "Learn what Monero is, why XMR is watched, what affects it, and how Lurnava studies privacy coins with compliance-aware risk checks.",
    publicHeadline: "Monero is a privacy-focused digital cash network.",
    publicSubheadline:
      "XMR is watched because default privacy, exchange access, regulatory pressure, mining security, wallet use, and payment demand can affect market behavior.",
    plainEnglish:
      "Monero is designed to keep transaction sender, receiver, and amount private by default. XMR is studied as a privacy-focused payment asset with special regulatory and exchange-access risk.",
    marketRole:
      "XMR sits in the privacy and digital-cash lane. Students use it to study private transaction design, proof-of-work security, exchange listing risk, regulatory pressure, and payment demand.",
    whyTradersWatch:
      "Traders watch XMR for exchange access, regulatory headlines, mining security, wallet activity, privacy-coin sentiment, payment use, liquidity depth, and relative strength against other proof-of-work assets.",
    lurnavaMonitorNote:
      "Lurnava studies Monero through official privacy documentation, exchange availability, mining and network context, liquidity depth, regulatory pressure, wallet ecosystem activity, and XMR relative strength versus privacy and proof-of-work assets.",
    conversionCta:
      "Learn how to study high-sensitivity crypto assets through risk mapping, source review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.moneroHome, assetResearchSources.moneroOverview],
    drivers: [
      { title: "Privacy demand", detail: "XMR can attract attention when users value confidential payments." },
      { title: "Exchange access", detail: "Listings, delistings, and liquidity access strongly affect tradeability." },
      { title: "Regulatory pressure", detail: "Privacy coins face higher policy scrutiny than many transparent networks." },
      { title: "Mining security", detail: "Proof-of-work participation affects confidence in the network." },
    ],
    publicRisks: [
      { risk: "Regulatory restriction", watch: "Policy action can reduce exchange access and liquidity." },
      { risk: "Liquidity limitation", watch: "XMR may have fewer accessible venues than more widely listed assets." },
      { risk: "Misuse association", watch: "Privacy tools can be misunderstood or associated with illicit use in public debate." },
    ],
    lab: {
      deskBrief:
        "XMR is studied as a privacy-focused proof-of-work payment asset. The Asset Lab reviews default privacy design, exchange access, regulatory pressure, mining security, wallet ecosystem health, liquidity depth, and whether market movement is driven by privacy demand or venue restrictions.",
      researchQuestion:
        "Is XMR moving because privacy-coin demand improved, exchange access changed, regulatory pressure shifted, mining conditions changed, or proof-of-work assets rotated together?",
      operatingModel:
        "Monero analysis is risk-aware from the first step. A stronger read connects privacy demand, venue access, policy pressure, mining security, liquidity depth, and proof-of-work comparison without overstating certainty.",
      participants: [
        { name: "Monero users", role: "Privacy demand base", whyItMatters: "User demand is tied to confidential payments and wallet use." },
        { name: "Miners", role: "Network security providers", whyItMatters: "Mining participation affects proof-of-work security." },
        { name: "Wallet and infrastructure teams", role: "Access layer", whyItMatters: "Usable wallets and tools affect practical adoption." },
        { name: "Exchanges and regulators", role: "Access and policy gatekeepers", whyItMatters: "Venue access and policy decisions strongly affect liquidity." },
      ],
      historicalEvents: [
        { year: "2014", title: "Monero launches", detail: "The network begins as a privacy-focused digital cash project." },
        { year: "2017-2020", title: "Privacy tools become the main identity", detail: "Monero becomes a leading case study in default confidential transactions." },
        { year: "2021-2026", title: "Exchange access and regulation remain central", detail: "Students track venue availability and policy pressure alongside network health." },
        { year: "Ongoing", title: "Mining and wallet health are monitored", detail: "XMR research includes proof-of-work security and practical wallet access." },
      ],
      correlations: [
        { market: "Privacy coins", relationship: "XMR often defines the privacy-asset category.", learnerNote: "Policy headlines can affect the whole category." },
        { market: "Proof-of-work assets", relationship: "XMR can rotate with BTC, LTC, BCH, and ETC.", learnerNote: "Mining context helps separate network health from broad sector moves." },
        { market: "Exchange access", relationship: "Venue availability affects liquidity more directly than many other assets.", learnerNote: "Always check where the asset can actually trade." },
      ],
      riskMap: [
        { risk: "Delisting risk", watch: "Reduced venue access can weaken liquidity." },
        { risk: "Policy shock", watch: "Regulatory pressure can shift quickly." },
        { risk: "Liquidity fragmentation", watch: "XMR liquidity can be spread across fewer venues." },
      ],
      researchRoutine: [
        "Review XMR trend against proof-of-work and privacy assets.",
        "Check exchange availability, liquidity depth, and venue changes.",
        "Review Monero network, mining, and wallet ecosystem updates.",
        "Scan regulatory developments from high-authority sources.",
        "Classify the move as privacy-demand, venue-access, regulatory, mining-led, or proof-of-work rotation.",
      ],
      relatedLessons: ["Level 8 Proof-of-Work Assets", "Level 9 Regulatory Risk"],
      relatedStrategies: ["Proof-of-Work Rotation", "Regulatory Event Risk Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "okb",
    name: "OKB",
    symbol: "OKB",
    assetClass: "crypto",
    rank: 41,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is OKB? OKX Utility Asset Guide",
    seoDescription: "Learn what OKB is, why OKB is watched, what affects it, and how Lurnava studies exchange-linked utility and X Layer assets.",
    publicHeadline: "OKB is an OKX-linked utility asset with exchange and X Layer exposure.",
    publicSubheadline:
      "OKB is watched because OKX ecosystem utility, X Layer gas demand, exchange activity, burn-program context, regulatory trust, and liquidity access can affect behavior.",
    plainEnglish:
      "OKB is an OKX ecosystem utility asset. Students study it through exchange-linked demand, X Layer gas context, official OKX disclosures, liquidity, and platform-risk awareness.",
    marketRole:
      "OKB sits in the exchange-linked utility lane. Students use it to study how centralized platform activity, ecosystem incentives, gas utility, supply disclosures, and trust risk can affect a token.",
    whyTradersWatch:
      "Traders watch OKB for OKX platform activity, X Layer adoption, exchange utility, official burn and supply updates, regulatory pressure, liquidity depth, and comparison with other exchange-linked assets.",
    lurnavaMonitorNote:
      "Lurnava studies OKB through official OKX sources, X Layer utility, platform activity, burn-program context, exchange trust, liquidity access, regulatory developments, and OKB relative strength versus exchange-linked assets.",
    conversionCta:
      "Learn how to study exchange-linked assets through source review, platform-risk checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.okbWhitepaper, assetResearchSources.okbStatement],
    drivers: [
      { title: "OKX ecosystem utility", detail: "Platform use and official utility programs can affect OKB demand." },
      { title: "X Layer gas context", detail: "OKB utility can include gas payment exposure on X Layer." },
      { title: "Burn and supply updates", detail: "Official supply or burn disclosures can change market expectations." },
      { title: "Exchange trust", detail: "Exchange-linked assets are sensitive to platform confidence and regulatory context." },
    ],
    publicRisks: [
      { risk: "Platform concentration", watch: "OKB depends heavily on OKX ecosystem trust and utility." },
      { risk: "Regulatory pressure", watch: "Exchange-linked assets can react to policy and compliance developments." },
      { risk: "Disclosure dependency", watch: "Students should rely on official OKX references for supply and utility details." },
    ],
    lab: {
      deskBrief:
        "OKB is studied as an exchange-linked utility asset with OKX and X Layer exposure. The Asset Lab reviews official OKX disclosures, X Layer gas use, platform activity, burn-program context, liquidity access, exchange trust, and regulatory risk before interpreting market movement.",
      researchQuestion:
        "Is OKB moving because OKX ecosystem utility changed, X Layer adoption improved, official supply or burn context shifted, exchange trust changed, or exchange-linked assets rotated together?",
      operatingModel:
        "OKB analysis starts with source discipline. A stronger read uses official OKX references, platform activity, X Layer demand, liquidity depth, regulatory context, and comparison with other exchange-linked utility assets.",
      participants: [
        { name: "OKX users", role: "Platform demand base", whyItMatters: "Platform utility is a core part of OKB demand context." },
        { name: "X Layer users", role: "Network utility source", whyItMatters: "Gas and ecosystem activity can affect utility demand." },
        { name: "OKX and ecosystem teams", role: "Disclosure and development source", whyItMatters: "Official updates shape supply, utility, and confidence." },
        { name: "Regulators and market venues", role: "Access and trust gatekeepers", whyItMatters: "Policy and listing context affect liquidity and market confidence." },
      ],
      historicalEvents: [
        { year: "2018-2021", title: "OKB develops as an exchange-linked utility asset", detail: "The asset is tied to OKX ecosystem use and platform benefits." },
        { year: "2023-2024", title: "Official OKX disclosures remain important", detail: "Students track supply, burn, and utility through OKX sources." },
        { year: "2025-2026", title: "X Layer utility becomes a key research area", detail: "OKB analysis includes gas demand and ecosystem usage around X Layer." },
        { year: "Ongoing", title: "Platform trust remains central", detail: "Exchange-linked assets require trust and regulatory monitoring." },
      ],
      correlations: [
        { market: "Exchange-linked assets", relationship: "OKB can rotate with other platform utility tokens.", learnerNote: "Compare utility, venue trust, and disclosure quality." },
        { market: "X Layer activity", relationship: "Network use can affect utility framing.", learnerNote: "Check actual ecosystem activity before accepting gas-demand claims." },
        { market: "Regulatory policy", relationship: "Exchange assets are sensitive to compliance developments.", learnerNote: "Use primary or high-authority sources for policy interpretation." },
      ],
      riskMap: [
        { risk: "Exchange dependency", watch: "Utility is concentrated around OKX ecosystem health." },
        { risk: "Policy shock", watch: "Exchange policy developments can affect confidence and liquidity." },
        { risk: "Stale supply assumptions", watch: "Use current official disclosures instead of old circulating-supply claims." },
      ],
      researchRoutine: [
        "Review OKB trend against exchange-linked utility assets.",
        "Check official OKX sources for utility, supply, burn, and X Layer updates.",
        "Review X Layer ecosystem activity and gas-use context.",
        "Scan exchange trust, regulatory, and venue-access developments.",
        "Classify the move as platform-utility, X Layer-led, supply-update, trust-led, or exchange-token rotation.",
      ],
      relatedLessons: ["Level 8 Exchange-Linked Assets", "Level 9 Platform Risk"],
      relatedStrategies: ["Exchange Asset Rotation", "Regulatory Event Risk Review", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "cronos",
    name: "Cronos",
    symbol: "CRO",
    assetClass: "crypto",
    rank: 42,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Cronos? CRO Ecosystem Guide",
    seoDescription: "Learn what Cronos is, why CRO is watched, what affects it, and how Lurnava studies exchange-linked chain ecosystems.",
    publicHeadline: "Cronos is a CRO-powered ecosystem spanning EVM and POS chain activity.",
    publicSubheadline:
      "CRO is watched because Cronos EVM usage, POS staking, Crypto.com ecosystem access, DeFi activity, validator participation, and app adoption can affect behavior.",
    plainEnglish:
      "Cronos is a blockchain ecosystem connected to CRO, with EVM-compatible applications and POS-chain staking context. Students study CRO through network use, staking, exchange ecosystem links, and liquidity.",
    marketRole:
      "CRO sits in the exchange-linked chain ecosystem lane. Students use it to study gas utility, staking, validator economics, DeFi activity, exchange-linked distribution, and app adoption.",
    whyTradersWatch:
      "Traders watch CRO for Cronos EVM activity, POS staking, validator participation, Crypto.com ecosystem updates, DeFi liquidity, app launches, bridge activity, and relative strength versus exchange-linked chain assets.",
    lurnavaMonitorNote:
      "Lurnava studies Cronos through EVM usage, CRO staking, validator context, DeFi liquidity, bridge activity, Crypto.com ecosystem updates, exchange access, and CRO relative strength versus platform-linked assets.",
    conversionCta:
      "Learn how to study exchange-linked chain ecosystems through usage checks, staking review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.cronosEvmDocs, assetResearchSources.cronosPosStaking],
    drivers: [
      { title: "Cronos EVM usage", detail: "Application transactions and DeFi use can support CRO ecosystem demand." },
      { title: "POS staking", detail: "Delegation and validator participation affect network security context." },
      { title: "Exchange ecosystem access", detail: "Crypto.com distribution and ecosystem updates can affect attention." },
      { title: "DeFi and bridge activity", detail: "Liquidity movement and cross-chain access affect practical network use." },
    ],
    publicRisks: [
      { risk: "Platform dependency", watch: "CRO is sensitive to Crypto.com ecosystem trust and activity." },
      { risk: "Chain-activity gap", watch: "Brand awareness needs real network usage to matter." },
      { risk: "Liquidity migration", watch: "DeFi liquidity can move to competing EVM chains." },
    ],
    lab: {
      deskBrief:
        "CRO is studied as an exchange-linked chain ecosystem asset. The Asset Lab reviews Cronos EVM activity, POS staking, validator participation, DeFi liquidity, bridge usage, Crypto.com ecosystem context, platform trust, and CRO relative strength versus exchange-linked and EVM assets.",
      researchQuestion:
        "Is CRO moving because Cronos EVM usage improved, POS staking changed, Crypto.com ecosystem activity expanded, DeFi liquidity increased, or exchange-linked chain assets rotated together?",
      operatingModel:
        "Cronos analysis connects platform reach with chain evidence. A stronger read checks EVM transactions, staking participation, validator context, DeFi liquidity, bridge activity, platform trust, and relative strength.",
      participants: [
        { name: "Cronos EVM developers", role: "Application builders", whyItMatters: "Applications create transaction demand and ecosystem activity." },
        { name: "CRO delegators and validators", role: "POS network participants", whyItMatters: "Staking and validation affect security context." },
        { name: "Crypto.com ecosystem users", role: "Distribution base", whyItMatters: "Platform access can bring users into CRO-related products." },
        { name: "DeFi liquidity providers", role: "Market depth suppliers", whyItMatters: "Liquidity affects application usefulness and chain stickiness." },
      ],
      historicalEvents: [
        { year: "2021", title: "Cronos EVM launches", detail: "Cronos expands into Ethereum-compatible application activity." },
        { year: "2023", title: "Cronos POS branding becomes clearer", detail: "Students separate POS staking context from EVM application usage." },
        { year: "2024-2026", title: "Ecosystem utility remains the test", detail: "Market attention focuses on real applications, liquidity, and platform trust." },
        { year: "Ongoing", title: "Bridge and staking activity are monitored", detail: "CRO research includes cross-chain access and validator participation." },
      ],
      correlations: [
        { market: "Exchange-linked assets", relationship: "CRO can rotate with OKB, BNB, and other platform assets.", learnerNote: "Compare platform trust and chain usage." },
        { market: "EVM chains", relationship: "Cronos competes with other EVM-compatible networks for apps and liquidity.", learnerNote: "Usage and liquidity depth matter more than compatibility alone." },
        { market: "Crypto.com ecosystem", relationship: "Platform updates can affect CRO attention.", learnerNote: "Separate app-level utility from exchange-level promotion." },
      ],
      riskMap: [
        { risk: "Brand without activity", watch: "CRO needs network usage beyond platform recognition." },
        { risk: "Platform trust shock", watch: "Exchange ecosystem confidence affects CRO." },
        { risk: "Liquidity drain", watch: "DeFi capital can move to chains with stronger incentives or apps." },
      ],
      researchRoutine: [
        "Review CRO trend against exchange-linked and EVM chain assets.",
        "Check Cronos EVM transactions, app usage, and DeFi liquidity.",
        "Review POS staking, validator participation, and delegation changes.",
        "Scan Crypto.com ecosystem updates and bridge activity.",
        "Classify the move as EVM-usage, staking-led, platform-led, liquidity-led, or exchange-chain rotation.",
      ],
      relatedLessons: ["Level 8 Exchange-Linked Assets", "Level 9 Platform Risk"],
      relatedStrategies: ["Exchange Asset Rotation", "EVM Chain Relative Strength", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "polygon",
    name: "Polygon",
    symbol: "POL",
    assetClass: "crypto",
    rank: 43,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Polygon? POL Ethereum Scaling Guide",
    seoDescription: "Learn what Polygon is, why POL is watched, what affects it, and how Lurnava studies Ethereum scaling and aggregated-chain assets.",
    publicHeadline: "Polygon is an Ethereum scaling ecosystem now powered by POL.",
    publicSubheadline:
      "POL is watched because Polygon PoS usage, staking, MATIC-to-POL migration, payments activity, app adoption, and aggregated-chain infrastructure can affect demand.",
    plainEnglish:
      "Polygon is an Ethereum scaling ecosystem with applications, payments, and infrastructure around Polygon PoS and related chains. POL is the current native token for gas and staking context.",
    marketRole:
      "POL sits in the Ethereum scaling and application-infrastructure lane. Students use it to study PoS chain usage, token migration, app adoption, staking, payments, and competition among scaling networks.",
    whyTradersWatch:
      "Traders watch POL for Polygon PoS transactions, staking participation, MATIC-to-POL migration updates, app launches, payments usage, zk and aggregation roadmap progress, and relative strength versus Layer 2 assets.",
    lurnavaMonitorNote:
      "Lurnava studies Polygon through POL utility, Polygon PoS activity, staking, migration context, app and payments usage, developer adoption, ecosystem roadmap progress, and POL relative strength versus Ethereum scaling assets.",
    conversionCta:
      "Learn how to study Ethereum scaling ecosystems through migration checks, usage review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.polygonHome, assetResearchSources.polygonPolDocs],
    drivers: [
      { title: "Polygon PoS usage", detail: "Transactions and applications create practical demand for the network." },
      { title: "POL migration context", detail: "MATIC-to-POL updates affect how students interpret token utility and supply." },
      { title: "Staking participation", detail: "POL staking supports network security context and holder behavior." },
      { title: "App and payments adoption", detail: "Polygon is watched for consumer applications, payments, and developer activity." },
    ],
    publicRisks: [
      { risk: "Migration confusion", watch: "Students must use current POL information rather than old MATIC assumptions." },
      { risk: "Scaling competition", watch: "Polygon competes with many Ethereum scaling ecosystems." },
      { risk: "Usage-to-token gap", watch: "Application activity does not always translate directly into token demand." },
    ],
    lab: {
      deskBrief:
        "POL is studied as the current Polygon ecosystem token for gas and staking context. The Asset Lab reviews Polygon PoS usage, MATIC-to-POL migration status, staking participation, app adoption, payments activity, developer traction, roadmap progress, and relative strength versus Ethereum scaling assets.",
      researchQuestion:
        "Is POL moving because Polygon PoS usage improved, migration context changed, staking participation shifted, app or payments adoption expanded, or Ethereum scaling assets rotated together?",
      operatingModel:
        "Polygon analysis starts with current token context. A stronger read connects POL utility, migration status, PoS chain activity, staking behavior, application demand, payments usage, and relative strength against scaling peers.",
      participants: [
        { name: "Polygon users", role: "Transaction demand base", whyItMatters: "User activity creates gas demand and ecosystem relevance." },
        { name: "Validators and delegators", role: "Staking participants", whyItMatters: "Staking supports network security context." },
        { name: "Application developers", role: "Usage creators", whyItMatters: "Applications and payments products drive repeated network use." },
        { name: "Migration participants", role: "Token transition group", whyItMatters: "MATIC-to-POL context affects market interpretation and operational clarity." },
      ],
      historicalEvents: [
        { year: "2020-2021", title: "Polygon PoS grows as Ethereum scaling demand rises", detail: "The network becomes a major low-cost Ethereum application environment." },
        { year: "2022-2023", title: "Brand and scaling roadmap expand", detail: "Polygon broadens into zk and multi-chain infrastructure themes." },
        { year: "2024-2026", title: "POL replaces MATIC in the research frame", detail: "Students track migration status, gas utility, and staking context." },
        { year: "Ongoing", title: "Application usage remains central", detail: "Polygon research checks whether apps, payments, and developers keep using the network." },
      ],
      correlations: [
        { market: "Ethereum scaling assets", relationship: "POL can rotate with ARB, OP, and other scaling ecosystems.", learnerNote: "Compare usage, fees, and app retention." },
        { market: "Payments and consumer apps", relationship: "Polygon often targets consumer and payments use cases.", learnerNote: "Production usage matters more than brand announcements." },
        { market: "Staking markets", relationship: "POL staking affects holder behavior and network security context.", learnerNote: "Staking should be read with migration and usage data." },
      ],
      riskMap: [
        { risk: "Old MATIC framing", watch: "Use POL-specific documentation for current analysis." },
        { risk: "App retention risk", watch: "Applications can migrate to other chains if economics change." },
        { risk: "Scaling-sector crowding", watch: "Ethereum scaling assets compete heavily for liquidity and builders." },
      ],
      researchRoutine: [
        "Review POL trend against ARB, OP, and Ethereum scaling assets.",
        "Check Polygon PoS transactions, app activity, and payments usage.",
        "Review MATIC-to-POL migration status and official POL documentation.",
        "Check staking participation and validator context.",
        "Classify the move as usage-led, migration-led, staking-led, payments-led, or scaling-sector rotation.",
      ],
      relatedLessons: ["Level 8 Ethereum Scaling", "Level 9 Token Migration Risk"],
      relatedStrategies: ["Layer 2 Relative Strength", "Technical + Fundamental Confirmation", "Migration Event Risk Review"],
    },
  },
  {
    slug: "algorand",
    name: "Algorand",
    symbol: "ALGO",
    assetClass: "crypto",
    rank: 44,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Algorand? ALGO Layer 1 Guide",
    seoDescription: "Learn what Algorand is, why ALGO is watched, what affects it, and how Lurnava studies fast-finality Layer 1 networks.",
    publicHeadline: "Algorand is a fast-finality Layer 1 network built around pure proof of stake.",
    publicSubheadline:
      "ALGO is watched because settlement speed, staking participation, governance, developer adoption, tokenized assets, and DeFi activity can affect network demand.",
    plainEnglish:
      "Algorand is a Layer 1 blockchain designed for quick finality and low-cost transactions. ALGO is the native asset used for fees, participation, governance context, and network activity.",
    marketRole:
      "ALGO sits in the fast-settlement Layer 1 lane. Students use it to study pure proof-of-stake design, finality, application adoption, tokenized assets, governance, and whether usage supports the market story.",
    whyTradersWatch:
      "Traders watch ALGO for DeFi activity, tokenization projects, governance participation, staking and node participation, developer growth, exchange liquidity, and relative strength against other Layer 1 assets.",
    lurnavaMonitorNote:
      "Lurnava studies Algorand through network transactions, node participation, governance updates, DeFi and tokenized-asset activity, developer usage, liquidity depth, and ALGO relative strength versus Layer 1 assets.",
    conversionCta:
      "Learn how to study Layer 1 networks through usage checks, governance review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.algorandHome, assetResearchSources.algorandConsensus],
    drivers: [
      { title: "Fast finality", detail: "Algorand's settlement design can matter for financial applications and tokenized assets." },
      { title: "Application adoption", detail: "Real use in DeFi, payments, and tokenization helps test the network thesis." },
      { title: "Governance participation", detail: "ALGO governance and ecosystem decisions can affect market expectations." },
      { title: "Node participation", detail: "Consensus participation and node health are part of the network-quality review." },
    ],
    publicRisks: [
      { risk: "Adoption gap", watch: "Fast settlement needs active applications and users to matter." },
      { risk: "Layer 1 competition", watch: "Algorand competes with many networks for builders and liquidity." },
      { risk: "Governance attention drift", watch: "Weak participation can reduce confidence in community direction." },
    ],
    lab: {
      deskBrief:
        "ALGO is studied as a fast-finality Layer 1 asset. The Asset Lab reviews transaction activity, consensus participation, governance updates, DeFi usage, tokenized-asset adoption, developer activity, liquidity depth, and whether ALGO is moving from network evidence or broad Layer 1 rotation.",
      researchQuestion:
        "Is ALGO moving because Algorand usage improved, tokenized-asset activity expanded, governance changed expectations, node participation shifted, or Layer 1 assets rotated together?",
      operatingModel:
        "Algorand analysis connects technical design with adoption evidence. A stronger read checks finality use cases, real transactions, governance participation, developer traction, tokenization demand, and relative strength against Layer 1 peers.",
      participants: [
        { name: "Algorand developers", role: "Application builders", whyItMatters: "Developers create the apps that generate durable network activity." },
        { name: "Node participants", role: "Consensus layer", whyItMatters: "Network participation supports security and finality context." },
        { name: "Governance participants", role: "Ecosystem stewards", whyItMatters: "Governance decisions shape funding and direction." },
        { name: "Tokenization and DeFi teams", role: "Demand creators", whyItMatters: "Financial use cases are central to Algorand's adoption story." },
      ],
      historicalEvents: [
        { year: "2019", title: "Algorand mainnet launches", detail: "The network enters the market with a pure proof-of-stake design and fast finality." },
        { year: "2020-2022", title: "Developer and DeFi ecosystem expands", detail: "Market attention turns to applications, assets, and low-cost settlement." },
        { year: "2023-2026", title: "Tokenization and node participation remain central", detail: "Students track whether financial use cases create durable activity." },
        { year: "Ongoing", title: "Governance and network participation are monitored", detail: "ALGO research includes governance engagement and consensus context." },
      ],
      correlations: [
        { market: "Layer 1 assets", relationship: "ALGO can rotate with SOL, ADA, AVAX, and other base networks.", learnerNote: "Relative strength helps show whether ALGO is leading or following." },
        { market: "Tokenized assets", relationship: "Algorand is often studied through tokenization and finance use cases.", learnerNote: "Check live usage rather than only announcements." },
        { market: "DeFi liquidity", relationship: "Application activity depends on liquidity and user retention.", learnerNote: "Low-cost transactions still need useful markets." },
      ],
      riskMap: [
        { risk: "Underused infrastructure", watch: "Strong technology can be ignored if user demand is weak." },
        { risk: "Liquidity migration", watch: "DeFi capital can move to more active chains." },
        { risk: "Sector beta", watch: "ALGO can rise with Layer 1 rotation without network-specific improvement." },
      ],
      researchRoutine: [
        "Review ALGO trend against major Layer 1 assets.",
        "Check transaction activity, governance updates, and node participation.",
        "Review DeFi liquidity, tokenized-asset use, and developer activity.",
        "Scan ecosystem updates for production usage rather than announcements only.",
        "Classify the move as usage-led, governance-led, tokenization-led, node-participation-led, or Layer 1 sector rotation.",
      ],
      relatedLessons: ["Level 8 Layer 1 Networks", "Level 9 Usage Versus Narrative"],
      relatedStrategies: ["Layer 1 Relative Strength", "Technical + Fundamental Confirmation", "Narrative With Data Confirmation"],
    },
  },
  {
    slug: "vechain",
    name: "VeChain",
    symbol: "VET",
    assetClass: "crypto",
    rank: 45,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is VeChain? VET Enterprise Blockchain Guide",
    seoDescription: "Learn what VeChain is, why VET is watched, what affects it, and how Lurnava studies enterprise blockchain and real-world asset networks.",
    publicHeadline: "VeChain is an enterprise-focused blockchain ecosystem powered by VET.",
    publicSubheadline:
      "VET is watched because enterprise adoption, dual-token economics, sustainability apps, supply-chain use, staking products, and real-world integrations can affect demand.",
    plainEnglish:
      "VeChain is a blockchain ecosystem focused on business, sustainability, and supply-chain style applications. VET is the main token that secures and powers the VeChainThor network.",
    marketRole:
      "VET sits in the enterprise and real-world application lane. Students use it to study business adoption, dual-token economics with VTHO, sustainability products, wallet usage, and whether partnerships create real activity.",
    whyTradersWatch:
      "Traders watch VET for enterprise deployments, VeChainThor activity, VTHO demand, sustainability applications, staking products, wallet adoption, and relative strength against infrastructure and RWA-linked assets.",
    lurnavaMonitorNote:
      "Lurnava studies VeChain through official VET documentation, VeChainThor activity, VTHO economics, enterprise adoption, product usage, staking participation, wallet growth, and VET relative strength versus real-world infrastructure assets.",
    conversionCta:
      "Learn how to study enterprise blockchain assets through source review, usage checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.vechainHome, assetResearchSources.vechainVetDocs],
    drivers: [
      { title: "Enterprise adoption", detail: "Business use cases can support the long-term VeChain network story." },
      { title: "Dual-token economics", detail: "VET and VTHO dynamics affect how students study network utility." },
      { title: "Sustainability products", detail: "Real-world impact applications can broaden demand beyond crypto-native users." },
      { title: "Staking and wallet use", detail: "Participation tools can affect holder behavior and ecosystem access." },
    ],
    publicRisks: [
      { risk: "Partnership-to-usage gap", watch: "Enterprise relationships need production activity to matter." },
      { risk: "Token demand clarity", watch: "VET utility should be studied alongside VTHO network-cost mechanics." },
      { risk: "Enterprise cycle slowness", watch: "Business adoption can move more slowly than crypto narratives." },
    ],
    lab: {
      deskBrief:
        "VET is studied as an enterprise and real-world application asset. The Asset Lab reviews VeChainThor activity, VET and VTHO mechanics, enterprise deployments, sustainability products, wallet usage, staking context, and whether business adoption is visible in network activity.",
      researchQuestion:
        "Is VET moving because VeChainThor usage improved, enterprise adoption advanced, VTHO demand changed, sustainability products gained traction, or real-world infrastructure assets rotated together?",
      operatingModel:
        "VeChain analysis separates enterprise announcements from production use. A stronger read connects VET and VTHO mechanics, live network activity, business applications, wallet usage, staking context, and relative strength against infrastructure assets.",
      participants: [
        { name: "Enterprise users", role: "Business adoption source", whyItMatters: "Production business use is central to VeChain's thesis." },
        { name: "VeChain developers", role: "Application builders", whyItMatters: "Developers turn enterprise and sustainability ideas into usable apps." },
        { name: "VET holders and stakers", role: "Network participants", whyItMatters: "Holder behavior affects supply and ecosystem participation." },
        { name: "Wallet and product users", role: "Access layer", whyItMatters: "VeWorld and ecosystem products affect practical use." },
      ],
      historicalEvents: [
        { year: "2015-2018", title: "VeChain develops enterprise blockchain focus", detail: "The project becomes known for business and supply-chain use cases." },
        { year: "2018", title: "VeChainThor mainnet launches", detail: "The network introduces its own chain and dual-token model." },
        { year: "2020-2026", title: "Enterprise and sustainability applications expand", detail: "Students track whether partnerships create measurable activity." },
        { year: "Ongoing", title: "VET and VTHO mechanics stay central", detail: "Research checks both value token and gas token behavior." },
      ],
      correlations: [
        { market: "Real-world asset infrastructure", relationship: "VET can rotate with enterprise and tokenization-linked assets.", learnerNote: "Check production use before trusting the theme." },
        { market: "Supply-chain and sustainability tech", relationship: "VeChain narratives often connect to business and environmental applications.", learnerNote: "Business use takes time and should be verified." },
        { market: "Layer 1 assets", relationship: "VET can still move with broad crypto cycles.", learnerNote: "Compare VET against infrastructure peers and BTC." },
      ],
      riskMap: [
        { risk: "Slow enterprise conversion", watch: "Pilots and partnerships may take a long time to produce activity." },
        { risk: "VTHO demand weakness", watch: "Network utility should show up in usage and fee-token demand." },
        { risk: "Narrative recycling", watch: "Old partnership stories can be repeated without new evidence." },
      ],
      researchRoutine: [
        "Review VET trend against infrastructure and enterprise-linked assets.",
        "Check VeChainThor activity, VTHO context, and product usage.",
        "Review official ecosystem product updates and enterprise deployments.",
        "Scan wallet, staking, and user-access developments.",
        "Classify the move as enterprise-usage, VTHO-demand, product-led, staking-led, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Utility Versus Token Demand"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "fetch-ai",
    name: "Artificial Superintelligence Alliance",
    symbol: "FET",
    assetClass: "crypto",
    rank: 46,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Artificial Superintelligence Alliance? FET Guide",
    seoDescription: "Learn what the Artificial Superintelligence Alliance is, why FET is watched, and how Lurnava studies decentralized AI assets.",
    publicHeadline: "Artificial Superintelligence Alliance is a decentralized AI ecosystem using FET.",
    publicSubheadline:
      "FET is watched because AI infrastructure demand, alliance development, agent tools, staking, governance, token-merger context, and AI-sector rotation can affect behavior.",
    plainEnglish:
      "The Artificial Superintelligence Alliance brings AI-focused crypto projects into a shared ecosystem. In Lurnava's coverage universe, FET is the tradable asset used to study this alliance context.",
    marketRole:
      "FET sits in the decentralized AI infrastructure lane. Students use it to study AI-agent tools, alliance coordination, token-merger context, staking, governance, and whether AI narratives become usable products.",
    whyTradersWatch:
      "Traders watch FET for AI-sector rotation, Fetch.ai product activity, alliance updates, staking and governance context, agent marketplace usage, exchange liquidity, and relative strength against AI-linked assets.",
    lurnavaMonitorNote:
      "Lurnava studies FET through official ASI and Fetch.ai sources, agent infrastructure, product usage, governance context, staking, token-transition updates, AI-sector attention, and FET relative strength versus AI-linked crypto assets.",
    conversionCta:
      "Learn how to study AI-linked crypto assets through product checks, token-context review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.asiToken, assetResearchSources.fetchAiHome],
    drivers: [
      { title: "AI-sector rotation", detail: "FET can move when market attention flows into decentralized AI assets." },
      { title: "Agent infrastructure usage", detail: "Fetch.ai tools and agent products help test whether the AI story has real use." },
      { title: "Alliance coordination", detail: "Updates from the Artificial Superintelligence Alliance can change how traders frame FET." },
      { title: "Token-transition context", detail: "Students need current source review because alliance token naming and migration context can evolve." },
    ],
    publicRisks: [
      { risk: "Narrative overreach", watch: "AI attention can move faster than shipped product usage." },
      { risk: "Token-context confusion", watch: "Alliance naming and FET coverage need current official-source review." },
      { risk: "Sector crowding", watch: "Many AI-linked crypto assets compete for the same market attention." },
    ],
    lab: {
      deskBrief:
        "FET is studied as the coverage asset for the Artificial Superintelligence Alliance and Fetch.ai ecosystem. The Asset Lab reviews agent infrastructure, official alliance updates, staking and governance context, product usage, token-transition notices, liquidity depth, and whether AI-sector movement is product-led or narrative-led.",
      researchQuestion:
        "Is FET moving because AI-sector attention expanded, Fetch.ai product usage improved, alliance updates changed expectations, staking or governance context shifted, or token-transition news affected market interpretation?",
      operatingModel:
        "FET analysis is source-first because AI crypto narratives can become loose quickly. A stronger read connects official alliance updates, product usage, agent infrastructure, token context, liquidity, and relative strength against AI-linked assets.",
      participants: [
        { name: "Fetch.ai builders", role: "Agent infrastructure contributors", whyItMatters: "Their tools and products create practical ecosystem use." },
        { name: "Alliance contributors", role: "Coordination layer", whyItMatters: "Alliance direction affects how FET is interpreted by the market." },
        { name: "AI application users", role: "Demand source", whyItMatters: "Real product use separates durable demand from theme-only movement." },
        { name: "FET holders and stakers", role: "Network participants", whyItMatters: "Staking and governance context affect holder behavior." },
      ],
      historicalEvents: [
        { year: "2019-2023", title: "Fetch.ai develops agent infrastructure", detail: "The ecosystem focuses on autonomous agent tools and AI services." },
        { year: "2024", title: "Artificial Superintelligence Alliance forms", detail: "Market research begins tracking FET in a broader alliance context." },
        { year: "2025-2026", title: "AI crypto themes become a tracked sector", detail: "Students compare product usage with broad AI-sector attention." },
        { year: "Ongoing", title: "Token-context review remains required", detail: "Official alliance sources should be checked before interpreting ticker or migration changes." },
      ],
      correlations: [
        { market: "AI-linked crypto assets", relationship: "FET can rotate with decentralized AI and compute assets.", learnerNote: "Sector strength needs product evidence." },
        { market: "Infrastructure tokens", relationship: "Agent platforms can be framed as infrastructure.", learnerNote: "Check whether infrastructure is actively used." },
        { market: "Technology equity narratives", relationship: "AI enthusiasm outside crypto can spill into AI tokens.", learnerNote: "Broad AI hype is not the same as FET-specific demand." },
      ],
      riskMap: [
        { risk: "AI theme crowding", watch: "Strong market attention can fade if product use does not follow." },
        { risk: "Ticker and migration confusion", watch: "Use official sources before writing conclusions." },
        { risk: "Product visibility gap", watch: "Students should ask which tools are being used, by whom, and why." },
      ],
      researchRoutine: [
        "Review FET trend against AI-linked and infrastructure assets.",
        "Check official ASI and Fetch.ai updates for token and product context.",
        "Review agent infrastructure usage, marketplace activity, and developer updates.",
        "Scan staking, governance, and liquidity conditions.",
        "Classify the move as product-led, alliance-update, AI-sector rotation, token-context, or liquidity-led.",
      ],
      relatedLessons: ["Level 8 AI Infrastructure Assets", "Level 9 Narrative Versus Usage"],
      relatedStrategies: ["AI Sector Rotation", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "thorchain",
    name: "THORChain",
    symbol: "RUNE",
    assetClass: "crypto",
    rank: 47,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is THORChain? RUNE Liquidity Guide",
    seoDescription: "Learn what THORChain is, why RUNE is watched, what affects it, and how Lurnava studies cross-chain liquidity protocols.",
    publicHeadline: "THORChain is a cross-chain liquidity protocol powered by RUNE.",
    publicSubheadline:
      "RUNE is watched because native asset swaps, liquidity depth, node bonding, protocol fees, security events, and cross-chain DeFi demand can affect market behavior.",
    plainEnglish:
      "THORChain lets users swap native assets across different chains without relying on wrapped tokens. RUNE is central to liquidity pools, node bonding, fees, and network economics.",
    marketRole:
      "RUNE sits in the cross-chain liquidity and DeFi infrastructure lane. Students use it to study swaps, liquidity pools, node security, protocol fees, native asset demand, and bridge-like risk without calling it a normal exchange token.",
    whyTradersWatch:
      "Traders watch RUNE for swap volume, pool depth, node bonding, protocol fees, supported chain changes, security incidents, liquidity-provider behavior, and relative strength against DeFi infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies THORChain through swap volume, liquidity pools, node bonding, fee generation, security updates, supported assets, liquidity-provider behavior, and RUNE relative strength versus DeFi infrastructure assets.",
    conversionCta:
      "Learn how to study cross-chain DeFi assets through liquidity review, security checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.thorchainHome, assetResearchSources.thorchainDocs],
    drivers: [
      { title: "Swap volume", detail: "More native asset swapping can support THORChain protocol demand." },
      { title: "Liquidity depth", detail: "Pool depth affects execution quality and user adoption." },
      { title: "Node bonding", detail: "RUNE bonding is central to network security and economic design." },
      { title: "Security confidence", detail: "Cross-chain liquidity systems are sensitive to exploit and reliability concerns." },
    ],
    publicRisks: [
      { risk: "Protocol security risk", watch: "Cross-chain systems need constant security review." },
      { risk: "Liquidity flight", watch: "Liquidity providers can move capital when risk or yield changes." },
      { risk: "Fee-demand mismatch", watch: "RUNE economics depend on real protocol activity, not only broad DeFi attention." },
    ],
    lab: {
      deskBrief:
        "RUNE is studied as a cross-chain liquidity protocol asset. The Asset Lab reviews native swap volume, pool depth, node bonding, protocol fees, security updates, supported-chain changes, liquidity-provider behavior, and whether RUNE demand reflects real THORChain activity.",
      researchQuestion:
        "Is RUNE moving because THORChain swap volume improved, liquidity depth expanded, node bonding changed, fee generation increased, security confidence shifted, or DeFi infrastructure rotated together?",
      operatingModel:
        "THORChain analysis connects liquidity utility with security risk. A stronger read checks swap volume, pool depth, node bonding, protocol fees, supported assets, security history, and relative strength against DeFi infrastructure assets.",
      participants: [
        { name: "Swappers", role: "Protocol demand source", whyItMatters: "Native asset swaps create the activity the protocol exists to serve." },
        { name: "Liquidity providers", role: "Pool depth suppliers", whyItMatters: "Liquidity depth affects user experience and fee generation." },
        { name: "Node operators", role: "Security participants", whyItMatters: "Node bonding and behavior affect protocol security." },
        { name: "Wallet and interface teams", role: "Access layer", whyItMatters: "User interfaces help route demand into THORChain." },
      ],
      historicalEvents: [
        { year: "2018-2021", title: "THORChain develops native cross-chain liquidity", detail: "The protocol becomes known for swaps across native assets." },
        { year: "2021-2022", title: "Security and reliability become core research areas", detail: "Cross-chain protocols require careful exploit and recovery review." },
        { year: "2023-2026", title: "Swap volume and fee demand become central", detail: "Students track whether liquidity and fees support the RUNE thesis." },
        { year: "Ongoing", title: "Node bonding is monitored", detail: "RUNE research includes bond levels, pool depth, and network security context." },
      ],
      correlations: [
        { market: "Bitcoin and native asset liquidity", relationship: "THORChain can attract demand when users want native BTC and multi-chain swaps.", learnerNote: "Check which assets are driving volume." },
        { market: "DeFi infrastructure", relationship: "RUNE can rotate with liquidity and exchange protocol assets.", learnerNote: "Compare real volume and fees, not only sector movement." },
        { market: "Cross-chain security", relationship: "Security sentiment affects liquidity-provider confidence.", learnerNote: "Risk review is part of every RUNE study." },
      ],
      riskMap: [
        { risk: "Exploit risk", watch: "Cross-chain systems are high-value targets." },
        { risk: "Liquidity-provider withdrawal", watch: "Capital can leave quickly when risk rises." },
        { risk: "Volume quality", watch: "Temporary volume spikes may not create durable demand." },
      ],
      researchRoutine: [
        "Review RUNE trend against DeFi infrastructure and exchange protocol assets.",
        "Check THORChain swap volume, pool depth, and protocol fees.",
        "Review node bonding, supported-chain updates, and security notices.",
        "Scan liquidity-provider behavior and interface adoption.",
        "Classify the move as volume-led, liquidity-led, node-bonding-led, security-led, or DeFi-sector rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Infrastructure", "Level 9 Protocol Risk"],
      relatedStrategies: ["DeFi Infrastructure Rotation", "Technical + Fundamental Confirmation", "Protocol Risk Review"],
    },
  },
  {
    slug: "the-graph",
    name: "The Graph",
    symbol: "GRT",
    assetClass: "crypto",
    rank: 48,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is The Graph? GRT Indexing Protocol Guide",
    seoDescription: "Learn what The Graph is, why GRT is watched, what affects it, and how Lurnava studies blockchain data infrastructure assets.",
    publicHeadline: "The Graph is a blockchain data indexing protocol powered by GRT.",
    publicSubheadline:
      "GRT is watched because subgraph demand, indexer staking, query fees, AI data needs, multi-chain support, and developer adoption can affect network demand.",
    plainEnglish:
      "The Graph helps applications find and query blockchain data without building their own indexing systems. GRT is tied to network participation, staking, indexing, and query economics.",
    marketRole:
      "GRT sits in the blockchain data infrastructure lane. Students use it to study indexer economics, developer demand, query usage, subgraphs, multi-chain support, and AI-linked data narratives.",
    whyTradersWatch:
      "Traders watch GRT for subgraph adoption, indexer participation, query fees, network upgrades, multi-chain demand, AI data infrastructure narratives, and relative strength against data and infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies The Graph through subgraph usage, indexer staking, query demand, network fees, developer adoption, multi-chain coverage, AI data context, and GRT relative strength versus infrastructure assets.",
    conversionCta:
      "Learn how to study blockchain data assets through usage checks, network economics, and structured market training inside Lurnava.",
    sources: [assetResearchSources.graphHome, assetResearchSources.graphIndexingDocs],
    drivers: [
      { title: "Subgraph adoption", detail: "More applications using The Graph can support the data infrastructure thesis." },
      { title: "Indexer participation", detail: "Indexers stake GRT and provide query processing services." },
      { title: "Query demand", detail: "Query activity helps show whether data services are being used." },
      { title: "Multi-chain and AI data context", detail: "Broader data needs can support attention toward indexing infrastructure." },
    ],
    publicRisks: [
      { risk: "Usage-to-token gap", watch: "Data demand needs to connect to GRT network economics." },
      { risk: "Indexer concentration", watch: "Network quality depends on reliable indexer participation." },
      { risk: "Competing data stacks", watch: "Applications can use alternative indexing and data providers." },
    ],
    lab: {
      deskBrief:
        "GRT is studied as a blockchain data infrastructure asset. The Asset Lab reviews subgraph usage, indexer staking, query demand, fee economics, developer adoption, multi-chain coverage, AI data narratives, and whether GRT value is tied to real network participation.",
      researchQuestion:
        "Is GRT moving because subgraph usage improved, query demand expanded, indexer participation changed, AI data narratives gained attention, or infrastructure assets rotated together?",
      operatingModel:
        "The Graph analysis connects data demand to network economics. A stronger read checks subgraph adoption, query fees, indexer health, developer usage, multi-chain coverage, and relative strength against data infrastructure assets.",
      participants: [
        { name: "Indexers", role: "Data service operators", whyItMatters: "They stake GRT and provide indexing and query processing." },
        { name: "Developers", role: "Demand creators", whyItMatters: "Applications use subgraphs and data services." },
        { name: "Curators and delegators", role: "Network participants", whyItMatters: "They help allocate attention and stake across useful data services." },
        { name: "Data-consuming applications", role: "Query demand source", whyItMatters: "Real query demand tests the protocol's utility." },
      ],
      historicalEvents: [
        { year: "2020", title: "GRT launches with decentralized indexing focus", detail: "The market begins pricing The Graph as a web3 data protocol." },
        { year: "2021-2023", title: "Subgraph adoption grows across DeFi and apps", detail: "Developers use The Graph to query blockchain data." },
        { year: "2024-2026", title: "Multi-chain and AI data themes expand", detail: "Students track whether data demand supports network economics." },
        { year: "Ongoing", title: "Indexer health remains central", detail: "GRT research includes staking, query processing, and participant incentives." },
      ],
      correlations: [
        { market: "Infrastructure tokens", relationship: "GRT can rotate with LINK, FIL, ICP, and other data assets.", learnerNote: "Compare real usage and fee demand." },
        { market: "Developer activity", relationship: "The Graph demand depends on applications needing indexed data.", learnerNote: "Developer adoption is a key usage check." },
        { market: "AI data narratives", relationship: "Data infrastructure can attract attention during AI-themed cycles.", learnerNote: "AI attention should be matched with The Graph usage evidence." },
      ],
      riskMap: [
        { risk: "Low query demand", watch: "Infrastructure needs real usage to support its thesis." },
        { risk: "Alternative data providers", watch: "Developers can choose other indexing stacks." },
        { risk: "Participant incentive weakness", watch: "Indexer and delegator incentives affect network quality." },
      ],
      researchRoutine: [
        "Review GRT trend against data and infrastructure tokens.",
        "Check subgraph usage, query demand, and developer adoption.",
        "Review indexer staking, delegation, and network economics.",
        "Scan multi-chain coverage and AI data narratives for usage evidence.",
        "Classify the move as query-demand, indexer-led, developer-adoption, AI-data-theme, or infrastructure-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Utility Versus Token Demand"],
      relatedStrategies: ["Infrastructure Relative Strength", "Narrative With Data Confirmation", "Technical + Fundamental Confirmation"],
    },
  },
  {
    slug: "pyth-network",
    name: "Pyth Network",
    symbol: "PYTH",
    assetClass: "crypto",
    rank: 49,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Pyth Network? PYTH Oracle Data Guide",
    seoDescription: "Learn what Pyth Network is, why PYTH is watched, what affects it, and how Lurnava studies price-feed and oracle data assets.",
    publicHeadline: "Pyth Network delivers market data and price feeds to blockchain applications.",
    publicSubheadline:
      "PYTH is watched because price-feed adoption, data publisher quality, staking, DeFi integrations, oracle competition, and multi-chain demand can affect behavior.",
    plainEnglish:
      "Pyth Network provides real-time market data to smart contracts across many blockchains. PYTH is tied to governance, staking context, publisher support, and network participation.",
    marketRole:
      "PYTH sits in the oracle and market-data infrastructure lane. Students use it to study price-feed demand, data publisher quality, DeFi dependency, staking, and competition with other oracle networks.",
    whyTradersWatch:
      "Traders watch PYTH for feed adoption, data-publisher growth, staking participation, DeFi integrations, supported-chain expansion, governance updates, and relative strength against oracle and infrastructure assets.",
    lurnavaMonitorNote:
      "Lurnava studies Pyth through price-feed usage, publisher quality, staking context, DeFi integrations, supported chains, governance updates, data reliability, and PYTH relative strength versus oracle assets.",
    conversionCta:
      "Learn how to study oracle and data assets through integration review, reliability checks, and structured market training inside Lurnava.",
    sources: [assetResearchSources.pythHome, assetResearchSources.pythDocs],
    drivers: [
      { title: "Price-feed adoption", detail: "More applications using Pyth feeds can support demand for its data infrastructure." },
      { title: "Publisher quality", detail: "Market data is only as useful as the quality and reliability of its providers." },
      { title: "Staking participation", detail: "PYTH staking context affects network participation and data-integrity incentives." },
      { title: "Oracle competition", detail: "Pyth competes with Chainlink and other data infrastructure providers." },
    ],
    publicRisks: [
      { risk: "Data reliability risk", watch: "Oracle issues can affect dependent applications." },
      { risk: "Adoption-to-token gap", watch: "Feed usage does not automatically create direct PYTH demand." },
      { risk: "Competition pressure", watch: "Applications can choose other oracle providers." },
    ],
    lab: {
      deskBrief:
        "PYTH is studied as an oracle and market-data infrastructure asset. The Asset Lab reviews price-feed adoption, data-publisher quality, staking participation, DeFi integrations, supported-chain expansion, governance updates, data reliability, and whether PYTH market behavior reflects network usage.",
      researchQuestion:
        "Is PYTH moving because price-feed adoption improved, publisher quality expanded, staking conditions changed, DeFi integrations grew, or oracle infrastructure assets rotated together?",
      operatingModel:
        "Pyth analysis tests data infrastructure against integration evidence. A stronger read connects feed usage, publisher quality, staking context, reliability, governance, supported-chain breadth, and relative strength against oracle peers.",
      participants: [
        { name: "Data publishers", role: "Market data providers", whyItMatters: "Publisher quality affects the usefulness of Pyth feeds." },
        { name: "DeFi applications", role: "Data consumers", whyItMatters: "Applications create practical demand for price feeds." },
        { name: "PYTH stakers", role: "Network participants", whyItMatters: "Staking supports data-integrity incentives and governance context." },
        { name: "Blockchain integration teams", role: "Expansion layer", whyItMatters: "More supported chains can increase the addressable application base." },
      ],
      historicalEvents: [
        { year: "2021-2023", title: "Pyth expands as a market-data network", detail: "The network becomes known for publishing price feeds to blockchain applications." },
        { year: "2023-2024", title: "PYTH token and governance context grows", detail: "Market attention turns to staking, governance, and network participation." },
        { year: "2024-2026", title: "Multi-chain integrations deepen", detail: "Students track supported chains, DeFi integrations, and feed usage." },
        { year: "Ongoing", title: "Data reliability remains the core test", detail: "Oracle assets must be reviewed through accuracy, uptime, and integration quality." },
      ],
      correlations: [
        { market: "Chainlink and oracle assets", relationship: "PYTH often rotates with oracle and data infrastructure tokens.", learnerNote: "Compare integrations, reliability, and token economics." },
        { market: "DeFi derivatives", relationship: "Many derivatives and lending products need reliable market data.", learnerNote: "Oracle demand depends on applications that use the feeds." },
        { market: "Multi-chain activity", relationship: "Pyth can benefit when more chains need price data.", learnerNote: "Supported chains are useful only when applications are active." },
      ],
      riskMap: [
        { risk: "Bad data event", watch: "A price-feed issue can reduce trust quickly." },
        { risk: "Integration churn", watch: "Applications can switch data providers." },
        { risk: "Token-value uncertainty", watch: "Network usage needs a clear connection to PYTH demand." },
      ],
      researchRoutine: [
        "Review PYTH trend against LINK and other oracle assets.",
        "Check price-feed adoption, supported chains, and DeFi integrations.",
        "Review publisher quality, staking context, and governance updates.",
        "Scan reliability, outage, and data-quality reports from credible sources.",
        "Classify the move as integration-led, publisher-led, staking-led, reliability-led, or oracle-sector rotation.",
      ],
      relatedLessons: ["Level 8 Infrastructure Assets", "Level 9 Oracle Risk"],
      relatedStrategies: ["Infrastructure Relative Strength", "Technical + Fundamental Confirmation", "Protocol Risk Review"],
    },
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    symbol: "JUP",
    assetClass: "crypto",
    rank: 50,
    status: "ready",
    snapshotLabel: coverageSnapshot.label,
    lastReviewed: "2026-07-14",
    seoTitle: "What Is Jupiter? JUP Solana Liquidity Guide",
    seoDescription: "Learn what Jupiter is, why JUP is watched, what affects it, and how Lurnava studies Solana liquidity and aggregator assets.",
    publicHeadline: "Jupiter is a major Solana liquidity and trading platform tied to JUP.",
    publicSubheadline:
      "JUP is watched because Solana swap flow, aggregator routing, product expansion, governance, token launches, liquidity depth, and SOL ecosystem cycles can affect behavior.",
    plainEnglish:
      "Jupiter started as a Solana liquidity aggregator and has expanded into a wider set of trading and portfolio tools. JUP is studied through platform usage, governance context, and Solana ecosystem demand.",
    marketRole:
      "JUP sits in the Solana DeFi and liquidity aggregation lane. Students use it to study swap routing, product adoption, token launch activity, governance, liquidity depth, and whether Solana activity supports platform demand.",
    whyTradersWatch:
      "Traders watch JUP for Solana volume, swap routing demand, product launches, governance updates, token-launch activity, liquidity depth, platform fees, and relative strength against Solana ecosystem assets.",
    lurnavaMonitorNote:
      "Lurnava studies Jupiter through Solana swap activity, aggregator usage, product adoption, governance, token-launch demand, liquidity depth, developer APIs, and JUP relative strength versus Solana DeFi assets.",
    conversionCta:
      "Learn how to study Solana DeFi assets through usage checks, product review, and structured market training inside Lurnava.",
    sources: [assetResearchSources.jupiterDocs, assetResearchSources.jupiterDeveloperDocs],
    drivers: [
      { title: "Solana swap flow", detail: "More Solana trading activity can support Jupiter platform demand." },
      { title: "Product expansion", detail: "New tools can broaden Jupiter from simple routing into a wider trading platform." },
      { title: "Governance context", detail: "JUP governance and platform decisions can affect market expectations." },
      { title: "Liquidity depth", detail: "Aggregator usefulness depends on deep, efficient Solana liquidity." },
    ],
    publicRisks: [
      { risk: "Solana dependency", watch: "JUP is highly exposed to Solana ecosystem activity." },
      { risk: "Aggregator competition", watch: "Routing and trading tools can face competition from other interfaces." },
      { risk: "Product complexity", watch: "Students should separate each Jupiter product line before judging demand." },
    ],
    lab: {
      deskBrief:
        "JUP is studied as a Solana liquidity aggregation and trading-platform asset. The Asset Lab reviews swap flow, routing demand, product expansion, governance updates, token-launch activity, API usage, liquidity depth, SOL ecosystem cycles, and whether JUP demand follows platform usage.",
      researchQuestion:
        "Is JUP moving because Solana swap flow improved, Jupiter product usage expanded, governance changed expectations, token-launch demand increased, or Solana DeFi assets rotated together?",
      operatingModel:
        "Jupiter analysis starts with Solana activity, then checks platform-specific usage. A stronger read connects swap volume, routing quality, product adoption, governance context, launch demand, liquidity depth, and JUP relative strength.",
      participants: [
        { name: "Solana traders", role: "Platform demand source", whyItMatters: "Swap and trading activity create Jupiter usage." },
        { name: "Liquidity venues", role: "Routing base", whyItMatters: "Aggregator quality depends on underlying Solana liquidity." },
        { name: "Jupiter developers", role: "Product builders", whyItMatters: "New tools and APIs can expand platform demand." },
        { name: "JUP governance participants", role: "Platform stewards", whyItMatters: "Governance decisions shape incentives and product direction." },
      ],
      historicalEvents: [
        { year: "2021-2023", title: "Jupiter becomes a Solana routing layer", detail: "The platform grows around swap aggregation and liquidity access." },
        { year: "2024", title: "JUP token brings governance context", detail: "Market attention expands from platform use to token and governance dynamics." },
        { year: "2024-2026", title: "Product suite expands", detail: "Students track whether new tools create durable usage beyond swap routing." },
        { year: "Ongoing", title: "Solana ecosystem context remains central", detail: "JUP research begins with SOL activity and Solana liquidity." },
      ],
      correlations: [
        { market: "Solana", relationship: "JUP is closely tied to Solana ecosystem activity.", learnerNote: "Always compare JUP with SOL and Solana DeFi assets." },
        { market: "DEX and aggregator assets", relationship: "JUP can rotate with trading-platform tokens.", learnerNote: "Compare usage, fees, and product retention." },
        { market: "Token-launch cycles", relationship: "Jupiter can attract attention when Solana token launches are active.", learnerNote: "Launch attention can fade quickly if trading activity cools." },
      ],
      riskMap: [
        { risk: "Solana slowdown", watch: "Lower Solana activity can reduce platform demand." },
        { risk: "Routing competition", watch: "Users may move to other interfaces if execution or incentives improve elsewhere." },
        { risk: "Governance expectation gap", watch: "Token holders may expect more value capture than the platform delivers." },
      ],
      researchRoutine: [
        "Review JUP trend against SOL and Solana DeFi assets.",
        "Check Jupiter swap flow, routing demand, and product usage.",
        "Review governance updates, token-launch activity, and API adoption.",
        "Scan liquidity depth and Solana ecosystem activity.",
        "Classify the move as Solana-led, platform-usage, product-led, governance-led, or launch-cycle rotation.",
      ],
      relatedLessons: ["Level 8 DeFi Protocols", "Level 9 Utility Versus Token Demand"],
      relatedStrategies: ["Solana Ecosystem Rotation", "Technical + Fundamental Confirmation", "Narrative With Data Confirmation"],
    },
  },
];

export const assetProfiles: AssetProfile[] = baseAssetProfiles.map((asset) => {
  const enhancement =
    assetDeepBatch8Enhancements[asset.slug] ??
    assetDeepBatch7Enhancements[asset.slug] ??
    assetDeepBatch6Enhancements[asset.slug] ??
    assetDeepBatch5Enhancements[asset.slug] ??
    assetDeepBatch4Enhancements[asset.slug] ??
    assetDeepBatch3Enhancements[asset.slug] ??
    assetDeepBatch2Enhancements[asset.slug];
  if (!enhancement) return asset;

  return {
    ...asset,
    ...enhancement,
    lab: {
      ...asset.lab,
      ...(enhancement.lab ?? {}),
    },
  };
});

export function assetClassLabel(assetClass: AssetClassKey): string {
  if (assetClass === "crypto") return "Crypto";
  if (assetClass === "forex") return "Forex";
  return "Gold";
}

export function assetClassPlural(assetClass: AssetClassKey): string {
  if (assetClass === "crypto") return "Crypto assets";
  if (assetClass === "forex") return "Currency markets";
  return "Gold";
}

export function publicAssetHref(asset: Pick<AssetProfile | CoverageAsset, "assetClass" | "slug">): string {
  return `/markets/${asset.assetClass}/${asset.slug}`;
}

export function assetLabHref(asset: Pick<AssetProfile | CoverageAsset, "assetClass" | "slug">): string {
  return `/asset-lab/${asset.assetClass}/${asset.slug}`;
}

export function getReadyAssetProfiles(): AssetProfile[] {
  return assetProfiles.filter(asset => asset.status === "ready");
}

export function getAssetProfile(assetClass: string, slug: string): AssetProfile | undefined {
  return assetProfiles.find(asset => asset.assetClass === assetClass && asset.slug === slug && asset.status === "ready");
}

export function getCoverageByClass(assetClass: AssetClassKey): CoverageAsset[] {
  return coverageUniverse.filter(asset => asset.assetClass === assetClass);
}

export function getReadyProfilesByClass(assetClass: AssetClassKey): AssetProfile[] {
  return getReadyAssetProfiles().filter(asset => asset.assetClass === assetClass);
}

export function getCoverageCounts() {
  const classes: AssetClassKey[] = ["crypto", "forex", "gold"];
  return classes.map(assetClass => {
    const assets = getCoverageByClass(assetClass);
    return {
      assetClass,
      label: assetClassPlural(assetClass),
      total: assets.length,
      ready: assets.filter(asset => asset.status === "ready").length,
      planned: assets.filter(asset => asset.status === "planned").length,
    };
  });
}
