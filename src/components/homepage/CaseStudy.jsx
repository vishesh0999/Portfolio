import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Heading from "../ui/Heading";

const caseStudies = [
  {
    id: 1,
    slug: "youtube-music-growth-strategy",
    title: "Growing YouTube Music: A Strategic Path to Market Leadership",
    subtitle: "Closing the Gap with Spotify Through Innovation & Ecosystem Leverage",
    type: "Product Strategy • Market Growth • Competitive Analysis",
    year: "2026",
    tools: ["Gemini AI", "Android", "Google Cloud", "A/B Testing", "Market Research", "Analytics"],
    image: "/Youtube.jpeg",
    featured: true
  },
  {
    id: 2,
    slug: "spotify-discovery-platform",
    title: "Breaking the Echo Chamber: Spotify's Music Discovery Revolution",
    subtitle: "Solving Music Discovery Staleness Through User-Controlled Personalization",
    type: "Consumer Product • Algorithmic Systems • UX Innovation",
    year: "2026",
    tools: ["BaRT Algorithm", "Python", "TensorFlow", "Redis", "A/B Testing", "React", "ML"],
    image: "/Sportify.jpeg",
    featured: true
  },
  {
    id: 3,
    slug: "ai-personalization-platform",
    title: "AI-Driven Personalization & Agentic Decision Platform",
    subtitle: "Transforming E-commerce Through Intelligent Automation",
    type: "AI Product Strategy • ML Product Management",
    year: "2024",
    tools: ["GPT-4", "Claude", "Gemini", "AWS SageMaker", "Vertex AI", "Python", "TensorFlow"],
    image: "/Case1.jpg.jpeg",
    featured: true
  },
  {
    id: 4,
    slug: "financial-portfolio-platform",
    title: "Financial Portfolio Insights & ESG Analytics Platform", 
    subtitle: "Revolutionizing Wealth Management Through Data Intelligence",
    type: "Data Product • Business Intelligence • RegTech",
    year: "2023",
    tools: ["Python", "SQL", "Tableau", "React", "ML Models", "GDPR", "MiFID II"],
    image: "/Case2.jpeg",
    featured: true
  }
];

export default function CaseStudy({ forwardedRef }) {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (!container || !scrollContainer) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = window.innerWidth;
      
      // Add padding to ensure last card scrolls fully into view
      const padding = containerWidth * 0.1; // 10% padding
      const maxScroll = scrollWidth - containerWidth + padding;

      // When section reaches top of viewport, start horizontal scroll
      if (containerRect.top <= 0 && containerRect.bottom > window.innerHeight) {
        // Calculate how far we've scrolled into this section
        const scrollProgress = -containerRect.top;
        const totalScrollDistance = containerRect.height - window.innerHeight;
        const scrollPercentage = Math.max(0, Math.min(1, scrollProgress / totalScrollDistance));
        
        // Apply horizontal translation
        const translateX = scrollPercentage * maxScroll;
        scrollContainer.style.transform = `translateX(-${translateX}px)`;
      } else if (containerRect.top > 0) {
        // Reset when scrolling back up
        scrollContainer.style.transform = 'translateX(0px)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={(node) => {
        containerRef.current = node;
        if (forwardedRef) {
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else {
            forwardedRef.current = node;
          }
        }
      }}
      id="case-studies"
      className="relative my-[10%]"
      style={{ height: '400vh' }}
      aria-label="case studies"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mb-8 px-4 md:px-8 lg:px-12">
          <Heading title="Case Studies" />
        </div>
        <div className="overflow-hidden pl-4 md:pl-8 lg:pl-12">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 will-change-transform pr-4 md:pr-8 lg:pr-12"
            style={{ width: 'max-content' }}
          >
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="w-[80vw] md:w-[55vw] lg:w-[38vw] flex-shrink-0">
                <Link to={`/case-studies/${caseStudy.slug}`}>
                  <CaseStudyCard caseStudy={caseStudy} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ caseStudy }) {
  return (
    <div className="group h-full">
      <div className="img overflow-hidden rounded-2xl duration-200 ease-linear mb-5 aspect-[16/9] bg-gray-900/50">
        <img
          className="w-full h-full object-contain duration-700 ease-in-out group-hover:scale-105"
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <p className="rounded-full bg-transparent border border-black flex justify-center items-center px-3 py-1.5 text-black text-xs font-medium">
            {caseStudy.year}
          </p>
          <p className="rounded-full bg-transparent border border-black flex justify-center items-center px-3 py-1.5 text-black text-xs font-medium">
            {caseStudy.tools.slice(0, 2).join(" • ")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium uppercase text-black leading-tight">
            {caseStudy.title}
          </h3>
          <p className="text-sm md:text-base font-light text-black/80">
            {caseStudy.type}
          </p>
        </div>
      </div>
    </div>
  );
}