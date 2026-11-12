/**
 * Centralized portfolio data module for Jay Kumar Srivastava.
 * Exports positioning content, interactive AI blueprints, consulting pillars,
 * shipped works, certifications, journal stories, and contact options.
 */

export const profile = {
  name: "Jay Kumar Srivastava",
  role: "Technology Consultant & AI Specialist",
  location: "Pune, India · Working Globally",
  linkedin: "https://www.linkedin.com/in/jay-kumar-srivastava/",
  github: "https://github.com/jacksrivastava",
};

export const heroLenses = [
  {
    id: "ai",
    label: "AI & Automations",
    eyebrow: "Agentic Systems · Custom Models",
    headlineHighlight: "intelligent",
    summary:
      "Architecting human-in-the-loop AI workflows, domain-tuned RAG pipelines, and custom Gemini/LLM integrations that turn manual bottlenecks into reliable systems.",
    stack: [
      "Agentic Workflows",
      "Custom AI & RAG",
      "Gemini / LLM APIs",
      "Human Guardrails",
    ],
    engagement: "AI Workflow Sprint · 2–4 weeks",
    outcome: "Repeatable ops automated with verifiable human sign-off",
  },
  {
    id: "consulting",
    label: "Product & Architecture",
    eyebrow: "Technology Consulting · Full-Stack Delivery",
    headlineHighlight: "resilient",
    summary:
      "Partnering with founders and engineering teams to ship high-converting websites, web & mobile apps, startup MVPs, and dependable backend & QA architectures.",
    stack: [
      "React & TypeScript",
      "PostgreSQL & Redis",
      "Startup MVPs",
      "QA Automation",
    ],
    engagement: "Architecture & Product Build",
    outcome: "Production-ready software engineered from strategy to launch",
  },
];

export const heroMetrics = [
  {
    value: "07+",
    label: "Shipped Systems",
    detail: "Web, AI, Backend & QA",
  },
  {
    value: "AI + Stack",
    label: "Dual Practice",
    detail: "Custom Models & Full-Stack",
  },
  {
    value: "10+",
    label: "Verified Credentials",
    detail: "Meta, Cisco & HackerRank",
  },
  {
    value: "End-to-End",
    label: "Consulting Scope",
    detail: "Strategy to Production",
  },
];

export const marqueeCapabilities = [
  "Agentic AI Workflows",
  "Custom AI Models & RAG",
  "Startup MVP Architecture",
  "Full-Stack Web & Apps",
  "Distributed Backends",
  "QA & Test Automation",
  "Technical Problem-Solving",
];

export const aiBlueprints = [
  {
    id: "ai-automation",
    index: "01",
    tabLabel: "Agentic Workflows",
    title: "Bounded AI Agents with Human Guardrails",
    subtitle:
      "Practical autonomous workflows that gather context, validate rules, and prepare structured outputs—while pausing cleanly for human approval on consequential steps.",
    topic: "ai-automation",
    impact:
      "Eliminates repetitive triage while keeping 100% human accountability on external actions.",
    nodes: [
      {
        step: "01",
        role: "Input / Trigger",
        title: "Webhook, Inbox or Ops Event",
        summary:
          "Captures incoming customer requests, documents, or operational state changes.",
        detail:
          "Normalizes unstructured payloads (emails, form submissions, CRM records) and verifies required schema fields before any model invocation.",
        stack: ["Webhooks", "Schema Validation", "Queue Workers"],
      },
      {
        step: "02",
        role: "AI / Engine",
        title: "Context Enrichment & Reasoning",
        summary:
          "Classifies intent, extracts entities, and drafts a policy-checked action plan.",
        detail:
          "Combines deterministic business rules with structured LLM tool-calling so every agent step produces typed JSON rather than brittle freeform text.",
        stack: ["LLM Tool Calling", "Structured Output", "Policy Rules"],
      },
      {
        step: "03",
        role: "Human Checkpoint",
        title: "Explicit Stop Point & Review",
        summary:
          "Pauses automatically when confidence dips or an irreversible action is requested.",
        detail:
          "Surfaces cited evidence, confidence flags, and a one-click approve/edit diff so reviewers decide in seconds without re-doing the legwork.",
        stack: ["Confidence Thresholds", "Audit Trail", "Approval UI"],
      },
      {
        step: "04",
        role: "Output",
        title: "Executed Action & Telemetry",
        summary:
          "Commits approved updates to downstream APIs and logs measurable time saved.",
        detail:
          "Dispatches clean API writes, updates dashboards, and records exception clusters to continuously refine prompts and routing logic.",
        stack: ["REST / GraphQL", "Observability", "Retry Guards"],
      },
    ],
  },
  {
    id: "custom-ai-model",
    index: "02",
    tabLabel: "Custom AI & RAG",
    title: "Domain-Tuned AI Assistants & RAG Pipelines",
    subtitle:
      "Custom AI solutions grounded in your proprietary knowledge base, domain taxonomy, and real-time operational data—built along the patterns behind Kisaan.ai and Medic App.",
    topic: "custom-ai-model",
    impact:
      "Delivers cited, domain-accurate responses with strict hallucination boundaries.",
    nodes: [
      {
        step: "01",
        role: "Input / Trigger",
        title: "User Query & Domain Context",
        summary:
          "Accepts multimodal or text queries enriched with user profile and session state.",
        detail:
          "Sanitizes input, detects intent and language, and attaches role-scoped access filters before retrieval begins.",
        stack: ["Query Parsing", "Access Scoping", "Multimodal Input"],
      },
      {
        step: "02",
        role: "AI / Engine",
        title: "Hybrid Retrieval & Model Inference",
        summary:
          "Pairs semantic vector search with domain-tuned prompts or custom model endpoints.",
        detail:
          "Retrieves top-ranked chunks via hybrid dense + keyword search, reranks by relevance, and synthesizes answers using Gemini or fine-tuned models.",
        stack: ["Vector Search", "Gemini API", "Custom Fine-Tuning"],
      },
      {
        step: "03",
        role: "Human Checkpoint",
        title: "Citation & Safety Verification",
        summary:
          "Cross-checks generated claims against retrieved sources and domain guardrails.",
        detail:
          "Blocks unsupported claims, attaches inline source citations, and routes sensitive edge cases (e.g., clinical or financial advisories) to human review.",
        stack: ["Grounding Checks", "Source Citations", "Safety Filters"],
      },
      {
        step: "04",
        role: "Output",
        title: "Actionable Domain Response",
        summary:
          "Returns structured guidance, next-step recommendations, and feedback hooks.",
        detail:
          "Renders clear UI cards in web or mobile apps with thumbs-up/correction telemetry that feeds future evaluation datasets.",
        stack: ["Eval Loops", "Mobile / Web UI", "Telemetry"],
      },
    ],
  },
  {
    id: "web-app-mvp",
    index: "03",
    tabLabel: "Startup & App Architecture",
    title: "Scalable Websites, Apps & Startup MVPs",
    subtitle:
      "Full-stack product engineering from zero-to-one MVP launch to production optimization—combining crisp frontend craft with resilient APIs and caching.",
    topic: "web-app-mvp",
    impact:
      "Ships investor-ready and customer-ready digital products without architectural rewrite debt.",
    nodes: [
      {
        step: "01",
        role: "Input / Trigger",
        title: "Product Discovery & Domain Model",
        summary:
          "Translates founder goals and user journeys into clean system boundaries.",
        detail:
          "Maps core user flows, data entities, and conversion funnels early so design and database schemas evolve in lockstep.",
        stack: ["System Design", "UX Architecture", "Data Modeling"],
      },
      {
        step: "02",
        role: "AI / Engine",
        title: "Frontend & Distributed Backend",
        summary:
          "Pairs modern React/mobile interfaces with TypeScript APIs, PostgreSQL, and Redis.",
        detail:
          "Implements modular UI components, rate-limited endpoints, caching layers, and containerized deployments built for real traffic.",
        stack: ["React / Vite", "TypeScript", "PostgreSQL & Redis"],
      },
      {
        step: "03",
        role: "Human Checkpoint",
        title: "Staging Review & Performance Audit",
        summary:
          "Validates accessibility, responsive breakpoints, and edge-case failure paths.",
        detail:
          "Runs Lighthouse, mobile viewport checks, and stakeholder walkthroughs before flipping production DNS.",
        stack: ["Responsive QA", "Core Web Vitals", "Stakeholder Sign-off"],
      },
      {
        step: "04",
        role: "Output",
        title: "Live Production Platform",
        summary:
          "Deploys with CI/CD, analytics instrumentation, and clean handoff documentation.",
        detail:
          "Delivers fast, maintainable websites and apps (like TDB Portfolio, VTB Realities, and Short.ly) built to grow with the business.",
        stack: ["Docker / Netlify", "CI/CD", "Analytics"],
      },
    ],
  },
  {
    id: "qa-systems",
    index: "04",
    tabLabel: "Systems & QA",
    title: "Quality Engineering, Testing & Telemetry",
    subtitle:
      "Maintainable test automation frameworks, API verification pipelines, and embedded/IoT telemetry architectures that keep production systems trustworthy.",
    topic: "qa-systems",
    impact:
      "Catches regressions early with readable BDD specs and diagnostic failure artifacts.",
    nodes: [
      {
        step: "01",
        role: "Input / Trigger",
        title: "Commit, PR or Sensor Stream",
        summary:
          "Triggers automated verification suites on code pushes or live device events.",
        detail:
          "Connects CI pipelines or microcontroller telemetry channels to deterministic validation runners.",
        stack: ["Maven / CI", "Gherkin BDD", "IoT Telemetry"],
      },
      {
        step: "02",
        role: "AI / Engine",
        title: "Page-Object & API Test Execution",
        summary:
          "Runs reusable browser, API, and contract checks across target environments.",
        detail:
          "Executes Selenium WebDriver, JUnit, Cucumber, and Postman API assertions locally or across remote browser grids.",
        stack: ["Selenium", "Cucumber & JUnit", "Postman API"],
      },
      {
        step: "03",
        role: "Human Checkpoint",
        title: "Diagnostic Triage & Failure Artifacts",
        summary:
          "Captures screenshots, logs, and ExtentReports so engineers pinpoint root cause fast.",
        detail:
          "Separates flaky selector drift from true regressions, giving engineering leads clear go/no-go release visibility.",
        stack: ["ExtentReports", "Screenshots & Logs", "Root-Cause Triage"],
      },
      {
        step: "04",
        role: "Output",
        title: "Verified Release Confidence",
        summary:
          "Publishes test health summaries and gates production deployments safely.",
        detail:
          "Gives teams a shared working language between product, QA, and engineering before every release.",
        stack: ["Release Gates", "Living Specs", "Regression Shield"],
      },
    ],
  },
];

export const consultingPillars = [
  {
    id: "consulting",
    index: "01",
    eyebrow: "Pillar A · Technology Consulting & Product Engineering",
    title: "Websites, apps & startup architecture built to scale.",
    summary:
      "Hands-on technical partnership for founders and businesses—solving hard engineering bottlenecks and shipping reliable digital products.",
    cards: [
      {
        id: "websites-platforms",
        number: "01",
        title: "Websites & Digital Platforms",
        description:
          "High-impact founder homes, multi-page corporate sites, and conversion-focused web platforms engineered for speed, SEO, and clarity.",
        deliverables: [
          "Custom Design Systems",
          "Performance & SEO",
          "Netlify / Cloud Hosting",
        ],
        stack: ["React", "Vite", "Modern CSS"],
        topic: "web-app-mvp",
        featured: true,
      },
      {
        id: "apps-mvps",
        number: "02",
        title: "Web & Mobile Apps / Startup MVPs",
        description:
          "Zero-to-one product development for startups—turning validated concepts into working Android, web, and full-stack applications.",
        deliverables: [
          "MVP Scoping & Build",
          "Android & Web UI",
          "API Integration",
        ],
        stack: ["TypeScript", "Android Studio", "REST APIs"],
        topic: "web-app-mvp",
        featured: false,
      },
      {
        id: "tech-problem-solving",
        number: "03",
        title: "Technology Consulting & Problem-Solving",
        description:
          "Architecture reviews, stack selection, workflow simplification, and hands-on debugging for teams navigating technical inflection points.",
        deliverables: [
          "Architecture Blueprints",
          "Stack Audits",
          "Technical Advisory",
        ],
        stack: ["System Design", "PostgreSQL", "Redis"],
        topic: "tech-consulting",
        featured: false,
      },
      {
        id: "backend-qa",
        number: "04",
        title: "Backend Infrastructure & QA Systems",
        description:
          "Containerized services, caching/rate-limiting layers, and automated BDD/API test suites that protect release velocity.",
        deliverables: [
          "BDD Test Frameworks",
          "API Verification",
          "Dockerized Services",
        ],
        stack: ["Java & Selenium", "Docker", "Postman"],
        topic: "qa-systems",
        featured: false,
      },
    ],
  },
  {
    id: "ai",
    index: "02",
    eyebrow: "Pillar B · AI Solutions & Custom Models",
    title: "Practical AI systems, automations & custom models.",
    summary:
      "Moving beyond AI hype to build bounded agents, custom domain assistants, and measurable workflow automations your team can trust.",
    cards: [
      {
        id: "agentic-workflows",
        number: "05",
        title: "Agentic AI & Process Automation",
        description:
          "End-to-end operational automations with structured tool-calling, confidence thresholds, and clear human-in-the-loop stop points.",
        deliverables: [
          "Workflow Mapping",
          "Bounded AI Agents",
          "Human Review Gates",
        ],
        stack: ["AI Agents", "Tool Calling", "Automation"],
        topic: "ai-automation",
        featured: true,
      },
      {
        id: "custom-ai-models",
        number: "06",
        title: "Custom AI Models & RAG Pipelines",
        description:
          "Domain-adapted AI assistants and retrieval systems grounded in your private documents, product catalogs, and operational rules.",
        deliverables: [
          "RAG Architecture",
          "Context Retrieval",
          "Evaluation Suites",
        ],
        stack: ["Python", "Embeddings", "Custom Models"],
        topic: "custom-ai-model",
        featured: false,
      },
      {
        id: "llm-integrations",
        number: "07",
        title: "Gemini & LLM Product Integrations",
        description:
          "Embedding multimodal intelligence directly into web and mobile apps—from assistive diagnostics to smart advisory interfaces.",
        deliverables: [
          "Gemini API Pipelines",
          "Prompt Engineering",
          "Safety Guardrails",
        ],
        stack: ["Gemini API", "Google AI Studio", "Structured JSON"],
        topic: "custom-ai-model",
        featured: false,
      },
      {
        id: "ai-readiness",
        number: "08",
        title: "AI Strategy & Workflow Modernization",
        description:
          "Auditing existing business processes to identify high-ROI AI opportunities without disrupting what already works.",
        deliverables: [
          "ROI Opportunity Map",
          "Data Readiness",
          "Pilot Implementation",
        ],
        stack: ["Process Audit", "Python Analytics", "Data Pipelines"],
        topic: "ai-automation",
        featured: false,
      },
    ],
  },
];

export const engagementModels = [
  {
    number: "01",
    title: "Advisory & Architecture",
    cadence: "1–2 Week Engagement",
    summary:
      "For founders and teams needing sharp technical direction, system architecture blueprints, AI feasibility audits, or bottleneck resolution.",
    highlights: [
      "Stack & infrastructure audit",
      "AI workflow & model architecture plan",
      "Actionable roadmap & risk checklist",
    ],
    topic: "tech-consulting",
  },
  {
    number: "02",
    title: "Build & Ship MVP",
    cadence: "4–8 Week Delivery",
    summary:
      "End-to-end engineering of a website, web application, or startup MVP—from UX architecture and frontend build to backend APIs and QA.",
    highlights: [
      "Full-stack React / TypeScript / API build",
      "Responsive UI & production deployment",
      "Automated testing & clean documentation",
    ],
    topic: "web-app-mvp",
  },
  {
    number: "03",
    title: "AI Workflow Sprint",
    cadence: "2–4 Week Sprint",
    summary:
      "Focused design and deployment of a bounded agentic automation or custom RAG/LLM solution integrated into your team’s real tools.",
    highlights: [
      "Custom Gemini / LLM or RAG pipeline",
      "Human-in-the-loop approval checkpoints",
      "Evaluation metrics & handoff training",
    ],
    topic: "ai-automation",
  },
];

export const certifications = [
  [
    "API Testing Journey With Postman Tool",
    "Coursera",
    "Apr 2025",
    "RYIYQF5BTWT6",
  ],
  ["Problem Solving (Intermediate)", "HackerRank", "Oct 2024", "A762AA4A4AC2"],
  ["Python Data Analytics", "Meta", "Oct 2024", "AY9GFK6RCB8K"],
  ["Data Analysis with Spreadsheets and SQL", "Meta", "Sep 2024", ""],
  ["Introduction to Data Analytics", "Meta", "Sep 2024", "476MO487Z1PA"],
  ["CyberOps Associate", "Cisco Networking Academy", "Jul 2023", ""],
  ["Introduction to Cybersecurity", "Cisco Networking Academy", "May 2023", ""],
  ["Introduction to Packet Tracer", "Cisco Networking Academy", "May 2023", ""],
  ["Networking Essentials", "Cisco Networking Academy", "May 2023", ""],
  ["Cybersecurity Essentials", "Cisco Networking Academy", "Jan 2023", ""],
];

export const stories = [
  {
    no: "06",
    category: "Project stories",
    title: "A founder’s digital home, built around the person",
    summary:
      "Bringing a founder’s story and work into one warm, considered portfolio.",
    time: "5 min read",
    tone: "story-lilac",
    project: "TDB Portfolio",
    lead: "A personal brand should feel like the person behind it, not a template.",
    link: "https://www.tanojborate.com/",
    linkLabel: "Visit the live website",
    body: [
      "A portfolio has a simple job: help someone understand who they are meeting, what that person cares about, and what to do next. The challenge is making those answers feel personal without making the page hard to use.",
      "The TDB Portfolio brings the founder’s presence and work together in a focused digital home. Clear hierarchy gives the story room to breathe, while purposeful calls to action help a visitor move from curiosity to conversation.",
      "For personal brands, the details matter. A voice that sounds like its owner, a visual system that feels considered, and a straightforward path through the work can make a small site memorable without making it complicated.",
    ],
  },
  {
    no: "07",
    category: "Project stories",
    title: "A clearer way into real estate discovery",
    summary:
      "A multi-page property experience designed to make browsing and enquiries feel more direct.",
    time: "5 min read",
    tone: "story-green",
    project: "VTB Realities",
    lead: "Good property websites help people orient themselves before they enquire.",
    link: "https://www.vtbrealities.com/",
    linkLabel: "Visit the live website",
    body: [
      "Property decisions involve a lot of information. A website can make the first steps easier by helping people understand the offering, browse available projects, and find a useful way to ask a question.",
      "The VTB Realities project is a multi-page real estate experience shaped around discovery and enquiry. It gives the business a clear digital presence and creates a more direct path for someone exploring what is available.",
      "The strongest experience is often the one that removes small moments of uncertainty: where am I, what can I explore, and how do I take the next step? Those basic questions are worth designing around.",
    ],
  },
  {
    no: "01",
    category: "AI & automation",
    title: "Let an agent take the repeatable part",
    summary:
      "The best first AI workflow is small, predictable and easy for a person to review.",
    time: "6 min read",
    tone: "story-lilac",
    project: "Field note",
    lead: "A practical case for giving agents the routine steps while people keep the judgment.",
    body: [
      "A useful AI agent does not need to run an entire business process. Often, it only needs to take the repetitive middle off someone’s plate: gather the same information, check it against a clear set of rules, prepare a first draft, or route a task to the right place.",
      "Start with work that has a steady shape. The inputs should be known, the expected output should be easy to describe, and mistakes should be cheap to catch. If the process changes every time or depends on context that only one person understands, first make that process clearer.",
      "Give the agent a narrow job and a visible finish line. Let it collect and organise, then pause before a consequential decision, external message, payment, or irreversible change. A person should be able to review what happened and take over without losing the work.",
      "Measure the time returned and the corrections required. If the system saves minutes but creates a new checking burden, redesign the workflow. The point is to remove repetition while keeping accountability with the people who know the work.",
    ],
  },
  {
    no: "02",
    category: "AI & automation",
    title: "Build for the AI era by starting with the work",
    summary:
      "New tools matter less than the everyday problem they help a team solve.",
    time: "7 min read",
    tone: "story-green",
    project: "Field note",
    lead: "A grounded way to bring AI into a business without losing the plot.",
    body: [
      "The easiest way to get distracted by AI is to start with the tool. A better start is to follow one piece of work from beginning to end: where it arrives, what people do with it, where it slows down, and what a good result looks like.",
      "That map usually reveals a mix of work. Some steps are mechanical and repeatable. Some need a person’s experience, a sensitive conversation, or permission to act. AI can help prepare, sort, summarise, and suggest; the workflow should make it clear when a person needs to decide or approve.",
      "Build one contained improvement, then check it against real examples. Did the work move faster? Were the results useful? Could the team understand why the system produced them? Keep the source material protected and make the handoff easy to see.",
      "Building for the AI era is less about adding intelligence everywhere and more about making better systems around the work people already do. The tool can change. A clear process, useful feedback, and human responsibility are the parts worth keeping.",
    ],
  },
  {
    no: "03",
    category: "Project stories",
    title: "Auto-paper: making exam workflows easier to follow",
    summary:
      "A look at an organisation built around simplifying invigilation and evaluation workflows.",
    time: "5 min read",
    tone: "story-gold",
    project: "Auto-paper",
    lead: "Connecting exam-day checks, answer sheets and central records in one considered flow.",
    link: "https://github.com/Auto-paper/Unified-System-of-Examination-Evaluation-",
    linkLabel: "Explore Auto-paper on GitHub",
    body: [
      "Auto-paper is an organisation focused on a practical challenge: coordinating the information that moves through an examination. Its project describes two connected experiences, an invigilator-side app and an evaluation-side app, supported by a central backend.",
      "In the invigilator flow, the app prepares local data for an authorised invigilator, then helps verify students using QR codes, associate answer sheets and record attendance. The evaluation flow is designed to carry that work forward, while the backend is responsible for QR creation, central records and verification.",
      "The interesting design challenge is continuity. Each check needs to be understandable on a busy exam day, and each handoff needs to leave a clear record for the next step. QR codes can reduce repeated data entry, but the experience still depends on reliable verification and clear recovery when something does not match.",
      "This is the kind of problem where software has to respect the real process around it. The goal is not technology for its own sake; it is a calmer, more traceable path through work that already matters.",
    ],
  },
  {
    no: "04",
    category: "Engineering",
    title: "A test framework is a shared working language",
    summary:
      "Why readable scenarios, reusable page objects and useful reports belong together.",
    time: "6 min read",
    tone: "story-plum",
    project: "Automation Testing Framework",
    lead: "Notes from a Selenium and Java proof of concept for maintainable browser testing.",
    link: "https://github.com/jacksrivastava/proof-of-concept-for-testing-framework",
    linkLabel: "Explore the framework on GitHub",
    body: [
      "An automation framework is more than a set of browser scripts. It is a shared way for a team to describe expected behaviour, run checks consistently and understand a failure without starting from zero.",
      "This proof of concept brings together Selenium WebDriver with Java, Cucumber for readable Gherkin scenarios, JUnit for execution and Maven for dependency management. Page Object Model keeps locators and page actions in reusable places, so a UI change has a smaller surface area to update.",
      "Configuration for browser choice and local or remote execution helps the same scenarios travel between a developer laptop and a grid. Screenshots, logs and ExtentReports make the result easier to investigate when a test fails.",
      "The useful measure is not how many tests exist. It is whether the suite gives the team trustworthy feedback, whether a failure points to the next question, and whether people can improve the tests without fear of breaking everything else.",
    ],
  },
  {
    no: "05",
    category: "AI & automation",
    title: "Give every automated workflow a clear stop point",
    summary:
      "A small design rule for keeping helpful automation understandable and safe.",
    time: "4 min read",
    tone: "story-sage",
    project: "Field note",
    lead: "Good automation knows when to pause, explain, and ask a person to take over.",
    body: [
      "Every automated workflow should have a point where it can say: I have done my part, and here is what needs a person. That pause is not a failure. It is a designed handoff.",
      "Use it when information is missing, the result falls outside expected bounds, the next step affects someone else, or the action is difficult to undo. Show what the system has already checked and what it is unsure about, so a person can make the next decision quickly.",
      "A clear stop point also makes the workflow easier to improve. Teams can see where exceptions cluster, which inputs need better structure, and whether the automation is doing useful work or simply passing uncertainty downstream.",
      "The most dependable systems are not the ones that never stop. They are the ones that know how to stop well.",
    ],
  },
];

/**
 * Transforms a story object into a URL-friendly slug derived from its title.
 *
 * @param {Object} story - Story object containing a title string.
 * @returns {string} Normalized lowercase URL slug, or empty string if missing.
 */
export function storySlug(story) {
  if (!story || !story.title) return "";
  return story.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Resolves the editorial illustration path associated with a journal story number.
 *
 * @param {Object} story - Story object containing the two-digit `no` identifier.
 * @returns {string} Public image URL path for the story card and article cover.
 */
export function storyImage(story) {
  const imageMap = {
    "01": "/images/journal/agent-workflow.png",
    "02": "/images/journal/ai-era.png",
    "03": "/images/journal/auto-paper.png",
    "04": "/images/journal/automation-tests.png",
    "05": "/images/journal/ai-era.png",
    "06": "/images/journal/tdb-portfolio.png",
    "07": "/images/journal/nirmaan-project.png",
  };
  return imageMap[story?.no] || "/images/journal/ai-era.png";
}

export const works = [
  {
    id: "01",
    name: "TDB Portfolio",
    type: "Client website",
    discipline: "Web & Platforms",
    filterGroup: "Web & Platforms",
    category: "Brand experience · Web design",
    description:
      "A founder-focused digital home designed to bring a personal brand and its ventures together in one considered experience.",
    lead: "A personal brand should feel like the person behind it, not a template.",
    image: "/images/journal/tdb-portfolio.png",
    live: "https://www.tanojborate.com/",
    source: "https://github.com/jacksrivastava/TDB_portfolio",
    tech: ["React", "Vite", "CSS3", "Brand Identity"],
    mark: "TDB",
    featured: true,
    storyNo: "06",
  },
  {
    id: "02",
    name: "VTB Realities",
    type: "Client website",
    discipline: "Web & Platforms",
    filterGroup: "Web & Platforms",
    category: "Real estate · Web platform",
    description:
      "A responsive multi-page experience for a real estate developer, with project discovery and enquiry journeys at its heart.",
    lead: "Good property websites help people orient themselves before they enquire.",
    image: "/images/journal/nirmaan-project.png",
    live: "https://www.vtbrealities.com/",
    source: "https://github.com/jacksrivastava/nirmaan-group",
    tech: ["Web Platform", "Responsive UX", "Enquiry Funnels"],
    mark: "N",
    featured: false,
    storyNo: "07",
  },
  {
    id: "03",
    name: "Automation Testing Framework",
    type: "Engineering",
    discipline: "Systems & Engineering",
    filterGroup: "Systems & QA",
    category: "QA Engineering · Browser automation",
    description:
      "A maintainable Java and Selenium testing framework integrating Cucumber BDD, JUnit, Page Object Model, and ExtentReports.",
    lead: "Why readable scenarios, reusable page objects and useful reports belong together.",
    image: "/images/journal/automation-tests.png",
    live: null,
    source:
      "https://github.com/jacksrivastava/proof-of-concept-for-testing-framework",
    tech: ["Java", "Selenium", "Cucumber", "JUnit", "Maven"],
    mark: "QA",
    featured: false,
    storyNo: "04",
  },
  {
    id: "04",
    name: "Medic App",
    type: "AI & Automation",
    discipline: "AI & Automation",
    filterGroup: "AI & Models",
    category: "Healthcare AI · Android Studio",
    description:
      "An AI-assisted medical application developed with Google AI Studio and Gemini API, supporting local diagnostics workflows.",
    lead: "Practical AI workflows designed to assist rather than replace human judgment.",
    image: "/images/journal/ai-era.png",
    live: null,
    source: "https://github.com/jacksrivastava/medic-app",
    tech: ["Android", "Gemini API", "Kotlin/Java", "Google AI Studio"],
    mark: "MED",
    featured: false,
    storyNo: null,
  },
  {
    id: "05",
    name: "Kisaan.ai",
    type: "AI & Automation",
    discipline: "AI & Automation",
    filterGroup: "AI & Models",
    category: "Agritech AI · Smart decisions",
    description:
      "An open-source intelligent assistant exploring contextual agricultural recommendations, disease diagnosis, and crop advisory.",
    lead: "Bringing grounded intelligence to field-level agricultural decisions.",
    image: "/images/journal/agent-workflow.png",
    live: null,
    source: "https://github.com/jacksrivastava/kisaan.ai",
    tech: ["AI Agents", "Context Retrieval", "Python", "AgriTech"],
    mark: "AGR",
    featured: false,
    storyNo: null,
  },
  {
    id: "06",
    name: "Short.ly — URL Shortener",
    type: "Engineering",
    discipline: "Systems & Engineering",
    filterGroup: "Systems & QA",
    category: "Backend architecture · Distributed cache",
    description:
      "A high-throughput TypeScript URL shortener featuring PostgreSQL, Redis caching, rate limiting, click analytics, and Docker Compose.",
    lead: "Reliable backend primitives: caching, rate limits, and analytics.",
    image: "/images/journal/auto-paper.png",
    live: null,
    source: "https://github.com/jacksrivastava/shortly",
    tech: ["TypeScript", "PostgreSQL", "Redis", "Docker"],
    mark: "URL",
    featured: false,
    storyNo: null,
  },
  {
    id: "07",
    name: "Internet of Things",
    type: "Engineering",
    discipline: "Systems & Engineering",
    filterGroup: "Systems & QA",
    category: "Hardware & embedded systems",
    description:
      "A curated collection of embedded systems, sensor integrations, microcontroller scripts, and connectivity protocols.",
    lead: "Bridging physical sensor telemetry with digital communication channels.",
    image: "/images/journal/auto-paper.png",
    live: null,
    source: "https://github.com/jacksrivastava/Internet-of-Things",
    tech: ["IoT", "Microcontrollers", "Sensors", "Embedded C"],
    mark: "IOT",
    featured: false,
    storyNo: null,
  },
];

export const workDisciplines = [
  {
    name: "Web & Platforms",
    count: "02 WORKS",
    note: "Founder digital homes, property discovery systems, and responsive modern web presences.",
    filterKey: "Client website",
    items: ["TDB Portfolio", "VTB Realities"],
  },
  {
    name: "AI & Automation",
    count: "02 WORKS",
    note: "Practical agentic AI workflows, assistive healthcare diagnostics, and agricultural advisory tools.",
    filterKey: "AI & Automation",
    items: ["Medic App", "Kisaan.ai"],
  },
  {
    name: "Systems & Engineering",
    count: "03 WORKS",
    note: "Browser test automation, distributed caching backends, and embedded device telemetry.",
    filterKey: "Engineering",
    items: ["Automation Testing Framework", "Short.ly", "Internet of Things"],
  },
];

export const serviceOptions = [
  { value: "ai-automation", label: "Agentic AI & Workflow Automation" },
  { value: "custom-ai-model", label: "Custom AI Models & RAG Pipelines" },
  { value: "web-app-mvp", label: "Websites, Mobile Apps & Startup MVPs" },
  {
    value: "tech-consulting",
    label: "Technology Consulting & Problem Solving",
  },
  { value: "qa-systems", label: "QA Automation & Backend Systems" },
];
