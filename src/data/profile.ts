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
  orgShort: string;
  program: string;
  role: string;
  duration: string;
  project: string;
  description: string;
  highlights: string[];
  tech: string[];
  linkedProject?: string;
}

export interface Project {
  name: string;
  description: string;
  highlights?: string[];
  tech: string[];
  github: string;
  live: string | null;
  achievement?: string;
  image?: string;
}

export interface CompetitiveProgrammingEntry {
  platform: string;
  handle: string;
  url: string;
  peakRating: number;
  problemsSolved?: number;
  rank?: string;
}

export interface CompetitiveProgramming {
  profiles: CompetitiveProgrammingEntry[];
  problemsSolved: string;
}

export interface Achievement {
  icon: string;
  headline: string;
  subtitle: string;
  detail?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  badge?: string;
  inProgress?: boolean;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "B Vikram Seervi",
  role: "Computer Science and Engineering Student",
  headline:
    "C++ programmer and full-stack developer with Samsung R&D internship experience, building backend systems, competitive programming solutions, and production web applications.",
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
  duration: "2023-2027",
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
    orgShort: "Samsung R&D",
    program: "Samsung PRISM",
    role: "Software Engineer Intern",
    duration: "Nov 2025 - Mar 2026",
    project: "AttendEase — Attendance, Leave & Payroll Platform",
    description:
      "Built AttendEase, a full-stack attendance, leave management, and payroll automation platform.",
    highlights: [
      "Implemented JWT authentication and RBAC for employee, manager, and admin roles.",
      "Designed PostgreSQL schema supporting attendance, leave, and payroll workflows.",
      "Built REST APIs for attendance tracking, leave approval, and payroll management."
    ],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
    linkedProject: "AttendEase",
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
    achievement: "🏆 1st Place - Amity University Hackathon",
    image: "/projects/janadhristi.png",
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
      problemsSolved: 730,
      rank: "Pupil",
    },
    {
      platform: "CodeChef",
      handle: "vikramseervi",
      url: "https://www.codechef.com/users/vikramseervi",
      peakRating: 1486,
      problemsSolved: 130,
      rank: "2★",
    },
    {
      platform: "LeetCode",
      handle: "vikramseervi",
      url: "https://leetcode.com/u/vikramseervi/",
      peakRating: 1531,
      problemsSolved: 48,
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
    icon: "🏆",
    headline: "1st Place",
    subtitle: "Amity University Hackathon 2026",
    detail: "JanaDhristi",
  },
  {
    icon: "🔬",
    headline: "Samsung R&D",
    subtitle: "Software Engineer Intern",
  },
  {
    icon: "🎓",
    headline: "9.08 / 10",
    subtitle: "Current CGPA",
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

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["C++", "Python", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Node.js", "Express"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "Prisma"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Linux"],
  },
];
