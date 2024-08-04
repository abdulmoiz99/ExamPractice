import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-geo-search',
  templateUrl: './geo-search.component.html',
  styleUrls: ['./geo-search.component.css'],
})
export class GeoSearchComponent implements OnInit {
  searchForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      latitude: new FormControl,
      longitude: new FormControl,
      distance: new FormControl,
    })
  }
  public search(form: FormGroup): void {
    console.log("search click")
  }
}
