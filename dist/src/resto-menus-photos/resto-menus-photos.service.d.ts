import { Repository } from 'typeorm';
import { RestoMenuPhotos } from '../../output/entities/RestoMenuPhotos';
export declare class RestoMenuPhotosService {
    private restoMenusPhotosRepository;
    constructor(restoMenusPhotosRepository: Repository<RestoMenuPhotos>);
    findAllRestoMenuPhotos(): Promise<any>;
    findOneRestoMenuPhotos(remp_id: number): Promise<any>;
    createRestoMenusPhotos(data: RestoMenuPhotos): Promise<any>;
    updateRestoMenuPhotos(id: number, data: RestoMenuPhotos): Promise<any>;
    deleteRestoMenuPhotos(id: number): Promise<any>;
}
