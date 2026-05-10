import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hero-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-page">
      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">Professional Web Experience</p>
            <h1>Modern digital products with clarity, speed, and polish.</h1>
            <p>
              I build clean, user-focused interfaces that help brands connect with customers and grow fast.
            </p>
            <div class="hero-actions">
              <a routerLink="/portfolio" class="btn btn-primary">View Work</a>
              <a routerLink="/contact" class="btn btn-secondary">Get in Touch</a>
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
      </main>
    </div>
  `,
  styles: [
    `
      .home-page {
        background: #f8fafc;
        color: #0f172a;
        min-height: calc(100vh - 84px);
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

      @media (max-width: 1024px) {
        .hero {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 760px) {
        .hero {
          padding: 3rem 1.5rem 4rem;
        }
      }
    `
  ]
})
export class HomeComponent {}
