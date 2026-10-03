// Central place for editable site content.
// Fields marked with "Add …" are placeholders left intentionally blank —
// fill them in with real details before publishing.

export const SITE_NAME = 'msperfect_place'
export const CONTACT_EMAIL = 'ceo@msperfect.net'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
] as const

export const CREDENTIALS = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    status: 'done' as const,
    detail: 'Completed',
  },
  {
    name: 'ISC2 Certified in Cybersecurity (CC)',
    status: 'pending' as const,
    detail: 'Exam scheduled — October 30, 2026',
  },
]

export const TRANSFERABLE_SKILLS = [
  'Analytical thinking',
  'Pattern recognition',
  'Documentation',
  'Process improvement',
  'Stakeholder communication',
  'Risk awareness',
  'Attention to detail',
  'Working under pressure',
]

type SkillLevel = 'Hands-on' | 'Currently learning' | 'Developing'

export const SKILL_CATEGORIES: {
  category: string
  items: { name: string; level: SkillLevel }[]
}[] = [
  {
    category: 'Security Monitoring',
    items: [
      { name: 'Splunk', level: 'Hands-on' },
      { name: 'Wazuh', level: 'Currently learning' },
    ],
  },
  {
    category: 'Network Analysis',
    items: [
      { name: 'Wireshark', level: 'Hands-on' },
      { name: 'Nmap', level: 'Hands-on' },
    ],
  },
  {
    category: 'Detection',
    items: [{ name: 'Suricata', level: 'Currently learning' }],
  },
  {
    category: 'Operating Systems',
    items: [
      { name: 'Linux', level: 'Hands-on' },
      { name: 'Kali Linux', level: 'Hands-on' },
    ],
  },
  {
    category: 'Hands-on Learning',
    items: [
      { name: 'TryHackMe', level: 'Hands-on' },
      { name: 'Hack The Box', level: 'Hands-on' },
    ],
  },
]

export const FEATURED_PROJECT = {
  title: 'SOC Investigation: Suspicious Authentication Activity',
  status: 'In Progress',
  objective:
    'Investigate a pattern of suspicious authentication activity using Splunk, and produce a documented, evidence-based case study of the investigation.',
  scenario:
    'Repeated failed sign-ins and unusual login patterns are a common early signal of credential attacks or account compromise. This project works through identifying, triaging, and documenting that kind of activity from raw log data.',
  environment: ['Splunk'],
  process: 'In progress.',
  findings: 'Pending — the investigation is not yet complete.',
  outcome: 'Pending.',
  lessons: 'Pending.',
  evidence: 'Screenshots and search queries will be added once the investigation is documented.',
  linkLabel: 'Write-up coming soon',
}

export const EXPERIENCE = [
  {
    role: 'Purchasing Officer',
    period: 'Add start date – Present',
    company: 'Add employer name',
    type: 'Current role',
    bullets: [
      'Coordinates purchasing, vendor communication, and inventory processes, requiring close attention to detail and accurate documentation.',
      'Manages reporting and stakeholder communication across teams, translating operational data into clear updates.',
      'Works under time pressure and shifting priorities, a discipline that carries directly into incident and investigation work.',
    ],
  },
  {
    role: 'Add job title',
    period: 'Add date range',
    company: 'Operations & customer-facing role — beauty & wellness industry',
    type: 'Prior experience',
    bullets: [
      'Handled customer communication, scheduling, and day-to-day problem solving in a fast-paced, customer-facing environment.',
      'Managed inventory and process documentation, and contributed to process improvements over time.',
      'Built a foundation of professional discipline, reliability, and clear communication now being applied to cybersecurity work.',
    ],
  },
]

export const WRITING_INTRO =
  "I write about cybersecurity for non-technical audiences — translating technical ideas into plain language for readers outside the field. It's part of how I document what I'm learning and practice explaining it clearly."

export const WRITING_LINKS = [
  { platform: 'LinkedIn', href: null as string | null },
  { platform: 'Medium', href: null as string | null },
]

export const OPPORTUNITIES_TEXT =
  "I'm currently open to suitable freelance projects, internships, junior security operations opportunities and remote cybersecurity work."
