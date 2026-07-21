# Redesigning a shopping app for the Chinese market

> **Draft status:** New case study, drafted as standalone markdown first.
> Structured so it maps 1:1 onto the `cases` array in `js/data.js`
> (tldr, sections, framework, figures, result, limitations/opportunities).
> Figure lines are placeholders in the same style as the other cases.
>
> **This is a hypothetical case study.** No client, no shipped product.
> It exists to show how I approach a market where every Western design
> default gets challenged. The case study says so openly, in the intro
> and in the limitations.

---

## Meta (for data.js)

- **slug:** `china-redesign`
- **title:** Redesigning a shopping app for the Chinese market
- **subtitle:** A hypothetical case study in unlearning Western design defaults
- **company:** Concept project
- **year:** 2026
- **role:** Solo · Research, strategy, UI
- **team:** Solo concept, built as a design exercise
- **duration:** Self-paced concept sprint
- **tags:** Localization, UX strategy, Visual design, Research

### Impact cells

| Label | Value | Note |
| --- | --- | --- |
| Format | Concept | hypothetical project, no client behind it |
| Key decisions | 5 | each paired with a testable hypothesis |
| Real users | 0 | and the case study is honest about it |

---

## TL;DR

What would it take to bring a European shopping companion app (reviews, buyer protection, price alerts) to China? Not a translation job: a redesign. I took a fictional but realistic app and worked through the five decisions that actually change: how the product enters the market, how much information a screen carries, what "trust" looks like, how identity and payment work, and what the visual language signals. Every decision is paired with the hypothesis I would test and how I would measure it. This is a hypothetical case, so the case study is upfront about what it can claim (a defensible plan) and what it cannot (results).

---

## Situation

*(kind: section)*

Every case study in this portfolio ends with a limitations card. This one starts with the biggest limitation there is: the project is hypothetical. There is no client, no shipped app, no user data. What there is: a question I wanted to answer properly instead of hand-waving it in an interview. Take a European shopping companion app (product reviews, buyer protection, price alerts) and bring it to China. What actually changes?

The honest answer is: almost everything. And that's what makes it a useful exercise. The Chinese app ecosystem evolved separately from the Western one, at higher speed and around different platforms. A designer who ships their Western layout with Chinese strings has not localized anything; they have shipped a foreign product with local labels. So I treated this like a real discovery phase: desk research first, then five concrete design decisions, each with a hypothesis and a measurement plan attached. The deliverable is the reasoning, not the launch.

## Research before pixels, even hypothetically

*(kind: section)*

I couldn't run interviews in Shanghai, so I did the next best thing: I studied the apps that Chinese users already trust with their daily lives. Taobao, Pinduoduo, Meituan, Dianping, and WeChat are not just competitors in this space; they are the design conventions. Whatever they do consistently is what "normal" feels like to the user I'd be designing for.

Three patterns kept repeating across all of them. First, density is a feature: home screens carry campaigns, entry points, social proof, and live content all at once, and users navigate that density fluently. Second, everything routes through the super-app ecosystem: WeChat for identity and sharing, WeChat Pay and Alipay for money, mini-programs instead of app downloads for anything that isn't a daily habit. Third, commerce is social and live by default: group buying, streamer recommendations, and instant chat with a shop are baseline expectations, not features.

I also mapped the technical floor that Western teams tend to discover too late: no Google services (no Play Store, no Google Maps, no Firebase push), Android distributed across a dozen local app stores, an ICP filing needed for hosting, and real-name verification tied to phone numbers. None of this is a design detail. All of it shapes the design.

*(kind: figure)* **Fig. 1 - Convention map.** Placeholder: side-by-side of a Western product page and its Taobao equivalent, annotated with the density, social-proof, and chat patterns that repeat across the ecosystem.

## Decision 1: Enter as a WeChat mini-program, not an app

*(kind: section)*

The first decision was the biggest, and it isn't a screen: it's the container. A standalone app means fighting for downloads across fragmented Android stores, building push and maps without Google, and asking users to trust an unknown foreign brand with an install. A WeChat mini-program means zero install friction, identity and payment already solved, and sharing into group chats as the primary growth loop.

So the concept enters as a mini-program first. The standalone app doesn't disappear; it becomes the retention layer you earn later, once usage justifies it. That inverts the European playbook, where the app is the product and the web is the funnel. Here the ecosystem is the funnel, and the app is a graduation.

**Hypothesis:** activation cost per user is meaningfully lower via mini-program than via app-store acquisition. **How I'd measure:** cost per activated user and D7 return rate, mini-program cohort versus a small paid app-install cohort.

## Decision 2: Redesign the home screen for density

*(kind: section)*

My European design instinct says: whitespace, one primary action, progressive disclosure. In the Chinese ecosystem that same restraint reads as empty, and empty reads as unestablished. When every trusted app greets you with campaigns, badges, and live modules, a minimalist screen doesn't signal calm; it signals that nothing is happening here.

So the home screen carries more, deliberately: a campaign banner, category grid, social-proof stream, and a live entry point above the fold. The discipline shifts from "how little can this screen hold" to "how clearly can a dense screen still read". Hierarchy, alignment, and a strict component grid do the work that whitespace does in the European version. Density is not the absence of design; it's a harder version of it.

*(kind: framework)* **Translated, not transplanted.** What each Western default became:

| Western default | Chinese-market version | Why |
| --- | --- | --- |
| Minimalist home | Dense, modular home | density signals a live, trusted marketplace |
| Email + password | Phone number + SMS, WeChat login | real-name norms, no email habit |
| Card checkout | WeChat Pay / Alipay | cards are the exception, wallets the rule |
| Third-party trust badge | Platform guarantee + social proof | trust flows from ecosystem and people |
| Support ticket | Instant chat, human within minutes | chat-first service is the baseline |

## Decision 3: Translate the trust model

*(kind: section)*

This one cut closest to the product's identity. A European trust badge works because an independent third party vouching for a shop means something there. In China, trust runs through different channels: the platform's own guarantee (refund policies enforced by Taobao or JD), visible social proof at scale, and people, from friends in a group chat to streamers whose recommendations move real volume.

So the trust product had to be rebuilt, not shipped. In the concept, the abstract badge steps back, and three concrete signals step forward: buyer-protection framing as a platform-style guarantee ("refund without discussion"), review volume and recency shown prominently with photos first, and a share-to-group-chat flow designed as a first-class feature rather than an afterthought, because a recommendation forwarded by a friend is worth more than any certificate.

**Hypothesis:** guarantee framing plus social proof outperforms badge framing on purchase confidence. **How I'd measure:** conversion on the product page in an A/B test, plus a short intercept survey on perceived risk.

## Decision 4: Identity, payment, and the technical floor

*(kind: section)*

Some decisions look technical but are really trust decisions in disguise. Login is phone number and SMS code, or one-tap WeChat authorization; there is no email field anywhere in the flow, because email is not how people identify themselves. Payment is WeChat Pay and Alipay, with card entry demoted to an edge case. Hosting sits behind an ICP filing on a mainland CDN, because a product that loads slowly from Frankfurt is indistinguishable from a product that doesn't work.

The design consequence: flows get shorter. No password creation, no card form, no address book to build from scratch (WeChat authorization can provide profile basics). The European version of this app asks a new user for five things before first value; the concept asks for one tap and a phone number. That's not a compromise forced by the ecosystem. It's better onboarding, and it made me question how much of the European flow was ever necessary.

## Decision 5: A visual language that reads locally

*(kind: section)*

Color and type carry different meanings here, and getting them wrong is the fastest way to look foreign. Red is not an error or a warning; it's celebration, luck, and commerce, which is why every major shopping app leans into it during campaigns. The concept moves red from the "destructive action" slot into the promotional layer, and rebuilds the semantic palette around that shift. Number symbolism gets a pass too: pricing and campaign mechanics avoid leaning on 4, and 8 shows up where a lucky number does no harm.

Typography is its own project. Chinese text has no italics, no capitalization for emphasis, and much higher stroke density per glyph, so hierarchy has to come from size, weight, and color alone. The concept uses a CJK system stack (PingFang on iOS, with Source Han Sans as the fallback), larger minimum sizes than the Latin version, and looser line height. Latin numerals and CJK glyphs get baseline-aligned deliberately, because mixed-script price tags are where sloppy typography shows first.

*(kind: figure)* **Fig. 2 - Semantic palette shift.** Placeholder: the European color system next to the Chinese-market version, red moving from destructive to promotional, with the type scale comparison underneath.

## Outcome, and how I'd know if it worked

*(kind: result)*

The concept produced a decision log (the five decisions above, each with its rationale and rejected alternatives), a home and product-page flow built on the dense grid, and the translated trust model. What it did not produce is evidence, and a hypothetical case study should not pretend otherwise.

So instead of results, this case ends with a test plan. Before writing production code I would run moderated sessions with native-speaker participants through a local research panel, testing three things: does the density read as trustworthy rather than cluttered, does the guarantee framing land, and does the mini-program flow feel native. After launch, the hypotheses above come with their metrics attached: activation cost by channel, D7 retention, product-page conversion by trust framing. The plan is falsifiable on purpose. If Shanghai users tell me the dense home screen reads as noise, the concept was wrong, and I'd rather learn that in a usability session than in a funnel.

What I actually took from the exercise: my design defaults are not principles, they are habits with a locale attached. Whitespace, email login, the sacred single CTA: all of them are conventions that happen to be mine. The useful skill isn't knowing the Chinese conventions (those I can research); it's noticing which of my own are conventions at all.

## Limitations

*(kind: limitations - subtitle: same academia line as the other cases)*

1. **Hypothetical, start to finish.** No client, no shipped product, no user data. Every claim in this case is a researched hypothesis, not a validated result. That's also the point of the exercise, but it caps what the case can prove.
2. **Desk research, secondhand.** The convention map comes from studying live apps, pattern libraries, and localization literature, not from field research in China. A single week of moderated sessions with native speakers would likely overturn at least one of the five decisions.
3. **No native speaker on the team.** I evaluated Chinese-language screens as a non-reader, using translated strings. Typographic and tonal judgments (does this copy read as trustworthy or as translated?) need a native reviewer before any of this ships.
4. **Regulatory depth is indicative.** ICP filing, real-name verification, and data-residency requirements are mapped at the level a designer needs, not at the level a launch needs. Legal counsel comes before any real market entry, and next time I'd bring that expertise in during the concept phase, not after it.

## Opportunities

*(optional back face)*

1. **Validate with a local panel.** Run the concept through a Chinese research panel (moderated sessions plus an unmoderated first-click test) and publish the update: which of the five decisions survived contact with real users.
2. **Prototype the mini-program.** WeChat's developer tools make a working mini-program prototype feasible without a company entity behind it. A clickable build would turn the flow claims into something testable.
3. **A second market as a control.** Running the same exercise for Japan or South Korea would show which decisions are China-specific and which are simply non-Western. That comparison would sharpen the framework into something reusable.
4. **Turn the method into a checklist.** The five decision areas (container, density, trust, identity, visual language) generalize into a market-entry design audit. Written up properly, it becomes a tool other designers can run, not just a case study.
