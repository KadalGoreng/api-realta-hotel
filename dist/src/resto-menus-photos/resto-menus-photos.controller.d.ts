import { RestoMenuPhotosService } from '../../src/resto-menus-photos/resto-menus-photos.service';
export declare class RestoMenuPhotosController {
    private readonly restoMenuPhotosService;
    constructor(restoMenuPhotosService: RestoMenuPhotosService);
    findAllRestoMenuPhotos(): Promise<any>;
    findOneRestoMenuPhotos(params: any): Promise<any>;
    createRestoMenuPhotos(body: any): Promise<any>;
    updateRestoMenuPhotos(params: any, body: any): any;
    deleteRestoMenuPhotos(id: any): any;
}
