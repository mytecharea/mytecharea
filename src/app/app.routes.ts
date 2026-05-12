import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PortfolioComponent } from './pages/portfolio.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { BlogComponent } from './pages/blog.component';
import { Skills } from './pages/skills/skills';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: Projects },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'skills', component: Skills },
  { path: 'services', component: Services },
  { path: '**', redirectTo: '' },
];
