import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <div class="brand">MyTechArea</div>
      <nav class="nav-links">
        <a routerLink="/">Home</a>
        <a routerLink="/portfolio">My Portfolio</a>
        <a routerLink="/about">About Me</a>
        <a routerLink="/blog">Blog</a>
        <a routerLink="/contact">Contact</a>
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
