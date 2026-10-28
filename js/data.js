window.LV_DATA = {
  identity: {
    name: "Lisanne Visser",
    handle: "lisanne.design",
    role: "Senior Product Designer",
    positioning:
      "Generalist product designer with a research & experimentation spine",
    location: "Berlin, Germany",
    email: "mail@lisannevisser.com",
    shortBio:
      "I turn messy product problems into evidence-backed design. Research, experimentation, and systems thinking sit at the center of the work; I ship end-to-end, from discovery to pixels to post-launch metrics.",
    longBio: [
      "I didn't start in design. I started in curiosity. A communications degree, a first UX role at an agency, and a slow realization that the questions I loved asking (why do people do what they do? what makes a product feel effortless?) were exactly the questions good design answers.",
      "Five years in, I've designed end-to-end across B2B logistics, consumer trust, quantum computing tools, and internal tooling. Research and experimentation hold the work together: I've run the first focus group in a 25-year-old company, introduced heatmaps that reshaped a brand, and turned a price set on intuition into a 15% revenue lift.",
      "The label 'growth designer' undersells it. The work that excites me is the full loop, from a fuzzy strategic question to shipped UI to measured outcome, with a design system and a research habit left behind afterward."
    ],
    credo: [
      "Research before pixels",
      "Measure what matters",
      "Ship the 80, refine the 20",
      "Systems outlive screens"
    ]
  },

  // Same rows as the About page and the Bold Type home. Not rendered from
  // here yet (About hard-codes its rows), kept in sync so nothing quotes it.
  career: [
    { role: "Senior Product Designer", org: "Trusted Shops", period: "2025 — Now", city: "Berlin", note: "Consumer trust, pricing, experimentation, research culture" },
    { role: "Product Designer", org: "Trusted Shops", period: "2023 — 2025", city: "Berlin" },
    { role: "Product Designer", org: "Aqora", period: "2023 — Now", note: "Quantum computing hub, product design, field research" },
    { role: "Product Designer, freelance", org: "Canva, Funke and more", period: "2020 — Now", note: "Design systems, research, UX/UI across industries" },
    { role: "Product Designer", org: "Cargoboard", period: "2022 — 2023", city: "Berlin", note: "B2B logistics, design system, IA redesign" },
    { role: "Quality Assurance Analyst", org: "TikTok", period: "2020 — 2022" }
  ],

  clients: ["Trusted Shops", "Cargoboard", "Funke", "TikTok", "Canva", "Aqora", "Quantinuum", "Autarc", "HALE.NOW", "Dr. Vivien Karl"],

  // Brand files from each company. Credited on the imprint page (Logos).
  clientLogos: {
    "Trusted Shops": "images/logos/trusted-shops-wordmark.svg",
    Cargoboard: "images/logos/main_logo_color_black.svg",
    Funke: "images/logos/Funke-Mediengruppe-Logo.png",
    TikTok: "images/logos/tiktok-wordmark.png",
    Canva: "images/logos/canva-wordmark.svg",
    Aqora: "images/logos/Wortmarke 1C.svg",
    Quantinuum: "images/logos/quantinuum-wordmark.svg",
    Autarc: "images/logos/autarc-wordmark.svg",
    "HALE.NOW": "images/logos/hale-now-wordmark.svg",
    "Dr. Vivien Karl": "images/logos/dr-vivien-karl.png"
  },

  // Optical size per logo, as a factor of the strip's logo height. Wide,
  // flat wordmarks run smaller, compact or stacked ones larger, so they all
  // carry about the same weight. Where it can't be even, the big brands
  // (TikTok, Canva, Funke) get the extra size.
  clientLogoScale: {
    "Trusted Shops": 1.3,
    Cargoboard: 0.78,
    Funke: 1.4,
    TikTok: 0.88,
    Canva: 1.12,
    Aqora: 0.72,
    Quantinuum: 0.95,
    Autarc: 0.74,
    "HALE.NOW": 0.62,
    "Dr. Vivien Karl": 0.38
  },

  cases: [
    {
      slug: "pricing",
      title: "Designing Product Prices with Psychology",
      subtitle: "Two rounds of pricing experiments on a core revenue driver",
      company: "Trusted Shops",
      year: "2024",
      role: "Research lead · Hypothesis design",
      team: "With 1 conversion manager (data)",
      duration: "3 months · 2 A/B tests",
      impact: [
        { label: "Revenue", value: "+15%", note: "estimated annual lift" },
        { label: "Variants tested", value: "7", note: "across 2 rounds" },
        { label: "Churn impact", value: "0%", note: "no significant rise" }
      ],
      tags: ["Research design", "Pricing", "Behavioral Science"],
      coverPaletteHue: 22,
      coverImage: "images/pricing/cover-mockup.jpg",
      hideHero: true,
      tldr: "A price nobody had touched since launch, sitting on one of the company's biggest revenue drivers. 9,90 € for buyer protection, and it had quietly carried the product through years of growth. The product had grown up a lot since then, so I took the opportunity to put the price on firmer footing. I ran two rounds of A/B tests, seven variants in total, each built on a different principle from pricing psychology. 15,99 € won round one on revenue per user. Then 12,00 € took round two once we added customer-lifetime-value forecasting, and that became the new price.",
      story: [
        { kind: "section", title: "Situation", body: "All the way back to launch several years ago, 9,90 € was the price for buyer protection. It's one of the company's core revenue drivers, and that price had served it well. But market and product had evolved, and the price hadn't moved with it. So the question more or less asked itself: is 9,90 € still right today? And if it isn't, what does pricing-psychology research suggest instead?" },
        { kind: "section", title: "Approach", body: "Here's the thing people might miss about price: **how a number is written and framed can move revenue as much as the number itself.**\n\nSo when my colleague Daniel, a Conversion Manager, and I decided to start the project, it was important to me not to run a test that only asked \"is this number bigger or smaller?\". Hence, I built several variants from specific principles in pricing psychology, which turned the question into: which mechanism might actually change behavior?\n\nBecause we framed the project as an experiment, it kept the stakes low across the team (any result, win or lose, was useful input for the next round) and it made a change to a core revenue driver feel safe to try for all stakeholders. Low risk, high potential!" },
        { kind: "figure", hue: 22, src: "images/pricing/upgrade-page-mockup.jpg", alt: "The buyer-protection checkout page in a browser window on a soft orange gradient. Headline Aktivieren Sie Ihren Käuferschutz, then two plans: Käuferschutz PLUS at 12,00 € per year, marked as recommended and selected, and Käuferschutz Single at 4,99 € one-off. On the right, a summary box with the 12,00 € total and a blue Zahlungspflichtig bestellen button.", caption: "Fig. 1 - A variant of the buyer-protection page at the new price: 12,00 € for PLUS, next to the one-off Single option." },
        { kind: "framework", title: "Hypotheses", body: "Here is a snippet of the hypotheses we tested and some of the rationales behind them:", items: [
          { k: "Charm / odd", v: "15,99 €", effect: "Reads as a deal" },
          { k: "Prestige / even", v: "12,00 €", effect: "Reads as quality" },
          { k: "Round", v: "10,00 €", effect: "Lowest cognitive friction" }
        ]},
        { kind: "section", title: "Method", body: "We tested seven variants between 10 € and 15 €, each tied to a specific psychological principle.\n\nThe metric mattered as much as the variants: We measured revenue per user, not just transaction rate. A higher price can convert slightly fewer people and still bring in more money overall, so transaction rate on its own would have hidden the variants that were actually winning.\n\nAnd because a headline result can hide an uneven one, we broke the numbers down: new versus returning users, free-plan holders, and the order amount from the shop that sent them. All to ensure no single segment was carrying the effect." },
        { kind: "result", title: "Outcome", body: "15,99 € won round one on revenue per user, with a 99.9% win probability.\n\nFrom here, it got more interesting. We ran a second round, stretched the price range up to 20 €, and layered customer-lifetime-value forecasting on top of every variant. With long-term value in the picture, the winner changed: 12,00 €, one of the original hypotheses from round one, came out on top and shipped as the new price.\n\nThe part I was most nervous about turned out fine. We watched withdrawals and churn over a year and longer, and neither moved in any meaningful way. Annualized, the lift was one of the larger contributions to the team's growth that year. [PLACEHOLDER · drop in a relative share or qualitative line once cleared for publication]\n\nThe best outcome wasn't the number, though. The experiment setup has since become the default way consumer pricing gets changed at Trusted Shops." },
        { kind: "limitations",
          defaultFace: "opportunities",
          title: "Limitations",
          subtitle: "In academia, where I come from, it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Quantitative test design", body: "Both rounds leaned on behavioral A/B data and CLV modeling. Qualitative price-sensitivity research (Van Westendorp, conjoint, depth interviews) would have triangulated the result, but it wasn't part of this scope." },
            { title: "CLV is a forecast", body: "The winning price came from a customer-lifetime-value model layered on top of the A/B data, not from multi-year observed lifetimes. Post-ship monitoring is starting to confirm the model, but the original plan was partly model-driven." },
            { title: "Single product surface", body: "Only the buyer-protection upsell got tested. Other pricing levers (subscription tiers, B2B pricing) weren't in scope and may behave differently." },
            { title: "Price tested, mechanisms bundled", body: "Each variant could combine several related mechanisms (15,99 € is both charm-priced and odd-ending, for example). That's methodologically consistent, since the mechanisms can't be varied independently, but the test confirms which price won, not which mechanism drove it." }
          ],
          opportunities: [
            { title: "Van Westendorp survey", body: "I'd proposed a price-sensitivity survey for round one, and I'd still run one on a future round. It surfaces the band users read as fair, cheap, or too expensive, and could sharpen where to test next with more direct user feedback included." },
            { title: "Conjoint on price / feature trade-offs", body: "Users trade price against features whether they say so or not. A conjoint or MaxDiff study would surface which feature bundles justify which price, useful input for future tier design. Another research method I would like to incorporate next time." },
            { title: "Monthly subscription tier", body: "Follow-up research I ran here surfaced clear demand for a monthly model. It's on the roadmap as a follow-on test of price and cadence together." },
            { title: "Lower-cover entry tier", body: "More research surfaced demand for a lower-cover, lower-price option. A natural candidate for the next round of pricing experiments." }
          ]
        }
      ]
    },
    {
      slug: "ai-workflow",
      title: "Speeding Up Test Prep Cycles: 2 Weeks to 2 Days",
      subtitle: "Rebuilding the conversion-test workflow around AI design tools",
      company: "Trusted Shops",
      year: "2025",
      role: "Owner · End-to-end",
      team: "Solo, with conversion managers as early adopters",
      duration: "Ongoing since May 2025",
      impact: [
        { label: "Cycle time", value: "−85%", note: "2 weeks → 2 days" },
        { label: "Dev dependency", value: "0", note: "tests run without engineering" },
        { label: "Adoption", value: "Org-wide", note: "spread beyond my team" }
      ],
      tags: ["Design Ops", "AI workflows", "End-to-end"],
      coverPaletteHue: 265,
      coverImage: "images/ai-workflow/cover.svg",
      tldr: "Every conversion test our team wanted to release waited up to two weeks for the same reason: a developer had to build it inside a sprint. When Figma Make shipped in May 2025, I immediately rebuilt the workflow so conversion managers could visualize their own ideas inside design-system-aware templates. With a designer QA gate at min. 90% brand compliance and a refinement loop for the winners the cycle from idea to live test went from two weeks to two days maximum, and the setup spread past my team into the default way conversion tests get built.",
      story: [
        { kind: "section", title: "Situation", body: "Every conversion test we ran moved through the same chain: someone has an idea, a designer mocks it up, a developer builds it inside a sprint, the test goes live. Four steps, and one of them set the pace for all the others.\n\nThe developer step owned the calendar. Not because the work was hard (most of these were small, lightweight changes) but because it had to wait for a sprint to have room.\n\nFor a team whose whole job is learning fast, that's a strange place to be: the bottleneck wasn't the thinking or the design, it was the queue." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/test-cycle-before.svg", srcNarrow: "images/ai-workflow/test-cycle-before-narrow.svg", alt: "A FigJam-style board of the old test cycle. Four sticky notes in a loop: Idea (conversion manager), Mockup (designer), Build (developer, waiting for the next sprint with room) and Live test (conversion manager). The Build step is circled with the note: the queue sets the pace. A brace over the row reads: up to 2 weeks, idea to live test.", caption: "Fig. 1 - The old conversion-test cycle. Four handoffs, with the developer step waiting on sprint capacity." },
        { kind: "section", title: "Approach", body: "Here's the thing I kept coming back to: **the slowest part of a conversion test was never the design, it was waiting for someone else to build it.**\n\nI'd been watching AI design tools for a while, half-curious, half-skeptical. At the time, AI could do a lot, but in terms of design it was lagging. So when Figma Make shipped in May 2025, I tested it on release day with one question: if our design system is wired in, does it produce good enough results so that a designer or conversion manager can visualize their own idea on a codebase? And beyond that: Would we be able to launch a test without a developer in the loop?\n\nThe answer was close enough to yes that I rebuilt the workflow around it. Not as a faster way to make mockups, but as a way to move production out of the bottleneck entirely and hand it to the people who have the ideas in the first place.\n\nI invited one of the conversion managers to test the workflow with me. We picked an experiment from the backlog that we found suitable. We picked an idea that was sitting on the shelf for a while: Adding a comparison table to the pricing page. The hypothesis behind it: a comparison table supports product understanding and increases the conversion rate by 5%. Another reason why we picked a table was that tables are tedious to build in HTML and CSS. It marked a perfect test object to see how AI could support us with a developer independent workflow." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/tool-comparison.jpg", alt: "A FigJam board titled AI Prompt Tools: The same basic prompt and their results. Three generated Trusted Shops pages side by side, labeled Figma Make, Lovable and Bolt, with a sticky note on time invest (5 min) and why the Figma Make result is more cohesive. A heart marks the Figma Make result.", caption: "Fig. 2 - The same basic prompt in Figma Make, Lovable and Bolt, May 21, 2025. Figma Make came out the most cohesive, because it builds on a design system (shadcn) by default." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/table-first-prompt.jpg", alt: "A plain feature comparison table in German with a Basic and a PLUS column (699 € per year), listing features like trust badge display, buyer protection amount, verified reviews and API access with checkmarks and crosses.", caption: "Fig. 3 - The first prompt result for the comparison table: correct structure, not yet our design system or our product." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/pipeline-now.svg", srcNarrow: "images/ai-workflow/pipeline-now-narrow.svg", alt: "A FigJam-style board of the new pipeline. Idea and Template (conversion manager), a diamond for the designer QA gate at min. 90% brand compliance that sends weaker variants back to the template, Live test (conversion manager) and Refinement of winners to 100% (designer). Every result loops back to the next idea. A brace over the row reads: 2 days max, no developer in the loop.", caption: "Fig. 4 - The pipeline that replaced the sprint dependency: idea, template, designer QA gate, live test, refinement. Each stage with one owner and one job." },
        { kind: "section", title: "Method", body: "Two decisions did the heavy lifting.\n\nThe first was templates. Rather than letting everyone generate some random version of a page per test, I built 1:1 replicas of our live pages as Figma Make templates as soon as the feature became available. Each one bakes in the prompt instructions that keep output consistent: automatic test naming, export conventions, role awareness. Only I, as the team's designer, manage the templates. Everyone else works inside them. That's what keeps a fast workflow from turning into a mess.\n\nMoreover, using a template saves tokens on context. And additionally, I have added a prompt to the template that lets Figma Make know about the users' intentions for exporting to Kameleoon, our A/B testing tool. As per default, Figma Make writes prototypes in React. For Kameleoon, however, we need pure HTML + CSS.\n\nThe second was the 90% rule. In experimentation, the speed of learning matters more than pixel perfection. So we ship at a minimum of 90% brand compliance after a designer QA, enough that nothing embarrassing goes out, and we refine the winners to 100% before they roll out for good. The 90 isn't a corner cut under pressure. It's a deliberate gate: good enough to learn from, honest about what a test actually needs. Technically, it does not only mess with design cohesiveness, but also with the method of A/B testing, but we decided to compromise for speed. We monitor each implementation and general performance on a daily basis. And in a time where businesses request fast AI solutions, committing on temporary design inconsistencies felt like a reasonable trade-off." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/table-live-test-1.jpg", alt: "A German membership comparison table titled Mitgliedschaftsoptionen vergleichen, comparing Käuferschutz BASIC (free) with Käuferschutz PLUS (12 € per year) across coverage duration, valid shops and coverage amounts, with green checkmarks and grey crosses.", caption: "Fig. 5 - The first live test, refined in Figma Make and Kameleoon. The table didn't win, but the results were promising." },
        { kind: "figure", hue: 265, src: "images/ai-workflow/table-live-test-2.jpg", alt: "A German comparison table titled Vergleich: Mit vs. Ohne Käuferschutz. A highlighted green column for Käuferschutz PLUS shows checkmarks for every protection case, the column without buyer protection shows red crosses.", caption: "Fig. 6 - The second iteration went live without design or developer involvement, because it met the 90% rule. If it wins, design does the final pass." },
        { kind: "result", title: "Outcome", body: "With the new workflow in place, idea to live test went from up to two weeks to maximum of two days. That was the number I was after. We got extremely developer-independent, and our conversion managers even removed design as a bottleneck. Being able to visualize their ideas and hand a wireframe to design enables us to work even more efficiently.\n\nThe part I didn't plan for was what happened next. PMs in other departments started picking up Figma Make. Other designers picked it up. The templates quietly became a single source of truth, sitting alongside our main Figma files as the place tests actually start.\n\nAnd my own role shifted. I went from executing designs to maintaining the system around them: owning the templates, holding the QA gate, deciding what ships at 90% and what earns the full pass. More tests through the pipeline means more of those calls land on my desk, and that's the part of the job that compounds. I'm still designing, but when it comes to simple A/B tests, my role has shifted noticeably. With Figma Make's connection to Figma design files, it's also easy to move ideas around and go from a coded prototype that doesn't quite work yet to a design file I can polish for better quality testing.\n\nIn January 2026, I presented the workflow in an internal tech talk ([slides as PDF](talks/ai-prototyping-figma-make.pdf)).\n\n[PLACEHOLDER · drop in an adoption number or a qualitative line once cleared for publication]" },
        { kind: "limitations",
          defaultFace: "opportunities",
          title: "Limitations",
          subtitle: "In academia, where I come from, it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Self-reported speed", body: "The two-weeks-to-two-days figure is a before/after on cycle time, not a controlled measurement. The old number is a typical-case floor, the new one a typical case, but neither is averaged over a tracked sample. This doesn't mean the number is wrong, it's a sustainable change we experience on a daily basis." },
            { title: "One tool, one product surface", body: "The workflow is built around Figma Make and our specific design system, proven on conversion tests at one company. The approach should generalize, but that hasn't been tested across tools or domains." },
            { title: "The 90% gate is a judgment call", body: "The brand-compliance bar is held by designer QA, mine in practice. It works because I set the standard; handing the gate to someone else would mean writing the standard down, not just holding it in my head." },
            { title: "Adoption described, not measured", body: "\"Org-wide\" captures spread, not a tracked adoption rate. I can name the teams that picked it up; I can't yet put a number on it." }
          ],
          opportunities: [
            { title: "Moving the pipeline onto Claude", body: "I'm currently working on bringing this process from Figma Make over to Claude, because the workflow is even cleaner to maintain there. Two things make the difference: Claude can be given read access to the repo, so templates stay anchored to the real codebase instead of a copy, and it writes native HTML and CSS on request, which is exactly what Kameleoon needs (no React-to-HTML conversion step)." },
            { title: "Template contribution model", body: "Right now I'm the only one who builds templates, which is a clean bottleneck but still a bottleneck. A lightweight way for others to propose templates, with a review gate, would scale it past me." },
            { title: "A written brand-compliance checklist", body: "The 90% rule lives in my judgment. Writing it out as an explicit checklist would let any designer hold the QA gate and make the standard auditable." },
            { title: "Close the loop back to dev", body: "Winning variants still get refined and rolled out by hand. A cleaner handoff from a winning Figma Make variant into the production codebase would shave off the last manual step." },
            { title: "Measure the pipeline", body: "Tracking tests-per-quarter, time-to-live, and win rate before and after would turn the \"−85%\" from an estimate into a tracked metric." }
          ]
        }
      ]
    },
    {
      slug: "research-culture",
      title: "Building research as an organizational capability",
      subtitle: "A continuous research practice, built from a zero-budget proposal",
      company: "Trusted Shops",
      year: "2023 — ongoing",
      role: "Research lead · Change management",
      team: "With the UX team lead, spreading outward",
      duration: "Year one hit 1.5× target",
      impact: [
        { label: "Target exceeded", value: "1.5×", note: "research methods / month" },
        { label: "Projects shipped", value: "10+", note: "from my team alone" }
      ],
      tags: ["Research ops", "Change management", "Behavioral data"],
      coverPaletteHue: 150,
      coverImage: "images/research-culture/focus-group.jpg",
      tldr: "There was no researcher, no budget, and no shared picture of who our users actually were. Teams optimized in isolation and trusted their gut. So I proposed something small enough that nobody could say no: one research method a month, picked by whatever question was loudest. Year one came in at 1.5× the target, gave the company its first sociodemographic data on its own users, and put the first focus group in 25 years in a room.",
      story: [
        { kind: "section", title: "Situation", body: "Let me paint a picture about where this started: A company with low UX maturity, no regular research, not even heatmaps. Teams working in silos, PMs launching features based on gut feeling, conversion managers shipping design ideas out of the blue, with no shared concept tying any of it together. Don't get me wrong, this is a normal situation for companies with undeveloped understanding of UX. But it leads to a pile of isolated wins that never added up to an experience anyone had designed on purpose. The user experience doesn't feel cohesive across touchpoints in the journey, but successful AB tests may suggest the product is getting more and more successful." },
        { kind: "section", title: "Framing", body: "Here is the thing about individual tests or launched features: they may be successful. But only a research practice wins in the long run.\n\nMy manager saw a need to get to know users for our team's work - to enhance AB testing - when I was hired. I made a simple proposal: One project a month, one method at a time. The topic chosen by whatever the business needed most that month. Not academic rigor for its own sake, just a rhythm teams could actually keep without a budget or a dedicated researcher. A lean, continuous research setup that didn't just serve our team but the whole consumer domain.\n\n**A practice you can sustain beats a perfect study you run once.** That was the whole bet." },
        { kind: "framework", title: "Cadence", body: "One backbone method, the rest rotating in by need.", items: [
          { k: "Monthly survey", v: "385+ responses", effect: "Statistical significance on rotating topics" },
          { k: "Heatmaps (Clarity)", v: "Always-on", effect: "Surfaced a dead-click issue on branded product names" },
          { k: "Interviews", v: "As-needed", effect: "Qualitative stories behind the numbers" },
          { k: "Focus group", v: "First in 25 yrs", effect: "Qualitative depth on a trust topic" }
        ]},
        { kind: "figure", hue: 150, src: "images/research-culture/focus-group.jpg", alt: "A bright meeting room set up for a focus group. Participants sit in small groups on chairs and wooden stools, some at a table with a laptop, others in conversation, while a moderator in a yellow shirt stands taking notes.", caption: "Fig. 1 - The first focus group in 25 years." },
        { kind: "section", title: "Evidence & Aftermath", body: "The setup worked well. It was maintainable and drew interest from different stakeholders. I was able to introduce new research methods to the company (the first focus group in 25 years!) and open research at touchpoints where the company was never able to get user feedback before. Then, pretty early on, the data did something useful: it disagreed with us.\n\nThe organization pictured its typical B2C user at around 50 years old. Several surveys I had launched at touchpoints I had made accessible said they were significantly older than that. A core user group that is at least 10 years older than the company had thought drew C-level interest, leading to even more research being requested. The UX team leadership saw a chance as well, and rolled out my setup for B2B facing teams as well.\n\nAnd then it stopped being my thing alone.\n\nThe framework was lifted out of our team to serve every consumer-facing team, with official sponsorship. We started to get budget, for conducting research and getting the tools we needed. B2B picked it up. Other designers started running research of their own. PMs began coming to me before a decision instead of after one, and started to actively request research.\n\nThis is the story of how I moved from \"the designer does some surveys\" to a capability the organization actually owns. It's a deliberate company choice to not hire a full-time researcher. But with the current setup, designers and PMs are now able to build product decisions on data. AB testing hypotheses are getting a backbone." },
        { kind: "section", title: "Democratization of Research", body: "And my favorite part: I use the situation to democratize research. With no dedicated research team, we need all hands on deck. I take advantage of the natural human curiosity to learn and grow and invite everyone to join research. Under the guidance of a trained expert, conversion managers, developers, anyone really, can join in on the fun. First they get a short intro, then they shadow, and then they run research on their own. Over time, I have seen people gain knowledge, critical thinking skills and experience, and now I have a bunch of colleagues that can do research on their own, or that I can turn to when I don't have enough capacity. And people love it. It's easy to tell how much everyone enjoys this opportunity. And it's not just fun, everything they learn from the interaction with users or the data they generate, they take back into their work, making the product work more user-centric from the start." },
        { kind: "limitations",
          title: "Limitations",
          oppositeTitle: "Opportunities",
          items: [
            { title: "Internal proxies, not lab studies", body: "Most decisions still lean on surveys, heatmaps, and live A/B tests rather than moderated usability research. It's fast and cheap, but a step removed from watching real users struggle." },
            { title: "Solo-led adoption", body: "I drove the rollout largely myself, alongside the UX team lead for later B2B adaption. Breadth came fast; depth in any single team depended on who picked it up. Overall awareness is always an area of improvement." },
            { title: "Dedicated research roles", body: "Several stakeholders have voiced a need for full-time research roles. The leadership has yet to make the decision. It's natural, since research has mostly long-term impact it doesn't come natural to understand its value for the business." },
            { title: "Touchpoint isolation", body: "With teams working in isolation and research driven by ambitious individuals, the company has yet to develop options to do research across the whole user journey." }
          ],
          opportunities: [
            { title: "Overcoming inertia", body: "Research can feel heavy in the beginning. When people have no experience with interviews, organizing them can feel overwhelming. Over time, I see this hurdle get lower and lower. This change, when people realize interviews can be done easily, is where the lean research setup really starts to shine." },
            { title: "Longitudinal tracking", body: "I'd like to re-run core surveys yearly to watch the user base shift, not just snapshot it once. Ideally, for all touchpoints across the journey." },
            { title: "Self-serve research kit", body: "Package the monthly cadence into templates so any team can run a method without me in the loop. AI is a great assistant here." },
            { title: "Tie research to outcomes", body: "Connect each method back to a shipped decision and its metric, so the practice's ROI is visible, not assumed. Make it a binding habit." }
          ]
        }
      ]
    },
    {
      // DRAFT · placeholders marked [PLACEHOLDER · ...]. Sits after the
      // first three cases so the home page teaser stays unchanged.
      slug: "illustrations-vs-icons",
      title: "Taking the Verdict Out of the Picture: When Less Emotion Sells More",
      subtitle: "An A/B test that swapped emotional illustrations for neutral icons on the payment form",
      company: "Trusted Shops",
      year: "2024 — 2025",
      role: "Hypothesis & design · Test iteration",
      team: "With 1 conversion manager (setup, analysis)",
      duration: "2 A/B tests · Nov 2024 to Feb 2025",
      impact: [
        { label: "Mobile conversion", value: "+7.54%", note: "icons vs. original, 98.95% significance" },
        { label: "Variants tested", value: "5", note: "across 2 rounds" },
        { label: "Shipped", value: "Feb 2025", note: "icons replaced the illustrations" }
      ],
      tags: ["Experimentation", "Visual language", "Behavioral Science"],
      coverPaletteHue: 340,
      tldr: "Our payment form explained buyer protection with three illustrated cards: a closed shop with a red cross, a wallet with a fly coming out, a broken parcel. Each picture showed a case and, along the way, told you how to feel about it. During our rebrand, I tested what happens when the cards only show the thing: a shop, money, a parcel. The icon variant lifted mobile conversion by 7.54% and has been live since February 2025.",
      story: [
        { kind: "section", title: "The dog that stayed", body: "On E.ON's cancellation page, a sad dog has been looking at customers for years.\n\nMy colleague, a conversion manager, used to work at E.ON and told me how it got there: they tested different animal pictures on that page, and the dog won. On a page where you want people to think twice, that makes a lot of sense.\n\nThe dog stuck with me, because we had plenty of emotional pictures on our own pages. Did they actually push people toward the action we wanted? Nobody had checked." },
        { kind: "figure", hue: 340, src: "images/illustrations-vs-icons/eon-cancellation.jpg", alt: "The E.ON cancellation page in a browser window. On a red panel: Sie möchten Ihren Vertrag kündigen? Es gibt gute Gründe zu bleiben, with three reasons listed. Next to it, a photo of a brown and white terrier sitting on a doormat, looking up at the camera.", caption: "Fig. 1 - E.ON's cancellation page on eon.de, still live in October 2026. Page and photo belong to E.ON." },
        { kind: "section", title: "Every picture came with a verdict", body: "The pictures I had in mind sat on our buyer-protection payment form. In November 2024, we had added benefit cards below the CTA, taken straight from our consumer website: an illustration, a short headline, center-aligned text. Three cards with the main protection cases beat nine and two, with a 4.47% lift on mobile.\n\nThe cards worked. Looking at them again, though, I noticed that each illustration did more than show a case. It came with a verdict. Shop insolvency was a closed shop with a red cross. No refund was a wallet with a fly coming out. Parcel not arrived was a broken parcel.\n\nI'd always thought the illustration style had been A/B tested at some point. It turned out it had started as an exploration and grown into our default from there. At the same time, we were in the middle of a rebrand, and the playful style felt like a lot for what is, in the end, an insurance product.\n\nBy then, I'd been at the company for a year. With a whole range of products to learn, the pages you see every day slowly turn into furniture (I'm no exception). Getting a fresh look at them anyway is a habit I work on. [PLACEHOLDER · keep or cut, your call]" },
        { kind: "framework", title: "Same case, minus the verdict", body: "Here's the thing: **a picture that shows a case also tells people how to feel about it, and that part had never been tested.** Does the verdict push people toward protecting themselves? Or does it just give them one more thing to interpret? To find out, I replaced each illustration with an icon that shows the object and leaves the judgment out:", items: [
          { k: "Shop insolvency", v: "Closed shop, red cross", effect: "A shop" },
          { k: "No refund", v: "Wallet with a fly", effect: "Money" },
          { k: "Parcel not arrived", v: "Broken parcel", effect: "A parcel" }
        ]},
        { kind: "figure", hue: 340, label: "Illustrations · Icons", alt: "PLACEHOLDER · the three illustrations (closed shop with a red cross, wallet with a fly, broken parcel) above the three icons that replaced them (shop, money, parcel).", caption: "Fig. 2 - [PLACEHOLDER · the three illustrations and the three icons on their own, outside the page.]" },
        { kind: "section", title: "Two variants, so alignment couldn't take the credit", body: "The original had a second weak spot: all text was center-aligned. If I'd only tested icons against it, a win could just as well have come from the alignment.\n\nSo we ran two variants. Variant A kept the illustrations and moved everything to the left. Variant B did the same, with icons. From there, A against the original shows what the alignment does, and B against A shows what the icons add on top.\n\nThe test ran in Kameleoon from January 14 to 27, 2025. My colleague documented the hypothesis in our team's standard format: content that explains the product helps unsure users understand its value, with an expected 5% gain in conversion rate." },
        { kind: "figure", hue: 340, label: "Original · Variant A · Variant B", alt: "PLACEHOLDER · the three benefit-card versions side by side: original with illustrations and centered text, variant A with illustrations and left-aligned text, variant B with icons and left-aligned text.", caption: "Fig. 3 - [PLACEHOLDER · mockup with all three variants side by side: Original (illustrations, centered), Variant A (illustrations, left-aligned), Variant B (icons, left-aligned).]" },
        { kind: "framework", title: "Clear on mobile, a tendency on desktop", body: "Conversion rate per variant:", items: [
          { k: "Original", v: "Mobile 7.19%", effect: "Desktop 8.98%" },
          { k: "A · illustrations, left-aligned", v: "Mobile 7.39%", effect: "Desktop 8.74%" },
          { k: "B · icons, left-aligned", v: "Mobile 7.73%", effect: "Desktop 9.11%" }
        ]},
        { kind: "result", title: "Shipped, with the why still open", body: "On mobile, the icon variant lifted conversion rate by 7.54% against the original, at 98.95% significance. Left alignment alone helped a little (7.19% to 7.39%), the icons did the larger part.\n\nDesktop was quieter. The icons came out ahead again with a 1.45% lift, but at 64.02% significance that's a tendency, not a result. However, one detail stood out: the alignment-only variant did worse than the original on desktop. The icons were the one change that held up on both devices.\n\nWe rolled out the icons on February 17, 2025. Beyond the numbers, the page got calmer: less color, less to look at, more focus on the text. And it fit right into where the rebrand was going.\n\nSo was it the missing verdict? Our documented learning says users no longer had to interpret the pictures and could focus on the content. That's what I set out to test, but the icons changed more than the meaning of the picture (more on that in the limitations). I'll take the win and keep the question open.\n\n[PLACEHOLDER · was the payment-update page (the frustrated woman at her laptop) part of this, or a separate test? Add or cut.]" },
        { kind: "figure", hue: 340, label: "Payment form · after", alt: "PLACEHOLDER · the payment form as it is live today, with three icon benefit cards below the CTA.", caption: "Fig. 4 - [PLACEHOLDER · the live payment form with icon cards, since February 2025.]" },
        { kind: "limitations",
          defaultFace: "opportunities",
          title: "Limitations",
          subtitle: "In academia, where I come from, it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Desktop stayed inconclusive", body: "The decision rests on mobile. Desktop reached 64.02% significance, so the desktop lift is a tendency. When a test counts as done is a call our conversion managers make, and here the mobile result carried it." },
            { title: "Icons changed more than the meaning", body: "Swapping illustrations for icons also removed color, detail and visual weight. The test shows the icons won, not which of these properties drove it. The missing verdict is the most plausible reading, not a proven one." },
            { title: "Standard hypothesis, not a calculated one", body: "Like most of our tests, the hypothesis assumed a default 5% effect instead of a calculated minimum detectable effect. That fits where our experimentation practice stands today, at \"Run\" on a four-step maturity scale. [PLACEHOLDER · name the maturity model and credit it]" },
            { title: "One surface, one moment", body: "Only the payment form was tested, two months after the cards first went live. Other pages with emotional imagery kept theirs untested. [PLACEHOLDER · adjust if the payment-update page was tested]" }
          ],
          opportunities: [
            { title: "Isolate the verdict", body: "A follow-up with icon against icon, one neutral and one with an evaluative cue (a crossed-out shop, a broken parcel), would test the emotional connotation on its own." },
            { title: "Test emotion on purpose", body: "The E.ON dog shows emotion can work where you want people to hesitate. A loss-framed image on the payment-update page would be the place to test that deliberately instead of by default." },
            { title: "Calculated hypotheses", body: "Estimating the expected effect and the needed runtime up front would make it clearer when a test is done, and would have flagged early that desktop wouldn't reach significance in two weeks." },
            { title: "Emotional framing beyond the payment form", body: "Emotional imagery still sits on other pages of the journey. Testing it there, one surface at a time, would show whether the result holds beyond a single form or depends on the moment in the funnel." }
          ]
        }
      ]
    },
    {
      // DRAFT · written in parallel to the running analysis (October 2026),
      // in Blog Voice per Lisanne's request. Placeholders marked
      // [PLACEHOLDER · ...].
      // Position: 4th for now, so the home teaser (first three) stays as is.
      // Planned: move this case into the top three once the interview
      // analysis has replaced the outcome placeholders. Candidate to drop
      // from the teaser is ai-workflow (Figma Make, dated by then).
      slug: "iasqa-field-research",
      title: "Taking the personas to the people they describe",
      subtitle: "Ten days of field research at a quantum autumn school, with Aqora running the tutorials",
      company: "Aqora",
      year: "2026",
      role: "Research lead · Field research",
      team: "With Julian (developer, technical side)",
      duration: "10 days on site · Oct 2026, analysis ongoing",
      impact: [
        { label: "Recorded interviews", value: "5+", note: "students, researchers, instructors" },
        { label: "Follow-ups agreed", value: "6", note: "async, video, or on site at research institutes" },
        { label: "Leads", value: "2", note: "for a course or project on Aqora" }
      ],
      tags: ["Field research", "Observation", "Quantum computing"],
      coverPaletteHue: 260,
      coverImage: "images/iasqa-field-research/cover-cargese.jpg",
      tldr: "A confession first: for three years, Aqora's picture of its users lived in a set of proto-personas that had never met the people they describe. I know, because I led the workshop that made them. They were good personas! Strongly differentiated, each with a journey map, built by the team in 2023 from a lot of industry knowledge, when the company was brand new and had no data and no users to ask. But knowing an industry is not the same as having talked to the people in it. So when Aqora hosted the tutorials of a quantum autumn school in Corsica this October, I took the chance to go and meet the people the personas describe. Ten days on site, observation in every session, conversations over pizza and at the beach, more than five recorded interviews, six follow-ups agreed. The analysis is running as I write this. The format itself has already paid off.",
      story: [
        { kind: "section", title: "The personas were good. They just hadn't met anyone.", body: "Aqora is the home of the quantum community: challenges on real industrial problems, open datasets, workspaces that run in the browser, and a place to discuss it all, for quantum experts, companies and research communities. Teaching, like at this school, is the newest piece. [PLACEHOLDER · check against the final wording of the new website once it's live]\n\nWhen I joined in 2023, the company was brand new. No data, no users, nothing to look at. What it did have was a question that had been open since the founding: who are we actually for? Aqora is a B2B product, but it needs B2C as well, and nobody had the experience to say how to position it, let alone how to sell it. Even inside B2B, different target groups need a completely different pitch. Same on the B2C side. Someone with a computer science background doesn't need the programming environment explained. Someone with a physics background doesn't need the physics explained. And the other way around, of course. (The new website says it in one line, \"physicist or software engineer, notebook or terminal\". It took three years and a field trip to be able to say it that plainly.)\n\nSo I initiated proto-personas and guided the team through building them: strongly differentiated, each with a journey map, mapped to B2B and B2C, to company types and profiles, validated by our co-founder's industry knowledge, since that was the only validation available. Honestly, they are better than a lot of personas I have seen in companies with a dedicated research team. They carried design decisions for three years.\n\nWe had talked to users since then, in interviews and at hackathons. But the people on Aqora so far were mostly undergrads at the start of their studies, not the researchers and industry people the personas were really about. So the personas rest on industry knowledge, which is a fine place to start and a thin place to keep building on. Every new feature inherited the same assumptions, and nobody could say which of them were true (me included). How much of a difference the gap between undergrads and the people in the personas makes, we only understood once we were on site. Going into the field was also my chance to find out what should replace them.\n\nThen along came IASQA. The [International Autumn School in Quantum Algorithms for many-body problems](https://www.cecam.org/workshop-details/international-autumn-school-in-quantum-algorithms-for-many-body-problems-iasqa-1521), a CECAM flagship school, October 6 to 16, 2026, at the Institut d'études scientifiques de Cargèse in Corsica. About 70 PhD students, postdocs and industry people from Quobly, Pasqal, Eviden, Google Quantum AI, Air Liquide, EDF and Thales, with Alice & Bob among the sponsors. And Aqora would host the tutorials. Ten days with the people the personas describe, in one place, with our product on every laptop? I didn't need to think about that one for long. Julian, our developer, came along to run the technical side of the hosting, and to do research with me in between." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/proto-personas-figjam.webp", alt: "The FigJam board aqora - Brainstorm, page Personas & Sitemaps, zoomed out. In the middle, about ten proto-persona cards in two groups, each with a Basic info and a More about block and clusters of small green, blue and purple sticky notes around them. On the right, a column of eight user journey maps, one per persona, plus a first submission flow at the top right.", caption: "Fig. 1 - The proto-personas on the FigJam board, one card and one journey map per persona. Built by the Aqora team in 2023 in a workshop I led, shown with Aqora's permission." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/proto-persona-example.webp", alt: "One proto-persona from the board, Dr. Elena Martinez, The Optimistic Pioneer: age 40, Head of Quantum Computing Innovation at a financial corporation in New York. Left, a portrait, a bio and the logos of companies of her type. Middle, personality sliders from introvert to extrovert, analytical to creative, busy to time rich, safe to risky. Right, six boxes of sticky notes: interests, influences, goals, needs and expectations, motivations, pain points and frustrations.", caption: "Fig. 2 - One persona written out: Dr. Elena Martinez, a fictional head of quantum innovation at a bank. Bio, personality sliders and six blocks of sticky notes, from interests to pain points. Each persona also has its own user journey map, not shown here." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/iasqa-cecam-mockup.jpg", alt: "The IASQA event page on cecam.org in a browser window on a soft purple gradient. Headline International Autumn School in Quantum Algorithms for many-body problems (IASQA), October 6 to 16, 2026, registration deadline September 19, 2026, location Institut d'études scientifiques de Cargèse, Corsica, France, hosting node CECAM-FR-GSO, and the sponsor logos below.", caption: "Fig. 3 - The school's page on cecam.org, where participants registered. Page and logos belong to CECAM and the sponsors." },
        { kind: "framework", title: "Four questions, one trip", body: "I set four research goals before we left. One looks back at the personas, two look at where the product is going, and one at how Aqora comes across:", items: [
          { k: "Target groups", v: "Who is really there", effect: "How they match the personas" },
          { k: "Teaching", v: "How instructors teach today", effect: "What it would take to run a course on Aqora" },
          { k: "Research papers", v: "How researchers work with papers", effect: "Where a tool could fit (feature in development)" },
          { k: "Perception", v: "How Aqora comes across", effect: "Brand recognition, plus bugs and UX feedback" }
        ]},
        { kind: "section", title: "Observe first, record last", body: "The interview frame was four questions: What role do research papers play in your daily work? Where are the challenges? How do you teach your courses? And how was Aqora for you, what would it take to work with it? Short enough to ask over dinner, open enough to go deep when someone felt like it.\n\nI didn't lead with the interviews, though. **At a school like this, the sessions are the data.** We observed the tutorials, the lectures and the group work, joining in where that was natural and sitting back where it wasn't. Most of the material came from informal conversations: at meals, in breaks, at the poster sessions, on the beach, at the bar in the evenings (research is hard work). The recorded interviews came on top: more than five with students, researchers and instructors, plus several follow-ups agreed for after the school, async or on video, some showing us their own setup, and more on site at research institutes.\n\nWhy that order? Three reasons. Time was the bottleneck: the day belongs to the sessions, the rest of it to the beach, and a conversation fits into either while a formal interview slot rarely does. Recording raises the bar: some people treated an interview as a test, so we explained every time that the recording is only a memory aid. And trust takes onboarding. The first days read as \"Aqora is here, they want to sell us something\", and the answers came with a social acceptance bias. After a few days, people were open, and the interviews we recorded then were worth more than any we could have pushed for on day one." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/bay-at-sunset.jpg", alt: "The bay below the institute at sunset. A calm turquoise sea between two green headlands, a pink and orange sky, and maquis and a prickly pear in the foreground.", caption: "Fig. 4 - The bay below the institute. After the last session, this is where the day went, and where a lot of the conversations happened." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/tutorial-on-aqora.jpg", alt: "A lecture hall at IASQA seen from the back rows. On the projector, an Aqora workspace with a notebook outline on the left and the sections Imports and 1 - Defining Molecules. The instructor stands at the front next to the screen. Participants sit at long tables with laptops, and the laptop in the foreground shows the same Aqora notebook.", caption: "Fig. 5 - A tutorial running on Aqora: the notebook on the projector and, in the front row, on a participant's laptop. Cargèse, October 2026." },
        { kind: "section", title: "Hosting opens doors, and tilts the answers", body: "Aqora wasn't a guest at the school. The tutorials ran on the platform every day, on the projector and on every laptop, as marimo notebooks inside workspaces. In week two, Aqora hosted a pizza evening. That presence is what made the research possible in the first place: it put us in the room, gave every conversation a natural opening, and when a bug came up, it got fixed on site within hours and we got to watch the reaction.\n\nIt also tilts the answers. People talk differently to the company whose product they are using right in front of them, and the social acceptance bias of the first days came from exactly that. Can you separate the presence from the access? I don't think so. So I treated it as a known bias instead of a problem to solve: lead with observation, let the trust build, and cross-check what people said with what we saw them do.\n\nAnd what we saw them do was informative all by itself. Scaling the instances worked. Instructors uploaded their material as marimo notebooks and kept slides and notes beside the workspaces. Students switched over from Jupyter without much trouble. The friction sat elsewhere:" },
        { kind: "framework", title: "What hosting showed", body: "Observations from ten days of tutorials, not yet findings:", items: [
          { k: "User groups", v: "Not set up well", effect: "Instructors and students need different things" },
          { k: "Ownership", v: "Unclear", effect: "Versioning and publishing of notebooks" },
          { k: "marimo", v: "Invisible", effect: "Students didn't know they were using it, so didn't find its docs" },
          { k: "Local dev vs. Aqora", v: "Friction", effect: "Moving between the two setups" },
          { k: "VS Code and GitHub", v: "No clear win yet", effect: "For experienced students" }
        ]},
        { kind: "section", title: "Working while the data was still warm", body: "From here, it gets practical. We didn't wait for the flight home to start on the material. On site, we set up a research repository in Notion: field notes, interview material, contacts, all in one place and tagged while the memory was fresh. Between sessions, I ran a heuristic analysis of how discussions and research papers currently sit in the product and turned it into action points. I drafted a first version of a reworked login flow after watching people hit the old one. Julian started a design exploration for the research-papers feature, with the conversations from the week in his head instead of the personas. [PLACEHOLDER · keep if Julian's exploration is something you want to show here, it reads as a developer doing design work]\n\nNone of that is the analysis. It's the part you can only do while you're there, and it meant we came back with a repository instead of a pile of notes." },
        { kind: "figure", hue: 260, src: "images/iasqa-field-research/pizza-evening.jpg", alt: "Evening in the institute garden in Cargèse. About fifteen participants sit in a loose circle of green and yellow garden chairs under large trees, talking, with a few standing at the edge. The scene is lit from one side, the rest of the garden is dark.", caption: "Fig. 6 - The Aqora pizza evening in week two, when the day's sessions were over and most of the conversations happened." },
        { kind: "result", title: "Where it stands", body: "The analysis of the interviews is running as I write this. What I can say today are hypotheses, not findings:\n\nWhere is the win over VS Code and GitHub, for people who already have a setup they like? Make marimo visible. Clarify ownership and publishing. And a pattern that goes beyond this school: Aqora releases features but rarely iterates on them.\n\n[PLACEHOLDER · what the interview analysis says about the three goals: who was really there and how they match the personas; what instructors would need to run a course; where a research-papers tool fits.]\n\n[PLACEHOLDER · the decision on the target groups: what replaces the personas. Buyer profiles and jobs to be done are on the table; buyer profiles feel very e-commerce, so the call is still open.]\n\nOne result is already in, and it's my favorite. An intensive on-site school is close to ideal for user research. Immersion is fast, the group is more experienced than Aqora usually reaches, and the format repeats itself at every challenge and hackathon the platform hosts. Bruno Senjean, who organizes IASQA, is open to Aqora being part of the next edition. I'd pack my bag again tomorrow.\n\nNext: finish the interview analysis, revisit the target groups, run the follow-ups, and keep an eye on the two leads for a course or project on Aqora. [PLACEHOLDER · status of the follow-ups and leads once they have moved.]" },
        { kind: "limitations",
          title: "Limitations",
          subtitle: "In academia, where I come from, it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Unvalidated personas as the starting point", body: "The research goals and the interview frame were written against personas that had never met the people they describe, and that I had initiated myself. That's the point of the trip, but it also means the questions carried the personas' assumptions into the field. The personas themselves have since fallen out of day-to-day use at Aqora, which is a limitation of the approach as much as of this study. [PLACEHOLDER · check: are the personas no longer used at Aqora, or did you mean personas as a method in general?]" },
            { title: "One event, a senior group", body: "Ten days at one school, with PhD students, postdocs and industry researchers. That's a more experienced group than the undergrads who make up most of Aqora's users and hackathon participants so far, and a single site. What holds here may not hold for a first-year student at a weekend event." },
            { title: "Aqora was in the room", body: "We came as the company hosting the tutorials, and people knew it. The early answers carried a social acceptance bias, and the later ones were still answers given to the host. Observation and the follow-ups in people's own setups are the correction, not a cure." },
            { title: "Analysis pending", body: "Everything in the outcome is a hypothesis until the interview analysis is done. The practical outputs from the site (repository, heuristic analysis, login flow draft) are groundwork, not results." }
          ],
          opportunities: [
            { title: "Hackathons as repeatable research sites", body: "Aqora hosts challenges and hackathons all year. Each one is a smaller version of this setup: a group, a few days, the platform in use. A light research protocol that travels with the hosting would turn them into a steady source of field data." },
            { title: "Follow-ups in people's own setups", body: "Several people agreed to continue, some showing their own environment, some on site at their research institutes. Watching someone work in their own setup, away from the school and the host, is where the hosting bias falls off." },
            { title: "Replacing the personas", body: "The trip may show that what people have in common is less who they are than what they are trying to get done. Jobs to be done would fit that, buyer profiles would fit the sales question better but feel very e-commerce. Whichever frame wins, it should grow out of the interviews this time, not out of a workshop." }
          ]
        }
      ]
    },
    {
      slug: "trust-card-redesign",
      title: "Redesigning the Trust Card, one use case at a time",
      subtitle: "A four-day design sprint on Trusted Shops' most-seen widget, with the first redesign already in an A/B test",
      company: "Trusted Shops",
      year: "2026",
      role: "Senior Product Designer · Sprint initiator, design",
      team: "Growth team of 4, no PM · Facilitation: a conversion manager",
      duration: "4-day sprint · Oct 26 to 29, 2026 · tests ongoing",
      impact: [
        { label: "Use cases", value: "5", note: "one card, one copy, one test number each" },
        { label: "Sprint", value: "4 days", note: "Map, Sketch, Decide, Polish" },
        { label: "First redesign", value: "In test", note: "ahead on the card metric in all five, significance pending" }
      ],
      tags: ["Design sprint", "Experimentation", "Checkout"],
      coverPaletteHue: 48,
      coverImage: "images/trust-card-redesign/miro-board-wednesday.webp",
      tldr: "A confession first: the Trust Card is the most-seen piece of design at Trusted Shops, and for most of its life no team owned it. It's the card that appears on the thank-you page of a certified shop and offers buyer protection, the entry point to our checkout and the payment form, in front of [PLACEHOLDER · traffic order of magnitude, if it can be published] shoppers. It launched in 2007 [PLACEHOLDER · verify the year]. Copy and design had carried it for a long time, and it showed. When ownership moved to my team this year, we started where we could measure: the same card, translated into today's design language, in an A/B test. It's ahead in every use case as I write this, not yet significant. That was reason enough to go further. This week, four of us are in a design sprint to rethink the card itself. I proposed the sprint and handed the facilitation to a colleague. This is the live write-up, updated as the week goes.",
      story: [
        { kind: "section", title: "The widget everyone sees and no team owned", body: "Every certified Trusted Shops shop can show the Trust Card. After the purchase, on the thank-you page, right under the confirmation: a small card that tells shoppers their order is protected and asks for one click to secure it. For free members and PLUS members it reads differently, and above an order value of 100 € it changes again. Six use cases on our Monday board, all from a handful of variables: order value, member or not, paid or free. And that's only the slice for our core market. There are more, for shops that only use reviews, for international markets. The sprint works with the ones that carry the most traffic at home.\n\nThat card has been on the market since 2007 [PLACEHOLDER · verify]. Design and copy came from an earlier era of the product, and revisiting them was never anyone's full job. Business-wise, it's the top of the funnel for consumer membership: whoever clicks here enters the payment form. It's the kind of surface where a small change moves a big number, and where nobody wants to be the one who broke it.\n\nWhen I joined, the first thing we did was make the card testable. The Trust Card is a plugin on other companies' shops, and A/B testing it was a technical question before it was a design one. [PLACEHOLDER · one sentence on what it took to make the card testable] Once that worked, we ran content tests: headlines, bullets, button labels. Then, this year, the whole product moved into our team's responsibility. Growth, cross-functional, no PM. That's the point where you either keep running content tests or you take the card apart." },
        { kind: "section", title: "First test: the same card in today's design language", body: "We didn't take it apart. Not yet. The first redesign keeps the logic and the layout of the old card exactly as they are, five use cases, same bullets, same buttons, and translates them into the current design language: new type, new color, and a headline per use case instead of one for all. The point was to learn what the look alone is worth before touching the structure. If the translated card loses, the structure is the problem. If it wins, we know the floor for everything that follows.\n\nIt's winning. As I write this, the card metric is up in all five use cases, with the biggest lifts where shoppers are new and the order is small. Not significant yet, so the numbers stay in pencil. [PLACEHOLDER · per-use-case numbers once significant and cleared for publication] What it already tells us: the design language is not the risk here. It's the part we get for free." },
        { kind: "figure", hue: 48, src: "images/trust-card-redesign/uc1-before-after.webp", srcNarrow: "images/trust-card-redesign/uc1-before-after-narrow.webp", alt: "The Trust Card for a new shopper with a small order, before and after, side by side. Left, the old card: a white card with a yellow frame, headline Sichern Sie Ihren Einkauf ab!, shop name and order sum, three green check bullets about buyer protection up to 100 €, two paragraphs of consent copy, a dark blue button Absichern mit einem Klick, and the Trusted Shops seal in a yellow swoosh in the corner. Right, the test variant: a white card with rounded corners and no frame, headline Bestellung bestätigt: mit nur einem Klick kostenlos absichern, the same bullets in outlined green, smaller consent copy, a bright blue pill button with the same label, and the seal bottom right.", caption: "Fig. 1 - Before and after for the same use case, a new shopper with an order under 100 €. Same logic, same bullets, same button label. A headline that says what just happened, and the current design language. Screenshots from our Figma files. [PLACEHOLDER · replace with a proper mockup, and decide on the shop name]" },
        { kind: "framework", title: "Five cards, one widget", body: "What each shopper sees depends on who they are and what they just paid. The headline and the button change, the promise stays. The sixth card, a PLUS member with another order amount, stays as it is, like the fifth.", items: [
          { k: "UC 1", v: "New shopper, order up to 100 €", effect: "Secure it with one click, free" },
          { k: "UC 2", v: "New shopper, order over 100 €", effect: "Secure the full order value" },
          { k: "UC 3", v: "Free member, order up to 100 €", effect: "Already protected, upgrade to PLUS" },
          { k: "UC 4", v: "Free member, order over 100 €", effect: "Extend protection to the full value" },
          { k: "UC 5", v: "PLUS member", effect: "Protected, go to your account" }
        ]},
        { kind: "section", title: "Why a sprint, and why I didn't run it", body: "Two things lined up. The translated card was ahead in the test, and the team had started redesigning the payment form, the page right behind the Trust Card. If the form changes, the card that leads into it should change with it. So I proposed a design sprint, the kind from Google Ventures, with [the book](https://www.thesprintbook.com/) and the website as the reference, and built a template for a classic sprint in Miro.\n\nThen I did the thing that feels wrong the first time: I handed it over. A conversion manager on our team had worked in a UX team before [PLACEHOLDER · okay to name the company?] and hadn't run a sprint yet. I showed her the method and the template and asked her to prepare it. I went on vacation. She came back with a plan, presented it, we adapted it together, and this week she's facilitating. She also owns the communication around the sprint and set up the epic it feeds into. My role in the room is participant and design lead, not moderator.\n\n(Writing that paragraph took me a while. It's her sprint to run. It's also true that the method, the template and the question came from me, and that making someone else's sprint possible is a good part of what a senior role is for. Both stay in the text.)" },
        { kind: "section", title: "Monday: six journeys for one card", body: "Day one was mapping. Long-term goal and the questions we wanted the sprint to answer, on sticky notes, as a group. Then a journey map per use case: what the shopper thinks, feels and wants at the moment the card appears, for someone who just paid 1 € and for someone who just paid a few hundred, and for a member who has seen the card many times before. Six maps. The card is one component. The situations are not.\n\nThe afternoon was context. We went through what already existed: every A/B test on the card so far, survey results about our users, the audits, including a large one from Customer Journey Management, and the legal requirements that put the consent copy on the card in the first place. From there, How Might We questions, then the decision that shapes the rest of the week: which use cases we design for first. We picked two: the new shopper with a small order, and the free member with a bigger one. The first is where the card has the most to win, the second is where it has the most to explain. The two in between, the new shopper with a bigger order and the free member with a small one, inherit from those. The PLUS member cards stay as they are. [PLACEHOLDER · check the reasoning]" },
        { kind: "figure", hue: 48, src: "images/trust-card-redesign/miro-board-wednesday.webp", alt: "The Miro board Trustcard Design Sprint Q4 2026 zoomed out to 8 percent, Wednesday midday. Five columns: Overview with an ideas parking lot, Monday Map with a cluster of purple sticky notes and six use case journey maps, Tuesday Sketch with rows of sketches and a strip of lightning demo screenshots above, and Wednesday and Thursday still as empty templates. Below Monday, survey charts, audit tables and a legal feedback note.", caption: "Fig. 2 - The board on Wednesday midday. Monday and Tuesday full, Wednesday and Thursday still templates. The small block top left is the parking lot for everything that doesn't fit the focus." },
        { kind: "section", title: "Tuesday and Wednesday: from a wall of sketches to three directions", body: "Tuesday was for diverging. Lightning demos first: [Mobbin](https://mobbin.com/), a round on Google, and our own old design files, to see what's out there and what we already had. Then sketching at our own pace, Crazy 8s after lunch, and in the afternoon free prototyping with AI, so an idea could turn into something clickable in an hour instead of a week. All week, a corner of the board collects what doesn't fit the focus: product ideas, research questions, things to test later. That corner is already the start of the backlog.\n\nWednesday morning we showed each other what we'd built, then dot-voted. The vote did something I didn't expect: it didn't pick a winner, it sorted the wall into three concepts. One keeps the card and enriches it, with animation and a stronger story around worry-free delivery. One turns the card into a sidebar. One replaces it with a floating call to action in the middle of the page. Three concepts competing on the same question: how much presence should the card have on a page that isn't ours? We sent a short survey to the whole UX team to vote on direction while we started prototyping. [PLACEHOLDER · survey result and the direction we took] [PLACEHOLDER · figure: the three directions, dot voting, two or three sketches]" },
        { kind: "section", title: "Wednesday afternoon: the card becomes a flow", body: "Then we drew the flow, and that's where the sprint stopped being about a card. The old Trust Card is one screen with one button. The new one is a sequence. An intro screen first, short enough to pass a five-second test. From there, a shopper who wants to know more gets an info screen before the button. A shopper who clicks right away lands on a success screen, with confetti, because they just protected an order for free, and a quiet upsell to PLUS on the same screen, which is the card our free members already know, in a new skin. Say yes and you're in the payment form. Say no and you close it, and that's a fine ending too.\n\nThe part I like most is the third exit. Someone who reads the info and isn't interested gets a button that says so. Not a close icon, a button. It leads to a debrief screen with a fun fact and a one-question survey. A no used to be silence on the thank-you page. Now it's a data point, and a small thank-you from us for reading. Every action in the flow is a tracking event, and the surveys sit at the two moments where people have just made up their mind.\n\nMembers get the short path. For a free member with a bigger order, the card opens in the format they know, with the content adjusted, and the button goes straight to the payment form. No intro, no confetti. They've seen the card before. [PLACEHOLDER · confirm flow alternative 1 is the one going into the prototype]" },
        { kind: "figure", hue: 48, src: "images/trust-card-redesign/user-flow-wednesday.webp", alt: "A user flow diagram in Miro titled USER FLOW, with a legend for start and end, screen, user decision and user action. The top flow, labeled UC 1, runs from the shop's success page to a Trust Card intro screen, a decision whether the user recognizes the card and is interested, an optional Learn more path through an info screen, the primary call to action, a green success screen with confetti and an upsell question, and on to the payment form. Red exits lead to close, minimize or ignore, and a Clicks not interested action leads to a debrief screen with a fun fact and a survey. The bottom flow, labeled UC 4, is shorter: the card opens in the known format with content changes, then either the primary call to action straight to the payment form, not interested to the debrief, or close to end.", caption: "Fig. 3 - The user flow we drew on Wednesday for the two focus use cases. Every slanted shape is a tracking event. Green is the happy path, red the exits, and the debrief turns a no into a survey answer." },
        { kind: "section", title: "The ideas that didn't wait for the prototype", body: "**A sprint that ends in a prototype has done half its job. This one is built to end in a backlog of tests.** The best example came up while sketching. The button on the Trust Card leads to an external page, our checkout, and the card doesn't say so. PayPal does: in a payment form it tells you that you're about to be redirected. So why not an external-link icon on the button? I sketched it, everyone nodded, and it went straight onto the testing list. It's the kind of idea that doesn't need the sprint's final prototype to be worth testing. It needs an icon and a test slot. [PLACEHOLDER · one button in the test variant already carries an icon; clarify which use cases get it]\n\nThere were more of these, small and cheap. [PLACEHOLDER · two or three other quick wins from the sketching] The plan is to keep feeding them into the redesign that's already in the test, so the running variant gets richer while the sprint works on the bigger question. Thursday is for polishing the prototype and building that backlog, and the epic our facilitator set up for the sprint now extends to testing and implementation. That's where the week lands: not a handoff, a queue." },
        { kind: "result", title: "Where it stands", body: "This is written on Wednesday of sprint week, so here is what's true today and what's still a hypothesis.\n\nTrue: the translated card is ahead in all five use cases, not yet significant. Three concepts are on the board, the UX team is voting, and the user flow for the two focus use cases is drawn: intro, info, success, upsell, and a debrief for the no. Prototyping has started. Thursday brings expert interviews with colleagues from [PLACEHOLDER · roles], the polished prototype, and the testing backlog.\n\nHypotheses: the design language is worth a lift on its own. Presence, how much of the page the card claims, is the next lever. Small signals of honesty, like telling people they're about to leave the shop, move trust more than more copy does. Each of these becomes a test. [PLACEHOLDER · update after Thursday, then again when the first sprint tests read out]" },
        { kind: "limitations",
          title: "Limitations",
          subtitle: "Scoping what this case can claim as of Wednesday of sprint week. The honest version is that most of it is a plan with a good trend.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "Directions I'd pull if the sprint gets a second round. Each builds on something that is already on the board.",
          items: [
            { title: "A test still running", body: "The first redesign's numbers are directional. Ahead in every use case, not significant, and the payment form conversion behind the card is flat or noisy. Until that reads out, the floor I describe is a hypothesis with a good trend." },
            { title: "Internal experts, no shoppers yet", body: "The sprint's user input comes from past tests, surveys and audits, plus expert interviews with colleagues. No shopper has seen the new concepts. The sprint's own output is a testing backlog, and the A/B tests are the validation. Honest for this surface, and still not the same as watching someone meet the card." },
            { title: "Four people, one team", body: "Content, conversion and design were in the room. Engineering and the payment form team were not. The three directions carry a growth team's view of the card. Thursday's expert interviews are the correction, not a replacement." },
            { title: "A page that isn't ours", body: "The Trust Card lives on other companies' thank-you pages. Whatever we design has to survive shop layouts we don't control. The sprint can sketch for that, only the live test can prove it." }
          ],
          opportunities: [
            { title: "Presence as a variable", body: "If the sidebar or the floating call to action wins, presence becomes a parameter like order value: the same card, dialed up or down by context. That's a test series, not one test." },
            { title: "Card and payment form as one flow", body: "The form is being redesigned at the same time. Designing the card's promise and the form's first screen together would close the gap the external-link icon only labels." },
            { title: "The sprint as a repeatable format", body: "Four days, four people, a backlog of tests at the end. Run twice a year on the highest-traffic surfaces, it would turn the content-test habit into a product habit." }
          ]
        }
      ]
    },
    {
      slug: "design-system",
      title: "Building a Scale-Up's First Design System",
      subtitle: "Brand discovery, visual system, and the company's first design language",
      company: "Cargoboard",
      year: "2021 - 2022",
      role: "Product designer · System lead",
      team: "2 collaborating designers during the brand audit · HR with an external agency for company-culture workshops · 1 frontend engineer · 1 print designer (hired) · 1 student assistant",
      duration: "18 months",
      impact: [
        { label: "Brand identity", value: "Refreshed", note: "extended palette, new typography pairing" },
        { label: "Design system", value: "1st", note: "first at the company: type, color, illustration, components, docs" },
        { label: "Adoption", value: "Org-wide", note: "default for web, print, and internal" }
      ],
      tags: ["Brand", "Design system", "Illustration", "Typography"],
      coverPaletteHue: 200,
      coverImage: "images/design-system/cover.jpg",
      tldr: "Cargoboard, three years in, had a brand that had grown organically and no design system to underpin it. We kicked off with a product audit in a team of three designers, ran brand discovery in parallel with HR's company-culture workshops, and translated the insights into a new visual system: extended palette around the existing red, a new two-typeface pairing (Mokoko and Graphie), and an illustration language built from scratch. I owned the system architecture end-to-end. The system has been the default for new work since.",
      story: [
        { kind: "section", title: "Introduction", body: "Cargoboard is a German B2B logistics provider, founded in 2019. Three years in, the founders decided the brand no longer reflected the company. The visual identity had grown organically: a primary red, some print materials, a website built piecemeal. No brand manual, no component library, no consistent illustration style. On top of that, an unmaintained tech stack with performance issues and 140+ marketing pages to refresh in under a year. The project covered the rebrand and the first design system the company had: type, color, illustration, components, and documentation." },
        { kind: "section", title: "Brand discovery", body: "We kicked off with a product audit. In a team of three designers, we reaccessed the existing brand assets and updated them in line with the old brand to surface what was working and what wasn't. To clarify who Cargoboard was, I ran employee interviews across departments to get at the cultural essence. In parallel, HR was running workshops with an external agency to translate company values and employer branding strategies into something the team could work with; I joined those sessions as participant observation. Mentally, founders and employees were already close on what the brand stood for - what was missing was the articulation. I took the insights from interviews, observations, and workshops and translated them into a visual identity the company could run with long-term." },
        { kind: "section", title: "Visual system", body: "We kept the existing primary red, core to Cargoboard's identity, and extended it into softer tints, tones, and shades we now call \"signature red\". To balance the aggressiveness of the red, we added complementary split colors: blue as secondary, green as tertiary. In color psychology these convey trustworthiness and calmness, which directly served the brand brief. The full palette also includes a dark navy as neutral base, with lighter accent variants for red and blue. The logo stayed almost the same with minor touch-ups; the wordmark can now be used stand-alone, giving the brand a sleeker look. For typography, we replaced the former Source Sans Pro (which had been used for both display and body) with a two-typeface system: Mokoko as the display face and Graphie as the reading face. The company asked specifically for a separate display font for headline impact. Usage of both is governed by clearly defined type styles in the system." },
        { kind: "figure", hue: 200, src: "images/design-system/system-pages.jpg", alt: "Pages from the Cargoboard design system laid out at an angle: the default palette with signature red, apricot, mint, green, blue and neutral, a values page with the tint steps of each color, the type scales for desktop and mobile set in Mokoko and Graphie, and the color rules for illustrative iconography, each page marked Approved.", caption: "Fig. 1 - Pages from the finished design system. Every topic got its own page (palette, color values, type scale per breakpoint, iconography), so the whole system also reads as a PDF. Typography moved from a single-face Source Sans Pro setup to Mokoko and Graphie; the palette grew from one accent red into signature red, blue, green and a dark navy base." },
        { kind: "section", title: "Illustration system", body: "There was no existing illustration language, only ad-hoc images from old marketing rounds. I built a new system from scratch with two constraints baked in from day one. First, accessibility: every illustration and illustrative icon had to read on multiple background colours, so the team would not relitigate contrast on every new piece. Second, the brief from brand discovery - friendly and young but never childish, since logistics is a serious business. To make the system durable on a small team, I documented two paths for in-house creation: update old isometric illustrations into the new style (used sparingly to avoid retaining isometric drift), or build new ones from scratch in Adobe Illustrator or Figma. Both paths share the same primitives - squares, blobs, dotted patterns - so the visual language stays coherent regardless of who is drawing." },
        { kind: "section", title: "Components and documentation", body: "The component library was built modular-first: tokens for colour, spacing, and typography sit underneath atomic components (buttons, inputs, chips), which compose into larger patterns (cards, forms, testimonials). Every component was designed against the brand constraints above, not bolted on afterwards. Documentation lives in Zeroheight, with usage notes for each component (when to use, when not, do and don't examples). For the website specifically, our frontend engineer mirrored the Figma components as custom Elementor templates so marketing, customer service, and operations could self-serve when adding new pages. A designer is not in the loop for every new page." },
        { kind: "figure", hue: 200, label: "Component set · atoms to templates", caption: "Fig. 2 - Tokens underneath atomic components, composing up to page-level templates. Documented in Zeroheight; mirrored as custom Elementor templates for self-serve on the website." },
        { kind: "result", title: "Outcome", body: "The brand has been in daily use across web, print, and internal docs since rollout. The design system is the default for new work, internal or external, and the illustration system has held up across product surfaces I never touched, which was the whole point: the system should outlive its designer. The website relaunch (a separate case) was built on top of the system: 140+ pages shipped in under a year because the foundation was already there." },
        { kind: "limitations",
          title: "Limitations",
          subtitle: "I learned in academia that it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "First system, no precedent", body: "Built without a design-system reference inside the company. Some early decisions on token naming and component boundaries were revisited later; a senior design-system reviewer would have caught these earlier and saved revision work." },
            { title: "Solo on system architecture", body: "Brand audit was collaborative (team of three designers), but the system itself - tokens, component library, illustration rules, documentation - was a single-owner build. System depth was bottlenecked by one person's hours; bus factor of one." },
            { title: "Coverage scope", body: "The system covered the surfaces needed for the rebrand and the website relaunch. Adjacent product surfaces (internal tools, partner portals) remained on legacy patterns and were out of scope for this phase." },
            { title: "External validation", body: "Brand recognition and component usage were not tested with users outside the company. Decisions were grounded in best-practice references, color psychology, and internal feedback, not in studies with target customers." }
          ],
          opportunities: [
            { title: "Tokens as a code API", body: "Tokens are documented in Zeroheight but not yet exported as JSON or JS for direct engineering consumption. A tokens-as-code layer would close the design-to-dev gap and remove manual translation steps." },
            { title: "Contribution model", body: "Currently a single maintainer. A lightweight contribution flow (RFC-style proposals, review criteria) would let other teams add to the system without bottlenecking on me, and would make ownership transferable." },
            { title: "Cross-brand theming", body: "If Cargoboard adds sub-brands or partner co-brands, the system would need a theming layer. The token structure supports this in principle (primary, secondary, neutral variants are already there), but a theme switcher has not been built." },
            { title: "Quarterly health reviews", body: "A regular cadence (audit token usage, deprecate unused components, surface drift) keeps the system from rotting. Currently ad-hoc; a structured cadence would make it sustainable beyond me." }
          ]
        }
      ]
    },
    {
      slug: "website-relaunch",
      title: "140+ pages relaunched in under a year",
      subtitle: "140+ pages, new brand, new IA, end-to-end in under a year",
      company: "Cargoboard",
      year: "2022 - 2023",
      role: "Lead designer · End-to-end",
      team: "1 designer (me) · marketing manager · frontend engineer · graphic designer · student assistant · HR agency",
      duration: "March 2022 - January 2023",
      impact: [
        { label: "Pages relaunched", value: "140+", note: "in under a year" },
        { label: "Design system", value: "Daily use", note: "across web, print, internal" },
        { label: "Scope", value: "End-to-end", note: "brand, IA, system, illustration" }
      ],
      tags: ["Website relaunch", "Brand", "Design system", "IA"],
      coverPaletteHue: 330,
      tldr: "Cargoboard, a B2B logistics startup, needed a new brand and 140+ pages relaunched in under a year. I treated the design system as the lever for everything else, so every brand decision compounded into the rest of the work. Three streams ran in parallel (brand, illustration, IA); final pages came last. Live since January 2023; the system has been the default for all internal and external work since.",
      story: [
        { kind: "section", title: "Introduction", body: "Cargoboard is a German B2B logistics provider, founded in 2019. After three years of growth, the founders wanted a site that matched the company they had become: modern, dynamic, trustworthy. That meant a rebrand, a new IA, and 140+ pages relaunched in under a year. Underneath all of it, the deeper problem: there was no system. Every new page or asset restarted the design from zero." },
        { kind: "section", title: "Brand design", body: "I treated the design system as the lever for the whole project. If every brand decision produced reusable scaffolding (tokens, components, illustration rules), later pages would compound on earlier work instead of restarting from zero. We kept the primary red, core to Cargoboard's identity, and extended it into a system of tints, tones, and shades we now call \"signature red\". Added blue (secondary) and green (tertiary) so the brand had somewhere to go beyond a single bright accent. The logo got minor touch-ups; the wordmark can now be used stand-alone for a sleeker look. Illustrations and illustrative icons were built with accessibility on multiple background colors in mind from day one, so the team did not have to keep relitigating contrast on every new piece." },
        { kind: "figure", hue: 330, label: "Brand system · color and illustration", caption: "Fig. 1 - Signature red extended into tints, tones, and shades, with blue and green as secondaries. Illustration system built for accessibility across multiple backgrounds." },
        { kind: "section", title: "Information architecture", body: "The original navigation hid most of the site. Even Cargoboard's own employees used Google to find their own pages, and operative pages like optional insurance were the hardest to reach. I drew on Nielsen Norman patterns and Information Architecture for the Web and Beyond (Rosenfeld, Morville, Arango, O'Reilly 2015), then worked with the SEO team on a link structure that served both users and search. We tested with a card sort workshop and tree-tested in UXtweak with users recruited from the live site. Both confirmed our direction and surfaced a few wording fixes that shipped into the final IA." },
        { kind: "section", title: "Design and handoff", body: "Design started desktop-first, since roughly 95% of Cargoboard's customers are desktop users. Every desktop wireframe was sketched alongside its mobile equivalent, so mobile shipped on time, on the new system. The product owner wanted to stay on Wordpress and Elementor. I handed off Figma components with usage documentation; our frontend engineer published them as custom Elementor templates so non-designers could self-serve. That pushed the system to be more disciplined: every component had to be reproducible by someone who could not open Figma. Throughout the project I used the customer service team as a proxy for user knowledge I could not generate myself, treating their input as hypothesis rather than evidence so we did not confuse operations opinion with user need." },
        { kind: "figure", hue: 330, src: "images/website-relaunch/old-site-2021.jpg", alt: "The services section of the old cargoboard.de: a heading, a paragraph of copy, and two cards with stock photos of trucks and a shipping container.", caption: "Fig. 2 - Before: the services section of the old cargoboard.de, May 2021. Screenshot from the Internet Archive's Wayback Machine." },
        { kind: "figure", hue: 330, src: "images/website-relaunch/old-homepage-2021-map.jpg?v=2", alt: "The top of the old cargoboard.de homepage on a dark map of Europe, with the red logo, white navigation, a red Jetzt Versenden button, and a booking form with a red Weiter button, above a how-it-works section with red checkmarks and a red Jetzt starten button.", caption: "Fig. 3 - Before: the top of the old homepage and its how-it-works section, May 2021. Red, black, and white throughout. Screenshot from the Internet Archive's Wayback Machine. The dark map behind the booking form doesn't load in the archive, so I re-rendered it in the original style with CARTO map tiles (map data © OpenStreetMap contributors)." },
        { kind: "figure", hue: 330, src: "images/website-relaunch/homepage.jpg", alt: "The relaunched cargoboard.com homepage in a browser: the hero with the booking form, the digital-freight section, and the company video.", caption: "Fig. 4 - After: the relaunched homepage. Blue takes over the large surfaces, red stays for the calls to action." },
        { kind: "result", title: "Outcome", body: "Live since January 2023. The design system is in daily use across web, print, and internal docs, and new pages now ship on top of it without a designer in the loop on every one. Treating the system as the lever, not the deliverable, was the bet that paid off: every page since launch has compounded on it, and the brand still feels coherent across surfaces I never touched. Tracking (Hotjar, GA, recordings) went live with the relaunch, and the hypotheses (reduced support tickets about finding pages, internal teams self-serving from the system) became measurable once analytics had a few months of data." },
        { kind: "limitations",
          title: "Limitations",
          subtitle: "I learned in academia that it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "External user testing", body: "Decisions used internal proxies (the customer service team) and the live launch as test phase. User-impact claims are hypotheses validated post-launch, not via pre-launch testing with external participants. Next iteration would budget for at least a small pre-launch round." },
            { title: "Desktop-first design", body: "Mobile shipped on the new system but received roughly 30% of dedicated design attention; \"shippable\" does not equal \"good\". A dedicated mobile pass is still pending, and the ~5% tablet share did not get a dedicated audit at all." },
            { title: "Solo design lead", body: "I owned brand, system, and IA in parallel. Breadth came at the expense of depth in any single dimension; a larger design team would likely have produced more nuanced output per stream." },
            { title: "Post-launch evidence", body: "Tracking went live with the relaunch, so effectiveness claims (the new IA reducing support tickets, internal teams self-serving from the system) became measurable only after the first months of real usage, not at launch." }
          ],
          opportunities: [
            { title: "Mobile-native experience", body: "A dedicated mobile pass with native gestures, sticky CTAs, and offline support on the quoting flow would meaningfully improve mobile conversion. The 5% tablet share could get a focused audit at the same time." },
            { title: "Continuous experimentation", body: "The new IA is a reasonable hypothesis but has not been A/B tested. A lightweight experimentation layer on top of the analytics already in place would let marketing test wording, layouts, and CTAs continuously." },
            { title: "Public component library", body: "The internal design system could be published (Storybook or Zeroheight live) so partners and agencies producing co-branded materials work from the same source of truth. Reduces design drift at the edges of the brand." },
            { title: "Brand-system maturity model", body: "A 12-month roadmap with quarterly check-ins on token usage, illustration consistency, and component adoption. Treats the system as a product with measurable health, not a one-time delivery." }
          ]
        }
      ]
    },
    {
      slug: "alright-app",
      title: "alright, built solo in one weekend",
      subtitle: "Naming, branding, product, and business model, end-to-end, with Claude as build partner",
      company: "Personal project",
      year: "2026",
      role: "Founder · designer · developer",
      team: "Solo, with Claude as an agent-based brainstorming and build partner",
      duration: "One weekend, spec to TestFlight submission",
      impact: [
        { label: "Build time", value: "1 weekend", note: "spec to first TestFlight build" },
        { label: "Naming rounds", value: "10+", note: "before one cleared trademark, search, and a usable domain" },
        { label: "Pricing", value: "Free", note: "ad-free, no monetization at launch" }
      ],
      tags: ["Solo build", "Branding", "iOS", "AI-assisted workflow"],
      coverPaletteHue: 300,
      tldr: "alright is a free, ad-free app built around small daily affirmations, designed to live in notifications and a home-screen widget rather than a screen you sit inside. I built it solo over one weekend: naming, branding, product decisions, and the app itself, using an agent-based workflow with Claude throughout, including a dedicated critic agent modeled on Steve Jobs who reviewed every product call along the way. The slowest step wasn't the code. It was the name: over ten rounds before one cleared trademark risk, App Store search, and a workable URL at once. The app is currently in TestFlight review, with the App Store submission running in parallel.",
      story: [
        { kind: "section", title: "Setting the bar", body: "Design is the part of my job most visible from the outside, but the work I actually do runs wider: research, systems thinking, and increasingly, thinking past the interface into how a product makes money and finds people. In my day job that wider scope shows up piecemeal, spread across other people's roadmaps. I wanted one project where it all showed up at once, end to end, on something nobody else owned.\n\nThe brief I gave myself was blunt: build something the way I imagine Apple would, if Steve Jobs were still setting the bar. Not a mood board reference, an actual standard to hold the work to. I gave myself 24 hours as a stretch target. That target didn't survive contact with reality (the least Steve-Jobs-like part of the whole build, arguably), but the app was done by the end of the weekend, so I count it as a win against a target I set to be uncomfortable." },
        { kind: "section", title: "The name took longer than the app", body: "Before a single screen got built, I needed a name that would survive three checks at once: no trademark conflict that could turn into a legal letter if the app ever took off, a decent shot at App Store search and SEO, and a domain that would give me clean URLs later. Any one of those is easy alone. All three together, for a name that also had to sound right, took more than ten rounds before I had anything to work with.\n\nI got it down to two finalists, already and alright, and picked alright. The name, the branding, and the domain all locked into place from there." },
        { kind: "section", title: "Branding, built like a design partner conversation", body: "Once the name was set, I ran branding the way I'd run a conversation with a junior designer bouncing concepts back and forth, not a one-shot brief. The first pass was a plain wordmark: Poppins as a placeholder typeface, the app icon just the first letter. Claude then built out a proper exploration deck in Figma, tried a handful of alternative typefaces next to Poppins, and flagged something I hadn't considered: Poppins fatigue, the font is popular enough now that it's started to read as generic (apparently that's a real, documented thing). Outfit was sitting in the same deck, and I liked it immediately. Poppins was out, Outfit was in.\n\nThe cover slide of that same deck, just the wordmark set large, is what gave me the idea for the logo. I built it by hand from there: the wordmark folded into a mark, the mark simplified again into the app icon. Core identity done, in parallel with the first working build of the app itself, which is the part of working this way that still surprises me: brand and product moved at the same time instead of waiting on each other.\n\nA second design pass looked at 2025 through 2027 visual trends, plus a couple of styles I'd been personally curious about, including the current wave of naive design and a pass at neubrutalism. Claude built a moodboard in Figma across all of it. I picked a direction from there and dropped naive design later once it stopped fitting the rest of the system. The brief underneath all of it: modern and premium, deliberately not the dated, softly spiritual look a lot of affirmation and mental-health apps default to." },
        { kind: "figure", hue: 300, src: "images/alright/logo-evolution.jpg", alt: "Three brand marks in a row on a warm off-white background: the wordmark al/right in Outfit, a dark app tile with the shortened mark al/, and the final dark app tile with a single lowercase a.", caption: "Fig. 1 - From wordmark to app icon: al/right set in Outfit, folded into the al/ mark, then simplified again to a single a." },
        { kind: "figure", hue: 300, label: "Design-trend moodboard", caption: "Fig. 2 - The 2025-2027 trend moodboard, including a naive-design pass later dropped and a neubrutalism pass that stuck." },
        { kind: "section", title: "A Steve Jobs critic in the loop", body: "Everywhere I could, I let agents work independently before I stepped in to decide: one researched the legal side of the name, another how it would read to actual users, what associations it carries. That let me spend my attention on judgment instead of legwork.\n\nThe one addition I asked for on top of that was a critic. I had Claude build an agent modeled on Steve Jobs, whose only job was to review and push back on every product decision I made. The feedback was sharper and more consistently opinionated than I expected, and I kept a running log of it in markdown so I could form my own view before deciding anything. Some of that pushback changed my mind outright, on the typography direction among other things. Some of it I read, considered, and overruled. The point was never to defer to it. It was to have a consistently high bar to argue with, on a project where I was otherwise the only person in the room." },
        { kind: "section", title: "Lean by design", body: "The product decision that shaped everything downstream was to build the smallest possible app: something that mostly lives in notifications and a home-screen widget, not a screen anyone opens and sits inside. For a mental-health product built around small daily affirmations, that felt like the right shape: less another app competing for attention, more a quiet nudge that shows up on its own. Onboarding was part of the plan from the very first version, not a pass added at the end.\n\nApp Store screenshots were the one place I leaned hardest on iteration rather than a single good draft. Claude's first pass wasn't bad, but it wasn't right either, so I used it as a starting point and kept working from there. The first three screens came together quickly. Two more needed a couple more passes before they landed, and the content pass at the end, working through the actual copy screen by screen, went faster than I expected.\n\nA few decisions stayed constant throughout: free, with no ads, because a mental-health product doesn't need to monetize friction, at least not at this stage. I translated the app into German and English from day one, so it isn't limited to one market from launch. And I kept the setup around it just as lean as the product: a dedicated email alias off my own address instead of a new inbox to manage, a private Apple Developer account, and a [marketing site](https://alrightapp.github.io/) with only the pages the App Store actually requires. Everything else about marketing comes later, if it comes at all." },
        { kind: "figure", hue: 300, src: "images/alright/onboarding.jpg", alt: "Four iPhone screens side by side. Onboarding: One sentence a day. More confidence over time. Then a time picker asking When should we reach you?, set to 08:00. Then: Your sentence arrives as a notification. Nothing else will, with an Enable notifications button. Last, the daily screen with the sentence You can treat promises to yourself as real appointments.", caption: "Fig. 3 - Onboarding in three screens: the promise, the time, the permission. After that, the daily sentence is most of the app." },
        { kind: "figure", hue: 300, src: "images/alright/sentence-variants.jpg", alt: "Three iPhone screens. The daily sentence in English, set in the serif New York on white. The same sentence in German, set in SF Pro on black. The settings sheet with the notification time and a choice between New York and SF Pro.", caption: "Fig. 4 - One sentence, two languages, two typefaces, light and dark. Settings stay at the two choices that matter: when the sentence arrives and how it is set." },
        { kind: "figure", hue: 300, src: "images/alright/app-store-screen.jpg", alt: "An App Store screenshot on warm off-white: the line Over time, it clicks. at the top, Everything's al/right in the center, and the dark a app icon in the bottom corner.", caption: "Fig. 5 - One of the final App Store screenshots: the tagline, the wordmark, and the app icon, nothing else." },
        { kind: "section", title: "Deciding what success means before writing any code", body: "Before any build work started, the spec already had the metrics that would tell me whether this was working: downloads, return usage through notifications and the widget, and reviews. I set those myself, then asked Claude to poke at them, what it would track, where it disagreed. Fixing the definition of success before the first line of code is the same habit I bring to my day job's experiments; here it means there's already a scoreboard waiting for the first real numbers instead of one improvised after the fact." },
        { kind: "result", title: "Where it stands", body: "As of this writing, alright is a finished product with zero installs. I'm submitting it to TestFlight for beta testing and to the App Store in parallel, and there's a real chance the App Store submission bounces on the first pass; deliberately lean apps sometimes read to Apple's reviewers as not enough app yet. If that happens, I'll add whatever functionality the review actually asks for and resubmit.\n\nThe backlog for what comes after is already running the same way feature work runs at my day job: I write the idea, ask Claude for a first pass, and decide from there whether to refine that draft or design it myself. [PLACEHOLDER · once alright has real downloads, retention, and review numbers, this section gets the actual data instead of a launch status.]" },
        { kind: "limitations",
          title: "Limitations",
          subtitle: "I learned in academia that it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull as the project moves past launch. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "No usage data yet", body: "Every product decision here rests on my own judgment, an AI critic's pushback, and pattern-matching from professional work elsewhere, not on anyone actually using the app. The metrics defined upfront are hypotheses until real usage starts confirming or breaking them." },
            { title: "One person, every discipline", body: "Naming, branding, product, development, and business thinking all ran through me, with Claude as the only other voice in the room. Breadth came fast; there was no second human opinion at any step, agent critique aside." },
            { title: "Monetization deliberately deferred", body: "Free and ad-free is a starting position chosen for the subject matter, not a business model. Whether and how alright ever makes money is still an open question I haven't scoped." },
            { title: "App Store approval unresolved", body: "The lean-by-design bet hasn't cleared Apple's review yet. It might need a functionality pass before it's accepted, and that outcome isn't in this write-up because it hadn't happened when this went live." }
          ],
          opportunities: [
            { title: "Closing the loop on the metrics", body: "Downloads, return usage, and reviews were defined before the build started. The obvious next step is feeding the real numbers back into the same backlog-driven cycle I use for feature work at my day job." },
            { title: "A monetization pass, if it earns one", body: "If usage justifies it, I'd revisit pricing without breaking the ad-free promise, something like a calm, optional premium tier rather than anything that monetizes friction." },
            { title: "More widget and notification depth", body: "The passive-first bet could go further: richer widget states, and notification timing that adapts to when someone actually engages instead of a fixed schedule." },
            { title: "A build log worth publishing", body: "The markdown decision logs and the Steve-Jobs-critic transcripts are close to a Gazette post on agent-based building on their own. Worth writing up once the app is actually live." }
          ]
        }
      ]
    }
  ],

  // Small visual work, too slight for a full case study but it shows the
  // hand and the craft. Mostly freelance / private. Each card opens a modal;
  // an `embed` (Canva iframe src) shows the artifact inline, `link` opens it
  // externally, `thumb` is a cover image (gradient fallback by `hue` if none).
  visuals: [
    {
      slug: "freelance-brand-guide",
      title: "Brand guide",
      context: "Freelance",
      type: "Brand identity",
      year: "2025",
      hue: 190,
      thumb: "images/visuals/brand-guide.jpg",
      blurb: "A full brand guide built in Canva for the foodsnap brand: logo usage, color system, type scale, and the do's and don'ts. Made to hand off so a non-designer can stay on-brand without me in the room.",
      // Canva smart-embed src (the design /view URL with ?embed appended).
      // The modal also shows an "Open in Canva" link as a fallback.
      embed: "https://www.canva.com/design/DAFs0MtePKA/view?embed",
      link: "https://www.canva.com/design/DAFs0MtePKA/view"
    },
    {
      slug: "already-wordmark",
      title: "al/ready wordmark",
      context: "Concept",
      type: "Wordmark · Naming",
      year: "2026",
      hue: 5,
      thumb: "images/visuals/already-wordmark.jpg",
      blurb: "A wordmark for al/ready, a to-do app concept: the app that got it all done, already. The slash splits the name into “all” and “ready”, and the presentation keeps the red construction guides visible.",
      embed: "",
      link: ""
    },
    {
      slug: "aerial-yoga-site",
      title: "Aerial Yoga microsite",
      context: "Personal project",
      type: "Web · Visual identity",
      year: "2024",
      hue: 330,
      thumb: "images/visuals/aerial-yoga.jpg",
      blurb: "A one-page site and visual identity for an aerial-yoga practice, built in Framer. Oversized display type, an airy palette, and a single clear path to the class schedule.",
      embed: "",
      link: "https://aerial-yoga.framer.ai/"
    },
    {
      slug: "quantum-bradford-hackathon",
      title: "Bradford Quantum Hackathon site",
      context: "Aqora",
      type: "Web design",
      year: "2025",
      hue: 320,
      thumb: "images/visuals/quantum-bradford.jpg",
      blurb: "The event site for the Bradford Quantum Hackathon 2025, hosted by the University of Bradford, Quantinuum, and Aqora. Alongside the website that I designed in Framer, I designed further event assets, including a multipage flyer.",
      embed: "",
      link: "https://quantumbradford2025.com/"
    },
    {
      slug: "quantinuum-sg-grand-challenge",
      title: "Quantinuum SG Grand Challenge site",
      context: "Aqora",
      type: "Web design",
      year: "2026",
      hue: 160,
      thumb: "images/visuals/quantinuum-grand-challenge.jpg",
      blurb: "The event site for the Quantinuum SG Grand Challenge 2026, a quantum computing challenge organized by Quantinuum and supported by Singapore's National Quantum Office and Aqora. Challenge, themes, timeline, prizes, mentors, and judges on one page, with the grand finale in Singapore.",
      embed: "",
      link: "https://quantinuum-sg-grand-challenge-2026.aqora.io/"
    },
    {
      slug: "ferienwohnungen-visser",
      title: "Holiday apartments website",
      context: "Family business",
      type: "Web design",
      year: "2020",
      hue: 140,
      thumb: "images/visuals/ferienwohnungen.jpg",
      blurb: "The website for my family's holiday apartments in Norden on the North Sea coast, built to win direct bookings in a market dominated by travel platforms.",
      embed: "",
      link: ""
    },
    {
      slug: "cargoboard-api-page",
      title: "Cargoboard API use case",
      context: "Cargoboard",
      type: "Web design",
      year: "2023",
      hue: 0,
      thumb: "images/visuals/cargoboard-api.jpg",
      blurb: "The automation use-case page on cargoboard.com, one of the marketing pages from the website relaunch: the shipping API explained to shop and ERP owners, set in the rebrand's type, color, and illustration system.",
      embed: "",
      link: "https://cargoboard.com/de/use-cases/automatisierung"
    },
    {
      slug: "figma-onboarding",
      title: "Onboarding screens",
      context: "Figma Community",
      type: "UI kit · iOS",
      year: "2023",
      hue: 220,
      thumb: "images/visuals/figma-onboarding.jpg",
      blurb: "A set of simplistic iOS onboarding screens, published as a free template on the Figma Community. Playful hand-drawn illustrations over clean, generous layouts.",
      embed: "",
      link: "https://www.figma.com/community/file/1107307239195666218/simplistic-onboarding-screens-ios-app"
    },
    {
      slug: "figma-openmoji",
      title: "OpenMoji template",
      context: "Figma Community",
      type: "Template · Contribution",
      year: "2024",
      hue: 200,
      thumb: "images/visuals/figma-openmoji.jpg",
      blurb: "A Figma template for contributing to the open-source OpenMoji emoji set, with the drawing grid and guides set up so new emoji stay on-system.",
      embed: "",
      link: "https://www.figma.com/community/file/1216405776765570841/openmoji-template"
    },
    {
      slug: "canva-yoga-flyer",
      title: "Yoga flyer template",
      context: "Canva Creator",
      type: "Template · Print",
      year: "",
      hue: 30,
      thumb: "images/visuals/canva-yoga-flyer.jpg",
      blurb: "A yoga studio flyer from my Canva Creator collection: free, customizable templates for small brands. One of the designs I publish on Canva.",
      embed: "",
      // The template itself is no longer online, so the link points to the
      // Canva Creator profile (the collection) instead.
      link: "https://www.canva.com/p/lisanne-visser/"
    },
    {
      slug: "canva-sale-flyer",
      title: "Fashion sale flyer",
      context: "Canva Creator",
      type: "Template · Print",
      year: "",
      hue: 235,
      thumb: "images/visuals/canva-sale-flyer.jpg",
      blurb: "A two-sided sale flyer from my Canva Creator collection: an oversized SALE lockup cut into the photo on the front, the brand story and the offer on the back. Free to use and fully editable.",
      embed: "",
      link: "https://www.canva.com/de_de/vorlagen/EAGEuCoS1eY-blau-modern-fotografisch-sale-rabatt-ausverkauf-mode-flyer/"
    },
    {
      slug: "illustration-adventure-set",
      title: "Illustration Adventure Set",
      context: "Behance",
      type: "Illustration",
      year: "",
      hue: 260,
      thumb: "images/visuals/illustration-adventure-set.jpg",
      blurb: "A set of adventure-themed illustrations, published as a project on Behance.",
      // Behance smart embed (behance.net/embed/project/<id>); the modal
      // shows an "Open in Behance" link as a fallback.
      embed: "https://www.behance.net/embed/project/164796291?ilo0=1",
      link: "https://www.behance.net/gallery/164796291/Illustration-Adventure-Set"
    },
    {
      slug: "facelyu",
      title: "FacelyU face yoga app",
      context: "Side project",
      type: "App · Social media",
      year: "2020",
      hue: 350,
      thumb: "images/visuals/facelyu.jpg",
      blurb: "My first design project ever: a face yoga app, built with a developer as a side project on the bet that face yoga would take off during the pandemic (it did). I designed the app and ran the social media, growing the Instagram account to 750+ followers within months.",
      embed: "",
      link: "https://www.instagram.com/facely_u/"
    },
    {
      slug: "facelyu-screens",
      title: "FacelyU app screens",
      context: "Side project",
      type: "App · iOS",
      year: "2020",
      hue: 20,
      thumb: "images/visuals/facelyu-screens.jpg",
      blurb: "Screens from the FacelyU iOS app: choosing a workout, music, and focus area, the session player, and the daily reminder. Soft peach gradients with a serif display face to keep a calm, self-care feel.",
      embed: "",
      link: ""
    },
    // Second to last on purpose: the 9:16 story is the tallest card in the
    // grid, so far up it dominates the page (and on mobile, where the grid
    // collapses to one column, you hit it almost immediately).
    {
      slug: "canva-food-story",
      title: "Animated story template",
      context: "Canva Creator",
      type: "Template · Instagram",
      year: "",
      hue: 150,
      // Still frame, not the animation: Canva's own preview mp4 drops the
      // "Jetzt neu" headline, so the card shows the finished frame instead.
      thumb: "images/visuals/canva-food-story.jpg",
      fit: "contain",
      blurb: "An animated Instagram story for local food businesses, from my Canva Creator collection. Grid paper, a two-tone green palette, thick hand-drawn line art. Built so a shop owner can swap in their own offer and post it without touching the layout or the timing.",
      embed: "",
      link: "https://www.canva.com/de_de/vorlagen/EAF85hLHAEM-beige-grun-animiert-nostalgisch-essen-lokal-werbung-instagram-story/"
    },
    {
      slug: "figma-make-tech-talk",
      title: "AI-powered prototyping with Figma Make",
      context: "Trusted Shops",
      type: "Tech talk · Slides",
      year: "2026",
      hue: 265,
      thumb: "images/visuals/figma-make-talk.jpg",
      blurb: "An internal tech talk at Trusted Shops on how we took conversion tests from up to two weeks to two days with Figma Make: the problem, the tool comparison, the two-day journey from first prompt to live test, and the 90% rule that keeps UX in the loop. This public version leaves out the slides on internal tool access.",
      embed: "",
      link: "talks/ai-prototyping-figma-make.pdf"
    },
    // Last on purpose: with the masonry columns this puts the deck at the
    // bottom right of the grid.
    {
      slug: "goettingen-guest-lecture",
      title: "From sociology to product design",
      context: "University of Göttingen",
      type: "Guest lecture · Slides",
      year: "2025",
      hue: 90,
      thumb: "images/visuals/goettingen-lecture.jpg",
      blurb: "An invited guest lecture at the University of Göttingen on career perspectives for sociology students: how I went from sociology into product design, and where data, design, and intercultural perspectives meet in my work. The deck is in German, built in Figma Slides.",
      // Figma Slides embed (embed.figma.com/deck/<key>?embed-host=share).
      // The modal also shows an "Open in Figma" link as a fallback.
      embed: "https://embed.figma.com/deck/alZHbAaFOxhgAfXdBMLC5s?embed-host=share",
      link: "https://www.figma.com/deck/alZHbAaFOxhgAfXdBMLC5s"
    }
  ],

  // #/sketchbook — photos of hand-drawn work. Personal drawing practice,
  // kept separate from #/visuals (which is digital work). Each entry:
  // { slug, title, medium, thumb (grid), full (lightbox), blurb? }.
  // Newest first, so reading bottom to top shows how the drawing evolved.
  sketchbook: [
    {
      slug: "seascape-painting",
      title: "Seascape",
      medium: "Acrylic on canvas",
      thumb: "images/sketchbook/seascape-painting-thumb.jpg",
      full: "images/sketchbook/seascape-painting.jpg",
      blurb: "A small painting of a bay at dusk, built up in short, thick strokes."
    },
    {
      slug: "lion-skull",
      title: "Lion skull",
      medium: "Ink and watercolor",
      thumb: "images/sketchbook/lion-skull-thumb.jpg",
      full: "images/sketchbook/lion-skull.jpg",
      blurb: "A lion skull in ink and gray wash, laid over a spread of warm brown watercolor."
    },
    {
      slug: "skeleton-foot",
      title: "Foot bones",
      medium: "Ink",
      thumb: "images/sketchbook/skeleton-foot-thumb.jpg?v=2",
      full: "images/sketchbook/skeleton-foot.jpg",
      blurb: "An anatomy study of the lower leg and foot in black ink, next to a page of loose watercolor washes."
    },
    {
      slug: "lighthouse-watercolor",
      title: "Lighthouse",
      medium: "Watercolor and ink",
      thumb: "images/sketchbook/lighthouse-watercolor-thumb.jpg",
      full: "images/sketchbook/lighthouse-watercolor.jpg",
      blurb: "A lighthouse drawn with a fountain pen, then washed in with a small travel palette."
    },
    {
      slug: "eye-anatomy-studies",
      title: "Eye studies",
      medium: "Graphite and ink",
      thumb: "images/sketchbook/eye-anatomy-studies-thumb.jpg",
      full: "images/sketchbook/eye-anatomy-studies.jpg",
      blurb: "Anatomy notes on eyes and noses, drawn along with a tutorial, next to a page of pen tests."
    },
    {
      slug: "life-drawing-seated",
      title: "Life drawing",
      medium: "Ink wash",
      thumb: "images/sketchbook/life-drawing-seated-thumb.jpg",
      full: "images/sketchbook/life-drawing-seated.jpg",
      blurb: "A seated figure worked in ink wash, building the form from light to dark."
    },
    {
      slug: "pikachu",
      title: "Pikachu",
      medium: "Watercolor and ink",
      thumb: "images/sketchbook/pikachu-thumb.jpg",
      full: "images/sketchbook/pikachu.jpg",
      blurb: "A loose watercolor with a soft, blended background."
    },
    {
      slug: "dog-paw",
      title: "Dog paw",
      medium: "Ink wash",
      thumb: "images/sketchbook/dog-paw-thumb.jpg",
      full: "images/sketchbook/dog-paw.jpg",
      blurb: "The bones of a dog's paw in ink on a toned page, with the dog itself keeping an eye on things."
    },
    {
      slug: "color-tests",
      title: "Color tests",
      medium: "Watercolor",
      thumb: "images/sketchbook/color-tests-portrait-thumb.jpg",
      full: "images/sketchbook/color-tests-portrait.jpg",
      blurb: "A page of swatches and a small portrait, learning a new set of pigments."
    },
    {
      slug: "koi-plate",
      title: "Koi plate",
      medium: "Ceramic painting",
      thumb: "images/sketchbook/koi-plate-2-thumb.jpg",
      full: "images/sketchbook/koi-plate-2.jpg",
      blurb: "A koi drawn onto a ceramic plate at a pottery-painting session."
    },
    {
      slug: "lego-gandalf",
      title: "Lego Gandalf",
      medium: "Digital line art",
      thumb: "images/sketchbook/lego-gandalf-thumb.jpg",
      full: "images/sketchbook/lego-gandalf.jpg",
      blurb: "A clean line drawing done on the iPad."
    },
    {
      slug: "facely-doodles",
      title: "Logo doodles",
      medium: "Ink",
      thumb: "images/sketchbook/facely-doodles-thumb.jpg",
      full: "images/sketchbook/facely-doodles.jpg",
      blurb: "A notebook page of logo and face ideation, drawn small and fast."
    }
  ],

  sideProjects: [
    { kind: "practice", title: "Aerial yoga teaching", detail: "Certified teacher. Weekly classes. Keeps me humble about balance, patience, and what 'effortless' actually costs to build.", tag: "Off-screen" },
    { kind: "reading", title: "~30 books tracked in 2025", detail: "Mix of design, behavioral science, and fiction. Currently: Thinking, Fast and Slow · Klara and the Sun · Design is Storytelling.", tag: "Input" },
    { kind: "making", title: "Canva side work", detail: "Brand guidelines, pitch decks, social kits for small brands, a low-pressure way to stay sharp on visual systems outside of product.", tag: "Visual" },
    { kind: "making", title: "Sketchbook practice", detail: "Weekly portraits, still life, urban sketching. The hand-drawn scribbles you see around this portfolio are all mine.", tag: "Visual" }
  ],

  reading: {
    now: [
      { t: "Thinking, Fast and Slow", a: "Kahneman" },
      { t: "Design is Storytelling", a: "Lupton" },
      { t: "Klara and the Sun", a: "Ishiguro" }
    ],
    recent: [
      { t: "The Design of Everyday Things", a: "Norman" },
      { t: "Laws of UX", a: "Yablonski" },
      { t: "Hooked", a: "Eyal" },
      { t: "Sprint", a: "Knapp" },
      { t: "Radical Candor", a: "Scott" },
      { t: "Information Architecture", a: "Rosenfeld" }
    ]
  },

  // Full bookshelf — covers pulled live from OpenLibrary by ISBN, or from
  // images/books/ where OpenLibrary has none.
  // Reviews are Lisanne's own words; keep verbatim.
  books: [
    { title: "Artemis Fowl", author: "Eoin Colfer", cover: "https://covers.openlibrary.org/b/isbn/9780141339092-L.jpg", rating: 5, tags: ["Fiction", "Sci-Fi"], color: "#059669", review: `My favourite book as a kid, and still one that shaped me in ways I can trace back clearly. The intelligence, high-tech world-building, and sheer creativity of Colfer's universe fascinated me and laid an early foundation for my interest in innovation and clever thinking. It's also a brilliant case study in character development: Artemis starts as an outright villain and evolves in ways that feel earned. The world-building is extraordinarily inventive. My Harry Potter, except the magic is partly technology. :)` },
    { title: "Design for Impact", author: "Erin Weigel", cover: "images/books/design-for-impact.jpg", rating: 5, tags: ["Design", "UX", "A/B Testing"], color: "#7C3AED", review: `Erin Weigel argues for exactly what I do every day in conversion design: design has to be beautiful, but it also has to be effective, and it has to prove that in measurable outcomes. Bringing design and business together like this is 100% my approach. I came across the book because Weigel spoke at a conversion conference I attended in 2024. She's a seriously good speaker, and afterwards my colleague (also a conversion manager) and I both bought the book on the spot and had it signed. I'm a big fan of her work, because she sits right in the niche between design and business.` },
    { title: "Design is Storytelling", author: "Ellen Lupton", cover: "images/books/design-is-storytelling.jpg", rating: 3, tags: ["Design", "Creativity"], color: "#DB2777", review: `I haven't read this one cover to cover yet, but it's on my shelf for a reason. I think storytelling is one of the most underrated skills there is, and Ellen Lupton bringing it together with design is a name in itself. I notice it most when working with business stakeholders: it's not always the numbers that convince. Some product ideas come without any data, and you still know they'll work (maybe because they're simply best practice). You still have to sell them, and in the end what makes the cut is the story. Same when you pitch yourself as a freelancer or in a job application.` },
    { title: "Die globale Finanzklasse", author: "Sighard Neckel, Lukas Hofstätter & Marco Hohmann", cover: "https://covers.openlibrary.org/b/isbn/9783593509006-L.jpg", rating: 5, tags: ["Sociology", "Qualitative Research", "Economy"], color: "#0F766E", review: `A sociological look at the people behind global finance: business, careers and culture of finance professionals in Frankfurt and Sydney. What makes it worth reading is how it treats an elite most of us only know from headlines as a social group with its own rules, rituals and blind spots. I read it for my master's thesis and found it just as interesting methodologically: the idea of studying the culture that shapes one particular group worldwide, and the mechanisms of belonging and distinction that hold it together.` },
    { title: "Don't Make Me Think", author: "Steve Krug", cover: "https://covers.openlibrary.org/b/isbn/0321965515-L.jpg", rating: 5, tags: ["UX", "Usability"], color: "#1a1a1a", finished: "2022-03", review: `One of the first UX books I read. Krug writes simply and accessibly, and with great examples he gives you a clear sense of what really matters in UX. A good way in for anyone new to the field.` },
    { title: "Emojis", author: "Gala Rebane", cover: "images/books/emojis.jpg", rating: 4, tags: ["Culture", "Communication"], color: "#F59E0B", review: `Emojis are one of my little passion topics. One of my very first term papers, in a course on communication in cultural contexts (ethnology was my minor during my sociology bachelor's), was about emojis. Around the same time, during my semester in Singapore in 2014, a visual culture course had me look at them again in a group project: how do emojis communicate, and do they work as a means of communication on their own? Back then there was hardly any research or literature on it, and people barely used emojis on their own. That has changed a lot. So when I saw this book in a bookshop a few months ago, I had to buy it. Rebane looks at exactly the questions I care about: what emojis mean, what meaning we ascribe to them, and how a new visual language develops. Plus, learning Chinese has made me curious about writing systems built on signs anyway.` },
    { title: "Floating City", author: "Sudhir Venkatesh", cover: "https://covers.openlibrary.org/b/isbn/9781594204166-L.jpg", rating: 4, tags: ["Sociology", "Qualitative Research"], color: "#334155", review: `Floating City tells the story of a megacity's other side: the people who get left behind as the city grows richer. Venkatesh shares the thoughts that usually have no place in academic writing and only end up in private research diaries. It's not a classic introduction (it's light on theory and has no pointers to further reading), but I'd recommend it to anyone who wants to get to know sociology through real situations and everyday life rather than through theory. My full [review of Floating City on soziologieblog](https://soziologieblog.hypotheses.org/9657) (2016, in German).` },
    { title: "Gespräche analysieren", author: "Arnulf Deppermann", cover: "images/books/gespraeche-analysieren.jpg", rating: 3, tags: ["Research", "Qualitative Research", "Communication"], color: "#4B5563", review: `Deppermann's introduction to conversation analysis opened up a completely different way of looking at qualitative data. The focus on sequential structure, turn-taking, and the micro-level mechanics of talk makes you realise how much is communicated below the surface of any interview or user session. Highly academic, but the analytical tools it provides are genuinely transferable to UX research practice.` },
    { title: "Global Modernity", author: "Volker H. Schmidt", cover: "https://covers.openlibrary.org/b/isbn/9781137435804-L.jpg", rating: 5, tags: ["Sociology", "Globalization"], color: "#1E3A8A", review: `I love this book, and it shaped my master's thesis. I'm fascinated by Western- and Eurocentrism, and by something I keep noticing here in the West: we name Eurocentrism once, agree that it's bad, and from that moment on consider ourselves free of it, while staying just as unreflectedly Euro- or Western-centric as before. It stuck with me because of a sociological theory course during my semester abroad in Singapore. Next to the classics like Marx and Weber, it also covered a woman and Asian sociologists and founding figures that the canon usually leaves out. The topic has stayed with me ever since and is a big part of why my master's became so interdisciplinary. Schmidt, a sociologist at the National University of Singapore, describes how modernity moved from a Eurocentric to a Western-centric and now a polycentric phase, and that gave me the vocabulary for it.` },
    { title: "Information Architecture", author: "Louis Rosenfeld, Peter Morville & Jorge Arango", cover: "https://covers.openlibrary.org/b/isbn/1491911689-L.jpg", rating: 4, tags: ["Information Architecture", "UX"], color: "#1E40AF", finished: "2023-05", review: `The definitive guide to organizing information for the web, and a book I use regularly as a reference for navigation, labeling, and search systems. Some parts show their age (the current edition is from 2015), especially now that AI increasingly shapes how people find information. And once you're really deep into the do's and don'ts of a search or a navigation, I'd have loved five times as much content on some topics.` },
    { title: "Interpretative Sozialforschung", author: "Gabriele Rosenthal", cover: "images/books/interpretative-sozialforschung.jpg", rating: 3, tags: ["Research", "Qualitative Research"], color: "#92400E", review: `Honestly, this book is terribly written, and it tormented me when I had to read it during my bachelor's. My view of Rosenthal changed completely during my master's thesis, when I was accepted into her doctoral colloquium. We discussed everyone's theses and sometimes interpreted individual data points together, and I gained the greatest respect for her as a researcher. In photo reconstruction, for example, it's fascinating how accurately several people independently arrive at very similar interpretations of an artifact, just from looking at it, from listening, or from the pauses in someone's speech. The book repeats itself a lot, but Rosenthal's work turned me into an absolutely huge fan of qualitative social research.` },
    { title: "Katabasis", author: "R. F. Kuang", cover: "https://covers.openlibrary.org/b/isbn/9780008501860-L.jpg", rating: 4, tags: ["Fiction", "Fantasy"], color: "#7F1D1D", review: `Two grad students walk into Hell to bring back their dead advisor, because without him there's no recommendation letter. Kuang turns the pressure of academic ambition into a literal underworld, full of logic puzzles and paradoxes. Having spent my own share of years at university, the satire landed close to home. Some stretches drag a little, but the premise alone is worth the read. It's also the book that put Kuang on my radar, and I've followed her work closely ever since. Her research is seriously impressive.` },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364886-L.jpg", rating: 5, tags: ["Fiction", "Technology"], color: "#DB2777", review: `I read this after visiting the Nobel museum earlier this year. It was my first Ishiguro, and it's probably the best book I've read this year. The blend of technology and naivety is what captivates me most. Klara is an artificial friend: deeply observant, endlessly curious, and entirely without cynicism. The setting has something dystopian about it, yet her openness and optimism make the whole story feel wrapped in cotton wool, as if her naivety draws a sheltered world around everything she sees. That quietly raises big questions about what's real, what authenticity means, and what humanity actually rests on. Ishiguro also shows that smart technology deserves the same empathy we should give each other, a reminder that how we treat the things we create says a lot about who we are. I was happy to learn shortly afterwards that it's being made into a film.` },
    { title: "Klassiker des Produktdesigns", author: "Petra Eisele", cover: "", rating: 4, tags: ["Design", "Industrial Design"], color: "#F59E0B", finished: "2025-01", review: `A beautifully curated collection of iconic product designs and the stories behind them. From Bauhaus to Braun, it's a reminder that good design is timeless and that digital product design shares deeper roots with industrial design than we often realize.` },
    { title: "Laws of UX", author: "Jon Yablonski", cover: "images/books/laws-of-ux.jpg", rating: 3, tags: ["UX", "Psychology"], color: "#7C3AED", finished: "2024-04", review: `A solid collection of psychological principles applied to design. Fitts's Law, Hick's Law, Jakob's Law: I reference these constantly when making design decisions and defending them to stakeholders. The book goes deep on each principle, but honestly, the level of detail isn't necessary to apply them successfully. For my day-to-day work I prefer [Coglode](https://www.coglode.com/). It covers the same behavioral principles in a digital, easily accessible format that's faster to reference in the moment. The website alone gives you enough to work with.` },
    { title: "Lean UX", author: "Jeff Gothelf & Josh Seiden", cover: "images/books/lean-ux.jpg", rating: 3, tags: ["UX", "Product", "Design Thinking"], color: "#16A34A", review: `Lean UX makes the case for getting design out of the deliverables business and into the outcomes business. Gothelf and Seiden challenge the idea that polished specs and documents are the goal. Instead, the goal is learning fast and building the right thing. Particularly relevant if you work in agile environments where design often struggles to keep pace. Concise, opinionated, and practical.` },
    { title: "Measuring the User Experience", author: "Tom Tullis & Bill Albert", cover: "images/books/measuring-the-user-experience.jpg", rating: 4, tags: ["UX Research", "Data"], color: "#0891B2", finished: "2024-09", review: `This book didn't teach me how to do UX research. I use it as a reference. Where it really helps is as a bridge: if you come from social research, it shows you how research is done in the world of digital products, from usability metrics to benchmarks.` },
    { title: "Neuromarketing", author: "Hans-Georg Häusel", cover: "images/books/neuromarketing.jpg", rating: 4, tags: ["Psychology", "Marketing"], color: "#DC2626", review: `Häusel translates neuroscience into accessible insights about why people make decisions, and how emotional and unconscious processes dominate far more than we'd like to admit. The Limbic® model he develops is a useful framework for thinking about user motivations beyond surface-level needs. Some parts feel a bit oversimplified for a scientific topic, but as a practical lens for design and communication decisions, it's genuinely illuminating. What I find unacceptable: the questionnaire behind the model isn't publicly available, you have to pay for it. Still, neuromarketing as a concept is interesting, and the limbic types are a tempting idea.` },
    { title: "Peter Schlemihls wundersame Geschichte", author: "Adelbert von Chamisso", cover: "https://covers.openlibrary.org/b/isbn/9783150000939-L.jpg", rating: 5, tags: ["Fiction", "Classics"], color: "#EAB308", review: `Not just one of my favorite Reclam books, one of my favorite books, period. A man sells his shadow to a stranger in a grey coat for a bottomless bag of gold, and finds out that a life without a shadow is no life at all. I love realistic stories with light surreal elements, and this is exactly that. The story is simple and catchy, but so effective: you feel everything that happens to Schlemihl, and he goes on a real journey, from what he thinks he wants to what he actually wants in the end. Wonderful.` },
    { title: "Psychoanalytikerin trifft Marina Abramović", author: "Jeannette Fischer", cover: "images/books/psychoanalytikerin-trifft-marina-abramovic.jpg", rating: 5, tags: ["Art", "Psychology"], color: "#BE185D", review: `A fascinating encounter between two remarkable women: Jeannette Fischer, a Freudian psychoanalyst, and Marina Abramović, one of the most radical performance artists of our time. Over four days of free associative conversations, they explore the structures and dynamics underlying Abramović's life and work. What makes this book so compelling is how it uses psychoanalysis not as a diagnostic lens but as a tool for genuine curiosity and understanding. It's a rare kind of dialogue, one where both parties bring equal weight, and the result feels deeply human.` },
    { title: "Radical Candor", author: "Kim Scott", cover: "https://covers.openlibrary.org/b/isbn/1250235375-L.jpg", rating: 5, tags: ["Leadership", "Communication"], color: "#DC2626", finished: "2025-03", review: `I met Kim Scott while I was working at TikTok, where she gave a talk about the book, and it stuck with me. Her framework for caring personally while challenging directly changed how I give and receive design feedback. Essential for anyone leading design reviews or working closely with cross-functional teams.` },
    { title: "Rekonstruktive Sozialforschung", author: "Ralf Bohnsack", cover: "images/books/rekonstruktive-sozialforschung.jpg", rating: 3, tags: ["Research", "Qualitative Research"], color: "#6D28D9", review: `Bohnsack's framework for reconstructive social research (particularly the documentary method) is one of the most systematic approaches to qualitative analysis out there. It distinguishes carefully between what people say and the implicit orientations that structure their thinking, which makes it just as useful for understanding user behavior. One of the staples on my shelf of qualitative research books.` },
    { title: "Rendering in Pen and Ink", author: "Arthur L. Guptill", cover: "https://covers.openlibrary.org/b/isbn/0823045293-L.jpg", rating: 5, tags: ["Art", "Drawing"], color: "#1a1a1a", review: `The classic on pen and ink technique, first published in 1930 and still the standard. Guptill builds the craft up methodically: line quality, hatching, values, composition, texture, all illustrated with hundreds of examples from master illustrators and architects. These days I draw almost exclusively with a dip pen and an ink pot, so this book feels like the natural companion. Ink drawing has been normalized and engineered into every disposable pen and fountain pen, and Guptill takes it back to its origins. That the book went out of print and was later reissued fascinates me too.` },
    { title: "Show Your Work!", author: "Austin Kleon", cover: "https://covers.openlibrary.org/b/isbn/076117897X-L.jpg", rating: 3, tags: ["Creativity", "Career"], color: "#1a1a1a", finished: "2024-06", review: `There's always a fine line between what you show and what you deliberately hold back, and when you dare to show something at all. Kleon makes an encouraging case for sharing your process, not just the polished result. He has written a whole series of small books along these lines.` },
    { title: "Siddhartha", author: "Hermann Hesse", cover: "https://covers.openlibrary.org/b/isbn/9783518366820-L.jpg", rating: 5, tags: ["Fiction", "Philosophy"], color: "#D97706", review: `One of those books that stays with you for decades. Hesse's prose is artistically stunning. The writing itself is an experience. What also impresses me is how deeply researched and culturally respectful it is: the book was warmly received in Asia itself, which says a lot about the level of intercultural reflection and authenticity Hesse brought to it. A model for how to engage seriously with a culture that isn't your own. Beyond that, it's a book that helps me slow down and come back to myself, a quality I deeply value, especially given that yoga and meditation are a big part of my personal life. Hesse is one of my favourite authors, and this is him at his best.` },
    { title: "Social Physics", author: "Alex Pentland", cover: "https://covers.openlibrary.org/b/isbn/9780143126331-L.jpg", rating: 5, tags: ["Sociology", "Data"], color: "#EA580C", review: `You have to read Social Physics as what it is: popular science. In that role it's a good starting point to get familiar with the topic and to spark interest, and it's simply fun to read. The results the researchers got with their methods are astonishing. The most interesting conclusion for me was the forecast of a quiet shift in society, driven by technologies most people aren't (yet) aware of. Whether that forecast holds is still open, but it's a young, interdisciplinary field worth watching. Looking back (I read it a decade ago), I sometimes wonder whether Pentland, as a natural scientist, simply reinvented sociology, with other methods and a focus that leans toward network sociology. I have the same thought whenever computer science or HCI institutes do what is essentially social research without working social-scientifically. It reminds me why I became interdisciplinary in the first place. I wrote a longer [review of Social Physics on soziologieblog](https://soziologieblog.hypotheses.org/9222) (2016, in German).` },
    { title: "Sprint", author: "Jake Knapp", cover: "https://covers.openlibrary.org/b/isbn/150112174X-L.jpg", rating: 2, tags: ["Design Thinking", "Product"], color: "#F59E0B", finished: "2023-11", review: `The Google Ventures design sprint method in book form: five days from problem to tested prototype. I run design sprints regularly, and I haven't once felt I needed this book. The [Character.vc sprint guide](https://www.character.vc/guide/design-sprint) covers everything essential to run a successful sprint, which makes the book a nice-to-have at best.` },
    { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://covers.openlibrary.org/b/isbn/0465050654-L.jpg", rating: 5, tags: ["Design", "Psychology"], color: "#2D3561", finished: "2021-06", review: `Norman's concept of affordances is the foundation so much of interaction design builds on. I haven't read it as thoroughly as I should have, honestly. But my copy is signed: I met Don Norman in person at one of his talks.` },
    { title: "Thinking with Type", author: "Ellen Lupton", cover: "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg", rating: 4, tags: ["Design", "Typography"], color: "#1a1a1a", review: `Ellen Lupton's classic on typography, structured in three parts: letter, text, and grid. It breaks down letterforms, spacing, hierarchy, and layout in a way that's approachable without being dumbed down, with plenty of visual examples. It works as an introduction and as a reference, and holds up regardless of medium or trend.` },
    { title: "UX Research", author: "Brad Nunnally & David Farkas", cover: "images/books/ux-research.jpg", rating: 3, tags: ["UX Research", "Research"], color: "#0891B2", review: `A solid reference for the full spectrum of UX research methods. Nunnally and Farkas cover everything from usability testing to card sorting to diary studies, with enough practical guidance to actually run the studies yourself. It reads like a handbook, which makes it useful to have on the shelf when planning a research sprint.` },
    { title: "UX Strategy", author: "Jaime Levy", cover: "images/books/ux-strategy.jpg", rating: 2, tags: ["UX", "Strategy", "Product"], color: "#D97706", review: `Levy sets out to bridge UX practice and business strategy: competitive analysis, validating product direction, positioning design as a strategic lever. The topic is the right one, but for me the book never quite brings it together into a clear concept you could easily put into practice.` },
    { title: "The User Experience Team of One", author: "Leah Buley", cover: "https://covers.openlibrary.org/b/isbn/1933820187-L.jpg", rating: 5, tags: ["UX", "Career"], color: "#059669", finished: "2022-11", review: `My loyal companion in quiet hours. Whenever I worked on projects alone, either because I really was the only designer or because I was doing something that didn't exist as a practice in the company or team before, this book was a good friend. Buley's methods for evangelizing design within an organization and doing meaningful research with limited resources are practical, and useful even when you're not a team of one.` },
    { title: "UX Writing & Microcopy", author: "Kinneret Yifrah", cover: "", rating: 4, tags: ["UX", "Writing"], color: "#0891B2", review: `A thorough, practical guide to the words in an interface. Yifrah makes the case that microcopy isn't decoration, it is the interface. The book covers everything from error messages to onboarding flows, with examples concrete enough to apply right away, and puts a strong emphasis on a consistent tone and voice.` }
  ],

  // ------------------------------------------------------------------
  // Chinese learning library (#/chinese) — a personal, curated
  // collection of Mandarin resources. The taxonomy below is the
  // long-term sorting system; the planned filter UI will be generated
  // from it, so keep ids stable once resources reference them.
  // Each resource: type (exactly one), skills + levels (one or more;
  // culture-side entries like the Tsinghua design course may leave both
  // empty), cost (one), plus an optional hsk field for resources that organize
  // their content around a specific HSK numbering (old 2.0 vs new 3.0).
  // Levels follow the new HSK 3.0 bands. All resources render in one
  // flat list; the filters at the top are the only grouping.
  chineseTaxonomy: {
    types: [
      { id: "reading",    label: "Reading",    zh: "阅读" },
      { id: "listening",  label: "Listening",  zh: "听力" },
      { id: "video",      label: "Video",      zh: "视频" },
      { id: "app",        label: "App",        zh: "应用" },
      { id: "course",     label: "Course",     zh: "课程" },
      { id: "podcast",    label: "Podcast",    zh: "播客" },
      { id: "dictionary", label: "Dictionary", zh: "词典" },
      { id: "tool",       label: "Tool",       zh: "工具" },
      { id: "community",  label: "Community",  zh: "社区" }
    ],
    // Skills mirror the course units of a Chinese degree program:
    // 阅读 reading, 听力 listening, 口语 speaking, 写作 writing, and so on.
    skills: [
      { id: "reading",       label: "Reading",       zh: "阅读" },
      { id: "listening",     label: "Listening",     zh: "听力" },
      { id: "speaking",      label: "Speaking",      zh: "口语" },
      { id: "writing",       label: "Writing",       zh: "写作" },
      { id: "characters",    label: "Characters",    zh: "汉字" },
      { id: "vocabulary",    label: "Vocabulary",    zh: "词汇" },
      { id: "grammar",       label: "Grammar",       zh: "语法" },
      { id: "pronunciation", label: "Pronunciation", zh: "发音" }
    ],
    levels: [
      { id: "beginner",     label: "Beginner",     zh: "初级", hint: "HSK 1-3" },
      { id: "intermediate", label: "Intermediate", zh: "中级", hint: "HSK 4-6" },
      { id: "advanced",     label: "Advanced",     zh: "高级", hint: "HSK 7-9" }
    ],
    costs: [
      { id: "free",     label: "Free",     zh: "免费" },
      { id: "freemium", label: "Freemium", zh: "部分免费" },
      { id: "paid",     label: "Paid",     zh: "付费" }
    ],
    hskVersions: [
      { id: "hsk2", label: "Old HSK 2.0", zh: "旧版" },
      { id: "hsk3", label: "New HSK 3.0", zh: "新版" }
    ]
  },

  chineseResources: [
    {
      title: "Let's Read Chinese",
      url: "https://letsreadchinese.com/",
      type: "reading",
      skills: ["reading", "vocabulary"],
      levels: ["beginner", "intermediate"],
      cost: "free",
      note: "Graded reading practice: short texts sorted by level, so you read at the edge of what you know instead of drowning in a native article."
    },
    {
      title: "Pleco",
      url: "https://www.pleco.com/",
      type: "dictionary",
      skills: ["reading", "characters", "vocabulary"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "freemium",
      note: "The dictionary every learner ends up with: handwriting input, OCR, and add-on dictionaries, so an unknown character is never more than a scribble away."
    },
    {
      title: "Zhongwen",
      url: "https://chromewebstore.google.com/detail/zhongwen-chinese-english/kkmlkkjojmombglmlpbpapmhcaljjkde",
      type: "tool",
      skills: ["reading", "vocabulary"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "free",
      note: "Popup dictionary as a browser extension: hover over any character on any page and get pinyin with tone colors and a translation. Freshly installed, and it already makes the whole Chinese web feel readable."
    },
    {
      title: "Language Reactor",
      url: "https://www.languagereactor.com/",
      type: "tool",
      skills: ["listening", "vocabulary"],
      levels: ["intermediate", "advanced"],
      cost: "freemium",
      note: "Dual subtitles and tap-to-look-up words on Netflix and YouTube. New in my toolkit, but the promise is exactly why I installed it: shows I'd watch anyway become listening practice."
    },
    {
      title: "HelloChinese",
      url: "https://www.hellochinese.cc/",
      type: "app",
      skills: ["pronunciation", "characters", "vocabulary", "listening"],
      levels: ["beginner"],
      cost: "freemium",
      note: "The gamified starter app, built for Mandarin instead of copied from another language: tone graphs, speech feedback, stroke animations. An app alone won't teach you a language, but as an on-ramp it's the best of its kind."
    },
    {
      title: "Hack Chinese",
      url: "https://www.hackchinese.com/",
      type: "app",
      skills: ["vocabulary"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "paid",
      note: "Zero-setup vocabulary SRS with curated lists (HSK, common textbooks) and clean progress stats. Pleco stays my everyday dictionary, but for studying I prefer a ready-made, maintained system over building my own decks."
    },
    {
      title: "Hanly",
      url: "https://www.hanlyapp.com/",
      type: "app",
      skills: ["characters", "vocabulary"],
      levels: ["beginner", "intermediate"],
      cost: "freemium",
      note: "Indie app that teaches characters through their actual composition: components first, then the complex characters built from them, with stroke animations and spaced repetition. Free apart from the tap-to-read Reader."
    },
    {
      title: "TeaTime Chinese 茶歇中文",
      url: "https://teatimechinese.com/",
      type: "podcast",
      skills: ["listening", "vocabulary"],
      levels: ["intermediate"],
      cost: "free",
      note: "Culture, history, and current topics in clear, deliberately paced Mandarin. The most recommended intermediate podcast for a reason."
    },
    {
      title: "Learning Chinese Through Stories",
      url: "https://www.learningchinesethroughstories.com/",
      type: "podcast",
      skills: ["listening", "vocabulary"],
      levels: ["intermediate", "advanced"],
      cost: "freemium",
      note: "Story plus story-walkthrough, almost entirely in Chinese. The step from learner podcasts toward authentic listening."
    },
    {
      title: "Cozy Mandarin",
      url: "https://www.cozymandarin.com/",
      type: "podcast",
      skills: ["listening"],
      levels: ["intermediate"],
      cost: "free",
      note: "Short, low-pressure comprehensible-input episodes by a native speaker, published near-daily. Listening practice that actually fits into a routine."
    },
    {
      title: "Short Stories in Chinese (Penguin Parallel Text)",
      url: "https://www.goodreads.com/book/show/10953429-new-penguin-parallel-text",
      type: "reading",
      skills: ["reading", "vocabulary"],
      levels: ["intermediate", "advanced"],
      cost: "paid",
      note: "Eight Chinese short stories with the English translation on the facing page, edited by translator John Balcom. Published in 2013; the stories themselves date from the 1980s and 90s. Real literature in the purest bilingual format."
    },
    {
      title: "Graded Chinese Reader (Sinolingua)",
      url: "https://www.purpleculture.net/graded-readers-c-104_106/",
      type: "reading",
      skills: ["reading", "vocabulary"],
      levels: ["intermediate"],
      cost: "paid",
      note: "The adapted short-story series on my own shelf: contemporary Chinese stories with a pinyin-hiding card in the back, so pinyin is there when you need it and gone when you don't."
    },
    {
      title: "Imagin8 Press",
      url: "https://imagin8press.com/",
      type: "reading",
      skills: ["reading"],
      levels: ["beginner", "intermediate"],
      cost: "paid",
      note: "Small indie press retelling real classics like Journey to the West as graded readers, every page layered with hanzi, pinyin, and English. Real titles instead of invented learner stories, which is exactly how I like my readers."
    },
    {
      title: "Heavenly Path",
      url: "https://heavenlypath.notion.site/",
      type: "community",
      skills: ["reading"],
      levels: ["intermediate", "advanced"],
      cost: "free",
      note: "Community-maintained Notion guide from graded readers to native webnovels, games, and TV, sorted by character count instead of HSK level. The roadmap for what to read next."
    },
    {
      title: "italki",
      url: "https://www.italki.com/",
      type: "community",
      skills: ["speaking"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "paid",
      note: "The marketplace for 1:1 lessons with professional teachers and community tutors. The speaking-practice building block in nearly every serious learning stack."
    },
    {
      title: "HelloTalk",
      url: "https://www.hellotalk.com/",
      type: "community",
      skills: ["speaking", "writing"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "freemium",
      note: "The biggest language-exchange community, and the Mandarin side is one of its most active. Feels like social media: corrections, voice messages, and Moments from native speakers."
    },
    {
      title: "Tandem",
      url: "https://tandem.net/",
      type: "community",
      skills: ["speaking", "writing"],
      levels: ["beginner", "intermediate", "advanced"],
      cost: "freemium",
      note: "Language exchange as structured 1:1 partnerships. The quieter, more focused counterpart to HelloTalk."
    },
    {
      title: "Chinese for HSK (Peking University)",
      url: "https://www.coursera.org/partners/pku",
      type: "course",
      skills: ["vocabulary", "grammar", "listening", "reading"],
      levels: ["beginner", "intermediate"],
      cost: "freemium",
      hsk: "hsk2",
      note: "Peking University, one of China's top universities, runs a full MOOC series on Coursera from HSK 1 up to HSK 5, free to audit. Lecture-style and built on the old HSK levels, but the most rigorous structured path you can take without a classroom."
    },
    {
      title: "Human Factors and Culture in Design (Tsinghua)",
      url: "https://www.edx.org/learn/user-experience-ux/tsinghua-university-user-experience-ux-design-human-factors-and-culture-in-design-she-ji-de-ren-yin-yu-wen-hua",
      type: "course",
      skills: [],
      levels: [],
      cost: "freemium",
      note: "The odd one out, no language training: Tsinghua's UX course on human factors and how culture shapes design, taught through Chinese cases. It sits exactly where Chinese, intercultural training, and my day job in design meet."
    }
  ],

  posts: [
    {
      slug: "design-trends-2027",
      title: "The design trends I'm betting on for 2027",
      date: "2026-08-19",
      dateLabel: "August 2026",
      readingTime: "7 min",
      tags: ["Design", "AI"],
      excerpt: "Perfect looks cheap now, and a good part of the internet looks like the same prompt. My bet for 2027: handwriting, deliberate ugliness, a bit of Dada, and layouts that read like a newspaper.",
      body: [
        { kind: "lead", text: "A confession to start with: when I need a look for something, my first move is to open a chat and ask for options. I get twelve. They're all fine. And a good part of them look like the twelve I got last time, for a completely different project. (That's not the machine being lazy. I asked for modern and clean, which is roughly asking for the average of everything.)" },
        { kind: "paragraph", text: "That sameness is the part worth talking about. Going into 2027, the interesting question is no longer what a design can pull off. It's who a design can prove made it." },

        { kind: "h2", text: "Trend zero: AI minimalism, whether we like it or not" },
        { kind: "paragraph", text: "Soft gradient, centered sans, generous white space, a rounded icon set, one of those faintly glossy 3D illustrations. That's the default look of the moment, and I count it as a trend for 2027 because it can't be avoided. It just wasn't authored by design professionals. It's the middle of the distribution, available instantly." },
        { kind: "paragraph", text: "None of that is an argument against the tools. I use AI in almost every part of my work and I wrote a whole post about why [I'm a better designer with it](#/blog/better-designer-with-ai). It's an argument about what happens when everybody starts from the same default." },
        { kind: "paragraph", text: "There's research behind that now, not just grumbling. Doshi and Hauser showed in [Science Advances](https://doi.org/10.1126/sciadv.adn5290) that writers who took story ideas from a language model were rated as more creative and more enjoyable, while their stories resembled each other more. [Anderson, Shah and Kreminski](https://arxiv.org/abs/2402.01536) measured the same effect for idea generation: more ideas per person, less variety across people. And a 2025 study in [Patterns](https://www.cell.com/patterns/fulltext/S2666-3899%2825%2900299-5) let image and text models feed each other with no human in the loop, where the output collapsed onto roughly a dozen generic motifs." },
        { kind: "paragraph", text: "So the finding isn't that AI makes bad design. It's more uncomfortable than that: AI makes averagely good, highly interchangeable design, in unlimited supply. **When competence gets cheap, the thing left to design is the evidence that a person was here.**" },

        { kind: "h2", text: "Trend 1: Handwriting as proof of life" },
        { kind: "paragraph", text: "The first countermove is the handmade one. Hand lettering, a visible stroke, baselines sitting slightly crooked, paper grain, ink that bleeds, elements that look placed instead of centered. Not as a retro quote. As a signature." },
        { kind: "paragraph", text: "Instagram made that move in the open in August 2026. After a decade the wordmark went, replaced by something half script and half print, with a handwriting face called Instagram Pen and a monospace called Instagram Mono added to the system. You don't have to like the result, and the internet didn't: it was renamed Instagzam within hours. But a company that could afford flawless picked a line that looks like a hand." },
        { kind: "paragraph", text: "The research here is unusually tidy. Fuchs, Schreier and van Osselaer found a [handmade effect](https://doi.org/10.1509/jm.14.0018): stating that a product was made by hand makes it more attractive, and the mediator is a perception that it holds something like affection. Schroll, Schnurr and Grewal showed that [handwritten typefaces](https://www.dhruvgrewal.com/wp-content/uploads/2018/05/2018-JCR-Font-2.pdf) raise the perceived human presence in a product, which is what builds the attachment. And the older [effort heuristic](https://www.sciencedirect.com/science/article/abs/pii/S0022103103000659) from Kruger and colleagues says work that looks like it took effort reads as better and worth more, especially when quality is hard to judge. Which is the situation a reader is in most of the time now." },
        { kind: "callout", label: "Caveat", text: "The effort heuristic has a shaky replication record: a 2023 attempt in Collabra: Psychology got mixed results for two of the original experiments, and later work suggests people only read effort as quality when an effort story is already in their head, not when a talent story is. I treat it as a mechanism, not a law." },

        { kind: "h2", text: "Trend 2: Childlike, and I mean that as a compliment" },
        { kind: "paragraph", text: "Crayon color, wobbly shapes, heads too big for their bodies, sticker logic, things that look like they came out of a school notebook. My reading: this is a distraction move, and the distraction is the point. When the news is permanently too much, an interface that refuses to take itself seriously for a minute is a rest. (I have a soft spot for this one, which is probably diagnostic.)" },
        { kind: "paragraph", text: "There's a measurable side to it. Nittono and colleagues showed in [PLoS ONE](https://doi.org/10.1371/journal.pone.0046362) that looking at cute images narrows attention and makes behavior more careful, with a large improvement in a fine motor task. Childlike form doesn't only set a mood, it changes how people handle a thing. And escapism research from the pandemic and from conflict zones treats light, nostalgic media use as a real coping strategy, with an honest note about the cost when it becomes the only one." },
        { kind: "paragraph", text: "So naive works while it organizes a break. It stops working the moment it tidies away something serious." },

        { kind: "h2", text: "Trend 3: Creative expressionism, ugly included" },
        { kind: "paragraph", text: "From here it gets more fun. The trend I'm most curious about is the uncomfortable one: loud, extreme, overdrawn design that in places is simply ugly. Colors that fight, type squeezed out of shape, layouts with no rest in them, too much of everything." },
        { kind: "paragraph", text: "The point isn't provocation for its own sake. The point is evidence. Generative systems are trained toward the most likely next step, so they pull structurally toward the middle. A decision that runs against every instinct for pleasantness embodies the opposite of that." },
        { kind: "paragraph", text: "Aesthetics research explains why this is more than sulking. The [pleasure-interest model](https://doi.org/10.3389/fpsyg.2017.00015) from Graf and Landwehr splits liking into two routes: pleasure, which comes from things being easy to process, and interest, which comes from working out something that was hard at first. Ugly can buy interest. The most advanced yet acceptable principle from Hekkert, Snelders and van Wieringen (British Journal of Psychology, 2003) is the guardrail: novelty carries as long as the category stays recognizable. And [a 2025 paper by Chen and colleagues](https://doi.org/10.1177/02762374251371282) found that novelty weighs more heavily in crowded categories, which is a fairly precise description of a feed full of generated work." },
        { kind: "paragraph", text: "Which flips the review question. Not: is this pleasant? But: could a machine have produced this? If the answer is yes, in 2027 it's not finished." },

        { kind: "h2", text: "Trend 4: Surrealism and Dada" },
        { kind: "paragraph", text: "From there it's a short walk to the two movements I keep thinking about. Collage with the cuts left visible, scale errors on purpose, text that refuses to make sense, chance used as a method." },
        { kind: "paragraph", text: "The historical parallel is obvious, and I want to be careful with it. Dada came out of the First World War and out of the collapse of a certain faith in reason and progress, and its absurdity was an argument rather than a mood. Tate has a short account of [how artists responded to that war](https://www.tate.org.uk/whats-on/tate-britain/aftermath/nine-ways-artists-responded-first-world-war). Surrealism carried the same refusal toward the unconscious, under the pressure of the crises that followed." },
        { kind: "paragraph", text: "What's different now is the threat. We're not facing a front, we're facing a flood. And here's the objection I have to make against myself: image models are very good at making things look surreal. What they can't do is make a surreal image that carries a claim. This trend only holds where there's an idea behind the break instead of an effect." },

        { kind: "h2", text: "Trend 5: Editorial, and labels" },
        { kind: "paragraph", text: "The quietest of the five, and the one I expect to see in real products first: editorial design in the sense of old newspapers. Column setting, running heads, subheads, captions, a block of body text left standing instead of broken into cards. Next to that, label logic: stamps, batch numbers, footnotes, a line that says checked on." },
        { kind: "paragraph", text: "That references human work twice over. Visually, a newspaper page remembers an editor, a person who decided what goes on top. Structurally, a label is a claim about origin. It's no coincidence that 2026 produced a whole crop of those: the Authors Guild put a Human Authored seal on books, [The Human Made Mark](https://senalnews.com/en/content/the-human-made-mark-launches-global-certification-to-champion-human-creativity-in-film-and-tv) launched for film and television in April, Not By AI badges sit on websites, and [Content Credentials](https://en.wikipedia.org/wiki/Content_Credentials) provide the technical layer underneath. Design is running ahead of that movement aesthetically. A layout that looks like a source note claims provenance before anyone checks a certificate." },
        { kind: "paragraph", text: "And provenance does real work. Bellaiche and colleagues [swapped the labels on artwork](https://doi.org/10.1186/s41235-023-00499-6): every image was AI generated, only the credit line said human or AI, and the human label lifted liking, beauty, profundity and worth. Disclosure research from 2025 and 2026 finds the same discount for ads and for the organizations behind them, though one 2025 study is careful to note that the broader effects are limited. The label isn't everything. It's a lot for four words in a corner." },

        { kind: "h2", text: "What I'm taking into my own work" },
        { kind: "list", style: "bullet", items: [
          { title: "Provenance is the quality signal.", text: "Looking good is table stakes. Being visibly from someone is the part that's scarce." },
          { title: "Perfect is cheap, deciding is not.", text: "The expensive part of a design is the choice nobody else would have made." },
          { title: "A trend isn't an obligation.", text: "A product that promises calm shouldn't get the loud one. Handwriting, editorial and labels combine with almost any tone. Expressionism does not." },
          { title: "One test question per draft.", text: "Could this have fallen out of a prompt? If yes, keep going." }
        ]},
        { kind: "paragraph", text: "My prediction in one sentence: 2027 isn't the year design beats AI. It's the year visibly human work becomes a position you can take, all the way to the slightly exhausting, deliberately unlovely draft whose one unbeatable advantage is that no machine would have built it that way." }
      ]
    },
    {
      slug: "the-part-of-a-cms-i-wanted",
      title: "The part of a CMS I actually wanted",
      date: "2026-08-02",
      dateLabel: "August 2026",
      readingTime: "5 min",
      tags: ["Process", "Craft"],
      excerpt: "I lost the same article twice to a chat window, then briefly considered retrofitting a CMS onto a site that has no business having one. What I built instead is one URL long.",
      body: [
        { kind: "lead", text: "A confession to start with: I have lost the same article twice. Not to a crash and not to a bad merge. I was editing it as markdown inside a chat window, forgot to hit save, switched to another chat because something over there had finished, and came back to an empty slate. (Yes, the same article. No, I did not learn the first time.)" },

        { kind: "h2", text: "Freedom at the top, friction at the bottom" },
        { kind: "paragraph", text: "This site is hand-built: no framework, no build step, and all of the content in a single file called data.js. That gives me a lot of room. A new block type, a card that flips to its opposite face, a chat that replays itself, none of it needs anyone's permission or a plugin that happens to support it." },
        { kind: "paragraph", text: "But inventing block types is not what I do most often. What I do most often is fix a sentence. And for that one job, standing directly in the code is the worst possible place to be. To change a sentence I first have to find it somewhere in a thousand-line object, and then I have to picture what it will look like once it renders. I see the layout in one window and edit in another, and the connection between the two lives in my head." },
        { kind: "paragraph", text: "The workaround was decent: Claude exports an article as markdown, I edit that, the result gets transferred back word for word. Decent enough that I used it for months. Decent enough that I lost two articles to it." },

        { kind: "h2", text: "So, a CMS?" },
        { kind: "paragraph", text: "That is exactly what a CMS is for. So I looked at the good git-based ones, [Sveltia](https://sveltiacms.app), [Decap](https://decapcms.org) and [Tina](https://tina.io), and had Claude cost out what moving would actually take." },
        { kind: "paragraph", text: "The answer was sobering. My content is one nested object with 21 custom block types in it: limitation cards that flip, an animated chat replay, color palettes, type specimens. A CMS wants markdown files or JSON collections with a schema. Mapping mine means writing a schema for every block type and then keeping that schema in sync with the renderer by hand, forever. And the feature I actually wanted, clicking text on the page and typing, needs React. This site is vanilla JavaScript." },
        { kind: "paragraph", text: "So the deal on the table was: rebuild the data layer, maintain a second description of it for the rest of the site's life, and get a form editor at the end of it. A form editor is further away from editing in the design than what I already had. **What I wanted from a CMS was its last hundred meters: touching the text where it lives.** The rest of it is machinery for problems I do not have." },

        { kind: "h2", text: "One URL long" },
        { kind: "paragraph", text: "So we built the last hundred meters instead. It is one file, it only loads when I ask for it, and asking for it means visiting the site once with a key in the URL. From there the browser remembers, and every page I open stays editable until I press Done." },
        { kind: "paragraph", text: "Underneath, the trick is unglamorous. When the site renders a paragraph, it also writes down where that paragraph came from: which case, which section, which paragraph inside that section. The edit mode reads those notes, makes the elements editable, and knows exactly which value to change when I type." },
        { kind: "figure", src: "images/blog/edit-mode-focus.png", alt: "A case study paragraph in edit mode, focused, showing the raw source text with asterisks around a bold phrase. A dark bar at the bottom of the screen reads 52 fields editable.", caption: "Fig. 1 - A paragraph in focus. The field shows the raw source, so the asterisks around a bold phrase are there to be edited instead of hidden behind the rendering." },
        { kind: "paragraph", text: "That last part matters more than it sounds. Click into a paragraph and it shows me the raw text, asterisks and link syntax included. Click away and it renders again. Nothing is interpreted on my behalf, which means what I see while typing is what ends up in the file." },

        { kind: "h2", text: "The part that fixes the lost articles" },
        { kind: "paragraph", text: "Every paragraph I touch stays highlighted for the rest of the session. A list shows old against new with one undo per entry, so I can throw away a single sentence without losing the other nine. Copy puts the whole set on the clipboard as a patch. And if I try to leave with changes I have not copied yet, it asks me first." },
        { kind: "figure", src: "images/blog/edit-mode-changed.png", alt: "The same case study with an edited paragraph highlighted in yellow. The bar at the bottom is expanded into a list showing two changes, each with the old text struck through and the new text below it.", caption: "Fig. 2 - Two edited paragraphs. The list cuts each line at the first character that differs, so the change is visible instead of buried under the identical first half." },
        { kind: "paragraph", text: "That last one is the entire reason for the story at the top of this post." },

        { kind: "h2", text: "Yes, anyone can turn it on" },
        { kind: "paragraph", text: "The key sits in a URL and my repository is public, so nobody should mistake this for a lock. Two reasons I sleep fine anyway. The first: the edit mode has no write path. No token, no backend, no request leaving the page. Whatever you change lives in your browser and nowhere else. The second: you could already do this. Open the developer tools on any site in the world, type document.designMode = 'on' into the console, and you can rewrite this very sentence. I did not add a capability. I added convenience." },
        { kind: "paragraph", text: "What makes it useful is not secrecy. It is that I own the repository and the write rights. An edit only becomes real once it travels through a patch, a pull request and a green CI run that I merge. Everything before that is a suggestion." },

        { kind: "h2", text: "What it still doesn't do" },
        { kind: "paragraph", text: "I still go to the chat. The patch does not apply itself. I paste it, Claude transfers it into data.js word for word, and that is deliberate: my wording is the source of truth here, and I would rather hand over an explicit before-and-after than trust a silent write." },
        { kind: "paragraph", text: "Beyond that, it is text only. No new blocks, no reordering, no images. Rename a section heading and the table of contents keeps the old label until the next reload. There is also a cost I am keeping an eye on, which is that the production markup now carries a set of attributes for a feature that almost no visitor will ever use." },
        { kind: "paragraph", text: "None of that bothers me yet. It is the same move I made with [our conversion-test workflow](#/work/ai-workflow): keep the system that works, and take out the one step that hurts. I can fix a sentence in the place where the sentence lives, from my desk or from my phone, and I never have to leave the codebase that gives me everything else." }
      ]
    },
    {
      slug: "better-designer-with-ai",
      title: "I'm a better designer with AI",
      date: "2026-06-11",
      dateLabel: "June 2026",
      readingTime: "6 min",
      tags: ["AI", "Craft"],
      excerpt: "I don't start a design task without an AI anymore, and I've stopped being ashamed of it. Speed is the boring part. What AI actually does is multiply the experience you bring to it.",
      body: [
        { kind: "lead", text: "A confession to start with: I no longer begin a design task without handing the briefing to an AI first. For a while I was quietly embarrassed about that, as if needing a second brain meant the first one wasn't enough. I've stopped being embarrassed. The conclusion I've landed on is bigger than a workflow tweak: I'm a better designer with AI. Not faster at the same job. Better at the job. Here is what I mean, concretely." },

        { kind: "h2", text: "Faster is the boring part" },
        { kind: "paragraph", text: "Speed is real and it matters, especially in experimentation where the speed of learning is the metric. Conversion tests went from two weeks to two days, audits from a week of screenshots to a day. But faster on its own just means the same work sooner." },
        { kind: "paragraph", text: "The claim I actually want to make is about multiplication: **AI takes the experience you bring to it and multiplies it.** Which also means it needs the experience. You have to know how UX works, what to look for and what to ignore, before the multiplication has anything to work with." },

        { kind: "h2", text: "More judgment reps per week" },
        { kind: "paragraph", text: "Design quality tracks the number of decisions you make consciously, not the number of hours you spend producing. When I run a [UX audit with AI](#/blog/ux-audits-with-ai), it surfaces far more findings than I would alone, and I cut a good part of them before anything reaches the client. Every cut is a small judgment call: Does this heuristic actually apply here? Is that placement actually a problem? Would a real user actually stumble? I used to spend that time taking screenshots and aligning red boxes on slides. Screenshots don't build judgment. The calls do, and I make many more of them per week now." },
        { kind: "paragraph", text: "The same shift happened in [our conversion-test workflow](#/work/ai-workflow). When conversion managers visualize their own ideas in Figma Make, my role in each test is no longer production, it's review: which variant holds up, what breaks the design system, what ships at 90% and what needs the full pass. More tests through the pipeline means more of those decisions land on my desk. That's the part of the job that compounds." },

        { kind: "h2", text: "An extension of my own head" },
        { kind: "paragraph", text: "Brainstorming with AI is a routine part of my work now, and it's the part I used to feel I had to hide. The realization that ended that: using it doesn't mean I can't do it alone. I'd say I'm already decent at looking at a product holistically. Conversion, user-friendliness, enjoyment, dark patterns, growth: those are dimensions I cover by reflex. What AI gives me is an extension of that. The cost of one more perspective is a sentence in a prompt, so the space of perspectives I actually work through has grown, not shrunk." },
        { kind: "paragraph", text: "The same applies to design directions. Instead of committing early to the first idea that survives my own sketching, I see five directions worked out and pick with evidence in front of me. Wider search, then a deliberate narrowing. That order used to be a luxury. Now it's the default." },

        { kind: "h2", text: "Messy prompts, sharp output" },
        { kind: "paragraph", text: "I'd love to tell you AI forced me to write razor-sharp briefs. The truth is that my prompts are often basic. Most of the time I don't even type them: I use voice input, because natural speech carries far more context than a typed prompt and it reflects how I actually think. The valuable part happens after. In its answers and in the back-and-forth, the AI sharpens what I was trying to say." },
        { kind: "paragraph", text: "That's why my writing around the work got better, not just faster. A PR description or a decision summary that comes out of that conversation is more complete and more precise than what I'd produce summarizing myself. Bringing things to the point is what the machine is good at. Supplying the raw thinking is my part." },

        { kind: "h2", text: "Documentation stopped competing with design time" },
        { kind: "paragraph", text: "Clean design files, briefings, business-readiness sheets, documented decisions: I've always treated these as part of the job, and they've always competed with the design work itself for hours. Now documenting is cheap. When I change an existing design, Claude with the Figma MCP compares the original and the new version and writes the changelog, so PMs, developers, and other designers see what changed without me reconstructing it from memory. On new projects I capture the rationale the same way: what I considered, what I rejected, and why." },
        { kind: "figure", hue: 150, label: "Image placeholder", caption: "Fig. 1 - a PM asking to make the documented changelog our new standard, the annotated Figma file in the background." },

        { kind: "h2", text: "Survey analysis at full depth" },
        { kind: "paragraph", text: "Survey analysis is one of the more recent shifts I only applied when Claude Code became available. The honest old reality: most of my surveys got a descriptive reading. Percentages, cross-tabs, a clear summary. That answered the question at hand, but I knew from my academic training that the difference between a pattern and a coincidence deserves a real test. Running one meant SPSS licenses or working in R, and in the pace of product work that time rarely existed." },
        { kind: "paragraph", text: "Now Claude Code writes and runs the Python for me. I say what I want to check, it builds the chi-square test, and my part is judging whether the test fits the data and what the result actually means. The rigor I used to skip costs minutes now. My survey reports got deeper, and a difference only becomes a finding after it survives a test." },

        { kind: "h2", text: "Design QA that ends in a pull request" },
        { kind: "paragraph", text: "Design QA used to end in a file full of screenshots and hand-written comments. Now I respond directly on the pull request or in the QA environment. The AI summarizes my findings, runs the root-cause analysis, and turns the feedback into to-dos a developer can pick up, mostly with the solution already attached. When it makes sense, I go one step further and let it fix the issues and open the pull request itself. The finding and the fix arrive together, and nobody translates between a design file and a ticket anymore." },
        { kind: "chat", caption: "Fig. 2 - the first time I ran this with a developer: QA feedback delivered straight on the pull request.", aria: "Chat between Lisanne and an anonymized developer about design QA feedback left directly on a pull request", messages: [
          { author: "Lisanne", initial: "L", time: "10:37", reaction: "🙌 1", bubbles: [
            { text: "I just finished my feedback, I left a comment in your Github PR 🙂 I hope it's what you wanted. I'm happy to continue working on the new product page together ❤️" }
          ]},
          { author: "Developer", initial: "A", time: "11:10", bubbles: [
            { text: "Org 👀 In my PR directly omg I love this" },
            { text: "I just read a bit, it's the kind of feedback I needed" },
            { text: "Btw I'm a bit curious, how did you do the analysis? If it's something I can add into my workflow, that would be cool!" }
          ]}
        ]},

        { kind: "h2", text: "What it doesn't do" },
        { kind: "paragraph", text: "The mistake is to conclude that the AI is the designer now. It needs to be told which heuristics apply, what the page is trying to achieve, where the user is coming from in the flow: exactly the information that's missing in a company without a UX person, and whose absence you can see in the product. Hand the same task to a non-designer or to an unbriefed AI and you get a similar result, except the AI's version is design slop that people don't recognize as slop yet, because it's new. The difference is the designer who knows what's relevant and catches where the AI runs down the wrong path." },

        { kind: "h2", text: "Better, defined" },
        { kind: "paragraph", text: "I'll admit to a skeptical phase. For a stretch it felt like all I did was prompt, and I want to be a designer and a researcher, not a dispatcher. What got me past it is that the shared work is genuinely fun. When I change a design system component, I know where I want to end up, and I could still build it manually. But handing parts to the agent in Figma, and doing QA or opening a pull request while it works, is a mode of working I wouldn't give back." },
        { kind: "paragraph", text: "So, better, defined: I make more conscious design decisions per week than I did a year ago. I explore wider before I commit. My documentation and my QA feedback are more complete than anything I'd write alone. And I no longer start a task without the second brain, without shame. AI doesn't level the field between designers and non-designers. It multiplies what you bring to it, and what I bring is the experience." }
      ]
    },
    {
      slug: "ux-audits-with-ai",
      title: "How I run UX audits with AI",
      date: "2026-06-10",
      dateLabel: "June 2026",
      readingTime: "7 min",
      tags: ["AI", "Process"],
      excerpt: "My audit is no longer a slide deck about a site. It is a living copy of the site I can pin, share, fix, and, when it's wanted, push to GitHub. Here is the whole workflow.",
      body: [
        { kind: "lead", text: "An audit used to be a time-consuming task. A week of screenshots, a deck full of red boxes, a call where I walk the client through it, and then a PDF that lands in a drive and might sit there forever. I rebuilt the whole workflow and now it looks completely different. The core idea: an audit as a living copy of the site, not a document about it. Yes, it's faster. But the real benefit is that the same artifact carries the finding, and - if the client wants it -, the fix, and the path to production." },

        { kind: "h2", text: "A slide deck is the wrong format" },
        { kind: "paragraph", text: "A traditional audit ends as a static artifact, sitting next to a product it can't touch. Each finding is a slide. The reader has to hold the slide and the live page in their head at the same time and **mentally overlay** one on the other. The gap between \"here is what's wrong\" and \"here is the change\" is exactly where momentum gets lost. The findings can sit in that file forever, and in my experience, many of them do. In the past, I already rebelled against this establishment (look at me, what a rebel). Instead of the traditional slide deck, I opted for Heurio: A software solution that lets you annotate and score your findings in the interface. The results go into a Kanban board sorted by priority. From there, you could treat it like a shared to do list with the devs or export tasks to other tools. I've been a regular user of Heurio for a long time. Then along came AI." },
        { kind: "paragraph", text: "I stopped producing artifacts outside of the product and started producing within a copy of the site. Everything below follows from that one move." },

        { kind: "h2", text: "A disposable replica" },
        { kind: "paragraph", text: "Read access is all I need: Read access to the repo, plus the access Claude Design needs to import it. From here, I rebuild the page as a standalone HTML copy (native HTML is Claude Design's default) in a single chat. No write access, no branch, nothing that can touch production. Then I make more copies in that same chat: one to audit, one to redesign, one to keep clean as a reference. They sit side by side, all shareable, none of them touching the real codebase." },
        { kind: "figure", hue: 28, label: "Photo placeholder", caption: "Fig. 1 - the file overview in Claude Design: clean copy, audit copy, redesign copy, side by side." },
        { kind: "paragraph", text: "The point isn't to keep the repo tidy, branches already do that. The point is that a copy is something I can easily share with the client and something they can open without any technical setup. No deploy, no staging URL, no asking a non-technical stakeholder to find their way around GitHub. A link to share, and they're looking at the real thing. Even more than that, they can leave comments directly in the interface." },

        { kind: "h2", text: "Pinning the findings" },
        { kind: "paragraph", text: "On the audit copy I prompt Claude to walk the page and drop pins on the issues, one pin per finding, located on the actual UI. It's the thing a tool like [Heurio](https://heurio.co) does, except the pins live on a working copy I can immediately edit and transfer back into code if wanted. And because I'm the creator of the auditing tool, I can add any functionality I want. I usually go with Nielsen heuristics as my standard set of guidelines. Most of the time, I then enrich the set of heuristics with psychological effects, like [Coglode.com](https://www.coglode.com). Coglode is a library of effects like the Laws of UX but much broader." },
        { kind: "paragraph", text: "In consequence, the set of heuristics is a parameter, not a fixed checklist. I tell Claude which heuristics to apply depending on what the client actually needs:" },
        { kind: "list", style: "bullet", items: [
          { title: "Nielsen's ten.", text: "The default usability pass. Good for catching the obvious structural and feedback gaps." },
          { title: "Conversion principles.", text: "When the brief is a landing or pricing page and the question is why people don't act." },
          { title: "Laws of UX.", text: "Hick, Fitts, Jakob, Miller. Useful when the argument is about cognitive load and familiarity." },
          { title: "Coglode / behavioral.", text: "Behavioral-econ nudges when the conversation is about motivation, not just clarity." },
          { title: "Dark patterns.", text: "Where the interface works against the user instead of for them: forced continuity, confirmshaming, items sneaked into the basket. Worth flagging before it becomes a trust problem." },
          { title: "Accessibility guidelines.", text: "A WCAG-led check: contrast, focus order, target size, labels, and whether the page still works without a mouse. The bar is a published standard, not an opinion." }
        ]},
        { kind: "paragraph", text: "For Paperclip.inc that procedure surfaced things like a primary CTA competing with three secondary buttons of equal weight, a plan toggle buried below the fold on the pricing page, and a sign-up form with no inline validation. Which also goes to show that just because you let a computer do the work does not grant that things will be thought through." },

        { kind: "h2", text: "Where I (a human) win over AI" },
        { kind: "paragraph", text: "I iterate the pins until they're right, drop the ones that don't hold up, sharpen the wording on the ones that do. This is a point in time where it shows that AI cannot substitute human work: It does a great initial job initially and definitely enriches the result with a few findings a human may miss in the sheer mass of possible lenses to look at a site in all its details. However, as in other settings studies on AI led audits have shown that AI is not capable to deliver reliable results. [(GPT-4o vs. human experts, 2025)](https://arxiv.org/abs/2506.16345)" },
        { kind: "paragraph", text: "AI finds more than I would alone and far faster, but it over-flags. It'll pin \"low contrast\" on something that's fine, or cite a law that doesn't apply to the case in front of it. The heuristics give AI vocabulary, not judgement. I cut maybe a third of what it surfaces before anything reaches the client." },
        { kind: "paragraph", text: "And that's the actual point. The value isn't that the first check is right. It's that it's cheap enough that me being the filter costs almost nothing. I spend my time deciding which findings are real and which fix is worth building, not making screenshots and formatting slides. I add findings AI has missed, and it helps me get ideas I wouldn't have gotten without. The slow, low-judgement part is gone. My focus is on enriching the data. The part that needs a designer is the only part left." },
        { kind: "figure", hue: 200, label: "Image placeholder", caption: "Fig. 2 - a pin in the interface, showing its detail when you interact with it." },

        { kind: "h2", text: "Let the client poke at it" },
        { kind: "paragraph", text: "When I'm done with my audit, comes the real interesting part. This is the part a slide deck simply can't do. The audit copy is a real page with a shareable link that looks and behaves exactly like the original. The client opens it, sees the pins in context, and can leave comments directly on the artifact (using Claude Design's built-in comment functionality). No deploy, no repo, no technical knowledge required on their side. The audit stops being a thing I present and becomes a thing we can work on together." },
        { kind: "paragraph", text: "That changes the feedback I get. Instead of \"can you resend the slides,\" I get a comment pinned to finding 4 saying the toggle is below the fold for a reason. That's a better conversation, and it happens on the work itself." },

        { kind: "h2", text: "From finding to fix" },
        { kind: "paragraph", text: "From here, it gets even better! When the client wants the change and not just the diagnosis, I spin up another copy and have Claude build the fixes straight into it. Now there are two live pages at two links: the problems with pins, and the proposed redesign. Both working, both shareable, both allow feedback culture similar to what we're used to in Figma." },
        { kind: "paragraph", text: "This is where **faster** becomes **further**. The audit already contains its own prototype. There's no separate \"and now we'd mock it up\" phase, because the mockup is the next HTML copy in the same chat. The diagnosis and the proposal ship as one artifact. Claude Design even recognizes the comments and allows you to build on it." },

        { kind: "h2", text: "When it needs to land in the repo" },
        { kind: "paragraph", text: "As if this wasn't enough, I have more to offer. The bottleneck in any audit is the translation step. If you've ever conducted an audit (or had someone conduct it for you) you know there's a fair chance you end up with an abundance of possible fixes. Turning findings into dev tasks someone has to scope, ticket, and schedule. That handoff is where the work stalls and where the audit goes stale waiting (and potentially at least some of the findings never see the light of day)." },
        { kind: "paragraph", text: "Additionally to turning findings into changes, the code push is the cherry on top of this bonus. A typical audit stops with the findings, and that's fine. But when changes are requested, it's now easy to make it happen. I export to Claude Code, which works against the real repo: it makes the edits, commits, and opens a pull request. The finding becomes a commit, no ticket in between and a code-generated design solution that's already checked by a designer. And if a team prefers to run on tickets instead, the same handoff could export tasks to Jira and feed the normal sprint. Either way the translation step stops being the place momentum dies. And everything else just becomes faster and gets more depth." },
        { kind: "paragraph", text: "Design did the diagnosis and the proposal; Code lands it in production. Each tool at the thing it's best at." },
        { kind: "callout", label: "Why two tools", text: "Claude Design is the client-facing artifact: audit it, pin it, share it, redesign it. Claude Code is the handoff when a change has to enter the repo and survive review. Splitting them isn't a workaround, it's playing each to its strength, and it's what turns \"audit\" into a pipeline. If I want to and when it makes sense for the client I work with, I can utilize the exact flow in Claude Code directly. I just find the presented solution with Claude Design more user-friendly for users who don't have development experience." },

        { kind: "h2", text: "Final thoughts" }
      ]
    },
    {
      slug: "chatgpt-chose-everyone",
      title: "ChatGPT chose everyone. Claude chose developers.",
      date: "2026-05-09",
      dateLabel: "May 2026",
      readingTime: "4 min",
      tags: ["Strategy", "Product"],
      excerpt: "Why Anthropic picked the smaller user group on purpose, and how that bet compounded into one of the fastest-growing companies of the decade.",
      body: [
        { kind: "lead", text: "Here is a confession from someone who designs things: I spent years being told to design for everyone. Widen the funnel, lower the floor, make sure a teenager and a CFO both get it on the first try. So watching Anthropic do the exact opposite and pull ahead has been quietly satisfying." },
        { kind: "paragraph", text: "Because ChatGPT had every head start a product can ask for. A year of consumer mindshare ahead of Claude, a household name, the most-downloaded app of the decade. By early 2026 it still had over 900 million weekly users and around 25 billion dollars in annualized revenue. And yet Anthropic now runs ahead on revenue, with analysts starting to float it as one of the highest-revenue companies of the decade. How did that happen in three years?" },
        { kind: "h2", text: "Pick the user the technology already fits" },
        { kind: "paragraph", text: "Anthropic did not just pick a niche. They picked a group whose work was already shaped by the technology they were building. Developers get what a language model can do on day one. They write code that compounds into more value, and they are paid to adopt tools that make them faster. When the user's job is already shaped by what you sell, the product-market fit is half-built before you write a line of onboarding." },
        { kind: "h2", text: "Everyone is the expensive option" },
        { kind: "paragraph", text: "From there, the math gets interesting. Everyone is the most expensive user group you can design for. When the brief is mass market, every decision turns into a compromise: onboarding tuned for the median, guardrails set for the middle, surface area that only ever grows. It is a tax nobody on the team feels until they try to ship. Anthropic skipped it and built Claude Code, a tool for a developer writing code in a terminal, shaped to exactly that work. It went from launch to 2.5 billion dollars in annualized revenue in roughly a year, more than half of it from enterprise." },
        { kind: "h2", text: "Then earn the right to expand" },
        { kind: "paragraph", text: "And then they earned the right to expand. The desktop client came after Claude Code, then Cowork, both built for the people who sit next to developers: product managers, designers, ops, support. Same model underneath, shaped differently for each role. A developer who pays for Claude brings it into the team. The team brings it into the company. A ten-seat engineering contract becomes a hundred seats across functions. That is the shape of developer-first B2B growth, and it is why roughly 80 percent of Anthropic's revenue comes from API and enterprise, and only 10 to 15 percent from consumer subscriptions." },
        { kind: "h2", text: "The model has to carry it" },
        { kind: "paragraph", text: "None of this lands without a model good enough to carry it. Claude Opus is an asset on its own. It shows up in Cursor and dozens of other products precisely because it is the strongest model for the work developers care about. The focus on one user group and the quality of the model compound on each other (neither alone would have been enough)." },
        { kind: "h2", text: "The lesson" },
        { kind: "paragraph", text: "Growth is not the only thing worth judging a company by, and the long arc still has to deliver margins, retention, and durability. But the lesson for product people is plainer than we usually want it to be. **Pick the user group whose work is already shaped by your technology, and earn the right to expand outward from there.** It tends to reward you more than the comfortable answer of serving everyone at once." }
      ]
    },
    {
      slug: "anatomy-of-a-long-form-post",
      title: "Anatomy of a long-form post",
      date: "2025-11-18",
      dateLabel: "November 2025",
      readingTime: "6 min",
      tags: ["Writing", "Design system"],
      excerpt: "A walk through every building block I use when a post needs more than paragraphs - headings, pull quotes, lists, figures, callouts, and code.",
      body: [
        { kind: "lead", text: "Most posts on this blog are five tight paragraphs and out. Some need more room to breathe: a few headings, a pull quote, a list, maybe a figure. This is the kitchen sink - every block type I use, laid out in one place so I can see them next to each other." },
        { kind: "h2", text: "Why blocks beat blobs" },
        { kind: "paragraph", text: "Writing a long post as one wall of paragraphs is fine until the reader starts skimming. The moment they skim, structure becomes the message. Headings give the page a skeleton. Pull quotes hold attention. Lists answer **how many** and **in what order**. A figure says **this is what it looked like**. The job of the block system is to make each of those moves cheap." },
        { kind: "paragraph", text: "I want to be able to drop a heading in without thinking about CSS. I want a pull quote to render as italic display serif without me hand-styling it. The data is one source of truth; the styles do the rest." },
        { kind: "h3", text: "The block types, briefly" },
        { kind: "list", style: "bullet", items: [
          { title: "Lead.", text: "A bigger intro paragraph that signals the start of the piece." },
          { title: "Heading 2 and 3.", text: "Section and subsection breaks - the page's skeleton." },
          { title: "Paragraph.", text: "The default. Supports inline **bold** and *italic*." },
          { title: "Pull quote.", text: "A claim the post is making, weighted to land." },
          { title: "List.", text: "Bullet or numbered. Items can be plain or **title plus body**." },
          { title: "Figure.", text: "A placeholder visual block today, real images later." },
          { title: "Callout.", text: "A boxed aside for context, footnotes, or warnings." },
          { title: "Divider.", text: "A short rule or a glyph to mark a beat change." },
          { title: "Code.", text: "Monospaced block for snippets and config." }
        ]},
        { kind: "quote", text: "Structure is not decoration. It is the part of the writing that tells the reader where they are.", attribution: "Note to self" },
        { kind: "h2", text: "What a figure looks like" },
        { kind: "paragraph", text: "Right now the figure block renders a colored placeholder so I can lay out posts before the visuals exist. When a real image is ready, the same block accepts a source and alt text and the placeholder goes away." },
        { kind: "figure", hue: 265, label: "Figure placeholder", caption: "Fig. 1 - block layout preview, real image to follow." },
        { kind: "h3", text: "Numbered list, when order matters" },
        { kind: "list", style: "numbered", items: [
          "Pick the smallest shape that fits the idea.",
          "Write the post in one sitting, no blocks yet.",
          "Pass two: add headings only.",
          "Pass three: promote one sentence to a pull quote, add a list if you find yourself counting in prose.",
          "Last pass: read it aloud."
        ]},
        { kind: "callout", label: "Note", text: "Callouts are for the thing that does not belong in the main flow but would be sad to lose. Definitions, footnotes, a polite warning. Use sparingly - one or two per post." },
        { kind: "divider", symbol: "◆ ◆ ◆" },
        { kind: "h2", text: "A code block, for the rare technical aside" },
        { kind: "paragraph", text: "Not every post needs one, but design ops and tooling posts often do. The block keeps the type at monospace and gives the language a small label up top." },
        { kind: "code", lang: "ts", code: "type Block =\n  | { kind: \"paragraph\"; text: string }\n  | { kind: \"h2\" | \"h3\"; text: string }\n  | { kind: \"quote\"; text: string; attribution?: string }\n  | { kind: \"list\"; style: \"bullet\" | \"numbered\"; items: Item[] }\n  | { kind: \"figure\"; hue?: number; label?: string; caption?: string }\n  | { kind: \"callout\"; label?: string; text: string }\n  | { kind: \"divider\"; symbol?: string }\n  | { kind: \"code\"; lang?: string; code: string };" },
        { kind: "h2", text: "What's next" },
        { kind: "paragraph", text: "Real images. A two-column layout for short side-by-sides. And, eventually, a way to embed a small interactive demo for the design-ops posts. None of that is urgent. The point of this kitchen-sink post is to make sure the foundation holds before the writing starts in earnest." }
      ]
    }
  ],

  playground: {
    v1: [
      { t: "Sketchbook 2025", kind: "drawings", hue: 50 },
      { t: "Aerial Yoga site", kind: "brand", hue: 330 },
      { t: "Canva kits", kind: "visual", hue: 190 },
      { t: "Reading shelf", kind: "reading", hue: 100 },
      { t: "Type pairings file", kind: "type", hue: 20 },
      { t: "Color studies", kind: "palette", hue: 270 }
    ]
  }
};
