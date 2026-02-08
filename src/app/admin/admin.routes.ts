import { Routes } from '@angular/router';
import { AdminLayoutCompomenet } from './admin-layout/admin-layout';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutCompomenet,
    children: [],
  },
];
