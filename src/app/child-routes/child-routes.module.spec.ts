import { ChildRoutesModule } from './child-routes.module';

describe('ChildRoutesModule', () => {
  let childRoutesModule: ChildRoutesModule;

  beforeEach(() => {
    childRoutesModule = new ChildRoutesModule();
  });

  it('should create an instance', () => {
    expect(childRoutesModule).toBeTruthy();
  });
});
