import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
