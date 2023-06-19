import { Controller, Get } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private Services: FacilitiesService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }
}
