const projects = [
  {
    name: "Brewhaus",
    url: "https://github.com/jeremyglebe/brewhaus",
    stack: "Vue, TypeScript, GraphQL, Capacitor",
    description:
      "A mobile-friendly brewery browser with a Vue client, GraphQL server, shared types, search, favorites, and native mobile packaging.",
  },
  {
    name: "Drowsy's WFRP4e Toolkit",
    url: "https://github.com/jeremyglebe/Foundry.Warhammer.Drowsy-Toolkit",
    stack: "JavaScript, Foundry VTT",
    description:
      "A set of tools for running WFRP4e games in Foundry, including session, experience, and fear-management utilities.",
  },
  {
    name: "Crayon Blaster",
    url: "https://github.com/jeremyglebe/CrayonBlaster",
    stack: "Godot, GDScript",
    description:
      "A crayon-styled arcade space shooter with player combat, meteors, scoring, title and game-over flows, and controller support.",
  },
];

const experience = [
  {
    dates: "2026–present",
    role: "Senior Hybrid Developer",
    company: "Blue Cross and Blue Shield of North Carolina, via Motion",
    description:
      "Vue interfaces, Node and GraphQL features, Vue 2-to-3 migration work, and implementation of Figma designs.",
  },
  {
    dates: "2023–2026",
    role: "Hybrid Mobile Developer",
    company: "Security Service Federal Credit Union",
    description:
      "A member-facing iOS and Android banking app, custom native plugins, an internal dashboard, and supporting .NET APIs.",
  },
  {
    dates: "2021–2023",
    role: "Software Engineer",
    company: "FactSet, CHRISTUS Health, and Silver Bullet Web Solutions",
    description:
      "Responsive web applications, native healthcare integrations, Firebase notifications, .NET services, and cross-platform field software.",
  },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="site-name" href="#top">
          Jeremy Glebe
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="content">
        <section className="intro-section" id="top">
          <div>
            <h1>Jeremy Glebe</h1>
            <p className="role">Software engineer</p>
            <p className="introduction">
              I build web and mobile applications. Most of my professional work
              has been in financial services and healthcare, using Vue, Angular,
              Ionic, native iOS and Android code, Node, and .NET.
            </p>
            <div className="intro-links">
              <a href="mailto:jeremyglebe@gmail.com">Email</a>
              <a href="/resume.pdf">Résumé</a>
              <a href="https://www.linkedin.com/in/jeremy-glebe/">LinkedIn</a>
              <a href="https://github.com/jeremyglebe">GitHub</a>
              <a href="https://jeremy.place">Jeremy&apos;s Place</a>
            </div>
          </div>

          <img
            className="portrait"
            src="/portrait.png"
            alt="Jeremy Glebe"
            width="180"
            height="180"
          />
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <h3>
                  <a href={project.url}>{project.name}</a>
                </h3>
                <p className="meta">{project.stack}</p>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <p className="section-link">
            <a href="https://github.com/jeremyglebe">See all public projects</a>
          </p>
        </section>

        <section
          className="content-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <h2 id="experience-title">Experience</h2>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="job" key={`${job.company}-${job.dates}`}>
                <p className="dates">{job.dates}</p>
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <p>{job.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="toolkit">
            <strong>Also:</strong> TypeScript, JavaScript, Capacitor, Cordova,
            Swift, Kotlin, Firebase, C#, GraphQL, and REST APIs.
          </p>
          <p className="section-link">
            <a href="/resume.pdf">Full résumé</a>
          </p>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <div className="narrow-copy">
            <p>
              Before working full-time as a developer, I taught computer science
              at the university and secondary-school levels. I still enjoy the
              parts of engineering that involve explaining decisions, documenting
              systems, and working with people outside the engineering team.
            </p>
            <p>
              I&apos;m open to hearing about senior software engineering roles,
              especially work involving web or cross-platform mobile applications.
            </p>
            <p>
              The easiest way to reach me is at{" "}
              <a href="mailto:jeremyglebe@gmail.com">jeremyglebe@gmail.com</a>.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Jeremy Glebe</p>
      </footer>
    </>
  );
}
