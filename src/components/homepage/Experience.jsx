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
          metric: "22%",
          description: "improvement in operational efficiency across core workflows by owning enterprise SaaS product roadmap and delivery strategy for digital transformation platform."
        },
        {
          metric: "95%",
          description: "on-time delivery achieved by managing and prioritizing a 300+ item backlog using Jira while leading cross-functional Agile teams."
        },
        {
          metric: "30%",
          description: "reduction in requirement clarification cycles through authoring detailed PRDs, release documentation, and decision logs in Confluence."
        },
        {
          metric: "15+",
          description: "manual workflow steps eliminated and 28% reduction in fulfillment cycle time through discovery workshops and process mapping initiatives."
        },
        {
          metric: "25%",
          description: "improvement in internal user task completion speed by collaborating with UX teams to validate wireframes and interaction designs."
        },
        {
          metric: "18%",
          description: "increase in platform adoption within six months by leveraging SQL and analytics dashboards for data-informed feature prioritization."
        },
        {
          metric: "20%",
          description: "reduction in integration defects by partnering with engineering teams to define API integration requirements and reviewing Swagger specifications."
        },
        {
          metric: "Executive",
          description: "KPI dashboards built using Tableau to provide leadership visibility into delivery progress and business impact, enabling smooth phased deployments."
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
      
      <div className="mt-10 md:mt-16 relative">
        {/* Timeline Line */}
        <div 
          ref={timeline}
          className="absolute left-4 sm:left-6 md:left-16 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-accent-400 via-accent-300 to-accent-200 rounded-full"
        ></div>

        <div className="space-y-8 md:space-y-16">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) experiences.current[index] = el;
              }}
              className="relative pl-10 sm:pl-16 md:pl-32 pr-2 sm:pr-4"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-2.5 sm:left-4 md:left-14 top-4 sm:top-6 md:top-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-2 sm:border-3 md:border-4 ${
                exp.type === 'current' 
                  ? 'bg-accent-400 border-white shadow-lg shadow-accent-400/30' 
                  : 'bg-accent-300 border-white shadow-lg shadow-accent-300/30'
              }`}></div>

              {/* Experience Card */}
              <div className={`relative rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl ${
                exp.type === 'current'
                  ? 'bg-white border-2 border-secondary-300 hover:border-secondary-500 shadow-lg'
                  : 'bg-white border-2 border-accent-200 hover:border-accent-400 shadow-lg'
              }`}>
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8">
                  <div>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${
                      exp.type === 'current' ? 'text-accent-400' : 'text-accent-400'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className={`text-base sm:text-lg md:text-xl font-semibold ${
                      exp.type === 'current' ? 'text-accent-300' : 'text-accent-300'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-3 lg:mt-0">
                    <span className={`inline-flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide ${
                      exp.type === 'current'
                        ? 'bg-accent-400 text-white shadow-lg'
                        : 'bg-accent-300 text-white shadow-lg'
                    }`}>
                      {exp.type === 'current' && (
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                      )}
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div 
                      key={achIndex}
                      className={`group relative p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 ${
                        exp.type === 'current'
                          ? 'bg-secondary-50 hover:bg-secondary-100 border-2 border-secondary-200 hover:border-secondary-400'
                          : 'bg-secondary-50 hover:bg-secondary-100 border-2 border-accent-200 hover:border-accent-400'
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg ${
                          exp.type === 'current'
                            ? 'bg-gradient-to-br from-accent-400 to-accent-300'
                            : 'bg-gradient-to-br from-accent-300 to-accent-200'
                        }`}>
                          <span className="text-center px-1">{achievement.metric}</span>
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs sm:text-sm leading-relaxed font-medium ${
                            exp.type === 'current' ? 'text-accent-400' : 'text-accent-400'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        exp.type === 'current'
                          ? 'bg-gradient-to-r from-secondary-600/5 to-secondary-700/5'
                          : 'bg-gradient-to-r from-accent-200/5 to-accent-300/5'
                      }`}></div>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements - Hidden on mobile */}
                <div className={`hidden md:block absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                  exp.type === 'current' ? 'bg-secondary-600' : 'bg-accent-200'
                }`}></div>
                <div className={`hidden md:block absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 ${
                  exp.type === 'current' ? 'bg-secondary-600' : 'bg-accent-200'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Timeline Cap */}
        <div className="absolute left-2.5 sm:left-4 md:left-14 bottom-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-accent-200 rounded-full border-2 sm:border-3 md:border-4 border-white"></div>
      </div>
    </section>
  );
}