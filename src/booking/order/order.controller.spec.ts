import { Test, TestingModule } from '@nestjs/testing';
import { BookingOrderController } from './order.controller';

describe('OrderController', () => {
  let controller: BookingOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingOrderController],
    }).compile();

    controller = module.get<BookingOrderController>(BookingOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
