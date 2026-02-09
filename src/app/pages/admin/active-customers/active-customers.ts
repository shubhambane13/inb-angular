import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.html',
  styleUrl: './active-customers.css',
  standalone: true,
  imports: [],
})
export class ActiveCustomers {
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

    this._globalService.postToServer("users/active-customers", request).subscribe(res => {
      console.log(res);
    })
  }
}
