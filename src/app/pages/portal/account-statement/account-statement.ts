import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../../../shared/services/global.service';
import { GlobalTableComponent } from '../../../shared/components/global-table/global-table';
import { GlobalTableData, TableColumn } from '../../../shared/constants/interfaces';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.html',
  styleUrl: './account-statement.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    GlobalTableComponent
  ],
})
export class AccountStatement {
  statementForm!: FormGroup;
  accounts:any = [];

  tableData: GlobalTableData = {
    data: [],
    total: 0
  }
  pageIndex = 0;
  pageSize = 5;
  sortDir = 'desc';
  sortBy = 'registrationDate';
  tableConfig: TableColumn[] = [
    { key: 'referenceNumber', label: 'Transaction Ref. No.' },
    { key: 'transactionDate', label: 'Date', type: 'date' },
    { key: 'amount', label: 'Amount' },
  ];


  constructor(private _fb: FormBuilder, private _globalService: GlobalService) {}

  ngOnInit() {
    this.statementForm = this._fb.group({
      accountNumber: [''],
      startDate: [''],
      endDate: [''],
    });
    this.getAllAccounts();
    this.getGrid();
  }
  
  getAllAccounts() {
    let req = {
      userId: GlobalService.USER.id
    }
    this._globalService.postToServer('accounts/get-by-user-id',req).subscribe(res => {
      this.accounts = res;
    });
  }


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getGrid(); // Fetch new data
  }
  
  onSortChange(sortState: Sort) {
    // Angular Material returns 'asc', 'desc', or '' (empty)
    
    if (sortState.direction) {
      this.sortBy = sortState.active;  // The column key (e.g., 'email')
      this.sortDir = sortState.direction;
    } else {
      // If user clears the sort (3rd click), revert to default
      this.sortBy = 'id';
      this.sortDir = 'asc';
    }

    // Reset to first page when sorting changes! (Best Practice)
    this.pageIndex = 0; 
    
    this.getGrid();
  }
  
  getGrid() {
    let request = {
      page: this.pageIndex,
      size: this.pageSize,
      userId: GlobalService.USER.id,
      accountId: this.statementForm.get('accountNumber')?.value,
      fromDate: this.statementForm.get('startDate')?.value,
      toDate: this.statementForm.get('endDate')?.value
    };

    this._globalService
      .postToServer('transaction/filter-transactions', request)
      .subscribe((res) => {
        this.tableData = {
          data: res.content,
          total: res.totalElements
        }
      });
  }

  
}
