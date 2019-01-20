import {Component, OnInit} from '@angular/core';
import {Shop} from '../../shared/classes/shop';
import {ShopsService} from '../../shared/services/shops.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  shop: Shop;
  value: number;
  productsLength: number;

  constructor(private route: ActivatedRoute,
              private shopsService: ShopsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.value = +params.id;
    });
    this.shop = this.shopsService.getById(this.value);
    this.productsLength = this.shop.products.length;
  }

  removeShop(): void {
    this.shopsService.removeShop(this.shop.id);
  }

}
