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
      type: "HEADER",
      headetName: "Customer Management"
    },
    {
      type: "MENU",
      menuName: "Account Summary",
      menuRoute: "/portal/account-summary",
      menuIcon: "account_balance_wallet"
    },
    {
      type: "MENU",
      menuName: "Account Statements",
      menuRoute: "/portal/account-statement",
      menuIcon: "receipt_long"
    },
    {
      type: "MENU",
      menuName: "Open New Account",
      menuRoute: "/portal/open-new-account",
      menuIcon: "add_card"
    },
    {
      type: "HEADER",
      headetName: "Transfers"
    },
    {
      type: "MENU",
      menuName: "Transfer Funds",
      menuRoute: "/portal/transfer-funds",
      menuIcon: "compare_arrows"
    },
    {
      type: "HEADER",
      headetName: "Bill Payments"
    },
    {
      type: "MENU",
      menuName: "Pay Bill",
      menuRoute: "/portal/pay-bill",
      menuIcon: "receipt"
    },
    {
      type: "MENU",
      menuName: "Scheduled Payments",
      menuRoute: "/portal/scheduled-payments",
      menuIcon: "event_repeat"
    },
    {
      type: "HEADER",
      headetName: "Cheques"
    },
    {
      type: "MENU",
      menuName: "Deposit Cheque",
      menuRoute: "/portal/deposit-cheque",
      menuIcon: "upload_file"
    },
    {
      type: "MENU",
      menuName: "Track Status",
      menuRoute: "/portal/track-cheque-status",
      menuIcon: "query_stats"
    },
    {
      type: "HEADER",
      headetName: "Fixed Deposits"
    },
    {
      type: "MENU",
      menuName: "Open New FD",
      menuRoute: "/portal/new-fd",
      menuIcon: "trending_up"
    },
    {
      type: "MENU",
      menuName: "My FDs",
      menuRoute: "/portal/my-fds",
      menuIcon: "savings"
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
