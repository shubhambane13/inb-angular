import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  
  // Mock Data
  fds = [
    {
      id: 1,
      fdNumber: 'FD9000001',
      principalAmount: 50000,
      interestRate: 4.5,
      tenureMonths: 12,
      maturityDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      maturityAmount: 52250
    },
    {
      id: 2,
      fdNumber: 'FD9000002',
      principalAmount: 100000,
      interestRate: 5.5,
      tenureMonths: 36,
      maturityDate: new Date(new Date().setFullYear(new Date().getFullYear() + 3)),
      maturityAmount: 116500
    }
  ];

  totalInvested: number = 0;

  ngOnInit(): void {
    // Calculate total principal invested for the summary card
    this.totalInvested = this.fds.reduce((sum, current) => sum + current.principalAmount, 0);
  }
}