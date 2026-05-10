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
        <div class="about-content">
          <div class="profile-image">
            <img src="profile.jpg" alt="Niraj's Profile Picture" class="profile-pic">
          </div>
          <div class="text-section">
            <div class="profile-text">
              <p>
                I help businesses move from concept to launch with web experiences that feel modern, reliable, and easy to use.
                My process combines strong UI design with clean, maintainable front-end implementation.
              </p>
            </div>
            <div class="skills-section">
              <h3>My Expertise</h3>
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

      .about-content {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr;
        gap: 2rem;
        align-items: start;
      }

      .profile-image {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        justify-content: flex-end;
      }

      .text-section {
        grid-column: 1;
        grid-row: 1 / -1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .profile-pic {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #e2e8f0;
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
        transition: transform 0.3s ease;
      }

      .profile-pic:hover {
        transform: scale(1.05);
      }

      .profile-text p {
        margin: 0;
        color: #475569;
        line-height: 1.85;
        font-size: 1.1rem;
      }

      .skills-section h3 {
        margin: 0 0 1.5rem;
        font-size: 1.5rem;
        color: #0f172a;
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
        transition: all 0.3s ease;
      }

      .about-list > div:hover {
        border-color: #2563eb;
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.1);
      }

      .about-list strong {
        display: block;
        margin-bottom: 0.5rem;
        color: #0f172a;
        font-size: 1rem;
      }

      .about-list span {
        color: #64748b;
        font-size: 0.9rem;
      }

      @media (max-width: 1024px) {
        .about-content {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto;
          gap: 2rem;
        }

        .profile-image {
          grid-column: 1;
          grid-row: 1;
          justify-content: center;
        }

        .text-section {
          grid-column: 1;
          grid-row: 2;
        }

        .profile-pic {
          width: 150px;
          height: 150px;
        }
      }

      @media (max-width: 760px) {
        .section {
          padding: 2.5rem 1.5rem;
        }

        .profile-pic {
          width: 120px;
          height: 120px;
        }

        .about-content {
          gap: 1.5rem;
        }

        .text-section {
          gap: 1.5rem;
        }
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
