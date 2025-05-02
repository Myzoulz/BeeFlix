import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'info', component: InfoComponent},
];
