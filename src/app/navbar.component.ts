import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <a routerLink="/" class="brand">
        <img src="favicon.svg" alt="MyTechArea Logo" class="logo-icon">
       My Tech Area
      </a>
      <nav class="nav-links">
        <a routerLink="/" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Home
        </a>
         <a routerLink="/skills" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
          </svg>
          Skills
        </a>
        <a routerLink="/projects" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          Projects
        </a>
        <a routerLink="/services" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m4 0H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zm-7 5h.01"/>
          </svg>
          Services
        </a>
        <a routerLink="/blog" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
          Blog
        </a>
         <a routerLink="/about" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          About Me
        </a>
        <a routerLink="/contact" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Contact
        </a>

         <a href="/task-dashboard/" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Manage Task
        </a>
      </nav>
    </header>
  `,
  styles: [
    `
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
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #0f172a;
        text-decoration: none;
      }

      .logo-icon {
        width: 32px;
        height: 32px;
        display: block;
      }

      .brand:hover {
        opacity: 0.8;
      }

      .nav-links {
        display: flex;
        gap: 1.5rem;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #475569;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
      }

      .nav-item:hover {
        color: #0f172a;
        background: rgba(29, 78, 216, 0.05);
      }

      .nav-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
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
      }
    `
  ]
})
export class NavbarComponent {}
