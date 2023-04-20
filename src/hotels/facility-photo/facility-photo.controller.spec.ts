import { Test, TestingModule } from '@nestjs/testing';
import { FacilityPhotoController } from './facility-photo.controller';

describe('FacilityPhotoController', () => {
  let controller: FacilityPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilityPhotoController],
    }).compile();

    controller = module.get<FacilityPhotoController>(FacilityPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
