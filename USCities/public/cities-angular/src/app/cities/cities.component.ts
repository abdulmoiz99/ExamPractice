import { Component, OnInit } from '@angular/core';
import { CityDataServiceService } from '../city-data-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  cities: City[] = [];

  constructor(private _cityDataService: CityDataServiceService) { }

  ngOnInit(): void {
    this._cityDataService.getAll().subscribe(cities => {
      console.log(cities)
      this.cities = cities;
    });
  }

}
