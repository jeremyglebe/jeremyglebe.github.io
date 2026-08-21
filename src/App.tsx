export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jeremy Glebe, home">
          JG<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="mailto:jeremyglebe@gmail.com">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> Senior software engineer
            </p>
            <h1>I make complex software feel straightforward.</h1>
            <p className="intro">
              I build thoughtful web and cross-platform mobile products for
              fintech, healthcare, and teams that care about the details.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:jeremyglebe@gmail.com">
                Work with me <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="/resume.pdf">
                View résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-note" aria-label="About Jeremy">
            <div className="portrait-wrap">
              <img
                src="/portrait.png"
                alt="Jeremy Glebe"
                width="180"
                height="180"
              />
            </div>
            <p>
              Engineer, former CS educator, and calm translator between product
              needs and technical reality.
            </p>
            <a href="https://www.linkedin.com/in/jeremy-glebe/">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <div className="capability-strip" aria-label="Areas of expertise">
          <span>Web platforms</span>
          <span>Hybrid mobile</span>
          <span>Native integrations</span>
          <span>Product-minded delivery</span>
        </div>

        <section className="section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">01 / Selected work</p>
            <div>
              <h2 id="work-title">Useful software, built with care.</h2>
              <p>
                A few public projects that show how I think across product,
                interface, architecture, and the people using the thing.
              </p>
            </div>
          </div>

          <div className="project-list">
            <a
              className="project-row"
              href="https://github.com/jeremyglebe/brewhaus"
              aria-label="View Brewhaus on GitHub"
            >
              <span className="project-index">01</span>
              <div className="project-copy">
                <h3>Brewhaus</h3>
                <p>
                  A mobile-first brewery browser spanning a Vue client, GraphQL
                  composition layer, shared contracts, and Capacitor-ready shells.
                </p>
              </div>
              <span className="project-stack">Vue · TypeScript · GraphQL</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              className="project-row"
              href="https://github.com/jeremyglebe/Foundry.Warhammer.Drowsy-Toolkit"
              aria-label="View Drowsy's WFRP4e Toolkit on GitHub"
            >
              <span className="project-index">02</span>
              <div className="project-copy">
                <h3>Drowsy&apos;s WFRP4e Toolkit</h3>
                <p>
                  Four focused game-master consoles with settings migrations,
                  audit history, macros, and a public module API.
                </p>
              </div>
              <span className="project-stack">JavaScript · Foundry VTT</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              className="project-row"
              href="https://github.com/jeremyglebe/Instruction-1063-Data-Structures"
              aria-label="View Data Structures course archive on GitHub"
            >
              <span className="project-index">03</span>
              <div className="project-copy">
                <h3>Data Structures, taught clearly</h3>
                <p>
                  A university course archive of examples and material designed
                  to make foundational computer-science ideas approachable.
                </p>
              </div>
              <span className="project-stack">C++ · Teaching</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <a className="underlined-link" href="https://github.com/jeremyglebe">
            More experiments on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section
          className="section-shell experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="section-kicker">02 / Experience</p>
            <div>
              <h2 id="experience-title">Across the stack. Close to the product.</h2>
              <p>
                I&apos;ve shipped customer-facing software in regulated industries,
                worked through native and web boundaries, and helped teams turn
                designs into dependable product.
              </p>
            </div>
          </div>

          <div className="timeline">
            <article className="timeline-row">
              <p className="timeline-date">2026 — Now</p>
              <div>
                <h3>Senior Hybrid Developer</h3>
                <p className="timeline-company">
                  Blue Cross and Blue Shield of North Carolina · via Motion
                </p>
                <p>
                  Building responsive Vue interfaces and Node/GraphQL features,
                  including Vue 2-to-3 migration work and production delivery
                  from Figma designs.
                </p>
              </div>
            </article>

            <article className="timeline-row">
              <p className="timeline-date">2023 — 2026</p>
              <div>
                <h3>Hybrid Mobile Developer</h3>
                <p className="timeline-company">
                  Security Service Federal Credit Union
                </p>
                <p>
                  Built and maintained a member-facing banking app for iOS and
                  Android, custom native plugins, an internal dashboard, and the
                  .NET APIs behind them.
                </p>
              </div>
            </article>

            <article className="timeline-row">
              <p className="timeline-date">2021 — 2023</p>
              <div>
                <h3>Fintech, healthcare, and product engineering</h3>
                <p className="timeline-company">
                  FactSet · CHRISTUS Health · Silver Bullet Web Solutions
                </p>
                <p>
                  Delivered responsive Vue products, native MyChart integrations,
                  Firebase notifications, .NET services, and cross-platform field
                  software.
                </p>
              </div>
            </article>

            <article className="timeline-row">
              <p className="timeline-date">Teaching</p>
              <div>
                <h3>Computer Science Educator</h3>
                <p className="timeline-company">
                  Midwestern State University · Dexter School
                </p>
                <p>
                  Taught data structures, algorithms, game development, robotics,
                  and AP Computer Science—the roots of how I communicate today.
                </p>
              </div>
            </article>
          </div>

          <div className="skill-line">
            <p>Core toolkit</p>
            <p>
              TypeScript · JavaScript · Vue · Angular · Ionic · Capacitor · Swift ·
              Kotlin · Node.js · GraphQL · C# · .NET
            </p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <p className="section-kicker">03 / How I work</p>
          <div>
            <h2 id="about-title">Code is only half the job.</h2>
            <p>
              The other half is asking the right question, explaining the tradeoff,
              and leaving the system easier for the next person to understand. My
              background in teaching still shapes the way I build: clear thinking,
              patient collaboration, and no mystery where a useful explanation will
              do.
            </p>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow eyebrow-light">
            <span aria-hidden="true" /> Open to the right opportunity
          </p>
          <h2 id="contact-title">Have a knotty product problem?</h2>
          <a className="contact-link" href="mailto:jeremyglebe@gmail.com">
            Let&apos;s make it simple. <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Jeremy Glebe</p>
        <nav aria-label="Social links">
          <a href="mailto:jeremyglebe@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/jeremy-glebe/">LinkedIn</a>
          <a href="https://github.com/jeremyglebe">GitHub</a>
          <a href="/resume.pdf">Résumé</a>
        </nav>
      </footer>
    </>
  );
}
