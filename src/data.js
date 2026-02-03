import signieImg from "./assets/images/signie.webp";
import notriskImg from "./assets/images/notrisk.webp";
import evincoImg from "./assets/images/evinco.webp";
import extractImg from "./assets/images/extract.webp";
import circuitsImg from "./assets/images/circuits.webp";

export const siteConfig = {
  name: "Vishesh Kumar",
  title: "Vishesh Kumar - AI Product Manager & Strategy Lead",
  description: "AI Product Manager and strategy lead based in San Francisco, CA. Specializing in AI/ML products, data-driven product strategy, and building products that scale.",
  url: "https://Vinit-Prajapati-17.github.io/vishesh",
  email: "vishesh.kumar@gmail.com",
  social: {
    github: "https://github.com/visheshkumar",
    linkedin: "https://www.linkedin.com/in/visheshkumar/",
    twitter: "https://x.com/visheshkumar",
  },
};

export const projects = [
  {
    slug: "ai-recommendation-engine",
    name: "AI-Powered Recommendation Engine - E-commerce Platform",
    shortName: "AI Recommendations",
    tagline: "Driving 40% increase in conversion through personalized AI recommendations",
    description: "Led product strategy for an AI-powered recommendation system that increased user engagement by 65% and conversion rates by 40% across a multi-million user e-commerce platform.",
    type: "AI Product Strategy • ML Product Management",
    year: "2024",
    tools: ["Python", "TensorFlow", "A/B Testing", "SQL", "Tableau", "Amplitude"],
    image: signieImg,
    link: "#",
    sourceUrl: "#",
    featured: true,
    status: "Production - 2M+ Users",
    role: "Senior AI Product Manager",
    team: "Cross-functional team of 12",
    platform: "Web & Mobile",
    tldr: {
      what: "AI-powered recommendation system that personalizes product discovery for e-commerce users",
      who: "E-commerce shoppers struggling with product discovery in large catalogs",
      challenge: "Balancing recommendation accuracy with business metrics while maintaining user trust",
      outcome: "40% increase in conversion, 65% boost in engagement, $2M+ additional revenue",
      whyItMatters: "Personalization at scale requires product thinking, not just better algorithms"
    },
    problem: {
      intro: "Generic product recommendations were failing both users and business metrics.",
      points: [
        "Users spent too much time searching through irrelevant products",
        "Conversion rates plateaued despite growing traffic",
        "Existing rule-based recommendations showed limited personalization",
        "Business stakeholders needed clear ROI from AI investments"
      ],
      coreInsight: "The problem wasn't recommendation accuracy - it was recommendation relevance in the context of user intent and business goals."
    },
    nonGoals: [
      "Build the most sophisticated ML model possible",
      "Replace human curation entirely",
      "Optimize purely for click-through rates",
      "Deploy without clear success metrics"
    ],
    systemOverview: {
      intro: "Built a multi-layered recommendation system with clear business alignment:",
      steps: [
        { title: "User Behavior Analysis", description: "Real-time tracking and segmentation" },
        { title: "ML Model Pipeline", description: "Collaborative filtering + content-based recommendations" },
        { title: "Business Rules Layer", description: "Inventory, margins, and strategic priorities" },
        { title: "A/B Testing Framework", description: "Continuous optimization and measurement" },
        { title: "Performance Monitoring", description: "Real-time metrics and alerting" }
      ],
      note: "Every component was designed with clear business metrics and user experience goals."
    },
    productDecisions: [
      {
        title: "Hybrid Recommendation Approach",
        points: [
          "Combined collaborative filtering with content-based recommendations",
          "Addressed cold start problem for new users and products",
          "Balanced exploration vs exploitation in recommendations"
        ],
        outcome: "35% improvement in recommendation relevance scores"
      },
      {
        title: "Business-Aware Ranking",
        points: [
          "Integrated inventory levels, profit margins, and strategic priorities",
          "Balanced user satisfaction with business objectives",
          "Created transparent scoring system for stakeholder buy-in"
        ],
        outcome: "Achieved both user satisfaction and business KPI improvements"
      },
      {
        title: "Gradual Rollout Strategy",
        points: [
          "Started with 5% traffic, scaled to 100% over 3 months",
          "Implemented comprehensive A/B testing framework",
          "Built real-time monitoring and rollback capabilities"
        ],
        outcome: "Zero downtime deployment with clear success metrics at each stage"
      }
    ],
    techStack: [
      { label: "ML Platform", value: "TensorFlow + Python for model training" },
      { label: "Data Pipeline", value: "Apache Kafka + Spark for real-time processing" },
      { label: "Analytics", value: "Tableau + Amplitude for insights" },
      { label: "Experimentation", value: "Custom A/B testing platform" },
      { label: "Monitoring", value: "DataDog + custom dashboards" }
    ],
    challenges: [
      {
        title: "Balancing Multiple Stakeholders",
        problem: "Engineering wanted technical elegance, business wanted immediate ROI, users wanted relevance.",
        fix: "Created shared success metrics and regular stakeholder alignment sessions"
      },
      {
        title: "Cold Start Problem",
        problem: "New users and products had poor recommendation quality.",
        fix: "Implemented content-based fallbacks and strategic onboarding recommendations"
      },
      {
        title: "Model Drift Detection",
        problem: "Recommendation quality degraded over time without clear signals.",
        fix: "Built automated monitoring for model performance and data quality"
      }
    ],
    observations: [
      "Users responded better to diverse recommendations than highly similar ones",
      "Business metrics improved most when user satisfaction was prioritized",
      "A/B testing revealed counter-intuitive user preferences",
      "Cross-functional alignment was more critical than technical sophistication"
    ],
    ethics: [
      "Transparent recommendation logic for users",
      "Privacy-first data collection and processing",
      "Bias testing across user demographics",
      "Clear opt-out mechanisms for personalization"
    ],
    learnings: [
      "Product success requires balancing user value with business objectives",
      "AI products need continuous monitoring and iteration",
      "Stakeholder alignment is as important as technical execution",
      "User trust is built through transparency and consistent value delivery"
    ],
    futureWork: [
      "Real-time personalization based on session behavior",
      "Multi-modal recommendations (visual + text)",
      "Cross-platform recommendation consistency",
      "Advanced attribution modeling for recommendation impact"
    ],
    whatYouCanLearn: [
      "How to balance user experience with business metrics in AI products",
      "How to design and execute A/B testing for ML systems",
      "How to build stakeholder alignment around AI product strategy",
      "How to measure and optimize AI product performance"
    ],
    finalNote: "This project demonstrated that successful AI products require product thinking first, technology second. The biggest wins came from understanding user needs and business context, not just building better algorithms."
  },
  
  {
    slug: "conversational-ai-platform",
    name: "Conversational AI Platform - Customer Support Automation",
    shortName: "AI Support Platform",
    tagline: "Reducing support costs by 60% while improving customer satisfaction",
    description: "Product managed the development and launch of an AI-powered customer support platform that automated 70% of support tickets while maintaining 95% customer satisfaction scores.",
    type: "Conversational AI • Product Strategy",
    year: "2024",
    tools: ["NLP", "Python", "Dialogflow", "Analytics", "SQL", "Zendesk API"],
    image: notriskImg,
    link: "#",
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
    status: "Production - 500K+ Monthly Interactions",
    role: "AI Product Manager",
    team: "Engineering, Data Science, UX, Support",
    platform: "Web, Mobile, API",
    tldr: {
      what: "AI-powered conversational platform that automates customer support while maintaining quality",
      who: "Customer support teams overwhelmed by repetitive queries and customers seeking instant help",
      challenge: "Automating support without sacrificing customer experience or agent efficiency",
      outcome: "70% automation rate, 60% cost reduction, 95% customer satisfaction maintained",
      whyItMatters: "AI support systems succeed when they enhance human agents, not replace them"
    },
    problem: {
      intro: "Traditional customer support couldn't scale with business growth while maintaining quality.",
      points: [
        "Support volume growing 40% annually while team size remained flat",
        "Average response time increasing, customer satisfaction declining",
        "Agents spending 80% of time on repetitive, low-value queries",
        "Inconsistent responses across different agents and channels"
      ],
      coreInsight: "The goal wasn't to replace human agents, but to free them to handle complex, high-value interactions while AI handled routine queries."
    },
    nonGoals: [
      "Replace human agents entirely",
      "Handle every possible customer query",
      "Optimize purely for automation rates",
      "Deploy without clear escalation paths"
    ],
    systemOverview: {
      intro: "Built a hybrid AI-human support system with clear handoff protocols:",
      steps: [
        { title: "Intent Classification", description: "NLP-powered query understanding" },
        { title: "Knowledge Base Integration", description: "Dynamic response generation" },
        { title: "Confidence Scoring", description: "Automated escalation decisions" },
        { title: "Human Handoff", description: "Seamless agent integration" },
        { title: "Continuous Learning", description: "Feedback loop for improvement" }
      ],
      note: "Every interaction was designed to either resolve the issue or provide valuable context to human agents."
    },
    productDecisions: [
      {
        title: "Confidence-Based Escalation",
        points: [
          "AI only handled queries with >85% confidence scores",
          "Ambiguous queries immediately routed to human agents with context",
          "Built transparent escalation criteria for agent training"
        ],
        outcome: "Maintained 95% customer satisfaction while achieving 70% automation"
      },
      {
        title: "Agent Augmentation Focus",
        points: [
          "Provided agents with suggested responses and relevant context",
          "Built tools for agents to quickly train AI on new scenarios",
          "Created feedback loops for continuous AI improvement"
        ],
        outcome: "Agent productivity increased 40% even on non-automated queries"
      },
      {
        title: "Multi-Channel Consistency",
        points: [
          "Deployed same AI across web chat, mobile app, and email",
          "Maintained conversation context across channel switches",
          "Unified analytics and performance monitoring"
        ],
        outcome: "Consistent customer experience regardless of interaction channel"
      }
    ],
    techStack: [
      { label: "NLP Platform", value: "Google Dialogflow + Custom NLP models" },
      { label: "Backend", value: "Python + FastAPI for response generation" },
      { label: "Integration", value: "Zendesk API + Slack for agent workflows" },
      { label: "Analytics", value: "Custom dashboards + Google Analytics" },
      { label: "Monitoring", value: "Real-time performance and quality metrics" }
    ],
    challenges: [
      {
        title: "Maintaining Response Quality",
        problem: "Early AI responses were accurate but felt robotic and unhelpful.",
        fix: "Implemented response personalization and tone matching based on customer context"
      },
      {
        title: "Agent Adoption Resistance",
        problem: "Support agents initially viewed AI as a threat to their roles.",
        fix: "Positioned AI as productivity enhancement, provided extensive training and feedback channels"
      },
      {
        title: "Complex Query Handling",
        problem: "Multi-part queries and edge cases caused poor user experiences.",
        fix: "Built sophisticated intent parsing and proactive escalation for complex scenarios"
      }
    ],
    observations: [
      "Customers preferred AI for simple queries but wanted human connection for complex issues",
      "Agent satisfaction improved when AI handled routine work",
      "Response personalization significantly impacted customer satisfaction",
      "Continuous learning from agent feedback was crucial for AI improvement"
    ],
    ethics: [
      "Clear disclosure when customers interact with AI",
      "Easy escalation to human agents at any time",
      "Privacy protection for customer conversation data",
      "Bias testing across customer demographics and query types"
    ],
    learnings: [
      "Successful AI support requires human-AI collaboration, not replacement",
      "Customer trust is built through transparency and consistent quality",
      "Agent buy-in is critical for long-term AI support success",
      "Continuous improvement based on real usage data drives the best outcomes"
    ],
    futureWork: [
      "Proactive support based on user behavior patterns",
      "Voice-based support integration",
      "Advanced sentiment analysis for escalation decisions",
      "Predictive analytics for support volume planning"
    ],
    whatYouCanLearn: [
      "How to design AI systems that augment rather than replace human workers",
      "How to measure and optimize conversational AI performance",
      "How to manage change management for AI adoption in organizations",
      "How to build trust and transparency in AI customer interactions"
    ],
    finalNote: "This project proved that the most successful AI support systems enhance human capabilities rather than replacing them. The key was designing for collaboration from day one."
  },
  
  {
    slug: "predictive-analytics-dashboard",
    name: "Predictive Analytics Dashboard - Business Intelligence Platform",
    shortName: "Predictive Analytics",
    tagline: "Empowering data-driven decisions with AI-powered business insights",
    description: "Led the product development of a predictive analytics platform that helped business teams make data-driven decisions, resulting in 25% improvement in forecast accuracy and $1.5M cost savings.",
    type: "Data Product • Business Intelligence",
    year: "2023",
    tools: ["Python", "Tableau", "SQL", "Machine Learning", "AWS", "Airflow"],
    image: evincoImg,
    link: "#",
    sourceUrl: "#",
    featured: true,
    status: "Production - 200+ Business Users",
    role: "Data Product Manager",
    team: "Data Science, Engineering, Business Analytics",
    platform: "Web Dashboard + API",
    tldr: {
      what: "AI-powered analytics platform that provides predictive insights for business decision-making",
      who: "Business analysts and managers needing accurate forecasts and trend analysis",
      challenge: "Making complex predictive models accessible and actionable for non-technical users",
      outcome: "25% improvement in forecast accuracy, $1.5M cost savings, 90% user adoption",
      whyItMatters: "Predictive analytics only creates value when business users can understand and act on insights"
    },
    problem: {
      intro: "Business teams had access to data but lacked predictive insights for strategic planning.",
      points: [
        "Historical reporting provided limited value for future planning",
        "Data science insights were trapped in technical reports",
        "Business users couldn't access or interpret predictive models",
        "Decision-making remained reactive rather than proactive"
      ],
      coreInsight: "The gap wasn't in data availability or model accuracy - it was in making predictions accessible and actionable for business users."
    },
    nonGoals: [
      "Build the most complex predictive models possible",
      "Replace business analyst roles",
      "Provide predictions without confidence intervals",
      "Create a one-size-fits-all analytics solution"
    ],
    systemOverview: {
      intro: "Built a user-centric analytics platform with predictive capabilities:",
      steps: [
        { title: "Data Integration", description: "Automated ETL from multiple business systems" },
        { title: "ML Model Pipeline", description: "Automated training and validation" },
        { title: "Interactive Dashboard", description: "Self-service analytics interface" },
        { title: "Alert System", description: "Proactive notifications for anomalies" },
        { title: "Export & Integration", description: "API access for downstream systems" }
      ],
      note: "Every feature was designed to bridge the gap between data science capabilities and business needs."
    },
    productDecisions: [
      {
        title: "Self-Service Analytics Approach",
        points: [
          "Enabled business users to create custom views and filters",
          "Provided guided workflows for common analysis patterns",
          "Built intuitive interfaces that didn't require technical training"
        ],
        outcome: "90% user adoption rate across business teams"
      },
      {
        title: "Confidence-Aware Predictions",
        points: [
          "Always displayed prediction confidence intervals",
          "Color-coded reliability indicators for different forecasts",
          "Clear explanations of factors driving predictions"
        ],
        outcome: "Increased trust and appropriate usage of predictive insights"
      },
      {
        title: "Automated Model Management",
        points: [
          "Built automated retraining pipelines for model freshness",
          "Implemented A/B testing for model performance comparison",
          "Created monitoring for model drift and data quality"
        ],
        outcome: "Maintained prediction accuracy without manual data science intervention"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React + D3.js for interactive visualizations" },
      { label: "Backend", value: "Python + FastAPI for model serving" },
      { label: "ML Pipeline", value: "Scikit-learn + Apache Airflow" },
      { label: "Database", value: "PostgreSQL + Redis for caching" },
      { label: "Infrastructure", value: "AWS + Docker for scalable deployment" }
    ],
    challenges: [
      {
        title: "Model Interpretability",
        problem: "Business users needed to understand why predictions were made.",
        fix: "Implemented SHAP values and feature importance visualizations with plain-language explanations"
      },
      {
        title: "Data Quality Issues",
        problem: "Inconsistent data quality affected prediction reliability.",
        fix: "Built automated data quality monitoring and clear quality indicators in the UI"
      },
      {
        title: "Performance at Scale",
        problem: "Complex queries and visualizations became slow with large datasets.",
        fix: "Implemented intelligent caching, data aggregation, and progressive loading"
      }
    ],
    observations: [
      "Business users preferred simple, accurate predictions over complex, perfect ones",
      "Visual explanations were more effective than statistical explanations",
      "Proactive alerts drove more value than on-demand analysis",
      "User training was as important as technical implementation"
    ],
    ethics: [
      "Clear documentation of model limitations and biases",
      "Transparent data sources and calculation methods",
      "User access controls based on data sensitivity",
      "Regular bias audits across different business segments"
    ],
    learnings: [
      "Product success depends on user adoption, not just technical accuracy",
      "Business context is crucial for designing useful analytics features",
      "Model interpretability is a product requirement, not a nice-to-have",
      "Automated systems still need human oversight and intervention capabilities"
    ],
    futureWork: [
      "Natural language query interface for analytics",
      "Automated insight generation and narrative explanations",
      "Integration with business planning and budgeting tools",
      "Advanced anomaly detection with root cause analysis"
    ],
    whatYouCanLearn: [
      "How to make complex analytics accessible to business users",
      "How to design self-service data products",
      "How to balance automation with user control in analytics platforms",
      "How to measure and optimize analytics product adoption"
    ],
    finalNote: "This project demonstrated that successful data products require as much focus on user experience as on technical capabilities. The best predictions are worthless if users can't understand or act on them."
  },
  
  {
    slug: "ai-content-moderation",
    name: "AI Content Moderation System - Social Platform Safety",
    shortName: "AI Moderation",
    tagline: "Scaling content safety with AI while maintaining community trust",
    description: "Product managed an AI-powered content moderation system that processed 10M+ posts daily, reducing harmful content by 85% while maintaining 98% accuracy and community satisfaction.",
    type: "AI Safety • Content Moderation",
    year: "2023",
    tools: ["Computer Vision", "NLP", "TensorFlow", "Python", "Kubernetes", "Grafana"],
    image: extractImg,
    link: "#",
    sourceUrl: "#",
    featured: true,
    status: "Production - 10M+ Daily Posts",
    role: "AI Safety Product Manager",
    team: "ML Engineering, Trust & Safety, Policy, UX",
    platform: "API + Moderation Dashboard",
    tldr: {
      what: "AI-powered content moderation system that automatically detects and handles harmful content at scale",
      who: "Social platform users and content moderators dealing with harmful content",
      challenge: "Balancing automated safety with user expression and community standards",
      outcome: "85% reduction in harmful content, 98% accuracy, 50% faster moderation response",
      whyItMatters: "Content moderation at scale requires AI, but community trust requires human oversight"
    },
    problem: {
      intro: "Manual content moderation couldn't keep pace with platform growth while maintaining quality.",
      points: [
        "Content volume growing 300% annually with limited moderation team scaling",
        "Harmful content staying live for hours before human review",
        "Inconsistent moderation decisions across different reviewers",
        "Moderator burnout from exposure to harmful content"
      ],
      coreInsight: "The challenge wasn't just detecting harmful content, but doing so while preserving user trust and community standards."
    },
    nonGoals: [
      "Achieve 100% automation without human oversight",
      "Moderate all content types with single model",
      "Optimize purely for speed over accuracy",
      "Replace human judgment in complex cases"
    ],
    systemOverview: {
      intro: "Built a multi-layered AI moderation system with human oversight:",
      steps: [
        { title: "Content Ingestion", description: "Real-time processing of posts, images, videos" },
        { title: "Multi-Modal Analysis", description: "Text, image, and video AI models" },
        { title: "Risk Scoring", description: "Confidence-based action recommendations" },
        { title: "Automated Actions", description: "High-confidence removals and approvals" },
        { title: "Human Review Queue", description: "Edge cases and appeals process" }
      ],
      note: "Every decision included confidence scores and clear escalation paths to human moderators."
    },
    productDecisions: [
      {
        title: "Tiered Confidence System",
        points: [
          "High confidence (>95%): Automated action",
          "Medium confidence (70-95%): Human review with AI context",
          "Low confidence (<70%): Standard human moderation workflow"
        ],
        outcome: "Balanced automation efficiency with moderation quality"
      },
      {
        title: "Context-Aware Moderation",
        points: [
          "Considered user history, community context, and content relationships",
          "Different thresholds for different content types and user segments",
          "Cultural and linguistic nuance handling for global platform"
        ],
        outcome: "Reduced false positives by 40% while maintaining safety standards"
      },
      {
        title: "Transparent Appeals Process",
        points: [
          "Clear explanations for automated moderation decisions",
          "Easy appeals process with human review guarantee",
          "Feedback loop to improve AI model performance"
        ],
        outcome: "Maintained 85% user satisfaction with moderation decisions"
      }
    ],
    techStack: [
      { label: "Computer Vision", value: "Custom CNN models for image/video analysis" },
      { label: "NLP", value: "BERT-based models for text classification" },
      { label: "ML Platform", value: "TensorFlow + Kubeflow for model deployment" },
      { label: "Infrastructure", value: "Kubernetes + Redis for real-time processing" },
      { label: "Monitoring", value: "Grafana + custom dashboards for performance tracking" }
    ],
    challenges: [
      {
        title: "Evolving Harmful Content",
        problem: "Bad actors constantly adapted to evade detection systems.",
        fix: "Implemented continuous learning pipelines and rapid model updates based on new patterns"
      },
      {
        title: "Cultural Context Sensitivity",
        problem: "Global platform required understanding of different cultural norms and languages.",
        fix: "Built region-specific models and local expert review processes"
      },
      {
        title: "False Positive Management",
        problem: "Over-aggressive moderation hurt user experience and engagement.",
        fix: "Implemented precision-focused optimization and user feedback integration"
      }
    ],
    observations: [
      "Users preferred transparent explanations over perfect accuracy",
      "Human-AI collaboration was more effective than pure automation",
      "Community standards varied significantly across user segments",
      "Proactive detection was more valuable than reactive removal"
    ],
    ethics: [
      "Bias testing across demographic groups and content types",
      "Transparent moderation policies and decision explanations",
      "Privacy protection for content analysis and user data",
      "Regular audits of moderation decisions and model fairness"
    ],
    learnings: [
      "Content moderation is as much about community trust as technical accuracy",
      "AI systems must be designed for continuous adaptation and learning",
      "Human oversight remains critical for maintaining community standards",
      "Transparency and appeals processes are essential for user acceptance"
    ],
    futureWork: [
      "Proactive harmful content prediction based on user behavior",
      "Advanced deepfake and synthetic media detection",
      "Real-time community sentiment analysis for policy adjustments",
      "Automated policy explanation generation for users"
    ],
    whatYouCanLearn: [
      "How to design AI systems for sensitive and high-stakes applications",
      "How to balance automation with human oversight in content moderation",
      "How to build trust and transparency in AI safety systems",
      "How to manage continuous learning and adaptation in production AI systems"
    ],
    finalNote: "This project highlighted that AI safety systems must prioritize community trust and transparency alongside technical performance. The most sophisticated AI is worthless if users don't trust the decisions it makes."
  },
  
  {
    slug: "ml-ops-platform",
    name: "MLOps Platform - Model Lifecycle Management",
    shortName: "MLOps Platform",
    tagline: "Accelerating AI product development through streamlined ML operations",
    description: "Product managed the development of an internal MLOps platform that reduced model deployment time from weeks to hours and improved model performance monitoring across 50+ AI products.",
    type: "MLOps • Platform Product",
    year: "2022",
    tools: ["Kubernetes", "Docker", "Python", "Airflow", "MLflow", "Prometheus"],
    image: circuitsImg,
    link: "#",
    liveUrl: "#",
    featured: true,
    status: "Internal Platform - 50+ Models",
    role: "Platform Product Manager",
    team: "ML Engineering, DevOps, Data Science",
    platform: "Internal Platform + APIs",
    tldr: {
      what: "Internal MLOps platform that streamlines ML model development, deployment, and monitoring",
      who: "Data scientists and ML engineers struggling with model deployment and lifecycle management",
      challenge: "Bridging the gap between ML experimentation and production deployment at scale",
      outcome: "90% reduction in deployment time, 50+ models in production, 99.9% uptime",
      whyItMatters: "AI products fail not because of bad models, but because of poor operational practices"
    },
    problem: {
      intro: "ML teams were spending more time on infrastructure than on model development.",
      points: [
        "Model deployment took 2-4 weeks of engineering effort per model",
        "No standardized monitoring or alerting for model performance",
        "Data scientists couldn't deploy models independently",
        "Inconsistent environments between development and production"
      ],
      coreInsight: "The bottleneck for AI product development wasn't model quality - it was the operational complexity of getting models into production reliably."
    },
    nonGoals: [
      "Replace existing data science workflows entirely",
      "Build a one-size-fits-all ML platform",
      "Optimize for maximum feature complexity",
      "Support every possible ML framework and tool"
    ],
    systemOverview: {
      intro: "Built a comprehensive MLOps platform with self-service capabilities:",
      steps: [
        { title: "Model Registry", description: "Centralized model versioning and metadata" },
        { title: "Automated Deployment", description: "CI/CD pipelines for ML models" },
        { title: "Monitoring Dashboard", description: "Real-time performance and drift detection" },
        { title: "A/B Testing Framework", description: "Safe model rollouts and comparisons" },
        { title: "Resource Management", description: "Auto-scaling and cost optimization" }
      ],
      note: "Every component was designed to reduce friction between ML experimentation and production deployment."
    },
    productDecisions: [
      {
        title: "Self-Service Model Deployment",
        points: [
          "Data scientists could deploy models without engineering support",
          "Standardized deployment templates for common use cases",
          "Automated testing and validation pipelines"
        ],
        outcome: "Reduced deployment time from weeks to hours"
      },
      {
        title: "Comprehensive Model Monitoring",
        points: [
          "Automated drift detection and performance monitoring",
          "Custom alerting based on business metrics",
          "Integration with existing observability tools"
        ],
        outcome: "Prevented 15+ model performance issues before they affected users"
      },
      {
        title: "Gradual Rollout Framework",
        points: [
          "Built-in A/B testing for model comparisons",
          "Canary deployments with automatic rollback",
          "Business metric tracking alongside technical metrics"
        ],
        outcome: "Enabled safe experimentation and rapid iteration on production models"
      }
    ],
    techStack: [
      { label: "Orchestration", value: "Kubernetes + Docker for containerized deployments" },
      { label: "ML Pipeline", value: "Apache Airflow + MLflow for workflow management" },
      { label: "Monitoring", value: "Prometheus + Grafana for metrics and alerting" },
      { label: "Storage", value: "S3 + PostgreSQL for model artifacts and metadata" },
      { label: "API Gateway", value: "Kong for model serving and traffic management" }
    ],
    challenges: [
      {
        title: "Balancing Flexibility vs Standardization",
        problem: "Data scientists wanted flexibility while operations needed consistency.",
        fix: "Created configurable templates that provided flexibility within standardized frameworks"
      },
      {
        title: "Model Performance Monitoring",
        problem: "Traditional monitoring didn't capture ML-specific issues like drift.",
        fix: "Built custom monitoring for data drift, model performance, and business impact"
      },
      {
        title: "Resource Cost Management",
        problem: "ML workloads were expensive and unpredictable.",
        fix: "Implemented auto-scaling, resource quotas, and cost tracking per team/project"
      }
    ],
    observations: [
      "Data scientists adopted the platform faster when it integrated with existing tools",
      "Monitoring and alerting were more valuable than deployment automation",
      "Self-service capabilities significantly improved team productivity",
      "Standardization reduced bugs and improved reliability across all models"
    ],
    ethics: [
      "Built-in bias testing and fairness monitoring for all deployed models",
      "Audit trails for all model deployments and changes",
      "Privacy controls for sensitive data and model access",
      "Clear governance policies for model approval and monitoring"
    ],
    learnings: [
      "Platform adoption requires solving real pain points, not just providing features",
      "ML operations are fundamentally different from traditional software operations",
      "Self-service capabilities are crucial for scaling AI product development",
      "Monitoring and observability are more critical than deployment automation"
    ],
    futureWork: [
      "Automated model retraining based on performance thresholds",
      "Advanced feature store integration",
      "Multi-cloud deployment capabilities",
      "Automated compliance and governance workflows"
    ],
    whatYouCanLearn: [
      "How to design platform products that accelerate team productivity",
      "How to balance flexibility with standardization in ML operations",
      "How to build monitoring and observability for ML systems",
      "How to measure and optimize platform adoption and success"
    ],
    finalNote: "This project proved that successful AI products require as much focus on operations as on algorithms. The best models are worthless if they can't be deployed, monitored, and maintained reliably in production."
  },
];

export const skills = {
  expertise: [
    "AI Product Strategy",
    "Data-Driven Product Management",
    "User Research & Analytics",
    "ML Product Development",
  ],
  tools: [
    "Python",
    "SQL",
    "Tableau",
    "Figma",
    "Jira",
    "Amplitude",
    "TensorFlow",
    "A/B Testing",
    "Product Analytics",
    "Roadmapping",
  ],
};