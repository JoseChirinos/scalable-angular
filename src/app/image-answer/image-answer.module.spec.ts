import { ImageAnswerModule } from './image-answer.module';

describe('ImageAnswerModule', () => {
  let imageAnswerModule: ImageAnswerModule;

  beforeEach(() => {
    imageAnswerModule = new ImageAnswerModule();
  });

  it('should create an instance', () => {
    expect(imageAnswerModule).toBeTruthy();
  });
});
