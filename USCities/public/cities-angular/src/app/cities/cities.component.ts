import { Component, OnInit } from '@angular/core';
import { CityDataServiceService } from '../city-data-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export class CitiesResponse {
  #totalCount!: number;
  #cities!: [City]
  get totalCount() { return this.#totalCount; }
  get cities() { return this.#cities; }

}
export class City {
  #_id!: String;
  #city!: String;
  #zip!: String;
  #pop!: String;
  #state!: String;
  #loc!: [String];


  get _id() { return this.#_id; }
  get city() { return this.#city; }
  get zip() { return this.#zip; }
  get pop() { return this.#pop; }
  get state() { return this.#state; }
  get loc() { return this.#loc; }

}
@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {

  CitiesResponse!: CitiesResponse;
  offset: number = 0;

  isNextDisable: Boolean = false;
  isPreviousDisable: Boolean = true;


  constructor(private _cityDataService: CityDataServiceService) { }

  private getCitiesData(): void {
    this._cityDataService.getAll(this.offset).subscribe(cities => {
      this.CitiesResponse = cities;
    });
  }
  private updatePageData(): void {
    this.getCitiesData();
    this.updateButtons();
  }
  ngOnInit(): void {
    this.updatePageData();
  }
  private updateButtons(): void {
    this.isPreviousDisable = this.offset == 0
    this.isNextDisable = this.CitiesResponse.totalCount < this.offset + 10

  }
  public nextCities(): void {
    console.log("nextCities")
    if (!this.isNextDisable) {
      this.offset += 10;
      this.updatePageData();
    }
  }
  public previousCities() {
    console.log("p cities")
    if (!this.isPreviousDisable) {
      this.offset -= 10;
      this.updatePageData()
    }
  }
}
