import { OrderMenuDetail } from './OrderMenuDetail';
export declare class OrderMenus {
    ormeId: number;
    ormeOrderNumber: string | null;
    ormeOrderDate: Date | null;
    ormeTotalItem: number | null;
    ormeTotalDiscount: string | null;
    ormeTotalAmount: string | null;
    ormePayType: string | null;
    ormeCardnumber: string | null;
    ormeIsPaid: string | null;
    ormeModifiedDate: Date | null;
    ormeUserId: number | null;
    orderMenuDetails: OrderMenuDetail[];
}
