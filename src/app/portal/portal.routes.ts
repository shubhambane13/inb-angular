import { Routes } from '@angular/router';
import { PortalLayoutCompomenet } from './portal-layout/portal-layout';

export const PortalRoutes: Routes = [
  {
    path: '',
    component: PortalLayoutCompomenet,
    children: [],
  },
];
