import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { GlobalTableData, TableColumn } from '../../constants/interfaces';
import { DateFormat } from '../../constants/constants';

@Component({
  selector: 'app-global-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './global-table.html',
  styleUrl: './global-table.css',
})
export class GlobalTableComponent implements OnChanges {
  // --- INPUTS ---
  @Input() tableData: GlobalTableData = {
    data: [],
    total: 0
  };
  @Input() columnList: TableColumn[] = [];
  
  // SERVER SIDE PAGINATION INPUTS
  @Input() pageSize: number = 10;    // Current page size
  @Input() pageIndex: number = 0;    // Current page index (0-based)

  // --- OUTPUTS ---
  @Output() onAction = new EventEmitter<{ action: string, data: any }>();
  @Output() onPageChange = new EventEmitter<PageEvent>(); // Emits when user clicks Next/Prev
  @Output() onSortChange = new EventEmitter<Sort>();

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  dateFormat = DateFormat;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData']) {
      this.dataSource.data = this.tableData.data || [];
    }

    if (changes['columnList']) {
      this.displayedColumns = this.columnList.map(col => col.key);
    }
  }

  handleSortEvent(event: Sort) {
    this.onSortChange.emit(event)
  }

  // Handle Paginator Events (Next, Prev, Size Change)
  handlePageEvent(event: PageEvent) {
    this.onPageChange.emit(event);
  }

  handleAction(element: any, actionType?: string) {
    if (actionType) {
      this.onAction.emit({ action: actionType, data: element });
    }
  }
}
