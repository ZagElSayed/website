const researchThemes = [
  {
    number: "01",
    title: "Neuroinformatics & Clinical AI",
    description:
      "Developing AI-driven methods for EEG analysis, neurological biomarkers, clinical decision support, and precision digital health.",
  },
  {
    number: "02",
    title: "Brain-Computer Interfaces",
    description:
      "Designing adaptive BCI systems that translate neural signals into meaningful control, communication, and therapeutic applications.",
  },
  {
    number: "03",
    title: "Brain-Inspired & Agentic AI",
    description:
      "Creating intelligent systems inspired by cognition, neuroscience, autonomous agents, and trustworthy human-AI collaboration.",
  },
  {
    number: "04",
    title: "Cognitive Cybersecurity",
    description:
      "Advancing adaptive and resilient cybersecurity through AI, behavioral intelligence, cognition, and human-centered system design.",
  },
  {
    number: "05",
    title: "Sustainable Intelligent Computing",
    description:
      "Advancing Green AI, sustainable cloud infrastructure, carbon-aware computing, and CO2 accounting for digital information.",
  },
];

const projects = [
  {
    title: "ICVision",
    category: "Vision-Language AI for EEG",
    description:
      "An interpretable AI framework for analyzing independent components in EEG through multimodal visual reasoning.",
  },
  {
    title: "Adaptive Neurotechnology",
    category: "Brain-Computer Interfaces",
    description:
      "Real-time EEG systems for personalized neuromodulation, neural decoding, and adaptive human-machine interaction.",
  },
  {
    title: "Cognitive Cybersecurity",
    category: "Brain-Inspired Security",
    description:
      "A research direction exploring how cognition, learning, and neuroscience can inspire more adaptive cyber defense.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Zag ElSayed homepage">
            <span className="brand-mark">ZE</span>
            <span>Zag ElSayed</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Artificial Intelligence · Neuroinformatics · Cybersecurity</p>

            <h1>
              Building brain-inspired intelligent systems for healthcare,
              cybersecurity, and a sustainable digital future.
            </h1>

            <p className="hero-description">
              I am Zag ElSayed, an interdisciplinary researcher and educator
              advancing artificial intelligence, brain-computer interfaces,
              clinical neuroinformatics, cognitive cybersecurity, and
              sustainable computing.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore My Research
              </a>

              <a
                className="button button-secondary"
                href="/Zag-ElSayed-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Research Vision</p>

            <blockquote>
              “Developing intelligent systems that are brain-inspired,
              clinically impactful, cyber-resilient, and environmentally
              responsible.”
            </blockquote>

            <div className="hero-card-divider" />

            <p className="hero-card-meta">
              University of Cincinnati
              <br />
              Cincinnati Children&apos;s Research Affiliate
              <br />
              IEEE Senior Member
            </p>
          </aside>
        </div>

        <a className="scroll-indicator" href="#about" aria-label="Scroll to about">
          <span>Discover</span>
          <span className="scroll-line" />
        </a>
      </section>

      <section className="section section-light" id="about">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">About</p>
            <h2>Research at the convergence of mind, machine, and society.</h2>
          </div>

          <div className="about-copy">
            <p>
              My research connects artificial intelligence, neuroscience,
              computing infrastructure, and cybersecurity to address complex
              challenges in healthcare and intelligent systems.
            </p>

            <p>
              I work across disciplinary boundaries to translate computational
              innovation into technologies that improve human health,
              strengthen digital resilience, and reduce the environmental
              impact of computing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="research">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker section-kicker-light">
                Research Themes
              </p>
              <h2>Five connected directions. One unified vision.</h2>
            </div>

            <p>
              My research program spans neural systems, intelligent computing,
              cybersecurity, clinical translation, and environmental
              responsibility.
            </p>
          </div>

          <div className="theme-grid">
            {researchThemes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <span className="theme-number">{theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
                <a href="#contact">Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="projects">
        <div className="container">
          <div className="section-heading section-heading-dark">
            <div>
              <p className="section-kicker">Flagship Initiatives</p>
              <h2>Research designed for real-world impact.</h2>
            </div>

            <p>
              Selected initiatives demonstrate how my work moves from
              foundational ideas to translational systems and interdisciplinary
              collaboration.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact">View initiative →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section" id="publications">
        <div className="container impact-layout">
          <div>
            <p className="section-kicker section-kicker-light">
              Scholarship & Impact
            </p>

            <h2>
              Advancing interdisciplinary research through publications,
              collaboration, and mentorship.
            </h2>
          </div>

          <div className="impact-stats">
            <div>
              <strong>70+</strong>
              <span>Research publications</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Core research themes</span>
            </div>

            <div>
              <strong>Global</strong>
              <span>Academic and clinical collaborations</span>
            </div>
          </div>

          <div className="impact-links">
            <a
              href="https://scholar.google.com/citations?user=KSxT8QEAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar →
            </a>

            <a
              href="https://www.linkedin.com/in/zag-elsayed-b041418b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <section className="section collaboration-section" id="contact">
        <div className="container collaboration-card">
          <div>
            <p className="section-kicker">Collaboration</p>

            <h2>Let&apos;s build the future of intelligent systems.</h2>

            <p>
              I welcome collaborations with researchers, clinicians, students,
              industry partners, and funding organizations working across AI,
              neuroscience, cybersecurity, healthcare, and sustainability.
            </p>
          </div>

          <a
            className="button button-primary"
            href="mailto:zag337li@gmail.com"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <strong>Zag ElSayed</strong>
            <p>
              AI · Neuroinformatics · Brain-Computer Interfaces · Cybersecurity
              · Sustainable Computing
            </p>
          </div>

          <p>© {new Date().getFullYear()} Zag ElSayed. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}