import { CompartidoModule } from './compartido.module';

describe('CompartidoModule', () => {
  let compartidoModule: CompartidoModule;

  beforeEach(() => {
    compartidoModule = new CompartidoModule();
  });

  it('should create an instance', () => {
    expect(compartidoModule).toBeTruthy();
  });
});
