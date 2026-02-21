import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-scheduled-payments',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatCardModule, 
    MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule
  ],
  templateUrl: './scheduled-payments.html',
  styleUrls: ['./scheduled-payments.css']
})
export class ScheduledPaymentsComponent implements OnInit {
  
  displayedColumns: string[] = ['scheduledDate', 'biller', 'fromAccount', 'amount', 'actions'];
  
  // Mock Data (To be replaced with Service call)
  scheduledBills = [
    {
      id: 1,
      scheduledDate: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), // 3 days from now
      billerName: 'Tata Power',
      billerCategory: 'ELECTRICITY',
      consumerNumber: '100234993',
      fromAccount: '1930000014',
      amount: 1450.50
    },
    {
      id: 2,
      scheduledDate: new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)), // 7 days from now
      billerName: 'Airtel Broadband',
      billerCategory: 'TELEPHONE',
      consumerNumber: '022-25441122',
      fromAccount: '1930000014',
      amount: 999.00
    }
  ];

  ngOnInit(): void {
    // Fetch data from backend
  }

  cancelPayment(paymentId: number) {
    if (confirm('Are you sure you want to cancel this scheduled payment?')) {
      // Logic to call API and delete the scheduled transaction
      this.scheduledBills = this.scheduledBills.filter(bill => bill.id !== paymentId);
      console.log(`Cancelled payment ID: ${paymentId}`);
    }
  }
}