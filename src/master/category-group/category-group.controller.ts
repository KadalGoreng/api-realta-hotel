import { Controller, Get } from '@nestjs/common';
import { CategoryGroupService } from './category-group.service';

@Controller('categoryGroup')
export class CategoryGroupController {
  constructor(private ServicesCategoryGroup: CategoryGroupService) {}
  @Get()
  public async getAll() {
    return await this.ServicesCategoryGroup.findAll();
  }
}
