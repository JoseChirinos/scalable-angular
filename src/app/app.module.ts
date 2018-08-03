import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ImageAnswerComponent } from './image-answer/image-answer.component';
import { MatButtonModule } from '@angular/material/button';
import { ImageAnswerModule } from './image-answer/image-answer.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, ImageAnswerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
