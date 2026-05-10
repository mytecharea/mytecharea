import { Component } from '@angular/core';

@Component({
  selector: 'blog-page',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="section section-light">
        <div class="section-header">
          <p class="section-label">Blog</p>
          <h2>Latest articles and insights</h2>
        </div>
        <div class="blog-grid">
          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">May 10, 2026</span>
              <span class="read-time">5 min read</span>
            </div>
            <h3>Building Responsive Web Experiences</h3>
            <p>
              Learn best practices for creating web designs that look great on all devices and provide excellent user experiences.
            </p>
            <a href="#" class="read-more">Read Article →</a>
          </article>

          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">May 5, 2026</span>
              <span class="read-time">7 min read</span>
            </div>
            <h3>Modern CSS Layout Techniques</h3>
            <p>
              Explore CSS Grid and Flexbox to create flexible, maintainable layouts that adapt beautifully to different screen sizes.
            </p>
            <a href="#" class="read-more">Read Article →</a>
          </article>

          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">April 28, 2026</span>
              <span class="read-time">6 min read</span>
            </div>
            <h3>Performance Optimization Tips</h3>
            <p>
              Discover techniques to improve page load times and overall performance for a better user experience and higher conversions.
            </p>
            <a href="#" class="read-more">Read Article →</a>
          </article>

          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">April 20, 2026</span>
              <span class="read-time">8 min read</span>
            </div>
            <h3>Design Systems Best Practices</h3>
            <p>
              Build scalable design systems that enable teams to work faster, maintain consistency, and deliver better products.
            </p>
            <a href="#" class="read-more">Read Article →</a>
          </article>

          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">April 15, 2026</span>
              <span class="read-time">5 min read</span>
            </div>
            <h3>Accessibility in Modern Web Design</h3>
            <p>
              Ensure your digital products are inclusive and accessible to all users, including those with disabilities.
            </p>
            <a href="#" class="read-more">Read Article →</a>
          </article>

          <article class="blog-card">
            <div class="blog-meta">
              <span class="date">April 10, 2026</span>
              <span class="read-time">7 min read</span>
            </div>
            <h3>Angular Best Practices for 2026</h3>
            <p>
              Master modern Angular patterns and practices to build scalable, maintainable applications with improved performance.
            </p>
            <a href="#" class="read-more">Read Article →</a>
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
        margin-bottom: 3rem;
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

      .blog-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .blog-card {
        padding: 1.75rem;
        border-radius: 1.25rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;
      }

      .blog-card:hover {
        border-color: #2563eb;
        box-shadow: 0 24px 60px rgba(37, 99, 235, 0.12);
      }

      .blog-meta {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      .date,
      .read-time {
        font-size: 0.8rem;
        color: #64748b;
      }

      .blog-card h3 {
        margin: 0 0 0.75rem;
        font-size: 1.25rem;
        line-height: 1.3;
      }

      .blog-card p {
        margin: 0 0 1rem;
        color: #475569;
        line-height: 1.75;
        flex-grow: 1;
      }

      .read-more {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: color 0.2s ease;
      }

      .read-more:hover {
        color: #1d4ed8;
      }

      @media (max-width: 1024px) {
        .blog-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 760px) {
        .blog-grid {
          grid-template-columns: 1fr;
        }

        .section {
          padding: 2.5rem 1.5rem;
        }
      }
    `
  ]
})
export class BlogComponent {}
