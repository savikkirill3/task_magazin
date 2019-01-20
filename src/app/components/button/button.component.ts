import { Component, OnInit } from '@angular/core';
import {AddShopDialogComponent} from './add-shop-dialog/add-shop-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  onAddShop(): void {
    this.matDialog.open(AddShopDialogComponent);
  }
}
