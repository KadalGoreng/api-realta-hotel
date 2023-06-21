import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FacilityPhotoService } from './facility-photo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Facilities } from 'output/entities/Facilities';
import { of } from 'rxjs';
import { join } from 'path';

@Controller('/facilityPhoto')
export class FacilityPhotoController {
  constructor(private ServicesFacilityPhoto: FacilityPhotoService) {}

  @Get()
  public async getAll() {
    return await this.ServicesFacilityPhoto.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesFacilityPhoto.findOne(id);
  }

  @Get('/many/:id')
  public async getMany(@Param('id') id: number) {
    return await this.ServicesFacilityPhoto.findMany(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async create(
    @UploadedFile() file,
    @Body()
    createFacilityPhoto: {
      faphoPrimary: boolean;
      faphoUrl: string;
      faphoFaci: Facilities;
    },
  ) {
    return await this.ServicesFacilityPhoto.Upload(file, createFacilityPhoto);
  }

  // @Put('/:faphoId')
  // public async Update(
  //   @Param('faphoId') faphoId: number,
  //   @UploadedFile() file,
  //   @Body()
  //   createFacilityPhoto: {
  //     faphoPrimary: boolean;
  //     faphoUrl: string;
  //     faphoFaci: Facilities;
  //   },
  // ) {
  //   return await this.ServicesFacilityPhoto.Update(
  //     faphoId,
  //     file,
  //     createFacilityPhoto,
  //   );
  // }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body()
    createFacilityPhoto: {
      faphoPrimary: boolean;
    },
  ) {
    return await this.ServicesFacilityPhoto.Update(id, createFacilityPhoto);
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesFacilityPhoto.Delete(id);
  }

  @Get('image/:imagename')
  findImage(@Param('imagename') imagename: any, @Res() res: any) {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }
}
