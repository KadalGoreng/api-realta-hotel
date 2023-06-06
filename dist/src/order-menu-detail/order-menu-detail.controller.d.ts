import { OrderMenuDetailService } from './order-menu-detail.service';
export declare class OrderMenuDetailController {
    private readonly orderMenuDetailService;
    constructor(orderMenuDetailService: OrderMenuDetailService);
    findAllOrderMenuDetail(): Promise<any>;
    findOneOrderMenuDetail(params: any): Promise<any>;
    createOrderMenuDetail(body: any): Promise<any>;
    updateOrderMenuDetail(params: any, body: any): any;
    deleteOrderMenuDetail(params: any): any;
}
