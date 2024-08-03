import { Component, OnInit } from '@angular/core';
import { LaureatesDataServiceService } from '../laureates-data-service.service';

export class Laureates {
  #_id!: String;

  get _id() { return this.#_id };
}
@Component({
  selector: 'app-laureates',
  standalone: true,
  imports: [],
  templateUrl: './laureates.component.html',
  styleUrl: './laureates.component.css'
})
export class LaureatesComponent implements OnInit {
  _laureates!: Laureates[];

  constructor(private _laureatesDataService: LaureatesDataServiceService) { }

  ngOnInit(): void {
    this._laureates = this._laureatesDataService.getAll().subscribe();

  }

}
