import {Component, OnInit} from '@angular/core';
import {MapsService} from '../../shared/services/maps.service';
import {ShopsService} from '../../shared/services/shops.service';
import {Shop} from '../../shared/classes/shop';
import {Location, Position} from '../../shared/classes/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 53.902;
  lng: number = 27.56126207625948;
  zoom: number = 11;
  shops: Shop[];
  locations: Location[] = [];

  constructor(private map: MapsService,
              private shop: ShopsService) {
  }

  ngOnInit() {
    this.shops = this.shop.getShops();
    for (let i = 0; i < this.shops.length; i++) {
      const location: Location = {
        name: '',
        position: {lat: '', lng: ''}
      };
      location.name = this.shops[i].name;
      this.map.getLocation(this.shops[i].address).subscribe(result => {
        let res: any = result;
        location.position = res.results[0].geometry.location;
      });

      this.locations.push(location);
    }
  }
}
