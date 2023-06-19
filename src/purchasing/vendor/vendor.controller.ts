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
// import { StocksService } from './stocks.service';
import { VendorService } from './vendor.service';
import {
  CreateVendorDto,
  PaginationOptions,
  UpdateVendorDto,
} from './vendor.dto';

@Controller('vendor')
export class VendorController {
  constructor(private Services: VendorService) {}

  @Get()
  public async getAll(@Query() query: PaginationOptions) {
    const { vendorName, status, page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.get(vendorName, status, options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(@Body() createVendorDto: CreateVendorDto) {
    return await this.Services.Create(createVendorDto);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body() updateVendorDto: UpdateVendorDto,
  ) {
    return await this.Services.Update(id, updateVendorDto);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
