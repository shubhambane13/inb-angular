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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _globalService: GlobalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log(history.state.id);
  }

  ngAfterViewInit() {
    console.log(history.state.id);
    this.viewComponent.cusomerViewForm.patchValue(history.state.id);
    this.cdr.detectChanges();
  }

  onApprove() {
    // this.adminService.approveUser(this.userId).subscribe(() => {
    //     alert('User Approved!');
    //     this.router.navigate(['../'], { relativeTo: this.route }); // Go back to grid
    // });
  }

  onReject() {
    // Logic for rejection
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
