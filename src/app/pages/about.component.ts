import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="section section-white">
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
    </div>
  `,
  styles: [
    `
      .page-container {
        background: #f8fafc;
        color: #0f172a;
        min-height: calc(100vh - 84px);
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .section {
        padding: 4rem 2rem;
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

      @media (max-width: 760px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AboutComponent {}
