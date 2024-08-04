import { Component, OnInit } from '@angular/core';
import { CityDataServiceService } from '../city-data-service.service';
import { City } from '../cities/cities.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  constructor(private _cityDataService: CityDataServiceService) { }
  city!: City;
  ngOnInit(): void {
    this._cityDataService.getOne("5c8eccc1caa187d17ca6ed17").subscribe(city =>
      this.city = city
    )
  }
}
