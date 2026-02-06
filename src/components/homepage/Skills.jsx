import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Heading from "../ui/Heading"

const Skills = ({ forwardedRef }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })

  const tools = [
    { name: 'ChatGPT', icon: 'https://img.icons8.com/color/96/chatgpt.png' },
    { name: 'Claude', icon: '/icons/claude.svg' },
    { name: 'RAG', icon: 'https://img.icons8.com/color/96/artificial-intelligence.png' },
    { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'Confluence', icon: 'https://img.icons8.com/color/96/confluence--v2.png' },
    { name: 'Miro', icon: 'https://www.svgrepo.com/show/517866/miro.svg' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
    { name: 'Power BI', icon: 'https://img.icons8.com/fluency/96/power-bi-2021.png' },
    { name: 'AWS SageMaker', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
    { name: 'Google Vertex AI', icon: 'https://img.icons8.com/color/96/google-cloud.png' },
    { name: 'Azure', icon: 'https://img.icons8.com/color/96/azure-1.png' },
    { name: 'LangChain', icon: 'https://img.icons8.com/color/96/link--v1.png' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
    { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
    { name: 'Jupyter', icon: 'https://img.icons8.com/fluency/96/jupyter.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python--v1.png' },
    { name: 'Tableau', icon: 'https://img.icons8.com/color/96/tableau-software.png' },
    { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
  ]

  const skillCategories = [
    {
      title: "AI & Product Strategy",
      skills: [
        "Generative AI", "LLMs (GPT-4, Claude, Gemini)", "Agentic AI", "RAG", 
        "Multi-Agent Orchestration", "Prompt Engineering", "NLP", "Recommendation Systems", 
        "Computer Vision", "Product Roadmaps", "OKRs", "Go-to-Market Strategy", "Competitive Analysis"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Product Management",
      skills: [
        "Agile/Scrum", "Sprint Planning", "Backlog Prioritization", "User Stories", 
        "PRDs", "Technical Specifications", "MVP Definition", "Stakeholder Management", 
        "User Research", "Jobs-to-be-Done", "Customer Discovery"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Responsible AI",
      skills: [
        "Bias Detection", "Fairness Metrics", "Explainability (SHAP, LIME)", 
        "Data Privacy (GDPR, HIPAA)", "AI Governance", "Human-in-the-Loop", 
        "Safety Guardrails", "Audit Trails"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Technical & Analytics",
      skills: [
        "Python", "SQL", "REST APIs", "Feature Engineering", "A/B Testing", 
        "Experiment Design", "Statistical Analysis", "KPI Definition", "Funnel Analysis", 
        "Cohort Analysis", "Tableau", "Power BI", "AWS", "GCP"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Platforms & MLOps",
      skills: [
        "OpenAI", "Anthropic", "Google Vertex AI", "Azure OpenAI", "AWS SageMaker", 
        "LangChain", "Vector Databases", "Model Deployment", "Drift Detection", 
        "Model Registry", "CI/CD for ML"
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = container.querySelectorAll('.floating-icon')
    const total = items.length
    const radius = 200

    // Diagonal rotation angles
    let angleX = 0
    let angleY = 0

    // Base speed for diagonal spin
    const baseSpeedX = 0.002
    const baseSpeedY = 0.003
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    const getPosition = (index, rotX, rotY) => {
      const y = 1 - (index / (total - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = 2 * Math.PI * index / goldenRatio

      let x = Math.cos(theta) * radiusAtY
      let z = Math.sin(theta) * radiusAtY

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      const y1 = y * cosX - z * sinX
      const z1 = y * sinX + z * cosX

      const x1 = x * cosY + z1 * sinY
      const z2 = -x * sinY + z1 * cosY

      return { x: x1 * radius, y: y1 * radius, z: z2 * radius }
    }

    const animate = () => {
      // Apply velocity from mouse drag
      if (!isDragging.current) {
        // Gradually slow down to base speed
        velocity.current.x *= 0.95
        velocity.current.y *= 0.95
        // Add base diagonal rotation
        angleX += baseSpeedX + velocity.current.x
        angleY += baseSpeedY + velocity.current.y
      } else {
        angleX += velocity.current.x
        angleY += velocity.current.y
      }

      items.forEach((item, i) => {
        const pos = getPosition(i, angleX, angleY)
        const normalizedZ = (pos.z + radius) / (2 * radius)
        const scale = normalizedZ * 0.5 + 0.5
        const opacity = normalizedZ * 0.6 + 0.4

        item.style.transform = `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${scale})`
        item.style.opacity = opacity
        item.style.zIndex = Math.round(pos.z + 500)
      })

      requestAnimationFrame(animate)
    }

    // Mouse/Touch handlers for drag interaction
    const handleMouseDown = (e) => {
      isDragging.current = true
      lastMouse.current = { x: e.clientX, y: e.clientY }
      container.style.cursor = 'grabbing'
    }

    const handleMouseMove = (e) => {
      if (!isDragging.current) return

      const deltaX = e.clientX - lastMouse.current.x
      const deltaY = e.clientY - lastMouse.current.y

      velocity.current.x = deltaY * 0.008
      velocity.current.y = deltaX * 0.008

      lastMouse.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    const handleMouseLeave = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    // Touch handlers
    const handleTouchStart = (e) => {
      isDragging.current = true
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const handleTouchMove = (e) => {
      if (!isDragging.current) return

      const deltaX = e.touches[0].clientX - lastMouse.current.x
      const deltaY = e.touches[0].clientY - lastMouse.current.y

      velocity.current.x = deltaY * 0.008
      velocity.current.y = deltaX * 0.008

      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    animate()

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <section 
      ref={(el) => {
        if (forwardedRef) forwardedRef(el);
      }}
      id="skills" 
      className="my-[10%]" 
      aria-label="skills"
    >
      <Heading title="skills" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        {/* Interactive 3D Sphere Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold text-secondary-700 mb-8 text-center"
          >
            Interactive Tools & Technologies
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT - 3D Floating Icons Sphere */}
            <div
              ref={containerRef}
              className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
              style={{
                perspective: '1000px',
                cursor: 'grab',
                userSelect: 'none',
              }}
            >
              {tools.map((tool) => (
                <img
                  key={`float-${tool.name}`}
                  className="floating-icon absolute"
                  src={tool.icon}
                  alt={tool.name}
                  style={{
                    width: '45px',
                    height: '45px',
                    objectFit: 'contain',
                    filter: tool.name === 'GitHub' ? 'invert(0.2)' : 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
              ))}
            </div>

            {/* RIGHT - Grid Cards */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={`card-${tool.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(209, 209, 199, 0.05)',
                  }}
                  className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 bg-secondary-100 border border-secondary-200 rounded-lg hover:border-secondary-400 transition-all duration-300 cursor-default"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      style={{
                        filter: tool.name === 'GitHub' ? 'invert(0.3)' : 'none',
                        opacity: 0.9,
                      }}
                    />
                  </div>
                  <span className="text-secondary-600 text-xs md:text-sm text-center font-medium">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Comprehensive Skills Categories */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold text-secondary-700 mb-8 text-center"
          >
            Comprehensive Skill Set
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
                className="bg-secondary-100 border border-secondary-200 rounded-xl p-6 hover:border-secondary-400 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-4">
                  <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-3`}></div>
                  <h4 className="text-lg font-semibold text-secondary-700 mb-2">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.02 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(209, 209, 199, 0.1)',
                      }}
                      className="inline-block px-3 py-1.5 bg-secondary-50 text-secondary-600 text-sm rounded-full border border-secondary-200 hover:border-secondary-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills