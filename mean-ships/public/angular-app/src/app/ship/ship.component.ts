import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipsDataService } from '../ships-data.service';
import { Ship } from '../ships/ships.component';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  // ship:Ship= new Ship({_id: "123", shipId: "123", location: {address: {street1: "", city: "", state: "", zip: ""}, geo: {}}});
  ship:Ship= new Ship();
  constructor(private shipService: ShipsDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const shipId: string= this.route.snapshot.params["shipId"];
    this.shipService.getShip(shipId).then(response => this.fillShipFromService(response));
  }

  private fillShipFromService(ship: Ship): void {
    this.ship= ship;
  }

}
