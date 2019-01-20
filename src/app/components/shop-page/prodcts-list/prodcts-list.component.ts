import {Component, Input, OnInit} from '@angular/core';
import {Shop} from '../../../shared/classes/shop';

@Component({
  selector: 'app-prodcts-list',
  templateUrl: './prodcts-list.component.html',
  styleUrls: ['./prodcts-list.component.css']
})
export class ProdctsListComponent implements OnInit {

  @Input()
  private shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
