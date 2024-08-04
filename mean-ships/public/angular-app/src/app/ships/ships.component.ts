import { Component, OnInit } from '@angular/core';
import { ShipsDataService } from '../ships-data.service';

export class ShipResponse {
  #totalCount!: number;
  #ships!: Ship[];

  get totalCount() { return this.#totalCount; }
  get ships() { return this.#ships; }

}

export class Ship {
  #_id!: string;
  #vesslterms!: string;
  #feature_type!: string;
  #chart!: string;
  #latdec!: number;
  #londec!: number;
  #depth!: number;
  #sounding_type!: string;
  #history!: string;
  #quasou!: string;
  #watlev!: string;
  #coordinates!: number[];

  get _id() { return this.#_id; }
  get vesslterms() { return this.#vesslterms; }
  get feature_type() { return this.#feature_type; }
  get chart() { return this.#chart; }
  get latdec() { return this.#latdec; }
  get londec() { return this.#londec; }
  get depth() { return this.#depth; }
  get sounding_type() { return this.#sounding_type; }
  get history() { return this.#history; }
  get quasou() { return this.#quasou; }
  get watlev() { return this.#watlev; }
  get coordinates() { return this.#coordinates; }

  set _id(id) { this.#_id = id; }
  set vesslterms(vesslterms) { this.#vesslterms = vesslterms; }
  set feature_type(feature_type) { this.#feature_type = feature_type; }
  set chart(chart) { this.#chart = chart; }
  set latdec(latdec) { this.#latdec = latdec; }
  set londec(londec) { this.#londec = londec; }
  set depth(depth) { this.#depth = depth; }
  set sounding_type(sounding_type) { this.#sounding_type = sounding_type; }
  set history(history) { this.#history = history; }
  set quasou(quasou) { this.#quasou = quasou; }
  set watlev(watlev) { this.#watlev = watlev; }
  set coordinates(coordinates) { this.#coordinates = coordinates; }
}

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  shipResponse!: ShipResponse;
  isPreviousDisable: boolean = true;
  isNextDisable: boolean = false;
  limit: number = 5;
  offset: number = 0;

  constructor(private shipService: ShipsDataService) { }

  ngOnInit(): void {
    this.updatePageData();
  }
  private updateButtons() {
    this.isPreviousDisable = this.offset == 0
    this.isNextDisable = this.shipResponse.totalCount < this.offset + this.limit;
  }
  private fillShipsFromService(ShipResponse: ShipResponse) {
    this.shipResponse = ShipResponse;
  }
  private getShipResponse() {
    this.shipService.getShips(this.offset, this.limit).subscribe(response => this.fillShipsFromService(response));

  }
  private updatePageData() {
    this.getShipResponse();
    this.updateButtons();

  }
  public onNextClick() {
    if (!this.isNextDisable) {
      this.offset += this.limit;
      this.updatePageData();
    }
  }

  public onPrevClick() {
    if (!this.isPreviousDisable) {
      this.offset -= this.limit;
      this.updatePageData()
    }
  }
  public onLimitChange(event: any) {
    this.limit = event.target.value
    this.updatePageData()
  }
}
