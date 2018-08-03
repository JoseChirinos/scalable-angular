import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAnswerComponent } from './image-answer.component';

describe('ImageAnswerComponent', () => {
  let component: ImageAnswerComponent;
  let fixture: ComponentFixture<ImageAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
