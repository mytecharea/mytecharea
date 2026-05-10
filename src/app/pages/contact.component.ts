import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="section contact-section">
        <div class="section-header">
          <p class="section-label">Contact</p>
          <h2>Let's build something exceptional together.</h2>
        </div>
        <p>Reach out to discuss your next project, collaboration, or full website refresh.</p>
        <a href="mailto:hello@mytecharea.com" class="btn btn-primary">Email Me</a>
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

      .contact-section {
        text-align: center;
        border-radius: 1.5rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
      }

      .section-header {
        max-width: 48rem;
        margin: 0 auto 2rem;
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

      .contact-section p {
        max-width: 36rem;
        margin: 0 auto 2rem;
        color: #475569;
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
    `
  ]
})
export class ContactComponent {}
