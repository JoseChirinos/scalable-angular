import { Component, OnInit } from '@angular/core';
import { ImageAnswerService } from './image-answer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-answer',
  templateUrl: './image-answer.component.html',
  styleUrls: ['./image-answer.component.css']
})
export class ImageAnswerComponent implements OnInit {

  data$: Observable<ImageAnswer>;
  aswer: String = '';
  constructor( private imageService: ImageAnswerService ) {}
  fetchImage() {
    this.data$ = this.imageService.fetchImage();
  }

  ngOnInit() {
  }

}
