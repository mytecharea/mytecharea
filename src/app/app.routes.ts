import { Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon.component';

export const routes: Routes = [
  { path: '', component: ComingSoonComponent },
  { path: '**', redirectTo: '' }
];
