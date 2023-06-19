import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VendorProductService } from './vendor-product.service';
import {
  CreateVendorProductDto,
  PaginationOptions,
  UpdateVendorProductDto,
  filterVendorProductDto,
} from './vendor-product.dto';

@Controller('vendorproduct')
export class VendorProductController {
  constructor(private Services: VendorProductService) {}

  @Get()
  public async getAll(@Query() filterVendorProductDto: filterVendorProductDto) {
    return await this.Services.get(filterVendorProductDto);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Get('vendor/:id')
  public async getOneByStockId(
    @Param('id') id: string,
    @Query() query: PaginationOptions,
  ) {
    const { page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };
    return await this.Services.findOneByVendorId(id, options);
  }

  @Post()
  public async Create(@Body() createVendorProductDto: CreateVendorProductDto) {
    return await this.Services.Create(createVendorProductDto);
  }

  @Put(':veproId')
  public async Update(
    @Param('veproId') veproId: number,
    @Body() updateVendorProductDto: UpdateVendorProductDto,
  ) {
    return await this.Services.Update(veproId, updateVendorProductDto);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
