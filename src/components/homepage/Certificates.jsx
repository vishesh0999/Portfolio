import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heading from "../ui/Heading";

const Certificates = ({ forwardedRef }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const certificates = [
    {
      id: 1,
      name: "Data Science",
      issuer: "Professional Certification",
      file: "/Certi/Data%20Science.pdf",
      year: "2024"
    },
    {
      id: 2,
      name: "Microsoft AI Product Manager",
      issuer: "Microsoft",
      file: "/Certi/Microsoft%20AI%20Product%20Manager.pdf",
      year: "2024"
    },
    {
      id: 3,
      name: "RAG and Agentic AI",
      issuer: "AI Certification",
      file: "/Certi/RAG%20and%20Agentic%20AI.pdf",
      year: "2024"
    },
    {
      id: 4,
      name: "Claude AI Fluency",
      issuer: "Anthropic",
      file: "/Certi/Calude%20AI%20Fluency.pdf",
      year: "2024"
    },
    {
      id: 5,
      name: "Claude API",
      issuer: "Anthropic",
      file: "/Certi/Calude%20API.pdf",
      year: "2024"
    }
  ];

  return (
    <section 
      ref={(el) => {
        if (forwardedRef) forwardedRef(el);
      }}
      id="certificates" 
      className="my-[10%]" 
      aria-label="certificates"
    >
      <Heading title="certificates" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-black/30"
            >
              {/* Certificate Preview with Overlay */}
              <div className="relative aspect-[4/3] bg-gray-900/50 overflow-hidden">
                <iframe
                  src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none"
                  title={cert.name}
                />
                
                {/* Overlay with View Icon */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-bold">
                    {cert.year}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h4>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {cert.issuer}
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
