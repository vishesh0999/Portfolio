import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Experience({ forwardedRef }) {
  const experienceSection = useRef(null);
  const heading = useRef(null);
  const timeline = useRef(null);
  const experiences = useRef([]);

  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      try {
        const ctx = gsap.context(() => {
          // Set initial states only if elements exist
          if (heading.current) {
            gsap.set(heading.current, {
              opacity: 0,
              y: 50
            });
          }

          if (timeline.current) {
            gsap.set(timeline.current, {
              opacity: 0,
              y: 50
            });
          }

          if (experiences.current && experiences.current.length > 0) {
            const validExperiences = experiences.current.filter(el => el !== null && el !== undefined);
            if (validExperiences.length > 0) {
              gsap.set(validExperiences, {
                opacity: 0,
                x: -100
              });
            }
          }

          if (experienceSection.current) {
            const tl = gsap.timeline();
            
            if (heading.current) {
              tl.to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0);
            }
            
            if (timeline.current) {
              tl.to(timeline.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2);
            }
            
            const validExperiences = experiences.current.filter(el => el !== null && el !== undefined);
            if (validExperiences.length > 0) {
              tl.to(validExperiences, { 
                opacity: 1, 
                x: 0, 
                ease: "power4.out", 
                duration: 1.25,
                stagger: 0.3
              }, 0.4);
            }

            ScrollTrigger.create({
              trigger: experienceSection.current,
              start: "top 80%",
              animation: tl,
              toggleActions: "play none none none",
            });
          }
        });

        return () => ctx.revert();
      } catch (error) {
        console.warn('GSAP animation error in Experience component:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const experienceData = [
    {
      role: "AI Product Manager",
      company: "The Home Depot, USA",
      period: "Aug 2024 – Present",
      type: "current",
      achievements: [
        {
          metric: "$3M+",
          description: "incremental revenue by defining product strategy and shipping personalized search and recommendation engine using collaborative filtering and embeddings—improved conversion from 28% to 39% in 6 months across 50M+ annual customers."
        },
        {
          metric: "25%",
          description: "reduction in merchandising decision time for 2,000+ store operations through agentic AI platform with multi-turn conversational interface leveraging autonomous reasoning agents (GPT 4, Claude, Gemini) and RAG architecture."
        },
        {
          metric: "4 months",
          description: "to deliver MVP by leading cross-functional team of 12 (engineering, data science, UX)—defined product vision, authored 30+ PRDs and user stories, aligned stakeholders on OKRs, and managed sprint execution through Agile ceremonies."
        },
        {
          metric: "$500K",
          description: "annual inventory optimization validated through ML-driven promotional pricing across 20+ quarterly tests using experimentation strategy and A/B testing framework with statistical rigor (power analysis, 95% confidence intervals)."
        },
        {
          metric: "98%",
          description: "responsible AI compliance achieved through AI governance framework including bias detection, explainability dashboards (SHAP), and human-in-the-loop validation—reduced model rollback incidents 60%."
        },
        {
          metric: "30%",
          description: "acceleration in feature development across 5 product teams through reusable AI platform components (prompt templates, evaluation frameworks, deployment pipelines) on AWS SageMaker and Vertex AI."
        },
        {
          metric: "15+",
          description: "product KPIs tracked through Power BI dashboards with ML performance metrics (precision, recall, drift) and ROI attribution—used by C-suite for strategic planning."
        },
        {
          metric: "40%",
          description: "improvement in task completion time delivered through user research with 200+ store managers and merchandisers to drive product-market fit—translated insights into prioritized roadmap."
        }
      ]
    },
    {
      role: "Product Manager",
      company: "Accenture, India",
      period: "Sept 2020 – Aug 2023",
      type: "previous",
      achievements: [
        {
          metric: "50,000+",
          description: "users reached with Financial Portfolio Insights Dashboard featuring embedded ML models—improved client retention 15% through automated ESG scoring, personalized risk analytics, and predictive optimization."
        },
        {
          metric: "10%",
          description: "reduction in release delays through proactive cross-functional risk management across data quality, compliance, and integrations while balancing regulatory requirements (GDPR, MiFID II), technical feasibility, and user needs."
        },
        {
          metric: "1,000+",
          description: "customers researched using SurveyMonkey, Qualtrics, and usage analytics to drive feature prioritization—defined backlog for risk scoring, asset allocation, and portfolio rebalancing tools."
        },
        {
          metric: "35%",
          description: "faster incident resolution through post-launch monitoring and rapid response—incorporated learnings into roadmap iterations, reduced P1 incidents 40%."
        },
        {
          metric: "Real-time",
          description: "decision-making enabled for wealth advisors through Tableau dashboards visualizing portfolio performance, benchmark comparisons, and ESG metrics—replaced manual Excel analysis."
        }
      ]
    }
  ];

  return (
    <section 
      ref={(el) => {
        experienceSection.current = el;
        if (forwardedRef) forwardedRef(el);
      }} 
      id="experience" 
      className="my-[10%]" 
      aria-label="professional experience"
    >
      <Heading title="experience" />
      
      <div className="mt-16 relative">
        {/* Timeline Line */}
        <div 
          ref={timeline}
          className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-400 via-accent-300 to-accent-200 rounded-full"
        ></div>

        <div className="space-y-16">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) experiences.current[index] = el;
              }}
              className="relative pl-20 md:pl-32"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-14 top-8 w-5 h-5 rounded-full border-4 ${
                exp.type === 'current' 
                  ? 'bg-accent-400 border-white shadow-lg shadow-accent-400/30' 
                  : 'bg-accent-300 border-white shadow-lg shadow-accent-300/30'
              }`}></div>

              {/* Experience Card */}
              <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl ${
                exp.type === 'current'
                  ? 'bg-white border-2 border-secondary-300 hover:border-secondary-500 shadow-lg'
                  : 'bg-white border-2 border-accent-200 hover:border-accent-400 shadow-lg'
              }`}>
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      exp.type === 'current' ? 'text-accent-400' : 'text-accent-400'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className={`text-xl font-semibold ${
                      exp.type === 'current' ? 'text-accent-300' : 'text-accent-300'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-wide ${
                      exp.type === 'current'
                        ? 'bg-accent-400 text-white shadow-lg'
                        : 'bg-accent-300 text-white shadow-lg'
                    }`}>
                      {exp.type === 'current' && (
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      )}
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div 
                      key={achIndex}
                      className={`group relative p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                        exp.type === 'current'
                          ? 'bg-secondary-50 hover:bg-secondary-100 border-2 border-secondary-200 hover:border-secondary-400'
                          : 'bg-secondary-50 hover:bg-secondary-100 border-2 border-accent-200 hover:border-accent-400'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                          exp.type === 'current'
                            ? 'bg-gradient-to-br from-accent-400 to-accent-300'
                            : 'bg-gradient-to-br from-accent-300 to-accent-200'
                        }`}>
                          {achievement.metric}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm leading-relaxed font-medium ${
                            exp.type === 'current' ? 'text-accent-400' : 'text-accent-400'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        exp.type === 'current'
                          ? 'bg-gradient-to-r from-secondary-600/5 to-secondary-700/5'
                          : 'bg-gradient-to-r from-accent-200/5 to-accent-300/5'
                      }`}></div>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                  exp.type === 'current' ? 'bg-secondary-600' : 'bg-accent-200'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 ${
                  exp.type === 'current' ? 'bg-secondary-600' : 'bg-accent-200'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Timeline Cap */}
        <div className="absolute left-6 md:left-14 bottom-0 w-5 h-5 bg-accent-200 rounded-full border-4 border-white"></div>
      </div>
    </section>
  );
}