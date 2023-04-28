import { Test, TestingModule } from '@nestjs/testing';
import { DephisService } from './dephis.service';

describe('DephisService', () => {
  let service: DephisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DephisService],
    }).compile();

    service = module.get<DephisService>(DephisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
