import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatListModule,
  MatTooltipModule,
  MatSelectModule,
  MatRippleModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatRippleModule
  ]
})
export class MaterialModule {}
