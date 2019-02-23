import { DateViewerModule } from './date-viewer.module';

describe('DateViewerModule', () => {
  let dateViewerModule: DateViewerModule;

  beforeEach(() => {
    dateViewerModule = new DateViewerModule();
  });

  it('should create an instance', () => {
    expect(dateViewerModule).toBeTruthy();
  });
});
