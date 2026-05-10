import { Component } from '@angular/core';

@Component({
  selector: 'coming-soon',
  standalone: true,
  template: `
    <main class="coming-soon-page">
      <section>
        <p class="eyebrow">Coming Soon</p>
        <h1>Something amazing is on the way</h1>
        <p>We're working hard to bring you a brand new experience. Check back soon!</p>
      </section>
    </main>
  `,
  styles: [
    `
      .coming-soon-page {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
        text-align: center;
        background: radial-gradient(circle at top, #4f46e5 0%, #0f172a 65%);
        color: #f8fafc;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .coming-soon-page section {
        max-width: 28rem;
        width: 100%;
        padding: 3rem;
        border-radius: 1.5rem;
        background: rgba(15, 23, 42, 0.88);
        box-shadow: 0 24px 80px rgba(15, 23, 42, 0.36);
      }

      .coming-soon-page .eyebrow {
        margin: 0 0 1rem;
        color: #a5b4fc;
        font-size: 0.95rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .coming-soon-page h1 {
        margin: 0 0 1rem;
        font-size: clamp(2.25rem, 4vw, 3.5rem);
        line-height: 1.05;
      }

      .coming-soon-page p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.8;
        color: #cbd5e1;
      }
    `
  ]
})
export class ComingSoonComponent {}
