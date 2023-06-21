import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailExtraController } from './order-detail-extra.controller';

describe('OrderDetailExtraController', () => {
  let controller: OrderDetailExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDetailExtraController],
    }).compile();

    controller = module.get<OrderDetailExtraController>(OrderDetailExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
