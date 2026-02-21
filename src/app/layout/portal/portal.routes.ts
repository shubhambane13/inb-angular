import { Routes } from '@angular/router';
import { PortalLayoutCompomenet } from './portal-layout/portal-layout';

export const PortalRoutes: Routes = [
  {
    path: '',
    component: PortalLayoutCompomenet,
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./../../pages/portal/portal-dashboard/portal-dashboard').then(m => m.PortalDashboard),
      },
      { 
        path: 'account-summary',
        loadComponent: () => import('./../../pages/portal/account-summary/account-summary').then(m => m.AccountSummary),
      },
      { 
        path: 'account-statement',
        loadComponent: () => import('./../../pages/portal/account-statement/account-statement').then(m => m.AccountStatement),
      },
      { 
        path: 'open-new-account',
        loadComponent: () => import('./../../pages/portal/open-new-account/open-new-account').then(m => m.OpenNewAccount),
      },
      { 
        path: 'transfer-funds',
        loadComponent: () => import('./../../pages/portal/transfer-funds/transfer-funds').then(m => m.TransferFundsComponent),
      },
      { 
        path: 'pay-bill',
        loadComponent: () => import('./../../pages/portal/pay-bill/pay-bill').then(m => m.PayBillComponent),
      },
      { 
        path: 'scheduled-payments',
        loadComponent: () => import('./../../pages/portal/scheduled-payments/scheduled-payments').then(m => m.ScheduledPaymentsComponent),
      },
      { 
        path: 'deposit-cheque',
        loadComponent: () => import('./../../pages/portal/deposit-cheque/deposit-cheque').then(m => m.DepositChequeComponent),
      },
      { 
        path: 'track-cheque-status',
        loadComponent: () => import('./../../pages/portal/track-cheque-status/track-cheque-status').then(m => m.TrackChequeStatusComponent),
      },
      { 
        path: 'new-fd',
        loadComponent: () => import('./../../pages/portal/open-new-fd/open-new-fd').then(m => m.OpenNewFdComponent),
      },
      { 
        path: 'my-fds',
        loadComponent: () => import('./../../pages/portal/my-fds/my-fds').then(m => m.MyFdsComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ],
  },
];
