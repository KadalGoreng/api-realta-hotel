import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Facilities } from 'output/entities/Facilities';
import { CreateFacilitiesDto, UpdateFacilitiesDto } from './facilities.dto';

@Controller('/facilities')
export class FacilitiesController {
  constructor(private ServicesFacilities: FacilitiesService) {}

  @Get()
  public async getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('id') id: number,
  ): Promise<Pagination<Facilities>> {
    limit = limit > 100 ? 100 : limit;
    return this.ServicesFacilities.findAll(
      {
        page,
        limit,
      },
      id,
    );
  }

  // @Get()
  // public async getAll() {
  //   return await this.ServicesFacilities.findAll();
  // }

  @Get('hotel/:id')
  public async getFacilityByHotel(@Param('id') id: number) {
    return await this.ServicesFacilities.find(id);
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesFacilities.findOne(id);
  }

  @Post()
  public async Create(@Body() createFacilitiesDto: CreateFacilitiesDto) {
    return await this.ServicesFacilities.Create(createFacilitiesDto);
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body() updateFacilitiesDto: UpdateFacilitiesDto,
  ) {
    return await this.ServicesFacilities.Update(id, updateFacilitiesDto);
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesFacilities.Delete(id);
  }
}
