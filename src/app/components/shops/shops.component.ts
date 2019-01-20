import {Component, Input, OnInit} from '@angular/core';
import {Shop} from '../../shared/classes/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  @Input()
  private shop: Shop;

  constructor() {
  }

  ngOnInit() {
  }

}
