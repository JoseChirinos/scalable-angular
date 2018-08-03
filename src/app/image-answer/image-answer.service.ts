import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ImageAnswerService {
  constructor(private http: HttpClient) {}
  fetchImage() {
    return this.http.get<ImageAnswer>('https://yesno.wtf/api');
  }
}
