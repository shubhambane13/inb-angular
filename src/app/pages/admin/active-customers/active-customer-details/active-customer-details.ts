import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CustomerDataViewComponent } from '../../../../shared/components/customer-data-view/customer-data-view';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-active-customer-details',
  templateUrl: './active-customer-details.html',
  styleUrl: './active-customer-details.css',
  standalone: true,
  imports: [CustomerDataViewComponent],
})
export class ActiveCustomerDetails {
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
    this.formData = history.state.id
  }

  ngAfterViewInit() {
    this.viewComponent.cusomerViewForm.patchValue(history.state.id);
    this.cdr.detectChanges();
  }

  onLock() {
    this._globalService
      .postToServer('users/lock-customer', this.formData)
      .subscribe((res) => {
        
      });
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
