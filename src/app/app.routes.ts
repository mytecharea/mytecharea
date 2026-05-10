import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PortfolioComponent } from './pages/portfolio.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { BlogComponent } from './pages/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' }
];
