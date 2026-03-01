import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-my-fds',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatCardModule, 
    MatTableModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './my-fds.html',
  styleUrls: ['./my-fds.css']
})
export class MyFdsComponent implements OnInit {
  
  displayedColumns: string[] = ['fdNumber', 'principal', 'details', 'maturityDate', 'maturityAmount'];
  
  activeFds:number = 0;
  totalInvested: number = 0;
  totalInterestEarnedTillDate: number = 0;
  fds = [];

  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    this.getDate();
  }

  getDate() {
    this._globalService.postToServer('fd/fd-data',{}).subscribe(res => {
      this.activeFds = res.totalActiveFds;
      this.fds = res.activeFds;
      this.totalInvested = res.totalPrincipalInvested;
      this.totalInterestEarnedTillDate = res.totalInterestEarnedTillDate;
    });
  }
}