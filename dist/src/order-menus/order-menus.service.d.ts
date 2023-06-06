import { OrderMenus } from '../../output/entities/OrderMenus';
import { Repository } from 'typeorm';
import { OrderMenusDTO } from 'output/DTO/order-menu';
import { OrderMenuDetail } from 'output/entities/OrderMenuDetail';
export declare class OrderMenusService {
    private orderMenusRepository;
    private orderMenuDetailRepository;
    constructor(orderMenusRepository: Repository<OrderMenus>, orderMenuDetailRepository: Repository<OrderMenuDetail>);
    findAllOrderMenus(): Promise<any>;
    findOneOrderMenus(orme_id: number): Promise<any>;
    generateUniqueOrderNumber(): Promise<string>;
    createOrderMenus(data: OrderMenusDTO): Promise<any>;
    updateOrderMenus(id: number, data: OrderMenus): Promise<any>;
    deleteOrderMenus(id: number): Promise<any>;
    findLastOrder(): Promise<any>;
    getIdLast(): Promise<any>;
}
