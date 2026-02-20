import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Initialize Mermaid with professional styling
mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#f59e0b',
    primaryTextColor: '#1f2937',
    primaryBorderColor: '#d97706',
    lineColor: '#6b7280',
    secondaryColor: '#3b82f6',
    tertiaryColor: '#10b981',
    background: '#ffffff',
    mainBkg: '#f3f4f6',
    secondBkg: '#e5e7eb',
    border1: '#d1d5db',
    border2: '#9ca3af',
    fontSize: '16px',
    fontFamily: 'Space Grotesk, sans-serif'
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
    padding: 20,
    nodeSpacing: 50,
    rankSpacing: 80
  }
});

export function CreditWiseSystemArchitecture() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = `
        graph TB
          subgraph "Data Sources Layer"
            A1[TransUnion API]
            A2[Equifax API]
            A3[Experian API]
            A4[User Input Forms]
            A5[Financial Institutions]
          end

          subgraph "Data Integration & ETL Pipeline"
            B1[API Gateway<br/>Rate Limiting & Auth]
            B2[Data Validation<br/>Schema Enforcement]
            B3[Data Transformation<br/>Normalization]
            B4[Data Quality Checks<br/>Anomaly Detection]
            B5[Data Warehouse<br/>PostgreSQL]
          end

          subgraph "Machine Learning Layer"
            C1[Feature Engineering<br/>Credit Metrics Calculation]
            C2[Collaborative Filtering<br/>User Similarity Model]
            C3[Content-Based Filtering<br/>Profile Matching]
            C4[Reinforcement Learning<br/>Recommendation Optimization]
            C5[NLP Engine<br/>Personalized Communication]
          end

          subgraph "Business Logic & API Layer"
            D1[Recommendation Engine<br/>Priority Scoring]
            D2[Dispute Management<br/>Workflow Automation]
            D3[Payment Automation<br/>Integration Service]
            D4[Credit Simulation<br/>Impact Calculator]
            D5[RESTful API<br/>Django Backend]
          end

          subgraph "Presentation Layer"
            E1[React Web App<br/>Responsive Design]
            E2[Mobile App<br/>iOS & Android]
            E3[Dashboard Analytics<br/>D3.js Visualizations]
            E4[Notification Service<br/>Push & Email]
          end

          subgraph "Infrastructure & Security"
            F1[AWS EC2<br/>Auto-Scaling]
            F2[Redis Cache<br/>Session Management]
            F3[MongoDB<br/>Document Store]
            F4[CloudWatch<br/>Monitoring & Alerts]
            F5[OAuth 2.0<br/>Authentication]
          end

          A1 --> B1
          A2 --> B1
          A3 --> B1
          A4 --> B1
          A5 --> B1

          B1 --> B2
          B2 --> B3
          B3 --> B4
          B4 --> B5

          B5 --> C1
          C1 --> C2
          C1 --> C3
          C2 --> C4
          C3 --> C4
          C4 --> C5

          C4 --> D1
          C5 --> D1
          D1 --> D2
          D1 --> D3
          D1 --> D4
          D2 --> D5
          D3 --> D5
          D4 --> D5

          D5 --> E1
          D5 --> E2
          D5 --> E3
          D5 --> E4

          F1 -.-> B1
          F2 -.-> D5
          F3 -.-> D5
          F4 -.-> B1
          F5 -.-> D5

          style A1 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A2 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A3 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A4 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A5 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff

          style B1 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B2 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B3 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B4 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B5 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff

          style C1 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C2 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C3 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C4 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C5 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff

          style D1 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D2 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D3 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D4 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D5 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff

          style E1 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E2 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E3 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E4 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff

          style F1 fill:#6b7280,stroke:#374151,stroke-width:2px,color:#fff
          style F2 fill:#6b7280,stroke:#374151,stroke-width:2px,color:#fff
          style F3 fill:#6b7280,stroke:#374151,stroke-width:2px,color:#fff
          style F4 fill:#6b7280,stroke:#374151,stroke-width:2px,color:#fff
          style F5 fill:#6b7280,stroke:#374151,stroke-width:2px,color:#fff
      `;
      
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="mermaid-container bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-300">
      <div ref={chartRef} className="mermaid"></div>
    </div>
  );
}

export function CreditWiseUserJourney() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = `
        graph LR
          subgraph "Phase 1: Onboarding & Assessment"
            A1[User Registration<br/>Email & OAuth]
            A2[Credit Bureau<br/>Connection]
            A3[Data Pull<br/>3 Bureaus]
            A4[Profile Setup<br/>Financial Goals]
            A5[Baseline Analysis<br/>Score Calculation]
          end

          subgraph "Phase 2: AI Analysis & Planning"
            B1[Error Detection<br/>ML Algorithm]
            B2[Factor Analysis<br/>Payment, Utilization, etc.]
            B3[Persona Classification<br/>Fresh/Rebuilder/Optimizer]
            B4[Priority Ranking<br/>Impact-to-Effort Ratio]
            B5[Roadmap Generation<br/>Personalized Plan]
          end

          subgraph "Phase 3: Action Execution"
            C1[Dispute Filing<br/>Automated Templates]
            C2[Payment Automation<br/>Bank Integration]
            C3[Utilization Optimization<br/>Strategic Timing]
            C4[Credit Mix Strategy<br/>Product Recommendations]
            C5[Progress Tracking<br/>Real-time Updates]
          end

          subgraph "Phase 4: Monitoring & Optimization"
            D1[Score Monitoring<br/>Daily Checks]
            D2[Anomaly Detection<br/>Alert System]
            D3[Impact Assessment<br/>Action Correlation]
            D4[Strategy Refinement<br/>ML Feedback Loop]
            D5[Milestone Celebration<br/>Gamification]
          end

          subgraph "Phase 5: Maintenance & Growth"
            E1[Credit Protection<br/>Fraud Alerts]
            E2[Advanced Optimization<br/>Fine-tuning]
            E3[Financial Planning<br/>Major Purchases]
            E4[Community Engagement<br/>Knowledge Sharing]
            E5[Continuous Learning<br/>AI Improvement]
          end

          A1 --> A2
          A2 --> A3
          A3 --> A4
          A4 --> A5

          A5 --> B1
          B1 --> B2
          B2 --> B3
          B3 --> B4
          B4 --> B5

          B5 --> C1
          B5 --> C2
          B5 --> C3
          B5 --> C4
          C1 --> C5
          C2 --> C5
          C3 --> C5
          C4 --> C5

          C5 --> D1
          D1 --> D2
          D2 --> D3
          D3 --> D4
          D4 --> D5

          D5 --> E1
          D5 --> E2
          D5 --> E3
          D5 --> E4
          E1 --> E5
          E2 --> E5
          E3 --> E5
          E4 --> E5

          E5 -.->|Continuous<br/>Improvement| B1

          style A1 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A2 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A3 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A4 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A5 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff

          style B1 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B2 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B3 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B4 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B5 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff

          style C1 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C2 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C3 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C4 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C5 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff

          style D1 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D2 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D3 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D4 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D5 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff

          style E1 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E2 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E3 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E4 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E5 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
      `;
      
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="mermaid-container bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-300">
      <div ref={chartRef} className="mermaid"></div>
    </div>
  );
}

export function CreditWiseMLPipeline() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = `
        graph TD
          subgraph "Data Collection"
            A1[Credit Bureau APIs<br/>TransUnion, Equifax, Experian]
            A2[User Behavioral Data<br/>App Interactions]
            A3[Financial Transaction Data<br/>Payment History]
            A4[External Data Sources<br/>Market Trends]
          end

          subgraph "Feature Engineering"
            B1[Credit Score Factors<br/>Payment, Utilization, History]
            B2[Behavioral Features<br/>Engagement Patterns]
            B3[Temporal Features<br/>Time-series Analysis]
            B4[Derived Metrics<br/>Custom Calculations]
            B5[Feature Store<br/>Redis Cache]
          end

          subgraph "Model Training"
            C1[Collaborative Filtering<br/>User Similarity Matrix]
            C2[Content-Based Filtering<br/>Profile Matching]
            C3[Reinforcement Learning<br/>Q-Learning Algorithm]
            C4[NLP Models<br/>BERT for Communication]
            C5[Ensemble Model<br/>Weighted Combination]
          end

          subgraph "Model Evaluation"
            D1[A/B Testing Framework<br/>Statistical Significance]
            D2[Performance Metrics<br/>Precision, Recall, F1]
            D3[Business Metrics<br/>Score Improvement, Engagement]
            D4[Model Explainability<br/>SHAP Values]
            D5[Bias Detection<br/>Fairness Analysis]
          end

          subgraph "Deployment & Monitoring"
            E1[Model Registry<br/>MLflow]
            E2[Serving Infrastructure<br/>TensorFlow Serving]
            E3[Real-time Inference<br/>Sub-100ms Latency]
            E4[Model Monitoring<br/>Drift Detection]
            E5[Continuous Retraining<br/>Automated Pipeline]
          end

          A1 --> B1
          A2 --> B2
          A3 --> B3
          A4 --> B4
          B1 --> B5
          B2 --> B5
          B3 --> B5
          B4 --> B5

          B5 --> C1
          B5 --> C2
          B5 --> C3
          B5 --> C4
          C1 --> C5
          C2 --> C5
          C3 --> C5
          C4 --> C5

          C5 --> D1
          D1 --> D2
          D2 --> D3
          D3 --> D4
          D4 --> D5

          D5 --> E1
          E1 --> E2
          E2 --> E3
          E3 --> E4
          E4 --> E5

          E5 -.->|Feedback Loop| B1

          style A1 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A2 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A3 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style A4 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff

          style B1 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B2 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B3 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B4 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B5 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff

          style C1 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C2 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C3 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C4 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style C5 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff

          style D1 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D2 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D3 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D4 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D5 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff

          style E1 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E2 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E3 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E4 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style E5 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
      `;
      
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="mermaid-container bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-300">
      <div ref={chartRef} className="mermaid"></div>
    </div>
  );
}

export function UberEatsEcosystemFlow() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = `
        graph TB
          subgraph "Customer Touchpoints"
            A1[Uber Rides App<br/>40M Daily Rides]
            A2[Uber Eats App<br/>Food Ordering]
            A3[Web Platform<br/>Desktop Orders]
            A4[Voice Assistants<br/>Alexa, Google]
          end

          subgraph "Driver Fairness Shield"
            B1[AI Tip Predictor<br/>Customer History Analysis]
            B2[Trust Badge System<br/>Reliable Customer Scoring]
            B3[Guaranteed Earnings<br/>Minimum Payment Promise]
            B4[Tip Lock Timer<br/>60-Minute Protection]
            B5[Transparent Receipt<br/>Earnings Breakdown]
          end

          subgraph "Perfect Timing Engine"
            C1[Restaurant Ready Predictor<br/>ML-based Prep Time]
            C2[Smart Driver Positioning<br/>Predictive Analytics]
            C3[Multi-Order Optimizer<br/>Route Intelligence]
            C4[Real-time Traffic<br/>GPS Integration]
            C5[Delivery Time Reduction<br/>38min → 30min]
          end

          subgraph "Ecosystem Integration"
            D1[Ride-to-Dinner<br/>Post-Ride Offers]
            D2[AI Shopping Assistant<br/>Predictive Ordering]
            D3[Uber One Complete<br/>$19.99 Super Bundle]
            D4[Multi-Category<br/>Food, Grocery, Pharmacy]
            D5[Cross-Platform Sync<br/>Unified Experience]
          end

          subgraph "Backend Infrastructure"
            E1[Order Management<br/>Real-time Processing]
            E2[Driver Dispatch<br/>Intelligent Matching]
            E3[Payment Processing<br/>Secure Transactions]
            E4[Analytics Engine<br/>Business Intelligence]
            E5[Notification Service<br/>Push & SMS]
          end

          subgraph "Data & ML Layer"
            F1[Customer Behavior<br/>Predictive Models]
            F2[Driver Performance<br/>Optimization Algorithms]
            F3[Restaurant Analytics<br/>Prep Time Learning]
            F4[Demand Forecasting<br/>Time-series Analysis]
            F5[Pricing Engine<br/>Dynamic Optimization]
          end

          A1 --> D1
          A2 --> E1
          A3 --> E1
          A4 --> E1

          E1 --> B1
          B1 --> B2
          B2 --> B3
          B3 --> B4
          B4 --> B5

          E1 --> C1
          C1 --> C2
          C2 --> C3
          C3 --> C4
          C4 --> C5

          E1 --> D2
          D1 --> D3
          D2 --> D3
          D3 --> D4
          D4 --> D5

          B5 --> E2
          C5 --> E2
          D5 --> E2

          E2 --> E3
          E3 --> E4
          E4 --> E5

          E1 --> F1
          E2 --> F2
          C1 --> F3
          E4 --> F4
          E3 --> F5

          F1 -.->|Feedback| D2
          F2 -.->|Feedback| B1
          F3 -.->|Feedback| C1
          F4 -.->|Feedback| C2
          F5 -.->|Feedback| E3

          style A1 fill:#000000,stroke:#000000,stroke-width:3px,color:#fff
          style A2 fill:#000000,stroke:#000000,stroke-width:3px,color:#fff
          style A3 fill:#000000,stroke:#000000,stroke-width:3px,color:#fff
          style A4 fill:#000000,stroke:#000000,stroke-width:3px,color:#fff

          style B1 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B2 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B3 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B4 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff
          style B5 fill:#10b981,stroke:#047857,stroke-width:3px,color:#fff

          style C1 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style C2 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style C3 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style C4 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
          style C5 fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff

          style D1 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D2 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D3 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D4 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff
          style D5 fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px,color:#fff

          style E1 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style E2 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style E3 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style E4 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
          style E5 fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff

          style F1 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style F2 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style F3 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style F4 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
          style F5 fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#fff
      `;
      
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="mermaid-container bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-300">
      <div ref={chartRef} className="mermaid"></div>
    </div>
  );
}

export function UberEatsDeliveryOptimization() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = `
        sequenceDiagram
          participant C as Customer
          participant A as Uber Eats App
          participant AI as AI Engine
          participant R as Restaurant
          participant D as Driver
          participant P as Payment System

          Note over C,P: Order Placement & Processing
          C->>A: Place Order
          A->>AI: Analyze Order Details
          AI->>AI: Calculate Prep Time<br/>(ML Model)
          AI->>AI: Find Optimal Driver<br/>(Location + Rating)
          
          Note over AI,R: Restaurant Coordination
          AI->>R: Send Order
          R->>R: Start Preparation
          AI->>AI: Monitor Prep Progress<br/>(Real-time Updates)
          
          Note over AI,D: Smart Driver Dispatch
          AI->>AI: Calculate Optimal<br/>Dispatch Time
          AI->>D: Assign Order<br/>(Guaranteed Earnings)
          D->>D: Review Order Details<br/>(Trust Badge Visible)
          D->>A: Accept Order
          
          Note over D,R: Pickup Optimization
          AI->>D: Navigate to Restaurant<br/>(Traffic-aware Route)
          D->>R: Arrive at Restaurant
          R->>D: Hand Over Order<br/>(Food Ready)
          
          Note over D,C: Delivery Execution
          AI->>D: Optimal Delivery Route<br/>(Multi-order if applicable)
          D->>C: Deliver Order
          C->>A: Confirm Delivery
          
          Note over C,P: Payment & Feedback
          A->>P: Process Payment
          P->>D: Transfer Earnings<br/>(Transparent Breakdown)
          C->>A: Rate & Tip
          A->>AI: Update ML Models<br/>(Feedback Loop)
          
          Note over AI: Continuous Learning
          AI->>AI: Analyze Performance<br/>Update Predictions
      `;
      
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="mermaid-container bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-300">
      <div ref={chartRef} className="mermaid"></div>
    </div>
  );
}
