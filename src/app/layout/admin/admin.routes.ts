import { Routes } from '@angular/router';
import { AdminLayoutCompomenet } from './admin-layout/admin-layout';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutCompomenet,
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./../../pages/admin/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ],
  },
];
