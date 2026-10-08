export const projects = [
  {
    title: 'EduClass LMS',
    category: 'Fullstack Web Development',
    featured: true,
    status: 'IN PROGRESS',
    description:
      'A simple e-learning platform where teachers create classes, upload materials, and assign tasks, while students enroll, submit assignments, and track their grades. Features role-based access (admin, teacher, student) with JWT authentication.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    preview: { type: 'web', src: '/projects/educlass.png' },
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Live Demo]', href: '#' },
    ],
  },
  {
    title: 'CloudDeploy Pipeline',
    category: 'DevOps',
    featured: true,
    hidden: true,
    description:
      'An automated CI/CD pipeline with infrastructure as code that deploys containerized apps to Kubernetes with zero downtime. Includes monitoring and alerting, cutting deployment time from 30 minutes to under 5.',
    stack: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
    preview: { type: 'web', src: '' },
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
  {
    title: 'DuitKu Tracker',
    category: 'Mobile App Development',
    featured: true,
    status: 'IN PROGRESS',
    description:
      'A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device.',
    stack: ['Flutter', 'Dart', 'SQLite', 'fl_chart'],
    preview: { type: 'mobile', src: '/projects/duitku.png' },
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Download APK]', href: '#' },
    ],
  },
  {
    title: 'ChurnSense',
    category: 'Data Science',
    featured: true,
    hidden: true,
    description:
      'A customer churn prediction model trained on 50K+ records, with feature engineering and hyperparameter tuning. Achieved 89% recall and an interactive dashboard that helps teams target at-risk customers.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    preview: { type: 'web', src: '' },
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
];
