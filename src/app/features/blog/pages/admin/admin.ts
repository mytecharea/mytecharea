import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent {

  private router = inject(Router);

  activeMenu = 'dashboard';

  stats = {
    totalBlogs: 12,
    publishedBlogs: 8,
    draftBlogs: 4,
    users: 24
  };

  recentBlogs = [
    {
      title: 'Angular HTTP Interceptors',
      category: 'Angular',
      status: 'Published',
      date: 'Aug 23, 2026'
    },
    {
      title: 'AWS S3 and CloudFront',
      category: 'AWS',
      status: 'Published',
      date: 'Aug 20, 2026'
    },
    {
      title: 'Terraform Basics',
      category: 'Terraform',
      status: 'Draft',
      date: 'Aug 18, 2026'
    }
  ];

  setActiveMenu(menu: string): void {
    this.activeMenu = menu;
  }

  logout(): void {

    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }
}