export const detailedCaseStudyData = {
  "ai-personalization-platform": {
    id: 1,
    title: "AI-Driven Personalization & Agentic Decision Platform",
    subtitle: "Transforming E-commerce Through Intelligent Automation",
    company: "Leading E-commerce Platform",
    duration: "18 months",
    team: "Cross-functional team of 12 (engineering, data science, UX)",
    role: "Senior AI Product Manager",
    status: "Production - 50M+ Users",
    platform: "Web & Mobile",
    
    // Hero section
    heroImage: "/Portfolio/Case 1.png",
    overview: "Led the development of a comprehensive AI platform that revolutionized e-commerce personalization and automated decision-making, resulting in $3M+ additional revenue and transforming how 50M+ customers interact with the platform.",
    
    // Detailed problem statement
    problem: {
      title: "The Challenge",
      description: "Traditional e-commerce platforms struggled with generic recommendations and slow manual merchandising decisions that significantly impacted revenue growth and customer satisfaction.",
      painPoints: [
        "Low conversion rates due to generic search and recommendations (28% baseline)",
        "Slow, manual merchandising decisions taking 2-4 weeks per change",
        "Lack of AI governance framework for safe production deployment",
        "No scalable experimentation infrastructure for rapid iteration",
        "Data silos preventing unified customer understanding",
        "Limited personalization capabilities across 50M+ diverse customers",
        "Inconsistent user experiences across different touchpoints",
        "Manual processes couldn't scale with business growth"
      ]
    },
    
    // Detailed solution
    solution: {
      title: "Strategic Approach",
      description: "Built a comprehensive AI platform combining personalization engines with autonomous decision-making capabilities, implementing a three-phase approach over 18 months.",
      phases: [
        {
          name: "Foundation Phase",
          duration: "Months 1-6",
          focus: "Data infrastructure and basic personalization",
          deliverables: [
            "Unified data pipeline processing 50M+ customer interactions",
            "Basic recommendation engine with collaborative filtering",
            "A/B testing framework for rapid experimentation",
            "Data quality monitoring and validation systems"
          ]
        },
        {
          name: "Intelligence Phase", 
          duration: "Months 7-12",
          focus: "Advanced AI and agentic systems",
          deliverables: [
            "Multi-LLM agentic platform with GPT-4, Claude, and Gemini",
            "RAG implementation for context-aware decisions",
            "AI governance framework with bias detection",
            "Real-time personalization engine"
          ]
        },
        {
          name: "Scale Phase",
          duration: "Months 13-18", 
          focus: "Production optimization and scaling",
          deliverables: [
            "MLOps platform for automated deployment",
            "Executive analytics dashboard with Power BI",
            "Performance optimization for sub-100ms response times",
            "Comprehensive monitoring and alerting systems"
          ]
        }
      ]
    },
    
    // Key metrics
    impact: {
      revenue: "$3M+",
      conversion: "28% → 39%", 
      automation: "70%",
      efficiency: "25% faster",
      users: "50M+",
      rollbacks: "60% fewer",
      compliance: "98%",
      uptime: "99.9%"
    },
    
    // Detailed modules
    modules: [
      {
        name: "Data Ingestion & Feature Engineering",
        description: "Scalable data pipelines processing customer interactions, transactions, inventory, and pricing data from multiple sources with real-time feature generation.",
        technologies: ["Python", "Apache Spark", "Airflow", "Snowflake", "Kafka"],
        challenges: [
          "Processing 50M+ customer interactions daily",
          "Ensuring data quality across multiple sources",
          "Real-time feature computation at scale"
        ],
        solutions: [
          "Implemented distributed processing with Apache Spark",
          "Built automated data quality monitoring",
          "Created real-time feature store with Redis"
        ],
        outcomes: [
          "99.9% data quality achieved",
          "Sub-second feature generation",
          "Automated data validation and cleansing"
        ]
      },
      {
        name: "Personalization & Recommendation Engine",
        description: "Hybrid ML models combining collaborative filtering with embedding-based recommendations and real-time behavioral signals.",
        technologies: ["TensorFlow", "Scikit-learn", "Vector DBs", "Redis", "Python"],
        challenges: [
          "Cold-start problem for new users and products",
          "Balancing exploration vs exploitation",
          "Real-time inference at scale"
        ],
        solutions: [
          "Implemented hybrid approach with content-based fallbacks",
          "Built multi-armed bandit optimization",
          "Deployed distributed inference infrastructure"
        ],
        outcomes: [
          "39% conversion rate achieved",
          "35% improvement in recommendation relevance",
          "Sub-100ms response time maintained"
        ]
      }
    ],
    
    // Technologies
    technologies: [
      "GPT-4", "Claude", "Gemini", "AWS SageMaker", "Vertex AI", 
      "Python", "TensorFlow", "Docker", "Kubernetes", "Apache Spark",
      "Redis", "PostgreSQL", "Airflow", "MLflow", "Power BI"
    ],
    
    // Technical challenge
    technicalChallenge: {
      problem: "Maintaining recommendation quality and trust while scaling personalized and agentic AI systems across 50M+ customers",
      details: [
        "Data sparsity and cold-start issues degraded recommendation relevance for new users",
        "LLM hallucinations risked incorrect merchandising recommendations",
        "Model drift and bias emerged as customer behavior changed seasonally",
        "Performance constraints required sub-second response times at scale"
      ],
      approach: [
        "Hybrid Modeling Strategy: Combined collaborative filtering with embedding-based similarity models and business rule fallbacks",
        "RAG + Guardrails: Integrated retrieval-augmented generation with confidence thresholds and human oversight",
        "Continuous Monitoring: Real-time drift detection with SHAP explainability and automated retraining",
        "Scalable Architecture: Cloud-native infrastructure with auto-scaling and performance optimization"
      ],
      results: [
        "Reduced hallucination incidents by 60%",
        "Achieved 98% responsible AI compliance",
        "Maintained sub-100ms response times",
        "Enabled safe scaling to 50M+ users"
      ]
    },
    
    // Key decisions
    keyDecisions: [
      {
        decision: "Multi-LLM Strategy",
        rationale: "Different LLMs excel at different tasks - GPT-4 for complex reasoning, Claude for safety-critical decisions, Gemini for cost-efficient experimentation",
        impact: "Optimized performance while managing costs and risks, achieved 95% accuracy in automated decisions"
      },
      {
        decision: "Hybrid Recommendation Approach",
        rationale: "Pure collaborative filtering failed with sparse data; hybrid approach ensured consistent quality across all user segments",
        impact: "Improved recommendation relevance by 35% and solved cold-start problem for new users"
      },
      {
        decision: "Human-in-the-Loop Governance",
        rationale: "AI decisions needed human oversight for high-stakes merchandising choices to maintain stakeholder trust",
        impact: "Maintained 98% compliance while enabling 70% automation of decisions"
      }
    ],
    
    // Lessons learned
    lessonsLearned: [
      "AI product success requires equal focus on technical performance and stakeholder trust",
      "Experimentation infrastructure is as critical as the AI models themselves",
      "Cross-functional alignment accelerates delivery more than technical optimization",
      "Responsible AI practices must be built-in from day one, not retrofitted",
      "User trust is built through transparency and consistent value delivery"
    ]
  },
  
  "financial-portfolio-platform": {
    id: 2,
    title: "Financial Portfolio Insights & ESG Analytics Platform",
    subtitle: "Revolutionizing Wealth Management Through Data Intelligence", 
    company: "Global Wealth Management Firm",
    duration: "12 months",
    team: "Cross-functional team of 8 (data science, engineering, compliance)",
    role: "Data Product Manager",
    status: "Production - 50K+ Users",
    platform: "Web Dashboard + API",
    
    // Hero section
    heroImage: "/Portfolio/Case 2.png",
    overview: "Product managed the development of a comprehensive analytics platform that transformed wealth management through AI-driven insights, improving client retention by 15% while ensuring 100% regulatory compliance across 50,000+ users.",
    
    // Detailed problem statement
    problem: {
      title: "The Challenge",
      description: "Wealth management firms struggled with static reporting and lacked real-time insights for portfolio optimization and ESG compliance in an increasingly regulated environment.",
      painPoints: [
        "Low client engagement due to static, manual portfolio reporting",
        "Advisors lacked real-time risk and ESG insights for decision-making",
        "Increasing regulatory scrutiny required transparent, compliant analytics",
        "Manual Excel-based processes couldn't scale with business growth",
        "Inconsistent ESG scoring across different data providers",
        "No predictive capabilities for portfolio optimization",
        "Limited transparency in investment decision-making",
        "Difficulty in demonstrating regulatory compliance"
      ]
    },
    
    // Detailed solution
    solution: {
      title: "Strategic Approach",
      description: "Built a comprehensive analytics platform combining portfolio performance, risk assessment, and ESG scoring with regulatory compliance, implemented in three phases over 12 months.",
      phases: [
        {
          name: "Foundation Phase",
          duration: "Months 1-4",
          focus: "Data integration and basic analytics",
          deliverables: [
            "Unified data pipeline for portfolio and market data",
            "Basic portfolio analytics and performance tracking",
            "Initial dashboard prototypes for advisors",
            "Data quality and reconciliation frameworks"
          ]
        },
        {
          name: "Intelligence Phase",
          duration: "Months 5-8",
          focus: "ML models and ESG integration",
          deliverables: [
            "Risk scoring models with ML-based predictions",
            "ESG analytics with transparent methodology",
            "Predictive optimization algorithms",
            "Advanced visualization and reporting tools"
          ]
        },
        {
          name: "Scale Phase",
          duration: "Months 9-12",
          focus: "Production deployment and compliance",
          deliverables: [
            "Production-ready advisor dashboards",
            "Full regulatory compliance implementation",
            "Performance monitoring and alerting",
            "User training and change management"
          ]
        }
      ]
    },
    
    // Key metrics
    impact: {
      retention: "15% improvement",
      compliance: "100%",
      automation: "80%",
      resolution: "35% faster",
      users: "50K+",
      incidents: "40% fewer P1",
      adoption: "90%",
      accuracy: "99.5%"
    },
    
    // Detailed modules
    modules: [
      {
        name: "Portfolio Analytics & Performance",
        description: "Comprehensive performance tracking with risk-adjusted returns, benchmark analysis, and real-time portfolio monitoring.",
        technologies: ["Python", "NumPy", "Financial libraries", "SQL", "Tableau"],
        challenges: [
          "Real-time processing of 50K+ portfolios",
          "Complex financial calculations at scale",
          "Integration with multiple data providers"
        ],
        solutions: [
          "Implemented distributed computing architecture",
          "Built optimized financial calculation engine",
          "Created unified data integration layer"
        ],
        outcomes: [
          "Real-time performance tracking achieved",
          "Automated benchmark analysis",
          "99.5% calculation accuracy maintained"
        ]
      },
      {
        name: "ESG Scoring & Sustainability",
        description: "Integrated ESG analytics with transparent scoring methodology and regulatory reporting aligned with sustainability standards.",
        technologies: ["ESG data feeds", "Python", "Scoring frameworks", "APIs"],
        challenges: [
          "Inconsistent ESG data across providers",
          "Transparent methodology requirements",
          "Regulatory alignment complexity"
        ],
        solutions: [
          "Built multi-provider ESG validation framework",
          "Created transparent scoring methodology",
          "Implemented regulatory compliance checks"
        ],
        outcomes: [
          "Unified ESG scores across all assets",
          "Transparent methodology documentation",
          "100% regulatory alignment achieved"
        ]
      }
    ],
    
    // Technologies
    technologies: [
      "Python", "SQL", "Tableau", "React", "PostgreSQL", "AWS",
      "ML Models", "GDPR", "MiFID II", "Docker", "Kubernetes"
    ],
    
    // Technical challenge
    technicalChallenge: {
      problem: "Ensuring trustworthy AI-driven personalization under strict regulatory constraints while maintaining explainability for advisors and clients",
      details: [
        "Regulatory requirements (GDPR, MiFID II) demanded explainable AI decisions",
        "Multiple conflicting objectives: performance, risk, ESG, and compliance",
        "Real-time processing requirements for 50,000+ portfolios",
        "Data quality issues across multiple ESG and market data providers"
      ],
      approach: [
        "Hybrid Decision Architecture: Combined deterministic compliance rules with ML-based optimization",
        "Explainability by Design: Built SHAP-based explanations into every model decision",
        "Multi-Objective Optimization: Balanced competing objectives with transparent trade-offs",
        "Data Quality Framework: Automated validation and reconciliation across data sources"
      ],
      results: [
        "Achieved 100% regulatory compliance with zero violations",
        "Reduced audit preparation time by 40%",
        "Maintained sub-second response times for complex queries",
        "Enabled transparent decision-making for advisors and clients"
      ]
    },
    
    // Key decisions
    keyDecisions: [
      {
        decision: "Hybrid Rules + ML Architecture",
        rationale: "Regulatory compliance required deterministic rules while optimization benefited from ML capabilities",
        impact: "Achieved both 100% compliance and performance optimization goals simultaneously"
      },
      {
        decision: "Multi-Vendor ESG Integration",
        rationale: "Single ESG provider created vendor risk; multiple sources improved accuracy and reduced bias",
        impact: "Improved ESG scoring accuracy and built client trust through transparent methodology"
      },
      {
        decision: "Self-Service Analytics Approach",
        rationale: "Advisors needed independence from IT for custom analysis and real-time insights",
        impact: "Achieved 90% user adoption and significantly reduced support burden"
      }
    ],
    
    // Lessons learned
    lessonsLearned: [
      "Regulatory compliance must be designed-in, not bolted-on to analytics products",
      "User adoption depends more on workflow integration than technical sophistication",
      "Explainability is a product requirement, not just a technical feature",
      "Change management is as critical as technical implementation for enterprise products",
      "Transparent methodology builds trust more than perfect accuracy"
    ]
  }
};