import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-locked-customers',
  templateUrl: './locked-customers.html',
  styleUrl: './locked-customers.css',
  standalone: true,
  imports: [],
})
export class LockedCustomers {
  constructor(private _globalService: GlobalService) {}
  
  ngOnInit() {
    this.getGrid();
  }

  getGrid() {
    let request = {
      pageNumber: 0,
      pageSize: 10,
      sortBy: "id",
      sortDir: "asc"
    }

    this._globalService.postToServer("users/locked-customers", request).subscribe(res => {
      console.log(res);
    })
  }
}
