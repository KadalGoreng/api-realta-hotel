import { Test, TestingModule } from '@nestjs/testing';
import { WoroService } from './woro.service';

describe('WoroService', () => {
  let service: WoroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WoroService],
    }).compile();

    service = module.get<WoroService>(WoroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
