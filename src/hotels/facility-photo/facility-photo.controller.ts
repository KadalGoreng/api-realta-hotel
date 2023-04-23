import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FacilityPhotoService } from './facility-photo.service';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('/upload')
  @UseInterceptors(FileInterceptor('files'))
  public async upload(
    @UploadedFiles() files,
    @Body()
    body: { faphoThumbnailFilename: string; faphoPhotoFilename: string },
  ) {
    const { faphoThumbnailFilename, faphoPhotoFilename } = body;
    return await this.ServicesFacilityPhoto.Upload(files);
  }

  @Post()
  public async Create(
    @Body('faphoId') faphoId,
    @Body('faphoFaciId') faphoFaciId: number,
    @Body('faphoPrimary') faphoPrimary: boolean,
    @Body('faphoUrl') faphoUrl: string,
    @Body('faphoModifiedDate') faphoModifiedDate: Date = new Date(),
  ) {
    return await this.ServicesFacilityPhoto.Create(
      faphoId,
      faphoFaciId,
      faphoPrimary,
      faphoUrl,
      faphoModifiedDate,
    );
  }

  @Put('/:faphoId')
  public async Update(
    @Param('faphoId') faphoId: number,
    @Body('faphoThumbnailFilename') faphoThumbnailFilename: string,
    @Body('faphoPhotoFilename') faphoPhotoFilename: string,
    @Body('faphoPrimary') faphoPrimary: boolean,
    @Body('faphoUrl') faphoUrl: string,
    @Body('faphoModifiedDate') faphoModifiedDate: Date = new Date(),
  ) {
    return await this.ServicesFacilityPhoto.Update(
      faphoId,
      faphoThumbnailFilename,
      faphoPhotoFilename,
      faphoPrimary,
      faphoUrl,
      faphoModifiedDate,
    );
  }
  @Delete('/:id')
  public async Delete(@Param('id') id: string) {
    return await this.ServicesFacilityPhoto.Delete(id);
  }
}
