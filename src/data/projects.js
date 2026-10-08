export const projects = [
  {
    title: 'EduClass LMS',
    category: 'Fullstack Web Development',
    featured: true,
    description:
      'A simple e-learning platform where teachers create classes, upload materials, and assign tasks, while students enroll, submit assignments, and track their grades. Features role-based access (admin, teacher, student) with JWT authentication.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
  {
    title: 'CloudDeploy Pipeline',
    category: 'DevOps',
    featured: true,
    description:
      'An automated CI/CD pipeline with infrastructure as code that deploys containerized apps to Kubernetes with zero downtime. Includes monitoring and alerting, cutting deployment time from 30 minutes to under 5.',
    stack: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
  {
    title: 'DuitKu Tracker',
    category: 'Mobile App Development',
    featured: true,
    description:
      'A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device.',
    stack: ['Flutter', 'Dart', 'SQLite', 'fl_chart'],
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
  {
    title: 'ChurnSense',
    category: 'Data Science',
    featured: true,
    description:
      'A customer churn prediction model trained on 50K+ records, with feature engineering and hyperparameter tuning. Achieved 89% recall and an interactive dashboard that helps teams target at-risk customers.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    links: [
      { label: '[Github]', href: '#', primary: true },
      { label: '[Go To]', href: '#' },
    ],
  },
];
