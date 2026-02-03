import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs, color }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(navBar.current, {
        y: 0,
        duration: 3,
        delay: 0.5,
        ease: "power4.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.forEach((section) => {
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 375px",
          end: "bottom 300px",
          animation: gsap
            .timeline()
            .to(logo.current, { fill: "#DDDDD5"}, 0)
            .to(navBar.current, { color: "#DDDDD5" })
            .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
            .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
          toggleActions: "restart reverse restart reverse",
        });
      });
    });
    return () => ctx.revert();
  }, [sectionRefs]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        ref={navBar}
        className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between backdrop-blur-md px-5 py-3"
      >
        {/* logo */}
        <Link to="/" aria-label="Logo" className="z-50">
          <div ref={logo} className="text-4xl font-bold text-current font-alex-brush">
            Vishesh
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7 font-grotesk text-body-3 items-center">
          <Link to="/#about" className="group relative min-h-[44px] flex items-center">
            <span>about</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#experience" className="group relative min-h-[44px] flex items-center">
            <span>experience</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#skills" className="group relative min-h-[44px] flex items-center">
            <span>skills</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#works" className="group relative min-h-[44px] flex items-center">
            <span>projects</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#contact" className="group relative min-h-[44px] flex items-center">
            <span>contact</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <a
            ref={cta}
            className="button group relative hover:bg-transparent min-h-[44px] flex items-center"
            href="/vishesh/cv/Vishesh_Kumar_CV.pdf"
            download="Vishesh_Kumar_CV.pdf"
          >
            <span className="relative w-fit">
              <span className="absolute top-4 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span>Resume Download</span>
            </span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-accent-400/95 backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 font-grotesk">
          <Link 
            to="/#about" 
            onClick={handleLinkClick}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
          >
            about
          </Link>
          <Link 
            to="/#experience" 
            onClick={handleLinkClick}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
          >
            experience
          </Link>
          <Link 
            to="/#skills" 
            onClick={handleLinkClick}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '175ms' : '0ms' }}
          >
            skills
          </Link>
          <Link 
            to="/#works" 
            onClick={handleLinkClick}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
          >
            projects
          </Link>
          <Link 
            to="/#contact" 
            onClick={handleLinkClick}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '225ms' : '0ms' }}
          >
            contact
          </Link>
          <a 
            href="/vishesh/cv/Vishesh_Kumar_CV.pdf"
            download="Vishesh_Kumar_CV.pdf"
            onClick={handleLinkClick}
            className={`mt-4 px-8 py-4 bg-secondary-400 text-accent-400 rounded-full text-xl font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
          >
            Resume Download
          </a>
        </nav>
      </div>
    </>
  );
}