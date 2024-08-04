import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ship, ShipResponse } from './ships/ships.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsDataService {
  private apiBaseUrl: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  public getShips(offset: number, limit: number): Observable<ShipResponse> {
    const url: string = this.apiBaseUrl + "/ships?offset=" + offset + "&limit=" + limit;
    return this.http.get<ShipResponse>(url)
  }

  public getShip(shipId: string): Promise<Ship> {
    const url: string = this.apiBaseUrl + "/ships/" + shipId;

    return this.http.get(url).toPromise()
      // .then(response => {console.log(response); response as Ship})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
