import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopsService} from '../../../shared/services/shops.service';

@Component({
  selector: 'app-add-shop-dialog',
  templateUrl: './add-shop-dialog.component.html',
  styleUrls: ['./add-shop-dialog.component.css']
})
export class AddShopDialogComponent implements OnInit {

  form: FormGroup;
  private nextId: number;

  constructor(private fb: FormBuilder,
              private shopsService: ShopsService) {
  }

  ngOnInit() {
    const shops = this.shopsService.getShops();

    if (shops.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = shops[shops.length - 1].id;
      this.nextId = maxId + 1;
    }

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      starttime: ['', [Validators.required]],
      endtime: ['', [Validators.required]]
    });
  }

  addShop(value) {
    console.log(value);
    this.shopsService.addShop(this.nextId, value.name, value.address, value.starttime, value.endtime);
  }

}
