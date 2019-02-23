import { FlexLayoutModule } from './flex-layout.module';

describe('FlexLayoutModule', () => {
  let flexLayoutModule: FlexLayoutModule;

  beforeEach(() => {
    flexLayoutModule = new FlexLayoutModule();
  });

  it('should create an instance', () => {
    expect(flexLayoutModule).toBeTruthy();
  });
});
