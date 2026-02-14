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
        children: [
            {
                path: '', 
                loadComponent: () => import('./../../pages/admin/active-customers/active-customers').then(m => m.ActiveCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./../../pages/admin/active-customers/active-customer-details/active-customer-details').then(m => m.ActiveCustomerDetails),
            }
        ]
        
      },
      { 
        path: 'pending-customers', 
        children: [
            {
                path: '', 
                loadComponent: () => import('./../../pages/admin/pending-customers/pending-customers').then(m => m.PendingCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./../../pages/admin/pending-customers/pending-customer-detail/pending-customer-detail').then(m => m.PendingCustomerDetail),
            }
        ]
      },
      { 
        path: 'locked-customers', 
        children: [
            {
                path: '', 
                loadComponent: () => import('./../../pages/admin/locked-customers/locked-customers').then(m => m.LockedCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./../../pages/admin/locked-customers/locked-customer-detail/locked-customer-detail').then(m => m.LockedCustomerDetail),
            }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ],
  },
];
