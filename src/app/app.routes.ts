import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'portal',
    loadChildren: () =>
      import('./layout/portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./layout/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },
];
