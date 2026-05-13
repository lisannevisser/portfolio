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
      title: "A €9.90 guess → a €12.00 decision",
      subtitle: "Two rounds of pricing experiments on a number nobody had questioned",
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
      tldr: "Trusted Shops' buyer protection had been priced at €9.90 since launch, picked once and never tested. I designed two rounds of A/B tests with seven variants, each grounded in a different pricing-psychology principle. €15.99 won round one on revenue per user; €12.00 won round two once we layered customer-lifetime-value forecasting on top, and shipped as the new price.",
      story: [
        { kind: "section", title: "Situation", body: "Buyer protection had been priced at €9.90 since launch. A number picked without data, strategy, or user input. It is one of the company's core revenue drivers, and no one had systematically tested whether it was the right price." },
        { kind: "figure", hue: 22, label: "Pricing UI · before", caption: "Fig. 1 - The buyer-protection upsell as it appeared at checkout, unchanged for years." },
        { kind: "section", title: "Approach", body: "Price perception depends on how a number is written and framed, not only on the number itself. I used pricing-psychology research to design the variants instead of picking them by gut feel, and treated the project as an experiment rather than a price change." },
        { kind: "framework", title: "Hypotheses", items: [
          { k: "Charm / odd", v: "€15.99", effect: "Reads as a deal" },
          { k: "Prestige / even", v: "€12.00", effect: "Reads as quality" },
          { k: "Round", v: "€10.00", effect: "Lowest cognitive friction" },
          { k: "Appearance", v: "visual treatment", effect: "How the number is rendered changes perceived size" }
        ]},
        { kind: "section", title: "Method", body: "Seven variants between €10 and €15, each grounded in a specific psychological principle. Revenue per user as the primary metric, not transaction rate (a higher price can convert slightly fewer users and still produce more revenue). Results segmented by new vs. returning, free-plan holders, and order amount from the referring shop." },
        { kind: "result", title: "Outcome", body: "Round one: €15.99 won on revenue per user (99.9% win probability). Churn did not rise. Round two extended the range to €20 and layered a CLV forecast on top. €12.00, one of the original hypotheses, won on long-term value and shipped as the new price." },
        { kind: "figure", hue: 22, label: "Variants · ranked", caption: "Fig. 2 - Round-one variants ranked by revenue per user. Round two added a CLV layer and shifted the winner." },
        { kind: "section", title: "Aftermath", body: "The setup became the template. Hypothesis-driven pricing is now the default approach for price changes at Trusted Shops. The Van Westendorp survey that management declined in round one shipped in round three and is now part of the standard kit. The latest round surfaced demand for a monthly tier and a lower-insurance tier, both on the roadmap for next year." }
      ]
    },
    {
      slug: "ai-workflow",
      title: "From 2 weeks to 2 days",
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
      title: "The first focus group in 25 years",
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
      title: "A design system for a scaling logistics platform",
      subtitle: "Atomic design system plus a co-created rebrand",
      company: "Cargoboard",
      year: "2020 — 2022",
      role: "Design systems lead · Rebrand co-creation",
      team: "With the brand team and engineers; hired a print designer for the rebrand",
      duration: "18 months",
      impact: [
        { label: "Handoff time", value: "−60%", note: "design-to-dev after tokens" },
        { label: "Product surface", value: "Unified", note: "across 4 core flows" },
        { label: "Rebrand", value: "Co-created", note: "with brand team" }
      ],
      tags: ["Design Lead", "Design system", "B2B SaaS"],
      coverPaletteHue: 200,
      tldr: "Years of rapid growth had left the company with missing standards and no unified product design. I led the creation of a modular design system following atomic design principles, and co-created a visual rebrand with the brand team, hiring a print designer to cover print scope.",
      story: [
        { kind: "section", title: "Situation", body: "Years of organic sprawl. Inconsistent patterns, fragmented navigation, a visual language that no longer represented the company's ambitions. Engineers were rebuilding the same components every sprint." },
        { kind: "figure", hue: 200, label: "Audit · component sprawl", caption: "Fig. 1 - The pre-system landscape: 40+ button variants, six navigation patterns, three different ways to render a table." },
        { kind: "section", title: "Approach", body: "Cross-functional effort spanning design, engineering, product, and brand. I led the system creation, simultaneously redesigned the core information architecture, and co-created the visual rebrand with the brand team." },
        { kind: "framework", title: "Activities", items: [
          { k: "Audit", v: "Full product", effect: "Surface inconsistencies and patterns" },
          { k: "IA", v: "User mental models", effect: "Rework navigation around real tasks" },
          { k: "Tokens", v: "Ground up", effect: "Modular, themeable component library" },
          { k: "Brand", v: "Co-created", effect: "Visual rebrand in parallel" }
        ]},
        { kind: "figure", hue: 200, label: "Component set · atoms to templates", caption: "Fig. 2 - The atomic component set as it shipped, from primitives up to page-level templates." },
        { kind: "result", title: "Outcome", body: "Design-to-development handoff time dropped meaningfully. Visual consistency across all product areas. The IA redesign improved task completion and reduced support tickets on navigation confusion." }
      ]
    },
    {
      slug: "website-relaunch-a",
      title: "Cargoboard website relaunch · chronological",
      subtitle: "140+ pages, new brand, new IA, no research budget · draft A",
      company: "Cargoboard",
      year: "2022 - 2023",
      role: "Lead designer · End-to-end",
      team: "1 designer (me) · marketing manager · frontend engineer · graphic designer · student assistant · HR agency",
      duration: "March 2022 - January 2023",
      impact: [
        { label: "Pages relaunched", value: "140+", note: "in under a year" },
        { label: "External research", value: "€0", note: "three internal proxies instead" },
        { label: "Design system", value: "Daily use", note: "across web, print, internal" }
      ],
      tags: ["Website relaunch", "Brand", "Design system", "IA"],
      coverPaletteHue: 330,
      tldr: "Cargoboard, a B2B logistics startup, needed a new brand and 140+ pages relaunched in under a year, on a small team and with no budget for external user research. I treated the design system as the lever - if every brand decision produced reusable scaffolding, later pages would compound on earlier work. Three streams ran in parallel (brand, illustration, IA); final pages came last. Live since January 2023; the system is the default for all internal and external work since.",
      story: [
        { kind: "section", title: "Introduction", body: "Cargoboard is a German B2B logistics provider, founded in 2019. After three years of growth, the founders wanted a website that matched the company they had become. That meant a rebrand, a new IA, and 140+ pages shipping in under a year, on a small team, without budget for external research." },
        { kind: "section", title: "Problem", body: "Four things had to be solved at once. The deeper problem underneath: there was no system. Every new page or asset restarted the design from zero. Without scaffolding, the timeline was impossible." },
        { kind: "framework", title: "What had to change", items: [
          { k: "Dated UI", v: "Inconsistent web and print", effect: "No common ground across surfaces" },
          { k: "Performance", v: "Unmaintained stack", effect: "Slow site, especially under growth" },
          { k: "No scaffolding", v: "No brand manual, no system", effect: "Every new asset restarted from zero" },
          { k: "Brand fit", v: "Founders felt outdated", effect: "Modern, dynamic, trustworthy was the brief" }
        ]},
        { kind: "section", title: "Process", body: "I treated the design system as the lever, not the deliverable. Three streams ran in parallel: brand (with HR's culture workshops feeding it), illustration (built from scratch with accessibility in from day one), and IA (the navigation rebuild). Final page design came last. By then most decisions were already made." },
        { kind: "figure", hue: 330, label: "Parallel streams", caption: "Fig. 1 - Three streams running in parallel: brand, illustration, IA. Final pages composed from the system afterwards." },
        { kind: "section", title: "Brand design", body: "The primary red is core to Cargoboard's identity, so we kept it and extended it into a system of tints, tones, and shades we now call \"signature red\". Added blue (secondary) and green (tertiary) so the brand had somewhere to go beyond a single bright accent. The logo stayed almost the same with minor touch-ups; the wordmark can now be used stand-alone for a sleeker look. Illustrations and illustrative icons were built with accessibility on multiple background colors in mind from the start." },
        { kind: "section", title: "Information architecture", body: "The original navigation hid most of the site. Even Cargoboard's own employees used Google to find their own pages. Operative pages like optional insurance were the hardest to reach, which was a real business risk. I drew on Nielsen Norman patterns and Information Architecture for the Web and Beyond (Rosenfeld, Morville, Arango, O'Reilly 2015), then worked with the SEO team on a link structure that served both users and search. We tested with a card sort workshop and tree-tested in UXtweak with users recruited from the live site. Both confirmed our direction and surfaced a few wording fixes." },
        { kind: "section", title: "Design and handoff", body: "I wanted mobile-first. Management chose desktop-first because the majority of Cargoboard's customers are desktop users (only ~5% on tablet). The numbers held up, so I accepted desktop-first. To keep mobile from becoming an afterthought, I sketched mobile alongside every desktop wireframe, and only moved to final mobile design once desktop was locked. Engineering kept Wordpress + Elementor. I handed off Figma components with usage documentation; our frontend engineer published them as custom Elementor templates so non-designers could self-serve. That constraint pushed the design system to be more disciplined - every component had to be reproducible by someone who couldn't open Figma." },
        { kind: "framework", title: "Testing without testers", items: [
          { k: "Customer service", v: "As proxy", effect: "Marked as hypothesis, not evidence" },
          { k: "Tree testing", v: "UXtweak, recruited from live site", effect: "Highest-cost decision tested before ship" },
          { k: "Launch as test", v: "Hotjar, GA, recordings live with relaunch", effect: "Next-best, since pre-launch budget was declined" }
        ]},
        { kind: "result", title: "Outcome", body: "Live since January 2023. The design system is in daily use across web, print, and internal docs. New pages now ship on top of it without a designer in the loop on every one, which was the whole point. No post-launch quantitative data was available at launch. The hypothesis: the new IA reduces support tickets about finding pages, and internal teams self-serve from the system. Both became measurable once analytics had a few months of data." },
        { kind: "section", title: "What worked", body: "Treating the design system as the lever, not the deliverable. Every page since launch has compounded on the system; without that scaffolding, the project wouldn't have shipped." },
        { kind: "section", title: "The workaround that held up", body: "Launch-as-test. With pre-launch budget not approved, I made the relaunch itself the testing phase - tracking, recordings, and heatmaps went live with the new site so we could measure what we couldn't otherwise know. It held. The cost was real: feedback the first weeks of users absorbed should have been caught earlier. Next time I would push harder for a small pre-launch budget upfront." },
        { kind: "section", title: "What I would revisit", body: "Desktop-first was correct for the user base, but mobile needs a dedicated pass now. Designing in parallel kept mobile shippable, but \"shippable\" isn't \"good\"." }
      ]
    },
    {
      slug: "website-relaunch-b",
      title: "Cargoboard website relaunch · thematic",
      subtitle: "140+ pages, new brand, new IA, no research budget · draft B",
      company: "Cargoboard",
      year: "2022 - 2023",
      role: "Lead designer · End-to-end",
      team: "1 designer (me) · marketing manager · frontend engineer · graphic designer · student assistant · HR agency",
      duration: "March 2022 - January 2023",
      impact: [
        { label: "Pages relaunched", value: "140+", note: "in under a year" },
        { label: "External research", value: "€0", note: "three internal proxies instead" },
        { label: "Design system", value: "Daily use", note: "across web, print, internal" }
      ],
      tags: ["Website relaunch", "Brand", "Design system", "IA"],
      coverPaletteHue: 330,
      tldr: "Cargoboard, three years in, needed a new brand and 140+ pages relaunched in under a year, on a small team and with no budget for external user research. The interesting question was not what the new site should look like - it was how to ship that much, that fast, without testing, and not have it fall apart on contact with users. I treated the design system as the lever, used three internal proxies instead of external research, and held mobile shippable inside a desktop-first call I did not fully own.",
      story: [
        { kind: "section", title: "The constraint", body: "Cargoboard is a German B2B logistics provider, three years in. The brand had grown organically, the site had not been maintained, and there was no system underneath any of it. The founders wanted a modern, dynamic, trustworthy site. The harder constraint underneath the brief: 140+ pages had to ship in under a year, on a small team, with no budget for external user research. The interesting question was not \"what should the new site look like\". It was: how do you ship that much, that fast, without testing, and not have it fall apart on contact with users?" },
        { kind: "section", title: "Approach", body: "I treated the design system as the lever, not the deliverable. If every brand decision produced reusable scaffolding - tokens, components, illustration rules, IA patterns - later pages would compound on earlier work instead of restarting from zero. Without that, the timeline was impossible." },
        { kind: "framework", title: "Three parallel streams", items: [
          { k: "Brand", v: "Signature red plus blue and green", effect: "Kept core identity, gave brand somewhere to go" },
          { k: "Illustration", v: "From scratch", effect: "Accessibility on multi-bg colors from day one" },
          { k: "IA", v: "Rebuilt around tasks and SEO", effect: "Drew on NN/g and the Rosenfeld IA book" }
        ]},
        { kind: "figure", hue: 330, label: "Streams converging", caption: "Fig. 1 - Three streams running in parallel, final pages composed from the system afterwards." },
        { kind: "section", title: "Testing without testers", body: "No external research budget. I used three proxies instead, with discipline about what each could and could not tell us." },
        { kind: "framework", title: "Proxies for user research", items: [
          { k: "Customer service", v: "Daily phone contact with users", effect: "Treated as hypothesis, not evidence" },
          { k: "Tree testing", v: "UXtweak, live-site recruits", effect: "Used where guessing was too expensive" },
          { k: "Launch as test", v: "Hotjar, GA, recordings", effect: "Next-best, since pre-launch budget was declined" }
        ]},
        { kind: "section", title: "Two trade-offs", body: "Two decisions where management's call differed from mine, and what I did to make each work." },
        { kind: "section", title: "Desktop-first", body: "I wanted mobile-first. Management chose desktop-first because the majority of customers are desktop users (only ~5% on tablet). The numbers held up, so I accepted it. To keep mobile from becoming an afterthought, I sketched mobile alongside every desktop wireframe, and only finalised mobile once desktop was locked. Mobile shipped on time, on the new system." },
        { kind: "section", title: "Wordpress, not a rebuild", body: "Engineering kept Wordpress + Elementor. I handed off Figma components with usage documentation; our frontend engineer published them as custom Elementor templates so non-designers could self-serve. The constraint pushed the design system to be more disciplined - every component had to be reproducible by someone who could not open Figma." },
        { kind: "result", title: "Outcome", body: "Live since January 2023. The design system is in daily use across web, print, and internal docs. New pages ship on top of it without a designer in the loop on every one, which was the whole point. No post-launch quantitative data was available at launch. The hypothesis: the new IA reduces support tickets about finding pages, and internal teams self-serve from the system. Both became measurable once analytics had a few months of data." },
        { kind: "section", title: "The bet that paid off", body: "Treating the design system as the lever, not the deliverable. Every page in the year since launch has compounded on the system. Without that scaffolding, the project would still be in progress." },
        { kind: "section", title: "The workaround that held up", body: "Launch-as-test. With pre-launch budget not approved, I made the relaunch itself the testing phase - tracking, recordings, and heatmaps went live with the new site so we could measure what we couldn't otherwise know. It held. The cost was real: feedback the first weeks of users absorbed should have been caught earlier. Next time I would push harder for a small pre-launch budget upfront." },
        { kind: "section", title: "The decision I would revisit", body: "Desktop-first was correct for the user base, but mobile needs a dedicated pass now. Designing in parallel kept mobile shippable, but \"shippable\" isn't \"good\"." }
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
