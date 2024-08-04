import { Component, OnInit } from '@angular/core';
import { CityDataServiceService } from '../city-data-service.service';
import { City } from '../cities/cities.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  constructor(private _cityDataService: CityDataServiceService, private _activatedRoute: ActivatedRoute) { }
  city!: City;
  ngOnInit(): void {
    const cityId: String = this._activatedRoute.snapshot.params["id"]
    this._cityDataService.getOne(cityId).subscribe(city => {
      this.city = city

    })
  }
}
