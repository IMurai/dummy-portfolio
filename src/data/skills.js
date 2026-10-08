export const webSkill = {
  eyebrow: 'Web Application Development',
  title: 'Fullstack Web Developer',
  certification: 'Hands-On Project Experience',
  metrics: [
    { key: 'Focus Area:', value: 'REST API, Auth & Role-Based Access' },
    { key: 'Frontend:', value: 'Component-Driven React UI' },
    { key: 'Deployment:', value: 'Docker, Vercel & Railway' },
  ],
  stack: [
    { name: 'React', highlight: true },
    { name: 'Next.js' },
    { name: 'TypeScript', highlight: true },
    { name: 'Node.js / Express' },
    { name: 'PostgreSQL', highlight: true },
    { name: 'REST API' },
    { name: 'JWT Authentication' },
    { name: 'Tailwind CSS' },
    { name: 'Prisma' },
    { name: 'Docker' },
    { name: 'Git & GitHub' },
  ],
};

export const mobileSkill = {
  eyebrow: 'Cross-Platform App Development',
  title: 'Mobile App Developer',
  certification: 'Hands-On Project Experience',
  metrics: [
    { key: 'Focus Area:', value: 'Offline-First, Local Storage & Charts' },
    { key: 'Platforms:', value: 'Android (APK)' },
    { key: 'UI:', value: 'Material-Based, Responsive Layouts' },
  ],
  stack: [
    { name: 'Flutter', highlight: true },
    { name: 'Dart', highlight: true },
    { name: 'SQLite', highlight: true },
    { name: 'React Native' },
    { name: 'Kotlin' },
    { name: 'Firebase' },
    { name: 'REST API' },
    { name: 'State Management' },
    { name: 'Git & GitHub' },
  ],
};

export const primarySkills = [webSkill, mobileSkill];

export const subsystems = [
  {
    id: '[SUBSYSTEM_01]',
    category: 'Automation',
    title: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Prometheus', 'Grafana'],
  },
  {
    id: '[SUBSYSTEM_03]',
    category: 'Analytics',
    title: 'Data Science',
    tags: ['Python', 'Pandas & NumPy', 'Scikit-learn', 'XGBoost', 'SQL', 'Jupyter', 'Streamlit'],
  },
];
