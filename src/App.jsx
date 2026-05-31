import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Lenis from "lenis";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Experience from "./components/homepage/Experience";
import Skills from "./components/homepage/Skills";
import Certificates from "./components/homepage/Certificates";
import Works from "./components/homepage/Works";
import CaseStudy from "./components/homepage/CaseStudy";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import ProjectPage from "./components/ProjectPage";
import CaseStudyPage from "./components/CaseStudyPage";
import { siteConfig } from "./data";
gsap.registerPlugin(ScrollTrigger);

// Homepage component
const HomePage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionHeadings = document.querySelectorAll(".section-heading");
      sectionHeadings.forEach((heading) => {
        const headings = heading.querySelectorAll(".heading");

        headings.forEach((individualHeading) => {
          ScrollTrigger.create({
            trigger: heading,
            start: "top 550px",
            end: "bottom 550px",
            animation: gsap.to(individualHeading, {
              opacity: 1,
              y: 0,
              ease: "power4.out",
              duration: 1,
            }),
            toggleActions: "play none none none",
          });
        });
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
      </Helmet>
      <div className="min-h-screen relative bg-mesh">
        {/* ── Scan line — sweeping light beam ────────────────────── */}
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(100,180,255,0.15) 20%, rgba(100,200,255,0.3) 50%, rgba(100,180,255,0.15) 80%, transparent 100%)',
              boxShadow: '0 0 30px 10px rgba(100,180,255,0.05)',
              animation: 'scanLine 12s linear infinite',
            }}
          />
        </div>

        {/* ── Ambient glow blobs ─────────────────────────────────── */}
        <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.03]"
            style={{
              background: 'radial-gradient(circle, #3b82f6, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'floatBlob1 20s ease-in-out infinite alternate',
            }}
          />
          <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full opacity-[0.025]"
            style={{
              background: 'radial-gradient(circle, #6366f1, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'floatBlob2 18s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* ── Main content ───────────────────────────────────────── */}
        <div className="relative z-10">
          <NavBar sectionRefs={sectionRefs.current} />
          <Hero />
          <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
            <About forwardedRef={(el) => (sectionRefs.current[0] = el)} />
            <CaseStudy forwardedRef={(el) => (sectionRefs.current[1] = el)} />
            <Experience forwardedRef={(el) => (sectionRefs.current[2] = el)} />
            <Skills forwardedRef={(el) => (sectionRefs.current[3] = el)} />
            <Certificates forwardedRef={(el) => (sectionRefs.current[4] = el)} />
            <Works forwardedRef={(el) => (sectionRefs.current[5] = el)} />
            <Contact forwardedRef={(el) => (sectionRefs.current[6] = el)} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

// Main App with routing
const App = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  // Initialize Lenis globally
  useEffect(() => {
    try {
      const lenis = new Lenis();
      lenisRef.current = lenis;
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
      };
    } catch (error) {
      console.error("Error initializing Lenis:", error);
    }
  }, []);

  // Handle scroll to top or hash on route change
  useLayoutEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { immediate: true });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        window.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
        
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
      }
    } catch (error) {
      console.error("Error handling scroll:", error);
    }
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
    </Routes>
  );
};

export default App;
