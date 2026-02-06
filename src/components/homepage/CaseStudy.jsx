import { Link } from "react-router-dom";
import Heading from "../ui/Heading";

const caseStudies = [
  {
    id: 1,
    slug: "ai-personalization-platform",
    title: "AI-Driven Personalization & Agentic Decision Platform",
    subtitle: "Transforming E-commerce Through Intelligent Automation",
    type: "AI Product Strategy • ML Product Management",
    year: "2024",
    tools: ["GPT-4", "Claude", "Gemini", "AWS SageMaker", "Vertex AI", "Python", "TensorFlow"],
    image: "/vishesh/Case1.jpg.jpeg",
    featured: true
  },
  {
    id: 2,
    slug: "financial-portfolio-platform",
    title: "Financial Portfolio Insights & ESG Analytics Platform", 
    subtitle: "Revolutionizing Wealth Management Through Data Intelligence",
    type: "Data Product • Business Intelligence • RegTech",
    year: "2023",
    tools: ["Python", "SQL", "Tableau", "React", "ML Models", "GDPR", "MiFID II"],
    image: "/vishesh/Case2.jpeg",
    featured: true
  }
];

export default function CaseStudy({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="case-studies"
      className="overflow-hidden my-[10%]"
      aria-label="case studies"
    >
      <Heading title="Case Studies" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={caseStudy.id} className="col-span-1">
            <Link to={`/case-studies/${caseStudy.slug}`}>
              <CaseStudyCard caseStudy={caseStudy} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudyCard({ caseStudy }) {
  return (
    <div className="group">
      <div className="img overflow-hidden rounded-2xl duration-200 ease-linear mb-4">
        <img
          className="w-full object-contain duration-700 ease-in-out group-hover:scale-105 rounded-2xl"
          src={caseStudy.image}
          alt={caseStudy.title}
          width="400"
          height="256"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-3 py-1 text-secondary-600 text-xs">
            {caseStudy.year}
          </p>
          <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-3 py-1 text-secondary-600 text-xs">
            {caseStudy.tools.slice(0, 2).join(" • ")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium uppercase text-primary-200 leading-tight">
            {caseStudy.title}
          </h3>
          <p className="text-sm font-light text-primary-400">
            {caseStudy.type}
          </p>
        </div>
      </div>
    </div>
  );
}