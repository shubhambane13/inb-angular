import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable, shareReplay } from 'rxjs';
import { DropdownElementDto, DropdownRequestDto } from '../constants/interfaces';
import { AppConfigService } from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // url = "http://localhost:6969/";


  static AUTH_TOKEN:string = "";
  static USER:any = {};
  private dropDownCache = new Map<string, Observable<DropdownElementDto[]>>();

  constructor(private _http: HttpClient,private spinnerService: NgxSpinnerService, private _configService:AppConfigService) {}

  postToServer(endpoint: string, data: any, spinner: boolean = true): Observable<any> {
    
    // 1. Show Spinner (Only if requested)
    if (spinner) {
      this.spinnerService.show();
    }

    return this._http.post(this._configService.apiUrl + endpoint, data).pipe(
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

  // caching the drop-down to optimize api calls
  getDropdowns(request: DropdownRequestDto): Observable<DropdownElementDto[]> {
    // 1. Create a unique string key based on the request payload
    // Example: 'account_type_C_null_null'
    const cacheKey = `${request.elementId}_${request.filter1}_${request.filter2}_${request.filter3}`;

    // 2. Check if we already made this exact API call
    if (!this.dropDownCache.has(cacheKey)) {
      
      // 3. If not, make the HTTP call
      const response$ = this._http.post<DropdownElementDto[]>(this._configService.apiUrl + "api/dropdowns/fetch", request).pipe(
        // MAGIC HAPPENS HERE: shareReplay(1) stores the last emitted value 
        // and instantly gives it to any future subscribers without making a new HTTP call.
        shareReplay(1) 
      );

      // 4. Store the Observable in the cache Map
      this.dropDownCache.set(cacheKey, response$);
      console.log(`[Cache Miss] API called for: ${cacheKey}`);
    } else {
      console.log(`[Cache Hit] Returning memory data for: ${cacheKey}`);
    }

    // 5. Return the cached Observable
    return this.dropDownCache.get(cacheKey)!;
  }

  /**
   * Optional: Call this if you need to force-refresh the dropdowns 
   * (e.g., when a user logs out so the next user gets fresh data).
   */
  clearCache(): void {
    this.dropDownCache.clear();
    console.log('Dropdown cache cleared.');
  }
}
