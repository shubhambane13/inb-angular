import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CustomerDataViewComponent } from '../../../../shared/components/customer-data-view/customer-data-view';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-pending-customer-detail',
  templateUrl: './pending-customer-detail.html',
  styleUrl: './pending-customer-detail.css',
  standalone: true,
  imports: [CustomerDataViewComponent],
})
export class PendingCustomerDetail {
  userId!: number;
  userData: any;
  @ViewChild(CustomerDataViewComponent)
  viewComponent!: CustomerDataViewComponent;
  formData!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _globalService: GlobalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.formData = history.state.id;
  }

  ngAfterViewInit() {
    console.log(history.state.id);
    this.viewComponent.cusomerViewForm.patchValue(history.state.id);
    this.cdr.detectChanges();
  }

  onApprove() {
    this._globalService
      .postToServer('users/approve-customer', this.formData)
      .subscribe((res) => {
        
      });
  }

  onReject() {
    this._globalService
      .postToServer('users/reject-customer', this.formData)
      .subscribe((res) => {
        
      });
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
