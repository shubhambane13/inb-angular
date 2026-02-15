import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDataViewComponent } from '../../../../shared/components/customer-data-view/customer-data-view';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-locked-customer-detail',
  templateUrl: './locked-customer-detail.html',
  styleUrl: './locked-customer-detail.css',
  standalone: true,
  imports: [CustomerDataViewComponent],
})
export class LockedCustomerDetail {
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
    this.viewComponent.cusomerViewForm.patchValue(history.state.id);
    this.cdr.detectChanges();
  }

  onUnlock() {
    this._globalService
      .postToServer('users/unlock-customer', this.formData)
      .subscribe((res) => {
        
      });
  }
  
  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
