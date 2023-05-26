import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RestoMenusService } from './resto-menus.service';
import { RestoMenus } from '../../output/entities/RestoMenus';

@Controller('resto-menus')
export class RestoMenusController {
  constructor(private readonly restoMenusService: RestoMenusService) {}

  @Get()
  async findAll(): Promise<RestoMenus[]> {
    return this.restoMenusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RestoMenus> {
    return this.restoMenusService.findOne(id);
  }

  @Post()
  async create(@Body() restoMenu: RestoMenus): Promise<RestoMenus> {
    return this.restoMenusService.create(restoMenu);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() restoMenu: RestoMenus) {
    return this.restoMenusService.update(id, restoMenu);
  }
}
