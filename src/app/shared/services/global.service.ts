import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = "http://localhost:6969/";

  static AUTH_TOKEN:string = "";
  static USER:any = {};

  constructor(private _http: HttpClient,private spinnerService: NgxSpinnerService) {}

  postToServer(endpoint: string, data: any, spinner: boolean = true): Observable<any> {
    
    // 1. Show Spinner (Only if requested)
    if (spinner) {
      this.spinnerService.show();
    }

    return this._http.post(this.url + endpoint, data).pipe(
      // 2. Hide Spinner (Always runs on Success AND Error)
      finalize(() => {
        if (spinner) {
          this.spinnerService.hide();
        }
      })
    );
  }
  
  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000); // 5 seconds
  }
}
