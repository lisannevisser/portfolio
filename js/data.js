window.LV_DATA = {
  identity: {
    name: "Lisanne Visser",
    handle: "lisanne.design",
    role: "Senior Product Designer",
    positioning:
      "Generalist product designer with a research & experimentation spine",
    location: "Berlin, Germany",
    email: "mail@lisannevisser.com",
    availability: "Open to senior & staff roles · Q3 2026",
    shortBio:
      "I turn messy product problems into evidence-backed design. Research, experimentation, and systems thinking sit at the center of the work; I ship end-to-end, from discovery to pixels to post-launch metrics.",
    longBio: [
      "I didn't start in design. I started in curiosity. A communications degree, a first UX role at an agency, and a slow realization that the questions I loved asking (why do people do what they do? what makes a product feel effortless?) were exactly the questions good design answers.",
      "Five years in, I've designed end-to-end across B2B logistics, consumer trust, and internal tooling. Research and experimentation hold the work together: I've run the first focus group in a 25-year-old company, introduced heatmaps that reshaped a brand, and turned a price set on intuition into a 15% revenue lift.",
      "The label 'growth designer' undersells it. The work that excites me is the full loop, from a fuzzy strategic question to shipped UI to measured outcome, with a design system and a research habit left behind afterward."
    ],
    credo: [
      "Research before pixels",
      "Measure what matters",
      "Ship the 80, refine the 20",
      "Systems outlive screens"
    ]
  },

  career: [
    { role: "Senior Product Designer", org: "Trusted Shops", period: "2022 — Now", city: "Berlin", note: "Consumer trust, pricing, experimentation, research culture" },
    { role: "Product Designer", org: "Cargoboard", period: "2020 — 2022", city: "Berlin", note: "B2B logistics, design system, IA redesign" },
    { role: "UX Designer", org: "Agency work", period: "2018 — 2020", city: "Berlin", note: "Clients across retail, fintech, healthcare" }
  ],

  clients: ["Trusted Shops", "Cargoboard", "Funke", "TikTok", "Canva", "Aqora", "Autarc", "feelinghale", "Dr. Vivien Karl"],

  // SVG placeholder wordmarks. Swap with real brand files at the same paths.
  clientLogos: {
    "Trusted Shops": "images/logos/Trusted-Shops_Logo_black.svg",
    Cargoboard: "images/logos/main_logo_color_black.svg",
    Funke: "images/logos/Funke-Mediengruppe-Logo.png",
    TikTok: "images/logos/TikTok-logo-RGB-Horizontal-black.png",
    Canva: "images/logos/canva.svg",
    Aqora: "images/logos/Wortmarke 1C.svg",
    Autarc: "images/logos/autarc.svg",
    feelinghale: "images/logos/feelinghale-logo.svg",
    "Dr. Vivien Karl": "images/logos/dr-vivien-karl.svg"
  },

  cases: [
    {
      slug: "pricing",
      title: "Repricing buyer protection on psychology",
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
      hideHero: true,
      tldr: "A price nobody had touched since launch, sitting on one of the company's biggest revenue drivers. 9,90 € for buyer protection, and it had quietly carried the product through years of growth. The product had grown up a lot since then, so I took the opportunity to put the price on firmer footing. I ran two rounds of A/B tests, seven variants in total, each built on a different principle from pricing psychology. 15,99 € won round one on revenue per user. Then 12,00 € took round two once we added customer-lifetime-value forecasting, and that became the new price.",
      story: [
        { kind: "section", title: "Situation", body: "All the way back to launch several years ago, 9,90 € was the number for buyer protection. It's one of the company's core revenue drivers, and that price had served it well. But market and product had evolved, and the price hadn't moved with it. So the question more or less asked itself: is 9,90 € still right today? And if it isn't, what does pricing-psychology research suggest instead?" },
        { kind: "figure", hue: 22, label: "Pricing UI · before", caption: "Fig. 1 - The buyer-protection upsell at checkout, the starting point for the experiments." },
        { kind: "section", title: "Approach", body: "Here's the thing most people miss about price: **how a number is written and framed can move revenue as much as the number itself.**\n\nSo when my colleague, a Conversion Manager, and I decided to start the project, it was important to me not to run a test that only asked \"is this number bigger or smaller?\". Hence, I built several variants from a specific principle in pricing psychology, which turned the question into something sharper: which mechanism might actually change behavior?\n\nBecause we framed the project as an experiment, not a price change, it kept the stakes low across the team (any result, win or lose, was useful input for the next round) and it made a change to a core revenue driver feel safe to try for all stakeholders." },
        { kind: "framework", title: "Hypotheses", body: "Here is a snippet of the hypotheses we tested and some of the rationales behind them:", items: [
          { k: "Charm / odd", v: "15,99 €", effect: "Reads as a deal" },
          { k: "Prestige / even", v: "12,00 €", effect: "Reads as quality" },
          { k: "Round", v: "10,00 €", effect: "Lowest cognitive friction" }
        ]},
        { kind: "section", title: "Method", body: "We tested seven variants between 10 € and 15 €, each tied to a specific psychological principle.\n\nThe metric mattered as much as the variants: We measured revenue per user, not just transaction rate. A higher price can convert slightly fewer people and still bring in more money overall, so transaction rate on its own would have hidden the variants that were actually winning.\n\nAnd because a headline result can hide an uneven one, we broke the numbers down: new versus returning users, free-plan holders, and the order amount from the shop that sent them. No single segment was carrying the effect." },
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
      title: "Conversion tests, 2 weeks to 2 days",
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
      tldr: "Every conversion test our team wanted to release waited up to two weeks for the same reason: a developer had to build it inside a sprint. When Figma Make shipped in May 2025, I immediately rebuilt the workflow so conversion managers could visualize their own ideas inside design-system-aware templates. With a designer QA gate at min. 80% brand compliance and a refinement loop for the winners the cycle from idea to live test went from two weeks to two days maximum, and the setup spread past my team into the default way conversion tests get built.",
      story: [
        { kind: "section", title: "Situation", body: "Every conversion test we ran moved through the same chain: someone has an idea, a designer mocks it up, a developer builds it inside a sprint, the test goes live. Four steps, and one of them set the pace for all the others.\n\nThe developer step owned the calendar. Not because the work was hard (most of these were small, lightweight changes) but because it had to wait for a sprint to have room.\n\nFor a team whose whole job is learning fast, that's a strange place to be: the bottleneck wasn't the thinking or the design, it was the queue." },
        { kind: "figure", hue: 265, label: "Test cycle · before", caption: "Fig. 1 - The old conversion-test cycle. Four handoffs, with the developer step waiting on sprint capacity." },
        { kind: "section", title: "Approach", body: "Here's the thing I kept coming back to: **the slowest part of a conversion test was never the design, it was waiting for someone else to build it.**\n\nI'd been watching AI design tools for a while, half-curious, half-skeptical. At the time, AI could do a lot, but in terms of design it was lagging. So when Figma Make shipped in May 2025, I tested it on release day with one question: if our design system is wired in, does it produce good enough results so that a designer or conversion manager can visualize their own idea on a codebase? And beyond that: Would we be able to launch a test without a developer in the loop?\n\nThe answer was close enough to yes that I rebuilt the workflow around it. Not as a faster way to make mockups, but as a way to move production out of the bottleneck entirely and hand it to the people who have the ideas in the first place.\n\nI invited one of the conversion managers to test the workflow with me. We picked an experiment from the backlog that we found suitable. ADD DETAILS - WAS IT A TABLE? We picked an idea that was sitting on the shelf for a while: Adding a comparison table to the pricing page. The hypothesis behind it: XXXX. Another reason why we picked a table was that tables are tedious to build in HTML and CSS. It marked a perfect test object to see how AI could support us with a developer independent workflow." },
        { kind: "figure", hue: 265, label: "Workflow · designer overview", caption: "Fig. 2 - The pipeline that replaced the sprint dependency: idea, template, designer QA gate, live test, refinement. Each stage with one owner and one job." },
        { kind: "section", title: "Method", body: "Two decisions did the heavy lifting.\n\nThe first was templates. Rather than letting everyone generate some random version of a page per test, I built 1:1 replicas of our live pages as Figma Make templates as soon as the feature became available. Each one bakes in the prompt instructions that keep output consistent: automatic test naming, export conventions, role awareness. Only I, as the team's designer, manage the templates. Everyone else works inside them. That's what keeps a fast workflow from turning into a mess.\n\nMoreover, using a template saves tokens on context. And additionally, I have added a prompt to the template that lets Figma Make know about the users' intentions for exporting to Kameleoon, our A/B testing tool. As per default, Figma Make writes prototypes in React. For Kameleoon, however, we need pure HTML + CSS.\n\nThe second was the 80% rule. In experimentation, the speed of learning matters more than pixel perfection. So we ship at a minimum of 80% brand compliance after a designer QA, enough that nothing embarrassing goes out, and we refine the winners to 100% before they roll out for good. The 80 isn't a corner cut under pressure. It's a deliberate gate: good enough to learn from, honest about what a test actually needs. Technically, it does not only mess with design cohesiveness, but also with the method of A/B testing, but we decided to compromise for speed. We monitor each implementation and general performance on a daily basis. And in a time where businesses request fast AI solutions, committing on temporary design inconsistencies felt like a reasonable trade-off." },
        { kind: "result", title: "Outcome", body: "With the new workflow in place, idea to live test went from up to two weeks to maximum of two days. That was the number I was after. We got extremely developer-independent, and our conversion managers even removed design as a bottleneck. Being able to visualize their ideas and hand a wireframe to design enables us to work even more efficiently.\n\nThe part I didn't plan for was what happened next. PMs in other departments started picking up Figma Make. Other designers picked it up. The templates quietly became a single source of truth, sitting alongside our main Figma files as the place tests actually start.\n\nAnd my own role shifted. I went from executing designs to maintaining the system around them: owning the templates, holding the QA gate, deciding what ships at 80% and what earns the full pass. More tests through the pipeline means more of those calls land on my desk, and that's the part of the job that compounds. I'm still designing, but when it comes to simple A/B tests, my role has shifted noticeably. With Figma Make's connection to Figma design files, it's also easy to move ideas around and go from a coded prototype that doesn't quite work yet to a design file I can polish for better quality testing.\n\n[PLACEHOLDER · drop in an adoption number or a qualitative line once cleared for publication]" },
        { kind: "limitations",
          defaultFace: "opportunities",
          title: "Limitations",
          subtitle: "In academia, where I come from, it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Self-reported speed", body: "The two-weeks-to-two-days figure is a before/after on cycle time, not a controlled measurement. The old number is a typical-case floor, the new one a typical case, but neither is averaged over a tracked sample. This doesn't mean the number is wrong, it's a sustainable change we experience on a daily basis." },
            { title: "One tool, one product surface", body: "The workflow is built around Figma Make and our specific design system, proven on conversion tests at one company. The approach should generalize, but that hasn't been tested across tools or domains." },
            { title: "The 80% gate is a judgment call", body: "The brand-compliance bar is held by designer QA, mine in practice. It works because I set the standard; handing the gate to someone else would mean writing the standard down, not just holding it in my head." },
            { title: "Adoption described, not measured", body: "\"Org-wide\" captures spread, not a tracked adoption rate. I can name the teams that picked it up; I can't yet put a number on it." }
          ],
          opportunities: [
            { title: "Moving the pipeline onto Claude", body: "I'm currently working on bringing this process from Figma Make over to Claude, because the workflow is even cleaner to maintain there. Two things make the difference: Claude can be given read access to the repo, so templates stay anchored to the real codebase instead of a copy, and it writes native HTML and CSS on request, which is exactly what Kameleoon needs (no React-to-HTML conversion step)." },
            { title: "Template contribution model", body: "Right now I'm the only one who builds templates, which is a clean bottleneck but still a bottleneck. A lightweight way for others to propose templates, with a review gate, would scale it past me." },
            { title: "A written brand-compliance checklist", body: "The 80% rule lives in my judgment. Writing it out as an explicit checklist would let any designer hold the QA gate and make the standard auditable." },
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
        { label: "Projects shipped", value: "10+", note: "from my team alone" },
        { label: "Element tests won", value: "100%", note: "3/3 at +20% each" }
      ],
      tags: ["Research ops", "Change management", "Behavioral data"],
      coverPaletteHue: 150,
      tldr: "There was no researcher, no budget, and no shared picture of who our users actually were. Teams optimized in isolation and trusted their gut. So I proposed something small enough that nobody could say no: one research method a month, picked by whatever question was loudest. Year one came in at 1.5× the target, gave the company its first sociodemographic data on its own users, and put the first focus group in 25 years in a room.",
      story: [
        { kind: "section", title: "Situation", body: "Let me be honest about where this started. No heatmaps. No regular research. Teams sitting in their own silos. Conversion managers shipping design ideas one page at a time, with no shared concept tying any of it together.\n\nSo we won small fights and lost the war. A pile of isolated wins that never added up to an experience anyone had designed on purpose." },
        { kind: "section", title: "Framing", body: "Here is the thing about individual tests: they win small fights. Only a research practice wins the larger one.\n\nSo I kept the proposal deliberately modest. One project a month. One method at a time. Topic chosen by whatever the business needed most that month. Not academic rigor for its own sake, just a rhythm teams could actually keep without a budget or a dedicated researcher.\n\n**A practice you can sustain beats a perfect study you run once.** That was the whole bet." },
        { kind: "framework", title: "Cadence", body: "One backbone method, the rest rotating in by need.", items: [
          { k: "Monthly survey", v: "385+ responses", effect: "Statistical significance on rotating topics" },
          { k: "Heatmaps (Clarity)", v: "Always-on", effect: "Surfaced a dead-click issue on branded product names" },
          { k: "Interviews", v: "As-needed", effect: "Qualitative stories behind the numbers" },
          { k: "Focus group", v: "First in 25 yrs", effect: "Qualitative depth on a trust topic" }
        ]},
        { kind: "figure", hue: 150, label: "Cadence · 12 months", caption: "Fig. 1 - A year of research, one method per month. Surveys form the backbone, heatmaps run continuously, interviews and focus groups slot in by topic." },
        { kind: "section", title: "Evidence", body: "Then the data did something useful: it disagreed with us.\n\nThe organization pictured its typical customer at around 50. The survey said they were significantly older than that. The 2018 personas were stereotypes and well past their expiry date, and the UX team leaned toward JTBD instead. I took a third route: a Limbic Types survey mapped onto the real user base. It turned into the first sociodemographic user data the company had ever collected." },
        { kind: "figure", hue: 150, label: "Limbic Types · user mapping", caption: "Fig. 2 - The Limbic Types segmentation, mapped to our actual user base. Replaced the 2018 personas." },
        { kind: "result", title: "Proof", body: "Now for the part that made people believe.\n\nThree element tests in a single quarter: the new Plus branding, a comparison table, a progress bar. Each one came in around +20%. All three won.\n\nThat was the point of picking them. I wanted to show, with numbers nobody could argue with, that holistic and user-centered beats optimizing in isolation. Each win bought the next test its credibility." },
        { kind: "section", title: "Aftermath", body: "And then it stopped being my thing.\n\nThe framework was lifted out of our team to serve every consumer-facing team. B2B picked it up. Other designers started running research of their own. PMs began coming to me before a decision instead of after one.\n\nFrom \"the designer does some surveys\" to a capability the organization actually owns." },
        { kind: "limitations",
          title: "Limitations",
          oppositeTitle: "Opportunities",
          items: [
            { title: "Internal proxies, not lab studies", body: "Most decisions leaned on surveys, heatmaps, and live A/B tests rather than moderated usability research. Fast and cheap, but a step removed from watching real users struggle." },
            { title: "One segmentation model", body: "The user picture rests on a single Limbic Types survey. It replaced outdated personas, but it is one lens, not triangulated against behavior over time." },
            { title: "Solo-led adoption", body: "I drove the rollout largely myself, alongside the UX team lead. Breadth came fast; depth in any single team depended on who picked it up." },
            { title: "Wins are quarter-scoped", body: "The +20% element tests prove the approach in the short term. Whether the practice compounds over years is still being written (the case is ongoing)." }
          ],
          opportunities: [
            { title: "Longitudinal tracking", body: "Re-run the core survey yearly to watch the user base shift, not just snapshot it once." },
            { title: "Self-serve research kit", body: "Package the monthly cadence into templates so any team can run a method without me in the loop." },
            { title: "Tie research to outcomes", body: "Connect each method back to a shipped decision and its metric, so the practice's ROI is visible, not assumed." }
          ]
        }
      ]
    },
    {
      slug: "design-system",
      title: "Cargoboard's rebrand and first design system",
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
      tldr: "Cargoboard, three years in, had a brand that had grown organically and no design system to underpin it. We kicked off with a product audit in a team of three designers, ran brand discovery in parallel with HR's company-culture workshops, and translated the insights into a new visual system: extended palette around the existing red, a new two-typeface pairing (Mokoko and Graphie), and an illustration language built from scratch. I owned the system architecture end-to-end. The system has been the default for new work since.",
      story: [
        { kind: "section", title: "Introduction", body: "Cargoboard is a German B2B logistics provider, founded in 2019. Three years in, the founders decided the brand no longer reflected the company. The visual identity had grown organically: a primary red, some print materials, a website built piecemeal. No brand manual, no component library, no consistent illustration style. On top of that, an unmaintained tech stack with performance issues and 140+ marketing pages to refresh in under a year. The project covered the rebrand and the first design system the company had: type, color, illustration, components, and documentation." },
        { kind: "section", title: "Brand discovery", body: "We kicked off with a product audit. In a team of three designers, we reaccessed the existing brand assets and updated them in line with the old brand to surface what was working and what wasn't. To clarify who Cargoboard was, I ran employee interviews across departments to get at the cultural essence. In parallel, HR was running workshops with an external agency to translate company values and employer branding strategies into something the team could work with; I joined those sessions as participant observation. Mentally, founders and employees were already close on what the brand stood for - what was missing was the articulation. I took the insights from interviews, observations, and workshops and translated them into a visual identity the company could run with long-term." },
        { kind: "section", title: "Visual system", body: "We kept the existing primary red, core to Cargoboard's identity, and extended it into softer tints, tones, and shades we now call \"signature red\". To balance the aggressiveness of the red, we added complementary split colors: blue as secondary, green as tertiary. In color psychology these convey trustworthiness and calmness, which directly served the brand brief. The full palette also includes a dark navy as neutral base, with lighter accent variants for red and blue. The logo stayed almost the same with minor touch-ups; the wordmark can now be used stand-alone, giving the brand a sleeker look. For typography, we replaced the former Source Sans Pro (which had been used for both display and body) with a two-typeface system: Mokoko as the display face and Graphie as the reading face. The company asked specifically for a separate display font for headline impact. Usage of both is governed by clearly defined type styles in the system." },
        { kind: "figure", hue: 200, label: "Brand system · before and after", caption: "Fig. 1 - Typography moved from a single-face Source Sans Pro setup to a two-face system (Mokoko + Graphie). Palette extended from one accent red into a fuller system: signature red, blue secondary, green tertiary, dark navy base, lighter variants throughout." },
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

  // Full bookshelf — covers pulled live from OpenLibrary by ISBN.
  // Reviews are Lisanne's own words; keep verbatim.
  books: [
    { title: "Artemis Fowl", author: "Eoin Colfer", cover: "https://covers.openlibrary.org/b/isbn/9780141339092-L.jpg", rating: 5, tags: ["Fiction", "Sci-Fi"], color: "#059669", review: `My favourite book as a kid — and still one that shaped me in ways I can trace back clearly. The intelligence, high-tech world-building, and sheer creativity of Colfer's universe fascinated me and laid an early foundation for my interest in innovation and clever thinking. It's also a brilliant case study in character development: Artemis starts as an outright villain and evolves in ways that feel earned. The world-building is extraordinarily inventive. My Harry Potter — except the magic is technology. :)` },
    { title: "Atomic Habits", author: "James Clear", cover: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg", rating: 4, tags: ["Productivity", "Psychology"], color: "#F59E0B", finished: "2023-08", review: `Clear's framework for building habits translates directly to product design — how do we make the desired user behavior easy, obvious, and rewarding? Great for thinking about onboarding and retention.` },
    { title: "Creative Confidence", author: "Tom & David Kelley", cover: "https://covers.openlibrary.org/b/isbn/038534936X-L.jpg", rating: 4, tags: ["Creativity", "Design Thinking"], color: "#EC4899", finished: "2024-01", review: `The Kelley brothers from IDEO show that creativity isn't a gift — it's a muscle. This book gave me the confidence to push back on "we've always done it this way" and propose bolder solutions.` },
    { title: "Design for Impact", author: "Erin Weigel", cover: "https://covers.openlibrary.org/b/isbn/9780137519620-L.jpg", rating: 3, tags: ["Design", "UX"], color: "#7C3AED", review: `Weigel reframes design as a discipline that has to prove its value — not just aesthetically, but in measurable outcomes. The book is part manifesto, part methodology, and it pushes designers to think like product owners. Refreshingly honest about the gap between beautiful design and effective design. A good read for anyone who wants to advocate for their work more confidently in cross-functional teams.` },
    { title: "Design is Storytelling", author: "Ellen Lupton", cover: "https://covers.openlibrary.org/b/isbn/9781942303992-L.jpg", rating: 3, tags: ["Design", "Creativity"], color: "#DB2777", review: `Ellen Lupton makes a compelling argument that design and narrative are fundamentally the same thing — both are about guiding someone through an experience with intention. The book draws on screenwriting, visual theory, and cognitive psychology to show how designers can create more emotionally resonant work. Short and beautifully produced, it's the kind of book you return to for a quick dose of creative thinking.` },
    { title: "Don't Make Me Think", author: "Steve Krug", cover: "https://covers.openlibrary.org/b/isbn/0321965515-L.jpg", rating: 5, tags: ["UX", "Usability"], color: "#1a1a1a", finished: "2022-03", review: `The book that started it all for me. Krug's approach to usability is refreshingly simple — the best interfaces are the ones you don't have to think about. I come back to this whenever I catch myself overcomplicating a design.` },
    { title: "Emojis", author: "Greta Rebane", cover: "https://covers.openlibrary.org/b/isbn/9783406773761-L.jpg", rating: 3, tags: ["Culture", "Communication"], color: "#F59E0B", review: `A surprisingly rich cultural analysis of something we use every day without much thought. Rebane traces the history, semiotics, and social dynamics of emoji — how they've shifted communication norms, created new ambiguities, and become a genuine visual language. As a designer who thinks about communication and interface, it was a fascinating lens on how small visual decisions carry enormous cultural weight.` },
    { title: "Gespräche analysieren", author: "Arnulf Deppermann", cover: "https://covers.openlibrary.org/b/isbn/9783825232306-L.jpg", rating: 3, tags: ["Research", "Qualitative Research", "Communication"], color: "#4B5563", review: `Deppermann's introduction to conversation analysis opened up a completely different way of looking at qualitative data. The focus on sequential structure, turn-taking, and the micro-level mechanics of talk makes you realise how much is communicated below the surface of any interview or user session. Highly academic, but the analytical tools it provides are genuinely transferable to UX research practice.` },
    { title: "Hooked", author: "Nir Eyal", cover: "https://covers.openlibrary.org/b/isbn/0241184835-L.jpg", rating: 4, tags: ["Product", "Psychology"], color: "#6366F1", finished: "2022-09", review: `The Hook Model gave me a practical framework for thinking about habit-forming products. Useful for growth design work, though I always balance it with ethical considerations about user wellbeing.` },
    { title: "Information Architecture", author: "Louis Rosenfeld, Peter Morville & Jorge Arango", cover: "https://covers.openlibrary.org/b/isbn/1491911689-L.jpg", rating: 4, tags: ["Information Architecture", "UX"], color: "#1E40AF", finished: "2023-05", review: `The definitive guide to organizing information for the web. This book shaped how I approach navigation, labeling, and search systems — essential reading for anyone structuring complex products. Two small caveats: some parts are starting to feel dated in an era where AI increasingly shapes how people find and navigate information. And occasionally I found myself wishing it went even deeper on certain topics rather than staying at an overview level.` },
    { title: "Interpretative Sozialforschung", author: "Gabriele Rosenthal", cover: "https://covers.openlibrary.org/b/isbn/9783779925996-L.jpg", rating: 3, tags: ["Research", "Qualitative Research"], color: "#92400E", review: `Rosenthal's introduction to interpretive social research is dense but rewarding. It builds a rigorous theoretical foundation for qualitative methods — biographical research, case reconstruction, sequential analysis — that pushed me to think more carefully about how meaning is constructed in research data. Not light reading, but it fundamentally changed how I approach open-ended interviews and the assumptions I bring to analysis.` },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364886-L.jpg", rating: 5, tags: ["Fiction", "Technology"], color: "#DB2777", review: `The blend of technology and naivety in this book is what captivates me most. Klara is an artificial friend — deeply observant, endlessly curious, and entirely without cynicism — and the way she encounters the world raises profound questions about responsibility, attachment, and care. What Ishiguro illustrates so beautifully is that smart technology deserves the same empathy and consideration we should be giving each other as humans. A quiet but powerful reminder that how we treat the things we create says a lot about who we are.` },
    { title: "Klassiker des Produktdesigns", author: "Reclam", cover: "https://covers.openlibrary.org/b/isbn/3150204119-L.jpg", rating: 4, tags: ["Design", "Industrial Design"], color: "#F59E0B", finished: "2025-01", review: `A beautifully curated collection of iconic product designs and the stories behind them. From Bauhaus to Braun — it's a reminder that good design is timeless and that digital product design shares deeper roots with industrial design than we often realize.` },
    { title: "Laws of UX", author: "Jon Yablonski", cover: "https://covers.openlibrary.org/b/isbn/149199431X-L.jpg", rating: 3, tags: ["UX", "Psychology"], color: "#7C3AED", finished: "2024-04", review: `A solid collection of psychological principles applied to design. Fitts's Law, Hick's Law, Jakob's Law — I reference these constantly when making design decisions and defending them to stakeholders. The book goes deep on each principle, but honestly, the level of detail isn't necessary to apply them successfully. For my day-to-day work I prefer [Coglode](https://www.coglode.com/) — it covers the same behavioral principles in a digital, easily accessible format that's faster to reference in the moment. The website alone gives you enough to work with.` },
    { title: "Lean UX", author: "Jeff Gothelf & Josh Seiden", cover: "https://covers.openlibrary.org/b/isbn/9781492083917-L.jpg", rating: 3, tags: ["UX", "Product", "Design Thinking"], color: "#16A34A", review: `Lean UX makes the case for getting design out of the deliverables business and into the outcomes business. Gothelf and Seiden challenge the idea that polished specs and documents are the goal — instead, the goal is learning fast and building the right thing. Particularly relevant if you work in agile environments where design often struggles to keep pace. Concise, opinionated, and practical.` },
    { title: "Measuring the User Experience", author: "Tom Tullis & Bill Albert", cover: "https://covers.openlibrary.org/b/isbn/0128180803-L.jpg", rating: 4, tags: ["UX Research", "Data"], color: "#0891B2", finished: "2024-09", review: `The go-to reference for quantitative UX research. This book taught me how to properly measure usability, set up benchmarks, and communicate findings with data — skills that bridge the gap between design and business.` },
    { title: "Mental Models", author: "Indi Young", cover: "https://covers.openlibrary.org/b/isbn/9780321430182-L.jpg", rating: 3, tags: ["UX Research", "Psychology"], color: "#2D3561", review: `Indi Young introduced me to a research practice I now consider essential: listening not just to what people do, but to how they think and feel about what they're trying to accomplish. Mental models as a tool for aligning teams and shaping product direction are genuinely powerful. The method is more involved than most UX techniques, but the depth of insight it produces is worth it.` },
    { title: "Neuromarketing", author: "Hans-Georg Häusel", cover: "https://covers.openlibrary.org/b/isbn/9783648114681-L.jpg", rating: 3, tags: ["Psychology", "Marketing"], color: "#DC2626", review: `Häusel translates neuroscience into accessible insights about why people make decisions — and how emotional and unconscious processes dominate far more than we'd like to admit. The Limbic® model he develops is a useful framework for thinking about user motivations beyond surface-level needs. Some parts feel a bit oversimplified for a scientific topic, but as a practical lens for design and communication decisions, it's genuinely illuminating.` },
    { title: "Psychoanalytikerin trifft Marina Abramović", author: "Jeannette Fischer", cover: "https://covers.openlibrary.org/b/isbn/9783858815460-L.jpg", rating: 5, tags: ["Art", "Psychology"], color: "#BE185D", review: `A fascinating encounter between two remarkable women — Jeannette Fischer, a Freudian psychoanalyst, and Marina Abramović, one of the most radical performance artists of our time. Over four days of free associative conversations, they explore the structures and dynamics underlying Abramović's life and work. What makes this book so compelling is how it uses psychoanalysis not as a diagnostic lens but as a tool for genuine curiosity and understanding. It's a rare kind of dialogue — one where both parties bring equal weight, and the result feels deeply human.` },
    { title: "Radical Candor", author: "Kim Scott", cover: "https://covers.openlibrary.org/b/isbn/1250235375-L.jpg", rating: 5, tags: ["Leadership", "Communication"], color: "#DC2626", finished: "2025-03", review: `Scott's framework for caring personally while challenging directly changed how I give and receive design feedback. Essential for anyone leading design reviews or working closely with cross-functional teams.` },
    { title: "Rekonstruktive Sozialforschung", author: "Ralf Bohnsack", cover: "https://covers.openlibrary.org/b/isbn/9783825254629-L.jpg", rating: 3, tags: ["Research", "Qualitative Research"], color: "#6D28D9", review: `Bohnsack's framework for reconstructive social research — particularly the documentary method — is one of the most systematic approaches to qualitative analysis I've encountered. It distinguishes carefully between what people say and the underlying orientations that structure their thinking, which is enormously useful when trying to understand implicit user behaviour. Challenging, but it sharpens your analytical rigour considerably.` },
    { title: "Show Your Work!", author: "Austin Kleon", cover: "https://covers.openlibrary.org/b/isbn/076117897X-L.jpg", rating: 3, tags: ["Creativity", "Career"], color: "#1a1a1a", finished: "2024-06", review: `Kleon makes a compelling case for sharing your process, not just the polished result. This book inspired me to be more open about my design process — and ultimately motivated building this portfolio.` },
    { title: "Siddhartha", author: "Hermann Hesse", cover: "https://covers.openlibrary.org/b/isbn/9783518366707-L.jpg", rating: 5, tags: ["Fiction", "Philosophy"], color: "#D97706", review: `One of those books that stays with you for decades. Hesse's prose is artistically stunning — the writing itself is an experience. What also impresses me is how deeply researched and culturally respectful it is: the book was warmly received in Asia itself, which says a lot about the level of intercultural reflection and authenticity Hesse brought to it. A model for how to engage seriously with a culture that isn't your own. Beyond that, it's a book that helps me slow down and come back to myself — a quality I deeply value, especially given that yoga and meditation are a big part of my personal life. Hesse is one of my favourite authors, and this is him at his best.` },
    { title: "Sprint", author: "Jake Knapp", cover: "https://covers.openlibrary.org/b/isbn/150112174X-L.jpg", rating: 3, tags: ["Design Thinking", "Product"], color: "#F59E0B", finished: "2023-11", review: `The Google Ventures design sprint method in book form. Five days from problem to tested prototype — I've facilitated multiple sprints based on this book and it consistently delivers clarity when teams are stuck. That said, the book goes into more detail than you actually need. The [Character.vc sprint guide](https://www.character.vc/guide/design-sprint) covers everything essential to run a successful sprint, making the book more of a nice-to-have than a must-read.` },
    { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://covers.openlibrary.org/b/isbn/0465050654-L.jpg", rating: 5, tags: ["Design", "Psychology"], color: "#2D3561", finished: "2021-06", review: `Norman's concept of affordances fundamentally changed how I think about interaction design. Every product designer should read this — it's the foundation everything else builds on.` },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg", rating: 5, tags: ["Psychology", "Decision Making"], color: "#DC2626", finished: "2023-02", review: `Understanding System 1 and System 2 thinking is essential for designing interfaces. This book explains why users behave the way they do — and why our own design decisions can be biased too.` },
    { title: "Thinking with Type", author: "Ellen Lupton", cover: "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg", rating: 3, tags: ["Design", "Typography"], color: "#1a1a1a", review: `The typography book I recommend to anyone who works visually. Lupton breaks down letterforms, spacing, hierarchy, and grid in a way that's approachable without being dumbed down. What makes it special is how it teaches you to see — after reading it, you notice things in interfaces and print that you simply couldn't see before. An absolute classic that holds up regardless of medium or trend.` },
    { title: "UX Research", author: "Brad Nunnally & David Farkas", cover: "https://covers.openlibrary.org/b/isbn/9781491951293-L.jpg", rating: 3, tags: ["UX Research", "Research"], color: "#0891B2", review: `A solid reference for the full spectrum of UX research methods. Nunnally and Farkas cover everything from usability testing to card sorting to diary studies, with enough practical guidance to actually run the studies yourself. It reads more like a handbook than a cover-to-cover book, which is exactly what makes it useful to have on the shelf when planning a research sprint.` },
    { title: "UX Strategy", author: "Jaime Levy", cover: "https://covers.openlibrary.org/b/isbn/9781492052203-L.jpg", rating: 3, tags: ["UX", "Strategy", "Product"], color: "#D97706", review: `Levy bridges the gap between UX practice and business strategy in a way that few books manage. It's not just about designing good experiences — it's about understanding competitive landscapes, validating product direction, and positioning design as a strategic lever. Useful for designers who want to move beyond execution and into more senior, shaping roles. The case studies are particularly grounding.` },
    { title: "The User Experience Team of One", author: "Leah Buley", cover: "https://covers.openlibrary.org/b/isbn/1933820187-L.jpg", rating: 5, tags: ["UX", "Career"], color: "#059669", finished: "2022-11", review: `A practical survival guide for solo UX practitioners. Buley's methods for evangelizing design within an organization and doing meaningful research with limited resources are incredibly useful — even when you're not a team of one.` },
    { title: "UX Writing & Microcopy", author: "Kinneret Yifrah", cover: "https://covers.openlibrary.org/b/isbn/9781492049395-L.jpg", rating: 3, tags: ["UX", "Writing"], color: "#0891B2", review: `A thorough and practical guide to one of the most underrated design skills. Yifrah makes a convincing case that the words in an interface aren't decorative — they are the interface. The book covers everything from error messages to onboarding flows, and the examples are concrete enough to apply immediately. What I appreciate most is the emphasis on tone and voice consistency, which is often the missing piece in design systems.` }
  ],

  posts: [
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
        { kind: "paragraph", text: "The same shift happened in [our conversion-test workflow](#/work/ai-workflow). When conversion managers visualize their own ideas in Figma Make, my role in each test is no longer production, it's review: which variant holds up, what breaks the design system, what ships at 80% and what needs the full pass. More tests through the pipeline means more of those decisions land on my desk. That's the part of the job that compounds." },

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
        { kind: "quote", text: "The audit should be a copy of the site I can break, not a document about a site I can't touch.", attribution: "Note to self" },

        { kind: "h2", text: "Pinning the findings" },
        { kind: "paragraph", text: "On the audit copy I prompt Claude to walk the page and drop pins on the issues, one pin per finding, located on the actual UI. It's the thing a tool like [Heurio](https://heurio.co) does, except the pins live on a working copy I can immediately edit and transfer back into code if wanted. And because I'm the creator of the auditing tool, I can add any functionality I want. I usually go with Nielsen heuristics as my standard set of guidelines. Most of the time, I then enrich the set of heuristics with psychological effects, like [Coglode.com](https://www.coglode.com). Coglode is a library of effects like the Laws of UX but much broader." },
        { kind: "paragraph", text: "In consequence, the set of heuristics is a parameter, not a fixed checklist. I tell Claude which heuristics to apply depending on what the client actually needs:" },
        { kind: "list", style: "bullet", items: [
          { title: "Nielsen's ten.", text: "The default usability pass. Good for catching the obvious structural and feedback gaps." },
          { title: "Conversion principles.", text: "When the brief is a landing or pricing page and the question is why people don't act." },
          { title: "Laws of UX.", text: "Hick, Fitts, Jakob, Miller. Useful when the argument is about cognitive load and familiarity." },
          { title: "Coglode / behavioral.", text: "Behavioral-econ nudges when the conversation is about motivation, not just clarity." },
          { title: "Dark patterns.", text: "Where the interface works against the user instead of for them: forced continuity, confirmshaming, items sneaked into the basket. Worth flagging before it becomes a trust problem." },
          { title: "Accessibility guidelines.", text: "A WCAG-led pass: contrast, focus order, target size, labels, and whether the page still works without a mouse. The bar is a published standard, not an opinion." }
        ]},
        { kind: "paragraph", text: "For Paperclip.inc that procedure surfaced things like a primary CTA competing with three secondary buttons of equal weight, a plan toggle buried below the fold on the pricing page, and a sign-up form with no inline validation. Each one is a pin you can click, on the page it's about." },

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
