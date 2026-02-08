export class AdminLayout {}

import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from '../../../shared/components/header/header';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.html',
  styleUrls: ['./portal-layout.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    HeaderComponent,
    SidebarComponent
  ],
  standalone: true,
})
export class PortalLayoutCompomenet {
  private breakpointObserver = inject(BreakpointObserver);
  
  customerMenu:any = [
    {
      type: "MENU",
      menuName: "Dashboard",
      menuRoute: "/portal/dashboard",
      menuIcon: "dashboard"
    },
    {
      type: "MENU",
      menuName: "My Accounts",
      menuRoute: "/portal/accounts",
      menuIcon: "account_balance_wallet"
    },
    {
      type: "MENU",
      menuName: "Transfer Funds",
      menuRoute: "/portal/transfer",
      menuIcon: "payments"
    },
    {
      type: "MENU",
      menuName: "Transactions",
      menuRoute: "/portal/transactions",
      menuIcon: "history"
    },
  ]

  // Observable to detect if screen is mobile (Handset)
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
