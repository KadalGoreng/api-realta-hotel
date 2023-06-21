import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryGroupService } from './category-group.service';
import { CreateCategoryGroupDto } from './category-group.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('categoryGroup')
export class CategoryGroupController {
  constructor(private ServicesCategoryGroup: CategoryGroupService) {}
  @Get()
  public async getAll() {
    return await this.ServicesCategoryGroup.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async create(
    @UploadedFile() file,
    @Body()
    categoryGroupDto: CreateCategoryGroupDto,
    @Body('poliId')
    poliId: number,
  ) {
    return await this.ServicesCategoryGroup.create(
      file,
      categoryGroupDto,
      poliId,
    );
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  public async update(
    @Param('id') id: number,
    @UploadedFile() file,
    @Body()
    categoryGroupDto: CreateCategoryGroupDto,
  ) {
    return await this.ServicesCategoryGroup.update(id, file, categoryGroupDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.ServicesCategoryGroup.delete(id);
  }
}
