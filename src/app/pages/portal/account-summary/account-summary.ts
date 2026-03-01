import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.html',
  styleUrl: './account-summary.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    DecimalPipe,
    TitleCasePipe,
    MatButtonModule,
  ],
})
export class AccountSummary {
  // accounts = [
  //   {
  //     accountType: 'SAVINGS',
  //     accountNumber: '98765678',
  //     balance: 23.2,
  //   },
  // ];
  accounts:any = [];

  constructor(private _globalService: GlobalService) {}

  ngOnInit() {
    this.getAllAccounts();
  }
  
  getAllAccounts() {
    let req = {
      userId: GlobalService.USER.id
    }
    this._globalService.postToServer('accounts/get-by-user-id',req).subscribe(res => {
      this.accounts = res;
    });
  }
}
