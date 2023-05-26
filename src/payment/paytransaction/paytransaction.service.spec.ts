import { Test, TestingModule } from '@nestjs/testing';
import { PaytransactionService } from './paytransaction.service';

describe('PaytransactionService', () => {
  let service: PaytransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaytransactionService],
    }).compile();

    service = module.get<PaytransactionService>(PaytransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
