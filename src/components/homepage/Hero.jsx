import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const firstLetters = useRef(null);
  const lastLetters = useRef(null);
  const heroSection = useRef(null);
  const roleText = useRef(null);
  const socialLinks = useRef(null);
  const contactInfo = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states with GPU acceleration
      gsap.set([firstLetters.current, lastLetters.current], {
        force3D: true,
        transformOrigin: "center center"
      });
      
      gsap.set(roleText.current, {
        opacity: 0,
        y: 50,
        force3D: true
      });
      gsap.set(socialLinks.current, {
        opacity: 0,
        y: 30,
        force3D: true
      });
      gsap.set(contactInfo.current, {
        opacity: 0,
        y: 30,
        force3D: true
      });

      // Create main timeline with optimized settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection.current,
          start: "top top",
          end: "+=300vh", // Reduced for better performance
          scrub: 1.5, // Reduced scrub for smoother animation
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Prevents layout issues
        }
      });

      // Optimized text animation with GPU acceleration
      tl.to(firstLetters.current, {
        x: () => -window.innerWidth * 2.5,
        scale: 6,
        opacity: 0,
        rotation: 0.01, // Forces GPU acceleration
        force3D: true,
        ease: "power2.inOut",
        duration: 2,
      }, 0.3)
      .to(lastLetters.current, {
        x: () => window.innerWidth * 2.5,
        scale: 6,
        opacity: 0,
        rotation: 0.01, // Forces GPU acceleration
        force3D: true,
        ease: "power2.inOut",
        duration: 2,
      }, 0.3)
      // Role text animation with GPU acceleration
      .to(roleText.current, {
        opacity: 1,
        y: 0,
        force3D: true,
        ease: "power2.out",
        duration: 1,
      }, 1.2)
      // Social links animation
      .to(socialLinks.current, {
        opacity: 1,
        y: 0,
        force3D: true,
        ease: "power2.out",
        duration: 1,
      }, 1.8)
      // Contact info animation
      .to(contactInfo.current, {
        opacity: 1,
        y: 0,
        force3D: true,
        ease: "power2.out",
        duration: 1,
      }, 2.2);

    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroSection}
      id="hero" 
      className="hero relative w-full h-screen select-none overflow-hidden bg-secondary-100" 
      aria-label="hero"
    >
      {/* Text Header */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full z-10 overflow-hidden gap-4 md:gap-16">
        <div 
          ref={firstLetters}
          className="text-[12vw] text-black font-orbitron font-bold will-change-transform transform-gpu"
          style={{ backfaceVisibility: 'hidden' }}
        >
          WHO
        </div>
        <div 
          ref={lastLetters}
          className="text-[12vw] text-black font-orbitron font-bold will-change-transform transform-gpu"
          style={{ backfaceVisibility: 'hidden' }}
        >
          AM I ?
        </div>
      </div>

      {/* Role Text */}
      <div 
        ref={roleText}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 z-20 w-full"
        style={{ opacity: 0 }}
      >
        <h2 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-wider font-orbitron">
          AI PRODUCT MANAGER
        </h2>
      </div>

      {/* Social Links */}
      <div 
        ref={socialLinks}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-40 z-20"
        style={{ opacity: 0 }}
      >
        <div className="flex gap-12 justify-center">
          <a 
            href="https://www.linkedin.com/in/vishesh-prajapati-aipm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-accent-100 border border-accent-200 rounded-full p-4 hover:bg-accent-200 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-black hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/vishesh0999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-accent-100 border border-accent-200 rounded-full p-4 hover:bg-accent-200 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-black hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a 
            href="mailto:vishesh.aipm@gmail.com" 
            className="group bg-accent-100 border border-accent-200 rounded-full p-4 hover:bg-accent-200 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-black hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        
        {/* Download Resume Button */}
        <div className="flex justify-center mt-4">
          <a 
            href="/Portfolio/Visheshkumar AI Product Manager.pdf" 
            download="Visheshkumar_AI_Product_Manager.pdf"
            className="group relative bg-gradient-to-r from-accent-400 to-accent-300 hover:from-accent-500 hover:to-accent-400 border-2 border-accent-300 hover:border-accent-500 rounded-full px-6 py-3 transition-all duration-300 hover:scale-110 flex items-center gap-3 shadow-lg hover:shadow-xl shadow-accent-400/30 hover:shadow-accent-500/40"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-300 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <svg className="relative w-5 h-5 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative text-white font-orbitron text-sm font-bold group-hover:text-white transition-colors tracking-wide">
              DOWNLOAD RESUME
            </span>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full border-2 border-accent-300 animate-pulse opacity-50"></div>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div 
        ref={contactInfo}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-22"
        style={{ opacity: 0 }}
      >
        <div className="text-center space-y-2">
          <p className="text-gray-800 text-lg font-orbitron">CHICAGO, USA</p>
          <p className="text-gray-600 text-sm">Available for new opportunities</p>
        </div>
      </div>
    </section>
  );
}