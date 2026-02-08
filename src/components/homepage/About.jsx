import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About({ forwardedRef }) {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([heading.current, body.current], {
        opacity: 0,
        y: 50
      });

      ScrollTrigger.create({
        trigger: aboutSection.current,
        start: "top 80%",
        // markers: true,
        animation: gsap
          .timeline()
          .to(
            heading.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0
          )
          .to(
            body.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.2
          ),

        toggleActions: "play none none none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={(el) => { aboutSection.current = el; if (forwardedRef) forwardedRef(el); }} 
      aria-label="about me"
    >
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-3/5">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="text-heading-3 2xl:text-7xl font-semibold leading-tight text-white"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className="text-body-1 2xl:text-4xl text-white">
              I'm passionate about building AI products that create meaningful impact for users and businesses.

              <br></br>
              <br></br>With 4+ years in product management, I've led cross-functional teams 
              to launch AI-powered features that have scaled to millions of users. I believe 
              in data-driven decision making and user-centric design. 
              <br></br>
              <br></br>
              I specialize in translating complex AI/ML capabilities into intuitive product 
              experiences. From ideation to launch, I focus on building products that solve 
              real problems while driving sustainable business growth.
            </p>
            
            {/* Education Section */}
            <div className="mt-10 space-y-6">
              <h4 className="text-3xl 2xl:text-5xl font-bold text-white mb-8">
                Education
              </h4>
              
              <div className="space-y-6">
                {/* Master's Degree */}
                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 hover:border-secondary-400 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-secondary-100" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-secondary-700 mb-2">
                        Master of Science in Data Science
                      </h5>
                      <p className="text-secondary-600 text-base mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        DePaul University, Chicago, USA
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-secondary-200 text-secondary-700 text-sm rounded-full font-semibold">
                          Advanced Degree
                        </span>
                        <span className="px-4 py-2 bg-secondary-300 text-secondary-700 text-sm rounded-full font-semibold">
                          Data Science
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bachelor's Degree */}
                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 hover:border-secondary-400 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-200 to-accent-300 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-secondary-100" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-secondary-700 mb-2">
                        Bachelor of Science in Information Technology
                      </h5>
                      <p className="text-secondary-600 text-base mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Ganpat University, Gujarat, India
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-secondary-200 text-secondary-700 text-sm rounded-full font-semibold">
                          Bachelor's Degree
                        </span>
                        <span className="px-4 py-2 bg-secondary-300 text-secondary-700 text-sm rounded-full font-semibold">
                          Information Technology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-2/5">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-4/5 mx-auto rounded-md object-cover object-center md:aspect-auto md:w-full"
            src="/Portfolio/pic.jpeg"
            width="480"
            height="640"
            alt="portrait image of Vishesh posing at an event"
          />
        </div>
      </div>
    </section>
  );
}
