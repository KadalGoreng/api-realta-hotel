import { Test, TestingModule } from '@nestjs/testing';
import { DephisController } from './dephis.controller';

describe('DephisController', () => {
  let controller: DephisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DephisController],
    }).compile();

    controller = module.get<DephisController>(DephisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
