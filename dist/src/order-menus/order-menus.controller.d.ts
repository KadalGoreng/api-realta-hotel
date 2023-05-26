import { OrderMenusService } from './order-menus.service';
export declare class OrderMenusController {
    private readonly orderMenusService;
    constructor(orderMenusService: OrderMenusService);
    findlastOrderMenus(): Promise<any>;
    getIdLast(): Promise<any>;
    findAllOrderMenus(): Promise<any>;
    findOneOrderMenus(Params: any): Promise<any>;
    createOrderMenus(body: any): void;
    updateOrderMenus(params: any, body: any): any;
    deleteOrderMenus(params: any): any;
}
