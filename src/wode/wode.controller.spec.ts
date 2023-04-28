import { Test, TestingModule } from '@nestjs/testing';
import { WodeController } from './wode.controller';

describe('WodeController', () => {
  let controller: WodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WodeController],
    }).compile();

    controller = module.get<WodeController>(WodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
