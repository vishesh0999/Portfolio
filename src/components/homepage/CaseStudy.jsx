import { Link } from "react-router-dom";
import Heading from "../ui/Heading";

const caseStudies = [
  {
    id: 1,
    slug: "creditwise-score-roadmap",
    title: "CreditWise Score Roadmap",
    subtitle: "Empowering Financial Health",
    impact: "Drove 40% increase in user engagement through data-driven credit improvement features",
    type: "FinTech • Data Product • ML Product Management",
    year: "2026",
    company: "Capital One",
    tools: ["Python", "TensorFlow", "React", "PostgreSQL", "ML", "Data Analytics"],
    image: "/Capitalone.jpeg",
    featured: true
  },
  {
    id: 2,
    slug: "uber-eats-strategy",
    title: "Uber Eats Product Strategy",
    subtitle: "Winning the Food Delivery War",
    impact: "Strategic roadmap to close 15% market share gap with DoorDash through AI-powered operations",
    type: "Product Strategy • AI/ML • Operations",
    year: "2026",
    company: "Uber",
    tools: ["Python", "TensorFlow", "Machine Learning", "Redis", "Kafka", "React Native"],
    image: "/UberCase.jpeg",
    featured: true
  },
  {
    id: 3,
    slug: "youtube-music-growth-strategy",
    title: "YouTube Music Growth",
    subtitle: "Path to Market Leadership",
    impact: "Designed ecosystem-driven strategy to capture 20% more market share from Spotify",
    type: "Product Strategy • Market Growth",
    year: "2026",
    company: "Google",
    tools: ["Gemini AI", "Android", "Google Cloud", "A/B Testing", "Market Research", "Analytics"],
    image: "/Youtube.jpeg",
    featured: true
  },
  {
    id: 4,
    slug: "spotify-discovery-platform",
    title: "Spotify Discovery Revolution",
    subtitle: "Breaking the Echo Chamber",
    impact: "Solved music discovery staleness with user-controlled personalization, boosting retention 25%",
    type: "Consumer Product • Algorithmic Systems",
    year: "2026",
    company: "Spotify",
    tools: ["BaRT Algorithm", "Python", "TensorFlow", "Redis", "A/B Testing", "React", "ML"],
    image: "/Sportify.jpeg",
    featured: true
  },
  {
    id: 5,
    slug: "ai-personalization-platform",
    title: "AI Personalization Platform",
    subtitle: "Intelligent E-commerce Automation",
    impact: "Built agentic decision platform serving 470K+ users with 40% hallucination reduction",
    type: "AI Product Strategy • ML Product Management",
    year: "2024",
    company: "The Home Depot",
    tools: ["GPT-4", "Claude", "Gemini", "AWS SageMaker", "Vertex AI", "Python", "TensorFlow"],
    image: "/Case1.jpg.jpeg",
    featured: true
  },
  {
    id: 6,
    slug: "financial-portfolio-platform",
    title: "Financial Portfolio Analytics",
    subtitle: "ESG & Wealth Management Intelligence",
    impact: "Revolutionized wealth management with data intelligence platform for institutional clients",
    type: "Data Product • Business Intelligence",
    year: "2023",
    company: "Financial Services",
    tools: ["Python", "SQL", "Tableau", "React", "ML Models", "GDPR", "MiFID II"],
    image: "/Case2.jpeg",
    featured: true
  }
];

export default function CaseStudy({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="case-studies"
      className="relative my-[10%] py-10"
      aria-label="case studies"
    >
      <div className="px-4 md:px-8 lg:px-12">
        <Heading title="Case Studies" />
        
        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} to={`/case-studies/${caseStudy.slug}`}>
              <CaseStudyCard caseStudy={caseStudy} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ caseStudy }) {
  return (
    <div className="group h-full transition-all duration-300 hover:scale-[1.02]">
      <div className="img overflow-hidden rounded-2xl duration-200 ease-linear mb-5 aspect-[16/9] bg-gray-900/70 flex items-center justify-center relative border border-white/10">
        <img
          className="w-full h-full object-contain duration-700 ease-in-out group-hover:scale-105"
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
          onError={(e) => {
            console.error('Image failed to load:', caseStudy.image);
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-accent-400 px-4 py-2 text-white text-sm font-bold shadow-lg">
            {caseStudy.year}
          </span>
          <span className="rounded-full bg-blue-500/20 border-2 border-blue-400/50 px-4 py-2 text-blue-300 text-sm font-bold shadow-lg">
            {caseStudy.tools[0]}
          </span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight font-orbitron group-hover:text-blue-300 transition-colors drop-shadow-md">
            {caseStudy.title}
          </h3>
          <p className="text-base md:text-lg font-semibold text-gray-300">
            {caseStudy.subtitle}
          </p>
          
          {/* Impact Statement */}
          <div className="pt-3 border-t border-white/20">
            <p className="text-base text-gray-200 font-semibold italic">
              💡 {caseStudy.impact}
            </p>
          </div>
          
          <p className="text-sm md:text-base text-gray-400 pt-1 font-medium">
            {caseStudy.type}
          </p>
        </div>
      </div>
    </div>
  );
}