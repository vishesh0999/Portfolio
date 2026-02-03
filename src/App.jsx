import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Experience from "./components/homepage/Experience";
import Skills from "./components/homepage/Skills";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import ProjectPage from "./components/ProjectPage";
import { siteConfig } from "./data";

// Homepage component
const HomePage = () => {
  const sectionRefs = useRef([]);

  return (
    <>
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
      </Helmet>
      <div className="bg-black min-h-screen">
        <NavBar sectionRefs={sectionRefs.current} />
        <Hero />
        <div className="bg-secondary-100">
          <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
            <About forwardedRef={(el) => (sectionRefs.current[0] = el)} />
            <Experience />
            <Skills />
            <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

// Main App with routing
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
