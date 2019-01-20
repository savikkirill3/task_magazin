import {Injectable} from '@angular/core';
import {Shop} from '../classes/shop';
import {Product} from '../classes/product';

@Injectable()
export class ShopsService {

  private products: Product[] = [];

  constructor() {
  }

  public addShop(id: number, name: string, address: string, starttime: string, endtime: string): void {
    let shop = new Shop(id, name, address, starttime, endtime, this.products);
    let shops = this.getShops();
    shops.push(shop);

    this.setLocalStorageShops(shops);
  }

  public getShops(): Shop[] {
    const localStorageItem = JSON.parse(localStorage.getItem('shops'));
    return localStorageItem == null ? [] : localStorageItem.shops;
  }

  public removeShop(id: number): void {
    let shops = this.getShops();
    shops = shops.filter((shop) => shop.id !== id);
    this.setLocalStorageShops(shops);
  }

  public getById(id: number): Shop {
    let shops = this.getShops();
    let shop = shops.filter((shop) => shop.id === id)[0];
    return shop;
  }

  private setLocalStorageShops(shops: Shop[]): void {
    localStorage.setItem('shops', JSON.stringify({shops: shops}));
  }
}
