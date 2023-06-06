import { Repository } from 'typeorm';
import { RestoMenus } from '../../output/entities/RestoMenus';
export declare class RestoMenusService {
    private readonly restoMenusRepository;
    constructor(restoMenusRepository: Repository<RestoMenus>);
    findAll(): Promise<RestoMenus[]>;
    findMany(pattern: any): Promise<RestoMenus[]>;
    findOne(id: string): Promise<RestoMenus>;
    create(restoMenu: RestoMenus): Promise<RestoMenus>;
    update(id: string, restoMenu: any): Promise<import("typeorm").UpdateResult>;
}
