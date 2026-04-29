// ============================================================
// resume.ts — Single source of truth for all CV / portfolio data.
// Edit this file to update content without touching components.
// ============================================================

export const personal = {
  name: "Kalyani Krishnan",
  title: "MSc Finance & Management | Aspiring Investment Professional",
  tagline:
    "Highly analytical finance candidate with hands-on MIS reporting experience, targeting graduate opportunities in UK investment management.",
  email: "kalyanijkrishnan@gmail.com",
  phone: "+44 7799 724970",
  linkedin: "https://www.linkedin.com/in/your-profile",
  cvPath: "/Kalyani_Krishnan_CV.pdf",
};

export const about = {
  paragraphs: [
    "Highly analytical MSc Finance and Management candidate at University of Strathclyde, equipped with a First-Class B.Com in Commerce and Tax Procedure and practical experience in financial reporting and analysis.",
    "Nearly one year delivering high-accuracy MIS reporting, financial modelling, and stakeholder presentations as Internal MIS Intern at Muthoot Fincorp Limited. Demonstrated excellence in data interpretation, variance analysis, and process optimisation, underpinned by a strong ethical foundation through pro-bono tutoring initiatives.",
    "Targeting a graduate opportunity within UK investment management to leverage quantitative skills and contribute to portfolio performance and client outcomes.",
  ],
};

export const education = [
  {
    institution: "University of Strathclyde",
    location: "Glasgow, UK",
    degree: "Master of Science, Finance and Management",
    period: "2025 – 2026",
    grade: null,
    bullets: [
      "Developing advanced knowledge in corporate finance, investment analysis, and financial risk management.",
      "Coursework includes Financial Modelling, Portfolio Management, Corporate Governance, and Strategic Financial Management.",
    ],
    current: true,
  },
  {
    institution: "Christ Nagar College",
    location: "Maranalloor, India",
    degree: "Bachelor of Commerce, Commerce and Tax Procedure and Practice",
    period: "2021 – 2024",
    grade: "CGPA 7.8 / 10",
    bullets: [
      "Comprehensive study of accounting principles, taxation laws, and business procedures.",
      "Project experience in HR planning and organisational growth strategies.",
    ],
    current: false,
  },
  {
    institution: "L'ecole Chempaka",
    location: "Silver Rocks, India",
    degree: "ISC, Class 12 – Commerce",
    period: "2019 – 2021",
    grade: "95.5%",
    bullets: [
      "Achieved First Division with Distinction in Commerce stream.",
    ],
    current: false,
  },
];

export const experience = [
  {
    company: "Muthoot Fincorp Limited",
    role: "Internal MIS Intern",
    period: "September 2024 – July 2025",
    location: "India",
    bullets: [
      "Prepared and maintained daily, weekly, and monthly MIS reports for senior management, ensuring timely and accurate delivery of critical business intelligence.",
      "Collected, validated, and analysed financial and operational data to support strategic decision-making processes across multiple departments.",
      "Monitored key performance indicators (KPIs) and identified trends or discrepancies, providing actionable business insights to stakeholders.",
      "Collaborated effectively with cross-functional teams to ensure data accuracy and consistency in reporting standards.",
      "Contributed to automation and process improvement initiatives, enhancing reporting efficiency and reducing manual processing time.",
    ],
  },
];

export const skills = {
  "Financial & Technical": [
    "MIS Reporting",
    "Financial Reporting",
    "Data Validation",
    "Accounting Principles",
    "Taxation Fundamentals",
    "Financial Modelling",
    "Budget Analysis",
    "MS Access",
  ],
  "Analytical & Software Tools": [
    "Microsoft Excel (Advanced)",
    "Pivot Tables & VLOOKUP",
    "Macros",
    "Google Sheets",
    "MS Office Suite",
    "G-Suite",
    "Notion",
  ],
  "Design & Documentation": [
    "Canva",
    "Microsoft PowerPoint",
    "Professional Report Writing",
  ],
  "Professional Competencies": [
    "Time Management",
    "Verbal & Written Communication",
    "Team Collaboration",
    "Leadership",
    "Problem-Solving",
    "Organisational Skills",
    "Stakeholder Engagement",
  ],
};

export const projects = [
  {
    title: "MIS Reporting Automation",
    category: "Data & Reporting",
    period: "2024 – 2025",
    status: "Professional",
    description:
      "Redesigned and automated the MIS reporting workflow at Muthoot Fincorp, replacing manual data consolidation with structured Excel templates and macro-driven pipelines.",
    highlights: [
      "Reduced monthly report compilation time by approximately 30% through template standardisation.",
      "Built dynamic dashboards tracking KPIs across 10+ regional branches.",
      "Introduced data validation rules that eliminated recurring input errors in cross-departmental datasets.",
    ],
    tools: ["Microsoft Excel", "Macros", "MS Access", "PowerPoint"],
  },
  {
    title: "Investment Portfolio Analysis",
    category: "Financial Modelling",
    period: "2025",
    status: "Academic",
    description:
      "Constructed a diversified equity portfolio using Modern Portfolio Theory, applying mean-variance optimisation to FTSE 100 constituent data to identify the efficient frontier.",
    highlights: [
      "Selected and weighted 12 equities to maximise Sharpe ratio within a defined risk tolerance.",
      "Performed scenario analysis under bull, base, and bear market conditions.",
      "Presented findings in a professional investment memorandum format.",
    ],
    tools: ["Excel", "Bloomberg Data", "Financial Modelling"],
  },
  {
    title: "Corporate Governance Case Study",
    category: "Research & Analysis",
    period: "2025",
    status: "Academic",
    description:
      "Conducted an in-depth analysis of board governance structures and their impact on firm performance for a FTSE 250 company, examining ESG disclosures and shareholder value creation.",
    highlights: [
      "Reviewed 5 years of annual reports, proxy statements, and ESG disclosures.",
      "Benchmarked governance metrics against industry peers and best-practice frameworks.",
      "Produced a 4,000-word research report with actionable governance recommendations.",
    ],
    tools: ["Bloomberg", "Annual Reports", "ESG Frameworks", "Word"],
  },
];

export const certifications = [
  {
    title: "Level 5 Diploma in Applied Finance",
    issuer: "AmplifyMe Simulation Programme",
    date: null,
    description:
      "Practical simulation-based certification covering investment analysis, portfolio construction, and applied financial modelling.",
  },
  {
    title: "Virtual Training Programme in Social Media Marketing",
    issuer: "Digital Marketing Programme",
    date: "March 2022",
    description:
      "Comprehensive training in digital marketing strategies and campaign execution.",
  },
  {
    title: "Voice of Stakeholder (VoS) Training",
    issuer: "Young Innovators Programme",
    date: "June 2023",
    description:
      "Stakeholder engagement and innovation processes — training in communication, listening, and organisational change facilitation.",
  },
  {
    title: "Google Workspace Certification",
    issuer: "Coursera",
    date: null,
    description:
      "Proficiency certification in Google Docs, Sheets, Slides, Drive, and collaborative productivity tools.",
  },
];

export const volunteer = [
  {
    organisation: "NGO – Girls' Support Centre",
    role: "Volunteer Tutor",
    period: "2019 – 2021",
    bullets: [
      "Provided academic tutoring and educational support to young girls who were victims of domestic abuse.",
      "Developed personalised learning plans to accommodate individual learning needs and emotional circumstances.",
      "Demonstrated empathy, patience, and resilience while working with vulnerable populations.",
      "Contributed to creating a safe and nurturing educational environment, fostering confidence and academic progress.",
    ],
  },
];

export const additional = {
  languages: [
    { language: "English", level: "Professional Working Proficiency" },
    { language: "Malayalam", level: "Native" },
    { language: "Hindi", level: "Conversational" },
  ],
  interests: ["Music", "Travelling", "Badminton", "Reading", "Drawing"],
  rightToWork: "Eligible to work in the UK (Student Visa – check restrictions)",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];
