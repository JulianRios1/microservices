import { Test, TestingModule } from '@nestjs/testing';
import { TaksServiceController } from './taks-service.controller';
import { TaksServiceService } from './taks-service.service';

describe('TaksServiceController', () => {
  let taksServiceController: TaksServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaksServiceController],
      providers: [TaksServiceService],
    }).compile();

    taksServiceController = app.get<TaksServiceController>(TaksServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taksServiceController.getHello()).toBe('Hello World!');
    });
  });
});
