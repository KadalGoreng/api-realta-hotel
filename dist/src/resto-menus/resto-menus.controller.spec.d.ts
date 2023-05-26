import { RestoMenusService } from './resto-menus.service';
import { RestoMenus } from '../../output/entities/RestoMenus';
export declare class RestoMenusController {
    private readonly restoMenusService;
    constructor(restoMenusService: RestoMenusService);
    findAll(): Promise<RestoMenus[]>;
    findOne(id: string): Promise<RestoMenus>;
    create(restoMenu: RestoMenus): Promise<RestoMenus>;
    update(id: string, restoMenu: RestoMenus): Promise<import("typeorm").UpdateResult>;
}
