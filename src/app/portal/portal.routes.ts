import { Routes } from '@angular/router';
import { PortalLayoutCompomenet } from './portal-layout/portal-layout';

export const PortalRoutes: Routes = [
  {
    path: '',
    component: PortalLayoutCompomenet,
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./../pages/portal/portal-dashboard/portal-dashboard').then(m => m.PortalDashboard),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ],
  },
];
