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
      "I turn messy product problems into evidence-backed design. Research, experimentation and systems thinking are the spine — but I ship end-to-end, from discovery to pixels to post-launch metrics.",
    longBio: [
      "I didn't start in design — I started in curiosity. A communications degree, a first UX role at an agency, and a slow realisation that the questions I loved asking (why do people do what they do? what makes a product feel effortless?) were exactly the questions good design answers.",
      "Five years in, I've designed end-to-end across B2B logistics, consumer trust, and internal tooling. My spine is research and experimentation: I've run the first focus group in a 25-year-old company, introduced heatmaps that reshaped a brand, and turned a price set on intuition into a 15% revenue lift.",
      "But the label 'growth designer' undersells it. The work that excites me is the full loop — from a fuzzy strategic question to shipped UI to measured outcome, with a design system and a research habit left behind afterwards."
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
      subtitle: "Turning an arbitrary price into a research-backed revenue driver",
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
      tags: ["UX Research", "Behavioral Psychology", "A/B Testing", "Pricing"],
      coverPaletteHue: 22,
      tldr: "A €9.90 price point that nobody had ever questioned. I turned it into a pricing psychology experiment: 7 variants across 2 rounds, grounded in charm vs. prestige vs. round pricing theory. €12.00 won — not because it tested best, but because it tested best *with* CLV forecasting layered on top.",
      story: [
        { kind: "section", title: "Situation", body: "Trusted Shops' buyer protection had been priced at €9.90 since launch. A number chosen without data, strategy, or user input. It was one of the company's core revenue drivers — and no one had systematically examined whether it was the right price." },
        { kind: "section", title: "Insight", body: "Pricing isn't a finance problem. It's a behavioural design problem. How a price is presented, structured, and framed shapes how people perceive value. I grounded the test in academic pricing psychology." },
        { kind: "framework", title: "The hypothesis map", items: [
          { k: "Charm / odd", v: "€15.99", effect: "Perceived as a deal" },
          { k: "Prestige / even", v: "€12.00", effect: "Signals quality, simplicity" },
          { k: "Round", v: "€10.00", effect: "Reduces cognitive friction" },
          { k: "Appearance", v: "— visual —", effect: "How the number looks affects perceived magnitude" }
        ]},
        { kind: "section", title: "Method", body: "We ran a proper experiment. Seven variants between €10 and €15, each rooted in a specific psychological principle. Revenue per user as the north-star metric (not transaction rate — a higher price might convert slightly fewer but still generate more). Segmented by new vs returning, free-plan holders, and order amount from the referring shop." },
        { kind: "result", title: "What won", body: "Round one: €15.99 won on revenue per user (99.9% win probability). Churn did not rise. Round two expanded the range to €20, layered a CLV forecast on top. €12.00 — one of my original hypotheses — won on long-term value." },
        { kind: "section", title: "Ripple", body: "The project became the template. Research-backed, hypothesis-driven pricing is now the default at Trusted Shops. The Van Westendorp survey management declined on round one? It shipped in round three. We now run regular perception surveys — and they surfaced demand for a monthly tier and a lower-insurance tier that will shape the next wave." }
      ]
    },
    {
      slug: "ai-workflow",
      title: "From 2 weeks to 2 days",
      subtitle: "Redesigning the conversion-test workflow around AI",
      company: "Trusted Shops",
      year: "2025",
      role: "Owner · End-to-end",
      team: "Solo, with conversion managers as early adopters",
      duration: "Ongoing since May 2025",
      impact: [
        { label: "Cycle time", value: "−85%", note: "2 weeks → 2 days" },
        { label: "Dev dependency", value: "0", note: "conversion tests fully self-serve" },
        { label: "Adoption", value: "Org-wide", note: "spread beyond my team" }
      ],
      tags: ["Process innovation", "AI / Figma Make", "Design ops", "Systems"],
      coverPaletteHue: 265,
      tldr: "Conversion tests were stuck behind sprint cycles — two weeks minimum. When Figma Make shipped, I redesigned the whole workflow around it: design-system-aware templates, an 80% brand-compliance QA gate, and a post-win refinement loop. Two days from idea to test.",
      story: [
        { kind: "section", title: "The bottleneck", body: "Every conversion test ran the same chain: PM develops an idea, designer mocks it, developer implements it inside a sprint, test launches. That developer step owned the calendar. Minimum two weeks, often longer — for changes that were supposed to be lightweight." },
        { kind: "section", title: "The bet", body: "I'd been watching AI design tools for months. When Figma Make shipped in May 2025, I saw it immediately: if the design system was properly wired in, conversion managers could visualise ideas without a designer or developer in the loop. I tested it on release day." },
        { kind: "flow", title: "The new workflow", items: [
          { from: "Idea", to: "Figma Make (with DS)" },
          { from: "Figma Make", to: "Designer QA (80% brand rule)" },
          { from: "QA pass", to: "Test live" },
          { from: "Winning test", to: "Refine to 100% for rollout" }
        ]},
        { kind: "section", title: "The 80/20 trade-off", body: "This was the key call. In experimentation, speed matters more than pixel perfection. Ship at 80% brand compliance (designer-QA'd, so nothing embarrassing goes out), then refine winners to 100% before permanent rollout. Conscious imprecision, bounded by a gate." },
        { kind: "section", title: "The template system", body: "Rather than letting people generate a random version of a page per test, I built 100% replicas of live pages as Figma Make templates. Each template bakes in prompt instructions — automatic test naming, export conventions, role awareness. Only I manage templates; everyone else works inside them." },
        { kind: "result", title: "The ripple", body: "PMs in other departments adopted Figma Make. Other designers adopted it. The templates became a single source of truth alongside our main Figma files. My role shifted from executing designs to designing the system around them." }
      ]
    },
    {
      slug: "research-culture",
      title: "The first focus group in 25 years",
      subtitle: "Building a continuous research practice from zero budget",
      company: "Trusted Shops",
      year: "2023 — ongoing",
      role: "Research lead · Change management",
      team: "With UX team lead, spreading outward",
      duration: "Year one hit 1.5× target",
      impact: [
        { label: "Target exceeded", value: "1.5×", note: "research methods / month" },
        { label: "Projects shipped", value: "10+", note: "from my team alone" },
        { label: "Element tests won", value: "100%", note: "3/3 at +20% each" }
      ],
      tags: ["Continuous research", "Change management", "Behavioural data"],
      coverPaletteHue: 150,
      tldr: "No dedicated researcher. No budget. Teams making decisions on gut feeling and running 'Frankenstein' conversion tests. I proposed a lean framework — one method a month, rotating topic — and in year one we hit 1.5× the target, ran the company's first focus group in 25 years, and collected its first sociodemographic user data.",
      story: [
        { kind: "section", title: "The starting state", body: "No heatmaps. No regular research. Teams siloed. Conversion managers implementing design ideas without a holistic UX concept for the pages they were optimising. The result was what I started calling 'Frankenstein design' — a patchwork of isolated wins that didn't add up to a coherent experience." },
        { kind: "section", title: "The framing", body: "Individual tests win isolated battles. Only a research culture wins the war. I proposed lean research: one project a month, one method at a time, topic chosen by current need. Not academic rigour for its own sake — a sustainable rhythm teams could actually maintain." },
        { kind: "framework", title: "The cadence", items: [
          { k: "Monthly survey", v: "385+ responses", effect: "Statistical significance on rotating topics" },
          { k: "Heatmaps (Clarity)", v: "Always-on", effect: "Revealed dead-click issue on branded product names" },
          { k: "Interviews", v: "As-needed", effect: "Anchored qualitative stories behind the numbers" },
          { k: "Focus group", v: "First in 25 yrs", effect: "New qualitative depth on a trust topic" }
        ]},
        { kind: "section", title: "Evidence over assumption", body: "The organisation assumed its typical customer was around 50. Survey data showed they were significantly older. Existing personas from 2018 were stereotypical and outdated; the UX team preferred JTBD. I took a third route — a Limbic Types survey mapped to the actual user base, producing the company's first sociodemographic user data and a framework that explains behavioural differences by age better than any of our old personas." },
        { kind: "result", title: "The payment-form proof", body: "Three individual element tests in one quarter — new Plus branding, a comparison table, a progress bar. Each delivered roughly +20%. All three won. The deliberate strategy: prove through data that holistic, user-centred design outperforms the Frankenstein approach. Each winning test made the case for the next one." },
        { kind: "section", title: "The ripple", body: "The framework was later elevated out of our team to serve all consumer-facing teams. B2B teams adopted it. Other designers started running their own research. PMs now come to me proactively for research support. From 'the designer does some surveys' to an organisational capability." }
      ]
    },
    {
      slug: "design-system",
      title: "A design system for a scaling logistics platform",
      subtitle: "IA rework + modular UI + co-created rebrand",
      company: "Cargoboard",
      year: "2020 — 2022",
      role: "Design systems lead",
      team: "With brand team, engineers, product",
      duration: "18 months",
      impact: [
        { label: "Handoff time", value: "−60%", note: "design-to-dev after tokens" },
        { label: "Product surface", value: "Unified", note: "across 4 core flows" },
        { label: "Support tickets", value: "Down", note: "on navigation issues" }
      ],
      tags: ["Design system", "Information architecture", "B2B SaaS"],
      coverPaletteHue: 200,
      tldr: "Years of rapid growth had left the product with inconsistent patterns, fragmented navigation, and a visual language that no longer matched the company's ambitions. I led the design-system creation while redesigning the core IA — and co-created the visual rebrand alongside it.",
      story: [
        { kind: "section", title: "Situation", body: "Years of organic sprawl. Inconsistent patterns, fragmented navigation, visual language that no longer represented the company's ambitions. Engineers were rebuilding the same components every sprint." },
        { kind: "section", title: "Approach", body: "Cross-functional effort spanning design, engineering, product, and brand. I led the system creation while simultaneously redesigning the core information architecture, and co-created the visual rebrand with the brand team." },
        { kind: "framework", title: "Key activities", items: [
          { k: "Audit", v: "Full product", effect: "Surface inconsistencies and patterns" },
          { k: "IA", v: "User mental models", effect: "Rework navigation around real tasks" },
          { k: "Tokens", v: "Ground up", effect: "Modular, themeable component library" },
          { k: "Brand", v: "Co-created", effect: "Visual rebrand in parallel" }
        ]},
        { kind: "result", title: "Outcome", body: "Significantly reduced design-to-development handoff time. Visual consistency across all product areas. The IA redesign improved task completion and reduced support tickets on navigation confusion." }
      ]
    }
  ],

  sideProjects: [
    { kind: "practice", title: "Aerial yoga teaching", detail: "Certified teacher. Weekly classes. Keeps me humble about balance, patience, and what 'effortless' actually costs to build.", tag: "Off-screen" },
    { kind: "reading", title: "~30 books tracked in 2025", detail: "Mix of design, behavioural science, and fiction. Currently: Thinking, Fast and Slow · Klara and the Sun · Design is Storytelling.", tag: "Input" },
    { kind: "making", title: "Canva side work", detail: "Brand guidelines, pitch decks, social kits for small brands — a low-pressure way to stay sharp on visual systems outside of product.", tag: "Visual" },
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

  playground: {
    v1: [
      { t: "Sketchbook 2025", kind: "drawings", hue: 50 },
      { t: "Aerial Yoga site", kind: "brand", hue: 330 },
      { t: "Canva kits", kind: "visual", hue: 190 },
      { t: "Reading shelf", kind: "reading", hue: 100 },
      { t: "Type pairings file", kind: "type", hue: 20 },
      { t: "Colour studies", kind: "palette", hue: 270 }
    ],
    v3: [
      { t: "Sketchbook 2025", kind: "drawings", count: "38 pages" },
      { t: "Aerial Yoga site", kind: "brand", count: "1 microsite" },
      { t: "Canva kits", kind: "visual", count: "3 clients" },
      { t: "Reading shelf", kind: "notes", count: "~30 books" },
      { t: "Type pairings", kind: "type", count: "open file" },
      { t: "Colour studies", kind: "palette", count: "oklch only" }
    ]
  }
};
