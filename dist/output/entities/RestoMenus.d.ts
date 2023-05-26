import { OrderMenuDetail } from './OrderMenuDetail';
import { RestoMenuPhotos } from './RestoMenuPhotos';
export declare class RestoMenus {
    remeFaciId: number | null;
    remeId: number;
    remeName: string | null;
    remeDescription: string | null;
    remePrice: string | null;
    remeStatus: string | null;
    remeModifiedDate: Date | null;
    orderMenuDetails: OrderMenuDetail[];
    restoMenuPhotos: RestoMenuPhotos[];
}
