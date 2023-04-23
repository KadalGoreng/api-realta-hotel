import { Test, TestingModule } from '@nestjs/testing';
import { PaytransactionController } from './paytransaction.controller';

describe('PaytransactionController', () => {
  let controller: PaytransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaytransactionController],
    }).compile();

    controller = module.get<PaytransactionController>(PaytransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
