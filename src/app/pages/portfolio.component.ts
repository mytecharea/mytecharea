import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-page',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="section section-light">
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

      .section-light {
        background: #f8fafc;
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

      @media (max-width: 1024px) {
        .grid-cards {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 760px) {
        .grid-cards {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class PortfolioComponent {}
