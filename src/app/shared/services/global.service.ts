import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = "http://localhost:6969/";

  constructor(private _http: HttpClient) {}

  postToServer(endpoint:string, payload:any):Observable<Object> {
    return this._http.post(this.url + endpoint, payload);
  }
}
