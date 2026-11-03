export const caseStudies = [
  {
    slug: 'school-management-system',
    title: 'School Management System',
    label: 'EDTECH · PLATFORM · 2024',
    summary:
      'A unified school platform handling enrolment, health monitoring and question-bank management across multiple institutions.',
    role: 'Frontend Developer',
    year: '2024',
    domain: 'Education',
    status: 'Shipped',
    lead: 'Schools were juggling disconnected tools for student records, health checks and assessment banks — each with its own login and its own version of the truth. The goal was one platform where staff could move between services without friction and trust the data they saw.',
    body: 'I worked on the frontend foundation: a shared component library, a single sign-on layer, and the modules that turn raw records into something a teacher can actually act on.',
    contributions: [
      [
        'Single sign-on',
        'Implemented SAML/OAuth SSO for cross-service authentication, removing multi-app login friction for staff.',
      ],
      [
        'Health monitoring',
        'Built a health-monitoring system with automated alert escalation so issues surface before they escalate.',
      ],
      [
        'Question Master Data',
        'Engineered the Question Master Data suite that powers assessment module rendering.',
      ],
      [
        'Component standards',
        'Established reusable React components and code-review standards adopted across the platform.',
      ],
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'SAML / OAuth', 'REST API'],
  },
  {
    slug: 'environmental-system',
    title: 'Environmental System',
    label: 'SUSTAINABILITY · DATA · 2023',
    summary:
      'A data platform that turns environmental sensor feeds into clear, actionable insight for monitoring programmes.',
    role: 'Frontend Developer',
    year: '2023',
    domain: 'Sustainability',
    status: 'Shipped',
    lead: 'Environmental monitoring produced a lot of data but little clarity — readings lived in spreadsheets and dashboards no one fully trusted. The goal was a single place to watch conditions over time and know when something actually matters.',
    body: 'I built the data-visualisation frontend: reusable chart components, a filterable station map, and the reporting views teams use to spot anomalies before they compound.',
    contributions: [
      [
        'Data visualisation',
        'Built reusable chart and map components for time-series and geospatial environmental data.',
      ],
      [
        'Station map',
        'Implemented an interactive map with filtering and drill-down into per-station readings.',
      ],
      [
        'Alert thresholds',
        'Designed configurable thresholds with visual states so anomalies surface immediately.',
      ],
      [
        'Reporting exports',
        'Added exportable reports that turn live readings into shareable, audit-ready summaries.',
      ],
    ],
    stack: ['Vue.js', 'TypeScript', 'D3.js', 'REST API', 'Mapbox'],
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    label: 'COMMERCE · SAAS · 2023',
    summary:
      'A multi-tenant commerce platform where teams launch storefronts, manage catalogues and process orders in one place.',
    role: 'Frontend Developer',
    year: '2023',
    domain: 'Commerce',
    status: 'Shipped',
    lead: 'Merchants were stitching together separate tools for storefronts, inventory and payments. The aim was a single SaaS platform where a team could run the whole operation without leaving the product.',
    body: 'I worked across the storefront builder and checkout flows: a themable component system, cart and pricing logic, and the admin surfaces behind the catalogue.',
    contributions: [
      [
        'Storefront builder',
        'Built a themable, block-based storefront builder on top of a shared component library.',
      ],
      [
        'Checkout flow',
        'Implemented a multi-step checkout with validation, promotions and payment integration.',
      ],
      [
        'Catalog admin',
        'Engineered the catalogue management UI for bulk editing and variant handling.',
      ],
      [
        'Order dashboard',
        'Created real-time order tracking dashboards for merchants and support teams.',
      ],
    ],
    stack: ['Next.js', 'Nest.js', 'TypeScript', 'Stripe', 'GraphQL'],
  },
  {
    slug: 'internal-bank-system',
    title: 'Internal Bank System',
    label: 'BANKING · ENTERPRISE · 2022',
    summary:
      'An internal banking console for reviewing transactions, approvals and compliance workflows with a full audit trail.',
    role: 'Frontend Developer',
    year: '2022',
    domain: 'Banking',
    status: 'Shipped',
    lead: 'Internal banking tools are unforgiving: every action needs a trail, every number has to be right, and workflows cross several teams. The existing tooling was slow and opaque.',
    body: 'I focused on the frontend for approvals and compliance: dense data grids, role-aware actions, and a clear audit trail woven through every screen.',
    contributions: [
      [
        'Approval workflows',
        'Built multi-level approval flows with role-based actions and clear status transitions.',
      ],
      [
        'Data grids',
        'Engineered high-density transaction grids with filtering, sorting and virtualisation.',
      ],
      [
        'Audit trail',
        'Implemented a traceable audit log surfaced inline on every record.',
      ],
      [
        'Role management',
        'Designed permission-aware UI so users only see the actions their role allows.',
      ],
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST API', 'PostgreSQL'],
  },
]

export function getStudy(slug) {
  return caseStudies.find((s) => s.slug === slug)
}

export function getNext(slug) {
  const i = caseStudies.findIndex((s) => s.slug === slug)
  if (i === -1) return caseStudies[0]
  return caseStudies[(i + 1) % caseStudies.length]
}
