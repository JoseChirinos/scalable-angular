import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule
  ],
  providers: [
  ],
  declarations: []
})
export class MaterialModule { }
