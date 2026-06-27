// ─── Types ────────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  role: string;
  headline: string;
  cgpa: number;
  location: string;
}

export interface Links {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  portfolio: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  expectedGraduation: string;
  cgpa: number;
  coursework: string[];
}

export interface ExperienceEntry {
  org: string;
  program: string;
  role: string;
  duration: string;
  project: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  highlights?: string[];
  tech: string[];
  github: string;
  live: string | null;
  achievement?: string;
}

export interface CompetitiveProgrammingEntry {
  platform: string;
  handle: string;
  url: string;
  peakRating: number;
  rank?: string;
}

export interface CompetitiveProgramming {
  profiles: CompetitiveProgrammingEntry[];
  problemsSolved: string;
}

export interface Achievement {
  title: string;
  detail?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  badge?: string;
  inProgress?: boolean;
}

export interface TechnicalSkills {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  coreCS: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "B Vikram Seervi",
  role: "Computer Science and Engineering Student",
  headline:
    "Computer Science and Engineering student focused on full-stack development, backend systems, and competitive programming.",
  cgpa: 9.08,
  location: "Bengaluru, Karnataka, India",
};

export const links: Links = {
  github: "https://github.com/thevikramseervi",
  linkedin: "https://linkedin.com/in/vikramseervi",
  email: "mailto:vikram@vikramseervi.com",
  resume: "/resume",
  portfolio: "https://vikramseervi.com",
};

export const education: Education = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "Cambridge Institute of Technology",
  location: "Bengaluru, Karnataka, India",
  duration: "2023–2027",
  expectedGraduation: "2027",
  cgpa: 9.08,
  coursework: [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
  ],
};

export const experience: ExperienceEntry[] = [
  {
    org: "Samsung R&D Institute India",
    program: "Samsung PRISM",
    role: "Software Engineer Intern",
    duration: "Nov 2025 – Mar 2026",
    project: "AttendEase — Attendance, Leave & Payroll Platform",
    description:
      "Built AttendEase, a full-stack attendance, leave management, and payroll automation platform.",
    highlights: [
      "Designed authentication and authorization workflows.",
      "Implemented role-based access control.",
      "Built backend APIs and database-backed workflows.",
      "Worked on employee attendance, leave tracking, and payroll automation.",
    ],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
  },
];

export const projects: Project[] = [
  {
    name: "JanaDhristi",
    description:
      "District-level civic transparency platform that aggregates publicly available government data into citizen-friendly dashboards.",
    highlights: [
      "Built citizen-facing dashboards aggregating publicly available government data.",
      "Integrated AI-powered data analysis using OpenRouter.",
      "Implemented Redis caching for efficient data access.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "OpenRouter AI"],
    github: "https://github.com/Balasubramani2004/JanaDhristi",
    live: null,
    achievement: "1st Place – Amity University Hackathon",
  },
  {
    name: "AttendEase",
    description:
      "Full-stack attendance, leave management, and payroll automation platform built during Samsung PRISM.",
    highlights: [
      "Designed authentication and authorization workflows.",
      "Implemented role-based access control.",
      "Built backend APIs and database-backed workflows.",
    ],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
    github: "https://github.com/thevikramseervi/prismv2",
    live: "https://seed-attend-ease.netlify.app",
  },
  {
    name: "Smart Library Platform",
    description:
      "Library management platform with role-based access control, catalog management, circulation workflows, and administrative dashboards.",
    highlights: [
      "Implemented role-based access control for admin, librarian, and member roles.",
      "Built catalog management with search and filtering capabilities.",
      "Developed book issue, return, and reservation circulation workflows.",
      "Created administrative dashboards for library operations.",
    ],
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/thevikramseervi/smart-library-platform",
    live: "https://library.vikramseervi.com",
  },
];

export const competitiveProgramming: CompetitiveProgramming = {
  profiles: [
    {
      platform: "Codeforces",
      handle: "vikramseervi",
      url: "https://codeforces.com/profile/vikramseervi",
      peakRating: 1238,
      rank: "Pupil",
    },
    {
      platform: "CodeChef",
      handle: "vikramseervi",
      url: "https://www.codechef.com/users/vikramseervi",
      peakRating: 1486,
    },
    {
      platform: "LeetCode",
      handle: "vikramseervi",
      url: "https://leetcode.com/u/vikramseervi/",
      peakRating: 1531,
    },
    {
      platform: "AtCoder",
      handle: "vikramseervi",
      url: "https://atcoder.jp/users/vikramseervi",
      peakRating: 346,
    },
  ],
  problemsSolved: "900+",
};

export const achievements: Achievement[] = [
  {
    title: "1st Place — Amity University Hackathon (2026)",
    detail: "Project: JanaDhristi",
  },
  {
    title: "Samsung PRISM Internship Completion",
  },
  {
    title: "CGPA 9.08 / 10",
  },
];

export const certifications: Certification[] = [
  {
    title: "Samsung PRISM Virtual Internship Certificate",
    issuer: "Samsung R&D Institute India",
  },
  {
    title: "Introduction to Graph Algorithms",
    issuer: "NPTEL",
    score: "85%",
    badge: "Elite + Silver",
  },
  {
    title: "Getting Started with Competitive Programming",
    issuer: "NPTEL",
    score: "75%",
    badge: "Elite + Silver",
  },
  {
    title: "Samsung Innovation Campus — Advanced Machine Learning",
    issuer: "Samsung",
    inProgress: true,
  },
];

export const technicalSkills: TechnicalSkills = {
  languages: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "NestJS", "FastAPI"],
  database: ["PostgreSQL", "Prisma", "SQLAlchemy", "Neon"],
  tools: ["Git", "GitHub", "Linux", "Docker"],
  coreCS: [
    "Data Structures and Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "OOP",
  ],
};
