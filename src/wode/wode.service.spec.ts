import { Test, TestingModule } from '@nestjs/testing';
import { WodeService } from './wode.service';

describe('WodeService', () => {
  let service: WodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WodeService],
    }).compile();

    service = module.get<WodeService>(WodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
