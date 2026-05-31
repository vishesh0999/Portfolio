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
      gsap.fromTo(navBar.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power4.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleLinkClick = (e, targetId) => {
    setIsMenuOpen(false);
    
    // Handle smooth scrolling with offset for hash links
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        const navbarHeight = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header
        ref={navBar}
        className="fixed top-0 z-50 flex w-full items-center justify-between backdrop-blur-md bg-black/40 px-5 py-3 shadow-sm border-b border-white/10 text-gray-200"
      >
        {/* logo */}
        <Link to="/" aria-label="Logo" className="z-50">
          <div ref={logo} className="text-4xl font-bold text-gray-200 font-orbitron">
            VP
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7 font-orbitron text-body-3 items-center text-gray-200">
          <Link to="/#about" onClick={(e) => handleLinkClick(e, '#about')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">About</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#case-studies" onClick={(e) => handleLinkClick(e, '#case-studies')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Case Studies</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Experience</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Skills</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#certificates" onClick={(e) => handleLinkClick(e, '#certificates')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Certificates</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#works" onClick={(e) => handleLinkClick(e, '#works')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Projects</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link to="/#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="group relative min-h-[44px] flex items-center hover:text-blue-400">
            <span className="font-bold">Contact</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-blue-400 duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <a
            ref={cta}
            className="button group relative bg-blue-600 text-white hover:bg-blue-500 min-h-[44px] flex items-center transition-colors"
            href="/Vishesh_Prajapati_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative w-fit">
              <span className="absolute top-4 h-[0.15em] w-0 bg-white opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span>View Resume</span>
            </span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg text-gray-200"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`block w-6 h-0.5 bg-gray-200 transition-all duration-300 ease-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-gray-200 transition-all duration-300 ease-out ${
              isMenuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-gray-200 transition-all duration-300 ease-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 font-orbitron">
          <Link 
            to="/#about" 
            onClick={(e) => handleLinkClick(e, '#about')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
          >
            About
          </Link>
          <Link 
            to="/#case-studies" 
            onClick={(e) => handleLinkClick(e, '#case-studies')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
          >
            Case Studies
          </Link>
          <Link 
            to="/#experience" 
            onClick={(e) => handleLinkClick(e, '#experience')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '175ms' : '0ms' }}
          >
            Experience
          </Link>
          <Link 
            to="/#skills" 
            onClick={(e) => handleLinkClick(e, '#skills')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
          >
            Skills
          </Link>
          <Link 
            to="/#certificates" 
            onClick={(e) => handleLinkClick(e, '#certificates')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '225ms' : '0ms' }}
          >
            Certificates
          </Link>
          <Link 
            to="/#works" 
            onClick={(e) => handleLinkClick(e, '#works')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
          >
            Projects
          </Link>
          <Link 
            to="/#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`text-3xl text-secondary-300 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center font-bold ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '275ms' : '0ms' }}
          >
            Contact
          </Link>
          <a 
            href="/Vishesh_Prajapati_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className={`mt-4 px-8 py-4 bg-secondary-400 text-accent-400 rounded-full text-xl font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
          >
            View Resume
          </a>
        </nav>
      </div>
    </>
  );
}