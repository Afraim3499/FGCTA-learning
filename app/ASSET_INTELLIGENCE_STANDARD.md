# Lurnava Asset Intelligence Standard

This file is mandatory reading before creating, editing, validating, or publishing any Asset Intelligence profile, public market page, or paid Asset Lab page.

The goal is not to publish market articles. The goal is to build a clear, trustworthy asset education system that helps a viewer understand what an asset is, why it matters, what moves it, and how Lurnava studies it inside a structured training environment.

## Product Rule

Asset pages are not blog posts.

Public pages must feel like landing pages:

- clear first screen
- strong asset identity
- fast answers
- structured proof of research
- no long essay wall
- clear conversion action
- visible reason to trust Lurnava

Paid pages must feel like a platform:

- dashboards, tabs, panels, tables, timelines, and research routines
- useful operational detail
- connections to lessons, strategies, risks, and market context
- no decorative filler

## Coverage Model

Lurnava uses a curated asset universe, not a live external API list.

- Crypto: 50 manually reviewed assets.
- Forex: 20 manually reviewed currency markets.
- Gold: always included.
- Review cadence: monthly.
- New assets begin as `planned` until public and paid profiles pass validation.
- Archived assets should remain accessible if users have existing links.

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

## Public Page Standard

Every public asset page must answer:

1. What is this asset?
2. Why do market participants care about it?
3. What usually moves it?
4. Who or what influences it?
5. What risks should a learner understand first?
6. How does Lurnava monitor this market?
7. What should the visitor do next?

The public page must include:

- SEO title and meta description.
- H1 containing the asset name.
- short plain-English asset explanation.
- "why it matters" section.
- market driver cards.
- risk cards.
- monitoring/research section.
- conversion CTA.
- structured internal links to related public pages.
- a source and review panel showing where the profile is anchored.

Public CTA language must be calm and credible:

- "Learn how to study assets like this inside Lurnava."
- "Train through structured lessons, guided practice, and certification checks."
- "Build market understanding before making trading decisions."

Do not imply live trade advice, assured outcomes, or financial promises.

## Paid Asset Lab Standard

Every paid asset profile must include these tabs or equivalent panels:

1. Overview
2. Market Drivers
3. Key Participants
4. Historical Events
5. Correlations
6. Risk Map
7. Research Routine
8. Related Lessons and Strategies

The paid page must be useful even if the learner never leaves the platform. It should explain:

- what to monitor
- why it matters
- how the asset behaves in different regimes
- what confirms or weakens a thesis
- which institutions, whales, issuers, validators, central banks, or companies matter
- which historical events shaped the asset
- which Lurnava lessons and Strategy Lab items connect to it
- which official or high-authority sources support the profile

## Source Standard

Nothing can be fabricated.

Every ready asset must include at least two credible sources, except when a direct official source is the only relevant primary reference and the exception is documented.

Preferred sources:

- official project, issuer, foundation, central bank, exchange, or market-infrastructure documentation
- regulator, central bank, or recognized industry body research
- primary transparency, reserve, protocol, or technical documentation

Do not use casual social posts, anonymous summaries, or SEO content farms as source anchors.

When a fact changes often, write it as something Lurnava monitors instead of hardcoding a number.

## Writing Standard

Write like a serious teacher speaking plainly.

Use:

- short paragraphs
- concrete nouns
- simple cause-and-effect explanations
- asset-specific examples
- calm confidence
- direct warnings where needed

Avoid:

- hype
- vague market slogans
- generic "this asset is volatile" filler
- long blog-style prose blocks
- unsupported claims
- promises about outcomes

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
- paid copy is deeper than public copy
- asset drivers are not generic across unrelated assets
- risks are asset-specific
- CTA is conversion-oriented without overpromising
- page layout feels like a landing page or platform, not a blog
- source/review fields are present
- validation script passes
- TypeScript passes

## Execution Task List

1. Create this standard.
2. Create the curated asset universe and ready-profile data model.
3. Build public market landing and asset pages.
4. Build paid Asset Lab landing and asset detail pages.
5. Add validation for counts, copy depth, banned wording, routing, and tab coverage.
6. Launch a pilot set first: Bitcoin, Ethereum, Solana, US Dollar, Euro, and Gold.
7. Review the pilot visually and textually.
8. Batch the remaining crypto and forex profiles only after the pilot standard is approved.
