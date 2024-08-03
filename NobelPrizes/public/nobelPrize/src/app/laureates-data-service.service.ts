import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laureates } from './laureates/laureates.component';

@Injectable({
  providedIn: 'root'
})
export class LaureatesDataServiceService {

  constructor(private _httpClient: HttpClient) { }


  public getAll(): Observable<Laureates[]> {
    console.log("Service is called");

    return this._httpClient.get<Laureates[]>("http://localhost:3000/laureates");
  }
}
