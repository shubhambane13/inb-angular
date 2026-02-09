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
      { 
        path: 'active-customers',
        loadComponent: () => import('./../../pages/admin/active-customers/active-customers').then(m => m.ActiveCustomers),
      },
      { 
        path: 'pending-customers', 
        loadComponent: () => import('./../../pages/admin/pending-customers/pending-customers').then(m => m.PendingCustomers),
      },
      { 
        path: 'locked-customers', 
        loadComponent: () => import('./../../pages/admin/locked-customers/locked-customers').then(m => m.LockedCustomers),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ],
  },
];
