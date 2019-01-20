import {Component, OnInit} from '@angular/core';
import {ShopsService} from '../../shared/services/shops.service';
import {Shop} from '../../shared/classes/shop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  shops: Shop[];

  constructor(private shopsService: ShopsService) {
  }

  ngOnInit() {
    this.shops = this.shopsService.getShops();
  }

}
