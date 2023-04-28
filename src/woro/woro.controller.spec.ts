import { Test, TestingModule } from '@nestjs/testing';
import { WoroController } from './woro.controller';

describe('WoroController', () => {
  let controller: WoroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WoroController],
    }).compile();

    controller = module.get<WoroController>(WoroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
