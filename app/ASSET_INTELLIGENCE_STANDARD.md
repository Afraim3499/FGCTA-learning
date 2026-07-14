# Lurnava Asset Intelligence Standard

This file is mandatory reading before creating, editing, validating, reviewing, or publishing any Asset Intelligence profile, public market page, or paid Asset Lab page.

The standard is strict because Asset Intelligence is not a blog feature. It is a public trust engine and a paid research workspace. A page is not ready because it has enough text. A page is ready only when it teaches the asset with concrete, source-backed depth.

## Core Rule

Public pages explain the asset clearly enough for a visitor to trust Lurnava.

Paid Asset Lab pages must go deeper. They must name real authorities, builders, institutions, infrastructure, holders, issuers, venues, historical events, and risk forces when those facts can be verified. Category labels such as "ETF issuers", "market makers", "central banks", "validators", or "reserve managers" are not enough by themselves.

If a claim cannot be verified from a credible source, do not include it.

## Product Shape

Public pages must feel like landing pages:

- strong first screen with asset identity
- fast plain-English explanation
- history and major-player teaser
- market-driver cards
- risk cards
- source and review trail
- clear conversion action
- internal links to related assets and Lurnava training

Paid pages must feel like platform workspaces:

- tabs, panels, tables, timelines, scorecards, and research routines
- named participants and named infrastructure
- asset-specific operating model
- related lessons and Strategy Lab links
- source-backed market structure
- no decorative filler
- no category-only research

## Coverage Model

Lurnava uses a curated asset universe, not a live external API list.

- Crypto: 50 manually reviewed assets.
- Forex: 20 manually reviewed currency markets.
- Gold: always included.
- Review cadence: monthly.
- New assets begin as `planned` until public and paid profiles pass validation.
- Archived assets stay accessible when users already have links.

Every asset must store:

- asset class
- symbol
- slug
- coverage rank
- coverage status
- snapshot label
- review date
- public profile status
- paid profile status
- credible source references

## Universal Paid Asset Lab Contract

Every paid asset profile must cover all of these areas.

### 1. Asset Identity

Required:

- what the asset is
- what market it belongs to
- why the market cares
- what makes it different from similar assets
- where it trades or is referenced
- how learners should frame it in plain language

Do not write generic lines that could fit any asset in the same class.

### 2. Origin, Issuer, Authority, or Builders

Required:

- founding team, foundation, issuer, central bank, monetary authority, or market structure body
- launch or issuance history
- governance model or policy authority
- major changes in control, mandate, protocol, exchange regime, or market access

For assets without founders, explain the institution or structure that gives the asset its market role.

### 3. Named Major Participants

Required minimum:

- at least 6 named participants for paid profiles
- each participant must include name, role, why it matters, and source basis
- no unnamed category can count unless the category itself is the real institution type and no named entity is appropriate

Examples of valid participant types:

- central bank or monetary authority
- treasury or finance ministry
- foundation or core development organization
- ETF issuer
- custodian
- exchange or venue
- validator, miner, or staking provider
- public company with disclosed exposure
- major protocol, app, or ecosystem team
- recognized market infrastructure body
- reserve manager category only when paired with official reserve data

### 4. Holder, Exposure, and Flow Map

Required:

- known large holders or public exposure when verifiable
- real holder or exposure amounts when publicly available
- ETF, trust, reserve, treasury, staking, mining, or custody exposure where relevant
- flow channels that matter to the asset
- unlocks, issuance, supply schedule, reserves, intervention, or policy operations where relevant

Rules:

- do not invent whales or private holders
- do not rank wallets without explorer-backed evidence
- do not hardcode fast-changing amounts unless the source date, retrieval date, and update cadence are shown
- use "monitored item" language for facts that change often

### 4A. Live Holdings and Exposure Amounts

Paid Asset Lab must name real entities and show real exposure details when reliable public data exists.

Required for each named holding, reserve, ETF, trust, treasury, staking, mining, or public-company exposure:

- entity name
- entity type
- asset or instrument held
- amount held or exposure amount
- unit, such as BTC, ETH, ounces, tonnes, shares, contracts, local currency, or USD value
- ownership or exposure type, such as direct holding, ETF custody, reserve asset, treasury holding, futures exposure, staking exposure, or mined inventory
- as-of date from the source
- source publication date when available
- date Lurnava retrieved the data
- source URL
- source publisher
- explanation of why this entity matters
- freshness status: current, recent, stale, or historical reference

Freshness rules:

- ETF holdings, trust holdings, exchange reserves, public treasury dashboards, and on-chain treasury balances must be checked against the latest available public source during the profile update.
- Public-company holdings must use the latest available company filing, investor report, treasury page, or official announcement.
- Central-bank gold reserves and FX reserve data must use the latest official central-bank, IMF, World Gold Council, or other high-authority release available during the profile update.
- Futures, options, and positioning data must use the latest exchange, regulator, or recognized market-infrastructure release available during the profile update.
- If a source updates daily or weekly, data older than 30 days cannot be presented as current.
- If a source updates monthly or quarterly, data older than the latest release cycle must be labeled as stale or historical.
- If exact holdings are not publicly disclosed, say that directly and explain what proxy data Lurnava monitors instead.

Preferred source hierarchy for holding amounts:

1. Official issuer, ETF, trust, central bank, regulator, exchange, or company filing.
2. Official transparency dashboard or reserve attestation.
3. Recognized market-infrastructure source such as CME, LBMA, World Gold Council, BIS, IMF, CFTC, or SEC filings.
4. Reputable explorer or analytics source only when the wallet, contract, or reserve address is directly inspectable.
5. Reputable financial data provider only when primary data is not available and the limitation is stated.

Examples of details that should be included when relevant and source-backed:

- BlackRock iShares Bitcoin Trust holdings and custodian structure.
- Fidelity Bitcoin or Ethereum ETF holdings and source date.
- Grayscale trust or ETF assets and conversion history.
- Strategy/MicroStrategy Bitcoin holdings from company filings or official treasury updates.
- Tesla Bitcoin holdings only when supported by the latest public company filing.
- SPDR Gold Shares and iShares Gold Trust gold holdings from issuer pages.
- central-bank gold reserve amounts from World Gold Council, IMF, or official central-bank data.
- CME/COMEX open interest or deliverable stock data as a monitored market-structure item.

Do not include:

- unsourced social-media holder claims
- guessed private wallet ownership
- copied ranking tables without source dates
- old holding amounts written as current
- sensational language around public figures or institutions

### 5. Market Structure

Required:

- primary venues or reference markets
- spot, futures, options, OTC, ETF, staking, lending, or interbank structure where relevant
- liquidity behavior
- spreads or execution risks in asset-appropriate language
- session or venue timing when relevant
- what learners should watch before trusting a chart read

Asset language:

- Crypto: use spread percentage, slippage, liquidity depth, funding, open interest, basis, token unlocks, validator set, bridge risk, and custody risk.
- Forex: use pips, spread, pair, session, central bank policy, rate differential, reserve flow, intervention, and trade balance.
- Gold: use dollars, points, ATR, wick behavior, real yields, dollar behavior, COMEX/LBMA structure, ETF flows, and central-bank demand.

### 6. Drivers and Regimes

Required minimum:

- at least 6 asset-specific drivers
- at least 3 market regimes
- each driver must explain cause and effect
- each regime must explain how the asset may behave differently

Regime examples:

- rate-cut repricing
- dollar strength
- crisis liquidity demand
- risk-on crypto rotation
- commodity inflation
- policy intervention
- liquidity crunch
- protocol upgrade cycle

### 7. Historical Timeline

Required minimum:

- at least 6 historical events for paid profiles
- each event must include year/date, title, what happened, and why it matters now
- events must be asset-specific

Do not fill this with broad market history unless the asset was directly affected.

### 8. Risk and Failure Map

Required minimum:

- at least 5 asset-specific risks
- each risk must explain what to watch and what would weaken the asset thesis

Risk examples:

- policy surprise
- liquidity shock
- regulatory action
- protocol exploit
- reserve credibility
- custody concentration
- ETF outflow pressure
- peg stress
- intervention risk
- miner or validator stress
- commodity-demand shock

### 9. Source Pack

Required minimum:

- at least 4 credible sources for paid profiles
- at least 2 credible sources for public pages
- at least 1 primary or official source whenever available
- source notes must explain what the source supports

Preferred sources:

- official project, issuer, foundation, central bank, regulator, exchange, or market-infrastructure documentation
- whitepapers, technical docs, monetary-policy pages, reserve reports, official factsheets
- SEC filings, ETF prospectuses, public-company filings, official treasury disclosures
- BIS, IMF, World Bank, OECD, World Gold Council, LBMA, CME/COMEX, CFTC, central banks
- reputable explorers or transparency dashboards only when the data is directly inspectable

Avoid:

- casual social posts
- anonymous summaries
- thin SEO pages
- unsupported screenshots
- stale third-party claims without a date

### 10. Learner Connection

Required:

- related lessons
- related Strategy Lab items
- why the asset belongs near those lessons
- what a learner should be able to explain after studying the page
- what the learner should not assume

## Crypto Paid Standard

Every crypto Asset Lab profile must cover:

- founders or founding organization
- foundation, labs, DAO, or governance body
- token launch history and distribution type
- tokenomics: supply cap or issuance model, inflation/deflation mechanics, staking/mining, burns, vesting, unlocks
- protocol purpose and real use case
- main network, app, or ecosystem activity
- named exchanges or venues where liquidity matters
- custody and ETF/trust exposure when relevant
- named public companies, funds, foundations, ETF issuers, trusts, or treasury holders with latest source-backed holding amounts when verified
- validators, miners, staking providers, sequencers, oracle operators, or bridges where relevant
- top public treasury or foundation balances when disclosed
- major ETF/trust holdings, custody structure, and source date where relevant
- staking or validator concentration where reliable public data exists
- major upgrades, outages, exploits, lawsuits, listings, delistings, or regulatory events
- on-chain or protocol metrics that Lurnava monitors
- derivatives context when the asset has active perps/futures/options
- key risks: unlocks, bridge risk, governance concentration, exchange concentration, liquidity depth, regulatory pressure, security incidents

Crypto subtype additions:

- Layer 1: validator set, fees, throughput, developer ecosystem, staking, major dApps.
- Layer 2: parent chain, sequencer model, bridge design, data availability, upgrade control.
- Stablecoin: issuer, reserve composition, attestations, redemption mechanics, depeg history, regulatory status.
- DeFi token: protocol revenue, TVL context, governance, token value path, exploit history.
- Exchange token: exchange dependency, fee utility, buyback/burn policy, regulatory exposure.
- Oracle token: client protocols, data-feed role, node operators, payment model.
- Meme asset: origin, community mechanics, exchange liquidity, concentration risk, narrative risk. Do not pretend there is utility when there is not.

## Forex Paid Standard

Every forex Asset Lab profile must cover:

- issuing country or currency area
- central bank or monetary authority
- mandate and policy framework
- exchange-rate regime: free float, managed float, peg, band, or capital controls
- reserve role and global FX relevance
- latest source-backed reserve data where available, such as FX reserves, gold reserves, or official reserve assets
- main currency pairs
- liquidity sessions and spread behavior
- rate differential logic
- inflation, employment, growth, and trade drivers
- fiscal or political risk
- intervention history where relevant
- intervention amounts, reserve levels, or balance-sheet items when official data is available
- treasury or finance ministry role where relevant
- major trade partners and commodity links
- current-account or capital-flow behavior
- reserve managers, banks, corporates, exporters, importers, and macro desks as participants
- at least 6 historical events tied to the currency
- at least 5 risks, including policy surprise and liquidity/session risk

Forex source pack should include:

- central bank policy pages
- central bank inflation or monetary-policy reports
- BIS FX turnover reference
- IMF or World Bank country/macroeconomic references where useful
- official statistics agency or finance ministry pages where useful

Forex language must use pips, spread, session, pair, rate differential, reserve flow, intervention, and policy expectation when appropriate.

## Gold Paid Standard

Gold has no founder. The paid profile must explain the real market structure.

Gold Asset Lab must cover:

- why gold has monetary history
- central-bank reserve role
- latest source-backed gold reserve amounts for major official holders when relevant
- LBMA London OTC market
- COMEX futures and options structure
- World Gold Council demand categories
- ETF products such as SPDR Gold Shares and iShares Gold Trust with latest source-backed holdings where available
- major producers and miners such as Newmont and Barrick when source-backed
- major miner production or reserve figures only from latest company reports or filings
- major refining, vaulting, custody, and bullion-market infrastructure where relevant
- real yields, dollar behavior, inflation expectations, crisis demand, and central-bank buying
- jewelry and physical demand, including major demand regions when source-backed
- futures positioning and CFTC COT as a monitored item
- at least 8 historical events because gold has deep monetary history
- at least 6 named participants
- at least 6 risks, including real-yield reversal, dollar strength, liquidity shock, ETF outflows, positioning unwind, and policy surprise

Gold language must use dollars, points, ATR, wick behavior, real yields, futures positioning, ETF flows, and central-bank demand. Do not use Forex pip language for gold.

## Public Page Standard

Every public asset page must answer:

1. What is this asset?
2. Why do market participants care about it?
3. What usually moves it?
4. Who or what influences it?
5. What history should a viewer know first?
6. What risks should a learner understand first?
7. How does Lurnava monitor this market?
8. What should the visitor do next?

The public page must include:

- SEO title and meta description
- H1 containing the asset name
- short plain-English asset explanation
- why-it-matters section
- history teaser
- major-player teaser
- market driver cards
- risk cards
- monitoring/research section
- conversion action
- structured internal links to related public pages
- source and review panel showing where the profile is anchored

Public pages are allowed to summarize. Paid pages are not allowed to stay summarized.

Public CTA language must be calm and credible:

- "Learn how to study assets like this inside Lurnava."
- "Train through structured lessons, guided practice, and certification checks."
- "Build market understanding before making trading decisions."

Do not imply live trade advice, assured outcomes, or financial promises.

## Paid Page Required Sections

Every paid page must include these tabs or equivalent panels:

1. Overview
2. Deep Identity
3. Named Participants
4. Holder, Exposure, and Flow Map
5. Market Structure
6. Drivers and Regimes
7. Historical Timeline
8. Risk Map
9. Research Routine
10. Related Lessons and Strategies
11. Source Pack

The current `Overview`, `Drivers`, `Participants`, `History`, `Correlations`, `Risks`, `Routine`, and `Sources` tabs are the minimum scaffold. The next version must expand them or add tabs so the paid workspace can hold the full standard above.

## Data Model Requirements

The AssetProfile model must support these fields or equivalent structured sections:

- originStory
- authorityOrFounders
- majorParticipants
- holderExposureMap
- namedHoldings
- exposureAmounts
- reserveAmounts
- sourceAsOfDate
- sourcePublishedAt
- retrievedAt
- freshnessStatus
- marketStructure
- driverRegimes
- historicalTimeline
- riskMap
- sourceBackedClaims
- researchRoutine
- lessonConnections
- strategyConnections
- reviewNotes

Do not store deep paid research as one long paragraph. Use arrays of structured records so the UI can render tables, cards, timelines, and workspace panels.

Suggested holding/exposure record shape:

- `entityName`
- `entityType`
- `assetOrInstrument`
- `amount`
- `unit`
- `estimatedUsdValue`
- `exposureType`
- `asOfDate`
- `sourcePublishedAt`
- `retrievedAt`
- `sourceTitle`
- `sourcePublisher`
- `sourceUrl`
- `freshnessStatus`
- `whyItMatters`
- `limitations`

The UI must show dates next to holding amounts. A holding amount without an as-of date is not publishable in the paid workspace.

## Validation Standard

The validator must eventually check more than presence.

Required automated checks:

- every ready asset has a public route and paid route
- public profile has required sections
- paid profile has required sections
- paid profile has more depth than public profile
- named participant count passes by asset class
- named holding or exposure records pass when public data exists
- each holding amount includes unit, as-of date, retrieved date, source URL, and freshness status
- stale holding data is labeled instead of presented as current
- historical event count passes by asset class
- source count passes by asset class
- no unsupported category-only participant list
- restricted wording scan passes
- asset-language rules pass
- no crypto/gold pip language
- no forex asset missing pair/session/spread language where appropriate
- TypeScript passes
- production build passes
- sampled responsive browser checks pass

Suggested depth thresholds:

- public profile: at least 2 sources, 4 drivers, 3 risks, 4 history/player teaser items combined
- paid crypto profile: at least 4 sources, 6 named participants, 6 drivers, 6 history events, 5 risks
- paid forex profile: at least 4 sources, 6 named participants, 6 drivers, 6 history events, 5 risks
- paid gold profile: at least 5 sources, 6 named participants, 6 drivers, 8 history events, 6 risks

## Writing Standard

Write like a serious teacher speaking plainly.

Use:

- short paragraphs
- concrete nouns
- names of real institutions when verified
- simple cause-and-effect explanations
- asset-specific examples
- calm confidence
- direct warnings where needed

Avoid:

- hype
- vague market slogans
- category-only filler
- long blog-style prose blocks
- unsupported claims
- promises about outcomes
- fake precision

## SEO Standard

Public pages should target useful search intent, not search-engine stuffing.

Each page should support queries like:

- "What is Bitcoin?"
- "Why does gold move?"
- "What moves the US dollar?"
- "How does Ethereum work?"
- "What affects Solana price?"

Each page must include:

- one clear H1
- descriptive H2 sections
- readable URL slug
- metadata title under 70 characters when practical
- metadata description under 160 characters when practical
- internal links to related assets and Lurnava training pages
- JSON-LD WebPage or FAQ structured data when useful

## Quality Checklist

An asset profile is complete only when:

- public copy is asset-specific
- paid copy is much deeper than public copy
- named participants are concrete and source-backed
- asset drivers are not generic across unrelated assets
- risks are asset-specific
- history is asset-specific
- CTA is conversion-oriented without overpromising
- page layout feels like a landing page or platform, not a blog
- source/review fields are present
- validation script passes
- TypeScript passes
- production build passes
- responsive browser checks pass at mobile, tablet, and desktop widths

## Execution Order

1. Lock this standard.
2. Update the AssetProfile data model to hold deep paid research.
3. Update the Asset Lab UI to display the expanded paid sections.
4. Upgrade 3 proof assets first: Bitcoin, US Dollar, and Gold.
5. Run validator, TypeScript, build, and responsive browser checks.
6. Review those 3 with the user.
7. Upgrade the remaining 68 assets in controlled batches only after the proof set is approved.
