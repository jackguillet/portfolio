export interface Project {
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  techStack: { name: string; description: string }[];
  features: { icon: string; text: string }[];
}

export interface Experience {
  company: string;
  team: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const siteConfig = {
  name: "Jack Guillet",
  title: "Software Engineer",
  location: "Seattle, WA",
  email: "guilletj@live.com",
  tagline: "I build and operate platforms that serve millions of users.",
  about: [
    "I'm a software engineer with 4+ years of experience at Microsoft, where I've helped build and scale the Xbox Game Streaming platform serving 10M+ global users. My day-to-day involves Kubernetes orchestration, infrastructure-as-code with Terraform, and designing systems that are reliable, secure, and cost-efficient.",
    "Outside of work, I'm a wing foil enthusiast, skier, and cyclist based in Seattle. I built Wing Check because I got tired of checking five different weather apps before deciding whether to hit the water — so I made one that does it all.",
    "I'm currently looking for my next challenge at a mission-driven company building real-world products at scale.",
  ],
};

export const skills: Record<string, string[]> = {
  "Infrastructure & Orchestration": [
    "Kubernetes",
    "Terraform",
    "Helm",
    "Docker",
    "Azure Functions",
    "CI/CD",
  ],
  "Languages & Frameworks": [
    "TypeScript",
    "C#",
    "Python",
    "React",
    "Next.js",
    "JavaScript",
  ],
  "Cloud & Practices": [
    "Azure",
    "AWS",
    "IaC",
    "Service Reliability",
    "Security Management",
    "Cost Optimization",
  ],
};

export const experience: Experience[] = [
  {
    company: "Microsoft",
    team: "Xbox Game Streaming",
    role: "Software Engineer II",
    period: "2023 – Present",
    location: "Seattle, WA",
    bullets: [
      "Architect and manage the hosting platform for 90+ microservices spanning my team and partner teams within Xbox.",
      "Build and maintain common infrastructure patterns and CI/CD pipelines using Terraform and YAML-based deployment tooling.",
      "Led the creation of a new Kubernetes cluster architecture tailored to specific workload requirements.",
      "Delivered $20K+/month in compute savings through infrastructure consolidation and automation.",
    ],
  },
  {
    company: "Microsoft",
    team: "Xbox Game Streaming",
    role: "Software Engineer",
    period: "2021 – 2023",
    location: "Seattle, WA",
    bullets: [
      "Migrated a high-traffic game streaming service (1M+ requests/day) into a new Kubernetes hosting model with zero downtime.",
      "Modernized and consolidated legacy services into the new platform, reducing operational overhead.",
      "Served as the team's Security and Vulnerability Lead, driving remediation across services and clusters.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Wing Check",
    tagline: "Real-time wind forecasting for wing foil spots worldwide",
    description:
      "A full-stack web app that aggregates weather data from multiple sources to help wing foilers find the best conditions. Features ranked forecasts, a curated database of 50+ global spots, and per-spot multi-day outlooks.",
    liveUrl: "https://wing-check.vercel.app",
    repoUrl: "https://github.com/jackguillet/wing-check",
    techStack: [
      {
        name: "Next.js",
        description: "Full-stack React framework with App Router",
      },
      {
        name: "TypeScript",
        description: "Type-safe code across the entire app",
      },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "SQLite", description: "Lightweight database via Drizzle ORM" },
      { name: "Drizzle ORM", description: "Type-safe database queries" },
      { name: "Open-Meteo", description: "Free weather forecast API" },
      { name: "NOAA", description: "Tide and marine data" },
      { name: "Recharts", description: "Interactive forecast charts" },
      { name: "Resend", description: "Scheduled email alerts" },
      { name: "Vercel", description: "Hosting and serverless cron jobs" },
    ],
    features: [
      { icon: "Wind", text: "Ranked forecasts across all your saved spots" },
      { icon: "Map", text: "50+ curated global wing foil locations" },
      { icon: "BarChart3", text: "Multi-day wind and weather outlooks" },
      { icon: "Mail", text: "Automated email alerts for ideal conditions" },
    ],
  },
];

export interface CurrentProject {
  title: string;
  status: string;
  description: string;
  details: string[];
  tools: string[];
}

export const currentProject: CurrentProject = {
  title: "Martin Mars Flying Boat",
  status: "CAD & Planning Phase",
  description:
    "Building a 1/20 scale model of the Martin Mars — a massive WWII-era flying boat — using a hybrid approach that combines 3D printing with traditional RC aircraft construction.",
  details: [
    "10-foot wingspan with 4 brushless motors and differential thrust water steering",
    "3D printing ~150 parts in lightweight LW-PLA on a Prusa MK4S — hull bulkheads, wing ribs, nacelles, and tip floats",
    "Traditional balsa and carbon fiber for wing skins, spars, and control surfaces",
    "Full CAD workflow in Fusion 360, tracing profiles from original Ivan Pettigrew plans",
  ],
  tools: ["Fusion 360", "Prusa MK4S", "LW-PLA", "Carbon Fiber", "Balsa"],
};

export const education: Education[] = [
  {
    school: "Santa Clara University",
    degree: "Bachelor of Engineering, Computer Science",
    graduated: "June 2021",
  },
];

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/jackguillet",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jguillet",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:guilletj@live.com",
    icon: "Mail",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Now", href: "#now" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
