export const projects = [
  {
    title: 'DocuMind AI',
    category: 'AI Engineering',
    featured: true,
    description:
      'A RAG-based document Q&A assistant that answers questions from uploaded PDFs with source citations. Built with hybrid search and an evaluation workflow to reduce hallucinations, keeping responses under 3 seconds.',
    stack: [
      'Python',
      'LangChain',
      'OpenAI API',
      'FAISS',
      'FastAPI',
      'Docker',
      'React',
    ],
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
    title: 'ShopFlow API',
    category: 'Backend Development',
    featured: true,
    description:
      'A scalable REST API for an e-commerce platform with JWT authentication, order processing, and payment integration. Uses Redis caching and query optimization to handle 1,000+ requests per second.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
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
