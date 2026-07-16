import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

export const company = {
  name: "Srijan Consultant and Engineers",
  short: "Srijan",
  tagline: "Engineering Ideas Into Enduring Spaces.",
  statement:
    "Srijan Consultant and Engineers delivers integrated architectural, structural, interior, infrastructure and turnkey project solutions — from initial planning to final execution.",
  phone: "[Editable phone]",
  whatsapp: "[Editable WhatsApp]",
  email: "[Editable email]",
  address: "[Editable office address]",
  hours: "Mon – Sat · 10:00 – 19:00",
  social: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
    youtube: "#",
  },
};

export type ServiceKey =
  | "architecture"
  | "structural-engineering"
  | "interior-design"
  | "infrastructure"
  | "turnkey-projects";

export const services: {
  key: ServiceKey;
  index: string;
  title: string;
  short: string;
  lede: string;
  description: string;
  scope: string[];
  deliverables: string[];
  image: string;
}[] = [
  {
    key: "architecture",
    index: "01",
    title: "Architecture",
    short: "Concept to construction documentation",
    lede: "Buildings that reconcile programme, site and intent — resolved through drawing.",
    description:
      "From feasibility and site planning to detailed working drawings, our architectural practice pairs contemporary design language with rigorous documentation. Every project begins with the constraints and possibilities of its site.",
    scope: [
      "Concept development",
      "Feasibility & site planning",
      "Space planning",
      "Residential, commercial, institutional & industrial architecture",
      "Elevation & massing development",
      "Working & approval drawings",
      "3D visualisation",
      "Landscape coordination",
      "Construction documentation",
    ],
    deliverables: [
      "Concept package",
      "Design development drawings",
      "Statutory approval set",
      "Tender & construction drawings",
      "Coordinated 3D visualisations",
    ],
    image: project1,
  },
  {
    key: "structural-engineering",
    index: "02",
    title: "Structural Engineering",
    short: "Analysis, design and construction-stage consulting",
    lede: "Structure as an argument for permanence — analysed, designed and detailed for the way buildings are actually built.",
    description:
      "Our structural practice covers RCC and steel, foundations and retrofitting. We produce clear, buildable drawings and stay engaged through construction.",
    scope: [
      "Structural analysis & design",
      "RCC design",
      "Steel structure design",
      "Foundation design",
      "Load assessment",
      "Structural drawings",
      "Retrofitting & strengthening",
      "Stability assessment",
      "Site inspection & construction-stage consultation",
    ],
    deliverables: [
      "Analysis report",
      "General arrangement drawings",
      "Reinforcement & steel detailing",
      "Foundation drawings",
      "Site observation reports",
    ],
    image: project5,
  },
  {
    key: "interior-design",
    index: "03",
    title: "Interior Design",
    short: "Space, material, light",
    lede: "Interiors that hold light, honour material and let the plan breathe.",
    description:
      "We design residential, commercial and hospitality interiors with a material-first approach. Every room begins with the palette and daylight it will live in.",
    scope: [
      "Residential, commercial, retail & hospitality interiors",
      "Space optimisation & furniture planning",
      "Material & finish selection",
      "Colour & lighting coordination",
      "False ceiling & joinery details",
      "Styling & interior execution",
    ],
    deliverables: [
      "Concept boards & material palettes",
      "Furniture layouts",
      "Joinery & ceiling drawings",
      "Lighting layouts",
      "Site supervision",
    ],
    image: project3,
  },
  {
    key: "infrastructure",
    index: "04",
    title: "Infrastructure",
    short: "Site, civil, external development",
    lede: "The invisible work that lets a place function — roads, utilities, drainage, coordination.",
    description:
      "We plan and coordinate the civil infrastructure that stitches individual buildings into working sites and neighbourhoods.",
    scope: [
      "Site development",
      "Internal roads",
      "Civil infrastructure",
      "Drainage planning",
      "Utility coordination",
      "Institutional & industrial development",
      "Plot planning",
      "External development",
      "Construction coordination",
      "Engineering documentation",
    ],
    deliverables: [
      "Master plan drawings",
      "Road & drainage drawings",
      "Utility layouts",
      "Phasing plans",
      "Coordination reports",
    ],
    image: project4,
  },
  {
    key: "turnkey-projects",
    index: "05",
    title: "Turnkey Projects",
    short: "Single-point responsibility, from brief to handover",
    lede: "One team, one contract, one accountable process — from empty site to finished space.",
    description:
      "Our turnkey service consolidates design, engineering, procurement and execution under a single accountable team, so you deal with one partner across the entire project.",
    scope: [
      "Requirement assessment",
      "Concept development",
      "Design & engineering",
      "Budget planning",
      "Vendor selection & procurement coordination",
      "Scheduling",
      "Site management",
      "Quality monitoring & progress reporting",
      "Testing, final inspection & handover",
    ],
    deliverables: [
      "Integrated design package",
      "Budget & schedule",
      "Vendor & procurement plan",
      "Progress dashboards",
      "Handover documentation",
    ],
    image: project2,
  },
];

export type ProjectCategory =
  | "Architecture"
  | "Structural"
  | "Interior"
  | "Infrastructure"
  | "Turnkey";

export const projects: {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  status: "Completed" | "Ongoing";
  scope: string;
  area: string;
  brief: string;
  concept: string;
  outcome: string;
  image: string;
}[] = [
  {
    slug: "atelier-house",
    title: "Atelier House",
    category: "Architecture",
    location: "[Editable location]",
    year: "[Year]",
    status: "Completed",
    scope: "Architecture, Interior, Turnkey",
    area: "[Built-up area]",
    brief: "A private residence organised around a double-height courtyard.",
    concept:
      "The plan pushes the served rooms to the perimeter and lets the courtyard become the social heart of the house. Cast in-situ concrete carries the upper floor as a single continuous slab.",
    outcome:
      "A quiet, well-daylit home that runs on cross-ventilation and thermal mass rather than mechanical cooling.",
    image: project1,
  },
  {
    slug: "atrium-tower",
    title: "Atrium Tower",
    category: "Architecture",
    location: "[Editable location]",
    year: "[Year]",
    status: "Completed",
    scope: "Architecture, Structural, Turnkey",
    area: "[Built-up area]",
    brief: "A commercial tower with a full-height public atrium.",
    concept:
      "A steel truss roof lets the atrium span column-free. Wood-clad soffits soften the industrial vocabulary and reflect daylight deep into the floor plates.",
    outcome: "A workspace anchored by a public room rather than a lobby.",
    image: project2,
  },
  {
    slug: "stone-residence",
    title: "Stone Residence",
    category: "Interior",
    location: "[Editable location]",
    year: "[Year]",
    status: "Completed",
    scope: "Interior Design",
    area: "[Built-up area]",
    brief: "Interior refit of a mid-century villa in a stone palette.",
    concept:
      "Travertine, oak and blackened steel — a restrained material set that lets the landscape do the work through generous window openings.",
    outcome: "A calm family home with a coherent, low-maintenance material story.",
    image: project3,
  },
  {
    slug: "central-interchange",
    title: "Central Interchange",
    category: "Infrastructure",
    location: "[Editable location]",
    year: "[Year]",
    status: "Ongoing",
    scope: "Infrastructure Planning, Civil Coordination",
    area: "[Site area]",
    brief: "Master-planned interchange integrating four arterial corridors.",
    concept:
      "Green loops between the flyovers recover 6 hectares as public landscape and stormwater retention.",
    outcome: "Ongoing — first phase opens [Editable].",
    image: project4,
  },
  {
    slug: "frame-warehouse",
    title: "Frame Warehouse",
    category: "Structural",
    location: "[Editable location]",
    year: "[Year]",
    status: "Completed",
    scope: "Structural Engineering",
    area: "[Built-up area]",
    brief: "Long-span industrial shed for a manufacturing client.",
    concept:
      "A repeating steel portal at 12 m centres, engineered for future crane loading without column changes.",
    outcome:
      "A structure that outlasts the tenant fit-out and accepts new production lines without retrofit.",
    image: project5,
  },
  {
    slug: "courtyard-office",
    title: "Courtyard Office",
    category: "Turnkey",
    location: "[Editable location]",
    year: "[Year]",
    status: "Completed",
    scope: "Turnkey — Design, Engineering, Execution",
    area: "[Built-up area]",
    brief: "Head office for a family-owned business, delivered turnkey.",
    concept:
      "A central courtyard organises three low volumes; shading is generated by the plan rather than added later.",
    outcome: "Handed over on schedule with a single point of responsibility.",
    image: project2,
  },
];

export const processStages = [
  { n: "01", title: "Discover", note: "Brief, site and constraints." },
  { n: "02", title: "Analyse", note: "Feasibility, regulation, cost." },
  { n: "03", title: "Conceptualise", note: "Design intent, tested." },
  { n: "04", title: "Design", note: "Development to detail." },
  { n: "05", title: "Engineer", note: "Structural & services coordination." },
  { n: "06", title: "Plan", note: "Budget, schedule, procurement." },
  { n: "07", title: "Execute", note: "Site management & vendor coordination." },
  { n: "08", title: "Inspect", note: "Quality checks & snagging." },
  { n: "09", title: "Handover", note: "Documentation & post-completion support." },
];

export const capabilities = [
  "Site analysis",
  "Architectural planning",
  "Structural calculations",
  "RCC & steel design",
  "Interior planning",
  "Material selection",
  "Cost coordination",
  "Construction documentation",
  "Site supervision",
  "Vendor coordination",
  "Quality monitoring",
  "Turnkey execution",
];

export const insights = [
  {
    slug: "why-integrated-teams-deliver",
    title: "Why integrated design-and-execution teams deliver better buildings",
    category: "Practice",
    date: "2026",
    excerpt:
      "Fragmenting design, engineering and execution across three vendors trades early speed for late friction. A short case for keeping them together.",
  },
  {
    slug: "reading-a-structural-drawing",
    title: "Reading a structural drawing: a primer for owners",
    category: "Structural Engineering",
    date: "2026",
    excerpt:
      "You do not need to be an engineer to read a GA drawing. A short guide to the marks and conventions that matter most.",
  },
  {
    slug: "material-restraint",
    title: "Material restraint: why three finishes usually beat seven",
    category: "Interior Design",
    date: "2025",
    excerpt:
      "A tight material palette ages better, costs less to maintain, and photographs well ten years later.",
  },
];

export const testimonials = [
  {
    quote:
      "Srijan gave us a single team from concept to handover. We stopped chasing coordination and started reviewing progress.",
    who: "[Client name]",
    role: "[Project type]",
    location: "[Location]",
  },
  {
    quote:
      "Their structural drawings were the clearest we've built from. Site queries dropped to a handful across the whole job.",
    who: "[Client name]",
    role: "Main contractor",
    location: "[Location]",
  },
];

export const stats = [
  { value: "[XX]+", label: "Years of experience" },
  { value: "[XX]+", label: "Completed projects" },
  { value: "[XX]+", label: "Ongoing projects" },
  { value: "[XX]+", label: "Cities served" },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;
