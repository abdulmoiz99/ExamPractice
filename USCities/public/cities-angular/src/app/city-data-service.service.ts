import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './cities/cities.component';

@Injectable({
  providedIn: 'root'
})
export class CityDataServiceService {

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<City[]> {
    return this._httpClient.get<City[]>("http://localhost:3000/cities");
  }
  public getOne(cityId: String): Observable<City> {
    return this._httpClient.get<City>("http://localhost:3000/cities/" + cityId);
  }
}
