import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageAnswerComponent } from './image-answer.component';
import { ImageAnswerService } from './image-answer.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageAnswerComponent,
  ],
  providers: [
    ImageAnswerService,
  ],
  exports: [
    ImageAnswerComponent
  ]
})
export class ImageAnswerModule { }
