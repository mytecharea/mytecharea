import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  standalone: true,
  template: `
    <div class="home-page">
      <header class="topbar">
        <div class="brand">MyTechArea</div>
        <nav class="nav-links">
          <a href="#home">Home</a>
          <a href="#portfolio">My Portfolio</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" class="hero">
          <div class="hero-copy">
            <p class="eyebrow">Professional Web Experience</p>
            <h1>Modern digital products with clarity, speed, and polish.</h1>
            <p>
              I build clean, user-focused interfaces that help brands connect with customers and grow fast.
            </p>
            <div class="hero-actions">
              <a href="#portfolio" class="btn btn-primary">View Work</a>
              <a href="#contact" class="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div class="hero-card">
            <div class="card-header">Featured Project</div>
            <div class="card-body">
              <h2>Product Design + Front-end</h2>
              <p>Professional landing pages, app interfaces, and responsive web experiences for modern teams.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" class="section section-light">
          <div class="section-header">
            <p class="section-label">Portfolio</p>
            <h2>Selected work highlights</h2>
          </div>
          <div class="grid-cards">
            <article>
              <h3>Website Redesign</h3>
              <p>Revamped interface for a SaaS product with a refined visual system and faster conversions.</p>
            </article>
            <article>
              <h3>App Experience</h3>
              <p>Clean mobile-first layout backed by polished animations and accessible interactions.</p>
            </article>
            <article>
              <h3>Brand Landing</h3>
              <p>High-impact landing page with strong messaging and easy lead capture flows.</p>
            </article>
          </div>
        </section>

        <section id="about" class="section section-white">
          <div class="section-header">
            <p class="section-label">About Me</p>
            <h2>Experienced, detail-driven, and ready to deliver.</h2>
          </div>
          <div class="about-grid">
            <div>
              <p>
                I help businesses move from concept to launch with web experiences that feel modern, reliable, and easy to use.
                My process combines strong UI design with clean, maintainable front-end implementation.
              </p>
            </div>
            <div class="about-list">
              <div>
                <strong>Design System</strong>
                <span>Consistent brand-first interfaces.</span>
              </div>
              <div>
                <strong>Responsive Build</strong>
                <span>Mobile-ready websites and apps.</span>
              </div>
              <div>
                <strong>Performance</strong>
                <span>Fast-loading pages with polished interactions.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section section-light contact-section">
          <div class="section-header">
            <p class="section-label">Contact</p>
            <h2>Let's build something exceptional together.</h2>
          </div>
          <p>Reach out to discuss your next project, collaboration, or full website refresh.</p>
          <a href="mailto:hello@mytecharea.com" class="btn btn-primary">Email Me</a>
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home-page {
        background: #f8fafc;
        color: #0f172a;
        min-height: 100vh;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: rgba(248, 250, 252, 0.96);
        border-bottom: 1px solid #e2e8f0;
        backdrop-filter: blur(12px);
      }

      .brand {
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .nav-links {
        display: flex;
        gap: 1.5rem;
      }

      .nav-links a {
        color: #475569;
        text-decoration: none;
        font-weight: 500;
      }

      .nav-links a:hover {
        color: #0f172a;
      }

      .hero {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 2rem;
        align-items: center;
        padding: 4rem 2rem 6rem;
      }

      .hero-copy {
        max-width: 42rem;
      }

      .eyebrow {
        margin: 0 0 1rem;
        color: #2563eb;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .hero h1 {
        margin: 0;
        font-size: clamp(2.75rem, 5vw, 4.5rem);
        line-height: 1.02;
      }

      .hero-copy p {
        margin: 1.75rem 0 0;
        font-size: 1.05rem;
        line-height: 1.9;
        color: #475569;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2.5rem;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.95rem 1.75rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
      }

      .btn-primary {
        background: #1d4ed8;
        color: #ffffff;
      }

      .btn-secondary {
        background: #e2e8f0;
        color: #0f172a;
      }

      .hero-card {
        padding: 2rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 1.5rem;
        box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
      }

      .card-header {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 0.75rem;
        font-weight: 700;
        color: #2563eb;
        margin-bottom: 1.25rem;
      }

      .card-body h2 {
        margin: 0 0 0.75rem;
        font-size: 1.5rem;
      }

      .card-body p {
        margin: 0;
        color: #475569;
        line-height: 1.75;
      }

      .section {
        padding: 4rem 2rem;
      }

      .section-light {
        background: #f8fafc;
      }

      .section-white {
        background: #ffffff;
      }

      .section-header {
        max-width: 48rem;
        margin-bottom: 2rem;
      }

      .section-label {
        margin: 0 0 0.75rem;
        color: #2563eb;
        font-size: 0.85rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 700;
      }

      .section-header h2 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.75rem);
        line-height: 1.1;
      }

      .grid-cards {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .grid-cards article {
        padding: 1.75rem;
        border-radius: 1.25rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
      }

      .grid-cards h3 {
        margin: 0 0 0.75rem;
        font-size: 1.25rem;
      }

      .grid-cards p {
        margin: 0;
        color: #475569;
        line-height: 1.75;
      }

      .about-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1.5fr 1fr;
      }

      .about-grid p {
        margin: 0;
        color: #475569;
        line-height: 1.85;
      }

      .about-list {
        display: grid;
        gap: 1rem;
      }

      .about-list > div {
        padding: 1.25rem;
        border-radius: 1.25rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
      }

      .about-list strong {
        display: block;
        margin-bottom: 0.5rem;
      }

      .contact-section {
        text-align: center;
        border-radius: 1.5rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
      }

      .contact-section p {
        max-width: 36rem;
        margin: 0 auto 2rem;
      }

      @media (max-width: 1024px) {
        .hero {
          grid-template-columns: 1fr;
        }

        .grid-cards {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 760px) {
        .topbar {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .nav-links {
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .hero {
          padding: 3rem 1.5rem 4rem;
        }

        .grid-cards {
          grid-template-columns: 1fr;
        }

        .about-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class HomeComponent {}
