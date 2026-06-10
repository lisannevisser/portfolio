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
      tldr: "Trusted Shops' buyer protection had been priced at €9.90 since launch, a price that carried the product through years of growth. The product had matured a lot in that time, and I saw an opportunity to put pricing on a more systematic footing. I designed two rounds of A/B tests with seven variants, each grounded in a different pricing-psychology principle. €15.99 won round one on revenue per user; €12.00 won round two once we layered customer-lifetime-value forecasting on top, and shipped as the new price.",
      story: [
        { kind: "section", title: "Situation", body: "Buyer protection had been priced at €9.90 since launch. It is one of the company's core revenue drivers, and that price had served the product well through years of growth. The product itself had evolved a lot in that time, so revisiting the number with current evidence felt like the natural next step. The question I wanted to answer: is €9.90 still the right price today, and if not, what does pricing-psychology research suggest instead?" },
        { kind: "figure", hue: 22, label: "Pricing UI · before", caption: "Fig. 1 - The buyer-protection upsell at checkout, the starting point for the experiments." },
        { kind: "section", title: "Approach", body: "Price perception depends on how a number is written and framed, not only on the number itself. I built each variant from a specific pricing-psychology principle, so the test wasn't just \"is this number better\" but \"which mechanism actually moves behavior\". Framing the work as an experiment, not a price change, kept the stakes low across the team: any result was useful input for the next round." },
        { kind: "framework", title: "Hypotheses", items: [
          { k: "Charm / odd", v: "€15.99", effect: "Reads as a deal" },
          { k: "Prestige / even", v: "€12.00", effect: "Reads as quality" },
          { k: "Round", v: "€10.00", effect: "Lowest cognitive friction" },
          { k: "Appearance", v: "visual treatment", effect: "How the number is rendered changes perceived size" }
        ]},
        { kind: "section", title: "Method", body: "We tested seven variants between €10 and €15, each grounded in a specific psychological principle. As the primary metric we used revenue per user, not transaction rate. A higher price can convert slightly fewer users and still produce more revenue overall, so transaction rate alone would have hidden the better-performing variants. To check the effect wasn't carried by a single segment, we broke the results down by new versus returning users, by free-plan holders, and by the order amount from the referring shop." },
        { kind: "figure", hue: 22, label: "Variants · ranked", caption: "Fig. 2 - Round-one variants ranked by revenue per user. Round two added a CLV layer and shifted the winner." },
        { kind: "result", title: "Outcome", body: "€15.99 won on revenue per user with a 99.9% win probability. We extended the work into a second round, expanding the price range up to €20 and layering customer-lifetime-value forecasting on top of all tested variants. With CLV factored in, €12.00, one of the original hypotheses from round one, came out on top on long-term value and shipped as the new price. Post-ship we monitored withdrawals and churn over a horizon of a year and longer; neither moved significantly. Annualized, the lift was one of the larger contributors to the team's growth that year. [PLACEHOLDER · drop in a relative share or qualitative line once cleared for publication] The experiment setup has since become the default approach for consumer pricing changes at Trusted Shops." },
        { kind: "limitations",
          defaultFace: "opportunities",
          title: "Limitations",
          subtitle: "I learned in academia that it's considered good manners to critique your own work, no matter how good it is. Every solution brings room for more ideas.",
          oppositeTitle: "Opportunities",
          oppositeSubtitle: "These are directions I'd pull if the project got another round. Some pair to a specific limitation, some are just headroom I noticed along the way.",
          items: [
            { title: "Quantitative test design", body: "Both rounds relied on behavioral A/B data and CLV modeling. Qualitative price-sensitivity research (Van Westendorp, conjoint, depth interviews) would have triangulated the result but wasn't part of this scope." },
            { title: "CLV is a forecast", body: "The winning price was chosen on a customer-lifetime-value model layered on top of the A/B data, not on multi-year observed lifetimes. Post-ship monitoring is starting to confirm the model, but the original decision was partly model-driven." },
            { title: "Single product surface", body: "Only the buyer-protection upsell was tested. Other pricing levers (subscription tiers, B2B pricing) were not in scope and may behave differently." },
            { title: "Price tested, mechanisms bundled", body: "Each variant combines related psychological mechanisms (e.g. €15.99 is both charm-priced and odd-ending). Methodologically consistent since the mechanisms aren't independently variable, but the test confirms which price won, not which underlying mechanism drove it." }
          ],
          opportunities: [
            { title: "Van Westendorp survey", body: "I had proposed a price-sensitivity survey for round one and would still run one on a future round. It surfaces the price band users perceive as fair, cheap, or too expensive, and could refine where to test next." },
            { title: "Conjoint on price / feature trade-offs", body: "Users implicitly trade price against features. A conjoint or MaxDiff study would surface which feature bundles justify which price point, useful input for future tier design." },
            { title: "Monthly subscription tier", body: "Follow-up user research I ran in this area surfaced clear demand for a monthly model. It sits on the roadmap as a follow-on test of price and cadence together." },
            { title: "Lower-cover entry tier", body: "The same research surfaced demand for a lower-cover, lower-price option. A natural candidate for the next round of pricing experiments." }
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
      tldr: "Conversion tests were stuck behind sprint cycles, two weeks minimum to launch. When Figma Make shipped in May 2025, I redesigned the workflow around it: design-system-aware templates, an 80% brand-compliance QA gate, and a refinement loop for winning tests. We now go from idea to live test in two days.",
      story: [
        { kind: "section", title: "Bottleneck", body: "Every conversion test ran the same chain: PM develops an idea, designer mocks it, developer implements it inside a sprint, test launches. The developer step owned the calendar. Minimum two weeks, often longer, for changes that were supposed to be lightweight." },
        { kind: "section", title: "Bet", body: "I had been watching AI design tools for a while. When Figma Make shipped in May 2025, I tested it on release day with one question: if our design system is wired in properly, can conversion managers visualize their own ideas without a designer or developer in the loop. The answer was close enough to yes to redesign the workflow around it." },
        { kind: "figure", hue: 265, label: "Figma Make template · live page replica", caption: "Fig. 1 - A template baked with our design system. Conversion managers prompt inside it, designer QAs the output, the test ships." },
        { kind: "flow", title: "Workflow", items: [
          { from: "Idea", to: "Figma Make (with DS)" },
          { from: "Figma Make", to: "Designer QA (80% brand rule)" },
          { from: "QA pass", to: "Test live" },
          { from: "Winning test", to: "Refine to 100% for rollout" }
        ]},
        { kind: "section", title: "Trade-off", body: "In experimentation, speed of learning matters more than pixel perfection. We ship at 80% brand compliance after designer QA, so nothing embarrassing goes out, then refine winners to 100% before they roll out permanently. The 80 is a deliberate gate, not a compromise on craft." },
        { kind: "section", title: "Templates", body: "Rather than letting people generate a random version of a page per test, I built 1:1 replicas of live pages as Figma Make templates. Each template bakes in prompt instructions: automatic test naming, export conventions, role awareness. Only I manage templates; everyone else works inside them." },
        { kind: "figure", hue: 265, label: "Cycle · before / after", caption: "Fig. 2 - Test cycle, before and after. A two-week sprint dependency replaced by a 24-hour QA loop." },
        { kind: "result", title: "Aftermath", body: "PMs in other departments picked up Figma Make. Other designers picked it up. The templates became a single source of truth alongside our main Figma files. My role shifted from executing designs to maintaining the system around them." }
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
      tldr: "No dedicated researcher, no budget, teams making decisions on gut feeling and running disconnected conversion tests. I proposed a lean framework: one method a month, rotated by current need. In year one we hit 1.5× the target, collected the company's first sociodemographic user data, and ran the first focus group in 25 years.",
      story: [
        { kind: "section", title: "Situation", body: "No heatmaps. No regular research. Teams siloed. Conversion managers implementing design ideas without a holistic UX concept for the pages they were optimizing. The result was a patchwork of isolated wins that did not add up to a coherent experience." },
        { kind: "section", title: "Framing", body: "Individual tests win small fights. Only a research practice wins the larger one. I proposed a lean approach: one project a month, one method at a time, topic chosen by current need. Not academic rigor for its own sake, a sustainable rhythm teams could actually maintain." },
        { kind: "framework", title: "Cadence", items: [
          { k: "Monthly survey", v: "385+ responses", effect: "Statistical significance on rotating topics" },
          { k: "Heatmaps (Clarity)", v: "Always-on", effect: "Surfaced a dead-click issue on branded product names" },
          { k: "Interviews", v: "As-needed", effect: "Qualitative stories behind the numbers" },
          { k: "Focus group", v: "First in 25 yrs", effect: "Qualitative depth on a trust topic" }
        ]},
        { kind: "figure", hue: 150, label: "Cadence · 12 months", caption: "Fig. 1 - A year of research, one method per month. Surveys form the backbone, heatmaps run continuously, interviews and focus groups slot in by topic." },
        { kind: "section", title: "Evidence", body: "The organization assumed its typical customer was around 50. Survey data showed they were significantly older. The 2018 personas were stereotypical and outdated; the UX team preferred JTBD. I took a third route, a Limbic Types survey mapped to the actual user base, producing the first sociodemographic user data the company had ever collected." },
        { kind: "figure", hue: 150, label: "Limbic Types · user mapping", caption: "Fig. 2 - The Limbic Types segmentation, mapped to our actual user base. Replaced the 2018 personas." },
        { kind: "result", title: "Proof", body: "Three individual element tests in one quarter: new Plus branding, a comparison table, a progress bar. Each delivered roughly +20%. All three won. The deliberate goal: show through data that holistic, user-centered design outperforms the isolated approach. Each winning test made the case for the next one." },
        { kind: "section", title: "Aftermath", body: "The framework was later elevated out of our team to serve all consumer-facing teams. B2B teams adopted it. Other designers started running their own research. PMs come to me proactively for research support. From 'the designer does some surveys' to an organizational capability." }
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

  posts: [
    {
      slug: "ux-audits-with-ai",
      title: "How I run UX audits with AI",
      date: "2026-06-10",
      dateLabel: "June 2026",
      readingTime: "7 min",
      tags: ["AI", "UX audit", "Process"],
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
        { kind: "code", lang: "text", code: "Audit this page copy against Nielsen's ten heuristics\nand basic conversion principles. Drop a numbered pin on\neach issue, anchored to the element it concerns. For each\npin: the heuristic, the problem in one line, and the\nseverity. Don't invent issues to fill a quota." },
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

        { kind: "h2", text: "Final thoughts" },
        { kind: "divider", symbol: "◆ ◆ ◆" }
      ]
    },
    {
      slug: "anatomy-of-a-long-form-post",
      title: "Anatomy of a long-form post",
      date: "2026-05-12",
      dateLabel: "May 2026",
      readingTime: "6 min",
      tags: ["Writing", "Design system"],
      excerpt: "A walk through every building block I use when a post needs more than paragraphs - headings, pull quotes, lists, figures, callouts, and code.",
      body: [
        { kind: "lead", text: "Most posts on this blog are five tight paragraphs and out. Some need more room to breathe: a few headings, a pull quote, a list, maybe a figure. This is the kitchen sink - every block type I use, laid out in one place so I can see them next to each other." },
        { kind: "h2", text: "Why blocks beat blobs" },
        { kind: "paragraph", text: "Writing a long post as one wall of paragraphs is fine until the reader starts skimming. The moment they skim, structure becomes the message. Headings give the page a skeleton. Pull quotes hold attention. Lists answer **how many** and **in what order**. A figure says **this is what it looked like**. The job of the block system is to make each of those moves cheap." },
        { kind: "paragraph", text: "I want to be able to drop a heading in without thinking about CSS. I want a pull quote to feel different in v1 (italic display serif) and v3 (heavier sans, monospace caption), without me writing two versions. The data is one source of truth; the variation styles do the rest." },
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
        "ChatGPT had every head start a product can ask for. A year of consumer mindshare ahead of Claude, household-name brand, the most-downloaded app of the decade. By early 2026 it still had over 900 million weekly users and around 25 billion dollars in annualized revenue. And yet Anthropic now runs ahead of it on revenue, with analysts beginning to talk about it as potentially one of the highest-revenue companies of the decade. The interesting question is how that happened in three years.",
        "Anthropic did not just pick a niche. They picked a group of users whose work was already shaped by the technology they were building. Developers immediately understand what a language model can do. They write code that compounds into more value, and they are paid to adopt tools that make them faster. When the user group's job is already shaped by what you sell, the product-market fit is half-built before you start.",
        "Everyone is the most expensive user group you can design for. When the brief is mass market, every decision becomes a compromise. Onboarding has to work for a teenager and a CFO. Guardrails have to be tuned for the median. Surface area has to keep getting wider. Optimizing for everyone is a tax that nobody on the team feels until they try to ship. Anthropic skipped it. They built Claude Code: a tool for a developer writing code in a terminal, shaped exactly to that work. It went from launch to 2.5 billion dollars in annualized revenue in roughly a year, more than half of it from enterprise.",
        "And then they kept earning the right to expand. The desktop client came after Claude Code, and then Cowork, both built for the people who work next to developers: product managers, designers, ops, support. The model underneath is the same. What sits on top is shaped differently for each role. A developer who pays for Claude brings it into the team. The team brings it into the company. A ten-seat engineering contract turns into a hundred seats across functions. That is the shape of developer-first B2B growth, and it is why roughly 80 percent of Anthropic's revenue comes from API and enterprise, and only around 10 to 15 percent from consumer subscriptions.",
        "None of this would land without a model good enough to carry it. Claude Opus is an asset on its own. It shows up in Cursor and dozens of other products precisely because it is the strongest underlying model for the work developers care about. The ICP discipline and the model quality compound on each other. Neither alone would have been enough.",
        "Growth is not the only metric a company should be judged by, and the long arc still has to deliver margins, retention, durability. But the lesson for product people here is plainer than people usually want it to be. Pick the user group whose work is already shaped by your technology, and earn the right to expand outward from there. The trajectory tends to reward that more than the comfortable answer of serving everyone at once."
      ]
    },
    {
      slug: "research-before-pixels",
      title: "Research before pixels",
      date: "2026-03-12",
      dateLabel: "March 2026",
      readingTime: "4 min",
      tags: ["Research", "Process"],
      excerpt: "Why I open every project with evidence instead of Figma, and how it changes what the team ships.",
      body: [
        "The fastest way to waste three sprints is to start in Figma. I've done it. The team ships something clean, well-spaced, visually tidy - and nobody uses it the way we imagined.",
        "Research before pixels is not about writing a 40-page report before you open the file. It is a posture: the first question is always what do we actually know, and the second is what would we need to know to be wrong.",
        "In practice that looks small. A 20-minute conversation with two customers. A Hotjar session of the current flow. A three-question survey on the checkout page. Nothing academic, nothing heavy. Just enough evidence to stop debating opinions.",
        "The output is rarely a chart. It is a sharper brief. The team stops arguing about button color and starts arguing about the right moment in the flow, the right label, the right default. The work gets smaller and the decisions get firmer.",
        "Pixels are cheap once the question is right. Most of my best projects started with a one-page note that nobody looked at again. It did its job."
      ]
    },
    {
      slug: "80-percent-is-a-feature",
      title: "80% is a feature, not a compromise",
      date: "2026-02-04",
      dateLabel: "February 2026",
      readingTime: "3 min",
      tags: ["Experimentation", "Design Ops"],
      excerpt: "Shipping at 80% brand compliance made our conversion-test loop 7x faster. Here is the trade-off I had to defend.",
      body: [
        "When we redesigned the conversion-test workflow at Trusted Shops around Figma Make, one question kept coming back: are you ok with this not being pixel-perfect?",
        "Short answer: yes, on purpose. An experiment that ships in two days at 80% beats an experiment that ships in two weeks at 100%. The cost of waiting is invisible, but it is real - every week of backlog is a week of compounding learning we are not getting.",
        "The trick is to make the 80 explicit. A designer QA gate catches anything embarrassing. A template system bakes in the non-negotiables: type scale, spacing rhythm, CTA behavior. Inside that fence, conversion managers can move fast without making the product feel broken.",
        "Then the winning tests get refined to 100% before permanent rollout. The polish does not disappear - it just moves to the point where it actually matters.",
        "The hardest part is not the design. It is convincing the team that conscious imprecision is a choice, not a slip."
      ]
    },
    {
      slug: "first-focus-group-in-25-years",
      title: "Notes from the first focus group in 25 years",
      date: "2025-11-18",
      dateLabel: "November 2025",
      readingTime: "5 min",
      tags: ["Research ops", "Culture"],
      excerpt: "What I learned running a method an organization had not used since the 90s, and why I will do it again.",
      body: [
        "Running the first focus group in 25 years was not my idea of a bold research move. It was a pragmatic one: we had a trust question that surveys kept answering the same way, and we needed to hear people push back on each other, not on us.",
        "The interesting part was not the method, it was the reaction inside the company. People were curious. Some were skeptical. A few were openly nervous about what six customers in a room might say out loud.",
        "The output was not surprising - most insights echoed what the surveys had hinted at. But the weight was different. A quote in a deck moves a room. A percentage does not.",
        "The lesson I took away is that a research practice is a portfolio, not a method. Surveys for breadth, heatmaps for behavior, interviews for why, and every now and then a focus group for a texture you cannot get any other way.",
        "I will run another one. Probably this year. Probably with less ceremony."
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
    ],
    v3: [
      { t: "Sketchbook 2025", kind: "drawings", count: "38 pages" },
      { t: "Aerial Yoga site", kind: "brand", count: "1 microsite" },
      { t: "Canva kits", kind: "visual", count: "3 clients" },
      { t: "Reading shelf", kind: "notes", count: "~30 books" },
      { t: "Type pairings", kind: "type", count: "open file" },
      { t: "Color studies", kind: "palette", count: "oklch only" }
    ]
  }
};
