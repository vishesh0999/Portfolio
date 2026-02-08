import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import { detailedCaseStudyData } from "../data/caseStudyData";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyPage() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const navigate = useNavigate();
  
  const caseStudy = detailedCaseStudyData[slug];
  
  const handleBackToPortfolio = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const caseStudiesSection = document.getElementById('case-studies');
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-100">
        <div className="text-center">
          <h1 className="text-4xl font-grotesk font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-accent-400 hover:underline font-grotesk">Return Home</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo(".hero-content", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      
      gsap.fromTo(".metrics-card",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out"
        }
      );

      // Animate sections on scroll
      gsap.utils.toArray(".animate-section").forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} - Case Study</title>
        <meta name="description" content={caseStudy.overview} />
      </Helmet>
      
      <div ref={pageRef} className="min-h-screen bg-secondary-100">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link to="/" className="font-grotesk font-bold text-xl text-gray-900">
              VP
            </Link>
            <button 
              onClick={handleBackToPortfolio}
              className="text-gray-600 hover:text-gray-900 font-grotesk font-medium transition-colors cursor-pointer"
            >
              ← Back to Case Studies
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-5 relative">
            <div className="hero-content text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent-400 text-white mb-6 shadow-lg">
                <span className="font-grotesk font-medium">{caseStudy.company}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold text-gray-900 mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 font-grotesk">
                {caseStudy.subtitle}
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* Case Study Thumbnail and Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left - Thumbnail Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200 max-w-xl w-full">
                  <img 
                    src={caseStudy.heroImage} 
                    alt={`${caseStudy.title} thumbnail`}
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      console.error('Hero image failed to load:', caseStudy.heroImage);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Right - Action Buttons */}
              <div className="flex flex-col justify-center items-center space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                  {/* Case Study Presentation Button */}
                  {caseStudy.presentationLink ? (
                    <a 
                      href={caseStudy.presentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-4 bg-accent-400 text-white rounded-xl font-grotesk font-bold hover:bg-accent-500 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0V4a1 1 0 011-1h6a1 1 0 011 1v3M7 7h10" />
                      </svg>
                      Case Study Presentation
                    </a>
                  ) : (
                    <button className="flex items-center justify-center px-6 py-4 bg-gray-300 text-gray-500 rounded-xl font-grotesk font-bold cursor-not-allowed shadow-lg" disabled>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0V4a1 1 0 011-1h6a1 1 0 011 1v3M7 7h10" />
                      </svg>
                      Case Study Presentation
                    </button>
                  )}

                  {/* Case Study File Button */}
                  {caseStudy.caseStudyFileLink ? (
                    <a 
                      href={caseStudy.caseStudyFileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-4 bg-gray-700 text-white rounded-xl font-grotesk font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Case Study File
                    </a>
                  ) : (
                    <button className="flex items-center justify-center px-6 py-4 bg-gray-300 text-gray-500 rounded-xl font-grotesk font-bold cursor-not-allowed shadow-lg" disabled>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Case Study File
                    </button>
                  )}
                </div>

                {/* GitHub Repo Button */}
                {caseStudy.githubLink ? (
                  <a 
                    href={caseStudy.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-grotesk font-bold hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 w-full max-w-md"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View GitHub Repository
                  </a>
                ) : (
                  <button className="flex items-center justify-center px-8 py-4 bg-gray-300 text-gray-500 rounded-xl font-grotesk font-bold cursor-not-allowed shadow-lg w-full max-w-md" disabled>
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View GitHub Repository
                  </button>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-2xl md:text-3xl font-grotesk font-bold text-gray-900 mb-2">
                  {caseStudy.duration}
                </div>
                <div className="text-gray-600 font-grotesk">Duration</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-2xl md:text-3xl font-grotesk font-bold text-gray-900 mb-2">
                  {caseStudy.team.split(' ')[0]}
                </div>
                <div className="text-gray-600 font-grotesk">Team Size</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-2xl md:text-3xl font-grotesk font-bold text-gray-900 mb-2">
                  {caseStudy.role.split(' ')[0]}
                </div>
                <div className="text-gray-600 font-grotesk">Role</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-2xl md:text-3xl font-grotesk font-bold text-gray-900 mb-2">
                  {caseStudy.status.split(' ')[0]}
                </div>
                <div className="text-gray-600 font-grotesk">Status</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
                Impact & Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable outcomes that transformed the business and user experience
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(caseStudy.impact).map(([key, value], index) => (
                <div key={key} className="metrics-card bg-secondary-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="text-3xl md:text-4xl font-grotesk font-bold text-gray-900 mb-3">
                    {value}
                  </div>
                  <div className="text-gray-600 font-grotesk capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Problem Statement */}
        <section className="py-20 bg-secondary-200 animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {caseStudy.problem.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {caseStudy.problem.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.problem.painPoints.map((point, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-400">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-sm mr-4 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 font-medium">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Approach */}
        <section className="py-20 bg-secondary-100 animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {caseStudy.solution.title}
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {caseStudy.solution.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.solution.phases.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-grotesk font-bold text-gray-900 text-xl">{phase.name}</h3>
                      <p className="text-gray-600 text-sm">{phase.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 font-medium">{phase.focus}</p>
                  <ul className="space-y-3">
                    {phase.deliverables.map((deliverable, dIndex) => (
                      <li key={dIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        {caseStudy.modules && caseStudy.modules.length > 0 && (
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Technical Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Deep dive into the technical implementation and key modules
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudy.modules.map((module, index) => (
                <div key={index} className="bg-secondary-100 rounded-3xl p-8 md:p-12 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-grotesk font-bold text-gray-900">{module.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{module.description}</p>
                      
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-grotesk font-bold text-gray-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {module.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white rounded-full text-sm font-grotesk text-gray-700 shadow-sm border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {/* Challenges */}
                      <div>
                        <h4 className="font-grotesk font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {module.challenges.map((challenge, cIndex) => (
                            <li key={cIndex} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Solutions */}
                      <div>
                        <h4 className="font-grotesk font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Solutions
                        </h4>
                        <ul className="space-y-2">
                          {module.solutions.map((solution, sIndex) => (
                            <li key={sIndex} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Outcomes */}
                      <div>
                        <h4 className="font-grotesk font-bold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {module.outcomes.map((outcome, oIndex) => (
                            <li key={oIndex} className="flex items-start text-sm text-gray-800 font-medium">
                              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}
        
        {/* Technical Challenge */}
        {caseStudy.technicalChallenge && (
        <section className="py-20 bg-secondary-200 animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Technical Challenge & Solution
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {caseStudy.technicalChallenge.problem}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Problem Details */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3 className="font-grotesk font-bold text-gray-900 mb-6 text-xl flex items-center">
                    <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Specific Challenges
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.technicalChallenge.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-xs mr-3 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Solution Approach */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3 className="font-grotesk font-bold text-gray-900 mb-6 text-xl flex items-center">
                    <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Solution Approach
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.technicalChallenge.approach.map((approach, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-xs mr-3 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Results */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3 className="font-grotesk font-bold text-gray-900 mb-6 text-xl flex items-center">
                    <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Results Achieved
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.technicalChallenge.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-xs mr-3 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-800 text-sm font-medium leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
        
        {/* Key Decisions */}
        {caseStudy.keyDecisions && caseStudy.keyDecisions.length > 0 && (
        <section className="py-20 bg-secondary-100 animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Product Decisions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Strategic decisions that shaped the product's success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.keyDecisions.map((decision, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-lg mb-6">
                    {index + 1}
                  </div>
                  <h3 className="font-grotesk font-bold text-gray-900 mb-4 text-xl">{decision.decision}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-grotesk font-semibold text-gray-800 mb-2">Rationale</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{decision.rationale}</p>
                    </div>
                    <div>
                      <h4 className="font-grotesk font-semibold text-gray-800 mb-2">Impact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">{decision.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Technologies */}
        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Technologies & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive technology stack powering the solution
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-4 bg-secondary-100 rounded-2xl text-gray-800 font-grotesk font-medium shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
        )}
        
        {/* Lessons Learned */}
        {caseStudy.lessonsLearned && caseStudy.lessonsLearned.length > 0 && (
        <section className="py-20 bg-secondary-200 animate-section">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Key Lessons Learned
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Insights and learnings that drive future product success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.lessonsLearned.map((lesson, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-400 rounded-full flex items-center justify-center text-white font-grotesk font-bold text-lg mr-6 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed text-lg">{lesson}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* More Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-4">
                More Case Studies
              </h2>
              <p className="text-xl text-gray-600">
                Explore other product management success stories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(detailedCaseStudyData)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, study]) => (
                  <Link 
                    key={key}
                    to={`/case-studies/${key}`}
                    className="group bg-secondary-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-gray-900/50 flex items-center justify-center">
                      <img 
                        src={study.heroImage} 
                        alt={study.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          console.error('Case study image failed to load:', study.heroImage);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-grotesk text-gray-700 border border-gray-200">
                          {study.company}
                        </span>
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-grotesk text-gray-700 border border-gray-200">
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-grotesk font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {study.subtitle}
                      </p>
                      <div className="mt-4 flex items-center text-accent-400 font-grotesk font-medium text-sm">
                        View Case Study
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-accent-400">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-white mb-6">
              Ready to Transform Your Product?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how similar AI-driven solutions can revolutionize your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="px-8 py-4 bg-white text-accent-400 rounded-full font-grotesk font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get In Touch
              </Link>
              <button 
                onClick={handleBackToPortfolio}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-grotesk font-bold hover:bg-white hover:text-accent-400 transition-colors cursor-pointer"
              >
                View More Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}