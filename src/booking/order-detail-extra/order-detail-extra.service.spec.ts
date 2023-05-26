import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailExtraService } from './order-detail-extra.service';

describe('OrderDetailExtraService', () => {
  let service: OrderDetailExtraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDetailExtraService],
    }).compile();

    service = module.get<OrderDetailExtraService>(OrderDetailExtraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
