import { Test, TestingModule } from '@nestjs/testing';
import { PaygatewayController } from './paygateway.controller';

describe('PaygatewayController', () => {
  let controller: PaygatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaygatewayController],
    }).compile();

    controller = module.get<PaygatewayController>(PaygatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
