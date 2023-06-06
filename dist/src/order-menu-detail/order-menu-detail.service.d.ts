import { Repository } from 'typeorm';
import { OrderMenuDetail } from '../../output/entities/OrderMenuDetail';
import { CreateOrderMenuDetailDto } from 'output/DTO/create-order-menu-details';
export declare class OrderMenuDetailService {
    private orderMenuDetailRepository;
    constructor(orderMenuDetailRepository: Repository<OrderMenuDetail>);
    findAllOrderMenuDetail(): Promise<any>;
    findOneOrderMenuDetail(omde_id: number): Promise<any>;
    createOrderMenusDetail(data: CreateOrderMenuDetailDto[]): Promise<OrderMenuDetail[]>;
    updateOrdeMenuDetail(id: number, data: OrderMenuDetail): Promise<any>;
    deleteOrdeMenuDetail(id: number): Promise<any>;
}
