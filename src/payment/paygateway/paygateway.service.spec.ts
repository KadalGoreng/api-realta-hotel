import { Test, TestingModule } from '@nestjs/testing';
import { PaygatewayService } from './paygateway.service';

describe('PaygatewayService', () => {
  let service: PaygatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaygatewayService],
    }).compile();

    service = module.get<PaygatewayService>(PaygatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
