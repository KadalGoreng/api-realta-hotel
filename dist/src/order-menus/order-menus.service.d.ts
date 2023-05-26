import { OrderMenus } from '../../output/entities/OrderMenus';
import { Repository } from 'typeorm';
export declare class OrderMenusService {
    private orderMenusRepository;
    constructor(orderMenusRepository: Repository<OrderMenus>);
    findAllOrderMenus(): Promise<any>;
    findOneOrderMenus(orme_id: number): Promise<any>;
    createOrderMenus(data: OrderMenus): Promise<any>;
    updateOrderMenus(id: number, data: OrderMenus): Promise<any>;
    deleteOrderMenus(id: number): Promise<any>;
    findLastOrder(): Promise<any>;
    getIdLast(): Promise<any>;
}
