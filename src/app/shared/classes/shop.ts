import {Product} from './product';

export class Shop {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public start: string,
    public end: string,
    public products?: Product[],
  ) {}
}
