import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PortfolioComponent } from './pages/portfolio.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { BlogComponent } from './pages/blog.component';
import { Skills } from './pages/skills/skills';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: Projects },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
  path: 'blog/:slug',
  loadComponent: () =>
    import('./features/blog/pages/blog-detail/blog-detail')
      .then(m => m.BlogDetail)
},
{
  path: 'login',
  loadComponent: () =>
    import(
      './features/auth/pages/login-component/login-component'
    ).then(m => m.LoginComponent)
},
  {
  path: 'blog',
  loadComponent: () =>
    import('./features/blog/pages/blog-list/blog-list')
      .then(m => m.BlogList)
},
  { path: 'skills', component: Skills },
  { path: 'services', component: Services },
   {
    path: 'blog/:id',
    loadComponent: () =>
      import('./pages/blog-details/blog-details').then((m) => m.BlogDetails),
  },
  {
    path: 'admin',

    canActivate: [
      authGuard
    ],

    loadComponent: () =>
      import('./features/blog/pages/admin/admin')
        .then(m => m.AdminComponent)
  },
  {
  path: 'admin/blogs',
  loadComponent: () =>
    import(
      './features/admin/pages/blog-management/blog-management'
    ).then(m => m.BlogManagementComponent)
},
{
  path: 'admin/blogs/create',
  loadComponent: () =>
    import(
      './features/admin/pages/blog-create/blog-create'
    ).then(m => m.BlogCreateComponent)
},
  { path: '**', redirectTo: '' }
];
